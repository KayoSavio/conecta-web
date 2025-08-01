<template>
  <section id="canais" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Nossos Canais e Relacionamento
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Múltiplos canais de comunicação para atender você da melhor forma possível
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Site e Redes Sociais -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
        >
          <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon icon="mdi:web" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Site e Redes Sociais</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Presença digital completa com informações atualizadas e conteúdo educativo
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Site institucional
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              LinkedIn profissional
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Instagram corporativo
            </div>
          </div>
        </div>

        <!-- Workshops e Eventos -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-secondary"
        >
          <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
            <Icon icon="mdi:presentation" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Workshops e Eventos</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Eventos educativos e capacitações para disseminar conhecimento técnico
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Workshops técnicos
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Seminários ambientais
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Capacitações online
            </div>
          </div>
        </div>

        <!-- Canais Seguros de Negociação -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent"
        >
          <div class="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
            <Icon icon="mdi:shield-lock" class="w-8 h-8 text-accent" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Canais Seguros de Negociação</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Plataformas seguras para negociação de ativos ambientais com total transparência
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Plataforma segura
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Transparência total
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Rastreabilidade
            </div>
          </div>
        </div>

        <!-- Suporte Técnico Acessível -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="500"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
        >
          <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon icon="mdi:headset" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Suporte Técnico Acessível</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Suporte especializado disponível através de múltiplos canais de comunicação
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              WhatsApp Business
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Email prioritário
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Telefone direto
            </div>
          </div>
        </div>

        <!-- Contrato Digital -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="600"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-secondary"
        >
          <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
            <Icon icon="mdi:file-document-edit" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Contrato Digital com Assinatura Jurídica</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Processo digitalizado com assinatura eletrônica para agilidade e segurança
          </p>
          <div class="space-y-2 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Assinatura eletrônica
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Validade jurídica
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Processo ágil
            </div>
          </div>
        </div>

        <!-- CTA Card -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="700"
          class="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white text-center"
        >
          <Icon icon="mdi:message-text" class="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 class="text-xl font-semibold mb-3">Precisa de Ajuda?</h3>
          <p class="text-white/90 mb-6">
            Nossa equipe está pronta para atender você através do canal de sua preferência
          </p>
          <div class="space-y-3">
            <button 
              @click="openWhatsApp"
              class="w-full bg-white text-primary font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm"
            >
              WhatsApp
            </button>
            <button 
              @click="sendEmail"
              class="w-full bg-white/10 text-white font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 text-sm border border-white/30"
            >
              Email
            </button>
          </div>
        </div>
      </div>

      <!-- Estatísticas de Atendimento -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="800"
        class="mt-16 grid md:grid-cols-4 gap-8"
      >
        <div class="text-center">
          <div class="text-3xl font-bold text-primary mb-2">
            <AnimatedNumber :to="24" :duration="2000" :formatter="(value: number) => `${value}h`" />
          </div>
          <div class="text-gray-600">Tempo de Resposta</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-secondary mb-2">
            <AnimatedNumber :to="5" :duration="2000" :formatter="(value: number) => `${value}+`" />
          </div>
          <div class="text-gray-600">Canais de Atendimento</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-accent mb-2">
            <AnimatedNumber :to="98" :duration="2000" :formatter="(value: number) => `${value}%`" />
          </div>
          <div class="text-gray-600">Satisfação do Cliente</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary mb-2">
            <AnimatedNumber :to="7" :duration="2000" :formatter="(value: number) => `${value}/7`" />
          </div>
          <div class="text-gray-600">Dias da Semana</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'
import AnimatedNumber from '@/components/ui/AnimatedNumber.vue'

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Preciso de suporte técnico da CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}

const sendEmail = () => {
  const email = 'conectafloresta@gmail.com'
  const subject = encodeURIComponent('Suporte Técnico - CONECTA')
  const body = encodeURIComponent('Olá! Preciso de suporte técnico da CONECTA.')
  window.open(`mailto:${email}?subject=${subject}&body=${body}`)
}
</script> 