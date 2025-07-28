export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  company?: string
}

export interface FormResponse {
  success: boolean
  message: string
}

export const submitLead = async (data: ContactFormData): Promise<FormResponse> => {
  try {
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    
    if (!endpoint) {
      throw new Error('Endpoint do formulário não configurado')
    }
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        source: 'conecta-landing',
        timestamp: new Date().toISOString(),
      }),
    })
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }
    
    const result = await response.json()
    
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    }
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.'
    }
  }
}

// Função alternativa para Formspree
export const submitToFormspree = async (data: ContactFormData): Promise<FormResponse> => {
  try {
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID
    
    if (!formspreeId) {
      throw new Error('ID do Formspree não configurado')
    }
    
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        company: data.company,
        _subject: 'Novo contato da Landing Page CONECTA',
      }),
    })
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }
    
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    }
  } catch (error) {
    console.error('Erro ao enviar para Formspree:', error)
    
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.'
    }
  }
} 