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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Pasahitza lapurtuta, erasotzaileak zure posta eta zerbitzuetako datuak ikus ditzake.' },
      { label: 'Osotasuna', risk: true, text: 'Kontuan sartu ondoren, mezuak edo ordainketa-datuak alda ditzake.' },
      { label: 'Erabilgarritasuna', risk: false, text: 'Zerbitzua abian dago; erasoak ez du ezer gelditzen.' },
      { label: 'Autentikazioa', risk: true, text: 'Sistemak erasotzailea erabiltzaile legitimo gisa onartzen du.' },
      { label: 'Ez-arbuiatzea', risk: true, text: 'Egindako ekintzak zure izenean geratzen dira, eta zaila da ukatzea.' },
    ],
    conclusion: 'Phishinga giza engainuan oinarritzen da: mezu batek presa eta beldurra sortzen badu, geldi zaitez eta egiaztatu beste kanal batetik.',
    opinion: 'Phishing mezu bat ikusten dudanean, lehenengo gauza estekaren domeinua begiratzea da. Presarik badago, ez dut klikatzen; zuzenean deitzen diot bankuari.',
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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Fitxategiak irakurri eta kopiatu ditzake, datu pribatuak barne.' },
      { label: 'Osotasuna', risk: true, text: 'Fitxategiak kaltetu edo aldatu ditzake, batzuetan ezin konpondu.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Sistema moteldu edo erabat blokea dezake.' },
      { label: 'Autentikazioa', risk: false, text: 'Ez du pasahitzik apurtzen; sarbide legitimoa erabiltzen du.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Kalteak ikusgarriak dira; ez da arazo nagusia.' },
    ],
    conclusion: 'Birusek ostalari bat behar dute. Fitxategi ezezagunak irekitzeko orduan kontuz ibili, batez ere USB memorietan.',
    opinion: 'USB memoria batetik birus bat jaso nuen. Ordutik, memoriak lehenengo eskaneatzen ditut, beti.',
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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Atzeko planoan zure fitxategiak eta pasahitzak bidal ditzake.' },
      { label: 'Osotasuna', risk: true, text: 'Instalatutako programak sistemaren ezarpenak alda ditzake.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Beste malware bat instalatu eta baliabideak xurgatuz zerbitzua moteldu dezake.' },
      { label: 'Autentikazioa', risk: true, text: 'Erasotzaileak sarbide bat utz dezake, saioa berriro hasteko.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Instalazioa zuk onartu duzu, eta horrek zer gertatu den argitzen du.' },
    ],
    conclusion: 'Troiarrak erabiltzailearen konfiantzaren mende daude. Ezezaguna den programa bat instalatu aurretik, nork egin duen eta zertarako den begiratu.',
    opinion: 'Joko doakoak deskargatzea zoragarria iruditzen zitzaidan, baina askotan doakoak beste modu batera ordaintzen dira. Orain, ordaindutako aplikazioa nahiago dut.',
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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Sistemara sartzen den erasotzaileak fitxategi guztiak ikus ditzake.' },
      { label: 'Osotasuna', risk: true, text: 'Kodea exekutatu eta datuak alda ditzake.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Zerbitzua gelditu edo moteldu dezake nahi duenean.' },
      { label: 'Autentikazioa', risk: true, text: 'Pasahitzik gabe sartzen da, autentifikazio arrunta saltatuz.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Sarrerak ezkutatu daitezke, eta horregatik zaila da jarraitzea.' },
    ],
    conclusion: 'Backdoorrak isilik daude, eta horregatik dira hain arriskutsuak. Sistemaren aldaketak eta portu irekiak kontrolatu behar dira.',
    opinion: 'Zerbitzari batean portu ustekabeko bat ikusi nuen. Ez nuen ezer aldatu, baina kontrolatu eta itxi egin nuen.',
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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Mezuak, deiak eta kokapena erregistratu eta kanpora bidal ditzake.' },
      { label: 'Osotasuna', risk: false, text: 'Ez ditu datuak aldatzen; zaintzea da bere helburua.' },
      { label: 'Erabilgarritasuna', risk: false, text: 'Gailua normal dabil, erabiltzaileak ez du ezer nabaritzen.' },
      { label: 'Autentikazioa', risk: false, text: 'Ez du sarbiderik lortzen; jarduera bakarrik kopiatzen du.' },
      { label: 'Ez-arbuiatzea', risk: true, text: 'Kanpora bidalitako datuak ezin dira berreskuratu.' },
    ],
    conclusion: 'Spywareak isilik lan egiten du. Aplikazioek eskatzen dituzten baimenak arretaz begiratu, eta ez eman zergatik behar duten ulertzen ez duzunik.',
    opinion: 'Linterna aplikazio batek kontaktuak eta kokapena eskatu zidan. Ez nion baimenik eman, zergatik behar zuen ulertzen ez nuelako.',
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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Pasahitzak, cookieak eta kriptomoneta-zorroak lapurtzen ditu.' },
      { label: 'Osotasuna', risk: false, text: 'Ez ditu datuak aldatzen; kopiak egiten ditu.' },
      { label: 'Erabilgarritasuna', risk: false, text: 'Zerbitzuak normal jarraitzen du; ez da ezer nabarmentzen.' },
      { label: 'Autentikazioa', risk: true, text: 'Saio-tokenak lapurtuta, pasahitzik gabe sar daiteke kontuetara.' },
      { label: 'Ez-arbuiatzea', risk: true, text: 'Datuak merkatu ilegaletan saltzen dira, eta jatorria ezkutatzen da.' },
    ],
    conclusion: 'Stealerrek kontuak lapur ditzakete. Pasahitz bakarra eta bi urratseko autentifikazioa (2FA) dira defentsarik onena.',
    opinion: 'Nabigatzailean pasahitzak gordetzen ditudan aldiro galdetzen diot neure buruari ea segurua den. Azkenean, pasahitz-kudeatzaile bat erabiltzea erabaki nuen.',
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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Kontaktuen datuak eta saioaren informazioa lapurtzen ditu.' },
      { label: 'Osotasuna', risk: true, text: 'Mezuak zure izenean bidaltzen ditu, eta kontuaren ezarpenak alda ditzake.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Gailuaren baliabideak xurgatzen ditu eta klik-iruzurra egiten du.' },
      { label: 'Autentikazioa', risk: true, text: 'Zure identitatea erabiliz jarduten du, zu bezala agertuz.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Mezuak zure kontutik ateratzen dira, eta argi dago zure kontua kutsatuta dagoela.' },
    ],
    conclusion: 'Sare sozialeko estekak ere egiaztatu behar dira, lagun batek bidalitakoak ere. Mezu bat ustekabekoa bada, galdetu lagunari beste kanal batetik.',
    opinion: 'Lagun batek bideo bat bidali zidan eta programa bat instalatzeko eskatu zidan. Ez nuen egin, eta lagunari galdetu nion; bere kontua kutsatuta zegoen.',
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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Botmasterrak gailuetatik datuak bil ditzake, pasahitzak barne.' },
      { label: 'Osotasuna', risk: true, text: 'Gailuak beste helburu batzuetarako erabil daitezke, eta haien ezarpenak alda.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Milaka gailuk batera zerbitzu bat gainkargatu dezakete (DDoS).' },
      { label: 'Autentikazioa', risk: true, text: 'Gailu kutsatuak erabiltzaile legitimo gisa agertzen dira zerbitzarien aurrean.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Erasoa gailu askotan banatuta dago, eta horrek jatorria jarraitzea zailtzen du.' },
    ],
    conclusion: 'Botnetak gailu xumeetatik sortzen dira. Gailuak eguneratuta eta pasahitz sendoekin mantendu, batez ere routerrak eta kamerak.',
    opinion: 'Nire routerreko pasahitz lehenetsia ez nuen aldatu. Orain gailu berri bat instalatzen dudanean, lehenengo gauza pasahitza aldatzea da.',
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
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Pasahitza asmatuz gero, kontuko datu guztiak eskura daitezke.' },
      { label: 'Osotasuna', risk: true, text: 'Kontua kontrolatuta, datuak alda daitezke.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Saiakera asko egiteak zerbitzua moteldu edo blokea dezake.' },
      { label: 'Autentikazioa', risk: true, text: 'Pasahitza asmatuta, sistemak erasotzailea onartzen du.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Saiakerak logetan gelditzen dira, eta horrek jatorria aztertzen lagun dezake.' },
    ],
    conclusion: 'Pasahitz luze eta bakarrek eta bi urratseko autentifikazioak (2FA) indar gordinezko erasoen aurka babesten gaituzte.',
    opinion: 'Pasahitz bera hainbat zerbitzutan erabiltzen nuen. Filtrazio baten ondoren, guztiak aldatu nituen eta pasahitz-kudeatzailea erabiltzen hasi nintzen.',
    protect: [
      'Pasahitz luze eta bakarrak erabili (gutxienez 12-14 karaktere), pasahitz-kudeatzaile baten laguntzaz.',
      'Bi urratseko autentifikazioa (2FA) gaitu.',
      'Saiakera kopurua mugatu eta kontua aldi baterako blokeatu.',
      'CAPTCHA eta fail2ban bezalako tresnak erabili.',
      'Saihestu erabiltzaile-izen lehenetsiak (admin, root), eta ez utzi sarbide-puntuak irekita, beharrezkoa ez bada.',
    ],
  },
]

const ERRONKA3_TERMS = [
  {
    slug: 'aktiboak-atzeko-ateak',
    number: 1,
    name: 'Atzeko ateak',
    tag: 'Sarbide isila',
    color: 'var(--teal)',
    cardIntro: 'Sistemara berriro sartzeko bide ezkutua: detektatzeko zailenetako bat.',
    definition:
      'Sistema batera itzultzeko bide ezkutua. Erasotzaileak lehen sarbidea nola lortu zuen ahaztuta ere, bide horretatik berriro sar daiteke. Ez du alarmarik sortzen, eta horregatik da hain zaila detektatzea.',
    steps: [
      'Sistema kutsatzen da (adibidez, troiar baten bidez) eta sarbide ezkutu bat instalatzen da.',
      'Sarbide hori zerbitzu edo prozesu normal baten barruan ezkutatzen da.',
      'Erasotzaileak nahi duenean, bide horretatik sartzen da, pasahitzik gabe edo gako ezkutu baten bidez.',
    ],
    uses: [
      'Sisteman sarbidea mantentzea, denbora luzez.',
      'Datuak kanpora ateratzea, ohartarazi gabe.',
    ],
    example:
      'Adibide hipotetikoa: zerbitzari batean baimendutako gakoen zerrendan gako bat agertzen da, inork instalatu ez duena. Hilabetez erabili izan da, eta ez da inoiz ohartu.',
    quick: 'Autentifikazioa saltatzen du, eta isilik geratzen da.',
    protect: [
      'Baimendutako gakoak eta erabiltzaileak aldizka berrikusi.',
      'Sarbide-puntu bakoitza beharrezkoa ote den galdetu.',
    ],
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Sisteman dauden datuak irakur daitezke, erasotzaileak nahi duenean.' },
      { label: 'Osotasuna', risk: true, text: 'Sistemaren ezarpenak eta kodea alda daitezke, isilik.' },
      { label: 'Erabilgarritasuna', risk: false, text: 'Zerbitzua normal dabil; horregatik ez da ezer nabarmentzen.' },
      { label: 'Autentikazioa', risk: true, text: 'Pasahitzik gabe sartzen da, autentifikazio arrunta saltatuz.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Sarrerak logetan ezkutatu daitezke, baina batzuetan aztertu daitezke.' },
    ],
    conclusion: 'Atzeko atea aurkitzeko, sistemaren gakoak, zerbitzuak eta sarrerak aldizka berrikusi behar dira. Ez nahikoa da antibirusa.',
    opinion: 'Zerbitzari txiki bat kudeatzen nuenean ez nekien zein gako zeuden baimenduta. Orain hilero begiratzen diot.',
  },
  {
    slug: 'aktiboak-botnetak',
    number: 2,
    name: 'Botnetak',
    tag: 'Kontrol-zerbitzaria',
    color: 'var(--blue)',
    cardIntro: 'Gailu kutsatuen sarea: kontrol-zerbitzaria kentzen bada, sarea isiltzen da.',
    definition:
      'Urruneko kontrol-zerbitzari baten mende dauden gailu kutsatuen sarea. Sarea gelditzeko, nahikoa da kontrol-zerbitzaria blokeatzea. Horregatik, erasotzaileek kontrol-bide ugari erabiltzen dituzte.',
    steps: [
      'Gailuak kutsatzen dira (phishinga, pasahitz ahulak edo software zaharra).',
      'Gailuak kontrol-zerbitzari batekin konektatzen dira, eta haien aginduak jasotzen dituzte.',
      'Erasotzaileak agindu bat bidaltzen du, eta gailu guztiek batera exekutatzen dute.',
    ],
    uses: [
      'Zerbitzu bati gainkarga egitea (DDoS).',
      'Spam mezuen bidalketa masiboa.',
    ],
    example:
      'Adibide hipotetikoa: kamera kutsatuek webgune bati eskaera berdina bidaltzen diote aldi berean, eta zerbitzua erori egiten da.',
    quick: 'Kontrol-zerbitzaria kendu, eta sarea isiltzen da.',
    protect: [
      'Gailu guztien softwarea eta firmwarea eguneratuta izan.',
      'Lehenetsitako pasahitzak aldatu.',
      'Sarearen trafikoa aldizka begiratu, ohiko ez den jarduera bilatzeko.',
    ],
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Gailuetatik datuak bil daitezke, batez ere pasahitzak.' },
      { label: 'Osotasuna', risk: false, text: 'Datuak ez dira aldatzen; gailuak erabiltzen dira.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Zerbitzu bat eskuraezin utz dezake, gainkargaren bidez.' },
      { label: 'Autentikazioa', risk: true, text: 'Gailu kutsatuak erabiltzaile legitimo gisa agertzen dira.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Erasoa gailu askotatik dator, eta horregatik jatorria zaila da jarraitzea.' },
    ],
    conclusion: 'Botnetetatik babesteko, gailuak eguneratuta eta pasahitz sendoekin mantendu, eta sarearen trafikoa kontrolatu.',
    opinion: 'Nire etxeko kamera zaharrak pasahitz lehenetsia zuen. Ordutik, gailu guztien softwarea eguneratzen dut.',
  },
  {
    slug: 'aktiboak-harrak',
    number: 3,
    name: 'Harrak',
    tag: 'Autohedapena',
    color: 'var(--orange)',
    cardIntro: 'Erabiltzailerik behar gabe, sarean zehar bere kopia zabaltzen duen malwarea.',
    definition:
      'Bere kabuz hedatzen den malwarea. Gailu batean exekutatzen da, sare bereko beste gailuak bilatzen ditu eta kopia bat egiten du bakoitzean. Ez du fitxategirik irekitzea behar, sarea bera baita bidea.',
    steps: [
      'Gailu batean exekutatzen da, ahulezia baten bidez (software zaharra edo sarbide irekia).',
      'Sare bereko beste gailuak bilatzen ditu, eta bakoitzean kopia bat egiten du.',
      'Kopia bakoitzak prozesu bera errepikatzen du, eta hedapena azkar handitzen da.',
    ],
    uses: [
      'Sare osoa motelarazi, baliabideak xurgatuz.',
      'Beste malware bat banatzea.',
    ],
    example:
      'WannaCry (2017): ahulezia bat erabiliz hedatu zen, eta milaka sare kutsatu zituen munduan zehar, fitxategiak zifratuz.',
    quick: 'Ez du erabiltzailerik behar: sarea bera da bidea.',
    protect: [
      'Sistema eta softwarea eguneratuta mantendu.',
      'Sarea segmentatu, kalteak mugatzeko.',
      'Ez beharrezkoak diren sarbide-puntu irekiak (adibidez, SMB, RDP) itxi.',
    ],
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Sarean dauden datuak irakur ditzake.' },
      { label: 'Osotasuna', risk: true, text: 'Fitxategiak zifra edo alda ditzake.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Sare osoa geldi dezake, kopia guztiek baliabideak hartzen dituztelako.' },
      { label: 'Autentikazioa', risk: false, text: 'Ez du pasahitzik apurtzen; ahulezia bat erabiltzen du.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Nondik hasi den jakitea zaila da, sarean zehar hedatzen delako.' },
    ],
    conclusion: 'Harrak ahulezia zaharretatik hedatzen dira. Eguneratzea eta sarearen segmentazioa dira kalterik handiena saihesteko bideak.',
    opinion: 'Sare bateko ordenagailu bat eguneratu gabe zegoen. Ordutik, eguneratzeak automatikoki egiten ditut, ahazteko arriskua saihesteko.',
  },
  {
    slug: 'aktiboak-mamuak',
    number: 4,
    name: 'Mamuak',
    tag: 'Arrastorik gabe',
    color: 'var(--indigo)',
    cardIntro: 'Bere lana egin eta arrastoak ezabatzen dituen malwarea: ia ez da ikusten.',
    definition:
      'Bere eginkizuna bete ondoren bere arrastoak ezabatzen dituen malwarea. Fitxategirik utzi gabe memorian bizi daiteke, eta horregatik antibirus tradizionalek ez dute beti hautematen.',
    steps: [
      'Sisteman sartzen da, normalean fitxategi bakarrik utzi gabe.',
      'Bere atazak memorian edo sistemaren prozesu legitimoen artean exekutatzen ditu.',
      'Atazak amaitu ondoren, bere arrastoak ezabatzen ditu eta isilik geratzen da.',
    ],
    uses: [
      'Datuak lapurtu eta kanpora bidaltzea, arrastorik utzi gabe.',
      'Sistema denbora luzez kontrolatzea, detektatu gabe.',
    ],
    example:
      'Adibide hipotetikoa: zerbitzari baten memoriako prozesu batek hilabetez datu batzuk kopiatzen ditu, eta ez da inoiz diskoan fitxategirik agertzen.',
    quick: 'Fitxategirik utzi gabe, memorian bizi da.',
    protect: [
      'Prozesu eta zerbitzu berriak aldizka berrikusi.',
      'Portaeran oinarritutako segurtasun-tresnak erabili, fitxategiak bakarrik ez.',
      'Administratzaile-sarbidea mugatu, behar ez denean.',
    ],
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Datu sentikorrak kopia ditzake, ohartarazi gabe.' },
      { label: 'Osotasuna', risk: true, text: 'Prozesuen portaera alda dezake, sistema ustela izanik.' },
      { label: 'Erabilgarritasuna', risk: false, text: 'Sistema normal dabil; ez dago ohar nabarmenik.' },
      { label: 'Autentikazioa', risk: false, text: 'Ez du sarbide berririk lortzen; dagoen sarbidea erabiltzen du.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Arrastorik ez dagoenez, zaila da jarduera egiaztatzea.' },
    ],
    conclusion: 'Mamuak detektatzeko, fitxategiez gain, prozesuen portaera eta memoria ere begiratu behar dira.',
    opinion: 'Antibirusak ez zuen ezer aurkitu nire zerbitzarian, baina prozesu bat ohikoa ez zela ikusi nuen. Orduan jakin nuen fitxategiak bakarrik ez direla nahikoa.',
  },
  {
    slug: 'aktiboak-troiarrak',
    number: 5,
    name: 'Troiarrak',
    tag: 'Software legitimo itxurakoa',
    color: 'var(--pink)',
    cardIntro: 'Software legitimoa itxuratzen duen malwarea: batzuetan eguneraketa ofizial bat da.',
    definition:
      'Software legitimo baten barruan ezkutatutako malwarea. Ez dira soilik doako edo pirata dauden programak: software ofizialaren banaketa ere kutsa daiteke, eta orduan erabiltzaileak gutxi egin dezake.',
    steps: [
      'Software batean kode maltzurra txertatzen da, banaketa bidean edo eguneratze faltsu baten bidez.',
      'Erabiltzaileak programa instalatzen du, legitimoa dela uste duelako.',
      'Programak agindutako lana egiten du, eta atzeko planoan beste zerbait exekutatzen du.',
    ],
    uses: [
      'Datuak lapurtzea.',
      'Sarbidea ematea beste erasotzaile batzuei.',
    ],
    example:
      'SolarWinds (2020): eguneratze legitimo baten bidez hedatu zen. Ikusi dugun backdoor-aren kasu berbera da, baina hemen sarrera troiar moduan egin zen.',
    quick: 'Legitimoa dirudi, baina sinadura digitala egiaztatu behar da.',
    protect: [
      'Sinadura digitala eta hash-a egiaztatu instalatu aurretik.',
      'Iturri ofizialetik soilik deskargatu.',
      'Eguneratzeak programaren menutik egin, ez mezu-estekatik.',
    ],
    impact: [
      { label: 'Konfidentzialtasuna', risk: true, text: 'Instalatzaileak zure datuak bidal ditzake atzeko planoan.' },
      { label: 'Osotasuna', risk: true, text: 'Programaren kodea eta sistemaren ezarpenak alda ditzake.' },
      { label: 'Erabilgarritasuna', risk: false, text: 'Programa funtzionatzen du, eta horregatik ez da ohar nabarmenik.' },
      { label: 'Autentikazioa', risk: true, text: 'Sarbide berria ireki dezake beste erasotzaile batzuentzat.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Instalazioa zuk onartu duzu, baina programa legitimoa zirudien.' },
    ],
    conclusion: 'Software ofiziala ere kutsatu daiteke. Instalatu aurretik sinadura egiaztatu eta iturri ofizialetik deskargatu.',
    opinion: 'Programa bat webgune ofizialetik deskargatu nuen, baina ez nuen sinadura begiratu. Orain beti egiaztatzen dut instalatu aurretik.',
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
  {
    id: 3,
    label: 'Erronka 3',
    title: 'Segurtasun aktiboa: malware-motak',
    ready: true,
    terms: ERRONKA3_TERMS,
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