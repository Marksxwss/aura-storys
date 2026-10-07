
window.AURA = window.AURA || {};
window.AURA.cookies = {
    init() {
        try {
            if (localStorage.getItem('aura_cookie_consent')) return;
            this.renderBanner();
        } catch(e) {}
    },
    renderBanner() {
        try {
            const banner = document.createElement('div');
            banner.id = 'cookie-banner';
            banner.className = 'fixed bottom-0 left-0 w-full bg-aura-forest text-aura-white p-6 z-[1000]';
            banner.innerHTML = '<div class="container flex justify-between items-center"><p class="text-xs">Aceitamos cookies para melhorar sua experiência.</p><button id="accept-cookies" class="bg-white text-black px-4 py-2 text-[10px] uppercase font-bold">Aceitar</button></div>';
            document.body.appendChild(banner);
            const btn = document.getElementById('accept-cookies');
            if(btn) {
                btn.addEventListener('click', () => {
                    localStorage.setItem('aura_cookie_consent', 'true');
                    banner.remove();
                });
            }
        } catch(e) {}
    }
};
