import { ref, reactive } from 'vue'
import { submitLead, type ContactFormData, type FormResponse } from '@/services/form'
import { validateName, validateEmail, validatePhone, validateMessage } from '@/utils/validators'

export const useForm = () => {
  const isLoading = ref(false)
  const formData = reactive<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: ''
  })
  
  const errors = reactive({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: ''
  })
  
  const successMessage = ref('')
  const errorMessage = ref('')
  
  const validateForm = (): boolean => {
    let isValid = true
    
    // Validar nome
    const nameValidation = validateName(formData.name)
    errors.name = nameValidation.message
    if (!nameValidation.isValid) isValid = false
    
    // Validar email
    const emailValidation = validateEmail(formData.email)
    errors.email = emailValidation.message
    if (!emailValidation.isValid) isValid = false
    
    // Validar telefone
    const phoneValidation = validatePhone(formData.phone)
    errors.phone = phoneValidation.message
    if (!phoneValidation.isValid) isValid = false
    
    // Validar mensagem
    const messageValidation = validateMessage(formData.message)
    errors.message = messageValidation.message
    if (!messageValidation.isValid) isValid = false
    
    return isValid
  }
  
  const clearMessages = () => {
    successMessage.value = ''
    errorMessage.value = ''
  }
  
  const clearErrors = () => {
    errors.name = ''
    errors.email = ''
    errors.phone = ''
    errors.message = ''
    errors.company = ''
  }
  
  const resetForm = () => {
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.message = ''
    formData.company = ''
    clearErrors()
    clearMessages()
  }
  
  const submitForm = async (): Promise<boolean> => {
    clearMessages()
    clearErrors()
    
    if (!validateForm()) {
      return false
    }
    
    isLoading.value = true
    
    try {
      const response: FormResponse = await submitLead(formData)
      
      if (response.success) {
        successMessage.value = response.message
        resetForm()
        return true
      } else {
        errorMessage.value = response.message
        return false
      }
    } catch (error) {
      errorMessage.value = 'Erro ao enviar formulário. Tente novamente.'
      return false
    } finally {
      isLoading.value = false
    }
  }
  
  return {
    formData,
    errors,
    isLoading,
    successMessage,
    errorMessage,
    submitForm,
    resetForm,
    clearMessages,
    clearErrors
  }
} 