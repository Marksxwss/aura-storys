/*
 * aura/js/core/layout.js
 * Injeção global de componentes repetitivos (Header, Footer, Drawer).
 */

window.AURA = window.AURA || {};

window.AURA.layout = {
    init() {
        this.injectHeader();
        this.injectFooter();
        this.injectCartDrawer();
        this.injectOverlay();
    },

    injectHeader() {
        const headerHTML = `
            <header class="main-header" id="main-header">
                <div class="container flex justify-between items-center">
                    <button class="lg:hidden p-2" id="menu-toggle" aria-label="Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <nav class="hidden lg:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-aura-muted">
                        <a href="loja.html" class="hover:text-aura-text-main transition-colors">Loja</a>
                        <a href="sobre.html" class="hover:text-aura-text-main transition-colors">Sobre</a>
                        <a href="journal.html" class="hover:text-aura-text-main transition-colors">Journal</a>
                    </nav>
                    <a href="index.html" class="text-2xl font-serif font-semibold tracking-tighter">AURA</a>
                    <div class="flex items-center gap-6">
                        <button id="search-btn" class="hover:text-aura-terracotta transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button id="cart-btn" class="relative hover:text-aura-terracotta transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span id="cart-count" class="absolute -top-2 -right-2 bg-aura-forest text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </button>
                    </div>
                </div>
            </header>
        `;
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    },

    injectFooter() {
        const footerHTML = `
            <footer class="py-20 px-6 border-t border-aura-border bg-aura-stone">
                <div class="container grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div class="col-span-1">
                        <a href="index.html" class="text-2xl font-serif font-semibold mb-6 block">AURA</a>
                        <p class="text-sm text-aura-text-muted font-light leading-relaxed">
                            Curadoria de objetos de design contemporâneo. <br>
                            Sede em Curitiba, PR.
                        </p>
                    </div>
                    <div>
                        <h5 class="text-[11px] uppercase tracking-widest font-bold mb-6">Loja</h5>
                        <ul class="text-sm text-aura-text-muted space-y-4 font-light">
                            <li><a href="loja.html" class="hover:text-aura-text-main transition-colors">Catálogo Completo</a></li>
                            <li><a href="cuidados.html" class="hover:text-aura-text-main transition-colors">Cuidados</a></li>
                            <li><a href="envios-e-entregas.html" class="hover:text-aura-text-main transition-colors">Envios</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="text-[11px] uppercase tracking-widest font-bold mb-6">Institucional</h5>
                        <ul class="text-sm text-aura-text-muted space-y-4 font-light">
                            <li><a href="sobre.html" class="hover:text-aura-text-main transition-colors">Sobre a Aura</a></li>
                            <li><a href="journal.html" class="hover:text-aura-text-main transition-colors">Journal</a></li>
                            <li><a href="contato.html" class="hover:text-aura-text-main transition-colors">Contato</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="text-[11px] uppercase tracking-widest font-bold mb-6">Legal</h5>
                        <ul class="text-sm text-aura-text-muted space-y-4 font-light">
                            <li><a href="privacidade.html" class="hover:text-aura-text-main transition-colors">Privacidade</a></li>
                            <li><a href="termos.html" class="hover:text-// terms.html" class="hover:text-aura-text-main transition-colors">Termos</a></li>
                        </ul>
                    </div>
                </div>
                <div class="container mt-20 pt-10 border-t border-aura-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p class="text-[10px] text-aura-text-muted uppercase tracking-widest">&copy; 2026 AURA | CNPJ: ${window.AURA_CONFIG.brand.cnpj}</p>
                    <div class="flex gap-6 text-[10px] text-aura-text-muted uppercase tracking-widest">
                        <span>Pix</span> <span>Visa</span> <span>Mastercard</span>
                    </div>
                </div>
            </footer>
        `;
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    },

    injectCartDrawer() {
        const drawerHTML = `
            <div id="cart-drawer" class="drawer">
                <div class="drawer-header">
                    <h3 class="text-xl font-serif">Carrinho</h3>
                    <button id="close-cart" aria-label="Fechar Carrinho">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div id="cart-items" class="drawer-content"></div>
                <div class="drawer-footer">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-[11px] uppercase tracking-widest text-aura-text-muted">Subtotal</span>
                        <span id="cart-total" class="text-xl font-serif">R$ 0,00</span>
                    </div>
                    <button id="checkout-btn" class="btn btn-primary w-full">Finalizar Pedido</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', drawerHTML);
    },

    injectOverlay() {
        const overlayHTML = `<div id="cart-overlay" class="drawer-overlay"></div>`;
        document.body.insertAdjacentHTML('beforeend', overlayHTML);
    }
};
