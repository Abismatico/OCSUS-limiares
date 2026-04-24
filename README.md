# Ocsus LIMIARES

> _Grimório Thaumatúrgico de campo — 100% offline, instalável como app nativo._

**Ocsus LIMIARES** é um **Progressive Web App (PWA)** para o RPG **Sistema Limiares**. Permite que ocultistas criem, visualizem, salvem e gerenciem rituais thaumatúrgicos diretamente do celular, com **sigilos SVG únicos gerados proceduralmente**, narrativa estilizada por paradigma, calculadora de Backlash em tempo real e grimório pessoal armazenado localmente.

---

## 🎭 Estilo
Tecno-hermético · Preto · Dourado (#d4af37) · Geometria sagrada.

---

## ✅ Funcionalidades implementadas

### 🔥 Core
- [x] **PWA instalável** (manifest.json + service worker com cache-first)
- [x] **Funciona 100% offline** após a primeira carga
- [x] **Mobile-first** com bottom navigation, side drawer e safe-areas (iOS notch)
- [x] **Splash screen** com sigilo animado
- [x] **Tema tecno-hermético** (Cinzel + Cormorant Garamond + JetBrains Mono)

### 🖋️ Forjar Ritual
- [x] Seleção de **5 Pilares** (Forma · Tábula · Primórdio · Pináculo · Éter)
- [x] Seleção de **5 Graus** (Truque → Ritual Proibido)
- [x] Seleção de **4 Paradigmas** (Engenheiro Hermético · Herdeiro do Sangue · Invocador do Éter · Alquimista do Véu)
- [x] **Nome procedural** gerado (ou custom)
- [x] **Efeito mecânico** gerado com base em exemplos do pilar/grau (ou custom)
- [x] **Re-sigilar** (novo seed → novo sigilo)

### 🎨 Gerador de Sigilos SVG
- [x] **Procedural e determinístico** (mesmo nome + pilar + grau = mesmo sigilo)
- [x] Forma geométrica base **muda por pilar** (Forma=hexágono · Tábula=quadrado · Primórdio=triângulo · Pináculo=pentágono · Éter=octograma)
- [x] **Complexidade escala com o grau** (mais glifos, runas e arcos)
- [x] Cor do pilar tingindo os detalhes
- [x] 24 marcas de tique, glifos internos, runas orbitais, halo radial

### 📖 Grimório
- [x] **localStorage** (CRUD completo)
- [x] Lista com sigilo em miniatura, nome, pilar, grau
- [x] **Abrir · Excluir · Exportar JSON · Limpar tudo**
- [x] Contagem por pilar (na home)

### ⚡ Calculadora de Backlash
- [x] Seletor de **pilar**
- [x] Slider de **dificuldade (0–10)**
- [x] Perícia (Nenhuma / Treinado –3 NA / Especializado –6 NA)
- [x] Slider de **bônus Aura**
- [x] **Número-Alvo (NA)** calculado ao vivo
- [x] **Custo em Reservas** atualizado ao vivo
- [x] **Rolador 1d20** com indicador de sucesso/falha/crítico
- [x] **Backlash sugerido** (sorteado da tabela do pilar, re-sorteável)

### 📚 Biblioteca de consulta
- [x] **Pilares** — descrição, domínio, reserva, palavras-chave e exemplos de rituais por grau
- [x] **Paradigmas** — motto, estética, ferramentas, palavras-chave, pilares associados

### 📤 Exportar
- [x] **Web Share API** (compartilhar ritual como texto)
- [x] **Fallback copy** para área de transferência
- [x] **Exportar grimório inteiro** como JSON

### 🧘 Narrativa
- [x] **Gerador de prosa por paradigma** — a mesma mecânica é descrita de forma diferente para cada ocultista (Hermético fala em vetores; Sarkicista fala em sangue; Invocador fala em pactos; Alquimista fala em reagentes).

---

## 🗺️ Rotas / Vistas (hash-based)

| Hash | Vista | Descrição |
|---|---|---|
| `#home` | **Oráculo** | Tela inicial com atalhos e estatísticas |
| `#create` | **Forjar Ritual** | Criador de rituais |
| `#preview` | **Ritual Card** | Preview do ritual gerado (com sigilo, narrativa, backlash) |
| `#grimoire` | **Grimório** | Lista dos rituais salvos |
| `#backlash` | **Calc. Backlash** | Calculadora interativa |
| `#pillars` | **Pilares** | Biblioteca dos 5 pilares |
| `#paradigms` | **Paradigmas** | Biblioteca dos 4 paradigmas |
| `#about` | **Manual** | Guia de uso e mecânica |

---

## 📁 Estrutura de arquivos

```
index.html              → Shell do app, splash, navegação
manifest.json           → Metadados PWA (instalação)
service-worker.js       → Cache offline (cache-first)
css/
  └── style.css         → Tema tecno-hermético completo
js/
  ├── data.js           → Pilares, Paradigmas, Backlashes, Custos, Nomes
  ├── sigil.js          → Gerador procedural de SVG
  ├── narrative.js      → Gerador de prosa por paradigma
  ├── storage.js        → localStorage wrapper (Grimoire)
  ├── views.js          → Renderização de cada vista
  └── app.js            → Controlador (rotas, drawer, toast, modal)
icons/
  ├── icon.svg          → Ícone vetorial
  ├── icon-192.png      → Ícone PWA 192×192
  ├── icon-512.png      → Ícone PWA 512×512
  └── icon-maskable.png → Ícone maskable
README.md               → Este arquivo
```

---

## 💾 Modelo de dados (localStorage)

**Chave:** `Ocsus_limiares_grimoire_v1`  
**Formato:** `Array<Ritual>`

```ts
interface Ritual {
  id: string;             // "r_<timestamp>_<rand>"
  name: string;
  pillar: 'forma' | 'tabula' | 'primordio' | 'pinaculo' | 'eter';
  grade: 1 | 2 | 3 | 4 | 5;
  paradigm: 'hermetico' | 'sarkicista' | 'invocador' | 'alquimista';
  seed: number;           // usado pelo gerador de sigilos
  effect: string;         // descrição mecânica
  customEffect?: string;  // custom override, se houver
  backlash: string;       // texto do backlash pré-sorteado
  createdAt: number;
  updatedAt: number;
}
```

---

## 📱 Como instalar como app de celular

### Android (Chrome / Edge)
1. Abra o site em aba.
2. Toque no menu **⋮** → **"Instalar app"** / **"Adicionar à tela inicial"**.
3. O Ocsus aparece como app na gaveta.

### iPhone / iPad (Safari)
1. Abra em Safari (não funciona em outros browsers no iOS).
2. Toque em **Compartilhar ↑** → **"Adicionar à Tela de Início"**.

### Desktop (Chrome)
1. Ícone **⊕** na barra de endereços → **"Instalar Ocsus Limiares"**.

Após instalado, o app **funciona offline completamente** — puxa tudo do cache (Service Worker).

## 🚀 Publicação ao vivo
Para deixar o app disponível na web basta hospedar os arquivos estáticos em qualquer serviço HTTPS. Sugestões rápidas:

- GitHub Pages: crie um repositório, envie os arquivos e habilite Pages em `main`/`root`.
- Netlify: arraste a pasta para o deploy ou conecte o repositório.
- Vercel: conecte o repositório e escolha deploy estático.

O aplicativo estará acessível pelo link gerado pelo serviço, e o PWA será instalável automaticamente em navegadores compatíveis.

---

## 🎲 Fidelidade ao sistema

Todas as mecânicas seguem o documento do Sistema Limiares:

- **Teste:** `1d20 + Aura ≥ Dificuldade × 3`
- **Perícia:** Treinado reduz 3 do NA · Especializado reduz 6
- **Custos por grau** (Aura + Reserva secundária):
  - Grau 1 (Truque): 3 + 2
  - Grau 2 (Ritual Menor): 4 + 3
  - Grau 3 (Ritual Maior): 5 + 4
  - Grau 4 (Cataclísmico): 7 + 5
  - Grau 5 (Proibido): 10 + 7
- **Backlash é automático** (acontece mesmo em sucesso no d20)
- **Reservas por pilar:** Forma/Primórdio → Potência · Tábula → Agilidade · Pináculo → Intelecto · Éter → Aura

---

## 🚧 Recursos ainda não implementados (roadmap)

- [ ] **Exportar como PNG** do ritual card (requer `html2canvas` — deixado de fora para manter o app leve e 100% offline sem dependências extras)
- [ ] **Exportar como PDF** (mesmo motivo)
- [ ] **Edição de ritual salvo** (atualmente só é possível criar novo / excluir)
- [ ] **Busca no grimório**
- [ ] **Tags personalizadas** nos rituais
- [ ] **Modo campanha** (agrupar rituais por personagem/campanha)
- [ ] **Importar JSON** (backup restore)
- [ ] **Estatísticas pessoais** (Pilar favorito, total de backlashes rolados etc.)
- [ ] **Compartilhar sigilo como imagem** via Web Share API Level 2

---

## 🧭 Próximos passos recomendados

1. **Instalar o app** pelo navegador para testar em modo standalone
2. Testar o fluxo: Forjar → Preview → Salvar → Grimório
3. Testar a calculadora em uma sessão real de mesa
4. Adicionar importação JSON para sincronizar entre dispositivos manualmente
5. Adicionar `html2canvas` via CDN (com fallback offline) para exportar card como imagem

---

## 🕯️ Filosofia

> _"O que se abre, não se fecha. Todo ritual deixa sulco. Toda invocação é um convite. Toda transgressão muda quem a comete. Este grimório é ferramenta, não álibi — o Backlash sempre vem."_

---

**Ocsus LIMIARES · v1.0 · OFFLINE**
