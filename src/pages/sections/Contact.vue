<template>
  <section id="contato" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div 
            v-motion="motionPresets.fadeInUp"
            class="space-y-4"
          >
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
              Entre em Contato
            </h2>
            <p 
              v-motion="motionPresets.fadeInUp"
              :delay="100"
              class="text-xl text-gray-800"
            >
              Estamos prontos para ajudar você a transformar seu negócio
            </p>
          </div>
          
          <div 
            v-motion="motionPresets.fadeInUp"
            :delay="200"
            class="space-y-6"
          >
            <!-- Phone -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                <Icon icon="mdi:phone" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Telefone</h3>
                <p class="text-gray-800">
                  (11) 99999-9999
                </p>
              </div>
            </div>
            
            <!-- Email -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center">
                <Icon icon="mdi:email" class="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">E-mail</h3>
                <p class="text-gray-800">
                  conectafloresta@gmail.com
                </p>
              </div>
            </div>
            
            <!-- Address -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center">
                <Icon icon="mdi:map-marker" class="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">Endereço</h3>
                <p class="text-gray-800">
                  São Paulo, SP - Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div 
          v-motion="motionPresets.slideInRight"
          class="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">
            Envie sua mensagem
          </h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-800 mb-2">
                Nome *
              </label>
              <div class="relative">
                <Icon icon="mdi:account" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  :class="{ 'border-red-500': errors.name }"
                  placeholder="Seu nome completo"
                />
              </div>
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                {{ errors.name }}
              </p>
            </div>
            
            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-800 mb-2">
                E-mail *
              </label>
              <div class="relative">
                <Icon icon="mdi:email" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  :class="{ 'border-red-500': errors.email }"
                  placeholder="seu@email.com"
                />
              </div>
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>
            
            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-800 mb-2">
                Telefone *
              </label>
              <div class="relative">
                <Icon icon="mdi:phone" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  :class="{ 'border-red-500': errors.phone }"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
                {{ errors.phone }}
              </p>
            </div>
            
            <!-- Company -->
            <div>
              <label for="company" class="block text-sm font-medium text-gray-800 mb-2">
                Empresa
              </label>
              <div class="relative">
                <Icon icon="mdi:office-building" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="company"
                  v-model="formData.company"
                  type="text"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>
            
            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-800 mb-2">
                Mensagem *
              </label>
              <div class="relative">
                <Icon icon="mdi:message-text" class="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-200"
                  :class="{ 'border-red-500': errors.message }"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">
                {{ errors.message }}
              </p>
            </div>
            
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105"
              :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
            >
              <Icon v-if="isLoading" icon="mdi:loading" class="w-5 h-5 animate-spin" />
              <Icon v-else icon="mdi:send" class="w-5 h-5" />
              <span v-if="isLoading">Enviando...</span>
              <span v-else>Enviar Mensagem</span>
            </button>
          </form>
          
          <!-- Success/Error Messages -->
          <div v-if="successMessage" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:check-circle" class="w-5 h-5 text-green-600" />
              <p class="text-green-800">{{ successMessage }}</p>
            </div>
          </div>
          
          <div v-if="errorMessage" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div class="flex items-center gap-2">
              <Icon icon="mdi:alert-circle" class="w-5 h-5 text-red-600" />
              <p class="text-red-800">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useForm } from '@/composables/useForm'
import { motionPresets } from '@/plugins/motion'

const {
  formData,
  errors,
  isLoading,
  successMessage,
  errorMessage,
  submitForm
} = useForm()

const handleSubmit = async () => {
  await submitForm()
}
</script> 