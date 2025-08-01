<template>
  <section id="funcionalidades" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
        >
          Funcionalidades Principais
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Tecnologia avançada que simplifica a regularização e compensação ambiental
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Assinatura Digital -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-primary"
        >
          <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon icon="mdi:pen" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Assinatura Digital</h3>
          <p class="text-gray-600 leading-relaxed">
            Assine documentos de forma segura e legal diretamente na plataforma.
          </p>
        </div>

        <!-- Geolocalização -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-accent"
        >
          <div class="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
            <Icon icon="mdi:map-marker" class="w-8 h-8 text-accent" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Geolocalização</h3>
          <p class="text-gray-600 leading-relaxed">
            Mapeamento preciso da propriedade com coordenadas geográficas exatas.
          </p>
        </div>

        <!-- Cálculo Automático -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-secondary"
        >
          <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
            <Icon icon="mdi:calculator" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Cálculo Automático de RL</h3>
          <p class="text-gray-600 leading-relaxed">
            Sistema inteligente que calcula automaticamente a Reserva Legal necessária.
          </p>
        </div>

        <!-- Monitoramento Via Satélite -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="500"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-green-500"
        >
          <div class="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors duration-300">
            <Icon icon="mdi:satellite-variant" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Monitoramento Via Satélite</h3>
          <p class="text-gray-600 leading-relaxed">
            Acompanhe em tempo real a evolução dos seus projetos ambientais.
          </p>
        </div>

        <!-- Upload de Documentos -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="600"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-purple-500"
        >
          <div class="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
            <Icon icon="mdi:cloud-upload" class="w-8 h-8 text-purple-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Upload de Documentos</h3>
          <p class="text-gray-600 leading-relaxed">
            Faça upload e gerencie todos os documentos necessários de forma segura.
          </p>
        </div>

        <!-- Base de Conhecimento -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="700"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-orange-500"
        >
          <div class="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
            <Icon icon="mdi:book-open-variant" class="w-8 h-8 text-orange-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Base de Conhecimento</h3>
          <p class="text-gray-600 leading-relaxed">
            Acesse guias, tutoriais e informações atualizadas sobre legislação ambiental.
          </p>
        </div>
      </div>

      <!-- CTA Card -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="800"
        class="mt-16 text-center"
      >
        <div class="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <Icon icon="mdi:rocket-launch" class="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 class="text-2xl font-bold mb-3">Pronto para começar?</h3>
          <p class="text-white/90 mb-6 max-w-2xl mx-auto">
            Experimente todas essas funcionalidades e transforme sua gestão ambiental.
          </p>
          <button 
            @click="openWhatsApp"
            class="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Solicite uma Demonstração
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de conhecer as funcionalidades da plataforma CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}
</script> 