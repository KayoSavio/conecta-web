export const useSeo = () => {
  const setMetaTags = (data: {
    title?: string
    description?: string
    keywords?: string
    ogImage?: string
    ogUrl?: string
  }) => {
    const { title, description, keywords, ogImage, ogUrl } = data
    
    // Title
    if (title) {
      document.title = title
    }
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    if (description) {
      metaDescription.setAttribute('content', description)
    }
    
    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    if (keywords) {
      metaKeywords.setAttribute('content', keywords)
    }
    
    // Open Graph
    const setOgTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`)
      if (!ogTag) {
        ogTag = document.createElement('meta')
        ogTag.setAttribute('property', property)
        document.head.appendChild(ogTag)
      }
      ogTag.setAttribute('content', content)
    }
    
    if (title) setOgTag('og:title', title)
    if (description) setOgTag('og:description', description)
    if (ogImage) setOgTag('og:image', ogImage)
    if (ogUrl) setOgTag('og:url', ogUrl)
    
    // Twitter Cards
    const setTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`)
      if (!twitterTag) {
        twitterTag = document.createElement('meta')
        twitterTag.setAttribute('name', name)
        document.head.appendChild(twitterTag)
      }
      twitterTag.setAttribute('content', content)
    }
    
    if (title) setTwitterTag('twitter:title', title)
    if (description) setTwitterTag('twitter:description', description)
    if (ogImage) setTwitterTag('twitter:image', ogImage)
  }
  
  const setDefaultSeo = () => {
    setMetaTags({
      title: 'CONECTA - Soluções Empresariais',
      description: 'Soluções inovadoras para conectar seu negócio ao futuro. Especialistas em tecnologia e transformação digital.',
      keywords: 'conecta, soluções empresariais, tecnologia, inovação, transformação digital',
      ogImage: 'https://conecta.com.br/og-image.jpg',
      ogUrl: 'https://conecta.com.br/'
    })
  }
  
  return {
    setMetaTags,
    setDefaultSeo
  }
} 