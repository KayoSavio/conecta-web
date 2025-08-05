<template>
  <section id="inicio" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-primary/30 z-10"></div>
      <picture>
        <source 
          srcset="https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp 800w,
                  https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=75&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp 1200w,
                  https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=75&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp 1600w"
          type="image/webp"
        />
        <img 
          ref="backgroundImage"
          src="https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=75&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Floresta plantada e reflorestamento - Área de compensação ambiental"
          class="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </picture>
    </div>
    
    <!-- Content Container -->
    <div class="relative z-20 container-custom px-4 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-8 text-white">
            <!-- Main Title -->
            <h1 
              ref="heroTitle"
              class="p-4 pb-0 sm:p-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-2xl"
            >
              Transformamos sua propriedade em um 
              <span class="bg-accent bg-clip-text text-transparent">ativo ambiental lucrativo</span> e regularizado
            </h1>
            
            <!-- Subtitle -->
            <p 
              ref="heroSubtitle"
              class="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl drop-shadow-2xl px-4 sm:px-0"
            >
              Plataforma digital que simplifica a regularização e compensação ambiental com tecnologia avançada e suporte especializado.
            </p>
            
            <!-- CTA Buttons -->
            <div 
              ref="heroCTA"
              class="p-4 pb-0 sm:p-0 flex flex-col sm:flex-row w-full items-center sm:justify-center lg:justify-start gap-4"
            >
              <button 
                @click="openWhatsApp"
                class="flex items-center gap-2 group w-full relative overflow-hidden bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                  <Icon icon="mdi:whatsapp" class="w-5 h-5" />
                  Falar com Especialista
              </button>
              
              <button 
                @click="scrollToForm"
                class="group w-full relative overflow-hidden border-2 border-white text-white hover:text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  <Icon icon="mdi:clipboard-check" class="w-5 h-5" />
                  Solicitar Simulação
                </span>
                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            <!-- Social Media Links -->
            <div class="p-4 sm:p-0 py-0 flex items-center gap-4 mt-6">
              <a 
                href="https://x.com/conectafloresta" 
                target="_blank" 
                aria-label="X"
                rel="noopener noreferrer"
                class="group flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg class="w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/conecta-florestas/" 
                target="_blank" 
                aria-label="linkedin"
                rel="noopener noreferrer"
                class="group flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg class="w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/conecta_florestas" 
                target="_blank" 
                aria-label="Instagram"
                rel="noopener noreferrer"
                class="group flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <svg class="w-5 h-5 text-white group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Visual Element / Image -->
          <div 
            ref="visualCard"
            class="flex justify-center lg:justify-end p-4 sm:p-0"
          >
            <div class="relative w-full max-w-md">
              <!-- Modern Glassmorphism Card -->
              <div class="relative group">
                <!-- Background Blur Effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-400/10 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                
                <!-- Main Card Container -->
                <div class="glassmorphism-card relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 overflow-hidden animate-glassmorphism">
                  
                  <!-- Animated Background Elements -->
                  <div class="absolute inset-0 overflow-hidden">
                    <div class="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-xl animate-pulse"></div>
                    <div class="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse" style="animation-delay: 1s;"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s;"></div>
                  </div>

                  <!-- Content Container -->
                  <div class="relative z-10 space-y-8">
                    
                    <!-- Experience Badge -->
                    <div class="flex justify-center">
                      <div class="experience-badge inline-flex items-center gap-3 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm border border-green-400/40 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-glow">
                        <div class="relative">
                          <svg class="w-5 h-5 text-green-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <div class="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                        <span class="font-bold text-white">+25 anos de experiência</span>
                        <div class="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-2 gap-8">
                      <!-- Hectares Metric -->
                      <div class="text-center group">
                        <div class="relative mb-4">
                          <div class="text-4xl font-bold text-white tracking-tight drop-shadow-lg">
                            <span class="counter" data-target="500">0</span>+
                          </div>
                          <div class="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                        <div class="text-sm text-white/90 font-medium leading-relaxed">
                          Hectares<br>Reflorestados
                        </div>
                        <div class="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-500"></div>
                      </div>

                      <!-- Conformidade Metric -->
                      <div class="text-center group">
                        <div class="relative mb-4">
                          <div class="text-4xl font-bold text-white tracking-tight drop-shadow-lg">
                            <span class="counter" data-target="100">0</span>%
                          </div>
                          <div class="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-ping" style="animation-delay: 0.5s;"></div>
                        </div>
                        <div class="text-sm text-white/90 font-medium leading-relaxed">
                          Conformidade<br>Legal
                        </div>
                        <div class="w-12 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-500"></div>
                      </div>
                    </div>

                    <!-- Benefits List -->
                    <div class="space-y-4">
                      <div class="flex items-center gap-4 text-white/95 hover:text-white transition-colors duration-300 group">
                        <div class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                          <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <span class="text-sm font-medium">Regularização ambiental</span>
                      </div>

                      <div class="flex items-center gap-4 text-white/95 hover:text-white transition-colors duration-300 group">
                        <div class="flex-shrink-0 w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-300 group-hover:scale-110">
                          <svg class="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                        </div>
                        <span class="text-sm font-medium">Tecnologia avançada</span>
                      </div>

                      <div class="flex items-center gap-4 text-white/95 hover:text-white transition-colors duration-300 group">
                        <div class="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                          <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <span class="text-sm font-medium">Resultados comprovados</span>
                      </div>
                    </div>

                  </div>

                  <!-- Floating Elements -->
                  <div class="absolute top-4 right-4 w-4 h-4 bg-green-400/40 rounded-full animate-pulse"></div>
                  <div class="absolute bottom-4 left-4 w-3 h-3 bg-emerald-400/50 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
                  <div class="absolute top-1/2 right-2 w-2 h-2 bg-green-400/60 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Fixed WhatsApp Button -->
  <div class="fixed bottom-6 right-6 z-50">
    <button 
      @click="openWhatsApp"
      class="group relative bg-accent hover:bg-green-900 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110"
      title="Falar no WhatsApp"
    >
      <svg class="w-6 h-6 text-white" fill="white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
      
      <!-- Tooltip -->
      <div class="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Falar no WhatsApp
        <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from '@/plugins/gsap'
import { motionPresets } from '@/plugins/motion'

// Refs para animações GSAP
const heroTitle = ref<HTMLElement>()
const heroSubtitle = ref<HTMLElement>()
const heroCTA = ref<HTMLElement>()
const visualCard = ref<HTMLElement>()

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de falar com especialista da CONECTA sobre regularização ambiental.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}

const scrollToForm = () => {
  const formSection = document.querySelector('#simulacao')
  if (formSection) {
    formSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
  // Timeline principal para animações de entrada
  const tl = gsap.timeline()
  
  // Animação do título principal
  if (heroTitle.value) {
    tl.fromTo(heroTitle.value, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
  }
  
  // Animação do subtítulo
  if (heroSubtitle.value) {
    tl.fromTo(heroSubtitle.value, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
  }
  
  // Animação dos CTAs
  if (heroCTA.value) {
    tl.fromTo(heroCTA.value, 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    )
  }
  
  // Animação do card visual
  if (visualCard.value) {
    tl.fromTo(visualCard.value, 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.8"
    )
  }

  // Counter animation function
  const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
    const start = 0
    const increment = target / (duration / 16) // 60fps
    
    let current = start
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current).toString()
    }, 16)
  }

  // Intersection Observer for counter animation
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target as HTMLElement
        const target = parseInt(counter.getAttribute('data-target') || '0')
        animateCounter(counter, target)
        counterObserver.unobserve(counter)
      }
    })
  }, observerOptions)

  // Observe all counter elements
  const counters = document.querySelectorAll('.counter')
  counters.forEach(counter => {
    counterObserver.observe(counter)
  })
})
</script>

<style scoped>
/* Custom animations for floating elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(34, 197, 94, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4);
  }
}

@keyframes glassmorphism {
  0% {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
  }
  50% {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.15);
  }
  100% {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
  }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-glassmorphism {
  animation: glassmorphism 4s ease-in-out infinite;
}

/* Glassmorphism card specific styles */
.glassmorphism-card {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glassmorphism-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.glassmorphism-card:hover::before {
  left: 100%;
}

/* Experience badge special effects */
.experience-badge {
  position: relative;
  overflow: hidden;
}

.experience-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s;
}

.experience-badge:hover::before {
  left: 100%;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce,
  .animate-pulse,
  .animate-glow,
  .animate-glassmorphism {
    animation: none;
  }
}
</style> 