<template>
  <div class="min-h-screen">
    <!-- 1. Hero Section -->
    <Hero />
    
    <!-- 2. Para quem é a plataforma? -->
    <WhoWeServe />
    
    <!-- 3. Nossa Abordagem Única -->
    <UniqueApproach />
    
    <!-- 4. Funcionalidades Principais -->
    <!-- <KeyActivities /> -->
    
    <!-- 5. Benefícios -->
    <Benefits />
    
    <!-- 6. Monetização -->
    <Monetization />
    
    <!-- 7. Testimonials -->
    <Testimonials />
    
    <!-- 8. Call to Action Final -->
    <FinalCTA />
    
    <!-- Footer -->
    <FooterInfo />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/pages/sections/Hero.vue'
import WhoWeServe from '@/pages/sections/WhoWeServe.vue'
import UniqueApproach from '@/pages/sections/UniqueApproach.vue'
import KeyActivities from '@/pages/sections/KeyActivities.vue'
import Benefits from '@/pages/sections/Benefits.vue'
import Monetization from '@/pages/sections/Monetization.vue'
import Testimonials from '@/pages/sections/Testimonials.vue'
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