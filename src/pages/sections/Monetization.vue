<template>
  <section id="monetizacao" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
        >
          Modelo de Negócio
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Escolha o plano ideal para suas necessidades
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Taxa sobre Negociação -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
            <Icon icon="mdi:percent" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Taxa sobre Negociação</h3>
          <div class="text-3xl font-bold text-green-600 mb-4">3,5% - 7%</div>
          <p class="text-gray-600 leading-relaxed mb-6">
            Taxa variável sobre o valor das transações de compensação ambiental realizadas na plataforma.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
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
            class="mt-6 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
          >
            Ver planos
          </button>
        </div>

        <!-- Planos Mensais/Anuais -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
            <Icon icon="mdi:calendar-month" class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Planos de Assinatura</h3>
          <div class="text-3xl font-bold text-blue-600 mb-4">Mensal/Anual</div>
          <p class="text-gray-600 leading-relaxed mb-6">
            Acesso completo à plataforma com diferentes níveis de funcionalidades e suporte.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-blue-600" />
              Flexibilidade total
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-blue-600" />
              Desconto anual
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-blue-600" />
              Cancelamento a qualquer momento
            </li>
          </ul>
          <button 
            @click="openWhatsApp"
            class="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            Ver planos
          </button>
        </div>

        <!-- Serviços Adicionais -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
            <Icon icon="mdi:plus-circle" class="w-8 h-8 text-purple-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Serviços Adicionais</h3>
          <div class="text-3xl font-bold text-purple-600 mb-4">Sob Demanda</div>
          <p class="text-gray-600 leading-relaxed mb-6">
            Consultoria especializada, relatórios customizados e serviços técnicos específicos.
          </p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-purple-600" />
              Consultoria especializada
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-purple-600" />
              Relatórios customizados
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-purple-600" />
              Suporte técnico
            </li>
          </ul>
          <button 
            @click="openWhatsApp"
            class="mt-6 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium"
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