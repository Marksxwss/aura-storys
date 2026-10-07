/*
 * aura/js/features/cart.js
 * Lógica de interação do carrinho e feedbacks.
 */

window.AURA = window.AURA || {};

window.AURA.cart = {
    init() {
        this.bindEvents();
        this.updateUI();
    },

    bindEvents() {
        const btnOpen = document.getElementById('cart-btn');
        const btnClose = document.getElementById('close-cart');
        const overlay = document.getElementById('cart-overlay');
        const checkoutBtn = document.getElementById('checkout-btn');

        if (btnOpen) btnOpen.addEventListener('click', () => this.toggleDrawer(true));
        if (btnClose) btnClose.addEventListener('click', () => this.toggleDrawer(false));
        if (overlay) overlay.addEventListener('click', () => this.toggleDrawer(false));
        if (checkoutBtn) checkoutBtn.addEventListener('click', () => window.location.href = 'checkout.html');

        // Listen to store updates
        window.AURA.store.on('cartUpdated', () => this.updateUI());
    },

    toggleDrawer(isOpen) {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');

        if (isOpen) {
            drawer.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            drawer.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    updateUI() {
        const itemsContainer = document.getElementById('cart-items');
        const countEl = document.getElementById('cart-count');
        const totalEl = document.getElementById('cart-total');
        const state = window.AURA.store.state;

        if (!countEl || !totalEl) return;

        countEl.innerText = window.AURA.store.getCartCount();

        if (state.cart.length === 0) {
            itemsContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full text-center py-20">
                    <p class="text-aura-text-muted font-light mb-6">Seu carrinho está vazio.</p>
                    <a href="loja.html" class="btn btn-outline text-[10px]">Explorar Coleção</a>
                </div>
            `;
            totalEl.innerText = window.AURA.utils.formatCurrency(0);
            return;
        }

        itemsContainer.innerHTML = state.cart.map((item, index) => `
            <div class="flex gap-6 mb-8 animate-fade-in-up" style="animation-delay: ${index * 0.1}s">
                <div class="w-20 h-24 bg-aura-stone overflow-hidden">
                    <img src="${item.imagens[0]}" alt="${item.nome}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="text-sm font-medium">${window.AURA.utils.escapeHTML(item.nome)}</h4>
                        <span class="text-sm font-serif">${window.AURA.utils.formatCurrency(item.precoCentavos)}</span>
                    </div>
                    <p class="text-[11px] text-aura-text-muted mb-4 uppercase tracking-wider">${item.categoria}</p>
                    <div class="flex items-center gap-4">
                        <div class="flex items-center border border-aura-border px-2 py-1">
                            <button onclick="window.AURA.cart.updateQty(${item.id}, -1)" class="px-2 hover:text-aura-terracotta">-</button>
                            <span class="px-3 text-xs">${item.quantity}</span>
                            <button onclick="window.AURA.cart.updateQty(${item.id}, 1)" class="px-2 hover:text-aura-terracotta">+</button>
                        </div>
                        <button onclick="window.AURA.cart.remove(${item.id})" class="text-[10px] uppercase tracking-widest text-aura-text-muted hover:text-aura-text-main transition-colors">Remover</button>
                    </div>
                </div>
            </div>
        `).join('');

        totalEl.innerText = window.AURA.utils.formatCurrency(window.AURA.store.getCartTotal());
    },

    updateQty(id, delta) {
        window.AURA.store.updateQuantity(id, delta);
    },

    remove(id) {
        window.AURA.store.removeFromCart(id);
    },

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-10 right-10 bg-aura-forest text-white px-6 py-4 text-xs uppercase tracking-widest z-[1000] animate-fade-in-up';
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }
};
