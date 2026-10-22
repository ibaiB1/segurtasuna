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

const ERRONKA3_TERMS = [
  {
    slug: 'acl',
    number: 1,
    name: 'ACLak',
    tag: 'Sarbide-kontrola',
    color: 'var(--teal)',
    cardIntro: 'Erabiltzaile bakoitzari fitxategi edo objektu bakoitzean zer egin dezakeen zehazten dio.',
    definition:
      'Sarbide-kontroleko zerrenda (ACL, Access Control List): zein erabiltzaile edo prozesuk duen sarbidea objektu batera eta zer eragiketa egin ditzakeen zehazten duen zerrenda. Linuxen baimen tradizionalek jabea, taldea eta besteak bakarrik bereizten dituzte; ACLek, berriz, erabiltzaile zehatz bakoitzarentzako baimenen kontrol xehea ematen dute.',
    steps: [
      'Fitxategi edo direktorio bati ACL sarrera bat gehitzen zaio, erabiltzaile edo talde jakin bat eta haren baimenak adierazten dituena (r, w, x).',
      'Sistemak baimen tradizionalak eta ACL sarrerak konbinatzen ditu eta erabiltzaileak egin dezakeena erabakitzen du.',
      'Maskarak (mask) ACL sarrera guztiek izan dezaketen gehienezko baimena mugatzen du. Adibidez, erabiltzaileak rw- badu baina maskara r-- bada, ezin izango du idatzi.',
    ],
    uses: [
      'Erabiltzaile batzuei fitxategi bat irakurtzea baina ez aldatzea ematea.',
      'Talde zehatz bati baimenak ematea, jabeak ez duen sarbidea emateko.',
      'Direktorio baten lehenetsitako baimenak ezartzea, sortzen diren fitxategi berriek ere baimen horiek izan ditzaten.',
    ],
    example:
      'Proiektu-karpeta bat partekatzen duzu: “ikasleak” taldeak irakurketa eta “irakasleak” taldeak idazketa dute, baina beste inork ez du sarbiderik. Horretarako, setfacl -m g:irakasleak:rwx karpeta bidez baimenak ematen dira eta getfacl karpeta bidez egiaztatzen dira.',
    quick: 'Baimen tradizionalek ez dute erabiltzaile bakoitzari baimen desberdinik emateko aukerarik.',
    protect: [
      'ACLak aktibatuta egon behar du fitxategi-sisteman (ext* eta Btrfs sistemetan lehenespenez dago) eta acl paketea instalatuta egon.',
      'Baimenak printzipioaren arabera eman: behar dena bakarrik, ez gehiago.',
      'getfacl erabiliz baimenak aldizka berrikusi.',
    ],
  },
  {
    slug: 'pasahitz-politikak',
    number: 2,
    name: 'Pasahitz-politikak',
    tag: 'Autentifikazioa',
    color: 'var(--red)',
    cardIntro: 'Pasahitzak sendoak eta sekretuak izateko arauak eta erasoen aurkako babesa.',
    definition:
      'Pasahitzak sendoak eta sekretuak izan daitezen ezartzen diren arau multzoa. Politika horiek normalean gutxieneko luzera, iraungitze-data, saiakera kopuruaren muga, pasahitz errepikatuak eragozten dituen historiala eta erabiltzaileen prestakuntza eskatzen dituzte.',
    steps: [
      'Erabiltzaileak pasahitz berria sortzen duenean, sistemak arauak betetzen dituen egiaztatzen du: luzera, karaktere motak, historiala...',
      'Pasahitza gordetzean, sistemak ez du testua bera gordetzen, hash-a baizik. GNU/Linuxen hash-a /etc/shadow fitxategian dago, root-ak soilik irakur dezakeelarik.',
      'Saioa hastean, idatzitako pasahitzaren hash-a kalkulatzen da eta gordetakoarekin alderatzen da. Bat badatoz, sarbidea ematen da.',
      'Saiakera asko huts egiten badute, sistemak kontua blokeatzen du.',
    ],
    uses: [
      'Hiztegi-erasoen eta indar gordineko erasoen aurka babestea.',
      'Erabiltzaileek pasahitz ahulak (hitz arruntak, zenbaki-sekuentziak, informazio pertsonala) erabiltzea saihestea.',
    ],
    example:
      '“Ikasle2024” pasahitza ahula da: hiztegiko hitza, urtea eta zenbaki ohikoak ditu. “Tx4!mNq#8rZw” sendoa da: maiuskulak, minuskulak, zenbakiak eta sinboloak ditu, gutxienez 12 karaktere ditu eta ez dago inon ohiko hitzekin lotuta.',
    quick: 'Pasahitz sendoa: letra larriak eta xeheak, zenbakiak, sinboloak eta gutxienez 12 karaktere.',
    protect: [
      'Gutxienez 8 karaktere (hobe 12), letra larri eta xeheak, zenbakiak eta sinboloak erabili.',
      'Hiztegietan ez dagoen pasahitza aukeratu, eta ez izan datu pertsonalekin lotuta.',
      'Saiakera kopurua mugatu eta, muga gainditzean, kontua blokeatu.',
      'John The Ripper bezalako auditoria-tresnekin pasahitzen sendotasuna egiaztatu (administratzaileek).',
    ],
  },
  {
    slug: 'kripto-simetrikoa',
    number: 3,
    name: 'Kriptografia simetrikoa',
    tag: 'Gako bakarra',
    color: 'var(--amber)',
    cardIntro: 'Gako bera erabiltzen da zifratzeko eta deszifratzeko: azkarra, baina gakoa seguru partekatu behar da.',
    definition:
      'Zifratze mota non gako bera erabiltzen den mezua zifratzeko eta deszifratzeko. Konfidentzialtasuna bermatzen du, eta algoritmoa publikoa izan daiteke: segurtasuna gakoan datza.',
    steps: [
      'Igorleak mezua zifratzen du gako sekretu bat erabiliz.',
      'Zifratutako mezua hartzaileari bidaltzen zaio.',
      'Hartzaileak gako bera erabiliz mezua deszifratzen du.',
    ],
    uses: [
      'Datu handiak azkar zifratzea (adibidez, komunikazio osoa HTTPS-n).',
      'Diskoak edo fitxategiak babestea.',
    ],
    example:
      'AES, DES, 3DES, Blowfish eta IDEA algoritmoak simetrikoak dira. AES gaur egun gehien erabiltzen dena da. Bi pertsonak gako bera badute, mezuak zifra ditzakete, baina gakoa nola trukatu behar duten arazoa da.',
    quick: 'Azkarra da, baina gakoa seguru bidaltzea eta gako kopurua kudeatzea zaila da.',
    protect: [
      'Gakoa ez bidali sare ez-seguru batean, eta ez gorde testu argian.',
      'Erabiltzaile bakoitzeko gako bat erabiltzea, izan ere, gako kopurua izugarri hazten da erabiltzaile kopuruarekin.',
    ],
  },
  {
    slug: 'kripto-asimetrikoa',
    number: 4,
    name: 'Kriptografia asimetrikoa',
    tag: 'Gako publikoa eta pribatua',
    color: 'var(--blue)',
    cardIntro: 'Bi gako: publikoa edonori ematen zaio, pribatua inoiz ez da partekatzen.',
    definition:
      'Zifratze mota non bi gako erabiltzen diren: gako publikoa (edonori ematen zaiona) eta gako pribatua (inoiz partekatzen ez dena). Batekin zifratutakoa bestearekin deszifratzen da. Gakoen zirkulazioaren eta kudeaketaren arazoak konpontzen ditu.',
    steps: [
      'Hartzaileak bere gako publikoa bidaltzen dio igorleari (edo publikoki eskuragarri jartzen du).',
      'Igorleak mezua hartzailearen gako publikoarekin zifratzen du.',
      'Hartzaileak bere gako pribatuarekin deszifratzen du. Gako pribatua hartzailearengan bakarrik dago.',
    ],
    uses: [
      'Gako simetriko bat modu seguruan adostea (zifratze hibridoan).',
      'Sinadura digitalak egitea.',
    ],
    example:
      'RSA eta ECC algoritmo asimetrikoak dira. Gako pribatua txartel adimendunean gordetzea da konponbiderik ohikoena, gakoa babesteko eta garraiatzeko.',
    quick: 'Gako pribatua inoiz ez da partekatzen; publikoa soilik zabaltzen da.',
    protect: [
      'Gako pribatua babestu eta garraiatu: txartel adimenduna erabili ahal da.',
      'Motela denez, ez erabili datu handiak zuzenean zifratzeko; gako simetriko bat trukatzeko erabili.',
    ],
  },
  {
    slug: 'kripto-hibridoa',
    number: 5,
    name: 'Kriptografia hibridoa',
    tag: 'Bi munduen onena',
    color: 'var(--purple)',
    cardIntro: 'Asimetrikoa gako bat modu seguruan trukatzeko, simetrikoa komunikazio osoa azkar zifratzeko.',
    definition:
      'Kriptografia simetrikoaren eta asimetrikoaren abantailak konbinatzen dituen sistema. PGP eta GPG (OpenPGP estandarra) sistema hibridoak dira, eta HTTPS eta SSH ere hala funtzionatzen dute.',
    steps: [
      'Saio hasieran, asimetrikoa erabiltzen da gako simetriko aleatorio bat modu seguruan adosteko.',
      'Gero, komunikazio osoa gako simetriko horrekin zifratzen da, azkar.',
    ],
    example:
      'Web nabigazio segurua: nabigatzaileak eta zerbitzariak gako simetriko bat adosten dute asimetrikoarekin, eta orrien eta datuen trukea gako horrekin zifratzen da.',
    quick: 'Asimetrikoa adostasunerako, simetrikoa abiadurarako.',
  },
  {
    slug: 'sinadura-digitala',
    number: 6,
    name: 'Sinadura digitala',
    tag: 'Identitatea eta osotasuna',
    color: 'var(--green)',
    cardIntro: 'Dokumentuaren igorlea egiaztatzen du eta ez dela aldatu bermatzen du, baina ez du edukia ezkutatzen.',
    definition:
      'Igorlearen identitatea (autentikotasuna) eta dokumentuaren osotasuna bermatzen dituen mekanismoa. Ez du edukia ezkutatzen: horretarako zifratzea behar da. Hash funtzioetan oinarritzen da.',
    steps: [
      'Igorleak dokumentuaren hash-a (laburpena) kalkulatzen du.',
      'Laburpena bere gako pribatuarekin zifratzen du, eta dokumentuarekin batera bidaltzen du.',
      'Hartzaileak dokumentuaren hash-a kalkulatzen du eta sinaduraren laburpena igorlearen gako publikoarekin deszifratzen du.',
      'Bat badatoz, dokumentua igorle horrena da eta ez da aldatu.',
    ],
    example:
      'Software-eguneraketa bat deskargatzean, sinadura digitalak egiaztatzen du eguneraketa software-fabrikatzailearena dela eta ez dela aldatu deskargan.',
    quick: 'Sinadurak ez du ezkutatzen: edukia zifratzeko, hartzailearen gako publikoa erabili.',
    protect: [
      'Hash funtzio seguruak erabili: MD5 eta SHA-1 ez dira seguruak (talkak aurkitu dira). Gaur egun SHA-256 erabiltzen da.',
    ],
  },
  {
    slug: 'pki',
    number: 7,
    name: 'PKI',
    tag: 'Gako publikoen azpiegitura',
    color: 'var(--indigo)',
    cardIntro: 'Gako publiko bat benetakoa dela egiaztatzeko sistema fidagarria: NAN digital baten antzekoa.',
    definition:
      'Gako publiko bat benetakoa dela egiaztatzeko sistema fidagarria. Ziurtagiri digitalek gako publikoa eta nortasun-datuak, erabilera, iraungitze-data eta algoritmoak biltzen dituzte (X.509 estandarra).',
    steps: [
      'RA (Erregistro Agintaritza) eskatzailearen nortasuna egiaztatzen du.',
      'CA (Ziurtapen Agintaritza) ziurtagiria egiten du eta gako publikoa sinatzen du.',
      'VA (Balidazio Agintaritza) ziurtagiria oraindik baliozkoa den egiaztatzen du.',
      'Ziurtagiri aktiboak eta ezeztatze-zerrendak biltegietan gordetzen dira.',
    ],
    example:
      'HTTPS-n, nabigatzaileak webgunearen ziurtagiria egiaztatzen du. Fidagarria bada, konexio segurua ezartzen da.',
    quick: 'Fidagarritasuna CA-ren mende dago: CA hackeatuta badago, ziurtagiri faltsuak sina daitezke.',
    protect: [
      'Ziurtagiri-ohartarazpenak ez ezikusi.',
      'Ez instalatu sistemaren fidagarritasun-zerrendan jatorri ezezaguneko CA-ik.',
    ],
  },
  {
    slug: 'ssh-ssl-tls',
    number: 8,
    name: 'SSH eta SSL/TLS',
    tag: 'Komunikazio segurua',
    color: 'var(--orange)',
    cardIntro: 'Urruneko sarbide segurua (SSH) eta web komunikazio segurua (HTTPS): biek kriptografia hibridoa erabiltzen dute.',
    definition:
      'SSH urruneko sarbide segururako erabiltzen da, eta SSL/TLS web komunikazio segururako (HTTPS). Ziurtagiria SSH-n aukerakoa da, baina SSL/TLS-n beharrezkoa da (PKI).',
    steps: [
      'Bi protokoloek asimetrikoa erabiltzen dute gako simetriko bat trukatzeko.',
      'Gero, komunikazio osoa gako simetriko horrekin zifratzen da.',
    ],
    uses: [
      'SSH: zerbitzari batera urrunetik sartzea, komandoak exekutatzeko.',
      'SSL/TLS (HTTPS): webguneetan nabigatzea eta datu sentikorrak bidaltzea.',
    ],
    example:
      'Zerbitzari batera SSH bidez sartzen zara gako publikoarekin. Webgune batera HTTPS bidez sartzen zara: nabigatzaileak webgunearen ziurtagiria egiaztatzen du PKI-aren bidez.',
    quick: 'SSH-k ziurtagiria aukerakoa du; SSL/TLS-k, berriz, beharrezkoa du (PKI).',
    protect: [
      'Sarbide-puntuak irekita ez utzi, beharrezkoa ez bada.',
      'Pasahitza baino gako publikoa erabili SSH-rako.',
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
  {
    id: 3,
    label: 'Erronka 3',
    title: 'Segurtasun logikoa: ACLak, pasahitzak eta kriptografia',
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