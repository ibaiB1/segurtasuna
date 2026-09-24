// Erronka 1 — Segurtasun informatikoaren hiztegia: terminoak
// Gerora erronka gehiago gehituko dira (erronka 2, ...)

export const ERRONKAK = [
  {
    id: 1,
    label: 'Erronka 1',
    title: 'Segurtasun informatikoaren hiztegia: terminoak',
    ready: true,
  },
  {
    id: 2,
    label: 'Erronka 2',
    title: 'Laster...',
    ready: false,
  },
]

export const TERMS = [
  {
    slug: 'phishinga',
    number: 1,
    name: 'Phishinga',
    tag: 'Iruzur digitala',
    emoji: '🎣',
    color: 'var(--red)',
    cardIntro: 'Erasotzaileak erakunde fidagarri baten itxura hartzen du zure datuak lapurtzeko.',
    definition:
      'Iruzur-teknika bat, non erasotzaileak erakunde fidagarri baten itxura hartzen duen, erabiltzaileari pasahitzak, banku-datuak edo datu pertsonalak lortzeko.',
    steps: [
      'Erasotzaileak mezu bat bidaltzen du (posta elektronikoa, SMSa, WhatsAppa...) presa edo beldurra sortzen duen testuarekin.',
      'Mezuak esteka bat dakar, benetako webgune baten kopia den orri faltsu batera eramaten duena.',
      'Erabiltzaileak datuak sartzen ditu orri horretan, eta erasotzaileak jasotzen ditu.',
    ],
    example:
      'Zure bankuaren itxurako posta elektroniko bat jasotzen duzu: “Zure kontua blokeatuko da 24 ordutan. Egiaztatu zure datuak hemen”. Estekak bankuaren orriaren kopia perfektu batera eramaten zaitu, baina domeinua apur bat desberdina da (adibidez, banku-segurua.com banku.eus beharrean). Erabiltzaile-izena eta pasahitza sartzen badituzu, erasotzaileak eskuratzen ditu.',
    quick: 'Domeinu faltsuak ia berdinak dira: banku-segurua.com ≠ banku.eus',
  },
  {
    slug: 'birusak',
    number: 2,
    name: 'Birusak',
    tag: 'Malware zaharra',
    emoji: '🦠',
    color: 'var(--orange)',
    cardIntro: 'Kode maltzurra fitxategietan ezkutatuta: zuk irekitzen duzunean pizten da.',
    definition:
      'Beste programa edo fitxategi batzuetan txertatzen den kode maltzurra, erabiltzaileak jakin gabe exekutatzen dena. Hedatzeko “ostalari” bat behar du, biologiako birusek bezala.',
    steps: [
      'Erabiltzaileak fitxategi kutsatu bat irekitzen du (eranskin bat, deskargatutako programa bat, USB memoria bat...).',
      'Birusa exekutatzen da eta sistemako beste fitxategietara kopiatzen da.',
      'Kalteak eragiten ditu: fitxategiak hondatu edo ezabatu, sistema moteldu, edo ustekabeko mezuak erakutsi.',
    ],
    example:
      'CIH edo “Txernobil” birusa (1998). Windows ordenagailuetako fitxategiak kutsatzen zituen, eta data zehatz batean datuak ezabatzen zituen, baita zenbait ordenagailutan BIOSa hondatu ere, ekipoa erabilezin utziz.',
    quick: 'Ostalari bat behar du hedatzeko: ez da bakarrik mugitzen.',
  },
  {
    slug: 'troiarrak',
    number: 3,
    name: 'Troiarrak',
    tag: 'Malware engainagarria',
    emoji: '🐴',
    color: 'var(--purple)',
    cardIntro: 'Doako programa itxura duen malwarea — zuk berak instalatzen duzu.',
    definition:
      'Programa legitimo eta lagungarri itxuraz aurkezten den malwarea. Erabiltzaileak berak instalatzen du, benetako izaera ezagutzen ez duelako.',
    steps: [
      'Erabiltzaileak “doako programa” bat, joko piratatu bat edo eguneraketa faltsu bat deskargatzen du.',
      'Programak agindutako funtzioa bete dezake, baina atzeko planoan kode maltzurra exekutatzen da.',
      'Kode horrek beste malware batzuk instalatu ditzake, datuak lapurtu edo urruneko sarbidea ireki.',
      'Birusek ez bezala, troiarrak ez dira beren kabuz hedatzen: erabiltzailearen engainuan oinarritzen dira.',
    ],
    example:
      'Zeus (Zbot). Banku-troiar ezagun bat, posta-eranskin eta deskarga kutsatuen bidez zabaldua, erabiltzaileek banku-webguneetan sartzen zituzten datuak lapurtzen zituena.',
    quick: 'Ez hedatzen bere kabuz: erabiltzailearen engainuaren mende dago.',
  },
  {
    slug: 'backdoorrak',
    number: 4,
    name: 'Backdoorrak',
    tag: 'Sarbide ezkutua',
    emoji: '🚪',
    color: 'var(--teal)',
    cardIntro: 'Ate ezkutua zure sisteman: urrutitik sartu eta kontrolatzeko.',
    definition:
      'Sistema, aplikazio edo gailu baten autentifikazio normala saihesten duen sarbide ezkutua, urrutitik kontrola ahalbidetzen duena.',
    steps: [
      'Backdoorra sistemara sartzen da: erasotzaile batek instalatzen du (askotan troiar baten bidez), edo garatzaileek probetarako utzitako sarbide bat da, kendu gabea.',
      'Sarbide hori isilik geratzen da, erabiltzaileari ohartarazi gabe.',
      'Erasotzaileak, nahi duenean, sistemara berriro sartzen da: komandoak exekutatu, fitxategiak ikusi edo beste malware bat instalatu dezake.',
    ],
    example:
      'SUNBURST (2020). SolarWinds enpresaren software-eguneraketa legitimo batean ezkutatutako backdoor bat izan zen. Milaka erakunderen sareetan sartu zen, gobernu-erakundeak barne.',
    quick: 'Autentifikazio normala saltatu eta isilik geratzen da.',
  },
  {
    slug: 'spywarea',
    number: 5,
    name: 'Spywarea',
    tag: 'Zaintza softwarea',
    emoji: '🕵️',
    color: 'var(--blue)',
    cardIntro: 'Zure jarduera isilean erregistratzen du eta hirugarren bati bidaltzen dio.',
    definition:
      'Erabiltzailearen jarduera isilean kontrolatzen duen eta informazioa hirugarren bati bidaltzen dion software maltzurra.',
    steps: [
      'Beste software baten barruan, esteka maltzur baten bidez edo itxuraz legitimoa den aplikazio batean sartzen da.',
      'Atzeko planoan jarduera erregistratzen du: bisitatutako webguneak, teklatuko sakatzeak, mezuak, kokapena, mikrofonoa edo kamera.',
      'Bildutako informazioa urruneko zerbitzari batera bidaltzen du.',
    ],
    example:
      'Pegasus. Telefono mugikorretan instalatzen den spyware aurreratua. Mezuak, deiak, kokapena, mikrofonoa eta kamera kontrolatzeko gai da, eta kasu batzuetan erabiltzaileak ezer egin gabe ere infektatu daiteke.',
    quick: 'Teklatuko sakatzeak, kokapena, mikrofonoa... dena erregistratzen du.',
  },
  {
    slug: 'stealerrak',
    number: 6,
    name: 'Stealerrak',
    tag: 'Informazio-lapurrak',
    emoji: '💳',
    color: 'var(--pink)',
    cardIntro: 'Pasahitzak, cookieak eta kriptomoneta-zorroak lapurtzen ditu.',
    definition:
      'Biktimaren gailutik informazio sentikorra lapurtzeko diseinatutako malwarea: pasahitzak, cookieak, kriptomoneta-zorroak, banku-datuak...',
    steps: [
      'Normalean troiar gisa edo phishing bidez sartzen da (adibidez, joko piratatu bat edo eranskin bat).',
      'Azkar exekutatzen da: nabigatzailean gordetako pasahitzak, cookieak, saio-tokenak eta kriptomoneta-zorroak bilatzen ditu.',
      'Datuak paketatu eta erasotzailearen zerbitzarira bidaltzen ditu, askotan arrastorik utzi gabe. Lapurtutako datuak merkatu ilegaletan saltzen dira.',
    ],
    example:
      'RedLine Stealer. Doako software edo joko piratatu gisa ezkutatuta hedatzen zen. Nabigatzailean gordetako pasahitzak eta ordainketa-txartelak lapurtzen zituen, eta datu horiek merkatu ilegaletan saltzen ziren.',
    quick: 'Arrastorik utzi gabe: datuak merkatu ilegaletan saltzen dira.',
  },
]

export const getTerm = (slug) => TERMS.find((t) => t.slug === slug)
export const getNeighbors = (slug) => {
  const i = TERMS.findIndex((t) => t.slug === slug)
  return {
    prev: i > 0 ? TERMS[i - 1] : null,
    next: i < TERMS.length - 1 ? TERMS[i + 1] : null,
  }
}