<template>
  <section id="monetizacao" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUpOnView"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
        >
          Modelo de Negócio
        </h2>
        <p 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Escolha o plano ideal para suas necessidades
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
        <!-- Taxa sobre Negociação -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="200"
          class="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
            <Icon icon="mdi:percent" class="w-6 h-6 sm:w-8 sm:h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Taxa sobre Negociação</h3>
          <div class="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4">3,5% - 10%</div>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            Taxa variável sobre o valor das transações de compensação ambiental realizadas na plataforma.
          </p>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-600" />
              Transparência total
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-600" />
              Sem taxas ocultas
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-600" />
              Valor baseado no volume
            </li>
          </ul>
          <button 
            @click="openWhatsApp"
            class="mt-4 sm:mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium text-sm sm:text-base"
          >
            Ver planos
          </button>
        </div>

        <!-- Planos Mensais/Anuais -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="300"
          class="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
            <Icon icon="mdi:calendar-month" class="w-6 h-6 sm:w-8 sm:h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Planos de Assinatura</h3>
          <div class="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4">Mensal/Anual</div>
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            Acesso completo à plataforma com diferentes níveis de funcionalidades e suporte.
          </p>
          <ul class="space-y-2 text-xs sm:text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-600" />
              Flexibilidade total
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-600" />
              Desconto anual
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-600" />
              Cancelamento a qualquer momento
            </li>
          </ul>
          <button 
            @click="openWhatsApp"
            class="mt-4 sm:mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium text-sm sm:text-base"
          >
            Ver planos
          </button>
        </div>

        <!-- Serviços Adicionais -->
        <div 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="400"
          class="group bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 sm:p-8 border border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
            <Icon icon="mdi:plus-circle" class="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Serviços Adicionais</h3>
          <div class="text-3xl font-bold text-emerald-600 mb-4">Sob Demanda</div>
          <p class="text-gray-600 leading-relaxed mb-6">
            Consultoria especializada, relatórios customizados e serviços técnicos específicos.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-emerald-600" />
              Consultoria especializada
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-emerald-600" />
              Relatórios customizados
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-emerald-600" />
              Suporte técnico
            </li>
          </ul>
          <button 
            @click="openWhatsApp"
            class="mt-6 w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium"
          >
            Fale com o comercial
          </button>
        </div>
      </div>

      <!-- CTA Section -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="500"
        class="mt-16 text-center"
      >
        <div class="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Quer saber mais sobre preços?</h3>
          <p class="text-white/90 mb-6 max-w-2xl mx-auto">
            Entre em contato e descubra qual modelo se adapta melhor às suas necessidades.
          </p>
          <button 
            @click="openWhatsApp"
            class="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Ver planos completos
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
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os preços e planos da plataforma CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}
</script> 