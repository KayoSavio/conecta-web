import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MotionPlugin from './plugins/motion'
import PerformancePlugin from './plugins/performance'

// Import global styles
import './assets/styles/fonts.css'
import './assets/styles/tailwind.css'
import './assets/styles/theme.css'
import './assets/styles/animations.css'

// Performance optimization: Remove loading class when app is ready
const app = createApp(App)

// Register plugins
app.use(router)
app.use(MotionPlugin)
app.use(PerformancePlugin)

// Add loading state management
app.mount('#app')

// Remove loading class after app is mounted
const appElement = document.getElementById('app')
if (appElement) {
  appElement.classList.remove('loading')
  appElement.classList.add('loaded')
}

// Performance monitoring
if (import.meta.env.DEV) {
  console.log('🚀 App loaded successfully')
} 