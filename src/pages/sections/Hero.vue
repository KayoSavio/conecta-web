<template>
  <section id="inicio" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-primary/30 z-10"></div>
      <img 
        ref="backgroundImage"
        src="https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Floresta plantada e reflorestamento - Área de compensação ambiental"
        class="w-full h-full object-cover"
      />
    </div>
    
    <!-- Content Container -->
    <div class="relative z-20 container-custom px-6 py-24">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-8 text-white">
            <!-- Badge -->
            
            
            <!-- Main Title -->
            <h1 
              ref="heroTitle"
              class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl"
            >
              Transformamos sua propriedade em um 
              <span class="bg-green-500  bg-clip-text text-transparent">ativo ambiental lucrativo</span> e regularizado
            </h1>
            
            <!-- Subtitle -->
            <p 
              ref="heroSubtitle"
              class="text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl drop-shadow-2xl"
            >
              Plataforma digital que simplifica a regularização e compensação ambiental com tecnologia avançada e suporte especializado.
            </p>
            
            <!-- CTA Buttons -->
            <div 
              ref="heroCTA"
              class="flex flex-col sm:flex-row gap-4"
            >
              <button 
                @click="openWhatsApp"
                class="group relative overflow-hidden bg-green-500 hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  <Icon icon="mdi:whatsapp" class="w-5 h-5" />
                  Falar com Especialista
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                @click="scrollToForm"
                class="group relative overflow-hidden border-2 border-white text-white hover:text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span class="relative z-10 flex items-center justify-center gap-2">
                  <Icon icon="mdi:clipboard-check" class="w-5 h-5" />
                  Solicitar Simulação
                </span>
                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            
          </div>
          
          <!-- Visual Element / Image -->
          <div 
            ref="visualCard"
            class="flex justify-center lg:justify-end"
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
                        <div class="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110">
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
                        <div class="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110">
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
                  <div class="absolute top-1/2 right-2 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div 
      ref="scrollIndicator"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div class="flex flex-col items-center text-white/80 animate-bounce cursor-pointer" @click="scrollToNextSection">
        <span class="text-sm mb-2">Role para descobrir</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'
import gsap from '@/plugins/gsap'
import { gsapAnimations } from '@/plugins/gsap'

// Refs para animações GSAP
const badge = ref<HTMLElement>()
const heroTitle = ref<HTMLElement>()
const heroSubtitle = ref<HTMLElement>()
const heroCTA = ref<HTMLElement>()
const trustIndicators = ref<HTMLElement>()
const visualCard = ref<HTMLElement>()
const scrollIndicator = ref<HTMLElement>()

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de falar com especialista da CONECTA sobre regularização ambiental.')
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

const scrollToNextSection = () => {
  const nextSection = document.querySelector('#sobre')
  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
  // Timeline principal para animações de entrada
  const tl = gsap.timeline()
  
  // Animação do badge
  if (badge.value) {
    tl.fromTo(badge.value, 
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
  }
  
  // Animação do título principal
  if (heroTitle.value) {
    tl.fromTo(heroTitle.value, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.3"
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
  
  // Animação dos trust indicators
  if (trustIndicators.value) {
    tl.fromTo(trustIndicators.value, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.2"
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
  
  // Animação do scroll indicator
  if (scrollIndicator.value) {
    tl.fromTo(scrollIndicator.value, 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    )
  }
  
  // Setup hover effects para os botões
  const buttons = document.querySelectorAll('.group')
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" })
    })
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" })
    })
  })

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

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
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

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.6s ease-out;
}

.animate-glassmorphism {
  animation: glassmorphism 4s ease-in-out infinite;
}

.animate-gradient-shift {
  background: linear-gradient(-45deg, #22c55e, #10b981, #059669, #047857);
  background-size: 400% 400%;
  animation: gradientShift 3s ease infinite;
}

/* Frosted glass effect */
.frosted-glass {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Modern card styles */
.modern-card {
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.35);
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

/* Parallax effect for background */
.parallax-bg {
  transform: translateZ(0);
  will-change: transform;
}

/* Enhanced shadow for text readability */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Smooth transitions */
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom shadow for cards */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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

/* Stats hover effects */
.stats-item {
  position: relative;
  overflow: hidden;
}

.stats-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #22c55e, #10b981);
  transition: width 0.3s ease;
}

.stats-item:hover::after {
  width: 100%;
}

/* Modern typography */
.modern-text {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.modern-text-light {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  letter-spacing: 0.025em;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce,
  .animate-pulse,
  .animate-float,
  .animate-glow,
  .animate-shimmer,
  .animate-fade-in-up,
  .animate-scale-in,
  .animate-glassmorphism,
  .animate-gradient-shift {
    animation: none;
  }
  
  .parallax-bg {
    transform: none;
  }
}
</style> 