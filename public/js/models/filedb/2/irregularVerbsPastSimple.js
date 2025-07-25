const irregularVerbsPastSimple = [
    ['...be', 'was/were', 'is', 'are', 'been', 'быть', 'бути', 'być'],
    ['...become', 'became', 'become', 'begun', 'begin', 'становиться', 'ставати', 'stać się'],
    ['...begin', 'began', 'begin', 'begun', 'began', 'начинать', 'починати', 'zacząć'],
    ['...break', 'broke', 'breaked', 'broken', 'breaks', 'ломать', 'ламати', 'łamać'],
    ['...bring', 'brought', 'bringed', 'broughted', 'brung', 'приносить', 'приносити', 'przynosić'],
    ['...build', 'built', 'builded', 'builds', 'builted', 'строить', 'будувати', 'budować'],
    ['...buy', 'bought', 'buyed', 'buys', 'boughted', 'покупать', 'купувати', 'kupować'],
    ['...choose', 'chose', 'choosen', 'choose', 'choosed', 'выбирать', 'вибирати', 'wybierać'],
    ['...come', 'came', 'comed', 'comes', 'coming', 'приходить', 'приходити', 'przychodzić'],
    ['...do', 'did', 'done', 'does', 'doing', 'делать', 'робити', 'robić'],
    ['...drink', 'drank', 'drunk', 'drinks', 'drinked', 'пить', 'пити', 'pić'],
    ['...drive', 'drove', 'driven', 'drives', 'drive', 'водить', 'водити', 'prowadzić'],
    ['...eat', 'ate', 'eated', 'eats', 'eaten', 'есть', 'їсти', 'jeść'],
    ['...find', 'found', 'finded', 'finds', 'finding', 'находить', 'знаходити', 'znaleźć'],
    ['...get', 'got', 'getted', 'gets', 'getting', 'получать', 'отримувати', 'dostać'],
    ['...give', 'gave', 'gived', 'gives', 'given', 'давать', 'давати', 'dawać'],
    ['...go', 'went', 'gone', 'goes', 'going', 'идти', 'йти', 'iść'],
    ['...have', 'had', 'haved', 'has', 'having', 'иметь', 'мати', 'mieć'],
    ['...know', 'knew', 'known', 'knows', 'knowed', 'знать', 'знати', 'wiedzieć'],
    ['...leave', 'left', 'leaved', 'leaves', 'lefted', 'покидать', 'залишати', 'zostawić'],
    ['...make', 'made', 'maked', 'makes', 'making', 'делать, создавать', 'робити', 'robić'],
    ['...meet', 'met', 'meeting', 'meet', 'meeted', 'встречать', 'зустрічати', 'spotykać'],
    ['...read', 'read', 'readed', 'reads', 'reading', 'читать', 'читати', 'czytać'],
    ['...run', 'ran', 'runned', 'runs', 'running', 'бежать', 'бігти', 'biec'],
    ['...say', 'said', 'sayed', 'says', 'saying', 'говорить', 'казати', 'powiedzieć'],
    ['...see', 'saw', 'seen', 'sees', 'seeing', 'видеть', 'бачити', 'widzieć'],
    ['...sing', 'sang', 'singed', 'sings', 'singing', 'петь', 'співати', 'śpiewać'],
    ['...sit', 'sat', 'sitted', 'sits', 'sitting', 'сидеть', 'сидіти', 'siedzieć'],
    ['...speak', 'spoke', 'spoken', 'speaks', 'speaked', 'говорить', 'говорити', 'mówić'],
    ['...take', 'took', 'taken', 'takes', 'taking', 'брать', 'брати', 'brać'],
    ['...tell', 'told', 'telled', 'tells', 'telling', 'рассказывать', 'розповідати', 'mówić'],
    ['...think', 'thought', 'thinked', 'thinks', 'thinking', 'думать', 'думати', 'myśleć'],
    ['...write', 'wrote', 'written', 'writes', 'writed', 'писать', 'писати', 'pisać'],
        ["arise", "arose", "arising", "arises", "arisen", "возник", "виник", "arose"],
        ["awake", "awoke", "awakening", "awakes", "awoken", "проснулся", "прокинувся", "awoke"],
        ["be", "was/were", "being", "is/are", "been", "был", "був", "was"],
        ["bear", "bore", "bearing", "bears", "born", "родил", "народив", "bore"],
        ["become", "became", "becoming", "becomes", "become", "стал", "став", "became"],
        ["begin", "began", "beginning", "begins", "begun", "начал", "почав", "began"],
        ["bend", "bent", "bending", "bends", "bented", "согнул", "зігнув", "bent"],
        ["bet", "bet", "betting", "bets", "betted", "поставил", "поставив", "bet"],
        ["bid", "bid", "bidding", "bids", "bided", "предложил цену", "запропонував ціну", "bid"],
        ["bite", "bit", "biting", "bites", "bitten", "укусил", "укушений", "bit"],
        ["bleed", "bled", "bleeding", "bleeds", "bleded", "потек", "потік", "bled"],
        ["blow", "blew", "blowing", "blows", "blown", "дул", "дув", "blew"],
        ["break", "broke", "breaking", "breaks", "broken", "сломал", "зламав", "broke"],
        ["bring", "brought", "bringing", "brings", "bringet", "принес", "приніс", "brought"],
        ["broadcast", "broadcast", "broadcasting", "broadcasts", "broadcasted", "вещал", "виступав", "broadcast"],
        ["build", "built", "building", "builds", "built", "построил", "побудував", "built"],
        ["burn", "burned", "burning", "burns", "burne", "сжег", "спалив", "burnt"],
        ["burn", "burnt", "burning", "burns", "burnet", "сжег", "спалив", "burnt"],
        ["buy", "bought", "buying", "buys", "bought", "купил", "купив", "bought"],
        ["cast", "cast", "casting", "casts", "casted", "бросил", "кинув", "cast"],
        ["catch", "caught", "catching", "catches", "caught", "поймал", "піймав", "caught"],
        ["choose", "chose", "choosing", "chooses", "chosen", "выбрал", "обрав", "chose"],
        ["cling", "clung", "clinging", "clings", "clungs", "привязался", "причепився", "clung"],
        ["come", "came", "coming", "comes", "come", "пришел", "прийшов", "came"],
        ["cost", "cost", "costing", "costs", "cast", "стоил", "коштував", "cost"],
        ["creep", "crept", "creeping", "creeps", "crept", "полз", "повз", "crept"],
        ["deal", "dealt", "dealing", "deals", "dealed", "имел дело", "мав справу", "dealt"],
        ["dig", "dug", "digging", "digs", "duged", "выкопал", "викопав", "dug"],
        ["do", "did", "doing", "does", "done", "сделал", "зробив", "did"],
        ["draw", "drew", "drawing", "draws", "drawn", "нарисовал", "намалював", "drew"],
        ["drink", "drank", "drinking", "drinks", "drunk", "пил", "пив", "drank"],
        ["drive", "drove", "driving", "drives", "driven", "водил", "водив", "drove"],
        ["eat", "ate", "eating", "eats", "eaten", "съел", "з'їв", "ate"],
        ["fall", "fell", "falling", "falls", "fallen", "упал", "упав", "fell"],
        ["feed", "fed", "feeding", "feeds", "feded", "кормил", "кормив", "fed"],
        ["feel", "felt", "feeling", "feels", "feled", "чувствовал", "відчував", "felt"],
        ["fight", "fought", "fighting", "fights", "fought", "боролся", "боровся", "fought"],
        ["find", "found", "finding", "finds", "finded", "нашел", "знайшов", "found"],
        ["fit", "fitted", "fitting", "fits", "fited", "подошел", "підійшов", "fit"],
        ["fit", "fit", "fitting", "fits", "fited", "подошел", "підійшов", "fit"],
        ["flee", "fled", "fleeing", "flees", "fleded", "сбежал", "втік", "fled"],
        ["fling", "flung", "flinging", "flings", "flunged", "бросил", "кинув", "flung"],
        ["fly", "flew", "flying", "flies", "flown", "летел", "літав", "flew"],
        ["forbid", "forbade", "forbidding", "forbids", "forbidden", "запретил", "забороняв", "forbade"],
        ["forget", "forgot", "forgetting", "forgets", "forgotten", "забыл", "забув", "forgot"],
        ["forgive", "forgave", "forgiving", "forgives", "forgiven", "простил", "пробачив", "forgave"],
        ["freeze", "froze", "freezing", "freezes", "frozen", "замерз", "замерз", "froze"],
        ["get", "got", "getting", "gets", "gotten", "получил", "отримав", "got"],
        ["give", "gave", "giving", "gives", "given", "дал", "дав", "gave"],
        ["go", "went", "going", "goes", "gone", "пошел", "пішов", "went"],
        ["grow", "grew", "growing", "grows", "grown", "вырос", "виріс", "grew"],
        ["hang", "hung", "hanging", "hangs", "hunged", "повесил", "повісив", "hung"],
        ["have", "had", "having", "has", "hayed", "имел", "мав", "had"],
        ["hear", "heard", "hearing", "hears", "hearded", "услышал", "почув", "heard"],
        ["hide", "hid", "hiding", "hides", "hidden", "скрыл", "сховав", "hid"],
        ["hit", "hit", "hitting", "hits", "hit", "ударил", "вдарив", "hit"],
        ["hold", "held", "holding", "holds", "holded", "держал", "тримав", "held"],
        ["hurt", "hurt", "hurting", "hurts", "hurted", "повредил", "ушкодив", "hurt"],
        ["keep", "kept", "keeping", "keeps", "kept", "сохранил", "зберіг", "kept"],
        ["know", "knew", "knowing", "knows", "known", "знал", "знав", "knew"],
        ["lay", "laid", "laying", "lays", "laied", "положил", "поклав", "laid"],
        ["lead", "led", "leading", "leads", "leded", "повел", "повів", "led"],
        ["leave", "left", "leaving", "leaves", "leftted", "покинул", "покинув", "left"],
        ["lend", "lent", "lending", "lends", "lenf", "одолжил", "позичив", "lent"],
        ["let", "let", "letting", "lets", "leted", "позволил", "дозволив", "let"],
        ["lie", "lay", "lying", "lies", "lain", "лег", "лежав", "lay"],
        ["light", "lighted", "lighting", "lights", "lited", "зажег", "запалив", "lit"],
        ["light", "lit", "lighting", "lights", "lited", "зажег", "запалив", "lit"],
        ["lose", "lost", "losing", "loses", "lost", "потерял", "втратив", "lost"],
        ["make", "made", "making", "makes", "maded", "сделал", "зробив", "made"],
        ["mean", "meant", "meaning", "means", "meanted", "означал", "означав", "meant"],
        ["meet", "met", "meeting", "meets", "met", "встретил", "зустрів", "met"],
        ["pay", "paid", "paying", "pays", "paided", "оплатил", "оплатив", "paid"],
        ["put", "put", "putting", "puts", "put", "положил", "поклав", "put"],
        ["quit", "quit", "quitting", "quits", "quited", "ушел", "пішов", "quit"],
        ["ride", "rode", "riding", "rides", "ridden", "катался", "катався", "rode"],
        ["ring", "rang", "ringing", "rings", "rung", "позвонил", "зателефонував", "rang"],
        ["rise", "rose", "rising", "rises", "risen", "встал", "встав", "rose"],
        ["run", "ran", "running", "runs", "run", "бежал", "біг", "ran"],
        ["say", "said", "saying", "says", "sayied", "сказал", "сказав", "said"],
        ["see", "saw", "seeing", "sees", "seen", "видел", "бачив", "saw"],
        ["sell", "sold", "selling", "sells", "sold", "продал", "продав", "sold"],
        ["send", "sent", "sending", "sends", "sents", "отправил", "відправив", "sent"],
        ["set", "set", "setting", "sets", "setted", "установил", "встановив", "set"],
        ["shake", "shook", "shaking", "shakes", "shaken", "потряс", "трусив", "shook"],
        ["shine", "shone", "shining", "shines", "shones", "светил", "світить", "shone"],
        ["shoot", "shot", "shooting", "shoots", "shoted", "стрелял", "стріляв", "shot"],
        ["show", "showed", "showing", "shows", "shown", "показал", "показав", "showed"],
        ["shrink", "shrank", "shrinking", "shrinks", "shrunk", "сжался", "зменшився", "shrank"],
        ["shut", "shut", "shutting", "shuts", "shuted", "закрыл", "закрив", "shut"],
        ["sing", "sang", "singing", "sings", "sung", "пел", "співав", "sang"],
        ["sink", "sank", "sinking", "sinks", "sunk", "потопил", "потопив", "sank"],
        ["sit", "sat", "sitting", "sits", "sat", "сел", "сів", "sat"],
        ["sleep", "slept", "sleeping", "sleeps", "sleped", "спал", "спав", "slept"],
        ["slide", "slid", "sliding", "slides", "slid", "скользнул", "ковзнув", "slid"],
        ["speak", "spoke", "speaking", "speaks", "spoken", "говорил", "говорив", "spoke"],
        ["spend", "spent", "spending", "spends", "spented", "потратил", "витратив", "spent"],
        ["spill", "spilled", "spilling", "spills", "spild", "разлил", "розлив", "spilled"],
        ["spill", "spilt", "spilling", "spills", "spild", "разлил", "розлив", "spilled"],
        ["spit", "spat", "spitting", "spits", "spat", "плюнул", "плюнув", "spat"],
        ["split", "split", "splitting", "splits", "split", "разделил", "розділив", "split"],
        ["spread", "spread", "spreading", "spreads", "spreaded", "распространил", "поширив", "spread"],
        ["stand", "stood", "standing", "stands", "stood", "стоял", "стояв", "stood"],
        ["steal", "stole", "stealing", "steals", "stolen", "украл", "вкрав", "stole"],
        ["stick", "stuck", "sticking", "sticks", "stuck", "приклеил", "приліпив", "stuck"],
        ["strike", "struck", "striking", "strikes", "strack", "ударил", "вдарив", "struck"],
        ["swim", "swam", "swimming", "swims", "swum", "плыл", "плив", "swam"],
        ["take", "took", "taking", "takes", "taken", "взял", "взяв", "took"],
        ["teach", "taught", "teaching", "teaches", "teached", "научил", "навчив", "taught"],
        ["tear", "tore", "tearing", "tears", "torn", "разорвал", "порвав", "tore"],
        ["tell", "told", "telling", "tells", "toled", "сказал", "сказав", "told"],
        ["think", "thought", "thinking", "thinks", "thinked", "думал", "думав", "thought"],
        ["throw", "threw", "throwing", "throws", "thrown", "бросил", "кинув", "threw"],
        ["understand", "understood", "understanding", "understands", "understood", "понял", "зрозумів", "understood"],
        ["wake", "woke", "waking", "wakes", "woken", "разбудил", "будив", "woke"],
        ["wear", "wore", "wearing", "wears", "worn", "носил", "носив", "wore"],
        ["win", "won", "winning", "wins", "wonned", "выиграл", "виграв", "won"],
        ["write", "wrote", "writing", "writes", "written", "написал", "написав", "wrote"],
        ["went", "go", "come", "see", "take", "пошел", "пішов", "poszedł"],
        ["saw", "see", "go", "begin", "find", "увидел", "побачив", "zobaczył"],
        ["took", "take", "come", "give", "find", "взял", "взяв", "wziął"],
        ["gave", "give", "take", "see", "bring", "дал", "дав", "dał"],
        ["found", "find", "go", "come", "take", "нашел", "знайшов", "znalazł"],
        ["began", "begin", "go", "see", "take", "начал", "почав", "zaczął"],
        ["came", "come", "see", "go", "take", "пришел", "прийшов", "przyszedł"],
        ["made", "make", "see", "find", "give", "сделал", "зробив", "zrobił"],
        ["thought", "think", "go", "find", "come", "думал", "думав", "myślał"],
        ["felt", "feel", "give", "begin", "see", "чувствовал", "відчував", "czuł"],
        ["left", "leave", "come", "bring", "find", "оставил", "залишив", "zostawił"],
        ["brought", "bring", "give", "see", "find", "принес", "приніс", "przyniósł"],
        ["knew", "know", "go", "find", "take", "знал", "знав", "wiedział"],
        ["got", "get", "see", "bring", "find", "получил", "отримав", "dostał"],
        ["stood", "stand", "go", "take", "give", "стоял", "стояв", "stał"],
        ["ran", "run", "see", "bring", "find", "бежал", "біг", "biegł"],
        ["wrote", "write", "give", "find", "bring", "написал", "написав", "napisał"],
        ["read", "read", "see", "come", "find", "читал", "читав", "czytał"],
        ["drove", "drive", "take", "find", "go", "вел", "вів", "prowadził"],
        ["sat", "sit", "go", "see", "find", "сел", "сів", "usiadł"],
        ["won", "win", "take", "see", "bring", "выиграл", "виграв", "wygrał"],
        ["lost", "lose", "come", "find", "give", "потерял", "втратив", "stracił"],
        ["met", "meet", "see", "come", "find", "встретил", "зустрів", "spotkał"],
        ["paid", "pay", "take", "give", "find", "заплатил", "заплатив", "zapłacił"],
        ["bought", "buy", "see", "find", "bring", "купил", "купив", "kupił"],
        ["spoke", "speak", "go", "find", "take", "говорил", "говорив", "mówił"],
        ["sold", "sell", "bring", "find", "go", "продал", "продав", "sprzedał"],
        ["built", "build", "go", "see", "find", "построил", "побудував", "zbudował"],
        ["chose", "choose", "give", "find", "bring", "выбрал", "вибрав", "wybrał"],
        ["flew", "fly", "go", "find", "see", "летал", "літав", "latał"],
        ["sang", "sing", "see", "come", "find", "пел", "співав", "śpiewał"],
        ["drank", "drink", "give", "see", "find", "пил", "пив", "pił"],
        ["ate", "eat", "come", "find", "go", "ел", "їв", "jadł"],
        ["fell", "fall", "see", "find", "come", "упал", "впав", "spadł"],
        ["cut", "cut", "go", "see", "bring", "резал", "різав", "cięty"],
        ["hurt", "hurt", "take", "go", "find", "ранил", "поранив", "zranił"],
        ["broke", "break", "see", "come", "find", "сломал", "зламав", "złamał"],
        ["sent", "send", "go", "find", "see", "послал", "надіслав", "wysłał"],
        ["wore", "wear", "see", "find", "come", "носил", "носив", "nosił"],
        ["swam", "swim", "go", "find", "bring", "плавал", "плавав", "pływał"],
        ["rang", "ring", "come", "find", "see", "звонил", "дзвонив", "dzwonił"],
        ["hid", "hide", "go", "find", "see", "спрятал", "сховав", "schował"],
        ["stood", "stand", "come", "go", "find", "стоял", "стояв", "stał"],
        ["held", "hold", "see", "come", "find", "держал", "тримав", "trzymał"],
        ["shook", "shake", "see", "give", "bring", "потряс", "трусив", "potrząsnął"],
        ["understood", "understand", "see", "find", "go", "понимал", "розумів", "rozumiał"],
        ["kept", "keep", "give", "find", "see", "хранил", "зберігав", "przechowywał"],
        ["caught", "catch", "go", "find", "see", "поймал", "спіймав", "złapał"],
        ["drew", "draw", "see", "find", "go", "рисовал", "малював", "rysował"],
        ["built", "build", "go", "find", "come", "строил", "будував", "budował"],
        ["slept", "sleep", "see", "go", "find", "спал", "спав", "spał"],
        ["dreamt", "dream", "go", "find", "see", "мечтал", "мріяв", "marzył"],
        ["lent", "lend", "come", "find", "see", "одолжил", "позичив", "pożyczył"],
        ["rose", "rise", "see", "go", "find", "встал", "встав", "powstał"],
        ["shone", "shine", "go", "see", "bring", "сиял", "сяяв", "świecił"],
        ["taught", "teach", "see", "go", "find", "учил", "навчав", "uczył"],
        ["fought", "fight", "come", "find", "see", "боролся", "бився", "walczył"],
        ["burnt", "burn", "go", "see", "find", "сгорел", "згорів", "spalił się"],
        ["spread", "spread", "come", "go", "find", "распространил", "поширив", "rozprzestrzenił"],
        ["knelt", "kneel", "see", "find", "go", "встал на колени", "встав на коліна", "klęknął"],
        ["wept", "weep", "go", "find", "see", "плакал", "плакав", "płakał"],
        ["sweep", "sweep", "find", "go", "see", "подметал", "підмітав", "zamiatał"],
        ["burn", "burn", "give", "find", "come", "горел", "горів", "palił się"],
        ["wrote", "write", "go", "see", "bring", "писал", "писав", "pisał"],
        ["ate", "eat", "find", "see", "take", "ел", "їв", "jadł"],
        ["built", "build", "come", "go", "see", "строил", "будував", "budował"],
        ["drove", "drive", "see", "find", "bring", "ехал", "їхав", "prowadził"],
        ["dreamt", "dream", "find", "come", "see", "мечтал", "мріяв", "marzył"],
        ["paid", "pay", "go", "find", "see", "заплатил", "заплатив", "zapłacił"],
        ["read", "read", "find", "see", "go", "читал", "читав", "czytał"],
        ["threw", "throw", "find", "go", "bring", "бросил", "кинув", "rzucił"],
        ["worked", "work", "give", "find", "come", "работал", "працював", "pracował"],
        ["played", "play", "see", "take", "bring", "играл", "грав", "grał"],
        ["helped", "help", "go", "find", "see", "помогал", "допомагав", "pomagał"],
        ["called", "call", "come", "see", "go", "звонил", "дзвонив", "dzwonił"],
        ["moved", "move", "find", "bring", "take", "переехал", "переїхав", "przeprowadził się"],
        ["lived", "live", "see", "go", "bring", "жил", "жив", "mieszkał"],
        ["loved", "love", "find", "take", "come", "любил", "любив", "kochał"],
        ["needed", "need", "go", "find", "see", "нуждался", "потребував", "potrzebował"],
        ["tried", "try", "see", "take", "bring", "пытался", "намагався", "próbował"],
        ["opened", "open", "come", "find", "see", "открыл", "відкрив", "otworzył"],
        ["talked", "talk", "go", "see", "take", "разговаривал", "розмовляв", "rozmawiał"],
        ["closed", "close", "bring", "come", "find", "закрыл", "закрив", "zamknął"],
        ["waited", "wait", "take", "see", "go", "ждал", "чекав", "czekał"],
        ["danced", "dance", "find", "bring", "see", "танцевал", "танцював", "tańczył"],
        ["walked", "walk", "go", "take", "find", "гулял", "гуляв", "chodził"],
        ["jumped", "jump", "see", "come", "bring", "прыгал", "стрибав", "skakał"],
        ["studied", "study", "find", "go", "see", "учился", "вчився", "uczył się"],
        ["visited", "visit", "take", "bring", "see", "посетил", "відвідав", "odwiedził"],
        ["cooked", "cook", "go", "see", "find", "готовил", "готував", "gotował"],
        ["cried", "cry", "find", "come", "take", "плакал", "плакав", "płakał"],
        ["cleaned", "clean", "see", "go", "find", "убирал", "прибрав", "czyścił"],
        ["talked", "talk", "bring", "come", "find", "разговаривал", "розмовляв", "rozmawiał"],
        ["painted", "paint", "go", "take", "find", "рисовал", "малював", "malował"],
        ["planned", "plan", "find", "bring", "see", "планировал", "планував", "planował"],
        ["watched", "watch", "go", "come", "find", "смотрел", "дивився", "oglądał"],
        ["fixed", "fix", "take", "see", "bring", "починил", "полагодив", "naprawił"],
        ["shouted", "shout", "go", "find", "see", "кричал", "кричав", "krzyczał"],
        ["saved", "save", "see", "come", "take", "сохранил", "зберіг", "uratował"],
        ["wished", "wish", "find", "go", "see", "желал", "бажав", "życzył"],
        ["laughed", "laugh", "bring", "come", "see", "смеялся", "сміявся", "śmiał się"],
        ["smiled", "smile", "go", "take", "find", "улыбался", "усміхався", "uśmiechał się"],
];

// этот код должен добавить к нулевому индексц три точки там, где их нет
// три точки нужны чтобы нейросеть не озвучивала это слово, движек не 
// отсылает на озвучку строки с многоточием.
irregularVerbsPastSimple.forEach((el, index, array) => {
    if (!array[index][0].includes('...'))
        array[index][0] = '...'+array[index][0];
  });

// Если это свойство есть, то оно попадает в заголовок теста
irregularVerbsPastSimple.nameLeson = "Irregular Verbs Past Simple";
