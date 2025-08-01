import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MotionPlugin from './plugins/motion'

// Import global styles
import './assets/styles/tailwind.css'
import './assets/styles/theme.css'
import './assets/styles/animations.css'

const app = createApp(App)

// Register plugins
app.use(router)
app.use(MotionPlugin)

app.mount('#app') 