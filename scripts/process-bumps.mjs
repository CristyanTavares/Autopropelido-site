import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const baseDir = 'C:/Users/CK IMOVEIS/Desktop/Cristyan/Site Autopropelido';
const publicImagesDir = path.join(baseDir, 'public/images');

async function processNewAssets() {
  console.log('--- Processando Hero Banner (image hero.png) ---');
  const heroPath = path.join(baseDir, 'image hero.png');
  await sharp(heroPath)
    .resize({ width: 2200, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(publicImagesDir, 'image-hero.webp'));
  console.log('✓ image-hero.webp gerado com sucesso!');

  console.log('--- Processando Order Bump 1 Mockup ---');
  const bump1Path = path.join(baseDir, 'Entregavel Autopropelido/Order bump 1/passaporte_manutencao_digital_mockup.png');
  await sharp(bump1Path)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(publicImagesDir, 'order-bump-1.webp'));
  console.log('✓ order-bump-1.webp gerado com sucesso!');

  console.log('--- Processando Order Bump 2 Mockup ---');
  const bump2Path = path.join(baseDir, 'Entregavel Autopropelido/Order bump 2/kit_oficina_sem_surpresas_mockup.png');
  await sharp(bump2Path)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(publicImagesDir, 'order-bump-2.webp'));
  console.log('✓ order-bump-2.webp gerado com sucesso!');
}

processNewAssets().catch(err => {
  console.error('Erro:', err);
  process.exit(1);
});
