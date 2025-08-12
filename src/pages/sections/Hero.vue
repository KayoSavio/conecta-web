<template>
  <section id="inicio" class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-primary/30 z-10"></div>
      <picture>
        <source 
          srcset="https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp 800w,
                  https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=75&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp 1200w,
                  https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=75&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp 1600w"
          type="image/webp"
        />
        <img 
          ref="backgroundImage"
          src="https://images.unsplash.com/photo-1639618650311-59aa5840e695?q=75&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Floresta plantada e reflorestamento - Área de compensação ambiental"
          class="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </picture>
    </div>
    
    <!-- Content Container -->
    <div class="relative z-20 container-custom px-4 sm:px-8 lg:px-12 pt-20 sm:pt-24 lg:pt-32">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Text Content -->
          <div class="space-y-8 text-white">
            <!-- Main Title -->
            <h1 
              ref="heroTitle"
              class="p-4 pb-0 sm:p-0 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-2xl"
            >
              Transformamos sua propriedade em um 
              <span class="bg-accent bg-clip-text text-transparent">ativo ambiental lucrativo</span> e regularizado
            </h1>
            
            <!-- Subtitle -->
            <p 
              ref="heroSubtitle"
              class="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl drop-shadow-2xl px-4 sm:px-0"
            >
              Plataforma digital que simplifica a regularização e compensação ambiental com tecnologia avançada e suporte especializado.
            </p>
            
            <!-- CTA Buttons -->
            <div 
              ref="heroCTA"
              class="p-4 pb-0 sm:p-0 flex flex-col sm:flex-row w-full items-center sm:justify-center lg:justify-start gap-4"
            >
              <button 
                @click="openWhatsApp"
                class="flex items-center justify-center gap-2 group w-full relative overflow-hidden bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              >
                  <Icon icon="mdi:whatsapp" class="w-5 h-5" />
                  Falar com Especialista
              </button>
              
              <button 
                @click="scrollToForm"
                class="group w-full relative overflow-hidden border-2 border-white text-white hover:text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                  <Icon icon="mdi:clipboard-check" class="w-5 h-5" />
                  Solicitar Simulação
                </span>
                <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            <!-- Social Media Links -->
            <div class="p-4 sm:p-0 py-0 flex items-center gap-4 mt-6">
              <a 
                href="https://x.com/conectafloresta" 
                target="_blank" 
                aria-label="X"
                rel="noopener noreferrer"
                class="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 p-3"
              >
                <svg class="w-6 h-6 text-white group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/conecta-florestas/" 
                target="_blank" 
                aria-label="linkedin"
                rel="noopener noreferrer"
                class="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 p-3"
              >
                <svg class="w-6 h-6 text-white group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com/conecta_florestas" 
                target="_blank" 
                aria-label="Instagram"
                rel="noopener noreferrer"
                class="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 p-3"
              >
                <svg class="w-6 h-6 text-white group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Visual Element / Image -->
          <div 
            ref="visualCard"
            class="flex justify-center lg:justify-end p-4 sm:p-0"
          >
            <div class="relative w-full max-w-md">
              <!-- Modern Glassmorphism Card -->
              <div class="relative group">
                <!-- Background Blur Effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-green-400/20 via-emerald-400/10 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                
                <!-- Main Card Container -->
                <div class="glassmorphism-card relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 overflow-hidden animate-glassmorphism">
                  
                  <div class="absolute inset-0 overflow-hidden">
                    <div class="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-xl animate-pulse"></div>
                    <div class="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse" style="animation-delay: 1s;"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s;"></div>
                  </div>

                  <div class="relative z-10 space-y-8">
                    
                    <div class="flex justify-center">
                      <div class="experience-badge inline-flex items-center gap-3 bg-gradient-to-r from-green-500/30 to-emerald-500/30 backdrop-blur-sm border border-green-400/40 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-glow">
                        <div class="relative">
                          <svg class="w-5 h-5 text-green-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <div class="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                        <span class="font-bold text-white">+25 anos de experiência</span>
                        <div class="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    <div class="grid grid-cols-2 gap-8">
                      <div class="text-center group">
                        <div class="relative mb-4">
                          <div class="text-4xl font-bold text-white tracking-tight drop-shadow-lg">
                            <span class="counter" data-target="500">0</span>+
                          </div>
                          <div class="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                        <div class="text-sm text-white/90 font-medium leading-relaxed">
                          Hectares<br>Reflorestados
                        </div>
                        <div class="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-500"></div>
                      </div>

                      <div class="text-center group">
                        <div class="relative mb-4">
                          <div class="text-4xl font-bold text-white tracking-tight drop-shadow-lg">
                            <span class="counter" data-target="100">0</span>%
                          </div>
                          <div class="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-ping" style="animation-delay: 0.5s;"></div>
                        </div>
                        <div class="text-sm text-white/90 font-medium leading-relaxed">
                          Conformidade<br>Legal
                        </div>
                        <div class="w-12 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mx-auto mt-3 group-hover:w-16 transition-all duration-500"></div>
                      </div>
                    </div>

                    <div class="space-y-4">
                      <div class="flex items-center gap-4 text-white/95 hover:text-white transition-colors duration-300 group">
                        <div class="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                          <svg class="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <span class="text-sm font-medium">Regularização ambiental</span>
                      </div>

                      <div class="flex items-center gap-4 text-white/95 hover:text-white transition-colors duration-300 group">
                        <div class="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-300 group-hover:scale-110">
                          <svg class="w-6 h-6 text-emerald-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                          </svg>
                        </div>
                        <span class="text-sm font-medium">Tecnologia avançada</span>
                      </div>

                      <div class="flex items-center gap-4 text-white/95 hover:text-white transition-colors duration-300 group">
                        <div class="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                          <svg class="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <span class="text-sm font-medium">Resultados comprovados</span>
                      </div>
                    </div>

                  </div>

                  <div class="absolute top-4 right-4 w-4 h-4 bg-green-400/40 rounded-full animate-pulse"></div>
                  <div class="absolute bottom-4 left-4 w-3 h-3 bg-emerald-400/50 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
                  <div class="absolute top-1/2 right-2 w-2 h-2 bg-green-400/60 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="w-full flex justify-center items-center">
          <div class="flex flex-col items-center justify-center gap-6 lg:hidden flex my-6 max-w-[200px]">
          <p class="text-white">Parceiros</p>
            <svg width="full" viewBox="0 0 145 34" xmlns="http://www.w3.org/2000/svg" class="grayscale hover:grayscale-0 hover:opacity-100 opacity-60 logo-desk logo-sicredi gtag-click-trigger fill-current text-white" data-gtag-action="logo" data-gtag-label="logo">
                <path d="M25.1965 15.2486C24.2035 16.0664 23.4636 16.2027 23.1326 15.8717C22.9185 15.6575 22.8795 15.2292 23.0353 14.684C23.561 12.9511 23.9698 11.1988 24.3008 9.42702C26.2868 8.55086 28.2728 7.73311 30.4729 7.51894C29.441 10.3421 27.5524 13.2821 25.1965 15.2486ZM24.184 21.0702C22.9379 20.8171 22.3538 20.272 22.3928 19.7852C22.4122 19.4737 22.7043 19.1622 23.2105 18.948C24.7681 18.286 26.3063 17.5656 27.7665 16.6894C29.6941 17.624 31.5438 18.8117 33.0235 20.3109C30.3172 21.3234 26.9877 21.6544 24.184 21.0702ZM19.0439 24.1465C18.4403 22.9004 18.4987 22.0438 18.8881 21.7517C19.1607 21.557 19.589 21.5959 20.0758 21.8685C21.5945 22.7252 23.1326 23.504 24.7681 24.1465C24.7681 24.1465 24.7681 24.1465 24.7681 24.166C25.3522 26.5024 25.7027 28.9557 25.5469 31.37C22.8406 29.6566 20.3873 26.9308 19.0439 24.1465ZM13.2223 21.9075C13.9037 20.5445 14.6241 20.0188 15.1109 20.1746C15.4419 20.272 15.6755 20.6419 15.7534 21.2455C16.026 23.1536 16.4349 25.0227 16.9216 26.8724C15.2277 29.1504 13.417 31.3505 11.1389 33.1418C10.8858 29.4619 11.5868 25.2369 13.2223 21.9075ZM11.4699 15.6186C13.0081 15.307 13.8453 15.5602 14.04 16.0469C14.1568 16.3584 14.0011 16.7868 13.5727 17.2541C12.1319 18.7533 10.8079 20.3304 9.54238 21.9659H9.52291C6.42714 22.18 3.19508 22.0632 0.157715 21.3428C3.25349 18.7338 7.43959 16.4168 11.4699 15.6186ZM15.4029 10.5174C16.5517 11.5103 16.8632 12.2892 16.6101 12.7175C16.4349 12.9901 16.026 13.1264 15.4029 13.068C13.3391 12.8343 11.2752 12.737 9.19192 12.737C7.22542 10.4784 5.43416 7.96676 4.28541 5.26039C8.19893 6.13655 12.4045 7.96676 15.4029 10.5174ZM21.5166 10.5952C21.5166 11.9971 21.1272 12.698 20.6599 12.737C20.3484 12.7759 19.9979 12.5228 19.6669 12.0166C18.6155 10.3811 17.4668 8.80398 16.2402 7.26583C16.7074 4.81257 17.4668 2.32038 18.7713 0.15918C20.4068 3.29389 21.5361 7.11006 21.5166 10.5952Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.239 7.24661C16.7063 4.81283 17.4656 2.32064 18.7701 0.159439C15.9859 -0.229966 13.1237 0.101028 10.5147 1.07454C12.1113 2.63216 13.6884 4.20925 15.1097 5.90317C15.2757 6.10406 15.4534 6.31279 15.6288 6.51881C15.8444 6.77204 16.0565 7.02116 16.239 7.24661ZM25.0594 2.36028C24.9426 4.22942 24.8063 6.0791 24.5337 7.9093C24.5013 8.11212 24.4688 8.33183 24.4364 8.55155C24.3909 8.85915 24.3455 9.16676 24.3001 9.42798C26.286 8.55182 28.272 7.73407 30.4721 7.5199C29.0898 5.43658 27.2401 3.66479 25.0594 2.36028ZM32.9049 13.1462C31.6393 14.1392 30.3348 15.1127 28.9524 15.9499C28.7762 16.0556 28.5921 16.1733 28.4089 16.2903L28.4088 16.2904C28.1873 16.4319 27.9673 16.5725 27.7647 16.6898C29.6923 17.6243 31.542 18.812 33.0217 20.3112C33.3722 17.8385 33.3527 15.6189 32.9049 13.1462ZM26.1083 24.6527C27.627 25.2174 29.2041 25.6457 30.7811 26.0351C29.4766 28.1379 27.6854 29.9876 25.5631 31.37C25.7189 28.9557 25.3684 26.5024 24.7843 24.166V24.1465C25.1076 24.292 25.5115 24.4375 25.8845 24.5719L25.8847 24.572L25.8848 24.572C25.9609 24.5994 26.0357 24.6263 26.1083 24.6527ZM19.3922 33.7646C18.6524 31.9928 17.9514 30.2015 17.3868 28.4103C17.3464 28.2789 17.3034 28.1424 17.2597 28.0039L17.2597 28.0036L17.2596 28.0035L17.2596 28.0034L17.2596 28.0034C17.1351 27.6085 17.006 27.1986 16.9195 26.8527C15.2256 29.1307 13.4149 31.3308 11.1563 33.1221C13.8822 33.9204 16.5496 34.2708 19.3922 33.7646ZM8.47152 23.4658C7.14754 25.3154 5.94039 27.3014 4.79164 29.2874C2.53309 27.0872 0.936531 24.3224 0.157721 21.3435C3.19508 22.0639 6.42714 22.1807 9.52292 21.9665H9.54239C9.34379 22.2352 9.12416 22.546 8.90454 22.8567L8.90438 22.857L8.90419 22.8572C8.75789 23.0642 8.6116 23.2712 8.47152 23.4658ZM0 13.3987C2.43378 13.1066 4.88704 12.8535 7.30135 12.7756C7.50564 12.7693 7.72039 12.7608 7.93601 12.7523L7.93616 12.7523C8.37808 12.7348 8.82359 12.7172 9.18996 12.7172C7.204 10.4782 5.4322 7.96649 4.28346 5.26013C2.12226 7.53815 0.642519 10.3808 0 13.3987Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5429 11.2948C42.0951 14.6048 43.3023 16.5713 46.6122 17.8563L50.9735 19.5113C52.3559 19.998 52.6675 20.2317 52.4922 21.5557C52.2196 23.2496 51.5382 23.6974 48.4813 23.6974H41.0826L40.4207 28.1171H48.6955C55.1402 28.1171 57.3209 26.6763 57.9634 21.9061C58.3722 18.9077 57.8271 16.7465 53.8551 15.2862L49.7274 13.7675C48.1309 13.2029 47.8388 12.9693 48.053 11.6453C48.2866 10.1655 48.8708 9.83455 50.0584 9.75667H58.8979L59.5599 5.33691H51.6745C46.3007 5.33691 43.2633 6.29096 42.5429 11.2948ZM67.6595 9.75667L68.3021 5.33691H62.9477L62.2857 9.75667H67.6595ZM64.9533 28.0976H59.5989L61.9548 12.0151H67.3286L64.9533 28.0976ZM78.1552 11.5683C75.1178 11.5683 73.015 12.1718 71.5937 13.4764C70.1724 14.7614 69.3546 16.7084 68.8873 19.8237C68.42 22.9194 68.8095 25.1001 70.0945 26.4825C71.3211 27.826 73.385 28.4685 76.4418 28.4685C77.941 28.4685 80.1411 28.3322 82.1076 27.7091L82.2439 27.6702L82.8086 23.8735L82.4581 23.9319C81.0757 24.1266 79.3429 24.2045 77.2985 24.2045C75.8966 24.2045 75.1762 24.0487 74.7868 23.6204C74.3001 23.0947 74.2027 22.0627 74.4753 20.0768C74.9426 16.3969 76.1497 15.8128 78.8366 15.8128C79.927 15.8128 83.9963 15.8712 83.9963 15.8712L84.522 12.2692C84.5193 12.2718 84.4759 12.2611 84.3928 12.2405C83.8578 12.108 81.6775 11.5683 78.1552 11.5683ZM98.131 12.0151H99.1629L98.9682 12.3656C97.469 14.7994 96.9822 16.8632 96.9822 16.8827L96.9433 17.0579H95.7945C94.3927 17.0579 92.5041 18.0315 91.8226 18.8492L90.5181 28.0976H85.1248L87.4807 12.0151H91.7447V15.1109C94.2369 12.9497 96.1645 12.0151 98.131 12.0151ZM115.537 17.2147C115.79 15.5207 115.517 14.2552 114.699 13.3595C113.609 12.1524 111.506 11.5683 108.294 11.5683C101.791 11.5683 99.3373 13.6126 98.5585 19.6874C98.1691 22.8026 98.6169 25.0028 99.9409 26.4046C101.226 27.787 103.368 28.4685 106.463 28.4685C108.644 28.4685 111.974 28.0791 114.076 27.2418L114.271 27.164L114.213 26.9693C114.213 26.9681 114.211 26.9621 114.208 26.9515C114.204 26.9375 114.198 26.9155 114.189 26.8862C114.093 26.5547 113.724 25.2896 113.59 24.1266L113.551 23.8735L113.298 23.9319C112.655 24.0877 108.683 24.2824 107.048 24.2824C105.139 24.2824 104.127 23.9319 104.01 22.0822L108.644 21.7512C112.499 21.4981 115.011 20.6414 115.537 17.2147ZM104.322 18.8696C104.808 16.2606 105.432 15.4429 107.963 15.4429H108.469C109.326 15.4429 109.91 15.5013 110.143 15.7544C110.299 15.9296 110.358 16.2217 110.319 16.7279C110.143 18.1492 109.403 18.4413 107.826 18.5581L104.322 18.8696ZM129.574 11.9372L130.547 5.35628L135.921 5.37575L132.553 28.117H128.25V25.5664C126.108 27.494 123.908 28.487 121.669 28.487C120.111 28.487 118.943 28.0586 118.125 27.163C116.859 25.8001 116.49 23.3663 116.996 19.7448C117.989 12.9497 120.637 11.5868 124.609 11.5868C126.186 11.5868 127.977 11.7036 129.574 11.9372ZM123.479 24.0867C125.115 24.0478 126.419 23.23 128.094 21.8087L129.028 15.3251H126.673C123.674 15.3251 123.032 15.695 122.447 19.8616C122.155 22.0034 122.058 23.3274 122.506 23.8141C122.701 24.0283 123.012 24.1062 123.479 24.0867ZM143.905 9.75667L144.548 5.33691H139.193L138.551 9.75667H143.905ZM141.199 28.0976H135.845L138.2 12.0151H143.574L141.199 28.0976Z"></path>
            </svg>

            <div class="text-center">
              <img src="/src/assets/images/incubadora.png" alt="INCUBADORA Instituto Federal" class="w-full h-12 object-contain grayscale hover:grayscale-0 hover:opacity-100 opacity-60 mb-2" loading="lazy" />
            </div>

            <div class="text-center">
              <img src="/src/assets/images/cftaLogo.png" alt="CFTA Conselho Federal" class="w-full h-8 object-contain grayscale hover:grayscale-0 hover:opacity-100 opacity-60 mb-2" loading="lazy" />
            </div>

            <div class="text-center">
              <img src="/src/assets/images/cresci.png" alt="CRECI-ES" class="w-full h-12 object-contain grayscale hover:grayscale-0 hover:opacity-100 opacity-60 mb-2" loading="lazy" />
            </div>
        </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 flex flex-col justify-center items-center overflow-x-auto space-x-4 scrollbar-hide hidden lg:flex">
            <div class="text-white mb-4">
              Empresas Parceiras
            </div>
            <div class="flex gap-6">
              <svg width="145" viewBox="0 0 145 34" xmlns="http://www.w3.org/2000/svg" class="grayscale hover:grayscale-0 hover:opacity-100 opacity-60 logo-desk logo-sicredi gtag-click-trigger fill-current text-white" data-gtag-action="logo" data-gtag-label="logo">
                <path d="M25.1965 15.2486C24.2035 16.0664 23.4636 16.2027 23.1326 15.8717C22.9185 15.6575 22.8795 15.2292 23.0353 14.684C23.561 12.9511 23.9698 11.1988 24.3008 9.42702C26.2868 8.55086 28.2728 7.73311 30.4729 7.51894C29.441 10.3421 27.5524 13.2821 25.1965 15.2486ZM24.184 21.0702C22.9379 20.8171 22.3538 20.272 22.3928 19.7852C22.4122 19.4737 22.7043 19.1622 23.2105 18.948C24.7681 18.286 26.3063 17.5656 27.7665 16.6894C29.6941 17.624 31.5438 18.8117 33.0235 20.3109C30.3172 21.3234 26.9877 21.6544 24.184 21.0702ZM19.0439 24.1465C18.4403 22.9004 18.4987 22.0438 18.8881 21.7517C19.1607 21.557 19.589 21.5959 20.0758 21.8685C21.5945 22.7252 23.1326 23.504 24.7681 24.1465C24.7681 24.1465 24.7681 24.1465 24.7681 24.166C25.3522 26.5024 25.7027 28.9557 25.5469 31.37C22.8406 29.6566 20.3873 26.9308 19.0439 24.1465ZM13.2223 21.9075C13.9037 20.5445 14.6241 20.0188 15.1109 20.1746C15.4419 20.272 15.6755 20.6419 15.7534 21.2455C16.026 23.1536 16.4349 25.0227 16.9216 26.8724C15.2277 29.1504 13.417 31.3505 11.1389 33.1418C10.8858 29.4619 11.5868 25.2369 13.2223 21.9075ZM11.4699 15.6186C13.0081 15.307 13.8453 15.5602 14.04 16.0469C14.1568 16.3584 14.0011 16.7868 13.5727 17.2541C12.1319 18.7533 10.8079 20.3304 9.54238 21.9659H9.52291C6.42714 22.18 3.19508 22.0632 0.157715 21.3428C3.25349 18.7338 7.43959 16.4168 11.4699 15.6186ZM15.4029 10.5174C16.5517 11.5103 16.8632 12.2892 16.6101 12.7175C16.4349 12.9901 16.026 13.1264 15.4029 13.068C13.3391 12.8343 11.2752 12.737 9.19192 12.737C7.22542 10.4784 5.43416 7.96676 4.28541 5.26039C8.19893 6.13655 12.4045 7.96676 15.4029 10.5174ZM21.5166 10.5952C21.5166 11.9971 21.1272 12.698 20.6599 12.737C20.3484 12.7759 19.9979 12.5228 19.6669 12.0166C18.6155 10.3811 17.4668 8.80398 16.2402 7.26583C16.7074 4.81257 17.4668 2.32038 18.7713 0.15918C20.4068 3.29389 21.5361 7.11006 21.5166 10.5952Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.239 7.24661C16.7063 4.81283 17.4656 2.32064 18.7701 0.159439C15.9859 -0.229966 13.1237 0.101028 10.5147 1.07454C12.1113 2.63216 13.6884 4.20925 15.1097 5.90317C15.2757 6.10406 15.4534 6.31279 15.6288 6.51881C15.8444 6.77204 16.0565 7.02116 16.239 7.24661ZM25.0594 2.36028C24.9426 4.22942 24.8063 6.0791 24.5337 7.9093C24.5013 8.11212 24.4688 8.33183 24.4364 8.55155C24.3909 8.85915 24.3455 9.16676 24.3001 9.42798C26.286 8.55182 28.272 7.73407 30.4721 7.5199C29.0898 5.43658 27.2401 3.66479 25.0594 2.36028ZM32.9049 13.1462C31.6393 14.1392 30.3348 15.1127 28.9524 15.9499C28.7762 16.0556 28.5921 16.1733 28.4089 16.2903L28.4088 16.2904C28.1873 16.4319 27.9673 16.5725 27.7647 16.6898C29.6923 17.6243 31.542 18.812 33.0217 20.3112C33.3722 17.8385 33.3527 15.6189 32.9049 13.1462ZM26.1083 24.6527C27.627 25.2174 29.2041 25.6457 30.7811 26.0351C29.4766 28.1379 27.6854 29.9876 25.5631 31.37C25.7189 28.9557 25.3684 26.5024 24.7843 24.166V24.1465C25.1076 24.292 25.5115 24.4375 25.8845 24.5719L25.8847 24.572L25.8848 24.572C25.9609 24.5994 26.0357 24.6263 26.1083 24.6527ZM19.3922 33.7646C18.6524 31.9928 17.9514 30.2015 17.3868 28.4103C17.3464 28.2789 17.3034 28.1424 17.2597 28.0039L17.2597 28.0036L17.2596 28.0035L17.2596 28.0034L17.2596 28.0034C17.1351 27.6085 17.006 27.1986 16.9195 26.8527C15.2256 29.1307 13.4149 31.3308 11.1563 33.1221C13.8822 33.9204 16.5496 34.2708 19.3922 33.7646ZM8.47152 23.4658C7.14754 25.3154 5.94039 27.3014 4.79164 29.2874C2.53309 27.0872 0.936531 24.3224 0.157721 21.3435C3.19508 22.0639 6.42714 22.1807 9.52292 21.9665H9.54239C9.34379 22.2352 9.12416 22.546 8.90454 22.8567L8.90438 22.857L8.90419 22.8572C8.75789 23.0642 8.6116 23.2712 8.47152 23.4658ZM0 13.3987C2.43378 13.1066 4.88704 12.8535 7.30135 12.7756C7.50564 12.7693 7.72039 12.7608 7.93601 12.7523L7.93616 12.7523C8.37808 12.7348 8.82359 12.7172 9.18996 12.7172C7.204 10.4782 5.4322 7.96649 4.28346 5.26013C2.12226 7.53815 0.642519 10.3808 0 13.3987Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5429 11.2948C42.0951 14.6048 43.3023 16.5713 46.6122 17.8563L50.9735 19.5113C52.3559 19.998 52.6675 20.2317 52.4922 21.5557C52.2196 23.2496 51.5382 23.6974 48.4813 23.6974H41.0826L40.4207 28.1171H48.6955C55.1402 28.1171 57.3209 26.6763 57.9634 21.9061C58.3722 18.9077 57.8271 16.7465 53.8551 15.2862L49.7274 13.7675C48.1309 13.2029 47.8388 12.9693 48.053 11.6453C48.2866 10.1655 48.8708 9.83455 50.0584 9.75667H58.8979L59.5599 5.33691H51.6745C46.3007 5.33691 43.2633 6.29096 42.5429 11.2948ZM67.6595 9.75667L68.3021 5.33691H62.9477L62.2857 9.75667H67.6595ZM64.9533 28.0976H59.5989L61.9548 12.0151H67.3286L64.9533 28.0976ZM78.1552 11.5683C75.1178 11.5683 73.015 12.1718 71.5937 13.4764C70.1724 14.7614 69.3546 16.7084 68.8873 19.8237C68.42 22.9194 68.8095 25.1001 70.0945 26.4825C71.3211 27.826 73.385 28.4685 76.4418 28.4685C77.941 28.4685 80.1411 28.3322 82.1076 27.7091L82.2439 27.6702L82.8086 23.8735L82.4581 23.9319C81.0757 24.1266 79.3429 24.2045 77.2985 24.2045C75.8966 24.2045 75.1762 24.0487 74.7868 23.6204C74.3001 23.0947 74.2027 22.0627 74.4753 20.0768C74.9426 16.3969 76.1497 15.8128 78.8366 15.8128C79.927 15.8128 83.9963 15.8712 83.9963 15.8712L84.522 12.2692C84.5193 12.2718 84.4759 12.2611 84.3928 12.2405C83.8578 12.108 81.6775 11.5683 78.1552 11.5683ZM98.131 12.0151H99.1629L98.9682 12.3656C97.469 14.7994 96.9822 16.8632 96.9822 16.8827L96.9433 17.0579H95.7945C94.3927 17.0579 92.5041 18.0315 91.8226 18.8492L90.5181 28.0976H85.1248L87.4807 12.0151H91.7447V15.1109C94.2369 12.9497 96.1645 12.0151 98.131 12.0151ZM115.537 17.2147C115.79 15.5207 115.517 14.2552 114.699 13.3595C113.609 12.1524 111.506 11.5683 108.294 11.5683C101.791 11.5683 99.3373 13.6126 98.5585 19.6874C98.1691 22.8026 98.6169 25.0028 99.9409 26.4046C101.226 27.787 103.368 28.4685 106.463 28.4685C108.644 28.4685 111.974 28.0791 114.076 27.2418L114.271 27.164L114.213 26.9693C114.213 26.9681 114.211 26.9621 114.208 26.9515C114.204 26.9375 114.198 26.9155 114.189 26.8862C114.093 26.5547 113.724 25.2896 113.59 24.1266L113.551 23.8735L113.298 23.9319C112.655 24.0877 108.683 24.2824 107.048 24.2824C105.139 24.2824 104.127 23.9319 104.01 22.0822L108.644 21.7512C112.499 21.4981 115.011 20.6414 115.537 17.2147ZM104.322 18.8696C104.808 16.2606 105.432 15.4429 107.963 15.4429H108.469C109.326 15.4429 109.91 15.5013 110.143 15.7544C110.299 15.9296 110.358 16.2217 110.319 16.7279C110.143 18.1492 109.403 18.4413 107.826 18.5581L104.322 18.8696ZM129.574 11.9372L130.547 5.35628L135.921 5.37575L132.553 28.117H128.25V25.5664C126.108 27.494 123.908 28.487 121.669 28.487C120.111 28.487 118.943 28.0586 118.125 27.163C116.859 25.8001 116.49 23.3663 116.996 19.7448C117.989 12.9497 120.637 11.5868 124.609 11.5868C126.186 11.5868 127.977 11.7036 129.574 11.9372ZM123.479 24.0867C125.115 24.0478 126.419 23.23 128.094 21.8087L129.028 15.3251H126.673C123.674 15.3251 123.032 15.695 122.447 19.8616C122.155 22.0034 122.058 23.3274 122.506 23.8141C122.701 24.0283 123.012 24.1062 123.479 24.0867ZM143.905 9.75667L144.548 5.33691H139.193L138.551 9.75667H143.905ZM141.199 28.0976H135.845L138.2 12.0151H143.574L141.199 28.0976Z"></path>
              </svg>

              <div class="text-center">
                <img src="/src/assets/images/incubadora.png" alt="INCUBADORA Instituto Federal" class="w-full h-12 object-contain grayscale hover:grayscale-0 hover:opacity-100 opacity-60 mb-2" loading="lazy" />
              </div>

              <div class="text-center">
                <img src="/src/assets/images/cftaLogo.png" alt="CFTA Conselho Federal" class="w-full h-8 object-contain grayscale hover:grayscale-0 hover:opacity-100 opacity-60 mb-2" loading="lazy" />
              </div>

              <div class="text-center">
                <img src="/src/assets/images/cresci.png" alt="CRECI-ES" class="w-full h-12 object-contain grayscale hover:grayscale-0 hover:opacity-100 opacity-60 mb-2" loading="lazy" />
              </div>
            </div>
        </div>
  </section>

  

  <!-- Fixed WhatsApp Button -->
  <div class="fixed bottom-6 right-6 z-50">
    <button 
      @click="openWhatsApp"
      class="group relative bg-accent hover:bg-green-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 w-12 h-12 flex items-center justify-center"
      title="Falar no WhatsApp"
    >
      <svg class="w-6 h-6 text-white" fill="white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
      
      <!-- Tooltip -->
      <div class="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Falar no WhatsApp
        <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from '@/plugins/gsap'
import { motionPresets } from '@/plugins/motion'

// Refs para animações GSAP
const heroTitle = ref<HTMLElement>()
const heroSubtitle = ref<HTMLElement>()
const heroCTA = ref<HTMLElement>()
const visualCard = ref<HTMLElement>()

const openWhatsApp = () => {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '5528999710377'
  const message = encodeURIComponent('Olá! Gostaria de falar com especialista da CONECTA sobre regularização ambiental.')
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
}

const scrollToForm = () => {
  const formSection = document.querySelector('#simulacao')
  if (formSection) {
    formSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
  // Timeline principal para animações de entrada
  const tl = gsap.timeline()
  
  // Animação do título principal
  if (heroTitle.value) {
    tl.fromTo(heroTitle.value, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
  }
  
  // Animação do subtítulo
  if (heroSubtitle.value) {
    tl.fromTo(heroSubtitle.value, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
  }
  
  // Animação dos CTAs
  if (heroCTA.value) {
    tl.fromTo(heroCTA.value, 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    )
  }
  
  // Animação do card visual
  if (visualCard.value) {
    tl.fromTo(visualCard.value, 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.8"
    )
  }

  // Counter animation function
  const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
    const start = 0
    const increment = target / (duration / 16) // 60fps
    
    let current = start
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current).toString()
    }, 16)
  }

  // Intersection Observer for counter animation
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target as HTMLElement
        const target = parseInt(counter.getAttribute('data-target') || '0')
        animateCounter(counter, target)
        counterObserver.unobserve(counter)
      }
    })
  }, observerOptions)

  // Observe all counter elements
  const counters = document.querySelectorAll('.counter')
  counters.forEach(counter => {
    counterObserver.observe(counter)
  })
})
</script>

<style scoped>
/* Custom animations for floating elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(34, 197, 94, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 0 0 30px rgba(34, 197, 94, 0.4);
  }
}

@keyframes glassmorphism {
  0% {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
  }
  50% {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.15);
  }
  100% {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.05);
  }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-glassmorphism {
  animation: glassmorphism 4s ease-in-out infinite;
}

/* Glassmorphism card specific styles */
.glassmorphism-card {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glassmorphism-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.glassmorphism-card:hover::before {
  left: 100%;
}

/* Experience badge special effects */
.experience-badge {
  position: relative;
  overflow: hidden;
}

.experience-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.5s;
}

.experience-badge:hover::before {
  left: 100%;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce,
  .animate-pulse,
  .animate-glow,
  .animate-glassmorphism {
    animation: none;
  }
}
</style> 