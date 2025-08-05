import type { App } from 'vue'

export default {
  install(app: App) {
    // Lazy load images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Optimize animations
    const optimizeAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      animatedElements.forEach(el => {
        el.setAttribute('style', 'will-change: transform;')
      })
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/src/assets/images/conectaLogo.png',
        '/src/assets/images/conectarLogoWhite.png'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Initialize performance optimizations
    if (typeof window !== 'undefined') {
      // Run after DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          lazyLoadImages()
          optimizeAnimations()
          preloadCriticalResources()
        })
      } else {
        lazyLoadImages()
        optimizeAnimations()
        preloadCriticalResources()
      }
    }
  }
} 