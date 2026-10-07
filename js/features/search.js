/*
 * aura/js/features/search.js
 * Busca em tempo real com debounce e resultados dinâmicos.
 */

window.AURA = window.AURA || {};

window.AURA.search = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        const btnSearch = document.getElementById('search-btn');
        if (!btnSearch) return;

        btnSearch.addEventListener('click', () => this.toggleSearch(true));

        // Listen for ESC key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.toggleSearch(false);
        });
    },

    toggleSearch(isOpen) {
        if (isOpen) {
            this.renderSearchPanel();
            document.getElementById('search-panel').classList.add('active');
            document.body.style.overflow = 'hidden';
            document.getElementById('search-input').focus();
        } else {
            document.getElementById('search-panel').classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    renderSearchPanel() {
        if (document.getElementById('search-panel')) return;

        const panel = document.createElement('div');
        panel.id = 'search-panel';
        panel.className = 'fixed inset-0 z-[1000] bg-aura-white transition-all duration-500 translate-y-full opacity-0 flex flex-col';
        panel.innerHTML = `
            <div class="p-6 flex justify-between items-center border-b border-aura-border">
                <span class="text-xs uppercase tracking-widest font-bold">Buscar na Curadoria</span>
                <button id="close-search" class="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="container py-20">
                <div class="relative max-w-3xl mx-auto">
                    <input type="text" id="search-input" placeholder="O que você procura?"
                        class="w-full text-4xl font-serif border-b-2 border-aura-border py-4 outline-none focus:border-aura-terracotta transition-colors">
                </div>
                <div id="search-results" class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            </div>
        `;
        document.body.appendChild(panel);

        document.getElementById('close-search').addEventListener('click', () => this.toggleSearch(false));
        document.getElementById('search-input').addEventListener('input', window.AURA.utils.debounce((e) => this.performSearch(e.target.value), 300));
    },

    performSearch(query) {
        const resultsContainer = document.getElementById('search-results');
        if (!query || query.length < 2) {
            resultsContainer.innerHTML = '';
            return;
        }

        const filtered = window.AURA_DATA.products.filter(p =>
            p.nome.toLowerCase().includes(query.toLowerCase()) ||
            p.categoria.toLowerCase().includes(query.toLowerCase()) ||
            p.descricaoCurta.toLowerCase().includes(query.toLowerCase())
        );

        if (filtered.length === 0) {
            resultsContainer.innerHTML = `<p class="col-span-3 text-center text-aura-text-muted font-light">Nenhuma peça encontrada para "${query}".</p>`;
            return;
        }

        resultsContainer.innerHTML = filtered.map(p => `
            <a href="produto.html?id=${p.id}" class="group flex gap-4 items-center p-4 border border-transparent hover:border-aura-border transition-all">
                <div class="w-16 h-16 bg-aura-stone overflow-hidden">
                    <img src="${p.imagens[0]}" class="w-full h-full object-cover group-hover:scale-110 transition-transform">
                </div>
                <div>
                    <h4 class="text-sm font-medium">${window.AURA.utils.escapeHTML(p.nome)}</h4>
                    <p class="text-xs text-aura-text-muted">${window.AURA.utils.formatCurrency(p.precoCentavos)}</p>
                </div>
            </a>
        `).join('');
    }
};
