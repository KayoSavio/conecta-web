<template>
  <footer class="bg-primary text-white">
    <div class="container-custom py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div 
          v-motion="motionPresets.fadeInUp"
          class="space-y-4"
        >
          <h3 class="text-xl font-bold">
            <!-- TODO: Substituir pelo nome oficial -->
            CONECTA
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
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Services -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="100"
          class="space-y-4"
        >
          <h3 class="text-lg font-semibold">Serviços</h3>
          <ul class="space-y-2 text-gray-300">
            <!-- TODO: Substituir pelos serviços reais -->
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Consultoria Estratégica</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Transformação Digital</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Otimização de Performance</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Gestão de Projetos</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Análise de Dados</a></li>
          </ul>
        </div>
        
        <!-- Company -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="200"
          class="space-y-4"
        >
          <h3 class="text-lg font-semibold">Empresa</h3>
          <ul class="space-y-2 text-gray-300">
            <!-- TODO: Substituir pelos links reais -->
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Sobre Nós</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Nossa História</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Equipe</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Carreiras</a></li>
            <li><a href="#" class="hover:text-white transition-all duration-200 hover:scale-105">Blog</a></li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div 
          v-motion="motionPresets.fadeInUp"
          :delay="300"
          class="space-y-4"
        >
          <h3 class="text-lg font-semibold">Contato</h3>
          <div class="space-y-2 text-gray-300">
            <!-- TODO: Substituir pelas informações reais -->
            <p>conectafloresta@gmail.com</p>
            <p>(28) 99971-0377</p>
            <p>São Paulo, SP - Brasil</p>
          </div>
        </div>
      </div>
      
      <!-- Bottom -->
      <div 
        v-motion="motionPresets.fadeInUp"
        :delay="400"
        class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-300 text-sm">
          <!-- TODO: Substituir pelo ano atual -->
          © 2024 CONECTA. Todos os direitos reservados.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <!-- TODO: Substituir pelos links reais -->
          <a href="#" class="text-gray-300 hover:text-white text-sm transition-all duration-200 hover:scale-105">
            Política de Privacidade
          </a>
          <a href="#" class="text-gray-300 hover:text-white text-sm transition-all duration-200 hover:scale-105">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { motionPresets } from '@/plugins/motion'

// Footer da CONECTA
</script> 