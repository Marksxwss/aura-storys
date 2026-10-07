/*
 * aura/js/data/config.js
 * Configurações globais, regras de negócio e textos fixos.
 */

window.AURA_CONFIG = {
    brand: {
        name: 'AURA',
        foundationYear: 2014,
        headquarters: 'Curitiba, PR',
        description: 'Curadoria de objetos de design e decoração contemporânea.',
        cnpj: '12.345.678/0001-90',
        address: 'Rua Visconde do Rio Branco, 1200, Centro, Curitiba - PR',
        phone: '(41) 3333-4444',
        email: 'contato@auradesign.com.br'
    },
    shipping: {
        freeOver: 59900, // R$ 599,00
        regions: {
            'sul': { base: 2500, time: '3-7 dias' },
            'sudeste': { base: 3500, time: '5-10 dias' },
            'centro_oeste': { base: 5000, time: '8-15 dias' },
            'nordeste': { base: 6500, time: '10-20 dias' },
            'norte': { base: 8000, time: '12-25 dias' }
        }
    },
    payments: {
        pixDiscount: 0.05, // 5%
        installments: 10,
        methods: ['Pix', 'Cartão de Crédito', 'Boleto']
    },
    coupons: {
        'BEMVINDO10': 0.10,
        'FRETEAURA': 'FREE_SHIPPING'
    }
};
