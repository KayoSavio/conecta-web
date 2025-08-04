<template>
  <section class="section-padding relative overflow-hidden">
    <!-- Background com textura do solo com plantas -->
    <div class="absolute inset-0">
      <img 
        src="https://img.freepik.com/fotos-gratis/textura-do-solo-com-plantas_23-2147625797.jpg" 
        alt="Textura do solo com plantas" 
        class="w-full h-full object-cover opacity-30"
        loading="lazy"
        decoding="async"
      />
    </div>
    <!-- Overlay sutil para melhorar contraste -->
    <div class="absolute inset-0 bg-green-500/20"></div>
    
    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Título Principal -->
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-wide"
        >
          Conecta Florestas
        </h2>

        <!-- Primeiro Parágrafo -->
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="text-lg md:text-xl text-white leading-relaxed mb-8 text-left"
        >
        Manter, gerir, preservar a maior área possível de Florestas em pé no Bioma Mata Atlântica.
A plataforma fornecera diagnósticos, planejamento, mercado de terras, assistência técnica, assessoria na resolução de regularização fundiária de áreas de preservação ou similares conforme a Lei Ambiental que regente no país. 
Sua função será transmitir a ideia de uma solução ambientalmente correta e positiva, enfatizando a conexão entre os produtores rurais ou empreendedores demandantes de áreas e fornecedores das mesmas, com uma função básica ser simples e direto, com fico na funcionalidade principal o atendimento as legislações vigentes.


        </p>

        <!-- Segundo Parágrafo -->
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="text-lg md:text-xl text-white leading-relaxed text-left"
        >
        Aumentar a confiabilidade nos processos de regularização fundiária e CAR aumentado significativamente de forma digital os processos de comercialização de áreas rurais destinadas a Reserva legal (matas), ou áreas similares de forma digital confiável, ágil e profissional. 
        Melhorar de forma simples os processos de comercialização de áreas rurais destinadas a conservação ambiental afim de atender a legislação ambiental e as necessidades dos produtores rurais.
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