<template>
  <section id="cta-final" class="section-padding bg-green-700 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Main Content -->
        <div 
          v-motion="motionPresets.fadeInUp"
          class="mb-12"
        >
          <h2 
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Pronto para Transformar seu 
            <span class="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Agronegócio</span>?
          </h2>
          
          <p 
            class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Junte-se aos mais de 500 produtores que já confiam na CONECTA para regularizar suas propriedades e impulsionar seus resultados com sustentabilidade.
          </p>
        </div>

        <!-- Statistics -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">
              <AnimatedNumber :to="500" :duration="2000" :formatter="(value: number) => `${value}+`" />
            </div>
            <div class="text-white/80">Clientes Atendidos</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">
              <AnimatedNumber :to="25" :duration="2000" :formatter="(value: number) => `${value}+`" />
            </div>
            <div class="text-white/80">Anos de Experiência</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-white mb-2">
              <AnimatedNumber :to="98" :duration="2000" :formatter="(value: number) => `${value}%`" />
            </div>
            <div class="text-white/80">Taxa de Sucesso</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="400"
          class="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button 
            @click="openWhatsApp"
            class="group relative overflow-hidden bg-white text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg min-w-[200px]"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              <Icon icon="mdi:whatsapp" class="w-5 h-5" />
              Entre em Contato
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            @click="scrollToContact"
            class="group relative overflow-hidden border-2 border-white text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              <Icon icon="mdi:clipboard-check" class="w-5 h-5" />
              Solicite sua Regularização
            </span>
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <!-- Trust Indicators -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="600"
          class="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
        >
          <div class="flex items-center gap-2">
            <Icon icon="mdi:shield-check" class="w-5 h-5 text-yellow-300" />
            <span class="text-sm">Certificação Ambiental</span>
          </div>
          
          <div class="flex items-center gap-2">
            <Icon icon="mdi:gavel" class="w-5 h-5 text-yellow-300" />
            <span class="text-sm">Conformidade Legal</span>
          </div>
          
          <div class="flex items-center gap-2">
            <Icon icon="mdi:leaf" class="w-5 h-5 text-yellow-300" />
            <span class="text-sm">Sustentabilidade</span>
          </div>
          
          <div class="flex items-center gap-2">
            <Icon icon="mdi:rocket-launch" class="w-5 h-5 text-yellow-300" />
            <span class="text-sm">Resultados Comprovados</span>
          </div>
        </div>

        <!-- Urgency Message -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="800"
          class="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
        >
          <div class="flex items-center justify-center gap-3 text-white">
            <Icon icon="mdi:clock-outline" class="w-6 h-6 text-yellow-300 animate-pulse" />
            <span class="font-semibold">Não perca tempo! A regularização ambiental é obrigatória e pode gerar multas pesadas.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
    <div class="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 right-10 w-8 h-8 bg-white/10 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'
import AnimatedNumber from '@/components/ui/AnimatedNumber.vue'

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de começar minha regularização ambiental com a CONECTA. Preciso de ajuda urgente!')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}

const scrollToContact = () => {
  const contactSection = document.querySelector('#contato')
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Enhanced gradient */
.bg-gradient-to-br {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-secondary) 100%);
}

/* Glow effect for buttons */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive text sizing */
@media (max-width: 768px) {
  .text-6xl {
    font-size: 2.5rem;
  }
  
  .text-5xl {
    font-size: 2rem;
  }
}
</style> 