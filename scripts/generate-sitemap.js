import fs from 'fs'
import path from 'path'

const generateSitemap = () => {
  const baseUrl = process.env.VITE_SITE_URL || 'https://conecta.com.br'
  const currentDate = new Date().toISOString().split('T')[0]
  
  const urls = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    }
    // TODO: Adicionar mais URLs conforme necessário
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  const outputPath = path.join(process.cwd(), 'dist', 'sitemap.xml')
  
  // Garantir que o diretório existe
  const dir = path.dirname(outputPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  fs.writeFileSync(outputPath, sitemap)
  console.log('Sitemap gerado com sucesso:', outputPath)
}

generateSitemap() 