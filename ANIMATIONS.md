# 🎬 Sistema de Animações - CONECTA Landing Page

## 📋 Visão Geral

Este documento descreve o sistema completo de animações implementado na landing page da CONECTA, utilizando **@vueuse/motion** como biblioteca principal e **IntersectionObserver** como fallback.

## 🛠️ Tecnologias Utilizadas

- **@vueuse/motion** - Biblioteca principal para animações
- **IntersectionObserver** - Para detecção de elementos em viewport
- **CSS Transitions** - Para microinterações e hover effects
- **Tailwind CSS** - Para classes utilitárias de animação

## 📁 Estrutura de Arquivos

```
src/
├── plugins/
│   └── motion.ts              # Plugin e presets de animação
├── assets/styles/
│   └── animations.css         # Classes CSS e suporte reduced-motion
├── composables/
│   └── useInView.ts          # Composable para IntersectionObserver
├── components/ui/
│   ├── AnimatedNumber.vue    # Componente de contador animado
│   └── SmoothReveal.vue      # Wrapper genérico para animações
└── pages/sections/
    ├── Hero.vue              # Animações escalonadas
    ├── About.vue             # Fade + slide
    ├── Services.vue          # Stagger grid
    ├── Benefits.vue          # Stagger cards
    ├── HowItWorks.vue        # Stagger steps
    ├── Testimonials.vue      # Carrossel animado
    ├── CTA.vue              # Entrada forte
    └── FooterInfo.vue        # Fade-in curto
```

## 🎯 Presets de Animação Disponíveis

### Fade Animations
```typescript
fadeInUp: {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 600, ease: [0.16, 1, 0.3, 1] }
}

fadeIn: {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  transition: { duration: 400, ease: [0.16, 1, 0.3, 1] }
}
```

### Slide Animations
```typescript
slideInLeft: {
  initial: { opacity: 0, x: -50 },
  enter: { opacity: 1, x: 0 },
  transition: { duration: 600, ease: [0.16, 1, 0.3, 1] }
}

slideInRight: {
  initial: { opacity: 0, x: 50 },
  enter: { opacity: 1, x: 0 },
  transition: { duration: 600, ease: [0.16, 1, 0.3, 1] }
}
```

### Scale Animations
```typescript
scaleIn: {
  initial: { opacity: 0, scale: 0.8 },
  enter: { opacity: 1, scale: 1 },
  transition: { duration: 500, ease: [0.16, 1, 0.3, 1] }
}
```

### Hero Specific
```typescript
heroTitle: {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 800, ease: [0.16, 1, 0.3, 1] }
}

heroSubtitle: {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 600, ease: [0.16, 1, 0.3, 1], delay: 200 }
}

heroCTA: {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 600, ease: [0.16, 1, 0.3, 1], delay: 400 }
}
```

## 🚀 Como Usar os Presets

### 1. Animação Básica
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

### 2. Animação com Delay
```vue
<template>
  <div v-motion="motionPresets.fadeInUp" :delay="200">
    Conteúdo com delay
  </div>
</template>
```

### 3. Stagger em Grids/Listas
```vue
<template>
  <div class="grid grid-cols-3 gap-4">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      v-motion="motionPresets.fadeInUp"
      :delay="100 * (index + 1)"
    >
      {{ item.title }}
    </div>
  </div>
</template>
```

### 4. Componente SmoothReveal
```vue
<template>
  <SmoothReveal direction="up" :delay="200">
    <div>Conteúdo animado</div>
  </SmoothReveal>
</template>

<script setup>
import SmoothReveal from '@/components/ui/SmoothReveal.vue'
</script>
```

### 5. AnimatedNumber
```vue
<template>
  <AnimatedNumber 
    :to="500" 
    :duration="2000" 
    :formatter="(value) => `${value}+`" 
  />
</template>

<script setup>
import AnimatedNumber from '@/components/ui/AnimatedNumber.vue'
</script>
```

## 🎨 Microinterações

### Botões
```vue
<button class="btn-primary transition-all duration-200 hover:scale-105">
  Botão com hover
</button>
```

### Cards
```vue
<div class="card-hover transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
  Card com hover
</div>
```

### Links
```vue
<a class="transition-all duration-200 hover:scale-105">
  Link com hover
</a>
```

## 🔧 Como Criar uma Nova Animação

### 1. Adicionar ao Plugin
```typescript
// src/plugins/motion.ts
export const motionPresets = {
  // ... outros presets
  
  minhaAnimacao: {
    initial: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    transition: { duration: 800, ease: [0.16, 1, 0.3, 1] }
  }
}
```

### 2. Usar no Componente
```vue
<template>
  <div v-motion="motionPresets.minhaAnimacao">
    Conteúdo animado
  </div>
</template>
```

## ♿ Suporte a Reduced Motion

### CSS Automático
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Como Desligar Manualmente
```vue
<template>
  <div v-motion="reducedMotion ? {} : motionPresets.fadeInUp">
    Conteúdo
  </div>
</template>

<script setup>
import { computed } from 'vue'

const reducedMotion = computed(() => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>
```

## 📱 Responsividade

### Mobile-First
```vue
<template>
  <div 
    v-motion="isMobile ? {} : motionPresets.fadeInUp"
    class="animate-fade-in md:animate-none"
  >
    Conteúdo
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 768
})
</script>
```

## 🎯 Exemplos por Seção

### Hero Section
```vue
<template>
  <section>
    <h1 v-motion="motionPresets.heroTitle">
      Título Principal
    </h1>
    
    <p v-motion="motionPresets.heroSubtitle">
      Subtítulo
    </p>
    
    <div v-motion="motionPresets.heroCTA">
      <button class="btn-primary hover:scale-105">
        CTA
      </button>
    </div>
  </section>
</template>
```

### Services Grid
```vue
<template>
  <div class="grid grid-cols-3 gap-8">
    <div 
      v-for="(service, index) in services" 
      :key="index"
      v-motion="motionPresets.fadeInUp"
      :delay="200 * (index + 1)"
      class="card-hover"
    >
      {{ service.title }}
    </div>
  </div>
</template>
```

### Testimonials Carousel
```vue
<template>
  <div v-motion="motionPresets.scaleIn">
    <div class="carousel">
      <!-- Carousel content -->
    </div>
    
    <button class="nav-btn hover:scale-110">
      <!-- Navigation -->
    </button>
  </div>
</template>
```

## 🔍 Performance

### Otimizações Implementadas
- **will-change: transform** para elementos animados
- **IntersectionObserver** para lazy loading
- **requestAnimationFrame** para contadores
- **CSS transforms** em vez de propriedades que causam reflow
- **Reduced motion** support automático

### Monitoramento
```javascript
// Verificar performance
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 16) {
      console.warn('Animation frame drop detected:', entry)
    }
  }
})

observer.observe({ entryTypes: ['measure'] })
```

## 🐛 Troubleshooting

### Animação não funciona
1. Verificar se `@vueuse/motion` está instalado
2. Confirmar se o plugin está registrado em `main.ts`
3. Verificar se o elemento tem `display: block` ou `flex`

### Performance ruim
1. Usar `will-change: transform` apenas quando necessário
2. Evitar animar `width`, `height`, `top`, `left`
3. Preferir `transform` e `opacity`

### Reduced motion não funciona
1. Verificar se o CSS está sendo importado
2. Testar com `prefers-reduced-motion: reduce`
3. Verificar se não há `!important` conflitando

## 📚 Recursos Adicionais

- [@vueuse/motion Documentation](https://motion.vueuse.org/)
- [IntersectionObserver MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [Reduced Motion Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/reduced-motion.html)

---

**Desenvolvido para a CONECTA Landing Page** 🚀 