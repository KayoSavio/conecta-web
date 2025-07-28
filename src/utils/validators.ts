export interface ValidationResult {
  isValid: boolean
  message: string
}

export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  if (!email) {
    return {
      isValid: false,
      message: 'E-mail é obrigatório'
    }
  }
  
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: 'E-mail inválido'
    }
  }
  
  return {
    isValid: true,
    message: ''
  }
}

export const validateName = (name: string): ValidationResult => {
  if (!name) {
    return {
      isValid: false,
      message: 'Nome é obrigatório'
    }
  }
  
  if (name.length < 2) {
    return {
      isValid: false,
      message: 'Nome deve ter pelo menos 2 caracteres'
    }
  }
  
  return {
    isValid: true,
    message: ''
  }
}

export const validatePhone = (phone: string): ValidationResult => {
  const phoneRegex = /^[\d\s\(\)\-\+]+$/
  
  if (!phone) {
    return {
      isValid: false,
      message: 'Telefone é obrigatório'
    }
  }
  
  if (!phoneRegex.test(phone)) {
    return {
      isValid: false,
      message: 'Telefone inválido'
    }
  }
  
  if (phone.replace(/\D/g, '').length < 10) {
    return {
      isValid: false,
      message: 'Telefone deve ter pelo menos 10 dígitos'
    }
  }
  
  return {
    isValid: true,
    message: ''
  }
}

export const validateMessage = (message: string): ValidationResult => {
  if (!message) {
    return {
      isValid: false,
      message: 'Mensagem é obrigatória'
    }
  }
  
  if (message.length < 10) {
    return {
      isValid: false,
      message: 'Mensagem deve ter pelo menos 10 caracteres'
    }
  }
  
  return {
    isValid: true,
    message: ''
  }
}

export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value || value.trim() === '') {
    return {
      isValid: false,
      message: `${fieldName} é obrigatório`
    }
  }
  
  return {
    isValid: true,
    message: ''
  }
} 