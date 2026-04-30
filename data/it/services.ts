import type { Service, ServiceProcess } from "@/data/services";

export const services: Service[] = [
  {
    index: "01",
    slug: "product-validation",
    title: "Validazione di prodotto e idea",
    tagline:
      "Validazione basata sull'evidenza per ridurre l'ambiguità fin dall'inizio e procedere con sicurezza.",
    description:
      "Prima di costruire, devi sapere che stai costruendo la cosa giusta. Progetto e conduco studi di validazione strutturati — dall'inquadramento del problema al test del prototipo — che producono evidenze su cui puoi agire e che puoi difendere di fronte agli stakeholder. La validazione non è un singolo test; è una sequenza di esperimenti deliberatamente progettati che riducono progressivamente il rischio e affinano il brief prima che venga scritto un singolo riga di codice in produzione.",
    whatIsIncluded: [
      "Workshop di inquadramento del problema e mappatura delle assunzioni",
      "Gerarchia delle ipotesi e identificazione delle assunzioni più rischiose",
      "Progettazione di concetti e prototipi come stimoli di test",
      "Sessioni moderate di usability e desirability testing",
      "Survey di validazione quantitativa dove applicabile",
      "Report di sintesi con risultati classificati per evidenza",
      "Raccomandazione go/no-go con razionale a supporto",
      "Presentazione dei risultati pronta per gli stakeholder",
    ],
    whoItsFor:
      "Fondatori, product lead e team di innovazione che devono giustificare un investimento o correggere la rotta prima di impegnarsi in un ciclo di sviluppo completo. Particolarmente utile quando si entra in un nuovo mercato, si lancia una nuova linea di prodotto o quando la convinzione interna è alta ma le evidenze esterne sono scarse.",
    process: [
      {
        step: "Inquadrare",
        description:
          "Ci allineiamo sullo spazio del problema, identifichiamo cosa è assunto rispetto a cosa è noto, e definiamo come appare una validazione di successo.",
      },
      {
        step: "Ipotizzare",
        description:
          "Mappa le tue assunzioni in una gerarchia, segnalo le più rischiose, e progetto esperimenti che le mettano alla prova — non che le confermino.",
      },
      {
        step: "Costruire stimoli",
        description:
          "Prototipi, concept board o guide di discussione vengono creati alla fedeltà minima necessaria per generare un segnale affidabile.",
      },
      {
        step: "Testare",
        description:
          "Le sessioni vengono condotte con partecipanti reali che corrispondono al tuo profilo utente target. Facilito e osservo; nulla viene esternalizzato.",
      },
      {
        step: "Sintetizzare",
        description:
          "I dati grezzi diventano risultati strutturati, pattern e insight classificati per evidenza — non un elenco di citazioni.",
      },
      {
        step: "Rendicontare",
        description:
          "Un output chiaro e difendibile su cui il team e gli stakeholder possono agire, con raccomandazioni esplicite e i relativi livelli di confidenza.",
      },
    ],
  },
  {
    index: "02",
    slug: "user-research",
    title: "Ricerca utente",
    tagline:
      "Metodi qualitativi e quantitativi che fanno emergere i bisogni reali dietro le preferenze dichiarate.",
    description:
      "Ricerca qualitativa e quantitativa che porta alla superficie i bisogni, i modelli mentali e i comportamenti dietro ciò che le persone dicono. Progetto studi, recluto partecipanti, facilito sessioni e sintetizzo i risultati in output pronti per le decisioni. Una buona ricerca non si limita a descrivere gli utenti — dice perché fanno quello che fanno e cosa significa per il tuo prodotto o servizio.",
    whatIsIncluded: [
      "Strategia di ricerca e progettazione dello studio",
      "Progettazione dello screener e reclutamento dei partecipanti",
      "Facilitazione di interviste e sessioni di usability",
      "Studi diaristici e osservazione longitudinale",
      "Progettazione di survey e analisi quantitativa",
      "Affinity mapping e sintesi tematica",
      "Sviluppo di personas e modelli mentali",
      "Repository di ricerca e documentazione degli insight",
    ],
    whoItsFor:
      "Team di prodotto, team di design e organizzazioni che devono passare dalle assunzioni interne all'evidenza esterna. Particolarmente utile prima di grandi scommesse di prodotto, quando si entra in nuovi segmenti di clienti, o quando le metriche esistenti segnalano un problema ma non ne spiegano il perché.",
    process: [
      {
        step: "Definire l'ambito",
        description:
          "Definiamo le domande di ricerca, le decisioni che devono informare, e i metodi più adatti a rispondere entro i tuoi vincoli.",
      },
      {
        step: "Reclutare",
        description:
          "Gli screener vengono scritti per trovare partecipanti che corrispondano davvero al tuo profilo target — non chi è più facile da raggiungere.",
      },
      {
        step: "Condurre",
        description:
          "Le sessioni vengono condotte con rigore: abbastanza strutturate da essere comparabili, abbastanza flessibili da seguire ciò che conta.",
      },
      {
        step: "Analizzare",
        description:
          "I dati vengono codificati e sintetizzati con metodi sistematici. I pattern vengono identificati trasversalmente ai partecipanti, non selezionati dagli outlier.",
      },
      {
        step: "Consegnare",
        description:
          "I risultati vengono presentati nel formato più utile per il tuo team: workshop, report scritto, slide deck o voce nel repository di ricerca.",
      },
    ],
  },
  {
    index: "03",
    slug: "ux-design",
    title: "User experience design",
    tagline:
      "Design dell'esperienza end-to-end radicato nel pensiero sistemico e nell'insight comportamentale.",
    description:
      "Design dell'esperienza end-to-end fondato sul pensiero sistemico e sul reale insight utente. Dall'architettura dell'informazione e dal design dell'interazione fino alle specifiche finali — sempre tracciabile alle evidenze, mai decorativo. Ogni decisione di design è un'ipotesi sul comportamento degli utenti; il mio compito è rendere queste ipotesi esplicite e testarle prima che diventino costose da cambiare.",
    whatIsIncluded: [
      "Architettura dell'informazione e design della navigazione",
      "User flow e mappatura dei task flow",
      "Wireframing ed esplorazione concettuale a bassa fedeltà",
      "Design di prototipi interattivi",
      "UI design ad alta fedeltà e specifica dei componenti",
      "Contributo e documentazione del design system",
      "Test di usabilità integrati nei cicli di design",
      "Handoff agli sviluppatori e supporto all'implementazione",
    ],
    whoItsFor:
      "Team di prodotto che costruiscono o ridisegnano prodotti digitali che necessitano di un design fondato sull'evidenza utente, difendibile agli stakeholder e preciso abbastanza per i developer da implementare senza ambiguità. Utile anche per le organizzazioni dove design e ricerca hanno tradizionalmente operato come binari separati.",
    process: [
      {
        step: "Scoprire",
        description:
          "Ricerca utente, interviste agli stakeholder e audit dell'esperienza esistente per stabilire una baseline fattuale.",
      },
      {
        step: "Definire",
        description:
          "Problem statement, principi di design e criteri di successo che mantengono il lavoro focalizzato e valutabile.",
      },
      {
        step: "Esplorare",
        description:
          "Più direzioni divergenti esplorate a bassa fedeltà prima di convergere su un approccio — evitando l'impegno prematuro.",
      },
      {
        step: "Raffinare",
        description:
          "Cicli iterativi di prototipazione e testing che affinano il design rispetto al comportamento reale degli utenti.",
      },
      {
        step: "Specificare",
        description:
          "I design finali vengono documentati con il dettaglio necessario agli ingegneri — stati, edge case, interazioni e razionale delle decisioni.",
      },
    ],
  },
  {
    index: "04",
    slug: "service-design",
    title: "Service design",
    tagline:
      "Allineare persone, processi e touchpoint affinché il backstage supporti il frontstage.",
    description:
      "Mappare l'intero sistema: customer journey, service blueprint, processi di backstage e le persone che li gestiscono. Aiuto le organizzazioni ad allineare ciò che promettono in prima linea con ciò che riescono effettivamente a erogare dietro le quinte. La maggior parte dei fallimenti dei servizi non accade perché il design orientato al cliente era sbagliato, ma perché era stato progettato senza capire cosa avrebbe richiesto all'organizzazione per sostenerlo nel tempo.",
    whatIsIncluded: [
      "Mappatura del customer journey nello stato attuale",
      "Progettazione del service blueprint (frontstage e backstage)",
      "Interviste agli stakeholder e al personale",
      "Audit dei touchpoint e analisi dei gap esperenziali",
      "Progettazione del journey e del blueprint nello stato futuro",
      "Prototipazione e validazione del concept di servizio",
      "Roadmap di implementazione con iniziative prioritizzate",
      "Workshop di allineamento facilitati con team cross-funzionali",
    ],
    whoItsFor:
      "Organizzazioni che ridisegnano servizi rivolti ai clienti, che scalano le operazioni, o che riscontrano un gap tra l'esperienza che intendono erogare e quella che i clienti effettivamente ricevono. Particolarmente efficace in ambienti multicanale — dove i touchpoint digitali, fisici e umani devono funzionare come un insieme coerente.",
    process: [
      {
        step: "Immergersi",
        description:
          "Ricerca con i clienti, interviste al personale e osservazione del servizio in azione — sia il fronte che il retro.",
      },
      {
        step: "Mappare",
        description:
          "Lo stato attuale viene documentato come blueprint: ogni touchpoint, fase del processo, attore e sistema di supporto reso visibile.",
      },
      {
        step: "Diagnosticare",
        description:
          "Punti di attrito, disallineamenti e gap tra intenzione ed esperienza vengono identificati con evidenze a supporto.",
      },
      {
        step: "Progettare",
        description:
          "Blueprint e concept di servizio dello stato futuro vengono sviluppati e validati sia con i clienti che con il personale.",
      },
      {
        step: "Pianificare",
        description:
          "Viene costruita una roadmap prioritizzata che sia onesta su ciò che l'organizzazione può effettivamente implementare e in quale sequenza.",
      },
    ],
  },
  {
    index: "05",
    slug: "process-optimisation",
    title: "Ottimizzazione dei processi aziendali",
    tagline:
      "Mappatura e riprogettazione dei flussi di lavoro interni per ridurre le frizioni e portare valore più rapidamente.",
    description:
      "Identificare le frizioni, le ridondanze e i disallineamenti nei flussi di lavoro interni — e poi ridisegnarli affinché i team si muovano più velocemente e il valore raggiunga i clienti prima. Particolarmente efficace all'intersezione tra operazioni e prodotto. La maggior parte dei problemi di processo sembrano problemi di persone finché non mappi il sistema; il collo di bottiglia è quasi sempre strutturale, non motivazionale.",
    whatIsIncluded: [
      "Mappatura e documentazione del processo nello stato attuale",
      "Interviste agli stakeholder e agli operatori",
      "Analisi di sprechi, ritardi e duplicazioni",
      "Identificazione della causa radice e prioritizzazione",
      "Progettazione del processo nello stato futuro e modellazione degli scenari",
      "Valutazione dell'impatto del cambiamento",
      "Supporto all'implementazione e pianificazione della transizione",
      "Framework di misurazione per tracciare i miglioramenti",
    ],
    whoItsFor:
      "Responsabili delle operazioni, product manager e fondatori alle prese con processi cresciuti organicamente che ora creano attrito — sia per i clienti, sia per i team interni, sia per entrambi. Particolarmente utile quando il team sta crescendo e il coordinamento informale sta mostrando i suoi limiti.",
    process: [
      {
        step: "Osservare",
        description:
          "I processi vengono osservati nella pratica, non solo descritti in teoria. Le interviste e i walkthrough rivelano come il lavoro si muove davvero.",
      },
      {
        step: "Mappare",
        description:
          "I flussi dello stato attuale vengono documentati a un livello di dettaglio che rende visibili handoff, decisioni e dipendenze.",
      },
      {
        step: "Analizzare",
        description:
          "Ritardi, rilavorazioni e ridondanze vengono quantificati dove possibile. Le cause radice vengono separate dai sintomi.",
      },
      {
        step: "Ridisegnare",
        description:
          "I processi dello stato futuro vengono progettati in modo collaborativo con le persone che li gestiscono — la ownership è fondamentale per l'adozione.",
      },
      {
        step: "Implementare",
        description:
          "Le modifiche vengono introdotte con un chiaro piano di transizione, e i criteri di successo vengono definiti prima che il lavoro inizi.",
      },
    ],
  },
  {
    index: "06",
    slug: "corporate-training",
    title: "Formazione aziendale",
    tagline:
      "Programmi pratici su ricerca utente e validazione per team di prodotto e aziendali.",
    description:
      "Programmi pratici su ricerca utente e validazione di prodotto per team di prodotto, design e aziendali. Costruiti attorno a metodi reali, non slide — i partecipanti escono con competenze che possono applicare il giorno successivo. Una formazione che non cambia il modo in cui le persone lavorano è solo una giornata fuori ufficio. Ogni programma è progettato attorno ai problemi reali che il tuo team sta cercando di risolvere, usando i tuoi progetti reali come materiale di apprendimento.",
    whatIsIncluded: [
      "Analisi dei bisogni e definizione dell'ambito del programma",
      "Progettazione del curriculum su misura per il contesto del tuo team",
      "Formati mezza giornata, giornata intera e multi-sessione",
      "Pratica live con metodi reali su problemi reali",
      "Sessioni facilitate con momenti di riflessione e coaching",
      "Materiali di riferimento e template dei metodi",
      "Supporto di follow-up per applicare l'apprendimento su progetti live",
      "Misurazione del trasferimento dell'apprendimento (opzionale)",
    ],
    whoItsFor:
      "Team di prodotto, design e aziendali che devono costruire una capacità interna di ricerca e validazione. Particolarmente efficace per le organizzazioni che hanno storicamente fatto affidamento su agenzie esterne per il lavoro di insight e vogliono internalizzare quella capacità.",
    process: [
      {
        step: "Valutare",
        description:
          "Identifichiamo cosa il team già sa, quali gap esistono e quale capacità devono sviluppare per raggiungere i loro obiettivi.",
      },
      {
        step: "Progettare",
        description:
          "Viene costruito un programma attorno al lavoro reale del tuo team — non un curriculum generico erogato in modo standardizzato.",
      },
      {
        step: "Erogare",
        description:
          "Le sessioni sono pratiche: i partecipanti praticano i metodi su problemi reali, non scenari ipotetici.",
      },
      {
        step: "Applicare",
        description:
          "L'apprendimento viene consolidato attraverso il supporto di follow-up mentre i partecipanti applicano le nuove competenze su progetti live.",
      },
      {
        step: "Misurare",
        description:
          "Dove richiesto, tracciamo se l'apprendimento ha cambiato il modo in cui il team lavora — non solo ciò che sanno recitare.",
      },
    ],
  },
  {
    index: "07",
    slug: "fractional-cxo",
    title: "CXO Fractional",
    tagline:
      "Leadership senior sulla customer experience su base fractional — dalla strategia all'esecuzione.",
    description:
      "Leadership senior sulla customer experience senza l'assunzione a tempo pieno. Mi integro con il tuo team di leadership per definire la strategia CX, costruire la capacità di ricerca, definire gli standard e guidare le iniziative dalla pianificazione all'esecuzione. La maggior parte delle organizzazioni in fase di crescita necessita di qualcuno che possa operare a livello di board sulla strategia CX e a livello di team sull'esecuzione — il modello fractional significa che ottieni entrambi senza l'overhead di un'assunzione executive a tempo pieno.",
    whatIsIncluded: [
      "Sviluppo della strategia CX e allineamento con gli obiettivi aziendali",
      "Valutazione della capacità di ricerca e piano di sviluppo",
      "Hiring, onboarding e mentoring di ricercatori e designer interni",
      "Progettazione del framework di standard e governance CX",
      "Progettazione e implementazione del programma Voice of Customer",
      "Workshop di allineamento cross-funzionale",
      "Rendicontazione a livello di board e comunicazione con gli stakeholder",
      "Advisory continuativa man mano che l'organizzazione evolve",
    ],
    whoItsFor:
      "Scale-up e aziende consolidate che necessitano di leadership CX senior ma non sono ancora alla scala — o non nel momento giusto — per giustificare un'assunzione executive a tempo pieno. Prezioso anche per le organizzazioni in fase di trasformazione che necessitano di una guida esperta dall'interno mentre vengono costruite le capacità permanenti.",
    process: [
      {
        step: "Diagnosticare",
        description:
          "Una valutazione strutturata della tua attuale maturità CX, capacità, processi e gap — con evidenze a supporto.",
      },
      {
        step: "Allineare",
        description:
          "La strategia CX viene sviluppata in relazione agli obiettivi aziendali, non come binario parallelo. L'allineamento della leadership viene prima.",
      },
      {
        step: "Costruire",
        description:
          "Capacità, standard e processi vengono costruiti in modo incrementale — con il team, non consegnati come documento di handover.",
      },
      {
        step: "Guidare",
        description:
          "Leadership embedded continuativa: presente nei forum giusti, visibile agli stakeholder giusti, a guidare le decisioni giuste.",
      },
      {
        step: "Transizionare",
        description:
          "Un piano chiaro per internalizzare ciò che è stato costruito — affinché l'organizzazione non dipenda indefinitamente dall'accordo fractional.",
      },
    ],
  },
];

export { type Service, type ServiceProcess };
