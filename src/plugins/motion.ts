import { MotionPlugin } from '@vueuse/motion'

// Custom animation presets
export const motionPresets = {
  // Fade animations
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    transition: { duration: 600, ease: [0.16, 1, 0.3, 1] }
  },
  
  fadeIn: {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    transition: { duration: 400, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Slide animations
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
    transition: { duration: 600, ease: [0.16, 1, 0.3, 1] }
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    enter: { opacity: 1, x: 0 },
    transition: { duration: 600, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    transition: { duration: 500, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Stagger container for lists/grids
  staggerContainer: {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    transition: { duration: 400, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Hero specific animations
  heroTitle: {
    initial: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0 },
    transition: { duration: 800, ease: [0.16, 1, 0.3, 1] }
  },
  
  heroSubtitle: {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    transition: { duration: 600, ease: [0.16, 1, 0.3, 1], delay: 200 }
  },
  
  heroCTA: {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    transition: { duration: 600, ease: [0.16, 1, 0.3, 1], delay: 400 }
  },
  
  // Button hover animations
  buttonHover: {
    hover: { scale: 1.02, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' },
    transition: { duration: 200, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Card animations
  cardHover: {
    hover: { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' },
    transition: { duration: 300, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Number counter animation
  numberCount: {
    initial: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    transition: { duration: 800, ease: [0.16, 1, 0.3, 1] }
  }
}

// Register the plugin with custom presets
export default {
  install: (app: any) => {
    app.use(MotionPlugin, {
      directives: {
        'motion': {
          presets: motionPresets
        }
      }
    })
  }
} 