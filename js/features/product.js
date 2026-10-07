/*
 * aura/js/features/product.js
 * Gestão da página de produto: galeria, variações e frete.
 */

window.AURA = window.AURA || {};

window.AURA.product = {
    init() {
        const productId = new URLSearchParams(window.location.search).get('id');
        if (!productId) {
            window.location.href = 'loja.html';
            return;
        }

        this.product = window.AURA_DATA.products.find(p => p.id == productId);
        if (!this.product) {
            window.location.href = '404.html';
            return;
        }

        this.render();
        this.bindEvents();
    },

    render() {
        const p = this.product;

        // Injeta Galeria
        const gallery = document.getElementById('product-gallery');
        if (gallery) {
            gallery.innerHTML = `
                <div class="product-main-img">
                    <img src="${p.imagens[0]}" alt="${p.nome}" class="w-full h-full object-cover">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    ${p.imagens.slice(1).map(img => `
                        <img src="${img}" alt="${p.nome} detalhe" class="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity" onclick="window.AURA.product.swapImage(this.src)">
                    `).join('')}
                </div>
            `;
        }

        // Injeta Detalhes
        const details = document.getElementById('product-details');
        if (details) {
            details.innerHTML = `
                <div class="mb-2 text-[11px] uppercase tracking-widest text-aura-terracotta font-bold">${p.selos[0] || ''}</div>
                <h1 class="text-4xl font-serif mb-4">${window.AURA.utils.escapeHTML(p.nome)}</h1>
                <div class="text-2xl font-serif mb-8">${window.AURA.utils.formatCurrency(p.precoCentavos)}</div>

                <div class="mb-8">
                    <p class="text-aura-text-muted font-light leading-relaxed">${p.descricaoCurta}</p>
                </div>

                <div class="mb-10">
                    <h4 class="text-xs uppercase tracking-widest font-bold mb-4">Especificações Técnicas</h4>
                    <ul class="text-sm text-aura-text-muted space-y-2 font-light">
                        ${p.fichaTecnica.map(item => `<li>• ${item}</li>`).join('')}
                    </ul>
                </div>

                <div class="mb-10">
                    <h4 class="text-xs uppercase tracking-widest font-bold mb-4">Material e Origem</h4>
                    <p class="text-sm text-aura-text-muted font-light">
                        ${p.materiais.join(', ')} | ${p.atelie}, ${p.cidadeDeOrigem}.
                    </p>
                </div>

                <div class="flex gap-4 mb-12">
                    <button onclick="window.AURA.cart.addToCart(${p.id})" class="btn btn-primary flex-1">Adicionar ao Carrinho</button>
                    <button onclick="window.AURA.store.toggleFavorite(${p.id})" class="p-4 border border-aura-border hover:bg-aura-stone transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>

                <div class="border-t border-aura-border pt-8">
                    <h4 class="text-xs uppercase tracking-widest font-bold mb-4">Cuidados</h4>
                    <p class="text-xs text-aura-text-muted font-light">${p.cuidados}</p>
                </div>
            `;
        }
    },

    swapImage(src) {
        const mainImg = document.querySelector('.product-main-img img');
        if (mainImg) mainImg.src = src;
    },

    bindEvents() {
        // Simulação de cálculo de frete
        const zipInput = document.getElementById('zip-input');
        const zipBtn = document.getElementById('zip-btn');
        if (zipBtn && zipInput) {
            zipBtn.addEventListener('click', () => {
                const zip = zipInput.value;
                if (zip.length === 8) {
                    const region = 'sul'; // Simplificado para o demo
                    const shipping = window.AURA_CONFIG.shipping.regions[region];
                    document.getElementById('shipping-result').innerText = `Frete para ${region}: ${window.AURA.utils.formatCurrency(shipping.base)} (${shipping.time})`;
                }
            });
        }
    }
};
