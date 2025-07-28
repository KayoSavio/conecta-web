# CONECTA Landing Page

Landing page profissional para a empresa CONECTA, desenvolvida com Vue 3 + Vite + TypeScript + Tailwind CSS.

## 🚀 Stack Tecnológica

- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool rápida e moderna
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vue Router** - Roteamento oficial do Vue
- **ESLint + Prettier** - Linting e formatação de código

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd conecta-landing
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
```bash
cp env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
# Formulário de Contato
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# Google Analytics
VITE_GA_ID=G-XXXXXXXXXX

# Google Tag Manager
VITE_GTM_ID=GTM-XXXXXXX

# WhatsApp Business
VITE_WHATSAPP_NUMBER=5511999999999

# Site URL (para sitemap)
VITE_SITE_URL=https://conecta.com.br

# Meta tags
VITE_SITE_TITLE=CONECTA - Soluções Empresariais
VITE_SITE_DESCRIPTION=Soluções inovadoras para conectar seu negócio ao futuro
VITE_SITE_KEYWORDS=conecta, soluções empresariais, tecnologia, inovação
```

### 4. Execute o projeto
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção

# Qualidade de código
npm run lint         # Executa ESLint
npm run format       # Formata código com Prettier
npm run type-check   # Verifica tipos TypeScript

# SEO
npm run gen:sitemap  # Gera sitemap.xml
```

## 🎨 Personalização

### Cores da Identidade Visual

Para alterar as cores oficiais da CONECTA, edite o arquivo `src/assets/styles/theme.css`:

```css
:root {
  /* TODO: Substituir pelas cores oficiais da CONECTA */
  --color-primary: #1E5F3A;   /* verde escuro */
  --color-secondary: #4CAF50; /* verde claro */
  --color-accent: #FF8000;    /* laranja */
  --color-bg: #FFFFFF;
  --color-text: #0F172A;
  /* ... outras cores */
}
```

### Conteúdo

Todos os textos placeholder estão marcados com `<!-- TODO: -->` nos arquivos Vue. Substitua por:

- **Hero Section**: Headline principal e subtítulo
- **About Section**: Texto institucional da CONECTA
- **Services Section**: Lista de serviços/produtos
- **Benefits Section**: Diferenciais da empresa
- **How It Works**: Processo de trabalho
- **Testimonials**: Depoimentos reais de clientes
- **Contact Section**: Informações de contato
- **Footer**: Links e informações da empresa

## 📁 Estrutura de Pastas

```
src/
├── assets/
│   ├── images/          # Imagens estáticas
│   ├── icons/           # Ícones SVG
│   └── styles/
│       ├── tailwind.css # Configuração Tailwind
│       └── theme.css    # Variáveis CSS (cores)
├── components/
│   └── ui/              # Componentes reutilizáveis
├── pages/
│   ├── Home.vue         # Página principal
│   └── sections/        # Seções da landing page
│       ├── Hero.vue
│       ├── About.vue
│       ├── Services.vue
│       ├── Benefits.vue
│       ├── HowItWorks.vue
│       ├── Testimonials.vue
│       ├── CTA.vue
│       ├── Contact.vue
│       └── FooterInfo.vue
├── composables/
│   ├── useForm.ts       # Gerenciamento de formulários
│   └── useSeo.ts        # Gerenciamento de SEO
├── services/
│   └── form.ts          # Serviços de API
├── utils/
│   └── validators.ts    # Validações de formulário
├── App.vue
└── main.ts
```

## 🔧 Configurações

### ESLint
Configurado com regras para Vue 3 e TypeScript. Arquivo: `.eslintrc.cjs`

### Prettier
Formatação consistente de código. Arquivo: `.prettierrc`

### Tailwind CSS
Configurado com cores customizadas da CONECTA. Arquivo: `tailwind.config.js`

### TypeScript
Configuração otimizada para Vue 3. Arquivo: `tsconfig.json`

## 📊 SEO Checklist

### ✅ Implementado
- [x] Meta tags básicas (title, description, keywords)
- [x] Open Graph tags (Facebook)
- [x] Twitter Cards
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Estrutura HTML semântica
- [x] Alt text para imagens
- [x] URLs amigáveis
- [x] Schema markup básico

### 🔄 Para Implementar
- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Google Search Console
- [ ] Schema markup avançado
- [ ] Sitemap dinâmico
- [ ] Meta tags dinâmicas por página

## 🚀 Deploy

### Vercel (Recomendado)

1. **Instale o Vercel CLI**
```bash
npm i -g vercel
```

2. **Faça login**
```bash
vercel login
```

3. **Configure o projeto**
```bash
vercel
```

4. **Configure variáveis de ambiente no Vercel Dashboard**
   - VITE_FORM_ENDPOINT
   - VITE_GA_ID
   - VITE_WHATSAPP_NUMBER
   - VITE_SITE_URL

5. **Deploy automático**
```bash
vercel --prod
```

### Netlify (Alternativa)

1. **Build do projeto**
```bash
npm run build
```

2. **Faça upload da pasta `dist`** para o Netlify

3. **Configure variáveis de ambiente** no Netlify Dashboard

### GitHub Pages

1. **Adicione o script no package.json**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

2. **Instale gh-pages**
```bash
npm install --save-dev gh-pages
```

3. **Deploy**
```bash
npm run deploy
```

## 🔄 Git Workflow

### Conventional Commits
```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração de código
test: adiciona testes
chore: tarefas de manutenção
```

### Branches
- `main` - Produção
- `dev` - Homologação
- `feat/*` - Novas funcionalidades
- `fix/*` - Correções
- `hotfix/*` - Correções urgentes

## 📈 Performance

### Otimizações Implementadas
- [x] Lazy loading de imagens
- [x] Code splitting
- [x] Minificação de CSS/JS
- [x] Compressão gzip
- [x] Cache de assets
- [x] Preload de fontes críticas

### Métricas Alvo
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Segurança

### Implementado
- [x] HTTPS obrigatório
- [x] Headers de segurança
- [x] Validação de formulários
- [x] Sanitização de inputs
- [x] CSP headers

### Para Implementar
- [ ] Rate limiting
- [ ] WAF
- [ ] Monitoramento de segurança

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Testado em
- [x] iPhone SE
- [x] iPhone 12
- [x] iPad
- [x] Desktop 1920x1080
- [x] Desktop 1366x768

## 🧪 Testes

### Para Implementar
- [ ] Unit tests (Vitest)
- [ ] E2E tests (Playwright)
- [ ] Visual regression tests
- [ ] Accessibility tests

## 📋 Roadmap

### Fase 1 - MVP ✅
- [x] Landing page básica
- [x] Formulário de contato
- [x] SEO básico
- [x] Deploy na Vercel

### Fase 2 - Melhorias
- [ ] Blog integrado
- [ ] Sistema de CMS
- [ ] Analytics avançado
- [ ] A/B testing
- [ ] Chatbot integrado

### Fase 3 - Escalabilidade
- [ ] PWA
- [ ] Offline support
- [ ] Push notifications
- [ ] Multi-language
- [ ] Dark mode

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:
- **Email**: contato@conecta.com.br
- **WhatsApp**: (11) 99999-9999

---

**Desenvolvido com ❤️ para a CONECTA**
