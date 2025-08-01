<template>
  <section id="depoimentos" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          O que nossos clientes dizem
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-800 max-w-3xl mx-auto"
        >
          Depoimentos reais de quem já transformou sua gestão ambiental com a CONECTA
        </p>
      </div>
      
      <!-- Carousel Container -->
      <div 
        v-motion="motionPresets.scaleIn"
        class="relative max-w-4xl mx-auto"
      >
        <!-- Carousel -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Testimonial 1 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" alt="João Silva" class="w-12 h-12 rounded-full object-cover">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">
                      João Silva
                    </h4>
                    <p class="text-sm text-gray-600">
                      Produtor Rural, São Paulo
                    </p>
                    <div class="flex items-center mt-1">
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p class="text-gray-800 leading-relaxed italic">
                  "A CONECTA transformou completamente nossa gestão ambiental. Em 3 meses regularizamos toda a propriedade e agora temos um ativo ambiental valorizado. O suporte foi excepcional!"
                </p>
              </div>
            </div>
            
            <!-- Testimonial 2 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face" alt="Maria Santos" class="w-12 h-12 rounded-full object-cover">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">
                      Maria Santos
                    </h4>
                    <p class="text-sm text-gray-600">
                      Diretora Ambiental, Empresa ABC
                    </p>
                    <div class="flex items-center mt-1">
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p class="text-gray-800 leading-relaxed italic">
                  "A plataforma é incrível! Conseguimos compensar nossa Reserva Legal de forma muito mais eficiente. O monitoramento via satélite nos dá total segurança e transparência."
                </p>
              </div>
            </div>
            
            <!-- Testimonial 3 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" alt="Carlos Oliveira" class="w-12 h-12 rounded-full object-cover">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">
                      Carlos Oliveira
                    </h4>
                    <p class="text-sm text-gray-600">
                      Investidor Ambiental, Rio de Janeiro
                    </p>
                    <div class="flex items-center mt-1">
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p class="text-gray-800 leading-relaxed italic">
                  "Investir em projetos ambientais através da CONECTA foi a melhor decisão. Retorno garantido e impacto positivo na preservação. Recomendo para todos os investidores."
                </p>
              </div>
            </div>
            
            <!-- Testimonial 4 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" alt="Ana Costa" class="w-12 h-12 rounded-full object-cover">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">
                      Ana Costa
                    </h4>
                    <p class="text-sm text-gray-600">
                      Diretora de Marketing, TechCorp
                    </p>
                    <div class="flex items-center mt-1">
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p class="text-gray-800 leading-relaxed italic">
                  "A CONECTA revolucionou nossa estratégia digital. 
                  O ROI foi excepcional e superou todas as expectativas."
                </p>
              </div>
            </div>
            
            <!-- Testimonial 5 -->
            <div class="w-full flex-shrink-0 px-4">
              <div class="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" alt="Roberto Lima" class="w-12 h-12 rounded-full object-cover">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">
                      Roberto Lima
                    </h4>
                    <p class="text-sm text-gray-600">
                      CTO, InovaçãoTech
                    </p>
                    <div class="flex items-center mt-1">
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                      <Icon icon="mdi:star" class="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p class="text-gray-800 leading-relaxed italic">
                  "Excelência técnica e atendimento impecável. 
                  A CONECTA entregou muito além do que prometeu."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <button 
          @click="previousSlide"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 -ml-4 hover:scale-110"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
          :disabled="currentSlide === 0"
        >
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 -mr-4 hover:scale-110"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === totalSlides - 1 }"
          :disabled="currentSlide === totalSlides - 1"
        >
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        
        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="(slide, index) in totalSlides"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-200 hover:scale-125"
            :class="index === currentSlide ? 'bg-primary' : 'bg-gray-300'"
          ></button>
        </div>
      </div>
      
      <!-- Rating -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="200"
        class="text-center mt-12"
      >
        <div class="flex justify-center items-center mb-4">
          <div class="flex text-yellow-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span class="ml-2 text-gray-800 font-semibold">5.0</span>
        </div>
        <p class="text-gray-800">
          <!-- TODO: Substituir pelo número real -->
          Avaliação média de 500+ clientes satisfeitos
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { motionPresets } from '@/plugins/motion'

// Carousel state
const currentSlide = ref(0)
const totalSlides = 5
let autoPlayInterval: number | null = null

// Navigation functions
const nextSlide = () => {
  if (currentSlide.value < totalSlides - 1) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = totalSlides - 1
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Auto-play functionality
const startAutoPlay = () => {
  autoPlayInterval = window.setInterval(() => {
    nextSlide()
  }, 5000) // Change slide every 5 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script> 