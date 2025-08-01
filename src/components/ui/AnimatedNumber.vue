<template>
  <span>{{ displayValue }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Props {
  to: number
  duration?: number
  formatter?: (value: number) => string
}

const props = withDefaults(defineProps<Props>(), {
  duration: 2000,
  formatter: (value: number) => value.toString()
})

const displayValue = ref('')
const isAnimating = ref(false)

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
  
  requestAnimationFrame(updateValue)
}

onMounted(() => {
  animate()
})

watch(() => props.to, () => {
  animate()
})
</script> 