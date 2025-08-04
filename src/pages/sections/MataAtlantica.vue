<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Lado Esquerdo: Bento Grid -->
        <div 
          v-motion="motionPresets.fadeIn"
          class="relative "
        >
            <!-- <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
              <img 
                src="https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/02/29/istock-1142662804-1hvb2h3akz2ar.jpg" 
                alt="Mata Atlântica - Nature Conservancy" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div> -->
          <div class="grid grid-cols-12 grid-rows-16 gap-4 h-full">
            
            <!-- Imagem 1: Grande (Top-Left) -->
            <div class="col-span-6 row-span-8 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                src="https://www.sedest.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2020-05/serradomar_004.jpg" 
                alt="Serra do Mar - Mata Atlântica" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <!-- Imagem 2: Média (Top-Right) -->
            <div class="col-span-6 row-span-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              <img 
                src="https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/02/29/istock-1142662804-1hvb2h3akz2ar.jpg" 
                alt="Tucano na Mata Atlântica" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <!-- Imagem 3: Pequena (Middle-Right) -->
            <div class="col-span-3 row-span-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://papelsemente.com.br/wp-content/uploads/2022/09/dia-da-mata-atlantica-o-que-vai-acontecer-dia-27-de-maio.jpg" 
                alt="Dia da Mata Atlântica" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <!-- Imagem 4: Pequena (Bottom-Right) -->
            <div class="col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://images.ecycle.com.br/wp-content/uploads/2022/12/17170822/mata-atlantica-tucano.jpg.webp" 
                alt="Vegetação do Parque das Aves - Mata Atlântica" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://www.parquedasaves.com.br/wp-content/uploads/2019/08/vegetacao-Parque-das-Aves-Mata-Atlantica-3.jpg" 
                alt="Vegetação do Parque das Aves - Mata Atlântica" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <!-- Imagem 5: Média (Bottom-Left) -->
            <div class="col-span-12 row-span-12 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <img 
                src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/brazil/SACR090218_D006.JPG?crop=354%2C0%2C3543%2C2835&wid=600&hei=480&scl=5.90625" 
                alt="Mata Atlântica - Nature Conservancy" 
                class="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <!-- Lado Direito: Texto -->
        <div 
          v-motion="motionPresets.fadeIn"
          class="space-y-8"
        >
          <!-- Título e Subtítulo -->
          <div class="space-y-4">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-800 uppercase tracking-wide">
              MATA ATLÂNTICA
            </h2>
            <p class="text-lg text-gray-600 font-medium">Brasil</p>
          </div>

          <!-- Conteúdo Principal -->
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-lg">
              Considerada a mais antiga da América do Sul, a Mata Atlântica conserva árvores centenárias em algumas regiões brasileiras. Infelizmente, foi reduzida a menos de 20% de sua cobertura original, resultado de séculos de desmatamento.
            </p>

            <p class="text-lg">
              Mesmo com a Lei da Mata Atlântica (nº 11.428/2006), apenas 9,8% do território é protegido por unidades de conservação. Dos cerca de 130 milhões de hectares abrangidos pela lei, apenas 12,8 milhões contam com proteção efetiva.
            </p>

            <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h3 class="text-xl font-bold text-green-800 mb-3">⚠️ Prazo Importante</h3>
              <p class="text-green-700">
                A partir de 20 de novembro de 2025, propriedades rurais menores de 25 hectares terão de obter regularização ambiental. O prazo termina este ano!
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-xl font-bold text-gray-800">Regularização Ambiental é Necessária para:</h3>
              <ul class="space-y-2">
                <li class="flex items-start space-x-3">
                  <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Registro no Incra</span>
                </li>
                <li class="flex items-start space-x-3">
                  <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Transferência de propriedade</span>
                </li>
                <li class="flex items-start space-x-3">
                  <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Averbação de Reserva Legal e APP</span>
                </li>
                <li class="flex items-start space-x-3">
                  <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Obtenção de Crédito Rural</span>
                </li>
                <li class="flex items-start space-x-3">
                  <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Inscrição no Cadastro Ambiental Rural (CAR)</span>
                </li>
                <li class="flex items-start space-x-3">
                  <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Emissão do Certificado de Cadastro de Imóvel Rural (CCIR)</span>
                </li>
              </ul>
            </div>

            <div class="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500">
              <h3 class="text-xl font-bold text-amber-800 mb-3">⚠️ Consequências da Não Regularização</h3>
              <ul class="text-amber-700 space-y-2">
                <li>• Impede transferência da propriedade</li>
                <li>• Dificulta acesso a crédito rural</li>
                <li>• Problemas em ações judiciais por posse indevida</li>
                <li>• Compromete segurança jurídica</li>
              </ul>
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