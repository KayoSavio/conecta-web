<template>
  <section id="servicos" class="section-padding">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Nossos Serviços
        </h2>
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Soluções completas para impulsionar seu negócio e conectar você ao futuro
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card 1: Consultoria Estratégica -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6 border-2 border-primary/20">
            <Icon icon="mdi:lightbulb-on" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Consultoria Estratégica
          </h3>
          <p class="text-gray-800 leading-relaxed">
            Análise profunda do seu negócio para identificar oportunidades 
            de crescimento e otimização de processos.
          </p>
        </div>
        
        <!-- Service Card 2: Transformação Digital -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mb-6 border-2 border-secondary/20">
            <Icon icon="mdi:laptop" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Transformação Digital
          </h3>
          <p class="text-gray-800 leading-relaxed">
            Modernização completa dos processos empresariais com 
            tecnologias inovadoras e soluções digitais.
          </p>
        </div>
        
        <!-- Service Card 3: Otimização de Performance -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-6 border-2 border-accent/20">
            <Icon icon="mdi:speedometer" class="w-8 h-8 text-accent" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Otimização de Performance
          </h3>
          <p class="text-gray-800 leading-relaxed">
            Melhoria significativa na eficiência operacional e 
            aumento da produtividade da sua empresa.
          </p>
        </div>
        
        <!-- Service Card 4: Gestão de Projetos -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="500"
          class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6 border-2 border-primary/20">
            <Icon icon="mdi:clipboard-check" class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Gestão de Projetos
          </h3>
          <p class="text-gray-800 leading-relaxed">
            Coordenação completa de projetos com metodologias 
            ágeis e acompanhamento detalhado de resultados.
          </p>
        </div>
        
        <!-- Service Card 5: Análise de Dados -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="600"
          class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mb-6 border-2 border-secondary/20">
            <Icon icon="mdi:chart-box" class="w-8 h-8 text-secondary" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Análise de Dados
          </h3>
          <p class="text-gray-800 leading-relaxed">
            Extração de insights valiosos através de análise 
            avançada de dados e business intelligence.
          </p>
        </div>
        
        <!-- Service Card 6: Treinamento Corporativo -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="700"
          class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <div class="w-16 h-16 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center mb-6 border-2 border-accent/20">
            <Icon icon="mdi:school" class="w-8 h-8 text-accent" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Treinamento Corporativo
          </h3>
          <p class="text-gray-800 leading-relaxed">
            Desenvolvimento de equipes através de programas 
            personalizados de capacitação e treinamento.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'

// Seção Services da CONECTA
</script> 