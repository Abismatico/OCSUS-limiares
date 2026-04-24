/* ============================================================
   Ocsus — GERADOR PROCEDURAL DE SÍMBOLOS (SVG)
   Cria sigilos únicos por seed (hash do nome + pilar + grau)
   ============================================================ */

// Hash simples e determinístico (DJB2)
function hashSeed(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) + h) + str.charCodeAt(i);
        h = h & 0xffffffff;
    }
    return Math.abs(h);
}

// PRNG determinístico baseado em seed
function seededRandom(seed) {
    let s = seed;
    return function() {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
}

/**
 * Gera um sigilo SVG único e geométrico.
 * @param {object} opts { seed, pillar, grade, size, strokeColor }
 * @returns {string} SVG string
 */
function generateSigil(opts) {
    const {
        seed = 'Ocsus',
        pillar = 'pinaculo',
        grade = 1,
        size = 200,
        strokeColor = '#d4af37'
    } = opts;
    
    const hash = hashSeed(String(seed) + pillar + grade);
    const rand = seededRandom(hash);
    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.44;
    
    const pillarColor = (PILLARS[pillar] && PILLARS[pillar].color) || strokeColor;
    
    let svg = `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" class="sigil-svg">`;
    
    // ====== DEFS (gradientes, filtros) ======
    svg += `<defs>
        <radialGradient id="sigil-glow-${hash}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${pillarColor}" stop-opacity="0.18"/>
            <stop offset="70%" stop-color="${pillarColor}" stop-opacity="0.05"/>
            <stop offset="100%" stop-color="${pillarColor}" stop-opacity="0"/>
        </radialGradient>
        <filter id="sigil-blur-${hash}" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.5"/>
        </filter>
    </defs>`;
    
    // ====== HALO DE FUNDO ======
    svg += `<circle cx="${cx}" cy="${cy}" r="${R * 1.05}" fill="url(#sigil-glow-${hash})"/>`;
    
    // ====== CÍRCULO EXTERNO PRINCIPAL ======
    svg += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${strokeColor}" stroke-width="1" opacity="0.85"/>`;
    
    // ====== CÍRCULO SECUNDÁRIO ======
    svg += `<circle cx="${cx}" cy="${cy}" r="${R * 0.94}" fill="none" stroke="${strokeColor}" stroke-width="0.4" opacity="0.5"/>`;
    
    // ====== MARCAS DE TIQUE (graduação) — como relógio ocultista ======
    const ticks = 24;
    for (let i = 0; i < ticks; i++) {
        const a = (i * 2 * Math.PI) / ticks;
        const r1 = R * 0.94;
        const r2 = R * (i % 6 === 0 ? 0.86 : 0.90);
        const x1 = cx + Math.cos(a) * r1;
        const y1 = cy + Math.sin(a) * r1;
        const x2 = cx + Math.cos(a) * r2;
        const y2 = cy + Math.sin(a) * r2;
        svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${strokeColor}" stroke-width="0.4" opacity="0.55"/>`;
    }
    
    // ====== POLÍGONO BASE POR PILAR ======
    // Forma=hexágono, Tábula=quadrado, Primórdio=triângulo, Pináculo=pentágono, Éter=octograma
    const pillarShapes = {
        forma: 6,
        tabula: 4,
        primordio: 3,
        pinaculo: 5,
        eter: 8
    };
    const n = pillarShapes[pillar] || 5;
    const rotOffset = rand() * Math.PI * 2;
    const polyR = R * 0.72;
    
    let polyPoints = [];
    for (let i = 0; i < n; i++) {
        const a = (i * 2 * Math.PI) / n - Math.PI / 2 + rotOffset;
        polyPoints.push([cx + Math.cos(a) * polyR, cy + Math.sin(a) * polyR]);
    }
    svg += `<polygon points="${polyPoints.map(p => p.join(',')).join(' ')}" fill="none" stroke="${pillarColor}" stroke-width="1.2" opacity="0.85"/>`;
    
    // ====== ESTRELA INTERNA (conecta vértices alternados) ======
    if (n >= 5) {
        const step = n === 5 ? 2 : (n === 6 ? 2 : n === 8 ? 3 : 2);
        let starD = '';
        for (let i = 0; i <= n; i++) {
            const idx = (i * step) % n;
            const [px, py] = polyPoints[idx];
            starD += (i === 0 ? 'M' : 'L') + `${px},${py} `;
        }
        svg += `<path d="${starD}" fill="none" stroke="${strokeColor}" stroke-width="0.6" opacity="0.6"/>`;
    }
    
    // ====== RAIOS CONECTANDO CENTRO AOS VÉRTICES ======
    polyPoints.forEach((p, i) => {
        if (rand() > 0.35) {
            svg += `<line x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}" stroke="${strokeColor}" stroke-width="0.35" opacity="0.4"/>`;
        }
    });
    
    // ====== NÓS NOS VÉRTICES (pequenos círculos) ======
    polyPoints.forEach(p => {
        svg += `<circle cx="${p[0]}" cy="${p[1]}" r="2.5" fill="${pillarColor}" opacity="0.9"/>`;
        svg += `<circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="none" stroke="${strokeColor}" stroke-width="0.4" opacity="0.6"/>`;
    });
    
    // ====== CAMADA INTERNA: círculo + símbolo central ======
    const innerR = R * 0.30;
    svg += `<circle cx="${cx}" cy="${cy}" r="${innerR}" fill="none" stroke="${strokeColor}" stroke-width="0.8" opacity="0.75"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${innerR * 0.7}" fill="none" stroke="${strokeColor}" stroke-width="0.3" opacity="0.45"/>`;
    
    // ====== GLIFO CENTRAL (variável por grau) ======
    // Grau 1-2: 1 glifo simples; 3: 1 glifo complexo; 4-5: glifo + orbe
    const glyphCount = Math.min(grade + 1, 5);
    for (let g = 0; g < glyphCount; g++) {
        const aBase = rand() * Math.PI * 2;
        const rr = innerR * (0.4 + rand() * 0.45);
        const gx = cx + Math.cos(aBase) * rr;
        const gy = cy + Math.sin(aBase) * rr;
        const glyphSize = 3 + rand() * 4;
        const type = Math.floor(rand() * 5);
        svg += drawGlyph(gx, gy, glyphSize, type, strokeColor, pillarColor);
    }
    
    // ====== PONTO CENTRAL (bindu) ======
    svg += `<circle cx="${cx}" cy="${cy}" r="${2 + grade * 0.6}" fill="${pillarColor}"/>`;
    svg += `<circle cx="${cx}" cy="${cy}" r="${3.5 + grade * 0.8}" fill="none" stroke="${strokeColor}" stroke-width="0.3" opacity="0.7"/>`;
    
    // ====== RUNAS ORBITAIS (pontos ao redor) ======
    const runeCount = 6 + grade * 2;
    for (let i = 0; i < runeCount; i++) {
        const a = (i * 2 * Math.PI) / runeCount + rotOffset * 0.5;
        const rr = R * 0.98;
        const rx = cx + Math.cos(a) * rr;
        const ry = cy + Math.sin(a) * rr;
        const type = Math.floor(rand() * 4);
        svg += drawRune(rx, ry, a, type, strokeColor);
    }
    
    // ====== ARCOS EXTERNOS DECORATIVOS (baseado em grau) ======
    for (let i = 0; i < grade; i++) {
        const aStart = rand() * Math.PI * 2;
        const aLen = (Math.PI / 3) + rand() * (Math.PI / 2);
        const arcR = R * 1.06;
        const x1 = cx + Math.cos(aStart) * arcR;
        const y1 = cy + Math.sin(aStart) * arcR;
        const x2 = cx + Math.cos(aStart + aLen) * arcR;
        const y2 = cy + Math.sin(aStart + aLen) * arcR;
        svg += `<path d="M${x1},${y1} A${arcR},${arcR} 0 0,1 ${x2},${y2}" fill="none" stroke="${pillarColor}" stroke-width="1.5" opacity="0.7"/>`;
    }
    
    // ====== LINHAS CRUZADAS (sugestão de campo de contenção) ======
    if (grade >= 3) {
        const crossLines = 2 + Math.floor(rand() * 3);
        for (let i = 0; i < crossLines; i++) {
            const a1 = rand() * Math.PI * 2;
            const a2 = a1 + Math.PI + (rand() - 0.5) * 0.4;
            const r1 = R * 0.86;
            svg += `<line x1="${cx + Math.cos(a1) * r1}" y1="${cy + Math.sin(a1) * r1}" x2="${cx + Math.cos(a2) * r1}" y2="${cy + Math.sin(a2) * r1}" stroke="${strokeColor}" stroke-width="0.3" opacity="0.4" stroke-dasharray="2,2"/>`;
        }
    }
    
    svg += `</svg>`;
    return svg;
}

// Glifos decorativos
function drawGlyph(x, y, s, type, color, accent) {
    switch (type) {
        case 0: // triângulo invertido
            return `<polygon points="${x-s},${y-s} ${x+s},${y-s} ${x},${y+s}" fill="none" stroke="${color}" stroke-width="0.6" opacity="0.9"/>`;
        case 1: // diamante
            return `<polygon points="${x},${y-s} ${x+s},${y} ${x},${y+s} ${x-s},${y}" fill="${accent}" opacity="0.8"/>`;
        case 2: // cruz
            return `<g opacity="0.85"><line x1="${x-s}" y1="${y}" x2="${x+s}" y2="${y}" stroke="${color}" stroke-width="0.6"/><line x1="${x}" y1="${y-s}" x2="${x}" y2="${y+s}" stroke="${color}" stroke-width="0.6"/></g>`;
        case 3: // círculo com ponto
            return `<g><circle cx="${x}" cy="${y}" r="${s}" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.85"/><circle cx="${x}" cy="${y}" r="${s*0.3}" fill="${accent}"/></g>`;
        case 4: // triângulo
        default:
            return `<polygon points="${x},${y-s} ${x+s*0.9},${y+s*0.7} ${x-s*0.9},${y+s*0.7}" fill="none" stroke="${color}" stroke-width="0.6" opacity="0.9"/>`;
    }
}

// Pequenas runas orbitais (nos cantos do círculo maior)
function drawRune(x, y, angle, type, color) {
    const deg = (angle * 180 / Math.PI) + 90;
    const t = `transform="rotate(${deg} ${x} ${y})"`;
    switch (type) {
        case 0: // barra vertical
            return `<line x1="${x}" y1="${y-3}" x2="${x}" y2="${y+3}" stroke="${color}" stroke-width="0.7" opacity="0.8" ${t}/>`;
        case 1: // "V"
            return `<polyline points="${x-2.5},${y-2.5} ${x},${y+2.5} ${x+2.5},${y-2.5}" fill="none" stroke="${color}" stroke-width="0.6" opacity="0.8" ${t}/>`;
        case 2: // ponto duplo
            return `<g ${t}><circle cx="${x}" cy="${y-2}" r="0.9" fill="${color}" opacity="0.85"/><circle cx="${x}" cy="${y+2}" r="0.9" fill="${color}" opacity="0.85"/></g>`;
        case 3: // "X"
        default:
            return `<g ${t} opacity="0.8"><line x1="${x-2}" y1="${y-2}" x2="${x+2}" y2="${y+2}" stroke="${color}" stroke-width="0.5"/><line x1="${x-2}" y1="${y+2}" x2="${x+2}" y2="${y-2}" stroke="${color}" stroke-width="0.5"/></g>`;
    }
}

/**
 * Gera nome procedural de ritual
 */
function generateRitualName(pillar, seed) {
    const frags = NAME_FRAGMENTS[pillar];
    if (!frags) return 'Ritual sem Nome';
    const hash = hashSeed(String(seed) + pillar);
    const rand = seededRandom(hash);
    const p = frags.prefix[Math.floor(rand() * frags.prefix.length)];
    const m = frags.middle[Math.floor(rand() * frags.middle.length)];
    const s = frags.suffix[Math.floor(rand() * frags.suffix.length)];
    return `${p} ${m} ${s}`;
}

/**
 * Gera um efeito genérico baseado em exemplo do pilar + grau
 */
function generateEffect(pillar, grade, seed) {
    const examples = PILLARS[pillar].examples.filter(e => e.grade === grade);
    if (examples.length === 0) {
        const all = PILLARS[pillar].examples;
        const rand = seededRandom(hashSeed(seed + 'eff'));
        return all[Math.floor(rand() * all.length)];
    }
    const rand = seededRandom(hashSeed(seed + 'eff'));
    return examples[Math.floor(rand() * examples.length)];
}

/**
 * Escolhe um backlash do pilar
 */
function pickBacklash(pillar, seed) {
    const list = BACKLASHES[pillar] || BACKLASHES.pinaculo;
    const rand = seededRandom(hashSeed(seed + 'bk'));
    return list[Math.floor(rand() * list.length)];
}
