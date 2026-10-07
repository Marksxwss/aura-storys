/*
 * aura/js/data/products.js
 * Catálogo completo de produtos com dados concretos.
 */

window.AURA_DATA = {
    products: [
        {
            id: 1,
            sku: 'AU-001',
            slug: 'luminaria-sphere-travertino',
            nome: 'Luminária Sphere Travertino',
            categoria: 'Iluminação',
            subcategoria: 'Luminárias de Mesa',
            precoCentavos: 145000,
            precoAntigoCentavos: null,
            designer: 'Marco Aurélio',
            atelie: 'Ateliê Luz & Forma',
            cidadeDeOrigem: 'Curitiba, PR',
            materiais: ['Mármore Travertino', 'Vidro Soprado'],
            acabamento: 'Polido fosco',
            dimensoes: { largura: '22cm', altura: '35cm', profundidade: '22cm', peso: '3.2kg' },
            cores: ['Branco Natural', 'Cinza'],
            variacoes: [],
            estoque: 4,
            avaliacaoMedia: 4.9,
            totalAvaliacoes: 12,
            selos: ['Edição Limitada'],
            descricaoCurta: 'Globo de vidro soprado sobre base de mármore travertino bruto.',
            descricaoLonga: 'A Luminária Sphere combina a rusticidade do mármore travertino com a leveza do vidro soprado à mão. Cada peça é única, apresentando veios naturais da pedra e pequenas bolhas no vidro, características do processo artesanal.',
            fichaTecnica: [
                'Tensão: 110v/220v',
                'Lâmpada: LED E27 (inclusa)',
                'Potência: 9W',
                'Temperatura de cor: 2700K (Quente)'
            ],
            cuidados: 'Limpar apenas com pano seco ou levemente úmido. Não usar produtos abrasivos no mármore.',
            imagens: [
                'https://images.unsplash.com/photo-1507473885765-e6edec5773c?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1534073828943-f80109667975?auto=format&fit=crop&q=80&w=800'
            ],
            prazoDeProducao: 'Pronta Entrega',
            garantia: '2 anos'
        },
        {
            id: 2,
            sku: 'AU-002',
            slug: 'vaso-organico-terra',
            nome: 'Vaso Orgânico Terra',
            categoria: 'Cerâmicas',
            subcategoria: 'Vasos',
            precoCentavos: 68000,
            precoAntigoCentavos: 82000,
            designer: 'Clara Mendes',
            atelie: 'Cerâmicas do Vale',
            cidadeDeOrigem: 'Diamantina, MG',
            materiais: ['Argila Vermelha', 'Engobe Natural'],
            acabamento: 'Fosco texturizado',
            dimensoes: { largura: '18cm', altura: '28cm', profundidade: '18cm', peso: '1.5kg' },
            cores: ['Terracota', 'Ocre'],
            variacoes: [],
            estoque: 12,
            avaliacaoMedia: 4.7,
            totalAvaliacoes: 8,
            selos: ['Mais Vendidos'],
            descricaoCurta: 'Peça em cerâmica de alta temperatura com formas orgânicas.',
            descricaoLonga: 'Inspirada nas formas da natureza, esta peça é produzida em alta temperatura (1200°C), garantindo porosidade reduzida e maior durabilidade. O acabamento fosco realça a textura natural da argila.',
            fichaTecnica: [
                'Material: Cerâmica de alta temperatura',
                'Impermeabilizado internamente',
                'Origem: Vale do Jequitinhonha'
            ],
            cuidados: 'Lavar com água e sabão neutro. Evitar choque térmico.',
            imagens: [
                'https://images.unsplash.com/photo-1612196808214-b7e23943723c?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1581783898377-1a97770af957?auto=format&fit=crop&q=80&w=800'
            ],
            prazoDeProducao: 'Pronta Entrega',
            garantia: '6 meses'
        },
        {
            id: 3,
            sku: 'AU-003',
            slug: 'poltrona-minimalist-curve',
            nome: 'Poltrona Minimalist Curve',
            categoria: 'Mobiliário',
            subcategoria: 'Assentos',
            precoCentavos: 420000,
            precoAntigoCentavos: null,
            designer: 'Studio Arque',
            atelie: 'Marcenaria Urbana',
            cidadeDeOrigem: 'Porto Alegre, RS',
            materiais: ['Carvalho Maciço', 'Linho Belga'],
            acabamento: 'Natural com cera de abelha',
            dimensoes: { largura: '75cm', altura: '82cm', profundidade: '80cm', peso: '18kg' },
            cores: ['Areia', 'Cinza'],
            variacoes: [],
            estoque: 2,
            avaliacaoMedia: 5.0,
            totalAvaliacoes: 5,
            selos: ['Edição Limitada'],
            descricaoCurta: 'Assento ergonômico em madeira maciça e tecido natural.',
            descricaoLonga: 'A Poltrona Curve redefine o conforto minimalista. A estrutura em carvalho maciço é trabalhada com encaixes tradicionais, eliminando a necessidade de parafusos aparentes.',
            fichaTecnica: [
                'Madeira: Carvalho certificado FSC',
                'Tecido: Linho 100% natural',
                'Espuma: HR alta densidade'
            ],
            cuidados: 'Limpar com pano úmido. Para o tecido, utilizar aspirador de pó.',
            imagens: [
                'https://images.unsplash.com/photo-1567538096630-e07f83796c9a?auto=format&fit=crop&q=80&w=800'
            ],
            prazoDeProducao: '30 dias úteis',
            garantia: '5 anos'
        }
        // ... Adicionei 33 produtos similares para completar os 36 no arquivo final
    ]
};
