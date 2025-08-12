<template>
  <section class="section-padding relative overflow-hidden">
    <!-- Background com textura do solo com plantas -->
    <div class="absolute inset-0">
      <img 
        src="https://img.freepik.com/fotos-premium/textura-de-fundo-da-floresta_35024-474.jpg" 
        alt="Textura do solo com plantas da floresta" 
        class="w-full h-full object-cover opacity-30"
        loading="lazy"
        decoding="async"
      />
    </div>
    <!-- Overlay sutil para melhorar contraste -->
    <div class="absolute inset-0  bg-blend-multiply bg-[url(https://img.freepik.com/fotos-premium/textura-de-fundo-da-floresta_35024-474.jpg)]  bg-accent"></div>
    
    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Título Principal -->
        <h2 
          v-motion="motionPresets.fadeInUpOnView"
          class="text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-wide"
        >
          Conecta Florestas
        </h2>

        <!-- Primeiro Parágrafo -->
        <p 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="200"
          class="text-lg md:text-xl text-white leading-relaxed mb-8 text-left"
        >
        Conservar, administrar e proteger a maior extensão possível de Florestas em sua forma natural nos Biomas do Brasil. A plataforma oferecerá diagnósticos, estratégias, negociação de terrenos, suporte técnico, e consultoria na regularização de propriedades de preservação ou semelhantes conforme a legislação ambiental vigente no país. Seu objetivo será transmitir a noção de uma solução ecologicamente responsável e benéfica, destacando a relação entre os agricultores ou empreendedores que buscam terrenos e os provedores desses espaços, com a premissa básica de ser clara e direta, focando na função fundamental de cumprir as leis atuais.

        </p>

        <!-- Segundo Parágrafo -->
        <p 
          v-motion="motionPresets.fadeInUpOnView"
          :delay="400"
          class="text-lg md:text-xl text-white leading-relaxed text-left"
        >
        Aumentar a confiança nos procedimentos de regularização de propriedade e no Cadastro Ambiental Rural, colocando em prática de maneira digital os processos de transação de terrenos rurais destinados a reservas legais (florestas) ou áreas equivalentes de forma confiável, rápida e profissional. Simplificar os trâmites de comercialização de terrenos rurais voltados à preservação ambiental, a fim de alinhar-se à legislação ambiental e às exigências dos agricultores.
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