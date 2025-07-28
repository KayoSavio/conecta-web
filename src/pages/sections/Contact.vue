<template>
  <section id="contact" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h2 class="text-3xl md:text-4xl font-bold text-text">
              <!-- TODO: Substituir pelo título oficial -->
              Entre em Contato
            </h2>
            <p class="text-xl text-text-light">
              <!-- TODO: Substituir pelo subtítulo oficial -->
              Estamos prontos para ajudar você a transformar seu negócio
            </p>
          </div>
          
          <div class="space-y-6">
            <!-- Phone -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-text">Telefone</h3>
                <p class="text-text-light">
                  <!-- TODO: Substituir pelo telefone real -->
                  (11) 99999-9999
                </p>
              </div>
            </div>
            
            <!-- Email -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-text">E-mail</h3>
                <p class="text-text-light">
                  <!-- TODO: Substituir pelo e-mail real -->
                  contato@conecta.com.br
                </p>
              </div>
            </div>
            
            <!-- Address -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-text">Endereço</h3>
                <p class="text-text-light">
                  <!-- TODO: Substituir pelo endereço real -->
                  São Paulo, SP - Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-text mb-6">
            Envie sua mensagem
          </h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-text mb-2">
                Nome *
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                :class="{ 'border-red-500': errors.name }"
                placeholder="Seu nome completo"
              />
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                {{ errors.name }}
              </p>
            </div>
            
            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-text mb-2">
                E-mail *
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                :class="{ 'border-red-500': errors.email }"
                placeholder="seu@email.com"
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>
            
            <!-- Phone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-text mb-2">
                Telefone *
              </label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                :class="{ 'border-red-500': errors.phone }"
                placeholder="(11) 99999-9999"
              />
              <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
                {{ errors.phone }}
              </p>
            </div>
            
            <!-- Company -->
            <div>
              <label for="company" class="block text-sm font-medium text-text mb-2">
                Empresa
              </label>
              <input
                id="company"
                v-model="formData.company"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nome da sua empresa"
              />
            </div>
            
            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-text mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                :class="{ 'border-red-500': errors.message }"
                placeholder="Conte-nos sobre seu projeto..."
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">
                {{ errors.message }}
              </p>
            </div>
            
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
              :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
            >
              <svg v-if="isLoading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-if="isLoading">Enviando...</span>
              <span v-else>Enviar Mensagem</span>
            </button>
          </form>
          
          <!-- Success/Error Messages -->
          <div v-if="successMessage" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-green-800">{{ successMessage }}</p>
          </div>
          
          <div v-if="errorMessage" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-800">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useForm } from '@/composables/useForm'

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