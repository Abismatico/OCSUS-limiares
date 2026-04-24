/* ============================================================
   Ocsus — PERSISTÊNCIA LOCAL (localStorage)
   Grimório de rituais salvos 100% offline
   ============================================================ */

const STORAGE_KEY = 'Ocsus_limiares_grimoire_v1';
const SETTINGS_KEY = 'Ocsus_limiares_settings_v1';

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
