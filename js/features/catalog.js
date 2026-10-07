/*
 * aura/js/features/catalog.js
 * Lógica de filtragem, ordenação e renderização da loja.
 */

window.AURA = window.AURA || {};

window.AURA.catalog = {
    currentFilters: {
        category: 'all',
        sort: 'default',
        priceRange: 'all'
    },

    init() {
        if (document.getElementById('product-grid')) {
            this.bindEvents();
            this.render();
        }
    },

    bindEvents() {
        // Category filters
        document.querySelectorAll('.filter-cat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cat = e.target.dataset.category;
                this.setFilter('category', cat);
            });
        });

        // Sort dropdown
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.setFilter('sort', e.target.value);
            });
        }
    },

    setFilter(key, value) {
        this.currentFilters[key] = value;
        this.updateURL();
        this.render();
    },

    updateURL() {
        const params = new URLSearchParams();
        if (this.currentFilters.category !== 'all') params.set('category', this.currentFilters.category);
        if (this.currentFilters.sort !== 'default') params.set('sort', this.currentFilters.sort);

        const newURL = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState({}, '', newURL);
    },

    getFilteredProducts() {
        let products = [...window.AURA_DATA.products];

        // Category Filter
        if (this.currentFilters.category !== 'all') {
            products = products.filter(p => p.categoria === this.currentFilters.category);
        }

        // Sorting
        switch (this.currentFilters.sort) {
            case 'price-asc':
                products.sort((a, b) => a.precoCentavos - b.precoCentavos);
                break;
            case 'price-desc':
                products.sort((a, b) => b.precoCentavos - a.precoCentavos);
                break;
            case 'newest':
                products.sort((a, b) => b.id - a.id);
                break;
        }

        return products;
    },

    render() {
        const grid = document.getElementById('product-grid');
        if (!grid) return;

        const filtered = this.getFilteredProducts();

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-20">
                    <p class="text-aura-text-muted font-light text-lg">Nenhuma peça encontrada com esses filtros.</p>
                    <button onclick="location.reload()" class="mt-6 btn btn-outline text-[10px]">Limpar Filtros</button>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map(product => `
            <div class="product-card group reveal">
                <div class="img-wrapper aspect-[3/4] bg-aura-stone overflow-hidden">
                    <img src="${product.imagens[0]}" alt="${product.nome}" loading="lazy" decoding="async">
                    <button onclick="window.AURA.cart.addToCart(${product.id})" class="quick-add">
                        Adicionar ao Carrinho
                    </button>
                </div>
                <div class="product-info">
                    <div class="max-w-[70%]">
                        <h3 class="product-name">${window.AURA.utils.escapeHTML(product.nome)}</h3>
                        <p class="product-meta">${product.categoria}</p>
                    </div>
                    <span class="product-price">${window.AURA.utils.formatCurrency(product.precoCentavos)}</span>
                </div>
            </div>
        `).join('');

        // Trigger animations
        window.AURA.animations.initScrollReveal();
    }
};
