import type { App } from 'vue'

// Performance optimization plugin
export default {
  install(app: App) {
    // Lazy load non-critical components
    app.config.globalProperties.$lazyLoad = (component: any) => {
      return () => import(component)
    }

    // Intersection Observer for lazy loading
    if (typeof window !== 'undefined') {
      const observerOptions = {
        rootMargin: '50px 0px',
        threshold: 0.1
      }

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              imageObserver.unobserve(img)
            }
          }
        })
      }, observerOptions)

      // Observe all lazy images
      document.addEventListener('DOMContentLoaded', () => {
        const lazyImages = document.querySelectorAll('img[data-src]')
        lazyImages.forEach(img => imageObserver.observe(img))
      })
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/src/assets/images/optimized/conectaLogo.webp',
        '/src/assets/images/optimized/favicon.png'
      ]

      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = resource.endsWith('.webp') ? 'image' : 'image'
        link.href = resource
        document.head.appendChild(link)
      })
    }

    // Execute preload on mount
    if (typeof window !== 'undefined') {
      window.addEventListener('load', preloadCriticalResources)
    }
  }
} 