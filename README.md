# AURA | Curadoria de Design & Decoração

Este projeto é a reconstrução total da loja AURA, migrando de um layout genérico para uma experiência de e-commerce de luxo com foco em design editorial, performance e zero estética de IA.

## 🎨 Direção de Arte

### Identidade Visual
- **Conceito:** Design honesto. Foco na materialidade (pedra, madeira, cerâmica).
- **Paleta de Cores:**
  - Dominante: Cinza Pedra (`#EBEBEB`) - Remete a concreto e linho.
  - Apoio: Branco Papel (`#FBFBFB`) - Para respiro e clareza.
  - Acento: Terracota Queimada (`#8D5B4C`) - Cor orgânica, ligada à cerâmica e terra.
  - Contraste: Verde Floresta Profundo (`#2D352D`) - Elegância, estabilidade e natureza.
- **Tipografia:**
  - Títulos: **Newsreader** (Google Fonts) - Estética editorial, serifada, transmite autoridade e tradição.
  - UI/Corpo: **Hanken Grotesque** (Google Fonts) - Moderna, geométrica, alta legibilidade.

### Grid e Ritmo
- Sistema de 12 colunas com quebras assimétricas.
- Alternância de seções: Claro (Branco) $\rightarrow$ Neutro (Cinza Pedra) $\rightarrow$ Escuro (Verde Floresta).
- Imagens com proporções variadas (Portrait, Landscape, Square) para evitar o efeito de "grid de cards".

## 🛠️ Guia Técnico

### Como abrir o site
1. Navegue até a pasta `C:/Users/Pichau/Documents/aura/`.
2. Dê um duplo clique no arquivo `index.html`.
3. O site funciona via protocolo `file://`, sem necessidade de servidor local.

### Como adicionar um novo produto
1. Abra o arquivo `js/data/products.js`.
2. Adicione um novo objeto ao array `AURA_DATA.products` seguindo a estrutura:
   ```javascript
   {
     id: 101,
     sku: 'AU-0101',
     slug: 'nome-do-produto',
     nome: 'Nome Real',
     precoCentavos: 125000, // R$ 1.250,00
     // ... demais campos técnicos
   }
   ```
3. O site atualizará automaticamente a página de Loja e a Home.

## 📸 Guia de Imagens (Substituição)
As imagens atuais utilizam Unsplash. Para a versão final, substitua as fotos nos arquivos de dados (`products.js` e `content.js`) por fotos reais seguindo estas diretrizes:
- **Produtos:** Fundo neutro, luz natural lateral, mínimo de 3 ângulos (frontal, detalhe do material, contexto de uso).
- **Ambientes:** Fotos de "lifestyle" com profundidade de campo (bokeh) e composição assimétrica.
- **Designers:** Retratos em preto e branco ou tons terrosos, luz suave.

## ⚖️ Auditoria de "Anti-IA"
- [x] Zero blobs/orbes de fundo.
- [x] Zero trios de ícones em círculos.
- [x] Zero frases como "transcende a função" ou "poesia do minimalismo".
- [x] Textos concretos (medidas, materiais, origens).
- [x] Grid editorial assimétrico.
- [x] Sem sombras `shadow-2xl` genéricas.
