<template>
  <section class="section-padding bg-accent">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Título Principal -->
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-4xl md:text-5xl font-bold text-gray-800 mb-12 uppercase tracking-wide"
        >
          AGROFLORESTAS CL
        </h2>

        <!-- Primeiro Parágrafo -->
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-left"
        >
          Estamos vivendo uma rede de crises interconectadas, sem precedentes, que incluem mudanças climáticas, problemas de saúde fatais, perda de biodiversidade, falta de renda para as comunidades rurais e preparação inadequada para as mudanças climáticas para a humanidade. A missão da Courageous Land é reverter as mudanças climáticas e, ao mesmo tempo, criar saúde e abundância para toda a vida na Terra. A implementação de sistemas agroflorestais pode atender a todos os Objetivos de Desenvolvimento Sustentável da ONU (UN SDGs) simultaneamente, e somos apaixonados por escalar essa solução o mais rápido possível.
        </p>

        <!-- Segundo Parágrafo -->
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="text-lg md:text-xl text-gray-700 leading-relaxed text-left"
        >
          Agrofloresta é um termo genérico para sistemas de cultivo que integram em consórcios o plantio de árvores e alimentos. Isso pode variar de sistemas relativamente simples que têm 2 tipos de espécies cultivados, até sistemas muito complexos que têm muitas espécies e replicam um ambiente florestal natural. Desde 2011, focamos em sistemas que privilegiam a biodiversidade e ao mesmo tempo permitem a escalabilidade. Nossa meta é plantar mais de 100.000 hectares de agrofloresta nos próximos 10 anos.
        </p>
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