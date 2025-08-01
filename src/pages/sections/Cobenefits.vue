<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Lado Esquerdo: Título e Lista -->
        <div 
          v-motion="motionPresets.fadeInUp"
          class="space-y-8"
        >
          <!-- Título Principal -->
          <h2 
            v-motion="motionPresets.fadeInUp"
            class="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide"
          >
            OS COBENEFÍCIOS INCLUEM
          </h2>

          <!-- Lista de Benefícios -->
          <div 
            v-motion="motionPresets.fadeInUp"
            :delay="200"
            class="space-y-4"
          >
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Remoção de CO2</span>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Recuperação de ecossistemas</span>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Resiliência contra as mudanças climáticas</span>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Saúde dos consumidores</span>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Habitat para espécies vegetais, animais e fungos de grande biodiversidade; retardando a extinção e gerando créditos de biodiversidade</span>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Regeneração da vida & fertilidade dos solos</span>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Geração de renda rural e valorização da vida no campo como alternativa ao crescimento desordenado nas cidades</span>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Retenção e ciclagem da água</span>
            </div>
            
            <div class="flex items-start space-x-3">
              <Icon icon="mdi:check-circle" class="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-gray-700 leading-relaxed">Ciclagem dos nutrientes</span>
            </div>
          </div>
        </div>

        <!-- Lado Direito: Imagens -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="grid grid-cols-2 gap-4"
        >
          <!-- Imagem 1: Pessoa em ambiente verde -->
          <div class="space-y-4">
            <div class="w-full h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-lg relative overflow-hidden">
              <!-- Simulação de pessoa em ambiente verde -->
              <div class="absolute inset-0 bg-green-500 opacity-80"></div>
              <div class="absolute bottom-4 left-4 w-16 h-24 bg-gray-300 rounded-full"></div>
              <div class="absolute bottom-8 right-8 w-8 h-12 bg-green-700 rounded-full"></div>
              <div class="absolute top-8 left-1/2 w-6 h-10 bg-green-600 rounded-full"></div>
              <div class="absolute top-16 right-4 w-4 h-8 bg-green-800 rounded-full"></div>
            </div>
          </div>

          <!-- Imagem 2: Vista de baixo para cima da floresta -->
          <div class="space-y-4">
            <div class="w-full h-80 bg-gradient-to-br from-green-700 to-green-900 rounded-lg relative overflow-hidden">
              <!-- Simulação de vista de baixo para cima da floresta -->
              <div class="absolute inset-0">
                <!-- Troncos de árvores -->
                <div class="absolute bottom-0 left-1/4 w-8 h-full bg-green-800"></div>
                <div class="absolute bottom-0 left-1/2 w-6 h-full bg-green-700"></div>
                <div class="absolute bottom-0 right-1/4 w-10 h-full bg-green-900"></div>
                <div class="absolute bottom-0 right-1/3 w-4 h-full bg-green-800"></div>
                <!-- Folhagem no topo -->
                <div class="absolute top-0 left-0 right-0 h-1/2 bg-green-600 rounded-t-lg"></div>
                <div class="absolute top-4 left-1/4 right-1/4 h-1/3 bg-green-500 rounded-full"></div>
                <div class="absolute top-8 left-1/3 right-1/3 h-1/4 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'
</script>

<style scoped>
.section-padding {
  padding: 5rem 0;
}

.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style> 