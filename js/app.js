/* ============================================================
   Ocsus LIMIARES — CONTROLADOR PRINCIPAL
   ============================================================ */

const App = {
    state: {
        view: 'home',
        currentRitual: null,
        deferredPrompt: null
    },
    
    // ============ INIT ============
    init() {
        // Service worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js')
                    .then(reg => console.log('[SW] registrado:', reg.scope))
                    .catch(err => console.warn('[SW] falhou:', err));
            });
        }
        
        // PWA install prompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.state.deferredPrompt = e;
            const btn = document.getElementById('btn-install');
            if (btn) btn.classList.remove('hidden');
        });
        
        // Splash screen
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            const app = document.getElementById('app');
            if (splash) splash.classList.add('fade-out');
            if (app) app.classList.remove('hidden');
            setTimeout(() => splash && splash.remove(), 700);
        }, 1400);
        
        this.bindGlobalUI();
        this.handleRoute();
        window.addEventListener('hashchange', () => this.handleRoute());
    },
    
    // ============ GLOBAL UI BINDINGS ============
    bindGlobalUI() {
        // Menu drawer
        const drawer = document.getElementById('drawer');
        const overlay = document.getElementById('drawer-overlay');
        const btnMenu = document.getElementById('btn-menu');
        
        btnMenu.addEventListener('click', () => {
            drawer.classList.add('open');
            overlay.classList.add('open');
        });
        
        const closeDrawer = () => {
            drawer.classList.remove('open');
            overlay.classList.remove('open');
        };
        overlay.addEventListener('click', closeDrawer);
        
        document.querySelectorAll('.drawer-link').forEach(el => {
            el.addEventListener('click', () => {
                closeDrawer();
                this.go(el.dataset.view);
            });
        });
        
        // Bottom nav
        document.querySelectorAll('.bottom-nav .nav-item').forEach(el => {
            el.addEventListener('click', () => {
                this.go(el.dataset.view);
            });
        });
        
        // Install
        const btnInstall = document.getElementById('btn-install');
        btnInstall.addEventListener('click', () => this.promptInstall());
        
        // Modal
        const modal = document.getElementById('modal');
        const modalClose = document.getElementById('modal-close');
        modalClose.addEventListener('click', () => this.hideModal());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.hideModal();
        });
    },
    
    // ============ ROUTING ============
    handleRoute() {
        const hash = location.hash.replace('#', '') || 'home';
        const [view] = hash.split('/');
        if (Views[view]) {
            this.render(view);
        } else {
            this.render('home');
        }
    },
    
    go(view, ctx = null) {
        if (!Views[view]) view = 'home';
        if (ctx) {
            this._ctx = ctx;
        } else {
            this._ctx = null;
        }
        this.render(view, ctx);
        // Atualiza hash sem forçar reload (preview tem contexto, então não usamos hash)
        if (view !== 'preview') {
            history.replaceState(null, '', '#' + view);
        }
    },
    
    render(view, ctx) {
        const v = Views[view](ctx || this._ctx || {});
        const main = document.getElementById('main-view');
        main.innerHTML = v.html;
        main.scrollTop = 0;
        
        // Title
        document.getElementById('view-title').textContent = v.title || 'Ocsus Limiares';
        
        // Nav active state
        this.setActiveNav(view);
        
        // Bind
        if (typeof v.bind === 'function') v.bind(main);
        
        this.state.view = view;
    },
    
    setActiveNav(view) {
        // Bottom
        document.querySelectorAll('.bottom-nav .nav-item').forEach(el => {
            el.classList.toggle('active', el.dataset.view === view);
        });
        // Drawer
        document.querySelectorAll('.drawer-link').forEach(el => {
            el.classList.toggle('active', el.dataset.view === view);
        });
    },

    async promptInstall() {
        if (!this.state.deferredPrompt) {
            this.toast('Use o menu do navegador para instalar o app.');
            return;
        }
        try {
            this.state.deferredPrompt.prompt();
            const res = await this.state.deferredPrompt.userChoice;
            if (res.outcome === 'accepted') {
                this.toast('Ocsus instalado na tela inicial.');
            } else {
                this.toast('Instalação cancelada.');
            }
        } catch (err) {
            this.toast('Falha ao iniciar a instalação.');
        } finally {
            this.state.deferredPrompt = null;
            const btnInstall = document.getElementById('btn-install');
            if (btnInstall) btnInstall.classList.add('hidden');
        }
    },
    
    // ============ TOAST ============
    toast(msg, duration = 2400) {
        const t = document.getElementById('toast');
        t.textContent = msg;
        t.classList.add('show');
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => t.classList.remove('show'), duration);
    },
    
    // ============ MODAL ============
    showModal(html) {
        document.getElementById('modal-body').innerHTML = html;
        document.getElementById('modal').classList.add('open');
    },
    
    hideModal() {
        document.getElementById('modal').classList.remove('open');
    },
    
    confirm(title, msg, onOk) {
        this.showModal(`
            <h3 style="color:var(--gold); font-family:var(--font-display); letter-spacing:0.15em; margin-bottom:10px;">${title}</h3>
            <p style="margin-bottom:20px; color:var(--ink-dim);">${msg}</p>
            <div class="btn-row">
                <button class="btn btn-ghost" id="modal-cancel">Cancelar</button>
                <button class="btn btn-danger" id="modal-ok">Confirmar</button>
            </div>
        `);
        document.getElementById('modal-cancel').addEventListener('click', () => this.hideModal());
        document.getElementById('modal-ok').addEventListener('click', () => {
            this.hideModal();
            onOk && onOk();
        });
    }
};

// ============ BOOT ============
document.addEventListener('DOMContentLoaded', () => App.init());
