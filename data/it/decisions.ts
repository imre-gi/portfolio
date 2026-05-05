import type { Decision } from "@/types";

/**
 * Decision-tree data — Italian translations.
 * Mirrors data/decisions.ts structurally; only the prose changes.
 * Technical terms (Vue, R, GraphQL, JTBD, GV Sprint, WCAG, KYC, ResearchOps,
 * AI, MVP, etc.) intentionally stay in English where they read as proper nouns.
 */
export const decisionsBySlug: Record<string, Decision[]> = {
  betika: [
    {
      id: "betika-stack",
      question: "Patchare il frontend PHP legacy o ricostruire end-to-end?",
      context:
        "Il peso totale della pagina al primo caricamento era di 6,8 MB sul frontend PHP legacy. Su connessioni 2G/3G in Mozambico e RDC, vuol dire ammazzare la sessione. Patchare lo stack esistente significava consegnare prima; ricostruire significava scommettere sei mesi su una migrazione architetturale completa.",
      paths: [
        {
          label: "Tenere PHP, ottimizzare asset pipeline e caching.",
          outcome:
            "Il peso pagina sarebbe rimasto al massimo nella fascia 4–5 MB. Stesso HTML server-rendered, stesso costo di reload per pagina su una connessione lenta.",
          metric: "~5 MB stim.",
          evidence: "Audit asset + Lighthouse su fork di staging patchato",
          chosen: false,
        },
        {
          label: "Ricostruzione in VueJS con SSR, backend in R, data layer su GraphQL + RPC.",
          outcome:
            "Peso pagina al primo caricamento sceso a 1,76 MB. SSR ha mantenuto il first paint server-rendered per le connessioni lente; GraphQL + RPC hanno reso il payload per-interazione il più piccolo e cacheabile possibile. Sei mesi per consegnare; ripaga in retention.",
          metric: "1,76 MB",
          evidence: "Misurazione in produzione post-launch",
          chosen: true,
        },
      ],
      tension:
        "Il team di engineering aveva anni investiti nel codebase PHP. Una riscrittura totale — più un backend in R e un data layer nuovo — sembrava over-engineering. Il pitch doveva essere: questa non è una preferenza di stack, è un vincolo economico. Ogni megabyte che spediamo costa soldi ai nostri utenti, e ogni round-trip REST verboso glieli costa di più.",
      takeaway:
        "Le performance sono materiale di design, non un passaggio di ottimizzazione. Quando la riscrittura collassa sia il peso al primo caricamento sia il payload per-interazione, la riscrittura è il design.",
    },
    {
      id: "betika-default",
      question: "Vista home di default: tutti gli sport, o un solo sport?",
      context:
        "L'analisi NPS mostrava che l'87% degli utenti scommetteva solo sul calcio. La home page caricava migliaia di eventi su ogni vertical a ogni visita.",
      paths: [
        {
          label: "Tenere il listing multi-sport, aggiungere filtri.",
          outcome:
            "Prototipo testato al 43% di completamento dei task. Gli utenti scrollavano comunque oltre la maggior parte degli eventi per trovare il calcio. I dati continuavano a caricarsi per sport che nessuno apriva.",
          metric: "43% completamento",
          evidence: "Test prototipo GV Sprint, n=5",
          chosen: false,
        },
        {
          label: "Default a solo-calcio; tutto il resto via Omnisearch.",
          outcome:
            "Stesso prototipo, versione solo-calcio, testata al 91%. Gli utenti l'hanno percepita come 'più pulita e veloce, non restrittiva'.",
          metric: "91% completamento",
          evidence: "Test prototipo GV Sprint, n=5",
          chosen: true,
        },
      ],
      tension:
        "Il rischio era sembrare di aver amputato metà del prodotto. La formulazione verbale nel readout dello Sprint contava: non 'abbiamo rimosso degli sport', ma 'li abbiamo messi dove vai effettivamente a cercarli'.",
      takeaway:
        "Dove vivono davvero i tuoi utenti è un vincolo di design, non una considerazione di roadmap. Uno split 87/13 vuol dire che il 13 merita una superficie diversa.",
    },
    {
      id: "betika-search",
      question: "Come fanno gli utenti a raggiungere un evento di un altro sport?",
      context:
        "Se il calcio era la home, la navigazione doveva rendere ogni altro vertical raggiungibile in una sola interazione — altrimenti cambiare sport diventa un giro andata-ritorno di quattro tap via home page.",
      paths: [
        {
          label: "Navigazione gerarchica: Sport → Tennis → ATP → Match.",
          outcome:
            "Pattern riconoscibile. Lento sotto carico — ogni livello era una fetch — e si rompeva per gli utenti che non conoscevano la gerarchia.",
          metric: "47s media",
          evidence: "Baseline da analisi euristica",
          chosen: false,
        },
        {
          label: "Overlay Omnisearch su ogni sport.",
          outcome:
            "Singolo input testuale. Indicizzava eventi su tutti i vertical. Gli utenti digitavano un nome di squadra e arrivavano in una sola interazione.",
          metric: "11s media",
          evidence: "Test prototipo, post-iterazione",
          chosen: true,
        },
      ],
      takeaway:
        "La ricerca è navigazione quando il catalogo è ampio e poco profondo. La navigazione ad albero è per le tassonomie che gli utenti hanno già in testa — e i scommettitori non hanno il calendario ATP in testa.",
    },
    {
      id: "betika-process",
      question: "Come allineare un team distribuito in tempo per consegnare?",
      context:
        "Stakeholder a Nairobi, a Londra, contributor remoti. Un processo di design iterativo standard avrebbe consumato mesi solo per allinearsi. La pressione commerciale era acuta.",
      paths: [
        {
          label: "Discovery → wireframe → review → revisioni standard.",
          outcome:
            "Stimati 8-12 settimane per arrivare a un design validato. Costo alto di cicli con gli stakeholder.",
          metric: "~10 settimane",
          evidence: "Benchmark di progetto precedente, stesso cliente",
          chosen: false,
        },
        {
          label: "GV Design Sprint — cinque giorni, tutte le decisioni co-locate.",
          outcome:
            "Una settimana. Stakeholder, designer, analisti, CTO nella stessa stanza. Prototipo validato al giorno cinque.",
          metric: "5 giorni",
          evidence: "Documentazione output Sprint",
          chosen: true,
        },
      ],
      tension:
        "Uno Sprint chiede a persone senior di liberare un calendario per una settimana intera. Il pitch era: spenderai meno tempo nell'arco dell'anno se ne spendi una settimana intera ora.",
      takeaway:
        "Comprimi il calendario delle decisioni, non la qualità delle decisioni. Lo Sprint è un forcing function per i forcing function.",
    },
    {
      id: "betika-scroll",
      question: "Lista paginata o scroll infinito?",
      context:
        "La paginazione significa una fetch e un reload di pagina per click. Sul profilo dei costi dei dati, ogni reload completo costa soldi all'utente.",
      paths: [
        {
          label: "Paginare le liste, pattern web classico.",
          outcome:
            "Più economico da costruire. Tre reload completi per sfogliare 60 eventi. Testato come ansia 'dove sono finite le partite?'.",
          metric: "3 reload",
          evidence: "Note delle sessioni di test prototipo",
          chosen: false,
        },
        {
          label: "Scroll infinito con prenotazione di placeholder.",
          outcome:
            "Singolo path di fetch, riusa la pagina. Gli utenti potevano sfogliare l'intera lista senza pensare al costo.",
          metric: "1 reload",
          evidence: "Test prototipo, post-iterazione",
          chosen: true,
        },
      ],
      takeaway:
        "Lo scroll infinito è il pattern giusto quando il reload è caro in soldi o tempo. La sua reputazione di pattern-da-evitare arriva da contesti in cui il reload è gratis.",
    },
    {
      id: "betika-odds",
      question: "L'impostazione del formato delle quote deve persistere?",
      context:
        "La preferenza sulle quote era il reclamo più costantemente segnalato nei ticket di supporto — gli utenti dovevano resettarla tra frazionarie, decimali e americane a ogni sessione.",
      paths: [
        {
          label: "Lasciare session-only, documentare il limite.",
          outcome:
            "Volume di ticket continuo. Frustrazione ripetuta. Nessuna modifica al codice ma costo CX continuo.",
          metric: "ticket continui",
          evidence: "Dati supporto, baseline 90 giorni",
          chosen: false,
        },
        {
          label: "Persistere alle preferenze utente, singolo tap dalla nav sticky.",
          outcome:
            "Risolto il 100% dei reclami ripetuti, nessun costo di migrazione osservato.",
          metric: "100% risolto",
          evidence: "Audit ticket post-launch",
          chosen: true,
        },
      ],
      takeaway:
        "Alcuni bug 'a bassa priorità' sono frizioni persistenti moltiplicate per ogni sessione. Risolvili una volta, fai l'audit del backlog supporto trimestralmente per trovarli.",
    },
  ],

  "instacoins-signup": [
    {
      id: "ic-priority",
      question: "Su cosa concentrarsi nei primi 90 giorni?",
      context:
        "Entrato come Head of UX. La conversione perdeva sangue, ma fix tattici senza una fondazione di ricerca avrebbero trattato solo i sintomi. I due binari non potevano andare in sequenza senza perdere sei mesi.",
      paths: [
        {
          label: "Quick win sul funnel, ricerca strada facendo.",
          outcome:
            "Uplift iniziale più rapido. Ma ogni finding successivo sarebbe stato retrofittato su decisioni pre-ricerca — debito che si accumula.",
          evidence: "Contesti simili precedenti, senza ricerca a monte",
          chosen: false,
        },
        {
          label: "Costruire prima il ResearchOps, poi agire sull'evidenza.",
          outcome:
            "90 giorni più lenti al primo ship. 40+ studi in 18 mesi — ogni decisione di funnel radicata in evidenza che il team poteva difendere.",
          metric: "40+ studi",
          evidence: "Misurazione output del programma",
          chosen: true,
        },
      ],
      tension:
        "La conversione era visibilmente brutta. La leadership voleva azione. Il pitch: 'Sarò l'Head of UX che sistema il sistema che sistema la conversione, non l'Head che ha sistemato la conversione una volta'.",
      takeaway:
        "Senior UX a volte significa dire 'nessuna risposta più rapida da spedire è anche la risposta giusta'. Tieni la linea se la pipeline di evidenza non esiste ancora.",
    },
    {
      id: "ic-upload",
      question: "Cosa c'è di sbagliato nello step di upload documenti?",
      context:
        "Il 41% degli utenti abbandonava su questa singola schermata. Le interviste JTBD hanno rivelato che l'abbandono era emotivo, non procedurale — il picco di ansia era qui.",
      paths: [
        {
          label: "Comprimere le istruzioni, semplificare il copy.",
          outcome:
            "Fix superficiale. Tratta il sintomo (istruzioni confuse) senza affrontare la causa (mancanza di fiducia su cosa succede al documento).",
          chosen: false,
        },
        {
          label: "Guide visive specifiche per formato + validazione real-time + stato di conferma esplicito.",
          outcome:
            "Abbandono sceso dal 41% al 14% — un miglioramento relativo del 66%. Segnali di fiducia nel momento di picco di ansia.",
          metric: "−66% abbandono",
          evidence: "A/B test post-deploy, n>5.000",
          chosen: true,
        },
      ],
      takeaway:
        "Il problema dichiarato dall'utente (le istruzioni sono confuse) e il problema reale (non mi fido) condividono spesso una schermata. Risolvi il secondo.",
    },
    {
      id: "ic-review",
      question: "Cosa comunica davvero 'sotto revisione'?",
      context:
        "Il 23% degli utenti che completava l'upload abbandonava durante l'attesa. Niente avanzamento, niente stima, nessun segnale che qualcosa stesse succedendo.",
      paths: [
        {
          label: "Stato generico 'stiamo elaborando', email a fine processo.",
          outcome:
            "Status quo. Veloce da spedire; preserva l'abbandono.",
          chosen: false,
        },
        {
          label: "Stima onesta dei tempi + milestone di stato + opt-in email + copy in linguaggio semplice.",
          outcome:
            "Abbandono in attesa sceso dal 23% al 9%. Le review con gli stakeholder hanno smesso di chiedere 'perché la conversione perde ancora dopo l'upload?'",
          metric: "−61% abbandono",
          evidence: "Misurazione funnel post-deploy",
          chosen: true,
        },
      ],
      takeaway:
        "La trasparenza è materiale di design nei flussi regolati. La compliance non è negoziabile; il diritto dell'utente a sapere cosa sta succedendo non lo è altrettanto.",
    },
    {
      id: "ic-tokens",
      question: "Styling per-prodotto o token semantici unificati?",
      context:
        "Il portfolio aveva cinque prodotti. Ognuno spediva in un registro visivo leggermente diverso — erosione subliminale della fiducia a ogni touchpoint.",
      paths: [
        {
          label: "File di design per-prodotto, brand sheet condiviso.",
          outcome:
            "Più rapido per-team. L'inconsistenza persiste. WCAG da verificare per componente, per prodotto, a ogni release.",
          chosen: false,
        },
        {
          label: "Layer di token semantici cablato Figma → Storybook → Chromatic.",
          outcome:
            "Report di inconsistenza scesi da 12 per sprint a meno di 2. WCAG enforced a livello di token — contrasto, focus, area di tocco.",
          metric: "<2 / sprint",
          evidence: "Tracker review sprint, media 6 mesi",
          chosen: true,
        },
      ],
      takeaway:
        "Un design system è policy resa eseguibile. Se la regola di accessibilità non è in un token, è un memo che la gente dimentica.",
    },
    {
      id: "ic-a11y",
      question: "Come affrontare 34 violazioni WCAG 2.1 AA?",
      context:
        "L'audit ha trovato violazioni in tutto il flusso di registrazione, incluse failure di etichettatura dei form che rompevano la navigazione con screen reader.",
      paths: [
        {
          label: "Triage per severità, fix delle critiche, rimanda il resto.",
          outcome:
            "Metrica di compliance iniziale più rapida. La coda lunga di issue medie continua a fallire per gli utenti reali.",
          chosen: false,
        },
        {
          label: "Risolvere tutte e 34, integrare i fix nel nuovo layer del design system.",
          outcome:
            "Il completamento di task con screen reader nella registrazione è passato dal 38% al 94%. Le regressioni future bloccate a livello di token.",
          metric: "38% → 94%",
          evidence: "Test di completamento task con screen reader",
          chosen: true,
        },
      ],
      takeaway:
        "L'accessibilità non è un problema di triage per severità. È un contratto. O il contratto vale per tutti gli utenti o non vale.",
    },
  ],

  "genesis-global": [
    {
      id: "gg-foundation",
      question: "Patchare prima il funnel, o sistemare prima la fondazione di tracking?",
      context:
        "La conversione era visibilmente sotto-performante e un audit CRO era nel brief. Ma gli operatori prendevano decisioni su dati vecchi 24-48h, senza una definizione condivisa di 'utente di alto valore'. Patchare il funnel senza una fondazione voleva dire misurare ogni ottimizzazione successiva contro una baseline inaffidabile.",
      paths: [
        {
          label: "Lanciare l'audit CRO, spedire patch al funnel, sistemare il tracking dopo.",
          outcome:
            "Uplift iniziale di conversione più rapido sul brand di punta. Ogni decisione successiva ancora presa su dati stantii e inconsistenti — stessa dipendenza dall'engineering per query ad-hoc.",
          evidence: "Stesso pattern osservato in tre audit CRO precedenti su piattaforme peer",
          chosen: false,
        },
        {
          label: "Stabilire prima la fondazione di tracking comportamentale e utente; il design del funnel segue.",
          outcome:
            "Più lento al primo uplift. Una volta che la fondazione esisteva, ogni decisione di funnel successiva era misurabile nella finestra della sessione, non il giorno dopo. Il dimezzamento del funnel è diventato difendibile perché la misurazione era affidabile.",
          evidence: "Fondazione estesa a tutti i 14 brand; decisioni di marketing successive ci girano sopra",
          chosen: true,
        },
      ],
      tension:
        "La pressione commerciale era sul funnel. Chiedere di rimandare il lavoro sul funnel per progettare una tassonomia sembrava un designer che usciva dal suo ruolo. La difesa era semplice: non c'è un before/after utile per un A/B test di cui non ti puoi fidare, su dati che arrivano il giorno dopo che la campagna è finita.",
      takeaway:
        "Il tracking è il substrato di ogni decisione successiva. Salta il substrato e passi il resto del progetto a discutere se i numeri siano veri.",
    },
    {
      id: "gg-taxonomy",
      question: "Lasciare che ogni operatore definisca i propri segmenti, o imporre una tassonomia su tutti i 14 brand?",
      context:
        "Tre operatori sono arrivati al workshop di tassonomia con tre definizioni incompatibili di 'utente di alto valore'. Lasciare che ognuno tenesse la sua avrebbe preservato l'autonomia. Imporne una avrebbe scoperchiato un conflitto politico prima ancora di disegnare la UI.",
      paths: [
        {
          label: "Definizioni di segmento per-operatore, mappate in lettura.",
          outcome:
            "Più rapido raggiungere il consenso nella stanza. Ogni analisi cross-brand successiva avrebbe richiesto un layer di traduzione — e prodotto il tipo di riunione 'di chi è il numero giusto?' che uccide le decisioni evidence-led.",
          chosen: false,
        },
        {
          label: "Una tassonomia di eventi e una gerarchia di segmenti canoniche su tutti i 14 brand.",
          outcome:
            "Tre giorni di workshop più duri. Output: un documento di information architecture che definisce nomi-evento oggetto-azione, schema attributi e gerarchia segmenti. Ogni brand interrogato allo stesso modo; le decisioni di campagna cross-brand sono diventate possibili per la prima volta.",
          metric: "14 / 14 brand",
          evidence: "Audit di adozione tassonomia post-rollout",
          chosen: true,
        },
      ],
      tension:
        "Gli operatori vivono una tassonomia condivisa come perdita di controllo finché non devono confrontare brand o lanciare una campagna multi-brand — a quel punto diventa l'unica cosa che gli permette di spedire.",
      takeaway:
        "Il design dei dati è un atto politico. Sblocca il conflitto politico in fase di tassonomia, in una stanza con l'engineering presente, o lo paghi per sempre in dashboard non allineate.",
    },
    {
      id: "gg-self-service",
      question: "Gli operatori aprono ticket per i segmenti, o costruiscono i segmenti da soli?",
      context:
        "Ogni richiesta di personalizzazione era un ticket di engineering. Quello era il collo di bottiglia. La domanda era se scalare il team di engineering o consegnare agli operatori uno strumento che trasformasse il collo di bottiglia in un problema di UI.",
      paths: [
        {
          label: "Tenere l'engineering come autore dei segmenti; aggiungere SLA e form di richiesta.",
          outcome:
            "Coda più pulita. Stessa latenza fondamentale tra l'operatore che nota un segnale e l'azione su di esso — misurata in giorni, non minuti.",
          chosen: false,
        },
        {
          label: "Segment builder UI self-service con condizioni drag-and-drop e anteprima live della dimensione del segmento.",
          outcome:
            "Gli operatori costruivano i propri segmenti e lanciavano esperimenti di retention dentro una sessione. L'engineering è passato da lavoro per-richiesta a manutenzione dello strumento.",
          metric: "tempo reale",
          evidence: "Log di utilizzo operatori post-launch",
          chosen: true,
        },
      ],
      takeaway:
        "Quando lo stesso task esperto è messo in coda ogni giorno, la risposta non è quasi mai una coda più grande. È uno strumento che trasforma il task in un lavoro che un non-esperto può fare in sicurezza.",
    },
    {
      id: "gg-funnel-shape",
      question: "Ottimizzare dentro la registrazione esistente a 5 step, o ristrutturare l'intero flusso ad-to-activation?",
      context:
        "Un engagement CRO standard avrebbe sistemato copy e microcopy dentro gli step esistenti. La task analysis ha mostrato qualcosa di più grosso: l'intero percorso dall'ad sul web al primo deposito aveva job duplicati sparsi sulle schermate — campi raccolti due volte, frizioni aggiunte per ragioni legacy, selezione del metodo di pagamento inflitta agli utenti senza contesto.",
      paths: [
        {
          label: "A/B test dentro ogni step. Ottimizzare titoli, copy dei bottoni, timing della validazione.",
          outcome:
            "Uplift locale, soffitto attorno al +10-15% per ogni step singolo. Non affronta i job duplicati cross-step.",
          metric: "+10-15% per step stim.",
          evidence: "Benchmark di settore per test su titoli/CTA",
          chosen: false,
        },
        {
          label: "Ristrutturare tutto il flusso ad-to-activation: collassare i job duplicati, ridisegnare la selezione del metodo di pagamento, eliminare gli step esistenti per ragioni legacy non regolatorie.",
          outcome:
            "Step da ad ad attivazione tagliati di circa la metà. Sotto-funnel di registrazione collassato da 5 a 3. Schermata di pagamento ridisegnata con loghi di brand riconoscibili e indicatore 'consigliato' regionale. Effetto composto: +38% registrazioni, +51% FTD.",
          metric: "−~50% step",
          evidence: "A/B test prima del rollout completo, replicato su tutti i 14 brand",
          chosen: true,
        },
      ],
      tension:
        "Il brief chiedeva un audit CRO. La ristrutturazione richiedeva di convincere ogni operatore che gli step legacy non erano load-bearing. La funnel analysis — annotata step per step — è stato l'artefatto che ha vinto la discussione.",
      takeaway:
        "Accorciare un flusso non si fa quasi mai tagliando step. Si fa trovando i job duplicati nascosti dentro gli step e fondendoli. La task analysis è lo strumento che lo rende visibile.",
    },
    {
      id: "gg-rollout",
      question: "Spedire al brand di punta e misurare, o roll-out su tutti i 14 brand insieme?",
      context:
        "Un rollout flagship-first è la mossa sicura e ti permette di confrontare l'uplift in modo pulito. Ma Genesis era una piattaforma B2B con infrastruttura condivisa: una versione su un solo brand avrebbe significato mantenere due implementazioni, con divergenza operatore-specifica accumulata dal giorno uno.",
      paths: [
        {
          label: "Rollout sul brand top, misurare per un trimestre, poi negoziare l'adozione brand-per-brand.",
          outcome:
            "Attribuzione causale più pulita sul brand di punta. Il team marketing di ogni altro brand continua a prendere decisioni su dati stantii e inconsistenti per quel trimestre — e chiede varianti bespoke dopo.",
          chosen: false,
        },
        {
          label: "Replicare il ridisegno e la tassonomia unificata su tutti i 14 brand in un singolo rollout.",
          outcome:
            "Il marketing ha ottenuto, per la prima volta, un modo per confrontare le campagne tra brand e decidere la spesa futura su una base di evidenza condivisa. Nessun fork, nessuna logica di dashboard operatore-specifica da mantenere.",
          metric: "14 / 14",
          evidence: "Audit di rollout + decisioni di campagna post-rollout briefate sui dati unificati",
          chosen: true,
        },
      ],
      takeaway:
        "Su una piattaforma B2B multi-brand, il valore di un ridisegno non è l'uplift per-brand; è la comparabilità cross-brand che sblocca. Quel valore è perso nel momento in cui tieni in vita due implementazioni.",
    },
  ],

  "match-10": [
    {
      id: "m10-frame",
      question: "Costruire un pool calcistico, o un formato sport-agnostico?",
      context:
        "Legolas era trotting-first. Serviva un prodotto calcistico per crescere, ma ogni nuovo vertical precedente era andato male: i fan del trotto lo vivevano come diluizione, i fan del calcio vedevano un prodotto a sapore di trotto e non avevano motivo di usarlo. Il brief diceva 'pool calcistico'. Il reframing duro è stato: costruisci il formato, non lo sport.",
      paths: [
        {
          label: "Spedire un pool calcistico focalizzato. Trattare il trotto come prodotto separato.",
          outcome:
            "Più rapido a mercato per il calcio. Il cross-sell rimane un meccanismo di marketing — coupon, banner, popup. I fan del trotto non diventano mai giocatori del pool calcio perché il pool calcio si legge come prodotto diverso.",
          chosen: false,
        },
        {
          label: "Progettare Match 10 come sport-agnostico — stessa UI, stesso flusso, stessa struttura premi, qualunque sport nel calendario.",
          outcome:
            "Più lento a mercato di qualche settimana. Il prodotto diventa un ponte in entrambe le direzioni: i fan del trotto provano il calendario calcio senza uscire da un formato familiare; i fan del calcio approdano su Legolas senza che il trotto sia la prima cosa da imparare.",
          chosen: true,
        },
      ],
      tension:
        "Un formato polimorfico è più difficile da progettare di uno sport-specific — ogni decisione UI deve sopravvivere a uno sport con unità di evento diverse, esiti diversi, ritmi diversi. La gran parte della disciplina di design è andata nel non far entrare assunzioni football-specific nel formato.",
      takeaway:
        "Il cross-sell raramente si risolve con un meccanismo di marketing. Si risolve con un prodotto la cui architettura rende il cross-sell nativo — stesso gioco, eventi diversi.",
    },
    {
      id: "m10-format",
      question: "Modernizzare le football pools come pool calcistico, o estrarre l'invariante del formato?",
      context:
        "Vernons Pools, Super 6, Quinela avevano decenni di product-market fit, tutti costruiti attorno al calcio. Il rischio di prendere in prestito il formato era ereditare la cornice football. L'opportunità era estrarre cosa rendeva il formato funzionante — premio fisso, semplicità del pronostico, trasparenza sociale — e scartare l'assunzione sullo sport.",
      paths: [
        {
          label: "Tenere la cornice football: 'pronostica 10 partite, vinci il pool'.",
          outcome:
            "Riconoscibile per i fan del calcio. I fan del trotto lo trattano come prodotto estraneo. Invariante del formato intrappolato dentro una superficie sport-specific.",
          chosen: false,
        },
        {
          label: "Estrarre l'invariante: 'pronostica 10 eventi, vinci il pool'. Stesso gioco attraverso gli sport.",
          outcome:
            "Entrambe le community riconoscono il gioco. L'invariante è il valore; lo sport è configurazione. Stessa UI, stessi livelli di premio, stessa share card — eventi diversi.",
          chosen: true,
        },
      ],
      takeaway:
        "Quando prendi in prestito un formato di lunga durata, il lavoro è capire quali parti sono essenziali e quali sono incidente storico. Gli incidenti storici sono di solito dove il prestito crolla.",
    },
    {
      id: "m10-social-spine",
      question: "Acquisizione prize-led o social-visibility-led?",
      context:
        "Storicamente il pool betting si è venduto sul premio. La ricerca sul footy tipping ha fatto emergere un driver diverso: nei pub, l'engagement era il tabellone visibile con i nomi di tutti, non il premio a fine stagione. La domanda era se mettere al centro del design il premio o la visibilità.",
      paths: [
        {
          label: "Lead con il jackpot. Premio grande, banner grande, crescita del prize pool come visual primario.",
          outcome:
            "Picco nelle settimane di jackpot, calo in tutte le altre. Acquisizione legata a un numero che deve continuare a salire.",
          chosen: false,
        },
        {
          label: "Lead con la classifica. Il tabellone condiviso è la superficie; il premio è informato da essa ma non è il titolo.",
          outcome:
            "Le visite di ritorno diventano per controllare come hanno fatto gli amici, ogni settimana. Acquisizione legata alla forza sociale, non alla dimensione del premio. Prima classifica social nel pool betting di Legolas.bet.",
          chosen: true,
        },
      ],
      tension:
        "I team marketing puntano sui numeri del premio perché convertono nel breve termine. La difesa: lo stesso premio non torna la settimana dopo a meno che il loop sociale non riporti gli utenti. La classifica è il loop.",
      takeaway:
        "Se un formato di lunga durata ti insegna qualcosa sul perché è sopravvissuto, prendi quella lezione sul serio. Il pool betting da pub è sopravvissuto sulla visibilità, non sull'assegno a fine stagione.",
    },
    {
      id: "m10-time-budget",
      question: "Ottimizzare la densità della UI, o cap rigido sui 90 secondi di entry?",
      context:
        "I scommettitori occasionali abbandonano se l'entry richiede più di ~90 secondi. La domanda era se ottimizzare per densità informativa (mostrare tutto) o per tempo-di-completamento (mostrare solo ciò che serve per scegliere).",
      paths: [
        {
          label: "Mostrare form, risultati recenti, commenti esperti inline su ogni event card.",
          outcome:
            "Gli utenti coinvolti l'amano; i scommettitori occasionali abbandonano. Il pubblico per cui il formato è stato costruito è quello che perdi.",
          chosen: false,
        },
        {
          label: "Strippare l'entry a un flusso swipe-per-evento senza quote, senza probabilità, senza analisi inline. L'informazione affiora post-entry sulla classifica.",
          outcome:
            "Validato il completamento in 90 secondi nei test. Il formato si legge come gioco, non come esercizio di ricerca. Gli utenti coinvolti che vogliono profondità la trovano sulla classifica, non nel flusso di entry.",
          metric: "<90s entry",
          evidence: "Misurazione tempo-su-task in test prototipo",
          chosen: true,
        },
      ],
      takeaway:
        "Il budget di tempo è un vincolo di design più forte della completezza informativa. Se l'utente ha 90 secondi, progetta per 90 secondi e metti la profondità dove guarda dopo.",
    },
    {
      id: "m10-no-odds",
      question: "Mostrare le quote in un prodotto sportsbook, o rifiutarsi di farlo?",
      context:
        "Ogni sportsbook nel mercato mostra le quote. Il riflesso è assumere che gli utenti le vogliano. La ricerca sul pubblico diceva l'opposto: i scommettitori occasionali trovavano le quote intimidatorie, e il polimorfismo (stessa UI tra sport) funzionava solo se le quote — che hanno aspetto molto diverso tra trotto e calcio — non avessero un posto in superficie.",
      paths: [
        {
          label: "Mostrare le quote. Allinearsi alle convenzioni sportsbook che gli utenti vedono altrove.",
          outcome:
            "I scommettitori occasionali esitano al momento del pick. Il polimorfismo si rompe: le quote del trotto hanno aspetto diverso, i fan del calcio si aspettano formati diversi, la stessa UI non può ospitarle entrambe in modo pulito.",
          chosen: false,
        },
        {
          label: "Nessuna quota da nessuna parte nel flusso di entry. I livelli di premio fissi sostituiscono la probabilità come segnale di valore.",
          outcome:
            "I scommettitori occasionali scelgono senza esitare. Il polimorfismo regge: la stessa UI funziona per qualunque sport perché non serve un layer di quote sport-specific. La semplicità diventa il differenziante.",
          chosen: true,
        },
      ],
      takeaway:
        "Le convenzioni in una categoria sono di solito load-bearing — ma non sempre. Quando il pain point del pubblico è la convenzione stessa, eliminarla è il design.",
    },
  ],

  "play-together": [
    {
      id: "pt-shape",
      question: "Bettor singolo con guarnizione social, o competizione team-vs-team al centro?",
      context:
        "Il brief chiedeva 'meccanismi social'. La maggior parte dei tentativi di scommessa social attacca una chat su un flusso single-player. Gli analisti di trotto hanno spinto la formulazione più dura: la scommessa stessa deve essere un artefatto di team, con un team che compete contro il pool di un altro team.",
      paths: [
        {
          label: "Pool bet single-player con condivisione social on top.",
          outcome:
            "Più rapido a spedire. L'engagement social rimane un sidecar — i tassi di condivisione si stabilizzano perché il gioco in sé è privato. La 'community' non si forma davvero.",
          chosen: false,
        },
        {
          label: "Team come entità di prima classe; team contro team.",
          outcome:
            "L'onboarding si è allungato (6 step per cementare l'identità di team prima dell'invito). La scommessa è diventata un artefatto condiviso: amici che tornano per controllare come ha fatto il proprio team, non solo come hanno fatto loro. Il tasso di condivisione della celebrazione vittoria è atterrato a 3,2× la previsione pre-launch.",
          metric: "3,2× share rate",
          evidence: "Misurazione coorte beta vs forecast",
          chosen: true,
        },
      ],
      tension:
        "Definire l'architettura team-vs-team voleva dire rifiutare un prodotto più rapido e convenzionale nella prima settimana. Gli analisti di trotto sono stati la voce decisiva — sapevano che lo sport è già sociale al paddock, e il prodotto digitale dovrebbe rispecchiarlo, non appiattirlo.",
      takeaway:
        "I meccanismi social che producono una community vengono dall'architettura, non da una feature list. Se la scommessa è privata, nessun bottone di share la sistemerà.",
    },
    {
      id: "pt-experts",
      question: "Chat generica tra compagni di team, o esperti di dominio dentro il loop?",
      context:
        "Il pool betting tra giocatori occasionali ed esperti riproduce il peggio delle dinamiche di gruppo: voci più rumorose spingono scommesse impulsive, i principianti si sentono pressati a impegnarsi. Serviva un guardrail che non sembrasse un guardrail.",
      paths: [
        {
          label: "Chat di team libera più disclaimer di gioco responsabile in iscrizione.",
          outcome:
            "Compliante, convenzionale e inefficace nel momento che conta. La pressione a impegnarsi vive dentro la chat, non sul disclaimer.",
          chosen: false,
        },
        {
          label: "Inserire analisti senior di trotto nominati come esperti in-product. Ogni team può chiedere a uno prima di puntare il pool.",
          outcome:
            "L'atto stesso di chiedere all'esperto rallenta il momento dell'impegno. I scommettitori occasionali imparano il formato con supervisione adulta; la pressione tra compagni di team è moderata da una terza voce. Il gioco responsabile diventa una superficie di design, non un link in footer.",
          chosen: true,
        },
      ],
      tension:
        "Aggiungere persone in un gioco digitale sembra overhead operativo. La difesa: in questa categoria, il costo delle scommesse impulsive lo pagano utenti, regolatori e brand reputation. Una piccola capacità di esperti è drammaticamente più economica dell'alternativa.",
      takeaway:
        "Quando le dinamiche di pressione tra pari minacciano il benessere dell'utente, la risposta giusta è raramente un disclaimer più severo. È una terza parte nella stanza la cui presenza cambia come la stanza si comporta.",
    },
    {
      id: "pt-trust",
      question: "Trattare il gioco responsabile come overlay di compliance, o come spina dorsale del design sociale?",
      context:
        "Ogni prodotto iGaming spedisce feature di gioco responsabile perché i regolatori lo richiedono. La domanda è se sono un overlay, separato dall'esperienza, o se plasmano l'esperienza.",
      paths: [
        {
          label: "Controlli standard di gioco responsabile (limiti di deposito, autoesclusione, link al supporto) come sotto-menu nelle impostazioni.",
          outcome:
            "Casella spuntata per la compliance. Il momento reale di rischio impulsivo — la chat di team a secondi dalla chiusura del pool — non ha intervento di design.",
          chosen: false,
        },
        {
          label: "Costruire gli esperti dentro l'architettura sociale; progettare il flusso di team in modo che 'chiedi all'esperto' sia un'azione successiva ovvia prima del commit.",
          outcome:
            "Il gioco responsabile è ora il meccanismo, non la nota a piè di pagina. Il prodotto si legge come community con coaching anziché come macchina di pressione tra pari.",
          chosen: true,
        },
      ],
      takeaway:
        "Compliance fatta in superficie ti fa passare il regolatore. Compliance fatta nell'architettura ti dà un prodotto che gli utenti continuano a usare senza farsi del male.",
    },
    {
      id: "pt-onboarding",
      question: "Join con un tap, o onboarding in sei step di creazione team prima dell'invito?",
      context:
        "Consiglio di crescita convenzionale: minimizzare gli step prima dell'invito. Il problema con quel consiglio nei prodotti social: inviti senza commitment producono pool a cui nessuno torna.",
      paths: [
        {
          label: "Invito a frizione minima — un tap per iniziare un pool, dettagli dopo.",
          outcome:
            "Tasso di invio inviti più alto. Tasso di accettazione e ritorno più basso perché chi invita non ha ancora costruito un'identità di team.",
          chosen: false,
        },
        {
          label: "Onboarding in sei step prima dell'invito: username, nome team, foto, sport, pick, invito.",
          outcome:
            "Ogni step costruisce investimento prima dell'invito. Quando l'utente raggiunge la schermata di invito ha un'identità di team a cui reclutare. Validato in beta all'88% di completamento senza guida.",
          metric: "88% completamento solo",
          evidence: "Misurazione coorte beta",
          chosen: true,
        },
      ],
      takeaway:
        "La frizione è cattiva nei flussi transazionali e utile nei flussi di commitment. Gli inviti funzionano quando chi invita ha qualcosa a cui invitare.",
    },
  ],

  "sport-navigation-sticky": [
    {
      id: "snav-frame",
      question: "Un problema di navigazione, o un problema di findability?",
      context:
        "Il brief diceva 'sistema la navigazione'. L'analisi di flussi e dati raccontava una storia diversa: gli utenti non si perdevano nell'albero di navigazione; si perdevano dentro liste di eventi lunghe e indifferenziate dove gli eventi che gli interessavano stavano sotto la fold.",
      paths: [
        {
          label: "Ristrutturare l'IA — riorganizzare la gerarchia degli sport e le label di categoria.",
          outcome:
            "Ore di lavoro, uplift modesto. L'IA era già grossomodo giusta; il vero problema era che trovare l'evento rilevante dentro uno sport richiedeva 47 secondi di scroll.",
          chosen: false,
        },
        {
          label: "Riformulare come findability: tenere la struttura, attaccare il time-to-event con uno shell sticky, omnisearch e ranking per-utente.",
          outcome:
            "Cambio sport sceso a ~8s di media. Time-to-event sotto 15s. Riformulare il brief è stata la decisione a leva più alta dell'ingaggio.",
          metric: "−83% switch time",
          evidence: "Test prototipo Maze",
          chosen: true,
        },
      ],
      tension:
        "Riformulare un brief è una mossa politica. L'argomento era basato sui dati: l'analisi mostrava che l'IA non era il collo di bottiglia e che il pattern sticky+search era già un'aspettativa appresa da YouTube, Twitter e sportsbook concorrenti.",
      takeaway:
        "Quando arriva un brief di navigazione, controlla se il problema reale dell'utente è gerarchia o scroll. Le risposte vengono da toolkit diversi.",
    },
    {
      id: "snav-pattern",
      question: "Inventare un pattern di navigazione nuovo, o soddisfare aspettative consolidate?",
      context:
        "Da Awwwards-bait sarebbe stata un'interazione di firma — una nav radiale custom, una gesture insolita. Il vincolo di categoria tirava nell'altra direzione: i scommettitori arrivano con un task specifico e zero pazienza per la novità.",
      paths: [
        {
          label: "Progettare un'interazione di navigazione distintiva.",
          outcome:
            "Valore di riconoscimento per il brand. Costo pagato da ogni utente in ogni sessione: una piccola ma persistente tassa di apprendimento.",
          chosen: false,
        },
        {
          label: "Nav sticky, ricerca persistente, toggle quote a singolo tap — i pattern che YouTube, Twitter e bet365 hanno già insegnato agli utenti.",
          outcome:
            "Curva di apprendimento zero. Tutti i partecipanti al test hanno capito il pattern immediatamente. Il tempo risparmiato si compone su ogni sessione.",
          metric: "0 curva di apprendimento",
          evidence: "Test prototipo, n=5, scenari di task identici",
          chosen: true,
        },
      ],
      takeaway:
        "La novità in navigazione si paga in tempo dell'utente, ogni sessione. Spendi la novità su cosa offre il prodotto, non su come si toglie di mezzo.",
    },
    {
      id: "snav-ml-layer",
      question: "Menu statico per tutti, o ranking adattivo per-utente?",
      context:
        "Il fix strutturale ha risolto la maggior parte del problema di time-to-event. La coda residua era che lo stesso menu doveva servire un scommettitore casual solo-calcio e un heavy user multi-sport. Un menu statico può ottimizzare solo per la media — e l'utente medio, in un catalogo a coda lunga, non esiste.",
      paths: [
        {
          label: "Spedire il fix strutturale. Stesso menu per tutti.",
          outcome:
            "Grosso miglioramento sulla baseline. La findability resta legata al menu globale; gli utenti con interessi non mainstream restano leggermente svantaggiati.",
          chosen: false,
        },
        {
          label: "Aggiungere un layer di machine learning per il ranking sopra al menu e alle liste eventi — per-utente, in base alle abitudini di gioco reali.",
          outcome:
            "La findability diventa una proprietà per-utente. Il menu che ogni utente già conosce ora mette più in alto ciò che gli interessa rispetto a ciò che non gli interessa. Spedito nel ciclo successivo, sopra lo stesso componente.",
          metric: "ranking per-utente",
          evidence: "Rollout in produzione, post-sprint",
          chosen: true,
        },
      ],
      takeaway:
        "La personalizzazione in un catalogo a coda lunga non è un lusso; è l'unico modo perché l'utente medio ottenga un menu pensato per lui. Il costo di tenere il modello in produzione lo ripaga ogni sessione.",
    },
    {
      id: "snav-ml-affordance",
      question: "Rendere il ranking ML visibile, o tenerlo silenzioso?",
      context:
        "La tentazione con le feature ML è metterle in mostra — 'consigliato per te', 'in base alle tue abitudini', un'icona scintillante. La domanda onesta: l'utente trae beneficio dal sapere che il menu è adattato, o trae beneficio da un menu che semplicemente funziona?",
      paths: [
        {
          label: "Far affiorare l'adattamento: badge, label 'in base alle tue abitudini', impostazioni per ispezionare.",
          outcome:
            "Trasparenza-spettacolo. Nuovo affordance da imparare; gli utenti iniziano a dubitare del menu che già sapevano usare.",
          chosen: false,
        },
        {
          label: "Ranking silenzioso. Niente badge, niente tag, niente impostazioni. Il menu semplicemente diventa migliore nel mettere in alto ciò che ogni utente vuole.",
          outcome:
            "La findability migliora senza nessun nuovo pattern da insegnare. Gli utenti non devono gestire il modello; navigano e basta.",
          chosen: true,
        },
      ],
      tension:
        "La personalizzazione silenziosa supera una linea etica se cambia il contenuto (es. quote, prezzi). Qui cambia solo l'ordine — gli stessi eventi alle stesse quote, solo meglio classificati. Il caso etico reggeva; l'affordance era carico cognitivo non necessario.",
      takeaway:
        "La personalizzazione che ordina è diversa dalla personalizzazione che filtra. Il ranking può restare invisibile; il filtro va dichiarato.",
    },
    {
      id: "snav-odds",
      question: "Preferenza quote session-only, o persistita all'utente?",
      context:
        "Il reset del formato quote a ogni sessione era il reclamo di usabilità più costantemente segnalato. Sprint di due settimane, nessuna modifica al backend — ma la preferenza era un singolo bit di stato.",
      paths: [
        {
          label: "Lasciare session-only, scoprirla per una release successiva.",
          outcome:
            "Volume di ticket continuo. Stessa frustrazione a ogni sessione.",
          chosen: false,
        },
        {
          label: "Persistere alle preferenze utente, toggle a singolo tap nella nav sticky.",
          outcome:
            "Il 100% dei partecipanti al test ha notato la modifica come miglioramento, senza essere sollecitati. Risolto il reclamo di usabilità più costantemente segnalato nel prodotto.",
          metric: "100% notato",
          evidence: "Test prototipo, feedback post-task",
          chosen: true,
        },
      ],
      takeaway:
        "Quando un bug 'piccolo' è sentito a ogni sessione, non è un bug piccolo. Risolverlo una volta ritira una voce permanente dal backlog di supporto.",
    },
  ],

  "fred-uxr-platform": [
    {
      id: "fred-discovery",
      question: "Costruire prima l'MVP, o fare prima discovery research?",
      context:
        "Modalità founder. La tentazione di spedire qualcosa è enorme. Ma quindici anni passati a vedere team costruire la cosa sbagliata erano la lezione per cui l'azienda esisteva.",
      paths: [
        {
          label: "Costruire un MVP sottile, imparare dall'uso reale.",
          outcome:
            "Più rapido a un artefatto funzionante. Rischia di costruire per il founder-as-power-user, non per il ricercatore reale che deve convincere un VP scettico.",
          chosen: false,
        },
        {
          label: "Interviste JTBD con tre tipi di utente prima di qualunque codice.",
          outcome:
            "Ha fatto emergere l'insight core: la frammentazione è un problema di FIDUCIA, non un problema di tooling. Ha rimodellato la tesi del prodotto.",
          metric: "0 righe, 30 interviste",
          evidence: "Output di discovery research",
          chosen: true,
        },
      ],
      tension:
        "Gli investitori si aspettano velocità. La discovery sembra ritardo. La difesa è il lavoro stesso: ogni intervista ha prodotto un finding la cui scoperta post-launch sarebbe costata un trimestre di build.",
      takeaway:
        "Se il prodotto è ricerca, l'azienda deve fare la propria ricerca senza arrossire. Altrimenti la value proposition è solo parole.",
    },
    {
      id: "fred-ai-role",
      question: "L'AI è il prodotto, o l'acceleratore?",
      context:
        "2024 — ogni research tool correva per mettere 'AI-powered' in home page. La tentazione era posizionare l'AI come differenziante.",
      paths: [
        {
          label: "AI come prodotto. Sintesi magica. Black box.",
          outcome:
            "Il marketing vince. La fiducia del ricercatore crolla al primo output non verificabile. Esattamente la failure mode che il prodotto esiste per prevenire.",
          chosen: false,
        },
        {
          label: "La tracciabilità è il prodotto. L'AI è l'acceleratore, con citation link obbligatori.",
          outcome:
            "I ricercatori adottano la sintesi specificamente perché possono verificarla. Gli stakeholder adottano i report specificamente perché le raccomandazioni sono tracciabili.",
          metric: "capacità più valutata",
          evidence: "Survey di soddisfazione utente, post-launch",
          chosen: true,
        },
      ],
      takeaway:
        "Se stai costruendo il prodotto-fiducia, l'AI è un mezzo. Se te ne dimentichi, sei diventato una slot machine su cui i ricercatori non scommetteranno la propria reputazione.",
    },
    {
      id: "fred-cadence",
      question: "Roadmap-driven o continuous discovery?",
      context:
        "Il tempo del founder è finito. Una roadmap dà forma. La continuous discovery dà feedback. Entrambe insieme è duro.",
      paths: [
        {
          label: "Roadmap trimestrale, milestone fisse, ricerca occasionale.",
          outcome:
            "Ritmo di ship prevedibile. Alto rischio di derivare dal pain dell'utente reale a metà trimestre.",
          chosen: false,
        },
        {
          label: "Sessioni moderate bisettimanali, n=5, focalizzate su un'area. I finding alimentano lo sprint successivo.",
          outcome:
            "Il build è rimasto agganciato al pain dell'utente per tutto il primo anno. Nessuna 'pet feature' spedita solo sull'intuizione del founder.",
          metric: "26 cicli / anno",
          evidence: "Log della cadenza di discovery",
          chosen: true,
        },
      ],
      takeaway:
        "Le roadmap sono inventario; la discovery è feedback. Un founder che ha solo inventario spedisce il prodotto sbagliato in tempo.",
    },
    {
      id: "fred-build-vs-buy",
      question: "Integrare un tool di session-replay terzo, o costruire User Sphere in casa?",
      context:
        "L'analisi di sessione è la superficie dati più densa nel prodotto. Costruirla è caro. Integrare sembra rapido — finché non devi sovrapporre la tracciabilità di Fred al data model di qualcun altro.",
      paths: [
        {
          label: "Integrare un vendor di replay esistente, sovrapporre Fred sopra.",
          outcome:
            "Copertura iniziale rapida. La tracciabilità si sgretola al confine tra dati del vendor e modello di insight di Fred. La tesi di prodotto si rompe.",
          chosen: false,
        },
        {
          label: "Costruire User Sphere nativamente, con il data model progettato per la citation.",
          outcome:
            "Più lento, più duro, più caro. Ma ogni momento di sessione citato da Fred risolve a un URL Fred-owned — la promessa di tracciabilità regge end-to-end.",
          chosen: true,
        },
      ],
      tension:
        "Ogni argomento di integrazione è vero individualmente. Composti, corrodono la value proposition. Dire no a tutti insieme è stata la chiamata più dura.",
      takeaway:
        "Se il differenziante è la tracciabilità end-to-end, qualunque cosa rompa la catena è una non-opzione, per quanto economica appaia.",
    },
  ],
};
