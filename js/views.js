/* ============================================================
   Ocsus — RENDERIZAÇÃO DE VIEWS
   Cada view é uma função que retorna HTML + bind de eventos
   ============================================================ */

const Views = {};

function quickIcon(type) {
    const icons = {
        create: `
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" stroke-width="3" opacity="0.35"/>
                <path d="M40 14 L28 46 L40 34 L52 46 Z" fill="currentColor" opacity="0.9"/>
                <circle cx="40" cy="58" r="4" fill="currentColor"/>
            </svg>
        `,
        grimoire: `
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 16 H60 V64 H20 Z" fill="none" stroke="currentColor" stroke-width="3"/>
                <path d="M20 28 H60" stroke="currentColor" stroke-width="2" opacity="0.6"/>
                <path d="M28 36 H52 M28 44 H52 M28 52 H44" stroke="currentColor" stroke-width="2"/>
                <circle cx="50" cy="22" r="5" fill="currentColor" opacity="0.8"/>
            </svg>
        `,
        backlash: `
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="26" fill="none" stroke="currentColor" stroke-width="3" opacity="0.25"/>
                <path d="M34 20 L24 40 H36 L30 60 L50 34 H40 L46 20 Z" fill="currentColor"/>
                <path d="M18 50 C28 58 52 58 62 50" stroke="currentColor" stroke-width="2" fill="none" opacity="0.65"/>
            </svg>
        `,
        pillars: `
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="26" r="4" fill="currentColor"/>
                <circle cx="56" cy="22" r="4" fill="currentColor"/>
                <circle cx="42" cy="50" r="4" fill="currentColor"/>
                <path d="M24 26 L42 50 L56 22" stroke="currentColor" stroke-width="3" fill="none"/>
                <path d="M18 58 H62" stroke="currentColor" stroke-width="2" opacity="0.6"/>
            </svg>
        `,
        paradigms: `
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="18" fill="none" stroke="currentColor" stroke-width="3"/>
                <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4"/>
                <path d="M40 12 L40 68" stroke="currentColor" stroke-width="2" opacity="0.75"/>
                <path d="M12 40 L68 40" stroke="currentColor" stroke-width="2" opacity="0.75"/>
            </svg>
        `,
        enxertos: `
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="24" width="40" height="32" fill="none" stroke="currentColor" stroke-width="3" rx="8"/>
                <circle cx="30" cy="38" r="4" fill="currentColor"/>
                <circle cx="50" cy="38" r="4" fill="currentColor"/>
                <path d="M30 46 L50 46" stroke="currentColor" stroke-width="3"/>
            </svg>
        `,
        about: `
            <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 18 H58 V62 H22 Z" fill="none" stroke="currentColor" stroke-width="3"/>
                <path d="M28 26 H52 M28 34 H52 M28 42 H52 M28 50 H44" stroke="currentColor" stroke-width="2"/>
                <path d="M30 62 L36 70 H44 L50 62" fill="none" stroke="currentColor" stroke-width="3"/>
            </svg>
        `
    };
    return `<div class="quick-icon">${icons[type] || ''}</div>`;
}

// ============================================================
// ORÁCULO (HOME)
// ============================================================
Views.home = function() {
    const total = Grimoire.all().length;
    const counts = Grimoire.countByPillar();
    const topPillar = Object.entries(counts).sort((a,b) => b[1]-a[1])[0];
    
    return {
        title: 'ORÁCULO',
        html: `
            <section class="view" id="view-home">
                <div class="hero">
                    <div class="hero-sigil">${generateSigil({ seed: 'Ocsus-home', pillar: 'pinaculo', grade: 3, size: 200 })}</div>
                    <h1>OCSUS LIMIARES</h1>
                    <p>Grimório Thaumatúrgico de campo — para ocultistas que compreendem que todo ritual tem <em>preço</em>.</p>
                </div>
                
                <div class="hero-divider"></div>
                
                <div class="stats-bar">
                    <div class="stat">
                        <span class="stat-val">${total}</span>
                        <span class="stat-label">Rituais</span>
                    </div>
                    <div class="stat">
                        <span class="stat-val">5</span>
                        <span class="stat-label">Pilares</span>
                    </div>
                    <div class="stat">
                        <span class="stat-val">4</span>
                        <span class="stat-label">Paradigmas</span>
                    </div>
                </div>
                
                <h3>Acesso Rápido</h3>
                <div class="quick-grid">
                    <div class="quick-card" data-go="create">
                        ${quickIcon('create')}
                        <h4>FORJAR</h4>
                        <p>Criar novo ritual</p>
                    </div>
                    <div class="quick-card" data-go="grimoire">
                        ${quickIcon('grimoire')}
                        <h4>GRIMÓRIO</h4>
                        <p>${total} salvos</p>
                    </div>
                    <div class="quick-card" data-go="backlash">
                        ${quickIcon('backlash')}
                        <h4>BACKLASH</h4>
                        <p>Calculadora</p>
                    </div>
                    <div class="quick-card" data-go="enxertos">
                        ${quickIcon('enxertos')}
                        <h4>ENXERTOS</h4>
                        <p>Criar e listar implantes</p>
                    </div>
                    <div class="quick-card" data-go="pillars">
                        ${quickIcon('pillars')}
                        <h4>PILARES</h4>
                        <p>Os cinco eixos</p>
                    </div>
                    <div class="quick-card" data-go="paradigms">
                        ${quickIcon('paradigms')}
                        <h4>PARADIGMAS</h4>
                        <p>Escolas do Ocultismo</p>
                    </div>
                    <div class="quick-card" data-go="about">
                        ${quickIcon('about')}
                        <h4>MANUAL</h4>
                        <p>Como usar</p>
                    </div>
                </div>
                <div class="install-panel">
                    <button class="btn btn-primary btn-block" id="btn-install-home"><i class="fas fa-download"></i> Instalar Ocsus</button>
                    <p class="text-dim" style="margin-top:10px;">Instale o app no celular e jogue no modo standalone.</p>
                </div>
                
                <div class="card-clean mt-2">
                    <div class="ritual-section-title">Aviso do Oráculo</div>
                    <p style="font-style: italic; color: var(--ink-dim); font-size: 0.95rem;">
                        "Todo ritual deixa sulco. Toda invocação é um convite. Toda transgressão muda quem a comete. 
                        Este grimório é <strong style="color: var(--gold);">ferramenta</strong>, não álibi. O Backlash sempre vem."
                    </p>
                </div>
            </section>
        `,
        bind(root) {
            root.querySelectorAll('[data-go]').forEach(el => {
                el.addEventListener('click', () => App.go(el.dataset.go));
            });

            const installHome = root.querySelector('#btn-install-home');
            if (installHome) {
                installHome.addEventListener('click', () => App.promptInstall());
            }
        }
    };
};

// ============================================================
// CRIAR / FORJAR RITUAL
// ============================================================
Views.create = function(ctx = {}) {
    // ctx.draft pode vir de um ritual em edição
    const draft = ctx.draft || {
        pillars: ['pinaculo'],
        grade: 1,
        paradigm: 'hermetico',
        name: '',
        customEffect: '',
        seed: Date.now()
    };
    
    return {
        title: 'FORJAR RITUAL',
        html: `
            <section class="view" id="view-create">
                <h2>◈ Forjar Ritual</h2>
                <p class="view-intro">Escolha um ou mais pilares, o Grau e o Paradigma. O Oráculo poderá combinar pilares para rituais híbridos.</p>
                
                <!-- PILAR -->
                <div class="form-group">
                    <label class="form-label">1. Pilares Metafísicos</label>
                    <div class="chip-group" id="chips-pillar">
                        ${Object.values(PILLARS).map(p => `
                            <button class="chip ${draft.pillars.includes(p.id) ? 'active' : ''}" data-pillar="${p.id}">
                                <span style="color:${p.color}; font-weight:700;">◆</span> ${p.name}
                            </button>
                        `).join('')}
                    </div>
                    <p class="form-hint" id="pillar-hint"></p>
                </div>
                
                <!-- GRAU -->
                <div class="form-group">
                    <label class="form-label">2. Grau do Ritual</label>
                    <div class="chip-group" id="chips-grade">
                        ${[1,2,3,4,5].map(g => `
                            <button class="chip chip-grade ${draft.grade === g ? 'active' : ''}" data-grade="${g}">${g}</button>
                        `).join('')}
                    </div>
                    <p class="form-hint" id="grade-hint"></p>
                </div>
                
                <!-- PARADIGMA -->
                <div class="form-group">
                    <label class="form-label">3. Paradigma do Ocultista</label>
                    <div class="chip-group" id="chips-paradigm">
                        ${Object.values(PARADIGMS).map(p => `
                            <button class="chip ${draft.paradigm === p.id ? 'active' : ''}" data-paradigm="${p.id}">
                                ${p.name}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <!-- NOME CUSTOM -->
                <div class="form-group">
                    <label class="form-label">4. Nome (opcional — deixe vazio para gerar)</label>
                    <input type="text" class="form-input" id="input-name" placeholder="Ex.: Selo do Silêncio Final" value="${draft.name || ''}" maxlength="80">
                </div>
                
                <!-- EFEITO CUSTOM -->
                <div class="form-group">
                    <label class="form-label">5. Efeito (opcional — deixe vazio para gerar)</label>
                    <textarea class="form-textarea" id="input-effect" placeholder="Descreva o efeito mecânico, ou deixe o Oráculo sugerir um adequado ao pilar e grau.">${draft.customEffect || ''}</textarea>
                </div>
                
                <!-- AÇÕES -->
                <div class="btn-row">
                    <button class="btn btn-ghost" id="btn-reseed"><i class="fas fa-dice"></i> Novo Seed</button>
                    <button class="btn btn-primary" id="btn-forge"><i class="fas fa-fire"></i> Forjar</button>
                </div>
            </section>
        `,
        bind(root) {
            const state = { ...draft };
            
            const updateHints = () => {
                const active = state.pillars.map(id => PILLARS[id]);
                const primary = active[0];
                root.querySelector('#pillar-hint').textContent = active.length === 1
                    ? `${primary.motto} — domínio: ${primary.domain}. Custa ${primary.reserveName} (além de Aura).`
                    : `${active.map(p => p.name).join(' + ')}. Primeiro foco: ${primary.domain}. Custa ${primary.reserveName} (além de Aura).`;
                
                const c = GRADE_COSTS[state.grade];
                root.querySelector('#grade-hint').textContent = `${c.label} — Custo base: ${c.aura} Aura + ${c.secondary} ${primary.reserveName}. Dificuldade ${c.difficulty[0]}–${c.difficulty[1]}.`;
            };
            updateHints();
            
            // PILAR
            root.querySelectorAll('[data-pillar]').forEach(el => {
                el.addEventListener('click', () => {
                    const key = el.dataset.pillar;
                    const index = state.pillars.indexOf(key);
                    if (index === -1) {
                        state.pillars.push(key);
                    } else if (state.pillars.length > 1) {
                        state.pillars.splice(index, 1);
                    }
                    root.querySelectorAll('[data-pillar]').forEach(x => {
                        x.classList.toggle('active', state.pillars.includes(x.dataset.pillar));
                    });
                    updateHints();
                });
            });
            
            // GRAU
            root.querySelectorAll('[data-grade]').forEach(el => {
                el.addEventListener('click', () => {
                    root.querySelectorAll('[data-grade]').forEach(x => x.classList.remove('active'));
                    el.classList.add('active');
                    state.grade = parseInt(el.dataset.grade);
                    updateHints();
                });
            });
            
            // PARADIGMA
            root.querySelectorAll('[data-paradigm]').forEach(el => {
                el.addEventListener('click', () => {
                    root.querySelectorAll('[data-paradigm]').forEach(x => x.classList.remove('active'));
                    el.classList.add('active');
                    state.paradigm = el.dataset.paradigm;
                });
            });
            
            // RESEED
            root.querySelector('#btn-reseed').addEventListener('click', () => {
                state.seed = Date.now() + Math.random();
                App.toast('Novo seed gerado. Forje para ver o sigilo.');
            });
            
            // FORJAR
            root.querySelector('#btn-forge').addEventListener('click', () => {
                state.name = root.querySelector('#input-name').value.trim();
                state.customEffect = root.querySelector('#input-effect').value.trim();
                
                const ritual = buildRitual(state);
                App.go('preview', { ritual });
            });
        }
    };
};

// Monta o objeto ritual completo a partir do draft
function buildRitual(draft) {
    const seed = draft.seed || Date.now();
    const pillars = Array.isArray(draft.pillars) ? draft.pillars : [draft.pillar || 'pinaculo'];
    const source = !draft.customEffect ? generateEffect(pillars, draft.grade, seed, draft.paradigm) : null;
    const useTemplateName = source && source.source === 'library' && source.name;
    const generatedName = useTemplateName ? source.name : generateRitualName(pillars, seed);
    const name = draft.name || generatedName;

    const effect = draft.customEffect
        ? draft.customEffect
        : source.effect + (useTemplateName && source.name !== name ? ` (inspirado em: ${source.name})` : '');

    return {
        id: draft.id || null,
        name,
        pillar: pillars[0],
        pillars,
        grade: draft.grade,
        paradigm: draft.paradigm,
        seed,
        effect,
        customEffect: draft.customEffect || '',
        backlash: pickBacklash(pillars, seed + 'bk')
    };
}

// ============================================================
// PREVIEW DO RITUAL (ritual card)
// ============================================================
Views.preview = function(ctx = {}) {
    const ritual = ctx.ritual;
    if (!ritual) {
        return Views.home();
    }
    
    const pillarId = Array.isArray(ritual.pillars) ? ritual.pillars[0] : ritual.pillar;
    const pillar = PILLARS[pillarId];
    const pillarNames = Array.isArray(ritual.pillars) ? ritual.pillars.map(id => PILLARS[id]?.name || id).join(' + ') : pillar.name;
    const paradigm = PARADIGMS[ritual.paradigm];
    const cost = GRADE_COSTS[ritual.grade];
    const costLabel = ritual.cost ? ritual.cost : `${cost.aura} Aura + ${cost.secondary} ${pillar ? pillar.reserveName : 'Reserva'}`;
    const narrative = generateNarrative(ritual);
    const saved = !!ritual.id && !!Grimoire.get(ritual.id);
    
    return {
        title: 'RITUAL',
        html: `
            <section class="view" id="view-preview">
                <div class="ritual-preview" id="ritual-card">
                    <div class="sigil-display">${generateSigil({ seed: ritual.seed + ritual.name, pillar: ritual.pillars || pillarId, grade: ritual.grade, size: 280, effect: ritual.effect, details: ritual.backlash, keywords: [paradigm.name, pillarNames] })}</div>
                    <h2 class="ritual-name">${escapeHtml(ritual.name)}</h2>
                    <p class="ritual-meta">Grau ${ritual.grade} · ${escapeHtml(pillarNames)} · ${paradigm.name.split(' ').slice(-1)[0]}</p>
                    
                    <div class="ritual-stats">
                        <div class="ritual-stat">
                            <div class="ritual-stat-label">Custo</div>
                            <div class="ritual-stat-val">${escapeHtml(costLabel)}</div>
                        </div>
                        <div class="ritual-stat">
                            <div class="ritual-stat-label">Dificuldade</div>
                            <div class="ritual-stat-val">${cost.difficulty[0]}–${cost.difficulty[1]}</div>
                        </div>
                    </div>
                    
                    <div class="ritual-section">
                        <div class="ritual-section-title">Efeito</div>
                        <p class="ritual-desc">${escapeHtml(ritual.effect)}</p>
                    </div>
                    
                    <div class="ritual-section">
                        <div class="ritual-section-title">Execução (${paradigm.name})</div>
                        <p class="ritual-desc">${narrative}</p>
                    </div>
                    
                    <div class="ritual-section">
                        <div class="ritual-section-title">Backlash</div>
                        <div class="ritual-backlash">${escapeHtml(ritual.backlash)}</div>
                    </div>
                    
                    <div class="ritual-section">
                        <div class="ritual-section-title">Teste</div>
                        <p class="ritual-desc text-sm text-dim">Role <strong style="color:var(--gold)">1d20 + Aura</strong> contra NA <strong style="color:var(--gold)">${cost.difficulty[0]*3}–${cost.difficulty[1]*3}</strong>. Use a reserva secundária indicada no custo quando aplicável. Treinado –3 · Especializado –6.</p>
                    </div>
                </div>
                
                <div class="btn-row mt-2">
                    <button class="btn ${saved ? 'btn-ghost' : 'btn-primary'}" id="btn-save">
                        <i class="fas fa-${saved ? 'check' : 'bookmark'}"></i> ${saved ? 'Salvo' : 'Salvar'}
                    </button>
                    <button class="btn btn-ghost" id="btn-new-seed"><i class="fas fa-dice"></i> Re-sigilar</button>
                </div>
                <div class="btn-row mt-1">
                    <button class="btn btn-ghost" id="btn-share"><i class="fas fa-share-alt"></i> Enviar</button>
                    <button class="btn btn-ghost" id="btn-back"><i class="fas fa-arrow-left"></i> Voltar</button>
                </div>
            </section>
        `,
        bind(root) {
            root.querySelector('#btn-save').addEventListener('click', () => {
                const saved = Grimoire.save(ritual);
                App.state.currentRitual = saved;
                App.toast('Ritual selado no grimório.');
                App.go('preview', { ritual: saved });
            });
            
            root.querySelector('#btn-new-seed').addEventListener('click', () => {
                // Re-gera o sigilo mantendo dados
                ritual.seed = Date.now() + Math.random();
                App.go('preview', { ritual });
            });
            
            root.querySelector('#btn-share').addEventListener('click', () => {
                exportRitual(ritual);
            });
            
            root.querySelector('#btn-back').addEventListener('click', () => {
                window.history.length > 1 ? window.history.back() : App.go('home');
            });
        }
    };
};

// ============================================================
// GRIMÓRIO (lista de salvos)
// ============================================================
Views.grimoire = function() {
    const all = Grimoire.all();
    
    return {
        title: 'GRIMÓRIO',
        html: `
            <section class="view" id="view-grimoire">
                <h2>◈ Grimório</h2>
                <p class="view-intro">${all.length} ritual${all.length !== 1 ? 'is' : ''} selado${all.length !== 1 ? 's' : ''} — armazenados localmente no dispositivo.</p>
                
                ${all.length === 0 ? `
                    <div class="empty-state">
                        <i class="fas fa-book-skull"></i>
                        <p>Nenhum ritual foi inscrito ainda.<br>O grimório aguarda o primeiro selo.</p>
                        <button class="btn btn-primary" data-go="create" style="max-width:240px; margin:0 auto;"><i class="fas fa-pen-ruler"></i> Forjar Primeiro</button>
                    </div>
                ` : `
                    <div id="grim-list">
                        ${all.map(r => renderGrimItem(r)).join('')}
                    </div>
                    
                    <div class="btn-row mt-2">
                        <button class="btn btn-ghost btn-sm" id="btn-export"><i class="fas fa-file-export"></i> Exportar</button>
                        <button class="btn btn-danger btn-sm" id="btn-clear"><i class="fas fa-trash"></i> Limpar</button>
                    </div>
                `}
            </section>
        `,
        bind(root) {
            root.querySelectorAll('[data-go]').forEach(el => {
                el.addEventListener('click', () => App.go(el.dataset.go));
            });
            
            root.querySelectorAll('[data-open]').forEach(el => {
                el.addEventListener('click', () => {
                    const id = el.dataset.open;
                    const ritual = Grimoire.get(id);
                    if (ritual) App.go('preview', { ritual });
                });
            });
            
            root.querySelectorAll('[data-delete]').forEach(el => {
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = el.dataset.delete;
                    App.confirm('Dissolver este ritual?', 'Esta ação não pode ser desfeita.', () => {
                        Grimoire.remove(id);
                        App.toast('Ritual dissolvido.');
                        App.go('grimoire');
                    });
                });
            });
            
            const exportBtn = root.querySelector('#btn-export');
            if (exportBtn) exportBtn.addEventListener('click', () => {
                Grimoire.export();
                App.toast('Grimório exportado como JSON.');
            });

            const importBtn = root.querySelector('#btn-import');
            if (importBtn) {
                importBtn.addEventListener('click', () => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'application/json';
                    input.style.display = 'none';
                    input.addEventListener('change', async () => {
                        const file = input.files && input.files[0];
                        if (!file) return;
                        const text = await file.text();
                        try {
                            Grimoire.import(text);
                            App.toast('Grimório importado com sucesso.');
                            App.go('grimoire');
                        } catch (err) {
                            App.showModal(`<h3>Importação falhou</h3><p style="color:var(--ink-dim)">O arquivo selecionado não é um JSON válido de ritual.</p>`);
                        }
                    });
                    document.body.appendChild(input);
                    input.click();
                    input.remove();
                });
            }
            
            const clearBtn = root.querySelector('#btn-clear');
            if (clearBtn) clearBtn.addEventListener('click', () => {
                App.confirm('Limpar TODO o grimório?', 'Todos os rituais salvos serão apagados.', () => {
                    Grimoire.clear();
                    App.toast('Grimório purgado.');
                    App.go('grimoire');
                });
            });
        }
    };
};

Views.library = function() {
    const pillarGroups = Object.values(PILLARS).map(pillar => {
        return {
            pillar,
            templates: RITUAL_LIBRARY.filter(r => r.pillars.includes(pillar.id)),
            examples: pillar.examples.map(example => ({
                name: example.name,
                effect: example.effect,
                grade: example.grade
            }))
        };
    });

    const totalTemplates = pillarGroups.reduce((sum, group) => sum + group.templates.length, 0);
    const totalExamples = pillarGroups.reduce((sum, group) => sum + group.examples.length, 0);

    return {
        title: 'BIBLIOTECA',
        html: `
            <section class="view" id="view-library">
                <h2>◈ Biblioteca</h2>
                <p class="view-intro">${totalTemplates + totalExamples} rituais disponíveis — ${totalTemplates} modelos + ${totalExamples} exemplos de pilar.</p>
                ${pillarGroups.map(group => `
                    <div class="section-block">
                        <h3 class="section-title">${group.pillar.name}</h3>
                        ${group.templates.length > 0 ? `
                            <div class="card-grid">
                                ${group.templates.map(ritual => `
                                    <article class="card">
                                        <div class="card-header">
                                            ${Array.isArray(ritual.pillars)
                                                ? ritual.pillars.map(id => `<span class="pill ${id}">${escapeHtml(PILLARS[id]?.name || id)}</span>`).join(' ')
                                                : `<span class="pill ${group.pillar.id}">${group.pillar.name}</span>`}
                                            <strong>${escapeHtml(ritual.name)}</strong>
                                        </div>
                                        <p class="text-sm text-dim"><strong>Pilares:</strong> ${escapeHtml(formatPillarNames(ritual.pillars || [group.pillar.id]))}</p>
                                        <p class="text-sm text-dim">${escapeHtml(ritual.cost)}</p>
                                        <p>${escapeHtml(ritual.effect)}</p>
                                        <p class="text-sm text-dim"><strong>Backlash:</strong> ${escapeHtml(ritual.backlash)}</p>
                                    </article>
                                `).join('')}
                            </div>
                        ` : ''}

                        <div class="card-grid">
                            ${group.examples.map(example => `
                                <article class="card card-clean">
                                    <div class="card-header">
                                        <span class="pill ${group.pillar.id}">${group.pillar.name}</span>
                                        <strong>${escapeHtml(example.name)}</strong>
                                    </div>
                                    <p class="text-sm text-dim">Grau ${example.grade}</p>
                                    <p>${escapeHtml(example.effect)}</p>
                                </article>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </section>
        `,
        bind() {}
    };
};

Views.enxertos = function() {
    const primaryPillars = Object.values(PILLARS);
    const brainStats = Brain.stats();
    const learnedEnxertos = Brain.all().enxertos;
    const topPillar = Object.entries(brainStats.byPillar).sort((a,b) => b[1]-a[1])[0] || ['nenhum', 0];
    return {
        title: 'ENXERTOS',
        html: `
            <section class="view" id="view-enxertos">
                <h2>◈ Enxertos</h2>
                <p class="view-intro">Forje implantes de corpo e mente. Cada enxerto custa CH — uma reserva permanente de energia que reduz sua Aura máxima. Os melhores enxertos reduzem o NA ou amortecem o Backlash em rituais alinhados aos seus pilares. Enxertos com múltiplos pilares são mais versáteis, mas também mais complexos e exigem maior disciplina para não causar corrupção.</p>
                <p class="text-sm text-dim">Memória do Oráculo: ${brainStats.totalEnxertos} enxerto${brainStats.totalEnxertos !== 1 ? 's' : ''} registrados e ${brainStats.totalRituals} ritual${brainStats.totalRituals !== 1 ? 's' : ''} selados. Top pilar: ${PILLARS[topPillar[0]] ? PILLARS[topPillar[0]].name : 'nenhum'}.</p>

                <div class="card-clean">
                    <div class="form-group">
                        <label class="form-label">1. Nome do Enxerto</label>
                        <input type="text" class="form-input" id="enx-name" maxlength="80" placeholder="Ex.: Olho de Vidro do Éter">
                    </div>
                    <div class="form-group">
                        <label class="form-label">2. Categoria</label>
                        <select class="form-input" id="enx-category">
                            ${Object.keys(ENXERTOS).map(cat => `<option value="${escapeHtml(cat)}">${escapeHtml(cat)}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">3. Pilares</label>
                        <div class="text-sm text-dim">Selecione um ou mais pilares. Enxertos híbridos combinam efeitos e podem ser usados em rituais que compartilham qualquer um dos pilares escolhidos.</div>
                        <div class="chip-group" id="enx-pillar-group">
                            ${primaryPillars.map(p => `
                                <button class="chip ${p.id === 'pinaculo' ? 'active' : ''}" data-pillar="${p.id}">${p.name}</button>
                            `).join('')}
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">4. Tipo</label>
                        <input type="text" class="form-input" id="enx-type" placeholder="Ocular, Neural, Vital, Dorsal...">
                    </div>
                    <div class="form-group">
                        <label class="form-label">5. CH</label>
                        <input type="number" class="form-input" id="enx-ch" min="1" max="10" value="2">
                    </div>
                    <div class="form-group">
                        <label class="form-label">6. Efeito</label>
                        <textarea class="form-input" rows="3" id="enx-effect" placeholder="Descreva a utilidade do enxerto."></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">7. Detalhe</label>
                        <textarea class="form-input" rows="3" id="enx-detail" placeholder="Como ele aparece no corpo, som e sensação."></textarea>
                    </div>
                    <div class="form-actions" style="display:flex; gap:0.75rem; flex-wrap:wrap;">
                        <button class="btn btn-primary" id="btn-create-enxerto">Forjar Enxerto</button>
                        <button class="btn btn-secondary" id="btn-random-enxerto">Gerar Aleatório</button>
                        <button class="btn btn-ghost" id="btn-history-enxerto">Com Memória</button>
                        <button class="btn btn-ghost" id="btn-save-enxerto" disabled>Salvar no Banco</button>
                        <button class="btn btn-ghost" id="btn-copy-enxerto">Copiar Descrição</button>
                    </div>
                    <div id="enxerto-status" class="mt-1 text-dim"></div>
                </div>

                <div id="enxerto-preview" class="card-clean mt-2" style="display:none;"></div>

                <div class="section-block mt-2">
                    <h3 class="section-title">Biblioteca de Enxertos</h3>
                    ${Object.entries(ENXERTOS).map(([category, items]) => `
                        <div class="section-block">
                            <h4>${escapeHtml(category)}</h4>
                            <div class="card-grid">
                                ${items.map(item => `
                                    <article class="card card-clean">
                                        <div class="card-header">
                                            <strong>${escapeHtml(item.name)}</strong>
                                            <span class="pill pinaculo">CH ${item.ch}</span>
                                        </div>
                                        <p class="text-sm text-dim"><strong>Tipo:</strong> ${escapeHtml(item.type)} · <strong>Pilar:</strong> ${escapeHtml(item.pillar)}</p>
                                        <p>${escapeHtml(item.effect)}</p>
                                        <p class="text-sm text-dim">${escapeHtml(item.details)}</p>
                                    </article>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${learnedEnxertos.length > 0 ? `
                <div class="section-block mt-2">
                    <h3 class="section-title">Enxertos Aprendidos</h3>
                    <div class="card-grid">
                        ${learnedEnxertos.map(item => `
                            <article class="card card-clean">
                                <div class="card-header">
                                    <strong>${escapeHtml(item.name)}</strong>
                                    <span class="pill ${escapeHtml((Array.isArray(item.pillars) ? item.pillars[0] : item.pillar) || 'pinaculo')}">CH ${item.ch}</span>
                                </div>
                                <p class="text-sm text-dim"><strong>Categoria:</strong> ${escapeHtml(item.category)} · <strong>Pilares:</strong> ${escapeHtml(formatPillarNames(item.pillars || item.pillar))}</p>
                                <p class="text-sm text-dim"><strong>Tipo:</strong> ${escapeHtml(item.type)}</p>
                                <p>${escapeHtml(item.effect)}</p>
                                <p class="text-sm text-dim">${escapeHtml(item.detail)}</p>
                            </article>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </section>
        `,
        bind(root) {
            const state = {
                pillars: ['pinaculo'],
                lastEnxerto: null
            };

            const previewBox = root.querySelector('#enxerto-preview');
            const statusText = root.querySelector('#enxerto-status');
            const saveEnxertoButton = root.querySelector('#btn-save-enxerto');

            const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
            const objectMotifs = {
                forma: ['Carne', 'Osso', 'Garra', 'Músculo', 'Tecido', 'Cicatriz'],
                tabula: ['Véu', 'Fenda', 'Nó', 'Porta', 'Estrutura', 'Placa'],
                primordio: ['Chama', 'Raio', 'Tempestade', 'Cicatriz de Lava', 'Plasma', 'Faísca'],
                pinaculo: ['Olho', 'Selo', 'Runa', 'Engrama', 'Rede', 'Cálculo'],
                eter: ['Sombra', 'Espírito', 'Véu', 'Amálgama', 'Pacto', 'Vácuo']
            };
            const nameObjects = ['Olho', 'Selo', 'Rede', 'Cálice', 'Manto', 'Nó', 'Pulseira', 'Glifo', 'Fio', 'Carapaça', 'Máscara', 'Lente', 'Embrião', 'Costela', 'Garra', 'Cristal', 'Matriz'];
            const nameDescriptors = ['Rúnico', 'Etéreo', 'Sombrio', 'Sanguíneo', 'Neural', 'Primal', 'Híbrido', 'Anômalo', 'Fragmentado', 'Fluido', 'Abissal', 'Errático', 'Gravitacional', 'Ossificado', 'Fractal'];
            const effectTemplates = {
                'Sistema Sensorial e Neural': [
                    'Amplifica a percepção além do visível, detectando presenças e padrões ocultos.',
                    'Converte sinais nervosos em linguagem de símbolos e projeta avisos internos.',
                    'Cria um canal sensorial extra que percebe o invisível e os ecos do etéreo.',
                    'Sincroniza o sistema nervoso com o campo circundante, revelando armadilhas e dispositivos ocultos.',
                    'Filtra ruído mental e permite focar em um único alvo com precisão atordoante.'
                ],
                'Sistema Locomotor': [
                    'Reforça articulações e músculos para movimentos impossíveis e saltos ágeis.',
                    'Convoca força direcional que desloca o corpo com precisão aumentado e leveza.',
                    'Transforma membros em ferramentas adaptativas que se dobram ao ambiente.',
                    'Acelera reflexos físicos, tornando movimentos bruscos quase instantâneos.',
                    'Integra propulsão interna que amortiza quedas e permite ataques com impulso adicional.'
                ],
                'Sistema Vital e Orgânico': [
                    'Estabiliza o corpo com reservas ocultas de energia, resistindo a choques e toxinas.',
                    'Entrelaça carne e aura para regenerar feridas e resistir a efeitos mentais.',
                    'Cria uma fonte interna de poder que mantém órgãos vitais ativos sob pressão.',
                    'Armazena energia extra em tecidos ocultos para curar feridas em momentos críticos.',
                    'Fortifica órgãos e reflexos, permitindo que o corpo lute mesmo enquanto está perto do colapso.'
                ],
                'Experimentais': [
                    'Conecta realidades improváveis para produzir efeitos que existem entre os planos.',
                    'Abre uma instância temporária de anomalia para apoiar habilidades improváveis.',
                    'Funde tecnologia e sangue em um enxerto que age por seus próprios impulsos.',
                    'Ativa uma anomalia controlada que altera distância, tempo ou identidade por instantes.',
                    'Cria uma excrescência que responde de forma imprevisível ao ambiente e ao usuário.'
                ],
                'Sistema de Contenção': [
                    'Ergue uma armadura de retenção que bloqueia ataques mágicos e exóticos por um turno.',
                    'Circunda o usuário com redes de energia que neutralizam invasões mentais.',
                    'Forma uma câmara dimensional compacta que retém alvos por breves segundos.',
                    'Gera mecanismos internos que reduzem o efeito de falhas e retrocessos em 1 passo.',
                    'Implanta barreiras invisíveis que prendem forças estranhas antes que o corpo sofra o impacto.'
                ],
                'Sistema de Defesa': [
                    'Projeta escudos translúcidos que desviam impactos físicos e espirituais.',
                    'Ativa camadas de defesa que absorvem dano e reduzem efeitos críticos.',
                    'Faz o corpo operar como uma casamata móvel, endurecendo-se ao ataque.',
                    'Cria um campo inibitório que quebra ataques diretos antes que alcancem o usuário.',
                    'Reflete parte da agressão de volta ao emissor como dano resonante.'
                ]
            };
            const detailTemplates = {
                default: [
                    'Uma presença estranha pulsa sob a pele, cheia de energia e tensão.',
                    'O implante vibra com vontade própria e resiste a movimentos bruscos.',
                    'Pequenas faíscas internas sugerem que o sucesso dependerá de controle absoluto.'
                ],
                forma: [
                    'Uma capa de pele translúcida pulsa com veias escuras enquanto se adapta ao toque.',
                    'Filamentos irrigam o implante com uma sensação de calor úmido e controlado.',
                    'A superfície se movimenta como se respirasse, abrindo-se em sincronia com o corpo.'
                ],
                tabula: [
                    'Linhas finas de luz percorrem o implante como circuitos de uma arquitetura proibida.',
                    'Seus contornos parecem sugerir portas que não existem, com pulsações geométricas.',
                    'Um campo invisível ondula no espaço ao redor, esticando e comprimindo o ar.'
                ],
                primordio: [
                    'Uma lâmina incandescente dorme sob a pele, pronta para romper com impacto.',
                    'O implante exala um calor seco que arde sem queimar a própria carne.',
                    'Faíscas percorrem nervuras ocultas, como se o corpo tivesse virado fornalha.'
                ],
                pinaculo: [
                    'Runas douradas traçam padrões no couro cabeludo e brilham ao menor pensamento.',
                    'Pequenos glifos pulsantes cintilam sob a pele, decodificando intenções alheias.',
                    'A marca parece reescrever sinais nervosos em símbolos que só a mente entende.'
                ],
                eter: [
                    'Uma sombra líquida escorre pela superfície, murmurando nomes indecifráveis.',
                    'Pequenos pontos de luz fantasmagórica surgem e somem como olhos de outro mundo.',
                    'O objeto emite um sussurro distante que só quem o carrega consegue ouvir.'
                ]
            };
            const symbolMap = {
                olho: 'Olho Espectral',
                selo: 'Selo de Vácuo',
                runa: 'Runa Pulsante',
                fogo: 'Chama Sagrada',
                véu: 'Véu Rúnico',
                alma: 'Nó de Alma',
                sombra: 'Crescentes Sombrios',
                pacto: 'Marca do Contrato',
                portal: 'Porta Etérea',
                sangue: 'Gota Profana',
                tempestade: 'Espiral Tempestuosa',
                memória: 'Fragmento Mnêmico'
            };

            const buildEnxertoSymbolLabel = (text, category) => {
                const normalized = text.toLowerCase();
                const found = Object.keys(symbolMap).find(key => normalized.includes(key));
                if (found) return symbolMap[found];
                return `${category.split(' ')[0]} do Ocultista`;
            };

            const setPillarChips = (pillars = ['pinaculo']) => {
                const normalized = Array.isArray(pillars) ? pillars : [pillars];
                root.querySelectorAll('#enx-pillar-group .chip').forEach(el => {
                    const isActive = normalized.includes(el.dataset.pillar);
                    el.classList.toggle('active', isActive);
                });
                state.pillars = normalized.length ? normalized : ['pinaculo'];
            };

            const fillEnxertoFields = (data) => {
                root.querySelector('#enx-name').value = data.name;
                root.querySelector('#enx-category').value = data.category;
                root.querySelector('#enx-type').value = data.type;
                root.querySelector('#enx-ch').value = data.ch;
                root.querySelector('#enx-effect').value = data.effect;
                root.querySelector('#enx-detail').value = data.detail;
                if (data.pillars) setPillarChips(data.pillars);
            };

            const createRandomEnxerto = () => {
                const category = root.querySelector('#enx-category').value;
                const pillars = state.pillars.length ? state.pillars : ['pinaculo'];
                const primary = pillars[0];
                const motif = randomFrom(objectMotifs[primary] || objectMotifs.pinaculo);
                const name = `${randomFrom(nameObjects)} de ${motif} ${randomFrom(nameDescriptors)}`.trim();
                const type = randomFrom([ 'Ocular', 'Neural', 'Bio-Aura', 'Cranial', 'Dorsal', 'Orgânico', 'Estrutural', 'Sintético', 'Ancestral', 'Mecânico', 'Metatil', 'Espectral' ]);
                const baseCh = 1 + Math.floor(Math.random() * 5);
                const ch = Math.min(6, baseCh + (pillars.includes('primordio') || pillars.includes('eter') ? 1 : 0));
                const effect = randomFrom(effectTemplates[category] || [
                    'Amplifica sentidos ocultos e envia pulsos de energia invisível.',
                    'Conjura um equipamento híbrido que responde de forma adaptativa ao ambiente.',
                    'Cria uma anomalia estabilizada que funciona como uma extensão do corpo e do símbolo.'
                ]);
                const detail = randomFrom(detailTemplates[primary] || detailTemplates.default);
                return { name, category, type, ch, effect, detail, pillars };
            };

            const loadMemoryEnxerto = () => {
                const suggestion = Brain.suggestEnxerto({
                    name: root.querySelector('#enx-name').value.trim(),
                    category: root.querySelector('#enx-category').value,
                    pillar: state.pillars[0],
                    type: root.querySelector('#enx-type').value.trim()
                });
                if (!suggestion) {
                    statusText.textContent = 'O Oráculo ainda não tem memória suficiente de enxertos semelhantes.';
                    return;
                }
                fillEnxertoFields(suggestion);
                renderPreview();
                statusText.textContent = 'Geração trazendo um padrão do histórico de enxertos.';
            };

            const renderPreview = () => {
                const name = root.querySelector('#enx-name').value.trim();
                const category = root.querySelector('#enx-category').value;
                const type = root.querySelector('#enx-type').value.trim() || 'Genérico';
                const ch = parseInt(root.querySelector('#enx-ch').value, 10) || 1;
                const effect = root.querySelector('#enx-effect').value.trim();
                const detail = root.querySelector('#enx-detail').value.trim();
                const pillars = state.pillars.length ? state.pillars : ['pinaculo'];
                const pillarNames = pillars.map(id => PILLARS[id]?.name || id).join(' + ');
                const primary = PILLARS[pillars[0]] || PILLARS.pinaculo;
                const symbolLabel = buildEnxertoSymbolLabel(`${name} ${effect} ${detail} ${pillarNames}`, category);
                const sigil = generateSigil({
                    seed: name + effect + detail + pillarNames,
                    pillar: pillars,
                    grade: Math.min(ch, 5),
                    size: 180,
                    effect,
                    details: detail,
                    keywords: [category, type, primary.name, symbolLabel, pillarNames]
                });

                if (!name || !effect) {
                    statusText.textContent = 'Preencha pelo menos o nome e o efeito para forjar o enxerto.';
                    previewBox.style.display = 'none';
                    return;
                }

                previewBox.style.display = 'block';
                previewBox.innerHTML = `
                    <div class="ritual-section-title">Enxerto Forjado</div>
                    <div class="card-grid" style="grid-template-columns:1fr;">
                        <article class="card">
                            <div class="card-header">
                                <strong>${escapeHtml(name)}</strong>
                                <span class="pill ${primary.id}">${escapeHtml(category)}</span>
                            </div>
                            <p class="text-sm text-dim"><strong>Tipo:</strong> ${escapeHtml(type)} · <strong>Pilares:</strong> ${escapeHtml(pillarNames)} · <strong>CH:</strong> ${ch}</p>
                            <p class="text-sm text-dim"><strong>Símbolo:</strong> ${escapeHtml(symbolLabel)}</p>
                            <p>${escapeHtml(effect)}</p>
                            <p class="text-sm text-dim">${escapeHtml(detail)}</p>
                            <div class="sigil-display" style="margin-top:16px; text-align:center;">${sigil}</div>
                            <div class="ritual-section mt-1">
                                <div class="ritual-section-title">Como funciona</div>
                                <p class="text-sm text-dim">Enxertos com múltiplos pilares trazem efeitos híbridos: eles podem ser usados em rituais que compartilhem qualquer um dos pilares escolhidos. Usar este implante em um ritual alinhado reduz o NA em 1 passo ou diminui o Backlash em 1 nível, mas exige CH permanente maior e aumenta a complexidade de aplicação.</p>
                            </div>
                            <div class="ritual-section mt-1">
                                <div class="ritual-section-title">Alerta de CH</div>
                                <p class="text-sm text-dim">A CH é um custo permanente de reserva. Se reduzir sua Aura máxima a 0, você pode sofrer corrupção, perda de sanidade ou se tornar uma anomalia irracional.</p>
                            </div>
                        </article>
                    </div>
                `;
                state.lastEnxerto = { name, category, type, ch, effect, detail, pillars, createdAt: Date.now() };
                if (saveEnxertoButton) saveEnxertoButton.disabled = false;
                statusText.textContent = 'Enxerto forjado. Use o botão copiar ou salve no banco para que o Oráculo aprenda.';
            };

            const updatePillars = () => {
                const selected = [...root.querySelectorAll('#enx-pillar-group .chip.active')].map(el => el.dataset.pillar);
                if (!selected.length) {
                    setPillarChips(['pinaculo']);
                } else {
                    state.pillars = selected;
                }
            };

            root.querySelectorAll('#enx-pillar-group .chip').forEach(el => {
                el.addEventListener('click', () => {
                    el.classList.toggle('active');
                    updatePillars();
                });
            });

            root.querySelector('#btn-create-enxerto').addEventListener('click', (event) => {
                event.preventDefault();
                renderPreview();
            });

            root.querySelector('#btn-random-enxerto').addEventListener('click', (event) => {
                event.preventDefault();
                const generated = createRandomEnxerto();
                fillEnxertoFields(generated);
                renderPreview();
            });

            root.querySelector('#btn-history-enxerto').addEventListener('click', (event) => {
                event.preventDefault();
                loadMemoryEnxerto();
            });

            if (saveEnxertoButton) {
                saveEnxertoButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    if (!state.lastEnxerto) {
                        statusText.textContent = 'Crie um enxerto para salvar no banco de memória.';
                        return;
                    }
                    Brain.rememberEnxerto(state.lastEnxerto);
                    saveEnxertoButton.disabled = true;
                    statusText.textContent = 'Enxerto inscrito na memória do Oráculo.';
                });
            }

            root.querySelector('#btn-copy-enxerto').addEventListener('click', () => {
                const name = root.querySelector('#enx-name').value.trim();
                const category = root.querySelector('#enx-category').value;
                const type = root.querySelector('#enx-type').value.trim() || 'Genérico';
                const ch = parseInt(root.querySelector('#enx-ch').value, 10) || 1;
                const effect = root.querySelector('#enx-effect').value.trim();
                const detail = root.querySelector('#enx-detail').value.trim();
                const pillars = state.pillars.length ? state.pillars : ['pinaculo'];
                const pillarNames = pillars.map(id => PILLARS[id]?.name || id).join(' + ');
                if (!name || !effect) {
                    statusText.textContent = 'Precisa forjar o enxerto antes de copiar.';
                    return;
                }
                const symbolLabel = buildEnxertoSymbolLabel(`${name} ${effect} ${detail} ${pillarNames}`, category);
                const payload = `ENXERTO: ${name}\nCategoria: ${category}\nTipo: ${type}\nPilares: ${pillarNames}\nCH: ${ch}\nSímbolo: ${symbolLabel}\nEfeito: ${effect}\nDetalhe: ${detail}`;
                navigator.clipboard?.writeText(payload).then(() => {
                    statusText.textContent = 'Descrição copiada para a área de transferência.';
                }).catch(() => {
                    statusText.textContent = 'Não foi possível copiar. Use o copiar manualmente.';
                });
            });
        }
    };
};

function renderGrimItem(r) {
    const pillars = r.pillars || r.pillar;
    const pillarNames = formatPillarNames(pillars);
    return `
        <div class="grim-item" data-open="${r.id}">
            <div class="grim-sigil">${generateSigil({ seed: r.seed + r.name, pillar: pillars, grade: r.grade, size: 56 })}</div>
            <div class="grim-info">
                <h4>${escapeHtml(r.name)}</h4>
                <div class="grim-meta">${escapeHtml(pillarNames)} · Grau ${r.grade}</div>
            </div>
            <button class="icon-btn" data-delete="${r.id}" aria-label="Excluir"><i class="fas fa-trash" style="color: var(--blood-bright);"></i></button>
        </div>
    `;
}

// ============================================================
// CALCULADORA DE BACKLASH
// ============================================================
Views.backlash = function() {
    return {
        title: 'CALC. BACKLASH',
        html: `
            <section class="view" id="view-backlash">
                <h2>◈ Calculadora</h2>
                <p class="view-intro">Defina parâmetros do ritual e role o teste. Custos, NA e Backlash calculados em tempo real.</p>
                
                <div class="card-clean">
                    <div class="form-group">
                        <label class="form-label">Pilar</label>
                        <div class="chip-group" id="calc-pillar">
                            ${Object.values(PILLARS).map((p, i) => `
                                <button class="chip ${i===0?'active':''}" data-pillar="${p.id}">${p.name}</button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="form-group range-group">
                        <div class="range-header">
                            <label class="form-label" style="margin:0">Dificuldade</label>
                            <span class="range-value" id="diff-val">3</span>
                        </div>
                        <input type="range" id="diff" min="0" max="10" value="3">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Perícia do Ocultista</label>
                        <div class="chip-group" id="calc-skill">
                            <button class="chip active" data-skill="0">Nenhuma</button>
                            <button class="chip" data-skill="1">Treinado (–3 NA)</button>
                            <button class="chip" data-skill="2">Especializado (–6 NA)</button>
                        </div>
                    </div>
                    
                    <div class="form-group range-group">
                        <div class="range-header">
                            <label class="form-label" style="margin:0">Bônus Aura (+)</label>
                            <span class="range-value" id="aura-val">3</span>
                        </div>
                        <input type="range" id="aura" min="0" max="10" value="3">
                    </div>
                </div>
                
                <div class="calc-result">
                    <div class="calc-target">
                        <span class="calc-target-val" id="target-na">9</span>
                        <span class="calc-target-label">Número-Alvo (NA)</span>
                    </div>
                    
                    <div id="cost-info" style="text-align:center; margin:10px 0;">
                        <div class="ritual-stat-label">Custo em Reservas</div>
                        <div class="ritual-stat-val" id="cost-val">3 Aura + 2 Potência</div>
                    </div>
                    
                    <div class="calc-roll">
                        <button class="dice-btn" id="dice-btn"><i class="fas fa-dice-d20"></i></button>
                        <div class="dice-result" id="dice-result">Toque para rolar 1d20 + Aura</div>
                    </div>
                    
                    <div id="backlash-display" class="ritual-section">
                        <div class="ritual-section-title">Backlash Sugerido</div>
                        <div class="ritual-backlash" id="backlash-text">—</div>
                        <button class="btn btn-ghost btn-sm mt-1" id="btn-reroll-bk" style="width:100%;"><i class="fas fa-refresh"></i> Sortear Outro</button>
                    </div>
                </div>
            </section>
        `,
        bind(root) {
            const state = {
                pillar: 'forma',
                difficulty: 3,
                skill: 0,
                aura: 3
            };
            
            const update = () => {
                const pillar = PILLARS[state.pillar];
                const baseNA = state.difficulty * 3;
                const skillReduction = state.skill * 3;
                const finalNA = Math.max(0, baseNA - skillReduction);
                
                // Custos progressivos por grau
                const grade = Math.max(1, Math.min(5, Math.ceil(state.difficulty / 2)));
                const cost = GRADE_COSTS[grade];
                
                root.querySelector('#target-na').textContent = finalNA;
                root.querySelector('#cost-val').textContent = `${cost.aura} Aura + ${cost.secondary} ${pillar.reserveName}`;
                root.querySelector('#backlash-text').textContent = pickBacklash(state.pillar, Date.now() + state.pillar);
            };
            
            root.querySelectorAll('[data-pillar]').forEach(el => {
                el.addEventListener('click', () => {
                    root.querySelectorAll('[data-pillar]').forEach(x => x.classList.remove('active'));
                    el.classList.add('active');
                    state.pillar = el.dataset.pillar;
                    update();
                });
            });
            
            root.querySelectorAll('[data-skill]').forEach(el => {
                el.addEventListener('click', () => {
                    root.querySelectorAll('[data-skill]').forEach(x => x.classList.remove('active'));
                    el.classList.add('active');
                    state.skill = parseInt(el.dataset.skill);
                    update();
                });
            });
            
            const diffInput = root.querySelector('#diff');
            diffInput.addEventListener('input', () => {
                state.difficulty = parseInt(diffInput.value);
                root.querySelector('#diff-val').textContent = state.difficulty;
                update();
            });
            
            const auraInput = root.querySelector('#aura');
            auraInput.addEventListener('input', () => {
                state.aura = parseInt(auraInput.value);
                root.querySelector('#aura-val').textContent = state.aura;
            });
            
            root.querySelector('#dice-btn').addEventListener('click', () => {
                const d20 = Math.floor(Math.random() * 20) + 1;
                const total = d20 + state.aura;
                const na = parseInt(root.querySelector('#target-na').textContent);
                const success = total >= na;
                const resEl = root.querySelector('#dice-result');
                resEl.innerHTML = `
                    <div style="font-size:1.2rem; margin-top:6px;">1d20 (<strong style="color:var(--gold)">${d20}</strong>) + ${state.aura} = <strong style="color:var(--gold)">${total}</strong></div>
                    <div style="font-size:0.9rem; margin-top:4px;">${success ? '✓ SUCESSO contra NA '+na : '✗ FALHA contra NA '+na}${d20===1?' · FALHA CRÍTICA':''}${d20===20?' · CRÍTICO!':''}</div>
                `;
                resEl.className = 'dice-result ' + (success ? 'success' : 'fail');
            });
            
            root.querySelector('#btn-reroll-bk').addEventListener('click', () => {
                root.querySelector('#backlash-text').textContent = pickBacklash(state.pillar, Date.now() + Math.random());
            });
            
            update();
        }
    };
};

// ============================================================
// PILARES (biblioteca)
// ============================================================
Views.pillars = function() {
    return {
        title: 'PILARES',
        html: `
            <section class="view">
                <h2>◈ Os Cinco Pilares</h2>
                <p class="view-intro">Toda thaumaturgia se organiza em cinco eixos. Cada um corrompe de um jeito próprio.</p>
                
                ${Object.values(PILLARS).map(p => `
                    <div class="info-card" style="border-left: 3px solid ${p.color};">
                        <div class="info-card-header">
                            <div class="info-card-icon" style="border-color:${p.color}">
                                ${generateSigil({ seed: p.id, pillar: p.id, grade: 2, size: 54 })}
                            </div>
                            <div>
                                <h3 style="color:${p.color}">${p.name}</h3>
                                <div class="info-sub">${p.motto}</div>
                            </div>
                        </div>
                        <p>${p.description}</p>
                        <div class="info-sub mt-1" style="color:var(--gold-dim)">Domínio: ${p.domain}</div>
                        <div class="info-sub" style="color:var(--gold-dim)">Reserva: ${p.reserveName} + Aura</div>
                        <div class="info-tags">
                            ${p.keywords.map(k => `<span class="info-tag">${k}</span>`).join('')}
                        </div>
                        <div class="ritual-section mt-1">
                            <div class="ritual-section-title">Exemplos</div>
                            <ul class="info-list">
                                ${p.examples.slice(0, 4).map(ex => `
                                    <li><strong style="color:var(--gold)">[${ex.grade}] ${ex.name}</strong> — ${ex.effect}</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </section>
        `,
        bind() {}
    };
};

// ============================================================
// PARADIGMAS (biblioteca)
// ============================================================
Views.paradigms = function() {
    return {
        title: 'PARADIGMAS',
        html: `
            <section class="view">
                <h2>◈ Paradigmas Ocultistas</h2>
                <p class="view-intro">Cada ocultista aborda os mesmos pilares com uma <em>estética</em> e <em>método</em> próprios.</p>
                
                ${Object.values(PARADIGMS).map(p => {
                    const primary = PILLARS[p.primary];
                    const secondary = PILLARS[p.secondary];
                    return `
                        <div class="info-card">
                            <div class="info-card-header">
                                <div class="info-card-icon">
                                    ${generateSigil({ seed: p.id + 'para', pillar: p.primary, grade: 3, size: 54 })}
                                </div>
                                <div>
                                    <h3>${p.name}</h3>
                                    <div class="info-sub">${p.style}</div>
                                </div>
                            </div>
                            <div class="info-quote">"${p.motto}"</div>
                            <p>${p.aesthetic}</p>
                            <div class="info-sub mt-1" style="color:var(--gold-dim)">Pilar Primário: <strong style="color:${primary.color}">${primary.name}</strong> · Secundário: ${secondary.name}</div>
                            <div class="ritual-section mt-1">
                                <div class="ritual-section-title">Ferramentas</div>
                                <div class="info-tags">
                                    ${p.tools.map(t => `<span class="info-tag">${t}</span>`).join('')}
                                </div>
                            </div>
                            <div class="ritual-section mt-1">
                                <div class="ritual-section-title">Palavras-Chave</div>
                                <div class="info-tags">
                                    ${p.keywords.map(k => `<span class="info-tag" style="color:var(--gold); border-color:var(--gold-dim);">${k}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </section>
        `,
        bind() {}
    };
};

// ============================================================
// MANUAL / ABOUT
// ============================================================
Views.about = function() {
    return {
        title: 'MANUAL',
        html: `
            <section class="view">
                <h2>◈ Manual do Ocsus</h2>
                <p class="view-intro">Guia rápido de uso e fidelidade ao sistema.</p>
                
                <div class="card-clean">
                    <h3>O que é?</h3>
                    <p style="margin-top:8px;">Ocsus Limiares é um <strong style="color:var(--gold)">PWA offline</strong> — aplicativo de celular que funciona sem internet após instalado — destinado a criar, visualizar e gerenciar rituais do RPG <em>Sistema Limiares</em>.</p>
                </div>

                <div class="card-clean">
                    <h3>Significado do sigilo</h3>
                    <p style="margin-top:8px;">O símbolo que aparece no carregamento e no app é uma marca geométrica do Ocsus — cada forma dentro dele tem um significado prático, não esotérico.</p>
                    <ul class="info-list">
                        <li><strong>Aro externo</strong> — marca o limite do ritual. Ele define onde a ação começa e termina, e lembra o limiar entre o mundo comum e o espaço de operação do ritual.</li>
                        <li><strong>Polígono central</strong> — representa o pilar principal do ritual. A forma do polígono muda conforme o pilar, mostrando como a técnica estrutura a energia e a intenção.</li>
                        <li><strong>Quadrado girado</strong> — simboliza disciplina e intrincidade. Ele é a base estável do sigilo, mostrando que o ritual exige método, controle e manutenção do foco interno.</li>
                        <li><strong>Linhas cardeais</strong> — são linhas de direção e conexão. Elas apontam para as direções do esforço, ligando o núcleo do ritual ao ambiente e indicando que o foco se projeta para fora.</li>
                        <li><strong>Ponto central</strong> — é o agente do ritual, o ponto onde todas as intenções se encontram. Ele representa o controle consciente do Ocultista e a parte do ritual que executa a mudança.</li>
                        <li><strong>Elementos adicionais</strong> — variações de traço, ângulos e pequenos detalhes no sigilo mostram as adaptações do ritual ao seu grau e aos seus pilares secundários, como se fossem ajustes finos na fórmula.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>Como instalar</h3>
                    <ul class="info-list">
                        <li><strong>Android (Chrome):</strong> toque no menu (⋮) → "Adicionar à tela inicial" ou "Instalar app".</li>
                        <li><strong>iPhone (Safari):</strong> toque em Compartilhar (↑) → "Adicionar à Tela de Início".</li>
                        <li>Depois de instalado, o app funciona <strong style="color:var(--gold)">100% offline</strong>.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>Fluxo sugerido</h3>
                    <ul class="info-list">
                        <li><strong>FORJAR</strong> — escolha Pilar, Grau e Paradigma; salve no grimório.</li>
                        <li><strong>GRIMÓRIO</strong> — consulte, edite ou remova rituais salvos localmente.</li>
                        <li><strong>CALC. BACKLASH</strong> — em mesa de jogo, role o 1d20 e obtenha custo/NA/backlash na hora.</li>
                        <li><strong>PILARES / PARADIGMAS</strong> — biblioteca para consulta rápida.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>Mecânica resumida</h3>
                    <ul class="info-list">
                        <li>Teste: <strong>1d20 + Aura</strong> ≥ <strong>Dificuldade × 3</strong>.</li>
                        <li>Perícia: Treinado <strong>–3 NA</strong> · Especializado <strong>–6 NA</strong>.</li>
                        <li>Custo base: <strong>3–5 Aura + 2–4 Reserva</strong> (ou mais em graus altos).</li>
                        <li><strong style="color:var(--blood-bright)">Backlash acontece SEMPRE</strong>, mesmo no sucesso.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>Pilares e Rituais</h3>
                    <p>Você não lança “magias”. Você executa <strong>rituais thaumatúrgicos</strong> — procedimentos perigosos que manipulam forças anômalas para dobrar a realidade.</p>
                    <p><strong>Aviso importante:</strong> todo ritual tem um preço. Quanto mais poderoso o efeito, maior o risco de Corrupção, perda de sanidade, mutação ou atração de atenção de Organizações. Use com cautela.</p>
                    <h4>Como funciona um ritual</h4>
                    <ol class="info-list">
                        <li>Escolha o Pilar Primário (Forma, Tábula, Primórdio, Pináculo ou Éter). O Pilar é o “estilo” e a “especialidade” do seu Ocultista.</li>
                        <li>Defina claramente o que o ritual deve fazer.</li>
                        <li>Descreva os componentes: símbolos, materiais, tempo, sacrifício, local.</li>
                        <li>O Mestre define a Dificuldade (geralmente 4 a 10).</li>
                        <li>Faça o teste (normalmente Aura + Intelecto).</li>
                        <li>Pague o custo em Aura + outra Reserva.</li>
                        <li>Sofra o Backlash (sempre existe algum risco; você pode reduzir, mas nunca eliminar).</li>
                        <li>Corrupção: acumula com o uso de rituais. Em níveis altos, o Mestre aplica efeitos permanentes.</li>
                    </ol>
                </div>
                
                <div class="card-clean">
                    <h3>Os cinco pilares</h3>
                    <ul class="info-list">
                        <li><strong>Forma</strong> → Corpo, matéria, transformações, mutações.</li>
                        <li><strong>Tábula</strong> → Tempo, espaço, dimensões, deslocamento.</li>
                        <li><strong>Primórdio</strong> → Elementos, criação, força bruta da natureza.</li>
                        <li><strong>Pináculo</strong> → Mente, memórias, símbolos, runas, cálculos.</li>
                        <li><strong>Éter</strong> → Alma, contratos, deidades, terror, emoções.</li>
                    </ul>
                    <p>Todo ritual tem custo, risco e backlash. Quanto mais forte o efeito, maior o preço.</p>
                </div>
                
                <div class="card-clean">
                    <h3>Passo a Passo para lançar um ritual</h3>
                    <ol class="info-list">
                        <li>Escolha o Pilar Primário: Sangue, Morte, Energia, Conhecimento ou Medo. Esse pilar define o tema e o tipo de custo.</li>
                        <li>Descreva claramente o que você quer fazer. Seja específico: ex: “transformar meu braço em uma lâmina de osso” ou “abrir um portal curto de 20 metros”.</li>
                        <li>Defina os componentes (opcional, mas ajuda): símbolos, runas, sangue, tempo de preparação, local especial, hora certa, sacrifício.</li>
                        <li>O Mestre define a Dificuldade (0 a 10): efeito simples 3–5; efeito poderoso ou arriscado 6–9.</li>
                        <li>Faça o teste: role 1d20 + Aura contra o Número-Alvo (Dificuldade × 3).</li>
                        <li>Pague o custo: todo ritual custa no mínimo Aura + outra Reserva.</li>
                        <li>Aplique o Backlash: o preço inevitável de mexer com forças anômalas.</li>
                    </ol>
                </div>
                
                <div class="card-clean">
                    <h3>Usando esforço em rituais</h3>
                    <ul class="info-list">
                        <li>Esforço funciona normalmente, mas é mais perigoso em rituais.</li>
                        <li>Cada nível de Esforço reduz a dificuldade em 1 passo.</li>
                        <li>Custo base: 3 pontos da Reserva escolhida + 2 pontos por nível adicional.</li>
                        <li>Margem reduz esse custo: ex: Margem 2 faz o primeiro nível custar 1 ponto.</li>
                        <li>Com Margem 3, o primeiro nível de Esforço sai gratuito.</li>
                        <li>Atenção: usar Esforço aumenta o risco de Backlash e Corrupção. O Mestre pode agravar o Backlash se você exagerar.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>Margem no Ocultista</h3>
                    <p>Margem reduz o custo de Esforço e de ativação de rituais. Exemplo: um ritual que custa 5 Aura com Margem 2 em Aura custa apenas 3 pontos.</p>
                    <p>Margem alta é extremamente valiosa, pois rituais são caros.</p>
                </div>
                
                <div class="card-clean">
                    <h3>Custo geral de um ritual</h3>
                    <ul class="info-list">
                        <li>Custo mínimo: 3–5 pontos de Aura + 2–4 pontos de outra Reserva.</li>
                        <li>Custo alto: 7+ Aura + 5+ de outra Reserva para rituais poderosos.</li>
                        <li>Você sempre gasta Aura ao lançar um ritual.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>Backlash e Corrupção</h3>
                    <p>Todo ritual gera Backlash. Exemplos comuns: dano em Reservas, perda temporária de controle, visões traumáticas, atração de entidades ou atenção de fundações, mutação temporária ou permanente.</p>
                    <p>Corrupção é uma contagem secreta que aumenta com o uso excessivo de rituais. Em certos limiares, o Mestre aplica efeitos negativos permanentes ou temporários.</p>
                    <p><strong>Regra de ouro:</strong> quanto mais você força a realidade, mais a realidade força de volta.</p>
                </div>
                
                <div class="card-clean">
                    <h3>O Backlash funciona apenas tirando 1 no d20?</h3>
                    <p>Não. O Backlash NÃO acontece só no 1. Ele é a consequência automática de lançar o ritual. Sempre acontece, mesmo em sucesso.</p>
                    <ul class="info-list">
                        <li>O teste principal decide se o ritual funciona ou falha.</li>
                        <li>O Backlash sempre existe.</li>
                        <li>Quanto maior a dificuldade e o esforço, pior o Backlash.</li>
                        <li>Preparação melhor e rolagem alta reduzem o Backlash, mas não o eliminam.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>Existe meio de baixar o Backlash?</h3>
                    <p>Sim, há formas de reduzir, mas nunca eliminar completamente. Esta é uma regra central do Ocultista: todo ritual tem preço.</p>
                    <ul class="info-list">
                        <li>Preparação cuidadosa reduz o Backlash.</li>
                        <li>Rituais menores têm Backlash mais leve.</li>
                        <li>Rolagens altas (15+) reduzem o Backlash.</li>
                        <li>Uso controlado de Esforço diminui o risco.</li>
                        <li>Ajuda de outros jogadores pode reduzir o Backlash em 1 nível.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>Enxertos</h3>
                    <p>Enxertos são itens anômalos que o Ocultista carrega e usa como ferramentas ou amplificadores.</p>
                    <ul class="info-list">
                        <li>O Ocultista pode carregar até 3 enxertos ao mesmo tempo.</li>
                        <li>Cada enxerto tem 1 a 3 usos antes de se degradar ou ficar instável.</li>
                        <li>Usar um enxerto em um ritual reduz a dificuldade em 1 passo ou diminui o Backlash em 1 nível.</li>
                        <li>Enxertos mais poderosos podem ter efeitos únicos, mas aumentam o risco de Corrupção.</li>
                    </ul>
                </div>
                
                <div class="card-clean">
                    <h3>O que muda ao escolher um Pilar?</h3>
                    <p>Escolher um Pilar Primário define como você faz rituais, qual custo você paga, qual efeito é mais fácil e qual tipo de Backlash é mais comum.</p>
                    <ul class="info-list">
                        <li><strong>Tipo de efeito:</strong> cada pilar tem força em certos rituais.</li>
                        <li><strong>Custo secundário:</strong> o pilar define qual outra Reserva você usa além de Aura.</li>
                        <li><strong>Facilidade:</strong> rituais do seu Pilar Primário são mais fáceis (redução de 1 passo).</li>
                        <li><strong>Backlash:</strong> o tipo de consequência varia conforme o pilar.</li>
                        <li><strong>Estilo narrativo:</strong> muda como você descreve e realiza o ritual.</li>
                    </ul>
                    <p>Rituais do seu Pilar Primário são mais baratos, mais fáceis e têm Backlash mais previsível.</p>
                </div>
                
                <div class="card-clean">
                    <h3>Exemplos práticos</h3>
                    <ul class="info-list">
                        <li><strong>Pilar Primário: Forma</strong> — ritual de transformação corporal é mais fácil, mais barato e o Backlash tende a ser mutação ou dor física.</li>
                        <li><strong>Pilar Primário: Pináculo</strong> — ritual de runas e memórias é mais controlado; ritual de transformação corporal fica mais difícil, mais caro e com backlash mais imprevisível.</li>
                    </ul>
                </div>
                
                <div class="card-clean text-center">
                    <p class="text-dim" style="font-style:italic">"O que se abre, não se fecha."</p>
                    <p class="text-mono text-sm" style="color:var(--gold-dim); margin-top:6px;">OCSUS LIMIARES · v1.0</p>
                </div>
            </section>
        `,
        bind() {}
    };
};

// ============================================================
// HELPERS
// ============================================================
function formatPillarNames(pillars) {
    if (Array.isArray(pillars)) {
        return pillars.map(id => PILLARS[id]?.name || id).join(' + ');
    }
    if (!pillars) return '';
    return PILLARS[pillars]?.name || pillars;
}

function escapeHtml(s) {
    if (!s) return '';
    return String(s).replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[ch]);
}

// Exportar ritual como imagem (PNG) via canvas
function exportRitual(ritual) {
    try {
        const card = document.getElementById('ritual-card');
        if (!card) { App.toast('Nada para exportar.'); return; }
        
        // Tenta usar Web Share API com o texto
        const pillarNames = formatPillarNames(ritual.pillars || ritual.pillar) || 'Ritual';
        const primaryPillar = Array.isArray(ritual.pillars) ? PILLARS[ritual.pillars[0]] : PILLARS[ritual.pillar];
        const cost = GRADE_COSTS[ritual.grade];
        const costText = ritual.cost ? ritual.cost : `${cost.aura} Aura + ${cost.secondary} ${primaryPillar ? primaryPillar.reserveName : 'Reserva'}`;
        const text = `⟁ ${ritual.name}
Grau ${ritual.grade} · ${pillarNames}
Custo: ${costText}
NA: ${cost.difficulty[0]*3}–${cost.difficulty[1]*3}

EFEITO: ${ritual.effect}

BACKLASH: ${ritual.backlash}

— Ocsus Limiares`;
        
        if (navigator.share) {
            navigator.share({ title: ritual.name, text }).catch(() => fallbackCopy(text));
        } else {
            fallbackCopy(text);
        }
    } catch (e) {
        App.toast('Falha ao exportar.');
    }
}

function fallbackCopy(text) {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                App.toast('Ritual copiado para a área de transferência.');
            }).catch(() => {
                App.showModal(`<h3>Ritual (copie o texto)</h3><textarea class="form-textarea" readonly style="min-height:300px; margin-top:12px;">${escapeHtml(text)}</textarea>`);
            });
        } else {
            App.showModal(`<h3>Ritual (copie o texto)</h3><textarea class="form-textarea" readonly style="min-height:300px; margin-top:12px;">${escapeHtml(text)}</textarea>`);
        }
    } catch {
        App.showModal(`<h3>Ritual</h3><pre style="white-space:pre-wrap; color:var(--ink); font-family:var(--font-body); margin-top:12px;">${escapeHtml(text)}</pre>`);
    }
}
