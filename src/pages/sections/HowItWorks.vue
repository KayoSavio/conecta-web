<template>
  <section class="section-padding">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-text mb-4">
          <!-- TODO: Substituir pelo título oficial -->
          Como Funciona
        </h2>
        <p class="text-xl text-text-light max-w-3xl mx-auto">
          <!-- TODO: Substituir pelo subtítulo oficial -->
          Processo simples e eficiente para transformar seu negócio
        </p>
      </div>
      
      <!-- Steps -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Step 1 -->
        <div class="text-center">
          <div class="relative">
            <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <div class="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary/20 transform translate-x-4"></div>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo título do passo -->
            Diagnóstico
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do passo -->
            Análise completa do seu negócio para identificar 
            oportunidades de melhoria e crescimento.
          </p>
        </div>
        
        <!-- Step 2 -->
        <div class="text-center">
          <div class="relative">
            <div class="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <div class="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-secondary/20 transform translate-x-4"></div>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo título do passo -->
            Planejamento
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do passo -->
            Desenvolvimento de estratégias personalizadas 
            para alcançar os objetivos do seu negócio.
          </p>
        </div>
        
        <!-- Step 3 -->
        <div class="text-center">
          <div class="relative">
            <div class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <div class="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-accent/20 transform translate-x-4"></div>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo título do passo -->
            Implementação
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do passo -->
            Execução das soluções com metodologias ágeis 
            e acompanhamento detalhado do progresso.
          </p>
        </div>
        
        <!-- Step 4 -->
        <div class="text-center">
          <div class="relative">
            <div class="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              4
            </div>
          </div>
          <h3 class="text-xl font-semibold text-text mb-4">
            <!-- TODO: Substituir pelo título do passo -->
            Resultados
          </h3>
          <p class="text-text-light leading-relaxed">
            <!-- TODO: Substituir pela descrição do passo -->
            Monitoramento contínuo e otimização para 
            garantir resultados sustentáveis e crescimento.
          </p>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="text-center mt-16">
        <button 
          @click="openWhatsApp"
          class="btn-primary text-lg px-8 py-4"
        >
          Começar Agora
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o processo da CONECTA.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}
</script> 