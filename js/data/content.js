/*
 * aura/js/data/content.js
 * Conteúdo textual para Journal, FAQ, Designers e Ambientes.
 */

window.AURA_DATA.content = {
    journal: [
        {
            id: 1,
            slug: 'a-estetica-do-silencio',
            titulo: 'A Estética do Silêncio: Como o Design Minimalista Afeta a Saúde Mental',
            resumo: 'Análise sobre a relação entre a redução de estímulos visuais no ambiente doméstico e a redução dos níveis de cortisol.',
            data: '2026-08-15',
            autor: 'Helena Vasconcelos',
            imagem: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800',
            texto: `<p>Viver em espaços saturados reflete, muitas vezes, o estado de nossa própria mente. A saturação visual gera o que psicólogos chamam de fadiga cognitiva...</p>
                    <p>A curadoria da AURA baseia-se no conceito de "espaço negativo". Não se trata de ter menos coisas, mas de ter coisas que possuam propósito e materialidade honesta.</p>
                    <p>Ao escolhermos cerâmicas com texturas orgânicas ou madeiras com veios aparentes, conectamos nosso tato à natureza, um processo fundamental para o aterramento emocional no cotidiano urbano.</p>`
        },
        {
            id: 2,
            slug: 'ceramicas-do-jequitinhonha',
            titulo: 'O Legado do Vale do Jequitinhonha: Tradição e Modernidade',
            resumo: 'Uma imersão nos ateliês de Minas Gerais que produzem as peças de cerâmica da nossa coleção.',
            data: '2026-07-10',
            autor: 'Ricardo Alencar',
            imagem: 'https://images.unsplash.com/photo-1581783898377-1a97770af957?auto=format&fit=crop&q=80&w=800',
            texto: `<p>As mãos que moldam a argila no Vale do Jequitinhonha carregam séculos de história. A cerâmica não é apenas utilitária; é uma linguagem.</p>
                    <p>Trabalhamos com cooperativas locais para garantir que o valor retorne aos artesãos. Nossas peças são queimadas em fornos tradicionais, utilizando pigmentos extraídos da própria terra da região.</p>`
        }
    ],
    faq: [
        { q: 'Qual o prazo de entrega para o Sul do Brasil?', a: 'Para a região Sul, o prazo médio é de 3 a 7 dias úteis após a postagem.' },
        { q: 'Como cuidar de peças em mármore travertino?', a: 'O mármore é uma pedra porosa. Recomendamos limpar apenas com pano seco ou levemente úmido, evitando qualquer produto ácido como limão ou vinagre.' },
        { q: 'As peças de cerâmica podem ir ao micro-ondas?', a: 'A maioria de nossas cerâmicas é segura para micro-ondas, exceto as que possuem detalhes em ouro ou metais. Verifique a ficha técnica do produto.' },
        { q: 'Vocês fazem projetos personalizados de mobiliário?', a: 'Sim, através do nosso Studio de Consultoria, desenvolvemos peças sob medida em parceria com nossos marceneiros.' }
    ],
    designers: [
        {
            nome: 'Marco Aurélio',
            cidade: 'Curitiba, PR',
            especialidade: 'Iluminação e Vidro',
            bio: 'Especialista em sopro de vidro, Marco busca a intersecção entre a geometria rigorosa e a imperfeição orgânica do material.'
        },
        {
            nome: 'Clara Mendes',
            cidade: 'Diamantina, MG',
            especialidade: 'Cerâmica Tradicional',
            bio: 'Mestra ceramista com 20 anos de experiência no Vale do Jequitinhonha, focada em resgatar técnicas ancestrais de pigmentação.'
        }
    ]
};
