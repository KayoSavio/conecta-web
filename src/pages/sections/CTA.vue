<template>
  <section class="section-padding bg-gradient-to-r from-primary via-secondary to-accent text-white">
    <div class="container-custom text-center">
      <div class="max-w-4xl mx-auto space-y-8">
        <h2 
          v-motion="motionPresets.fadeInUp"
          class="text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Pronto para transformar seu negócio?
        </h2>
        
        <p 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="text-xl text-white opacity-90 max-w-2xl mx-auto"
        >
          Conecte-se com a CONECTA e descubra como podemos impulsionar 
          seus resultados e garantir o crescimento sustentável da sua empresa.
        </p>
        
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            @click="openWhatsApp"
            class="btn-primary text-lg px-8 py-4 transition-all duration-200 hover:scale-105"
          >
            Falar no WhatsApp
          </button>
          
          <button 
            @click="scrollToContact"
            class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary transition-all duration-200 hover:scale-105"
          >
            Solicitar Orçamento
          </button>
        </div>
        
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-white opacity-80"
        >
          <div class="flex items-center space-x-2">
            <Icon icon="mdi:clock-fast" class="w-5 h-5" />
            <span>Resposta em até 24h</span>
          </div>
          
          <div class="flex items-center space-x-2">
            <Icon icon="mdi:account-tie" class="w-5 h-5" />
            <span>Atendimento personalizado</span>
          </div>
          
          <div class="flex items-center space-x-2">
            <Icon icon="mdi:target" class="w-5 h-5" />
            <span>Resultados garantidos</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da CONECTA.')
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