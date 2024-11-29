const pastContinuousOrSimple = [
    [
      "She ... dinner when the phone rang.",
      "was cooking",
      "cook",
      "cooked",
      "cooking",
      "Она готовила ужин, когда зазвонил телефон.",
      "Вона готувала вечерю, коли задзвонив телефон.",
      "Ona gotowała obiad, kiedy zadzwonił telefon."
    ],
    [
      "We ... to music while the guests arrived.",
      "were listening",
      "listen",
      "listened",
      "listening",
      "Мы слушали музыку, пока приходили гости.",
      "Ми слухали музику, поки приходили гості.",
      "Słuchaliśmy muzyki, kiedy przychodzili goście."
    ],
    [
      "He ... football when it started to rain.",
      "was playing",
      "play",
      "played",
      "playing",
      "Он играл в футбол, когда начался дождь.",
      "Він грав у футбол, коли почався дощ.",
      "On grał w piłkę nożną, kiedy zaczął padać deszcz."
    ],
    [
      "They ... TV when the lights went out.",
      "were watching",
      "watch",
      "watched",
      "watching",
      "Они смотрели телевизор, когда отключили свет.",
      "Вони дивилися телевізор, коли вимкнули світло.",
      "Oni oglądali telewizję, kiedy wyłączyło się światło."
    ],
    [
      "I ... a letter when she called.",
      "was writing",
      "write",
      "wrote",
      "writing",
      "Я писал письмо, когда она позвонила.",
      "Я писав лист, коли вона подзвонила.",
      "Pisałem list, kiedy ona zadzwoniła."
    ],
    [
      "She ... a book while waiting for the bus.",
      "was reading",
      "read",
      "read",
      "reading",
      "Она читала книгу, ожидая автобус.",
      "Вона читала книгу, чекаючи автобус.",
      "Czytała książkę, czekając na autobus."
    ],
    [
      "They ... chess when their friends arrived.",
      "were playing",
      "play",
      "played",
      "playing",
      "Они играли в шахматы, когда пришли их друзья.",
      "Вони грали в шахи, коли прийшли їхні друзі.",
      "Grali w szachy, kiedy przyjechali ich przyjaciele."
    ],
    [
      "We ... the room while they talked.",
      "were cleaning",
      "clean",
      "cleaned",
      "cleaning",
      "Мы убирали комнату, пока они разговаривали.",
      "Ми прибирали кімнату, поки вони розмовляли.",
      "Sprzątaliśmy pokój, podczas gdy oni rozmawiali."
    ],
    [
      "He ... for his keys when I arrived.",
      "was looking",
      "look",
      "looked",
      "looking",
      "Он искал свои ключи, когда я пришёл.",
      "Він шукав свої ключі, коли я прийшов.",
      "Szukając kluczy, kiedy przyjechałem."
    ],
    [
      "She ... her homework while he played games.",
      "was doing",
      "do",
      "did",
      "doing",
      "Она делала домашнюю работу, пока он играл в игры.",
      "Вона робила домашнє завдання, поки він грав у ігри.",
      "Robiła pracę domową, podczas gdy on grał w gry."
    ],
    [
      "I ... about the trip when they interrupted.",
      "was thinking",
      "think",
      "thought",
      "thinking",
      "Я думал о поездке, когда они меня перебили.",
      "Я думав про подорож, коли вони мене перебили.",
      "Myślałem o podróży, kiedy mi przerwali."
    ],
    [
      "We ... for the bus when it suddenly arrived.",
      "were waiting",
      "wait",
      "waited",
      "waiting",
      "Мы ждали автобус, когда он неожиданно прибыл.",
      "Ми чекали автобус, коли він несподівано приїхав.",
      "Czekaliśmy na autobus, kiedy nagle przyjechał."
    ],
    [
      "She ... the house while her kids played outside.",
      "was cleaning",
      "clean",
      "cleaned",
      "cleaning",
      "Она убирала дом, пока её дети играли на улице.",
      "Вона прибирала будинок, поки її діти грали на вулиці.",
      "Sprzątała dom, kiedy jej dzieci bawiły się na dworze."
    ],
    [
      "I ... a cake when she came home.",
      "was baking",
      "bake",
      "baked",
      "baking",
      "Я пек пирог, когда она вернулась домой.",
      "Я пік пиріг, коли вона повернулася додому.",
      "Piekłem ciasto, kiedy wróciła do domu."
    ],
    [
      "He ... a photo while I was packing.",
      "was taking",
      "take",
      "took",
      "taking",
      "Он делал фото, пока я собирал вещи.",
      "Він робив фото, поки я збирав речі.",
      "Robił zdjęcie, podczas gdy ja się pakowałem."
    ],
    [
      "They ... on a project while we relaxed.",
      "were working",
      "work",
      "worked",
      "working",
      "Они работали над проектом, пока мы отдыхали.",
      "Вони працювали над проектом, поки ми відпочивали.",
      "Pracowali nad projektem, podczas gdy my odpoczywaliśmy."
    ],
    [
      "I ... in the garden while they talked.",
      "was planting",
      "plant",
      "planted",
      "planting",
      "Я сажал растения в саду, пока они разговаривали.",
      "Я садив рослини в саду, поки вони розмовляли.",
      "Sadziłem rośliny w ogrodzie, podczas gdy oni rozmawiali."
    ],
    [
      "She ... the piano when I walked in.",
      "was playing",
      "play",
      "played",
      "playing",
      "Она играла на пианино, когда я вошёл.",
      "Вона грала на піаніно, коли я зайшов.",
      "Grała na pianinie, kiedy wszedłem."
    ],
    [
      "We ... coffee while they discussed the plans.",
      "were drinking",
      "drink",
      "drank",
      "drinking",
      "Мы пили кофе, пока они обсуждали планы.",
      "Ми пили каву, поки вони обговорювали плани.",
      "Piliśmy kawę, kiedy omawiali plany."
    ],
    [
      "He ... at the stars when I found him.",
      "was looking",
      "look",
      "looked",
      "looking",
      "Он смотрел на звезды, когда я нашёл его.",
      "Він дивився на зорі, коли я його знайшов.",
      "Patrzył na gwiazdy, kiedy go znalazłem."
    ],
    [
        "I ... not running when you saw me.",
        "was",
        "be",
        "were",
        "being",
        "Я не бегал, когда ты меня увидел.",
        "Я не бігав, коли ти мене побачив.",
        "Nie biegałem, kiedy mnie zobaczyłeś."
      ],
      [
        "She ... not eating when he came home.",
        "was",
        "be",
        "were",
        "being",
        "Она не ела, когда он пришёл домой.",
        "Вона не їла, коли він прийшов додому.",
        "Ona nie jadła, kiedy on wrócił do domu."
      ],
      [
        "We ... not sleeping when the alarm went off.",
        "were",
        "be",
        "was",
        "being",
        "Мы не спали, когда сработала тревога.",
        "Ми не спали, коли спрацювала тривога.",
        "Nie spaliśmy, kiedy włączył się alarm."
      ],
      [
        "He ... not reading when I asked him to help.",
        "was",
        "be",
        "were",
        "being",
        "Он не читал, когда я попросил его помочь.",
        "Він не читав, коли я попросив його допомогти.",
        "On nie czytał, kiedy poprosiłem go o pomoc."
      ],
      [
        "They ... not talking when I entered the room.",
        "were",
        "be",
        "was",
        "being",
        "Они не разговаривали, когда я вошёл в комнату.",
        "Вони не розмовляли, коли я зайшов у кімнату.",
        "Nie rozmawiali, kiedy wszedłem do pokoju."
      ],
      [
        "I ... not working on the project when the manager called.",
        "was",
        "be",
        "were",
        "being",
        "Я не работал над проектом, когда позвонил менеджер.",
        "Я не працював над проектом, коли подзвонив менеджер.",
        "Nie pracowałem nad projektem, kiedy zadzwonił menedżer."
      ],
      [
        "She ... not writing the letter when the pen broke.",
        "was",
        "be",
        "were",
        "being",
        "Она не писала письмо, когда сломалась ручка.",
        "Вона не писала листа, коли зламалася ручка.",
        "Ona nie pisała listu, kiedy złamał się długopis."
      ],
      [
        "We ... not preparing dinner when they arrived.",
        "were",
        "be",
        "was",
        "being",
        "Мы не готовили ужин, когда они приехали.",
        "Ми не готували вечерю, коли вони приїхали.",
        "Nie przygotowywaliśmy obiadu, kiedy przyjechali."
      ],
      [
        "He ... not watching TV when I walked in.",
        "was",
        "be",
        "were",
        "being",
        "Он не смотрел телевизор, когда я вошёл.",
        "Він не дивився телевізор, коли я зайшов.",
        "On nie oglądał telewizji, kiedy wszedłem."
      ],
      [
        "They ... not dancing when the music stopped.",
        "were",
        "be",
        "was",
        "being",
        "Они не танцевали, когда музыка остановилась.",
        "Вони не танцювали, коли музика зупинилася.",
        "Nie tańczyli, kiedy muzyka się zatrzymała."
      ],
      [
        "I ... not driving when the accident happened.",
        "was",
        "be",
        "were",
        "being",
        "Я не был за рулём, когда произошла авария.",
        "Я не був за кермом, коли сталася аварія.",
        "Nie prowadziłem, kiedy zdarzył się wypadek."
      ],
      [
        "She ... not singing when the audience clapped.",
        "was",
        "be",
        "were",
        "being",
        "Она не пела, когда зрители зааплодировали.",
        "Вона не співала, коли глядачі аплодували.",
        "Ona nie śpiewała, kiedy publiczność klaskała."
      ],
      [
        "We ... not cleaning the house when the guests arrived.",
        "were",
        "be",
        "was",
        "being",
        "Мы не убирали дом, когда приехали гости.",
        "Ми не прибирали дім, коли приїхали гості.",
        "Nie sprzątaliśmy domu, kiedy przyjechali goście."
      ],
      [
        "He ... not studying when his friend visited.",
        "was",
        "be",
        "were",
        "being",
        "Он не учился, когда его друг пришёл в гости.",
        "Він не вчився, коли його друг завітав у гості.",
        "On nie uczył się, kiedy odwiedził go przyjaciel."
      ],
      [
        "They ... not planning the trip when I called.",
        "were",
        "be",
        "was",
        "being",
        "Они не планировали поездку, когда я позвонил.",
        "Вони не планували подорож, коли я подзвонив.",
        "Nie planowali podróży, kiedy zadzwoniłem."
      ],
      [
        "I ... not painting the wall when you knocked on the door.",
        "was",
        "be",
        "were",
        "being",
        "Я не красил стену, когда ты постучал в дверь.",
        "Я не фарбував стіну, коли ти постукав у двері.",
        "Nie malowałem ściany, kiedy zapukałeś do drzwi."
      ],
      [
        "She ... not teaching when I arrived at the school.",
        "was",
        "be",
        "were",
        "being",
        "Она не преподавала, когда я прибыл в школу.",
        "Вона не викладала, коли я прибув до школи.",
        "Ona nie uczyła, kiedy przyjechałem do szkoły."
      ],
      [
        "We ... not shopping when it started raining.",
        "were",
        "be",
        "was",
        "being",
        "Мы не делали покупки, когда начался дождь.",
        "Ми не робили покупки, коли почався дощ.",
        "Nie robiliśmy zakupów, kiedy zaczęło padać."
      ],
      [
        "He ... not repairing the car when I saw him.",
        "was",
        "be",
        "were",
        "being",
        "Он не чинил машину, когда я его увидел.",
        "Він не лагодив машину, коли я його побачив.",
        "On nie naprawiał samochodu, kiedy go zobaczyłem."
      ],
      [
        "They ... not playing cards when I joined them.",
        "were",
        "be",
        "was",
        "being",
        "Они не играли в карты, когда я присоединился к ним.",
        "Вони не грали в карти, коли я приєднався до них.",
        "Nie grali w karty, kiedy do nich dołączyłem."
      ],
      [
        "I ... not preparing breakfast when you called me.",
        "was",
        "be",
        "were",
        "being",
        "Я не готовил завтрак, когда ты позвонил.",
        "Я не готував сніданок, коли ти подзвонив.",
        "Nie przygotowywałem śniadania, kiedy zadzwoniłeś."
      ],
      [
        "She ... not sewing the dress when I arrived.",
        "was",
        "be",
        "were",
        "being",
        "Она не шила платье, когда я приехал.",
        "Вона не шила сукню, коли я приїхав.",
        "Ona nie szyła sukienki, kiedy przyjechałem."
      ],
      [
        "We ... not discussing the topic when the bell rang.",
        "were",
        "be",
        "was",
        "being",
        "Мы не обсуждали тему, когда прозвенел звонок.",
        "Ми не обговорювали тему, коли пролунав дзвінок.",
        "Nie omawialiśmy tematu, kiedy zadzwonił dzwonek."
      ],
      [
        "He ... not fixing the computer when I needed help.",
        "was",
        "be",
        "were",
        "being",
        "Он не чинил компьютер, когда мне нужна была помощь.",
        "Він не лагодив комп’ютер, коли мені потрібна була допомога.",
        "On nie naprawiał komputera, kiedy potrzebowałem pomocy."
      ],
      [
        "They ... not walking in the park when it got dark.",
        "were",
        "be",
        "was",
        "being",
        "Они не гуляли в парке, когда стемнело.",
        "Вони не гуляли в парку, коли стало темно.",
        "Nie spacerowali w parku, kiedy zrobiło się ciemno."
      ],
      [
        "I ... not enjoying the movie when it ended abruptly.",
        "was",
        "be",
        "were",
        "being",
        "Мне не нравился фильм, когда он резко закончился.",
        "Мені не подобався фільм, коли він різко закінчився.",
        "Nie podobał mi się film, kiedy nagle się skończył."
      ],
      [
        "She ... not waiting for the train when it finally arrived.",
        "was",
        "be",
        "were",
        "being",
        "Она не ждала поезд, когда он наконец приехал.",
        "Вона не чекала потяга, коли він нарешті приїхав.",
        "Ona nie czekała na pociąg, kiedy w końcu przyjechał."
      ],
      [
        "We ... not learning new vocabulary when the class ended.",
        "were",
        "be",
        "was",
        "being",
        "Мы не изучали новые слова, когда урок закончился.",
        "Ми не вчили нові слова, коли урок закінчився.",
        "Nie uczyliśmy się nowych słów, kiedy lekcja się skończyła."
      ],
      [
        "He ... not painting the fence when it started snowing.",
        "was",
        "be",
        "were",
        "being",
        "Он не красил забор, когда пошёл снег.",
        "Він не фарбував паркан, коли пішов сніг.",
        "On nie malował płotu, kiedy zaczął padać śnieg."
      ],
      [
        "They ... not fishing when the boat capsized.",
        "were",
        "be",
        "was",
        "being",
        "Они не рыбачили, когда лодка перевернулась.",
        "Вони не ловили рибу, коли човен перевернувся.",
        "Nie łowili ryb, kiedy łódź się przewróciła."
      ],
      [
        "She ... her keys on the table yesterday.",
        "left",
        "leave",
        "leaves",
        "leaving",
        "Она оставила свои ключи на столе вчера.",
        "Вона залишила свої ключі на столі вчора.",
        "Ona zostawiła swoje klucze na stole wczoraj."
      ],
      [
        "They ... a beautiful song during the event.",
        "sang",
        "sing",
        "sings",
        "singing",
        "Они спели красивую песню во время мероприятия.",
        "Вони заспівали красиву пісню під час заходу.",
        "Zaśpiewali piękną piosenkę podczas wydarzenia."
      ],
      [
        "I ... a delicious cake for the party.",
        "baked",
        "bake",
        "bakes",
        "baking",
        "Я испек вкусный торт для вечеринки.",
        "Я спік смачний торт для вечірки.",
        "Upiekłem smaczne ciasto na imprezę."
      ],
      [
        "He ... his wallet at home this morning.",
        "forgot",
        "forget",
        "forgets",
        "forgetting",
        "Он забыл свой кошелек дома сегодня утром.",
        "Він забув свій гаманець вдома сьогодні вранці.",
        "On zapomniał portfela w domu dziś rano."
      ],
      [
        "We ... to the museum last weekend.",
        "went",
        "go",
        "goes",
        "going",
        "Мы сходили в музей на прошлых выходных.",
        "Ми пішли в музей минулих вихідних.",
        "Poszliśmy do muzeum w zeszły weekend."
      ],
      [
        "They ... the car very carefully yesterday.",
        "drove",
        "drive",
        "drives",
        "driving",
        "Они вели машину очень осторожно вчера.",
        "Вони водили машину дуже обережно вчора.",
        "Prowadzili samochód bardzo ostrożnie wczoraj."
      ],
      [
        "She ... me a wonderful gift for my birthday.",
        "gave",
        "give",
        "gives",
        "giving",
        "Она подарила мне замечательный подарок на день рождения.",
        "Вона подарувала мені чудовий подарунок на день народження.",
        "Dała mi wspaniały prezent na moje urodziny."
      ],
      [
        "I ... about the exam after it ended.",
        "thought",
        "think",
        "thinks",
        "thinking",
        "Я подумал о экзамене после того, как он закончился.",
        "Я подумав про іспит після того, як він закінчився.",
        "Myślałem o egzaminie po jego zakończeniu."
      ],
      [
        "We ... dinner at a fancy restaurant last night.",
        "ate",
        "eat",
        "eats",
        "eating",
        "Мы поужинали в шикарном ресторане вчера вечером.",
        "Ми повечеряли в шикарному ресторані вчора ввечері.",
        "Zjedliśmy kolację w eleganckiej restauracji wczoraj wieczorem."
      ],
      [
        "He ... a book before going to bed last night.",
        "read",
        "read",
        "reads",
        "reading",
        "Он читал книгу перед сном вчера вечером.",
        "Він читав книгу перед сном вчора ввечері.",
        "Czytał książkę przed snem wczoraj wieczorem."
      ],
      [
        "She ... the room when I arrived.",
        "cleaned",
        "clean",
        "cleans",
        "cleaning",
        "Она убрала комнату, когда я приехал.",
        "Вона прибрала кімнату, коли я приїхав.",
        "Ona posprzątała pokój, kiedy przyjechałem."
      ],
      [
        "They ... the presentation perfectly last week.",
        "delivered",
        "deliver",
        "delivers",
        "delivering",
        "Они провели презентацию идеально на прошлой неделе.",
        "Вони провели презентацію ідеально минулого тижня.",
        "Przeprowadzili prezentację idealnie w zeszłym tygodniu."
      ],
      [
        "He ... the door loudly before leaving.",
        "closed",
        "close",
        "closes",
        "closing",
        "Он громко закрыл дверь перед уходом.",
        "Він голосно закрив двері перед виходом.",
        "Zamknął drzwi głośno przed wyjściem."
      ],
      [
        "We ... in a competition and won first place.",
        "competed",
        "compete",
        "competes",
        "competing",
        "Мы участвовали в соревновании и заняли первое место.",
        "Ми брали участь у змаганні й посіли перше місце.",
        "Uczestniczyliśmy w zawodach i zajęliśmy pierwsze miejsce."
      ],
      [
        "She ... a beautiful painting for the exhibition.",
        "created",
        "create",
        "creates",
        "creating",
        "Она создала красивую картину для выставки.",
        "Вона створила красиву картину для виставки.",
        "Stworzyła piękny obraz na wystawę."
      ],
      [
        "I ... the door when you knocked.",
        "opened",
        "open",
        "opens",
        "opening",
        "Я открыл дверь, когда ты постучал.",
        "Я відчинив двері, коли ти постукав.",
        "Otworzyłem drzwi, kiedy zapukałeś."
      ],
      [
        "They ... the game because of bad weather.",
        "stopped",
        "stop",
        "stops",
        "stopping",
        "Они остановили игру из-за плохой погоды.",
        "Вони зупинили гру через погану погоду.",
        "Zatrzymali grę z powodu złej pogody."
      ],
      [
        "She ... for the train but it never came.",
        "waited",
        "wait",
        "waits",
        "waiting",
        "Она ждала поезд, но он так и не пришел.",
        "Вона чекала на потяг, але він так і не прийшов.",
        "Czekała na pociąg, ale nigdy nie przyjechał."
      ],
      [
        "We ... the solution after hours of discussion.",
        "found",
        "find",
        "finds",
        "finding",
        "Мы нашли решение после часов обсуждения.",
        "Ми знайшли рішення після годин обговорення.",
        "Znaleźliśmy rozwiązanie po godzinach dyskusji."
      ],
      [
        "He ... the clock strike twelve at midnight.",
        "heard",
        "hear",
        "hears",
        "hearing",
        "Он услышал, как часы пробили двенадцать в полночь.",
        "Він почув, як годинник пробив дванадцять опівночі.",
        "Słyszał, jak zegar wybija dwunastą o północy."
      ],
      [
        "She was reading a book when I arrived.",
        "Was she reading a book when you arrived?",
        "She was reading a book when you arrived?",
        "Was reading she a book when you arrived?",
        "Reading she was a book when you arrived?",
        "Она читала книгу, когда я пришел.",
        "Вона читала книгу, коли я прийшов.",
        "Ona czytała książkę, kiedy przyjechałem."
      ],
      [
        "They were playing football in the park yesterday.",
        "Were they playing football in the park yesterday?",
        "They were playing football in the park yesterday?",
        "Playing they were football in the park yesterday?",
        "Football were they playing in the park yesterday?",
        "Они играли в футбол в парке вчера.",
        "Вони грали у футбол у парку вчора.",
        "Grali w piłkę nożną w parku wczoraj."
      ],
      [
        "I was cooking dinner when the phone rang.",
        "Was I cooking dinner when the phone rang?",
        "I was cooking dinner when the phone rang?",
        "Cooking I was dinner when the phone rang?",
        "Dinner was I cooking when the phone rang?",
        "Я готовил ужин, когда зазвонил телефон.",
        "Я готував вечерю, коли задзвонив телефон.",
        "Gotowałem kolację, kiedy zadzwonił telefon."
      ],
      [
        "He was studying all night before the exam.",
        "Was he studying all night before the exam?",
        "He was studying all night before the exam?",
        "Studying he was all night before the exam?",
        "All night was he studying before the exam?",
        "Он учился всю ночь перед экзаменом.",
        "Він вчився всю ніч перед іспитом.",
        "Uczył się całą noc przed egzaminem."
      ],
      [
        "We were walking in the park when it started to rain.",
        "Were we walking in the park when it started to rain?",
        "We were walking in the park when it started to rain?",
        "Walking we were in the park when it started to rain?",
        "In the park were we walking when it started to rain?",
        "Мы гуляли в парке, когда начался дождь.",
        "Ми гуляли в парку, коли почався дощ.",
        "Spacerowaliśmy po parku, kiedy zaczęło padać."
      ],
      [
        "She was writing an email when the computer froze.",
        "Was she writing an email when the computer froze?",
        "She was writing an email when the computer froze?",
        "Writing she was an email when the computer froze?",
        "An email was she writing when the computer froze?",
        "Она писала письмо, когда компьютер завис.",
        "Вона писала лист, коли комп'ютер завис.",
        "Ona pisała e-mail, kiedy komputer się zawiesił."
      ],
      [
        "They were watching a movie when the lights went out.",
        "Were they watching a movie when the lights went out?",
        "They were watching a movie when the lights went out?",
        "Watching they were a movie when the lights went out?",
        "A movie were they watching when the lights went out?",
        "Они смотрели фильм, когда выключился свет.",
        "Вони дивилися фільм, коли вимкнулося світло.",
        "Oni oglądali film, kiedy światła zgasły."
      ],
      [
        "I was talking to my friend when the doorbell rang.",
        "Was I talking to my friend when the doorbell rang?",
        "I was talking to my friend when the doorbell rang?",
        "Talking I was to my friend when the doorbell rang?",
        "To my friend was I talking when the doorbell rang?",
        "Я разговаривал с другом, когда позвонили в дверь.",
        "Я розмовляв з другом, коли подзвонили у двері.",
        "Rozmawiałem z przyjacielem, kiedy zadzwonił dzwonek do drzwi."
      ],
      [
        "He was cleaning the house when I called him.",
        "Was he cleaning the house when you called him?",
        "He was cleaning the house when you called him?",
        "Cleaning he was the house when you called him?",
        "The house was he cleaning when you called him?",
        "Он убирал дом, когда я позвонил ему.",
        "Він прибирав будинок, коли я зателефонував йому.",
        "Sprzątał dom, kiedy zadzwoniłem do niego."
      ],
      [
        "They were driving to the countryside when the car broke down.",
        "Were they driving to the countryside when the car broke down?",
        "They were driving to the countryside when the car broke down?",
        "Driving they were to the countryside when the car broke down?",
        "To the countryside were they driving when the car broke down?",
        "Они ехали за город, когда машина сломалась.",
        "Вони їхали за місто, коли машина зламалася.",
        "Jechali na wieś, kiedy samochód się zepsuł."
      ],
      [
        "We were playing chess when she came in.",
        "Were we playing chess when she came in?",
        "We were playing chess when she came in?",
        "Playing we were chess when she came in?",
        "Chess were we playing when she came in?",
        "Мы играли в шахматы, когда она вошла.",
        "Ми грали в шахи, коли вона зайшла.",
        "Graliśmy w szachy, kiedy weszła."
      ],
      [
        "He was explaining the plan when the manager interrupted.",
        "Was he explaining the plan when the manager interrupted?",
        "He was explaining the plan when the manager interrupted?",
        "Explaining he was the plan when the manager interrupted?",
        "The plan was he explaining when the manager interrupted?",
        "Он объяснял план, когда менеджер перебил его.",
        "Він пояснював план, коли менеджер його перебив.",
        "Tłumaczył plan, kiedy menedżer go przerwał."
      ],
      [
        "I was listening to music when my phone rang.",
        "Was I listening to music when my phone rang?",
        "I was listening to music when my phone rang?",
        "Listening I was to music when my phone rang?",
        "To music was I listening when my phone rang?",
        "Я слушал музыку, когда мой телефон зазвонил.",
        "Я слухав музику, коли мій телефон задзвонив.",
        "Słuchałem muzyki, kiedy zadzwonił mój telefon."
      ],
      [
        "They were practicing the song all afternoon.",
        "Were they practicing the song all afternoon?",
        "They were practicing the song all afternoon?",
        "Practicing they were the song all afternoon?",
        "The song were they practicing all afternoon?",
        "Они репетировали песню весь день.",
        "Вони репетували пісню весь день.",
        "Ćwiczyli piosenkę przez całe popołudnie."
      ],
      [
        "She was talking to her parents when I saw her.",
        "Was she talking to her parents when you saw her?",
        "She was talking to her parents when you saw her?",
        "Talking she was to her parents when you saw her?",
        "To her parents was she talking when you saw her?",
        "Она разговаривала с родителями, когда я ее увидел.",
        "Вона розмовляла з батьками, коли я її побачив.",
        "Rozmawiała z rodzicami, kiedy ją zobaczyłem."
      ],
      [
        "We were staying at a hotel when the storm started.",
        "Were we staying at a hotel when the storm started?",
        "We were staying at a hotel when the storm started?",
        "Staying we were at a hotel when the storm started?",
        "At a hotel were we staying when the storm started?",
        "Мы останавливались в отеле, когда началась буря.",
        "Ми зупинялися в готелі, коли почалася буря.",
        "Zatrzymywaliśmy się w hotelu, kiedy zaczęła się burza."
      ],
      [
        "He was working on his project all day.",
        "Was he working on his project all day?",
        "He was working on his project all day?",
        "Working he was on his project all day?",
        "On his project was he working all day?",
        "Он работал над своим проектом весь день.",
        "Він працював над своїм проектом цілий день.",
        "Pracował nad swoim projektem przez cały dzień."
      ],
      [
        "I was waiting for the bus when it started to snow.",
        "Was I waiting for the bus when it started to snow?",
        "I was waiting for the bus when it started to snow?",
        "Waiting I was for the bus when it started to snow?",
        "For the bus was I waiting when it started to snow?",
        "Я ждал автобус, когда начался снег.",
        "Я чекав автобус, коли почав йти сніг.",
        "Czekałem na autobus, kiedy zaczął padać śnieg."
      ],
      [
        "They were studying at the library when the fire alarm went off.",
        "Were they studying at the library when the fire alarm went off?",
        "They were studying at the library when the fire alarm went off?",
        "Studying they were at the library when the fire alarm went off?",
        "At the library were they studying when the fire alarm went off?",
        "Они учились в библиотеке, когда сработала сигнализация.",
        "Вони вчилися в бібліотеці, коли спрацювала сигналізація.",
        "Uczyli się w bibliotece, kiedy włączył się alarm pożarowy."
      ],
      [
        "She played tennis yesterday.",
        "Did she play tennis yesterday?",
        "She played tennis yesterday?",
        "Played she tennis yesterday?",
        "Tennis she played yesterday?",
        "Она играла в теннис вчера.",
        "Вона грала в теніс вчора.",
        "Ona grała w tenisa wczoraj."
      ],
      [
        "They visited the museum last week.",
        "Did they visit the museum last week?",
        "They visited the museum last week?",
        "Visited they the museum last week?",
        "The museum visited they last week?",
        "Они посетили музей на прошлой неделе.",
        "Вони відвідали музей на минулому тижні.",
        "Oni odwiedzili muzeum w zeszłym tygodniu."
      ],
      [
        "I watched a movie last night.",
        "Did I watch a movie last night?",
        "I watched a movie last night?",
        "Watched I a movie last night?",
        "A movie watched I last night?",
        "Я смотрел фильм прошлой ночью.",
        "Я дивився фільм минулої ночі.",
        "Oglądałem film wczoraj w nocy."
      ],
      [
        "He studied for the exam yesterday.",
        "Did he study for the exam yesterday?",
        "He studied for the exam yesterday?",
        "Studied he for the exam yesterday?",
        "For the exam he studied yesterday?",
        "Он учился для экзамена вчера.",
        "Він готувався до екзамену вчора.",
        "On uczył się do egzaminu wczoraj."
      ],
      [
        "We cleaned the house last Saturday.",
        "Did we clean the house last Saturday?",
        "We cleaned the house last Saturday?",
        "Cleaned we the house last Saturday?",
        "The house cleaned we last Saturday?",
        "Мы убирали дом в прошлую субботу.",
        "Ми прибирали будинок минулої суботи.",
        "Sprzątaliśmy dom w zeszłą sobotę."
      ],
      [
        "She cooked dinner yesterday.",
        "Did she cook dinner yesterday?",
        "She cooked dinner yesterday?",
        "Cooked she dinner yesterday?",
        "Dinner cooked she yesterday?",
        "Она готовила ужин вчера.",
        "Вона готувала вечерю вчора.",
        "Ona gotowała obiad wczoraj."
      ],
      [
        "They traveled to Paris last summer.",
        "Did they travel to Paris last summer?",
        "They traveled to Paris last summer?",
        "Traveled they to Paris last summer?",
        "To Paris traveled they last summer?",
        "Они поехали в Париж прошлым летом.",
        "Вони поїхали в Париж минулого літа.",
        "Pojechali do Paryża latem zeszłego roku."
      ],
      [
        "I met him at the party last weekend.",
        "Did I meet him at the party last weekend?",
        "I met him at the party last weekend?",
        "Met I him at the party last weekend?",
        "At the party met I him last weekend?",
        "Я встретил его на вечеринке на прошлых выходных.",
        "Я зустрів його на вечірці минулими вихідними.",
        "Spotkałem go na imprezie w zeszły weekend."
      ],
      [
        "He worked in the office last year.",
        "Did he work in the office last year?",
        "He worked in the office last year?",
        "Worked he in the office last year?",
        "In the office worked he last year?",
        "Он работал в офисе в прошлом году.",
        "Він працював в офісі минулого року.",
        "On pracował w biurze w zeszłym roku."
      ],
      [
        "We played soccer on Sunday.",
        "Did we play soccer on Sunday?",
        "We played soccer on Sunday?",
        "Played we soccer on Sunday?",
        "Soccer we played on Sunday?",
        "Мы играли в футбол в воскресенье.",
        "Ми грали у футбол у неділю.",
        "Graliśmy w piłkę nożną w niedzielę."
      ],
      [
        "She painted a picture last week.",
        "Did she paint a picture last week?",
        "She painted a picture last week?",
        "Painted she a picture last week?",
        "A picture painted she last week?",
        "Она рисовала картину на прошлой неделе.",
        "Вона малювала картину на минулому тижні.",
        "Ona malowała obraz w zeszłym tygodniu."
      ],
      [
        "They ate dinner at 7 o'clock.",
        "Did they eat dinner at 7 o'clock?",
        "They ate dinner at 7 o'clock?",
        "Ate they dinner at 7 o'clock?",
        "At 7 o'clock ate they dinner?",
        "Они поужинали в 7 часов.",
        "Вони поїли в 7 годині.",
        "Jedli kolację o 7 godzinie."
      ],
      [
        "I called her yesterday evening.",
        "Did I call her yesterday evening?",
        "I called her yesterday evening?",
        "Called I her yesterday evening?",
        "Her called I yesterday evening?",
        "Я позвонил ей вчера вечером.",
        "Я подзвонив їй вчора ввечері.",
        "Zadzwoniłem do niej wczoraj wieczorem."
      ],
      [
        "He studied abroad last year.",
        "Did he study abroad last year?",
        "He studied abroad last year?",
        "Studied he abroad last year?",
        "Abroad studied he last year?",
        "Он учился за границей в прошлом году.",
        "Він вчився за кордоном минулого року.",
        "On studiował za granicą w zeszłym roku."
      ],
      [
        "We visited our grandparents last holiday.",
        "Did we visit our grandparents last holiday?",
        "We visited our grandparents last holiday?",
        "Visited we our grandparents last holiday?",
        "Our grandparents visited we last holiday?",
        "Мы навестили наших бабушку и дедушку в прошлые каникулы.",
        "Ми відвідали наших бабусю і дідуся на минулих канікулах.",
        "Odwiedziliśmy naszych dziadków w ubiegłe wakacje."
      ],
      [
        "She watched the new episode yesterday.",
        "Did she watch the new episode yesterday?",
        "She watched the new episode yesterday?",
        "Watched she the new episode yesterday?",
        "The new episode watched she yesterday?",
        "Она смотрела новый эпизод вчера.",
        "Вона дивилася новий епізод вчора.",
        "Ona oglądała nowy odcinek wczoraj."
      ],
      [
        "They danced at the party last night.",
        "Did they dance at the party last night?",
        "They danced at the party last night?",
        "Danced they at the party last night?",
        "At the party danced they last night?",
        "Они танцевали на вечеринке прошлой ночью.",
        "Вони танцювали на вечірці минулої ночі.",
        "Tańczyli na imprezie zeszłej nocy."
      ],
      [
        "I played the guitar all afternoon.",
        "Did I play the guitar all afternoon?",
        "I played the guitar all afternoon?",
        "Played I the guitar all afternoon?",
        "The guitar played I all afternoon?",
        "Я играл на гитаре весь день.",
        "Я грав на гітарі весь день.",
        "Grałem na gitarze przez całe popołudnie."
      ],
      [
        "He traveled to Italy last summer.",
        "Did he travel to Italy last summer?",
        "He traveled to Italy last summer?",
        "Traveled he to Italy last summer?",
        "To Italy traveled he last summer?",
        "Он путешествовал в Италию прошлым летом.",
        "Він подорожував до Італії минулого літа.",
        "On podróżował do Włoch zeszłego lata."
      ],
      [
        "We sang our favorite song at the concert.",
        "Did we sing our favorite song at the concert?",
        "We sang our favorite song at the concert?",
        "Sang we our favorite song at the concert?",
        "Our favorite song sang we at the concert?",
        "Мы пели нашу любимую песню на концерте.",
        "Ми співали нашу улюблену пісню на концерті.",
        "Śpiewaliśmy naszą ulubioną piosenkę na koncercie."
      ],
        // Пример 1
        [
          "Did you go to the cinema last night?",           // Вопрос в Past Simple
          "I was going to the cinema last night.",          // Правильный ответ в Past Continuous
          "I going to cinema last night.",              // Неправильный ответ с ошибкой (Past Continuous)
          "Was you going to the cinema last night?",       // Неправильный ответ с ошибкой (Past Continuous)
          "I go to the cinema last night.",                 // Неправильный ответ с ошибкой (Past Simple)
          "Ты ходил в кино вчера вечером?",                // Перевод на русский
          "Ви ходили в кіно вчора ввечері?",               // Перевод на украинский
          "Czy poszedłeś do kina wczoraj wieczorem?"       // Перевод на польский
        ],
        
        // Пример 2
        [
          "Were you playing the piano when she entered the room?",  // Вопрос в Past Continuous
          "I played the piano when she entered the room.",           // Правильный ответ в Past Simple
          "I was played piano when she entered the room.",       // Неправильный ответ с ошибкой (Past Continuous)
          "Did you play the piano when she entered the room?",      // Неправильный ответ с ошибкой (Past Simple)
          "I play the piano when she entered the room.",            // Неправильный ответ с ошибкой (Past Simple)
          "Ты играл на пианино, когда она вошла в комнату?",       // Перевод на русский
          "Ви грали на піаніно, коли вона ввійшла в кімнату?",    // Перевод на украинский
          "Grałeś na pianinie, gdy weszła do pokoju?"              // Перевод на польский
        ],
        
        // Пример 3
        [
          "Did you eat breakfast this morning?",                  // Вопрос в Past Simple
          "I was eating breakfast this morning.",                 // Правильный ответ в Past Continuous
          "I eat breakfast this morning.",                     // Неправильный ответ с ошибкой (Past Continuous)
          "Was you eating breakfast this morning?",              // Неправильный ответ с ошибкой (Past Continuous)
          "I ate breakfast this morning.",                        // Неправильный ответ с ошибкой (Past Simple)
          "Ты ел завтрак сегодня утром?",                         // Перевод на русский
          "Ти їв сніданок сьогодні вранці?",                      // Перевод на украинский
          "Czy jadłeś śniadanie dzisiaj rano?"                    // Перевод на польский
        ],
        
        // Пример 4
        [
          "Were they watching a movie when you called?",          // Вопрос в Past Continuous
          "They watched a movie when I called.",                  // Правильный ответ в Past Simple
          "They was watching a movie when I called.",            // Неправильный ответ с ошибкой (Past Continuous)
          "Did they watched a movie when I called?",             // Неправильный ответ с ошибкой (Past Simple)
          "They watch a movie when I called.",                   // Неправильный ответ с ошибкой (Past Simple)
          "Они смотрели фильм, когда ты позвонил?",              // Перевод на русский
          "Вони дивились фільм, коли ти подзвонив?",            // Перевод на украинский
          "Oni oglądali film, kiedy zadzwoniłeś?"                // Перевод на польский
        ],
      
        // Пример 5
        [
          "Did you study for the test yesterday?",               // Вопрос в Past Simple
          "I was studying for the test yesterday.",              // Правильный ответ в Past Continuous
          "I studied the test yesterday.",                   // Неправильный ответ с ошибкой (Past Simple)
          "Was you studying for the test yesterday?",           // Неправильный ответ с ошибкой (Past Continuous)
          "I study for the test yesterday.",                     // Неправильный ответ с ошибкой (Past Simple)
          "Ты учил материал для теста вчера?",                  // Перевод на русский
          "Ти вчився до тесту вчора?",                          // Перевод на украинский
          "Czy uczyłeś się do testu wczoraj?"                    // Перевод на польский
        ],
      
        // Пример 6
        [
          "Were they talking when I entered the room?",         // Вопрос в Past Continuous
          "They talked when I entered the room.",               // Правильный ответ в Past Simple
          "They was talking when I entered the room.",          // Неправильный ответ с ошибкой (Past Continuous)
          "Did they talk when I entered the room?",             // Неправильный ответ с ошибкой (Past Simple)
          "They talk when I entered the room.",                 // Неправильный ответ с ошибкой (Past Simple)
          "Они разговаривали, когда я вошел в комнату?",       // Перевод на русский
          "Вони розмовляли, коли я увійшов у кімнату?",        // Перевод на украинский
          "Oni rozmawiali, kiedy wszedłem do pokoju?"           // Перевод на польский
        ],
        
        // Пример 7
        [
          "Did you read the book last weekend?",                // Вопрос в Past Simple
          "I was reading the book last weekend.",               // Правильный ответ в Past Continuous
          "I read book last weekend.",                      // Неправильный ответ с ошибкой (Past Simple)
          "Was you reading the book last weekend?",            // Неправильный ответ с ошибкой (Past Continuous)
          "I reads the book last weekend.",                     // Неправильный ответ с ошибкой (Past Simple)
          "Ты читал книгу в прошлые выходные?",                 // Перевод на русский
          "Ти читав книгу минулого вихідного?",                // Перевод на украинский
          "Czy czytałeś książkę w miniony weekend?"             // Перевод на польский
        ],
        
        // Пример 8
        [
          "Were you sleeping when I called?",                   // Вопрос в Past Continuous
          "I slept when you called.",                           // Правильный ответ в Past Simple
          "I were slept when you called.",                       // Неправильный ответ с ошибкой (Past Continuous)
          "Did you sleep when I called?",                       // Неправильный ответ с ошибкой (Past Simple)
          "I sleep when you called.",                           // Неправильный ответ с ошибкой (Past Simple)
          "Ты спал, когда я позвонил?",                         // Перевод на русский
          "Ти спав, коли я подзвонив?",                         // Перевод на украинский
          "Spałeś, gdy zadzwoniłem?"                            // Перевод на польский
        ],
      
        // Пример 9
        [
          "Did you work yesterday?",                            // Вопрос в Past Simple
          "I was working yesterday.",                           // Правильный ответ в Past Continuous
          "I am worked yesterday.",                                // Неправильный ответ с ошибкой (Past Simple)
          "Was you working yesterday?",                        // Неправильный ответ с ошибкой (Past Continuous)
          "I works yesterday.",                                 // Неправильный ответ с ошибкой (Past Simple)
          "Ты работал вчера?",                                  // Перевод на русский
          "Ти працював вчора?",                                 // Перевод на украинский
          "Czy pracowałeś wczoraj?"                             // Перевод на польский
        ],
        
        // Пример 10
        [
          "Were you studying when I called?",                   // Вопрос в Past Continuous
          "I studied when you called.",                         // Правильный ответ в Past Simple
          "I was studied when you called.",                     // Неправильный ответ с ошибкой (Past Continuous)
          "Did you studied when I called?",                     // Неправильный ответ с ошибкой (Past Simple)
          "I study when you called.",                           // Неправильный ответ с ошибкой (Past Simple)
          "Ты учился, когда я позвонил?",                       // Перевод на русский
          "Ти вчився, коли я подзвонив?",                       // Перевод на украинский
          "Uczyłeś się, gdy zadzwoniłem?"                       // Перевод на польский
        ],

        [
            "Did you watch the match yesterday?",                 // Вопрос в Past Simple
            "I was watching the match yesterday.",                // Правильный ответ в Past Continuous
            "I don't watched the match yesterday.",                     // Неправильный ответ с ошибкой (Past Simple)
            "Was you watching the match yesterday?",             // Неправильный ответ с ошибкой (Past Continuous)
            "I watch the match yesterday.",                       // Неправильный ответ с ошибкой (Past Simple)
            "Ты смотрел матч вчера?",                            // Перевод на русский
            "Ти дивився матч вчора?",                            // Перевод на украинский
            "Czy oglądałeś mecz wczoraj?"                         // Перевод на польский
          ],
        
          // Пример 12
          [
            "Were they eating when you arrived?",                 // Вопрос в Past Continuous
            "They ate when I arrived.",                           // Правильный ответ в Past Simple
            "They was eating when I arrived.",                    // Неправильный ответ с ошибкой (Past Continuous)
            "Did they ate when I arrived?",                       // Неправильный ответ с ошибкой (Past Simple)
            "They eat when I arrived.",                           // Неправильный ответ с ошибкой (Past Simple)
            "Они ели, когда ты пришел?",                         // Перевод на русский
            "Вони їли, коли ти прийшов?",                        // Перевод на украинский
            "Jedli, kiedy przyjechałeś?"                          // Перевод на польский
          ],
        
          // Пример 13
          [
            "Did you go to the party last weekend?",              // Вопрос в Past Simple
            "I was going to the party last weekend.",             // Правильный ответ в Past Continuous
            "I go to the party last weekend.",                    // Неправильный ответ с ошибкой (Past Simple)
            "Was you going to the party last weekend?",          // Неправильный ответ с ошибкой (Past Continuous)
            "I went to the party last weekend.",                  // Неправильный ответ с ошибкой (Past Simple)
            "Ты ходил на вечеринку в прошлые выходные?",         // Перевод на русский
            "Ти ходив на вечірку минулого вихідного?",           // Перевод на украинский
            "Czy poszedłeś na imprezę w zeszły weekend?"          // Перевод на польский
          ],
        
          // Пример 14
          [
            "Were you reading the book when I called?",           // Вопрос в Past Continuous
            "I read the book when you called.",                   // Правильный ответ в Past Simple
            "I was read the book when you called.",               // Неправильный ответ с ошибкой (Past Continuous)
            "Did you read the book when I called?",               // Неправильный ответ с ошибкой (Past Simple)
            "I reads the book when you called.",                  // Неправильный ответ с ошибкой (Past Simple)
            "Ты читал книгу, когда я позвонил?",                  // Перевод на русский
            "Ти читав книгу, коли я подзвонив?",                  // Перевод на украинский
            "Czy czytałeś książkę, kiedy zadzwoniłem?"            // Перевод на польский
          ],
        
          // Пример 15
          [
            "Did you play soccer yesterday?",                     // Вопрос в Past Simple
            "I was playing soccer yesterday.",                    // Правильный ответ в Past Continuous
            "I played the soccer yesterday.",                         // Неправильный ответ с ошибкой (Past Simple)
            "Was you playing soccer yesterday?",                  // Неправильный ответ с ошибкой (Past Continuous)
            "I play soccer yesterday.",                            // Неправильный ответ с ошибкой (Past Simple)
            "Ты играл в футбол вчера?",                           // Перевод на русский
            "Ти грав у футбол вчора?",                            // Перевод на украинский
            "Czy grałeś w piłkę nożną wczoraj?"                    // Перевод на польский
          ],
        
          // Пример 16
          [
            "Were you sleeping when I texted you?",               // Вопрос в Past Continuous
            "I slept when you texted me.",                         // Правильный ответ в Past Simple
            "I was sleep when you texted me.",                     // Неправильный ответ с ошибкой (Past Continuous)
            "Did you sleep when I texted you?",                    // Неправильный ответ с ошибкой (Past Simple)
            "I sleep when you texted me.",                         // Неправильный ответ с ошибкой (Past Simple)
            "Ты спал, когда я тебе написал?",                     // Перевод на русский
            "Ти спав, коли я написав тобі?",                      // Перевод на украинский
            "Spałeś, gdy wysłałem ci wiadomość?"                   // Перевод на польский
          ],
        
          // Пример 17
          [
            "Did they walk to school yesterday?",                 // Вопрос в Past Simple
            "They were walking to school yesterday.",             // Правильный ответ в Past Continuous
            "They walk to school yesterday.",                     // Неправильный ответ с ошибкой (Past Simple)
            "Were they walking to school yesterday?",             // Неправильный ответ с ошибкой (Past Continuous)
            "They walks to school yesterday.",                    // Неправильный ответ с ошибкой (Past Simple)
            "Они шли в школу вчера?",                             // Перевод на русский
            "Вони йшли до школи вчора?",                          // Перевод на украинский
            "Szli do szkoły wczoraj?"                              // Перевод на польский
          ],
        
          // Пример 18
          [
            "Were you dancing at the party when I arrived?",      // Вопрос в Past Continuous
            "I danced at the party when you arrived.",            // Правильный ответ в Past Simple
            "I was dance at the party when you arrived.",         // Неправильный ответ с ошибкой (Past Continuous)
            "Did you danced at the party when I arrived?",        // Неправильный ответ с ошибкой (Past Simple)
            "I dance at the party when you arrived.",             // Неправильный ответ с ошибкой (Past Simple)
            "Ты танцевал на вечеринке, когда я пришел?",          // Перевод на русский
            "Ти танцював на вечірці, коли я прийшов?",            // Перевод на украинский
            "Tańczyłeś na imprezie, gdy przyjechałem?"            // Перевод на польский
          ],
        
          // Пример 19
          [
            "Did you visit your grandparents last Sunday?",       // Вопрос в Past Simple
            "I was visiting my grandparents last Sunday.",       // Правильный ответ в Past Continuous
            "I visit my grandparents last Sunday.",              // Неправильный ответ с ошибкой (Past Simple)
            "Was you visiting your grandparents last Sunday?",   // Неправильный ответ с ошибкой (Past Continuous)
            "I visits my grandparents last Sunday.",             // Неправильный ответ с ошибкой (Past Simple)
            "Ты навещал своих бабушку и дедушку в прошлое воскресенье?", // Перевод на русский
            "Ти навідував своїх бабусю та дідуся минулої неділі?",    // Перевод на украинский
            "Czy odwiedziłeś swoich dziadków w zeszłą niedzielę?"      // Перевод на польский
          ],
        
          // Пример 20
          [
            "Were they singing when you entered the room?",      // Вопрос в Past Continuous
            "They sang when I entered the room.",                // Правильный ответ в Past Simple
            "They was singing when I entered the room.",         // Неправильный ответ с ошибкой (Past Continuous)
            "Did they sing when I entered the room?",            // Неправильный ответ с ошибкой (Past Simple)
            "They sing when I entered the room.",                // Неправильный ответ с ошибкой (Past Simple)
            "Они пели, когда я вошел в комнату?",                // Перевод на русский
            "Вони співали, коли я увійшов у кімнату?",           // Перевод на украинский
            "Śpiewali, kiedy wszedłem do pokoju?"                // Перевод на польский
          ],
      function (id) {
        return replaceEllipsisWithWord(id, pastContinuousOrSimple);
      }  
  ];

// Если это свойство есть, то оно попадает в заголовок теста
pastContinuousOrSimple.nameLeson = "Past Continuous Or Past Simple";
  