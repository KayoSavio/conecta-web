import { ref, onMounted, onUnmounted } from 'vue'

interface UseInViewOptions {
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const {
    rootMargin = '0px',
    threshold = 0.1,
    once = true
  } = options

  const isInView = ref(false)
  const element = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  const observe = (el: HTMLElement) => {
    if (!el) return

    element.value = el

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInView.value = true
            
            // Add visible class for CSS animations
            entry.target.classList.add('visible')
            
            // Unobserve if once is true
            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            isInView.value = false
            entry.target.classList.remove('visible')
          }
        })
      },
      {
        rootMargin,
        threshold
      }
    )

    observer.observe(el)
  }

  const unobserve = () => {
    if (observer && element.value) {
      observer.unobserve(element.value)
      observer.disconnect()
      observer = null
    }
  }

  onUnmounted(() => {
    unobserve()
  })

  return {
    isInView,
    element,
    observe,
    unobserve
  }
}

// Utility function to observe multiple elements
export function useInViewList(options: UseInViewOptions = {}) {
  const {
    rootMargin = '0px',
    threshold = 0.1,
    once = true
  } = options

  const observedElements = ref<Set<HTMLElement>>(new Set())
  let observer: IntersectionObserver | null = null

  const observeElement = (el: HTMLElement) => {
    if (!el || observedElements.value.has(el)) return

    observedElements.value.add(el)

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add visible class for CSS animations
              entry.target.classList.add('visible')
              
              // Unobserve if once is true
              if (once && observer) {
                observer.unobserve(entry.target)
                observedElements.value.delete(entry.target as HTMLElement)
              }
            } else if (!once) {
              entry.target.classList.remove('visible')
            }
          })
        },
        {
          rootMargin,
          threshold
        }
      )
    }

    observer.observe(el)
  }

  const unobserveAll = () => {
    if (observer) {
      observedElements.value.forEach((el) => {
        observer!.unobserve(el)
      })
      observer.disconnect()
      observer = null
      observedElements.value.clear()
    }
  }

  onUnmounted(() => {
    unobserveAll()
  })

  return {
    observeElement,
    unobserveAll
  }
} 