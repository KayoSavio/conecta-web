<template>
  <section id="parceiros" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Nossos Parceiros Estratégicos
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Rede de colaboração que fortalece nossa capacidade de entregar soluções de excelência
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Órgãos Reguladores -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary"
        >
          <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon icon="mdi:shield-check" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Órgãos Reguladores</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Parcerias diretas com órgãos ambientais para agilizar processos e garantir conformidade
          </p>
          <ul class="space-y-2 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              IBAMA
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              ICMBio
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Órgãos Estaduais
            </li>
          </ul>
        </div>

        <!-- Consultorias Ambientais -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-secondary"
        >
          <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
            <Icon icon="mdi:account-tie" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Consultorias Ambientais</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Rede de especialistas para projetos complexos e consultoria especializada
          </p>
          <ul class="space-y-2 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Especialistas certificados
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Projetos complexos
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Consultoria especializada
            </li>
          </ul>
        </div>

        <!-- Instituições de Pesquisa -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-accent"
        >
          <div class="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
            <Icon icon="mdi:microscope" class="w-8 h-8 text-accent" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Instituições de Pesquisa</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Colaboração com universidades e centros de pesquisa para inovação tecnológica
          </p>
          <ul class="space-y-2 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Universidades
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Centros de pesquisa
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Inovação tecnológica
            </li>
          </ul>
        </div>

        <!-- Fornecedores de Tecnologia -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="500"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary"
        >
          <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon icon="mdi:chip" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Fornecedores de Tecnologia</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Parcerias com empresas de tecnologia para soluções geoespaciais avançadas
          </p>
          <ul class="space-y-2 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Soluções geoespaciais
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Sistemas de gestão
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Tecnologia de ponta
            </li>
          </ul>
        </div>

        <!-- Sindicatos e Cooperativas -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="600"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-secondary"
        >
          <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
            <Icon icon="mdi:handshake" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Sindicatos e Cooperativas</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Apoio às organizações representativas do setor rural e cooperativo
          </p>
          <ul class="space-y-2 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Representação setorial
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Capacitação coletiva
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Projetos cooperativos
            </li>
          </ul>
        </div>

        <!-- CTA Card -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="700"
          class="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white text-center"
        >
          <Icon icon="mdi:partner" class="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 class="text-xl font-semibold mb-3">Quer Ser Nosso Parceiro?</h3>
          <p class="text-white/90 mb-6">
            Junte-se à nossa rede de parceiros estratégicos e amplie suas oportunidades
          </p>
          <button 
            @click="openWhatsApp"
            class="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Entre em Contato
          </button>
        </div>
      </div>

      <!-- Logos dos Parceiros -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="800"
        class="mt-16"
      >
        <h3 class="text-2xl font-bold text-center text-gray-800 mb-8">Parceiros Confiáveis</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          <div class="flex items-center justify-center h-16">
            <Icon icon="mdi:shield-check" class="w-12 h-12 text-primary" />
          </div>
          <div class="flex items-center justify-center h-16">
            <Icon icon="mdi:account-tie" class="w-12 h-12 text-secondary" />
          </div>
          <div class="flex items-center justify-center h-16">
            <Icon icon="mdi:microscope" class="w-12 h-12 text-accent" />
          </div>
          <div class="flex items-center justify-center h-16">
            <Icon icon="mdi:chip" class="w-12 h-12 text-primary" />
          </div>
          <div class="flex items-center justify-center h-16">
            <Icon icon="mdi:handshake" class="w-12 h-12 text-secondary" />
          </div>
          <div class="flex items-center justify-center h-16">
            <Icon icon="mdi:leaf" class="w-12 h-12 text-accent" />
          </div>
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
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre parcerias estratégicas com a CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}
</script> 