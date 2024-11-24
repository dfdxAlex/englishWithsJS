const pastContinuousArray = [
    [
        "I was ... a book when the lights went out.",
        "reading",
        "read",
        "reads",
        "will read",
        "Я читал книгу, когда погас свет.",
        "Я читав книгу, коли погасло світло.",
        "Czytałem książkę, gdy zgasło światło."
      ],
      [
        "She wasn't ... the report at that time.",
        "writing",
        "wrote",
        "write",
        "will write",
        "Она не писала отчет в тот момент.",
        "Вона не писала звіт у той час.",
        "Ona nie pisała raportu w tym czasie."
      ],
      [
        "We were ... at the museum when it started raining.",
        "walking",
        "walked",
        "walk",
        "will walk",
        "Мы гуляли в музее, когда начался дождь.",
        "Ми гуляли в музеї, коли почався дощ.",
        "Spacerowaliśmy po muzeum, gdy zaczęło padać."
      ],
      [
        "He was ... lunch when I called him.",
        "having",
        "had",
        "have",
        "will have",
        "Он обедал, когда я позвонил.",
        "Він обідав, коли я подзвонив.",
        "On jadł obiad, kiedy zadzwoniłem."
      ],
      [
        "They were ... for the train when I saw them.",
        "waiting",
        "waited",
        "wait",
        "will wait",
        "Они ждали поезд, когда я их увидел.",
        "Вони чекали поїзд, коли я їх побачив.",
        "Czekali na pociąg, kiedy ich zobaczyłem."
      ],
      [
        "I was ... to the store when I met her.",
        "going",
        "went",
        "go",
        "will go",
        "Я шел в магазин, когда встретил её.",
        "Я йшов до магазину, коли зустрів її.",
        "Szłem do sklepu, gdy ją spotkałem."
      ],
      [
        "They were ... the house when I arrived.",
        "leaving",
        "left",
        "leave",
        "will leave",
        "Они уходили из дома, когда я приехал.",
        "Вони виходили з дому, коли я приїхав.",
        "Oni wychodzili z domu, gdy przyjechałem."
      ],
      [
        "She was ... her keys when I called.",
        "looking for",
        "looked for",
        "look for",
        "will look for",
        "Она искала свои ключи, когда я позвонил.",
        "Вона шукала свої ключі, коли я подзвонив.",
        "Ona szukała swoich kluczy, kiedy zadzwoniłem."
      ],
      [
        "We were ... in the park when it started snowing.",
        "walking",
        "walked",
        "walk",
        "will walk",
        "Мы гуляли в парке, когда начался снег.",
        "Ми гуляли в парку, коли почав падати сніг.",
        "Spacerowaliśmy po parku, gdy zaczęło padać śnieg."
      ],
      [
        "I was ... my car when it broke down.",
        "driving",
        "drove",
        "drive",
        "will drive",
        "Я ехал на машине, когда она сломалась.",
        "Я їхав на машині, коли вона зламалася.",
        "Jechałem samochodem, kiedy się zepsuł."
      ],
      [
        "She wasn't ... to the meeting when I saw her.",
        "going",
        "went",
        "go",
        "will go",
        "Она не шла на встречу, когда я её увидел.",
        "Вона не йшла на зустріч, коли я її побачив.",
        "Ona nie szła na spotkanie, kiedy ją zobaczyłem."
      ],
      [
        "They were ... to the airport when I passed by.",
        "heading",
        "headed",
        "head",
        "will head",
        "Они направлялись в аэропорт, когда я мимо прошел.",
        "Вони прямували до аеропорту, коли я пройшов мимо.",
        "Szli na lotnisko, kiedy przeszedłem obok."
      ],
      [
        "I was ... a movie when I got your message.",
        "watching",
        "watched",
        "watch",
        "will watch",
        "Я смотрел фильм, когда получил твое сообщение.",
        "Я дивився фільм, коли отримав твоє повідомлення.",
        "Oglądałem film, gdy dostałem twoją wiadomość."
      ],
      [
        "He wasn't ... the presentation at that time.",
        "giving",
        "gave",
        "give",
        "will give",
        "Он не проводил презентацию в тот момент.",
        "Він не проводив презентацію в той час.",
        "On nie prowadził prezentacji w tym czasie."
      ],
      [
        "We were ... the recipe when I found the mistake.",
        "following",
        "followed",
        "follow",
        "will follow",
        "Мы следовали рецепту, когда я нашел ошибку.",
        "Ми слідували рецепту, коли я знайшов помилку.",
        "Podążaliśmy za przepisem, kiedy znalazłem błąd."
      ],
      [
        "She was ... her room when I walked in.",
        "cleaning",
        "cleaned",
        "clean",
        "will clean",
        "Она убирала свою комнату, когда я вошел.",
        "Вона прибирала свою кімнату, коли я зайшов.",
        "Ona sprzątała swój pokój, kiedy wszedłem."
      ],
      [
        "I wasn't ... to work when the storm started.",
        "going",
        "went",
        "go",
        "will go",
        "Я не ехал на работу, когда началась буря.",
        "Я не їхав на роботу, коли почалася буря.",
        "Nie jechałem do pracy, kiedy zaczęła się burza."
      ],
      [
        "They were ... a new plan when I arrived.",
        "developing",
        "developed",
        "develop",
        "will develop",
        "Они разрабатывали новый план, когда я приехал.",
        "Вони розробляли новий план, коли я приїхав.",
        "Oni opracowywali nowy plan, kiedy przyjechałem."
      ],
      [
        "I was ... my project when the power went out.",
        "working on",
        "worked on",
        "work on",
        "will work on",
        "Я работал над проектом, когда пропало электричество.",
        "Я працював над проектом, коли зникло електропостачання.",
        "Pracowałem nad projektem, gdy zgasło światło."
      ],
      [
        "We were ... in the gym when it started to rain.",
        "exercising",
        "exercised",
        "exercise",
        "will exercise",
        "Мы тренировались в спортзале, когда начался дождь.",
        "Ми тренувалися в спортзалі, коли почався дощ.",
        "Ćwiczyliśmy na siłowni, kiedy zaczęło padać."
      ],
      [
        "He wasn't ... his car when I saw him.",
        "repairing",
        "repaired",
        "repair",
        "will repair",
        "Он не чинил свою машину, когда я его увидел.",
        "Він не лагодив свою машину, коли я його побачив.",
        "On nie naprawiał swojego samochodu, gdy go zobaczyłem."
      ],
    [
        "They were ... the car when it started raining.",
        "fixing",
        "fixed",
        "fix",
        "will fix",
        "Они чинили машину, когда начался дождь.",
        "Вони лагодили машину, коли почався дощ.",
        "Oni naprawiali samochód, gdy zaczęło padać."
      ],
      [
        "He isn't ... the problem right now.",
        "solving",
        "solve",
        "solved",
        "will solve",
        "Он не решает проблему прямо сейчас.",
        "Він не вирішує проблему прямо зараз.",
        "On nie rozwiązuje problemu teraz."
      ],
      [
        "I was ... the dishes when the phone rang.",
        "washing",
        "washed",
        "wash",
        "will wash",
        "Я мыл посуду, когда зазвонил телефон.",
        "Я мив посуду, коли задзвонив телефон.",
        "Myłem naczynia, gdy zadzwonił telefon."
      ],
      [
        "She isn't ... her homework right now.",
        "doing",
        "did",
        "do",
        "will do",
        "Она не делает домашнее задание прямо сейчас.",
        "Вона не робить домашнє завдання зараз.",
        "Ona nie robi teraz pracy domowej."
      ],
      [
        "We were ... the movie when the power went out.",
        "watching",
        "watched",
        "watch",
        "will watch",
        "Мы смотрели фильм, когда пропало электричество.",
        "Ми дивились фільм, коли зникло електропостачання.",
        "Oglądaliśmy film, kiedy zgasło światło."
      ],
      [
        "They were ... a new house last year.",
        "building",
        "built",
        "build",
        "will build",
        "Они строили новый дом в прошлом году.",
        "Вони будували новий будинок минулого року.",
        "Budowali nowy dom w zeszłym roku."
      ],
      [
        "I was ... to my friend when you called.",
        "talking",
        "talk",
        "talked",
        "will talk",
        "Я разговаривал с другом, когда ты позвонил.",
        "Я розмовляв з другом, коли ти подзвонив.",
        "Rozmawiałem z przyjacielem, kiedy zadzwoniłeś."
      ],
      [
        "He wasn't ... the news yesterday.",
        "watching",
        "watched",
        "watch",
        "will watch",
        "Он не смотрел новости вчера.",
        "Він не дивився новини вчора.",
        "On nie oglądał wiadomości wczoraj."
      ],
      [
        "We were ... the project at that time.",
        "working",
        "worked",
        "work",
        "will work",
        "Мы работали над проектом в то время.",
        "Ми працювали над проектом в той час.",
        "Pracowaliśmy nad projektem w tym czasie."
      ],
      [
        "She was ... in the garden when I saw her.",
        "working",
        "worked",
        "work",
        "will work",
        "Она работала в саду, когда я её увидел.",
        "Вона працювала в саду, коли я її побачив.",
        "Ona pracowała w ogrodzie, kiedy ją zobaczyłem."
      ],
      [
        "I was ... for the bus when it started raining.",
        "waiting",
        "waited",
        "wait",
        "will wait",
        "Я ждал автобус, когда начался дождь.",
        "Я чекав на автобус, коли почався дощ.",
        "Czekałem na autobus, kiedy zaczęło padać."
      ],
      [
        "They were ... the documents all day.",
        "reviewing",
        "reviewed",
        "review",
        "will review",
        "Они просматривали документы весь день.",
        "Вони переглядали документи весь день.",
        "Oni przeglądali dokumenty przez cały dzień."
      ],
      [
        "She was ... her phone when I arrived.",
        "using",
        "used",
        "use",
        "will use",
        "Она использовала свой телефон, когда я пришел.",
        "Вона використовувала свій телефон, коли я прийшов.",
        "Ona używała telefonu, kiedy przyjechałem."
      ],
      [
        "We were ... to the music when he interrupted.",
        "listening",
        "listened",
        "listen",
        "will listen",
        "Мы слушали музыку, когда он прервал.",
        "Ми слухали музику, коли він перервав.",
        "Słuchaliśmy muzyki, kiedy on przerwał."
      ],
      [
        "I was ... at the time of the accident.",
        "driving",
        "drove",
        "drive",
        "will drive",
        "Я ехал в момент аварии.",
        "Я їхав у момент аварії.",
        "Jechałem w czasie wypadku."
      ],
      [
        "He was ... his work when the phone rang.",
        "doing",
        "did",
        "do",
        "will do",
        "Он делал свою работу, когда зазвонил телефон.",
        "Він робив свою роботу, коли задзвонив телефон.",
        "On robił swoją pracę, kiedy zadzwonił telefon."
      ],
      [
        "They were ... to the park when I saw them.",
        "going",
        "went",
        "go",
        "will go",
        "Они шли в парк, когда я их увидел.",
        "Вони йшли в парк, коли я їх побачив.",
        "Szukali do parku, gdy ich zobaczyłem."
      ],
      [
        "We were ... dinner when the guests arrived.",
        "having",
        "had",
        "have",
        "will have",
        "Мы ужинали, когда прибыли гости.",
        "Ми вечеряли, коли приїхали гості.",
        "Jedliśmy obiad, kiedy goście przyjechali."
      ],
      [
        "I was ... the letter when you called.",
        "writing",
        "wrote",
        "write",
        "will write",
        "Я писал письмо, когда ты позвонил.",
        "Я писав лист, коли ти подзвонив.",
        "Pisałem list, kiedy zadzwoniłeś."
      ],
      [
        "She was ... the floor when I walked in.",
        "cleaning",
        "cleaned",
        "clean",
        "will clean",
        "Она убирала пол, когда я вошел.",
        "Вона прибирала підлогу, коли я зайшов.",
        "Ona sprzątała podłogę, kiedy wszedłem."
      ],
      [
        "They were ... in the meeting when I entered.",
        "talking",
        "talked",
        "talk",
        "will talk",
        "Они разговаривали на встрече, когда я вошел.",
        "Вони розмовляли на зустрічі, коли я зайшов.",
        "Rozmawiali na spotkaniu, kiedy wszedłem."
      ],
      [
        "He was ... a book when I saw him.",
        "reading",
        "read",
        "reads",
        "will read",
        "Он читал книгу, когда я его увидел.",
        "Він читав книгу, коли я його побачив.",
        "Czytał książkę, gdy go zobaczyłem."
      ],
      [
        "We were ... the project together at that moment.",
        "finishing",
        "finished",
        "finish",
        "will finish",
        "Мы завершали проект в тот момент.",
        "Ми завершували проект у той момент.",
        "Kończyliśmy projekt w tym momencie."
      ],
      [
        "I was ... for the meeting when she called.",
        "waiting",
        "waited",
        "wait",
        "will wait",
        "Я ждал встречи, когда она позвонила.",
        "Я чекав на зустріч, коли вона подзвонила.",
        "Czekałem na spotkanie, kiedy zadzwoniła."
      ],
      [
        "They weren't ... their homework when the teacher came.",
        "doing",
        "did",
        "do",
        "will do",
        "Они не делали домашнее задание, когда пришел учитель.",
        "Вони не робили домашнє завдання, коли прийшов учитель.",
        "Oni nie robili pracy domowej, kiedy nauczyciel przyszedł."
      ],
    [
        "Was she reading a book when you came in?", 
        "Yes, she was reading a book.", 
        "No, she didn't read a book.", 
        "Yes, she will read a book.", 
        "Yes, she reads a book.", 
        "Она читала книгу, когда ты вошел?", 
        "Вона читала книгу, коли ти зайшов?", 
        "Czy ona czytała książkę, gdy wszedłeś?"
    ],
    [
        "Were they playing football in the park yesterday evening?", 
        "No, they weren't playing football.", 
        "Yes, they will play football.", 
        "Yes, they have played football.", 
        "No, they don't play football.", 
        "Они играли в футбол в парке вчера вечером?", 
        "Вони грали у футбол у парку вчора ввечері?", 
        "Czy oni grali w piłkę nożną w parku wczoraj wieczorem?"
    ],
    [
        "Was he talking on the phone when the meeting started?", 
        "Yes, he was talking on the phone.", 
        "No, he doesn't talk on the phone.", 
        "No, he won't talk on the phone.", 
        "Yes, he talks on the phone.", 
        "Он разговаривал по телефону, когда началось собрание?", 
        "Він говорив по телефону, коли почалася нарада?", 
        "Czy on rozmawiał przez telefon, gdy rozpoczęło się spotkanie?"
    ],
    [
        "Were you cooking dinner at 7 PM?", 
        "Yes, I was cooking dinner.", 
        "No, I didn't cook dinner.", 
        "Yes, I will cook dinner.", 
        "No, I haven't cooked dinner.", 
        "Ты готовил ужин в 7 вечера?", 
        "Ти готував вечерю о 7 вечора?", 
        "Czy gotowałeś obiad o 19:00?"
    ],
    [
        "Were they studying for the exam last night?", 
        "No, they weren't studying for the exam.", 
        "Yes, they studied for the exam.", 
        "Yes, they will study for the exam.", 
        "No, they don't study for exams.", 
        "Они готовились к экзамену прошлой ночью?", 
        "Вони готувалися до іспиту минулої ночі?", 
        "Czy oni uczyli się do egzaminu wczoraj wieczorem?"
    ],
    [
        "Was the baby crying at midnight?", 
        "Yes, the baby was crying.", 
        "No, the baby didn't cry.", 
        "Yes, the baby will cry.", 
        "No, the baby isn't crying.", 
        "Ребенок плакал в полночь?", 
        "Дитина плакала опівночі?", 
        "Czy dziecko płakało o północy?"
    ],
    [
        "Were we watching the movie when the lights went out?", 
        "Yes, we were watching the movie.", 
        "No, we won't watch the movie.", 
        "Yes, we have watched the movie.", 
        "No, we didn't watch the movie.", 
        "Мы смотрели фильм, когда погас свет?", 
        "Ми дивилися фільм, коли вимкнулося світло?", 
        "Czy oglądaliśmy film, gdy zgasło światło?"
    ],
    [
        "Was he working in the garden all morning?", 
        "No, he wasn't working in the garden.", 
        "Yes, he worked in the garden.", 
        "No, he doesn't work in the garden.", 
        "Yes, he will work in the garden.", 
        "Он работал в саду все утро?", 
        "Він працював у саду весь ранок?", 
        "Czy on pracował w ogrodzie cały ranek?"
    ],
    [
        "Were you swimming in the lake yesterday afternoon?", 
        "Yes, I was swimming in the lake.", 
        "No, I didn't swim in the lake.", 
        "Yes, I have swum in the lake.", 
        "No, I won't swim in the lake.", 
        "Ты плавал в озере вчера днем?", 
        "Ти плавав у озері вчора вдень?", 
        "Czy pływałeś w jeziorze wczoraj po południu?"
    ],
    [
        "Was it snowing when you arrived?", 
        "No, it wasn't snowing.", 
        "Yes, it snowed.", 
        "No, it doesn't snow.", 
        "Yes, it will snow.", 
        "Шел снег, когда ты приехал?", 
        "Йшов сніг, коли ти приїхав?", 
        "Czy padał śnieg, gdy przyjechałeś?"
    ],
    [
        "Were they playing chess when the storm started?", 
        "Yes, they were playing chess.", 
        "No, they didn't play chess.", 
        "Yes, they will play chess.", 
        "No, they don't play chess.", 
        "Они играли в шахматы, когда началась буря?", 
        "Вони грали в шахи, коли почалася буря?", 
        "Czy oni grali w szachy, gdy zaczęła się burza?"
    ],
    [
        "Was she cleaning the house when you called?", 
        "No, she wasn't cleaning the house.", 
        "Yes, she cleaned the house.", 
        "Yes, she will clean the house.", 
        "No, she doesn't clean the house.", 
        "Она убирала дом, когда ты позвонил?", 
        "Вона прибирала будинок, коли ти зателефонував?", 
        "Czy ona sprzątała dom, gdy zadzwoniłeś?"
    ],
    [
        "Were the children building a snowman in the backyard?", 
        "Yes, they were building a snowman.", 
        "No, they didn't build a snowman.", 
        "Yes, they will build a snowman.", 
        "No, they don't build snowmen.", 
        "Дети лепили снеговика во дворе?", 
        "Діти ліпили сніговика у дворі?", 
        "Czy dzieci lepiły bałwana na podwórku?"
    ],
    [
        "Was he fixing the car while you were working?", 
        "Yes, he was fixing the car.", 
        "No, he didn't fix the car.", 
        "No, he doesn't fix cars.", 
        "Yes, he will fix the car.", 
        "Он ремонтировал машину, пока ты работал?", 
        "Він ремонтував машину, поки ти працював?", 
        "Czy on naprawiał samochód, gdy pracowałeś?"
    ],
    [
        "Were we hiking in the mountains when it started to rain?", 
        "No, we weren't hiking in the mountains.", 
        "Yes, we hiked in the mountains.", 
        "No, we won't hike in the mountains.", 
        "Yes, we hike in the mountains.", 
        "Мы шли в горы, когда начался дождь?", 
        "Ми йшли в гори, коли почався дощ?", 
        "Czy szliśmy w góry, gdy zaczęło padać?"
    ],
    [
        "Was she painting a picture when you knocked on the door?", 
        "Yes, she was painting a picture.", 
        "No, she didn't paint a picture.", 
        "No, she doesn't paint pictures.", 
        "Yes, she will paint a picture.", 
        "Она рисовала картину, когда ты постучал в дверь?", 
        "Вона малювала картину, коли ти постукав у двері?", 
        "Czy ona malowała obraz, gdy zapukałeś do drzwi?"
    ],
    [
        "Were they having lunch in the garden at noon?", 
        "No, they weren't having lunch.", 
        "Yes, they had lunch.", 
        "No, they don't have lunch.", 
        "Yes, they will have lunch.", 
        "Они обедали в саду в полдень?", 
        "Вони обідали в саду опівдні?", 
        "Czy oni jedli obiad w ogrodzie w południe?"
    ],
    [
        "Was the dog barking when the car arrived?", 
        "Yes, the dog was barking.", 
        "No, the dog didn't bark.", 
        "Yes, the dog barks.", 
        "No, the dog won't bark.", 
        "Собака лаяла, когда приехала машина?", 
        "Собака гавкала, коли приїхала машина?", 
        "Czy pies szczekał, gdy przyjechał samochód?"
    ],
    [
        "Were we dancing when the music stopped?", 
        "No, we weren't dancing.", 
        "Yes, we danced.", 
        "Yes, we will dance.", 
        "No, we don't dance.", 
        "Мы танцевали, когда музыка остановилась?", 
        "Ми танцювали, коли музика зупинилася?", 
        "Czy tańczyliśmy, gdy muzyka przestała grać?"
    ],
    [
        "Was he fishing when the sun set?", 
        "Yes, he was fishing.", 
        "No, he didn't fish.", 
        "Yes, he will fish.", 
        "No, he doesn't fish.", 
        "Он рыбачил, когда солнце село?", 
        "Він рибалив, коли сонце сіло?", 
        "Czy on łowił ryby, gdy słońce zaszło?"
    ],
    [
        "Was she swimming when the bell rang?", 
        "Yes, she was swimming.", 
        "No, she wasn't swimming.", 
        "Yes, she swims.", 
        "No, she didn't swim.", 
        "Она плавала, когда прозвонил колокол?", 
        "Вона плавала, коли задзвонив дзвін?", 
        "Czy ona pływała, gdy zadzwonił dzwon?"
    ],
    [
        "Were they running when the police arrived?", 
        "No, they weren't running.", 
        "Yes, they ran.", 
        "No, they won't run.", 
        "Yes, they will be running.", 
        "Они бегали, когда приехала полиция?", 
        "Вони бігали, коли приїхала поліція?", 
        "Czy oni biegali, gdy przyjechała policja?"
    ],
    [
        "Were you playing the piano when she entered the room?", 
        "Yes, I was playing the piano.", 
        "No, I wasn't playing the piano.", 
        "Yes, I play the piano.", 
        "No, I didn't play the piano.", 
        "Ты играл на пианино, когда она вошла в комнату?", 
        "Ти грав на піаніно, коли вона ввійшла в кімнату?", 
        "Czy grałeś na pianinie, kiedy ona weszła do pokoju?"
    ],
    [
        "Was the teacher explaining the lesson when you arrived?", 
        "Yes, the teacher was explaining the lesson.", 
        "No, the teacher wasn't explaining the lesson.", 
        "Yes, the teacher explained the lesson.", 
        "No, the teacher doesn't explain lessons.", 
        "Учитель объяснял урок, когда ты пришел?", 
        "Вчитель пояснював урок, коли ти прийшов?", 
        "Czy nauczyciel tłumaczył lekcję, gdy przybyłeś?"
    ],
    [
        "Were we having a meeting when the power went out?", 
        "No, we weren't having a meeting.", 
        "Yes, we had a meeting.", 
        "No, we don't have meetings.", 
        "Yes, we will have a meeting.", 
        "Мы проводили встречу, когда выключился свет?", 
        "Ми проводили зустріч, коли вимкнувся світло?", 
        "Czy mieliśmy spotkanie, kiedy zgasło światło?"
    ],
    [
        "Were they sleeping when the phone rang?", 
        "Yes, they were sleeping.", 
        "No, they weren't sleeping.", 
        "Yes, they sleep.", 
        "No, they don't sleep.", 
        "Они спали, когда зазвонил телефон?", 
        "Вони спали, коли задзвонив телефон?", 
        "Czy oni spali, gdy zadzwonił telefon?"
    ],
    [
        "Were you studying when the storm started?", 
        "Yes, I was studying.", 
        "No, I wasn't studying.", 
        "Yes, I study.", 
        "No, I didn't study.", 
        "Ты учился, когда началась буря?", 
        "Ти вчився, коли почалася буря?", 
        "Czy uczyłeś się, gdy zaczęła się burza?"
    ],
    [
        "Was he cooking when you came home?", 
        "Yes, he was cooking.", 
        "No, he wasn't cooking.", 
        "Yes, he cooks.", 
        "No, he didn't cook.", 
        "Он готовил, когда ты пришел домой?", 
        "Він готував, коли ти прийшов додому?", 
        "Czy on gotował, kiedy wróciłeś do domu?"
    ],
    [
        "Were they watching TV when you called?", 
        "Yes, they were watching TV.", 
        "No, they weren't watching TV.", 
        "Yes, they watch TV.", 
        "No, they didn't watch TV.", 
        "Они смотрели телевизор, когда ты позвонил?", 
        "Вони дивилися телевізор, коли ти подзвонив?", 
        "Czy oni oglądali telewizję, gdy zadzwoniłeś?"
    ],
    [
        "Were we talking when you saw the accident?", 
        "Yes, we were talking.", 
        "No, we weren't talking.", 
        "Yes, we talk.", 
        "No, we didn't talk.", 
        "Мы разговаривали, когда ты увидел аварию?", 
        "Ми розмовляли, коли ти побачив аварію?", 
        "Czy rozmawialiśmy, gdy zobaczyłeś wypadek?"
    ],
    [
        "Was he laughing when the joke was told?", 
        "Yes, he was laughing.", 
        "No, he wasn't laughing.", 
        "Yes, he laughs.", 
        "No, he didn't laugh.", 
        "Он смеялся, когда рассказали шутку?", 
        "Він сміявся, коли розповіли жарт?", 
        "Czy on śmiał się, gdy opowiedziano żart?"
    ],
    [
        "Were you working when the manager arrived?", 
        "Yes, I was working.", 
        "No, I wasn't working.", 
        "Yes, I work.", 
        "No, I didn't work.", 
        "Ты работал, когда пришел менеджер?", 
        "Ти працював, коли прийшов менеджер?", 
        "Czy pracowałeś, gdy przyszedł menedżer?"
    ],
    [
        "Was the baby crying when you heard the noise?", 
        "Yes, the baby was crying.", 
        "No, the baby wasn't crying.", 
        "Yes, the baby cries.", 
        "No, the baby didn't cry.", 
        "Ребёнок плакал, когда ты услышал шум?", 
        "Дитина плакала, коли ти почув шум?", 
        "Czy dziecko płakało, gdy usłyszałeś hałas?"
    ],
    [
        "Were we watching a movie when the electricity went out?", 
        "Yes, we were watching a movie.", 
        "No, we weren't watching a movie.", 
        "Yes, we watch movies.", 
        "No, we didn't watch a movie.", 
        "Мы смотрели фильм, когда выключился свет?", 
        "Ми дивилися фільм, коли вимкнулося світло?", 
        "Czy oglądaliśmy film, gdy wyłączyło się światło?"
    ],
    [
        "Was she talking to you when I arrived?", 
        "Yes, she was talking to me.", 
        "No, she wasn't talking to me.", 
        "Yes, she talks to me.", 
        "No, she didn't talk to me.", 
        "Она разговаривала с тобой, когда я пришел?", 
        "Вона говорила з тобою, коли я прийшов?", 
        "Czy ona rozmawiała z tobą, gdy przybyłem?"
    ],
    [
        "Were they cooking dinner when we visited?", 
        "Yes, they were cooking dinner.", 
        "No, they weren't cooking dinner.", 
        "Yes, they cook dinner.", 
        "No, they didn't cook dinner.", 
        "Они готовили ужин, когда мы посетили?", 
        "Вони готували вечерю, коли ми відвідали?", 
        "Czy oni gotowali kolację, kiedy odwiedziliśmy?"
    ],
    [
        "Were you reading a book when the alarm went off?", 
        "Yes, I was reading a book.", 
        "No, I wasn't reading a book.", 
        "Yes, I read books.", 
        "No, I didn't read a book.", 
        "Ты читал книгу, когда сработала сигнализация?", 
        "Ти читав книгу, коли спрацювала сигналізація?", 
        "Czy czytałeś książkę, gdy włączył się alarm?"
    ],
    [
        "Was he drawing when you entered the room?", 
        "Yes, he was drawing.", 
        "No, he wasn't drawing.", 
        "Yes, he draws.", 
        "No, he didn't draw.", 
        "Он рисовал, когда ты вошел в комнату?", 
        "Він малював, коли ти увійшов у кімнату?", 
        "Czy on rysował, gdy wszedłeś do pokoju?"
    ],
    [
        "Were you driving when it started to snow?", 
        "Yes, I was driving.", 
        "No, I wasn't driving.", 
        "Yes, I drive.", 
        "No, I didn't drive.", 
        "Ты ехал, когда начался снег?", 
        "Ти їхав, коли почався сніг?", 
        "Czy jechałeś, gdy zaczął padać śnieg?"
    ],
    [
        "Was she playing the guitar when the concert started?", 
        "Yes, she was playing the guitar.", 
        "No, she wasn't playing the guitar.", 
        "Yes, she plays the guitar.", 
        "No, she didn't play the guitar.", 
        "Она играла на гитаре, когда начался концерт?", 
        "Вона грала на гітарі, коли почався концерт?", 
        "Czy ona grała na gitarze, kiedy rozpoczął się koncert?"
    ],
    [
        "Were we waiting for the bus when it started to rain?", 
        "Yes, we were waiting for the bus.", 
        "No, we weren't waiting for the bus.", 
        "Yes, we wait for the bus.", 
        "No, we didn't wait for the bus.", 
        "Мы ждали автобус, когда начался дождь?", 
        "Ми чекали на автобус, коли почався дощ?", 
        "Czy czekaliśmy na autobus, kiedy zaczęło padać?"
    ],
    [
        "Were they sitting in the park when you saw them?", 
        "Yes, they were sitting in the park.", 
        "No, they weren't sitting in the park.", 
        "Yes, they sit in the park.", 
        "No, they didn't sit in the park.", 
        "Они сидели в парке, когда ты их увидел?", 
        "Вони сиділи в парку, коли ти їх побачив?", 
        "Czy oni siedzieli w parku, gdy ich zobaczyłeś?"
    ],
    [
        "Was he running when the rain started?", 
        "Yes, he was running.", 
        "No, he wasn't running.", 
        "Yes, he runs.", 
        "No, he didn't run.", 
        "Он бегал, когда начался дождь?", 
        "Він бігав, коли почався дощ?", 
        "Czy on biegał, kiedy zaczęło padać?"
    ],
    [
        "Was she waiting for the train when the delay was announced?", 
        "Yes, she was waiting for the train.", 
        "No, she wasn't waiting for the train.", 
        "Yes, she waits for the train.", 
        "No, she didn't wait for the train.", 
        "Она ждала поезд, когда было объявлено о задержке?", 
        "Вона чекала на потяг, коли було оголошено затримку?", 
        "Czy ona czekała na pociąg, kiedy ogłoszono opóźnienie?"
    ],
    [
        "Were you eating when the bell rang?", 
        "Yes, I was eating.", 
        "No, I wasn't eating.", 
        "Yes, I eat.", 
        "No, I didn't eat.", 
        "Ты ел, когда прозвенел колокол?", 
        "Ти їв, коли задзвонив дзвін?", 
        "Czy jadłeś, gdy zadzwonił dzwon?"
    ],
    [
        "Were they working when you called?", 
        "Yes, they were working.", 
        "No, they weren't working.", 
        "Yes, they work.", 
        "No, they didn't work.", 
        "Они работали, когда ты позвонил?", 
        "Вони працювали, коли ти подзвонив?", 
        "Czy oni pracowali, gdy zadzwoniłeś?"
    ],
    [
        "Was he playing football when you arrived?", 
        "Yes, he was playing football.", 
        "No, he wasn't playing football.", 
        "Yes, he plays football.", 
        "No, he didn't play football.", 
        "Он играл в футбол, когда ты пришел?", 
        "Він грав у футбол, коли ти прийшов?", 
        "Czy on grał w piłkę nożną, gdy przyszedłeś?"
    ],
    [
        "Was she talking to her friend when you arrived?", 
        "Yes, she was talking to her friend.", 
        "No, she wasn't talking to her friend.", 
        "Yes, she talks to her friend.", 
        "No, she didn't talk to her friend.", 
        "Она разговаривала с другом, когда ты пришел?", 
        "Вона говорила з подругою, коли ти прийшов?", 
        "Czy ona rozmawiała ze swoją przyjaciółką, gdy przyszedłeś?"
    ],
    [
        "Were we watching a movie when the lights went out?", 
        "Yes, we were watching a movie.", 
        "No, we weren't watching a movie.", 
        "Yes, we watch movies.", 
        "No, we didn't watch a movie.", 
        "Мы смотрели фильм, когда погас свет?", 
        "Ми дивилися фільм, коли погасло світло?", 
        "Czy oglądaliśmy film, gdy zgasło światło?"
    ],
    [
        "She was working on a project when I called her.",
        "Was she working on a project when you called her?",
        "Was she working on a project when I called her?",
        "Is she working on a project when I called her?",
        "Did she work on a project when I called her?",
        "Она работала над проектом, когда я позвонил ей.",
        "Вона працювала над проектом, коли я подзвонив їй.",
        "Ona pracowała nad projektem, kiedy zadzwoniłem do niej."
      ],
      [
        "They were studying all night for the exam.",
        "Were they studying all night for the exam?",
        "Did they study all night for the exam?",
        "Are they studying all night for the exam?",
        "They are studying all night for the exam.",
        "Они учились всю ночь перед экзаменом.",
        "Вони вчилися всю ніч перед іспитом.",
        "Uczyli się całą noc przed egzaminem."
      ],
      [
        "I was not expecting her to be so late.",
        "Wasn't I expecting her to be so late?",
        "Was I not expecting her to be so late?",
        "I am not expecting her to be so late.",
        "I did not expect her to be so late.",
        "Я не ожидал, что она так опоздает.",
        "Я не очікував, що вона так запізниться.",
        "Nie spodziewałem się, że tak się spóźni."
      ],
      [
        "He was driving when the accident happened.",
        "Was he driving when the accident happened?",
        "He drives when the accident happened.",
        "Did he drive when the accident happened?",
        "Is he driving when the accident happened?",
        "Он ехал, когда произошел инцидент.",
        "Він їхав, коли сталася аварія.",
        "Jechał, gdy zdarzył się wypadek."
      ],
      [
        "We were waiting for the bus when it started raining.",
        "Were we waiting for the bus when it started raining?",
        "Did we wait for the bus when it started raining?",
        "We wait for the bus when it started raining.",
        "Are we waiting for the bus when it started raining?",
        "Мы ждали автобус, когда начался дождь.",
        "Ми чекали автобус, коли почався дощ.",
        "Czekaliśmy na autobus, gdy zaczęło padać."
      ],
      [
        "She was reading a book when I arrived.",
        "Was she reading a book when you arrived?",
        "She is reading a book when I arrived.",
        "Did she read a book when I arrived?",
        "Is she reading a book when I arrived?",
        "Она читала книгу, когда я пришел.",
        "Вона читала книгу, коли я прийшов.",
        "Czytała książkę, gdy przyjechałem."
      ],
      [
        "They were cooking dinner when the guests arrived.",
        "Were they cooking dinner when the guests arrived?",
        "Did they cook dinner when the guests arrived?",
        "Are they cooking dinner when the guests arrived?",
        "They cook dinner when the guests arrived.",
        "Они готовили ужин, когда гости пришли.",
        "Вони готували вечерю, коли прийшли гості.",
        "Gotowali kolację, gdy goście przyjechali."
      ],
      [
        "I was looking for my keys when I found your letter.",
        "Was I looking for my keys when I found your letter?",
        "Did I look for my keys when I found your letter?",
        "I am looking for my keys when I found your letter.",
        "I look for my keys when I found your letter.",
        "Я искал свои ключи, когда нашел твое письмо.",
        "Я шукав свої ключі, коли знайшов твій лист.",
        "Szukalem kluczy, kiedy znalazłem twój list."
      ],
      [
        "He was painting the wall when the phone rang.",
        "Was he painting the wall when the phone rang?",
        "Did he paint the wall when the phone rang?",
        "He paints the wall when the phone rang.",
        "Is he painting the wall when the phone rang?",
        "Он красил стену, когда позвонил телефон.",
        "Він малював стіну, коли задзвонив телефон.",
        "Malował ścianę, gdy zadzwonił telefon."
      ],
      [
        "They were walking in the park when it started to snow.",
        "Were they walking in the park when it started to snow?",
        "Did they walk in the park when it started to snow?",
        "Are they walking in the park when it started to snow?",
        "They walk in the park when it started to snow.",
        "Они гуляли в парке, когда начался снег.",
        "Вони гуляли в парку, коли почався сніг.",
        "Spacerowali po parku, gdy zaczęło padać śnieg."
      ],
      [
        "I was eating breakfast when the doorbell rang.",
        "Were you eating breakfast when the doorbell rang?",
        "Did you eat breakfast when the doorbell rang?",
        "You were eating breakfast when the doorbell rang?",
        "Are you eating breakfast when the doorbell rang?",
        "Я завтракал, когда зазвонил дверной звонок.",
        "Я снідав, коли подзвонив дверний дзвінок.",
        "Jadłem śniadanie, kiedy zadzwonił dzwonek do drzwi."
      ],
      [
        "She was crying when her brother called her.",
        "Was she crying when her brother called her?",
        "Did she cry when her brother called her?",
        "She is crying when her brother called her?",
        "Is she crying when her brother called her?",
        "Она плакала, когда её брат позвонил ей.",
        "Вона плакала, коли її брат подзвонив їй.",
        "Płakała, gdy jej brat zadzwonił do niej."
      ],
      [
        "He was swimming in the pool when I arrived.",
        "Was he swimming in the pool when you arrived?",
        "Did he swim in the pool when you arrived?",
        "He swims in the pool when I arrived?",
        "Is he swimming in the pool when I arrived?",
        "Он плавал в бассейне, когда я пришел.",
        "Він плавав у басейні, коли я прийшов.",
        "Pływał w basenie, gdy przyjechałem."
      ],
      [
        "They were listening to music when the lights went out.",
        "Were they listening to music when the lights went out?",
        "Did they listen to music when the lights went out?",
        "Are they listening to music when the lights went out?",
        "They listen to music when the lights went out?",
        "Они слушали музыку, когда погас свет.",
        "Вони слухали музику, коли погасло світло.",
        "Słuchali muzyki, gdy zgasły światła."
      ],
      [
        "I was watching TV when you called me.",
        "Were you watching TV when I called you?",
        "Did you watch TV when I called you?",
        "You were watching TV when I called you?",
        "Is you watching TV when I called you?",
        "Я смотрел телевизор, когда ты позвонил мне.",
        "Я дивився телевізор, коли ти подзвонив мені.",
        "Oglądałem telewizję, kiedy zadzwoniłeś do mnie."
      ],
      [
        "We were running in the park when it started to rain.",
        "Were we running in the park when it started to rain?",
        "Did we run in the park when it started to rain?",
        "We are running in the park when it started to rain?",
        "Are we running in the park when it started to rain?",
        "Мы бегали в парке, когда начался дождь.",
        "Ми бігали в парку, коли почався дощ.",
        "Biegliśmy w parku, gdy zaczęło padać."
      ],
      [
        "She was talking on the phone when I entered the room.",
        "Was she talking on the phone when you entered the room?",
        "Did she talk on the phone when I entered the room?",
        "Is she talking on the phone when I entered the room?",
        "She talks on the phone when I entered the room?",
        "Она говорила по телефону, когда я вошел в комнату.",
        "Вона говорила по телефону, коли я зайшов в кімнату.",
        "Rozmawiała przez telefon, kiedy wszedłem do pokoju."
      ],
      [
        "They were playing football when it started to snow.",
        "Were they playing football when it started to snow?",
        "Did they play football when it started to snow?",
        "Are they playing football when it started to snow?",
        "They play football when it started to snow?",
        "Они играли в футбол, когда начался снег.",
        "Вони грали у футбол, коли почався сніг.",
        "Grali w piłkę nożną, gdy zaczęło padać śnieg."
      ],
      [
        "I was walking to the store when I saw a cat.",
        "Were you walking to the store when you saw a cat?",
        "Did you walk to the store when you saw a cat?",
        "I am walking to the store when I saw a cat?",
        "Are you walking to the store when you saw a cat?",
        "Я шел в магазин, когда увидел кошку.",
        "Я йшов до магазину, коли побачив кішку.",
        "Szłem do sklepu, gdy zobaczyłem kota."
      ],
      [
        "He was waiting for the bus when I met him.",
        "Was he waiting for the bus when you met him?",
        "Did he wait for the bus when I met him?",
        "He is waiting for the bus when I met him?",
        "Are you waiting for the bus when I met him?",
        "Он ждал автобус, когда я его встретил.",
        "Він чекав автобус, коли я його зустрів.",
        "Czekał na autobus, gdy go spotkałem."
      ],
      [
        "She was reading a book when I arrived.",
        "Was she reading a book when you arrived?",
        "Did she read a book when I arrived?",
        "Is she reading a book when I arrived?",
        "She reads a book when I arrived?",
        "Она читала книгу, когда я пришел.",
        "Вона читала книгу, коли я прийшов.",
        "Czytała książkę, kiedy przyjechałem."
      ],
      [
        "They were cleaning the house when I saw them.",
        "Were they cleaning the house when you saw them?",
        "Did they clean the house when I saw them?",
        "Are they cleaning the house when I saw them?",
        "They clean the house when I saw them?",
        "Они убирали дом, когда я их увидел.",
        "Вони прибирали будинок, коли я їх побачив.",
        "Sprzątali dom, kiedy ich zobaczyłem."
      ],
      [
        "He was working on his project when his boss called him.",
        "Was he working on his project when his boss called him?",
        "Did he work on his project when his boss called him?",
        "He works on his project when his boss called him?",
        "Is he working on his project when his boss called him?",
        "Он работал над своим проектом, когда его босс позвонил ему.",
        "Він працював над своїм проектом, коли його бос подзвонив йому.",
        "Pracował nad swoim projektem, gdy jego szef do niego zadzwonił."
      ],
      [
        "I was studying when my phone rang.",
        "Were you studying when your phone rang?",
        "Did you study when your phone rang?",
        "You were studying when your phone rang?",
        "Are you studying when your phone rang?",
        "Я учился, когда мой телефон зазвонил.",
        "Я вчився, коли мій телефон подзвонив.",
        "Uczyłem się, kiedy zadzwonił mój telefon."
      ],
      [
        "They were cooking dinner when the lights went out.",
        "Were they cooking dinner when the lights went out?",
        "Did they cook dinner when the lights went out?",
        "Are they cooking dinner when the lights went out?",
        "They cook dinner when the lights went out?",
        "Они готовили ужин, когда погас свет.",
        "Вони готували вечерю, коли погасло світло.",
        "Gotowali kolację, gdy światła zgasły."
      ],
      [
        "I was exercising when I heard a loud noise.",
        "Were you exercising when you heard a loud noise?",
        "Did you exercise when you heard a loud noise?",
        "You were exercising when you heard a loud noise?",
        "Are you exercising when you heard a loud noise?",
        "Я занимался физкультурой, когда услышал громкий шум.",
        "Я займався фізкультурою, коли почув гучний шум.",
        "Ćwiczyłem, kiedy usłyszałem głośny hałas."
      ],
      [
        "We were traveling abroad when the pandemic started.",
        "Were we traveling abroad when the pandemic started?",
        "Did we travel abroad when the pandemic started?",
        "Are we traveling abroad when the pandemic started?",
        "We travel abroad when the pandemic started?",
        "Мы путешествовали за границей, когда началась пандемия.",
        "Ми подорожували за кордоном, коли почалася пандемія.",
        "Podróżowaliśmy za granicą, kiedy zaczęła się pandemia."
      ],
      [
        "She was painting a picture when I knocked on the door.",
        "Was she painting a picture when you knocked on the door?",
        "Did she paint a picture when I knocked on the door?",
        "She paints a picture when I knocked on the door?",
        "Is she painting a picture when I knocked on the door?",
        "Она рисовала картину, когда я постучал в дверь.",
        "Вона малювала картину, коли я постукав у двері.",
        "Malowała obraz, kiedy zapukałem do drzwi."
      ],
      [
        "They were having a meeting when I entered the room.",
        "Were they having a meeting when you entered the room?",
        "Did they have a meeting when I entered the room?",
        "Are they having a meeting when I entered the room?",
        "They have a meeting when I entered the room?",
        "Они проводили собрание, когда я вошел в комнату.",
        "Вони проводили нараду, коли я зайшов в кімнату.",
        "Mieli zebranie, kiedy wszedłem do pokoju."
      ],
      [
        "I was running when I tripped and fell.",
        "Were you running when you tripped and fell?",
        "Did you run when you tripped and fell?",
        "You were running when you tripped and fell?",
        "Are you running when you tripped and fell?",
        "Я бегал, когда споткнулся и упал.",
        "Я бігав, коли спіткнувся і впав.",
        "Biegłem, kiedy się potknąłem i upadłem."
      ],
      function (id) {
        return replaceEllipsisWithWord(id, pastContinuousArray);
      }  
];
