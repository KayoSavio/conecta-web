<template>
  <footer class="bg-primary text-white">
    <div class="container-custom py-12 sm:py-16 px-4 sm:px-6">
      <div class="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <!-- Company Info -->
        <div 
          v-motion="motionPresets.fadeInUp"
          class="space-y-4 w-full lg:w-1/2"
        >
          <h3 class="text-xl font-bold">
            <!-- TODO: Substituir pelo nome oficial -->
            <img src="@/assets/images/conectarLogoWhite.png" alt="Conecta Florestas" class="h-12 sm:h-14 lg:h-16 w-auto">
          </h3>
          <p class="text-gray-300 leading-relaxed">
            <!-- TODO: Substituir pela descrição oficial -->
            Soluções empresariais inovadoras para conectar 
            seu negócio ao futuro.
          </p>
          <div class="flex space-x-4">
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/company/108577838/admin/dashboard/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <!-- X (Twitter) -->
            <a href="https://x.com/ConectaFloresta" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <!-- Instagram -->
            <a href="https://www.instagram.com/conecta_florestas/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Services -->
        <!-- <div 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="space-y-4"
        >
          <h3 class="text-lg font-semibold">Serviços</h3>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Consultoria Estratégica</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Transformação Digital</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Otimização de Performance</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Gestão de Projetos</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Análise de Dados</a></li>
          </ul>
        </div> -->
        
        <!-- Company -->
        <!-- <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="space-y-4"
        >
          <h3 class="text-lg font-semibold">Empresa</h3>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Sobre Nós</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Nossa História</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Equipe</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Carreiras</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Blog</a></li>
          </ul>
        </div> -->
        
        <!-- Contact -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="space-y-4 w-full lg:w-1/2"
        >
          <h3 class="text-lg font-semibold">Contato</h3>
          <div class="space-y-2 text-gray-300">
            <p class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              conectafloresta@gmail.com
            </p>
            <p class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              (28) 99971-0377
            </p>
            <p class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              R. Cândido Avelino de Mendonça, 72<br>
              Bairro São Tiago, Guaçuí – ES<br>
              CEP 29560-000
            </p>
          </div>
        </div>
      </div>
      
      <!-- Bottom -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="400"
        class="border-t border-gray-700 mt-8 pt-8"
      >
        <div class="flex flex-col md:flex-row justify-between items-center mb-4">
          <p class="text-white text-sm">
            © 2024 CONECTA. Todos os direitos reservados.
          </p>
          <p class="text-white text-xs">
            CNPJ: 43.335.343/0001-31
          </p>
          <!-- <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-white hover:text-white text-sm transition-all duration-200 hover:scale-105">
              Política de Privacidade
            </a>
            <a href="#" class="text-white hover:text-white text-sm transition-all duration-200 hover:scale-105">
              Termos de Uso
            </a>
          </div> -->
        </div>
        <!-- <div class="text-center">
          <p class="text-white text-xs">
            CNPJ: 43.335.343/0001-31
          </p>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { motionPresets } from '@/plugins/motion'

// Footer da CONECTA
</script> 