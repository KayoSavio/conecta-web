<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="max-w-6xl mx-auto">
        <!-- Título -->
        <div class="text-center mb-12">
          <h2 
            v-motion="motionPresets.fadeInUp"
            class="text-3xl font-bold text-gray-800 mb-2"
          >
            Solicitar Simulação
          </h2>
          <p 
            v-motion="motionPresets.fadeInUp"
            :delay="100"
            class="text-gray-500 text-sm"
          >
            Preencha os dados para receber uma simulação personalizada
          </p>
        </div>

        <!-- Layout em duas colunas -->
        <div class="grid lg:grid-cols-2 gap-12 items-stretch">
          <!-- Imagem -->
          <div 
            v-motion="motionPresets.fadeIn"
            :delay="200"
            class="hidden lg:block h-full"
          >
            <div class="relative h-full min-h-[600px]">
              <div class="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
                <!-- Imagem de fundo -->
                <div class="absolute inset-0 bg-black/50"></div>
                                 <img 
                   src="/src/assets/images/agricultor.jpg"
                   alt="Agricultor brasileiro"
                   class="w-full h-full object-cover opacity-60"
                 />
                
                <!-- Overlay com conteúdo -->
                <div class="absolute inset-0 flex items-end justify-start">
                  <div class="text-white p-8">
                    <h3 class="text-4xl font-bold mb-3">Crédito de Carbono</h3>
                    <p class="text-lg opacity-90 max-w-sm">Transforme sua área em oportunidade sustentável e gere valor ambiental</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulário Minimalista -->
          <div 
            v-motion="motionPresets.fadeIn"
            :delay="300"
            class="bg-white flex items-center"
          >
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <!-- Tipo de Interesse -->
              <select
                v-model="formData.tipoInteresse"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                required
              >
                <option value="" disabled selected>Tipo de Interesse</option>
                <option value="vender">Vender área</option>
                <option value="comprar">Comprar área</option>
              </select>

              <!-- Objetivo do Crédito -->
              <select
                v-model="formData.objetivoCredito"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
              >
                <option value="" disabled selected>Objetivo do Crédito</option>
                <option value="compensacao">Compensação ambiental</option>
                <option value="comercializacao">Comercialização</option>
              </select>

              <!-- Nome completo -->
              <input
                v-model="formData.nomeCompleto"
                type="text"
                placeholder="Nome completo"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                required
              />

              <!-- E-mail -->
              <input
                v-model="formData.email"
                type="email"
                placeholder="E-mail"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                required
              />

              <!-- Telefone -->
              <input
                v-model="formData.telefone"
                type="text"
                placeholder="Telefone (WhatsApp)"
                maxlength="15"
                @input="formatTelefone"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                required
              />

              <!-- Tamanho da Área -->
              <input
                v-model="formData.tamanhoArea"
                type="number"
                min="0"
                step="0.01"
                placeholder="Tamanho da área (hectares)"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
              />

              <!-- Número do CAR -->
              <input
                v-model="formData.numeroCar"
                type="text"
                placeholder="Número do CAR (opcional)"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
              />

              <!-- Estado -->
              <select
                v-model="formData.estado"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
              >
                <option value="" disabled selected>Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>

              <!-- Cidade -->
              <input
                v-model="formData.cidade"
                type="text"
                placeholder="Cidade"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
              />

              <!-- CEP -->
              <input
                v-model="formData.cep"
                type="text"
                placeholder="CEP"
                maxlength="9"
                @input="formatCep"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
              />

              <!-- Número -->
              <input
                v-model="formData.numero"
                type="text"
                placeholder="Número"
                class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
              />

              <!-- Botão de envio -->
              <div class="text-center pt-6">
                <button
                  type="submit"
                  class="w-full bg-green-500 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Solicitar Simulação
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { motionPresets } from '@/plugins/motion'

const formData = reactive({
  tipoInteresse: '',
  objetivoCredito: '',
  nomeCompleto: '',
  email: '',
  telefone: '',
  tamanhoArea: '',
  numeroCar: '',
  estado: '',
  cidade: '',
  cep: '',
  numero: ''
})

const formatCep = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value = target.value.replace(/\D/g, '')
  if (value.length > 5) {
    value = value.substring(0, 5) + '-' + value.substring(5, 8)
  }
  formData.cep = value
}

const formatTelefone = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value = target.value.replace(/\D/g, '')
  if (value.length > 0) {
    value = '(' + value
    if (value.length > 3) {
      value = value.substring(0, 3) + ') ' + value.substring(3)
    }
    if (value.length > 10) {
      value = value.substring(0, 10) + '-' + value.substring(10, 14)
    }
  }
  formData.telefone = value
}

const handleSubmit = () => {
  const texto = gerarTextoFormulario()
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5528999710377'
  const message = encodeURIComponent(texto)
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}

const gerarTextoFormulario = () => {
  const tipoInteresse = formData.tipoInteresse === 'vender' ? 'Vender área' : 'Comprar área'
  const objetivoCredito = formData.objetivoCredito === 'compensacao' ? 'Compensação ambiental' : 'Comercialização'
  
  let texto = `*NOVA SOLICITAÇÃO DE SIMULAÇÃO* 🌱\n\n`
  texto += `*Tipo de Interesse:* ${tipoInteresse}\n`
  texto += `*Objetivo do Crédito:* ${objetivoCredito}\n`
  
  if (formData.tamanhoArea) {
    texto += `*Tamanho da Área:* ${formData.tamanhoArea} hectares\n`
  }
  
  if (formData.numeroCar) {
    texto += `*Número do CAR:* ${formData.numeroCar}\n`
  }
  
  texto += `\n*ENDEREÇO:*\n`
  texto += `*Estado:* ${formData.estado}\n`
  texto += `*Cidade:* ${formData.cidade}\n`
  texto += `*CEP:* ${formData.cep}\n`
  texto += `*Número:* ${formData.numero}\n`
  
  texto += `\n*DADOS PESSOAIS:*\n`
  texto += `*Nome:* ${formData.nomeCompleto}\n`
  texto += `*E-mail:* ${formData.email}\n`
  texto += `*Telefone:* ${formData.telefone}\n`
  
  return texto
}
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