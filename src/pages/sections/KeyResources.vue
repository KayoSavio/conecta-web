<template>
  <section id="recursos" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Nossos Recursos-Chave
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Tecnologia avançada e expertise especializada para entregar resultados excepcionais
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <!-- Coluna 1: Recursos Humanos -->
        <div class="space-y-8">
          <!-- Equipe Especializada -->
          <div 
            v-motion="motionPresets.fadeInUp"
            :delay="200"
            class="group bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <div class="flex items-start flex-col md:flex-row gap-6">
              <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon icon="mdi:account-group" class="w-8 h-8 text-primary" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Equipe Especializada</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Profissionais certificados com mais de 25 anos de experiência em gestão ambiental e agronegócio
                </p>
                <ul class="space-y-2 text-sm text-gray-500">
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Engenheiros ambientais
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Advogados especializados
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Consultores técnicos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Tecnologia Geoespacial -->
          <div 
            v-motion="motionPresets.fadeInUp"
            :delay="300"
            class="group bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
          >
            <div class="flex items-start flex-col md:flex-row gap-6">
              <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors duration-300">
                <Icon icon="mdi:map-marker" class="w-8 h-8 text-secondary" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Tecnologia Geoespacial</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Sistemas avançados de mapeamento e análise espacial para precisão total
                </p>
                <ul class="space-y-2 text-sm text-gray-500">
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Mapeamento preciso
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Análise espacial
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Dados em tempo real
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Sistema de Gestão de Licenças -->
          <div 
            v-motion="motionPresets.fadeInUp"
            :delay="400"
            class="group bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all duration-300"
          >
            <div class="flex items-start flex-col md:flex-row gap-6">
              <div class="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon icon="mdi:clipboard-check" class="w-8 h-8 text-accent" />
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">Sistema de Gestão de Licenças</h3>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Plataforma integrada para monitoramento e gestão completa de licenças ambientais
                </p>
                <ul class="space-y-2 text-sm text-gray-500">
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Monitoramento automático
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Alertas de vencimento
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
                    Relatórios detalhados
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna 2: Visualização -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="500"
          class="relative"
        >
          <div class="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Tecnologia Avançada</h3>
            
            <!-- Plugins de Dados -->
            <div class="space-y-6">
              <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <Icon icon="mdi:database" class="w-8 h-8 text-primary" />
                <div>
                  <h4 class="font-semibold text-gray-800">SICAR</h4>
                  <p class="text-sm text-gray-600">Sistema de Cadastro Ambiental Rural</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <Icon icon="mdi:satellite" class="w-8 h-8 text-secondary" />
                <div>
                  <h4 class="font-semibold text-gray-800">MapBiomas</h4>
                  <p class="text-sm text-gray-600">Mapeamento de cobertura e uso da terra</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <Icon icon="mdi:chart-network" class="w-8 h-8 text-accent" />
                <div>
                  <h4 class="font-semibold text-gray-800">SNIF</h4>
                  <p class="text-sm text-gray-600">Sistema Nacional de Informações Florestais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recursos Adicionais -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Visualização em Mapa Interativo -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="600"
          class="group bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300"
        >
          <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon icon="mdi:map" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Visualização em Mapa Interativo</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Interface intuitiva para visualização de dados geoespaciais e análise de propriedades
          </p>
          <ul class="space-y-2 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Interface intuitiva
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Dados em tempo real
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Análise detalhada
            </li>
          </ul>
        </div>

        <!-- Integração com Imagens de Satélite -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="700"
          class="group bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
        >
          <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
            <Icon icon="mdi:satellite-variant" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">Integração com Imagens de Satélite</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Monitoramento remoto e análise de mudanças na cobertura vegetal com precisão milimétrica
          </p>
          <ul class="space-y-2 text-sm text-gray-500">
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Monitoramento remoto
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Precisão milimétrica
            </li>
            <li class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-4 h-4 text-accent" />
              Análise temporal
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA Section -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="800"
        class="mt-16 text-center"
      >
        <div class="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Conheça Nossa Tecnologia</h3>
          <p class="text-white/90 mb-6 max-w-2xl mx-auto">
            Descubra como nossos recursos-chave podem transformar a gestão ambiental do seu negócio
          </p>
          <button 
            @click="openWhatsApp"
            class="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Solicite uma Demonstração
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
  const message = encodeURIComponent('Olá! Gostaria de conhecer melhor a tecnologia e recursos da CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}
</script> 