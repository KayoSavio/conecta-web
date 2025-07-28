<template>
  <section class="section-padding">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-text mb-4">
          <!-- TODO: Substituir pelo título oficial -->
          Nossos Serviços
        </h2>
        <p class="text-xl text-text-light max-w-3xl mx-auto">
          <!-- TODO: Substituir pelo subtítulo oficial -->
          Soluções completas para impulsionar seu negócio e conectar você ao futuro
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service Card 1 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo nome do serviço -->
            Consultoria Estratégica
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do serviço -->
            Análise profunda do seu negócio para identificar oportunidades 
            de crescimento e otimização de processos.
          </p>
        </div>
        
        <!-- Service Card 2 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo nome do serviço -->
            Transformação Digital
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do serviço -->
            Modernização completa dos processos empresariais com 
            tecnologias inovadoras e soluções digitais.
          </p>
        </div>
        
        <!-- Service Card 3 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo nome do serviço -->
            Otimização de Performance
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do serviço -->
            Melhoria significativa na eficiência operacional e 
            aumento da produtividade da sua empresa.
          </p>
        </div>
        
        <!-- Service Card 4 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo nome do serviço -->
            Gestão de Projetos
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do serviço -->
            Coordenação completa de projetos com metodologias 
            ágeis e acompanhamento detalhado de resultados.
          </p>
        </div>
        
        <!-- Service Card 5 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo nome do serviço -->
            Análise de Dados
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do serviço -->
            Extração de insights valiosos através de análise 
            avançada de dados e business intelligence.
          </p>
        </div>
        
        <!-- Service Card 6 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo nome do serviço -->
            Treinamento Corporativo
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do serviço -->
            Desenvolvimento de equipes através de programas 
            personalizados de capacitação e treinamento.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Seção Services da CONECTA
</script> 