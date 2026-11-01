import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const baseDir = 'C:/Users/CK IMOVEIS/Desktop/Cristyan/Site Autopropelido';
const mockupsDir = path.join(baseDir, 'Mockups');
const entregavelDir = path.join(baseDir, 'Entregavel Autopropelido');
const publicImagesDir = path.join(baseDir, 'public/images');

async function processImages() {
  console.log('--- Processando Hero Mockup ---');
  await sharp(path.join(mockupsDir, 'ebook_mockup_01_hero_scooters.png'))
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(publicImagesDir, 'autoprop-hero.webp'));
  console.log('✓ autoprop-hero.webp criado');

  console.log('--- Processando Capa / Bundle Mockup ---');
  await sharp(path.join(mockupsDir, 'ebook_mockup_03_bundle_scooters.png'))
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(publicImagesDir, 'autoprop-capa.webp'));
  console.log('✓ autoprop-capa.webp criado');

  console.log('--- Processando 6 Bônus Mockups ---');
  const bonusMapping = [
    { src: 'guia_configuracoes_painel.png', dest: 'autoprop-bonus-1.webp' },
    { src: 'resgate_rua_mockup.png', dest: 'autoprop-bonus-2.webp' },
    { src: 'kit_emergencia_mockup.png', dest: 'autoprop-bonus-3.webp' },
    { src: 'compra_usado_mockup.png', dest: 'autoprop-bonus-4.webp' },
    { src: 'oficina_garagem_mockup.png', dest: 'autoprop-bonus-5.webp' },
    { src: 'mapa_pecas_dificeis_mockup.png', dest: 'autoprop-bonus-6.webp' },
  ];

  for (const b of bonusMapping) {
    await sharp(path.join(mockupsDir, b.src))
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(path.join(publicImagesDir, b.dest));
    console.log(`✓ ${b.dest} criado a partir de ${b.src}`);
  }

  console.log('--- Processando Fotos da Seção Study (Fotos Reais) ---');
  const studyMapping = [
    { src: 'Gemini_Generated_Image_96rxac96rxac96rx.jpg', dest: 'autoprop-study-1.webp' },
    { src: 'Gemini_Generated_Image_igsjj9igsjj9igsj.jpg', dest: 'autoprop-study-2.webp' },
    { src: 'Gemini_Generated_Image_ntx9svntx9svntx9.jpg', dest: 'autoprop-study-3.webp' },
    { src: 'Gemini_Generated_Image_ougzhqougzhqougz.jpg', dest: 'autoprop-study-4.webp' },
  ];

  for (const s of studyMapping) {
    await sharp(path.join(mockupsDir, s.src))
      .resize({ width: 800, height: 600, fit: 'cover' })
      .webp({ quality: 88 })
      .toFile(path.join(publicImagesDir, s.dest));
    console.log(`✓ ${s.dest} criado`);
  }

  console.log('--- Processando Slides / Páginas Internas Reais ---');
  // Selecionando 5 páginas bem visuais e impactantes
  const slideMapping = [
    { src: 'abertura-01.png', dest: 'autoprop-slide-1.webp' },
    { src: 'pagina-003.png', dest: 'autoprop-slide-2.webp' },
    { src: 'pagina-008.png', dest: 'autoprop-slide-3.webp' },
    { src: 'pagina-015.png', dest: 'autoprop-slide-4.webp' },
    { src: 'pagina-022.png', dest: 'autoprop-slide-5.webp' },
    { src: 'pagina-030.png', dest: 'autoprop-slide-6.webp' },
  ];

  for (const sl of slideMapping) {
    const srcPath = path.join(entregavelDir, sl.src);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize({ width: 600, withoutEnlargement: true })
        .webp({ quality: 88 })
        .toFile(path.join(publicImagesDir, sl.dest));
      console.log(`✓ ${sl.dest} criado a partir de ${sl.src}`);
    }
  }

  console.log('Processamento concluído com sucesso!');
}

processImages().catch(err => {
  console.error('Erro no processamento:', err);
  process.exit(1);
});
