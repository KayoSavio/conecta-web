<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-text mb-4">
          <!-- TODO: Substituir pelo título oficial -->
          O que nossos clientes dizem
        </h2>
        <p class="text-xl text-text-light max-w-3xl mx-auto">
          <!-- TODO: Substituir pelo subtítulo oficial -->
          Depoimentos de quem já transformou seu negócio com a CONECTA
        </p>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <!-- TODO: Substituir pela foto do cliente -->
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-text">
                <!-- TODO: Substituir pelo nome do cliente -->
                João Silva
              </h4>
              <p class="text-sm text-text-light">
                <!-- TODO: Substituir pelo cargo/empresa -->
                CEO, Empresa ABC
              </p>
            </div>
          </div>
          <p class="text-text-light leading-relaxed italic">
            <!-- TODO: Substituir pelo depoimento real -->
            "A CONECTA transformou completamente nossa operação. 
            Os resultados foram impressionantes e superaram todas as expectativas."
          </p>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
              <!-- TODO: Substituir pela foto do cliente -->
              <svg class="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-text">
                <!-- TODO: Substituir pelo nome do cliente -->
                Maria Santos
              </h4>
              <p class="text-sm text-text-light">
                <!-- TODO: Substituir pelo cargo/empresa -->
                Diretora, Startup XYZ
              </p>
            </div>
          </div>
          <p class="text-text-light leading-relaxed italic">
            <!-- TODO: Substituir pelo depoimento real -->
            "Profissionalismo e resultados excepcionais. 
            A equipe da CONECTA é realmente especializada e comprometida."
          </p>
        </div>
        
        <!-- Testimonial 3 -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
              <!-- TODO: Substituir pela foto do cliente -->
              <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-text">
                <!-- TODO: Substituir pelo nome do cliente -->
                Carlos Oliveira
              </h4>
              <p class="text-sm text-text-light">
                <!-- TODO: Substituir pelo cargo/empresa -->
                Gerente, Corporação DEF
              </p>
            </div>
          </div>
          <p class="text-text-light leading-relaxed italic">
            <!-- TODO: Substituir pelo depoimento real -->
            "Soluções inovadoras que realmente fazem a diferença. 
            Recomendo fortemente a CONECTA para qualquer empresa."
          </p>
        </div>
      </div>
      
      <!-- Rating -->
      <div class="text-center mt-12">
        <div class="flex justify-center items-center mb-4">
          <div class="flex text-yellow-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span class="ml-2 text-text font-semibold">5.0</span>
        </div>
        <p class="text-text-light">
          <!-- TODO: Substituir pelo número real -->
          Avaliação média de 500+ clientes satisfeitos
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Seção Testimonials da CONECTA
</script> 