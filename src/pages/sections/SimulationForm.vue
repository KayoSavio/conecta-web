<template>
  <section id="simulacao" class="section-padding bg-white">
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
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
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
              <!-- Primeira linha: Tipo de Interesse e Objetivo do Crédito -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <select
                    v-model="formData.tipoInteresse"
                    class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                    required
                  >
                    <option value="" disabled selected>Tipo de Interesse</option>
                    <option value="vender">Vender área</option>
                    <option value="comprar">Comprar área</option>
                  </select>
                </div>
                <div>
                  <select
                    v-model="formData.objetivoCredito"
                    class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                  >
                    <option value="" disabled selected>Objetivo do Crédito</option>
                    <option value="compensacao">Compensação ambiental</option>
                    <option value="comercializacao">Comercialização</option>
                  </select>
                </div>
              </div>

              <!-- Segunda linha: Nome completo -->
              <div>
                <input
                  v-model="formData.nomeCompleto"
                  type="text"
                  placeholder="Nome completo"
                  class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                  required
                />
              </div>

              <!-- Terceira linha: E-mail e Telefone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="E-mail"
                    class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <input
                    v-model="formData.telefone"
                    type="text"
                    placeholder="Telefone (WhatsApp)"
                    maxlength="15"
                    @input="formatTelefone"
                    class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <!-- Quarta linha: Tamanho da Área (2 colunas) e Número do CAR (2 colunas) -->
              

                             
               <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 <div class="relative">
                   <input
                     v-model="formData.cep"
                     type="text"
                     placeholder="CEP"
                     maxlength="9"
                     @input="formatCep"
                     :disabled="isLoadingCep"
                     class="w-full px-4 py-4 pr-12 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200 disabled:opacity-50"
                   />
                   <div v-if="isLoadingCep" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                     <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-green-500"></div>
                   </div>
                 </div>
                 <div>
                   <input
                     v-model="formData.tamanhoArea"
                     type="number"
                     min="0"
                     step="0.01"
                     placeholder="Área (hectare)"
                     class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                   />
                 </div>
                 <div>
                   <input
                     v-model="formData.numeroCar"
                     type="text"
                     placeholder="CAR (opcional)"
                     class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                   />
                 </div>
               </div>

               <!-- Quinta linha: Cidade e Estado -->
               <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div>
                   <input
                     v-model="formData.cidade"
                     type="text"
                     placeholder="Cidade"
                     class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                   />
                 </div>
                 <div>
                   <select
                     v-model="formData.estado"
                     class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
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
                 </div>
               </div>

               <!-- Sexta linha: Rua e Número -->
               <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
                 <div class="sm:col-span-3">
                   <input
                     v-model="formData.rua"
                     type="text"
                     placeholder="Rua"
                     class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                   />
                 </div>
                 <div class="sm:col-span-1">
                   <input
                     v-model="formData.numero"
                     type="text"
                     placeholder="Número"
                     class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                   />
                 </div>
               </div>

               <!-- Sétima linha: Latitude e Longitude -->
               <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div>
                   <input
                     v-model="formData.latitude"
                     type="number"
                     step="0.000001"
                     placeholder="Latitude"
                     class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                   />
                 </div>
                 <div>
                   <input
                     v-model="formData.longitude"
                     type="number"
                     step="0.000001"
                     placeholder="Longitude"
                     class="w-full px-4 py-4 bg-gray-100 rounded-lg text-gray-700 placeholder-gray-500 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all duration-200"
                   />
                 </div>
               </div>

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
import { reactive, ref } from 'vue'
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
  rua: '',
  numero: '',
  latitude: '',
  longitude: ''
})

const isLoadingCep = ref(false)

const formatCep = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value = target.value.replace(/\D/g, '')
  if (value.length > 5) {
    value = value.substring(0, 5) + '-' + value.substring(5, 8)
  }
  if (value.length > 8) {
    value = value.substring(0, 9) // Limita a 9 caracteres (5 dígitos + hífen + 3 dígitos)
  }
  formData.cep = value
  
  // Buscar CEP quando tiver 8 dígitos (sem hífen)
  if (value.replace(/\D/g, '').length === 8) {
    buscarCep(value.replace(/\D/g, ''))
  }
}

const buscarCep = async (cep: string) => {
  isLoadingCep.value = true
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    
    if (!data.erro) {
      formData.cidade = data.localidade
      formData.estado = data.uf
      formData.rua = data.logradouro
    }
  } catch (error) {
    console.error('Erro ao buscar CEP:', error)
  } finally {
    isLoadingCep.value = false
  }
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
  texto += `*Rua:* ${formData.rua}\n`
  texto += `*Número:* ${formData.numero}\n`
  
  if (formData.latitude && formData.longitude) {
    texto += `*Coordenadas:* ${formData.latitude}, ${formData.longitude}\n`
  }
  
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