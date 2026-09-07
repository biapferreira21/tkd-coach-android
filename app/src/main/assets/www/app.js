const TECHNICAL_TYPES = new Set(['Bases', 'Técnica de braços', 'Pontapé', 'Poomsae']);
const PREVIEW_NAMES = ['Kkoa seogi', 'Hakdari seogi', 'Hecheo makgi', 'Batangson momtong makki', 'Pyonsonkkeut sewo jireugi', 'Jecho jireugi', 'Murup chigi', 'Bandae dollyo chagi', 'Huryeo chagi', 'An chagi', 'Bakkat chagi', 'Bitureo chagi', 'Twio ap chagi', 'Gawi makgi', 'Nulleo makgi', 'Oesanteul makgi', 'Geumgang makgi', 'Hwangso makgi', 'Danggyeo jireugi', 'Dollyeo jireugi', 'Chi jireugi', 'Sewo jireugi', 'Geodeureo chigi', 'Bakkat chigi', 'Pyojeok chigi', 'Bada makgi', 'Naeryeo makgi', 'Santeul makgi', 'Ollyeo makgi', 'Cha makgi', 'Yeom makgi', 'Chye makgi', 'Digeutja jireugi', 'Yeop jireugi', 'Naeryeo jireugi', 'Geumgang jireugi', 'Dwi jireugi', 'Chetdari jireugi', 'Dollyeo chigi', 'Biteureo chigi', 'Yeop chigi', 'Naeryeo chigi', 'Dwi chigi', 'An chigi', 'Ollyeo chigi', 'Danggyeo chigi', 'Ap chigi', 'Jebipum chigi'];
const EXERCISE_TRANSLATIONS = {
  'Ap seogi': 'Posição curta à frente',
  'Ap kubi': 'Posição longa à frente',
  'Dwit kubi': 'Posição recuada',
  'Juchum seogi + momtong jireugi': 'Posição de cavalo com soco médio',
  'Arae makki': 'Defesa baixa',
  'Eolgul makki': 'Defesa alta',
  'Momtong an makki': 'Defesa média para dentro',
  'Momtong bakkat makki': 'Defesa média para fora',
  'Sonnal momtong makki': 'Defesa média com mão aberta',
  'Sonnal mok chigi': 'Ataque ao pescoço com mão aberta',
  'Momtong jireugi': 'Soco médio',
  'Eolgul jireugi': 'Soco alto',
  'Deung jumeok ap chigi': 'Ataque frontal com costas do punho',
  'Me jumeok naeryo chigi': 'Ataque descendente com punho martelo',
  'Palkup chigi': 'Ataque de cotovelo',
  'Makki + momtong jireugi': 'Defesa seguida de soco médio',
  'Passo + momtong jireugi': 'Passo seguido de soco médio',
  'Makki · sequência mista': 'Sequência de defesas',
  'Ap chagi': 'Pontapé frontal',
  'Dollyo chagi': 'Pontapé circular',
  'Apbal dollyo chagi': 'Pontapé circular com a perna da frente',
  'Yop chagi': 'Pontapé lateral',
  'Dwi chagi': 'Pontapé para trás',
  'Naeryo chagi': 'Pontapé descendente',
  'Bandae dollyo chagi': 'Pontapé circular reverso',
  'Huryeo chagi': 'Pontapé em chicote',
  'Moa seogi': 'Posição fechada',
  'Narani seogi': 'Posição paralela',
  'Kkoa seogi': 'Posição cruzada',
  'Hakdari seogi': 'Posição de grou numa perna',
  'Hecheo makgi': 'Defesa de abertura',
  'Batangson momtong makki': 'Defesa média com a base da palma',
  'Pyonsonkkeut sewo jireugi': 'Ataque vertical com as pontas dos dedos',
  'Jecho jireugi': 'Soco invertido',
  'Murup chigi': 'Ataque de joelho',
  'Mireo chagi': 'Pontapé de empurrar',
  'An chagi': 'Pontapé circular para dentro',
  'Bakkat chagi': 'Pontapé circular para fora',
  'Bitureo chagi': 'Pontapé torcido',
  'Twio ap chagi': 'Pontapé frontal com salto',
  'Gawi makgi': 'Defesa em tesoura',
  'Nulleo makgi': 'Defesa pressionada para baixo',
  'Oesanteul makgi': 'Meia defesa montanha',
  'Geumgang makgi': 'Defesa diamante',
  'Hwangso makgi': 'Defesa chifres de touro',
  'Danggyeo jireugi': 'Soco com puxão',
  'Dollyeo jireugi': 'Soco circular',
  'Chi jireugi': 'Soco ascendente',
  'Sewo jireugi': 'Soco vertical',
  'Geodeureo chigi': 'Golpe assistido',
  'Bakkat chigi': 'Golpe para fora',
  'Pyojeok chigi': 'Golpe dirigido a uma mão-alvo'
  ,'Bada makgi': 'Defesa de absorção'
  ,'Naeryeo makgi': 'Defesa descendente'
  ,'Santeul makgi': 'Defesa montanha'
  ,'Ollyeo makgi': 'Defesa ascendente'
  ,'Cha makgi': 'Defesa com a perna ou o pé'
  ,'Yeom makgi': 'Defesa lateral'
  ,'Chye makgi': 'Defesa por impacto'
  ,'Digeutja jireugi': 'Soco duplo em forma de ㄷ'
  ,'Yeop jireugi': 'Soco lateral'
  ,'Naeryeo jireugi': 'Soco descendente'
  ,'Geumgang jireugi': 'Defesa alta e soco simultâneos'
  ,'Dwi jireugi': 'Soco para trás'
  ,'Chetdari jireugi': 'Soco duplo em forquilha'
  ,'Dollyeo chigi': 'Golpe circular'
  ,'Biteureo chigi': 'Golpe com torção'
  ,'Yeop chigi': 'Golpe lateral'
  ,'Naeryeo chigi': 'Golpe descendente'
  ,'Dwi chigi': 'Golpe para trás'
  ,'An chigi': 'Golpe para dentro'
  ,'Ollyeo chigi': 'Golpe ascendente'
  ,'Danggyeo chigi': 'Golpe com puxão'
  ,'Ap chigi': 'Golpe frontal'
  ,'Jebipum chigi': 'Golpe em forma de andorinha'
};
const technicalBaseName = name => name.replace(/\s*·.*$/, '').replace(/\s+\+\s+.*/, '').trim();
const technicalCategory = (name, type) => {
  if (type === 'Bases') return 'seogi';
  if (type === 'Pontapé') return 'chagi';
  if (type === 'Poomsae') return 'poomsae';
  if (/makki/i.test(name) && !/jireugi|chigi/i.test(name.replace(/makki/i, ''))) return 'makki';
  return 'jireugi-chigi';
};
const ex = (name, seconds, description, tips, art, type = 'Técnica', coach = '') => {
  const technical = TECHNICAL_TYPES.has(type);
  const koreanName = technical ? technicalBaseName(name) : null;
  const curriculumLevel = technical ? (PREVIEW_NAMES.some(value => name.includes(value)) ? 'preview' : 'current_focus') : null;
  return {
    name, seconds, description, tips, art, type, coach,
    ...(technical ? {
      koreanName,
      portugueseName: EXERCISE_TRANSLATIONS[koreanName] || EXERCISE_TRANSLATIONS[name] || description,
      category: technicalCategory(name, type),
      curriculumLevel,
      durationSeconds: seconds,
      keyPoints: [...tips],
      commonErrors: ['Perder o alinhamento', 'Acelerar antes de controlar a técnica'],
      safetyNote: type === 'Pontapé'
        ? 'Prioriza câmara, equilíbrio e recolha. Não procures altura máxima sem supervisão.'
        : 'Executa sem dor e reduz a intensidade se perderes o controlo.',
      mediaKey: koreanName
    } : {})
  };
};

const ART = {
  warmup: 'assets/fitness/warmup-jog.webp',
  cardio: 'assets/fitness/cardio-shadow.webp',
  stance: 'assets/placeholders/generic/ready.webp',
  block: 'assets/placeholders/generic/high-block.webp',
  punch: 'assets/placeholders/generic/punch.webp',
  frontKick: 'assets/placeholders/generic/front-kick.webp',
  roundKick: 'assets/placeholders/generic/round-kick.webp',
  sideKick: 'assets/placeholders/generic/side-kick.webp',
  backKick: 'assets/placeholders/generic/back-kick.webp',
  poomsae: 'assets/poomsae/representative-pose.webp',
  squat: 'assets/fitness/strength-squat.webp',
  plank: 'assets/fitness/core-plank.webp',
  stretch: 'assets/mobility/stretch-wide.webp'
};

const library = {
  warmups: [
    ex('Corrida no lugar', 90, 'Eleva a temperatura corporal com passada leve e ritmo progressivo.', ['Pousa suave', 'Respira fundo', 'Ombros soltos'], ART.warmup, 'Aquecimento'),
    ex('Passos laterais rápidos', 90, 'Desloca-te para os lados com joelhos ativos e guarda leve.', ['Pés paralelos', 'Centro baixo', 'Não cruzes os pés'], ART.cardio, 'Aquecimento'),
    ex('Skipping com joelhos altos', 90, 'Sobe os joelhos com ritmo e controlo.', ['Tronco alto', 'Braços ajudam', 'Mantém cadência'], ART.warmup, 'Aquecimento'),
    ex('Calcanhares aos glúteos', 90, 'Ativa posteriores com passada curta e rápida.', ['Sem inclinar o tronco', 'Ritmo solto', 'Respiração contínua'], ART.warmup, 'Aquecimento'),
    ex('Shadow taekwondo leve', 120, 'Combina deslocamentos e técnicas suaves para entrar no treino.', ['Guarda alta', 'Movimento fluido', 'Sem força máxima'], ART.poomsae, 'Aquecimento'),
    ex('Deslocamento triangular', 120, 'Frente, diagonal e recuo num padrão triangular.', ['Olhar à frente', 'Passos curtos', 'Base estável'], ART.cardio, 'Aquecimento'),
    ex('Pivot e guarda', 90, 'Treina pivots rápidos do pé de apoio mantendo a guarda.', ['Roda na planta do pé', 'Anca solta', 'Guarda viva'], ART.cardio, 'Aquecimento'),
    ex('Saltos curtos em guarda', 90, 'Pequenos ressaltos elásticos para acordar pernas e tornozelos.', ['Impacto leve', 'Joelhos macios', 'Sem perder postura'], ART.cardio, 'Aquecimento'),
    ex('Marcha com rotação de tronco', 90, 'Marcha ativa com rotação controlada do tronco.', ['Anca estável', 'Rota sem forçar', 'Braços soltos'], ART.warmup, 'Aquecimento'),
    ex('Avanço e recuo em guarda', 120, 'Entra e sai da distância com controlo.', ['Não juntes os pés', 'Guarda alta', 'Peso distribuído'], ART.cardio, 'Aquecimento'),
    ex('Shadow com fintas', 120, 'Movimenta-te como em combate, com fintas leves e ritmo.', ['Cabeça móvel', 'Guarda viva', 'Usa o espaço'], ART.cardio, 'Aquecimento'),
    ex('Passos em L', 90, 'Deslocamento em L para coordenar pés e mudança de direção.', ['Passa pelo chão', 'Muda rápido', 'Sem cruzar pernas'], ART.cardio, 'Aquecimento'),
    ex('Joelho ao peito alternado', 90, 'Sobe um joelho de cada vez com pausa curta em equilíbrio.', ['Equilibra 1 segundo', 'Costas direitas', 'Pé de apoio firme'], ART.frontKick, 'Aquecimento'),
    ex('Coordenação braço-perna', 90, 'Alterna joelho alto com soco leve para coordenar corpo todo.', ['Não acelera demasiado', 'Soco limpo', 'Respiração regular'], ART.punch, 'Aquecimento'),
    ex('Polichinelos de baixo impacto', 90, 'Abre braços e pernas alternadamente sem saltar.', ['Pousa suave', 'Joelhos soltos', 'Ritmo progressivo'], ART.warmup, 'Aquecimento'),
    ex('Corda imaginária', 90, 'Simula saltar à corda com ressaltos pequenos e leves.', ['Ressalto baixo', 'Cotovelos junto ao corpo', 'Respira'], ART.cardio, 'Aquecimento'),
    ex('Passos diagonais em guarda', 90, 'Avança e recua pelas diagonais mantendo a guarda.', ['Não cruzes os pés', 'Olhar à frente', 'Centro estável'], ART.cardio, 'Aquecimento'),
    ex('Toques de ponta à frente', 90, 'Alterna pequenos toques do pé à frente com braços ativos.', ['Movimento leve', 'Tronco alto', 'Cadência constante'], ART.warmup, 'Aquecimento'),
    ex('Trocas de base controladas', 90, 'Alterna a perna da frente sem saltos altos.', ['Pés próximos do chão', 'Guarda alta', 'Aterra equilibrada'], ART.cardio, 'Aquecimento'),
    ex('Joelhos alternados com guarda', 90, 'Eleva os joelhos alternadamente e regressa sempre à guarda.', ['Core ativo', 'Pé de apoio firme', 'Sem inclinar para trás'], ART.frontKick, 'Aquecimento'),
    ex('Passos em estrela', 90, 'Desloca-te à frente, atrás e nas diagonais a partir do centro.', ['Regressa ao centro', 'Passos curtos', 'Não juntes os pés'], ART.cardio, 'Aquecimento'),
    ex('Pivots de 90 graus', 90, 'Roda para ambos os lados com pequenos pivots e guarda estável.', ['Olha primeiro', 'Roda na planta do pé', 'Joelhos macios'], ART.cardio, 'Aquecimento'),
    ex('Shadow de defesas e socos', 120, 'Alterna uma defesa simples com um soco leve em movimento.', ['Sem impacto', 'Anca acompanha', 'Técnica limpa'], ART.block, 'Aquecimento'),
    ex('Acelera e trava em guarda', 90, 'Faz três passos rápidos e estabiliza imediatamente em guarda.', ['Trava com controlo', 'Não bloqueies os joelhos', 'Guarda presente'], ART.cardio, 'Aquecimento')
  ],
  mobility: [
    ex('Círculos de tornozelo', 60, 'Mobiliza ambos os tornozelos antes do trabalho técnico.', ['Ambos os sentidos', 'Movimento controlado', 'Sem dor'], ART.stretch, 'Mobilidade'),
    ex('Joelho sobre o pé', 60, 'Empurra o joelho à frente sem levantar o calcanhar.', ['Calcanhar no chão', 'Amplitude segura', 'Troca lados'], ART.stretch, 'Mobilidade'),
    ex('Abra e fecha a anca', 90, 'Leva o joelho ao peito e abre para fora, depois fecha.', ['Postura alta', 'Sem pressa', 'Controla a anca'], ART.frontKick, 'Mobilidade'),
    ex('Balanços frontais', 90, 'Balança a perna à frente e atrás para preparar ap chagi.', ['Anca alinhada', 'Gradual', 'Sem prender a perna'], ART.frontKick, 'Mobilidade'),
    ex('Balanços laterais', 90, 'Abre a perna lateralmente com controlo e equilíbrio.', ['Pé de apoio firme', 'Tronco estável', 'Não forces altura'], ART.sideKick, 'Mobilidade'),
    ex('Elevação do joelho em câmara', 90, 'Sobe o joelho e segura a câmara do pontapé.', ['Ponta do pé recolhida', 'Anca nivelada', 'Segura 1 segundo'], ART.frontKick, 'Mobilidade'),
    ex('Agachamento cossaco lateral', 90, 'Alterna transferência lateral de peso para abrir adutores.', ['Pé da perna estendida ativo', 'Peito aberto', 'Desce com controlo'], ART.stretch, 'Mobilidade'),
    ex('Lunges dinâmicos', 90, 'Alterna avanços frontais e regressa com mobilidade.', ['Joelho acompanha pé', 'Tronco alto', 'Empurra o chão'], ART.squat, 'Mobilidade'),
    ex('Lunges com rotação', 90, 'Faz lunge frontal e roda o tronco para o lado da perna da frente.', ['Rota o tronco', 'Anca estável', 'Respira'], ART.stretch, 'Mobilidade'),
    ex('Agachamento profundo com apoio', 90, 'Desce ao agachamento e abre suavemente as ancas.', ['Calcanhares assentes', 'Cotovelos afastam joelhos', 'Sem colapsar'], ART.squat, 'Mobilidade'),
    ex('Balanço de adutores em quatro apoios', 90, 'Em posição no chão, alterna peso para abrir adutores.', ['Coluna neutra', 'Movimento suave', 'Não forces'], ART.stretch, 'Mobilidade'),
    ex('Rotações de ombro', 60, 'Roda ombros para preparar guardas e defesas.', ['Ombros baixos', 'Amplo mas suave', 'Nos dois sentidos'], ART.block, 'Mobilidade'),
    ex('Rotações de tronco', 60, 'Ativa a zona média com rotações controladas.', ['Bacia estável', 'Sem dor lombar', 'Olhar acompanha'], ART.block, 'Mobilidade'),
    ex('Alongamento dinâmico de isquiotibiais', 90, 'Varre à frente com calcanhar no chão e ponta do pé para cima.', ['Costas compridas', 'Sem arredondar', 'Alterna lados'], ART.stretch, 'Mobilidade'),
    ex('Alongamento dinâmico do quadríceps', 90, 'Segura o pé atrás por um segundo e avança.', ['Joelhos juntos', 'Bacia neutra', 'Não puxes demais'], ART.stretch, 'Mobilidade'),
    ex('Gato-camelo', 60, 'Mobiliza coluna e respiração antes da força/core.', ['Flui com a respiração', 'Sem dor', 'Movimento completo'], ART.plank, 'Mobilidade')
  ],
  arms: [
    ex('Ap seogi', 120, 'Marcha técnica em base curta para consolidar alinhamento.', ['Pés paralelos', 'Postura alta', 'Olhar firme'], ART.stance, 'Bases'),
    ex('Ap kubi', 150, 'Avança em base longa sem alterar a altura.', ['Passada medida', 'Joelho da frente flete', 'Bacia enquadrada'], ART.stance, 'Bases'),
    ex('Dwit kubi', 150, 'Entra e sai da base recuada com controlo.', ['Peso mais atrás', 'Pés bem orientados', 'Sem subir'], ART.stance, 'Bases'),
    ex('Juchum seogi + momtong jireugi', 150, 'Base de cavalo com socos alternados.', ['Joelhos para fora', 'Anca estável', 'Punho alinhado'], ART.punch, 'Bases'),
    ex('Arae makki', 150, 'Defesa baixa alternando lados em avanço.', ['Cruza primeiro', 'Termina abaixo do umbigo', 'Mão oposta recolhe'], ART.block, 'Técnica de braços'),
    ex('Eolgul makki', 150, 'Defesa alta em avanço com final limpo.', ['Protege a cabeça', 'Ombros baixos', 'Fim decidido'], ART.block, 'Técnica de braços'),
    ex('Momtong an makki', 150, 'Defesa média para dentro com rotação da anca.', ['Cotovelo fechado', 'Antebraço ao centro', 'Olhar no alvo'], ART.block, 'Técnica de braços'),
    ex('Momtong bakkat makki', 150, 'Defesa média para fora, firme e sem exagerar o cotovelo.', ['Trajetória curta', 'Termina ao lado', 'Mão oposta recolhe'], ART.block, 'Técnica de braços'),
    ex('Sonnal momtong makki', 150, 'Defesa com mão aberta e precisão da lâmina da mão.', ['Dedos juntos', 'Ombro relaxado', 'Base estável'], ART.block, 'Técnica de braços'),
    ex('Sonnal mok chigi', 150, 'Ataque com mão aberta em postura estável.', ['Braço não hiperestende', 'Roda a anca', 'Mão de recolha ativa'], ART.block, 'Técnica de braços'),
    ex('Momtong jireugi', 150, 'Soco médio com potência da anca.', ['Punho gira no final', 'Cotovelo perto do corpo', 'Expira no impacto'], ART.punch, 'Técnica de braços'),
    ex('Eolgul jireugi', 150, 'Soco alto controlado sem subir os ombros.', ['Queixo protegido', 'Linha direta', 'Base sólida'], ART.punch, 'Técnica de braços'),
    ex('Deung jumeok ap chigi', 120, 'Golpe com as costas do punho à frente.', ['Cotovelos controlados', 'Trajetória curta', 'Recolhe rápido'], ART.punch, 'Técnica de braços'),
    ex('Me jumeok naeryo chigi', 120, 'Golpe descendente com precisão e tronco estável.', ['Não arqueies', 'Cai em linha', 'Respira'], ART.punch, 'Técnica de braços'),
    ex('Palkup chigi', 120, 'Ataque de cotovelo curto e explosivo.', ['Cotovelos próximos', 'Anca ajuda', 'Base firme'], ART.punch, 'Técnica de braços'),
    ex('Makki + momtong jireugi', 180, 'Liga uma defesa a um soco imediato.', ['Sem pausa', 'Ritmo limpo', 'Regressa à guarda'], ART.punch, 'Técnica de braços'),
    ex('Passo + momtong jireugi', 150, 'Entra na distância com passo técnico e soco definido.', ['Passo pisa primeiro', 'Soco chega no fim', 'Corpo inteiro coordena'], ART.punch, 'Técnica de braços'),
    ex('Makki · sequência mista', 180, 'Alterna defesa baixa, média e alta por sequência.', ['Memória de ordem', 'Termina cada bloco', 'Respiração constante'], ART.block, 'Técnica de braços'),
    ex('Moa seogi', 120, 'Fecha a base com postura vertical e controlo do peso.', ['Pés juntos', 'Joelhos soltos', 'Tronco alto'], ART.stance, 'Bases'),
    ex('Narani seogi', 120, 'Estabiliza a posição paralela antes das técnicas de braço.', ['Pés paralelos', 'Peso equilibrado', 'Ombros soltos'], ART.stance, 'Bases'),
    ex('Kkoa seogi · baixa intensidade', 120, 'Treina a posição cruzada lentamente, sem bloquear os joelhos.', ['Cruza com controlo', 'Centro estável', 'Sai sem torcer o joelho'], ART.stance, 'Bases'),
    ex('Hakdari seogi · equilíbrio', 120, 'Sustenta a posição de grou e troca de lado com apoio seguro.', ['Olhar fixo', 'Pé de apoio ativo', 'Baixa o joelho se perderes equilíbrio'], ART.stance, 'Bases'),
    ex('Hecheo makgi · prévia', 120, 'Explora a defesa de abertura com amplitude moderada.', ['Parte de uma câmara clara', 'Abre simetricamente', 'Ombros baixos'], ART.block, 'Técnica de braços'),
    ex('Batangson momtong makki · prévia', 120, 'Pratica a defesa média com a base da palma, sem impacto.', ['Punho alinhado', 'Palma firme', 'Movimento curto'], ART.block, 'Técnica de braços'),
    ex('Pyonsonkkeut sewo jireugi · prévia', 120, 'Treina a linha do ataque vertical com os dedos sem atingir objetos.', ['Dedos unidos', 'Pulso alinhado', 'Sem impacto'], ART.punch, 'Técnica de braços'),
    ex('Jecho jireugi · prévia', 120, 'Pratica o soco invertido lentamente para compreender a posição final.', ['Palma para cima', 'Cotovelo controlado', 'Mão oposta recolhe'], ART.punch, 'Técnica de braços'),
    ex('Murup chigi · sem impacto', 120, 'Eleva o joelho em linha sem atingir um alvo.', ['Guarda alta', 'Anca estável', 'Pousa em equilíbrio'], ART.punch, 'Técnica de braços'),
    ex('Sonnal geodeureo makgi → pyonsonkkeut geodeureo sewo jjireugi', 180, 'Liga a defesa assistida de mão aberta ao ataque vertical com apoio.', ['Termina a defesa', 'Transição sem pressa', 'Dedos unidos e pulso alinhado'], ART.block, 'Técnica de braços'),
    ex('Momtong bakkat makgi → ap chagi → momtong jireugi', 180, 'Defesa média para fora, pontapé frontal e soco médio numa sequência fluida.', ['Guarda regressa', 'Recolhe o pontapé', 'Soco chega com a base'], ART.punch, 'Técnica de braços'),
    ex('Pyojeok an chagi → palkup pyojeok chigi', 180, 'Pontapé circular para dentro seguido de cotovelo ao alvo imaginário.', ['Altura moderada', 'Sem impacto', 'Controla a distância'], ART.punch, 'Técnica de braços'),
    ex('An palmok momtong makgi → momtong baro jireugi', 180, 'Defesa média com antebraço interno e resposta imediata com soco contrário.', ['Cotovelo controlado', 'Usa a anca', 'Recolhe a mão oposta'], ART.punch, 'Técnica de braços'),
    ex('Gawi makgi · aprendizagem lenta', 150, 'Executa simultaneamente uma defesa média e uma defesa baixa, formando uma tesoura com os antebraços.', ['Cruza e prepara os dois braços', 'Um antebraço protege o tronco e o outro a zona baixa', 'Termina os dois lados ao mesmo tempo'], ART.block, 'Técnica de braços'),
    ex('Nulleo makgi · aprendizagem lenta', 150, 'Pressiona a linha de ataque para baixo com a palma ou o antebraço, sem baixar o tronco.', ['Base da palma firme', 'Cotovelo ligeiramente fletido', 'Pressiona para baixo sem inclinar o peito'], ART.block, 'Técnica de braços'),
    ex('Oesanteul makgi · aprendizagem lenta', 150, 'Combina uma proteção alta lateral com uma defesa baixa no lado oposto.', ['Separa claramente os dois níveis', 'Punhos alinhados com os antebraços', 'Mantém a cabeça entre as linhas de proteção'], ART.block, 'Técnica de braços'),
    ex('Geumgang makgi · aprendizagem lenta', 150, 'Forma a defesa diamante: um braço protege acima da cabeça e o outro controla a linha lateral.', ['Braço alto não tapa a visão', 'Cotovelo lateral à altura correta', 'Ombros baixos e base firme'], ART.block, 'Técnica de braços'),
    ex('Hwangso makgi · aprendizagem lenta', 150, 'Eleva os dois antebraços junto à cabeça numa defesa dupla semelhante a chifres.', ['Punhos fechados e pulsos retos', 'Antebraços protegem as têmporas', 'Não abras demasiado os cotovelos'], ART.block, 'Técnica de braços'),
    ex('Danggyeo jireugi · sem impacto', 150, 'Simula puxar o adversário com uma mão enquanto a outra executa um soco curto.', ['A mão que puxa recolhe ao corpo', 'O soco chega quando termina o puxão', 'Mantém cotovelo e pulso alinhados'], ART.punch, 'Técnica de braços'),
    ex('Dollyeo jireugi · sem impacto', 150, 'Executa um soco de trajetória circular curta, rodando o tronco sem abrir excessivamente o cotovelo.', ['Trajetória curva e compacta', 'Punho e antebraço chegam alinhados', 'Roda a anca e regressa à guarda'], ART.punch, 'Técnica de braços'),
    ex('Chi jireugi · sem impacto', 150, 'Eleva o punho numa trajetória vertical curta em direção ao queixo imaginário.', ['Palma orientada para ti no final', 'Cotovelo acompanha por baixo', 'Pára antes de hiperestender o ombro'], ART.punch, 'Técnica de braços'),
    ex('Sewo jireugi · sem impacto', 150, 'Projeta o punho em linha direta e termina-o na vertical, com o polegar para cima.', ['Pulso completamente direito', 'Cotovelo acompanha a linha do soco', 'Punho vertical no ponto final'], ART.punch, 'Técnica de braços'),
    ex('Geodeureo chigi · aprendizagem lenta', 150, 'Executa um golpe apoiado pela segunda mão, que reforça e estabiliza a ação principal.', ['Mão de apoio acompanha sem empurrar o pulso', 'Define a superfície de contacto antes de acelerar', 'Os dois braços terminam coordenados'], ART.punch, 'Técnica de braços'),
    ex('Bakkat chigi · aprendizagem lenta', 150, 'Golpeia de dentro para fora com trajetória nítida e superfície de contacto bem orientada.', ['Inicia junto à linha central', 'Conduz o golpe para fora sem lançar o ombro', 'Recolhe imediatamente à guarda'], ART.punch, 'Técnica de braços'),
    ex('Pyojeok chigi · sem impacto', 150, 'Usa a mão oposta como alvo e termina o golpe exatamente nesse ponto, sem impacto forte.', ['Mão-alvo estável e visível', 'Olhos acompanham o alvo', 'Toca de forma leve e controlada'], ART.punch, 'Técnica de braços'),
    ex('Bada makgi · aprendizagem lenta', 150, 'Recebe e amortece a linha de ataque com uma superfície firme, sem bloquear as articulações.', ['Acompanha ligeiramente a força', 'Mantém o pulso alinhado', 'Não transformes a defesa num golpe'], ART.block, 'Técnica de braços'),
    ex('Naeryeo makgi · aprendizagem lenta', 150, 'Desvia o ataque de cima para baixo até à zona inferior.', ['Inicia à altura do peito', 'Termina sem ultrapassar a linha útil', 'Ombro baixo'], ART.block, 'Técnica de braços'),
    ex('Santeul makgi · aprendizagem lenta', 150, 'Forma a defesa montanha com os dois antebraços a proteger lados opostos da cabeça.', ['Dois braços terminam juntos', 'Cabeça entre as linhas de defesa', 'Pulsos direitos'], ART.block, 'Técnica de braços'),
    ex('Ollyeo makgi · aprendizagem lenta', 150, 'Eleva a defesa desde baixo para interceptar uma linha ascendente.', ['Cotovelo acompanha a trajetória', 'Não tapes a visão', 'Termina com estrutura firme'], ART.block, 'Técnica de braços'),
    ex('Cha makgi · sem impacto', 150, 'Interceta a aproximação com a perna ou o pé, controlando totalmente a distância.', ['Sem contacto forte', 'Joelho alinhado', 'Recolhe antes de pousar'], ART.block, 'Técnica de braços'),
    ex('Yeom makgi · aprendizagem lenta', 150, 'Bloqueia um ataque vindo do lado com o antebraço orientado para a linha lateral.', ['Olha para o lado primeiro', 'Não abras demasiado o cotovelo', 'Base firme'], ART.block, 'Técnica de braços'),
    ex('Chye makgi · sem impacto', 150, 'Encontra a linha de ataque com uma defesa curta por impacto controlado.', ['Trajetória compacta', 'Pulso alinhado', 'Pára antes do contacto'], ART.block, 'Técnica de braços'),
    ex('Digeutja jireugi · aprendizagem lenta', 150, 'Combina um soco alto e um soco invertido, formando lateralmente a letra coreana ㄷ.', ['Braços em níveis distintos', 'Punhos alinhados', 'Não rodes excessivamente o tronco'], ART.punch, 'Técnica de braços'),
    ex('Yeop jireugi · sem impacto', 150, 'Roda o corpo e projeta o punho em linha reta para um alvo lateral.', ['Olha antes de socar', 'Usa a rotação do tronco', 'Ombro baixo'], ART.punch, 'Técnica de braços'),
    ex('Naeryeo jireugi · sem impacto', 150, 'Dirige um soco vertical para um alvo baixo, sem curvar a coluna.', ['Baixa com as pernas', 'Punho verticalmente sobre o alvo', 'Não bloqueies o cotovelo'], ART.punch, 'Técnica de braços'),
    ex('Geumgang jireugi · aprendizagem lenta', 150, 'Executa uma defesa alta e um soco simultâneo para a frente ou para o lado.', ['Separa claramente defesa e ataque', 'Dois braços terminam juntos', 'Mantém a base estável'], ART.punch, 'Técnica de braços'),
    ex('Dwi jireugi · sem impacto', 150, 'Roda a cintura e ataca um alvo imaginário atrás do corpo.', ['Localiza o alvo primeiro', 'Roda sem torcer o joelho', 'Recolhe à guarda'], ART.punch, 'Técnica de braços'),
    ex('Chetdari jireugi · aprendizagem lenta', 150, 'Estende os dois punhos à zona média em linhas divergentes semelhantes a uma forquilha.', ['Dois punhos à mesma altura', 'Cotovelo controlado', 'Centro firme'], ART.punch, 'Técnica de braços'),
    ex('Dollyeo chigi · sem impacto', 150, 'Usa a rotação do corpo para executar um golpe circular compacto.', ['Define a superfície de contacto', 'Roda a anca', 'Recolhe imediatamente'], ART.punch, 'Técnica de braços'),
    ex('Biteureo chigi · aprendizagem lenta', 150, 'Golpeia enquanto tronco e perna avançada criam uma torção oposta e controlada.', ['Não forces a lombar', 'Trajetória curta', 'Mantém o joelho alinhado'], ART.punch, 'Técnica de braços'),
    ex('Yeop chigi · sem impacto', 150, 'Executa um golpe para um alvo lateral com o tronco bem orientado.', ['Olha para o alvo', 'Não levantes o ombro', 'Regressa à guarda'], ART.punch, 'Técnica de braços'),
    ex('Naeryeo chigi · sem impacto', 150, 'Golpeia de cima para baixo com trajetória vertical definida.', ['Cotovelo conduz sem abrir', 'Tronco alto', 'Pára antes do impacto'], ART.punch, 'Técnica de braços'),
    ex('Dwi chigi · sem impacto', 150, 'Ataca um alvo atrás do corpo depois de o localizar visualmente.', ['Olha primeiro', 'Roda pela anca', 'Não percas a base'], ART.punch, 'Técnica de braços'),
    ex('An chigi · sem impacto', 150, 'Percorre uma trajetória de fora para dentro em direção à linha central.', ['Começa fora da linha', 'Cotovelo suave', 'Termina sem cruzar excessivamente'], ART.punch, 'Técnica de braços'),
    ex('Ollyeo chigi · sem impacto', 150, 'Executa um golpe ascendente curto para um alvo imaginário.', ['Força nasce das pernas e anca', 'Punho alinhado', 'Não hiperestendas o ombro'], ART.punch, 'Técnica de braços'),
    ex('Danggyeo chigi · sem impacto', 150, 'Puxa o alvo imaginário com uma mão e golpeia com a outra.', ['Puxão termina junto ao corpo', 'Golpe e puxão sincronizados', 'Base estável'], ART.punch, 'Técnica de braços'),
    ex('Ap chigi · sem impacto', 150, 'Executa um golpe frontal curto mantendo a outra mão em proteção.', ['Linha direta', 'Define a superfície de contacto', 'Recolhe rápido'], ART.punch, 'Técnica de braços'),
    ex('Jebipum chigi · aprendizagem lenta', 150, 'Combina proteção alta e golpe frontal numa forma coordenada semelhante a uma andorinha.', ['Braços terminam simultaneamente', 'Não tapes a visão', 'Ombros baixos'], ART.punch, 'Técnica de braços')
  ],
  kicks: [
    ex('Ap chagi · lento', 150, 'Pontapé frontal lento para trabalhar câmara e recolha.', ['Joelho sobe primeiro', 'Extensão limpa', 'Recolhe antes de pousar'], ART.frontKick, 'Pontapé'),
    ex('Ap chagi · rápido', 150, 'Séries curtas de pontapé frontal com velocidade controlada.', ['Ritmo curto', 'Guarda alta', 'Pousa equilibrada'], ART.frontKick, 'Pontapé'),
    ex('Ap chagi · momtong', 150, 'Frontal à zona média, focando direção e retorno.', ['Não sacrifiques forma', 'Linha direta', 'Anca estável'], ART.frontKick, 'Pontapé'),
    ex('Dollyo chagi', 180, 'Roundhouse controlado, priorizando rotação do pé de apoio.', ['Pé de apoio roda', 'Joelho guia', 'Impacta com peito do pé'], ART.roundKick, 'Pontapé'),
    ex('Dollyo chagi · rápido', 180, 'Séries de dollyo em ritmo mais vivo.', ['Recolhe rápido', 'Guarda ativa', 'Mantém eixo'], ART.roundKick, 'Pontapé'),
    ex('Apbal dollyo chagi', 180, 'Trabalha o pontapé circular sem preparação longa.', ['Joelho sobe limpo', 'Pivota cedo', 'Pouca telegrafia'], ART.roundKick, 'Pontapé'),
    ex('Yop chagi', 180, 'Pontapé lateral parando na câmara antes de estender.', ['Joelho fechado', 'Calcanhar aponta', 'Tronco ligeiramente inclina'], ART.sideKick, 'Pontapé'),
    ex('Yop chagi · retenção', 180, 'Mantém o pontapé lateral estendido por um momento.', ['Empurra pelo calcanhar', 'Anca alinhada', 'Segura equilíbrio'], ART.sideKick, 'Pontapé'),
    ex('Dwi chagi', 180, 'Pontapé para trás com trajetória reta.', ['Olha sobre ombro', 'Calcanhar sai em linha', 'Volta à guarda'], ART.backKick, 'Pontapé'),
    ex('Naeryo chagi', 180, 'Pontapé de martelo/descendente com controle da descida.', ['Sobe com controle', 'Desce sem bloquear joelho', 'Core ativo'], ART.frontKick, 'Pontapé'),
    ex('Bandae dollyo chagi', 180, 'Treina a rotação do pontapé giratório reverso lentamente.', ['Vê o alvo', 'Roda completo', 'Trajetória alta e limpa'], ART.roundKick, 'Pontapé'),
    ex('Huryeo chagi', 180, 'Pontapé chicote em velocidade controlada.', ['Perna relaxada', 'Recupera rápido', 'Usa rotação'], ART.roundKick, 'Pontapé'),
    ex('Dollyo chagi · duplo', 180, 'Pontapé circular duplo na mesma perna.', ['Mantém eixo', 'Recolhe entre repetições', 'Não cai para trás'], ART.roundKick, 'Pontapé'),
    ex('Ap chagi + dollyo chagi', 180, 'Combina pontapé frontal com circular.', ['Primeiro pontapé abre o caminho', 'Pé de apoio reage', 'Ritmo fluido'], ART.roundKick, 'Pontapé'),
    ex('Dollyo chagi + yop chagi', 180, 'Combinação circular seguida de lateral.', ['Reposiciona a anca', 'Guarda firme', 'Termina controlada'], ART.sideKick, 'Pontapé'),
    ex('Ap chagi + dwi chagi', 180, 'Frontal para medir distância, seguido de pontapé para trás.', ['Não precipites a volta', 'Vê antes de chutar', 'Linha reta'], ART.backKick, 'Pontapé'),
    ex('Yop chagi + dwi chagi', 180, 'Lateral seguido de pontapé para trás.', ['Recupera a câmara', 'Roda só o necessário', 'Equilíbrio primeiro'], ART.backKick, 'Pontapé'),
    ex('Dollyo chagi com passo', 180, 'Entra com passo e dispara dollyo chagi.', ['Passo curto', 'Anca rápida', 'Não percas a guarda'], ART.roundKick, 'Pontapé'),
    ex('Chagi · retenção', 180, 'Segura a perna no ar após o pontapé para ganhar controlo.', ['Core forte', 'Foco no equilíbrio', 'Respira'], ART.sideKick, 'Pontapé'),
    ex('Chagi · combinação livre', 240, 'Trabalho livre com 3 pontapés à escolha e execução limpa.', ['Escolhe bem', 'Mantém ritmo', 'Não sacrifiques técnica'], ART.roundKick, 'Pontapé'),
    ex('Mireo chagi', 150, 'Pontapé de empurrar à altura média, com extensão controlada.', ['Joelho sobe primeiro', 'Empurra sem hiperestender', 'Recolhe antes de pousar'], ART.frontKick, 'Pontapé'),
    ex('An chagi · arco baixo', 150, 'Desenha um arco de fora para dentro abaixo da cintura.', ['Pé de apoio firme', 'Arco claro', 'Altura moderada'], ART.roundKick, 'Pontapé'),
    ex('Bakkat chagi · arco baixo', 150, 'Desenha um arco de dentro para fora abaixo da cintura.', ['Distingue a direção', 'Tronco estável', 'Sem procurar altura'], ART.roundKick, 'Pontapé'),
    ex('Bitureo chagi · prévia lenta', 150, 'Explora o ângulo torcido com baixa amplitude e controlo.', ['Movimento pequeno', 'Sem forçar a anca', 'Regressa à guarda'], ART.frontKick, 'Pontapé'),
    ex('Twio ap chagi · salto mínimo', 150, 'Prévia do pontapé frontal com salto muito baixo e aterragem macia.', ['Salto mínimo', 'Aterra com joelhos macios', 'Pára se o espaço não for seguro'], ART.frontKick, 'Pontapé')
  ],
  poomsae: [
    ex('Taegeuk Il Jang · lento', 180, 'Executa a primeira poomsae lentamente para fixar bases e direções.', ['Direção clara', 'Sem subir o corpo', 'Termina no centro'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Il Jang', 180, 'Executa com ritmo de exame, sem pressa.', ['Respiração coordenada', 'Potência final', 'Olhar antes de virar'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk I Jang', 180, 'Trabalha linhas e altura das técnicas na segunda poomsae.', ['Transições limpas', 'Altura correta', 'Memória sólida'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk I Jang · completo', 180, 'Execução completa sem pausas.', ['Segue a linha', 'Bases firmes', 'Fim decidido'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Sam Jang', 180, 'Trabalha força e definição da terceira poomsae.', ['Anca ativa', 'Kihap quando aplicável', 'Mudanças rápidas'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Sam Jang · memória', 180, 'Revê a sequência completa com atenção às viragens.', ['Não adivinhas', 'Confirma bases', 'Respira'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Sa Jang A', 180, 'Treina a primeira metade da quarta poomsae.', ['Divide por blocos', 'Repete cada lado', 'Olhar primeiro'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Sa Jang B', 180, 'Treina a segunda metade da quarta poomsae.', ['Liga ao bloco anterior', 'Memoriza direção', 'Base antes da técnica'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Sa Jang', 210, 'Execução completa da quarta poomsae.', ['Controlo nas técnicas abertas', 'Sem hesitar', 'Final firme'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Oh Jang A', 180, 'Aprende a entrada e primeiros movimentos da quinta poomsae.', ['Poucos movimentos de cada vez', 'Marca direções', 'Repete com calma'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Oh Jang B', 180, 'Trabalha a zona intermédia da quinta poomsae.', ['Associa técnicas a direções', 'Sem saltar passos', 'Confirma bases'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Oh Jang', 210, 'Liga as partes e executa a quinta poomsae completa.', ['Continua após pequenos erros', 'Ritmo estável', 'Kihap decidido'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk 1–3 · sequência', 210, 'Executa seguidas as poomsae 1, 2 e 3.', ['Pouca pausa', 'Resistência mental', 'Mantém qualidade'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk 4–5 · sequência', 210, 'Executa seguidas a quarta e a quinta poomsae.', ['Memória forte', 'Transições limpas', 'Não voltes atrás'], ART.poomsae, 'Poomsae'),
    ex('Poomsae · correção', 150, 'Repete só a parte onde tens mais dificuldade.', ['Muito devagar primeiro', 'Depois normal', 'Uma correção de cada vez'], ART.poomsae, 'Poomsae'),
    ex('Poomsae · simulação de exame', 300, 'Simulação: anuncia e executa sem ajuda.', ['Saudação clara', 'Não recomeçar', 'Foco total'], ART.poomsae, 'Poomsae'),
    ex('Poomsae · saídas e viragens', 150, 'Trabalha só saídas, pivots e mudança de direção.', ['Olha antes', 'Pivota no chão', 'Base chega primeiro'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Yuk Jang', 240, 'Executa a sexta forma Taegeuk completa, mantendo controlo nas mudanças de direção.', ['Memoriza por blocos', 'Olha antes de virar', 'Termina cada técnica com precisão'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Chil Jang', 240, 'Executa a sétima forma Taegeuk completa, com bases sólidas e ritmo uniforme.', ['Centro baixo', 'Mãos e pernas terminam juntas', 'Não aceleres nas transições'], ART.poomsae, 'Poomsae'),
    ex('Taegeuk Pal Jang', 270, 'Executa a oitava forma Taegeuk completa, com potência, equilíbrio e direção clara.', ['Prepara cada mudança', 'Controla os pontapés', 'Final decidido'], ART.poomsae, 'Poomsae')
  ],
  cardio: [
    ex('Rondas de deslocamentos', 240, 'Intervalos de deslocamento em guarda, frente-trás-lados.', ['Guarda alta', 'Passos leves', 'Sem cruzar pés'], ART.cardio, 'Cardio'),
    ex('Combate sombra por rondas', 240, 'Rondas de combate sombra com ritmo crescente.', ['Finta, entra e sai', 'Usa combinações', 'Recupera em movimento'], ART.cardio, 'Cardio'),
    ex('Escada de pontapés', 240, '1-2-3-4 pontapés por lado em sequência.', ['Conta em voz alta', 'Técnica não cai', 'Troca lados'], ART.roundKick, 'Cardio'),
    ex('Sprint no sítio + guarda', 180, 'Explode no sítio e regressa à guarda técnica.', ['Pico curto', 'Recupera bem', 'Postura limpa'], ART.cardio, 'Cardio'),
    ex('Dollyo chagi por intervalos', 240, 'Blocos de dollyo chagi alternado por tempo.', ['Pé de apoio roda', 'Não percas eixo', 'Respira'], ART.roundKick, 'Cardio'),
    ex('Circuito joelho-soco', 180, 'Alterna joelhos altos com socos rápidos.', ['Coordenação', 'Tronco alto', 'Ritmo contínuo'], ART.punch, 'Cardio'),
    ex('Combate sombra com alvos imaginários', 240, 'Visualiza distância e alvos durante a ronda.', ['Vê o adversário', 'Muda ângulos', 'Não pares'], ART.cardio, 'Cardio'),
    ex('Pontapés por contagem', 180, 'Séries rápidas por contagem curta do treinador.', ['Ataca só quando ouves', 'Recolhe rápido', 'Guarda sempre'], ART.frontKick, 'Cardio'),
    ex('Escada de deslocamentos', 180, 'Padrões curtos de pés: in-out, lateral, diagonal.', ['Pés rápidos', 'Centro baixo', 'Ombros relaxados'], ART.cardio, 'Cardio'),
    ex('Shadow com explosões de 10 s', 240, 'Alterna 10 segundos rápidos com 20 controlados.', ['Explode sem desorganizar', 'Boa recuperação', 'Foco'], ART.cardio, 'Cardio')
  ],
  strength: [
    ex('Agachamento controlado', 120, 'Agachamento técnico com controlo total.', ['Joelhos acompanham pés', 'Peito aberto', 'Sobe com firmeza'], ART.squat, 'Força'),
    ex('Agachamento pulsado', 120, 'Pequenas pulsações no fundo do agachamento.', ['Mantém forma', 'Não afundes a lombar', 'Queima controlada'], ART.squat, 'Força'),
    ex('Agachamento dividido', 120, 'Trabalho unilateral para estabilidade e força.', ['Joelho alinhado', 'Base estável', 'Tronco vertical'], ART.squat, 'Força'),
    ex('Lunge para trás', 120, 'Avanço para trás com controlo e equilíbrio.', ['Passo suficiente', 'Empurra o chão', 'Anca estável'], ART.squat, 'Força'),
    ex('Agachamento isométrico na parede', 120, 'Isometria de pernas para resistência.', ['Costas na parede', 'Joelhos a 90°', 'Respira'], ART.squat, 'Força'),
    ex('Elevação de gémeos', 90, 'Sobe e desce nos gémeos com pausa no topo.', ['Pés paralelos', 'Controla descida', 'Core ativo'], ART.squat, 'Força'),
    ex('Flexões clássicas', 120, 'Flexões completas ou adaptadas.', ['Corpo em prancha', 'Cotovelos controlados', 'Sem cair a anca'], ART.plank, 'Força'),
    ex('Flexões estreitas', 120, 'Versão mais focada em tríceps e controlo.', ['Mãos mais juntas', 'Cotovelo perto do corpo', 'Corpo alinhado'], ART.plank, 'Força'),
    ex('Ponte de glúteos', 120, 'Eleva a bacia e ativa glúteos.', ['Não arqueies a lombar', 'Pés paralelos', 'Pausa no topo'], ART.squat, 'Força'),
    ex('Ponte unilateral', 120, 'Ponte com uma perna de cada vez.', ['Bacia nivelada', 'Subida controlada', 'Troca lados'], ART.squat, 'Força'),
    ex('Prancha frontal', 120, 'Core estável em apoio de antebraços.', ['Abdómen firme', 'Anca nivelada', 'Empurra o chão'], ART.plank, 'Core'),
    ex('Prancha lateral', 90, 'Core lateral e estabilidade da anca.', ['Linha reta', 'Pescoço longo', 'Anca sobe'], ART.plank, 'Core'),
    ex('Dead bug controlado', 120, 'Coordenação de core com lombar estável.', ['Lombar assente', 'Movimento lento', 'Respira'], ART.plank, 'Core'),
    ex('Posição hollow isométrica', 90, 'Posição oca para força central.', ['Costas baixas no chão', 'Braços ativos', 'Respiração curta'], ART.plank, 'Core'),
    ex('Bird dog controlado', 120, 'Extensão alternada em quatro apoios.', ['Anca quadrada', 'Movimento longo', 'Sem rodar o tronco'], ART.plank, 'Core'),
    ex('Superman controlado', 90, 'Eleva braços e pernas com controlo no chão.', ['Pescoço neutro', 'Sobe pouco', 'Pausa curta'], ART.plank, 'Core'),
    ex('Peso morto unilateral sem carga', 120, 'Equilíbrio e força posterior numa perna.', ['Anca roda pouco', 'Costas longas', 'Pé de apoio firme'], ART.squat, 'Força'),
    ex('Escaladores controlados', 120, 'Core e cardio em ritmo técnico.', ['Anca baixa', 'Passada curta', 'Core firme'], ART.plank, 'Core')
  ],
  stretch: [
    ex('Flexor da anca em meio-ajoelhado', 90, 'Alongamento do flexor da anca com bacia neutra.', ['Contrai glúteo', 'Não arqueies', 'Respira'], ART.stretch, 'Alongamento'),
    ex('Quadríceps em pé', 90, 'Alongamento do quadríceps com joelhos juntos.', ['Bacia alinhada', 'Segura suave', 'Sem puxar demais'], ART.stretch, 'Alongamento'),
    ex('Flexão frontal sentada', 90, 'Alongamento posterior sentado com pernas unidas.', ['Costas longas', 'Pé puxado', 'Inclina pela anca'], ART.stretch, 'Alongamento'),
    ex('Borboleta', 90, 'Alongamento leve dos adutores em posição sentada.', ['Peito aberto', 'Joelhos relaxam', 'Sem empurrar forte'], ART.stretch, 'Alongamento'),
    ex('Abertura lateral sentada', 90, 'Straddle confortável para adutores.', ['Ponta dos pés ativa', 'Inclina sem colapsar', 'Respira'], ART.stretch, 'Alongamento'),
    ex('Alongamento frog', 90, 'Alongamento de adutores no chão.', ['Sem dor aguda', 'Anca neutra', 'Respira'], ART.stretch, 'Alongamento'),
    ex('Alongamento de glúteo em pigeon adaptado', 90, 'Alongamento de glúteo e anca.', ['Mantém quadris nivelados', 'Sem forçar joelho', 'Usa apoio se precisares'], ART.stretch, 'Alongamento'),
    ex('Posteriores com pé elevado', 90, 'Alongamento dos posteriores com apoio simples.', ['Costas direitas', 'Pouca altura basta', 'Não prender joelho'], ART.stretch, 'Alongamento'),
    ex('Adutores dinâmicos finais', 90, 'Pequenas transferências laterais para soltar adutores.', ['Movimento leve', 'Respiração calma', 'Sem pressa'], ART.stretch, 'Alongamento'),
    ex('Tornozelo e gémeo na parede', 90, 'Alongamento do gémeo e mobilidade do tornozelo.', ['Calcanhar assente', 'Joelho estende', 'Troca lados'], ART.stretch, 'Alongamento'),
    ex('Respiração de recuperação', 60, 'Respira fundo e desacelera o corpo.', ['Inspira 4', 'Expira 6', 'Baixa pulsação'], ART.stretch, 'Recuperação'),
    ex('Alongamento do pescoço e ombros', 60, 'Liberta tensão no final do treino.', ['Sem puxar demais', 'Ombros relaxam', 'Respiração suave'], ART.stretch, 'Alongamento'),
    ex('Mobilidade de tornozelo na parede', 75, 'Leva o joelho à frente mantendo o calcanhar completamente apoiado.', ['Joelho acompanha os dedos', 'Calcanhar no chão', 'Troca lados'], ART.stretch, 'Alongamento'),
    ex('Gémeo com apoio na parede', 75, 'Afasta uma perna para trás e alonga o gémeo com o pé alinhado.', ['Calcanhar assente', 'Pé aponta à frente', 'Sem dor'], ART.stretch, 'Alongamento'),
    ex('Isquiotibiais unilateral com pé elevado', 90, 'Inclina pela anca sobre uma perna apoiada a baixa altura.', ['Costas compridas', 'Joelho solto', 'Pouca altura basta'], ART.stretch, 'Alongamento'),
    ex('Joelho ao peito no solo', 75, 'Aproxima um joelho do peito enquanto a outra perna relaxa.', ['Lombar confortável', 'Ombros soltos', 'Troca lados'], ART.stretch, 'Alongamento'),
    ex('Pigeon com tronco elevado', 90, 'Mantém o tronco alto numa posição adaptada de alongamento do glúteo.', ['Quadris nivelados', 'Protege o joelho', 'Usa apoio'], ART.stretch, 'Alongamento'),
    ex('Frog com recuo suave', 90, 'Na posição frog, recua apenas até sentires tensão confortável.', ['Sem dor aguda', 'Anca neutra', 'Movimento pequeno'], ART.stretch, 'Alongamento'),
    ex('Ombro cruzado alternado', 60, 'Cruza um braço à frente do peito e alterna os lados.', ['Ombro baixo', 'Não forces o cotovelo', 'Respira'], ART.stretch, 'Alongamento'),
    ex('Inclinação lateral do pescoço', 60, 'Inclina suavemente a cabeça para cada lado sem puxar.', ['Ombros baixos', 'Amplitude pequena', 'Sem rodar'], ART.stretch, 'Alongamento'),
    ex('Borboleta com coluna alta', 90, 'Mantém as plantas dos pés juntas e cresce pela coluna.', ['Sem empurrar joelhos', 'Peito aberto', 'Respiração calma'], ART.stretch, 'Alongamento'),
    ex('Cão voltado para baixo', 75, 'Alonga gémeos, posteriores e a cadeia posterior com apoio das mãos.', ['Empurra o chão', 'Costas compridas', 'Calcanhares descem sem forçar'], ART.stretch, 'Alongamento'),
    ex('Postura da criança', 75, 'Senta a anca na direção dos calcanhares e alonga os braços à frente.', ['Testa apoiada', 'Ombros relaxados', 'Respira para as costas'], ART.stretch, 'Alongamento'),
    ex('Ombros em Gomukhasana', 75, 'Alonga ombros e parte superior das costas com os braços acima da cabeça.', ['Costelas controladas', 'Cotovelos aproximam', 'Sem dor no ombro'], ART.stretch, 'Alongamento'),
    ex('Afundo baixo com braços elevados', 90, 'Abre a frente da anca mantendo o joelho da frente estável.', ['Bacia aponta à frente', 'Joelho sobre o pé', 'Não arqueies a lombar'], ART.stretch, 'Alongamento'),
    ex('Posteriores deitado com perna elevada', 90, 'Deitado, aproxima uma perna elevada mantendo a bacia apoiada.', ['Outra perna relaxa', 'Joelho pode fletir', 'Troca lados'], ART.stretch, 'Alongamento'),
    ex('Afundo com rotação', 90, 'Combina abertura da anca com rotação controlada do tronco.', ['Joelho alinhado', 'Coluna longa', 'Roda sem forçar'], ART.stretch, 'Alongamento'),
    ex('Respiração 4–6 de recuperação', 60, 'Inspira em quatro tempos e expira em seis para reduzir o ritmo.', ['Mandíbula solta', 'Ombros relaxados', 'Expiração longa'], ART.stretch, 'Recuperação')
  ]
};

const PUBLIC_EXERCISE_REPO = 'https://github.com/yuhonas/free-exercise-db';
const PUBLIC_EXERCISE_IMAGE_BASE = 'https://github.com/yuhonas/free-exercise-db/blob/main/exercises/';
function publicExercisePhotos(id, label) {
  return [0, 1].map((step, index) => ({ src:`${PUBLIC_EXERCISE_IMAGE_BASE}${id}/${step}.jpg?raw=true`, label:`${index + 1} · ${label}` }));
}
const PUBLIC_DOMAIN_EXERCISE_MEDIA = {
  'Abdominal três quartos':publicExercisePhotos('3_4_Sit-Up','Abdominal 3/4'),
  'Bicicleta abdominal':publicExercisePhotos('Air_Bike','Bicicleta abdominal'),
  'Toques alternados aos calcanhares':publicExercisePhotos('Alternate_Heel_Touchers','Toque ao calcanhar'),
  'Lunges a caminhar':publicExercisePhotos('Bodyweight_Walking_Lunge','Lunge a caminhar'),
  'Elevação de pernas e bacia':publicExercisePhotos('Bottoms_Up','Elevação da bacia'),
  'Cocoon abdominal':publicExercisePhotos('Cocoons','Cocoon'),
  'Crunch cruzado':publicExercisePhotos('Cross-Body_Crunch','Crunch cruzado'),
  'Crunch curto':publicExercisePhotos('Crunches','Crunch'),
  'Flexão declinada':publicExercisePhotos('Decline_Push-Up','Flexão declinada'),
  'Cotovelo ao joelho':publicExercisePhotos('Elbow_to_Knee','Cotovelo ao joelho'),
  'Batimentos de pernas no chão':publicExercisePhotos('Flutter_Kicks','Flutter kicks'),
  'Extensão de glúteo em quatro apoios':publicExercisePhotos('Glute_Kickback','Extensão de glúteo'),
  'Inchworm':publicExercisePhotos('Inchworm','Inchworm'),
  'Abdominal canivete':publicExercisePhotos('Jackknife_Sit-Up','Abdominal canivete'),
  'Elevação posterior da perna em pé':publicExercisePhotos('Leg_Lift','Elevação da perna'),
  'Flexões com mãos abertas':publicExercisePhotos('Pushups','Flexão'),
  'Crunch inverso':publicExercisePhotos('Reverse_Crunch','Crunch inverso'),
  'Saltos em tesoura':publicExercisePhotos('Scissors_Jump','Salto em tesoura'),
  'Elevação lateral da perna':publicExercisePhotos('Side_Leg_Raises','Elevação lateral'),
  'Spider crawl':publicExercisePhotos('Spider_Crawl','Spider crawl'),
  'Agachamento unilateral para banco':publicExercisePhotos('Single-Leg_High_Box_Squat','Agachamento unilateral'),
  'Salto em comprimento parado':publicExercisePhotos('Standing_Long_Jump','Salto em comprimento'),
  'Step-up com joelho alto':publicExercisePhotos('Step-up_with_Knee_Raise','Step-up com joelho'),
  'Prancha lateral em mão':publicExercisePhotos('Side_Bridge','Prancha lateral'),
  'Flexão pliométrica':publicExercisePhotos('Plyo_Push-up','Flexão pliométrica'),
  'Salto em estrela de potência':publicExercisePhotos('Star_Jump','Salto em estrela'),
  'Prancha alta':publicExercisePhotos('Plank','Prancha'),
  'Posteriores em 90/90':publicExercisePhotos('90_90_Hamstring','Posteriores 90/90'),
  'Quadríceps em quatro apoios':publicExercisePhotos('All_Fours_Quad_Stretch','Quadríceps'),
  'Figura quatro deitado':publicExercisePhotos('Ankle_On_The_Knee','Figura quatro'),
  'Círculos amplos dos braços':publicExercisePhotos('Arm_Circles','Círculos dos braços'),
  'Gémeo com mãos na parede':publicExercisePhotos('Calf_Stretch_Hands_Against_Wall','Gémeo na parede'),
  'Peitoral e ombro com bastão':publicExercisePhotos('Chest_And_Front_Of_Shoulder_Stretch','Peitoral e ombro'),
  'Abertura dinâmica do peitoral':publicExercisePhotos('Dynamic_Chest_Stretch','Abertura do peitoral'),
  'Círculos de cotovelo':publicExercisePhotos('Elbow_Circles','Círculos de cotovelo'),
  'Virilha e costas sentado':publicExercisePhotos('Groin_and_Back_Stretch','Virilha e costas'),
  'Posteriores em pé relaxado':publicExercisePhotos('Hamstring_Stretch','Posteriores em pé'),
  'Círculos de anca em quatro apoios':publicExercisePhotos('Hip_Circles_prone','Círculos de anca'),
  'Joelho cruzado sobre o corpo':publicExercisePhotos('Knee_Across_The_Body','Rotação de glúteo'),
  'Antebraços ajoelhado':publicExercisePhotos('Kneeling_Forearm_Stretch','Antebraços'),
  'Flexor da anca ajoelhado dinâmico':publicExercisePhotos('Kneeling_Hip_Flexor','Flexor da anca'),
  'Rotação de costas média':publicExercisePhotos('Middle_Back_Stretch','Rotação das costas'),
  'Alongamento acima da cabeça':publicExercisePhotos('Overhead_Stretch','Alongamento superior'),
  'Posterior sentado unilateral':publicExercisePhotos('Seated_Hamstring','Posterior sentado'),
  'Alongamento lateral deitado':publicExercisePhotos('Side-Lying_Floor_Stretch','Cadeia lateral'),
  'Pescoço lateral assistido':publicExercisePhotos('Side_Neck_Stretch','Pescoço lateral'),
  'Gastrocnémio em pé':publicExercisePhotos('Standing_Gastrocnemius_Calf_Stretch','Gastrocnémio'),
  'Posterior e gémeo com apoio':publicExercisePhotos('Standing_Hamstring_and_Calf_Stretch','Posterior e gémeo'),
  'Inclinação pélvica em pé':publicExercisePhotos('Standing_Pelvic_Tilt','Inclinação pélvica'),
  'Costas superiores com mãos unidas':publicExercisePhotos('Upper_Back_Stretch','Costas superiores'),
  'Alongamento global em afundo':publicExercisePhotos('Worlds_Greatest_Stretch','Alongamento global'),
  'Círculos de punho':publicExercisePhotos('Wrist_Circles','Círculos de punho'),
  'Alongamento sentado acima da cabeça':publicExercisePhotos('Seated_Overhead_Stretch','Alongamento sentado'),
  'Tesoura dinâmica de posteriores':publicExercisePhotos('Scissor_Kick','Tesoura de posteriores')
};

library.strength.push(
  ex('Abdominal três quartos',90,'Eleva o tronco até perto da vertical e desce com controlo.',['Pés firmes','Não puxes o pescoço','Expira ao subir'],ART.plank,'Core'),
  ex('Bicicleta abdominal',90,'Alterna cotovelo e joelho opostos sem perder o apoio lombar.',['Lombar assente','Roda o tronco','Ritmo controlado'],ART.plank,'Core'),
  ex('Toques alternados aos calcanhares',75,'Inclina lateralmente o tronco para tocar cada calcanhar.',['Ombros elevados','Movimento lateral','Sem puxar o pescoço'],ART.plank,'Core'),
  ex('Lunges a caminhar',120,'Avança alternadamente mantendo joelhos e pés alinhados.',['Passo suficiente','Tronco alto','Empurra pelo calcanhar'],ART.squat,'Força'),
  ex('Elevação de pernas e bacia',90,'Eleva as pernas e termina com uma pequena elevação da bacia.',['Sem balanço','Lombar controlada','Desce devagar'],ART.plank,'Core'),
  ex('Cocoon abdominal',90,'Estende braços e pernas e fecha o corpo trazendo os joelhos ao peito.',['Controla a extensão','Expira ao fechar','Lombar estável'],ART.plank,'Core'),
  ex('Crunch cruzado',90,'Leva o ombro na direção do joelho oposto.',['Roda pelas costelas','Pés apoiados','Alterna lados'],ART.plank,'Core'),
  ex('Crunch curto',75,'Eleva apenas as omoplatas mantendo a lombar no chão.',['Queixo afastado','Expira ao subir','Não puxes a cabeça'],ART.plank,'Core'),
  ex('Flexão declinada',90,'Faz flexões com os pés elevados num apoio estável.',['Corpo alinhado','Apoio seguro','Cotovelos controlados'],ART.plank,'Força'),
  ex('Cotovelo ao joelho',90,'Alterna a aproximação do cotovelo ao joelho com o core firme.',['Não colapses o peito','Movimento completo','Respira'],ART.plank,'Core'),
  ex('Batimentos de pernas no chão',75,'Faz pequenos batimentos alternados com as pernas estendidas.',['Lombar assente','Pernas baixas só com controlo','Movimento curto'],ART.plank,'Core'),
  ex('Extensão de glúteo em quatro apoios',90,'Empurra um pé para trás sem rodar a bacia.',['Coluna neutra','Bacia quadrada','Contrai o glúteo'],ART.squat,'Força'),
  ex('Inchworm',90,'Caminha com as mãos até à prancha e regressa aos pés.',['Anca controlada','Mãos firmes','Joelhos podem fletir'],ART.plank,'Força'),
  ex('Abdominal canivete',75,'Eleva simultaneamente pernas e tronco procurando aproximar as mãos dos pés.',['Sem impulso','Controla a descida','Adapta com joelhos fletidos'],ART.plank,'Core'),
  ex('Elevação posterior da perna em pé',90,'Eleva uma perna para trás mantendo o tronco vertical.',['Segura num apoio','Não arqueies a lombar','Troca lados'],ART.squat,'Força'),
  ex('Flexões com mãos abertas',90,'Executa flexões com as mãos ligeiramente mais afastadas que os ombros.',['Corpo em bloco','Peito entre as mãos','Amplitude segura'],ART.plank,'Força'),
  ex('Crunch inverso',90,'Enrola a bacia aproximando os joelhos do peito.',['Sem balanço','Movimento pequeno','Desce com controlo'],ART.plank,'Core'),
  ex('Saltos em tesoura',90,'Alterna a posição das pernas no ar e aterra em lunge curto.',['Aterra suave','Joelho alinhado','Começa devagar'],ART.squat,'Força'),
  ex('Elevação lateral da perna',90,'Eleva a perna lateralmente sem inclinar o tronco.',['Pé aponta à frente','Anca nivelada','Troca lados'],ART.squat,'Força'),
  ex('Spider crawl',90,'Em prancha baixa, aproxima alternadamente o joelho do cotovelo.',['Anca baixa','Ombros estáveis','Passo controlado'],ART.plank,'Core'),
  ex('Agachamento unilateral para banco',90,'Senta num apoio alto usando uma perna e regressa com controlo.',['Apoio estável','Joelho segue o pé','Usa assistência'],ART.squat,'Força'),
  ex('Salto em comprimento parado',75,'Projeta o corpo à frente e aterra com os dois pés.',['Braços impulsionam','Aterra macio','Espaço livre'],ART.squat,'Força'),
  ex('Step-up com joelho alto',90,'Sobe a um apoio e termina equilibrada com o joelho oposto elevado.',['Banco estável','Empurra pelo pé de cima','Controla a descida'],ART.squat,'Força'),
  ex('Prancha lateral em mão',75,'Mantém o corpo alinhado apoiado numa mão e no bordo do pé.',['Punho sob ombro','Anca alta','Troca lados'],ART.plank,'Core'),
  ex('Flexão pliométrica',60,'Empurra o chão de forma explosiva e aterra com cotovelos suaves.',['Só se dominas flexões','Aterra suave','Poucas repetições limpas'],ART.plank,'Força'),
  ex('Salto em estrela de potência',75,'Salta abrindo braços e pernas e regressa a uma aterragem estável.',['Espaço livre','Aterra suave','Core firme'],ART.squat,'Força'),
  ex('Prancha alta',90,'Mantém braços estendidos e corpo numa linha contínua.',['Mãos sob ombros','Empurra o chão','Anca neutra'],ART.plank,'Core')
);

library.stretch.push(
  ex('Posteriores em 90/90',75,'Deitada, mantém a coxa a noventa graus e estende o joelho.',['Coxa imóvel','Extende sem dor','Troca lados'],ART.stretch,'Alongamento'),
  ex('Quadríceps em quatro apoios',75,'Em quatro apoios, segura o pé atrás para alongar a coxa.',['Protege o joelho','Anca estende','Sem torcer'],ART.stretch,'Alongamento'),
  ex('Figura quatro deitado',90,'Cruza o tornozelo sobre o joelho oposto e aproxima as pernas.',['Pé ativo','Ombros soltos','Troca lados'],ART.stretch,'Alongamento'),
  ex('Círculos amplos dos braços',60,'Desenha círculos progressivos com ambos os braços.',['Ombros baixos','Amplitude gradual','Muda o sentido'],ART.stretch,'Mobilidade'),
  ex('Gémeo com mãos na parede',75,'Inclina o corpo à parede mantendo o calcanhar de trás apoiado.',['Pé aponta à frente','Calcanhar no chão','Troca lados'],ART.stretch,'Alongamento'),
  ex('Peitoral e ombro com bastão',75,'Leva um bastão leve acima e atrás da cabeça até amplitude confortável.',['Pega larga','Sem dor','Costelas controladas'],ART.stretch,'Mobilidade'),
  ex('Abertura dinâmica do peitoral',60,'Abre os braços para trás e cruza-os suavemente à frente.',['Movimento fluido','Ombros baixos','Sem impulso excessivo'],ART.stretch,'Mobilidade'),
  ex('Círculos de cotovelo',60,'Com as mãos nos ombros, desenha círculos com os cotovelos.',['Círculos amplos','Pescoço solto','Muda o sentido'],ART.stretch,'Mobilidade'),
  ex('Virilha e costas sentado',90,'Sentada com pés juntos, inclina o tronco mantendo a coluna comprida.',['Sem empurrar joelhos','Respira','Amplitude confortável'],ART.stretch,'Alongamento'),
  ex('Posteriores em pé relaxado',75,'Inclina pela anca com um joelho ligeiramente fletido.',['Costas longas','Sem saltar','Troca lados'],ART.stretch,'Alongamento'),
  ex('Círculos de anca em quatro apoios',75,'Desenha círculos com um joelho mantendo o tronco estável.',['Bacia controlada','Movimento lento','Troca lados'],ART.stretch,'Mobilidade'),
  ex('Joelho cruzado sobre o corpo',90,'Deitada, leva um joelho dobrado para o lado oposto.',['Ombros no chão','Roda suavemente','Troca lados'],ART.stretch,'Alongamento'),
  ex('Antebraços ajoelhado',60,'Apoia as palmas com dedos voltados para os joelhos e recua suavemente.',['Cotovelos suaves','Pouco peso','Sem dor no punho'],ART.stretch,'Alongamento'),
  ex('Flexor da anca ajoelhado dinâmico',75,'Avança e recua num meio-ajoelhado com a bacia neutra.',['Contrai glúteo','Sem arquear','Troca lados'],ART.stretch,'Mobilidade'),
  ex('Rotação de costas média',60,'Roda o tronco para cada lado mantendo a bacia estável.',['Coluna alta','Sem forçar','Respira'],ART.stretch,'Mobilidade'),
  ex('Alongamento acima da cabeça',60,'Entrelaça as mãos e cresce com os braços acima da cabeça.',['Costelas controladas','Ombros baixos','Respira'],ART.stretch,'Alongamento'),
  ex('Posterior sentado unilateral',90,'Estende uma perna e inclina o tronco pela anca.',['Pé ativo','Costas longas','Troca lados'],ART.stretch,'Alongamento'),
  ex('Alongamento lateral deitado',75,'Deitada de lado, alonga braço e perna para criar comprimento lateral.',['Corpo alinhado','Respiração calma','Troca lados'],ART.stretch,'Alongamento'),
  ex('Pescoço lateral assistido',60,'Inclina a cabeça e usa apenas o peso leve da mão.',['Ombro oposto baixo','Sem puxar','Troca lados'],ART.stretch,'Alongamento'),
  ex('Gastrocnémio em pé',75,'Com uma perna atrás, mantém joelho estendido e calcanhar apoiado.',['Pés paralelos','Anca à frente','Troca lados'],ART.stretch,'Alongamento'),
  ex('Posterior e gémeo com apoio',90,'Apoia o calcanhar baixo e inclina pela anca com a ponta do pé elevada.',['Pouca altura','Coluna longa','Troca lados'],ART.stretch,'Alongamento'),
  ex('Inclinação pélvica em pé',60,'Alterna suavemente anteversão e retroversão da bacia.',['Joelhos soltos','Movimento pequeno','Sem dor lombar'],ART.stretch,'Mobilidade'),
  ex('Costas superiores com mãos unidas',60,'Empurra as mãos à frente e afasta as omoplatas.',['Queixo neutro','Ombros baixos','Expira'],ART.stretch,'Alongamento'),
  ex('Alongamento global em afundo',90,'Liga afundo, rotação e extensão da perna da frente.',['Move por etapas','Joelho alinhado','Troca lados'],ART.stretch,'Mobilidade'),
  ex('Círculos de punho',45,'Roda os punhos lentamente em ambos os sentidos.',['Dedos soltos','Círculos controlados','Sem dor'],ART.stretch,'Mobilidade'),
  ex('Alongamento sentado acima da cabeça',60,'Sentada, eleva os braços e alonga toda a lateral do tronco.',['Coluna alta','Costelas controladas','Respira'],ART.stretch,'Alongamento'),
  ex('Tesoura dinâmica de posteriores',75,'Alterna uma perna à frente e inclina ligeiramente o tronco.',['Calcanhar à frente','Costas longas','Movimento suave'],ART.stretch,'Mobilidade')
);

// v49 · Catálogo sem exercícios visualmente incompletos.
// Cada entrada adicionada abaixo usa duas fotografias públicas e específicas
// do movimento, sem reutilizar a mesma demonstração noutro exercício.
const UNSUPPORTED_VISUAL_EXERCISES = new Set([
  'Círculos de tornozelo','Joelho sobre o pé','Abra e fecha a anca','Balanços frontais','Balanços laterais',
  'Agachamento cossaco lateral','Lunges dinâmicos','Lunges com rotação','Agachamento profundo com apoio',
  'Balanço de adutores em quatro apoios','Rotações de ombro','Rotações de tronco',
  'Alongamento dinâmico de isquiotibiais','Alongamento dinâmico do quadríceps','Gato-camelo',
  'Combate sombra com alvos imaginários','Shadow com explosões de 10 s',
  'Agachamento controlado','Prancha frontal'
]);
['warmups','mobility','cardio','strength','stretch'].forEach(key => {
  library[key] = library[key].filter(item => !UNSUPPORTED_VISUAL_EXERCISES.has(item.name));
});

Object.assign(PUBLIC_DOMAIN_EXERCISE_MEDIA, {
  'Círculos de tornozelo com apoio':publicExercisePhotos('Ankle_Circles','Círculos de tornozelo'),
  'Mobilidade gato para costas':publicExercisePhotos('Cat_Stretch','Mobilidade da coluna'),
  'Afundo cruzado de mobilidade':publicExercisePhotos('Crossover_Reverse_Lunge','Afundo cruzado'),
  'Extensão lombar suave no chão':publicExercisePhotos('Lower_Back_Curl','Extensão lombar'),
  'Joelhos ao peito para costas':publicExercisePhotos('Hug_Knees_To_Chest','Joelhos ao peito'),
  'Flexão relaxada aos pés':publicExercisePhotos('Standing_Toe_Touches','Flexão aos pés'),
  'Banda iliotibial e glúteo':publicExercisePhotos('IT_Band_and_Glute_Stretch','Banda iliotibial e glúteo'),
  'Libertação de adutores com rolo':publicExercisePhotos('Adductor','Adutores com rolo'),
  'Agachamento livre':publicExercisePhotos('Bodyweight_Squat','Agachamento livre'),
  'Ponte de glúteo unilateral':publicExercisePhotos('Single_Leg_Glute_Bridge','Ponte unilateral'),
  'Afundo búlgaro com halteres':publicExercisePhotos('Split_Squat_with_Dumbbells','Afundo búlgaro'),
  'Agachamento goblet':publicExercisePhotos('Goblet_Squat','Agachamento goblet'),
  'Afundo dividido sem carga':publicExercisePhotos('Split_Squats','Afundo dividido'),
  'Agachamento com salto livre':publicExercisePhotos('Freehand_Jump_Squat','Agachamento com salto'),
  'Salto lateral numa perna':publicExercisePhotos('Single-Leg_Lateral_Hop','Salto lateral unilateral'),
  'Passada diagonal saltada':publicExercisePhotos('Alternate_Leg_Diagonal_Bound','Passada diagonal'),
  'Elevação de gémeos em pé':publicExercisePhotos('Standing_Calf_Raises','Elevação de gémeos'),
  'Salto foguete':publicExercisePhotos('Rocket_Jump','Salto vertical'),
  'Salto lateral com aceleração':publicExercisePhotos('Side_Hop-Sprint','Salto lateral e aceleração'),
  'Afundo sprint alternado':publicExercisePhotos('Lunge_Sprint','Afundo alternado'),
  'Libertação lombar com rolo':publicExercisePhotos('Lower_Back-SMR','Costas lombares com rolo'),
  'Libertação de quadríceps com rolo':publicExercisePhotos('Quadriceps-SMR','Quadríceps com rolo'),
  'Libertação do tibial anterior':publicExercisePhotos('Anterior_Tibialis-SMR','Tibial anterior'),
  'Rotação de anca deitada':publicExercisePhotos('Lying_Crossover','Rotação de anca'),
  'Quadríceps com faixa':publicExercisePhotos('Quad_Stretch','Alongamento de quadríceps')
});

library.mobility.push(
  ex('Círculos de tornozelo com apoio',60,'Eleva um pé e desenha círculos amplos e lentos com o tornozelo.',['Apoio estável','Movimento no tornozelo','Troca lados'],ART.stretch,'Mobilidade'),
  ex('Mobilidade gato para costas',75,'Em quatro apoios, arredonda a coluna e regressa lentamente à posição neutra.',['Mãos sob ombros','Move vértebra a vértebra','Respira'],ART.stretch,'Mobilidade'),
  ex('Afundo cruzado de mobilidade',75,'Cruza uma perna atrás e baixa com controlo para mobilizar anca e costas.',['Passo confortável','Joelho alinhado','Troca lados'],ART.stretch,'Mobilidade'),
  ex('Extensão lombar suave no chão',60,'Deitada de barriga para baixo, eleva suavemente o peito usando as costas.',['Pescoço neutro','Sem empurrar com as mãos','Amplitude pequena'],ART.stretch,'Mobilidade'),
  ex('Joelhos ao peito para costas',75,'Deitada, aproxima os dois joelhos do peito e relaxa a zona lombar.',['Braços por baixo dos joelhos','Ombros soltos','Sem balanço'],ART.stretch,'Mobilidade'),
  ex('Flexão relaxada aos pés',75,'Inclina o tronco pela anca e deixa braços e cabeça relaxarem.',['Joelhos suaves','Sem puxar','Sobe devagar'],ART.stretch,'Mobilidade'),
  ex('Banda iliotibial e glúteo',90,'Deitada, leva uma perna estendida através do corpo com auxílio de uma faixa.',['Ombros no chão','Movimento lento','Troca lados'],ART.stretch,'Mobilidade'),
  ex('Libertação de adutores com rolo',90,'Apoia a parte interna da coxa no rolo e percorre a zona com controlo.',['Pressão tolerável','Evita o joelho','Troca lados'],ART.stretch,'Mobilidade')
);

library.strength.push(
  ex('Agachamento livre',90,'Senta a anca para trás e baixa mantendo o peito alto.',['Joelhos seguem os pés','Peso no pé inteiro','Sobe com controlo'],ART.squat,'Força'),
  ex('Ponte de glúteo unilateral',90,'Eleva a bacia apoiando um pé e mantendo a outra perna recolhida.',['Bacia nivelada','Empurra pelo calcanhar','Troca lados'],ART.squat,'Força'),
  ex('Afundo búlgaro com halteres',90,'Com o pé traseiro elevado, desce verticalmente sobre a perna da frente.',['Joelho alinhado','Tronco firme','Carga leve'],ART.squat,'Força'),
  ex('Agachamento goblet',90,'Segura uma carga junto ao peito e agacha entre as pernas.',['Peito alto','Cotovelos dentro','Pés firmes'],ART.squat,'Força'),
  ex('Afundo dividido sem carga',90,'Mantém os pés desencontrados e baixa o joelho traseiro com controlo.',['Base estável','Desce vertical','Troca lados'],ART.squat,'Força'),
  ex('Agachamento com salto livre',75,'Agacha e acelera para um salto vertical, aterrando suavemente.',['Pouca altura basta','Aterra flexível','Reinicia a base'],ART.squat,'Força'),
  ex('Salto lateral numa perna',60,'Salta lateralmente sobre uma linha e estabiliza na mesma perna.',['Joelho suave','Anca estável','Troca lados'],ART.squat,'Força'),
  ex('Passada diagonal saltada',60,'Impulsiona uma perna e desloca-te na diagonal, alternando a aterragem.',['Aterra leve','Olhar em frente','Controla a distância'],ART.squat,'Força'),
  ex('Elevação de gémeos em pé',75,'Sobe aos dedos dos pés e desce os calcanhares lentamente.',['Tornozelos alinhados','Pausa em cima','Sem balanço'],ART.squat,'Força'),
  ex('Salto foguete',60,'Parte de um quarto de agachamento e estende o corpo num salto vertical.',['Braços ajudam','Aterra silencioso','Joelhos alinhados'],ART.squat,'Força'),
  ex('Salto lateral com aceleração',60,'Faz um salto lateral controlado e acelera em frente por poucos passos.',['Espaço livre','Aterra antes de acelerar','Alterna lados'],ART.squat,'Força'),
  ex('Afundo sprint alternado',60,'Salta a partir do afundo e troca as pernas no ar.',['Começa baixo','Aterra no alinhamento','Reduz o ritmo se necessário'],ART.squat,'Força')
);

library.stretch.push(
  ex('Libertação lombar com rolo',90,'Apoia os músculos ao lado da lombar no rolo sem pressionar a coluna.',['Movimento curto','Pressão confortável','Tronco apoiado'],ART.stretch,'Alongamento'),
  ex('Libertação de quadríceps com rolo',90,'Desliza a coxa sobre o rolo entre a anca e acima do joelho.',['Abdómen ativo','Evita o joelho','Troca lados'],ART.stretch,'Alongamento'),
  ex('Libertação do tibial anterior',75,'Percorre suavemente a musculatura exterior da canela com um rolo pequeno.',['Pressão leve','Evita o osso','Troca lados'],ART.stretch,'Alongamento'),
  ex('Rotação de anca deitada',90,'Deitada, cruza uma perna e roda a anca até uma amplitude confortável.',['Ombros apoiados','Sem forçar o joelho','Troca lados'],ART.stretch,'Alongamento'),
  ex('Quadríceps com faixa',90,'Deitada de lado, usa uma faixa no tornozelo para aproximar o pé da anca.',['Joelhos próximos','Bacia neutra','Troca lados'],ART.stretch,'Alongamento')
);

// v52 · Mais 50 exercícios sem pesos: 25 de força com peso corporal e
// 25 alongamentos sem rolo. Cada movimento tem duas fotografias próprias.
const EQUIPMENT_FREE_V52_REMOVALS = new Set([
  'Libertação de adutores com rolo',
  'Libertação lombar com rolo',
  'Libertação de quadríceps com rolo',
  'Libertação do tibial anterior',
  'Afundo búlgaro com halteres',
  'Agachamento goblet'
]);
['mobility','strength','stretch'].forEach(key => {
  library[key] = library[key].filter(item => !EQUIPMENT_FREE_V52_REMOVALS.has(item.name));
});

Object.assign(PUBLIC_DOMAIN_EXERCISE_MEDIA, {
  'Elevação de bacia com joelhos fletidos':publicExercisePhotos('Bent-Knee_Hip_Raise','Elevação de bacia'),
  'Subida de antebraços para mãos':publicExercisePhotos('Body-Up','Subida para mãos'),
  'Elevação de anca em V':publicExercisePhotos('Butt-Ups','Elevação de anca em V'),
  'Flexão em relógio':publicExercisePhotos('Clock_Push-Up','Flexão em relógio'),
  'Crunch com braços acima da cabeça':publicExercisePhotos('Crunch_-_Hands_Overhead','Crunch com braços acima'),
  'Saltos de rã':publicExercisePhotos('Frog_Hops','Saltos de rã'),
  'Abdominal borboleta':publicExercisePhotos('Frog_Sit-Ups','Abdominal borboleta'),
  'Elevação frontal da perna':publicExercisePhotos('Front_Leg_Raises','Elevação frontal da perna'),
  'Salto de pés às mãos':publicExercisePhotos('Groiners','Salto de pés às mãos'),
  'Flexão invertida na parede':publicExercisePhotos('Handstand_Push-Ups','Flexão invertida'),
  'Flexões laterais deslizantes':publicExercisePhotos('Isometric_Wipers','Flexão lateral'),
  'Recolha de joelhos no solo':publicExercisePhotos('Leg_Pull-In','Recolha de joelhos'),
  'Crunch oblíquo deitado de lado':publicExercisePhotos('Oblique_Crunches_-_On_The_Floor','Crunch oblíquo'),
  'Ponte com inclinação pélvica':publicExercisePhotos('Pelvic_Tilt_Into_Bridge','Ponte pélvica'),
  'Flexão para prancha lateral':publicExercisePhotos('Push_Up_to_Side_Plank','Flexão para prancha lateral'),
  'Elevação posterior da perna em quatro apoios':publicExercisePhotos('Rear_Leg_Raises','Elevação posterior'),
  'Rotação russa sem carga':publicExercisePhotos('Russian_Twist','Rotação russa'),
  'Canivete lateral':publicExercisePhotos('Side_Jackknife','Canivete lateral'),
  'Flexão com um braço':publicExercisePhotos('Single-Arm_Push-Up','Flexão com um braço'),
  'Miniagachamentos rápidos':publicExercisePhotos('Sit_Squats','Miniagachamentos'),
  'Vácuo abdominal em pé':publicExercisePhotos('Stomach_Vacuum','Vácuo abdominal'),
  'Toques nas pontas dos pés deitado':publicExercisePhotos('Toe_Touchers','Toques nas pontas dos pés'),
  'Crunch agrupado':publicExercisePhotos('Tuck_Crunch','Crunch agrupado'),
  'Fundos de tríceps em apoio':publicExercisePhotos('Bench_Dips','Fundos de tríceps'),
  'Flexão inclinada na parede':publicExercisePhotos('Incline_Push-Up','Flexão inclinada'),
  'Gémeos com antebraços na parede':publicExercisePhotos('Calf_Stretch_Elbows_Against_Wall','Gémeos na parede'),
  'Inclinação lateral sentada em cadeira':publicExercisePhotos('Chair_Lower_Back_Stretch','Inclinação lateral sentada'),
  'Queixo ao peito sentado':publicExercisePhotos('Chin_To_Chest_Stretch','Queixo ao peito'),
  'Rotação sentada de costas':publicExercisePhotos('Dancers_Stretch','Rotação sentada'),
  'Balanço dinâmico de braços acima':publicExercisePhotos('Dynamic_Back_Stretch','Balanço de braços'),
  'Abertura do peito com cotovelos atrás':publicExercisePhotos('Elbows_Back','Abertura do peito'),
  'Cruz de ferro dinâmica no chão':publicExercisePhotos('Iron_Crosses_stretch','Cruz de ferro'),
  'Círculos de joelhos':publicExercisePhotos('Knee_Circles','Círculos de joelhos'),
  'Posteriores com perna elevada deitada':publicExercisePhotos('Leg-Up_Hamstring_Stretch','Posteriores deitado'),
  'Extensão ajoelhada olhando ao teto':publicExercisePhotos('Looking_At_Ceiling','Extensão ajoelhada'),
  'Quadríceps deitado de lado':publicExercisePhotos('On_Your_Side_Quad_Stretch','Quadríceps de lado'),
  'Peitoral com um braço na parede':publicExercisePhotos('One_Arm_Against_Wall','Peitoral na parede'),
  'Meia postura do gafanhoto':publicExercisePhotos('One_Half_Locust','Meia postura do gafanhoto'),
  'Alongamento do corredor':publicExercisePhotos('Runners_Stretch','Alongamento do corredor'),
  'Gémeo sentado sem faixa':publicExercisePhotos('Seated_Calf_Stretch','Gémeo sentado'),
  'Posterior sentado no chão':publicExercisePhotos('Seated_Floor_Hamstring_Stretch','Posterior sentado'),
  'Adutor deitado de lado':publicExercisePhotos('Side_Lying_Groin_Stretch','Adutor deitado'),
  'Rotação da coluna em cadeira':publicExercisePhotos('Spinal_Stretch','Rotação da coluna'),
  'Círculos de anca em pé':publicExercisePhotos('Standing_Hip_Circles','Círculos de anca'),
  'Flexores da anca em pé':publicExercisePhotos('Standing_Hip_Flexors','Flexores da anca'),
  'Inclinação lateral em pé':publicExercisePhotos('Standing_Lateral_Stretch','Inclinação lateral'),
  'Sóleo e Aquiles em pé':publicExercisePhotos('Standing_Soleus_And_Achilles_Stretch','Sóleo e Aquiles'),
  'Costas superiores a abraçar as pernas':publicExercisePhotos('Upper_Back-Leg_Grab','Costas superiores'),
  'Abertura straddle sentada':publicExercisePhotos('The_Straddle','Abertura straddle'),
  'Elevação e descida dos ombros':publicExercisePhotos('Shoulder_Raise','Elevação dos ombros')
});

library.strength.push(
  ex('Elevação de bacia com joelhos fletidos',90,'Enrola a bacia e aproxima os joelhos do peito sem balanço.',['Lombar assente','Movimento curto','Desce devagar'],ART.plank,'Core'),
  ex('Subida de antebraços para mãos',90,'Alterna entre prancha de antebraços e prancha alta mantendo o tronco firme.',['Anca estável','Mãos sob ombros','Alterna o braço inicial'],ART.plank,'Força'),
  ex('Elevação de anca em V',75,'Da prancha de antebraços, eleva a anca formando um V e regressa com controlo.',['Abdómen firme','Não deixes cair a lombar','Respira'],ART.plank,'Core'),
  ex('Flexão em relógio',60,'Faz uma flexão explosiva e desloca mãos e pés ligeiramente em círculo.',['Só com flexão sólida','Aterra suave','Espaço livre'],ART.plank,'Força'),
  ex('Crunch com braços acima da cabeça',75,'Eleva as omoplatas mantendo os braços alinhados com as orelhas.',['Lombar no chão','Queixo afastado','Expira ao subir'],ART.plank,'Core'),
  ex('Saltos de rã',75,'Parte de um agachamento e salta em frente, absorvendo a aterragem.',['Aterra silencioso','Joelhos alinhados','Pouca distância basta'],ART.squat,'Força'),
  ex('Abdominal borboleta',75,'Com as plantas dos pés juntas, eleva apenas a parte superior do tronco.',['Joelhos relaxados','Sem puxar o pescoço','Controla a descida'],ART.plank,'Core'),
  ex('Elevação frontal da perna',75,'Eleva uma perna estendida à frente e regressa sem inclinar o tronco.',['Usa parede se precisares','Pé ativo','Troca lados'],ART.squat,'Força'),
  ex('Salto de pés às mãos',75,'Da prancha, salta com os dois pés para junto das mãos e regressa.',['Mãos firmes','Aterra com pés completos','Adapta caminhando'],ART.plank,'Força'),
  ex('Flexão invertida na parede',60,'Em pino apoiado na parede, flete e estende os braços lentamente.',['Nível avançado','Cabeça não bate no chão','Pede assistência'],ART.plank,'Força'),
  ex('Flexões laterais deslizantes',75,'Na posição de flexão, transfere o corpo de um braço para o outro.',['Corpo alinhado','Amplitude confortável','Movimento contínuo'],ART.plank,'Força'),
  ex('Recolha de joelhos no solo',75,'Deitada, traz os joelhos ao peito e volta a estender as pernas.',['Lombar apoiada','Sem impulso','Expira ao recolher'],ART.plank,'Core'),
  ex('Crunch oblíquo deitado de lado',75,'Deitada de lado, aproxima o cotovelo da anca e baixa lentamente.',['Não puxes a cabeça','Sente a lateral do tronco','Troca lados'],ART.plank,'Core'),
  ex('Ponte com inclinação pélvica',90,'Começa por enrolar a bacia e continua até elevar a coluna numa ponte.',['Sobe vértebra a vértebra','Pés paralelos','Não arqueies'],ART.squat,'Força'),
  ex('Flexão para prancha lateral',90,'Após cada flexão, roda para uma prancha lateral e eleva o braço.',['Pés estáveis','Anca alta','Alterna lados'],ART.plank,'Força'),
  ex('Elevação posterior da perna em quatro apoios',90,'Estende uma perna para trás e para cima mantendo a bacia nivelada.',['Mãos sob ombros','Sem rodar a anca','Troca lados'],ART.squat,'Força'),
  ex('Rotação russa sem carga',75,'Com o tronco inclinado, roda as mãos juntas de um lado ao outro.',['Peito aberto','Costas longas','Pés no chão para adaptar'],ART.plank,'Core'),
  ex('Canivete lateral',75,'Deitada de lado, aproxima simultaneamente tronco e pernas.',['Movimento controlado','Sem puxar o pescoço','Troca lados'],ART.plank,'Core'),
  ex('Flexão com um braço',45,'Executa a flexão com base larga e apoio num só braço.',['Nível avançado','Começa numa parede se necessário','Alterna braços'],ART.plank,'Força'),
  ex('Miniagachamentos rápidos',75,'Faz agachamentos curtos e controlados acima da linha paralela.',['Joelhos seguem os pés','Tronco alto','Ritmo sem perder forma'],ART.squat,'Força'),
  ex('Vácuo abdominal em pé',60,'Expira, aproxima suavemente o abdómen da coluna e mantém a postura.',['Sem prender a respiração','Ombros soltos','Interrompe se houver tontura'],ART.plank,'Core'),
  ex('Toques nas pontas dos pés deitado',75,'Com as pernas elevadas, aproxima as mãos das pontas dos pés.',['Lombar apoiada','Pernas quase verticais','Expira ao subir'],ART.plank,'Core'),
  ex('Crunch agrupado',75,'Eleva o tronco mantendo as coxas verticais e os joelhos fletidos.',['Sem embalo','Queixo neutro','Desce devagar'],ART.plank,'Core'),
  ex('Fundos de tríceps em apoio',75,'Com as mãos num apoio estável, baixa e sobe o corpo pelos braços.',['Apoio não desliza','Cotovelos para trás','Ombros longe das orelhas'],ART.plank,'Força'),
  ex('Flexão inclinada na parede',90,'Faz flexões com as mãos numa parede ou apoio alto e estável.',['Corpo em linha','Peito aproxima do apoio','Cotovelos controlados'],ART.plank,'Força')
);

library.stretch.push(
  ex('Gémeos com antebraços na parede',75,'Inclina o corpo à parede mantendo os calcanhares no chão.',['Pés paralelos','Corpo alinhado','Ajusta a distância'],ART.stretch,'Alongamento'),
  ex('Inclinação lateral sentada em cadeira',75,'Sentada com a coluna alta, leva um braço sobre a cabeça e inclina de lado.',['Anca permanece apoiada','Sem rodar','Troca lados'],ART.stretch,'Alongamento'),
  ex('Queixo ao peito sentado',60,'Baixa suavemente o queixo na direção do peito para alongar a nuca.',['Mãos apenas acompanham','Ombros baixos','Sem dor'],ART.stretch,'Alongamento'),
  ex('Rotação sentada de costas',75,'Cruza uma perna e roda o tronco para o lado do joelho elevado.',['Coluna alta','Roda devagar','Troca lados'],ART.stretch,'Alongamento'),
  ex('Balanço dinâmico de braços acima',60,'Eleva os braços progressivamente à frente até acima da cabeça.',['Movimento fluido','Costelas controladas','Amplitude gradual'],ART.stretch,'Mobilidade'),
  ex('Abertura do peito com cotovelos atrás',60,'Coloca as mãos na lombar e aproxima suavemente os cotovelos atrás.',['Peito aberto','Pescoço longo','Sem forçar ombros'],ART.stretch,'Alongamento'),
  ex('Cruz de ferro dinâmica no chão',75,'De barriga para baixo, leva alternadamente um pé na direção da mão oposta.',['Movimento lento','Ombros apoiados','Sem forçar a lombar'],ART.stretch,'Mobilidade'),
  ex('Círculos de joelhos',45,'Com pés juntos e joelhos suaves, desenha círculos pequenos em ambos os sentidos.',['Amplitude pequena','Pés assentes','Sem dor'],ART.stretch,'Mobilidade'),
  ex('Posteriores com perna elevada deitada',90,'Deitada, eleva uma perna e aproxima-a mantendo o joelho confortável.',['Bacia no chão','Não forces a extensão','Troca lados'],ART.stretch,'Alongamento'),
  ex('Extensão ajoelhada olhando ao teto',60,'Ajoelhada, segura os calcanhares e eleva suavemente a anca e o peito.',['Contrai glúteos','Pescoço confortável','Não comprimas a lombar'],ART.stretch,'Alongamento'),
  ex('Quadríceps deitado de lado',75,'Deitada de lado, segura o pé de cima e aproxima-o da anca.',['Joelhos alinhados','Bacia neutra','Troca lados'],ART.stretch,'Alongamento'),
  ex('Peitoral com um braço na parede',75,'Apoia um braço fletido na parede e roda o tronco para fora.',['Ombro baixo','Movimento suave','Troca lados'],ART.stretch,'Alongamento'),
  ex('Meia postura do gafanhoto',75,'De barriga para baixo, segura um pé e eleva ligeiramente peito e coxa.',['Sem dor lombar','Respira','Troca lados'],ART.stretch,'Alongamento'),
  ex('Alongamento do corredor',90,'Num afundo longo, baixa a anca e trabalha flexor da anca e posterior da frente.',['Calcanhar da frente no chão','Joelho alinhado','Troca lados'],ART.stretch,'Alongamento'),
  ex('Gémeo sentado sem faixa',75,'Sentada, estende uma perna e aproxima a ponta do pé usando a mão.',['Joelho confortável','Costas longas','Troca lados'],ART.stretch,'Alongamento'),
  ex('Posterior sentado no chão',90,'Estende uma perna, encosta o outro pé à coxa e inclina pela anca.',['Pé ativo','Coluna comprida','Troca lados'],ART.stretch,'Alongamento'),
  ex('Adutor deitado de lado',90,'Deitada de lado, eleva a perna de cima e aproxima-a do ombro.',['Bacia empilhada','Sem forçar o joelho','Troca lados'],ART.stretch,'Alongamento'),
  ex('Rotação da coluna em cadeira',75,'Sentada, roda o tronco e inclina ligeiramente para trabalhar as costas.',['Pés assentes','Coluna longa','Troca lados'],ART.stretch,'Mobilidade'),
  ex('Círculos de anca em pé',75,'Em apoio numa perna, desenha círculos amplos e lentos com o joelho elevado.',['Segura na parede','Tronco imóvel','Troca lados'],ART.stretch,'Mobilidade'),
  ex('Flexores da anca em pé',75,'Com uma perna atrás e ambos os joelhos fletidos, empurra a anca suavemente à frente.',['Tronco vertical','Glúteo ativo','Troca lados'],ART.stretch,'Alongamento'),
  ex('Inclinação lateral em pé',75,'Eleva um braço e inclina o tronco para o lado oposto.',['Peso nos dois pés','Sem rodar','Troca lados'],ART.stretch,'Alongamento'),
  ex('Sóleo e Aquiles em pé',75,'Com um pé atrás, flete ambos os joelhos mantendo o calcanhar traseiro apoiado.',['Calcanhar no chão','Pé aponta à frente','Troca lados'],ART.stretch,'Alongamento'),
  ex('Costas superiores a abraçar as pernas',75,'Sentada, abraça as pernas por baixo e afasta suavemente as costas dos joelhos.',['Pescoço relaxado','Sem puxar forte','Respira para as costas'],ART.stretch,'Alongamento'),
  ex('Abertura straddle sentada',90,'Sentada, abre as pernas em V e inclina o tronco à frente pela anca.',['Joelhos virados para cima','Costas longas','Sem saltar'],ART.stretch,'Alongamento'),
  ex('Elevação e descida dos ombros',45,'Eleva os ombros na direção das orelhas e baixa-os lentamente.',['Braços soltos','Pescoço neutro','Expira ao descer'],ART.stretch,'Mobilidade')
);

// v53 · Treino com pesos. A fonte oficial é carregada em weights-v53.js.
// Apenas halteres, kettlebells e barra; máquinas, cabos e outros aparelhos ficam excluídos.
const WEIGHT_EQUIPMENT_META = {
  dumbbell: { label:'Halteres', short:'Halteres' },
  kettlebells: { label:'Kettlebells', short:'Kettlebells' },
  barbell: { label:'Barra', short:'Barra' }
};
const WEIGHT_LEVEL_META = { beginner:'Iniciante', intermediate:'Intermédio', expert:'Avançado' };
const WEIGHT_MUSCLE_PT = {
  abdominals:'abdominais', abductors:'abdutores', adductors:'adutores', biceps:'bíceps', calves:'gémeos',
  chest:'peitoral', forearms:'antebraços', glutes:'glúteos', hamstrings:'posteriores da coxa', lats:'dorsais',
  'lower back':'zona lombar', 'middle back':'costas médias', neck:'pescoço', quadriceps:'quadríceps',
  shoulders:'ombros', traps:'trapézios', triceps:'tríceps'
};
function weightMuscleLabel(muscles = []) {
  const labels = muscles.map(muscle => WEIGHT_MUSCLE_PT[muscle] || muscle);
  if (!labels.length) return 'força geral';
  if (labels.length === 1) return labels[0];
  return `${labels.slice(0, -1).join(', ')} e ${labels.at(-1)}`;
}
library.weights = (globalThis.WEIGHT_EXERCISES || []).map(entry => {
  const equipment = WEIGHT_EQUIPMENT_META[entry.equipment]?.label || entry.equipment;
  const level = WEIGHT_LEVEL_META[entry.level] || entry.level;
  const focus = weightMuscleLabel(entry.primaryMuscles);
  return {
    ...ex(entry.name, 90, `${equipment} · foco principal em ${focus}.`, [
      `Equipamento: ${equipment}`,
      `Nível: ${level}`,
      `Foco: ${focus}`
    ], ART.squat, 'Pesos'),
    sourceExerciseId:entry.id, equipment:entry.equipment, level:entry.level,
    primaryMuscles:entry.primaryMuscles || [], secondaryMuscles:entry.secondaryMuscles || []
  };
});
(globalThis.WEIGHT_EXERCISES || []).forEach(entry => {
  PUBLIC_DOMAIN_EXERCISE_MEDIA[entry.name] = publicExercisePhotos(entry.id, entry.name);
});

// v56 · Novos alongamentos com demonstrações específicas do repositório público.
Object.assign(PUBLIC_DOMAIN_EXERCISE_MEDIA, {
  'Joelho ao peito deitado':publicExercisePhotos('One_Knee_To_Chest','Joelho ao peito'),
  'Glúteo deitado com perna cruzada':publicExercisePhotos('Lying_Glute','Glúteo deitado'),
  'Quadríceps deitado de barriga para baixo':publicExercisePhotos('Lying_Prone_Quadriceps','Quadríceps deitado'),
  'Glúteo sentado':publicExercisePhotos('Seated_Glute','Glúteo sentado'),
  'Posterior sentado com perna estendida':publicExercisePhotos('Chair_Leg_Extended_Stretch','Posterior sentado'),
  'Flexor da anca e quadríceps ajoelhado':publicExercisePhotos('Intermediate_Hip_Flexor_and_Quad_Stretch','Flexor da anca e quadríceps'),
  'Peroneais em pé':publicExercisePhotos('Peroneals_Stretch','Peroneais'),
  'Tibial posterior em pé':publicExercisePhotos('Posterior_Tibialis_Stretch','Tibial posterior'),
  'Posterior e gémeo sentado':publicExercisePhotos('Seated_Hamstring_and_Calf_Stretch','Posterior e gémeo sentado'),
  'Bíceps sentado':publicExercisePhotos('Seated_Biceps','Bíceps sentado'),
  'Deltoide anterior sentado':publicExercisePhotos('Seated_Front_Deltoid','Deltoide anterior'),
  'Ombro cruzado':publicExercisePhotos('Shoulder_Stretch','Ombro cruzado'),
  'Tríceps lateral':publicExercisePhotos('Tricep_Side_Stretch','Tríceps lateral'),
  'Tríceps acima da cabeça':publicExercisePhotos('Triceps_Stretch','Tríceps acima da cabeça'),
  'Alongamento ascendente de corpo inteiro':publicExercisePhotos('Upward_Stretch','Alongamento ascendente'),
  'Moinhos de vento sem peso':publicExercisePhotos('Windmills','Moinhos de vento')
});
library.stretch.push(
  ex('Joelho ao peito deitado',75,'Deitada, aproxima um joelho do peito mantendo a outra perna confortável.',['Lombar relaxada','Ombros no chão','Troca lados'],ART.stretch,'Alongamento'),
  ex('Glúteo deitado com perna cruzada',90,'Cruza uma perna e aproxima-a do tronco para alongar o glúteo.',['Pé ativo','Sem pressão no joelho','Troca lados'],ART.stretch,'Alongamento'),
  ex('Quadríceps deitado de barriga para baixo',90,'De barriga para baixo, aproxima o calcanhar do glúteo sem levantar a anca.',['Joelhos próximos','Bacia assente','Troca lados'],ART.stretch,'Alongamento'),
  ex('Glúteo sentado',90,'Sentada, cruza a perna e roda suavemente o tronco para o lado elevado.',['Coluna alta','Sem forçar o joelho','Troca lados'],ART.stretch,'Alongamento'),
  ex('Posterior sentado com perna estendida',90,'Estende uma perna sobre um apoio baixo e inclina pela anca.',['Costas compridas','Pé ativo','Troca lados'],ART.stretch,'Alongamento'),
  ex('Flexor da anca e quadríceps ajoelhado',90,'Em meio-ajoelhado, avança a bacia e dobra a perna de trás apenas se confortável.',['Contrai o glúteo','Protege o joelho','Sem arquear a lombar'],ART.stretch,'Alongamento'),
  ex('Peroneais em pé',60,'Cruza os pés e inclina-os suavemente para alongar a parte externa da perna.',['Pouca pressão','Usa apoio','Troca lados'],ART.stretch,'Alongamento'),
  ex('Tibial posterior em pé',60,'Orienta o tornozelo de forma controlada para alongar a face interna da perna.',['Movimento pequeno','Sem dor no tornozelo','Troca lados'],ART.stretch,'Alongamento'),
  ex('Posterior e gémeo sentado',90,'Com uma perna estendida, inclina o tronco e aproxima as mãos do pé sem saltar.',['Joelho solto','Coluna longa','Troca lados'],ART.stretch,'Alongamento'),
  ex('Bíceps sentado',60,'Apoia as mãos atrás do corpo e afasta suavemente o tronco.',['Dedos para trás','Ombros baixos','Sem dor no punho'],ART.stretch,'Alongamento'),
  ex('Deltoide anterior sentado',60,'Com as mãos apoiadas atrás, abre o peito sem elevar os ombros.',['Peito aberto','Cotovelos suaves','Amplitude confortável'],ART.stretch,'Alongamento'),
  ex('Ombro cruzado',60,'Cruza um braço à frente do peito e aproxima-o com o outro braço.',['Ombro baixo','Sem puxar o cotovelo','Troca lados'],ART.stretch,'Alongamento'),
  ex('Tríceps lateral',60,'Leva o braço dobrado sobre a cabeça e inclina ligeiramente o tronco.',['Costelas controladas','Pescoço solto','Troca lados'],ART.stretch,'Alongamento'),
  ex('Tríceps acima da cabeça',60,'Dobra o cotovelo atrás da cabeça e guia-o suavemente com a mão oposta.',['Cotovelo aponta acima','Sem arquear','Troca lados'],ART.stretch,'Alongamento'),
  ex('Alongamento ascendente de corpo inteiro',60,'Entrelaça as mãos acima da cabeça e cresce desde os pés até às mãos.',['Respira fundo','Ombros longe das orelhas','Sem bloquear joelhos'],ART.stretch,'Alongamento'),
  ex('Moinhos de vento sem peso',75,'Com os braços abertos, roda e alcança alternadamente o pé oposto.',['Anca recua','Costas compridas','Ritmo lento'],ART.stretch,'Mobilidade')
);

const COMBAT_COMMONS = {
  boxing:'https://commons.wikimedia.org/wiki/Category:Boxing_technique',
  kickboxing:'https://commons.wikimedia.org/wiki/Category:Kickboxing_technique'
};
const combatPhoto = (file, label) => ({ src:`assets/combat-commons-v56/${file}`, label });
const boxingCommonsPhoto = (file, label) => ({ src:`assets/boxing-commons-v62/${file}`, label });
const COMBAT_STEPS = {
  stance:boxingCommonsPhoto('orthodox-stance.jpg','Guarda ortodoxa · esquerda à frente'),
  jab:boxingCommonsPhoto('lead-jab.jpg','Jab · mão da frente'),
  cross:combatPhoto('boxing-cross.jpg','Direto · mão de trás'),
  hook:boxingCommonsPhoto('lead-hook.jpg','Gancho da frente'),
  uppercutLead:boxingCommonsPhoto('lead-uppercut.jpg','Uppercut da frente'),
  uppercutRear:combatPhoto('boxing-uppercut-rear.jpg','Uppercut de trás · sequência real'),
  slip:combatPhoto('boxing-slip.jpg','Esquiva lateral'),
  shoulder:combatPhoto('boxing-shoulder-block.jpg','Bloqueio de ombro'),
  frontKick:combatPhoto('kickboxing-front-kick-studio-v57.png','Pontapé frontal · vista lateral'),
  lowKick:combatPhoto('kickboxing-low-kick.jpg','Low kick'),
  roundhouse:combatPhoto('kickboxing-roundhouse.png','Pontapé circular'),
  sideKick:combatPhoto('kickboxing-side-kick.webp','Pontapé lateral'),
  backKick:combatPhoto('kickboxing-back-kick.jpg','Pontapé para trás'),
  knee:combatPhoto('kickboxing-knee.jpg','Joelho direto'),
  check:combatPhoto('kickboxing-check.webp','Check de low kick'),
  counterKick:combatPhoto('kickboxing-punch-counter-kick.webp','Contra-ataque de soco ao pontapé médio')
};
const combatMedia = (steps, discipline, sourceUrl = COMBAT_COMMONS[discipline]) => ({
  photos:steps.map(key => COMBAT_STEPS[key]),
  source:'Wikimedia Commons · materiais de treino com licença verificada',
  sourceUrl,
  license:'Licença indicada na página de cada ficheiro',
  real:true
});
const commonsBoxingMedia = (steps, sourceUrl = 'https://commons.wikimedia.org/wiki/Category:Boxing_technique') => ({
  photos:steps.map(key => COMBAT_STEPS[key]).filter(Boolean),
  source:'Alain Delmas · Wikimedia Commons',
  sourceUrl,
  license:'CC BY-SA · licença indicada na página de cada ficheiro',
  real:false,
  illustration:true
});
const COMBAT_EXERCISE_MEDIA = {
  'Guarda ortodoxa de boxe':commonsBoxingMedia(['stance'],'https://commons.wikimedia.org/wiki/File:Attitude_droite1.jpg'),
  'Jab':commonsBoxingMedia(['jab'],'https://commons.wikimedia.org/wiki/File:Allongecolor.jpg'),
  'Direto de trás (cross)':commonsBoxingMedia(['cross'],'https://commons.wikimedia.org/wiki/File:Cross1.jpg'),
  'Gancho da frente':commonsBoxingMedia(['hook'],'https://commons.wikimedia.org/wiki/File:Crochet2color.jpg'),
  'Uppercut da frente':commonsBoxingMedia(['uppercutLead'],'https://commons.wikimedia.org/wiki/File:Uppercut8.jpg'),
  'Uppercut de trás':{
    photos:[COMBAT_STEPS.uppercutRear],
    source:'Expoblor123 · Wikimedia Commons',
    sourceUrl:'https://commons.wikimedia.org/wiki/File:Uppercut_derecho.jpg',
    license:'CC BY-SA 4.0',
    real:true
  },
  'Esquiva lateral (slip)':combatMedia(['slip'],'boxing','https://commons.wikimedia.org/wiki/File:Slip2.jpg'),
  'Bloqueio de ombro':combatMedia(['shoulder'],'boxing','https://commons.wikimedia.org/wiki/File:Bloc_%C3%A9paule1color.jpg'),
  'Jab–cross':commonsBoxingMedia(['jab','cross']),
  'Jab–cross–gancho':combatMedia(['jab','cross','hook'],'boxing'),
  'Jab–cross–slip–cross':combatMedia(['jab','cross','slip','cross'],'boxing'),
  'Jab ao corpo–cross à cabeça':combatMedia(['jab','cross'],'boxing'),
  'Passo lateral–jab–cross':combatMedia(['stance','jab','cross'],'boxing'),
  'Pontapé frontal de kickboxing':combatMedia(['frontKick'],'kickboxing','https://commons.wikimedia.org/wiki/File:USMC-100218-M-0709F-008.jpg'),
  'Low kick':combatMedia(['lowKick'],'kickboxing','https://commons.wikimedia.org/wiki/File:Low_kick.jpg'),
  'Pontapé circular médio de kickboxing':combatMedia(['roundhouse'],'kickboxing','https://commons.wikimedia.org/wiki/File:Roundhousekicks.png'),
  'Pontapé lateral de kickboxing':combatMedia(['sideKick'],'kickboxing','https://commons.wikimedia.org/wiki/File:Sidekick_form_-_color_vector.svg'),
  'Pontapé para trás de kickboxing':combatMedia(['backKick'],'kickboxing','https://commons.wikimedia.org/wiki/File:Back-kick-color.jpg'),
  'Joelho direto de kickboxing':combatMedia(['knee'],'kickboxing','https://commons.wikimedia.org/wiki/File:Genou_remontant2color.jpg'),
  'Check de low kick':combatMedia(['check'],'kickboxing','https://commons.wikimedia.org/wiki/File:Kick_checking_diagram.svg'),
  'Jab–cross–low kick':combatMedia(['jab','cross','lowKick'],'kickboxing'),
  'Jab–cross–pontapé circular':combatMedia(['jab','cross','roundhouse'],'kickboxing'),
  'Pontapé frontal–cross':combatMedia(['frontKick','cross'],'kickboxing'),
  'Check–cross–low kick':combatMedia(['check','cross','lowKick'],'kickboxing'),
  'Cross–gancho–pontapé circular':combatMedia(['cross','hook','roundhouse'],'kickboxing'),
  'Soco contra pontapé médio':combatMedia(['counterKick'],'kickboxing','https://commons.wikimedia.org/wiki/File:Punch_counter_mid_kick.svg'),
  'Pontapé lateral–cross':combatMedia(['sideKick','cross'],'kickboxing'),
  'Pontapé para trás–guarda':combatMedia(['backKick','stance'],'kickboxing')
};
const combatSafety = 'Treina no ar, sem contacto e com espaço livre. Regressa sempre à guarda.';
library.boxing = [
  ex('Guarda ortodoxa de boxe',75,'Organiza pés, mãos, queixo e distância antes de atacar.',['Pé da frente ligeiramente para dentro','Queixo baixo','Mãos regressam à face'],ART.stance,'Boxe',combatSafety),
  ex('Jab',75,'Estende a mão da frente em linha reta e recolhe-a imediatamente.',['Ombro protege o queixo','Punho e antebraço alinhados','Sem inclinar o tronco'],ART.stance,'Boxe',combatSafety),
  ex('Direto de trás (cross)',75,'Roda o pé e a anca de trás para projetar o direto.',['Calcanhar roda','Anca acompanha','Mão oposta protege'],ART.stance,'Boxe',combatSafety),
  ex('Gancho da frente',75,'Roda o corpo e conduz o punho numa trajetória curta e horizontal.',['Cotovelo acompanha o punho','Roda pela anca','Não abras demasiado'],ART.stance,'Boxe',combatSafety),
  ex('Uppercut da frente',75,'Desce ligeiramente e conduz o punho numa linha curta ascendente.',['Força nasce nas pernas','Punho perto do corpo','Protege com a outra mão'],ART.stance,'Boxe',combatSafety),
  ex('Uppercut de trás',75,'Roda o pé e a anca de trás enquanto conduzes o punho numa linha curta ascendente.',['Impulso nasce na perna de trás','Cotovelo fica perto do tronco','Mão da frente protege'],ART.stance,'Boxe',combatSafety),
  ex('Esquiva lateral (slip)',75,'Desloca cabeça e tronco poucos centímetros para fora da linha do golpe.',['Olhos em frente','Joelhos soltos','Sem baixar em excesso'],ART.stance,'Boxe',combatSafety),
  ex('Bloqueio de ombro',75,'Roda o ombro da frente para desviar o direto mantendo a guarda fechada.',['Queixo atrás do ombro','Movimento pequeno','Outra mão protege'],ART.stance,'Boxe',combatSafety),
  ex('Jab–cross',90,'Liga os dois diretos sem perder base nem guarda.',['Um–dois com ritmo','Roda no cross','Recolhe cada mão'],ART.stance,'Sequência de boxe',combatSafety),
  ex('Jab–cross–gancho',105,'Usa os diretos para abrir espaço e termina com gancho curto.',['Base não cruza','Gancho nasce da rotação','Termina em guarda'],ART.stance,'Sequência de boxe',combatSafety),
  ex('Jab–cross–slip–cross',120,'Ataca, sai da linha imaginária e responde com novo direto.',['Pausa curta após o primeiro cross','Slip pequeno','Volta equilibrada'],ART.stance,'Sequência de boxe',combatSafety),
  ex('Jab ao corpo–cross à cabeça',105,'Muda o nível no jab e regressa alto para o direto.',['Dobra joelhos, não a cintura','Olhos em frente','Sobe com controlo'],ART.stance,'Sequência de boxe',combatSafety),
  ex('Passo lateral–jab–cross',105,'Sai do centro com um passo curto e ataca a partir da nova linha.',['Pé mais próximo move primeiro','Não juntes os pés','Pára antes de golpear'],ART.stance,'Sequência de boxe',combatSafety)
];
library.kickboxing = [
  ex('Pontapé frontal de kickboxing',90,'Eleva o joelho, estende à frente e recolhe antes de pousar.',['Câmara alta','Empurra pela anca','Recolhe à guarda'],ART.frontKick,'Kickboxing',combatSafety),
  ex('Low kick',90,'Roda o apoio e golpeia a linha baixa com a canela em treino no ar.',['Anca roda','Mão oposta protege','Não bloqueies o joelho de apoio'],ART.roundKick,'Kickboxing',combatSafety),
  ex('Pontapé circular médio de kickboxing',90,'Roda sobre o pé de apoio e conduz a canela numa trajetória circular.',['Pivô completo','Anca acompanha','Recolhe a perna'],ART.roundKick,'Kickboxing',combatSafety),
  ex('Pontapé lateral de kickboxing',90,'Cria câmara lateral e estende o calcanhar em linha reta.',['Pé de apoio roda','Calcanhar lidera','Recolhe antes de pousar'],ART.sideKick,'Kickboxing',combatSafety),
  ex('Pontapé para trás de kickboxing',90,'Olha por cima do ombro e projeta o calcanhar para trás.',['Vê o alvo imaginário','Ancas alinhadas','Não gires em excesso'],ART.backKick,'Kickboxing',combatSafety),
  ex('Joelho direto de kickboxing',75,'Eleva o joelho conduzindo a anca para a frente sem perder a guarda.',['Ponta do pé relaxa para trás','Mãos altas','Regressa equilibrada'],ART.frontKick,'Kickboxing',combatSafety),
  ex('Check de low kick',75,'Eleva a perna e orienta a canela para intercetar um low kick imaginário.',['Joelho aponta para fora','Pé relaxado','Mãos na guarda'],ART.stance,'Defesa de kickboxing',combatSafety),
  ex('Jab–cross–low kick',120,'Liga dois socos e termina com low kick da perna de trás.',['Mãos recolhem','Transfere peso para a frente','Roda no pontapé'],ART.roundKick,'Sequência de kickboxing',combatSafety),
  ex('Jab–cross–pontapé circular',120,'Usa os diretos para preparar um pontapé circular médio.',['Distância cresce no pontapé','Pivô do apoio','Regressa à guarda'],ART.roundKick,'Sequência de kickboxing',combatSafety),
  ex('Pontapé frontal–cross',105,'Cria distância com o pontapé frontal e entra com o direto de trás.',['Pousa estável','Mãos altas durante o pontapé','Roda no cross'],ART.frontKick,'Sequência de kickboxing',combatSafety),
  ex('Check–cross–low kick',120,'Defende um low kick imaginário, responde com direto e devolve low kick.',['Pousa antes do cross','Equilíbrio primeiro','Ritmo controlado'],ART.roundKick,'Sequência de kickboxing',combatSafety),
  ex('Cross–gancho–pontapé circular',120,'Combina rotação de socos com um pontapé circular final.',['Não deixes os pés presos','Gancho curto','Cria distância para chutar'],ART.roundKick,'Sequência de kickboxing',combatSafety),
  ex('Soco contra pontapé médio',105,'Sai ligeiramente da trajetória e responde com um soco reto controlado.',['Treino apenas no ar','Cabeça fora da linha','Base estável'],ART.roundKick,'Defesa de kickboxing',combatSafety),
  ex('Pontapé lateral–cross',105,'Recolhe o pontapé lateral, pousa em base e liga o direto.',['Não ataques durante o desequilíbrio','Pousa primeiro','Guarda alta'],ART.sideKick,'Sequência de kickboxing',combatSafety),
  ex('Pontapé para trás–guarda',90,'Treina a rotação, o pontapé para trás e o regresso imediato à posição protegida.',['Olha antes de estender','Recolhe pelo mesmo caminho','Termina em guarda'],ART.backKick,'Sequência de kickboxing',combatSafety)
];

// v57 · A fotografia anterior do pontapé frontal era um enquadramento militar
// baixo e pouco didático. Esta imagem foi criada especificamente para mostrar
// o corpo inteiro, a guarda, a câmara do joelho e a extensão do pontapé.
COMBAT_EXERCISE_MEDIA['Pontapé frontal de kickboxing'] = {
  photos:[COMBAT_STEPS.frontKick],
  source:'Imagem didática criada para a TKD Coach',
  sourceUrl:'',
  license:'Recurso incorporado na aplicação',
  real:true
};

// Numeração usada em todas as novas sequências. Frente/trás torna a
// convenção igualmente válida para guarda ortodoxa e canhota.
const BOXING_NUMBER_LEGEND = {
  1:{ label:'Jab', step:'jab' },
  2:{ label:'Direto de trás', step:'cross' },
  3:{ label:'Gancho da frente à cabeça', step:'hook' },
  4:{ label:'Gancho de trás à cabeça', step:'hook' },
  5:{ label:'Uppercut da frente', step:'uppercutLead' },
  6:{ label:'Uppercut de trás', step:'uppercutRear' },
  7:{ label:'Gancho da frente ao corpo', step:'hook' },
  8:{ label:'Gancho de trás ao corpo', step:'hook' }
};
const BOXING_COMBO_SOURCE = 'https://github.com/danverbraganza/kickboxing-combo-trainer/blob/master/combos/combos.go';
const BOXING_COMBO_LEGEND = Object.entries(BOXING_NUMBER_LEGEND).map(([number, move]) => `${number} ${move.label}`).join(' · ');
const boxingTokenLabel = token => {
  if (BOXING_NUMBER_LEGEND[token]) return BOXING_NUMBER_LEGEND[token].label;
  if (token === 'slip') return 'Esquiva lateral';
  if (token === 'exit2') return 'Saída lateral depois do 2';
  return String(token);
};
const boxingTokenPhoto = token => {
  if (BOXING_NUMBER_LEGEND[token]) {
    const move = BOXING_NUMBER_LEGEND[token];
    return { ...COMBAT_STEPS[move.step], label:`${token} · ${move.label}` };
  }
  if (token === 'slip') return { ...COMBAT_STEPS.slip, label:'Esquiva lateral' };
  return { ...COMBAT_STEPS.stance, label:'Saída lateral e regresso à guarda' };
};
const boxingComboMedia = (tokens, extraPhotos = []) => ({
  photos:[...tokens.map(boxingTokenPhoto), ...extraPhotos],
  source:'Sequência baseada em convenção de boxe e no Kickboxing Combo Trainer (MIT)',
  sourceUrl:BOXING_COMBO_SOURCE,
  license:'MIT para a estrutura das combinações · fotografias com fonte indicada na aplicação',
  real:true
});
const boxingComboExercise = (notation, tokens, source = 'custom') => {
  const expanded = tokens.map(boxingTokenLabel).join(' → ');
  const item = ex(notation, Math.min(180, 80 + tokens.length * 12), expanded, [
    BOXING_COMBO_LEGEND,
    'Executa devagar, regressa à guarda e só depois acelera',
    tokens.includes('slip') || tokens.includes('exit2') ? 'A defesa/saída é curta: mantém os olhos em frente' : 'Expira em cada golpe e não cruzes os pés'
  ], ART.stance, 'Sequência numerada de boxe', combatSafety);
  item.comboSource = source;
  COMBAT_EXERCISE_MEDIA[item.name] = boxingComboMedia(tokens);
  return item;
};
const USER_BOXING_COMBOS = [
  ['1–1–2 · saída após o 2',['1','1','2','exit2']],
  ['1–2–3',['1','2','3']],
  ['1–4–5',['1','4','5']],
  ['2–3–6 · esquiva · 4',['2','3','6','slip','4']],
  ['1–4–5 · esquiva · 3',['1','4','5','slip','3']],
  ['1–8–3–4',['1','8','3','4']],
  ['2–7–3–4',['2','7','3','4']],
  ['1–2–5–6',['1','2','5','6']],
  ['1–1–2 · saída · 3–6',['1','1','2','exit2','3','6']],
  ['1–3–8–5',['1','3','8','5']],
  ['4–5–8',['4','5','8']],
  ['3–6–7',['3','6','7']],
  ['1–5–6',['1','5','6']],
  ['2–6–5',['2','6','5']],
  ['5–6 · esquiva · 1–2',['5','6','slip','1','2']],
  ['7–8–3–4',['7','8','3','4']]
];
const REPOSITORY_BOXING_COMBOS = [
  ['1–2–3–2',['1','2','3','2']],
  ['2–3–2',['2','3','2']],
  ['1–2–5–2',['1','2','5','2']],
  ['1–6–3–2',['1','6','3','2']],
  ['3–2–3',['3','2','3']],
  ['1–2–3–6',['1','2','3','6']],
  ['1–2–3–4–5',['1','2','3','4','5']],
  ['2–5–2–3',['2','5','2','3']]
];
const boxingLegendExercise = ex('Legenda de boxe 1–8',75,BOXING_COMBO_LEGEND,[
  'Frente/trás adapta-se à guarda ortodoxa ou canhota',
  '7 e 8 são os ganchos ao corpo',
  'Consulta esta ficha antes das sequências numeradas'
],ART.stance,'Referência de boxe',combatSafety);
COMBAT_EXERCISE_MEDIA[boxingLegendExercise.name] = combatMedia(['jab','cross','hook','uppercutLead','uppercutRear'],'boxing',BOXING_COMBO_SOURCE);
library.boxing.push(
  boxingLegendExercise,
  ...USER_BOXING_COMBOS.map(([name, tokens]) => boxingComboExercise(name, tokens)),
  ...REPOSITORY_BOXING_COMBOS.map(([name, tokens]) => boxingComboExercise(name, tokens, 'repository'))
);

const kickVariantExercise = (comboName, tokens, height) => {
  const high = height === 'alto';
  const kickLabel = high ? 'Pontapé circular alto' : 'Pontapé circular médio';
  const name = `${comboName} + ${kickLabel.toLowerCase()}`;
  const item = ex(name, Math.min(210, 100 + tokens.length * 12), `${tokens.map(boxingTokenLabel).join(' → ')} → ${kickLabel}`, [
    BOXING_COMBO_LEGEND,
    'Termina os socos em equilíbrio antes de chutar',
    high ? 'No pontapé alto, usa apenas a altura que controlas' : 'Roda o pé de apoio e aponta a canela à linha média'
  ], ART.roundKick, 'Sequência numerada de kickboxing', combatSafety);
  COMBAT_EXERCISE_MEDIA[name] = boxingComboMedia(tokens, [{ ...COMBAT_STEPS.roundhouse, label:kickLabel }]);
  return item;
};
library.kickboxing.push(
  ...USER_BOXING_COMBOS.flatMap(([name, tokens]) => [
    kickVariantExercise(name, tokens, 'médio'),
    kickVariantExercise(name, tokens, 'alto')
  ])
);

const WGER_KETTLEBELL_EXERCISES = [
  { id:975, name:'Curl unilateral com kettlebell', description:'Flete o cotovelo sem balançar o tronco e desce a carga com controlo.', level:'beginner', muscles:['biceps'], photos:['https://wger.de/media/exercise-images/975/41d9267a-99bc-4e94-b1c4-0e39fe7a968f.png'] },
  { id:1003, name:'Peso morto com kettlebell', description:'Empurra a anca para trás, mantém a coluna neutra e levanta através dos pés.', level:'beginner', muscles:['hamstrings','glutes'], photos:['https://wger.de/media/exercise-images/1003/772d6e47-3865-4944-9255-7435d0b06782.png','https://wger.de/media/exercise-images/1003/a2b47fa8-79b4-4a21-920b-48765f562bc4.png'] },
  { id:1022, name:'Prancha com remada unilateral de kettlebell', description:'Em prancha alta, rema um kettlebell sem deixar a bacia rodar.', level:'intermediate', muscles:['middle back','abdominals'], photos:['https://wger.de/media/exercise-images/1022/f74644fa-f43e-46bd-8603-6e3a2ee8ee2d.jpg','https://wger.de/media/exercise-images/1022/eef8fb9d-ae72-4e23-81da-4d62f2734332.jpg'] },
  { id:1612, name:'Peso morto sumo com kettlebell', description:'Afasta os pés, orienta os joelhos para fora e estende a anca sem arquear a lombar.', level:'beginner', muscles:['glutes','hamstrings','quadriceps'], photos:['https://wger.de/media/exercise-images/1612/3dc33f57-2786-4305-8b91-e011d7055923.jpg','https://wger.de/media/exercise-images/1612/e719b872-d122-4e2d-be17-bd2babfe457a.jpg'] },
  { id:1734, name:'Afundo unilateral com kettlebell', description:'Desce num afundo controlado mantendo joelho, pé e anca alinhados.', level:'intermediate', muscles:['quadriceps','glutes'], photos:['https://wger.de/media/exercise-images/1734/782e2fbb-1267-476d-a817-14f3b83e0564.png'] }
];
const WGER_EXERCISE_MEDIA = {};
const wgerKettlebellItems = WGER_KETTLEBELL_EXERCISES.map(entry => {
  WGER_EXERCISE_MEDIA[entry.name] = {
    photos:entry.photos.map((src, index) => ({ src, label:`${entry.name}${entry.photos.length > 1 ? ` · passo ${index + 1}` : ''}` })),
    source:'wger Workout Manager',
    sourceUrl:`https://wger.de/api/v2/exerciseinfo/${entry.id}/`,
    license:'CC BY-SA 4.0 · atribuição indicada no registo de origem',
    real:true
  };
  return {
    ...ex(entry.name,90,entry.description,['Começa com carga leve','Mantém a coluna neutra','Pára se perderes o controlo'],ART.squat,'Pesos'),
    sourceExerciseId:`wger-${entry.id}`, equipment:'kettlebells', level:entry.level,
    primaryMuscles:entry.muscles, secondaryMuscles:[]
  };
});

const KETTLEBELL_CIRCUIT_DEFS = [
  ['Kettlebell · Fundação',['Goblet_Squat','Two-Arm_Kettlebell_Row','Alternating_Floor_Press','One-Arm_Kettlebell_Swings']],
  ['Kettlebell · Pernas e equilíbrio',['Goblet_Squat','Lunge_Pass_Through','Kettlebell_One-Legged_Deadlift','Front_Squats_With_Two_Kettlebells']],
  ['Kettlebell · Potência',['One-Arm_Kettlebell_Swings','One-Arm_Kettlebell_Clean','One-Arm_Kettlebell_Push_Press','One-Arm_Kettlebell_Snatch']],
  ['Kettlebell · Core e controlo',['Kettlebell_Figure_8','Kettlebell_Pass_Between_The_Legs','Kettlebell_Windmill','Kettlebell_Turkish_Get-Up_Lunge_style']],
  ['Kettlebell · Costas e ombros',['Alternating_Kettlebell_Row','Two-Arm_Kettlebell_Row','Alternating_Kettlebell_Press','Kettlebell_Seesaw_Press']],
  ['Kettlebell · Corpo inteiro',['Kettlebell_Dead_Clean','Goblet_Squat','Kettlebell_Thruster','One-Arm_Kettlebell_Clean_and_Jerk']],
  ['Kettlebell · Cadeia posterior',['One-Arm_Kettlebell_Swings','Kettlebell_One-Legged_Deadlift','Kettlebell_Dead_Clean','Kettlebell_Sumo_High_Pull']],
  ['Kettlebell · Afundos e pernas',['Lunge_Pass_Through','Goblet_Squat','Front_Squats_With_Two_Kettlebells','Kettlebell_Thruster']],
  ['Kettlebell · Empurrar e puxar',['One-Arm_Kettlebell_Row','One-Arm_Kettlebell_Floor_Press','One-Arm_Kettlebell_Push_Press','Alternating_Kettlebell_Row']],
  ['Kettlebell · Controlo unilateral',['Kettlebell_One-Legged_Deadlift','One-Arm_Kettlebell_Row','One-Arm_Kettlebell_Clean','One-Arm_Kettlebell_Push_Press']],
  ['Kettlebell · Clean e press',['Kettlebell_Dead_Clean','One-Arm_Kettlebell_Clean','Two-Arm_Kettlebell_Clean','Two-Arm_Kettlebell_Military_Press']],
  ['Kettlebell · Resistência',['One-Arm_Kettlebell_Swings','Kettlebell_Figure_8','Kettlebell_Sumo_High_Pull','Kettlebell_Thruster']],
  ['Kettlebell · Força total',['Goblet_Squat','Two-Arm_Kettlebell_Row','Alternating_Floor_Press','Kettlebell_Turkish_Get-Up_Squat_style']],
  ['Kettlebell · Potência avançada',['Double_Kettlebell_Push_Press','Two-Arm_Kettlebell_Jerk','One-Arm_Kettlebell_Snatch','Double_Kettlebell_Snatch']]
];
library.kettlebellCircuits = KETTLEBELL_CIRCUIT_DEFS.map(([name, ids], circuitIndex) => {
  const movements = ids.map(id => (globalThis.WEIGHT_EXERCISES || []).find(entry => entry.id === id)).filter(Boolean);
  PUBLIC_DOMAIN_EXERCISE_MEDIA[name] = movements.flatMap(entry => publicExercisePhotos(entry.id, entry.name).slice(0, 1));
  return {
    ...ex(name, 240, movements.map(entry => entry.name).join(' → '), [
    '30–45 segundos por movimento',
    'Carga leve até dominar a técnica',
    circuitIndex < 2 ? 'Circuito acessível; descansa quando necessário' : 'Movimentos técnicos: reduz a velocidade e a carga'
    ], ART.squat, 'Circuito kettlebell', 'Mantém a coluna neutra e larga o peso com segurança se perderes o controlo.'),
    sourceExerciseId:`kettlebell-circuit-${circuitIndex + 1}`,
    equipment:'kettlebells',
    level:circuitIndex < 2 ? 'beginner' : (circuitIndex === KETTLEBELL_CIRCUIT_DEFS.length - 1 ? 'expert' : 'intermediate'),
    primaryMuscles:['glutes','hamstrings','shoulders'], secondaryMuscles:['abdominals','quadriceps']
  };
});
// Os circuitos passam a viver dentro de "Treino com pesos", junto dos
// exercícios de kettlebell individuais, sem uma categoria duplicada.
library.weights.push(...wgerKettlebellItems, ...library.kettlebellCircuits);

const dayProfiles = {
  monday: { label: 'Segunda-feira', focus: 'Seogi, makki, jireugi e chagi com precisão', intensity: 'Intensidade 7/10' },
  wednesday: { label: 'Quarta-feira', focus: 'Velocidade, chaeryeok e combinações técnicas', intensity: 'Intensidade 8/10' },
  friday: { label: 'Sexta-feira', focus: 'Consolidação, controlo e simulação de poomsae', intensity: 'Intensidade 6–7/10' }
};

const sessionDefs = [
  { id:'2026-08-03', date:'3 ago', fullDate:'Segunda, 3 de agosto', dayKey:'monday', week:'Semana 1', phase:'Base técnica', goal:'Fixar Taegeuk 1–3 e introduzir a Taegeuk 4.' },
  { id:'2026-08-05', date:'5 ago', fullDate:'Quarta, 5 de agosto', dayKey:'wednesday', week:'Semana 1', phase:'Base técnica', goal:'Ganhar ritmo nas combinações e manter técnica sob fadiga.' },
  { id:'2026-08-07', date:'7 ago', fullDate:'Sexta, 7 de agosto', dayKey:'friday', week:'Semana 1', phase:'Base técnica', goal:'Consolidar a semana e rever os erros mais repetidos.' },
  { id:'2026-08-10', date:'10 ago', fullDate:'Segunda, 10 de agosto', dayKey:'monday', week:'Semana 2', phase:'Construção', goal:'Completar a Taegeuk 4 e estabilizar as bases.' },
  { id:'2026-08-12', date:'12 ago', fullDate:'Quarta, 12 de agosto', dayKey:'wednesday', week:'Semana 2', phase:'Construção', goal:'Aumentar velocidade sem perder alinhamento.' },
  { id:'2026-08-14', date:'14 ago', fullDate:'Sexta, 14 de agosto', dayKey:'friday', week:'Semana 2', phase:'Construção', goal:'Rever técnica de pontapés e iniciar a Taegeuk 5.' },
  { id:'2026-08-17', date:'17 ago', fullDate:'Segunda, 17 de agosto', dayKey:'monday', week:'Semana 3', phase:'Integração', goal:'Ligar secções da Taegeuk 5 e reforçar controlo técnico.' },
  { id:'2026-08-19', date:'19 ago', fullDate:'Quarta, 19 de agosto', dayKey:'wednesday', week:'Semana 3', phase:'Integração', goal:'Melhorar cardio específico e sequências rápidas.' },
  { id:'2026-08-21', date:'21 ago', fullDate:'Sexta, 21 de agosto', dayKey:'friday', week:'Semana 3', phase:'Integração', goal:'Executar Taegeuk 1–5 sem consultar o boneco.' },
  { id:'2026-08-24', date:'24 ago', fullDate:'Segunda, 24 de agosto', dayKey:'monday', week:'Semana 4', phase:'Qualidade de exame', goal:'Subir a qualidade das transições e da potência.' },
  { id:'2026-08-26', date:'26 ago', fullDate:'Quarta, 26 de agosto', dayKey:'wednesday', week:'Semana 4', phase:'Qualidade de exame', goal:'Treinar velocidade de reação e resistência mental.' },
  { id:'2026-08-28', date:'28 ago', fullDate:'Sexta, 28 de agosto', dayKey:'friday', week:'Semana 4', phase:'Qualidade de exame', goal:'Fazer uma simulação séria de exame.' },
  { id:'2026-08-31', date:'31 ago', fullDate:'Segunda, 31 de agosto', dayKey:'monday', week:'Semana 5', phase:'Polimento final', goal:'Polir detalhes e entrar em setembro com confiança.' }
];

const technicalPools = {
  seogi: library.arms.filter(item => item.category === 'seogi'),
  makki: library.arms.filter(item => item.category === 'makki'),
  strikes: library.arms.filter(item => item.category === 'jireugi-chigi')
};

function cloneExercise(item) {
  return {
    ...item,
    tips: [...item.tips],
    keyPoints: item.keyPoints ? [...item.keyPoints] : undefined,
    commonErrors: item.commonErrors ? [...item.commonErrors] : undefined
  };
}

const POOMSAE_GUIDES = Array.isArray(globalThis.TKD_POOMSAE_GUIDES) ? globalThis.TKD_POOMSAE_GUIDES : [];
function makePoomsaeStepExercise(guide, poomsaeStep, stepIndex) {
  const item = ex(
    `${guide.name} · ${poomsaeStep.move} · ${poomsaeStep.technique}`,
    25,
    `${poomsaeStep.direction} · ${poomsaeStep.stance}. ${poomsaeStep.cue}`,
    [
      `${poomsaeStep.direction} · ${poomsaeStep.stance}`,
      poomsaeStep.cue,
      poomsaeStep.kihap ? 'Kihap neste passo' : 'Liga ao passo seguinte sem trocar a ordem'
    ],
    ART.poomsae,
    'Poomsae',
    `Passo ${poomsaeStep.move}. ${poomsaeStep.direction}. Assume ${poomsaeStep.stance}. Executa ${poomsaeStep.technique}. ${poomsaeStep.cue}${poomsaeStep.kihap ? ' Kihap.' : ''}`
  );
  return {
    ...item,
    koreanName:`${guide.name} · ${poomsaeStep.move} · ${poomsaeStep.technique}`,
    portugueseName:`${poomsaeStep.direction} · ${poomsaeStep.stance}`,
    mediaKey:poomsaeStep.mediaKey,
    poomsaeStep:true,
    poomsaeId:guide.id,
    poomsaeName:guide.name,
    poomsaeMove:poomsaeStep.move,
    poomsaeStepIndex:stepIndex,
    poomsaeOfficialMoves:guide.officialMoves,
    poomsaeSourceUrl:guide.sourceUrl,
    kihap:Boolean(poomsaeStep.kihap)
  };
}
library.poomsaeSteps = POOMSAE_GUIDES.flatMap(guide => guide.steps.map((poomsaeStep, index) => makePoomsaeStepExercise(guide, poomsaeStep, index)));
const poomsaeSequenceSessions = POOMSAE_GUIDES.map((guide, index) => ({
  id:`poomsae-sequence-${guide.id}`,
  date:'Forma', fullDate:`${guide.name} · golpe a golpe`, dayKey:'friday', week:'Poomsae passo a passo',
  phase:`${guide.officialMoves} movimentos oficiais · ${guide.steps.length} passos didáticos`,
  label:`${guide.name} · golpe a golpe`,
  focus:`Sequência completa de ${guide.name}, da preparação ao último movimento`,
  intensity:index < 3 ? 'Técnica fundamental' : index < 8 ? 'Técnica progressiva' : '1.º Dan',
  goal:'Memorizar a direção, a base e todas as técnicas sem alterar a ordem.',
  poomsaeSequence:true,
  poomsaeSourceUrl:guide.sourceUrl,
  blocks:[{ name:`${guide.name} · sequência completa`, exercises:guide.steps.map((poomsaeStep, stepIndex) => makePoomsaeStepExercise(guide, poomsaeStep, stepIndex)) }]
}));
function rotatePick(arr, start, count, step = 1) {
  return Array.from({ length: count }, (_, i) => cloneExercise(arr[(start + i * step) % arr.length]));
}


function poomsaeSelection(index, dayKey) {
  const early = [library.poomsae[0], library.poomsae[2], library.poomsae[4], library.poomsae[6], library.poomsae[14]];
  const earlyWed = [library.poomsae[1], library.poomsae[3], library.poomsae[5], library.poomsae[6], library.poomsae[16]];
  const earlyFri = [library.poomsae[0], library.poomsae[3], library.poomsae[5], library.poomsae[7], library.poomsae[14]];
  const midMon = [library.poomsae[1], library.poomsae[3], library.poomsae[7], library.poomsae[8], library.poomsae[9]];
  const midWed = [library.poomsae[2], library.poomsae[4], library.poomsae[8], library.poomsae[9], library.poomsae[10]];
  const midFri = [library.poomsae[3], library.poomsae[5], library.poomsae[8], library.poomsae[10], library.poomsae[14]];
  const lateMon = [library.poomsae[4], library.poomsae[8], library.poomsae[10], library.poomsae[11], library.poomsae[14]];
  const lateWed = [library.poomsae[5], library.poomsae[8], library.poomsae[11], library.poomsae[12], library.poomsae[16]];
  const lateFri = [library.poomsae[8], library.poomsae[11], library.poomsae[12], library.poomsae[13], library.poomsae[15]];
  const examMon = [library.poomsae[0], library.poomsae[4], library.poomsae[8], library.poomsae[11], library.poomsae[13]];
  const examWed = [library.poomsae[12], library.poomsae[13], library.poomsae[14], library.poomsae[15], library.poomsae[16]];
  const examFri = [library.poomsae[14], library.poomsae[15], library.poomsae[12], library.poomsae[13], library.poomsae[11]];
  const finalMon = [library.poomsae[16], library.poomsae[14], library.poomsae[11], library.poomsae[13], library.poomsae[15]];
  const table = [
    { monday: early, wednesday: earlyWed, friday: earlyFri },
    { monday: midMon, wednesday: midWed, friday: midFri },
    { monday: lateMon, wednesday: lateWed, friday: lateFri },
    { monday: examMon, wednesday: examWed, friday: examFri },
    { monday: finalMon, wednesday: examWed, friday: examFri }
  ];
  const phaseIndex = index === 12 ? 4 : Math.floor(index / 3);
  return table[phaseIndex][dayKey].map(cloneExercise);
}


function buildSession(def, index) {
  const dayOffset = { monday: 0, wednesday: 2, friday: 4 }[def.dayKey];
  return {
    ...def,
    ...dayProfiles[def.dayKey],
    blocks: [
      { name: 'Junbi undong · Aquecimento variado', exercises: rotatePick(library.warmups, index * 3 + dayOffset, 7, 3) },
      { name: 'Yuyeonseong · Mobilidade', exercises: rotatePick(library.mobility, index * 2 + dayOffset, 5, 3) },
      { name: 'Seogi · Posições', exercises: rotatePick(technicalPools.seogi, index + dayOffset, 3, 2) },
      { name: 'Makki · Defesas', exercises: rotatePick(technicalPools.makki, index * 2 + dayOffset, 4, 2) },
      { name: 'Jireugi/Chigi · Ataques e combinações', exercises: rotatePick(technicalPools.strikes, index * 3 + dayOffset, 4, 3) },
      { name: 'Chagi · Pontapés', exercises: rotatePick(library.kicks, index * 2 + dayOffset, 5, 3) },
      { name: 'Poomsae · Formas', exercises: poomsaeSelection(index, def.dayKey).slice(0, 4) },
      { name: 'Chaeryeok · Cardio', exercises: rotatePick(library.cardio, index + dayOffset, 3, 3) },
      { name: 'Him · Força/Core', exercises: rotatePick(library.strength, index * 2 + dayOffset, 4, 3) },
      { name: 'Jeongni undong · Alongamento variado', exercises: rotatePick(library.stretch, index * 4 + dayOffset, 6, 3) }
    ]
  };
}

function normalizeSessionDuration(session, targetSeconds = 5400) {
  const items = session.blocks.flatMap(block => block.exercises);
  const total = items.reduce((sum, item) => sum + item.seconds, 0);
  const factor = targetSeconds / total;
  items.forEach(item => {
    item.seconds = Math.max(30, Math.round((item.seconds * factor) / 5) * 5);
    if (item.durationSeconds != null) item.durationSeconds = item.seconds;
  });
  const adjusted = items.reduce((sum, item) => sum + item.seconds, 0);
  items[items.length - 1].seconds += targetSeconds - adjusted;
  if (items[items.length - 1].durationSeconds != null) items[items.length - 1].durationSeconds = items[items.length - 1].seconds;
  return session;
}

const augustSessions = sessionDefs.map((definition, index) => normalizeSessionDuration(buildSession(definition, index)));
augustSessions.push(...poomsaeSequenceSessions);

function shufflePick(arr, count) {
  const copy = arr.map(cloneExercise);
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}
function loadGeneratedSessions() {
  try {
    const stored = JSON.parse(localStorage.getItem('tkdGeneratedSessionsV21') || '[]');
    return Array.isArray(stored) ? stored.filter(session => Array.isArray(session?.blocks) && (session.personalized ? session.blocks.length >= 1 : session.blocks.length >= 4)) : [];
  } catch { return []; }
}
function saveGeneratedSessions() {
  const generated = augustSessions.filter(session => session.generated).slice(-30);
  localStorage.setItem('tkdGeneratedSessionsV21', JSON.stringify(generated));
}
function makeRandomSession() {
  const number = augustSessions.filter(session => session.generated && !session.personalized).length + 1;
  const session = {
    id: `random-${Date.now()}`, date: 'Novo', fullDate: `Treino aleatório ${number}`, dayKey: 'wednesday',
    week: 'Sessão criada', phase: 'Seleção aleatória equilibrada', label: `Treino aleatório ${number}`, randomNumber: number,
    focus: 'Aquecimento, mobilidade, técnicas, combinações, força e alongamentos diferentes', intensity: 'Intensidade 7/10',
    goal: 'Variar o treino mantendo a estrutura completa e a cobertura do currículo.', generated: true,
    blocks: [
      { name: 'Junbi undong · Aquecimento variado', exercises: shufflePick(library.warmups, 7) },
      { name: 'Yuyeonseong · Mobilidade', exercises: shufflePick(library.mobility, 5) },
      { name: 'Seogi · Posições', exercises: shufflePick(technicalPools.seogi, 3) },
      { name: 'Makki · Defesas', exercises: shufflePick(technicalPools.makki, 4) },
      { name: 'Jireugi/Chigi · Ataques e combinações', exercises: shufflePick(technicalPools.strikes, 4) },
      { name: 'Chagi · Pontapés', exercises: shufflePick(library.kicks, 5) },
      { name: 'Poomsae · Formas', exercises: shufflePick(library.poomsae, 4) },
      { name: 'Chaeryeok · Cardio', exercises: shufflePick(library.cardio, 3) },
      { name: 'Him · Força/Core', exercises: shufflePick(library.strength, 4) },
      { name: 'Jeongni undong · Alongamento variado', exercises: shufflePick(library.stretch, 6) }
    ]
  };
  return normalizeSessionDuration(session);
}
const restoredGeneratedSessions = loadGeneratedSessions();
augustSessions.push(...restoredGeneratedSessions);
function createRandomSession() {
  const session = makeRandomSession();
  augustSessions.push(session);
  saveGeneratedSessions();
  state.selectedSessionId = session.id;
  renderMonthSummary(); renderSessions(); renderSessionPreview();
  const status = $('#randomSessionStatus');
  if (status) status.textContent = `Criado “${trainingTitle(session)}” com 45 exercícios e 90 minutos.`;
  $('#sessionPreviewCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const CUSTOM_DIFFICULTY_META = {
  beginner: { label: 'Iniciante', maxRank: 0, description: 'Só fundamentos.' },
  intermediate: { label: 'Intermédio', maxRank: 1, description: 'Fundamentos + técnicas intermédias.' },
  advanced: { label: 'Avançado', maxRank: 3, description: 'Todo o catálogo.' }
};
const TECHNIQUE_LEVEL_RANK = { fundamental: 0, intermediate: 1, advanced: 2, dan: 3 };
const CUSTOM_EXERCISE_GROUPS = [
  { key:'warmups', label:'Aquecimento' }, { key:'mobility', label:'Mobilidade' },
  { key:'arms', label:'Bases e técnicas de mãos', technical:true }, { key:'kicks', label:'Pontapés', technical:true },
  { key:'poomsae', label:'Poomsae', technical:true }, { key:'poomsaeSteps', label:'Poomsae · passos individuais', technical:true }, { key:'cardio', label:'Cardio' },
  { key:'strength', label:'Força e core' }, { key:'stretch', label:'Alongamentos' },
  { key:'boxing', label:'Boxe e sequências' }, { key:'kickboxing', label:'Kickboxing e sequências' },
  { key:'weights', label:'Treino com pesos' }
];
function customExerciseCatalog() {
  return CUSTOM_EXERCISE_GROUPS.flatMap(group => (library[group.key] || []).map((exercise, index) => ({
    id:`${group.key}-${index}`, groupKey:group.key, groupLabel:group.label, technical:Boolean(group.technical), exercise
  })));
}
function customExerciseRank(entry) {
  if (!entry.technical) return 0;
  const matches = getExerciseTechniques(entry.exercise);
  if (!matches.length) return 1;
  return Math.max(...matches.map(technique => TECHNIQUE_LEVEL_RANK[technique.level] ?? 0));
}
function visibleCustomExercises(ignoreSearch = false) {
  const difficulty = $('#customDifficultySelect')?.value || 'intermediate';
  const maxRank = CUSTOM_DIFFICULTY_META[difficulty]?.maxRank ?? 1;
  const query = ignoreSearch ? '' : ($('#customExerciseSearch')?.value || '').trim().toLowerCase();
  return customExerciseCatalog().filter(entry => customExerciseRank(entry) <= maxRank && (!query || [entry.exercise.name, entry.exercise.type, entry.groupLabel, entry.exercise.description].join(' ').toLowerCase().includes(query)));
}
function updateCustomBuilderSummary() {
  const expanded = expandedCustomOrder();
  let total = expanded.reduce((sum, item) => sum + Math.max(5, Number(state.customSelections.get(item.id)) || 0), 0);
  const restSeconds = Math.max(0, Number($('#customRestSeconds')?.value) || 0);
  total += Math.max(0, expanded.length - 1) * restSeconds;
  $('#customExerciseCounter').textContent = expanded.length;
  const loopSteps = expanded.length - state.customSelections.size;
  const loopSummary = $('#customLoopSummary');
  if (loopSummary) loopSummary.textContent = state.customLoops.length
    ? `${state.customLoops.length} ${state.customLoops.length === 1 ? 'loop' : 'loops'} · +${loopSteps} repetições`
    : 'Sem loops';
  $('#customTotalTime').textContent = formatTime(total, total >= 3600);
}
function sanitizeCustomLoops() {
  const selected = new Set(state.customSelections.keys());
  const orderIndex = new Map(state.customOrder.map((id, index) => [id, index]));
  const claimed = new Set();
  state.customLoops = (state.customLoops || []).map((loop, index) => {
    const exerciseIds = [...new Set(loop.exerciseIds || [])]
      .filter(id => selected.has(id) && !claimed.has(id))
      .sort((a, b) => (orderIndex.get(a) ?? 99999) - (orderIndex.get(b) ?? 99999));
    exerciseIds.forEach(id => claimed.add(id));
    return {
      id:loop.id || `custom-loop-${Date.now()}-${index}`,
      exerciseIds,
      repetitions:Math.min(20, Math.max(2, Number(loop.repetitions) || 2))
    };
  }).filter(loop => loop.exerciseIds.length);
}
function expandedCustomOrder() {
  syncCustomExerciseOrder();
  const memberToLoop = new Map();
  state.customLoops.forEach((loop, loopIndex) => loop.exerciseIds.forEach(id => memberToLoop.set(id, { loop, loopIndex })));
  const expanded = [];
  state.customOrder.forEach(id => {
    const membership = memberToLoop.get(id);
    if (!membership) {
      expanded.push({ id, loopId:null, loopIndex:-1, iteration:1, repetitions:1 });
      return;
    }
    if (membership.loop.exerciseIds[0] !== id) return;
    for (let iteration = 1; iteration <= membership.loop.repetitions; iteration += 1) {
      membership.loop.exerciseIds.forEach(loopExerciseId => expanded.push({
        id:loopExerciseId,
        loopId:membership.loop.id,
        loopIndex:membership.loopIndex,
        iteration,
        repetitions:membership.loop.repetitions
      }));
    }
  });
  return expanded;
}
function syncCustomExerciseOrder() {
  const selectedIds = [...state.customSelections.keys()];
  const selectedSet = new Set(selectedIds);
  state.customOrder = state.customOrder.filter((id, index, order) => selectedSet.has(id) && order.indexOf(id) === index);
  selectedIds.forEach(id => { if (!state.customOrder.includes(id)) state.customOrder.push(id); });
  sanitizeCustomLoops();
}
function moveCustomExercise(id, delta) {
  syncCustomExerciseOrder();
  const index = state.customOrder.indexOf(id);
  const target = index + delta;
  if (index < 0 || target < 0 || target >= state.customOrder.length) return;
  [state.customOrder[index], state.customOrder[target]] = [state.customOrder[target], state.customOrder[index]];
  renderCustomOrderList();
}
function moveCustomExerciseTo(sourceId, targetId, placeAfter = false) {
  syncCustomExerciseOrder();
  if (!sourceId || !targetId || sourceId === targetId) return;
  const next = state.customOrder.filter(id => id !== sourceId);
  let targetIndex = next.indexOf(targetId);
  if (targetIndex < 0) return;
  if (placeAfter) targetIndex += 1;
  next.splice(targetIndex, 0, sourceId);
  state.customOrder = next;
  renderCustomOrderList();
}
function renderCustomOrderList() {
  const panel = $('#customOrderPanel');
  const host = $('#customOrderList');
  if (!panel || !host) return;
  syncCustomExerciseOrder();
  panel.hidden = !state.customOrder.length;
  if (!state.customOrder.length) { host.innerHTML = ''; renderCustomLoopControls(); return; }
  const catalog = new Map(customExerciseCatalog().map(entry => [entry.id, entry]));
  const ordered = state.customOrder.map(id => catalog.get(id)).filter(Boolean);
  const loopMembership = new Map();
  state.customLoops.forEach((loop, loopIndex) => loop.exerciseIds.forEach(id => loopMembership.set(id, loopIndex + 1)));
  host.innerHTML = ordered.map((entry, index) => `<article class="custom-order-row${loopMembership.has(entry.id) ? ' in-loop' : ''}" draggable="true" data-order-exercise-id="${entry.id}">
    <span class="custom-order-position" aria-label="Posição ${index + 1}">${index + 1}</span>
    <span class="custom-order-grip" aria-hidden="true">⋮⋮</span>
    ${customExerciseThumbnailMarkup(entry.exercise)}
    <div class="custom-order-copy"><strong>${escapeHtml(entry.exercise.name)}</strong><small>${escapeHtml(entry.groupLabel)}${loopMembership.has(entry.id) ? ` · Loop ${loopMembership.get(entry.id)}` : ''}</small></div>
    <label class="custom-order-duration"><span class="sr-only">Tempo de ${escapeHtml(entry.exercise.name)}</span><input type="number" min="5" step="5" inputmode="numeric" value="${Math.max(5, Number(state.customSelections.get(entry.id)) || entry.exercise.seconds)}"/><small>seg</small></label>
    <div class="custom-order-actions">
      <button type="button" data-order-move="up" aria-label="Mover ${escapeHtml(entry.exercise.name)} para cima" ${index === 0 ? 'disabled' : ''}>↑</button>
      <button type="button" data-order-move="down" aria-label="Mover ${escapeHtml(entry.exercise.name)} para baixo" ${index === ordered.length - 1 ? 'disabled' : ''}>↓</button>
    </div>
  </article>`).join('');
  $$('#customOrderList [data-order-move]').forEach(button => button.addEventListener('click', () => {
    const id = button.closest('.custom-order-row').dataset.orderExerciseId;
    moveCustomExercise(id, button.dataset.orderMove === 'up' ? -1 : 1);
  }));
  $$('#customOrderList .custom-order-duration input').forEach(input => input.addEventListener('input', () => {
    const id = input.closest('.custom-order-row').dataset.orderExerciseId;
    const seconds = Math.max(5, Number(input.value) || 5);
    state.customSelections.set(id, seconds);
    const sourceInput = $(`#customExerciseList [data-custom-exercise-id="${id}"] .custom-duration-input`);
    if (sourceInput) sourceInput.value = seconds;
    updateCustomBuilderSummary();
  }));
  $$('#customOrderList .custom-exercise-thumb[data-thumb-src]').forEach(button => button.addEventListener('click', () => openExerciseThumbnail(button)));
  $$('#customOrderList .custom-order-row').forEach(row => {
    row.addEventListener('dragstart', event => {
      row.classList.add('dragging');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', row.dataset.orderExerciseId);
    });
    row.addEventListener('dragend', () => row.classList.remove('dragging'));
    row.addEventListener('dragover', event => { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; });
    row.addEventListener('drop', event => {
      event.preventDefault();
      const sourceId = event.dataTransfer.getData('text/plain');
      const rect = row.getBoundingClientRect();
      moveCustomExerciseTo(sourceId, row.dataset.orderExerciseId, event.clientY > rect.top + rect.height / 2);
    });
  });
  renderCustomLoopControls();
}
function renderCustomLoopControls() {
  const list = $('#customLoopList');
  const builder = $('#customLoopBuilder');
  const picker = $('#customLoopExerciseList');
  const openButton = $('#openCustomLoopBtn');
  if (!list || !builder || !picker || !openButton) return;
  sanitizeCustomLoops();
  openButton.disabled = !state.customOrder.length;
  const catalog = new Map(customExerciseCatalog().map(entry => [entry.id, entry]));
  list.innerHTML = state.customLoops.map((loop, index) => `<article class="custom-loop-card" data-custom-loop-id="${loop.id}">
    <div><span>Loop ${index + 1}</span><strong>${loop.exerciseIds.map(id => catalog.get(id)?.exercise.name).filter(Boolean).map(escapeHtml).join(' → ')}</strong></div>
    <label>Voltas <input class="custom-loop-repetitions" type="number" min="2" max="20" step="1" inputmode="numeric" value="${loop.repetitions}" /></label>
    <button class="text-btn" type="button" data-remove-custom-loop="${loop.id}">Eliminar</button>
  </article>`).join('');
  const used = new Set(state.customLoops.flatMap(loop => loop.exerciseIds));
  picker.innerHTML = state.customOrder.map((id, index) => {
    const entry = catalog.get(id); if (!entry) return '';
    const unavailable = used.has(id);
    return `<label class="custom-loop-exercise-option${unavailable ? ' unavailable' : ''}"><input type="checkbox" value="${id}" ${unavailable ? 'disabled' : ''}/><span><b>${index + 1}</b>${customExerciseThumbnailMarkup(entry.exercise)}<strong>${escapeHtml(entry.exercise.name)}</strong></span></label>`;
  }).join('');
  $$('[data-remove-custom-loop]').forEach(button => button.addEventListener('click', () => {
    state.customLoops = state.customLoops.filter(loop => loop.id !== button.dataset.removeCustomLoop);
    renderCustomOrderList();
    updateCustomBuilderSummary();
  }));
  $$('.custom-loop-repetitions').forEach(input => input.addEventListener('change', () => {
    const loop = state.customLoops.find(item => item.id === input.closest('[data-custom-loop-id]').dataset.customLoopId);
    if (!loop) return;
    loop.repetitions = Math.min(20, Math.max(2, Number(input.value) || 2));
    input.value = loop.repetitions;
    updateCustomBuilderSummary();
  }));
  $$('#customLoopExerciseList .custom-exercise-thumb[data-thumb-src]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    openExerciseThumbnail(button);
  }));
}
function openCustomLoopBuilder() {
  if (!state.customOrder.length) return;
  $('#customLoopBuilder').hidden = false;
  $('#customLoopRepetitions').value = '3';
  $('#customLoopStatus').textContent = '';
  renderCustomLoopControls();
  $('#customLoopBuilder').scrollIntoView({ behavior:'smooth', block:'nearest' });
}
function closeCustomLoopBuilder() {
  $('#customLoopBuilder').hidden = true;
  $('#customLoopStatus').textContent = '';
}
function addCustomLoop() {
  const exerciseIds = $$('#customLoopExerciseList input[type="checkbox"]:checked').map(input => input.value);
  if (!exerciseIds.length) {
    $('#customLoopStatus').textContent = 'Escolhe pelo menos um exercício para o loop.';
    return;
  }
  const repetitions = Math.min(20, Math.max(2, Number($('#customLoopRepetitions').value) || 2));
  state.customLoops.push({ id:`custom-loop-${Date.now()}`, exerciseIds, repetitions });
  closeCustomLoopBuilder();
  renderCustomOrderList();
  updateCustomBuilderSummary();
}
function customExerciseThumbnailMarkup(exercise) {
  const resolved = resolveExerciseMedia(exercise);
  const photo = resolved.photos?.[0] || (resolved.src ? { src:resolved.src, label:exercise.name } : null);
  if (!photo?.src) return `<div class="custom-exercise-thumb custom-exercise-thumb-empty" aria-label="Sem fotografia"><span>写真</span></div>`;
  const label = photo.label || exercise.name;
  const sheetIndex = Number.isInteger(photo.sheetIndex) ? photo.sheetIndex : '';
  const sheetCount = photo.sheetCount || 5;
  const visual = Number.isInteger(photo.sheetIndex)
    ? `<span class="custom-thumb-sprite" style="background-image:url('${photo.src}');background-position:${photo.sheetIndex / Math.max(1, sheetCount - 1) * 100}% center"></span>`
    : `<img src="${photo.src}" alt="${escapeHtml(label)}" loading="lazy" />`;
  return `<button class="custom-exercise-thumb" type="button" data-thumb-src="${photo.src}" data-thumb-label="${escapeHtml(label)}" data-sheet-index="${sheetIndex}" data-sheet-count="${sheetCount}" aria-label="Ampliar fotografia de ${escapeHtml(exercise.name)}">${visual}<span class="custom-thumb-zoom" aria-hidden="true">＋</span></button>`;
}
function openExerciseThumbnail(button) {
  const src = button.dataset.thumbSrc; if (!src) return;
  const label = button.dataset.thumbLabel || 'Exercício';
  const sheetIndex = Number(button.dataset.sheetIndex);
  const sheetCount = Math.max(1, Number(button.dataset.sheetCount) || 5);
  const isSprite = button.dataset.sheetIndex !== '' && Number.isFinite(sheetIndex);
  $('#exerciseThumbnailLarge').innerHTML = isSprite
    ? `<div class="exercise-thumbnail-sprite" role="img" aria-label="${escapeHtml(label)}" style="background-image:url('${src}');background-position:${sheetIndex / Math.max(1, sheetCount - 1) * 100}% center"></div>`
    : `<img src="${src}" alt="${escapeHtml(label)}" />`;
  $('#exerciseThumbnailTitle').textContent = label;
  $('#exerciseThumbnailDialog').showModal();
}
function closeExerciseThumbnailDialog(){const dialog=$('#exerciseThumbnailDialog');if(dialog?.open)dialog.close();}
function renderCustomExerciseOptions() {
  const difficulty = $('#customDifficultySelect')?.value || 'intermediate';
  $('#difficultyDescription').textContent = `${CUSTOM_DIFFICULTY_META[difficulty].description} Os restantes exercícios estão sempre disponíveis.`;
  const allowed = new Set(visibleCustomExercises(true).map(entry => entry.id));
  [...state.customSelections.keys()].forEach(id => { if (!allowed.has(id)) state.customSelections.delete(id); });
  syncCustomExerciseOrder();
  const entries = visibleCustomExercises();
  const groups = CUSTOM_EXERCISE_GROUPS.map(group => ({...group, items:entries.filter(entry => entry.groupKey === group.key)})).filter(group => group.items.length);
  $('#customExerciseList').innerHTML = groups.length ? groups.map((group, groupIndex) => `<details class="custom-exercise-group" ${groupIndex < 2 ? 'open' : ''}>
    <summary><strong>${escapeHtml(group.label)}</strong><small>${group.items.length} exercícios</small></summary>
    <div class="custom-exercise-grid">${group.items.map(entry => {
      const selected = state.customSelections.has(entry.id);
      const seconds = state.customSelections.get(entry.id) || entry.exercise.seconds;
      return `<article class="custom-exercise-row${selected ? ' selected' : ''}" data-custom-exercise-id="${entry.id}">
        ${customExerciseThumbnailMarkup(entry.exercise)}
        <label class="custom-exercise-choice"><input class="custom-exercise-check" type="checkbox" ${selected ? 'checked' : ''}/><span><strong>${escapeHtml(entry.exercise.name)}</strong><small>${escapeHtml(entry.exercise.type)} · ${escapeHtml(entry.exercise.description)}</small></span></label>
        <label class="custom-exercise-duration"><span>Tempo</span><input class="custom-duration-input" type="number" min="5" step="5" inputmode="numeric" value="${Math.max(5, Number(seconds) || 60)}" ${selected ? '' : 'disabled'}/><small>seg</small></label>
      </article>`;
    }).join('')}</div>
  </details>`).join('') : '<p class="history-empty">Nenhum exercício encontrado.</p>';
  $$('#customExerciseList .custom-exercise-check').forEach(input => input.addEventListener('change', () => {
    const row = input.closest('.custom-exercise-row'); const id = row.dataset.customExerciseId; const duration = row.querySelector('.custom-duration-input');
    row.classList.toggle('selected', input.checked); duration.disabled = !input.checked;
    if (input.checked) {
      state.customSelections.set(id, Math.max(5, Number(duration.value) || 60));
      if (!state.customOrder.includes(id)) state.customOrder.push(id);
    } else {
      state.customSelections.delete(id);
      state.customOrder = state.customOrder.filter(orderId => orderId !== id);
    }
    updateCustomBuilderSummary();
    renderCustomOrderList();
  }));
  $$('#customExerciseList .custom-duration-input').forEach(input => input.addEventListener('input', () => {
    const row = input.closest('.custom-exercise-row');
    if (row.querySelector('.custom-exercise-check').checked) state.customSelections.set(row.dataset.customExerciseId, Math.max(5, Number(input.value) || 5));
    updateCustomBuilderSummary();
  }));
  $$('#customExerciseList .custom-exercise-thumb[data-thumb-src]').forEach(button => button.addEventListener('click', () => openExerciseThumbnail(button)));
  updateCustomBuilderSummary();
  renderCustomOrderList();
}
function makeCustomSession(difficulty, requestedName = '') {
  syncCustomExerciseOrder();
  const catalog = new Map(customExerciseCatalog().map(entry => [entry.id, entry]));
  const selectedEntries = state.customOrder.map(id => catalog.get(id)).filter(entry => entry && state.customSelections.has(entry.id));
  const selectedExercises = selectedEntries.map(entry => ({...entry, exercise:{...cloneExercise(entry.exercise), catalogId:entry.id, customGroupLabel:entry.groupLabel, seconds:Math.max(5, Number(state.customSelections.get(entry.id)) || entry.exercise.seconds)}}));
  const expandedEntries = expandedCustomOrder().map(position => {
    const entry = catalog.get(position.id);
    const loopLabel = position.loopId ? `Loop ${position.loopIndex + 1} · volta ${position.iteration}/${position.repetitions}` : entry.groupLabel;
    return {
      ...entry,
      groupLabel:loopLabel,
      exercise:{
        ...cloneExercise(entry.exercise),
        catalogId:entry.id,
        customGroupLabel:entry.groupLabel,
        seconds:Math.max(5, Number(state.customSelections.get(entry.id)) || entry.exercise.seconds),
        ...(position.loopId ? { loopId:position.loopId, loopIteration:position.iteration, loopRepetitions:position.repetitions } : {})
      }
    };
  });
  const restSeconds = Math.max(0, Number($('#customRestSeconds')?.value) || 0);
  const restExercise = () => ({
    name:'Descanso', seconds:restSeconds, description:'Recupera, respira e prepara o exercício seguinte.',
    tips:['Respira sem prender o ar','Mantém-te em movimento leve','Confirma qual é o próximo exercício'],
    keyPoints:['Respira sem prender o ar','Mantém-te em movimento leve','Confirma qual é o próximo exercício'],
    art:ART.stretch, type:'Recuperação', coach:'Descanso. Respira fundo, solta os ombros e prepara o exercício seguinte.',
    isRest:true, durationSeconds:restSeconds
  });
  const sequencedEntries = expandedEntries.flatMap((entry, index) => {
    if (!restSeconds || index === expandedEntries.length - 1) return [entry];
    return [entry, { ...entry, exercise:restExercise(), isRestEntry:true }];
  });
  const totalSeconds = sequencedEntries.reduce((sum, entry) => sum + entry.exercise.seconds, 0);
  const blocks = sequencedEntries.reduce((orderedBlocks, entry) => {
    const previous = orderedBlocks[orderedBlocks.length - 1];
    if (previous?.name === entry.groupLabel) previous.exercises.push(entry.exercise);
    else orderedBlocks.push({ name:entry.groupLabel, exercises:[entry.exercise] });
    return orderedBlocks;
  }, []);
  const existingSession = state.editingSessionId ? augustSessions.find(session => session.id === state.editingSessionId && session.personalized) : null;
  const customNumber = existingSession?.customNumber || augustSessions.filter(session => session.personalized).length + 1;
  const difficultyLabel = CUSTOM_DIFFICULTY_META[difficulty].label;
  const customName = requestedName.trim().replace(/\s+/g, ' ').slice(0, 50) || `Treino personalizado ${customNumber}`;
  const techniqueIds = [...new Set(selectedExercises.flatMap(entry => getExerciseTechniques(entry.exercise).map(technique => technique.id)))];
  const session = {
    id: existingSession?.id || `personalized-${Date.now()}`, date: 'Novo', fullDate: customName, dayKey: 'wednesday',
    week: existingSession?.week || 'Criado por ti', phase: `${expandedEntries.length} etapas${state.customLoops.length ? ` · ${state.customLoops.length} ${state.customLoops.length === 1 ? 'loop' : 'loops'}` : ''}${restSeconds ? ` · ${Math.max(0, expandedEntries.length - 1)} descansos` : ''} · ${formatTime(totalSeconds, totalSeconds >= 3600)}`, label: customName, customNumber,
    focus: selectedExercises.slice(0, 6).map(entry => entry.exercise.name).join(', '), intensity: `Nível técnico ${difficultyLabel}`,
    goal: 'Executar os exercícios escolhidos durante o tempo definido para cada um.',
    generated: true, personalized: true, difficulty, restSeconds, targetMinutes: totalSeconds / 60,
    customOrder:[...state.customOrder],
    loopGroups:state.customLoops.map(loop => ({ id:loop.id, exerciseIds:[...loop.exerciseIds], repetitions:loop.repetitions })),
    selectedTechniqueIds: techniqueIds, blocks
  };
  return session;
}
function resetCustomBuilder() {
  state.editingSessionId = null;
  state.customSelections.clear();
  state.customOrder = [];
  state.customLoops = [];
  if ($('#customWorkoutName')) $('#customWorkoutName').value = '';
  if ($('#customRestSeconds')) $('#customRestSeconds').value = '20';
  if ($('#customBuilderTitle')) $('#customBuilderTitle').textContent = 'Criar treino';
  if ($('#createCustomWorkoutBtn')) $('#createCustomWorkoutBtn').textContent = 'Guardar treino';
  if ($('#cancelCustomEditBtn')) $('#cancelCustomEditBtn').hidden = true;
  if ($('#customWorkoutStatus')) $('#customWorkoutStatus').textContent = '';
  if ($('#customLoopBuilder')) $('#customLoopBuilder').hidden = true;
}
function editCreatedSession(sessionId) {
  const session = augustSessions.find(item => item.id === sessionId && item.personalized);
  if (!session) return;
  const catalog = customExerciseCatalog();
  const catalogById = new Map(catalog.map(entry => [entry.id, entry]));
  state.customSelections.clear();
  state.customOrder = [];
  session.blocks.forEach(block => block.exercises.forEach(exercise => {
    if (exercise.isRest || exercise.name === 'Descanso') return;
    const entry = catalogById.get(exercise.catalogId) || catalog.find(candidate => candidate.exercise.name === exercise.name && (!exercise.customGroupLabel || candidate.groupLabel === exercise.customGroupLabel)) || catalog.find(candidate => candidate.exercise.name === exercise.name);
    if (!entry || state.customSelections.has(entry.id)) return;
    state.customSelections.set(entry.id, Math.max(5, Number(exercise.seconds) || entry.exercise.seconds));
    state.customOrder.push(entry.id);
  }));
  if (Array.isArray(session.customOrder)) {
    const restoredOrder = session.customOrder.filter(id => state.customSelections.has(id));
    state.customOrder = [...restoredOrder, ...state.customOrder.filter(id => !restoredOrder.includes(id))];
  }
  state.customLoops = Array.isArray(session.loopGroups)
    ? session.loopGroups.map(loop => ({ id:loop.id, exerciseIds:[...(loop.exerciseIds || [])], repetitions:loop.repetitions }))
    : [];
  sanitizeCustomLoops();
  state.editingSessionId = session.id;
  $('#customWorkoutName').value = trainingTitle(session);
  $('#customDifficultySelect').value = session.difficulty || 'intermediate';
  const inferredRest = session.restSeconds ?? session.blocks.flatMap(block => block.exercises).find(exercise => exercise.isRest || exercise.name === 'Descanso')?.seconds ?? 0;
  $('#customRestSeconds').value = String(inferredRest);
  $('#customBuilderTitle').textContent = 'Editar treino';
  $('#createCustomWorkoutBtn').textContent = 'Guardar alterações';
  $('#cancelCustomEditBtn').hidden = false;
  $('#customWorkoutStatus').textContent = state.customSelections.size ? 'Podes alterar exercícios, loops, ordem, tempos e descansos.' : 'Este treino antigo não pôde ser reconstruído por completo; adiciona os exercícios que pretendes guardar.';
  showView('custom');
}
function createCustomSession(event) {
  event.preventDefault();
  const difficulty = $('#customDifficultySelect').value;
  const customName = $('#customWorkoutName')?.value || '';
  if (!state.customSelections.size) { $('#customWorkoutStatus').textContent = 'Escolhe pelo menos um exercício.'; return; }
  const editingId = state.editingSessionId;
  const session = makeCustomSession(difficulty, customName);
  if (editingId) {
    const index = augustSessions.findIndex(item => item.id === editingId && item.personalized);
    if (index >= 0) augustSessions.splice(index, 1, session);
    else augustSessions.push(session);
  } else augustSessions.push(session);
  saveGeneratedSessions();
  state.selectedSessionId = session.id;
  renderMonthSummary(); renderSessions(); renderSessionPreview();
  const exerciseCount = session.blocks.flatMap(block => block.exercises).length;
  const totalSeconds = session.blocks.flatMap(block => block.exercises).reduce((sum, exercise) => sum + exercise.seconds, 0);
  $('#customWorkoutStatus').textContent = `${editingId ? 'Atualizado' : 'Criado'} “${trainingTitle(session)}” com ${exerciseCount} etapas e ${formatTime(totalSeconds, totalSeconds >= 3600)}.`;
  resetCustomBuilder();
  showView('setup');
  if ($('#createdSessionsDetails')) $('#createdSessionsDetails').open = true;
  $('#sessionPreviewCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const POOMSAE_CHECKLISTS = {
  'Taegeuk Il Jang': ['Confirma a linha I e a saudação inicial', 'Arae makki nas primeiras mudanças de direção', 'Ap kubi + momtong jireugi nas progressões', 'Olhar antes de cada viragem e regresso ao centro'],
  'Taegeuk I Jang': ['Confirma a linha I antes de iniciar', 'Distingue eolgul jireugi de momtong jireugi', 'Mantém ap seogi curto nas transições', 'Fecha com equilíbrio e orientação corretos'],
  'Taegeuk Sam Jang': ['Revê as combinações de ap chagi e jireugi', 'Marca as mudanças entre ap seogi e ap kubi', 'Mantém a ordem dos ataques de mão', 'Controla o ritmo sem saltar movimentos'],
  'Taegeuk Sa Jang': ['Divide a forma em primeira e segunda metade', 'Confirma sonnal momtong makki e pyonsonkkeut', 'Olha antes das viragens', 'Liga as duas metades apenas quando cada uma estiver estável'],
  'Taegeuk Oh Jang': ['Treina entrada, secção intermédia e final separadamente', 'Confirma as bases antes das técnicas de braço', 'Mantém baixa intensidade nas técnicas novas', 'Une as secções sem recomeçar após pequenos erros'],
  'Taegeuk Yuk Jang': ['Divide a sequência em blocos curtos', 'Confirma as mudanças de direção no diagrama', 'Mantém a altura das técnicas consistente', 'Liga os blocos sem apressar as viragens'],
  'Taegeuk Chil Jang': ['Revê primeiro as bases menos familiares', 'Mantém o centro baixo nas transições', 'Coordena braços e pernas no mesmo instante', 'Executa a sequência completa só depois dos blocos'],
  'Taegeuk Pal Jang': ['Marca as secções mais complexas no diagrama', 'Controla equilíbrio e recolha dos pontapés', 'Distingue preparação de execução', 'Termina com potência sem perder a linha']
};
function poomsaeChecklist(name) {
  const key = Object.keys(POOMSAE_CHECKLISTS).find(value => name.includes(value));
  return key ? POOMSAE_CHECKLISTS[key] : null;
}

const coachExtras = {
  any: [
    'Curiosidade: em taekwondo, a rotação da anca faz metade do trabalho em muitos pontapés.',
    'Quando estás cansada, foca-te em três coisas: guarda, equilíbrio e regresso à base.',
    'Treinar em casa continua a contar. Consistência ganha quase sempre à motivação ocasional.',
    'Se um lado parece mais fraco, isso é uma pista valiosa para o treino seguinte.',
    'Lembra-te: velocidade primeiro, altura depois.',
    'Boa técnica de pés melhora pontapés, poomsae e cardio ao mesmo tempo.'
  ],
  Poomsae: [
    'Dica de poomsae: olha primeiro para a nova direção e só depois gira o corpo.',
    'Uma poomsae limpa parece simples porque cada posição chega no momento certo.',
    'Se te enganares, continua. No treino também se constrói sangue-frio de exame.'
  ],
  Pontapé: [
    'No pontapé pensa sempre em três tempos: câmara, extensão e recolha.',
    'Se o pé de apoio não trabalhar bem, o pontapé perde potência e direção.',
    'Equilíbrio é parte do pontapé, não é algo que aparece depois.'
  ],
  Força: [
    'Força bem feita protege os joelhos e melhora o controlo do pontapé.',
    'Mais importante do que muitas repetições é fazer repetições limpas.'
  ],
  Cardio: [
    'Cardio específico não é só cansar. É continuar técnica mesmo com o coração a acelerar.',
    'A tua forma sob fadiga diz muito sobre a técnica que realmente ficou sólida.'
  ]
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const CATEGORY_META = {
  seogi: { label: 'Seogi', hangul: '서기', translation: 'Posições', art: ART.stance },
  makki: { label: 'Makki', hangul: '막기', translation: 'Defesas', art: ART.block },
  son: { label: 'Jireugi · Chigi', hangul: '지르기 · 치기', translation: 'Mãos e ataques', art: ART.punch },
  chagi: { label: 'Chagi', hangul: '차기', translation: 'Pontapés', art: ART.roundKick },
  poomsae: { label: 'Poomsae', hangul: '품새', translation: 'Formas', art: ART.poomsae }
};

const LEVEL_META = {
  fundamental: { label: 'Fundamentos', short: 'Fund.' },
  intermediate: { label: 'Intermédio', short: 'Interm.' },
  advanced: { label: 'Avançado', short: 'Avanç.' },
  dan: { label: '1.º Dan', short: 'Dan' }
};

const CURRICULUM_LEVEL_META = {
  current_focus: 'Foco atual',
  preview: 'Prévia',
  reference_only: 'Só referência'
};

const STATUS_META = {
  not_started: { label: 'Por iniciar', icon: '○', next: 'learning' },
  learning: { label: 'A aprender', icon: '◔', next: 'solid' },
  solid: { label: 'Sólida', icon: '●', next: 'mastered' },
  mastered: { label: 'Dominada', icon: '★', next: 'not_started' }
};

const slugify = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const CURRENT_FOCUS_EXTRAS = new Set(['Palkup chigi', 'Taegeuk Sa Jang', 'Taegeuk Oh Jang']);
const PREVIEW_OVERRIDES = new Set(['Bandae dollyo chagi', 'Huryeo chagi']);
const curriculumLevelFor = (name, level) => {
  if (level === 'dan' || name === 'Koryo' || name === '540 dollyo chagi') return 'reference_only';
  if ((level === 'fundamental' || CURRENT_FOCUS_EXTRAS.has(name)) && !PREVIEW_OVERRIDES.has(name)) return 'current_focus';
  return 'preview';
};
const tech = (name, category, translation, level, notes = '') => ({
  id: slugify(name), name, koreanName: name, portugueseName: translation, category, translation, level, notes,
  curriculumLevel: curriculumLevelFor(name, level), mediaKey: name
});

const curriculumTechniques = [
  tech('Moa seogi','seogi','posição fechada','fundamental','Pés juntos e postura vertical.'),
  tech('Narani seogi','seogi','posição paralela','fundamental','Pés paralelos e peso equilibrado.'),
  tech('Ap seogi','seogi','posição curta à frente','fundamental','Base natural usada nas primeiras poomsae.'),
  tech('Ap kubi','seogi','posição longa à frente','fundamental','Joelho da frente fletido e perna de trás estável.'),
  tech('Dwit kubi','seogi','posição recuada','fundamental','Maior parte do peso na perna de trás.'),
  tech('Juchum seogi','seogi','posição de cavalo','fundamental','Pés paralelos, joelhos abertos e centro baixo.'),
  tech('Beom seogi','seogi','posição de tigre','intermediate','Base curta, leve e preparada para transição.'),
  tech('Kkoa seogi','seogi','posição cruzada','intermediate','Pernas cruzadas com controlo do centro.'),
  tech('Oreun seogi','seogi','posição direita','intermediate','Orientação específica da base para a direita.'),
  tech('Wen seogi','seogi','posição esquerda','intermediate','Orientação específica da base para a esquerda.'),
  tech('Dwit kkoa seogi','seogi','posição cruzada por trás','advanced','Usada em transições e poomsae avançadas.'),
  tech('Hakdari seogi','seogi','posição de grou numa perna','advanced','Equilíbrio unilateral com joelho elevado.'),

  tech('Arae makki','makki','defesa baixa','fundamental','Protege a zona inferior com trajetória definida.'),
  tech('Momtong an makki','makki','defesa média para dentro','fundamental','Antebraço entra em direção ao centro.'),
  tech('Momtong bakkat makki','makki','defesa média para fora','fundamental','Antebraço termina fora da linha central.'),
  tech('Eolgul makki','makki','defesa alta','fundamental','Protege a cabeça sem levantar o ombro.'),
  tech('Sonnal momtong makki','makki','defesa média com mão aberta','fundamental','Lâmina da mão ativa e base estável.'),
  tech('Hansonnal momtong bakkat makki','makki','defesa exterior com uma mão aberta','intermediate','Uma mão executa enquanto a outra recolhe.'),
  tech('Batangson momtong makki','makki','defesa média com palma','intermediate','Usa a base da palma para desviar.'),
  tech('Hecheo makgi','makki','defesa de abertura','intermediate','Dois braços abrem em sentidos opostos.'),
  tech('Geodeureo arae makki','makki','defesa baixa assistida','intermediate','Uma mão apoia a técnica principal.'),
  tech('Geodeureo momtong makki','makki','defesa média assistida','advanced','Defesa reforçada por mão de apoio.'),
  tech('An palmok momtong makki','makki','defesa média com interior do antebraço','advanced','Define a superfície de contacto do antebraço.'),
  tech('Sonnal bitureo makki','makki','defesa torcida com mão aberta','advanced','Técnica de direção oblíqua e controlo fino.'),

  tech('Momtong jireugi','son','soco médio','fundamental','Soco direto à zona média com rotação final.'),
  tech('Eolgul jireugi','son','soco alto','fundamental','Soco direto à zona alta mantendo o ombro baixo.'),
  tech('Arae jireugi','son','soco baixo','fundamental','Soco direto à zona inferior.'),
  tech('Sonnal mok chigi','son','ataque ao pescoço com mão aberta','fundamental','Lâmina da mão e trajetória controlada.'),
  tech('Deung jumeok ap chigi','son','ataque frontal com costas do punho','fundamental','Trajetória curta e recolha rápida.'),
  tech('Me jumeok naeryo chigi','son','ataque descendente com punho martelo','fundamental','Golpe vertical sem perder a postura.'),
  tech('Palkup chigi','son','ataque de cotovelo','intermediate','Técnica curta com rotação do tronco.'),
  tech('Batangson momtong an chigi','son','ataque interior com palma','intermediate','Palma entra com controlo à zona média.'),
  tech('Pyonsonkkeut sewo jireugi','son','ataque vertical com pontas dos dedos','intermediate','Dedos unidos e punho alinhado.'),
  tech('Jecho jireugi','son','soco invertido','intermediate','Punho termina com a palma voltada para cima.'),
  tech('Pyonsonkkeut geodeureo sewo jjireugi','son','soco assistido','intermediate','A segunda mão apoia a ação principal.'),
  tech('Pyojeok jireugi','son','soco a alvo','intermediate','Ataque dirigido a uma mão-alvo.'),
  tech('Dangkyo teok jireugi','son','soco ao queixo puxando o alvo','advanced','Coordena puxar e atacar.'),
  tech('Murup chigi','son','ataque de joelho','advanced','Joelho sobe em linha com controlo da guarda.'),
  tech('Agwison mok chigi','son','ataque ao pescoço com mão em arco','advanced','Técnica avançada de mão e precisão.'),
  tech('Bam jumeok jireugi','son','soco com nó dos dedos','advanced','Superfície de contacto pequena e precisa.'),

  tech('Ap chagi','chagi','pontapé frontal','fundamental','Câmara, extensão e recolha em linha.'),
  tech('Dollyo chagi','chagi','pontapé circular','fundamental','Pivota o pé de apoio e roda a anca.'),
  tech('Yop chagi','chagi','pontapé lateral','fundamental','Empurra o alvo com o calcanhar.'),
  tech('Dwi chagi','chagi','pontapé para trás','fundamental','Olha sobre o ombro e chuta em linha.'),
  tech('Naeryo chagi','chagi','pontapé descendente','fundamental','Sobe controlado e desce sem bloquear o joelho.'),
  tech('Mireo chagi','chagi','pontapé de empurrar','fundamental','Extensão para afastar mantendo equilíbrio.'),
  tech('Bandae dollyo chagi','chagi','pontapé circular reverso','intermediate','Rotação completa e contacto controlado.'),
  tech('Huryeo chagi','chagi','pontapé em chicote','intermediate','Trajetória de gancho com recolha rápida.'),
  tech('An chagi','chagi','pontapé circular para dentro','intermediate','Perna descreve arco de fora para dentro.'),
  tech('Bakkat chagi','chagi','pontapé circular para fora','intermediate','Perna descreve arco de dentro para fora.'),
  tech('Bitureo chagi','chagi','pontapé torcido','intermediate','Trabalha ângulo de anca e direção oblíqua.'),
  tech('Twio ap chagi','chagi','pontapé frontal com salto','advanced','Elevação e aterragem controladas.'),
  tech('Twio dollyo chagi','chagi','pontapé circular com salto','advanced','Pivota no ar e aterra com equilíbrio.'),
  tech('Twio yop chagi','chagi','pontapé lateral com salto','advanced','Linha lateral e controlo da aterragem.'),
  tech('Twio dwi chagi','chagi','pontapé para trás com salto','advanced','Rotação curta, visão e extensão em linha.'),
  tech('Gawi chagi','chagi','pontapé tesoura','advanced','Coordenação de duas pernas no ar.'),
  tech('Narae chagi','chagi','pontapés circulares alternados no ar','advanced','Coordenação rápida de ambos os lados.'),
  tech('540 dollyo chagi','chagi','pontapé circular com rotação 540°','dan','Técnica acrobática para treino supervisionado.'),


  tech('Gyeotdari seogi','seogi','posição assistida','advanced','Pés próximos, joelhos flexionados e peso controlado.'),
  tech('Ogeum seogi','seogi','posição com joelhos cruzados','advanced','Posição especial com controlo rigoroso do equilíbrio.'),
  tech('Gawi makgi','makki','defesa tesoura','advanced','Uma defesa média e uma defesa baixa executadas simultaneamente.'),
  tech('Nulleo makgi','makki','defesa pressionada','advanced','A palma ou antebraço pressiona a linha de ataque para baixo.'),
  tech('Oesanteul makgi','makki','meia defesa montanha','advanced','Defesas simultâneas em níveis diferentes.'),
  tech('Geumgang makgi','makki','defesa diamante','dan','Combina defesa alta com defesa lateral ou baixa.'),
  tech('Hwangso makgi','makki','defesa chifres de touro','dan','Dois antebraços protegem a cabeça em ângulo.'),
  tech('Danggyeo jireugi','son','soco com puxão','advanced','Uma mão puxa e a outra ataca em trajetória curta.'),
  tech('Dollyeo jireugi','son','soco circular','advanced','O punho percorre uma trajetória circular curta.'),
  tech('Chi jireugi','son','soco ascendente','advanced','Punho sobe verticalmente em direção ao queixo.'),
  tech('Sewo jireugi','son','soco vertical','advanced','Punho termina vertical sem perder o alinhamento do pulso.'),
  tech('Geodeureo chigi','son','golpe assistido','advanced','A segunda mão apoia o golpe principal.'),
  tech('Bakkat chigi','son','golpe exterior','advanced','Golpe percorre a linha de dentro para fora.'),
  tech('Pyojeok chigi','son','golpe a alvo','advanced','Golpe termina numa mão-alvo claramente posicionada.'),
  tech('Bada makgi','makki','defesa de absorção','advanced','Amortece a força recebida com mão ou pé sem bloquear a articulação.'),
  tech('Naeryeo makgi','makki','defesa descendente','intermediate','Desvia o ataque de cima para baixo.'),
  tech('Santeul makgi','makki','defesa montanha','advanced','Os dois antebraços protegem simultaneamente ambos os lados da cabeça.'),
  tech('Ollyeo makgi','makki','defesa ascendente','intermediate','Interceta o ataque numa trajetória de baixo para cima.'),
  tech('Cha makgi','makki','defesa com a perna ou o pé','advanced','Usa a perna para intercetar mantendo controlo e distância.'),
  tech('Yeom makgi','makki','defesa lateral','advanced','Protege contra um ataque proveniente do lado.'),
  tech('Chye makgi','makki','defesa por impacto','advanced','Encontra a linha de ataque com mão ou antebraço.'),
  tech('Digeutja jireugi','son','soco duplo em forma de ㄷ','dan','Combina um soco alto e um soco invertido em níveis diferentes.'),
  tech('Yeop jireugi','son','soco lateral','intermediate','Soco reto executado após orientar o corpo para o lado.'),
  tech('Naeryeo jireugi','son','soco descendente','advanced','Soco vertical dirigido a um alvo abaixo.'),
  tech('Geumgang jireugi','son','defesa alta e soco simultâneos','dan','Uma mão protege acima enquanto a outra ataca.'),
  tech('Dwi jireugi','son','soco para trás','advanced','Ataque a um alvo atrás com rotação controlada da cintura.'),
  tech('Chetdari jireugi','son','soco duplo em forquilha','advanced','Dois punhos estendem-se em linhas divergentes à zona média.'),
  tech('Dollyeo chigi','son','golpe circular','intermediate','Golpe curvo produzido pela rotação do corpo.'),
  tech('Biteureo chigi','son','golpe com torção','advanced','Tronco e lado avançado criam uma ação de torção oposta.'),
  tech('Yeop chigi','son','golpe lateral','intermediate','Golpe dirigido a um alvo situado ao lado.'),
  tech('Naeryeo chigi','son','golpe descendente','intermediate','Golpeia de cima para baixo numa linha controlada.'),
  tech('Dwi chigi','son','golpe para trás','advanced','Golpe dirigido a um alvo localizado atrás.'),
  tech('An chigi','son','golpe para dentro','intermediate','Trajetória de fora para dentro em direção à linha central.'),
  tech('Ollyeo chigi','son','golpe ascendente','advanced','Golpe curto numa trajetória de baixo para cima.'),
  tech('Danggyeo chigi','son','golpe com puxão','advanced','Uma mão controla e puxa enquanto a outra golpeia.'),
  tech('Ap chigi','son','golpe frontal','intermediate','Golpe curto e direto para um alvo à frente.'),
  tech('Jebipum chigi','son','golpe em forma de andorinha','advanced','Combina uma proteção alta com um golpe frontal coordenado.'),
  tech('Sonnal geodeureo makgi → pyonsonkkeut geodeureo sewo jjireugi','son','defesa assistida e ataque de dedos','advanced','Combinação de Taegeuk Sa Jang: controlar e responder em linha.'),
  tech('Momtong bakkat makgi → ap chagi → momtong jireugi','son','defesa, pontapé frontal e soco','intermediate','Combinação linear com regresso à base antes do soco.'),
  tech('Pyojeok an chagi → palkup pyojeok chigi','son','pontapé a alvo e cotovelo a alvo','advanced','Mantém a mão-alvo estável e controla a distância.'),
  tech('An palmok momtong makgi → momtong baro jireugi','son','defesa média e contra-ataque','intermediate','Defesa curta seguida de resposta direta.'),

  tech('Taegeuk Il Jang','poomsae','primeira forma Taegeuk','fundamental','Keon; início da progressão Taegeuk.'),
  tech('Taegeuk I Jang','poomsae','segunda forma Taegeuk','fundamental','Progressão de bases, defesas e ataques.'),
  tech('Taegeuk Sam Jang','poomsae','terceira forma Taegeuk','fundamental','Integra novas combinações e ritmo.'),
  tech('Taegeuk Sa Jang','poomsae','quarta forma Taegeuk','intermediate','Introduz técnicas e transições mais complexas.'),
  tech('Taegeuk Oh Jang','poomsae','quinta forma Taegeuk','intermediate','Foco em estabilidade e potência coordenada.'),
  tech('Taegeuk Yuk Jang','poomsae','sexta forma Taegeuk','advanced','Amplia repertório e controlo de direção.'),
  tech('Taegeuk Chil Jang','poomsae','sétima forma Taegeuk','advanced','Exige maior variedade de bases e técnicas.'),
  tech('Taegeuk Pal Jang','poomsae','oitava forma Taegeuk','advanced','Última Taegeuk antes da progressão de Dan.'),
  tech('Koryo','poomsae','primeira poomsae de Dan','dan','Poomsae associada à entrada no percurso de cinto negro.')
];

const TECHNIQUE_MEDIA = {
  "Moa seogi": {
    "src": "assets/techniques/seogi/moa-seogi.webp",
    "status": "validated",
    "portugueseName": "posição fechada",
    "category": "seogi",
    "notes": "Pés visivelmente juntos, joelhos estendidos e postura vertical sem deslocação de peso ambígua."
  },
  "Narani seogi": {
    "src": "assets/techniques/seogi/narani-seogi.webp",
    "status": "validated",
    "portugueseName": "posição paralela",
    "category": "seogi",
    "notes": "Pés paralelos à largura adequada e peso visualmente equilibrado."
  },
  "Ap seogi": {
    "src": "assets/techniques/seogi/ap-seogi.webp",
    "status": "validated",
    "portugueseName": "posição curta à frente",
    "category": "seogi",
    "notes": "Base curta à frente claramente distinta de uma base longa; ambos os pés são visíveis."
  },
  "Ap kubi": {
    "src": "assets/techniques/seogi/ap-kubi.webp",
    "status": "validated",
    "portugueseName": "posição longa à frente",
    "category": "seogi",
    "notes": "Base longa com joelho dianteiro fletido, perna traseira estável e anca enquadrada."
  },
  "Dwit kubi": {
    "src": "https://wt-korea.com/wp-content/uploads/2017/10/K640_04-Dwitkubi-Backward-inflection-stance-e1508707062257.jpg",
    "status": "validated",
    "portugueseName": "posição recuada",
    "category": "seogi",
    "notes": "Fonte técnica identificada como Dwitkubi; a posição recuada e o peso dominante na perna traseira são visíveis.",
    "source": "WT-Korea · Frank Kiyun Kim",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "external": true
  },
  "Juchum seogi": {
    "src": "assets/techniques/seogi/juchum-seogi.webp",
    "status": "validated",
    "portugueseName": "posição de cavalo",
    "category": "seogi",
    "notes": "Pés paralelos, base larga, joelhos fletidos e centro de gravidade baixo."
  },
  "Beom seogi": {
    "src": null,
    "status": "missing",
    "portugueseName": "posição de tigre",
    "category": "seogi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Beom seogi. A aplicação mostra um marcador neutro."
  },
  "Kkoa seogi": {
    "src": "assets/techniques/seogi/kkoa-seogi.webp",
    "status": "validated",
    "portugueseName": "posição cruzada",
    "category": "seogi",
    "notes": "Pernas claramente cruzadas e centro controlado."
  },
  "Oreun seogi": {
    "src": null,
    "status": "missing",
    "portugueseName": "posição direita",
    "category": "seogi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Oreun seogi. A aplicação mostra um marcador neutro."
  },
  "Wen seogi": {
    "src": null,
    "status": "missing",
    "portugueseName": "posição esquerda",
    "category": "seogi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Wen seogi. A aplicação mostra um marcador neutro."
  },
  "Dwit kkoa seogi": {
    "src": null,
    "status": "missing",
    "portugueseName": "posição cruzada por trás",
    "category": "seogi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Dwit kkoa seogi. A aplicação mostra um marcador neutro."
  },
  "Hakdari seogi": {
    "src": "assets/techniques/seogi/hakdari-seogi.webp",
    "status": "validated",
    "portugueseName": "posição de grou numa perna",
    "category": "seogi",
    "notes": "Apoio inequívoco numa perna com o joelho oposto elevado."
  },
  "Arae makki": {
    "src": "assets/techniques/makki/arae-makki.webp",
    "status": "validated",
    "portugueseName": "defesa baixa",
    "category": "makki",
    "notes": "Antebraço termina abaixo da cintura, mão oposta recolhida e base estável."
  },
  "Momtong an makki": {
    "src": "https://wt-korea.com/wp-content/uploads/2017/10/K640_02-Momtong-Makki-Body-blocking-e1508789885725.jpg",
    "status": "validated",
    "portugueseName": "defesa média para dentro",
    "category": "makki",
    "notes": "Fonte identifica Momtong Makki e apresenta Bakkat Makki separadamente; usada para a variante interior.",
    "source": "WT-Korea · Frank Kiyun Kim",
    "sourceUrl": "https://wt-korea.com/makki-blocking/",
    "external": true
  },
  "Momtong bakkat makki": {
    "src": "https://wt-korea.com/wp-content/uploads/2017/10/K640_04-Momtong-Bakkat-Makki-Outer-body-blocking-e1508789904640.jpg",
    "status": "validated",
    "portugueseName": "defesa média para fora",
    "category": "makki",
    "notes": "Fonte identifica explicitamente Momtong Bakkat Makki, a defesa média para fora.",
    "source": "WT-Korea · Frank Kiyun Kim",
    "sourceUrl": "https://wt-korea.com/makki-blocking/",
    "external": true
  },
  "Eolgul makki": {
    "src": "assets/techniques/makki/eolgul-makki.webp",
    "status": "validated",
    "portugueseName": "defesa alta",
    "category": "makki",
    "notes": "Antebraço protege claramente a zona superior da cabeça, com mão oposta recolhida."
  },
  "Sonnal momtong makki": {
    "src": "https://wt-korea.com/wp-content/uploads/2017/10/K640_05-Sonnal-Makki-Handblade-blocking-e1508789917457.jpg",
    "status": "validated",
    "portugueseName": "defesa média com mão aberta",
    "category": "makki",
    "notes": "Fonte identifica Sonnal Makki e mostra a defesa com a lâmina da mão.",
    "source": "WT-Korea · Frank Kiyun Kim",
    "sourceUrl": "https://wt-korea.com/makki-blocking/",
    "external": true
  },
  "Hansonnal momtong bakkat makki": {
    "src": null,
    "status": "missing",
    "portugueseName": "defesa exterior com uma mão aberta",
    "category": "makki",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Hansonnal momtong bakkat makki. A aplicação mostra um marcador neutro."
  },
  "Batangson momtong makki": {
    "src": "assets/placeholders/review/batangson-momtong-makki.webp",
    "status": "needs_review",
    "portugueseName": "defesa média com palma",
    "category": "makki",
    "notes": "A palma está visível, mas a imagem não distingue defesa com base da palma de um ataque de palma."
  },
  "Hecheo makgi": {
    "src": null,
    "status": "missing",
    "portugueseName": "defesa de abertura",
    "category": "makki",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Hecheo makgi. A aplicação mostra um marcador neutro."
  },
  "Geodeureo arae makki": {
    "src": null,
    "status": "missing",
    "portugueseName": "defesa baixa assistida",
    "category": "makki",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Geodeureo arae makki. A aplicação mostra um marcador neutro."
  },
  "Geodeureo momtong makki": {
    "src": null,
    "status": "missing",
    "portugueseName": "defesa média assistida",
    "category": "makki",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Geodeureo momtong makki. A aplicação mostra um marcador neutro."
  },
  "An palmok momtong makki": {
    "src": null,
    "status": "missing",
    "portugueseName": "defesa média com interior do antebraço",
    "category": "makki",
    "notes": "Não existe uma imagem individual tecnicamente verificável para An palmok momtong makki. A aplicação mostra um marcador neutro."
  },
  "Sonnal bitureo makki": {
    "src": "assets/placeholders/review/sonnal-bitureo-makki.webp",
    "status": "needs_review",
    "portugueseName": "defesa torcida com mão aberta",
    "category": "makki",
    "notes": "A direção torcida/oblíqua não é visível; a pose é semelhante a outras técnicas de mão aberta."
  },
  "Momtong jireugi": {
    "src": "assets/techniques/jireugi-chigi/momtong-jireugi.webp",
    "status": "validated",
    "portugueseName": "soco médio",
    "category": "jireugi-chigi",
    "notes": "Soco direto ao nível médio, punho alinhado e mão oposta recolhida."
  },
  "Eolgul jireugi": {
    "src": "https://wt-korea.com/wp-content/uploads/2017/11/Olgul-Jirugie-Daniel.jpg",
    "status": "validated",
    "portugueseName": "soco alto",
    "category": "jireugi-chigi",
    "notes": "Fonte identifica explicitamente Olgul Jireugi, grafia equivalente a Eolgul Jireugi.",
    "source": "WT-Korea · Frank Kiyun Kim",
    "sourceUrl": "https://wt-korea.com/jireugi-punch/",
    "external": true
  },
  "Arae jireugi": {
    "src": null,
    "status": "missing",
    "portugueseName": "soco baixo",
    "category": "jireugi-chigi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Arae jireugi. A aplicação mostra um marcador neutro."
  },
  "Sonnal mok chigi": {
    "src": "assets/techniques/jireugi-chigi/sonnal-mok-chigi.webp",
    "status": "validated",
    "portugueseName": "ataque ao pescoço com mão aberta",
    "category": "jireugi-chigi",
    "notes": "Mão aberta em trajetória lateral à altura do pescoço e mão oposta recolhida."
  },
  "Deung jumeok ap chigi": {
    "src": "https://wt-korea.com/wp-content/uploads/2017/10/K640_01-Ap-Chigi-Back-Fist-Strike-e1508962998155.jpg",
    "status": "validated",
    "portugueseName": "ataque frontal com costas do punho",
    "category": "jireugi-chigi",
    "notes": "Fonte identifica Ap Chigi como ataque frontal com as costas do punho.",
    "source": "WT-Korea · Frank Kiyun Kim",
    "sourceUrl": "https://wt-korea.com/chigi-strike/",
    "external": true
  },
  "Me jumeok naeryo chigi": {
    "src": null,
    "status": "missing",
    "portugueseName": "ataque descendente com punho martelo",
    "category": "jireugi-chigi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Me jumeok naeryo chigi. A aplicação mostra um marcador neutro."
  },
  "Palkup chigi": {
    "src": "assets/techniques/jireugi-chigi/palkup-chigi.webp",
    "status": "validated",
    "portugueseName": "ataque de cotovelo",
    "category": "jireugi-chigi",
    "notes": "Cotovelo horizontal claramente usado como superfície de ataque; não é um soco."
  },
  "Batangson momtong an chigi": {
    "src": null,
    "status": "missing",
    "portugueseName": "ataque interior com palma",
    "category": "jireugi-chigi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Batangson momtong an chigi. A aplicação mostra um marcador neutro."
  },
  "Pyonsonkkeut sewo jireugi": {
    "src": "assets/techniques/jireugi-chigi/pyonsonkkeut-sewo-jireugi.webp",
    "status": "validated",
    "portugueseName": "ataque vertical com pontas dos dedos",
    "category": "jireugi-chigi",
    "notes": "Dedos unidos em posição vertical e trajetória frontal claramente visíveis."
  },
  "Jecho jireugi": {
    "src": "https://wt-korea.com/wp-content/uploads/2017/10/K640_03-Jeocho-Jireugi-Backward-Punch-e1508791994962.jpg",
    "status": "validated",
    "portugueseName": "soco invertido",
    "category": "jireugi-chigi",
    "notes": "Fonte identifica Jeocho Jireugi, variante ortográfica de Jecho Jireugi, com o punho voltado para cima.",
    "source": "WT-Korea · Frank Kiyun Kim",
    "sourceUrl": "https://wt-korea.com/jireugi-punch/",
    "external": true
  },
  "Pyonsonkkeut geodeureo sewo jjireugi": {
    "src": null,
    "status": "missing",
    "portugueseName": "soco assistido",
    "category": "jireugi-chigi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Pyonsonkkeut geodeureo sewo jjireugi. A aplicação mostra um marcador neutro."
  },
  "Pyojeok jireugi": {
    "src": null,
    "status": "missing",
    "portugueseName": "soco a alvo",
    "category": "jireugi-chigi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Pyojeok jireugi. A aplicação mostra um marcador neutro."
  },
  "Dangkyo teok jireugi": {
    "src": "assets/placeholders/review/dangkyo-teok-jireugi.webp",
    "status": "needs_review",
    "portugueseName": "soco ao queixo puxando o alvo",
    "category": "jireugi-chigi",
    "notes": "Rejeitada como demonstração: não mostra a ação de puxar o alvo para o soco ao queixo."
  },
  "Murup chigi": {
    "src": null,
    "status": "missing",
    "portugueseName": "ataque de joelho",
    "category": "jireugi-chigi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Murup chigi. A aplicação mostra um marcador neutro."
  },
  "Agwison mok chigi": {
    "src": null,
    "status": "missing",
    "portugueseName": "ataque ao pescoço com mão em arco",
    "category": "jireugi-chigi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Agwison mok chigi. A aplicação mostra um marcador neutro."
  },
  "Bam jumeok jireugi": {
    "src": null,
    "status": "missing",
    "portugueseName": "soco com nó dos dedos",
    "category": "jireugi-chigi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Bam jumeok jireugi. A aplicação mostra um marcador neutro."
  },
  "Ap chagi": {
    "src": "assets/techniques/chagi/ap-chagi.webp",
    "status": "validated",
    "portugueseName": "pontapé frontal",
    "category": "chagi",
    "notes": "Extensão frontal em linha, joelho dirigido ao alvo e superfície plantar visível."
  },
  "Dollyo chagi": {
    "src": "https://wt-korea.com/wp-content/uploads/2017/10/Dollyo-Chagi-Roundhouse-Kick.jpg",
    "status": "validated",
    "portugueseName": "pontapé circular",
    "category": "chagi",
    "notes": "Fonte identifica explicitamente Dollyo Chagi (roundhouse kick).",
    "source": "WT-Korea · Frank Kiyun Kim",
    "sourceUrl": "https://wt-korea.com/chagi-kicking/",
    "external": true
  },
  "Yop chagi": {
    "src": "assets/techniques/chagi/yop-chagi.webp",
    "status": "validated",
    "portugueseName": "pontapé lateral",
    "category": "chagi",
    "notes": "Extensão lateral com calcanhar dirigido ao alvo e anca rodada de perfil."
  },
  "Dwi chagi": {
    "src": "assets/techniques/chagi/dwi-chagi.webp",
    "status": "validated",
    "portugueseName": "pontapé para trás",
    "category": "chagi",
    "notes": "Corpo rodado, olhar sobre o ombro e extensão do calcanhar para trás em linha."
  },
  "Naeryo chagi": {
    "src": "assets/placeholders/review/naeryo-chagi.webp",
    "status": "needs_review",
    "portugueseName": "pontapé descendente",
    "category": "chagi",
    "notes": "A perna está elevada, mas a trajetória descendente característica não é representada."
  },
  "Mireo chagi": {
    "src": "assets/placeholders/review/mireo-chagi.webp",
    "status": "needs_review",
    "portugueseName": "pontapé de empurrar",
    "category": "chagi",
    "notes": "Rejeitada como demonstração: a pose parece um pontapé lateral/alto e não evidencia ação de empurrar."
  },
  "Bandae dollyo chagi": {
    "src": "assets/placeholders/review/bandae-dollyo-chagi.webp",
    "status": "needs_review",
    "portugueseName": "pontapé circular reverso",
    "category": "chagi",
    "notes": "A imagem sugere rotação, mas a técnica efetiva continua ambígua numa pose única."
  },
  "Huryeo chagi": {
    "src": "assets/placeholders/review/huryeo-chagi.webp",
    "status": "needs_review",
    "portugueseName": "pontapé em chicote",
    "category": "chagi",
    "notes": "A trajetória de gancho e a recolha não são inequívocas; a pose confunde-se com outros pontapés altos."
  },
  "An chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé circular para dentro",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para An chagi. A aplicação mostra um marcador neutro."
  },
  "Bakkat chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé circular para fora",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Bakkat chagi. A aplicação mostra um marcador neutro."
  },
  "Bitureo chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé torcido",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Bitureo chagi. A aplicação mostra um marcador neutro."
  },
  "Twio ap chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé frontal com salto",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Twio ap chagi. A aplicação mostra um marcador neutro."
  },
  "Twio dollyo chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé circular com salto",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Twio dollyo chagi. A aplicação mostra um marcador neutro."
  },
  "Twio yop chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé lateral com salto",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Twio yop chagi. A aplicação mostra um marcador neutro."
  },
  "Twio dwi chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé para trás com salto",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Twio dwi chagi. A aplicação mostra um marcador neutro."
  },
  "Gawi chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé tesoura",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Gawi chagi. A aplicação mostra um marcador neutro."
  },
  "Narae chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapés circulares alternados no ar",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Narae chagi. A aplicação mostra um marcador neutro."
  },
  "540 dollyo chagi": {
    "src": null,
    "status": "missing",
    "portugueseName": "pontapé circular com rotação 540°",
    "category": "chagi",
    "notes": "Não existe uma imagem individual tecnicamente verificável para 540 dollyo chagi. A aplicação mostra um marcador neutro."
  },
  "Taegeuk Il Jang": {
    "src": "assets/poomsae/representative-pose.webp",
    "status": "representative_only",
    "portugueseName": "primeira forma Taegeuk",
    "category": "poomsae",
    "notes": "Pose genérica de poomsae, mantida apenas como ilustração representativa; não demonstra a sequência completa."
  },
  "Taegeuk I Jang": {
    "src": null,
    "status": "missing",
    "portugueseName": "segunda forma Taegeuk",
    "category": "poomsae",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Taegeuk I Jang. A aplicação mostra um marcador neutro."
  },
  "Taegeuk Sam Jang": {
    "src": null,
    "status": "missing",
    "portugueseName": "terceira forma Taegeuk",
    "category": "poomsae",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Taegeuk Sam Jang. A aplicação mostra um marcador neutro."
  },
  "Taegeuk Sa Jang": {
    "src": null,
    "status": "missing",
    "portugueseName": "quarta forma Taegeuk",
    "category": "poomsae",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Taegeuk Sa Jang. A aplicação mostra um marcador neutro."
  },
  "Taegeuk Oh Jang": {
    "src": null,
    "status": "missing",
    "portugueseName": "quinta forma Taegeuk",
    "category": "poomsae",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Taegeuk Oh Jang. A aplicação mostra um marcador neutro."
  },
  "Taegeuk Yuk Jang": {
    "src": null,
    "status": "missing",
    "portugueseName": "sexta forma Taegeuk",
    "category": "poomsae",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Taegeuk Yuk Jang. A aplicação mostra um marcador neutro."
  },
  "Taegeuk Chil Jang": {
    "src": null,
    "status": "missing",
    "portugueseName": "sétima forma Taegeuk",
    "category": "poomsae",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Taegeuk Chil Jang. A aplicação mostra um marcador neutro."
  },
  "Taegeuk Pal Jang": {
    "src": null,
    "status": "missing",
    "portugueseName": "oitava forma Taegeuk",
    "category": "poomsae",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Taegeuk Pal Jang. A aplicação mostra um marcador neutro."
  },
  "Koryo": {
    "src": null,
    "status": "missing",
    "portugueseName": "primeira poomsae de Dan",
    "category": "poomsae",
    "notes": "Não existe uma imagem individual tecnicamente verificável para Koryo. A aplicação mostra um marcador neutro."
  }
};


// Fotografias reais específicas para técnicas de braços.
// As fontes ficam creditadas no próprio ecrã; os ficheiros são locais para funcionar offline.
const ARM_REAL_MEDIA = {
  'Arae makki': { photos: [{ src: 'assets/real-arm/arae-makki.webp', label: 'Defesa baixa' }], contact: 'parte exterior do antebraço, junto ao pulso', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/makki-blocking/' },
  'Eolgul makki': { photos: [{ src: 'assets/real-arm/eolgul-makki.webp', label: 'Defesa alta' }], contact: 'parte exterior do antebraço, junto ao pulso', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/makki-blocking/' },
  'Momtong an makki': { photos: [{ src: 'assets/real-arm/momtong-an-makki.webp', label: 'Defesa para dentro' }], contact: 'parte exterior do antebraço, junto ao pulso', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/makki-blocking/' },
  'Momtong bakkat makki': { photos: [{ src: 'assets/real-arm/momtong-bakkat-makki.webp', label: 'Defesa para fora' }], contact: 'parte exterior do antebraço, junto ao pulso', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/makki-blocking/' },
  'Sonnal momtong makki': { photos: [{ src: 'assets/real-arm/sonnal-momtong-makki.webp', label: 'Mão-faca em defesa' }], contact: 'lâmina da mão: bordo do lado do dedo mínimo', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/makki-blocking/' },
  'Sonnal mok chigi': { photos: [{ src: 'assets/real-arm/sonnal-mok-pose.webp', label: 'Posição final real' }, { src: 'assets/real-arm/sonnal-mok-contact.webp', label: 'Zona de contacto' }], contact: 'lâmina da mão: base musculada do lado do dedo mínimo', source: 'Pavel Antonsson · Jidokwan/Kukkiwon 4.º Dan', sourceUrl: 'https://antonssonshihan.wordpress.com/2022/12/15/taekwondo-terminologi-sonnal-mok-chigi/' },
  'Momtong jireugi': { photos: [{ src: 'assets/real-arm/momtong-jireugi.webp', label: 'Soco médio' }], contact: 'dois nós grandes: indicador e médio; pulso direito', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/jireugi-punch/' },
  'Eolgul jireugi': { photos: [{ src: 'assets/real-arm/eolgul-jireugi.webp', label: 'Soco alto' }], contact: 'dois nós grandes: indicador e médio; pulso direito', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/jireugi-punch/' },
  'Deung jumeok ap chigi': { photos: [{ src: 'assets/real-arm/deung-jumeok.webp', label: 'Costas do punho' }], contact: 'costas dos dois primeiros nós do punho', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/chigi-strike/' },
  'Me jumeok naeryo chigi': { photos: [{ src: 'assets/real-arm/me-jumeok-naeryo.webp', label: 'Martelo descendente real' }], contact: 'base do punho fechado, do lado do dedo mínimo', source: 'Pavel Antonsson · Jidokwan/Kukkiwon 4.º Dan', sourceUrl: 'https://antonssonshihan.wordpress.com/2023/07/28/mejumeok-naeryo-chigi/' },
  'Palkup chigi': { photos: [{ src: 'assets/real-arm/palkup-chigi.webp', label: 'Exemplo: palkup dollyo chigi' }], contact: 'ponta óssea do cotovelo; não o antebraço', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/chigi-strike/' },
  'Pyonsonkkeut sewo jireugi': { photos: [{ src: 'assets/real-arm/pyonsonkkeut-1.webp', label: '1 · Câmara' }, { src: 'assets/real-arm/pyonsonkkeut-2.webp', label: '2 · Extensão' }, { src: 'assets/real-arm/pyonsonkkeut-3.webp', label: '3 · Vista frontal' }], contact: 'pontas dos dedos juntas e alinhadas; exercício sem impacto', source: 'Askim Taekwondo Senter · Master Sy 7.º Dan', sourceUrl: 'https://master-sy.no/4-sa-jang/' },
  'Jecho jireugi': { photos: [{ src: 'assets/real-arm/jecho-jireugi.webp', label: 'Soco invertido real' }], contact: 'dois nós grandes do punho; palma voltada para cima', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/jireugi-punch/' },
  'Hecheo makgi': { photos: [{ src: 'assets/real-arm/hecho-makki.webp', label: 'Variante baixa: arae hecho makki' }], contact: 'parte exterior dos dois antebraços, junto aos pulsos', source: 'Demos Martial Arts School', sourceUrl: 'https://demos-academy.blogspot.com/2015/05/hecho-makki-poin-poin-pelatihan-dan.html' },
  'Batangson momtong makki': { photos: [{ src: 'assets/real-arm/batangson-sequence.webp', label: 'Sequência real' }, { src: 'assets/real-arm/batangson-contact.webp', label: 'Base da palma destacada' }, { src: 'assets/real-arm/batangson-pose.webp', label: 'Vista lateral' }], contact: 'base/“calcanhar” da palma, perto do polegar; não a palma inteira', source: 'Demos Martial Arts School', sourceUrl: 'https://demos-academy.blogspot.com/2015/05/batangson-momtong-makki-latihan-dan.html' },
  'Juchum seogi + momtong jireugi': { photos: [{ src: 'assets/real-arm/momtong-jireugi.webp', label: 'Base firme + soco médio' }], contact: 'dois nós grandes: indicador e médio; pulso direito', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/jireugi-punch/' },
  'Makki + momtong jireugi': { photos: [{ src: 'assets/real-arm/momtong-an-makki.webp', label: '1 · Defesa' }, { src: 'assets/real-arm/momtong-jireugi.webp', label: '2 · Soco' }], contact: 'defesa com o antebraço; soco com os nós do indicador e médio', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/' },
  'Passo + momtong jireugi': { photos: [{ src: 'assets/real-arm/momtong-jireugi.webp', label: 'O passo termina com o soco' }], contact: 'dois nós grandes: indicador e médio; pulso direito', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/jireugi-punch/' },
  'Makki · sequência mista': { photos: [{ src: 'assets/real-arm/arae-makki.webp', label: '1 · Arae' }, { src: 'assets/real-arm/momtong-an-makki.webp', label: '2 · Momtong' }, { src: 'assets/real-arm/eolgul-makki.webp', label: '3 · Eolgul' }], contact: 'parte exterior do antebraço, junto ao pulso, nas três alturas', source: 'WT-Korea · Frank Kiyun Kim', sourceUrl: 'https://wt-korea.com/makki-blocking/' }
};
function getArmRealMedia(name = '') {
  return ARM_REAL_MEDIA[name] || ARM_REAL_MEDIA[name.replace(/\s*·.*$/, '').trim()] || null;
}

const TECHNIQUE_VIDEOS = {
  'Taegeuk Il Jang': { videoId: 'WhkjRruCBTo', title: 'Taegeuk 1 Jang', source: 'Kukkiwon', scope: 'exact' },
  'Taegeuk I Jang': { videoId: 'tGlrUplKHh8', title: 'Taegeuk 2 Jang', source: 'Kukkiwon', scope: 'exact' },
  'Taegeuk Sam Jang': { videoId: 'ksSqKt0UkWo', title: 'Taegeuk 3 Jang', source: 'Kukkiwon', scope: 'exact' },
  'Taegeuk Sa Jang': { videoId: 'Lt917gacJho', title: 'Taegeuk 4 Jang', source: 'Kukkiwon', scope: 'exact' },
  'Taegeuk Oh Jang': { videoId: 'VdqNEAHWCBM', title: 'Taegeuk 5 Jang', source: 'Kukkiwon', scope: 'exact' },
  'Koryo': { videoId: 'mGa60JDtWmg', title: 'Koryo', source: 'Kukkiwon', scope: 'exact' }
};

const SPECIFIC_EXERCISE_ART = {
  "Corrida no lugar": "assets/fitness/corrida-no-lugar.webp",
  "Passos laterais rápidos": "assets/fitness/passos-laterais.webp",
  "Skipping com joelhos altos": "assets/fitness/skips-altos.webp",
  "Calcanhares aos glúteos": "assets/fitness/calcanhares-gluteos.webp",
  "Shadow taekwondo leve": "assets/fitness/shadow-leve.webp",
  "Deslocamento triangular": "assets/fitness/deslocamento-triangular.webp",
  "Pivot e guarda": "assets/fitness/pivot-guarda.webp",
  "Saltos curtos em guarda": "assets/fitness/saltos-guarda.webp",
  "Marcha com rotação de tronco": "assets/fitness/marcha-rotacao.webp",
  "Avanço e recuo em guarda": "assets/fitness/avanco-recuo.webp",
  "Círculos de tornozelo": "assets/mobility/circulos-tornozelo.webp",
  "Joelho sobre o pé": "assets/mobility/joelho-sobre-pe.webp",
  "Abra e fecha a anca": "assets/mobility/abre-fecha-anca.webp",
  "Balanços frontais": "assets/mobility/balancos-frontais.webp",
  "Balanços laterais": "assets/mobility/balancos-laterais.webp",
  "Agachamento cossaco lateral": "assets/mobility/cossack.webp",
  "Lunges dinâmicos": "assets/mobility/lunges-dinamicos.webp",
  "Lunges com rotação": "assets/mobility/lunges-rotacao.webp",
  "Agachamento profundo com apoio": "assets/mobility/agachamento-profundo.webp",
  "Balanço de adutores em quatro apoios": "assets/mobility/adductor-rocks.webp",
  "Rotações de ombro": "assets/mobility/rotacoes-ombro.webp",
  "Rotações de tronco": "assets/mobility/rotacoes-tronco.webp",
  "Alongamento dinâmico de isquiotibiais": "assets/mobility/isquios-dinamico.webp",
  "Alongamento dinâmico do quadríceps": "assets/mobility/quad-dinamico.webp",
  "Gato-camelo": "assets/mobility/gato-camelo.webp",
  "Agachamento controlado": "assets/fitness/strength-squat.webp",
  "Prancha frontal": "assets/fitness/core-plank.webp",
  "Abertura lateral sentada": "assets/mobility/stretch-wide.webp",
  "Combate sombra com alvos imaginários": "assets/fitness/cardio-shadow.webp",
  "Shadow com fintas": "assets/fitness/cardio-shadow.webp",
  "Shadow com explosões de 10 s": "assets/fitness/cardio-shadow.webp"
};

const ONLINE_EXERCISE_ART = {
  "Prancha lateral": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Side_Plank.jpg/500px-Side_Plank.jpg",
    source: "Wikimedia Commons · Jaykayfit · CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Side_Plank.jpg",
    license: "CC BY-SA 3.0"
  },
  "Bird dog controlado": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Bird_dog_exercise.jpg/330px-Bird_dog_exercise.jpg",
    source: "Wikimedia Commons · PTPioneer · CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bird_dog_exercise.jpg",
    license: "CC BY 2.0"
  },
  "Flexões clássicas": {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Push_up_%28PSF%29.png/960px-Push_up_%28PSF%29.png",
    source: "Wikimedia Commons · Pearson Scott Foresman · domínio público",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Push_up_(PSF).png",
    license: "Public domain"
  }
};

const BUNDLED_PHOTO_DATA = {};
function withBundledPhotos(media) {
  return { ...media, photos: (media.photos || []).map(photo => ({ ...photo, src: BUNDLED_PHOTO_DATA[photo.src] || photo.src })) };
}

const REAL_EXERCISE_MEDIA = {
  "Passos em L (Aquecimento)": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-guard-stance.webp",
        "label": "Guarda e base"
      },
      {
        "src": "assets/real-exercise/strength-sprint-guard.webp",
        "label": "Deslocamento com guarda"
      }
    ]
  },
  "Joelho ao peito alternado": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-knee-chest.webp",
        "label": "Joelho ao peito"
      }
    ]
  },
  "Coordenação braço-perna": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-coordination-march.webp",
        "label": "Braço e perna opostos"
      }
    ]
  },
  "Elevação do joelho em câmara": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-front-chamber.webp",
        "label": "Câmara do joelho"
      }
    ]
  },
  "Murup chigi · sem impacto": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-front-chamber.webp",
        "label": "Câmara do joelho"
      }
    ]
  },
  "Yop chagi · retenção": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-side-chamber.webp",
        "label": "Câmara lateral"
      },
      {
        "src": "assets/real-exercise/official-yop-chagi.webp",
        "label": "Extensão lateral"
      }
    ]
  },
  "Naeryo chagi": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-axe-kick.webp",
        "label": "Pontapé descendente"
      }
    ]
  },
  "Bandae dollyo chagi": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-reverse-roundhouse.webp",
        "label": "Pontapé circular inverso"
      }
    ]
  },
  "Huryeo chagi": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-hook-kick.webp",
        "label": "Pontapé gancho"
      }
    ]
  },
  "Ap chagi + dollyo chagi": {
    "photos": [
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "1 · Ap chagi"
      },
      {
        "src": "assets/real-exercise/official-dollyo-chagi.webp",
        "label": "2 · Dollyo chagi"
      }
    ]
  },
  "Dollyo chagi + yop chagi": {
    "photos": [
      {
        "src": "assets/real-exercise/official-dollyo-chagi.webp",
        "label": "1 · Dollyo chagi"
      },
      {
        "src": "assets/real-exercise/official-yop-chagi.webp",
        "label": "2 · Yop chagi"
      }
    ]
  },
  "Ap chagi + dwi chagi": {
    "photos": [
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "1 · Ap chagi"
      },
      {
        "src": "assets/real-exercise/kick-back-kick.webp",
        "label": "2 · Dwi chagi"
      }
    ]
  },
  "Yop chagi + dwi chagi": {
    "photos": [
      {
        "src": "assets/real-exercise/official-yop-chagi.webp",
        "label": "1 · Yop chagi"
      },
      {
        "src": "assets/real-exercise/kick-back-kick.webp",
        "label": "2 · Dwi chagi"
      }
    ]
  },
  "Chagi · retenção": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-front-chamber.webp",
        "label": "Câmara"
      },
      {
        "src": "assets/real-exercise/kick-kick-recovery.webp",
        "label": "Regresso à câmara"
      }
    ]
  },
  "Chagi · combinação livre": {
    "photos": [
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "Ap chagi"
      },
      {
        "src": "assets/real-exercise/official-dollyo-chagi.webp",
        "label": "Dollyo chagi"
      },
      {
        "src": "assets/real-exercise/official-yop-chagi.webp",
        "label": "Yop chagi"
      }
    ]
  },
  "Mireo chagi": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-push-kick.webp",
        "label": "Pontapé de empurrar"
      }
    ]
  },
  "An chagi · arco baixo": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-inward-crescent.webp",
        "label": "Arco de fora para dentro"
      }
    ]
  },
  "Bakkat chagi · arco baixo": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-outward-crescent.webp",
        "label": "Arco de dentro para fora"
      }
    ]
  },
  "Bitureo chagi · prévia lenta": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-twisting-prep.webp",
        "label": "Preparação do pontapé torcido"
      }
    ]
  },
  "Twio ap chagi · salto mínimo": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-jump-front.webp",
        "label": "Pontapé frontal com salto"
      }
    ]
  },
  "Taegeuk 1–3 · sequência": {
    "photos": [
      {
        "src": "assets/real-arm/arae-makki.webp",
        "label": "1 · Defesa baixa"
      },
      {
        "src": "assets/real-arm/momtong-jireugi.webp",
        "label": "2 · Soco médio"
      },
      {
        "src": "assets/real-arm/eolgul-makki.webp",
        "label": "3 · Defesa alta"
      },
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "4 · Pontapé frontal"
      }
    ]
  },
  "Taegeuk 4–5 · sequência": {
    "photos": [
      {
        "src": "assets/real-arm/arae-makki.webp",
        "label": "1 · Defesa baixa"
      },
      {
        "src": "assets/real-arm/momtong-jireugi.webp",
        "label": "2 · Soco médio"
      },
      {
        "src": "assets/real-arm/eolgul-makki.webp",
        "label": "3 · Defesa alta"
      },
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "4 · Pontapé frontal"
      }
    ]
  },
  "Poomsae · correção": {
    "photos": [
      {
        "src": "assets/real-arm/arae-makki.webp",
        "label": "1 · Defesa baixa"
      },
      {
        "src": "assets/real-arm/momtong-jireugi.webp",
        "label": "2 · Soco médio"
      },
      {
        "src": "assets/real-arm/eolgul-makki.webp",
        "label": "3 · Defesa alta"
      },
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "4 · Pontapé frontal"
      }
    ]
  },
  "Poomsae · simulação de exame": {
    "photos": [
      {
        "src": "assets/real-arm/arae-makki.webp",
        "label": "1 · Defesa baixa"
      },
      {
        "src": "assets/real-arm/momtong-jireugi.webp",
        "label": "2 · Soco médio"
      },
      {
        "src": "assets/real-arm/eolgul-makki.webp",
        "label": "3 · Defesa alta"
      },
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "4 · Pontapé frontal"
      }
    ]
  },
  "Poomsae · saídas e viragens": {
    "photos": [
      {
        "src": "assets/real-arm/arae-makki.webp",
        "label": "1 · Defesa baixa"
      },
      {
        "src": "assets/real-arm/momtong-jireugi.webp",
        "label": "2 · Soco médio"
      },
      {
        "src": "assets/real-arm/eolgul-makki.webp",
        "label": "3 · Defesa alta"
      },
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "4 · Pontapé frontal"
      }
    ]
  },
  "Rondas de deslocamentos": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-guard-stance.webp",
        "label": "Guarda"
      },
      {
        "src": "assets/real-exercise/strength-sprint-guard.webp",
        "label": "Deslocamento"
      }
    ]
  },
  "Combate sombra por rondas": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-guard-stance.webp",
        "label": "Guarda"
      },
      {
        "src": "assets/real-exercise/strength-sprint-guard.webp",
        "label": "Deslocamento"
      }
    ]
  },
  "Escada de deslocamentos": {
    "photos": [
      {
        "src": "assets/real-exercise/kick-guard-stance.webp",
        "label": "Guarda"
      },
      {
        "src": "assets/real-exercise/strength-sprint-guard.webp",
        "label": "Deslocamento"
      }
    ]
  },
  "Escada de pontapés": {
    "photos": [
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "Frontal"
      },
      {
        "src": "assets/real-exercise/official-dollyo-chagi.webp",
        "label": "Circular"
      },
      {
        "src": "assets/real-exercise/official-yop-chagi.webp",
        "label": "Lateral"
      }
    ]
  },
  "Pontapés por contagem": {
    "photos": [
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "Frontal"
      },
      {
        "src": "assets/real-exercise/official-dollyo-chagi.webp",
        "label": "Circular"
      },
      {
        "src": "assets/real-exercise/official-yop-chagi.webp",
        "label": "Lateral"
      }
    ]
  },
  "Sprint no sítio + guarda": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-sprint-guard.webp",
        "label": "Sprint com guarda"
      }
    ]
  },
  "Dollyo chagi por intervalos": {
    "photos": [
      {
        "src": "assets/real-exercise/official-dollyo-chagi.webp",
        "label": "Dollyo chagi"
      }
    ]
  },
  "Circuito joelho-soco": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-knee-guard.webp",
        "label": "Joelho"
      },
      {
        "src": "assets/real-arm/momtong-jireugi.webp",
        "label": "Soco"
      }
    ]
  },
  "Agachamento pulsado": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-pulse-squat.webp",
        "label": "Agachamento"
      }
    ]
  },
  "Agachamento dividido": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-split-squat.webp",
        "label": "Agachamento dividido"
      }
    ]
  },
  "Lunge para trás": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-reverse-lunge.webp",
        "label": "Lunge para trás"
      }
    ]
  },
  "Agachamento isométrico na parede": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-wall-sit.webp",
        "label": "Isometria na parede"
      }
    ]
  },
  "Elevação de gémeos": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-calf-raise.webp",
        "label": "Elevação de gémeos"
      }
    ]
  },
  "Flexões estreitas": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-narrow-pushup.webp",
        "label": "Flexão estreita"
      }
    ]
  },
  "Ponte de glúteos": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-glute-bridge.webp",
        "label": "Ponte de glúteos"
      }
    ]
  },
  "Ponte unilateral": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-single-glute-bridge.webp",
        "label": "Ponte unilateral"
      }
    ]
  },
  "Dead bug controlado": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-dead-bug.webp",
        "label": "Dead bug"
      }
    ]
  },
  "Posição hollow isométrica": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-hollow-hold.webp",
        "label": "Hollow hold"
      }
    ]
  },
  "Superman controlado": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-superman.webp",
        "label": "Superman"
      }
    ]
  },
  "Peso morto unilateral sem carga": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-single-leg-deadlift.webp",
        "label": "Peso morto unilateral"
      }
    ]
  },
  "Escaladores controlados": {
    "photos": [
      {
        "src": "assets/real-exercise/strength-mountain-climber.webp",
        "label": "Escalador"
      }
    ]
  },
  "Flexor da anca em meio-ajoelhado": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-hip-flexor.webp",
        "label": "Flexor da anca"
      }
    ]
  },
  "Quadríceps em pé": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-quad-stretch.webp",
        "label": "Quadríceps"
      }
    ]
  },
  "Flexão frontal sentada": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-seated-forward.webp",
        "label": "Flexão sentada"
      }
    ]
  },
  "Borboleta": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-butterfly.webp",
        "label": "Borboleta"
      }
    ]
  },
  "Alongamento frog": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-frog.webp",
        "label": "Frog"
      }
    ]
  },
  "Alongamento de glúteo em pigeon adaptado": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-pigeon.webp",
        "label": "Pigeon adaptado"
      }
    ]
  },
  "Posteriores com pé elevado": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-elevated-hamstring.webp",
        "label": "Posteriores"
      }
    ]
  },
  "Adutores dinâmicos finais": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-adductor-shift.webp",
        "label": "Adutores"
      }
    ]
  },
  "Tornozelo e gémeo na parede": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-calf-wall.webp",
        "label": "Tornozelo e gémeo"
      }
    ]
  },
  "Respiração de recuperação": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-recovery-breathing.webp",
        "label": "Respiração abdominal"
      }
    ]
  },
  "Alongamento do pescoço e ombros": {
    "photos": [
      {
        "src": "assets/real-exercise/stretch-neck-stretch.webp",
        "label": "Pescoço"
      },
      {
        "src": "assets/real-exercise/stretch-shoulder-stretch.webp",
        "label": "Ombros"
      }
    ]
  }
};
const VERIFIED_TECHNIQUE_MEDIA = {
  "Moa seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-08-moa-seogi-close-stance-e1508706978134.webp",
        "label": "Moa seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Narani seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-01-naranhi-seogi-parallel-stance-e1508707119566.webp",
        "label": "Narani seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Ap seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-02-ap-seogi-forward-stance-2-e1508707080837.webp",
        "label": "Ap seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Ap kubi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-03-ap-kubi-forward-inflection-stance-e1508707109513.webp",
        "label": "Ap kubi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Dwit kubi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-04-dwitkubi-backward-inflection-stance-e1508707062257.webp",
        "label": "Dwit kubi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Juchum seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-09-juchum-seogi-riding-stance-e1508707004585.webp",
        "label": "Juchum seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Beom seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-07-beom-seogi-tiger-stance-e1508707042939.webp",
        "label": "Beom seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Kkoa seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-06-apkkoa-seogi-forward-cross-stance2-e1508707032263.webp",
        "label": "Kkoa seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Oreun seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-05-oreun-seogi-right-hand-stance-e1508707052923.webp",
        "label": "Oreun seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Wen seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-05-wen-seogi-left-hand-stance-e1508707072387.webp",
        "label": "Wen seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Hakdari seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-10-hakdari-seogi-crance-stance-e1508707014468.webp",
        "label": "Hakdari seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Gyeotdari seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-11-kyotdari-seogi-assisting-stance-e1508706812773.webp",
        "label": "Gyeotdari seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Ogeum seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-seogi-k640-12-ogeum-seogi-reverse-stance-e1508706467648.webp",
        "label": "Ogeum seogi"
      }
    ],
    "source": "WT-Korea · fotografia identificada por técnica",
    "sourceUrl": "https://wt-korea.com/stellungen/",
    "contact": "",
    "verified": true
  },
  "Geodeureo arae makki": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-makki-k640-01-arae-kodureo-makki-e1508789928627.webp",
        "label": "Geodeureo arae makki"
      }
    ],
    "source": "WT-Korea",
    "sourceUrl": "https://wt-korea.com/makki-blocking/",
    "contact": "Antebraço exterior + mão de apoio",
    "verified": true
  },
  "Geodeureo momtong makki": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-geodeureomakki.webp",
        "label": "Geodeureo makgi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "Antebraço + mão de apoio",
    "verified": true
  },
  "An palmok momtong makki": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-makki-k640-02-momtong-makki-body-blocking-e1508789885725.webp",
        "label": "An palmok momtong makki"
      }
    ],
    "source": "WT-Korea",
    "sourceUrl": "https://wt-korea.com/makki-blocking/",
    "contact": "Interior do antebraço",
    "verified": true
  },
  "Sonnal bitureo makki": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-biteureomakgi.webp",
        "label": "Trajetória de Biteureo makgi"
      },
      {
        "src": "assets/verified-v20/wt-makki-k640-05-sonnal-makki-handblade-blocking-e1508789917457.webp",
        "label": "Superfície sonnal"
      }
    ],
    "source": "Master Keyver/Kukkiwon + WT-Korea",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "Lâmina da mão (sonnal)",
    "verified": true
  },
  "Arae jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/bd-arae-img2-3-12-3.webp",
        "label": "Arae jireugi · alvo baixo"
      }
    ],
    "source": "Blue Dragon Taekwondo",
    "sourceUrl": "https://www.bluedragontkd.net/learn-taekwondo/attack-techniques/",
    "contact": "Nó dos dedos indicador e médio",
    "verified": true
  },
  "Batangson momtong an chigi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chigi-b-anchigi.webp",
        "label": "Batangson momtong an chigi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chigi.php",
    "contact": "Base da palma (batangson)",
    "verified": true
  },
  "Pyonsonkkeut sewo jireugi": {
    "photos": [
      {
        "src": "assets/v20-short/tech-3.webp",
        "label": "Pyonsonkkeut sewo jjireugi"
      }
    ],
    "source": "WT-Korea",
    "sourceUrl": "https://wt-korea.com/tzireugi-thrusting/",
    "contact": "Pontas dos dedos unidos",
    "verified": true
  },
  "Jecho jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-jireugi-k640-03-jeocho-jireugi-backward-punch-e1508791994962.webp",
        "label": "Jeocheo jireugi · palmas para cima"
      }
    ],
    "source": "WT-Korea",
    "sourceUrl": "https://wt-korea.com/jireugi-punch/",
    "contact": "Parte frontal dos nós dos dedos",
    "verified": true
  },
  "Pyojeok jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-jireugi-g-pyojeokjiregi.webp",
        "label": "Pyojeok jireugi · punho à mão-alvo"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/jireugi.php",
    "contact": "Punho contra a palma-alvo",
    "verified": true
  },
  "Pyonsonkkeut geodeureo sewo jjireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/tkdp-geosewo-strike15.webp",
        "label": "Pyonsonkkeut geodeureo sewo jjireugi"
      }
    ],
    "source": "Taekwondo Preschool",
    "sourceUrl": "https://www.taekwondopreschool.com/tutorial_strike34.html",
    "contact": "Pontas dos dedos + palma de controlo",
    "verified": true
  },
  "Murup chigi": {
    "photos": [
      {
        "src": "assets/verified-v20/mk-murup-kicks-mureup-chigi.webp",
        "label": "Murup chigi"
      }
    ],
    "source": "Master Keyver",
    "sourceUrl": "https://www.masterkeyver.com/tech-001-002-003.php",
    "contact": "Parte frontal do joelho",
    "verified": true
  },
  "Agwison mok chigi": {
    "photos": [
      {
        "src": "assets/verified-v20/kukkiwon-chigi-qrboard-image-1692250542173.webp",
        "label": "Ageumson/Agwison ao pescoço"
      }
    ],
    "source": "Kukkiwon · Chigi (Striking)",
    "sourceUrl": "https://www.kukkiwon.or.kr/eng/board/read?boardManagementNo=56&boardNo=1367&menuLevel=3&menuNo=73&page=1",
    "contact": "Arco entre polegar e indicador",
    "verified": true
  },
  "Bam jumeok jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/tkdp-bam-strike9c.webp",
        "label": "Bam jumeok jireugi"
      },
      {
        "src": "assets/verified-v20/tkdp-bam-hand19.webp",
        "label": "Superfície: nó médio saliente"
      }
    ],
    "source": "Taekwondo Preschool",
    "sourceUrl": "https://www.taekwondopreschool.com/tutorial_strike15.html",
    "contact": "Nó médio saliente",
    "verified": true
  },
  "An chagi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chagi-c-anchagi-inward-kick.webp",
        "label": "An chagi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chagi.php",
    "contact": "",
    "verified": true
  },
  "Bakkat chagi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chagi-c-bakkatchagi.webp",
        "label": "Bakkat chagi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chagi.php",
    "contact": "",
    "verified": true
  },
  "Bitureo chagi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chagi-c-biteureochagi.webp",
        "label": "Bitureo chagi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chagi.php",
    "contact": "",
    "verified": true
  },
  "Gawi chagi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chagi-c-gawichagi.webp",
        "label": "Gawi chagi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chagi.php",
    "contact": "",
    "verified": true
  },
  "Narae chagi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chagi-c-nareachagi-wing-kick.webp",
        "label": "Narae chagi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chagi.php",
    "contact": "",
    "verified": true
  },
  "Gawi makgi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-gawimakki.webp",
        "label": "Gawi makgi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Nulleo makgi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-nulleomakki.webp",
        "label": "Nulleo makgi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Oesanteul makgi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-oesanteulmakki.webp",
        "label": "Oesanteul makgi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Geumgang makgi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-geumgangmakki.webp",
        "label": "Geumgang makgi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Hwangso makgi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-hwangsomalli.webp",
        "label": "Hwangso makgi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Danggyeo jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-jireugi-g-danggyeojireugi.webp",
        "label": "Danggyeo jireugi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/jireugi.php",
    "contact": "",
    "verified": true
  },
  "Dollyeo jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-jireugi-g-dollyeojireugi.webp",
        "label": "Dollyeo jireugi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/jireugi.php",
    "contact": "",
    "verified": true
  },
  "Chi jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-jireugi-g-chijireugi.webp",
        "label": "Chi jireugi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/jireugi.php",
    "contact": "",
    "verified": true
  },
  "Sewo jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-jireugi-g-sewojiruegi.webp",
        "label": "Sewo jireugi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/jireugi.php",
    "contact": "",
    "verified": true
  },
  "Geodeureo chigi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chigi-b-geodeureochigi.webp",
        "label": "Geodeureo chigi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chigi.php",
    "contact": "",
    "verified": true
  },
  "Bakkat chigi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chigi-b-bakkatchigi.webp",
        "label": "Bakkat chigi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chigi.php",
    "contact": "",
    "verified": true
  },
  "Pyojeok chigi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chigi-b-pyojeokchigi.webp",
        "label": "Pyojeok chigi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/chigi.php",
    "contact": "",
    "verified": true
  },
  "Dwit kkoa seogi": {
    "photos": [
      {
        "src": "assets/verified-v20/mk-stance-dwit-kkoa-seogi.webp",
        "label": "Dwit kkoa seogi"
      }
    ],
    "source": "Master Keyver",
    "sourceUrl": "https://www.masterkeyver.com/stance---koa-seogi---moa-seogi.php",
    "contact": "",
    "verified": true
  },
  "Hecheo makgi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-hecheomakki.webp",
        "label": "Hecheo makgi"
      }
    ],
    "source": "Master Keyver · fotografia cedida por Kukkiwon",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Sonnal geodeureo makgi → pyonsonkkeut geodeureo sewo jjireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-makgi-m-geodeureomakki.webp",
        "label": "1 · Defesa assistida"
      },
      {
        "src": "assets/verified-v20/tkdp-geosewo-strike15.webp",
        "label": "2 · Ataque vertical assistido"
      }
    ],
    "source": "Sequência construída com fotografias técnicas verificadas",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Momtong bakkat makgi → ap chagi → momtong jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-makki-k640-04-momtong-bakkat-makki-outer-body-blocking-e1508789904640.webp",
        "label": "1 · Defesa exterior"
      },
      {
        "src": "assets/real-exercise/official-ap-chagi.webp",
        "label": "2 · Ap chagi"
      },
      {
        "src": "assets/verified-v20/wt-jireugi-k640-04-momtong-jireugi-body-punch-e1508792102256.webp",
        "label": "3 · Soco médio"
      }
    ],
    "source": "Sequência construída com fotografias técnicas verificadas",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Pyojeok an chagi → palkup pyojeok chigi": {
    "photos": [
      {
        "src": "assets/verified-v20/kuk-chagi-c-anchagi-inward-kick.webp",
        "label": "1 · An chagi"
      },
      {
        "src": "assets/real-arm/palkup-chigi.webp",
        "label": "2 · Palkup pyojeok chigi"
      }
    ],
    "source": "Sequência construída com fotografias técnicas verificadas",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "An palmok momtong makgi → momtong baro jireugi": {
    "photos": [
      {
        "src": "assets/verified-v20/wt-makki-k640-02-momtong-makki-body-blocking-e1508789885725.webp",
        "label": "1 · Defesa média"
      },
      {
        "src": "assets/verified-v20/wt-jireugi-momtong-baro-jirugie-leo.webp",
        "label": "2 · Soco direto"
      }
    ],
    "source": "Sequência construída com fotografias técnicas verificadas",
    "sourceUrl": "https://www.masterkeyver.com/makgi.php",
    "contact": "",
    "verified": true
  },
  "Bada makgi": { "photos": [{ "src": "assets/verified-v39/bada-makgi.jpg", "label": "Bada makgi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/makgi.php", "contact": "Mão ou pé; absorção controlada da força", "verified": true },
  "Naeryeo makgi": { "photos": [{ "src": "assets/verified-v39/naeryeo-makgi.jpg", "label": "Naeryeo makgi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/makgi.php", "contact": "Antebraço exterior, palma ou lâmina da mão", "verified": true },
  "Santeul makgi": { "photos": [{ "src": "assets/verified-v39/santeul-makgi.jpg", "label": "Santeul makgi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/makgi.php", "contact": "Interior e exterior dos antebraços", "verified": true },
  "Ollyeo makgi": { "photos": [{ "src": "assets/verified-v39/ollyeo-makgi.jpg", "label": "Ollyeo makgi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/makgi.php", "contact": "Antebraço exterior, mão-faca ou base da palma", "verified": true },
  "Cha makgi": { "photos": [{ "src": "assets/verified-v39/cha-makgi.jpg", "label": "Cha makgi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/makgi.php", "contact": "Pé ou perna, sem impacto no treino individual", "verified": true },
  "Yeom makgi": { "photos": [{ "src": "assets/verified-v39/yeom-makgi.jpg", "label": "Yeom makgi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/makgi.php", "contact": "Antebraço exterior ou interior, mão-faca ou mão-crista", "verified": true },
  "Chye makgi": { "photos": [{ "src": "assets/verified-v39/chye-makgi.jpg", "label": "Chye makgi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/makgi.php", "contact": "Mão ou antebraço", "verified": true },
  "Digeutja jireugi": { "photos": [{ "src": "assets/verified-v39/digeutja-jireugi.jpg", "label": "Digeutja jireugi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/jireugi.php", "contact": "Nós dos dedos indicador e médio", "verified": true },
  "Yeop jireugi": { "photos": [{ "src": "assets/verified-v39/yeop-jireugi.jpg", "label": "Yeop jireugi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/jireugi.php", "contact": "Nós dos dedos indicador e médio", "verified": true },
  "Naeryeo jireugi": { "photos": [{ "src": "assets/verified-v39/naeryeo-jireugi.jpg", "label": "Naeryeo jireugi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/jireugi.php", "contact": "Nós dos dedos indicador e médio", "verified": true },
  "Geumgang jireugi": { "photos": [{ "src": "assets/verified-v39/geumgang-jireugi.jpg", "label": "Geumgang jireugi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/jireugi.php", "contact": "Punho no ataque; antebraço na defesa", "verified": true },
  "Dwi jireugi": { "photos": [{ "src": "assets/verified-v39/dwi-jireugi.jpg", "label": "Dwi jireugi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/jireugi.php", "contact": "Nós dos dedos indicador e médio", "verified": true },
  "Chetdari jireugi": { "photos": [{ "src": "assets/verified-v39/chetdari-jireugi.png", "label": "Chetdari jireugi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/jireugi.php", "contact": "Dois punhos à zona média", "verified": true },
  "Dollyeo chigi": { "photos": [{ "src": "assets/verified-v39/dollyeo-chigi.png", "label": "Dollyeo chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Superfície definida pelo golpe; demonstração circular", "verified": true },
  "Biteureo chigi": { "photos": [{ "src": "assets/verified-v39/biteureo-chigi.png", "label": "Biteureo chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Superfície definida pelo golpe; trajetória torcida", "verified": true },
  "Yeop chigi": { "photos": [{ "src": "assets/verified-v39/yeop-chigi.png", "label": "Yeop chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Punho, mão-faca, costas do punho ou cotovelo", "verified": true },
  "Naeryeo chigi": { "photos": [{ "src": "assets/verified-v39/naeryeo-chigi.png", "label": "Naeryeo chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Superfície orientada para uma trajetória descendente", "verified": true },
  "Dwi chigi": { "photos": [{ "src": "assets/verified-v39/dwi-chigi.png", "label": "Dwi chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Superfície definida pelo golpe para trás", "verified": true },
  "An chigi": { "photos": [{ "src": "assets/verified-v39/an-chigi.png", "label": "An chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Superfície dirigida de fora para dentro", "verified": true },
  "Ollyeo chigi": { "photos": [{ "src": "assets/verified-v39/ollyeo-chigi.png", "label": "Ollyeo chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Superfície orientada para uma trajetória ascendente", "verified": true },
  "Danggyeo chigi": { "photos": [{ "src": "assets/verified-v39/danggyeo-chigi.png", "label": "Danggyeo chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Uma mão controla; a outra executa o golpe", "verified": true },
  "Ap chigi": { "photos": [{ "src": "assets/verified-v39/ap-chigi.png", "label": "Ap chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Superfície definida pelo golpe frontal", "verified": true },
  "Jebipum chigi": { "photos": [{ "src": "assets/verified-v39/jebipum-chigi.png", "label": "Jebipum chigi" }], "source": "Master Keyver · fotografia cedida por Kukkiwon", "sourceUrl": "https://www.masterkeyver.com/chigi.php", "contact": "Uma mão protege e a outra golpeia", "verified": true }
};
function getVerifiedTechniqueMedia(name = '') {
  return VERIFIED_TECHNIQUE_MEDIA[name] || null;
}

const HUMAN_SOURCE = 'Demonstração fotográfica humana';
function localPhoto(file, label) { return { src: `assets/real-exercise/${file}.webp`, label }; }
function realPhotoMedia(photos, source = HUMAN_SOURCE, extra = {}) { return { photos, source, real: true, ...extra }; }
const POOMSAE_COMMONS_AUTHOR = 'Jim Northrup (Truejim) · Wikimedia Commons · CC BY-SA 4.0';
const POOMSAE_COMMONS_LICENSE_URL = 'https://creativecommons.org/licenses/by-sa/4.0/';
const POOMSAE_SEQUENCE_MEDIA = {
  'Taegeuk Il Jang': { file:'taegeuk-il-jang.png', sourceFile:'Taegeuk_Il_Jang.png' },
  'Taegeuk I Jang': { file:'taegeuk-ee-jang.png', sourceFile:'Taegeuk_Ee_Jang.png' },
  'Taegeuk Sam Jang': { file:'taegeuk-sam-jang.png', sourceFile:'Taegeuk_Sam_Jang.png' },
  'Taegeuk Sa Jang': { file:'taegeuk-sa-jang.png', sourceFile:'Taegeuk_Sa_Jang.png' },
  'Taegeuk Oh Jang': { file:'taegeuk-oh-jang.png', sourceFile:'Taegeuk_Oh_Jang.png' },
  'Taegeuk Yuk Jang': { file:'taegeuk-yook-jang.png', sourceFile:'Taegeuk_Yook_Jang.png' },
  'Taegeuk Chil Jang': { file:'taegeuk-chil-jang.png', sourceFile:'Taegeuk_Chil_Jang.png' },
  'Taegeuk Pal Jang': { file:'taegeuk-pal-jang.png', sourceFile:'Taegeuk_Pal_Jang.png' }
};
function getPoomsaeSequenceMedia(rawName = '') {
  const name = String(rawName || '');
  const key = Object.keys(POOMSAE_SEQUENCE_MEDIA).find(candidate => name.includes(candidate));
  if (!key) return null;
  const entry = POOMSAE_SEQUENCE_MEDIA[key];
  return realPhotoMedia(
    [{ src:`assets/poomsae-commons-v54/${entry.file}`, label:`Sequência completa · ${key}` }],
    POOMSAE_COMMONS_AUTHOR,
    {
      sourceUrl:`https://commons.wikimedia.org/wiki/File:${entry.sourceFile}`,
      license:'CC BY-SA 4.0',
      licenseUrl:POOMSAE_COMMONS_LICENSE_URL,
      mediaKind:'poomsae-sequence',
      attribution:'Obra original, sem alterações'
    }
  );
}
function getPoomsaeStepMedia(item) {
  if (!item?.poomsaeStep) return null;
  const mediaKey = String(item.mediaKey || '');
  let technique = getVerifiedTechniqueMedia(mediaKey) || getArmRealMedia(mediaKey);
  if (!technique && /ap chagi/i.test(mediaKey)) {
    technique = realPhotoMedia([localPhoto('official-ap-chagi', mediaKey)], 'WT-Korea · Frank Kiyun Kim', { sourceUrl:'https://wt-korea.com/chagi-kicking/' });
  } else if (!technique && /dollyo chagi/i.test(mediaKey)) {
    technique = realPhotoMedia([localPhoto('official-dollyo-chagi', mediaKey)], 'WT-Korea · Frank Kiyun Kim', { sourceUrl:'https://wt-korea.com/chagi-kicking/' });
  } else if (!technique && /yop chagi/i.test(mediaKey)) {
    technique = realPhotoMedia([localPhoto('official-yop-chagi', mediaKey)], 'WT-Korea · Frank Kiyun Kim', { sourceUrl:'https://wt-korea.com/chagi-kicking/' });
  }
  const diagram = getPoomsaeSequenceMedia(item.poomsaeName);
  const photos = [];
  (technique?.photos || []).forEach(photo => photos.push({ ...photo, label:`${item.poomsaeMove} · ${photo.label || mediaKey}` }));
  (diagram?.photos || []).forEach(photo => photos.push({ ...photo, label:`Mapa completo · ${item.poomsaeName}` }));
  if (!photos.length) {
    const title = svgEscapeText(`${item.poomsaeName} · ${item.poomsaeMove}`);
    const techniqueName = svgEscapeText(item.name.split(' · ').slice(2).join(' · ') || mediaKey);
    const position = svgEscapeText(item.portugueseName || 'Confirma direção e base');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="700" viewBox="0 0 900 700"><rect width="900" height="700" fill="#f4efe3"/><path d="M85 115h730M85 585h730M130 90v520M770 90v520" fill="none" stroke="#234a38" stroke-width="3" opacity=".24"/><circle cx="450" cy="310" r="128" fill="none" stroke="#a9472b" stroke-width="7"/><path d="M450 190v240m-86-70 86 70 86-70" fill="none" stroke="#234a38" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><text x="450" y="72" text-anchor="middle" font-family="Georgia,serif" font-size="34" fill="#1c211d">${title}</text><text x="450" y="520" text-anchor="middle" font-family="Georgia,serif" font-size="42" font-weight="700" fill="#1c211d">${techniqueName}</text><text x="450" y="570" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" fill="#234a38">${position}</text><text x="450" y="635" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="#5d625b">Ficha de ordem — sem fotografia genérica substituta</text></svg>`;
    photos.push({ src:`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`, label:`${item.poomsaeMove} · ${mediaKey}` });
  }
  const uniquePhotos = photos.filter((photo, index, list) => list.findIndex(candidate => candidate.src === photo.src && candidate.label === photo.label) === index);
  if (!uniquePhotos.length) return null;
  return realPhotoMedia(uniquePhotos, technique?.source || diagram?.source || 'Referência técnica incorporada', {
    sourceUrl:item.poomsaeSourceUrl || technique?.sourceUrl || diagram?.sourceUrl || '',
    contact:technique?.contact || '',
    license:technique?.license || diagram?.license || '',
    mediaKind:'poomsae-step'
  });
}
const conditioningSpritePhoto = (sheet, sheetIndex, label) => ({ src: `assets/conditioning-v23/${sheet}-${sheetIndex + 1}.webp`, label });
const conditioningPhoto = (file, label) => ({ src: `assets/real-exercise/${file}.webp`, label });
const internetStretchPhoto = (file, label) => ({ src: `assets/stretch-v42/${file}.webp`, label });
const EXACT_CONDITIONING_MEDIA = {
  'Corrida no lugar':[conditioningSpritePhoto('warmup-core',0,'Corrida no lugar')],
  'Passos laterais rápidos':[conditioningSpritePhoto('warmup-core',1,'Passo lateral sem cruzar os pés')],
  'Skipping com joelhos altos':[conditioningSpritePhoto('warmup-core',2,'Skipping com joelho alto')],
  'Calcanhares aos glúteos':[conditioningSpritePhoto('warmup-core',3,'Calcanhar ao glúteo')],
  'Saltos curtos em guarda':[conditioningSpritePhoto('warmup-core',4,'Ressalto curto em guarda')],
  'Shadow taekwondo leve':[conditioningSpritePhoto('warmup-new-b',3,'Defesa e soco em sombra')],
  'Deslocamento triangular':[conditioningSpritePhoto('warmup-new-a',2,'Deslocamento diagonal em guarda')],
  'Pivot e guarda':[conditioningSpritePhoto('warmup-new-b',2,'Pivot controlado')],
  'Marcha com rotação de tronco':[conditioningPhoto('stretch-coordination-march','Marcha coordenada')],
  'Avanço e recuo em guarda':[conditioningSpritePhoto('warmup-new-b',4,'Entrada e paragem em guarda')],
  'Shadow com fintas':[conditioningSpritePhoto('warmup-new-b',3,'Movimento em guarda')],
  'Passos em L':[conditioningPhoto('kick-guard-stance','1 · Guarda inicial'),conditioningPhoto('strength-sprint-guard','2 · Mudança de direção')],
  'Polichinelos de baixo impacto':[conditioningSpritePhoto('warmup-new-a',0,'Polichinelo de baixo impacto')],
  'Corda imaginária':[conditioningSpritePhoto('warmup-new-a',1,'Corda imaginária')],
  'Passos diagonais em guarda':[conditioningSpritePhoto('warmup-new-a',2,'Passo diagonal em guarda')],
  'Toques de ponta à frente':[conditioningSpritePhoto('warmup-new-a',3,'Toque de ponta à frente')],
  'Trocas de base controladas':[conditioningSpritePhoto('warmup-new-a',4,'Troca de base controlada')],
  'Joelhos alternados com guarda':[conditioningSpritePhoto('warmup-new-b',0,'Joelho alternado com guarda')],
  'Passos em estrela':[conditioningSpritePhoto('warmup-new-b',1,'Passo em várias direções')],
  'Pivots de 90 graus':[conditioningSpritePhoto('warmup-new-b',2,'Pivot de 90 graus')],
  'Shadow de defesas e socos':[conditioningSpritePhoto('warmup-new-b',3,'Defesa e soco')],
  'Acelera e trava em guarda':[conditioningSpritePhoto('warmup-new-b',4,'Paragem estável em guarda')],
  'Flexor da anca em meio-ajoelhado':[conditioningPhoto('stretch-hip-flexor','Flexor da anca')],
  'Quadríceps em pé':[conditioningPhoto('stretch-quad-stretch','Quadríceps em pé')],
  'Flexão frontal sentada':[conditioningPhoto('stretch-seated-forward','Flexão frontal sentada')],
  'Borboleta':[conditioningPhoto('stretch-butterfly','Borboleta')],
  'Abertura lateral sentada':[conditioningPhoto('stretch-adductor-shift','Abertura de adutores')],
  'Alongamento frog':[conditioningPhoto('stretch-frog','Frog — joelhos e pernas alinhados')],
  'Alongamento de glúteo em pigeon adaptado':[conditioningPhoto('stretch-pigeon','Pigeon adaptado')],
  'Posteriores com pé elevado':[conditioningPhoto('stretch-elevated-hamstring','Posteriores com pé elevado')],
  'Adutores dinâmicos finais':[conditioningPhoto('stretch-adductor-shift','Transferência lateral de adutores')],
  'Tornozelo e gémeo na parede':[conditioningPhoto('stretch-calf-wall','Gémeo na parede')],
  'Respiração de recuperação':[conditioningSpritePhoto('stretch-upper',4,'Respiração de recuperação')],
  'Alongamento do pescoço e ombros':[conditioningSpritePhoto('stretch-upper',2,'Pescoço'),conditioningSpritePhoto('stretch-upper',1,'Ombro cruzado')],
  'Mobilidade de tornozelo na parede':[conditioningPhoto('stretch-ankle-dorsiflexion','Dorsiflexão do tornozelo')],
  'Gémeo com apoio na parede':[conditioningPhoto('stretch-calf-wall','Gémeo com calcanhar apoiado')],
  'Isquiotibiais unilateral com pé elevado':[conditioningPhoto('stretch-elevated-hamstring','Isquiotibiais unilateral')],
  'Joelho ao peito no solo':[conditioningPhoto('stretch-knee-chest','Joelho ao peito')],
  'Pigeon com tronco elevado':[conditioningPhoto('stretch-pigeon','Pigeon com tronco elevado')],
  'Frog com recuo suave':[conditioningPhoto('stretch-frog','Frog com alinhamento das pernas')],
  'Ombro cruzado alternado':[conditioningSpritePhoto('stretch-upper',1,'Ombro cruzado')],
  'Inclinação lateral do pescoço':[conditioningSpritePhoto('stretch-upper',2,'Inclinação lateral do pescoço')],
  'Borboleta com coluna alta':[conditioningSpritePhoto('stretch-upper',3,'Borboleta com coluna alta')],
  'Cão voltado para baixo':[internetStretchPhoto('downward-dog','Cão voltado para baixo')],
  'Postura da criança':[internetStretchPhoto('child-pose','Postura da criança')],
  'Ombros em Gomukhasana':[internetStretchPhoto('cow-face-shoulder','Alongamento dos ombros')],
  'Afundo baixo com braços elevados':[internetStretchPhoto('low-lunge','Afundo baixo')],
  'Posteriores deitado com perna elevada':[internetStretchPhoto('supine-hamstring','Posteriores deitado')],
  'Afundo com rotação':[internetStretchPhoto('revolved-lunge','Afundo com rotação')],
  'Respiração 4–6 de recuperação':[conditioningSpritePhoto('stretch-upper',4,'Respiração 4–6')]
};

const EXACT_CONDITIONING_SOURCES = {
  'Cão voltado para baixo': { source:'Pexels · Vi Nguyen', sourceUrl:'https://www.pexels.com/photo/woman-in-a-downward-dog-yoga-pose-17440643/' },
  'Postura da criança': { source:'Pexels · Robert Ortner', sourceUrl:'https://www.pexels.com/photo/yoga-instructor-assisting-student-in-child-s-pose-37182822/' },
  'Ombros em Gomukhasana': { source:'Pexels · Miriam Alonso', sourceUrl:'https://www.pexels.com/photo/fit-woman-practicing-yoga-asana-on-mat-7593194/' },
  'Afundo baixo com braços elevados': { source:'Pexels · Ivan S', sourceUrl:'https://www.pexels.com/photo/woman-in-low-lunge-yoga-pose-7900298/' },
  'Posteriores deitado com perna elevada': { source:'Pexels · Miriam Alonso', sourceUrl:'https://www.pexels.com/photo/flexible-woman-practicing-yoga-on-floor-7593197/' },
  'Afundo com rotação': { source:'Wikimedia Commons · Julie Ann Silverman · CC BY-SA 3.0', sourceUrl:'https://commons.wikimedia.org/wiki/File:Revolved_Lunge.jpg' }
};
EXACT_CONDITIONING_MEDIA.Descanso = [conditioningPhoto('stretch-ready-stance','Descanso ativo')];

function getHumanVisualForName(rawName = '', itemType = '') {
  const poomsaeSequence = getPoomsaeSequenceMedia(rawName);
  if (poomsaeSequence) return poomsaeSequence;
  const verified = getVerifiedTechniqueMedia(rawName);
  if (verified) return verified;
  const combat = COMBAT_EXERCISE_MEDIA[rawName];
  if (combat) return combat;
  const wger = WGER_EXERCISE_MEDIA[rawName];
  if (wger) return wger;
  const name = rawName.toLowerCase();
  const conditioning = EXACT_CONDITIONING_MEDIA[rawName];
  if (conditioning) {
    const sourceInfo = EXACT_CONDITIONING_SOURCES[rawName];
    return realPhotoMedia(conditioning, sourceInfo?.source || 'Demonstração fotográfica específica', sourceInfo?.sourceUrl ? { sourceUrl:sourceInfo.sourceUrl } : {});
  }
  const exact = REAL_EXERCISE_MEDIA[rawName];
  if (exact) return realPhotoMedia(exact.photos);
  const publicDomain = PUBLIC_DOMAIN_EXERCISE_MEDIA[rawName];
  if (publicDomain) return realPhotoMedia(publicDomain, 'free-exercise-db · domínio público (Unlicense)', { sourceUrl:PUBLIC_EXERCISE_REPO });
  const online = ONLINE_EXERCISE_ART[rawName];
  if (online) return realPhotoMedia([{src:online.src,label:rawName}], online.source, { sourceUrl:online.sourceUrl, license:online.license });
  if (['Aquecimento','Mobilidade','Cardio','Força','Core','Alongamento','Recuperação'].includes(itemType)) {
    return realPhotoMedia([], 'Sem fotografia específica validada');
  }
  if (/ap chagi/.test(name)) return realPhotoMedia([localPhoto('official-ap-chagi','Ap chagi')], 'WT-Korea · Frank Kiyun Kim', { sourceUrl:'https://wt-korea.com/chagi-kicking/' });
  if (/dollyo/.test(name)) return realPhotoMedia([localPhoto('official-dollyo-chagi','Dollyo chagi')], 'WT-Korea · Frank Kiyun Kim', { sourceUrl:'https://wt-korea.com/chagi-kicking/' });
  if (/yop chagi/.test(name)) return realPhotoMedia([localPhoto('official-yop-chagi','Yop chagi')], 'WT-Korea · Frank Kiyun Kim', { sourceUrl:'https://wt-korea.com/chagi-kicking/' });
  if (/dwi chagi|back kick/.test(name)) return realPhotoMedia([localPhoto('kick-back-kick','Dwi chagi')]);
  if (/naeryo/.test(name)) return realPhotoMedia([localPhoto('kick-axe-kick','Naeryo chagi')]);
  if (/huryeo|hook kick/.test(name)) return realPhotoMedia([localPhoto('kick-hook-kick','Huryeo chagi')]);
  if (/mireo/.test(name)) return realPhotoMedia([localPhoto('kick-push-kick','Mireo chagi')]);
  if (/chagi|pontap|kick/.test(name)) return realPhotoMedia([localPhoto('kick-front-chamber','Câmara'),localPhoto('official-ap-chagi','Extensão')]);
  if (/makki|defesa|block/.test(name)) {
    const file = /arae|baixa/.test(name) ? 'arae-makki' : /eolgul|alta/.test(name) ? 'eolgul-makki' : /bakkat/.test(name) ? 'momtong-bakkat-makki' : 'momtong-an-makki';
    return realPhotoMedia([{src:`assets/real-arm/${file}.webp`,label:rawName}], 'WT-Korea · fotografias técnicas');
  }
  if (/jireugi|soco|punch/.test(name)) return realPhotoMedia([{src:'assets/real-arm/momtong-jireugi.webp',label:rawName}], 'WT-Korea · fotografias técnicas');
  if (/chigi|golpe|strike/.test(name)) return realPhotoMedia([{src:'assets/real-arm/palkup-chigi.webp',label:rawName}], 'WT-Korea · fotografias técnicas');
  if (/seogi|posição|stance|base/.test(name)) { const f=/hakdari|uma perna/.test(name)?'strength-knee-guard':/juchum|cavalo/.test(name)?'strength-pulse-squat':/ap kubi|ap seogi|dwit kubi|lunge/.test(name)?'strength-reverse-lunge':'stretch-ready-stance'; return realPhotoMedia([localPhoto(f,rawName)]); }
  if (/poomsae|taegeuk|koryo/.test(name) || itemType === 'Poomsae') return realPhotoMedia([{"src":"assets/real-arm/arae-makki.webp","label":"1 · Defesa baixa"},{"src":"assets/real-arm/momtong-jireugi.webp","label":"2 · Soco médio"},{"src":"assets/real-arm/eolgul-makki.webp","label":"3 · Defesa alta"},{"src":"assets/real-exercise/official-ap-chagi.webp","label":"4 · Pontapé frontal"}]);
  if (/agach/.test(name)) return realPhotoMedia([localPhoto('strength-pulse-squat',rawName)]);
  if (/lunge|avanço|recuo/.test(name)) return realPhotoMedia([localPhoto('strength-reverse-lunge',rawName)]);
  if (/prancha|plank|flexõ|push/.test(name)) return realPhotoMedia([localPhoto('strength-narrow-pushup',rawName)]);
  if (/ponte/.test(name)) return realPhotoMedia([localPhoto('strength-glute-bridge',rawName)]);
  if (/core|abdom|hollow/.test(name)) return realPhotoMedia([localPhoto('strength-hollow-hold',rawName)]);
  if (/corrida|sprint|skip|salto|cardio/.test(name)) return realPhotoMedia([localPhoto('strength-sprint-guard',rawName)]);
  if (/passo|desloc|shadow|combate|guarda|pivot/.test(name)) return realPhotoMedia([localPhoto('kick-guard-stance','Guarda'),localPhoto('strength-sprint-guard',rawName)]);
  if (/tornozelo|gémeo/.test(name)) return realPhotoMedia([localPhoto('stretch-calf-wall',rawName)]);
  if (/anca|flexor/.test(name)) return realPhotoMedia([localPhoto('stretch-hip-flexor',rawName)]);
  if (/quadríceps/.test(name)) return realPhotoMedia([localPhoto('stretch-quad-stretch',rawName)]);
  if (/adutor|cossaco|lateral/.test(name)) return realPhotoMedia([localPhoto('stretch-adductor-shift',rawName)]);
  if (/isquio|posterior|frontal sentada/.test(name)) return realPhotoMedia([localPhoto('stretch-seated-forward',rawName)]);
  if (/ombro|pescoço/.test(name)) return realPhotoMedia([localPhoto('stretch-neck-stretch','Pescoço'),localPhoto('stretch-shoulder-stretch','Ombro')]);
  if (/mobilidade|alongamento|rotação|balanço|gato/.test(name)) return realPhotoMedia([localPhoto('stretch-coordination-march',rawName)]);
  return realPhotoMedia([localPhoto('kick-guard-stance',rawName || 'Demonstração')]);
}

const state = {
  selectedSessionId: augustSessions[0].id,
  curriculumCategory: 'all',
  auditFilter: 'all', auditVisibleCount: Number.POSITIVE_INFINITY,
  weightEquipmentFilter: 'all', weightLevelFilter: 'all', weightVisibleCount: 48,
  selectedTechniqueId: null,
  flattened: [], activePlan: null, currentIndex: 0, remaining: 0, originalDuration: 0,
  sessionRemaining: 5400, sessionElapsed: 0, timer: null, paused: true,
  demo: false, speed: 1, voices: [], startedAt: null,
  completedCount: 0, currentTriviaShown: false, deferredInstallPrompt: null,
  renameSessionId: null, deleteSessionId: null, editingSessionId: null, customSelections: new Map(), customOrder: [], customLoops: [],
  completedExerciseKeys: new Set(), sessionTechniqueIds: new Set(), coachCueMarks: new Set(), tipIndex: 0,
  trainingPhotoIndex: 0, trainingPhotoElapsed: 0
};

const views = {
  setup: $('#setupView'), custom: $('#customView'), history: $('#curriculumView'), audit: $('#auditView'), progress: $('#progressView'),
  training: $('#trainingView'), summary: $('#summaryView')
};

let screenWakeLock = null;
async function setTrainingScreenAwake(active) {
  try {
    if (!active) {
      if (screenWakeLock) await screenWakeLock.release();
      screenWakeLock = null;
      return;
    }
    if ('wakeLock' in navigator && !screenWakeLock && !document.hidden) {
      screenWakeLock = await navigator.wakeLock.request('screen');
      screenWakeLock.addEventListener('release', () => { screenWakeLock = null; });
    }
  } catch { screenWakeLock = null; }
}

function showView(name) {
  if (name !== 'training') stopCoachVoice();
  document.body.classList.toggle('training-active', name === 'training');
  try { window.AndroidNavigation?.setTrainingActive(name === 'training'); } catch {}
  setTrainingScreenAwake(name === 'training');
  Object.values(views).forEach(view => view?.classList.remove('active'));
  views[name]?.classList.add('active');
  const mainView = ['setup','custom','history','audit','progress'].includes(name);
  $('#bottomNav')?.classList.toggle('hidden', !mainView);
  $$('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === name));
  if (name === 'history') renderCreatedWorkoutHistory();
  if (name === 'audit') { renderCurriculum(); renderVisualAudit(); renderWeightCatalog(); }
  if (name === 'progress') renderProgress();
  if (name === 'custom') renderCustomExerciseOptions();
  if (name === 'setup') renderDashboardStats();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function openCustomWorkout() {
  showView('custom');
}

function getSelectedSession() {
  return augustSessions.find(session => session.id === state.selectedSessionId) || augustSessions[0];
}
function currentPlan() { return state.activePlan || getSelectedSession(); }
function currentExercise() { return state.flattened[state.currentIndex]; }
function formatTime(totalSeconds, includeHours = false) {
  const seconds = Math.max(0, Math.ceil(totalSeconds));
  const h = Math.floor(seconds / 3600); const m = Math.floor((seconds % 3600) / 60); const s = seconds % 60;
  if (includeHours || h > 0) return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function escapeHtml(text = '') { return text.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }
function randomFrom(list) { return list[Math.floor(Math.random() * list.length)]; }

const MEDIA_STATUS_META = {
  validated: { label: 'Validada', className: 'validated' },
  needs_review: { label: 'Por rever', className: 'needs-review' },
  missing: { label: 'Em falta', className: 'missing' },
  representative_only: { label: 'Representativa', className: 'representative' }
};
function getTechniqueMedia(name) {
  const poomsaeSequence = getPoomsaeSequenceMedia(name);
  const verified = getVerifiedTechniqueMedia(name);
  const arm = getArmRealMedia(name);
  const human = withBundledPhotos(poomsaeSequence || verified || arm || getHumanVisualForName(name, 'Técnica'));
  return {
    ...(TECHNIQUE_MEDIA[name] || {}),
    src: human.photos[0].src,
    status: 'validated',
    realPhotos: human.photos,
    contact: human.contact || '',
    source: human.source || HUMAN_SOURCE,
    sourceUrl: human.sourceUrl || '',
    license: human.license || '',
    licenseUrl: human.licenseUrl || '',
    mediaKind: human.mediaKind || '',
    attribution: human.attribution || '',
    real: true
  };
}
function mediaMessage(status) {
  return status === 'representative_only'
    ? 'Ilustração representativa — não demonstra a sequência completa'
    : 'Imagem técnica ainda em validação';
}
function techniqueMediaMarkup(technique, context = 'curriculum') {
  const media = getTechniqueMedia(technique.name);
  if (media.status === 'validated' && media.src) {
    const badge = media.mediaKind === 'poomsae-sequence' ? 'Sequência completa' : (media.real ? 'Fotografia verificada' : 'Validada');
    const contact = media.contact ? `<small class="media-contact-mini">Contacto: ${escapeHtml(media.contact)}</small>` : '';
    const credit = media.mediaKind === 'poomsae-sequence' ? `<small class="media-credit-mini">${escapeHtml(media.source)} · ${escapeHtml(media.attribution)}</small>` : '';
    const photos = media.realPhotos?.length ? media.realPhotos : [{ src: media.src, label: technique.name }];
    const photoGrid = photos.map((photo, index) => `<figure><img src="${photo.src}" alt="Fotografia verificada ${index + 1}: ${escapeHtml(photo.label || technique.name)}" loading="lazy" /><figcaption>${escapeHtml(photo.label || technique.name)}</figcaption></figure>`).join('');
    return `<div class="technical-media media-validated${media.real ? ' media-real' : ''}${media.mediaKind === 'poomsae-sequence' ? ' media-poomsae-sequence' : ''}${photos.length > 1 ? ' media-multi' : ''}"><div class="technical-photo-grid" data-count="${photos.length}">${photoGrid}</div><span>${badge}</span>${contact}${credit}</div>`;
  }
  const diagramItem = { name: technique.name, koreanName: technique.name, portugueseName: media.portugueseName, description: media.notes, type: 'Técnica' };
  return `<div class="technical-media media-didactic"><img src="${makeExerciseDiagram(diagramItem)}" alt="Diagrama didático específico: ${escapeHtml(technique.name)}" loading="lazy" /><span>Diagrama específico</span></div>`;
}

function getTechniqueProgress() {
  return JSON.parse(localStorage.getItem('tkdTechniqueProgress') || '{}');
}
function saveTechniqueProgress(progress) {
  localStorage.setItem('tkdTechniqueProgress', JSON.stringify(progress));
}
function getTechniqueRecord(id) {
  const progress = getTechniqueProgress();
  return progress[id] || { status: 'not_started', practices: 0, lastPracticed: null };
}
function updateTechniqueRecord(id, patch) {
  const progress = getTechniqueProgress();
  const current = progress[id] || { status: 'not_started', practices: 0, lastPracticed: null };
  progress[id] = { ...current, ...patch };
  saveTechniqueProgress(progress);
}
function techniqueMatchesExercise(technique, exerciseName) {
  const source = exerciseName.toLowerCase().replace(/\([^)]*\)/g, '');
  const target = technique.name.toLowerCase();
  return source.includes(target) || (source.includes('taegeuk') && target.includes('taegeuk') && source.includes(target.replace('taegeuk ', '')));
}
function getExerciseTechniques(item) {
  if (!item) return [];
  return curriculumTechniques.filter(technique => techniqueMatchesExercise(technique, item.name));
}
function recordCurrentExercisePractice() {
  const item = currentExercise();
  if (!item) return;
  const key = `${state.currentIndex}:${item.name}`;
  if (state.completedExerciseKeys.has(key)) return;
  state.completedExerciseKeys.add(key);
  const matches = getExerciseTechniques(item);
  matches.forEach(technique => {
    const record = getTechniqueRecord(technique.id);
    updateTechniqueRecord(technique.id, {
      status: record.status === 'not_started' ? 'learning' : record.status,
      practices: (record.practices || 0) + 1,
      lastPracticed: new Date().toISOString()
    });
    state.sessionTechniqueIds.add(technique.id);
  });
}

function renderDashboardStats() {
  const progress = getTechniqueProgress();
  const practised = curriculumTechniques.filter(t => (progress[t.id]?.practices || 0) > 0).length;
  const solid = curriculumTechniques.filter(t => ['solid','mastered'].includes(progress[t.id]?.status)).length;
  const percent = Math.round((practised / curriculumTechniques.length) * 100);
  if ($('#heroProgressValue')) $('#heroProgressValue').textContent = `${percent}%`;
  if ($('#dashboardTechniqueCount')) $('#dashboardTechniqueCount').textContent = curriculumTechniques.length;
  if ($('#dashboardPractisedCount')) $('#dashboardPractisedCount').textContent = practised;
  if ($('#dashboardSolidCount')) $('#dashboardSolidCount').textContent = solid;
}

function scheduledSessions() { return augustSessions.filter(session => !session.generated && !session.poomsaeSequence); }
function trainingTitle(session) {
  if (session.poomsaeSequence) return session.label || `${session.fullDate || 'Poomsae'} · golpe a golpe`;
  if (session.personalized) return session.label || `Treino personalizado ${session.customNumber || 1}`;
  if (session.generated) {
    const randomSessions = augustSessions.filter(item => item.generated && !item.personalized);
    const number = session.randomNumber || Math.max(1, randomSessions.indexOf(session) + 1);
    return `Treino aleatório ${number}`;
  }
  const index = scheduledSessions().indexOf(session);
  return `Treino ${Math.max(1, index + 1)}`;
}
function sessionMetrics(session) {
  const exercises = session.blocks.flatMap(block => block.exercises);
  return {
    exercises:exercises.filter(item => !item.isRest && item.name !== 'Descanso').length,
    rests:exercises.filter(item => item.isRest || item.name === 'Descanso').length,
    minutes:Math.round(exercises.reduce((sum, item) => sum + item.seconds, 0) / 60)
  };
}
function renderMonthSummary() {}
function sessionCardMarkup(session) {
  const metrics = sessionMetrics(session);
  return `<button class="session-card${state.selectedSessionId === session.id ? ' selected' : ''}" data-session-id="${session.id}">
    <span class="session-date">${escapeHtml(trainingTitle(session))}</span>
    <span class="session-sub">${metrics.exercises} exercícios${metrics.rests ? ` · ${metrics.rests} descanso${metrics.rests === 1 ? '' : 's'}` : ''} · ${metrics.minutes} min</span>
  </button>`;
}
function createdSessionMarkup(session) {
  const metrics = sessionMetrics(session);
  const editingName = state.renameSessionId === session.id;
  const confirmingDelete = state.deleteSessionId === session.id;
  return `<article class="created-session-card${state.selectedSessionId === session.id ? ' selected' : ''}">
    <button class="session-card${state.selectedSessionId === session.id ? ' selected' : ''}" data-session-id="${session.id}">
      <span class="session-date">${escapeHtml(trainingTitle(session))}</span>
      <span class="session-sub">${escapeHtml(CUSTOM_DIFFICULTY_META[session.difficulty]?.label || 'Personalizado')} · ${metrics.exercises} exercícios${metrics.rests ? ` · ${metrics.rests} descanso${metrics.rests === 1 ? '' : 's'}` : ''} · ${metrics.minutes} min</span>
    </button>
    ${editingName ? `<form class="rename-created-form" data-rename-session-id="${session.id}">
      <label>Novo nome<input class="rename-created-input" type="text" maxlength="50" value="${escapeHtml(trainingTitle(session))}" autocomplete="off" /></label>
      <div><button class="save-created-name" type="submit">Guardar</button><button class="cancel-created-name" type="button">Cancelar</button></div>
    </form>` : confirmingDelete ? `<div class="delete-created-confirm" data-delete-session-id="${session.id}">
      <strong>Eliminar “${escapeHtml(trainingTitle(session))}”?</strong>
      <div><button class="confirm-delete-created" type="button">Eliminar</button><button class="cancel-delete-created" type="button">Cancelar</button></div>
    </div>` : `<div class="created-session-actions">
      <button class="edit-created-session" type="button" data-edit-session-id="${session.id}" aria-label="Editar ${escapeHtml(trainingTitle(session))}">Editar</button>
      <button class="rename-created-session" type="button" data-rename-session-id="${session.id}" aria-label="Mudar nome de ${escapeHtml(trainingTitle(session))}">Nome</button>
      <button class="repeat-created-session" type="button" data-repeat-session-id="${session.id}" aria-label="Repetir ${escapeHtml(trainingTitle(session))}">Repetir</button>
      <button class="shuffle-created-session" type="button" data-shuffle-session-id="${session.id}" aria-label="Baralhar e começar ${escapeHtml(trainingTitle(session))}">Baralhar</button>
      <button class="delete-created-session" type="button" data-delete-session-id="${session.id}" aria-label="Eliminar ${escapeHtml(trainingTitle(session))}">Eliminar</button>
    </div>`}
  </article>`;
}
function renderSessions() {
  const existing = scheduledSessions();
  const poomsae = augustSessions.filter(session => session.poomsaeSequence);
  const random = augustSessions.filter(session => session.generated && !session.personalized);
  const personalized = augustSessions.filter(session => session.personalized);
  $('#sessionGrid').innerHTML = existing.map(sessionCardMarkup).join('');
  if ($('#poomsaeSessionGrid')) $('#poomsaeSessionGrid').innerHTML = poomsae.map(sessionCardMarkup).join('');
  $('#randomSessionGrid').innerHTML = random.length ? random.map(sessionCardMarkup).join('') : '<p class="empty-session-message">Nenhum treino criado.</p>';
  const personalizedMarkup = personalized.length ? personalized.map(createdSessionMarkup).join('') : '<p class="empty-session-message">Ainda não criaste treinos personalizados.</p>';
  ['#customSessionGrid', '#createdWorkoutHistoryGrid'].forEach(selector => {
    const host = $(selector);
    if (host) host.innerHTML = personalizedMarkup;
  });
  const savedCountLabel = personalized.length ? `${personalized.length} treino${personalized.length === 1 ? '' : 's'} guardado${personalized.length === 1 ? '' : 's'}.` : 'Nenhum guardado.';
  if ($('#createdSessionCount')) $('#createdSessionCount').textContent = savedCountLabel;
  if ($('#historyCreatedCount')) $('#historyCreatedCount').textContent = savedCountLabel;
  $$('#sessionGrid .session-card, #poomsaeSessionGrid .session-card, #randomSessionGrid .session-card, #customSessionGrid .session-card, #createdWorkoutHistoryGrid .session-card').forEach(button => button.addEventListener('click', () => {
    state.selectedSessionId = button.dataset.sessionId;
    renderSessions(); renderSessionPreview();
    if (views.setup.classList.contains('active')) $('#sessionPreviewCard')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  $$('.repeat-created-session').forEach(button => button.addEventListener('click', () => {
    state.selectedSessionId = button.dataset.repeatSessionId;
    renderSessions(); renderSessionPreview(); startSession();
  }));
  $$('.shuffle-created-session').forEach(button => button.addEventListener('click', () => {
    const session = augustSessions.find(item => item.id === button.dataset.shuffleSessionId && item.personalized);
    if (!session) return;
    state.selectedSessionId = session.id;
    renderSessions(); renderSessionPreview(); startShuffledSession(session);
  }));
  $$('.edit-created-session').forEach(button => button.addEventListener('click', () => editCreatedSession(button.dataset.editSessionId)));
  $$('.rename-created-session').forEach(button => button.addEventListener('click', () => {
    state.renameSessionId = button.dataset.renameSessionId;
    state.deleteSessionId = null;
    renderSessions();
    const input = document.querySelector('.view.active .rename-created-input') || document.querySelector('.rename-created-input');
    input?.focus(); input?.select();
  }));
  $$('.rename-created-form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const session = augustSessions.find(item => item.id === form.dataset.renameSessionId);
    const input = form.querySelector('.rename-created-input');
    const cleanName = input?.value.trim().replace(/\s+/g, ' ').slice(0, 50);
    if (!session || !cleanName) { input?.focus(); return; }
    session.label = cleanName; session.fullDate = cleanName;
    state.renameSessionId = null;
    saveGeneratedSessions(); renderSessions(); renderSessionPreview();
  }));
  $$('.cancel-created-name').forEach(button => button.addEventListener('click', () => {
    state.renameSessionId = null;
    renderSessions();
  }));
  $$('.delete-created-session').forEach(button => button.addEventListener('click', () => {
    state.deleteSessionId = button.dataset.deleteSessionId;
    state.renameSessionId = null;
    renderSessions();
  }));
  $$('.cancel-delete-created').forEach(button => button.addEventListener('click', () => {
    state.deleteSessionId = null;
    renderSessions();
  }));
  $$('.confirm-delete-created').forEach(button => button.addEventListener('click', () => {
    const panel = button.closest('.delete-created-confirm');
    const sessionId = panel?.dataset.deleteSessionId;
    const index = augustSessions.findIndex(item => item.id === sessionId && item.personalized);
    if (index < 0) return;
    augustSessions.splice(index, 1);
    if (state.selectedSessionId === sessionId) state.selectedSessionId = scheduledSessions()[0]?.id || augustSessions[0]?.id;
    state.deleteSessionId = null;
    saveGeneratedSessions(); renderSessions(); renderSessionPreview();
  }));
}

function renderCreatedWorkoutHistory() {
  renderSessions();
}

function renderSessionPreview() {
  const session = getSelectedSession();
  const exercises = session.blocks.flatMap(block => block.exercises);
  const totalSeconds = exercises.reduce((sum,item) => sum + item.seconds, 0);
  $('#previewWeek').textContent = session.phase;
  $('#previewTitle').textContent = trainingTitle(session);
  if ($('#previewGoal')) $('#previewGoal').textContent = session.goal;
  $('#previewDuration').textContent = Math.round(totalSeconds / 60);
  const matched = exercises.flatMap(getExerciseTechniques);
  const categories = [...new Set(matched.map(t => t.category))];
  $('#previewCoverage').innerHTML = categories.length
    ? categories.map(cat => `<span>${CATEGORY_META[cat].hangul} ${CATEGORY_META[cat].label}</span>`).join('')
    : '<span>Condicionamento geral</span>';
  $('#sessionBlockPreview').innerHTML = session.blocks.map((block,index) => `
    <details ${index === 0 ? 'open' : ''}>
      <summary><span>${block.name}</span><strong>${block.exercises.length} exercícios</strong></summary>
      <div class="block-exercise-list">${block.exercises.map(item => {
        const techs = getExerciseTechniques(item);
        return `<div><span>${escapeHtml(item.name)}</span><small>${formatTime(item.seconds)}${techs.length ? ` · ${techs.map(t=>CATEGORY_META[t.category].label).join(', ')}` : ''}</small></div>`;
      }).join('')}</div>
    </details>`).join('');
}

function renderCategoryTabs() {
  const host = $('#categoryTabs');
  const categories = [{ key:'all', label:'Tudo', hangul:'전체' }, ...Object.entries(CATEGORY_META).map(([key,value]) => ({key,...value}))];
  host.innerHTML = categories.map(cat => `<button class="category-tab${state.curriculumCategory === cat.key ? ' active' : ''}" data-category="${cat.key}"><span>${cat.hangul}</span>${cat.label}</button>`).join('');
  host.querySelectorAll('.category-tab').forEach(button => button.addEventListener('click', () => {
    state.curriculumCategory = button.dataset.category; renderCurriculum();
  }));
}

function filteredTechniques() {
  const q = $('#curriculumSearch').value.trim().toLowerCase();
  const level = $('#levelFilter').value; const status = $('#statusFilter').value;
  return curriculumTechniques.filter(technique => {
    const record = getTechniqueRecord(technique.id);
    const matchesCategory = state.curriculumCategory === 'all' || technique.category === state.curriculumCategory;
    const matchesLevel = level === 'all' || technique.level === level;
    const matchesStatus = status === 'all' || record.status === status;
    const matchesSearch = !q || `${technique.name} ${technique.translation} ${CATEGORY_META[technique.category].label}`.toLowerCase().includes(q);
    return matchesCategory && matchesLevel && matchesStatus && matchesSearch;
  });
}

function renderCurriculum() {
  renderCategoryTabs();
  const techniques = filteredTechniques();
  const progress = getTechniqueProgress();
  const practised = techniques.filter(t => (progress[t.id]?.practices || 0) > 0).length;
  const solid = techniques.filter(t => ['solid','mastered'].includes(progress[t.id]?.status)).length;
  $('#curriculumStats').innerHTML = `<span><strong>${techniques.length}</strong> técnicas</span><span><strong>${practised}</strong> praticadas</span><span><strong>${solid}</strong> sólidas</span>`;
  $('#techniqueGrid').innerHTML = techniques.length ? techniques.map(technique => {
    const record = getTechniqueRecord(technique.id); const meta = CATEGORY_META[technique.category];
    return `<article class="technique-card status-${record.status}" data-technique-id="${technique.id}">
      <div class="technique-image-wrap">${techniqueMediaMarkup(technique)}</div>
      <div class="technique-card-body">
        <div class="technique-card-top"><span>${meta.hangul} ${meta.label}</span><span>${LEVEL_META[technique.level].short} · ${CURRICULUM_LEVEL_META[technique.curriculumLevel]}</span></div>
        <h3>${escapeHtml(technique.name)}</h3><p>${escapeHtml(technique.translation)}</p>
        <div class="technique-card-footer"><button class="status-pill" data-cycle-status="${technique.id}">${STATUS_META[record.status].icon} ${STATUS_META[record.status].label}</button><small>${record.practices || 0}×</small></div>
      </div></article>`;
  }).join('') : '<div class="empty-state">Nenhuma técnica corresponde aos filtros.</div>';
  $$('.technique-card').forEach(card => card.addEventListener('click', event => {
    if (event.target.closest('[data-cycle-status]')) return;
    openTechniqueDialog(card.dataset.techniqueId);
  }));
  $$('[data-cycle-status]').forEach(button => button.addEventListener('click', () => cycleTechniqueStatus(button.dataset.cycleStatus)));
}

function cycleTechniqueStatus(id) {
  const record = getTechniqueRecord(id); const next = STATUS_META[record.status].next;
  updateTechniqueRecord(id, { status: next });
  renderCurriculum(); renderDashboardStats();
  if ($('#techniqueDialog').open && state.selectedTechniqueId === id) populateTechniqueDialog(id);
}

function populateTechniqueDialog(id) {
  const technique = curriculumTechniques.find(t => t.id === id); if (!technique) return;
  state.selectedTechniqueId = id; const record = getTechniqueRecord(id); const meta = CATEGORY_META[technique.category];
  $('#dialogTechniqueMedia').innerHTML = techniqueMediaMarkup(technique);
  $('#dialogTechniqueCategory').textContent = `${meta.hangul} ${meta.label} · ${LEVEL_META[technique.level].label} · ${CURRICULUM_LEVEL_META[technique.curriculumLevel]}`;
  $('#dialogTechniqueName').textContent = technique.name;
  $('#dialogTechniqueTranslation').textContent = technique.translation;
  $('#dialogTechniqueMeta').innerHTML = `<span>${STATUS_META[record.status].icon} ${STATUS_META[record.status].label}</span><span>${record.practices || 0} práticas</span>${record.lastPracticed ? `<span>Última: ${new Intl.DateTimeFormat('pt-PT',{day:'2-digit',month:'short'}).format(new Date(record.lastPracticed))}</span>` : ''}`;
  $('#dialogTechniqueNotes').textContent = technique.notes;
  $('#cycleTechniqueStatus').textContent = `Mudar para: ${STATUS_META[STATUS_META[record.status].next].label}`;
}
function openTechniqueDialog(id) { populateTechniqueDialog(id); $('#techniqueDialog').showModal(); }

const AUDIT_FILTERS = [
  ['all', 'Todas'], ['validated', 'Validadas'], ['needs_review', 'Por rever'], ['missing', 'Em falta'],
  ['seogi', 'Seogi'], ['makki', 'Makki'], ['jireugi-chigi', 'Jireugi/Chigi'], ['chagi', 'Chagi'], ['poomsae', 'Poomsae']
];
function exerciseCatalogGroups() {
  return [
    { key:'warmup', label:'Aquecimento', items:library.warmups },
    { key:'mobility', label:'Mobilidade', items:library.mobility },
    { key:'seogi', label:'Posições', items:technicalPools.seogi },
    { key:'makki', label:'Defesas', items:technicalPools.makki },
    { key:'strikes', label:'Ataques e combinações', items:technicalPools.strikes },
    { key:'kicks', label:'Pontapés', items:library.kicks },
    { key:'poomsae', label:'Poomsae', items:library.poomsae },
    { key:'poomsaeSteps', label:'Poomsae passo a passo', items:library.poomsaeSteps },
    { key:'boxing', label:'Boxe', items:library.boxing },
    { key:'kickboxing', label:'Kickboxing', items:library.kickboxing },
    { key:'cardio', label:'Cardio', items:library.cardio },
    { key:'strength', label:'Força', items:library.strength.filter(item => item.type === 'Força') },
    { key:'core', label:'Core', items:library.strength.filter(item => item.type === 'Core') },
    { key:'stretch', label:'Alongamentos', items:library.stretch }
  ];
}
function exerciseCatalogMediaMarkup(item) {
  const resolved = resolveExerciseMedia(item);
  const photos = resolved.photos || [];
  if (!photos.length) return '<div class="technical-placeholder"><div>검</div><strong>Sem fotografia específica</strong></div>';
  const photo = photos[0];
  return `<div class="technical-media media-real catalog-media"><img src="${photo.src}" alt="Demonstração: ${escapeHtml(photo.label || item.name)}" loading="lazy" /><span>${photos.length > 1 ? photos.length + ' vistas' : 'Demonstração'}</span></div>`;
}
function renderVisualAudit() {
  const groups = exerciseCatalogGroups();
  const filters = $('#auditFilters');
  const filterOptions = [{key:'all',label:'Todos'}, ...groups.map(group => ({key:group.key,label:group.label}))];
  filters.innerHTML = filterOptions.map(filter => `<button class="audit-filter${state.auditFilter === filter.key ? ' active' : ''}" data-audit-filter="${filter.key}">${filter.label}</button>`).join('');
  filters.querySelectorAll('[data-audit-filter]').forEach(button => button.addEventListener('click', () => {
    state.auditFilter = button.dataset.auditFilter; renderVisualAudit();
  }));
  const query = ($('#exerciseCatalogSearch')?.value || '').trim().toLowerCase();
  const allItems = groups.flatMap(group => group.items.map(item => ({...item,catalogKey:group.key,catalogLabel:group.label})));
  const matchedItems = allItems.filter(item => (state.auditFilter === 'all' || item.catalogKey === state.auditFilter) && (!query || [item.name,item.description,item.type,...(item.tips||[])].join(' ').toLowerCase().includes(query)));
  const items = matchedItems;
  $('#auditStats').innerHTML = `<span><strong>${allItems.length}</strong> exercícios no catálogo</span><span><strong>${matchedItems.length}</strong> apresentados</span><span><strong>${groups.length}</strong> categorias</span>`;
  $('#auditGrid').innerHTML = items.map(item => `<article class="audit-card catalog-card">
    ${exerciseCatalogMediaMarkup(item)}
    <div class="audit-card-body">
      <div class="audit-card-meta"><span>${escapeHtml(item.catalogLabel)}</span><b>${formatTime(item.seconds)}</b></div>
      <h3>${escapeHtml(item.name)}</h3>
      <p class="audit-translation">${escapeHtml(item.description)}</p>
      <ul class="catalog-tips">${(item.tips||[]).slice(0,3).map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}</ul>
    </div>
  </article>`).join('');
  if (!matchedItems.length) $('#auditGrid').innerHTML = '<div class="history-empty catalog-empty">Não foram encontrados exercícios com essa pesquisa.</div>';
}

const WEIGHT_EQUIPMENT_FILTERS = [
  ['all','Todos'], ['dumbbell','Halteres'], ['kettlebells','Kettlebells'], ['barbell','Barra']
];
const WEIGHT_LEVEL_FILTERS = [
  ['all','Todos os níveis'], ['beginner','Iniciante'], ['intermediate','Intermédio'], ['expert','Avançado']
];
function renderWeightCatalog() {
  const grid = $('#weightCatalogGrid');
  if (!grid) return;
  const equipmentFilters = $('#weightEquipmentFilters');
  const levelFilters = $('#weightLevelFilters');
  equipmentFilters.innerHTML = WEIGHT_EQUIPMENT_FILTERS.map(([key,label]) => `<button class="audit-filter${state.weightEquipmentFilter === key ? ' active' : ''}" data-weight-equipment="${key}">${label}</button>`).join('');
  levelFilters.innerHTML = WEIGHT_LEVEL_FILTERS.map(([key,label]) => `<button class="audit-filter${state.weightLevelFilter === key ? ' active' : ''}" data-weight-level="${key}">${label}</button>`).join('');
  equipmentFilters.querySelectorAll('[data-weight-equipment]').forEach(button => button.addEventListener('click', () => {
    state.weightEquipmentFilter = button.dataset.weightEquipment; state.weightVisibleCount = 48; renderWeightCatalog();
  }));
  levelFilters.querySelectorAll('[data-weight-level]').forEach(button => button.addEventListener('click', () => {
    state.weightLevelFilter = button.dataset.weightLevel; state.weightVisibleCount = 48; renderWeightCatalog();
  }));
  const query = ($('#weightCatalogSearch')?.value || '').trim().toLowerCase();
  const allItems = library.weights || [];
  const matched = allItems.filter(item =>
    (state.weightEquipmentFilter === 'all' || item.equipment === state.weightEquipmentFilter) &&
    (state.weightLevelFilter === 'all' || item.level === state.weightLevelFilter) &&
    (!query || [item.name,item.description,item.equipment,item.level,...(item.primaryMuscles || []),...(item.secondaryMuscles || [])].join(' ').toLowerCase().includes(query))
  );
  const visible = matched.slice(0, state.weightVisibleCount);
  $('#weightCatalogStats').innerHTML = `<span><strong>${allItems.length}</strong> exercícios com pesos</span><span><strong>${matched.length}</strong> encontrados</span><span><strong>${visible.length}</strong> apresentados</span>`;
  grid.innerHTML = visible.map(item => `<article class="audit-card catalog-card">
    ${exerciseCatalogMediaMarkup(item)}
    <div class="audit-card-body">
      <div class="audit-card-meta"><span>${escapeHtml(WEIGHT_EQUIPMENT_META[item.equipment]?.label || item.equipment)}</span><b>${escapeHtml(WEIGHT_LEVEL_META[item.level] || item.level)}</b></div>
      <h3>${escapeHtml(item.name)}</h3>
      <p class="audit-translation">${escapeHtml(item.description)}</p>
      <ul class="catalog-tips">${(item.tips || []).slice(0,3).map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}</ul>
    </div>
  </article>`).join('');
  if (visible.length < matched.length) grid.insertAdjacentHTML('beforeend', `<button id="showMoreWeightsBtn" class="ghost-btn catalog-load-more" type="button">Mostrar mais ${Math.min(48, matched.length - visible.length)}</button>`);
  if (!matched.length) grid.innerHTML = '<div class="history-empty catalog-empty">Não foram encontrados exercícios com estes filtros.</div>';
  $('#showMoreWeightsBtn')?.addEventListener('click', () => { state.weightVisibleCount += 48; renderWeightCatalog(); });
}

function renderProgress() {
  const progress = getTechniqueProgress();
  const practised = curriculumTechniques.filter(t => (progress[t.id]?.practices || 0) > 0);
  const solid = curriculumTechniques.filter(t => ['solid','mastered'].includes(progress[t.id]?.status));
  const mastered = curriculumTechniques.filter(t => progress[t.id]?.status === 'mastered');
  const percent = Math.round((practised.length / curriculumTechniques.length) * 100);
  $('#overallProgress').textContent = `${percent}%`;
  $('#progressRing').style.setProperty('--progress', `${percent * 3.6}deg`);
  $('#progressSummaryText').innerHTML = `<h3>${practised.length} de ${curriculumTechniques.length} técnicas já praticadas</h3><p>${solid.length} estão sólidas e ${mastered.length} estão marcadas como dominadas.</p><div class="progress-legend"><span>Praticada: ${practised.length}</span><span>Sólida: ${solid.length}</span><span>Dominada: ${mastered.length}</span></div>`;
  $('#categoryProgressList').innerHTML = Object.entries(CATEGORY_META).map(([key,meta]) => {
    const items = curriculumTechniques.filter(t => t.category === key); const done = items.filter(t => (progress[t.id]?.practices || 0) > 0).length; const value = Math.round(done/items.length*100);
    return `<div class="category-progress-row"><div><strong>${meta.hangul} ${meta.label}</strong><span>${done}/${items.length}</span></div><div class="category-bar"><i style="width:${value}%"></i></div></div>`;
  }).join('');
  const review = curriculumTechniques.filter(t => progress[t.id]?.status === 'learning').sort((a,b) => (progress[a.id]?.practices||0)-(progress[b.id]?.practices||0)).slice(0,8);
  $('#reviewList').innerHTML = review.length ? review.map(t => `<button data-review-technique="${t.id}">${techniqueMediaMarkup(t)}<span><strong>${t.name}</strong><small>${CATEGORY_META[t.category].label} · ${progress[t.id]?.practices||0} práticas</small></span><b>Rever</b></button>`).join('') : '<div class="history-empty">As técnicas que marcares “A aprender” aparecerão aqui.</div>';
  $$('[data-review-technique]').forEach(button => button.addEventListener('click', () => { showView('audit'); openTechniqueDialog(button.dataset.reviewTechnique); }));
  renderHistory(); renderDashboardStats();
}

const MALE_VOICE_HINTS = ['duarte', 'carlos', 'joão', 'joao', 'miguel', 'jorge', 'ricardo', 'paulo', 'bruno', 'rui', 'antonio', 'antónio', 'male', 'homem'];
const isLikelyMaleVoice = voice => MALE_VOICE_HINTS.some(hint => `${voice.name} ${voice.voiceURI}`.toLowerCase().includes(hint));
let currentElevenAudio = null;
let currentVoiceRequest = 0;
let localUtterance = null;
function loadVoiceOptions() {
  const select = $('#voiceSelect');
  const help = $('#voiceHelpText');
  if (!('speechSynthesis' in window)) {
    if (window.AndroidVoice?.speak) { select.innerHTML = '<option value="android">Voz Android em português</option>'; select.disabled = true; help.textContent = 'Voz do Android preparada para acompanhar o treino.'; return; }
    select.disabled = true;
    help.textContent = 'A voz local não está disponível; usa o servidor ElevenLabs.';
    return;
  }
  const availableVoices = speechSynthesis.getVoices();
  const portugueseVoices = availableVoices.filter(voice => voice.lang.toLowerCase().startsWith('pt'));
  state.voices = portugueseVoices.length ? portugueseVoices : availableVoices;
  const ordered = [...state.voices].sort((a, b) => Number(isLikelyMaleVoice(b)) - Number(isLikelyMaleVoice(a)) || a.name.localeCompare(b.name));
  select.innerHTML = ordered.length
    ? ordered.map(voice => `<option value="${escapeHtml(voice.voiceURI)}">${escapeHtml(voice.name)} · ${voice.lang}${isLikelyMaleVoice(voice) ? ' · masculina provável' : ''}</option>`).join('')
    : '<option value="">Voz local ainda a carregar…</option>';
  const saved = localStorage.getItem('tkdVoiceURI');
  if (saved && ordered.some(voice => voice.voiceURI === saved)) select.value = saved;
  else if (ordered.length) select.value = ordered[0].voiceURI;
  help.textContent = $('#voiceProvider')?.value === 'elevenlabs'
    ? 'ElevenLabs dá as instruções; esta voz local é usada apenas se a ligação falhar.'
    : 'Voz do dispositivo. Para uma voz natural e instruções completas, seleciona ElevenLabs.';
}
function selectedDeviceVoice() {
  const voices = state.voices.length ? state.voices : (speechSynthesis.getVoices?.() || []);
  return voices.find(voice => voice.voiceURI === $('#voiceSelect').value) || voices.find(voice => voice.lang?.toLowerCase().startsWith('pt')) || voices[0] || null;
}
function voiceProvider() { return $('#voiceProvider')?.value || 'local'; }
function elevenProxyUrl() { const onlineDefault = /^https?:$/.test(location.protocol) ? location.origin : 'http://127.0.0.1:8787'; return ($('#elevenProxyUrl')?.value || onlineDefault).trim().replace(/\/$/, ''); }
function selectedElevenVoice() { return $('#elevenVoiceSelect')?.value || ''; }
function setElevenStatus(message, ok = false) {
  const status = $('#elevenVoiceStatus'); if (!status) return;
  status.textContent = message; status.style.color = ok ? 'var(--green-dark)' : '';
}
async function loadElevenVoices() {
  const select = $('#elevenVoiceSelect');
  setElevenStatus('A ligar à ElevenLabs…');
  try {
    let voices;
    if (window.AndroidVoice?.listElevenVoices) {
      const key = ($('#elevenApiKey')?.value || '').trim();
      if (key) window.AndroidVoice.setElevenApiKey(key);
      if (!window.AndroidVoice.hasElevenApiKey()) throw new Error('Introduz a chave ElevenLabs.');
      const nativeData = JSON.parse(window.AndroidVoice.listElevenVoices());
      if (nativeData.error) throw new Error(nativeData.error);
      voices = (nativeData.voices || []).map(voice => ({
        voiceId: voice.voice_id,
        name: voice.name || 'Voz ElevenLabs',
        gender: voice.labels?.gender || '',
        accent: voice.labels?.accent || '',
        portuguese: (voice.verified_languages || []).some(item => String(item.locale || item.language || '').toLowerCase().startsWith('pt')) || /portugu/i.test(JSON.stringify(voice.labels || {}))
      })).sort((a,b) => Number(b.portuguese)-Number(a.portuguese) || Number(b.gender==='male')-Number(a.gender==='male') || a.name.localeCompare(b.name));
    } else {
      const response = await fetch(`${elevenProxyUrl()}/api/voice/voices`);
      if (!response.ok) throw new Error(await response.text() || `Erro ${response.status}`);
      voices = (await response.json()).voices || [];
    }
    if (!voices.length) throw new Error('A conta não devolveu vozes disponíveis.');
    select.innerHTML = voices.map(voice => `<option value="${escapeHtml(voice.voiceId)}">${escapeHtml(voice.name)}${voice.gender ? ' · ' + escapeHtml(voice.gender) : ''}${voice.accent ? ' · ' + escapeHtml(voice.accent) : ''}</option>`).join('');
    const saved = localStorage.getItem('tkdElevenVoiceId');
    if (saved && voices.some(voice => voice.voiceId === saved)) select.value = saved;
    select.disabled = false;
    $('#voiceProvider').value = 'elevenlabs'; $('#voiceEnabled').checked = true;
    setElevenStatus(`ElevenLabs ligada · ${voices.length} vozes disponíveis.`, true);
    savePreferences();
    return true;
  } catch (error) {
    select.disabled = true;
    setElevenStatus(error?.message || 'Não foi possível ligar à ElevenLabs.');
    return false;
  }
}

function speakLocal(text) {
  if (window.AndroidVoice?.speak) { try { window.AndroidVoice.speak(text); return; } catch {} }
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel(); speechSynthesis.resume?.();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = selectedDeviceVoice(); if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || 'pt-PT'; utterance.rate = .94; utterance.pitch = .92; utterance.volume = 1;
  localUtterance = utterance;
  setTimeout(() => { try { speechSynthesis.speak(utterance); } catch {} }, 35);
}
function stopCoachVoice() {
  currentVoiceRequest += 1;
  if (currentElevenAudio) {
    try { currentElevenAudio.pause(); currentElevenAudio.currentTime = 0; } catch {}
    if (currentElevenAudio.__objectUrl) URL.revokeObjectURL(currentElevenAudio.__objectUrl);
    currentElevenAudio = null;
  }
  if (window.AndroidVoice?.stop) { try { window.AndroidVoice.stop(); } catch {} }
  if ('speechSynthesis' in window) { try { speechSynthesis.cancel(); } catch {} }
  localUtterance = null;
}
async function speakElevenLabs(text) {
  stopCoachVoice();
  if (window.AndroidVoice?.speakEleven) {
    try { window.AndroidVoice.speakEleven(text, selectedElevenVoice()); setElevenStatus('Instrutor ElevenLabs ativo.', true); return; }
    catch { setElevenStatus('Falha na ElevenLabs; ativada voz Android.'); speakLocal(text); return; }
  }
  const requestId = ++currentVoiceRequest;
  try {
    const response = await fetch(`${elevenProxyUrl()}/api/voice/speak`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ text, voiceId:selectedElevenVoice() }) });
    if (!response.ok) throw new Error(await response.text() || `Erro ${response.status}`);
    const blob = await response.blob(); if (requestId !== currentVoiceRequest) return;
    currentElevenAudio?.pause(); const url = URL.createObjectURL(blob); const audio = new Audio(url); audio.__objectUrl = url; currentElevenAudio = audio;
    audio.onended = () => { URL.revokeObjectURL(url); if (currentElevenAudio === audio) currentElevenAudio = null; };
    audio.onerror = () => { URL.revokeObjectURL(url); speakLocal(text); }; await audio.play();
  } catch { setElevenStatus('Falha momentânea na voz ElevenLabs; ativada voz local.'); speakLocal(text); }
}

function speakCoach(text, audible = true) {
  const message = $('#coachMessage'); if (message) message.textContent = text;
  if (!audible || !$('#voiceEnabled')?.checked) return;
  if (voiceProvider() === 'elevenlabs' && selectedElevenVoice()) speakElevenLabs(text);
  else speakLocal(text);
}
const COACH_MOTIVATION = {
  Aquecimento: ['Entra no ritmo sem gastar toda a energia.', 'Corpo leve e respiração solta.', 'Aquece com qualidade; o treino começa aqui.'],
  Alongamento: ['Não procures dor; procura uma tensão confortável.', 'Expira e deixa o corpo ceder pouco a pouco.', 'Menos força e mais controlo.'],
  Pontapé: ['Câmara, extensão e recolha: não saltes nenhum tempo.', 'A altura não interessa se perderes o equilíbrio.', 'O pé de apoio e a guarda continuam ativos.'],
  Poomsae: ['Olha primeiro, chega à base e só depois termina a técnica.', 'Mantém a mesma altura nas transições.', 'Continua mesmo perante um pequeno erro.'],
  Força: ['Forma limpa em todas as repetições.', 'Core firme e articulações alinhadas.', 'Controla a descida; não deixes o corpo cair.'],
  Core: ['Respira sem perder a posição.', 'Mantém a bacia estável e o abdómen ativo.', 'Qualidade antes de duração.'],
  Cardio: ['Mantém a técnica enquanto o coração acelera.', 'Usa a respiração para controlar o ritmo.', 'Guarda, equilíbrio e continuidade.'],
  default: ['Continua com calma e precisão.', 'Muito bem; mantém o movimento limpo.', 'Concentra-te numa correção de cada vez.']
};
function coachTypeFor(item) {
  if (/alongamento|recuperação/i.test(item.type)) return 'Alongamento';
  if (/aquecimento|mobilidade/i.test(item.type)) return 'Aquecimento';
  if (item.type === 'Pontapé') return 'Pontapé';
  if (item.type === 'Poomsae') return 'Poomsae';
  if (item.type === 'Força') return 'Força';
  if (item.type === 'Core') return 'Core';
  if (item.type === 'Cardio') return 'Cardio';
  return 'default';
}
function coachMotivationFor(item, offset = 0) {
  const pool = COACH_MOTIVATION[coachTypeFor(item)] || COACH_MOTIVATION.default;
  return pool[(state.currentIndex + offset) % pool.length];
}
function coachScriptFor(item, phase = 'start') {
  if (!item) return '';
  const name = item.koreanName || item.name;
  const tips = item.keyPoints || item.tips || [];
  const first = tips[0] || 'Mantém uma postura controlada.';
  const second = tips[1] || 'Respira de forma contínua.';
  const third = tips[2] || 'Termina cada repetição em equilíbrio.';
  if (phase === 'early') return `Encontra o ritmo. ${first}. ${coachMotivationFor(item, 0)}`;
  if (phase === 'middle') return `Metade do trabalho. Confirma agora: ${second}. Muito bem, continua.`;
  if (phase === 'late') return `Mantém a atenção. ${third}. ${coachMotivationFor(item, 1)}`;
  if (phase === 'final') return `Últimos segundos. Não aceleres a forma. Termina em controlo e prepara a transição. Bom trabalho.`;
  const speedNote = state.speed >= 2 ? 'O ritmo está rápido: mantém os movimentos curtos e limpos.' : 'Começa devagar e deixa o ritmo crescer.';
  return `${name}. ${item.description} Primeiro ponto: ${first}. Segundo ponto: ${second}. ${speedNote}`;
}
function speakExerciseInstruction(phase = 'start', prefix = '') {
  const item = currentExercise(); if (!item) return;
  speakCoach(`${prefix}${coachScriptFor(item, phase)}`);
  state.coachCueMarks.add(phase);
}

let whistleContext = null;
function playWhistle(kind = 'transition') {
  const soundEnabled = $('#whistleEnabled')?.checked ?? true;
  const vibrationEnabled = $('#vibrationEnabled')?.checked ?? true;
  if (soundEnabled) {
    try {
      whistleContext = whistleContext || new (window.AudioContext || window.webkitAudioContext)();
      const now = whistleContext.currentTime;
      const pattern = kind === 'finish'
        ? [[0, 2050, .12], [.18, 2350, .12], [.36, 2650, .20]]
        : kind === 'block'
          ? [[0, 2200, .14], [.20, 2700, .18]]
          : [[0, 2400, .16]];
      pattern.forEach(([offset, frequency, duration]) => {
        const oscillator = whistleContext.createOscillator();
        const gain = whistleContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, now + offset);
        gain.gain.setValueAtTime(.0001, now + offset);
        gain.gain.exponentialRampToValueAtTime(.22, now + offset + .015);
        gain.gain.exponentialRampToValueAtTime(.0001, now + offset + duration);
        oscillator.connect(gain).connect(whistleContext.destination);
        oscillator.start(now + offset);
        oscillator.stop(now + offset + duration + .02);
      });
    } catch (error) {
      console.warn('Whistle unavailable', error);
    }
  }
  if (vibrationEnabled && navigator.vibrate) {
    navigator.vibrate(kind === 'finish' ? [80, 70, 80, 70, 140] : kind === 'block' ? [70, 60, 70] : [70]);
  }
}

function flattenPlan(session) {
  return session.blocks.flatMap((block,blockIndex) => block.exercises.map((item,exerciseIndex) => ({...item, seconds:item.seconds, blockName:block.name, blockIndex, exerciseIndex})));
}
function shuffledItems(items) {
  const source = [...items];
  const result = source.map(item => ({...item}));
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  const identity = item => item.id || item.key || `${item.name}:${item.seconds}`;
  if (result.length > 1 && result.every((item, index) => identity(item) === identity(source[index]))) result.push(result.shift());
  return result;
}
function makeShuffledSessionPlan(session) {
  const stages = session.blocks.flatMap(block => block.exercises);
  const exercises = shuffledItems(stages.filter(item => !item.isRest && item.name !== 'Descanso'));
  const rests = stages.filter(item => item.isRest || item.name === 'Descanso').map(item => ({...item}));
  const shuffledStages = [];
  exercises.forEach((exercise, index) => {
    shuffledStages.push({...exercise, loopId:null, loopIteration:null, loopRepetitions:null});
    if (index < exercises.length - 1 && rests[index]) shuffledStages.push(rests[index]);
  });
  if (rests.length > Math.max(0, exercises.length - 1)) shuffledStages.push(...rests.slice(exercises.length - 1));
  return {
    ...session,
    id:`${session.id}-shuffle-${Date.now()}`,
    label:`${trainingTitle(session)} · baralhado`,
    fullDate:`${trainingTitle(session)} · baralhado`,
    focus:`${session.focus || 'Treino personalizado'} · ordem baralhada apenas nesta execução`,
    shuffledRun:true,
    blocks:[{ name:'Ordem baralhada', exercises:shuffledStages }]
  };
}
function updateBlockProgress() {
  const currentBlock = currentExercise()?.blockIndex ?? 0; $('#blockProgress').innerHTML = currentPlan().blocks.map((_,index) => `<div class="block-dot${index<currentBlock?' done':index===currentBlock?' active':''}"></div>`).join('');
}
function maybeShareInterestingLine(force=false) {
  if (state.currentTriviaShown && !force) return; const item=currentExercise(); if(!item)return; const pool=[...coachExtras.any,...(coachExtras[item.type]||[])]; speakCoach(randomFrom(pool),false); state.currentTriviaShown=true;
}
function svgEscapeText(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
}
function diagramPoseKind(name = '') {
  const n = name.toLowerCase();
  if (/me jumeok|hammer|naeryo chigi/.test(n)) return 'hammer';
  if (/murup|joelho/.test(n)) return 'knee';
  if (/hecho|abertura/.test(n)) return 'openBlock';
  if (/batangson|palma/.test(n)) return 'palmBlock';
  if (/naeryo chagi/.test(n)) return 'axeKick';
  if (/bandae dollyo|huryeo/.test(n)) return 'hookKick';
  if (/dollyo|circular/.test(n)) return 'roundKick';
  if (/mireo/.test(n)) return 'pushKick';
  if (/bakkat chagi|an chagi/.test(n)) return 'crescentKick';
  if (/bitureo/.test(n)) return 'twistKick';
  if (/twio|salto/.test(n)) return 'jumpKick';
  if (/ap chagi|câmara|joelho ao peito/.test(n)) return 'frontKick';
  if (/yop chagi/.test(n)) return 'sideKick';
  if (/dwi chagi/.test(n)) return 'backKick';
  if (/agachamento dividido|lunge/.test(n)) return 'splitSquat';
  if (/parede/.test(n)) return 'wallSit';
  if (/ponte/.test(n)) return 'bridge';
  if (/peso morto/.test(n)) return 'hinge';
  if (/dead bug/.test(n)) return 'deadBug';
  if (/flexor|pigeon|borboleta|frog|posteriores|gémeo|quadríceps|flexão frontal|adutores|pescoço|alongamento/.test(n)) return 'stretch';
  if (/respiração/.test(n)) return 'breath';
  if (/passos|deslocamento|sprint|rondas|escada|circuito|coordenação/.test(n)) return 'footwork';
  if (/makki|defesa/.test(n)) return 'block';
  if (/jireugi|soco/.test(n)) return 'punch';
  return 'guard';
}
function diagramFigure(x, y, pose, scale = 1, accent = '#2d8a5a') {
  const S = value => Math.round(value * scale * 10) / 10;
  const line = (x1,y1,x2,y2,extra='') => {
    const coords = `x1="${x+S(x1)}" y1="${y+S(y1)}" x2="${x+S(x2)}" y2="${y+S(y2)}"`;
    const outlined = /class="(?:body|limb|leg)"/.test(extra);
    return `${outlined ? `<line ${coords} class="figure-outline"/>` : ''}<line ${coords} ${extra}/>`;
  };
  const head = `<circle cx="${x}" cy="${y-S(58)}" r="${S(11)}" class="head-outline"/><circle cx="${x}" cy="${y-S(58)}" r="${S(9.5)}" class="skin"/><path d="M ${x-S(9)} ${y-S(61)} Q ${x} ${y-S(74)} ${x+S(10)} ${y-S(61)} Q ${x+S(4)} ${y-S(66)} ${x-S(9)} ${y-S(61)}" class="hair"/><circle cx="${x+S(3.5)}" cy="${y-S(58)}" r="${S(1.2)}" class="eye"/>`;
  let torso=line(0,-45,0,5,'class="body"'); let arms=''; let legs=''; let arrow='';
  const guard=()=>line(0,-35,-18,-22,'class="limb"')+line(-18,-22,-8,-12,'class="limb"')+line(0,-35,17,-24,'class="limb"')+line(17,-24,8,-13,'class="limb"');
  if (pose==='hammer') { arms=line(0,-38,-18,-62,'class="limb"')+line(-18,-62,-7,-78,'class="limb"')+line(0,-35,16,-24,'class="limb"')+line(16,-24,7,-13,'class="limb"'); arrow=`<path d="M ${x-S(27)} ${y-S(78)} Q ${x-S(42)} ${y-S(36)} ${x-S(18)} ${y-S(3)}" class="arrow" marker-end="url(#ah)"/>`; legs=line(0,5,-22,45,'class="leg"')+line(0,5,25,45,'class="leg"'); }
  else if (pose==='knee') { arms=guard(); legs=line(0,5,-18,45,'class="leg"')+line(0,5,24,18,'class="leg"')+line(24,18,10,2,'class="leg"'); arrow=`<path d="M ${x+S(35)} ${y+S(36)} Q ${x+S(35)} ${y+S(5)} ${x+S(18)} ${y-S(5)}" class="arrow" marker-end="url(#ah)"/>`; }
  else if (pose==='openBlock') { arms=line(0,-36,-35,-32,'class="limb"')+line(0,-36,35,-32,'class="limb"'); legs=line(0,5,-22,45,'class="leg"')+line(0,5,22,45,'class="leg"'); arrow=`<path d="M ${x-S(9)} ${y-S(35)} Q ${x-S(28)} ${y-S(46)} ${x-S(43)} ${y-S(31)} M ${x+S(9)} ${y-S(35)} Q ${x+S(28)} ${y-S(46)} ${x+S(43)} ${y-S(31)}" class="arrow"/>`; }
  else if (pose==='palmBlock'||pose==='block') { arms=line(0,-37,28,-28,'class="limb"')+line(28,-28,42,-39,'class="limb"')+line(0,-35,-15,-18,'class="limb"'); legs=line(0,5,-24,45,'class="leg"')+line(0,5,28,42,'class="leg"'); arrow=`<path d="M ${x+S(9)} ${y-S(52)} Q ${x+S(38)} ${y-S(51)} ${x+S(45)} ${y-S(34)}" class="arrow" marker-end="url(#ah)"/>`; }
  else if (pose==='punch') { arms=line(0,-37,47,-31,'class="limb"')+line(0,-35,-16,-18,'class="limb"'); legs=line(0,5,-24,45,'class="leg"')+line(0,5,28,42,'class="leg"'); arrow=line(21,-31,58,-31,'class="arrow" marker-end="url(#ah)"'); }
  else if (['frontKick','sideKick','pushKick','roundKick','twistKick'].includes(pose)) { arms=guard(); legs=line(0,5,-20,45,'class="leg"')+line(0,5,24,-4,'class="leg"')+line(24,-4,58,-17,'class="leg"'); arrow=`<path d="M ${x+S(20)} ${y+S(2)} Q ${x+S(42)} ${y-S(8)} ${x+S(66)} ${y-S(19)}" class="arrow" marker-end="url(#ah)"/>`; }
  else if (pose==='axeKick') { arms=guard(); legs=line(0,5,-18,45,'class="leg"')+line(0,5,18,-58,'class="leg"'); arrow=line(30,-52,30,0,'class="arrow" marker-end="url(#ah)"'); }
  else if (pose==='hookKick') { arms=guard(); legs=line(0,5,-18,45,'class="leg"')+line(0,5,52,-25,'class="leg"'); arrow=`<path d="M ${x+S(20)} ${y-S(4)} Q ${x+S(68)} ${y-S(49)} ${x+S(49)} ${y-S(6)}" class="arrow" marker-end="url(#ah)"/>`; }
  else if (pose==='crescentKick') { arms=guard(); legs=line(0,5,-18,45,'class="leg"')+line(0,5,38,-42,'class="leg"'); arrow=`<path d="M ${x+S(5)} ${y-S(6)} Q ${x+S(53)} ${y-S(67)} ${x+S(63)} ${y-S(17)}" class="arrow" marker-end="url(#ah)"/>`; }
  else if (pose==='jumpKick') { arms=guard(); legs=line(0,5,-25,18,'class="leg"')+line(0,5,55,-15,'class="leg"'); arrow=line(-5,50,-5,18,'class="arrow" marker-end="url(#ah)"'); }
  else if (pose==='splitSquat') { torso=line(0,-38,0,4,'class="body"'); arms=guard(); legs=line(0,5,-35,32,'class="leg"')+line(-35,32,-55,34,'class="leg"')+line(0,5,28,36,'class="leg"')+line(28,36,56,36,'class="leg"'); arrow=line(65,-5,65,28,'class="arrow" marker-end="url(#ah)"'); }
  else if (pose==='wallSit') { torso=line(0,-35,0,4,'class="body"'); arms=line(0,-30,22,-8,'class="limb"')+line(0,-30,-22,-8,'class="limb"'); legs=line(0,5,35,5,'class="leg"')+line(35,5,35,45,'class="leg"')+line(0,5,-35,5,'class="leg"')+line(-35,5,-35,45,'class="leg"'); arrow=`<line x1="${x-S(18)}" y1="${y-S(75)}" x2="${x-S(18)}" y2="${y+S(50)}" class="wall"/>`; }
  else if (pose==='bridge') { torso=line(-40,5,18,-12,'class="body"'); arms=line(-38,5,-60,18,'class="limb"')+line(-38,5,-60,-4,'class="limb"'); legs=line(18,-12,45,8,'class="leg"')+line(45,8,52,35,'class="leg"')+line(18,-12,36,15,'class="leg"')+line(36,15,35,38,'class="leg"'); return `<g class="figure">${line(-65,40,65,40,'class="floor"')}<circle cx="${x-S(50)}" cy="${y+S(4)}" r="${S(10)}" class="skin"/>${torso+arms+legs}<path d="M ${x-S(5)} ${y+S(23)} L ${x-S(5)} ${y-S(2)}" class="arrow" marker-end="url(#ah)"/></g>`; }
  else if (pose==='hinge') { torso=line(0,-35,35,-5,'class="body"'); arms=line(25,-12,45,18,'class="limb"')+line(18,-17,36,20,'class="limb"'); legs=line(0,5,-10,45,'class="leg"')+line(0,5,-45,-3,'class="leg"'); return `<g class="figure"><circle cx="${x+S(42)}" cy="${y-S(10)}" r="${S(10)}" class="skin"/>${torso+arms+legs}<path d="M ${x-S(18)} ${y-S(45)} Q ${x+S(20)} ${y-S(45)} ${x+S(36)} ${y-S(14)}" class="arrow" marker-end="url(#ah)"/></g>`; }
  else if (pose==='deadBug') { return `<g class="figure">${line(-65,40,65,40,'class="floor"')}<circle cx="${x-S(45)}" cy="${y+S(22)}" r="${S(10)}" class="skin"/>${line(-35,18,15,18,'class="body"')+line(0,18,-12,-25,'class="limb"')+line(8,18,30,-12,'class="limb"')+line(15,18,42,-5,'class="leg"')+line(42,-5,62,8,'class="leg"')+line(15,18,-8,48,'class="leg"')}<path d="M ${x+S(27)} ${y-S(30)} L ${x+S(9)} ${y+S(4)}" class="arrow" marker-end="url(#ah)"/></g>`; }
  else if (pose==='stretch') { torso=line(0,-28,18,2,'class="body"'); arms=line(12,-2,45,20,'class="limb"')+line(5,-8,39,24,'class="limb"'); legs=line(18,2,58,32,'class="leg"')+line(18,2,-35,30,'class="leg"'); return `<g class="figure"><circle cx="${x-S(6)}" cy="${y-S(38)}" r="${S(10)}" class="skin"/>${torso+arms+legs}<path d="M ${x-S(15)} ${y-S(55)} Q ${x+S(25)} ${y-S(35)} ${x+S(42)} ${y+S(10)}" class="arrow" marker-end="url(#ah)"/></g>`; }
  else if (pose==='breath') { arms=line(0,-35,-38,-50,'class="limb"')+line(0,-35,38,-50,'class="limb"'); legs=line(0,5,-18,45,'class="leg"')+line(0,5,18,45,'class="leg"'); arrow=`<path d="M ${x-S(52)} ${y-S(18)} Q ${x} ${y-S(46)} ${x+S(52)} ${y-S(18)}" class="arrow"/>`; }
  else if (pose==='footwork') { arms=guard(); legs=line(0,5,-18,45,'class="leg"')+line(0,5,24,42,'class="leg"'); arrow=`<path d="M ${x-S(52)} ${y+S(55)} L ${x+S(55)} ${y+S(55)}" class="arrow" marker-end="url(#ah)"/><path d="M ${x+S(45)} ${y+S(66)} L ${x-S(45)} ${y+S(66)}" class="arrow" marker-end="url(#ah)"/>`; }
  else { arms=guard(); legs=line(0,5,-22,45,'class="leg"')+line(0,5,22,45,'class="leg"'); }
  const uniform = `<path d="M ${x-S(8)} ${y-S(42)} L ${x} ${y-S(30)} L ${x+S(8)} ${y-S(42)}" class="collar"/><line x1="${x-S(12)}" y1="${y-S(3)}" x2="${x+S(12)}" y2="${y-S(3)}" class="belt"/><path d="M ${x+S(5)} ${y-S(2)} L ${x+S(13)} ${y+S(13)}" class="belt-tail"/>`;
  return `<g class="figure">${head+torso+arms+legs+uniform+arrow}</g>`;
}
function diagramStepsFor(item) {
  const raw = item.name.replace(/ · .*/, '');
  if (raw.includes('+')) return raw.split('+').map(value => value.trim()).slice(0,3);
  if (/sequência mista/i.test(item.name)) return ['Arae makki','Momtong makki','Eolgul makki'];
  if (/Taegeuk 1–3/.test(item.name)) return ['Taegeuk 1','Taegeuk 2','Taegeuk 3'];
  if (/Taegeuk 4–5/.test(item.name)) return ['Taegeuk 4','Taegeuk 5','Repetir com controlo'];
  if (/poomsae/i.test(item.name)) return ['Preparação','Sequência completa','Final e saudação'];
  if (/combinação livre/i.test(item.name)) return ['Escolher 3 técnicas','Ligar sem pausa','Recolher à guarda'];
  if (/retenção/i.test(item.name)) return ['Câmara','Estender e segurar','Recolher'];
  return ['Preparar', raw, 'Regressar com controlo'];
}
function makeExerciseDiagram(item) {
  const steps = diagramStepsFor(item);
  const poses = steps.map(step => step === 'Preparar' || step === 'Regressar com controlo' ? 'guard' : diagramPoseKind(step));
  const title = svgEscapeText(item.koreanName || item.name);
  const subtitle = svgEscapeText((item.portugueseName || item.description || '').slice(0,110));
  const panels = steps.map((step,index) => { const x=30+index*300; return `<g><rect x="${x}" y="112" width="270" height="310" rx="24" class="panel"/><circle cx="${x+28}" cy="142" r="17" class="num"/><text x="${x+28}" y="148" text-anchor="middle" class="numText">${index+1}</text>${diagramFigure(x+135,300,poses[index],1.35)}<text x="${x+135}" y="397" text-anchor="middle" class="step">${svgEscapeText(step.slice(0,30))}</text></g>`; }).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="930" height="500" viewBox="0 0 930 500"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#d85b4a"/></marker><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#effbf3"/><stop offset="1" stop-color="#fff1d6"/></linearGradient></defs><style>.panel{fill:#fff;stroke:#1d2a20;stroke-width:4}.num{fill:#f4c56f;stroke:#1d2a20;stroke-width:3}.numText{font:900 15px system-ui;fill:#1d2a20}.step{font:800 15px system-ui;fill:#1d2a20}.figure-outline{stroke:#1d2a20;stroke-width:26;stroke-linecap:round}.body,.limb,.leg{stroke:#f7faf9;stroke-width:17;stroke-linecap:round}.body{stroke-width:22}.head-outline{fill:#1d2a20}.skin{fill:#e8aa83;stroke:none}.hair{fill:#202622}.eye{fill:#202622}.collar{fill:none;stroke:#1d2a20;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}.belt{stroke:#2d8a5a;stroke-width:8;stroke-linecap:round}.belt-tail{fill:none;stroke:#2d8a5a;stroke-width:6;stroke-linecap:round}.arrow{fill:none;stroke:#d85b4a;stroke-width:5;stroke-linecap:round;stroke-dasharray:8 7}.wall,.floor{stroke:#7c8d83;stroke-width:5;stroke-linecap:round}.title{font:900 27px system-ui;fill:#153b2f}.subtitle{font:700 14px system-ui;fill:#5b675f}</style><rect width="930" height="500" rx="28" fill="url(#bg)"/><text x="30" y="44" class="title">${title}</text><text x="30" y="72" class="subtitle">${subtitle}</text><text x="900" y="42" text-anchor="end" class="subtitle">Diagrama didático específico</text>${panels}</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function resolveExerciseMedia(item) {
  const matches = getExerciseTechniques(item);
  const poomsaeStep = getPoomsaeStepMedia(item);
  const poomsaeSequence = poomsaeStep || getPoomsaeSequenceMedia(item.name) || getPoomsaeSequenceMedia(item.koreanName) || getPoomsaeSequenceMedia(item.mediaKey);
  const verified = getVerifiedTechniqueMedia(item.name) || getVerifiedTechniqueMedia(item.koreanName) || getVerifiedTechniqueMedia(item.mediaKey);
  const realArm = getArmRealMedia(item.name) || getArmRealMedia(item.koreanName) || getArmRealMedia(item.mediaKey);
  const human = withBundledPhotos(poomsaeSequence || verified || realArm || getHumanVisualForName(item.name, item.type));
  const photos = human.photos || [];
  return {
    src: photos[0]?.src || human.src || '',
    photos,
    status: photos.length ? 'real_exact' : 'missing_exact',
    technique: matches[0] || null,
    media: { ...human, real: true }
  };
}
function resolveTechniqueVideo(item) {
  if (!TECHNICAL_TYPES.has(item.type)) return null;
  const exactKey = Object.keys(TECHNIQUE_VIDEOS).find(key => item.name.includes(key));
  if (!exactKey) return null;
  const video = TECHNIQUE_VIDEOS[exactKey];
  return video.scope === 'exact' ? { key: exactKey, ...video } : null;
}
function updateTechniqueVideo(item) {
  const panel = $('#techniqueVideoPanel');
  const grid = $('#trainingMediaGrid');
  const video = resolveTechniqueVideo(item);
  if (!video) {
    panel.hidden = true;
    grid.classList.remove('with-video');
    panel.innerHTML = '';
    return;
  }
  panel.hidden = false;
  grid.classList.add('with-video');
  const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
  const media = location.protocol === 'file:'
    ? `<a class="video-thumbnail" href="${watchUrl}" target="_blank" rel="noreferrer"><img src="https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg" alt="Abrir vídeo específico: ${escapeHtml(video.title)}" /><span>▶ Ver no YouTube</span></a>`
    : `<iframe src="https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0" title="${escapeHtml(video.title)}" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  panel.innerHTML = `<div class="video-panel-head"><span>Vídeo específico</span><b>Correspondência exata</b></div>${media}<div class="video-panel-copy"><strong>${escapeHtml(video.title)}</strong><small>Fonte: ${escapeHtml(video.source)}</small></div>`;
}

function setExerciseImageRevealed(revealed) {
  const stage = $('#visualStage');
  const button = $('#toggleExerciseImageBtn');
  stage.classList.toggle('media-revealed', revealed);
  stage.classList.toggle('media-concealed', !revealed);
  button.setAttribute('aria-pressed', String(revealed));
  button.innerHTML = revealed
    ? '<span aria-hidden="true">×</span><strong>Ocultar imagem</strong>'
    : '<span aria-hidden="true">◉</span><strong>Ver demonstração</strong><small>Tenta recordar primeiro</small>';
}

function shouldConcealExerciseImage(item) {
  // As poomsae ficam sempre visíveis para facilitar a aprendizagem da ordem.
  // O modo de memória mantém-se apenas nas bases, mãos/braços e pontapés isolados.
  return TECHNICAL_TYPES.has(item?.type) && item?.type !== 'Poomsae' && !item?.poomsaeStep;
}

function setTrainingPhotoIndex(index) {
  const strip = $('#realPhotoStrip');
  const cards = [...strip.querySelectorAll('.real-photo-card')];
  if (!cards.length) return;
  const nextIndex = ((Number(index) || 0) % cards.length + cards.length) % cards.length;
  state.trainingPhotoIndex = nextIndex;
  cards.forEach((card, cardIndex) => {
    const active = cardIndex === nextIndex;
    card.classList.toggle('active', active);
    card.setAttribute('aria-hidden', String(!active));
  });
  const indicator = strip.querySelector('.training-photo-indicator');
  if (indicator) indicator.textContent = `${nextIndex + 1} / ${cards.length}`;
  strip.querySelectorAll('.training-photo-nav').forEach(button => {
    button.hidden = cards.length < 2;
  });
}

function advanceTrainingPhoto(direction = 1) {
  const strip = $('#realPhotoStrip');
  if (strip.hidden || strip.querySelectorAll('.real-photo-card').length < 2) return;
  setTrainingPhotoIndex(state.trainingPhotoIndex + direction);
  state.trainingPhotoElapsed = 0;
}

function updateExerciseUI(announce = true) {
  const item = currentExercise();
  if (!item) return finishSession();
  state.tipIndex = 0;
  state.trainingPhotoIndex = 0;
  state.trainingPhotoElapsed = 0;
  hideTrainingTip();
  setExerciseImageRevealed(!shouldConcealExerciseImage(item));
  const session = getSelectedSession();
  $('#trainingDay').textContent = trainingTitle(session);
  $('#trainingTitle').textContent = item.blockName;
  $('#trainingSubline').textContent = `${session.phase} · ${session.goal}`;
  $('#blockName').textContent = item.blockName;
  const exercisePosition = `${state.currentIndex + 1} / ${state.flattened.length}`;
  $('#exerciseCounter').textContent = exercisePosition;
  $('#headerExerciseCounter').textContent = exercisePosition;
  $('#exerciseType').textContent = item.curriculumLevel === 'preview' ? 'Prévia técnica · baixa intensidade' : item.type;
  $('#exerciseName').textContent = item.koreanName || item.name;
  $('#exerciseTranslation').textContent = item.portugueseName || '';
  $('#exerciseTranslation').hidden = !item.portugueseName;
  $('#exerciseDescription').textContent = item.description;
  $('#exerciseTimer').textContent = formatTime(state.remaining);
  $('#sessionTimer').textContent = formatTime(state.sessionRemaining, true);
  $('#timerFill').style.width = '100%';
  const displayPoints = item.type === 'Poomsae' ? (poomsaeChecklist(item.name) || item.keyPoints || item.tips) : (item.keyPoints || item.tips);
  $('#tipsList').innerHTML = displayPoints.map(tip => `<li>${escapeHtml(tip)}</li>`).join('');
  $('#exerciseSafetyNote').textContent = item.safetyNote || '';
  $('#exerciseSafetyNote').hidden = !item.safetyNote;

  const resolved = resolveExerciseMedia(item);
  const artwork = $('#poseArtwork');
  const photoStrip = $('#realPhotoStrip');
  const placeholder = $('#trainingPlaceholder');
  const caption = $('#visualSpecificity');
  const isTechnical = TECHNICAL_TYPES.has(item.type);
  photoStrip.hidden = true;
  photoStrip.innerHTML = '';
  photoStrip.classList.remove('is-carousel');

  if (resolved.photos?.length) {
    artwork.hidden = true;
    artwork.removeAttribute('src');
    placeholder.hidden = true;
    photoStrip.dataset.count = String(resolved.photos.length);
    photoStrip.classList.toggle('is-carousel', resolved.photos.length > 1);
    const photoCards = resolved.photos.map((photo, index) => {
      const visual = Number.isInteger(photo.sheetIndex)
        ? `<div class="conditioning-sprite" role="img" aria-label="Demonstração: ${escapeHtml(photo.label || item.name)}" style="background-image:url('${photo.src}');--sprite-x:${photo.sheetIndex / Math.max(1, (photo.sheetCount || 5) - 1) * 100}%"></div>`
        : `<img src="${photo.src}" alt="Fotografia real ${index + 1}: ${escapeHtml(photo.label || item.name)}" />`;
      return `<figure class="real-photo-card${index === 0 ? ' active' : ''}" aria-hidden="${index === 0 ? 'false' : 'true'}">${visual}<figcaption>${escapeHtml(photo.label || item.name)}</figcaption></figure>`;
    }).join('');
    const carouselControls = resolved.photos.length > 1
      ? `<button class="training-photo-nav training-photo-prev" type="button" aria-label="Fotografia anterior">‹</button><span class="training-photo-indicator" aria-live="polite">1 / ${resolved.photos.length}</span><button class="training-photo-nav training-photo-next" type="button" aria-label="Fotografia seguinte">›</button>`
      : '';
    photoStrip.innerHTML = photoCards + carouselControls;
    photoStrip.hidden = false;
    photoStrip.querySelector('.training-photo-prev')?.addEventListener('click', event => { event.stopPropagation(); advanceTrainingPhoto(-1); });
    photoStrip.querySelector('.training-photo-next')?.addEventListener('click', event => { event.stopPropagation(); advanceTrainingPhoto(1); });
    setTrainingPhotoIndex(0);
    photoStrip.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', () => {
        img.closest('.real-photo-card')?.remove();
        if (!photoStrip.querySelector('.real-photo-card')) {
          photoStrip.hidden = true;
          placeholder.hidden = false;
          placeholder.querySelector('strong').textContent = 'Não foi possível carregar as fotografias específicas';
        } else {
          setTrainingPhotoIndex(state.trainingPhotoIndex);
        }
      }, { once: true });
    });
    const source = resolved.media?.sourceUrl
      ? ` · <a href="${resolved.media.sourceUrl}" target="_blank" rel="noreferrer">Fonte: ${escapeHtml(resolved.media.source)}</a>`
      : '';
    const detail = resolved.media?.contact ? `Superfície de contacto: ${escapeHtml(resolved.media.contact)}` : 'Demonstração fotográfica humana correspondente ao exercício.';
    caption.innerHTML = `<strong>${detail}</strong>${source}`;
  } else if (resolved.src) {
    artwork.onerror = () => {
      artwork.hidden = true;
      placeholder.hidden = false;
      placeholder.querySelector('strong').textContent = 'A fonte externa não carregou — abre a ligação da fonte';
    };
    artwork.src = resolved.src;
    artwork.alt = isTechnical
      ? `Demonstração validada: ${resolved.technique?.name || item.name}`
      : `Ilustração específica do exercício: ${item.name}`;
    artwork.hidden = false;
    placeholder.hidden = true;
    if (resolved.media?.videoThumbnail) {
      caption.innerHTML = `Miniatura do vídeo específico · <a href="${resolved.media.sourceUrl}" target="_blank" rel="noreferrer">Fonte: ${escapeHtml(resolved.media.source)}</a>`;
    } else if (resolved.media?.sourceUrl) {
      caption.innerHTML = `Imagem correspondente à técnica · <a href="${resolved.media.sourceUrl}" target="_blank" rel="noreferrer">Fonte: ${escapeHtml(resolved.media.source)}</a>`;
    } else if (resolved.media?.diagram) {
      caption.textContent = 'Diagrama didático específico: preparação, execução e regresso.';
    } else {
      caption.textContent = isTechnical
        ? 'Imagem validada para esta técnica exata.'
        : 'Imagem específica para este exercício.';
    }
  } else {
    artwork.removeAttribute('src');
    artwork.hidden = true;
    placeholder.hidden = false;
    const message = isTechnical
      ? (resolved.status === 'representative_only'
        ? 'Ilustração representativa — não demonstra a sequência completa'
        : 'Sem imagem exata validada para esta técnica')
      : 'Sem imagem específica para este exercício';
    placeholder.querySelector('strong').textContent = message;
    caption.textContent = item.type === 'Poomsae'
      ? 'Segue o checklist; uma pose isolada não demonstra a poomsae completa.'
      : message;
  }
  updateTechniqueVideo(item);
  const matches = getExerciseTechniques(item);
  $('#exerciseCurriculumMeta').innerHTML = matches.length
    ? matches.map(technique => `<span>${CATEGORY_META[technique.category].hangul} ${technique.name} · ${technique.curriculumLevel === 'current_focus' ? 'Foco atual' : technique.curriculumLevel === 'preview' ? 'Prévia' : 'Só referência'}</span>`).join('')
    : '<span>Condicionamento complementar</span>';
  updateBlockProgress();
  state.currentTriviaShown = false;
  if (announce) { state.coachCueMarks = new Set(); speakExerciseInstruction('start'); }
}
function beginSession(plan) {
  state.activePlan=plan; state.demo=false; state.flattened=flattenPlan(plan); state.currentIndex=0; state.remaining=state.flattened[0].seconds; state.originalDuration=state.remaining; state.sessionRemaining=state.flattened.reduce((sum,item)=>sum+item.seconds,0); state.sessionElapsed=0; state.startedAt=new Date(); state.completedCount=0; state.paused=false; state.completedExerciseKeys=new Set(); state.sessionTechniqueIds=new Set();
  showView('training'); updateExerciseUI(false); playWhistle('block'); state.coachCueMarks = new Set(); speakExerciseInstruction('start', 'Treino iniciado. '); startTimer();
}
function startSession() { beginSession(getSelectedSession()); }
function startShuffledSession(session) { beginSession(makeShuffledSessionPlan(session)); }
function startTimer() {
  clearInterval(state.timer);
  state.timer = setInterval(() => {
    if (state.paused) return;
    const before = state.remaining;
    state.remaining = Math.max(0, state.remaining - state.speed);
    state.sessionRemaining = Math.max(0, state.sessionRemaining - state.speed);
    state.sessionElapsed += state.speed;
    state.trainingPhotoElapsed += state.speed;
    if (state.trainingPhotoElapsed >= 7) advanceTrainingPhoto(1);
    const pct = Math.max(0, state.remaining / state.originalDuration * 100);
    $('#exerciseTimer').textContent = formatTime(state.remaining);
    $('#sessionTimer').textContent = formatTime(state.sessionRemaining, true);
    $('#timerFill').style.width = `${pct}%`;
    const earlyAt = state.originalDuration * .72;
    const middleAt = state.originalDuration * .48;
    const lateAt = state.originalDuration * .27;
    const finalAt = Math.min(12, state.originalDuration * .12);
    if (!state.coachCueMarks.has('early') && before > earlyAt && state.remaining <= earlyAt) speakExerciseInstruction('early');
    if (!state.coachCueMarks.has('middle') && before > middleAt && state.remaining <= middleAt) speakExerciseInstruction('middle');
    if (!state.coachCueMarks.has('late') && before > lateAt && state.remaining <= lateAt) speakExerciseInstruction('late');
    if (!state.coachCueMarks.has('final') && before > finalAt && state.remaining <= finalAt) speakExerciseInstruction('final');
    if (state.remaining <= 0) nextExercise(true);
  }, 1000);
}
function recalculateSessionRemaining(){state.sessionRemaining=Math.max(0,state.remaining+state.flattened.slice(state.currentIndex+1).reduce((s,i)=>s+i.seconds,0));}
function nextExercise(auto=false){recordCurrentExercisePractice();state.completedCount=Math.max(state.completedCount,state.currentIndex+1);if(state.currentIndex>=state.flattened.length-1)return finishSession();const previous=currentExercise().blockName;state.currentIndex++;const item=currentExercise();state.remaining=item.seconds;state.originalDuration=item.seconds;recalculateSessionRemaining();const blockChanged=previous!==item.blockName;playWhistle(blockChanged?'block':'transition');updateExerciseUI(false);state.coachCueMarks=new Set();speakExerciseInstruction('start', blockChanged ? 'Novo bloco. ' : 'Próximo exercício. ');}
function previousExercise(){if(state.currentIndex===0)return;playWhistle('transition');state.currentIndex--;const item=currentExercise();state.remaining=item.seconds;state.originalDuration=item.seconds;recalculateSessionRemaining();updateExerciseUI();}
function togglePause(force){state.paused=typeof force==='boolean'?force:!state.paused;$('#pauseBtn').innerHTML=state.paused?'▶<span>Continuar</span>':'⏸<span>Pausa</span>';stopCoachVoice();if(!state.paused)playWhistle('transition');speakCoach(state.paused ? 'Pausa.' : 'Retomar.');}
function hideTrainingTip(){const panel=$('#trainingTipPanel');if(panel)panel.hidden=true;$('#repeatBtn')?.classList.remove('tip-open');}
function showTrainingTip(){
  const item=currentExercise();if(!item)return;
  const technicalTips=(item.keyPoints||item.tips||[]).filter(Boolean);
  const suggestions=[...new Set([...technicalTips,coachMotivationFor(item,state.tipIndex)])];
  const tipNumber=suggestions.length?state.tipIndex%suggestions.length:0;
  const tip=suggestions[tipNumber]||'Mantém uma postura controlada e respira sem prender o ar.';
  $('#trainingTipIndex').textContent=`Dica ${tipNumber+1} / ${Math.max(1,suggestions.length)}`;
  $('#trainingTipText').textContent=tip;
  $('#trainingTipPanel').hidden=false;
  $('#repeatBtn')?.classList.add('tip-open');
  state.tipIndex+=1;
  speakCoach(`Dica. ${tip}`);
}
function repeatInstruction(){showTrainingTip();}
const SPEED_OPTIONS = [1, 1.5, 2];
function cycleSpeed() {
  const current = SPEED_OPTIONS.indexOf(state.speed);
  state.speed = SPEED_OPTIONS[(current + 1) % SPEED_OPTIONS.length];
  $('#speedBtn').textContent = `${state.speed}× Ritmo`;
  speakCoach(`Ritmo ${String(state.speed).replace('.', ',')} vezes.`);
}
function exitSession(){clearInterval(state.timer);stopCoachVoice();hideTrainingTip();state.paused=true;state.flattened=[];state.activePlan=null;state.currentIndex=0;showView('setup');}
function finishSession(){recordCurrentExercisePractice();clearInterval(state.timer);playWhistle('finish');state.paused=true;state.completedCount=Math.max(state.completedCount,state.currentIndex+1);const minutes=Math.max(1,Math.round(state.sessionElapsed/60));$('#completedMinutes').textContent=state.demo?`${minutes} demo`:minutes;$('#completedExercises').textContent=state.completedCount;$('#completedTechniques').textContent=state.sessionTechniqueIds.size;$('#summaryText').textContent=`Concluíste ${state.completedCount} exercícios e praticaste ${state.sessionTechniqueIds.size} técnicas do currículo.`;showView('summary');speakCoach('Treino concluído.');}
function saveProgress(event){event.preventDefault();const history=JSON.parse(localStorage.getItem('tkdCoachHistory')||'[]');history.unshift({id:crypto.randomUUID?.()||String(Date.now()),date:new Date().toISOString(),sessionId:getSelectedSession().id,sessionLabel:trainingTitle(getSelectedSession()),day:trainingTitle(currentPlan()),focus:currentPlan().focus,minutes:Math.max(1,Math.round(state.sessionElapsed/60)),exercises:state.completedCount,techniques:state.sessionTechniqueIds.size,energy:$('#energySelect').value,effort:$('#effortSelect').value,notes:$('#notesInput').value.trim(),demo:state.demo});localStorage.setItem('tkdCoachHistory',JSON.stringify(history.slice(0,30)));$('#notesInput').value='';renderHistory();renderDashboardStats();showView('progress');}
function renderHistory(){const history=JSON.parse(localStorage.getItem('tkdCoachHistory')||'[]');const host=$('#historyList');if(!history.length){host.innerHTML='<div class="history-empty">Ainda não existem treinos guardados.</div>';return;}host.innerHTML=history.slice(0,8).map(item=>{const date=new Intl.DateTimeFormat('pt-PT',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(item.date));const note=item.notes?` · ${escapeHtml(item.notes)}`:'';return `<div class="history-item"><div class="history-main"><strong>${item.sessionLabel}${item.demo?' · demonstração':''}</strong><span>${item.focus}${note}</span></div><div class="history-meta">${date}<br>${item.minutes} min · ${item.techniques||0} técnicas · esforço ${item.effort}/10</div></div>`;}).join('');}

function loadPreferences() {
  const sound = localStorage.getItem('tkdSoundEnabled');
  const vibration = localStorage.getItem('tkdVibrationEnabled');
  const voice = localStorage.getItem('tkdShortVoiceEnabledV14');
  if (sound !== null) $('#whistleEnabled').checked = sound === 'true';
  if (vibration !== null) $('#vibrationEnabled').checked = vibration === 'true';
  $('#voiceEnabled').checked = voice === null ? true : voice === 'true';
  $('#voiceProvider').value = localStorage.getItem('tkdVoiceProviderV22') || 'local';
  $('#elevenProxyUrl').value = localStorage.getItem('tkdElevenProxyUrl') || (/^https?:$/.test(location.protocol) ? location.origin : 'http://127.0.0.1:8787');
  if ($('#elevenApiKey')) $('#elevenApiKey').value = '';
  if (window.AndroidVoice?.hasElevenApiKey && window.AndroidVoice.hasElevenApiKey()) setElevenStatus('Chave guardada no telemóvel. Toca em Ligar.', true);
  loadVoiceOptions();
  if ($('#voiceProvider').value === 'elevenlabs') loadElevenVoices();
}
function savePreferences() {
  localStorage.setItem('tkdSoundEnabled', String($('#whistleEnabled').checked));
  localStorage.setItem('tkdVibrationEnabled', String($('#vibrationEnabled').checked));
  localStorage.setItem('tkdShortVoiceEnabledV14', String($('#voiceEnabled').checked));
  localStorage.setItem('tkdVoiceURI', $('#voiceSelect').value);
  localStorage.setItem('tkdVoiceProviderV22', $('#voiceProvider').value);
  localStorage.setItem('tkdElevenProxyUrl', $('#elevenProxyUrl').value.trim());
  localStorage.setItem('tkdElevenVoiceId', $('#elevenVoiceSelect').value);
}
function registerServiceWorker(){if('serviceWorker'in navigator && location.protocol !== 'file:')navigator.serviceWorker.register('./sw.js').catch(()=>{});}

$('#startBtn').addEventListener('click',startSession);$('#randomSessionBtn').addEventListener('click',createRandomSession);$('#backBtn').addEventListener('click',exitSession);$('#pauseBtn').addEventListener('click',()=>togglePause());$('#nextBtn').addEventListener('click',()=>nextExercise());$('#prevBtn').addEventListener('click',previousExercise);$('#repeatBtn').addEventListener('click',repeatInstruction);$('#closeTrainingTipBtn').addEventListener('click',hideTrainingTip);$('#speedBtn').addEventListener('click',cycleSpeed);$('#toggleExerciseImageBtn').addEventListener('click',()=>setExerciseImageRevealed(!$('#visualStage').classList.contains('media-revealed')));$('#feedbackForm').addEventListener('submit',saveProgress);
$('#customWorkoutForm').addEventListener('submit',createCustomSession);
$('#customDifficultySelect').addEventListener('change',renderCustomExerciseOptions);
$('#customExerciseSearch').addEventListener('input',renderCustomExerciseOptions);
$('#customRestSeconds').addEventListener('change',updateCustomBuilderSummary);
$('#openCustomLoopBtn').addEventListener('click',openCustomLoopBuilder);
$('#addCustomLoopBtn').addEventListener('click',addCustomLoop);
$('#cancelCustomLoopBtn').addEventListener('click',closeCustomLoopBuilder);
$('#cancelCustomEditBtn').addEventListener('click',()=>{resetCustomBuilder();showView('history');});
$('#selectVisibleExercisesBtn').addEventListener('click',()=>{visibleCustomExercises().forEach(entry=>{if(!state.customSelections.has(entry.id)){state.customSelections.set(entry.id,entry.exercise.seconds);state.customOrder.push(entry.id);}});renderCustomExerciseOptions();});
$('#clearExercisesBtn').addEventListener('click',()=>{state.customSelections.clear();state.customOrder=[];state.customLoops=[];renderCustomExerciseOptions();});
$('#whistleEnabled').addEventListener('change',savePreferences);$('#vibrationEnabled').addEventListener('change',savePreferences);$('#voiceEnabled').addEventListener('change',savePreferences);$('#voiceSelect').addEventListener('change',savePreferences);$('#testVoiceBtn').addEventListener('click',()=>speakLocal('Voz local selecionada. Esta será usada se a ElevenLabs estiver indisponível.'));
$('#voiceProvider').addEventListener('change',()=>{savePreferences();loadVoiceOptions();if(voiceProvider()==='elevenlabs')loadElevenVoices();});$('#elevenProxyUrl').addEventListener('change',savePreferences);$('#elevenVoiceSelect').addEventListener('change',savePreferences);$('#connectElevenLabsBtn').addEventListener('click',loadElevenVoices);$('#elevenApiKey')?.addEventListener('change',()=>{const key=$('#elevenApiKey').value.trim();if(key&&window.AndroidVoice?.setElevenApiKey)window.AndroidVoice.setElevenApiKey(key);});$('#testElevenLabsBtn').addEventListener('click',()=>speakElevenLabs('Instrutor ligado. Durante o treino vou explicar a execução, corrigir a postura e ajudar-te a manter o ritmo.'));
window.__androidElevenStatus=(message,ok)=>setElevenStatus(message,Boolean(ok));
if ('speechSynthesis' in window) speechSynthesis.addEventListener('voiceschanged', loadVoiceOptions);
$('#exerciseCatalogSearch').addEventListener('input',renderVisualAudit);$('#weightCatalogSearch')?.addEventListener('input',()=>{state.weightVisibleCount=48;renderWeightCatalog();});$('#curriculumSearch').addEventListener('input',renderCurriculum);$('#levelFilter').addEventListener('change',renderCurriculum);$('#statusFilter').addEventListener('change',renderCurriculum);
function closeTechniqueDialog(){const dialog=$('#techniqueDialog');if(dialog?.open)dialog.close();}
$('#closeTechniqueDialog').addEventListener('click',closeTechniqueDialog);$('#backFromTechniqueDialog').addEventListener('click',closeTechniqueDialog);$('#bottomBackFromTechniqueDialog').addEventListener('click',closeTechniqueDialog);$('#cycleTechniqueStatus').addEventListener('click',()=>cycleTechniqueStatus(state.selectedTechniqueId));$('#practiceTechniqueBtn').addEventListener('click',()=>{const id=state.selectedTechniqueId;const record=getTechniqueRecord(id);updateTechniqueRecord(id,{status:record.status==='not_started'?'learning':record.status,practices:(record.practices||0)+1,lastPracticed:new Date().toISOString()});populateTechniqueDialog(id);renderCurriculum();renderDashboardStats();});
$('#closeExerciseThumbnailDialog').addEventListener('click',closeExerciseThumbnailDialog);$('#exerciseThumbnailDialog').addEventListener('click',event=>{if(event.target===$('#exerciseThumbnailDialog'))closeExerciseThumbnailDialog();});
window.__tkdHandleBack=()=>{const thumbnailDialog=$('#exerciseThumbnailDialog');if(thumbnailDialog?.open){closeExerciseThumbnailDialog();return true;}const dialog=$('#techniqueDialog');if(dialog?.open){closeTechniqueDialog();return true;}if(views.training.classList.contains('active')){exitSession();return true;}const active=Object.entries(views).find(([,view])=>view.classList.contains('active'))?.[0];if(active&&active!=='setup'){showView('setup');return true;}return false;};
$('#clearHistoryBtn').addEventListener('click',()=>{if(confirm('Eliminar o histórico de treinos?')){localStorage.removeItem('tkdCoachHistory');renderHistory();renderProgress();}});
$$('.nav-item[data-view]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.view==='custom')resetCustomBuilder();showView(button.dataset.view);}));$$('[data-go]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.go==='custom')resetCustomBuilder();showView(button.dataset.go);}));
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();state.deferredInstallPrompt=event;$('#installBtn').hidden=false;});$('#installBtn').addEventListener('click',async()=>{if(!state.deferredInstallPrompt)return;state.deferredInstallPrompt.prompt();await state.deferredInstallPrompt.userChoice;state.deferredInstallPrompt=null;$('#installBtn').hidden=true;});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&!state.paused&&views.training.classList.contains('active'))togglePause(true);if(!document.hidden&&views.training.classList.contains('active'))setTrainingScreenAwake(true);});

loadPreferences();renderMonthSummary();renderSessions();renderCustomExerciseOptions();renderSessionPreview();renderDashboardStats();renderHistory();renderCategoryTabs();renderVisualAudit();renderWeightCatalog();registerServiceWorker();
