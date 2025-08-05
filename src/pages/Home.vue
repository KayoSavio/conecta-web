<template>
  <div class="min-h-screen">
    <!-- 1. Hero Section -->
    <Hero />
    
    <!-- 2. Empresas Parceiras -->
    <Partners />
    
    <!-- 3. Para quem é a plataforma? -->
    <WhoWeServe />
    
    <!-- 4. Nossa Abordagem Única -->
    <UniqueApproach />
    
    <!-- 5. Processo em 4 Etapas -->
    <ProcessSteps />
    
    <!-- 6. AGROFLORESTAS CL -->
    <AgroforestryCL />
    
    <!-- 7. OS COBENEFÍCIOS INCLUEM -->
    <Cobenefits />
    
    <!-- 8. MATA ATLÂNTICA -->
    <MataAtlantica />
    
    <!-- 9. Benefícios -->
    <Benefits />
    
    <!-- 10. Formulário de Simulação -->
    <SimulationForm />
    
    <!-- 11. Monetização -->
    <Monetization />
    
    <!-- 12. Call to Action Final -->
    <FinalCTA />
    
    <!-- Footer -->
    <FooterInfo />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/pages/sections/Hero.vue'
import Partners from '@/pages/sections/Partners.vue'
import WhoWeServe from '@/pages/sections/WhoWeServe.vue'
import UniqueApproach from '@/pages/sections/UniqueApproach.vue'
import ProcessSteps from '@/pages/sections/ProcessSteps.vue'
import AgroforestryCL from '@/pages/sections/AgroforestryCL.vue'
import Cobenefits from '@/pages/sections/Cobenefits.vue'
import MataAtlantica from '@/pages/sections/MataAtlantica.vue'
import Benefits from '@/pages/sections/Benefits.vue'
import SimulationForm from '@/pages/sections/SimulationForm.vue'
import Monetization from '@/pages/sections/Monetization.vue'
import FinalCTA from '@/pages/sections/FinalCTA.vue'
import FooterInfo from '@/pages/sections/FooterInfo.vue'
</script>

<style scoped>
/* Smooth transitions between sections */
section {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style> 