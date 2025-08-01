<template>
  <section id="segmentos" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Nossos Segmentos de Mercado
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Atendemos diversos perfis de clientes com soluções personalizadas para cada necessidade
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Produtores Rurais -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl"
        >
          <div class="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors duration-300">
            <Icon icon="mdi:tractor" class="w-8 h-8 text-green-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Produtores Rurais</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Pequenos, médios e grandes produtores que buscam regularização e otimização de seus processos
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-500" />
              Regularização fundiária
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-500" />
              Gestão de licenças
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-green-500" />
              Consultoria especializada
            </div>
          </div>
        </div>

        <!-- Órgãos Ambientais -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
        >
          <div class="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
            <Icon icon="mdi:government" class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Órgãos Ambientais</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Parcerias estratégicas para otimização de processos e gestão de dados ambientais
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-blue-500" />
              Sistemas de gestão
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-blue-500" />
              Automação de processos
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-blue-500" />
              Tecnologia geoespacial
            </div>
          </div>
        </div>

        <!-- Empresas Automotivas -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl"
        >
          <div class="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
            <Icon icon="mdi:car" class="w-8 h-8 text-purple-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Empresas Automotivas</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Soluções para compensação ambiental e gestão de créditos de carbono
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-purple-500" />
              Compensação ambiental
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-purple-500" />
              Créditos de carbono
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-purple-500" />
              Relatórios ESG
            </div>
          </div>
        </div>

        <!-- Proprietários de Terras -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="500"
          class="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl"
        >
          <div class="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors duration-300">
            <Icon icon="mdi:map-marker" class="w-8 h-8 text-orange-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Proprietários de Terras</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Regularização fundiária e valorização de propriedades com tecnologia avançada
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-orange-500" />
              Regularização fundiária
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-orange-500" />
              Valorização de ativos
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-orange-500" />
              Gestão de reserva legal
            </div>
          </div>
        </div>

        <!-- Investidores Ambientais -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="600"
          class="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border border-teal-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl"
        >
          <div class="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-colors duration-300">
            <Icon icon="mdi:trending-up" class="w-8 h-8 text-teal-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Investidores Ambientais</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Oportunidades de investimento em ativos ambientais e projetos sustentáveis
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-teal-500" />
              Ativos ambientais
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-teal-500" />
              Projetos sustentáveis
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-teal-500" />
              ROI sustentável
            </div>
          </div>
        </div>

        <!-- Empreendedores e Cooperativas -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="700"
          class="group bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl"
        >
          <div class="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors duration-300">
            <Icon icon="mdi:account-group" class="w-8 h-8 text-indigo-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Empreendedores e Cooperativas</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Suporte para desenvolvimento de projetos sustentáveis e gestão coletiva
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-indigo-500" />
              Projetos sustentáveis
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-indigo-500" />
              Gestão coletiva
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-indigo-500" />
              Capacitação técnica
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="800"
        class="mt-16 text-center"
      >
        <div class="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Seu Segmento Não Está Aqui?</h3>
          <p class="text-white/90 mb-6 max-w-2xl mx-auto">
            Temos soluções personalizadas para diversos setores. Entre em contato e descubra como podemos ajudar seu negócio.
          </p>
          <button 
            @click="openWhatsApp"
            class="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Fale Conosco
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
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as soluções da CONECTA para meu segmento de mercado.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}
</script> 