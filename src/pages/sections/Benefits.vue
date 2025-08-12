<template>
  <section id="beneficios" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUpOnView"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
        >
          Por que mais de 500 clientes confiam na CONECTA?
        </h2>
        <p 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Benefícios exclusivos que transformam a gestão ambiental em um processo simples e eficiente
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Segurança -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="200"
          class="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/30 transition-colors duration-300">
            <Icon icon="mdi:shield-check" class="w-6 h-6 sm:w-8 sm:h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Segurança Total</h3>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Dados protegidos com criptografia de ponta e conformidade com LGPD. Sua informação está segura conosco.
          </p>
        </div>

        <!-- Eficiência -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="300"
          class="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-teal-500/30 transition-colors duration-300">
            <Icon icon="mdi:rocket-launch" class="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Máxima Eficiência</h3>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Processos automatizados que reduzem tempo e custos. Resultados rápidos sem complicações.
          </p>
        </div>

        <!-- Tecnologia -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="400"
          class="group bg-gradient-to-br from-lime-50 to-lime-100 rounded-2xl p-6 sm:p-8 border border-lime-200 hover:border-lime-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-lime-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-lime-500/30 transition-colors duration-300">
            <Icon icon="mdi:satellite-variant" class="w-6 h-6 sm:w-8 sm:h-8 text-lime-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Tecnologia Avançada</h3>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Monitoramento via satélite e IA para precisão máxima. Tecnologia de ponta ao seu alcance.
          </p>
        </div>

        <!-- Atendimento -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="500"
          class="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 sm:p-8 border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-orange-500/30 transition-colors duration-300">
            <Icon icon="mdi:account-tie" class="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Atendimento Personalizado</h3>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Suporte especializado com consultores experientes. Estamos aqui para ajudar em cada etapa do processo.
          </p>
        </div>
      </div>

      <!-- CTA Section -->
      <div 
        v-motion="motionPresets.fadeInUpOnView"
        :delay="800"
        class="mt-16 text-center"
      >
        <div class="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Pronto para experimentar?</h3>
          <p class="text-white/90 mb-6 max-w-2xl mx-auto">
            Junte-se aos mais de 500 clientes que já confiam na CONECTA para suas necessidades ambientais.
          </p>
          <button 
            @click="openWhatsApp"
            class="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Comece Agora
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
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5528999710377'
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os benefícios da CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}
</script> 