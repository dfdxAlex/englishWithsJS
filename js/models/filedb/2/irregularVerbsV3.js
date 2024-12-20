const irregularVerbsV3 = [
    // Example for "be"
    ["be", "been", "was", "wer", "ben", "быть", "бути", "być"],
    // Example for "break"
    ["break", "broken", "broke", "braek", "brocken", "ломать", "ламати", "łamać"],
    // Example for "buy"
    ["buy", "bought", "buoght", "bey", "baut", "покупать", "купувати", "kupować"],
    // Example for "choose"
    ["choose", "chosen", "chose", "choosen", "chossen", "выбирать", "вибирати", "wybierać"],
    // Example for "do"
    ["do", "done", "did", "doo", "dne", "делать", "робити", "robić"],
    // Example for "eat"
    ["eat", "eaten", "ate", "et", "eatn", "есть", "їсти", "jeść"],
    // Example for "go"
    ["go", "gone", "went", "gon", "goen", "идти", "йти", "iść"],
    // Example for "have"
    ["have", "had", "haved", "haev", "hadn", "иметь", "мати", "mieć"],
    // Example for "make"
    ["make", "made", "maked", "maek", "mdae", "делать", "робити", "robić"],
    // Example for "see"
    ["see", "seen", "saw", "se", "sen", "видеть", "бачити", "widzieć"],
    // Example for "take"
    ["take", "taken", "took", "taek", "takn", "брать", "брати", "brać"],
    // Example for "write"
    ["write", "written", "wrote", "writ", "wrtten", "писать", "писати", "pisać"],
    // Example for "speak"
    ["speak", "spoken", "spoke", "spaek", "spokn", "говорить", "говорити", "mówić"],
    // Example for "read"
    ["read", "read", "red", "reed", "rad", "читать", "читати", "czytać"],
    // Example for "drive"
    ["drive", "driven", "drove", "driv", "droven", "водить", "водити", "prowadzić"],
    // Example for "begin"
    ["begin", "begun", "began", "bginn", "begun", "начинать", "починати", "zaczynać"],
    // Example for "find"
    ["find", "found", "founded", "fynd", "foun", "находить", "знаходити", "znaleźć"],
    // Example for "think"
    ["think", "thought", "thoght", "thynk", "thouht", "думать", "думати", "myśleć"],
    // Example for "give"
    ["give", "given", "gave", "giv", "gven", "давать", "давати", "dawać"],
    // Example for "know"
    ["know", "known", "knew", "knw", "knwon", "знать", "знати", "wiedzieć"],
    // Added entries to extend to 100
    ["become", "become", "became", "becm", "becomm", "становиться", "ставати", "stawać się"],
    ["begin", "begun", "began", "bgin", "begnn", "начинать", "починати", "zaczynać"],
    ["blow", "blown", "blew", "blo", "bloon", "дуть", "дути", "wiać"],
    ["break", "broken", "broke", "brek", "brokn", "ломать", "ламати", "łamać"],
    ["bring", "brought", "brang", "bryng", "broght", "приносить", "приносити", "przynosić"],
    ["build", "built", "bult", "bulid", "bildt", "строить", "будувати", "budować"],
    ["catch", "caught", "catched", "cath", "caugth", "ловить", "ловити", "łapać"],
    ["choose", "chosen", "chose", "chus", "chosn", "выбирать", "вибирати", "wybierać"],
    ["come", "come", "came", "com", "coom", "приходить", "приходити", "przyjść"],
    ["cut", "cut", "cutted", "kut", "cutt", "резать", "різати", "ciąć"],
    ["dig", "dug", "digged", "dgi", "dgg", "копать", "копати", "kopać"],
    ["do", "done", "did", "doo", "dne", "делать", "робити", "robić"],
    ["draw", "drawn", "drew", "drow", "drawnn", "рисовать", "малювати", "rysować"],
    ["drink", "drunk", "drank", "drnk", "drannk", "пить", "пити", "pić"],
    ["drive", "driven", "drove", "driv", "droovn", "водить", "водити", "prowadzić"],
    ["eat", "eaten", "ate", "eatn", "eten", "есть", "їсти", "jeść"],
    ["fall", "fallen", "fell", "fll", "falln", "падать", "падати", "upaść"],
    ["feel", "felt", "feeled", "fell", "feltt", "чувствовать", "відчувати", "czuć"],
    ["fight", "fought", "fighted", "fite", "foght", "бороться", "боротися", "walczyć"],
    ["find", "found", "founded", "fynd", "founde", "находить", "знаходити", "znaleźć"],
    ["fly", "flown", "flew", "fliy", "flon", "летать", "літати", "latać"],
    ["forget", "forgotten", "forgot", "fogot", "forgotn", "забывать", "забувати", "zapominać"],
    ["get", "gotten", "got", "gott", "gotn", "получать", "отримувати", "dostać"],
    ["give", "given", "gave", "giv", "gvenn", "давать", "давати", "dawać"],
    ["go", "gone", "went", "gonn", "gon", "идти", "йти", "iść"],
    ["grow", "grown", "grew", "grouw", "growwn", "расти", "рости", "rosnąć"],
    ["have", "had", "haved", "haev", "hadd", "иметь", "мати", "mieć"],
    ["hear", "heard", "heared", "hear", "haerd", "слышать", "чути", "słyszeć"],
    ["hide", "hidden", "hid", "hide", "hidenn", "прятать", "ховати", "ukrywać"],
    ["hold", "held", "holded", "hld", "helld", "держать", "тримати", "trzymać"],
    ["know", "known", "knew", "knwn", "knonn", "знать", "знати", "wiedzieć"],
    ["leave", "left", "leaved", "leve", "lef", "покидать", "залишати", "opuszczać"],
    ["lose", "lost", "losed", "los", "loost", "терять", "губити", "gubić"],
    ["make", "made", "maked", "maek", "mad", "делать", "робити", "robić"],
    ["meet", "met", "meeted", "mete", "mett", "встречать", "зустрічати", "spotykać"],
    ["pay", "paid", "payed", "paay", "pad", "платить", "платити", "płacić"],
    ["put", "put", "putted", "puut", "poot", "класть", "класти", "kłaść"],
    ["read", "read", "red", "reed", "readt", "читать", "читати", "czytać"],
    ["ride", "ridden", "rode", "ridd", "roden", "ездить", "їздити", "jeździć"],
    ["run", "run", "ran", "rn", "runn", "бежать", "бігти", "biegać"],
    ["say", "said", "sayd", "saay", "saidd", "сказать", "сказати", "mówić"],
    ["see", "seen", "saw", "se", "sen", "видеть", "бачити", "widzieć"],
    ["sell", "sold", "selled", "seld", "sould", "продавать", "продавати", "sprzedawać"],

  ];  

  // Если это свойство есть, то оно попадает в заголовок теста
  irregularVerbsV3.nameLeson = "Irregular Verbs V3";
