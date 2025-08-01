<template>
  <section id="para-quem" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
        >
          Para quem é a plataforma?
        </h2>
        <p 
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Nossa plataforma atende diferentes perfis que precisam de regularização e compensação ambiental
        </p>
      </div>

      <!-- Grid de Públicos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Produtores Rurais -->
        <div 
          class="who-we-serve-card group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
            <Icon icon="mdi:tractor" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Produtores Rurais</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Regularize sua propriedade e garanta conformidade ambiental com tecnologia avançada e suporte especializado.
          </p>
          <button 
            @click="openWhatsApp"
            class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 group"
          >
            Ver solução completa
            <Icon icon="mdi:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        <!-- Empresas que precisam compensar RL -->
        <div 
          class="who-we-serve-card group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
            <Icon icon="mdi:office-building" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Empresas</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Compense sua Reserva Legal de forma eficiente e segura, com monitoramento via satélite e documentação digital.
          </p>
          <button 
            @click="openWhatsApp"
            class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 group"
          >
            Quero regularizar
            <Icon icon="mdi:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        <!-- Investidores -->
        <div 
          class="who-we-serve-card group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
            <Icon icon="mdi:chart-line" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Investidores</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Invista em projetos ambientais certificados com retorno garantido e impacto positivo na preservação.
          </p>
          <button 
            @click="openWhatsApp"
            class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 group"
          >
            Conhecer oportunidades
            <Icon icon="mdi:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        <!-- Órgãos Ambientais -->
        <div 
          class="who-we-serve-card group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
            <Icon icon="mdi:shield-check" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Órgãos Ambientais</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Acesse dados transparentes e relatórios detalhados para fiscalização e gestão ambiental eficiente.
          </p>
          <button 
            @click="openWhatsApp"
            class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 group"
          >
            Solicitar acesso
            <Icon icon="mdi:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      <!-- CTA Section -->
      <div 
        class="mt-16 text-center"
      >
        <div class="bg-green-500 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Não encontrou seu perfil?</h3>
          <p class="text-white/90 mb-6 max-w-2xl mx-auto">
            Temos soluções personalizadas para diversos setores. Entre em contato e descubra como podemos ajudar.
          </p>
          <button 
            @click="openWhatsApp"
            class="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'
import gsap from '@/plugins/gsap'

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as soluções da CONECTA para meu perfil.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}

onMounted(() => {
  // Animação dos cards em stagger
  gsap.fromTo('.who-we-serve-card', 
    { y: 60, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.who-we-serve-card',
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  )
  
  // Hover effects para os cards
  const cards = document.querySelectorAll('.who-we-serve-card')
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { 
        scale: 1.05, 
        y: -10, 
        duration: 0.3, 
        ease: "power2.out" 
      })
    })
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { 
        scale: 1, 
        y: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      })
    })
  })
})
</script> 