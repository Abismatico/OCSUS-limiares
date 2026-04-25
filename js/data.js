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
            { grade: 5, name: 'Apoteose Sárkica', effect: 'Transformação em abominação de carne por 1 cena.' },
            { grade: 3, name: 'Semente de Mutação', effect: 'Cresce um pequeno protuberância de carne útil que serve como gancho ou arma leve.' },
            { grade: 2, name: 'Giro Ósseo', effect: 'Projeta uma lâmina de osso do antebraço com precisão mortal por 1 ataque.' }
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
            { grade: 5, name: 'Colapso de Topologia', effect: 'Reescreve a geografia de um cômodo permanentemente.' },
            { grade: 2, name: 'Passagem de Vácuo', effect: 'Transfere uma pequena pressão de ar de um ponto para outro, empurrando objetos leves.' },
            { grade: 3, name: 'Parede Espelhada', effect: 'Cria uma superfície imóvel que reflete e repele ataques à distância por uma rodada.' }
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
            { grade: 5, name: 'Avatar do Sol', effect: 'Corpo se torna plasma por 3 turnos; dano maciço.' },
            { grade: 2, name: 'Manto de Brasa', effect: 'Cria uma cortina de fogo que reduz a visibilidade e causa dano leve a quem atravessa.' },
            { grade: 3, name: 'Lança de Gelo', effect: 'Projeta uma estaca congelante capaz de perfurar armaduras leves.' }
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
            { grade: 5, name: 'Reinicialização da Realidade', effect: 'Refaz os últimos 60 segundos para todos os presentes.' },
            { grade: 2, name: 'Tremor Semântico', effect: 'Faz um alvo confundir palavras e comandos por 1 turno.' },
            { grade: 3, name: 'Rede de Pensamento', effect: 'Conecta pensamentos de dois aliados, permitindo comunicação silenciosa por 2 turnos.' }
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
            { grade: 5, name: 'Quebra da Quarta Parede', effect: 'Um único pedido direto a uma deidade responde.' },
            { grade: 2, name: 'Marca do Inquilino', effect: 'Um símbolo espectral adquire vida curta e sussurra avisos ao lançador.' },
            { grade: 3, name: 'Prisão Astral', effect: 'Uma alma espectral fica presa em um círculo por 1 rodada, incapaz de mover-se livremente.' }
        ]
    }
};

const RITUAL_LIBRARY = [
    {
        name: 'Lâmina de Carne',
        grade: 2,
        effect: 'Forma um membro em arma orgânica de Dano 5 por 1 cena. Oferece +1 passo em testes de ataque com essa parte.',
        cost: '2 Aura + 3 Potência',
        backlash: 'Atrofia Residual: após a cena, o membro fica inutilizável até uma Pausa Curta.',
        pillars: ['forma', 'pinaculo']
    },
    {
        name: 'Regeneração Voraz',
        grade: 2,
        effect: 'Restaura até 8 pontos divididos entre Potência e Agilidade; metade do valor pode ser aplicado como cura imediata de reserva.',
        cost: '5 Aura ou Intelecto',
        backlash: 'Exaustão Celular: sofre 2 de dano direto na reserva não usada no custo e fica sem usar Esforço por 2 rodadas.',
        pillars: ['forma', 'pinaculo']
    },
    {
        name: 'Mutação Bestial',
        grade: 3,
        effect: 'Concede +2 de Dano desarmado e +2 de Armadura por 1 cena. O controle de Potência é necessário para manter a forma.',
        cost: '4 Potência',
        backlash: 'Frenesi Incoerente: se falhar, sofre 2 de dano de Potência e faz teste de Intelecto (NA 9) para não atacar o alvo mais próximo.',
        pillars: ['forma', 'pinaculo']
    },
    {
        name: 'Sobrecarga Sináptica',
        grade: 2,
        effect: 'Concede +1 Ação Extra e +2 em Iniciativa por 1 rodada. Também dá +1 passo de facilidade em testes de Agilidade enquanto o fluxo nervoso estiver ativo.',
        cost: '3 Aura + 2 Potência',
        backlash: 'Curto-circuito nervoso: na falha, sofre 3 de dano de Intelecto e fica Atordoado.',
        pillars: ['forma', 'primordio']
    },
    {
        name: 'Bio-luminescência Expulsiva',
        grade: 1,
        effect: 'Emite um flash cegante em Alcance Curto. Alvos que falharem em Agilidade ficam Cegos por 1 rodada.',
        cost: '3 Aura',
        backlash: 'Queimadura retinal: na falha, sofre 2 de dano de Aura e -1 passo em Percepção por 1 hora.',
        pillars: ['forma', 'primordio']
    },
    {
        name: 'Toque de Descarga Vital',
        grade: 2,
        effect: 'Ao tocar, inflige 6 de Dano Energético. Ignora Armadura de máquinas e enxertos enquanto a corrente atravessa a vítima.',
        cost: '4 Aura + 2 Potência',
        backlash: 'Ricochete elétrico: na falha, você sofre metade do dano pretendido na sua própria Potência.',
        pillars: ['forma', 'primordio']
    },
    {
        name: 'Membrana de Absorção',
        grade: 3,
        effect: 'Cria uma camada defensiva que concede Resistência 5 contra danos energéticos por 1 cena.',
        cost: '5 Aura',
        backlash: 'Sobrecarga de Aura: na falha, perde 4 de Aura e não recupera pontos desta reserva por 1 hora.',
        pillars: ['forma', 'primordio']
    },
    {
        name: 'Passagem de Mão',
        grade: 1,
        effect: 'Move um objeto pequeno dentro ou fora de uma bolsa fechada sem abri-la, contornando selos de fechamento com uma dobra de espaço.',
        cost: '1 Aura',
        backlash: 'Extravio dimensional: o objeto desaparece entre dimensões por 10 minutos.',
        pillars: ['forma', 'tabula']
    },
    {
        name: 'Casulo de Vácuo',
        grade: 4,
        effect: 'Envolve o alvo em um casulo intangível que o torna intocável por 1 rodada, mas impede qualquer ação direta.',
        cost: '5 Aura',
        backlash: 'Vácuo traumático: o alvo perde 4 de Aura e fica paralisado pela sensação de vazio.',
        pillars: ['tabula', 'eter']
    },
    {
        name: 'Véu Fractal',
        grade: 3,
        effect: 'Dobra superfícies e reflexos ao redor do lançador, reduzindo a percepção inimiga e confundir sentidos por 2 turnos.',
        cost: '4 Aura + 3 Intelecto',
        backlash: 'Reverb Sistêmico: o lançador vê imagens de si mesmo repetidas por 1 turno e sofre -2 em testes de Agilidade.',
        pillars: ['tabula', 'pinaculo']
    },
    {
        name: 'Fenda de Cinábrio',
        grade: 2,
        effect: 'Abre uma passagem estreita entre duas superfícies; um alvo ou objeto atravessa com precisão e sai no outro extremo em linha reta.',
        cost: '3 Aura + 2 Potência',
        backlash: 'Ruptura Temporal: o alvo chega ao destino com atraso de 1 rodada e sente tontura.',
        pillars: ['tabula', 'forma']
    },
    {
        name: 'Ressonância Inercial',
        grade: 3,
        effect: 'Manipula o momento de um objeto pesado e o lança com força e precisão aumentadas contra um alvo ou obstáculo.',
        cost: '4 Aura + 3 Agilidade',
        backlash: 'Eco de Massa: o objeto ricocheteia de volta com metade da intensidade.',
        pillars: ['primordio', 'tabula']
    },
    {
        name: 'Rede de Fagulhas',
        grade: 2,
        effect: 'Projeta uma cortina de fragmentos incandescentes que causa dano contínuo e atrapalha a movimentação de quem atravessa.',
        cost: '3 Aura + 2 Potência',
        backlash: 'Fagulha Reversa: você sofre 1d4 de dano de Potência se o alvo estiver muito perto.',
        pillars: ['primordio', 'pinaculo']
    },
    {
        name: 'Marca de Ruínas',
        grade: 1,
        effect: 'Inscreve um glifo que revela padrões ocultos num raio de 10m, expondo armadilhas e segredos invisíveis.',
        cost: '2 Aura',
        backlash: 'Visão Fragmentada: você recebe fragmentos de informação confusa por 1 minuto.',
        pillars: ['tabula', 'eter']
    },
    {
        name: 'Selo do Recinto',
        grade: 4,
        effect: 'Ergue uma barreira mental de até 5m que bloqueia invocações e ataques mágicos por 1 cena.',
        cost: '6 Aura + 3 Intelecto',
        backlash: 'Selo Inverso: o campo se fecha parcialmente sobre você, reduzindo seu alcance em 2m na próxima cena.',
        pillars: ['pinaculo', 'eter']
    },
    {
        name: 'Translação Espectral',
        grade: 5,
        effect: 'Muda sua essência para outro corpo ou forma por 1 rodada, usando a Aura como ponte entre os planos.',
        cost: '8 Aura + 4 Potência',
        backlash: 'Deslocamento Residual: a alma se perde brevemente, causando confusão e -2 em todos os testes por 1 rodada.',
        pillars: ['eter', 'forma']
    },
    {
        name: 'Sílex de Dor',
        grade: 2,
        effect: 'Infunde um ataque com dor arcana, causando dano bônus e penalizando o alvo em testes mentais.',
        cost: '3 Aura + 2 Intelecto',
        backlash: 'Reação de Dor: você sofre 1 de dano de Intelecto e perde 1 passo em um teste mental.',
        pillars: ['pinaculo', 'forma']
    },
    {
        name: 'Grito de Cinzas',
        grade: 3,
        effect: 'Libera uma onda de fogo e fuligem que cega os alvos e causa queimaduras por 2 turnos.',
        cost: '5 Aura',
        backlash: 'Fumaça Inveterada: você recebe -2 em Percepção por 1 cena.',
        pillars: ['primordio', 'pinaculo']
    },
    {
        name: 'Ossada Enredada',
        grade: 4,
        effect: 'Invoca tentáculos ósseos para prender e imobilizar alvos numa área por 1 turno.',
        cost: '5 Aura + 3 Potência',
        backlash: 'Estrangulamento Animado: os tentáculos se enroscam em você por 1 turno se falhar.',
        pillars: ['forma', 'tabula']
    },
    {
        name: 'Ritual do Véu Estilhaçado',
        grade: 5,
        effect: 'Conecta você a uma criatura do outro lado do véu para fazer uma única pergunta em troca de Aura.',
        cost: '8 Aura + 4 Intelecto',
        backlash: 'Véu Rasgado: sempre que você tentar se ocultar, há 50% de chance de falha automática por 1 cena.',
        pillars: ['eter', 'pinaculo']
    },
    {
        name: 'Polarização do Abismo',
        grade: 4,
        effect: 'Cria um campo de energia negra que puxa ou repele tudo num raio de 5m.',
        cost: '6 Aura + 3 Potência',
        backlash: 'Atrito Sombrio: você sofre 3 de dano de Aura e sua próxima ação é atrasada.',
        pillars: ['primordio', 'eter']
    },
    {
        name: 'Espiral de Contenção',
        grade: 3,
        effect: 'Constrói um laço geométrico em torno do alvo que reduz sua velocidade e suas defesas.',
        cost: '4 Aura + 2 Intelecto',
        backlash: 'Laço Reativo: o objetivo pode tentar puxar você, gerando um ataque gratuito.',
        pillars: ['pinaculo', 'tabula']
    },
    {
        name: 'Cálice de Sangue e Cálculo',
        grade: 4,
        effect: 'Combina um selo mental com uma oferta carnal para drenar vida de um alvo e transferi-la entre aliados.',
        cost: '6 Aura + 4 Intelecto',
        backlash: 'O selo se fecha internamente: você sofre 3 de Potência e perde 1 passo em todos os testes por 1 turno.',
        pillars: ['forma', 'pinaculo', 'eter']
    },
    {
        name: 'Rede de Topologia Anímica',
        grade: 5,
        effect: 'Trança espaço e memória para prender alvos enquanto distorce suas lembranças.',
        cost: '8 Aura + 5 Intelecto',
        backlash: 'Fios de memória se enroscam em você: um aliado aleatório sofre confusão por 1 cena.',
        pillars: ['tabula', 'eter', 'pinaculo']
    },
    {
        name: 'Trindade de Fusão',
        grade: 3,
        effect: 'Une matéria, espaço e fogo num pulso concussivo que atravessa armaduras.',
        cost: '5 Aura + 3 Potência',
        backlash: 'Pressão retorna: você sofre 2 de Potência e perde o equilíbrio por 1 turno.',
        pillars: ['forma', 'tabula', 'primordio']
    },
    {
        name: 'Colapso de Runa Dimensional',
        grade: 4,
        effect: 'Enterra glifos no chão que puxam alvos para uma camada dimensional adjacente por 1 turno.',
        cost: '6 Aura + 4 Intelecto',
        backlash: 'O limiar se fecha mal: você recebe 3 de Aura e fica vulnerável por 1 rodada.',
        pillars: ['pinaculo', 'tabula', 'primordio']
    },
    {
        name: 'Matriz de Carne e Vácuo',
        grade: 3,
        effect: 'Dá ao corpo uma forma translúcida e absorvente que mitiga ataques físicos por 1 cena.',
        cost: '5 Aura + 2 Potência',
        backlash: 'A carne vacua puxa: você perde 1 passo de movimento e sente fraqueza por 2 turnos.',
        pillars: ['forma', 'tabula', 'eter']
    },
    {
        name: 'Tempestade do Núcleo',
        grade: 5,
        effect: 'Conjura um vórtice elemental de raios e plasma que devasta a área ao redor.',
        cost: '8 Aura + 5 Potência',
        backlash: 'A tempestade varre de volta: caos retorna como 4 de dano de Aura e perda de controle.',
        pillars: ['primordio', 'tabula', 'eter']
    },
    {
        name: 'Harmonia Frágil',
        grade: 4,
        effect: 'Sincroniza mente, carne e espírito para restaurar saúde e recarregar Aura de forma deliberada.',
        cost: '6 Aura + 4 Intelecto',
        backlash: 'A sintonia quebra: você fica vulnerável a ataques mentais e sofre -2 de Proteção por 1 cena.',
        pillars: ['pinaculo', 'forma', 'eter']
    },
    {
        name: 'Aro do Abrigo Fractal',
        grade: 5,
        effect: 'Cria um escudo dimensional que reflete ataques físicos e mágicos para um ponto escolhido.',
        cost: '8 Aura + 4 Agilidade',
        backlash: 'O reflexo é parcial: metade do dano volta para você e altera seu movimento por 1 turno.',
        pillars: ['tabula', 'forma', 'pinaculo']
    },
    {
        name: 'Escudo de Carne Vivida',
        grade: 2,
        effect: 'Reforça a pele e músculos com energia animada, conferindo +3 de Armadura por 1 cena.',
        cost: '3 Aura + 2 Potência',
        backlash: 'Sobrevivência animal: você sofre 2 de dano de Potência e fica com movimentos desajeitados.',
        pillars: ['forma', 'pinaculo']
    },
    {
        name: 'Pele de Plasma',
        grade: 3,
        effect: 'Sua pele incandesce e causa 1d6 de dano a quem tocar você por 2 turnos.',
        cost: '4 Aura + 3 Potência',
        backlash: 'Corrente reversa: você recebe 2 de dano de Potência e perde 1 passo em agilidade.',
        pillars: ['primordio', 'forma']
    },
    {
        name: 'Nexo de Ar',
        grade: 1,
        effect: 'Cria um fio de vento entre dois pontos que arrasta objetos leves ou revela armadilhas.',
        cost: '2 Aura',
        backlash: 'O ar retorna: a próxima ação de movimento falha se for tentativa corrida.',
        pillars: ['tabula', 'eter']
    },
    {
        name: 'Pilar de Ruído',
        grade: 4,
        effect: 'Projeta uma coluna invisível de padrões que interrompe comunicações mágicas e tecnomânticas.',
        cost: '6 Aura + 4 Intelecto',
        backlash: 'Sopro caótico: seus próprios sinais se fragmentam, causando confusão em sua próxima ação.',
        pillars: ['pinaculo', 'eter']
    },
    {
        name: 'Lâmina de Fissura',
        grade: 3,
        effect: 'Rasga uma abertura estreita no espaço que corta defesas físicas e místicas do alvo.',
        cost: '4 Aura + 2 Potência',
        backlash: 'Fenda instável: o corte se retrai e você sofre dano adicional por reflexo.',
        pillars: ['tabula', 'primordio']
    },
    {
        name: 'Ritual de Arremesso',
        grade: 1,
        effect: 'Impulsiona um projétil ou objeto lançado com força aumentada e precisão reforçada.',
        cost: '2 Aura',
        backlash: 'Força desviada: o objeto pode ricochetear e cair fora do alcance planejado.',
        pillars: ['primordio', 'pinaculo']
    },
    {
        name: 'Manto de Espelho',
        grade: 2,
        effect: 'Cria duplicatas ilusórias de você que distraem inimigos por 1 turno.',
        cost: '3 Aura + 2 Intelecto',
        backlash: 'Reflexo quebrado: suas ações se tornam previsíveis, reduzindo Defesa em 1 por 1 turno.',
        pillars: ['eter', 'tabula']
    },
    {
        name: 'Contrato de Harmonia',
        grade: 3,
        effect: 'Ligação temporária entre aliados concede +1 passo em testes cooperativos e resistência compartilhada.',
        cost: '4 Aura + 3 Intelecto',
        backlash: 'Vínculo instável: a primeira falha repassa metade do dano ao lançar e ao parceiro.',
        pillars: ['eter', 'primordio']
    },
    {
        name: 'Gravidade Sustentada',
        grade: 4,
        effect: 'Trava um ponto no espaço com gravidade alterada, reduzindo velocidade de múltiplos alvos.',
        cost: '6 Aura + 3 Agilidade',
        backlash: 'Peso reverso: você também sente o puxão e perde o próximo movimento de esquiva.',
        pillars: ['tabula', 'forma']
    },
    {
        name: 'Pulso de Ordem',
        grade: 4,
        effect: 'Projeta uma onda de coerência que desarma magias improvisadas e interrompe efeitos caóticos.',
        cost: '5 Aura + 4 Intelecto',
        backlash: 'Reação paradoxal: sua própria concentração é comprometida, causando penalidade mental por 1 turno.',
        pillars: ['pinaculo', 'tabula']
    },
    {
        name: 'Essência Partida',
        grade: 5,
        effect: 'Divide sua alma em dois fragmentos operacionais, permitindo duas ações sincronizadas por uma rodada.',
        cost: '8 Aura + 4 Potência',
        backlash: 'Metade perdida: você sofre confusão e perde 3 de Aura na próxima cena.',
        pillars: ['eter', 'forma']
    },
    {
        name: 'Vórtice de Cauterização',
        grade: 3,
        effect: 'Gira chama concentrada em torno do alvo que cauteriza feridas e causa dano contínuo.',
        cost: '5 Aura + 2 Potência',
        backlash: 'Chama instável: o calor se espalha e pode ferir aliados próximos.',
        pillars: ['primordio', 'forma']
    },
    {
        name: 'Projeção Sináptica',
        grade: 2,
        effect: 'Lança uma imagem mental assombrosa na mente de um alvo, causando distração e medo.',
        cost: '3 Aura + 2 Intelecto',
        backlash: 'Eco mental: a imagem volta para você e reduz seu foco por 1 turno.',
        pillars: ['pinaculo', 'eter']
    },
    {
        name: 'Limiar de Memórias',
        grade: 4,
        effect: 'Cria um corredor entre memórias reais e substitutas para ocultar suas intenções.',
        cost: '5 Aura + 4 Intelecto',
        backlash: 'Lembrança corroída: você esquece um detalhe importante por 1 cena.',
        pillars: ['tabula', 'eter']
    },
    {
        name: 'Matiz de Ferro',
        grade: 1,
        effect: 'Transforma temporariamente superfícies em metal escuro e cortante.',
        cost: '2 Aura',
        backlash: 'O metal morde de volta: você sofre 1 de dano se tocá-lo antes de desfazer o efeito.',
        pillars: ['primordio', 'pinaculo']
    },
    {
        name: 'Véu da Carne',
        grade: 3,
        effect: 'Cria uma pele ilusória sobre você que mistura dor e dissimulação, ocultando intenções.',
        cost: '4 Aura + 2 Potência',
        backlash: 'Tremor visceral: você sente a própria pele contrair e não consegue agir com calma por 1 turno.',
        pillars: ['forma', 'eter']
    },
    {
        name: 'Ruína de Alquimia',
        grade: 5,
        effect: 'Quebra as propriedades de um elemento ou material, deixando-o instável por 2 rodadas.',
        cost: '8 Aura + 4 Intelecto',
        backlash: 'Reversão alquímica: a instabilidade afeta você também, causando dano e confusão.',
        pillars: ['primordio', 'pinaculo']
    },
    {
        name: 'Barreira de Ossos Calcificados',
        grade: 2,
        effect: 'Ergue uma parede de ossos endurecidos que bloqueia ataques físicos por 1 turno.',
        cost: '3 Aura + 2 Potência',
        backlash: 'Barreira frágil: a parede se desfaz em estilhaços, causando 1 de dano a quem estava atrás dela.',
        pillars: ['forma', 'tabula']
    },
    {
        name: 'Círculo de Reversão',
        grade: 3,
        effect: 'Inverte os efeitos negativos de um ritual menor lançado contra você uma vez.',
        cost: '5 Aura + 3 Intelecto',
        backlash: 'O ciclo não se fecha: o efeito invertido retorna pela metade contra você.',
        pillars: ['pinaculo', 'eter']
    },
    {
        name: 'Fissura do Primeiro Marco',
        grade: 4,
        effect: 'Abre uma fenda pequena no tempo que atrasa ou adianta um evento imediato.',
        cost: '6 Aura + 4 Agilidade',
        backlash: 'O tempo repudia: você perde a próxima iniciativa automática.',
        pillars: ['tabula', 'primordio']
    },
    {
        name: 'Sinal da Última Torre',
        grade: 2,
        effect: 'Marca um alvo com uma runa que permite rastreá-lo através de qualquer sombra por 1 cena.',
        cost: '3 Aura + 2 Intelecto',
        backlash: 'A runa ressoa alto demais, atraindo criaturas sensíveis a magia.',
        pillars: ['pinaculo', 'eter']
    },
    {
        name: 'Forja de Carne Futura',
        grade: 5,
        effect: 'Molda um membro inimigo em uma arma temporária que pode ser usada por sua equipe.',
        cost: '8 Aura + 4 Potência',
        backlash: 'O membro retorna agitado; o alvo sofre confusão e dor que afeta sua próxima ação.',
        pillars: ['forma', 'pinaculo']
    },
    {
        name: 'Véu de Cálculo',
        grade: 3,
        effect: 'Cria uma defesa lógica que reduz em 2 o dano de qualquer ataque mágico ou físico por 1 turno.',
        cost: '5 Aura + 3 Intelecto',
        backlash: 'A lógica se volta contra você: o próximo ataque crítico acerta com facilidade aumentada.',
        pillars: ['pinaculo', 'tabula']
    },
    {
        name: 'Desequilíbrio Elemental Controlado',
        grade: 4,
        effect: 'Converte metade do próximo dano sofrido em energia elemental armazenada para um ataque subsequente.',
        cost: '6 Aura + 3 Potência',
        backlash: 'A energia armazenada explode, causando dano reduzido de retorno.',
        pillars: ['primordio', 'forma']
    },
    {
        name: 'Círculo de Reconexão',
        grade: 2,
        effect: 'Reconecta um vínculo mental quebrado, permitindo comunicação simples com um aliado separado por até 30m.',
        cost: '3 Aura + 2 Intelecto',
        backlash: 'O laço reaparece distorcido; a comunicação fica confusa por um turno.',
        pillars: ['eter', 'pinaculo']
    },
    {
        name: 'Rede de Cortiça',
        grade: 1,
        effect: 'Liga vários objetos entre si com um fio invisível, compartilhando parte do dano recebido.',
        cost: '2 Aura',
        backlash: 'O dano compartilha também efeitos indesejados, como fogo ou choque.',
        pillars: ['tabula', 'forma']
    },
    {
        name: 'Aresta de Ouro Negro',
        grade: 3,
        effect: 'Reveste uma arma com uma substância etérea que causa +3 de dano contra criaturas espirituais.',
        cost: '4 Aura + 2 Potência',
        backlash: 'A substância se desprende e contamina o portador, causando fraqueza na próxima cena.',
        pillars: ['primordio', 'eter']
    },
    {
        name: 'Vigília do Arquivo Silente',
        grade: 3,
        effect: 'Cria um campo de alerta que armazena falhas e revela ações futuras no mesmo espaço.',
        cost: '4 Aura + 3 Intelecto',
        backlash: 'O arquivo sussurra verdades incômodas, deixando você com -2 em furtividade por 1 cena.',
        pillars: ['pinaculo', 'tabula', 'eter']
    },
    {
        name: 'Cápsula do Carcereiro Silente',
        grade: 5,
        effect: 'Encapsula um alvo em uma redoma translúcida que drena sua vontade enquanto mantém a presa intacta.',
        cost: '8 Aura + 5 Agilidade',
        backlash: 'A cúpula reprime seus próprios reflexos; sua próxima ação perde 50% de eficácia.',
        pillars: ['tabula', 'forma', 'eter']
    },
    {
        name: 'Marca do Laboratório Assombrado',
        grade: 4,
        effect: 'Inscreve um símbolo de pesquisa no ambiente que amplifica efeitos de tecnologia e ritual por 1 cena.',
        cost: '6 Aura + 4 Intelecto',
        backlash: 'O símbolo se alimenta de sua atenção; você perde 1 passo em testes de foco.',
        pillars: ['pinaculo', 'primordio', 'eter']
    },
    {
        name: 'Performa de Corpo-Memorial',
        grade: 3,
        effect: 'Projeta o rastro fantasma de um corpo caído, distraindo inimigos e absorvendo dano leve.',
        cost: '5 Aura + 2 Potência',
        backlash: 'O fantasma se agarra a você, reduzindo sua movimentação em 1 turno.',
        pillars: ['forma', 'eter']
    },
    {
        name: 'Estilhaço de Horizonte Rachado',
        grade: 5,
        effect: 'Faz um fragmento do mundo real despedaçar-se em várias direções, criando uma zona anômala confusa.',
        cost: '8 Aura + 5 Potência',
        backlash: 'A zona rompe sua percepção; seu próximo teste mental falha automaticamente se insistir.',
        pillars: ['primordio', 'tabula', 'pinaculo']
    },
    {
        name: 'Pulso de Contenção Magnetizada',
        grade: 4,
        effect: 'Imobiliza enxertos e construções mecânicas com um campo de força eletromagnético.',
        cost: '6 Aura + 4 Potência',
        backlash: 'O campo rebota; você sofre 3 de dano de Potência se estiver muito próximo.',
        pillars: ['primordio', 'tabula']
    },
    {
        name: 'Arquivo de Eu Divergente',
        grade: 5,
        effect: 'Cria uma cópia psíquica de si mesmo que assume uma ação alternativa quando você hesita.',
        cost: '8 Aura + 4 Intelecto',
        backlash: 'A cópia retorna com fragmentos de sua mente, causando confusão leve por 1 cena.',
        pillars: ['pinaculo', 'eter']
    },
    {
        name: 'Rede de Imperfeição',
        grade: 3,
        effect: 'Faz falhas microscópicas aparecerem em armaduras e barreiras, reduzindo sua resistência.',
        cost: '4 Aura + 3 Intelecto',
        backlash: 'A imperfeição se espalha para você se não se afastar imediatamente.',
        pillars: ['pinaculo', 'forma']
    },
    {
        name: 'Coração Autômato Abissal',
        grade: 5,
        effect: 'Imbuí um enxerto mecânico com vontade própria, aumentando poder físico em troca de risco.',
        cost: '8 Aura + 5 Potência',
        backlash: 'A vontade rebelde pode atacar o usuário; 50% de chance de agir contra você no próximo turno.',
        pillars: ['forma', 'primordio', 'eter']
    },
    {
        name: 'Silêncio de Osso e Cálculo',
        grade: 2,
        effect: 'Cobre um corredor com ossos e runas, silenciando passos e bloqueando escutas.',
        cost: '3 Aura + 2 Intelecto',
        backlash: 'O silêncio prende sua própria voz por 1 cena.',
        pillars: ['forma', 'pinaculo']
    },
    {
        name: 'Julgamento do Observador Invertido',
        grade: 4,
        effect: 'Força um inimigo a ver você como sua própria prisão, reduzindo sua ação e precisão.',
        cost: '6 Aura + 3 Intelecto',
        backlash: 'A visão se inverte em você, causando aversão e -2 de Carisma por 1 cena.',
        pillars: ['pinaculo', 'eter']
    },
    {
        name: 'Chave do Limiar Quebrado',
        grade: 3,
        effect: 'Permite atravessar paredes finas ou grades por 1 turno, mas o espaço adquire bordas cortantes.',
        cost: '5 Aura + 2 Agilidade',
        backlash: 'Você sofre 1 de dano de Potência ao sair da parede.',
        pillars: ['tabula', 'forma']
    },
    {
        name: 'Impulso do Autômato Espectral',
        grade: 1,
        effect: 'Aproxima um enxerto ou dispositivo espectral por 5m, atraindo-o suavemente.',
        cost: '2 Aura',
        backlash: 'O dispositivo atrai também ruído e atenção.',
        pillars: ['eter', 'tabula']
    },
    {
        name: 'Síncope do Observador',
        grade: 4,
        effect: 'Obliterar a atenção do alvo, deixando-o incapaz de reagir com mais do que um gesto automático por 1 turno.',
        cost: '6 Aura + 3 Intelecto',
        backlash: 'O observador se volta contra você, impondo -2 em defesa mental por 1 cena.',
        pillars: ['pinaculo', 'eter']
    },
    {
        name: 'Afloramento de Ossos Silenciosos',
        grade: 3,
        effect: 'Ergue uma carapaça de ossos que reduz dano físico e absorve impacto em impulsos cortantes.',
        cost: '4 Aura + 2 Potência',
        backlash: 'A casca se fecha com violência, causando 2 de dano de Potência ao usuário.',
        pillars: ['forma', 'tabula']
    },
    {
        name: 'Memória de Contenção',
        grade: 4,
        effect: 'Cria uma armadilha mental no ambiente que retém um invasor até que ele resolva um enigma interno.',
        cost: '5 Aura + 3 Intelecto',
        backlash: 'A armadilha também deixa você vulnerável a ataques mentais por 1 turno.',
        pillars: ['pinaculo', 'tabula', 'eter']
    },
    {
        name: 'Fenda do Arquivo Suprimido',
        grade: 5,
        effect: 'Inefável: abre uma lacuna no espaço-tempo que oculta objetos e pessoas do registro por 2 rodadas.',
        cost: '8 Aura + 4 Agilidade',
        backlash: 'O arquivo se fecha parcialmente, deixando você desorientado e com -2 em Percepção.',
        pillars: ['tabula', 'eter', 'primordio']
    }
];

const ENXERTOS = {
    'Sistema Sensorial e Neural': [
        {
            name: 'Olho de Vidro do Éter',
            ch: 2,
            type: 'Ocular',
            pillar: 'Éter + Pináculo',
            effect: 'Enxerga o plano espiritual, assinaturas de Aura e seres invisíveis.',
            details: 'Um globo de vidro leitoso substitui o original; ele parece girar de forma independente, seguindo movimentos invisíveis.'
        },
        {
            name: 'Córtex de Tradução',
            ch: 1,
            type: 'Neural',
            pillar: 'Pináculo + Éter',
            effect: 'Traduz instantaneamente qualquer idioma humano escrito ou falado.',
            details: 'Um implante cerebral conecta o córtex a sinais linguísticos, tornando todas as palavras compreensíveis em tempo real.'
        },
        {
            name: 'Nervo de Reflexo Relâmpago',
            ch: 3,
            type: 'Neural',
            pillar: 'Forma + Primórdio',
            effect: '+2 em Iniciativa e +1 passo de facilidade em testes de Esquiva de projéteis.',
            details: 'Nervos substituídos por filamentos metálicos que disparam com a velocidade da eletricidade.'
        },
        {
            name: 'Língua de Quimerismo',
            ch: 1,
            type: 'Oral',
            pillar: 'Forma + Éter',
            effect: 'Permite mimetizar qualquer voz ou som perfeitamente (Dificuldade +2 para notarem).',
            details: 'A língua é bifurcada e possui micro-ventosas que vibram em frequências impossíveis para humanos.'
        },
        {
            name: 'Soro Sináptico Permanente',
            ch: 4,
            type: 'Neural',
            pillar: 'Pináculo + Primórdio',
            effect: 'O personagem pode realizar duas ações de Intelecto em um turno (uma vez por cena).',
            details: 'Substância injetada no córtex que prolonga e acelera sinais sinápticos sem pausa.'
        },
        {
            name: 'Antena de Frequência Hume',
            ch: 2,
            type: 'Cranial',
            pillar: 'Éter + Tabula',
            effect: 'Detecta anomalias espaciais num raio de 50m (vibração na base do crânio).',
            details: 'Uma estrutura fina sob o couro cabeludo emite vibrações sempre que o espaço ao redor dobra ou pulsa.'
        },
        {
            name: 'Olhos de Vidro da Consciência',
            ch: 3,
            type: 'Ocular',
            pillar: 'Pináculo + Éter',
            effect: 'Revela pontos fracos mentais no ambiente e sinais de aparelhos de vigilância ocultos.',
            details: 'Os olhos brilham em azul translúcido e exibem linhas de dados que correm como um líquido.'
        },
        {
            name: 'Rede de Sentido Infinito',
            ch: 4,
            type: 'Neural',
            pillar: 'Pináculo + Tabula',
            effect: 'Permite sentir vibrações em qualquer superfície conectada, como se fosse toque remoto.',
            details: 'Uma malha de fios transparentes percorre o corpo, ligando o córtex às superfícies ao redor.'
        },
        {
            name: 'Máscara de Percepção Codificada',
            ch: 2,
            type: 'Ocular',
            pillar: 'Pináculo + Éter',
            effect: 'Transforma estímulos visuais em dados simbólicos que destacam ameaças e anomalias.',
            details: 'Uma lente preta cristalina projeta padrões logarítmicos sobre o campo de visão.'
        },
        {
            name: 'Véu de Reverberação',
            ch: 3,
            type: 'Cranial',
            pillar: 'Tabula + Pináculo',
            effect: 'Amplifica impulsos sensoriais para detectar fluxos de energia e barreiras invisíveis.',
            details: 'O crânio é coberto por filamentos que captam ressonâncias sutis do ambiente.'
        }
    ],
    'Sistema Locomotor': [
        {
            name: 'Pernas de Pistão',
            ch: 2,
            type: 'Pernas',
            pillar: 'Forma + Primórdio',
            effect: 'Salta até 6 metros. O dano de chute aumenta para 4.',
            details: 'Os músculos das pernas foram substituídos por pistões pneumáticos reforçados.'
        },
        {
            name: 'Mão de Desintegração',
            ch: 5,
            type: 'Braço',
            pillar: 'Tabula + Primórdio',
            effect: 'Ignora armadura e reduz objetos pequenos a pó (custa 2 Aura por uso).',
            details: 'A mão parece pixelar a realidade ao redor; o toque dissolve matéria como se fosse sujeira.'
        },
        {
            name: 'Fibras Musculares Negras',
            ch: 3,
            type: 'Muscular',
            pillar: 'Forma + Primórdio',
            effect: '+1 passo de facilidade em qualquer teste de Potência ou Atletismo.',
            details: 'Fibras escuras e pulsantes substituem os músculos comuns; o corpo exala um cheiro de borracha queimada.'
        },
        {
            name: 'Braço Multi-Articulado',
            ch: 2,
            type: 'Braço',
            pillar: 'Forma + Tabula',
            effect: 'Permite alcançar objetos a até 3 metros ou segurar uma arma extra como Mão Auxiliar.',
            details: 'O braço possui juntas extras que se deslocam; a pele é translúcida sobre a mecânica.'
        },
        {
            name: 'Garras de Monomolecular',
            ch: 2,
            type: 'Mãos',
            pillar: 'Forma + Primórdio',
            effect: 'Dano 4. Ignora 1 ponto de Armadura.',
            details: 'Lâminas finíssimas se estendem dos dedos, cortando o ar sem resistência.'
        },
        {
            name: 'Âncoras Magnéticas',
            ch: 1,
            type: 'Pés/Mãos',
            pillar: 'Pináculo + Tabula',
            effect: 'Permite caminhar em paredes ou tetos metálicos sem testes.',
            details: 'Ímãs integrados aos ossos grudam em metal como se fossem vontade física.'
        },
        {
            name: 'Salto de Martelo Hidráulico',
            ch: 3,
            type: 'Pernas',
            pillar: 'Primórdio + Tabula',
            effect: '+2 de força de impulso ao pular e aterrissar com precisão ampliada.',
            details: 'Juntas reforçadas liberam fluidos que amortecem e impulsionam o corpo como um martelo.'
        },
        {
            name: 'Galochas de Gravidade',
            ch: 2,
            type: 'Pés',
            pillar: 'Tabula + Forma',
            effect: 'Reduz peso corporal, permitindo atravessar superfícies frágeis sem quebrá-las.',
            details: 'A sola é revestida com símbolos que manipulam vetores de força sob os pés.'
        },
        {
            name: 'Módulo de Salto Fractal',
            ch: 3,
            type: 'Pernas',
            pillar: 'Tabula + Primórdio',
            effect: 'Permite saltos com precisão de aterrissagem e aterrissagens suaves em superfícies instáveis.',
            details: 'Pequenas placas giratórias ajustam o impulso no ar e amortecem a queda ao tocar o solo.'
        },
        {
            name: 'Tarja de Passo Neural',
            ch: 2,
            type: 'Coxa',
            pillar: 'Pináculo + Forma',
            effect: 'Sincroniza movimento e reação, concedendo +1 passo em testes de esquiva e corrida.',
            details: 'Linhas de energia percorrem o fêmur, conectando-o ao fluxo neural do corpo.'
        }
    ],
    'Sistema Vital e Orgânico': [
        {
            name: 'Coração de Mercúrio',
            ch: 4,
            type: 'Vital',
            pillar: 'Primórdio + Forma',
            effect: 'Imunidade a venenos e radiações. Sangue causa 2 de dano se espirrar.',
            details: 'O batimento é um som líquido e pesado; o sangue é prateado e tóxico.'
        },
        {
            name: 'Pulmão Ciclone',
            ch: 2,
            type: 'Vital',
            pillar: 'Primórdio + Tabula',
            effect: 'Prende a respiração por 30 min ou emite um sopro que empurra alvos.',
            details: 'O peito é largo e o som da respiração lembra uma turbina industrial.'
        },
        {
            name: 'Segunda Pele de Quitina',
            ch: 3,
            type: 'Dérmico',
            pillar: 'Forma + Tabula',
            effect: '+2 de Armadura permanente.',
            details: 'A pele assume placas escamosas e frias; o suor é substituído por óleo lubrificante.'
        },
        {
            name: 'Glândula de Regeneração',
            ch: 6,
            type: 'Vital',
            pillar: 'Forma + Primórdio',
            effect: 'Recupera 1 de Potência por rodada. Membros crescem de volta em 1 dia.',
            details: 'Nódulos pulsantes exalam cheiro de carne fresca e cicatrizam feridas rapidamente.'
        },
        {
            name: 'Estômago de Aniquilação',
            ch: 1,
            type: 'Vital',
            pillar: 'Forma + Primórdio',
            effect: 'Digiere plástico, metal e carne podre sem penalidades.',
            details: 'O ácido gástrico é verde e fluorescente; o usuário raramente sente fome.'
        },
        {
            name: 'Reserva de Aura Orgânica',
            ch: 3,
            type: 'Bio-Aura',
            pillar: 'Éter + Forma',
            effect: 'Armazena 5 pontos de Aura extras que não contam no limite.',
            details: 'Um segundo órgão transparente pulsa nas costas, como uma bateria de alma.'
        },
        {
            name: 'Nó Psiônico Perfurante',
            ch: 2,
            type: 'Neural',
            pillar: 'Pináculo + Éter',
            effect: 'Permite perfurar a mente de um alvo e implantar um comando simples.',
            details: 'Fibras de energia entram no crânio e formam um ponto brilhante sob a pele.'
        },
        {
            name: 'Câmera de Bolha Astral',
            ch: 3,
            type: 'Cranial',
            pillar: 'Tabula + Éter',
            effect: 'Cria um campo imaterial ao redor da cabeça capaz de bloquear leitura mental.',
            details: 'Um aro etéreo circunda o crânio, emitindo um zumbido grave e distante.'
        },
        {
            name: 'Escudo de Memórias Cantadas',
            ch: 2,
            type: 'Vital',
            pillar: 'Pináculo + Forma',
            effect: 'Uma carga de memórias falsas protege contra ataques psíquicos por 1 cena.',
            details: 'Uma tatuagem de símbolos sobre a têmpora pulsa com imagens fugazes.'
        },
        {
            name: 'Coração de Placa Fluida',
            ch: 5,
            type: 'Vital',
            pillar: 'Primórdio + Éter',
            effect: 'Recupera 1 de Aura automaticamente por rodada e reduz medo em 1 passo.',
            details: 'Um coração metálico líquido bate com luz azul dentro do peito.'
        },
        {
            name: 'Mandíbula de Engrenagens',
            ch: 1,
            type: 'Oral',
            pillar: 'Forma + Pináculo',
            effect: 'Proporciona mordida cortante e rejeita venenos menores.',
            details: 'Dentes substituídos por lâminas e dentes metálicos que rangem com precisão mecânica.'
        },
        {
            name: 'Sifão de Sangue Lunar',
            ch: 4,
            type: 'Vital',
            pillar: 'Éter + Forma',
            effect: 'Cada golpe que você causa restaura 1 ponto de Potência para você ou um aliado.',
            details: 'Veias brilhantes extraem a energia vital do dano e a transportam como névoa prateada.'
        }
    ],
    'Experimentais': [
        {
            name: 'Voz do Pináculo',
            ch: 5,
            type: 'Garganta',
            pillar: 'Éter + Pináculo',
            effect: 'Comandos de uma palavra são ordens absolutas para alvos de Nível menor.',
            details: 'A garganta é reforçada com placas de ouro; a voz ressoa direto no crânio do alvo.'
        },
        {
            name: 'Olho de Singularidade',
            ch: 7,
            type: 'Ocular',
            pillar: 'Tabula + Primórdio',
            effect: 'Dispara um raio de gravidade (Dano 10). O olho sangra após o uso.',
            details: 'A íris desaparece, revelando um buraco negro minúsculo no globo ocular.'
        },
        {
            name: 'Manto de Nervos Externos',
            ch: 4,
            type: 'Nervoso',
            pillar: 'Éter + Forma',
            effect: 'Sente tudo num raio de 10m por vibração. Imune a ataques surpresa.',
            details: 'Filamentos flutuantes brotam dos poros como uma teia viva sensorial.'
        },
        {
            name: 'Motor Entrópico de Peito',
            ch: 8,
            type: 'Torácico',
            pillar: 'Éter + Pináculo',
            effect: 'Anula automaticamente rituais de Grau 1 ou 2 que o atinjam.',
            details: 'Um reator negro pulsa no esterno e vibra quando a magia se aproxima.'
        },
        {
            name: 'Asas de Geometria Variável',
            ch: 6,
            type: 'Dorsal',
            pillar: 'Tabula + Forma',
            effect: 'Voo (Velocidade Longa). Pode ficar intangível para atravessar paredes (3 Aura).',
            details: 'As asas flutuam como estruturas poligonais, dobrando o espaço ao redor do usuário.'
        },
        {
            name: 'Sangue de Plasma',
            ch: 5,
            type: 'Vital',
            pillar: 'Primórdio + Forma',
            effect: 'Quando ferido, explode em uma pequena supernova (Dano 6 em área).',
            details: 'O corpo irradia luz intensa; o sangue brilha como fogo de estrelas.'
        },
        {
            name: 'Manoplas de Falha Dimensional',
            ch: 6,
            type: 'Mão',
            pillar: 'Tabula + Éter',
            effect: 'Podem tocar objetos através de paredes finas ou superfícies intangíveis uma vez por cena.',
            details: 'As mãos parecem dissolver a pele ao redor e reaparecer no vazio entre os planos.'
        },
        {
            name: 'Escape de Sombras Duais',
            ch: 3,
            type: 'Dorsal',
            pillar: 'Éter + Tabula',
            effect: 'Cria um portal de sombra por onde você pode escapar distorcendo a própria forma.',
            details: 'O dorso é coberto por brechas negras que respiram quando o enxerto é ativado.'
        },
        {
            name: 'Incubadora de Sementes de Éter',
            ch: 4,
            type: 'Orgânico',
            pillar: 'Forma + Éter',
            effect: 'Gera um pequeno enxerto secundário que pode ser plantado em um objeto para imbuí-lo por 1 hora.',
            details: 'Pequenas gemas pulsantes crescem na pele e podem ser arrancadas com cuidado.'
        },
        {
            name: 'Implante de Contenção Silente',
            ch: 5,
            type: 'Cranial',
            pillar: 'Pináculo + Éter',
            effect: 'Cria um sinal silencioso que bloqueia tentativas de invasão mental próximas.',
            details: 'Uma rede de finas lâminas sensoriais se alinhava ao córtex, emitindo um campo calmo e opaco.'
        }
    ],
    'Sistema de Contenção': [
        {
            name: 'Bolsa de Retenção Mental',
            ch: 3,
            type: 'Cranial',
            pillar: 'Pináculo + Tabula',
            effect: 'Armazena pensamentos intrusos e reduz a punição de ataques psíquicos em 1 ação.',
            details: 'Uma estrutura transparente repousa sobre o cérebro, separando memórias como se fossem objetos.'
        },
        {
            name: 'Pulsar de Placa de Aço',
            ch: 2,
            type: 'Dérmico',
            pillar: 'Forma + Pináculo',
            effect: 'Cria uma camada temporária de proteção que absorve 3 de dano e brilha com runas antes de desaparecer.',
            details: 'Placas pequenas emergem da pele em resposta a impacto, recuando quando a ameaça passa.'
        },
        {
            name: 'Rede de Anulação',
            ch: 5,
            type: 'Rede',
            pillar: 'Éter + Tabula',
            effect: 'Captura e cancela um efeito mágico ou energético no primeiro contato, uma vez por cena.',
            details: 'Fios escuros se entrelaçam em padrões geométricos invisíveis, apertando ao toque do anomalia.'
        },
        {
            name: 'Gaiola de Sussurros',
            ch: 4,
            type: 'Dorsal',
            pillar: 'Éter + Pináculo',
            effect: 'Suprime comunicações psíquicas no raio de 5 metros, revelando qualquer mensagem mental.',
            details: 'Pequenos dentes de osso formam uma grade que emite um zumbido abafado e constante.'
        }
    ]
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
            actions: ['mistura os reagentes em proporção áurea', 'acende o catalisador fásico', 'calibra a balança de precisão', 'verte o mercúrio em padrão', 'destila a matéria bruta do símbolo', 'agita o frasco até o Véu obedecer'],
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
        'A pele exibe permanentemente o símbolo do ritual (cicatriz).',
        'A carne se torna flexível demais por 1 cena, tornando ações físicas inesperadas mais difíceis.',
        'O corpo expele um fluido corrosivo por instantes; tudo que toca sofre dano leve.'
    ],
    tabula: [
        'Desorientação espacial: você "cai" para o teto por 1d4 turnos.',
        'Fusão molecular parcial com um objeto próximo (–1 Agilidade temporário).',
        'Perde 1d6 minutos de memória recente; outros veem você sumir.',
        'Eco dimensional: aparece um duplo seu por 1 turno agindo em caos.',
        'O tempo corre diferente na sua bolha — +1 rodada de atraso no próximo turno.',
        'Uma fenda mínima permanece no local; entidades menores podem atravessar.',
        'O chão se curva como água sob seus pés; o próximo movimento físico sofre desvantagem.',
        'A direção da gravidade oscila por segundos: você deve reaprender a manter o equilíbrio.'
    ],
    primordio: [
        'Queimaduras de segundo grau no corpo do lançador (1d6 dano em Potência).',
        'Surdez sônica por 1d4 turnos.',
        'Hipotermia súbita: –2 em Agilidade pela cena.',
        'Descarga elétrica reversa: paralisa o lançador por 1 turno.',
        'A área do ritual fica permanentemente marcada por marcas de queimadura/gelo.',
        'Atrai atenção climática: tempestade chega ao local em 1d10 minutos.',
        'O calor interno aumenta demais e você sofre +2 dano adicional de Potência no próximo ataque sem aviso.',
        'A energia se dispersa de forma violenta, fazendo com que objetos metálicos próximos vibrem intensamente.'
    ],
    pinaculo: [
        'Curto-circuito mental: –3 Intelecto pela próxima cena.',
        'Esquecimento seletivo de um conhecimento importante por 24h.',
        'Enxaqueca blindante: desvantagem em qualquer teste mental por 1 hora.',
        '"Engessamento" lógico: só consegue dizer verdades por 1d4 turnos.',
        'O símbolo grava-se na retina — vê-o sobreposto a tudo por 1d6 horas.',
        'Outros próximos sentem um "zumbido mental" e ficam –1 em perícias mentais.',
        'Suas palavras se tornam circuitos: você gagueja em termos lógicos e não pode se comunicar claramente por 1 turno.',
        'Uma lembrança se esvai como se tivesse sido riscada por uma régua invisível.'
    ],
    eter: [
        'Atrai a atenção de uma entidade menor; ela não ataca, mas observa.',
        'Sussurros constantes no ouvido: –1 em todos os testes de Intelecto por 24h.',
        'Perde a capacidade de sentir uma emoção específica por 1 cena.',
        'Paralisia espiritual: não consegue invocar Aura por 1d4 turnos.',
        'A sombra do lançador não obedece — se move em atraso por 1 hora.',
        'Um espelho próximo racha com o nome secreto do lançador gravado.',
        'Palavras quebradas flutuam ao redor de você, fazendo aliados sofrerem desvantagem visual por 1 turno.',
        'Uma presença fria se aloja no seu ombro; você sente uma dor fantasma constante por 1 cena.'
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
