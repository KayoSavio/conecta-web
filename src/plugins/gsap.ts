import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

// Configurações globais
gsap.defaults({
  ease: "power2.out",
  duration: 0.8
})

// Animações personalizadas inspiradas no design de referência
export const gsapAnimations = {
  // Hero animations
  heroTitle: {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  },
  
  heroSubtitle: {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  },
  
  heroCTA: {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "back.out(1.7)"
  },
  
  // Card animations
  cardStagger: {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  },
  
  // Hover effects
  cardHover: {
    scale: 1.05,
    y: -10,
    duration: 0.3,
    ease: "power2.out"
  },
  
  cardHoverOut: {
    scale: 1,
    y: 0,
    duration: 0.3,
    ease: "power2.out"
  },
  
  // Text animations
  textReveal: {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  },
  
  // Icon animations
  iconFloat: {
    y: -5,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
  },
  
  // Scroll-triggered animations
  fadeInUp: {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  },
  
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  },
  
  slideInLeft: {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  },
  
  slideInRight: {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }
}

// Função para animar elementos na entrada
export const animateOnEnter = (element: string, animation: any) => {
  return gsap.fromTo(element, 
    { ...animation },
    { 
      ...animation,
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  )
}

// Função para animar cards com stagger
export const animateCards = (selector: string) => {
  return gsap.fromTo(selector, 
    { y: 60, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  )
}

// Função para hover effects
export const setupHoverEffects = (selector: string) => {
  const elements = document.querySelectorAll(selector)
  
  elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, gsapAnimations.cardHover)
    })
    
    element.addEventListener('mouseleave', () => {
      gsap.to(element, gsapAnimations.cardHoverOut)
    })
  })
}

// Função para animar texto
export const animateText = (element: string, text: string) => {
  return gsap.to(element, {
    duration: 2,
    text: text,
    ease: "none"
  })
}

// Função para parallax suave
export const setupParallax = (selector: string, speed: number = 0.5) => {
  gsap.to(selector, {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
}

// Função para animar números
export const animateNumbers = (selector: string, endValue: number) => {
  return gsap.to(selector, {
    duration: 2,
    innerHTML: endValue,
    snap: { innerHTML: 1 },
    ease: "power2.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 80%"
    }
  })
}

// Função para animar gradientes
export const animateGradient = (element: string) => {
  return gsap.to(element, {
    backgroundPosition: "200% 200%",
    duration: 3,
    ease: "none",
    repeat: -1,
    yoyo: true
  })
}

export default gsap 