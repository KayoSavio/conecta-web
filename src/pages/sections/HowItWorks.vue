<template>
  <section id="como-funciona" class="section-padding">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-text mb-4"
        >
          Como Funciona
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-text max-w-3xl mx-auto"
        >
          Processo simples e eficiente para transformar seu negócio
        </p>
      </div>
      
      <!-- Steps -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Step 1: Diagnóstico -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="text-center"
        >
          <div class="relative">
            <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
              <Icon icon="mdi:magnify" class="w-10 h-10" />
            </div>
            <div class="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary bg-opacity-20 transform translate-x-4"></div>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            Diagnóstico
          </h3>
          <p class="text-text leading-relaxed">
            Análise completa do seu negócio para identificar 
            oportunidades de melhoria e crescimento.
          </p>
        </div>
        
        <!-- Step 2: Planejamento -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="text-center"
        >
          <div class="relative">
            <div class="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
              <Icon icon="mdi:clipboard-text" class="w-10 h-10" />
            </div>
            <div class="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-secondary bg-opacity-20 transform translate-x-4"></div>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            Planejamento
          </h3>
          <p class="text-text leading-relaxed">
            Desenvolvimento de estratégias personalizadas 
            para alcançar os objetivos do seu negócio.
          </p>
        </div>
        
        <!-- Step 3: Implementação -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="text-center"
        >
          <div class="relative">
            <div class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
              <Icon icon="mdi:cog" class="w-10 h-10" />
            </div>
            <div class="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-accent bg-opacity-20 transform translate-x-4"></div>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            Implementação
          </h3>
          <p class="text-text leading-relaxed">
            Execução das soluções com metodologias ágeis 
            e acompanhamento detalhado do progresso.
          </p>
        </div>
        
        <!-- Step 4: Resultados -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="500"
          class="text-center"
        >
          <div class="relative">
            <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
              <Icon icon="mdi:chart-line" class="w-10 h-10" />
            </div>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            Resultados
          </h3>
          <p class="text-text leading-relaxed">
            Monitoramento contínuo e otimização para 
            garantir resultados sustentáveis e crescimento.
          </p>
        </div>
      </div>
      
      <!-- CTA -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="600"
        class="text-center mt-16"
      >
        <button 
          @click="openWhatsApp"
          class="btn-primary text-lg px-8 py-4 transition-all duration-200 hover:scale-105"
        >
          Começar Agora
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o processo da CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}
</script> 