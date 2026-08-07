/* ============================================================
   Ocsus — GERADOR DE NARRATIVA POR PARADIGMA
   Transforma um ritual genérico em descrição fiel ao ocultista
   ============================================================ */

function generateNarrative(ritual) {
    const paradigm = PARADIGMS[ritual.paradigm];
    const pillarId = Array.isArray(ritual.pillars) ? ritual.pillars[0] : ritual.pillar;
    const pillar = PILLARS[pillarId];
    if (!paradigm || !pillar) return '';
    
    const rand = seededRandom(hashSeed(ritual.name + ritual.paradigm));
    
    const action = paradigm.narrative.actions[Math.floor(rand() * paradigm.narrative.actions.length)];
    const comp1 = paradigm.narrative.components[Math.floor(rand() * paradigm.narrative.components.length)];
    const comp2 = paradigm.narrative.components[Math.floor(rand() * paradigm.narrative.components.length)];
    const keyword = paradigm.keywords[Math.floor(rand() * paradigm.keywords.length)];
    
    // Templates variam por paradigma
    const templates = {
        hermetico: [
            `O ocultista ${action} em <em>${comp1}</em>, ajustando vetores com precisão milimétrica. A operação segue o princípio de <em>${keyword}</em>: cada ângulo é uma afirmação, cada linha uma consequência. O ${comp2} serve como terminal de feedback — se algum número estiver errado, o sistema devolve o erro em forma de dor.`,
            `Usando <em>${comp1}</em> e um <em>${comp2}</em> calibrado, o engenheiro ${action}. O diagrama respeita a lei do <em>${keyword}</em>, traçando um circuito fechado ao redor do alvo. A matemática não pede — ela exige. E a realidade, sendo escrava da lógica, obedece.`,
            `${capitalize(action)} sobre a superfície com <em>${comp1}</em>, o hermético converte o fenômeno em equação executável. O <em>${comp2}</em> estabiliza a margem de erro. Quando o último traço fecha o perímetro, o ${keyword.toLowerCase()} entra em vigor — frio, exato, irrevogável.`,
            `A lâmina do silêncio é desenhada com <em>${comp1}</em> e ativada pelo pulso do <em>${comp2}</em>. Cada segmento do ritual é uma instrução binária; cada falha é um comando inválido. O princípio de <em>${keyword}</em> faz a realidade refinar-se para caber no cálculo.`,
            `O ocultista ${action} em padrão quase mecânico, com <em>${comp1}</em> vibrando como um cristal de dados. O <em>${comp2}</em> estabiliza as transições. Em seguida, uma última sentença de <em>${keyword}</em> é impressa no espaço — e tudo que estava fora da conta cai no limiar.`
        ],
        sarkicista: [
            `Com <em>${comp1}</em> na mão trêmula, o herdeiro ${action}. O sangue escorre pelo padrão como se soubesse para onde ir — como se fosse ele o verdadeiro operador. O <em>${comp2}</em> absorve a oferenda. O princípio de <em>${keyword}</em> se cumpre: nenhuma força sem sacrifício, nenhuma mudança sem dor.`,
            `O ocultista ${action}, enquanto o <em>${comp1}</em> fumega sobre pele aberta. Veias escuras desenham, sozinhas, as últimas linhas do selo. O <em>${comp2}</em> completa a transgressão. Este é o caminho do <em>${keyword}</em>: a carne ensina o que a mente esqueceu.`,
            `${capitalize(action)} na própria coxa, o sarkicista oferece um ${comp1} úmido ao padrão. O <em>${comp2}</em> serve de âncora biológica. O símbolo pulsa — vivo, úmido, obsceno. <em>${keyword}</em> não é escolha; é herança despertada.`,
            `A cada gota de <em>${comp1}</em>, o ritual se torna mais brutal e mais belo. O <em>${comp2}</em> lambe as bordas do selo feito de carne e cabo. <em>${keyword}</em> é sentido como um rugido interno: a dor não é a punição, é a prova de que algo foi verdadeiramente alterado.`,
            `O herdeiro ${action} com precisão animal. O <em>${comp1}</em> rasga o tecido, enquanto o <em>${comp2}</em> compõe o traçado corrupto. Quando o sangue seca, a marca já está gravada: o <em>${keyword}</em> exige sangue, e o corpo obedece.`
        ],
        invocador: [
            `O invocador ${action}, usando <em>${comp1}</em> e um <em>${comp2}</em> herdado. A sala esfria três graus. Algo do outro lado reconhece a chamada — e o princípio de <em>${keyword}</em> se estabelece: toda presença convocada deixa a porta entreaberta.`,
            `Com <em>${comp1}</em> crepitando em brasa lenta, o ocultista ${action}. O <em>${comp2}</em> treme levemente ao sentir presença. A <em>${keyword}</em> se define nos silêncios entre as palavras faladas — e no que responde quando o operador termina.`,
            `${capitalize(action)} diante do <em>${comp1}</em>, o invocador estende o <em>${comp2}</em> como oferta. A sombra no chão se move uma fração de segundo antes do corpo. A <em>${keyword}</em> acontece. Algo aceita. Algo cobra.`,
            `O ocultista ${action} em um tom que não parece totalmente humano. O <em>${comp1}</em> arde fraco, o <em>${comp2}</em> vibra com ressonância. O <em>${keyword}</em> é sussurrado por algo além do véu — e algo do outro lado, interessado, responde em silêncio profundo.`,
            `A face do mundo se estica quando o ritual ativa. O <em>${comp1}</em> é deixado no centro como um ponto de foco, e o <em>${comp2}</em> gira devagar em torno dele. O <em>${keyword}</em> não é uma palavra, é uma promessa: a convocação se sustenta enquanto o preço estiver sendo pago.`
        ],
        alquimista: [
            `O alquimista ${action}, combinando <em>${comp1}</em> com <em>${comp2}</em> em razão áurea. A mistura reage de modo que não deveria. Pelo princípio de <em>${keyword}</em>, a matéria transfigurada paga o seu próprio preço em algum outro plano — geralmente o do lançador.`,
            `Ao ${action.replace('mistura', 'misturar').replace('acende', 'acender').replace('calibra', 'calibrar').replace('verte', 'verter').replace('destila', 'destilar').replace('agita', 'agitar')}, o ocultista libera vapores azuis-prateados. O <em>${comp1}</em> cataliza; o <em>${comp2}</em> estabiliza. <em>${keyword}</em> opera: o Véu concorda em ser reescrito, contanto que algo de igual peso seja apagado.`,
            `${capitalize(action)}, o alquimista observa o <em>${comp1}</em> reagir contra toda previsão química. Usa o <em>${comp2}</em> para conter a fase intermediária. O princípio de <em>${keyword}</em> exige precisão absoluta — um erro de decimal custa um ano de vida.`,
            `O ritual é preparado como uma mistura de ciência e blasfêmia. O <em>${comp1}</em> dissolve a superfície; o <em>${comp2}</em> condensa a intenção. Em seguida, o <em>${keyword}</em> é inscrito no vapor — a transmutação ocorre apenas quando o último resíduo desaparece.`,
            `O ocultista ${action} em silêncio, como quem monta um sistema perfeito. O <em>${comp1}</em> arde com intensidade irregular; o <em>${comp2}</em> serve de fase estabilizadora. Quando a equação alcança o ponto crítico, a matéria se dobra até obedecer ao <em>${keyword}</em>.`
        ]
    };
    
    const tpl = templates[ritual.paradigm];
    return tpl[Math.floor(rand() * tpl.length)];
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Formata descrição completa do ritual em prosa
 */
function buildRitualFullText(ritual) {
    const pillarId = Array.isArray(ritual.pillars) ? ritual.pillars[0] : ritual.pillar;
    const pillar = PILLARS[pillarId];
    const paradigm = PARADIGMS[ritual.paradigm];
    const cost = GRADE_COSTS[ritual.grade];
    
    return {
        narrative: generateNarrative(ritual),
        effect: ritual.effect,
        backlash: ritual.backlash,
        cost: `${cost.aura} Aura + ${cost.secondary} ${pillar.reserveName}`,
        difficulty: `${cost.difficulty[0]}–${cost.difficulty[1]} (NA ${cost.difficulty[0]*3}–${cost.difficulty[1]*3})`,
        pillarInfo: pillar,
        paradigmInfo: paradigm
    };
}
