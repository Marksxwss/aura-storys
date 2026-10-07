
window.AURA = window.AURA || {};

window.AURA.init = function() {
    console.log('AURA: Iniciando sistema...');
    
    const features = [
        'store', 'layout', 'animations', 'cart', 'search', 
        'catalog', 'product', 'checkout', 'forms', 'cookies'
    ];

    features.forEach(f => {
        try {
            if (window.AURA[f] && typeof window.AURA[f].init === 'function') {
                window.AURA[f].init();
            }
        } catch (e) {
            console.warn('AURA Feature ' + f + ' failed to init:', e);
        }
    });

    this.setupPageSpecifics();
};

window.AURA.setupPageSpecifics = function() {
    try {
        const path = window.location.pathname;
        if (path.includes('checkout.html')) {
            const header = document.getElementById('main-header');
            if (header) header.style.display = 'none';
        }
    } catch(e) {}
};

document.addEventListener('DOMContentLoaded', () => {
    try {
        window.AURA.init();
    } catch (e) {
        console.error('AURA Critical Init Error:', e);
    }
});
