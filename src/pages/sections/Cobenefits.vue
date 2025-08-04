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
          <!-- Imagem 1: Vista de árvores verdes da floresta com CO2 -->
          <div class="space-y-4">
            <div class="w-full h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-lg relative overflow-hidden">
              <img 
                src="https://img.freepik.com/fotos-gratis/vista-de-arvores-verdes-da-floresta-com-co2_23-2149675039.jpg" 
                alt="Vista de árvores verdes da floresta com CO2" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>

          <!-- Imagem 2: Pessoas plantando árvores no campo -->
          <div class="space-y-4">
            <div class="w-full h-80 bg-gradient-to-br from-green-700 to-green-900 rounded-lg relative overflow-hidden">
              <img 
                src="https://img.freepik.com/fotos-gratis/pessoas-plantando-arvores-no-campo_23-2149401241.jpg" 
                alt="Pessoas plantando árvores no campo" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              >
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