/* ============================================================
   Ocsus — PERSISTÊNCIA LOCAL (localStorage)
   Grimório de rituais salvos 100% offline
   ============================================================ */

const STORAGE_KEY = 'Ocsus_limiares_grimoire_v1';
const SETTINGS_KEY = 'Ocsus_limiares_settings_v1';
const BRAIN_KEY = 'Ocsus_limiares_brain_v1';

const Brain = {
    all() {
        try {
            const raw = localStorage.getItem(BRAIN_KEY);
            if (!raw) return { rituals: [], enxertos: [] };
            const parsed = JSON.parse(raw);
            return {
                rituals: Array.isArray(parsed.rituals) ? parsed.rituals : [],
                enxertos: Array.isArray(parsed.enxertos) ? parsed.enxertos : []
            };
        } catch (e) {
            console.error('[Brain] erro ao ler:', e);
            return { rituals: [], enxertos: [] };
        }
    },

    save(store) {
        localStorage.setItem(BRAIN_KEY, JSON.stringify(store));
        return store;
    },

    buildKeywords(text) {
        const lowercase = String(text || '').toLowerCase();
        const keywords = [
            'olho','selo','runa','fogo','portal','véu','alma','sombra','pacto','raio','tempestade',
            'memória','neural','sangue','dimensão','espírito','carne','plasma','cicatriz','veneno',
            'vácuo','energia','poder','símbolo','glifo','marca','contrato','cha','chama','névoa'
        ];
        return keywords.filter(k => lowercase.includes(k));
    },

    rememberRitual(ritual) {
        const store = this.all();
        const entry = {
            id: ritual.id || `ritual_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            name: ritual.name || 'Ritual sem nome',
            pillars: Array.isArray(ritual.pillars) ? ritual.pillars : [ritual.pillar || 'pinaculo'],
            grade: ritual.grade || 1,
            paradigm: ritual.paradigm || 'hermetico',
            effect: ritual.effect || '',
            backlash: ritual.backlash || '',
            keywords: this.buildKeywords(`${ritual.name} ${ritual.effect} ${ritual.backlash}`),
            createdAt: ritual.createdAt || Date.now()
        };
        const index = store.rituals.findIndex(r => r.id === entry.id);
        if (index >= 0) store.rituals[index] = entry;
        else store.rituals.unshift(entry);
        this.save(store);
        return entry;
    },

    rememberEnxerto(enxerto) {
        const store = this.all();
        const pillars = Array.isArray(enxerto.pillars) ? enxerto.pillars : [enxerto.pillar || 'pinaculo'];
        const primary = pillars[0] || 'pinaculo';
        const entry = {
            id: enxerto.id || `enxerto_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            name: enxerto.name || 'Enxerto Anômalo',
            category: enxerto.category || 'Desconhecida',
            pillar: primary,
            pillars,
            type: enxerto.type || 'Genérico',
            ch: enxerto.ch || 1,
            effect: enxerto.effect || '',
            detail: enxerto.detail || '',
            keywords: this.buildKeywords(`${enxerto.name} ${enxerto.effect} ${enxerto.detail}`),
            createdAt: enxerto.createdAt || Date.now()
        };
        const index = store.enxertos.findIndex(e => e.id === entry.id);
        if (index >= 0) store.enxertos[index] = entry;
        else store.enxertos.unshift(entry);
        this.save(store);
        return entry;
    },

    suggestRitualName(pillars, seed) {
        const list = normalizePillars(pillars);
        const pool = this.all().rituals.filter(r => r.pillars.some(p => list.includes(p)));
        if (!pool.length) return null;
        return pool[hashSeed(String(seed) + 'name') % pool.length].name;
    },

    suggestEffect(pillars, grade, paradigm, seed) {
        const list = normalizePillars(pillars);
        const rituals = this.all().rituals;
        if (!rituals.length) return null;

        const scored = rituals.map(item => {
            let score = 0;
            if (item.grade === grade) score += 4;
            if (item.paradigm === paradigm) score += 3;
            const overlap = item.pillars.filter(p => list.includes(p)).length;
            score += overlap * 2;
            return { item, score };
        }).sort((a, b) => b.score - a.score);

        const candidate = (scored[0] && scored[0].score > 0) ? scored[0].item : null;
        return candidate ? Object.assign({ source: 'memory' }, candidate) : null;
    },

    suggestEnxerto(draft) {
        const store = this.all();
        const pillars = Array.isArray(draft.pillars) ? draft.pillars : [draft.pillar];
        const candidates = store.enxertos.filter(item => {
            const itemPillars = Array.isArray(item.pillars) ? item.pillars : [item.pillar];
            return item.category === draft.category || itemPillars.some(p => pillars.includes(p));
        });
        if (!candidates.length) return null;
        return candidates[hashSeed(String(draft.name || draft.category || draft.pillar || Date.now()) + 'enx') % candidates.length];
    },

    stats() {
        const store = this.all();
        const byPillar = { forma: 0, tabula: 0, primordio: 0, pinaculo: 0, eter: 0 };
        store.enxertos.forEach(e => {
            const pillars = Array.isArray(e.pillars) ? e.pillars : [e.pillar];
            pillars.forEach(p => {
                if (byPillar[p] !== undefined) byPillar[p]++;
            });
        });
        const byCategory = store.enxertos.reduce((acc, e) => {
            acc[e.category] = (acc[e.category] || 0) + 1;
            return acc;
        }, {});
        return {
            totalRituals: store.rituals.length,
            totalEnxertos: store.enxertos.length,
            byPillar,
            byCategory
        };
    }
};

const Grimoire = {
    /** Retorna todos os rituais salvos */
    all() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error('[Grimoire] erro ao ler:', e);
            return [];
        }
    },
    
    /** Salva um novo ritual; gera id se não tiver */
    save(ritual) {
        const all = this.all();
        if (!ritual.id) {
            ritual.id = 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
            ritual.createdAt = Date.now();
        }
        ritual.updatedAt = Date.now();
        const idx = all.findIndex(r => r.id === ritual.id);
        if (idx >= 0) all[idx] = ritual;
        else all.unshift(ritual);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
        Brain.rememberRitual(ritual);
        return ritual;
    },
    
    /** Busca um por id */
    get(id) {
        return this.all().find(r => r.id === id);
    },
    
    /** Remove por id */
    remove(id) {
        const filtered = this.all().filter(r => r.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    },
    
    /** Limpa tudo */
    clear() {
        localStorage.removeItem(STORAGE_KEY);
    },
    
    /** Contagem por pilar */
    countByPillar() {
        const all = this.all();
        const map = { forma: 0, tabula: 0, primordio: 0, pinaculo: 0, eter: 0 };
        all.forEach(r => { if (map[r.pillar] !== undefined) map[r.pillar]++; });
        return map;
    },
    
    /** Export (JSON download) */
    export() {
        const data = JSON.stringify(this.all(), null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Ocsus-grimorio-${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    },

    /** Importa rituais de um JSON exportado */
    import(json) {
        try {
            const payload = typeof json === 'string' ? JSON.parse(json) : json;
            if (!Array.isArray(payload)) {
                throw new Error('Formato de importação inválido. Esperado um array de rituais.');
            }

            const existing = this.all();
            const merged = [...existing];

            payload.forEach(item => {
                if (!item || !item.id) return;
                const ritual = {
                    id: item.id,
                    name: item.name || 'Ritual sem nome',
                    pillar: item.pillar || 'pinaculo',
                    grade: item.grade || 1,
                    paradigm: item.paradigm || 'hermetico',
                    seed: item.seed || Date.now(),
                    effect: item.effect || '',
                    customEffect: item.customEffect || '',
                    backlash: item.backlash || '',
                    createdAt: item.createdAt || Date.now(),
                    updatedAt: item.updatedAt || Date.now()
                };

                const idx = merged.findIndex(r => r.id === ritual.id);
                if (idx >= 0) {
                    merged[idx] = ritual;
                } else {
                    merged.unshift(ritual);
                }
            });

            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            merged.forEach(item => Brain.rememberRitual(item));
            return merged;
        } catch (e) {
            console.error('[Grimoire] erro ao importar:', e);
            throw e;
        }
    }
};

const Settings = {
    get() {
        try {
            return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
        } catch { return {}; }
    },
    set(key, val) {
        const s = this.get();
        s[key] = val;
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
    }
};
