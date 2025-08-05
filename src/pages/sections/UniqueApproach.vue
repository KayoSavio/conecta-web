<template>
  <section id="abordagem-unica" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Texto Solto -->
        <div class="space-y-8">
          <div 
            v-motion="motionPresets.fadeInUpOnView"
            class="space-y-6"
          >
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Nossa Abordagem Única
            </h2>
            <p class="text-xl text-gray-600 leading-relaxed">
              Combinamos tecnologia de ponta com expertise ambiental para oferecer soluções completas de regularização e compensação ambiental.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Nossa plataforma digital integra geolocalização, monitoramento via satélite e inteligência artificial para garantir precisão e conformidade em todos os processos.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Com mais de 25 anos de experiência no setor, desenvolvemos uma metodologia única que transforma a gestão ambiental em um processo simples, seguro e eficiente.
            </p>
          </div>
          
          <div 
            v-motion="motionPresets.fadeInUpOnView"
            :delay="200"
            class="flex items-center gap-4"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon icon="mdi:shield-check" class="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Conformidade Garantida</h3>
              <p class="text-gray-600">100% de conformidade com a legislação ambiental</p>
            </div>
          </div>
        </div>

        <!-- Bullet Points com Ícones -->
        <div class="space-y-6 sm:space-y-8">
          <!-- Bullet Point 1 -->
          <div 
            v-motion="motionPresets.fadeInUpOnView"
            :delay="300"
            class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary"
          >
            <div class="flex items-start gap-4 sm:gap-6">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon icon="mdi:satellite-variant" class="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Monitoramento Via Satélite</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Acompanhe em tempo real a evolução dos seus projetos ambientais com tecnologia de monitoramento via satélite de alta precisão.
                </p>
              </div>
            </div>
          </div>

          <!-- Bullet Point 2 -->
          <div 
            v-motion="motionPresets.fadeInUpOnView"
            :delay="400"
            class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent"
          >
            <div class="flex items-start gap-4 sm:gap-6">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon icon="mdi:calculator" class="w-6 h-6 sm:w-8 sm:h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Cálculo Automático de RL</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Sistema inteligente que calcula automaticamente a Reserva Legal necessária baseado na localização e características da propriedade.
                </p>
              </div>
            </div>
          </div>

          <!-- Bullet Point 3 -->
          <div 
            v-motion="motionPresets.fadeInUpOnView"
            :delay="500"
            class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-secondary"
          >
            <div class="flex items-start gap-4 sm:gap-6">
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors duration-300">
                <Icon icon="mdi:file-document-multiple" class="w-6 h-6 sm:w-8 sm:h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Documentação Digital</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Upload e gestão completa de documentos com assinatura digital e armazenamento seguro em nuvem.
                </p>
              </div>
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
</script> 