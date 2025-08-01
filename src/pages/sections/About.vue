<template>
  <section id="sobre" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 
              v-motion="motionPresets.fadeInUp"
              class="text-3xl text-gray-800 md:text-4xl font-bold"
            >
              Sobre a CONECTA
            </h2>
            <div 
              v-motion="motionPresets.fadeInUp"
              :delay="100"
              class="w-20 h-1 bg-primary rounded"
            ></div>
          </div>
          
          <div 
            v-motion="motionPresets.fadeInUp"
            :delay="200"
            class="space-y-4 text-gray-800"
          >
            <p class="text-lg text-gray-800 leading-relaxed">
              A CONECTA é uma empresa especializada em soluções empresariais inovadoras, 
              focada em transformar negócios através da tecnologia e estratégias 
              personalizadas.
            </p>
            <p class="text-lg text-gray-800 leading-relaxed">
              Com mais de 25 anos de experiência no mercado, nossa equipe de especialistas 
              trabalha para conectar empresas ao futuro, oferecendo soluções 
              que impulsionam resultados e garantem crescimento sustentável.
            </p>
          </div>
          
          <div 
            v-motion="motionPresets.fadeInUp"
            :delay="300"
            class="grid grid-cols-2 gap-6 pt-6"
          >
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber :to="500" :duration="2000" :formatter="(value) => `${value}+`" />
              </div>
              <div class="text-gray-800">Clientes Atendidos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">
                <AnimatedNumber :to="25" :duration="2000" :formatter="(value) => `${value}+`" />
              </div>
              <div class="text-gray-800">Anos de Experiência</div>
            </div>
          </div>
        </div>
        
        <!-- Image -->
        <div 
          v-motion="motionPresets.slideInRight"
          class="flex justify-center lg:justify-end"
        >
          <div class="relative w-full max-w-md">
            <div class="bg-white rounded-2xl p-8 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div class="w-32 h-32 bg-primary bg-opacity-10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon icon="mdi:office-building" class="w-16 h-16 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">CONECTA</h3>
              <p class="text-gray-600">Soluções Sustentáveis para o Agronegócio</p>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
              <Icon icon="mdi:leaf" class="w-6 h-6 text-accent" />
            </div>
            
            <div class="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse" style="animation-delay: 1s;">
              <Icon icon="mdi:handshake" class="w-5 h-5 text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { motionPresets } from '@/plugins/motion'
import AnimatedNumber from '@/components/ui/AnimatedNumber.vue'

// Seção About da CONECTA
</script> 