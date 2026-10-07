/*
 * aura/js/core/store.js
 * Gestão de estado global: Carrinho e Favoritos usando localStorage.
 */

window.AURA = window.AURA || {};

window.AURA.store = {
    state: {
        cart: [],
        favorites: [],
    },

    init() {
        this.load();
    },

    load() {
        try {
            const savedCart = localStorage.getItem('aura_cart');
            const savedFavs = localStorage.getItem('aura_favs');

            if (savedCart) this.state.cart = JSON.parse(savedCart);
            if (savedFavs) this.state.favorites = JSON.parse(savedFavs);
        } catch (e) {
            console.error("Erro ao carregar store do localStorage:", e);
        }
    },

    save() {
        try {
            localStorage.setItem('aura_cart', JSON.stringify(this.state.cart));
            localStorage.setItem('aura_favs', JSON.stringify(this.state.favorites));
        } catch (e) {
            console.warn("LocalStorage indisponível (modo privado): Dados não serão persistidos.");
        }
    },

    // --- Carrinho ---
    addToCart(productId) {
        const product = window.AURA_DATA.products.find(p => p.id === productId);
        if (!product) return;

        const existing = this.state.cart.find(item => item.id === productId);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.state.cart.push({ ...product, quantity: 1 });
        }

        this.save();
        this.emit('cartUpdated');
    },

    removeFromCart(productId) {
        this.state.cart = this.state.cart.filter(item => item.id !== productId);
        this.save();
        this.emit('cartUpdated');
    },

    updateQuantity(productId, delta) {
        const item = this.state.cart.find(i => i.id === productId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.removeFromCart(productId);
        } else {
            this.save();
            this.emit('cartUpdated');
        }
    },

    getCartTotal() {
        return this.state.cart.reduce((sum, item) => sum + (item.precoCentavos * item.quantity), 0);
    },

    getCartCount() {
        return this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },

    // --- Favoritos ---
    toggleFavorite(productId) {
        const index = this.state.favorites.indexOf(productId);
        if (index > -1) {
            this.state.favorites.splice(index, 1);
        } else {
            this.state.favorites.push(productId);
        }
        this.save();
        this.emit('favsUpdated');
    },

    isFavorite(productId) {
        return this.state.favorites.includes(productId);
    },

    // --- Event System Simple ---
    events: {},
    on(event, callback) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    },

    emit(event) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(this.state));
        }
    }
};
