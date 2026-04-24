/* ============================================================
   OCULUS — RENDERIZAÇÃO DE VIEWS
   Cada view é uma função que retorna HTML + bind de eventos
   ============================================================ */

const Views = {};

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
                    <div class="hero-sigil">${generateSigil({ seed: 'oculus-home', pillar: 'pinaculo', grade: 3, size: 200 })}</div>
                    <h1>OCULUS LIMIARES</h1>
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
                        <i class="fas fa-pen-ruler"></i>
                        <h4>FORJAR</h4>
                        <p>Criar novo ritual</p>
                    </div>
                    <div class="quick-card" data-go="grimoire">
                        <i class="fas fa-book-skull"></i>
                        <h4>GRIMÓRIO</h4>
                        <p>${total} salvos</p>
                    </div>
                    <div class="quick-card" data-go="backlash">
                        <i class="fas fa-bolt"></i>
                        <h4>BACKLASH</h4>
                        <p>Calculadora</p>
                    </div>
                    <div class="quick-card" data-go="pillars">
                        <i class="fas fa-dharmachakra"></i>
                        <h4>PILARES</h4>
                        <p>Os cinco eixos</p>
                    </div>
                    <div class="quick-card" data-go="paradigms">
                        <i class="fas fa-user-secret"></i>
                        <h4>PARADIGMAS</h4>
                        <p>Escolas do Ocultismo</p>
                    </div>
                    <div class="quick-card" data-go="about">
                        <i class="fas fa-scroll"></i>
                        <h4>MANUAL</h4>
                        <p>Como usar</p>
                    </div>
                </div>
                <div class="install-panel">
                    <button class="btn btn-primary btn-block" id="btn-install-home"><i class="fas fa-download"></i> Instalar Oculus</button>
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
        pillar: 'pinaculo',
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
                <p class="view-intro">Escolha o Pilar, o Grau e o Paradigma. O sistema gerará um <em>sigilo único</em>, custos fiéis e narrativa estilizada.</p>
                
                <!-- PILAR -->
                <div class="form-group">
                    <label class="form-label">1. Pilar Metafísico</label>
                    <div class="chip-group" id="chips-pillar">
                        ${Object.values(PILLARS).map(p => `
                            <button class="chip ${draft.pillar === p.id ? 'active' : ''}" data-pillar="${p.id}">
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
                const p = PILLARS[state.pillar];
                root.querySelector('#pillar-hint').textContent = `${p.motto} — domínio: ${p.domain}. Custa ${p.reserveName} (além de Aura).`;
                
                const c = GRADE_COSTS[state.grade];
                root.querySelector('#grade-hint').textContent = `${c.label} — Custo base: ${c.aura} Aura + ${c.secondary} ${p.reserveName}. Dificuldade ${c.difficulty[0]}–${c.difficulty[1]}.`;
            };
            updateHints();
            
            // PILAR
            root.querySelectorAll('[data-pillar]').forEach(el => {
                el.addEventListener('click', () => {
                    root.querySelectorAll('[data-pillar]').forEach(x => x.classList.remove('active'));
                    el.classList.add('active');
                    state.pillar = el.dataset.pillar;
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
    const name = draft.name || generateRitualName(draft.pillar, seed);
    
    let effect;
    if (draft.customEffect) {
        effect = draft.customEffect;
    } else {
        const ex = generateEffect(draft.pillar, draft.grade, seed);
        effect = ex.effect + (ex.name !== name ? ` (inspirado em: ${ex.name})` : '');
    }
    
    return {
        id: draft.id || null,
        name,
        pillar: draft.pillar,
        grade: draft.grade,
        paradigm: draft.paradigm,
        seed,
        effect,
        customEffect: draft.customEffect || '',
        backlash: pickBacklash(draft.pillar, seed + 'bk')
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
    
    const pillar = PILLARS[ritual.pillar];
    const paradigm = PARADIGMS[ritual.paradigm];
    const cost = GRADE_COSTS[ritual.grade];
    const narrative = generateNarrative(ritual);
    const saved = !!ritual.id && !!Grimoire.get(ritual.id);
    
    return {
        title: 'RITUAL',
        html: `
            <section class="view" id="view-preview">
                <div class="ritual-preview" id="ritual-card">
                    <div class="sigil-display">${generateSigil({ seed: ritual.seed + ritual.name, pillar: ritual.pillar, grade: ritual.grade, size: 280 })}</div>
                    <h2 class="ritual-name">${escapeHtml(ritual.name)}</h2>
                    <p class="ritual-meta">Grau ${ritual.grade} · ${pillar.name} · ${paradigm.name.split(' ').slice(-1)[0]}</p>
                    
                    <div class="ritual-stats">
                        <div class="ritual-stat">
                            <div class="ritual-stat-label">Custo</div>
                            <div class="ritual-stat-val">${cost.aura}A + ${cost.secondary}${pillar.reserveName.charAt(0)}</div>
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
                        <p class="ritual-desc text-sm text-dim">Role <strong style="color:var(--gold)">1d20 + ${pillar.reserveName === 'Aura' ? 'Aura' : 'Aura (ou Intelecto)'}</strong> contra NA <strong style="color:var(--gold)">${cost.difficulty[0]*3}–${cost.difficulty[1]*3}</strong>. Treinado –3 · Especializado –6.</p>
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

function renderGrimItem(r) {
    const pillar = PILLARS[r.pillar];
    return `
        <div class="grim-item" data-open="${r.id}">
            <div class="grim-sigil">${generateSigil({ seed: r.seed + r.name, pillar: r.pillar, grade: r.grade, size: 56 })}</div>
            <div class="grim-info">
                <h4>${escapeHtml(r.name)}</h4>
                <div class="grim-meta">${pillar.name} · Grau ${r.grade}</div>
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
                <h2>◈ Manual do Oculus</h2>
                <p class="view-intro">Guia rápido de uso e fidelidade ao sistema.</p>
                
                <div class="card-clean">
                    <h3>O que é?</h3>
                    <p style="margin-top:8px;">Oculus Limiares é um <strong style="color:var(--gold)">PWA offline</strong> — aplicativo de celular que funciona sem internet após instalado — destinado a criar, visualizar e gerenciar rituais do RPG <em>Sistema Limiares</em>.</p>
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
                
                <div class="card-clean text-center">
                    <p class="text-dim" style="font-style:italic">"O que se abre, não se fecha."</p>
                    <p class="text-mono text-sm" style="color:var(--gold-dim); margin-top:6px;">OCULUS LIMIARES · v1.0</p>
                </div>
            </section>
        `,
        bind() {}
    };
};

// ============================================================
// HELPERS
// ============================================================
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
        const pillar = PILLARS[ritual.pillar];
        const cost = GRADE_COSTS[ritual.grade];
        const text = `⟁ ${ritual.name}
Grau ${ritual.grade} · ${pillar.name}
Custo: ${cost.aura} Aura + ${cost.secondary} ${pillar.reserveName}
NA: ${cost.difficulty[0]*3}–${cost.difficulty[1]*3}

EFEITO: ${ritual.effect}

BACKLASH: ${ritual.backlash}

— Oculus Limiares`;
        
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
