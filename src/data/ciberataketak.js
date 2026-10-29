// Ciberataketa famatuak: kasu errealak, bakoitza bere orrian.
// Termino-orriaren egitura bera dute (TermPage-k berrerabiltzen du).

export const CIBERATAKETAK = [
  {
    slug: 'stuxnet',
    number: 1,
    name: 'Stuxnet',
    tag: 'Sabotaje industriala',
    color: 'var(--amber)',
    cardIntro: 'Software bat Iranen uranio-zentrifugak kaltetzeko diseinatua: lehen aldiz, software-arma bat zibilen industria-sistema batean.',
    definition:
      'Stuxnet 2010ean aurkitu zen malware-zizarea (worm) da, industria-kontrolerako sistemetan (SCADA) sartzeko diseinatua. Bere helburua ez zen datuak lapurtzea, makinak fisikoki kaltetzea baizik. Iranen Natanz uranio-aberastegiari eragin zion, eta AEBek eta Israelek egin zutela uste da, nahiz eta inork ez duen ofizialki aitortu.',
    steps: [
      'Windows ordenagailu batean sartzen da, USB memoria batetik edo sare partekatu baten bidez. Aire-tarteko sistemetan ez da konektatuta dagoen ordenagailuetara iristen; hori dela eta, USBak izan ziren bidea.',
      'Lau zero-day ahulezia erabiltzen zituen (Windows-eko ahulezia ezezagunak), hedatzeko eta pribilegioak lortzeko.',
      'Siemens S7 PLC kontrolagailuak bilatzen zituen, eta bakarrik Natanzen zegoen konfigurazioarekin bat datorrenean aktibatzen zen.',
      'Zentrifugen biraketa-abiadura aldatzen zuen, kaltea eragiteko modu motelean, eta aldi berean operadoreei balio normalak erakusten zizkien.',
    ],
    uses: [
      'Industria-sistemetako prozesu fisikoak kaltetzea, software bidez.',
      'Eragiketa-gelako operadoreak engainatzea, sistema normal dagoela sinetsarazita.',
    ],
    example:
      'Gutxi gorabehera 1.000 zentrifuga kaltetu zituen, eta Iranen uranio-aberastea atzeratu zuen. Adituek diote zizarea berezi-berezia zela: software-ahulezia, sistema fisikoen ezagutza eta sabotajea uztartzen zituen lehen aldiz. Behin aurkituta, antzeko zizare batzuk sortu ziren, eta esperientzia horrek industria-segurtasunaren lehentasuna aldatu zuen.',
    quick: 'Ez zuen datuak lapurtu: makina errealak kaltetu zituen.',
    protect: [
      'Industria-sistemak sare isolatuan mantendu, eta sarbidea mugatu.',
      'USB memoriak kontrolatu, eta sistemetan ez onartu ezezagunak.',
      'PLC-en softwarea eta ahulezia ezagunak aldizka eguneratu.',
    ],
    impact: [
      { label: 'Konfidentzialtasuna', risk: false, text: 'Ez zuen datu-lapurreta bilatzen; helburua fisikoa zen.' },
      { label: 'Osotasuna', risk: true, text: 'Zentrifugen abiadura aldatu zuen, eta kalte fisikoak eragin zituen.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Aberastegiaren prozesua atzeratu zuen, eta makinak hondatu.' },
      { label: 'Autentikazioa', risk: true, text: 'Operadoreek sistemaren benetako egoera ez zuten ikusten.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Oso zaila izan zen erasoaren jatorria zehaztea.' },
    ],
    conclusion: 'Stuxnetek erakutsi zuen software-erasoek mundu fisikoan eragin zuzena izan dezaketela. Industria-sistemak IT sistemak bezala babestu behar dira.',
    opinion: 'Zoragarria eta beldurgarria iruditzen zait aldi berean: software hutsa, makina bat hondatzeko gai. Hortik aurrera, industria-sistemak ez ditut "ez dagoela konektatuta" bezala ikusten.',
  },
  {
    slug: 'wannacry',
    number: 2,
    name: 'WannaCry',
    tag: 'Ransomware zizarea',
    color: 'var(--red)',
    cardIntro: 'Ransomware bat, bere kabuz hedatzen zena: ordenagailu milaka zifratu zituen egun gutxitan.',
    definition:
      'WannaCry 2017ko maiatzean hedatu zen ransomware-zizarea (worm) da. Fitxategiak zifratzen ditu, eta askatzeko bitcoin-ak eskatzen ditu. Ez zuen erabiltzailearen ekintzarik behar: sare batean zehar bere kabuz hedatzen zen.',
    steps: [
      'Ordenagailu batean sartzen da SMBv1 protokoloaren ahulezia baten bidez (MS17-010, EternalBlue izenekoa), zeina NSAk ezagutzen zuen eta filtratu zen.',
      'Sare bereko beste ordenagailuak bilatzen ditu, eta ahulezia bera badute, kopia bat bidaltzen die.',
      'Ordenagailu bakoitzean fitxategiak zifratzen ditu, eta pantaila batean ransom-mezua erakusten du, bitcoin-ak eskatuz.',
      'Ikertzaile batek domeinu jakin bat erregistratu zuen, eta zizarea gelditu egin zen, hedapena mugatuz.',
    ],
    uses: [
      'Erakunde publikoei eta enpresei dirua eskatzea, zifratutako datuak askatzeko.',
      'Sare osoak eten arte hedatzea, aldi berean.',
    ],
    example:
      '2017an, 150 herrialdetan baino gehiagotan, 200.000 ordenagailu baino gehiago kutsatu zituen gutxi gorabehera. Ingalaterrako NHS osasun-sistema asko kaltetu zen: zerbitzuak eten ziren, eta mediku-zitak bertan behera utzi behar izan ziren. Ondorengo analisiek erakutsi zuten ordenagailu askok eguneratze falta zutela, Microsoftek hilabete lehenago ahulezia konpontzeko eguneraketa kaleratu bazuen ere.',
    quick: 'Sarea bera izan zen bidea: ahulezia bat, milaka kopia.',
    protect: [
      'Sistema eguneratuta mantendu, batez ere segurtasun-eguneraketak.',
      'SMBv1 desgaitu, behar ez bada.',
      'Babeskopiak aldizka egin eta isolatuta gorde.',
    ],
    impact: [
      { label: 'Konfidentzialtasuna', risk: false, text: 'Datuak ez zituen lapurtu, zifratu baizik.' },
      { label: 'Osotasuna', risk: true, text: 'Fitxategiak zifratu zituen, eta askotan ezin izan ziren berreskuratu.' },
      { label: 'Erabilgarritasuna', risk: true, text: 'Sistemak eta zerbitzuak geldi geratu ziren.' },
      { label: 'Autentikazioa', risk: false, text: 'Ez zuen pasahitzik apurtu; ahulezia bat erabili zuen.' },
      { label: 'Ez-arbuiatzea', risk: false, text: 'Ordainketa bitcoin bidez egiten zen, eta horrek jarraitzea zailtzen zuen.' },
    ],
    conclusion: 'WannaCryk eguneraketa falta zer kalte eragin dezakeen erakutsi zuen. Eguneratzea eta babeskopiak dira defentsa onenak.',
    opinion: 'Ordenagailu bat eguneratu gabe nuen une hartan. Orduz geroztik, eguneraketak lehenetsi ditut, eta babeskopiak egiten ditut astero.',
  },
]

export const getCase = (slug) => CIBERATAKETAK.find((c) => c.slug === slug)
