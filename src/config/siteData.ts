// ============================================================================
// 🎯 ARQUIVO CENTRAL DE CONFIGURAÇÃO — MANUAL AUTOPROPELIDO
// ============================================================================
// Conectado aos ativos reais de alta resolução da pasta public/images/
// ============================================================================

export const siteConfig = {
  // ─── 1. BARRA SUPERIOR DE ESCASSEZ ──────────────────────────────────────────
  topBanner: {
    text: '⚠️ AVISO: A OFERTA DE LANÇAMENTO COM 6 BÔNUS EXCLUSIVOS TERMINA EM BREVE!',
    bgClass: 'bg-[#0f172a] text-white',
  },

  // ─── 2. HERO PRINCIPAL COM MOCKUP ──────────────────────────────────────────
  hero: {
    categoryBadge: 'O GUIA DEFINITIVO (+120 PÁGINAS)',
    headline: {
      number: '+150',
      prefix: 'guias visuais para nunca mais ficar na mão ou pagando fortunas para consertar seu',
      highlightWord: 'autopropelido',
    },
    mockupImage: '/images/image-hero.webp',
    mockupAlt: 'Guias Visuais para Manutenção e Otimização de Autopropelidos',
    subheadline:
      'Aprenda a diagnosticar panes elétricas, trocar fios e conectores queimados, importar peças por preço de fábrica no AliExpress e destravar o potencial do seu veículo em casa.',
    checklist: [
      'Diagnóstico e reparo de 80% das falhas elétricas em menos de 15 minutos',
      'Guia visual de fusíveis, relés, baterias e chicotes de todos os veículos',
      'Segredo da importação: peças originais com até 70% de desconto no AliExpress',
      'Passo a passo para acessar os Parâmetros-P e destravar limitadores de fábrica',
      'Kit de sobrevivência na mochila: ferramentas de bolso que salvam sua correria',
      'Como aumentar a vida útil da bateria e evitar estufamento de células',
      'Leitura de códigos de erro no display: sensor Hall, freio regen e acelerador',
      'Acesso imediato no formato e-book PDF interativo',
    ],
    ctaButton: 'QUERO ECONOMIZAR E APRENDER AGORA',
    ctaLink: '#oferta',
    deliverySubtext: '⚡ Acesso imediato no formato e-book PDF interativo',
    trustSeal: '🛡️ Compra 100% Segura • Garantia de 7 Dias',
  },

  // ─── 3. SEÇÃO DE CAPA + CARROSSEL DE SLIDES ────────────────────────────────
  claritySection: {
    title: 'Veja como manter e destravar seu autopropelido fica muito mais fácil quando tudo está organizado visualmente',
    tagline: 'Menos oficina. Mais autonomia. Mais km rodados com segurança.',
    coverImage: '/images/autoprop-capa.webp',
    coverAlt: 'Visualização Completa do Pacote Manual Autopropelido + Bônus',
    slides: [
      {
        id: '1',
        title: 'Capa & Fundamentos Elétricos',
        subtitle: 'Visão geral e procedimentos seguros',
        tag: 'PÁGINA VISUAL 01',
        tagColor: 'text-amber-300',
        image: '/images/autoprop-slide-1.webp',
      },
      {
        id: '2',
        title: 'Diagnóstico Rápido de Panes',
        subtitle: 'Identificação visual passo a passo',
        tag: 'PASSO A PASSO',
        tagColor: 'text-sky-300',
        image: '/images/autoprop-slide-2.webp',
      },
      {
        id: '3',
        title: 'Checklist de Manutenção & Baterias',
        subtitle: 'Cuidados com células e recarga',
        tag: 'CHECKLIST PRÁTICO',
        tagColor: 'text-emerald-300',
        image: '/images/autoprop-slide-3.webp',
      },
      {
        id: '4',
        title: 'Mapeamento de Fios & Chicotes',
        subtitle: 'Conectores, controladoras e relés',
        tag: 'ESQUEMA VISUAL',
        tagColor: 'text-cyan-300',
        image: '/images/autoprop-slide-4.webp',
      },
      {
        id: '5',
        title: 'Configurações de Painel & P-Settings',
        subtitle: 'Menu secreto e destravamentos',
        tag: 'PAINEL DIGITAL',
        tagColor: 'text-amber-300',
        image: '/images/autoprop-slide-5.webp',
      },
      {
        id: '6',
        title: 'Solução de Códigos de Erro',
        subtitle: 'Sensor Hall, acelerador e freios',
        tag: 'DIAGNÓSTICO RÁPIDO',
        tagColor: 'text-rose-300',
        image: '/images/autoprop-slide-6.webp',
      },
    ],
    cards: [
      {
        tag: 'MATERIAL 100% VISUAL',
        tagHighlight: '100% VISUAL',
        tagColor: 'text-[#0284c7]',
        title: 'Diagramas e mapas elétricos detalhados',
        description: 'Nada de manuais técnicos incompreensíveis. Tudo em infográficos, esquemas coloridos e fotos reais para você encontrar o problema rápido.',
      },
      {
        tag: 'LINGUAGEM SIMPLES',
        tagHighlight: 'SIMPLES',
        tagColor: 'text-emerald-600',
        title: 'Diagnóstico explicado de forma direta',
        description: 'Fio partido, fusível queimado, sensor Hall, conector oxidado: aprenda a identificar e resolver cada um com ferramentas de R$ 30 do AliExpress.',
      },
      {
        tag: 'PASSO A PASSO',
        tagHighlight: 'PASSO',
        tagColor: 'text-[#0284c7]',
        title: 'Separado por tipo de veículo e problema',
        description: 'Scooter elétrica, patinete, e-bike, skate ou monociclo — cada seção trata do seu veículo específico, com instruções diretas ao ponto.',
      },
      {
        tag: 'CONSULTA RÁPIDA',
        tagHighlight: 'RÁPIDA',
        tagColor: 'text-amber-600',
        title: 'Para consultar no celular na hora da pane',
        description: 'PDF interativo com índice clicável. Abra no celular, vá direto à seção do problema e resolva — mesmo na rua, sem internet.',
      },
    ],
    ctaText: 'QUERO O MANUAL AGORA',
  },

  // ─── 4. CARROSSEL DE FOTOS DE USO/MANUTENÇÃO ────────────────────────────────
  studySection: {
    title: 'Quanto tempo você ainda vai perder parado na rua ou gastando fortuna em oficinas?',
    urgencyText: 'Aproveite a oferta de lançamento por tempo limitado',
    ctaText: 'Quero consertar o meu autopropelido',
    studyPhotos: [
      {
        url: '/images/autoprop-study-1.webp',
        alt: 'Diagnóstico prático de fiação e chicote em autopropelido',
        caption: 'Diagnóstico prático com multímetro',
      },
      {
        url: '/images/autoprop-study-2.webp',
        alt: 'Testes de bateria e painel elétrico de scooter',
        caption: 'Testes de baterias e display digital',
      },
      {
        url: '/images/autoprop-study-3.webp',
        alt: 'Oficina de garagem e ferramentas eletrônicas',
        caption: 'Reparos rápidos em casa sem técnico',
      },
      {
        url: '/images/autoprop-study-4.webp',
        alt: 'Ajuste fino de scooter elétrica e patinete',
        caption: 'Economia de até 70% nas peças',
      },
    ],
  },

  // ─── 5. WIDGET INTERATIVO / SIMULADOR DE VEÍCULO ───────────────────────────
  interactiveWidget: {
    badge: 'SIMULADOR RÁPIDO INTERATIVO',
    title: 'Qual é o seu tipo de autopropelido?',
    subtitle: 'Clique no seu veículo abaixo para ver como o Manual Autopropelido resolve o seu problema específico:',
    profiles: [
      {
        id: 'scooter',
        label: '🛵 Scooter Elétrica (850W+)',
        category: 'Scooter de Alta Potência',
        codeSuggestion: 'Controladora 72V + Bateria de Lítio 20Ah',
        details: 'Scooters de alta cilindrada elétrica têm sistemas complexos de 60V–72V com controladoras BLDC. Os problemas mais comuns são fios da bobina do motor queimados por superaquecimento e conectores de bateria oxidados que causam "morte súbita".',
        recommendation: 'O Manual tem o diagrama completo de fiação e o passo a passo para trocar conectores Anderson sem soldar.',
      },
      {
        id: 'patinete',
        label: '⚡ Patinete de Alta Performance',
        category: 'Patinete Elétrico',
        codeSuggestion: 'Motor hub 36V–48V + Controladora FOC',
        details: 'Patinetes sofrem muito com fusíveis queimados por sobrecarga e conectores XT60 que soltam com vibração. O erro mais comum é tentar rebocá-lo e queimar o motor hub por corrente reversa.',
        recommendation: 'O Bônus "Guia de Resgate na Rua" explica exatamente como tracionar sem queimar nada.',
      },
      {
        id: 'ebike',
        label: '🚲 Bike Elétrica (E-bike)',
        category: 'E-bike com Motor Hub ou Mid-Drive',
        codeSuggestion: 'Sistema Bafang / TSDZ2 + BMS integrado',
        details: 'E-bikes têm sistemas de assistência ao pedal com sensores de torque ou cadência que falham com umidade. A bateria removível tem BMS interno que pode ser resetado sem trocar o pack inteiro.',
        recommendation: 'O Manual ensina como resetar o BMS e identificar a célula defeituosa antes de desembolsar R$ 800 numa bateria nova.',
      },
      {
        id: 'skate',
        label: '🛹 Skate Elétrico & Hoverboard',
        category: 'Skate / Hoverboard',
        codeSuggestion: 'Dual motor hub + ESC Bluetooth',
        details: 'Skates elétricos e hoverboards têm ESC (controladora eletrônica de velocidade) que trava com erros de giroscópio e falhas no acelerador por contaminação de poeira no hall sensor.',
        recommendation: 'O capítulo de Leitura de Códigos de Erro cobre todos os erros comuns de ESC e explica como fazer o reset de fábrica.',
      },
      {
        id: 'monociclo',
        label: '🔵 Monociclo Elétrico (Unicycle)',
        category: 'EUC — Electric Unicycle',
        codeSuggestion: 'Motor de 1500W–3000W + bateria série',
        details: 'Monociclos têm sistemas elétricos em série de alta tensão (84V–100V). Uma célula de bateria com tensão baixa causa quedas repentinas. O ajuste de PWM e ganho do giroscópio é feito via Bluetooth pelo app.',
        recommendation: 'O Manual cobre o processo de balanceamento de células e o acesso aos parâmetros de ganho do giroscópio via app.',
      },
    ],
  },

  // ─── 6. BLOCO ESCURO — DOR vs. SOLUÇÃO ─────────────────────────────────────
  darkBanner: {
    title: 'Chega de depender de mecânicos e passar raiva no trânsito com seu',
    highlightWord: 'autopropelido parado',
    points: [
      'Pare de ficar a pé por causa de um fio partido, fusível ou conector solto',
      'Descubra como diagnosticar 80% das falhas em menos de 15 minutos',
      'Saiba onde comprar peças originais com até 70% de desconto no AliExpress',
      'Desbloqueie os limitadores de velocidade e torque que vieram travados de fábrica',
      'Nunca mais pague R$ 200 só para um técnico "diagnosticar" uma falha simples',
    ],
    buttonText: 'QUERO RESOLVER ISSO AGORA',
  },

  // ─── 7. AUDIÊNCIA ALVO / BENEFÍCIOS ────────────────────────────────────────
  targetAudience: {
    title: 'Este material é ideal para você que quer',
    cards: [
      {
        icon: 'Zap',
        title: 'Diagnóstico de Fios e Chicotes',
        desc: 'Identificar e substituir fios desgastados, derretidos ou oxidados sem queimar a controladora.',
      },
      {
        icon: 'ShoppingBag',
        title: 'Importação Direct-from-Factory',
        desc: 'Filtros exatos e códigos no AliExpress/Shopee para comprar alarmes, painéis e baterias com até 70% de desconto.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Proteção Contra Pneus Furados',
        desc: 'Aplicar corretamente o veda-pneu líquido e selantes anticorte para rodar sem medo de pregos e cacos de vidro.',
      },
      {
        icon: 'Wrench',
        title: 'Kit de Sobrevivência na Mochila',
        desc: 'As ferramentas baratas de bolso e itens químicos que salvam você de ficar a pé no meio do caminho.',
      },
      {
        icon: 'BatteryCharging',
        title: 'Vida Útil da Bateria Aumentada',
        desc: 'A ordem correta de recarga, balanceamento de células e cuidados para evitar estufamento de packs de lítio.',
      },
      {
        icon: 'Cpu',
        title: 'Leitura de Códigos de Erro',
        desc: 'Significado de cada erro no display e como resolver falhas de sensor Hall, freio regenerativo e acelerador.',
      },
    ],
  },

  // ─── 8. BÔNUS EXCLUSIVOS (6 BÔNUS REAIS) ──────────────────────────────────
  bonusSection: {
    headline: 'E NÃO PARA POR AÍ... VOCÊ AINDA RECEBE 6 BÔNUS EXCLUSIVOS PARA DOMINAR SEU AUTOPROPELIDO!',
    bonuses: [
      {
        id: '1',
        tag: 'BÔNUS #1 • EXCLUSIVO',
        tagColor: 'text-amber-400',
        title: 'Guia de Configurações do Painel (P-Settings)',
        image: '/images/autoprop-bonus-1.webp',
        description: 'O passo a passo completo para acessar os parâmetros secretos (Parâmetros-P) do painel e destravar limitadores de velocidade e torque com segurança.',
        originalPrice: 'R$ 97',
        bullets: [
          'Menu oculto P-Settings de scooters, patinetes e e-bikes',
          'Quais parâmetros mudar e quais NUNCA tocar',
          'Como fazer backup das configurações antes de alterar',
          'Aumento real de velocidade e torque sem dano ao motor',
        ],
      },
      {
        id: '2',
        tag: 'BÔNUS #2 • RESGATE',
        tagColor: 'text-sky-400',
        title: 'Guia de Resgate na Rua',
        image: '/images/autoprop-bonus-2.webp',
        description: 'O que fazer se a bateria zerar longe de casa: como tracionar com segurança sem queimar o motor hub por corrente reversa.',
        originalPrice: 'R$ 47',
        bullets: [
          'Técnica correta de empurrar sem girar o motor hub',
          'Como carregar emergencialmente com power bank de alta capacidade',
          'Kit de cabos de jumper específico para autopropelidos',
          'Protocolo de emergência para não danificar o BMS',
        ],
      },
      {
        id: '3',
        tag: 'BÔNUS #3 • EMERGÊNCIA',
        tagColor: 'text-emerald-400',
        title: 'Kit de Emergência & Primeiros Socorros',
        image: '/images/autoprop-bonus-3.webp',
        description: 'Técnicas de emergência com fita isolante líquida e jumpers para religar sistemas apagados no meio da rua, sem ferramentas especiais.',
        originalPrice: 'R$ 37',
        bullets: [
          'Remendo rápido em fio partido com fita autossoldante',
          'Como usar fita isolante líquida para vedação de emergência',
          'Bypass temporário de fusível queimado para chegar em casa',
          'Checklist de 5 minutos antes de sair de casa',
        ],
      },
      {
        id: '4',
        tag: 'BÔNUS #4 • AVALIAÇÃO',
        tagColor: 'text-amber-400',
        title: 'O Que Saber Antes de Comprar um Usado',
        image: '/images/autoprop-bonus-4.webp',
        description: 'Nunca mais leve gato por lebre: saiba exatamente o que verificar antes de comprar um autopropelido usado para não herdar um problema caro.',
        originalPrice: 'R$ 37',
        bullets: [
          '47 pontos de verificação divididos em sistema elétrico, mecânico e estrutural',
          'Como testar a bateria com multímetro em 3 minutos',
          'Sinais de bateria viciada e controladora queimada',
          'Tabela de negociação por defeito encontrado',
        ],
      },
      {
        id: '5',
        tag: 'BÔNUS #5 • BANCADA',
        tagColor: 'text-cyan-400',
        title: 'Oficina de Garagem',
        image: '/images/autoprop-bonus-5.webp',
        description: 'Como montar sua bancada de manutenção em casa com ferramentas baratas de bolso, sem gastar fortunas em equipamentos industriais.',
        originalPrice: 'R$ 47',
        bullets: [
          'Ferramentas essenciais de baixo custo para sua bancada',
          'Multímetro, ferro de solda portátil e conectores rápidos',
          'Como criar sua estação de teste e recarga segura',
          'Organização de parafusos e componentes elétricos',
        ],
      },
      {
        id: '6',
        tag: 'BÔNUS #6 • IMPORTAÇÃO',
        tagColor: 'text-sky-400',
        title: 'O Mapa das Peças Difíceis',
        image: '/images/autoprop-bonus-6.webp',
        description: 'Onde encontrar peças raras, controladoras e baterias no Brasil e no exterior por preço de atacado, evitando peças falsificadas.',
        originalPrice: 'R$ 47',
        bullets: [
          'Filtros exatos e termos de busca no AliExpress e Shopee',
          'Lista de fornecedores confiáveis testados e aprovados',
          'Como identificar baterias com células autênticas',
          'Economia de até 70% comparado a lojas locais',
        ],
      },
    ],
  },

  // ─── 9. CAIXA DE OFERTA / PRICING BOX + ORDER BUMPS ───────────────────────
  pricingOffer: {
    anchorId: 'oferta',
    urgencyBadge: '⚡ OFERTA DE LANÇAMENTO DISPONÍVEL POR TEMPO LIMITADO',
    planName: 'Pacote Único: Manual Completo + 6 Bônus',
    description: 'Manual Autopropelido completo (+120 páginas) + todos os 6 bônus exclusivos com acesso vitalício.',
    oldPrice: 'De R$ 97,90',
    priceInteger: '27',
    priceDecimals: ',90',
    basePriceNum: 27.90,
    billingType: 'pagamento único · acesso vitalício',
    socialProofCount: '+1.480 donos de autopropelidos já escolheram esta oferta',
    deliverables: [
      'Manual Autopropelido completo (+120 páginas)',
      'Diagrama visual de fios, fusíveis, relés e chicotes',
      'Guia de importação AliExpress/Shopee com filtros e códigos',
      'Passo a passo de destravamento P-Settings',
      'Leitura de códigos de erro do display',
      'Checklist de manutenção preventiva',
      'PDF interativo com índice clicável para o celular',
      '🎁 BÔNUS #1 — Guia de Configurações do Painel (R$ 97)',
      '🎁 BÔNUS #2 — Guia de Resgate na Rua (R$ 47)',
      '🎁 BÔNUS #3 — Kit de Emergência & Primeiros Socorros (R$ 37)',
      '🎁 BÔNUS #4 — O Que Saber Antes de Comprar um Usado (R$ 37)',
      '🎁 BÔNUS #5 — Oficina de Garagem (R$ 47)',
      '🎁 BÔNUS #6 — O Mapa das Peças Difíceis (R$ 47)',
    ],
    ctaText: 'GARANTIR MEU ACESSO AGORA',
    checkoutUrl: 'https://pay.hotmart.com/SEUPRODUTO',
    securityDetails: '🔒 Pagamento Seguro • Acesso Imediato • Garantia de 7 Dias',
    orderBumps: [
      {
        id: 'passaporte',
        tag: 'ORDER BUMP #1 • RECOMENDADO',
        title: 'Passaporte de Manutenção Digital',
        subtitle: 'Planilha Inteligente (.xlsx) + Guia Rápido de Acompanhamento (PDF)',
        image: '/images/order-bump-1.webp',
        priceNum: 11.90,
        priceFormatted: '11,90',
        originalPrice: 'R$ 37,00',
        description: 'Histórico completo de revisões, trocas de peças e alertas periódicos do seu veículo. Aumenta a vida útil da bateria e valoriza seu autopropelido em até 30% na revenda.',
      },
      {
        id: 'kit-oficina',
        tag: 'ORDER BUMP #2 • BLINDAGEM',
        title: 'Kit Oficina sem Surpresas & Comparador de Orçamentos',
        subtitle: 'Planilha Comparadora (.xlsx) + Guia com 12 Scripts de Negociação (PDF)',
        image: '/images/order-bump-2.webp',
        priceNum: 8.90,
        priceFormatted: '8,90',
        originalPrice: 'R$ 47,00',
        description: 'O método blindado para negociar com assistências técnicas sem ser enganado. Compare até 3 orçamentos e use 12 mensagens prontas para exigir diagnósticos claros.',
      },
    ],
  },

  // ─── 10. DEPOIMENTOS WHATSAPP ──────────────────────────────────────────────
  whatsappSection: {
    title: 'Veja o que os donos de autopropelidos estão dizendo',
    subtitle: 'Depoimentos reais de quem parou de depender de oficinas e mecânicos.',
    messages: [
      {
        name: 'Rafael M.',
        avatar: '/images/depoimento-1.webp',
        time: '21:47',
        text: 'Cara, comprei ontem à noite e já resolvi o problema que minha scooter tinha há 3 semanas! O mecânico ia cobrar R$ 180 só pra "diagnosticar" e eu resolvi em 20 minutos com um multímetro de R$ 25. Era só um fusível de R$ 3,00 e um conector oxidado. Material incrível demais.',
      },
      {
        name: 'Juliana C.',
        avatar: '/images/depoimento-2.webp',
        time: '19:23',
        text: 'Não entendo nada de elétrica mas consegui seguir o guia de diagnóstico tranquilamente! Tudo muito visual e explicado passo a passo. Já aproveitei o guia do AliExpress e economizei R$ 340 nas peças que ia comprar aqui no Brasil. Obrigada demais!!',
      },
      {
        name: 'Thiago A.',
        avatar: '/images/depoimento-3.webp',
        time: '08:12',
        text: 'O bônus do destravamento sozinho já pagou tudo. Minha scooter veio travada em 32km/h de fábrica e agora vai 48km/h sem nenhum dano. O passo a passo é super claro, tive medo de estragar mas deu tudo certo. E o guia de compra de usados salvou minha vida numa negociação essa semana.',
      },
    ],
  },

  // ─── 11. GARANTIA INCONDICIONAL DE 7 DIAS ──────────────────────────────────
  guaranteeSection: {
    badgeDays: '7 DIAS',
    title: 'Garantia de 7 dias: o risco fica do nosso lado',
    intro: 'Isso significa que, durante esse tempo, se você achar que:',
    points: [
      'o manual não te ajudou a diagnosticar ou resolver um problema no seu veículo',
      'o conteúdo não facilitou a importação de peças ou o destravamento',
      'ou simplesmente não quiser continuar com o produto por qualquer motivo',
    ],
    actionText: '👉 você pode solicitar o reembolso total.',
    conditions: 'Sem burocracia. Sem explicação obrigatória.',
    closing:
      'Essa garantia existe porque acreditamos no valor prático do manual. Você não está comprando mais um PDF genérico da internet. Está levando um guia visual e organizado para nunca mais ficar a pé, nunca mais pagar caro em oficina e nunca mais ser enganado em compra de usados. Se não fizer sentido para você, o risco fica totalmente do nosso lado.',
  },

  // ─── 12. COMO É O ACESSO ────────────────────────────────────────────────────
  accessSteps: {
    title: 'Como é o acesso',
    subtitle: '(PASSO A PASSO)',
    steps: [
      {
        num: '1',
        title: 'Conclua sua compra',
        desc: 'Após o pagamento via Pix ou cartão, seu acesso é liberado automaticamente na hora.',
      },
      {
        num: '2',
        title: 'Receba o link no seu e-mail',
        desc: 'Você recebe os dados de acesso direto no e-mail cadastrado em segundos.',
      },
      {
        num: '3',
        title: 'Baixe o manual e os bônus',
        desc: 'Manual completo + 6 bônus em PDF de alta resolução para salvar no celular.',
      },
      {
        num: '4',
        title: 'Consulte na hora da pane',
        desc: 'PDF interativo com índice clicável. Resolva o problema direto pelo celular, mesmo offline.',
      },
    ],
  },

  // ─── 13. PERGUNTAS FREQUENTES ───────────────────────────────────────────────
  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'Este manual serve para qualquer autopropelido?',
        answer: 'Sim! O manual foi desenvolvido para cobrir scooters elétricas (850W+), patinetes de alta performance, e-bikes (com motor hub e mid-drive), skates elétricos, hoverboards e monociclos elétricos (EUC). Cada seção trata do sistema elétrico específico de cada tipo de veículo.',
      },
      {
        question: 'Preciso saber de elétrica para usar o manual?',
        answer: 'Não! O manual foi criado justamente para quem nunca mexeu em elétrica. Tudo é explicado com fotos reais, diagramas coloridos e linguagem simples. Se você sabe usar um multímetro (e ensinamos isso no início do manual), você consegue seguir todos os passos.',
      },
      {
        question: 'O acesso é imediato após a compra?',
        answer: 'Sim! Pagamentos via Pix liberam o acesso instantaneamente. Cartão de crédito é liberado em até 5 minutos. Você recebe o link direto no e-mail cadastrado.',
      },
      {
        question: 'O que exatamente está incluído?',
        answer: 'Você recebe o Manual Autopropelido completo (+120 páginas em PDF interativo) mais 6 bônus exclusivos: Guia de Configurações do Painel (P-Settings), Guia de Resgate na Rua, Kit de Emergência & Primeiros Socorros, O Que Saber Antes de Comprar um Usado, Oficina de Garagem e O Mapa das Peças Difíceis.',
      },
      {
        question: 'Por quanto tempo terei acesso?',
        answer: 'O acesso é vitalício. Você pode baixar o PDF para o celular ou computador e consultar offline para sempre, além de receber gratuitamente as atualizações futuras do conteúdo.',
      },
      {
        question: 'E se eu não conseguir resolver o problema mesmo com o manual?',
        answer: 'Você tem 7 dias de garantia total e incondicional. Se por qualquer motivo o manual não resolver sua situação ou você não ficar satisfeito, basta solicitar o reembolso — sem burocracia, sem explicação obrigatória, 100% do dinheiro de volta.',
      },
    ],
  },

  // ─── 14. STICKY MOBILE CTA ───────────────────────────────────────────────
  stickyCTA: {
    text: 'GARANTIR MEU ACESSO AGORA',
    link: '#oferta',
    subtext: 'Apenas R$ 27,90 • Acesso Vitalício',
  },

  // ─── 15. RODAPÉ E DISCLAIMERS ────────────────────────────────────────────
  footer: {
    title: 'Manual Autopropelido',
    copyright: '© 2026 Todos os direitos reservados.',
    disclaimer1:
      'Este é um produto educativo digital independente, sem vínculo com fabricantes, importadoras ou oficinas. As informações contidas neste material são de caráter educativo e não substituem a avaliação de um profissional técnico habilitado para situações de risco. O autor não se responsabiliza por danos causados por modificações realizadas sem o devido cuidado.',
    disclaimer2:
      'Este site não é afiliado a Facebook™, Instagram™, Google™, AliExpress™, Shopee™ ou outras plataformas de terceiros. Todos os nomes de marcas e marcas registradas citados pertencem aos seus respectivos proprietários.',
  },
};
