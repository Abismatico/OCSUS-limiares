/* ============================================================
   Ocsus LIMIARES — BASE DE DADOS DO SISTEMA
   Pilares, Paradigmas, Backlash, Custos e Exemplos
   Fonte: Sistema Limiares RPG
   ============================================================ */

const PILLARS = {
    forma: {
        id: 'forma',
        name: 'FORMA',
        motto: 'Da Carne que se Dobra',
        domain: 'Corpo · Matéria · Transformações · Mutações',
        color: '#a11f1f',
        reserve: 'potencia',
        reserveName: 'Potência',
        description: 'O pilar que manipula a matéria viva e inerte. Torce ossos, funde tecidos, reescreve a forma do que existe. Quem domina Forma aprende que o corpo é apenas argila esperando um oleiro profano.',
        keywords: ['Carne', 'Osso', 'Mutação', 'Metamorfose', 'Regeneração', 'Matéria'],
        examples: [
            { grade: 1, name: 'Lâmina de Carne', effect: 'Cristaliza um osso em arma branca por 1d4 turnos.' },
            { grade: 1, name: 'Pele de Casca', effect: 'Endurecimento temporário da epiderme (+2 à defesa).' },
            { grade: 2, name: 'Salto Biolocalizado', effect: 'Reorganiza músculos para salto impossível de 10m.' },
            { grade: 2, name: 'Olho Suplementar', effect: 'Cresce um terceiro olho na testa por 1 hora.' },
            { grade: 3, name: 'Garras Necróticas', effect: 'Unhas viram lâminas que causam podridão 1d6 turnos.' },
            { grade: 4, name: 'Regeneração Nível Ômega', effect: 'Reconstrói membros decepados em minutos.' },
            { grade: 5, name: 'Apoteose Sárkica', effect: 'Transformação em abominação de carne por 1 cena.' }
        ]
    },
    tabula: {
        id: 'tabula',
        name: 'TÁBULA',
        motto: 'Do Espaço que se Dobra',
        domain: 'Tempo · Espaço · Dimensões · Deslocamento',
        color: '#4a2a6b',
        reserve: 'agilidade',
        reserveName: 'Agilidade',
        description: 'O pilar das geometrias proibidas. Curva a distância entre dois pontos, abre portas em paredes sólidas, prende inimigos em bolhas dimensionais. O espaço é apenas uma convenção.',
        keywords: ['Portal', 'Dimensão', 'Tempo', 'Dobra', 'Geometria', 'Vazio'],
        examples: [
            { grade: 1, name: 'Passo Lateral', effect: 'Teleporte curto de até 5m em linha de visão.' },
            { grade: 1, name: 'Marca de Retorno', effect: 'Fixa um ponto ancorado; retorna a ele em 1h.' },
            { grade: 2, name: 'Cárcere Dimensional', effect: 'Prende alvo em bolha de espaço dobrado 1d4 turnos.' },
            { grade: 2, name: 'Portal Estruturado', effect: 'Abre passagem de até 50m entre locais vistos.' },
            { grade: 3, name: 'Eco do Instante', effect: 'Volta 3 segundos no tempo (refaz a última ação).' },
            { grade: 4, name: 'Prisão de Ponto Zero', effect: 'Congela área de 10m³ fora do tempo por 1 min.' },
            { grade: 5, name: 'Colapso de Topologia', effect: 'Reescreve a geografia de um cômodo permanentemente.' }
        ]
    },
    primordio: {
        id: 'primordio',
        name: 'PRIMÓRDIO',
        motto: 'Do Elemento que se Enfurece',
        domain: 'Elementos · Criação · Forças da Natureza',
        color: '#c2713a',
        reserve: 'potencia',
        reserveName: 'Potência',
        description: 'O pilar que invoca forças anteriores à civilização. Fogo, gelo, raio, tempestade — a fúria primal do mundo canalizada por vias artificiais. O elemento obedece, mas não perdoa.',
        keywords: ['Fogo', 'Gelo', 'Raio', 'Trovão', 'Tempestade', 'Matriz'],
        examples: [
            { grade: 1, name: 'Descarga Elétrica', effect: 'Toque elétrico causa 1d6 de dano + atordoamento.' },
            { grade: 1, name: 'Faísca Votiva', effect: 'Acende/apaga qualquer fogo em linha de visão.' },
            { grade: 2, name: 'Língua de Brasa', effect: 'Projétil ígneo 2d6 em até 20m.' },
            { grade: 2, name: 'Manto de Geada', effect: 'Congela o chão num raio de 5m por 3 turnos.' },
            { grade: 3, name: 'Tempestade de PEM', effect: 'Pulso eletromagnético desativa eletrônica em 30m.' },
            { grade: 4, name: 'Chamado de Trovão', effect: 'Invoca raio vertical 5d6 em área de 3m.' },
            { grade: 5, name: 'Avatar do Sol', effect: 'Corpo se torna plasma por 3 turnos; dano maciço.' }
        ]
    },
    pinaculo: {
        id: 'pinaculo',
        name: 'PINÁCULO',
        motto: 'Da Mente que se Ordena',
        domain: 'Mente · Memória · Símbolos · Runas · Cálculos',
        color: '#d4af37',
        reserve: 'intelecto',
        reserveName: 'Intelecto',
        description: 'O pilar mais matemático, e por isso o mais cruel. Reescreve mentes, grava selos geométricos, bane pela lógica pura. Aqui, símbolos são algoritmos — e o pensamento é linguagem de máquina.',
        keywords: ['Selo', 'Runa', 'Mente', 'Memória', 'Lógica', 'Geometria Sagrada'],
        examples: [
            { grade: 1, name: 'Selo de Sanidade', effect: 'Runa na testa reduz pânico e horror por 1 cena.' },
            { grade: 1, name: 'Voz Imperiosa', effect: 'Sugestão compulsiva simples (1 palavra).' },
            { grade: 2, name: 'Cadeia de Silogismo', effect: 'Força um NPC a responder 3 perguntas com a verdade.' },
            { grade: 2, name: 'Mapeamento Cognitivo', effect: 'Lê superficialmente a memória recente do alvo.' },
            { grade: 3, name: 'Exorcismo Geométrico', effect: 'Bane entidades com até 10 HD via diagrama matemático.' },
            { grade: 4, name: 'Apagar do Registro', effect: 'Remove permanentemente uma memória específica.' },
            { grade: 5, name: 'Reinicialização da Realidade', effect: 'Refaz os últimos 60 segundos para todos os presentes.' }
        ]
    },
    eter: {
        id: 'eter',
        name: 'ÉTER',
        motto: 'Do Véu que se Rompe',
        domain: 'Alma · Contratos · Deidades · Terror · Emoções',
        color: '#6a9ba8',
        reserve: 'aura',
        reserveName: 'Aura',
        description: 'O pilar mais perigoso. Conversa com o que não deveria ter voz. Alma, contrato, deidade morta — tudo aqui é negociação. Todo benefício do Éter custa mais do que o lançador percebe.',
        keywords: ['Alma', 'Pacto', 'Sussurro', 'Véu', 'Entidade', 'Sombra'],
        examples: [
            { grade: 1, name: 'Apagão Memético', effect: 'Alvo esquece o lançador por 1d4 horas.' },
            { grade: 1, name: 'Sussurro do Vácuo', effect: 'Ouve um segredo escuro sobre um alvo próximo.' },
            { grade: 2, name: 'Projeção Astral', effect: 'Envia alma fora do corpo por até 10 minutos.' },
            { grade: 2, name: 'Selo de Presença', effect: 'Invoca temor sobrenatural em todos num raio de 10m.' },
            { grade: 3, name: 'Pacto de Inquilino', effect: 'Convida entidade a habitar o corpo por 1 hora.' },
            { grade: 4, name: 'Colheita de Nomes', effect: 'Descobre o verdadeiro nome oculto de um ser.' },
            { grade: 5, name: 'Quebra da Quarta Parede', effect: 'Um único pedido direto a uma deidade responde.' }
        ]
    }
};

const PARADIGMS = {
    hermetico: {
        id: 'hermetico',
        name: 'ENGENHEIRO HERMÉTICO',
        motto: 'A magia é apenas ciência que ainda não foi domesticada.',
        style: 'Ritualística Estática',
        primary: 'pinaculo',
        secondary: 'primordio',
        aesthetic: 'Arquitetura rigorosa e equações talhadas. Linhas limpas, ângulos exatos, cálculo antes de sangue. O ocultista hermético não improvisa — ele desenha.',
        tools: ['Giz de grafite anômalo', 'Calculadora de latão', 'Régua de cálculo', 'Tablet de contenção', 'Bússola tática', 'Diagramas vetoriais'],
        keywords: ['Lógica de Contenção', 'Protocolo de Exclusão', 'Feedback de Sistema', 'Equação', 'Diagrama', 'Vetor'],
        narrative: {
            prefix: ['Traço', 'Circuito', 'Diagrama', 'Matriz', 'Vetor', 'Protocolo'],
            actions: ['calcula o ângulo exato', 'desenha o selo vetorial', 'executa o protocolo', 'inscreve a equação em giz', 'verifica a margem de erro', 'ativa o diagrama hermético'],
            components: ['giz técnico', 'régua de latão', 'bússola de contenção', 'pergaminho milimetrado', 'tinta condutora', 'cristal de calibração']
        }
    },
    sarkicista: {
        id: 'sarkicista',
        name: 'HERDEIRO DO SANGUE',
        motto: 'Eu sinto a pulsação da realidade — ela sangra quando pressionada.',
        style: 'Sacrifício Orgânico',
        primary: 'forma',
        secondary: 'tabula',
        aesthetic: 'Carne e dor profana. Cortes em padrão, sangue que não coagula, veias que desenham os próprios símbolos. O corpo é tanto ferramenta quanto altar.',
        tools: ['Bisturi de osso', 'Tigela de cobre', 'Espinho ritual', 'Veias exteriorizadas', 'Sangue negro', 'Corpos em transgressão'],
        keywords: ['Atos de Transgressão', 'Sacrifício Orgânico', 'Regeneração Atávica', 'Carne', 'Incisão', 'Pulso'],
        narrative: {
            prefix: ['Incisão', 'Oferenda', 'Transgressão', 'Mutilação', 'Enxerto', 'Sulco'],
            actions: ['corta o padrão na própria pele', 'oferece sangue vivo ao símbolo', 'inscreve o selo em carne', 'deixa as veias desenharem o traçado', 'sacrifica um dedo ao circuito', 'respira pelo ferimento aberto'],
            components: ['bisturi de osso polido', 'tigela de cobre rústica', 'sangue ainda quente', 'osso do próprio dedo', 'corda de tendão', 'incenso de carne queimada']
        }
    },
    invocador: {
        id: 'invocador',
        name: 'INVOCADOR DO ÉTER',
        motto: 'O vácuo está cheio de olhos. Alguns deles piscam quando chamados.',
        style: 'Pactuação de Risco',
        primary: 'eter',
        secondary: 'tabula',
        aesthetic: 'Pactos e sombras. Moedas antigas que ainda possuem o nome de seus mortos, espelhos que refletem o que não está ali, vozes que preenchem os silêncios.',
        tools: ['Incenso raro', 'Moeda antiga', 'Espelho de obsidiana', 'Sino de prata', 'Pêndulo', 'Cinza de oferenda'],
        keywords: ['Barganhas', 'Inquilinos', 'Dívida de Alma', 'Pacto', 'Nome Verdadeiro', 'Sombra'],
        narrative: {
            prefix: ['Chamado', 'Pacto', 'Invocação', 'Barganha', 'Súplica', 'Convite'],
            actions: ['queima o incenso e murmura o Nome', 'oferece a moeda à sombra correta', 'inclina o espelho de obsidiana', 'toca o sino três vezes', 'deixa o pêndulo apontar a resposta', 'sussurra o pacto ao Véu'],
            components: ['incenso de mirra negra', 'moeda de cobre enterrada', 'espelho de obsidiana', 'sino de prata ranhurado', 'pêndulo de ametista', 'cinza de um nome pronunciado']
        }
    },
    alquimista: {
        id: 'alquimista',
        name: 'ALQUIMISTA DO VÉU',
        motto: 'A gravidade é apenas uma sugestão. E eu discordo educadamente.',
        style: 'Transmutação de Campo',
        primary: 'tabula',
        secondary: 'primordio',
        aesthetic: 'Química e leis quebradas. Frascos borbulhando com líquidos que não existem no periódico, balanças medindo peso de conceitos, experimentos em fase intermediária.',
        tools: ['Mercúrio anômalo', 'Balança de precisão', 'Frasco de reagente', 'Retorta de vidro negro', 'Sais não-euclidianos', 'Catalisador fásico'],
        keywords: ['Equivalência Anômala', 'Experimento de Fase', 'Solvente Universal', 'Reagente', 'Transmutação', 'Catálise'],
        narrative: {
            prefix: ['Reagente', 'Transmutação', 'Catálise', 'Solução', 'Destilado', 'Precipitado'],
            actions: ['mistura os reagentes em proporção áurea', 'acende o catalisador fásico', 'calibra a balança de conceitos', 'verte o mercúrio em padrão', 'destila a matéria bruta do símbolo', 'agita o frasco até o Véu obedecer'],
            components: ['mercúrio anômalo', 'sal hipercúbico', 'frasco de obsidiana', 'retorta de vidro tensionado', 'catalisador de fase', 'tinta de reagente']
        }
    }
};

// Tabela de custos por grau (Aura + Reserva secundária)
const GRADE_COSTS = {
    1: { aura: 3, secondary: 2, difficulty: [1, 3], label: 'Truque' },
    2: { aura: 4, secondary: 3, difficulty: [3, 5], label: 'Ritual Menor' },
    3: { aura: 5, secondary: 4, difficulty: [5, 7], label: 'Ritual Maior' },
    4: { aura: 7, secondary: 5, difficulty: [7, 9], label: 'Ritual Cataclísmico' },
    5: { aura: 10, secondary: 7, difficulty: [9, 10], label: 'Ritual Proibido' }
};

// Backlashes tabelados por pilar
const BACKLASHES = {
    forma: [
        'Uma mutação temporária aflora: escamas, veias negras ou um olho extra por 1d4 horas.',
        'Perde 1d4 pontos de Potência por hemorragia espontânea.',
        'Uma parte do corpo cresce, encolhe ou se funde com um objeto próximo.',
        'Dor atávica excruciante: –2 em todos os testes físicos pela próxima cena.',
        'Atrofia residual: uma articulação trava por 1d6 turnos.',
        'A pele exibe permanentemente o símbolo do ritual (cicatriz).'
    ],
    tabula: [
        'Desorientação espacial: você "cai" para o teto por 1d4 turnos.',
        'Fusão molecular parcial com um objeto próximo (–1 Agilidade temporário).',
        'Perde 1d6 minutos de memória recente; outros veem você sumir.',
        'Eco dimensional: aparece um duplo seu por 1 turno agindo em caos.',
        'O tempo corre diferente na sua bolha — +1 rodada de atraso no próximo turno.',
        'Uma fenda mínima permanece no local; entidades menores podem atravessar.'
    ],
    primordio: [
        'Queimaduras de segundo grau no corpo do lançador (1d6 dano em Potência).',
        'Surdez sônica por 1d4 turnos.',
        'Hipotermia súbita: –2 em Agilidade pela cena.',
        'Descarga elétrica reversa: paralisa o lançador por 1 turno.',
        'A área do ritual fica permanentemente marcada por marcas de queimadura/gelo.',
        'Atrai atenção climática: tempestade chega ao local em 1d10 minutos.'
    ],
    pinaculo: [
        'Curto-circuito mental: –3 Intelecto pela próxima cena.',
        'Esquecimento seletivo de um conhecimento importante por 24h.',
        'Enxaqueca blindante: desvantagem em qualquer teste mental por 1 hora.',
        '"Engessamento" lógico: só consegue dizer verdades por 1d4 turnos.',
        'O símbolo grava-se na retina — vê-o sobreposto a tudo por 1d6 horas.',
        'Outros próximos sentem um "zumbido mental" e ficam –1 em perícias mentais.'
    ],
    eter: [
        'Atrai a atenção de uma entidade menor; ela não ataca, mas observa.',
        'Sussurros constantes no ouvido: –1 em todos os testes de Intelecto por 24h.',
        'Perde a capacidade de sentir uma emoção específica por 1 cena.',
        'Paralisia espiritual: não consegue invocar Aura por 1d4 turnos.',
        'A sombra do lançador não obedece — se move em atraso por 1 hora.',
        'Um espelho próximo racha com o nome secreto do lançador gravado.'
    ]
};

// Nomes procedurais para rituais
const NAME_FRAGMENTS = {
    forma: {
        prefix: ['Carne', 'Osso', 'Sangue', 'Veia', 'Pele', 'Músculo', 'Nervo', 'Tendão', 'Gânglio'],
        middle: ['Dobrada', 'Reescrita', 'Cristalina', 'Fragmentada', 'Regenerada', 'Mutada', 'Sárkica', 'Profana'],
        suffix: ['do Primevo', 'do Pulsar', 'de Cinábrio', 'da Incisão', 'do Vorcast', 'da Metamorfose']
    },
    tabula: {
        prefix: ['Passo', 'Portal', 'Dobra', 'Vértice', 'Bolha', 'Eco', 'Ponto', 'Plano'],
        middle: ['Dimensional', 'Estática', 'Colapsante', 'Imóvel', 'Paradoxal', 'Anômala', 'Invertida'],
        suffix: ['do Vazio', 'do Zero', 'da Distância Nula', 'do Instante Dobrado', 'de Geometria Falha']
    },
    primordio: {
        prefix: ['Chama', 'Raio', 'Trovão', 'Gelo', 'Brasa', 'Tempestade', 'Fúria', 'Descarga'],
        middle: ['Primal', 'Iracunda', 'Glacial', 'Crepitante', 'Caótica', 'Eletromagnética', 'Volcânica'],
        suffix: ['do Sol Morto', 'da Matriz', 'do Elemento Puro', 'do Céu Rachado', 'do Primórdio']
    },
    pinaculo: {
        prefix: ['Selo', 'Runa', 'Sigilo', 'Cadeia', 'Matriz', 'Glifo', 'Diagrama', 'Circuito'],
        middle: ['Hermético', 'Euclidiano', 'Recursivo', 'Axiomático', 'Simbólico', 'Lógico', 'Geométrico'],
        suffix: ['de Exclusão', 'de Silogismo', 'do Cânone', 'da Prova Final', 'do Axioma Quebrado']
    },
    eter: {
        prefix: ['Pacto', 'Sussurro', 'Véu', 'Nome', 'Sombra', 'Eco', 'Convite', 'Oferta'],
        middle: ['Profano', 'Silente', 'Abissal', 'Dormente', 'Escuro', 'Antigo', 'Perdido'],
        suffix: ['do Inquilino', 'da Alma Oferecida', 'do Nome Verdadeiro', 'do Vácuo', 'do Outro Lado']
    }
};
