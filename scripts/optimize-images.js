const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const inputDir = 'src/assets/images'
const outputDir = 'src/assets/images/optimized'

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Get all image files
const imageFiles = fs.readdirSync(inputDir).filter(file => 
  /\.(jpg|jpeg|png|webp)$/i.test(file)
)

async function optimizeImage(filename) {
  const inputPath = path.join(inputDir, filename)
  const outputPath = path.join(outputDir, filename.replace(/\.(jpg|jpeg|png)$/i, '.webp'))
  
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
    
    console.log(`✅ Optimized: ${filename}`)
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error)
  }
}

// Process all images
async function optimizeAllImages() {
  console.log('🔄 Starting image optimization...')
  
  for (const file of imageFiles) {
    await optimizeImage(file)
  }
  
  console.log('✅ Image optimization complete!')
}

optimizeAllImages() 