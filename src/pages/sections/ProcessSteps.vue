<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <!-- Título Principal -->
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUpOnView"
          class="text-3xl font-bold text-gray-800 mb-6 max-w-4xl mx-auto leading-tight"
        >
          Diagnóstico da sua terra que mostra espécies indicadas, potencial de receita, possibilidades para créditos de carbono, mecanização e muito mais
        </h2>
      </div>

      <!-- Cards de Processo -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <!-- Card 1: Diagnóstico -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="200"
          class="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="w-full h-24 sm:h-32 lg:h-36 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
            <div class="w-full h-full rounded-lg relative">
              <img 
                src="@/assets/images/process-steps/step-1.png" 
                alt="Diagnóstico - Primeiro passo do processo" 
                class="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div class="flex gap-2 sm:gap-4 items-center justify-start text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500 mb-3 sm:mb-4">
            <span class="animate-bounce">1</span>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800">Diagnóstico</h3>
          </div>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Diagnóstico imediato e gratuito da propriedade para avaliar o potencial de receita, espécies indicadas e mais.
          </p>
        </div>

        <!-- Card 2: Planejamento & Financiamento -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="300"
          class="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="w-full h-24 sm:h-32 lg:h-36 rounded-lg mb-3 sm:mb-4 flex items-center justify-center relative">
            <div class="w-full h-full rounded-lg relative overflow-hidden">
              <!-- Simulação de agrofloresta 3D -->
              <img 
                src="@/assets/images/process-steps/step-2.png" 
                alt="Estratégia - Segundo passo do processo" 
                class="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div class="flex gap-2 sm:gap-4 items-center justify-start text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500 mb-3 sm:mb-4">
            <span class="animate-bounce" style="animation-delay: 0.2s;">2</span>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800">Planejamento & Financiamento</h3>
          </div>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Planeje a sua agrofloresta com modelagens robustas, e obtenha financiamento.
          </p>
        </div>

        <!-- Card 3: Gerenciar -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="400"
          class="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="w-full h-24 sm:h-32 lg:h-36 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
            <div class="w-full h-full rounded-lg p-2">
              <img 
                src="@/assets/images/process-steps/step-3.png" 
                alt="Implementação - Terceiro passo do processo" 
                class="w-full h-full object-contain"
                loading="lazy"
              />
              
            </div>
          </div>
          <div class="flex gap-2 sm:gap-4 items-center justify-start text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500 mb-3 sm:mb-4">
            <span class="animate-bounce" style="animation-delay: 0.4s;">3</span>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800">Gerenciar</h3>
          </div>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Gerencie seu SAF profissionalmente com nosso Software de Inteligência Agroflorestal + Assistência Técnica CL presencial
          </p>
        </div>

        <!-- Card 4: Vender Produtos e Carbono -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="500"
          class="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="w-full h-24 sm:h-32 lg:h-36 rounded-lg mb-3 sm:mb-4 flex items-center justify-center">
            <div class="w-full h-full rounded-lg p-2">
              <img 
                src="@/assets/images/process-steps/step-4.png" 
                alt="Monitoramento - Quarto passo do processo" 
                class="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div class="flex gap-2 sm:gap-4 items-center justify-start text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500 mb-3 sm:mb-4">
            <span class="animate-bounce" style="animation-delay: 0.6s;">4</span>
            <h3 class="text-lg sm:text-xl font-bold text-gray-800">Vender Produtos e Carbono</h3>
          </div>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Venda seus produtos agroflorestais e créditos de carbono com a Courageous Land.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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