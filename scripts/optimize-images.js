import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/images/optimized');

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Lista de imagens para otimizar
const imagesToOptimize = [
  'agricultor.jpg',
  'fazendeiro.png',
  'fazendeiro2.png',
  'image1.jpg',
  'conectaLogo.png',
  'conectarLogoWhite.png',
  'iconWhite.png'
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const image = sharp(inputPath);
    
    // Aplicar otimizações
    if (options.resize) {
      image.resize(options.resize.width, options.resize.height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    if (options.quality) {
      image.jpeg({ quality: options.quality });
    }
    
    if (options.webp) {
      await image.webp({ quality: 80 }).toFile(outputPath.replace(/\.[^.]+$/, '.webp'));
    }
    
    await image.toFile(outputPath);
    console.log(`✅ Otimizada: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Erro ao otimizar ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Iniciando otimização de imagens...\n');
  
  for (const imageName of imagesToOptimize) {
    const inputPath = path.join(imagesDir, imageName);
    const outputPath = path.join(outputDir, imageName);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Arquivo não encontrado: ${imageName}`);
      continue;
    }
    
    const ext = path.extname(imageName).toLowerCase();
    let options = {};
    
    // Configurações específicas por tipo de imagem
    if (ext === '.jpg' || ext === '.jpeg') {
      options = {
        quality: 80,
        webp: true,
        resize: { width: 1200, height: 800 }
      };
    } else if (ext === '.png') {
      options = {
        webp: true,
        resize: { width: 800, height: 600 }
      };
    }
    
    await optimizeImage(inputPath, outputPath, options);
  }
  
  console.log('\n✨ Otimização concluída!');
  console.log(`📁 Imagens otimizadas salvas em: ${outputDir}`);
}

optimizeAllImages().catch(console.error); 