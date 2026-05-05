import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "betika",
    title: "Betika",
    client: "Shop and Deliver Limited",
    year: 2019,
    duration: "6 mesi",
    roles: ["Research Lead", "Design Sprint Facilitator", "UX Designer"],
    team: "UX Designer, UI Designer, Country Manager, CTO, Head of Frontend",
    tools: ["Figma", "Miro", "VueJS (SSR)", "R", "GraphQL", "RPC", "Google Analytics", "Hotjar"],
    methods: [
      "Interviste agli Stakeholder",
      "Analisi della Concorrenza",
      "Customer Personas",
      "Empathy Mapping",
      "Analisi NPS",
      "Lean Canvas",
      "Framework HEART",
      "Analisi Euristica",
      "GV Design Sprint",
    ],
    deliverables: [
      "Web app ridisegnata",
      "Funzionalità Omnisearch",
      "Nuovo sistema di navigazione",
      "Frontend ottimizzato per le performance (da PHP a VueJS SSR; backend in R; data layer su GraphQL + RPC)",
      "Documentazione e report di validazione del Design Sprint",
    ],
    category: "design",
    featured: true,
    heroColor: "#1A3A1A",
    heroImage: "/images/portfolio/pag-2-1.jpg",
    galleryImages: [
      "/images/portfolio/pag-8-1.jpg",
      "/images/portfolio/pag-9-1.jpg",
      "/images/portfolio/pag-10-1.jpg",
    ],
    summary:
      "Ridisegnata una piattaforma iGaming per prosperare nei mercati africani emergenti dove 1GB di dati mobili costa 15,82 $ — rendendo un'esperienza di scommesse completa accessibile su qualsiasi dispositivo e connessione.",
    challenge: `Betika.com opera in Kenya, Mozambico, Zambia, DRC e Tanzania — mercati dove i dati mobili non sono una comodità di sfondo ma una spesa deliberata e razionata. In Mozambico, 1GB costa 15,82 $ (circa Ksh 1.605,57). Nel DRC, la connettività è ancora più limitata.

La piattaforma stava perdendo utenti non perché il prodotto fosse scadente, ma perché era costoso da usare. Una singola sessione sull'app web esistente poteva consumare una porzione significativa del budget dati settimanale di un utente. Gli utenti abbandonavano le sessioni prima di effettuare una scommessa — non per mancanza di intenzione, ma perché continuare a navigare era troppo costoso.

Allo stesso tempo, l'azienda operava in un mercato altamente competitivo. Odibets era cresciuta fino a 4 milioni di utenti offrendo un prodotto più snello. La differenziazione di Betika non poteva essere il prezzo — doveva essere l'esperienza. Il brief era ridisegnare la piattaforma per essere radicalmente efficiente nel consumo di dati, pur preservando l'esperienza completa che aveva costruito il brand Betika.

Si trattava di un problema di design guidato dai vincoli su scala: il vincolo era economico, gli utenti erano persone reali che facevano scelte di compromesso, e la soluzione doveva funzionare su dispositivi Android di fascia bassa con connessioni 2G.`,
    research: {
      description: `La ricerca è iniziata con un circuito completo di interviste agli stakeholder su tutti i livelli di seniority — General Manager, Director of Technology, Risk Manager, Operations Lead e Product Owner. Ogni intervista ha portato alla luce una diversa sfaccettatura del problema: pressione commerciale, debito tecnico, difficoltà operative e comportamento degli utenti. I risultati sono stati sintetizzati in un Lean Canvas che mappava le ipotesi di business rispetto ai bisogni degli utenti.

I dati NPS sono stati analizzati tramite sintesi word-cloud per identificare i punti di attrito con maggiore carica emotiva. L'analisi ha rivelato pattern che i dati di supporto non avevano catturato — gli utenti non si lamentavano delle funzionalità mancanti; esprimevano frustrazione per il costo dell'utilizzo del prodotto.

L'analisi della concorrenza si è concentrata su Odibets (4M utenti) come benchmark per un'alternativa leggera in termini di dati. L'analisi delle heatmap e la profilazione della velocità di pagina hanno stabilito baseline quantitative: peso della pagina, time-to-interactive e consumo di dati per sessione per ogni flusso chiave. Questi numeri sono diventati il contratto di performance per il ridisegno.`,
      findings: [
        "L'87% dei clienti scommette solo sul calcio — gli altri sport consumavano tempo di caricamento e dati per un engagement quasi nullo",
        "Il peso totale della pagina al primo caricamento era di 6,8 MB sul frontend PHP legacy — catastrofico su connessioni lente 3G/2G, causando un alto tasso di abbandono prima del caricamento dei contenuti",
        "La navigazione nascondeva i verticals chiave; gli utenti arrivavano per il calcio e non riuscivano a trovare altro",
        "Migliaia di eventi sportivi venivano caricati sulla home page ad ogni visita, la maggior parte mai visualizzati o interagiti",
        "Gli utenti erano molto sensibili ai costi dei dati ma si aspettavano comunque un'esperienza di scommesse completa e affidabile",
        "La word-cloud dell'NPS ha rivelato 'lento', 'costoso' e 'si blocca' come i principali cluster di sentiment negativo",
      ],
    },
    design: {
      description: `La soluzione è stata progettata attraverso un GV Design Sprint — un processo strutturato in cinque fasi che ha compresso l'allineamento degli stakeholder, l'ideazione e il test del prototipo in una settimana intensiva. Il formato Sprint è stato scelto deliberatamente: il team di Betika era distribuito tra Nairobi, Londra e collaboratori remoti, e un processo iterativo convenzionale avrebbe richiesto mesi per raggiungere il consenso.

Decisioni chiave di design emerse dallo Sprint: sostituire il listing multi-sport completo con una vista predefinita a sport singolo (calcio — lo sport per cui l'87% degli utenti è effettivamente lì); implementare Omnisearch su tutti i verticals sportivi così che gli utenti possano raggiungere qualsiasi evento in due interazioni invece di cinque; introdurre lo scroll infinito per eliminare i ricaricamenti di pagina completi; e rinnovare la navigazione per portare in superficie i verticals precedentemente nascosti.

Sul fronte ingegneristico, il frontend PHP legacy è stato ricostruito in VueJS con server-side rendering, accoppiato a un nuovo backend in R e a un data layer su GraphQL + RPC progettato per il payload più economico e veloce possibile. Il peso totale della pagina al primo caricamento è crollato da 6,8 MB a 1,76 MB. La compressione server-side Gzip e Brotli ha aggiunto ulteriori riduzioni. È stata una decisione congiunta design-engineering: il guadagno di performance era raggiungibile solo perché il design è stato ricostruito dai componenti, non retrofittato sul codebase esistente.`,
    },
    testing: {
      approach:
        "Il test del prototipo ha utilizzato il protocollo di validazione GV Sprint: cinque utenti per round, scenari di task strutturati e una soglia di completamento dell'80% per procedere alla build. Sono stati condotti due round di test del prototipo — il primo ha identificato gap nella confidenza di navigazione che hanno portato a una seconda iterazione dell'affordance di input di Omnisearch.",
      findings: [
        "La vista predefinita a sport singolo è stata accettata positivamente da tutti i partecipanti al test — più pulita e veloce, non restrittiva",
        "Omnisearch ha ridotto il tempo medio per trovare un evento da 47 secondi a 11 secondi rispetto alla vecchia navigazione multilivello",
        "Lo scroll infinito ha eliminato l'ansia da 'partite mancanti' creata dalla precedente vista paginata",
        "Il tasso di completamento dei task è migliorato dal 43% al 91% dopo l'iterazione del design, superando la soglia dell'80% per la build",
      ],
    },
    outcome: {
      description:
        "Il ridisegno ha cambiato fondamentalmente l'economia dell'utilizzo di Betika su mobile. Gli utenti potevano ora interagire con l'intera piattaforma consumando una frazione del precedente dispendio di dati. Le metriche di business hanno seguito direttamente i miglioramenti del comportamento degli utenti.",
      metrics: [
        { value: "-69%", label: "Dati consumati per sessione" },
        { value: "-46%", label: "Tasso di crash dell'app" },
        { value: "+22%", label: "Attivazione dalla registrazione alla prima scommessa" },
        { value: "6,8 → 1,76 MB", label: "Peso pagina al primo caricamento" },
        { value: "-28%", label: "Abbandono al checkout al passaggio 3" },
        { value: "+16%", label: "Tasso di scommesse ripetute" },
      ],
    },
    reflection:
      "Questo progetto ha reso concreto qualcosa su cui avevo teorizzato per anni: il vincolo di design più potente è spesso economico, non tecnico. Progettare per l'accessibilità economica significa progettare per la dignità — quando riduci il consumo di dati, non stai solo migliorando un KPI, stai abbattendo una barriera che escludeva le persone dal prodotto in termini di costo. Il GV Design Sprint ha dimostrato il suo valore in un contesto distribuito e multi-stakeholder — producendo una soluzione validata e pronta per la build in giorni, non nei mesi che un processo convenzionale avrebbe richiesto.",
  },

  {
    slug: "instacoins-signup",
    title: "Rifacimento Registrazione Instacoins",
    client: "Instacoins Group",
    year: 2022,
    duration: "18 mesi",
    roles: ["Head of User Experience", "Research Lead", "Design System Lead"],
    team: "2x Product Designer, 2x Frontend Engineer, Compliance Officer, Head of Product, CTO",
    tools: [
      "Figma",
      "Storybook",
      "Chromatic",
      "Maze",
      "Hotjar",
      "Mixpanel",
      "Miro",
    ],
    methods: [
      "Jobs-to-be-Done",
      "Analisi del Funnel",
      "Test di Usabilità Moderati",
      "Ricerca Non Moderata",
      "Tree Testing",
      "Cognitive Walkthrough",
      "A/B Testing",
      "Audit WCAG 2.1 AA",
      "ResearchOps",
    ],
    deliverables: [
      "Flusso di registrazione e KYC ridisegnato",
      "Design System (Figma + Storybook + pipeline Chromatic)",
      "Programma ResearchOps (40+ studi)",
      "Audit e remediation conformità WCAG 2.1 AA",
      "Framework di analytics per la conversione",
    ],
    category: "research",
    featured: true,
    heroColor: "#0A1628",
    summary:
      "Ho guidato il rifacimento di un funnel di registrazione e KYC crypto regolamentato — utilizzando un programma di ricerca con 40+ studi, un nuovo Design System e un approccio di design compliance-first per ottenere +38% di registrazioni e completamento del KYC in meno di 4 giorni per il 90% degli utenti.",
    challenge: `Instacoins Group è un exchange di criptovalute regolamentato che opera in tutta l'UE. Acquistare crypto per la prima volta non è solo una sfida UX — è una sfida di compliance. Ogni nuovo utente deve superare la verifica dell'identità (KYC) prima di poter effettuare transazioni. L'attrito intrinseco in quel processo stava facendo crollare il funnel.

Il tasso di abbandono della registrazione era grave: più della metà degli utenti che iniziavano il flusso di registrazione non completavano il KYC. Le ragioni erano varie — istruzioni confuse per il caricamento dei documenti, stato di elaborazione opaco, ritardi inaspettati e un flusso che sembrava inaffidabile esattamente nei momenti in cui gli utenti avevano bisogno di rassicurazione.

A complicare il problema: i requisiti regolatori sono non negoziabili. Non potevamo rimuovere i passaggi del KYC. Non potevamo ridurre ciò che raccoglievamo. L'intera sfida di design era rendere un processo di compliance obbligatorio e ad alta attrito il più fluido, trasparente e affidabile possibile — senza tagliare angoli che i regolatori avrebbero notato.

Sono entrato come Head of User Experience con il mandato di correggere la conversione, costruire da zero una capacità di ricerca e stabilire l'infrastruttura di design — sistema, tooling, governance — che un fintech regolamentato in fase di crescita richiedeva.`,
    research: {
      description: `I primi 90 giorni sono stati interamente dedicati alla ricerca. Ho stabilito un programma di ResearchOps che avrebbe prodotto oltre 40 studi di usabilità sull'intero portfolio di prodotti — i più importanti dei quali erano sette sessioni moderate che mappavano in dettaglio granulare il percorso dalla registrazione al KYC.

Le interviste JTBD con utenti che avevano completato e abbandonato il processo hanno scoperto la timeline emotiva della registrazione crypto: il picco di ansia non era alla schermata di registrazione — era al passaggio di caricamento dei documenti. Gli utenti non sapevano cosa sarebbe successo ai loro documenti. Non sapevano quanto tempo avrebbe richiesto il processo. Non sapevano cosa significasse "in revisione" o se qualcosa stesse procedendo.

L'analisi del funnel in Mixpanel ha stabilito la precisa topologia degli abbandoni: il singolo punto di abbandono più grande era la schermata di caricamento dei documenti (41% di abbandono), seguita dallo stato di attesa "account in revisione" (23% di abbandono nelle 48 ore successive — gli utenti semplicemente rinunciavano ad aspettare).

Un cognitive walkthrough con il Compliance Officer ha prodotto una mappatura in linguaggio semplice di ogni passaggio richiesto e il motivo alla base — questo è diventato il fondamento per la nuova architettura del testo e il pattern di trasparenza sul progresso.`,
      findings: [
        "Il 41% dell'abbandono del funnel si è verificato alla schermata di caricamento dei documenti — la chiarezza delle istruzioni e i segnali di fiducia erano le cause principali",
        "Il 23% degli utenti che avevano completato il caricamento dei documenti ha abbandonato durante il periodo di attesa 'in revisione' — nessuna visibilità sul progresso, nessuna gestione delle aspettative",
        "Gli utenti con esperienza crypto abbandonavano di meno — ma rappresentavano solo il 18% dell'acquisizione; il funnel doveva funzionare per i principianti",
        "L'audit WCAG 2.1 AA ha identificato 34 violazioni di accessibilità nel flusso di registrazione, inclusi errori di etichettatura dei form che rompevano la navigazione con screen reader ad ogni campo",
        "Il design system non aveva un layer di token semantici — l'incoerenza UI tra i 5 prodotti del portfolio stava creando erosione della fiducia subliminale ad ogni touchpoint",
      ],
    },
    design: {
      description: `Il ridisegno ha operato su tre binari paralleli.

Binario 1 — Ridisegno del funnel: Ristrutturato il flusso di registrazione con progressive disclosure, raccogliendo solo ciò che era necessario in ogni fase. Aggiunto un indicatore di progresso persistente con nomi di fase in linguaggio semplice. Ridisegnata l'esperienza di caricamento dei documenti con guide visive specifiche per formato, validazione del formato in tempo reale e uno stato di conferma esplicito. Introdotta una schermata "in revisione" con stime di tempo oneste, opt-in alle notifiche email e un tracker dello stato che si aggiorna ad ogni milestone di elaborazione.

Binario 2 — Design System: Costruita una libreria di componenti in Figma con un'architettura completa di token semantici (colore, tipografia, spaziatura, bordo, elevazione), collegata a Storybook tramite una pipeline Figma → Storybook → Chromatic. Questo ha eliminato l'incoerenza visiva nel portfolio e ridotto il tempo di implementazione frontend per le nuove funzionalità. WCAG 2.1 AA è stato applicato a livello di token — rapporti di contrasto, stati di focus e aree di tocco erano vincoli a livello di sistema, non decisioni per-componente.

Binario 3 — Infrastruttura ResearchOps: Stabilite pipeline di reclutamento dei partecipanti, template di studio standardizzati per ricerca moderata e non moderata in Maze, un repository dei risultati in Notion e un rituale bisettimanale di readout della ricerca che collegava i risultati alle decisioni di roadmap. Questa infrastruttura significava che il team poteva condurre 40+ studi nell'arco dei 18 mesi senza che la ricerca diventasse un collo di bottiglia.`,
    },
    testing: {
      approach:
        "Ogni iterazione principale del flusso di registrazione è stata testata con 5 partecipanti moderati prima del rilascio, seguita da uno studio Maze non moderato (n=50+) per validare su volume. L'A/B testing tramite Mixpanel ha tracciato le variazioni del tasso di conversione per ogni versione rilasciata rispetto alla baseline precedente.",
      findings: [
        "Il ridisegno del caricamento dei documenti ha ridotto l'abbandono in quel passaggio dal 41% al 14% — un miglioramento relativo del 66%",
        "Il pattern di trasparenza sul progresso ha ridotto l'abbandono 'in revisione' dal 23% al 9% nell'equivalente periodo di attesa",
        "La remediation WCAG ha risolto tutte le 34 violazioni identificate; il completamento dei task con screen reader nel flusso di registrazione è migliorato dal 38% al 94%",
        "L'adozione del Design System ha ridotto i report di incoerenza frontend da 12 per sprint a meno di 2",
      ],
    },
    outcome: {
      description:
        "La combinazione di ridisegno del funnel, testo orientato alla fiducia, trasparenza sul progresso e remediation dell'accessibilità si è composta in un significativo aumento delle registrazioni e in un tasso di completamento del KYC drasticamente più rapido — entrambi con impatto diretto su ricavi e reportistica normativa.",
      metrics: [
        { value: "+38%", label: "Registrazioni anno su anno" },
        { value: "90%", label: "KYC completato in meno di 4 giorni" },
        { value: "-66%", label: "Abbandono al caricamento documenti" },
        { value: "40+", label: "Studi di usabilità condotti" },
        { value: "da 34 a 0", label: "Violazioni WCAG 2.1 AA nella registrazione" },
      ],
    },
    reflection:
      "Il design di prodotti regolamentati è umiliante perché non puoi progettarti intorno alle regole — devi progettare la fiducia dentro le regole stesse. L'insight più prezioso di questo progetto è stato che l'attrito di compliance e l'attrito di esperienza utente non sono la stessa cosa: puoi avere alta compliance e bassa attrito, ma solo se tratti la trasparenza come materiale di design. Il programma di ricerca è stato il fondamento su cui tutto il resto è stato costruito — senza i 40+ studi, le correzioni al funnel sarebbero state intuizioni guidate dalle assunzioni.",
  },

  {
    slug: "genesis-global",
    title: "Genesis Global",
    client: "Genesis Global",
    year: 2019,
    duration: "8 mesi",
    roles: ["UX Designer", "Workshop Facilitator", "CRO Strategist"],
    team: "Team UX, Data Engineering, Product Management, Rappresentanti degli Operatori",
    tools: ["Figma", "Miro", "Google Analytics", "Optimizely", "Segment"],
    methods: [
      "Workshop con gli Stakeholder",
      "Analisi del Comportamento Utente",
      "Analisi del Funnel",
      "Architettura dell'Informazione",
      "Progettazione della Tassonomia degli Eventi",
      "CRO",
      "A/B Testing",
    ],
    deliverables: [
      "Architettura di tracking comportamentale in tempo reale",
      "Tassonomia degli eventi e definizioni dei segmenti",
      "UI di segmentazione in tempo reale",
      "Dashboard del comportamento utente",
      "Ridisegno del funnel CRO (registrazione e FTD)",
    ],
    category: "strategy",
    featured: false,
    heroColor: "#1A0A2E",
    summary:
      "Progettata la fondazione di tracking comportamentale e utente per Genesis Global — e, attraverso task analysis e funnel analysis, dimezzati i passaggi dal pubblicitario all'attivazione su tutti i 14 brand operatori, dando al team marketing la prima capacità di pianificare campagne su evidenza in tempo reale.",
    challenge: `Genesis Global è una piattaforma gaming B2B che alimenta 14 brand casino white-label in tutta Europa. Sono entrato perché l'azienda non aveva una fondazione solida di tracking comportamentale e utente: gli operatori prendevano decisioni di personalizzazione, retention e acquisizione su dati vecchi di un giorno, senza una definizione condivisa di chi fosse un 'utente di alto valore' e senza modo per marketing o product di agire su un segnale entro la finestra della sessione.

La piattaforma aveva analytics aggregati, ma nessuna visibilità comportamentale in tempo reale e nessuno strumento di segmentazione accessibile agli operatori. Ogni richiesta di personalizzazione passava attraverso il team ingegneristico come query personalizzata. Il primo lavoro è stato progettare il sistema di tracking stesso — la tassonomia degli eventi, le definizioni dei segmenti, l'architettura dei dati — e poi l'interfaccia attraverso la quale gli operatori potevano costruire e agire sui segmenti senza supporto ingegneristico.

In parallelo, una task analysis e una funnel analysis sul percorso dalle ad sul web alla registrazione al primo deposito (l'evento di attivazione) hanno rivelato un flusso end-to-end lungo quasi il doppio del necessario. I due workstream si sono alimentati a vicenda: la funnel analysis ha rivelato dove il tracking era cieco, e il design del tracking ha rivelato dove gli interventi sul funnel potevano essere applicati in tempo reale. Il ridisegno doveva poi replicarsi in modo pulito su tutti i 14 brand senza che ogni operatore biforcasse l'implementazione.`,
    research: {
      description: `Ho facilitato una serie di workshop con gli stakeholder di tre giorni con team di operatori, product manager e data engineer. La prima sessione ha mappato il panorama analytics esistente — cosa veniva tracciato, cosa gli operatori usavano effettivamente e dove erano i gap. La seconda si è concentrata sui trigger decisionali su cui gli operatori dovevano agire. La terza era un workshop di tassonomia — co-progettando le convenzioni di denominazione degli eventi, le gerarchie dei segmenti e lo schema degli attributi con i data engineer presenti. Impostare correttamente questo layer prima di qualsiasi lavoro UI era critico: la tassonomia sbagliata avrebbe prodotto una UI che non poteva essere interrogata in modo coerente.

L'analisi del funnel sui flussi di registrazione e FTD ha utilizzato registrazioni delle sessioni e report del funnel per mappare l'esatta topologia degli abbandoni tra i brand degli operatori.`,
      findings: [
        "Gli operatori prendevano decisioni di personalizzazione su dati vecchi da 24 a 48 ore — la capacità in tempo reale era trasformativa per i casi d'uso di retention",
        "Le definizioni dei segmenti variavano significativamente tra i team degli operatori — tre operatori avevano tre definizioni incompatibili di 'utente di alto valore'",
        "I segnali più azionabili erano comportamentali (profondità di sessione, frequenza di ritorno, clustering degli eventi) non demografici",
        "Il funnel di registrazione aveva 5 passaggi dove 3 avrebbero soddisfatto lo stesso requisito normativo — i due extra erano architettura legacy, non compliance",
        "L'abbandono al FTD era concentrato nella schermata di selezione del metodo di pagamento — utenti che incontravano nomi di metodi non familiari senza contesto esplicativo",
      ],
    },
    design: {
      description: `Il design del sistema di tracking è stato consegnato come documento di architettura dell'informazione e specifica UI — il documento IA definiva la tassonomia degli eventi (convenzione di denominazione oggetto-azione), lo schema degli attributi e la gerarchia dei segmenti. La specifica UI copriva l'interfaccia del segment builder (blocchi di condizione drag-and-drop, anteprima in tempo reale della dimensione del segmento) e la dashboard del comportamento (grafici a serie temporali, confronto delle coorti, heatmap della frequenza degli eventi).

Il ridisegno del funnel CRO ha ridotto il flusso di registrazione da 5 a 3 passaggi consolidando campi del form che erano stati suddivisi su passaggi senza alcuna ragione normativa. La schermata di selezione del metodo di pagamento è stata ridisegnata con loghi del brand riconoscibili, testo descrittivo breve e un indicatore 'consigliato' basato sulla prevalenza regionale. Entrambe le modifiche sono state testate in A/B prima del rilascio completo.`,
    },
    outcome: {
      description:
        "Il sistema di segmentazione in tempo reale ha dato agli operatori la loro prima capacità di agire sui segnali degli utenti entro la finestra della sessione. Il ridisegno del funnel — task analysis e funnel analysis che hanno collassato passaggi duplicati e a basso valore tra ad e attivazione — è stato esteso a tutti i 14 brand e ha dato al team marketing, per la prima volta, un modo per decidere le campagne future su una base di evidenza unificata invece che operatore per operatore.",
      metrics: [
        { value: "−~50%", label: "Passaggi da ad ad attivazione (su 14 brand)" },
        { value: "+38%", label: "Tasso di registrazione" },
        { value: "+51%", label: "First Time Deposit" },
        { value: "5 → 3", label: "Sotto-funnel di registrazione" },
        { value: "Tempo reale", label: "Disponibilità dei segmenti (era 24-48h di lag)" },
        { value: "14 / 14", label: "Brand sulla tassonomia unificata" },
      ],
    },
    reflection:
      "Il design dei dati è tanto un atto politico quanto un atto di design. Definire cosa viene tracciato, come viene etichettato e chi può agire su di esso plasma il modo in cui un'organizzazione pensa ai propri utenti per anni. Il workshop sulla tassonomia era importante quanto qualsiasi wireframe — far concordare engineering, product e operatori su cosa significasse 'utente di alto valore' era il vero deliverable della prima fase. L'altra lezione: accorciare un flusso non si fa quasi mai tagliando passaggi; si fa trovando i job duplicati nascosti dentro i passaggi e fondendoli. Tutto ciò che è venuto dopo questi due atti era implementazione.",
  },

  {
    slug: "play-together",
    title: "Play Together",
    client: "Legolas Invest Limited",
    year: 2018,
    duration: "4 mesi",
    roles: [
      "Lead UX Designer",
      "Design Sprint Facilitator",
      "Product Designer",
    ],
    team: "3x UI Designer, 2x Trotting Analyst, Head of Product",
    tools: ["Figma", "Miro", "Principle", "InVision"],
    methods: [
      "Analisi della Concorrenza",
      "GV Design Sprint",
      "Test del Prototipo",
      "Test di Usabilità",
      "Test Beta MVP",
      "Jobs-to-be-Done",
    ],
    deliverables: [
      "Concept di gioco e specifiche di prodotto",
      "UI design completo per tutti gli stati di gioco",
      "Specifica delle funzionalità social",
      "Prototipo",
      "Design del programma beta e report dei risultati",
    ],
    category: "design",
    featured: false,
    heroColor: "#1A0A0A",
    heroImage: "/images/portfolio/pag-28-1.jpg",
    summary:
      "Co-progettato con gli analisti di trotto un gioco di pool betting community-first — team che competono contro altri team, esperti di dominio dentro al gioco a cui ogni team può rivolgersi prima di puntare, e gioco responsabile costruito nell'architettura sociale anziché bollato come disclaimer di compliance.",
    challenge: `Il mercato iGaming nel 2018 era affollato di scommettitori identici che competevano su quote e promozioni, non sull'esperienza. Legolas.bet voleva un prodotto genuinamente differenziato — qualcosa che un utente non potesse trovare da un concorrente. Il brief era aperto: creare un nuovo formato di gioco di scommesse che utilizzasse meccanismi social per guidare l'engagement e la retention.

Il trotto era una scelta insolita di sport, ma deliberata. Aveva un pubblico core appassionato e quasi nessuna attenzione digitale dei prodotti — un chiaro spazio bianco. Il pool betting era il formato di gioco: la struttura a premio condiviso crea un'esperienza emotiva fondamentalmente diversa rispetto alle scommesse contro il banco, e i meccanismi social amplificano questa posta condivisa.

La sfida di design più profonda era duplice. Primo, rendere il pool betting sul trotto accessibile ai scommettitori occasionali che non avevano mai guardato una corsa, pur mantenendo la profondità per i fan esperti. Secondo — e questa parte non era nel brief iniziale — costruire una community in cui i meccanismi social non si trasformassero in una macchina di pressione tra pari. Lavorando a stretto contatto con gli analisti di trotto, abbiamo strutturato il gioco attorno a team che competono contro altri team, con esperti di dominio in-product a cui ogni team può rivolgersi prima di puntare un pool. Gli esperti erano i guardrail: una community sana di gioco responsabile, con gli analisti senior visibili dentro al gioco come le persone a cui ogni team si rivolge prima di impegnarsi.`,
    research: {
      description: `La ricerca ha combinato interviste JTBD con scommettitori di trotto esistenti e utenti di social gaming non scommettitori (il pubblico target di espansione), un'analisi competitiva di prodotti di social gaming al di fuori del vertical delle scommesse (inclusi Kahoot, Words With Friends e piattaforme di fantasy sports), e un'analisi mirata dei formati di pool betting a livello globale — Pools, Quinela, Supertoto e Super 6.

Il GV Design Sprint è stato il metodo di design principale. Il Giorno 1 ha mappato lo spazio del problema con gli analisti di trotto nella stanza — la loro conoscenza del dominio era critica per capire il calendario delle gare, il formato degli eventi e le decisioni di puntata che un giocatore affronta effettivamente. Il Giorno 2 ideazione, il Giorno 3 storyboarding, il Giorno 4 prototipazione, il Giorno 5 test con cinque partecipanti reclutati.`,
      findings: [
        "La responsabilità sociale creava un loop di ritorno che le scommesse individuali non avevano — gli utenti tornavano per controllare come stavano gli amici, non solo per scommettere",
        "I pool di gruppo generavano una posta emotiva condivisa — la scommessa diventava un artefatto sociale, non una transazione privata",
        "I scommettitori occasionali erano intimiditi dai formati tradizionali delle quote; le strutture a premio fisso a pool eliminavano la necessità di capire le quote del tutto",
        "La visione della gara in diretta era il momento di picco dell'engagement — il prodotto doveva essere costruito attorno a quel climax emotivo",
        "Il flusso di creazione del team doveva essere completabile senza spiegazione — qualsiasi attrito nel passaggio di invito avrebbe ucciso la viralità social",
      ],
    },
    design: {
      description: `Progettato un formato di gioco costruito su tre pilastri: team che competono contro altri team, un layer di esperti in-product a cui ogni team può rivolgersi prima di impegnarsi, e una superficie di visione live della gara che trasforma la scommessa in un evento condiviso.

Il flusso di creazione del team è stato progettato come un onboarding in 6 passaggi: username, nome del team, foto del team, selezione dello sport/gara, scelta delle selezioni, invito degli amici. Ogni passaggio costruisce investimento prima dell'invito — nel momento in cui un utente raggiunge la schermata di invito, si è già impegnato nell'identità del proprio team e vuole che altri si uniscano al suo specifico pool.

Il layer degli esperti era la spina dorsale del gioco responsabile nel design. Gli analisti senior di trotto comparivano dentro al prodotto come esperti nominati e visibili. Un team poteva chiedere consiglio a uno di loro sulla corsa imminente prima di puntare un pool — la conversazione era leggera, asincrona, e affiorava dentro la schermata del pool del team. La presenza di un esperto di dominio nel circuito rallentava le scommesse impulsive e dava ai scommettitori occasionali un modo per imparare il formato senza essere esposti alla pressione tra pari dei compagni di squadra più rumorosi.

La schermata di visione della gara era il pezzo centrale dell'UI: indicatori di posizione in tempo reale per il cavallo selezionato di ciascun team, un feed di commento condiviso e uno stato di celebrazione esplicitamente progettato per lo screenshot e la condivisione.`,
    },
    testing: {
      approach:
        "Costruito un MVP funzionale distribuito a una coorte beta controllata di clienti selezionati. A ciascun partecipante è stata fornita una lista di task strutturata che copriva la creazione del team, la selezione della gara, l'invito degli amici e la visione di una gara live. La soglia di approvazione era il 90% di completamento dei task — al di sotto di quella soglia, il design avrebbe iterato prima di un rollout più ampio.",
      findings: [
        "Il tasso di completamento dei task è aumentato dal 43% (primo prototipo) al 91% (post-iterazione) — superando la soglia del 90%",
        "Il flusso di creazione del team è stato completato senza guida dall'88% dei partecipanti beta",
        "La condivisione social in beta ha superato le previsioni pre-studio — la schermata di celebrazione della vittoria ha generato un tasso di condivisione 3,2 volte superiore alle aspettative",
        "Il passaggio di invito aveva il più alto tasso di abbandono nella v1; ridisegnarlo come picker dalla lista contatti ha risolto l'attrito",
      ],
    },
    outcome: {
      description:
        "Play Together ha prodotto un concept di gioco validato, la specifica UI completa e un report dei risultati beta pronto per lo scale-up ingegneristico — il primo prodotto di scommesse social genuinamente differenziato nel portfolio Legolas.bet.",
      metrics: [
        { value: "dal 43% al 91%", label: "Tasso di completamento dei task" },
        { value: "3,2x", label: "Tasso di condivisione della celebrazione vittoria vs. previsioni" },
        { value: "6", label: "Passaggi di creazione del team — tutti validati in beta" },
      ],
    },
    reflection:
      "Progettare giochi è diverso dal progettare strumenti — i giochi richiedono tensione, anticipazione e rilascio. Il layer social in Play Together non era una funzionalità aggiunta a un prodotto di scommesse; era il nucleo emotivo che rendeva il prodotto degno di essere usato. La decisione che ha plasmato tutto il resto è stata inserire gli esperti nel circuito: quella singola scelta architettonica ha spostato Play Together da amplificatore di pressione tra pari a community con coaching. Il gioco responsabile come superficie di design, non come disclaimer di compliance.",
  },

  {
    slug: "match-10",
    title: "Match 10",
    client: "Legolas Invest Limited",
    year: 2017,
    duration: "3 mesi",
    roles: ["Lead UX Designer", "Product Designer"],
    team: "Team Design, Product, Engineering, Trotting Analysts, Football Analyst",
    tools: ["Figma", "Miro", "InVision"],
    methods: [
      "Ideazione del Concept",
      "Analisi della Concorrenza",
      "Test del Prototipo",
      "Test di Usabilità",
      "User Research",
    ],
    deliverables: [
      "Concept di gioco e specifica del formato",
      "UI design completo",
      "Flusso di inserimento della scommessa",
      "Specifica della struttura del premio",
    ],
    category: "design",
    featured: false,
    heroColor: "#0A1628",
    heroImage: "/images/portfolio/pag-33-1.jpg",
    summary:
      "Un pool di pronostici su 10 eventi sport-agnostico — progettato per ponteggiare il pubblico trotting-first di Legolas verso il calcio e nell'altra direzione. Stesso formato, qualunque sport, mobile-nativo: un gioco in stile Vernons Pools ricostruito per una generazione che si aspetta semplicità, velocità e social proof.",
    challenge: `Legolas è nata come trotting-first company. I fan del trotto erano la fondazione della customer base, ma la strada per la crescita richiedeva di portare dentro fan di altri sport — il calcio sopra a tutti — senza alienare la community del trotto. Ogni tentativo precedente di introdurre un nuovo vertical era stato rischioso: i fan del trotto vedevano i vertical estranei come una diluizione del brand, e i fan del calcio non avevano motivo di approdare su un prodotto a sapore di trotto.

Match 10 è stato la risposta a entrambi i problemi con un solo design. Un pool di pronostici su 10 eventi, applicabile a qualunque sport — trotto, calcio, qualunque cosa nel calendario — nello stesso formato a premio fisso. Per i fan del trotto era un pool format familiare applicato a sport nuovi che potevano provare a basso rischio. Per i fan del calcio era un gioco riconoscibile (DNA Vernons Pools, Super 6, Quinela) che li portava su Legolas senza che il trotto fosse la prima cosa da imparare.

La sfida di design era duplice. Primo, costruire un formato semplice abbastanza da attirare i scommettitori a pool alle prime armi — entrambe le community — offrendo al contempo abbastanza variabilità settimanale e brio sui premi da stimolare il gioco ripetuto. Secondo, rendere il formato genuinamente sport-agnostico al livello del design: la stessa UI, lo stesso flusso di inserimento, la stessa struttura di premi dovevano funzionare sia che i 10 eventi fossero corse di cavalli, partite di calcio o un calendario settimanale misto.`,
    research: {
      description: `L'analisi competitiva ha coperto tre generazioni di prodotti pool: il modello calcistico vittoriano (Vernons, Littlewoods), i formati digitali moderni (Super 6, Sky Sports, Quinela) e l'adiacenza del fantasy sports (FPL, Draft Kings). Ciascuno offriva lezioni diverse su cosa rende coinvolgente il pool betting basato sul pronostico. Cruciale: l'analisi è stata condotta con gli analisti di trotto nella stanza accanto all'analista di calcio — l'obiettivo era far emergere gli invarianti del formato che sopravvivevano attraverso gli sport, non gli ami specifici del calcio.

L'insight critico è emerso dallo studio del 'footy tipping' — la tradizione informale australiana dei pub di pronosticare i risultati delle partite su un foglio appeso al muro con i nomi di tutti visibili. L'appeal emotivo non era il premio; era la visibilità sociale. Tutti potevano vedere come stavano tutti gli altri. Quel meccanismo funzionava ugualmente bene su una serie di corse o una serie di partite — il che lo rendeva la spina dorsale giusta per un prodotto sport-agnostico.`,
      findings: [
        "La semplicità era il principale driver di acquisizione — i scommettitori a pool che trovavano le quote intimidatorie rispondevano immediatamente ai formati a risultato fisso, indipendentemente dallo sport degli eventi",
        "I pool a premio fisso creavano un'eccitazione condivisa che le quote variabili non potevano replicare",
        "La social proof (quanti altri partecipano, classifica live) influenzava fortemente la partecipazione ripetuta",
        "La ricerca sul footy tipping ha rivelato che la visibilità delle scelte degli altri era più coinvolgente del premio — la trasparenza sociale guidava i ritorni",
        "La velocità di completamento era critica: se scegliere 10 eventi richiedeva più di 90 secondi, i scommettitori occasionali abbandonavano — il budget era lo stesso che gli eventi fossero corse o partite",
        "Il formato doveva leggersi come lo stesso prodotto attraverso gli sport — un fan del trotto che prova il calendario calcio del sabato deve riconoscere lo stesso gioco, non impararne uno nuovo",
      ],
    },
    design: {
      description: `Progettato un formato di pronostico su 10 eventi costruito attorno a quattro principi: semplicità, velocità, trasparenza sociale e sport-agnosticismo. La stessa UI, lo stesso flusso, la stessa struttura premi dovevano funzionare per un calendario di corse di cavalli, di partite di calcio o un calendario settimanale misto.

Il flusso di inserimento è stato progettato per il completamento in 90 secondi: una gesture di swipe per ogni event card (casa/trasferta/pareggio per il calcio; pick del cavallo per il trotto; qualunque sia l'esito primario dello sport), rivelazione progressiva del pool del premio man mano che gli inserimenti si accumulano, e una schermata di conferma che funge anche da card da condividere. La card di condivisione è stata progettata prima del flusso di inserimento — il momento di condivisione social era il meccanismo di acquisizione, e il design doveva renderlo il più privo di attrito possibile.

Il design della struttura del premio è stato collaborativo con gli analisti di trotto e calcio e con il team commerciale: premi a livelli per 10/9/8 pronostici corretti, con la struttura del jackpot spiegata in linguaggio semplice al passaggio di conferma. Il design ha evitato esplicitamente di mostrare quote o probabilità — la semplicità era l'elemento differenziante e il polimorfismo (qualunque sport, stesso gioco) funzionava solo se le quote non trapelavano nella superficie.

Una classifica live è stata inclusa come superficie di engagement post-inserimento — implementando direttamente l'insight di trasparenza sociale del footy tipping, e fungendo da tessuto connettivo quando gli amici di un giocatore avevano giocato calendari settimanali diversi (uno calcio, uno trotto, uno misto).`,
    },
    outcome: {
      description:
        "Match 10 è diventato il prodotto-ponte di Legolas: un modo per una trotting-first company di onboardare fan del calcio senza diluire il brand, e un modo per i fan del trotto di provare altri sport a basso rischio dentro un formato familiare. Ha prodotto una specifica di gioco completa e pronta per l'engineering, è diventato uno dei prodotti pool fondamentali nel portfolio Legolas.bet, e il pattern di trasparenza sociale che ha stabilito è stato poi ereditato da Play Together.",
      metrics: [
        { value: "Sotto 90s", label: "Tempo target per completare l'inserimento (validato in test)" },
        { value: "Qualunque sport", label: "Stessa UI, stesso flusso, stessi livelli di premio" },
        { value: "10 eventi", label: "Pronostici per cartella — curva di apprendimento zero" },
        { value: "1°", label: "Classifica social nel pool betting di Legolas.bet" },
      ],
    },
    reflection:
      "Match 10 mi ha insegnato che un grande prodotto di cross-sell non è un meccanismo di marketing — è un invariante di formato. Legolas era trotting-first; raggiungere i fan del calcio senza alienare la community del trotto richiedeva di trovare un gioco che non appartenesse a nessuno dei due sport ma funzionasse ugualmente per entrambi. La ricerca sul footy tipping è stata il punto di svolta: una volta capito che il muro del pub con i nomi di tutti era il prodotto, il design è diventato ovvio — rendere l'inserimento veloce, la classifica social, e il formato polimorfico attraverso gli sport così che lo stesso prodotto potesse fare da ponte in entrambe le direzioni.",
  },

  {
    slug: "sport-navigation-sticky",
    title: "Navigazione Sport Sticky",
    client: "Legolas Invest Limited",
    year: 2018,
    duration: "2 settimane (1 sprint)",
    roles: ["Lead UX Designer"],
    team: "3x UI Designer, Frontend Lead, Product Owner",
    tools: ["Figma", "Principle", "Maze"],
    methods: [
      "Test di Usabilità",
      "Analisi Euristica",
      "Design Sprint",
      "Test del Prototipo",
      "Benchmarking Competitivo",
    ],
    deliverables: [
      "Componente di navigazione sticky",
      "Pattern di navigazione cross-sport",
      "Selettore del tipo di quota",
      "Menu adattivo per-utente (layer di machine learning sulle abitudini di gioco)",
      "Documentazione del ridisegno della navigazione",
    ],
    category: "design",
    featured: false,
    heroColor: "#1A0808",
    heroImage: "/images/portfolio/pag-42-1.jpg",
    summary:
      "Ottimizzata la findability degli eventi nel sportsbook Legolas.bet — l'analisi di flussi e dati ha mostrato dove gli utenti si perdevano; la risposta è stata una navigazione sticky accoppiata a un layer silenzioso di machine learning che adatta il menu alle abitudini di gioco specifiche di ogni utente.",
    challenge: `Il sportsbook Legolas.bet era cresciuto da un prodotto di pool betting focalizzato a un sportsbook multi-sport completo nel giro di un solo anno — tre vertical (Pool Betting, Sportsbook, Casino) lanciati da zero. Quella velocità aveva lasciato l'architettura di navigazione irrisolta. Il prodotto aveva migliaia di eventi ma nessun percorso coerente tra di essi.

Il brief era inquadrato come problema di navigazione; l'analisi lo ha riformulato come problema di findability. Gli utenti che arrivavano per il calcio non avevano un percorso chiaro verso gli eventi live. Gli utenti che navigavano gli eventi live perdevano il loro contesto nel momento in cui cercavano di cambiare sport. La ricerca degli eventi era del tutto assente — gli utenti scorrevano manualmente le liste per trovare partite specifiche. La navigazione era un layer di attrito che limitava attivamente la profondità dell'engagement e la scoperta cross-sport.

Un singolo sprint di due settimane è stato assegnato per progettare, testare e rilasciare la correzione strutturale; il layer adattivo è arrivato in un ciclo successivo. Il vincolo era l'opportunità: con un ambito chiaro e una scadenza fissa, la soluzione doveva essere mirata e immediatamente implementabile.`,
    research: {
      description: `Sono partito da analisi di flussi e dati comportamentali: percorsi di sessione, dwell time sulle liste eventi, profondità di scroll, time-to-event, abbandoni per vertical sportivo. I dati hanno reso il problema di findability preciso — gli utenti non si perdevano nell'albero di navigazione; si perdevano dentro liste lunghe e indifferenziate dove gli eventi che gli interessavano stavano sotto la fold.

Ho condotto test di usabilità strutturati sulla navigazione esistente con cinque partecipanti, ciascuno con scenari di task identici: trovare un evento live specifico, passare dal calcio al tennis, localizzare il casino, trovare l'impostazione del formato delle quote. Ho mappato dove gli utenti esitavano, dove tornavano indietro e dove si arrendevano.

Il benchmarking competitivo ha coperto cinque scommettitori sportivi con valutazioni utente elevate (William Hill, bet365, Betway, Unibet, FanDuel) con focus specifico su pattern di navigazione, comportamento di scorrimento e accesso cross-vertical. Il benchmarking ha portato alla luce due pattern che erano diventati aspettative degli utenti attraverso un'esposizione elevata: navigazione sticky e ricerca persistente.`,
      findings: [
        "Gli utenti facevano affidamento sulla memoria dei pattern URL piuttosto che sulla navigazione — l'architettura dell'informazione non veniva interiorizzata",
        "Il cambio di sport richiedeva di tornare alla home page, poi di ri-navigare — un percorso di andata e ritorno di 4-6 tocchi per un singolo cambio di contesto",
        "La ricerca degli eventi era assente — gli utenti scorrevano le liste degli eventi manualmente, media 47 secondi per trovare un evento",
        "Le preferenze del tipo di quota dovevano essere reimpostate ad ogni sessione — una frustrazione nota e frequentemente segnalata",
        "I pattern di navigazione sticky di YouTube, Twitter e scommettitori concorrenti avevano stabilito aspettative degli utenti che il prodotto non soddisfaceva",
      ],
    },
    design: {
      description: `Progettato un componente di navigazione sticky che persiste mentre l'utente scorre attraverso i listing degli eventi — tab degli sport, indicatore live e ricerca sempre accessibili in cima al viewport.

Il meccanismo di cambio sport preserva il contesto: passare dal Calcio al Tennis riporta l'utente alla stessa profondità all'interno del nuovo sport, non a una home page di livello superiore. La ricerca cross-sport indicizza gli eventi su tutti i vertical con risultati in tempo reale — gli utenti possono digitare un nome di squadra o una lega e arrivare a destinazione in una interazione.

Un selettore del tipo di quota è stato aggiunto alla nav persistente — un singolo tocco per alternare tra quote frazionarie, decimali e americane, persistito nelle preferenze dell'utente. Questo ha risolto il reclamo di usabilità più costantemente segnalato nel prodotto.

Sopra la correzione strutturale, un layer di machine learning ri-classifica il menu e le liste eventi per ogni singolo utente, in base alle sue abitudini di gioco specifiche — gli sport e le competizioni a cui ritorna davvero, gli orari in cui interagisce, la profondità a cui naviga. Il ranking è silenzioso: niente tag "in base alle tue abitudini", niente badge di raccomandazione. Gli utenti non devono imparare un nuovo pattern; il menu che già conoscono mette semplicemente più in alto ciò che gli interessa rispetto a ciò che non gli interessa. La findability diventa una proprietà per-utente, non una proprietà globale condivisa.

Il componente strutturale è stato rilasciato entro lo sprint di due settimane. Il layer di ranking ML è stato specificato durante lo sprint e rilasciato nel ciclo successivo, sopra lo stesso componente senza cambiamenti backend o visivi.`,
    },
    testing: {
      approach:
        "Prototipo Hi-Fi testato in Maze rispetto alla navigazione originale usando scenari di task identici. Misurati tasso di completamento dei task, tempo per task e confidenza di navigazione (scala auto-riportata post-task).",
      findings: [
        "La nav sticky è stata compresa immediatamente da tutti i partecipanti al test — nessuna curva di apprendimento osservabile",
        "Il tempo di cambio sport ridotto da una media di 47 secondi a una media di 8 secondi — riduzione dell'83%",
        "La ricerca cross-sport ha risolto il problema del time-to-event — tutti i partecipanti hanno trovato gli eventi target in meno di 15 secondi",
        "Il selettore del tipo di quota notato come miglioramento dal 100% dei partecipanti, senza sollecitazione",
      ],
    },
    outcome: {
      description:
        "La navigazione strutturale è stata rilasciata entro lo sprint di 2 settimane ed è diventata il template per l'architettura di navigazione del prodotto nelle versioni successive. Il layer di ranking di machine learning è arrivato nel ciclo successivo e ha trasformato un menu globale in una superficie per-utente — senza chiedere agli utenti di imparare nulla di nuovo.",
      metrics: [
        { value: "2 settimane", label: "Ciclo dal design al rilascio (strutturale)" },
        { value: "−83%", label: "Tempo di cambio sport" },
        { value: "Sotto 15s", label: "Time-to-event tramite ricerca (erano 47s)" },
        { value: "Per-utente", label: "Ranking del menu e delle liste (ML, silenzioso)" },
      ],
    },
    reflection:
      "Il design della navigazione non riguarda quasi mai la struttura — riguarda i modelli mentali e il momentum. Il pattern sticky ha funzionato perché corrispondeva alle aspettative che gli utenti avevano costruito attraverso l'esposizione ad alta frequenza ad altri prodotti digitali. Il layer ML ha funzionato perché è rimasto invisibile: la findability è migliorata senza chiedere agli utenti di leggere un nuovo affordance. Soddisfare i modelli mentali stabiliti è spesso più prezioso che innovare su di essi — specialmente in una categoria di prodotto dove gli utenti arrivano con un task specifico e pochissima pazienza per la novità nella navigazione.",
  },

  {
    slug: "fred-uxr-platform",
    title: "Fred — Piattaforma UXR AI-Native",
    client: "Fred (Progetto fondatore)",
    year: 2024,
    duration: "In corso",
    roles: ["Fondatore", "CEO", "Product Designer", "UX Lead"],
    team: "Da fondatore solo a team in crescita",
    tools: [
      "Figma",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "TypeScript",
      "OpenAI API",
    ],
    methods: [
      "Jobs-to-be-Done",
      "Card Sorting",
      "First Click Testing",
      "Tree Testing",
      "Test di Usabilità Non Moderato",
      "Survey",
      "Preference Test",
      "5-Second Test",
      "Continuous Discovery",
    ],
    deliverables: [
      "Piattaforma SaaS completa (web app)",
      "10+ metodi di ricerca integrati",
      "Layer di sintesi e insight con AI",
      "User Sphere — analisi delle sessioni con heatmap e replay",
      "Repository di ricerca e sistema di tagging",
      "Sistema di reclutamento e gestione dei partecipanti",
    ],
    category: "founding",
    featured: true,
    heroColor: "#080808",
    heroImage: "/images/portfolio/fred-dashboard.webp",
    summary:
      "Fondato e costruito Fred — una piattaforma UX research all-in-one AI-native che integra 10+ metodi di ricerca in un singolo workflow coerente, con sintesi assistita dall'AI e delivery di insight strutturati e tracciabili.",
    challenge: `La ricerca UX è frammentata per design — o meglio, per l'accidente di come si è evoluto il mercato degli strumenti. I team conducono studi in uno strumento, archiviano i risultati in un altro, sintetizzano in un terzo e condividono gli output in un quarto. Ogni handoff perde contesto. Le evidenze si staccano dalle conclusioni. Quando gli insight raggiungono i decision-maker, la tracciabilità è scomparsa e i risultati vengono contestati.

Ho trascorso 15 anni a osservare questa frammentazione causare lo stesso problema in ogni organizzazione con cui ho lavorato: ricerche che erano fidate dai ricercatori che le avevano condotte e diffidiate dagli stakeholder che le ricevevano — perché la distanza tra i dati grezzi e la raccomandazione degli insight era invisibile.

Ho fondato Fred per colmare quella distanza. Un'unica piattaforma dove la ricerca viene pianificata, condotta, sintetizzata e condivisa — e dove ogni insight è tracciabile ai dati di sessione che lo hanno prodotto. Il layer AI non è il prodotto; è l'accelerante che rende la sintesi abbastanza veloce da stare al passo con i cicli di delivery del prodotto.

La parte più difficile di fondare Fred non è stata costruire la piattaforma — è stata resistere alla tentazione di costruire il prodotto che avrei voluto esistesse nei miei lavori precedenti, piuttosto che il prodotto di cui ricercatori UX, product manager e research operations lead avevano effettivamente bisogno. La ricerca JTBD che ha preceduto la prima riga di codice è stato il lavoro più importante che ho fatto.`,
    research: {
      description: `Prima di scrivere una riga di codice, ho condotto un esteso programma di ricerca JTBD con tre gruppi di utenti distinti: ricercatori UX (gli utenti primari), product manager (i principali fruitori degli output di ricerca) e research operations lead (le persone responsabili dello scaling della capacità di ricerca nelle loro organizzazioni).

Le interviste hanno mappato il workflow di ricerca end-to-end attraverso organizzazioni di diverse dimensioni e livelli di maturità. L'insight chiave — quello che ha plasmato la tesi del prodotto — era che la frammentazione non era solo un problema di strumenti; era un problema di fiducia. Gli stakeholder non si fidavano della ricerca che non potevano interrogare. I ricercatori non si fidavano che il loro lavoro sarebbe sopravvissuto intatto al viaggio dalla scoperta alla raccomandazione.

Ho condotto interviste di continuous discovery per tutto il primo anno di sviluppo — ogni due settimane, cinque utenti, focalizzato su una specifica parte del prodotto. Questo ritmo ha mantenuto la build strettamente accoppiata al reale dolore degli utenti e ha prevenuto la modalità di fallimento comune del fondatore di costruire funzionalità tecnicamente impressionanti che però non risolvono il job core.`,
      findings: [
        "I ricercatori trascorrono il 40%+ del loro tempo di lavoro in attività logistiche (reclutamento, scheduling, presa di note, formattazione della sintesi) — non nella generazione di insight",
        "Gli insight perdono peso evidenziale ogni volta che vengono copiati da uno strumento all'altro — il percorso dai dati grezzi di sessione alla deck per gli stakeholder distrugge la tracciabilità",
        "Gli stakeholder diffidano della ricerca che non possono tracciare alla sua fonte — 'da dove viene questo?' è la domanda che uccide la credibilità della ricerca nelle sprint review",
        "La sintesi assistita dall'AI aveva un'alta domanda — ma solo se l'output AI era verificabile rispetto ai dati grezzi; i ricercatori non usavano la sintesi che non potevano controllare",
        "I research operations lead avevano bisogno di un sistema che potesse scalare il throughput degli studi senza scalare proporzionalmente il numero di persone del team",
      ],
    },
    design: {
      description: `L'architettura di prodotto di Fred è stata progettata attorno a un singolo principio: ogni insight deve essere tracciabile alla sua evidenza fonte, e quella tracciabilità deve essere visibile ai non-ricercatori.

La piattaforma integra card sorting, first click testing, tree testing, test di usabilità non moderato, survey, preference test e 5-second test — non come strumenti isolati ma come componenti di un workflow unificato studio-a-insight. Uno studio iniziato in qualsiasi metodo produce dati grezzi che alimentano direttamente il layer degli insight, con sintesi assistita dall'AI che fa emergere pattern, raggruppa le osservazioni e redige affermazioni di risultati — sempre con link di citazione ai momenti specifici della sessione che li hanno generati.

User Sphere, il prodotto di analisi delle sessioni all'interno di Fred, fornisce analisi in tempo reale e basata su replay con simulazione del gaze tracking, playback delle sessioni e overlay delle heatmap. La sfida di design per User Sphere era la densità: i dati di sessione sono estremamente ad alta risoluzione, e portare alla superficie insight azionabili da centinaia di sessioni richiedeva un'architettura dell'informazione a layer — riepilogo prima, dettaglio su richiesta.

Il layer di reporting è stato progettato con il pubblico degli stakeholder in mente, non il ricercatore. I report sono strutturati come output pronti per le decisioni: raccomandazione, evidenza, livello di confidenza e tracciabilità della fonte — in quest'ordine.`,
    },
    testing: {
      approach:
        "Continuous discovery: sessioni moderate bisettimanali con utenti attivi per tutto il periodo di sviluppo. Ogni sessione si è concentrata su una specifica area del prodotto. I risultati alimentavano direttamente lo sprint successivo. La ricerca era intrecciata nel cadenza di sviluppo, non eseguita come fase waterfall.",
      findings: [
        "La tracciabilità degli insight era la capacità con il punteggio più alto nelle survey di soddisfazione degli utenti — la capacità di cliccare da un'affermazione di sintesi al momento grezzo della sessione",
        "Il workflow di studio unificato ha ridotto il time-to-study-launch da ore di configurazione degli strumenti a meno di 15 minuti per gli utenti esperti",
        "L'adozione della sintesi AI era alta specificamente grazie al layer di citazione — i ricercatori che potevano verificare l'output AI lo usavano e si fidavano; quelli che non potevano non lo facevano",
      ],
    },
    outcome: {
      description:
        "Fred è live come piattaforma SaaS, al servizio di ricercatori UX, team di prodotto e research operations lead che necessitano di un singolo system of record per i loro programmi di ricerca.",
      metrics: [
        { value: "10+", label: "Metodi di ricerca integrati nativamente" },
        { value: "1 piattaforma", label: "Che sostituisce 4+ strumenti frammentati" },
        {
          value: "AI-powered",
          label: "Sintesi con piena tracciabilità alla fonte",
        },
        { value: "15 anni", label: "Di esperienza da professionista incorporata" },
      ],
    },
    reflection:
      "Costruire Fred mi ha costretto a rispondere a una domanda che avevo sempre posto ai clienti ma non avevo mai risolto completamente per me stesso: qual è il lavoro per cui questo prodotto viene assunto? La risposta — rendere la ricerca affidabile per le persone che non erano nella stanza — ha riplasmato ogni decisione di prodotto che ho preso. La tentazione più difficile a cui resistere era costruire per me stesso come power user piuttosto che per il ricercatore che cerca di convincere uno scettico VP di Product che il risultato è reale. Fred è il mio proof-of-work su 15 anni di prospettiva da professionista — e il problema di design intellettualmente più impegnativo su cui abbia mai lavorato.",
  },
];

export const featuredCaseStudies = caseStudies.filter((cs) => cs.featured);
