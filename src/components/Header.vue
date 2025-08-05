<template>
  <header 
    ref="header"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled 
        ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-gray-200' 
        : 'bg-transparent'
    ]"
  >
  
    <div class="container-custom px-4 sm:px-6">

      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <img src="@/assets/images/conectarLogoWhite.png" alt="CONECTA" class="h-8 lg:h-12 w-auto" v-if="!isScrolled">
          <img src="@/assets/images/conectaLogo.png" alt="CONECTA" class="h-8 lg:h-12 w-auto" v-else>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">
          <a 
            v-for="item in menuItems" 
            :key="item.id"
            :href="item.href"
            class="group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20"
            :class="isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'"
          >
            <span class="relative z-10 font-medium text-sm">{{ item.label }}</span>
            <div class="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </nav>

        <!-- CTA Buttons -->
        <div class="hidden lg:flex items-center space-x-3">
          <button 
            @click="scrollToForm"
            class="group relative overflow-hidden bg-green-500 hover:bg-accent/90 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span class="relative z-10"> Solicitar Orçamento</span>
            <div class="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden group relative p-3 rounded-xl transition-all duration-300"
          :class="isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'"
        >
          <div class="relative w-6 h-6">
            <span 
              class="absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300"
              :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'"
            ></span>
            <span 
              class="absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300 translate-y-2"
              :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            <span 
              class="absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300"
              :class="isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'"
            ></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-gray-200 rounded-b-3xl shadow-2xl mx-2 sm:mx-4"
      >
        <div class="px-4 sm:px-6 py-6 sm:py-8 space-y-6">
          <nav class="space-y-4">
            <a 
              v-for="item in menuItems" 
              :key="item.id"
              :href="item.href"
              @click="closeMobileMenu"
              class="block px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
            >
              {{ item.label }}
            </a>
          </nav>
          
          <div class="pt-6 border-t border-gray-200 space-y-3">
            <button 
              @click="scrollToForm"
              class="w-full px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
            >
              Solicitar Orçamento
            </button>
            <button 
              @click="openWhatsApp"
              class="w-full bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Fale com a CONECTA
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const header = ref<HTMLElement>()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { id: 'inicio', label: 'Início', href: '#inicio' },
  { id: 'para-quem', label: 'Para Quem', href: '#para-quem' },
  { id: 'beneficios', label: 'Benefícios', href: '#beneficios' },
  { id: 'monetizacao', label: 'Preços', href: '#monetizacao' }
]

const handleScroll = () => {
  if (header.value) {
    isScrolled.value = window.scrollY > 50
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as soluções da CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}

const scrollToContact = () => {
  const contactSection = document.querySelector('#contato')
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  closeMobileMenu()
}

const scrollToForm = () => {
  const formSection = document.querySelector('#simulacao')
  if (formSection) {
    formSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Enhanced liquid glass effect */
.glass-effect {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Smooth transitions for all elements */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom hover effects */
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-2px);
}

/* Enhanced shadow effects */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Mobile menu animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none;
  }
  
  .hover-lift:hover {
    transform: none;
  }
}
</style> 