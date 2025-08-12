# 🚀 CONECTA Landing Page

Landing page profissional para a empresa CONECTA, desenvolvida com Vue 3 + Vite + TypeScript + Tailwind CSS.

## ✨ Características

- **Vue 3** com Composition API
- **TypeScript** para tipagem segura
- **Tailwind CSS** para estilização
- **Vite** para build rápido
- **ESLint + Prettier** para qualidade de código
- **SEO otimizado** com meta tags e sitemap
- **Formulário de contato** integrado
- **Responsivo** e mobile-first
- **Animações suaves** com @vueuse/motion
- **Carrossel de depoimentos** interativo
- **Contadores animados** para métricas
- **Microinterações** em botões e cards

## 🎬 Sistema de Animações

A landing page inclui um sistema completo de animações:

### Presets Disponíveis
- `fadeInUp` - Fade com movimento para cima
- `fadeIn` - Fade simples
- `slideInLeft/Right` - Slide horizontal
- `scaleIn` - Escala com fade
- `heroTitle/Subtitle/CTA` - Animações específicas do Hero
- `buttonHover` - Hover em botões
- `cardHover` - Hover em cards

### Como Usar
```vue
<template>
  <div v-motion="motionPresets.fadeInUp">
    Conteúdo animado
  </div>
</template>

<script setup>
import { motionPresets } from '@/plugins/motion'
</script>
```

### Stagger em Grids
```vue
<template>
  <div 
    v-for="(item, index) in items" 
    :key="index"
    v-motion="motionPresets.fadeInUp"
    :delay="100 * (index + 1)"
  >
    {{ item.title }}
  </div>
</template>
```

### Reduced Motion
O sistema respeita automaticamente a preferência `prefers-reduced-motion` do usuário.

**📖 Documentação completa:** [ANIMATIONS.md](./ANIMATIONS.md)

## 🛠️ Stack Tecnológica

- **Frontend:** Vue 3 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** @vueuse/motion
- **Router:** Vue Router
- **Linting:** ESLint + Prettier
- **Deploy:** Vercel/Netlify

## 📦 Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd conecta-web

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute em desenvolvimento
npm run dev
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
# Formulário de Contato
VITE_FORM_ENDPOINT=https://formspree.io/f/your-form-id

# Analytics
VITE_GA_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXXX

# WhatsApp
VITE_WHATSAPP_NUMBER=5528999710377

# Site
VITE_SITE_URL=https://conecta.com.br

# Meta Tags
VITE_SITE_TITLE=CONECTA - Soluções Empresariais
VITE_SITE_DESCRIPTION=Transforme seu negócio com soluções inovadoras da CONECTA
```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint

# Formatação
npm run format

# Type checking
npm run type-check

# Gerar sitemap
npm run gen:sitemap
```

## 🎨 Personalização

### Cores da Identidade Visual

Edite `src/assets/styles/theme.css`:

```css
:root {
  --color-primary: #5c984c;   /* verde principal */
  --color-secondary: #b1d256; /* verde secundário */
  --color-accent: #d0e18a;    /* verde claro */
}
```

### Conteúdo

Substitua os marcadores `TODO:` em cada seção:

- **Hero:** Título, subtítulo, CTA
- **About:** Texto institucional, números
- **Services:** Lista de serviços
- **Benefits:** Diferenciais da empresa
- **How It Works:** Passo a passo
- **Testimonials:** Depoimentos reais
- **Contact:** Informações de contato
- **Footer:** Links e informações

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   ├── images/           # Imagens
│   └── styles/           # Estilos globais
├── components/
│   ├── ui/              # Componentes reutilizáveis
│   └── Header.vue       # Header da página
├── composables/          # Lógica reutilizável
├── pages/
│   ├── sections/        # Seções da landing
│   └── Home.vue         # Página principal
├── plugins/             # Plugins (motion)
├── router/              # Configuração de rotas
├── services/            # Serviços (API)
└── utils/               # Utilitários
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify

1. Conecte ao repositório
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

### GitHub Pages

```bash
npm run build
# Faça upload da pasta dist/
```

## 🔍 SEO

### Meta Tags
- Título e descrição otimizados
- Open Graph para redes sociais
- Twitter Cards
- Favicon personalizado

### Performance
- Lazy loading de imagens
- Code splitting automático
- Otimização de CSS/JS
- Compressão de assets

### Analytics
- Google Analytics 4
- Google Tag Manager
- Eventos personalizados

## 🧪 Qualidade

### Linting
- ESLint configurado para Vue 3
- Prettier para formatação
- Regras para TypeScript

### TypeScript
- Tipagem estrita
- Interfaces bem definidas
- Composable tipados

### Performance
- Lighthouse score > 90
- Core Web Vitals otimizados
- Bundle size otimizado

## 📈 Roadmap

- [ ] Blog integrado
- [ ] CMS headless
- [ ] Analytics avançados
- [ ] A/B testing
- [ ] Chatbot
- [ ] PWA
- [ ] Dark mode
- [ ] Multi-language

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feat/nova-feature`
3. Commit: `git commit -m 'feat: adiciona nova feature'`
4. Push: `git push origin feat/nova-feature`
5. Abra um Pull Request

### Padrões de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:

- **Email:** contato@conecta.com.br
- **WhatsApp:** (11) 99999-9999
- **Site:** https://conecta.com.br

---

**Desenvolvido com ❤️ para a CONECTA** 🚀
