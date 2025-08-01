<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <!-- Título Principal -->
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 max-w-4xl mx-auto leading-tight"
        >
          Diagnóstico da sua terra que mostra espécies indicadas, potencial de receita, possibilidades para créditos de carbono, mecanização e muito mais
        </h2>
      </div>

      <!-- Cards de Processo -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Card 1: Diagnóstico -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <div class="w-full h-full bg-gradient-to-br from-green-400 via-yellow-400 to-red-400 rounded-lg relative">
              <!-- Simulação de mapa aéreo -->
              <div class="absolute inset-0 bg-green-500 opacity-60 rounded-tl-lg w-1/2 h-1/2"></div>
              <div class="absolute top-1/4 right-1/4 bg-yellow-500 opacity-60 rounded-full w-1/4 h-1/4"></div>
              <div class="absolute bottom-1/4 left-1/4 bg-red-500 opacity-60 rounded-lg w-1/3 h-1/3"></div>
            </div>
          </div>
          <div class="text-6xl font-bold text-gray-800 mb-4">1</div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Diagnóstico</h3>
          <p class="text-gray-600 leading-relaxed">
            Diagnóstico imediato e gratuito da propriedade para avaliar o potencial de receita, espécies indicadas e mais.
          </p>
        </div>

        <!-- Card 2: Planejamento & Financiamento -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative">
            <div class="w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded-lg relative overflow-hidden">
              <!-- Simulação de agrofloresta 3D -->
              <div class="absolute inset-0">
                <div class="absolute top-2 left-2 text-white text-xs font-bold">CARBONO REMOVIDO 143 TONS</div>
                <div class="absolute bottom-2 left-2 text-white text-xs font-bold">ANO 8</div>
                <!-- Árvores simuladas -->
                <div class="absolute top-1/4 left-1/4 w-3 h-8 bg-green-700 rounded-full"></div>
                <div class="absolute top-1/3 right-1/3 w-4 h-10 bg-green-600 rounded-full"></div>
                <div class="absolute bottom-1/3 left-1/3 w-3 h-9 bg-green-800 rounded-full"></div>
                <div class="absolute bottom-1/4 right-1/4 w-2 h-6 bg-green-700 rounded-full"></div>
              </div>
            </div>
          </div>
          <div class="text-6xl font-bold text-gray-800 mb-4">2</div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Planejamento & Financiamento</h3>
          <p class="text-gray-600 leading-relaxed">
            Planeje a sua agrofloresta com modelagens robustas, e obtenha financiamento.
          </p>
        </div>

        <!-- Card 3: Gerenciar -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <div class="w-full h-full bg-gray-800 rounded-lg p-2">
              <!-- Simulação de dashboard -->
              <div class="grid grid-cols-2 gap-1 h-full">
                <div class="bg-blue-600 rounded text-white text-xs p-1 flex items-center justify-center">
                  <div class="text-center">
                    <div class="font-bold">CL</div>
                    <div class="text-xs">Dashboard</div>
                  </div>
                </div>
                <div class="bg-green-600 rounded text-white text-xs p-1 flex items-center justify-center">
                  <div class="text-center">
                    <div class="font-bold">CL</div>
                    <div class="text-xs">Analytics</div>
                  </div>
                </div>
                <div class="bg-purple-600 rounded text-white text-xs p-1 flex items-center justify-center">
                  <div class="text-center">
                    <div class="font-bold">CL</div>
                    <div class="text-xs">Reports</div>
                  </div>
                </div>
                <div class="bg-orange-600 rounded text-white text-xs p-1 flex items-center justify-center">
                  <div class="text-center">
                    <div class="font-bold">CL</div>
                    <div class="text-xs">Monitor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-6xl font-bold text-gray-800 mb-4">3</div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Gerenciar</h3>
          <p class="text-gray-600 leading-relaxed">
            Gerencie seu SAF profissionalmente com nosso Software de Inteligência Agroflorestal + Assistência Técnica CL presencial
          </p>
        </div>

        <!-- Card 4: Vender Produtos e Carbono -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="500"
          class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div class="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <div class="w-full h-full bg-gray-100 rounded-lg p-2">
              <div class="grid grid-cols-2 gap-2 h-full">
                <!-- Gráfico de carbono -->
                <div class="bg-white rounded p-1">
                  <div class="text-xs font-bold text-gray-800 mb-1">CARBON</div>
                  <div class="w-full h-8 bg-gray-200 rounded flex items-end">
                    <div class="w-1/3 h-1/2 bg-green-500 rounded-l"></div>
                    <div class="w-1/3 h-3/4 bg-green-600"></div>
                    <div class="w-1/3 h-full bg-green-700 rounded-r"></div>
                  </div>
                </div>
                <!-- Produtos disponíveis -->
                <div class="bg-white rounded p-1">
                  <div class="text-xs font-bold text-gray-800 mb-1">CROPS AVAILABLE</div>
                  <div class="grid grid-cols-2 gap-1">
                    <div class="w-3 h-3 bg-yellow-400 rounded"></div>
                    <div class="w-3 h-3 bg-red-400 rounded"></div>
                    <div class="w-3 h-3 bg-green-400 rounded"></div>
                    <div class="w-3 h-3 bg-blue-400 rounded"></div>
                  </div>
                </div>
                <!-- Seção financeira -->
                <div class="col-span-2 bg-white rounded p-1">
                  <div class="text-xs font-bold text-gray-800 mb-1">FINANCIAL</div>
                  <div class="w-full h-4 bg-gray-200 rounded flex items-end">
                    <div class="w-1/4 h-1/2 bg-blue-500 rounded-l"></div>
                    <div class="w-1/4 h-3/4 bg-blue-600"></div>
                    <div class="w-1/4 h-full bg-blue-700"></div>
                    <div class="w-1/4 h-2/3 bg-blue-800 rounded-r"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-6xl font-bold text-gray-800 mb-4">4</div>
          <h3 class="text-xl font-bold text-gray-800 mb-3">Vender Produtos e Carbono</h3>
          <p class="text-gray-600 leading-relaxed">
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