// Erronka (unitate) bakoitzak bere terminoak ditu.
// Azken zerrendan (ERRONKAK) erronka berri bat gehitzeko, hemen gehitu terminoen array-a
// eta bete ERRONKAK-en sarrera.

const ERRONKA1_TERMS = [
  {
    slug: 'phishinga',
    number: 1,
    name: 'Phishinga',
    tag: 'Iruzur digitala',
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

const ERRONKA2_TERMS = [
  {
    slug: 'koobface',
    number: 1,
    name: 'Koobface',
    tag: 'Sare sozialeko worm-a',
    color: 'var(--amber)',
    cardIntro: 'Sare sozialen bidez hedatzen den zizarea: “bideo” esteka batek kontaktu guztiengana iristen da.',
    definition:
      'Sare sozialen bidez hedatzen zen zizare informatikoa (worm). 2008an antzeman zen lehen aldiz, eta bere izena Facebook hitzaren anagrama bat da. Hasiera batean Facebook eta MySpace sareetan zabaldu zen, baina laster beste plataforma batzuetara ere iritsi zen.',
    steps: [
      'Zizareak erabiltzaile baten kontua kutsatzen duenean, haren kontaktu guztiei mezu erakargarri bat bidaltzen die, esaterako: “Ikusi duzu bideo hau?”.',
      'Mezuko estekak bideo-orri itxurako webgune faltsu batera eramaten du jasotzailea. Han, bideoa ikusteko “Flash Player” eguneratu edo kodek bat instalatu behar dela esaten zaio.',
      'Eguneratze hori ez da legitimoa: malwarea da. Instalatu bezain pronto, ordenagailua kutsatuta geratzen da, eta zizarea kontaktuei mezuak bidaltzen hasten da biktimaren izenean, katea berriro abiaraziz.',
    ],
    uses: [
      'Ordenagailuak botnet baten parte bihurtzea.',
      'Klik-iruzurra egitea.',
      'Antibirus faltsuak saltzea.',
      'Datu pertsonalak lapurtzea.',
    ],
    example:
      'Lagun batek bideo “barregarri” baten esteka bidaltzen dizu mezu pribatu batean. Estekak bideoa ikusteko programa bat deskargatzeko eskatzen dizu. Deskargatzen baduzu, zure kontaktu guztiek mezu bera jasoko dute zure izenean.',
    quick: 'Bideoa ikusteko eguneratzea ez da inoiz legitimoa.',
    protect: [
      'Ez ireki ustekabeko estekarik.',
      'Ez instalatu programarik web orri batek eskatzen duelako.',
      'Softwarea iturri ofizialetatik eguneratu.',
    ],
  },
  {
    slug: 'botnet',
    number: 2,
    name: 'Botnet',
    tag: 'Gailu kutsatuen sarea',
    color: 'var(--indigo)',
    cardIntro: 'Urrutitik kontrolatzen diren gailu kutsatuen sarea: bakoitza “bot” edo “zonbi” bat da.',
    definition:
      'Botnet terminoa robot eta network hitzen laburbilketa da. Urrutitik kontrolatzen diren gailu kutsatuen sare bati deitzen zaio horrela. Sareko gailu bakoitza “bot” edo “zonbi” bat da, eta, normalean, haren jabeak ez daki bere gailua nork edo zertarako erabiltzen ari den.',
    steps: [
      'Malwarea ordenagailuetara, telefonoetara edo gauzen interneteko (IoT) gailuetara iristen da, hala nola kamera edo routerretara. Sarbide-bideak: phishinga, softwareko ahulezia ezagunak edo pasahitz ahulak.',
      'Gailu kutsatuak agintaritza-zerbitzari batekin konektatzen dira (Command & Control, C&C).',
      'Erasotzaileak (botmaster) zerbitzari horretatik aginduak igortzen dizkie bot guztiei aldi berean.',
    ],
    uses: [
      'DDoS erasoak: milaka gailuk batera eskaerak bidaltzen dizkiote zerbitzu bati, hura gainkargatu eta erortzera behartzeko.',
      'Spam eta phishing mezuen bidalketa masiboa.',
      'Datuen lapurreta: pasahitzak, banku-datuak eta abar.',
      'Kriptomonetak meatzaritzan lortzea, biktimen baliabideak erabiliz.',
      'Klik-iruzurra.',
    ],
    example:
      'Mirai (2016): IoT gailuak kutsatu zituen, eta Dyn enpresaren aurkako DDoS erasoa gauzatu zuen. Ondorioz, Twitter eta Netflix bezalako zerbitzu ezagunak ordu batzuetan eskuraezin geratu ziren. Emotet: beste malware batzuk banatzeko erabili zen; 2021ean nazioarteko operazio polizial batean desegin zuten. Conficker (2008): milioika Windows ordenagailu kutsatu zituen.',
    quick: 'Milaka gailu, agindu-emaile bakarra: botmaster-a.',
    protect: [
      'Gailuak eguneratuta mantendu.',
      'IoT gailuen lehenetsitako pasahitzak aldatu.',
      'Antibirusa eta suebakia erabili.',
      'Jatorri ezezaguneko eranskinak ez ireki.',
    ],
  },
  {
    slug: 'indar-gordineko-erasoa',
    number: 3,
    name: 'Indar gordineko erasoa',
    tag: 'Pasahitz-asmatzea',
    color: 'var(--green)',
    cardIntro: 'Konbinazio guztiak banan-banan probatzen dituen erasoa: ez du ahulezia teknikorik behar.',
    definition:
      'Pasahitz edo gako bat asmatzeko konbinazio posible guztiak banan-banan probatzean oinarritzen den erasoa. Ez du ahulezia teknikorik behar: nahikoa da denbora eta kalkulu-ahalmena izatea.',
    steps: [
      'Programa automatiko batek pasahitzak probatzen ditu sarbide-puntu batean (saio-hasierako orria, SSH, urruneko mahaigaina...) harik eta bat zuzena atera arte.',
      'Pasahitza zenbat eta laburragoa eta sinpleagoa izan, orduan eta azkarrago asmatzen da. Letra xehez soilik osatutako zortzi karaktereko pasahitzak 26⁸ konbinazio ditu (ia 208.000 milioi); maiuskulak, zenbakiak eta sinboloak dituen 14 karaktereko pasahitza, aldiz, ia ezinezkoa da indar gordinez asmatzea.',
      'Aldaerak: hiztegi-erasoa (pasahitz ohikoenen zerrenda), credential stuffing (filtrazioetan lapurtutako erabiltzaile-izen eta pasahitz bikoteak beste webgune batzuetan probatzea) eta password spraying (pasahitz arrunt bakarra kontu askotan, blokeoa saihesteko).',
    ],
    uses: [
      'Posta elektronikoa, sare sozialak edo zerbitzariak kontrolpean hartzea.',
      'WordPress administrazio-paneletara, Wi-Fi sareetara edo fitxategi zifratuetara sartzea.',
    ],
    example:
      'Bot batek WordPress webgune baten wp-login.php orrian “admin” erabiltzailearekin milaka pasahitz probatzen ditu. Interneten ireki-irekian dagoen SSH edo RDP zerbitzari batek egunero ehunka edo milaka saiakera jasotzen ditu automatikoki. Hainbat zerbitzutan pasahitz bera erabiltzen duen pertsona bat, filtrazio baten ondoren, kontu guztietan erasotua izan daiteke.',
    quick: 'Pasahitz luzea eta bakarra da defentsarik onena.',
    protect: [
      'Pasahitz luze eta bakarrak erabili (gutxienez 12-14 karaktere), pasahitz-kudeatzaile baten laguntzaz.',
      'Bi urratseko autentifikazioa (2FA) gaitu.',
      'Saiakera kopurua mugatu eta kontua aldi baterako blokeatu.',
      'CAPTCHA eta fail2ban bezalako tresnak erabili.',
      'Saihestu erabiltzaile-izen lehenetsiak (admin, root), eta ez utzi sarbide-puntuak irekita, beharrezkoa ez bada.',
    ],
  },
]

export const ERRONKAK = [
  {
    id: 1,
    label: 'Erronka 1',
    title: 'Segurtasun informatikoaren hiztegia: terminoak',
    ready: true,
    terms: ERRONKA1_TERMS,
  },
  {
    id: 2,
    label: 'Erronka 2',
    title: 'Segurtasun informatikoaren hiztegia: 2. unitatea',
    ready: true,
    terms: ERRONKA2_TERMS,
  },
]

// Termino guztiak, bere erronkaren zenbakiarekin (`unit`) lotuta
export const TERMS = ERRONKAK.flatMap((u) => u.terms.map((t) => ({ ...t, unit: u.id })))

export const getUnit = (id) => ERRONKAK.find((u) => u.id === id)
export const getTerm = (slug) => TERMS.find((t) => t.slug === slug)
export const termPath = (t) => `/erronka${t.unit}/${t.slug}`

export const getNeighbors = (slug) => {
  const term = getTerm(slug)
  const list = TERMS.filter((t) => t.unit === term.unit)
  const i = list.findIndex((t) => t.slug === slug)
  return {
    prev: i > 0 ? list[i - 1] : null,
    next: i < list.length - 1 ? list[i + 1] : null,
  }
}