<template>
  <section id="proposta-valor" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Nossa Proposta de Valor
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Conectamos inovação, sustentabilidade e resultados para transformar o agronegócio
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Soluções Integradas -->
<div 
  v-motion="motionPresets.fadeInUp"
  :delay="400"
  class="group bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
>
  <div class="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
    <Icon icon="mdi:puzzle" class="w-8 h-8 text-accent" />
  </div>
  <h3 class="text-xl font-semibold text-gray-800 mb-4">Soluções Integradas</h3>
  <p class="text-gray-600 leading-relaxed">
    Plataforma completa com foco na preservação da Mata Atlântica, oferecendo suporte desde diagnósticos até estratégias ambientais personalizadas.
  </p>
</div>

<!-- Diagnóstico e Planejamento -->
<div 
  v-motion="motionPresets.fadeInUp"
  :delay="500"
  class="group bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
>
  <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
    <Icon icon="mdi:clipboard-check" class="w-8 h-8 text-primary" />
  </div>
  <h3 class="text-xl font-semibold text-gray-800 mb-4">Diagnóstico e Planejamento</h3>
  <p class="text-gray-600 leading-relaxed">
    Ferramentas para análise técnica, mercado de terras, apoio à regularização fundiária e assistência conforme as leis ambientais vigentes.
  </p>
</div>

<!-- Regularização Fundiária -->
<div 
  v-motion="motionPresets.fadeInUp"
  :delay="600"
  class="group bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl"
>
  <div class="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
    <Icon icon="mdi:map-marker" class="w-8 h-8 text-secondary" />
  </div>
  <h3 class="text-xl font-semibold text-gray-800 mb-4">Regularização Fundiária</h3>
  <p class="text-gray-600 leading-relaxed">
    Auxílio técnico e jurídico na adequação de áreas de preservação, com foco em compensações e conformidade legal ambiental.
  </p>
</div>

<!-- Compra e Venda de Ativos Ambientais -->
<div 
  v-motion="motionPresets.fadeInUp"
  :delay="800"
  class="group bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
>
  <div class="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
    <Icon icon="mdi:currency-usd" class="w-8 h-8 text-accent" />
  </div>
  <h3 class="text-xl font-semibold text-gray-800 mb-4">Compra e Venda de Ativos Ambientais</h3>
  <p class="text-gray-600 leading-relaxed">
    Intermediação segura e estratégica de ativos ambientais, com relatórios, contratos digitais e integração com mapas e satélites.
  </p>
</div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'
</script> 