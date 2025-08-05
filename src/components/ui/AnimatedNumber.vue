<template>
  <span ref="numberRef">{{ displayValue }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'

interface Props {
  to: number
  duration?: number
  formatter?: (value: number) => string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000,
  formatter: (value: number) => value.toString(),
  delay: 0
})

const displayValue = ref('')
const isAnimating = ref(false)
const numberRef = ref<HTMLElement>()
const observer = ref<IntersectionObserver>()

const animate = () => {
  if (isAnimating.value) return
  
  isAnimating.value = true
  const startTime = Date.now()
  const startValue = 0
  
  const updateValue = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const currentValue = Math.floor(startValue + (props.to - startValue) * easeOutQuart)
    
    displayValue.value = props.formatter(currentValue)
    
    if (progress < 1) {
      requestAnimationFrame(updateValue)
    } else {
      isAnimating.value = false
    }
  }
  
  // Delay the animation start
  setTimeout(() => {
    requestAnimationFrame(updateValue)
  }, props.delay)
}

const setupIntersectionObserver = () => {
  if (!numberRef.value) return
  
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating.value) {
          animate()
        }
      })
    },
    {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    }
  )
  
  observer.value.observe(numberRef.value)
}

onMounted(() => {
  setupIntersectionObserver()
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})

watch(() => props.to, () => {
  if (isAnimating.value) return
  animate()
})
</script> 