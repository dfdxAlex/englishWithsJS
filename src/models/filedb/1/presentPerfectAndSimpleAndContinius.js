const presentPerfectAndSimpleAndContinius = [
    [
        "Has she completed the report, or is it still in progress?", 
        "Yes, she has completed it, so it’s ready for review.", 
        "Yes, she completed it yesterday, and it’s already sent.", 
        "Yes, she had completed it before the deadline last week.", 
        "Yes, she will complete it by the end of the day.", 
        "Она уже закончила отчёт, или он всё ещё в процессе?", 
        "Вона вже закінчила звіт, чи він ще в процесі?", 
        "Czy ona skończyła raport, czy nadal jest w trakcie?"
    ],
    [
        "Have they fixed the issue, or does it still persist?", 
        "Yes, they have fixed it, so everything works now.", 
        "Yes, they fixed it two days ago, and it’s running smoothly.", 
        "Yes, they had fixed it before the client reported it.", 
        "Yes, they will fix it by tomorrow morning.", 
        "Они уже исправили проблему, или она всё ещё существует?", 
        "Вони вже виправили проблему, чи вона все ще існує?", 
        "Czy oni naprawili problem, czy nadal istnieje?"
    ],
    [
        "Have you cleaned the kitchen, or is it still messy?", 
        "Yes, I have cleaned it, so it’s spotless now.", 
        "Yes, I cleaned it earlier this morning.", 
        "Yes, I had cleaned it before they arrived.", 
        "Yes, I will clean it after lunch.", 
        "Ты уже убрал кухню, или она всё ещё грязная?", 
        "Ти вже прибрав кухню, чи вона все ще брудна?", 
        "Czy posprzątałeś kuchnię, czy nadal jest brudna?"
    ],
    [
        "Has he called his parents, or is he still planning to?", 
        "Yes, he has called them, so they’re informed.", 
        "Yes, he called them last night before dinner.", 
        "Yes, he had called them before he left the house.", 
        "Yes, he will call them this evening.", 
        "Он уже позвонил своим родителям, или всё ещё собирается?", 
        "Він вже зателефонував своїм батькам, чи все ще збирається?", 
        "Czy on zadzwonił do swoich rodziców, czy nadal planuje to zrobić?"
    ],
    [
        "Have we solved the technical problem, or does it still exist?", 
        "Yes, we have solved it, so everything is fine now.", 
        "Yes, we solved it during the last meeting.", 
        "Yes, we had solved it before anyone noticed.", 
        "Yes, we will solve it by the end of the week.", 
        "Мы уже решили техническую проблему, или она всё ещё существует?", 
        "Ми вже вирішили технічну проблему, чи вона все ще існує?", 
        "Czy rozwiązaliśmy problem techniczny, czy nadal istnieje?"
    ],
    [
        "Has she sent the email, or is it still unsent?", 
        "Yes, she has sent it, so they received it.", 
        "Yes, she sent it in the morning.", 
        "Yes, she had sent it before the meeting started.", 
        "Yes, she will send it later today.", 
        "Она уже отправила письмо, или оно всё ещё не отправлено?", 
        "Вона вже надіслала лист, чи він ще не надісланий?", 
        "Czy ona wysłała e-mail, czy nadal nie został wysłany?"
    ],
    [
        "Has the team finished the project, or is it still in progress?", 
        "Yes, they have finished it, so the deadline is met.", 
        "Yes, they finished it last week.", 
        "Yes, they had finished it before the client checked.", 
        "Yes, they will finish it by next Monday.", 
        "Команда уже закончила проект, или он всё ещё в процессе?", 
        "Команда вже закінчила проект, чи він ще в процесі?", 
        "Czy zespół ukończył projekt, czy nadal jest w toku?"
    ],
    [
        "Has he repaired the car, or does it still need fixing?", 
        "Yes, he has repaired it, so it’s working now.", 
        "Yes, he repaired it last weekend.", 
        "Yes, he had repaired it before the trip.", 
        "Yes, he will repair it this afternoon.", 
        "Он уже починил машину, или её ещё нужно чинить?", 
        "Він вже відремонтував машину, чи її ще потрібно ремонтувати?", 
        "Czy on naprawił samochód, czy nadal wymaga naprawy?"
    ],
    [
        "Have we bought the groceries, or do we still need to shop?", 
        "Yes, we have bought them, so the fridge is full.", 
        "Yes, we bought them on the way home.", 
        "Yes, we had bought them before the store closed.", 
        "Yes, we will buy them after work.", 
        "Мы уже купили продукты, или нам ещё нужно идти в магазин?", 
        "Ми вже купили продукти, чи нам ще потрібно йти в магазин?", 
        "Czy kupiliśmy już zakupy, czy nadal musimy iść do sklepu?"
    ],
    [
        "Has the new employee started working, or is he still waiting?", 
        "Yes, he has started, so he is getting used to the job.", 
        "Yes, he started last Monday.", 
        "Yes, he had started before the official announcement.", 
        "Yes, he will start next week.", 
        "Новый сотрудник уже начал работать, или он всё ещё ждёт?", 
        "Новий співробітник вже почав працювати, чи він ще чекає?", 
        "Czy nowy pracownik już zaczął pracować, czy nadal czeka?"
    ],
    [
        "Has she traveled abroad, or is she still planning to?", 
        "Yes, she has traveled to several countries already.", 
        "Yes, she traveled to Spain last year.", 
        "Yes, she had traveled to Italy before moving here.", 
        "Yes, she will travel to Japan next year.", 
        "Она уже путешествовала за границу, или всё ещё собирается?", 
        "Вона вже подорожувала за кордоном, чи все ще збирається?", 
        "Czy ona już podróżowała za granicę, czy nadal planuje?"
    ],
    [
        "Have they visited the museum, or do they plan to?", 
        "Yes, they have visited it, and they enjoyed it.", 
        "Yes, they visited it last weekend.", 
        "Yes, they had visited it before the exhibition closed.", 
        "Yes, they will visit it this Saturday.", 
        "Они уже посетили музей, или планируют это сделать?", 
        "Вони вже відвідали музей, чи планують це зробити?", 
        "Czy oni odwiedzili muzeum, czy planują to zrobić?"
    ],
    [
        "Has he read the article, or is he still working on it?", 
        "Yes, he has read it, so he’s ready to discuss.", 
        "Yes, he read it yesterday morning.", 
        "Yes, he had read it before the meeting started.", 
        "Yes, he will read it tonight.", 
        "Он уже прочитал статью, или всё ещё работает над ней?", 
        "Він вже прочитав статтю, чи все ще працює над нею?", 
        "Czy on przeczytał artykuł, czy nadal nad nim pracuje?"
    ],
    [
        "Have we updated the software, or is it still the old version?", 
        "Yes, we have updated it, so it’s all set now.", 
        "Yes, we updated it last night.", 
        "Yes, we had updated it before the system crashed.", 
        "Yes, we will update it tomorrow morning.", 
        "Мы уже обновили программное обеспечение, или оно всё ещё старая версия?", 
        "Ми вже оновили програмне забезпечення, чи воно ще стара версія?", 
        "Czy zaktualizowaliśmy oprogramowanie, czy to nadal stara wersja?"
    ],
    [
        "Has he submitted the application, or is it still pending?", 
        "Yes, he has submitted it, so they will review it soon.", 
        "Yes, he submitted it last week.", 
        "Yes, he had submitted it before the deadline.", 
        "Yes, he will submit it by tomorrow.", 
        "Он уже подал заявку, или она всё ещё в ожидании?", 
        "Він вже подав заявку, чи вона ще в очікуванні?", 
        "Czy on już złożył aplikację, czy nadal czeka na decyzję?"
    ],
    [
        "Has she bought the tickets, or is she still planning to?", 
        "Yes, she has bought them, so we’re all set.", 
        "Yes, she bought them last Tuesday.", 
        "Yes, she had bought them before the prices went up.", 
        "Yes, she will buy them tomorrow.", 
        "Она уже купила билеты, или она всё ещё собирается?", 
        "Вона вже купила квитки, чи вона ще збирається?", 
        "Czy ona już kupiła bilety, czy nadal planuje to zrobić?"
    ],
    [
        "Have you organized the meeting, or is it still not scheduled?", 
        "Yes, I have organized it, so everything is ready.", 
        "Yes, I organized it last week.", 
        "Yes, I had organized it before the team arrived.", 
        "Yes, I will organize it next week.", 
        "Ты уже организовал встречу, или она всё ещё не запланирована?", 
        "Ти вже організував зустріч, чи вона ще не запланована?", 
        "Czy zorganizowałeś spotkanie, czy nadal nie jest zaplanowane?"
    ],
    [
        "Have you been working on the project?", 
        "Yes, I have been working on the project.", 
        "No, I wasn't working on the project.", 
        "Yes, I worked on the project last week.", 
        "I will work on the project tomorrow.", 
        "Ты работал над проектом?", 
        "Чи працював ти над проектом?", 
        "Czy pracowałeś nad projektem?"
    ],
    [
        "Have they been studying English?", 
        "Yes, they have been studying English.", 
        "No, they didn't study English last year.", 
        "Yes, they were studying English yesterday.", 
        "They will study English next week.", 
        "Они изучали английский?", 
        "Чи вивчали вони англійську?", 
        "Czy oni uczyli się angielskiego?"
    ],
    [
        "Has she been reading the book?", 
        "Yes, she has been reading the book.", 
        "No, she hasn't read the book yet.", 
        "She was reading the book yesterday.", 
        "She reads the book every day.", 
        "Она читала книгу?", 
        "Вона читала книгу?", 
        "Czy ona czytała książkę?"
    ],
    [
        "Have you been working out lately?", 
        "Yes, I have been working out lately.", 
        "No, I didn't work out yesterday.", 
        "I am working out tomorrow.", 
        "I work out every day.", 
        "Ты занимался спортом недавно?", 
        "Ти тренувався останнім часом?", 
        "Czy ćwiczyłeś ostatnio?"
    ],
    [
        "Has he been traveling around the world?", 
        "Yes, he has been traveling around the world.", 
        "No, he hasn't traveled much this year.", 
        "He was traveling last summer.", 
        "He travels often for work.", 
        "Он путешествовал по миру?", 
        "Він подорожував по світу?", 
        "Czy on podróżował po świecie?"
    ],
    [
        "Have you been cooking dinner?", 
        "Yes, I have been cooking dinner.", 
        "No, I didn't cook dinner yesterday.", 
        "I was cooking dinner when you called.", 
        "I cook dinner every evening.", 
        "Ты готовил ужин?", 
        "Ти готував вечерю?", 
        "Czy gotowałeś kolację?"
    ],
    [
        "Has she been cleaning the house?", 
        "Yes, she has been cleaning the house.", 
        "No, she hasn't cleaned the house yet.", 
        "She was cleaning the house all day yesterday.", 
        "She cleans the house every Saturday.", 
        "Она убирала дом?", 
        "Вона прибирала будинок?", 
        "Czy ona sprzątała dom?"
    ],
    [
        "Have you been waiting long?", 
        "Yes, I have been waiting for an hour.", 
        "No, I didn't wait for long.", 
        "I was waiting when you arrived.", 
        "I wait every morning at this time.", 
        "Ты долго ждал?", 
        "Ти довго чекав?", 
        "Czy czekałeś długo?"
    ],
    [
        "Has he been playing football?", 
        "Yes, he has been playing football.", 
        "No, he didn't play football yesterday.", 
        "He was playing football all afternoon.", 
        "He plays football every weekend.", 
        "Он играл в футбол?", 
        "Він грав у футбол?", 
        "Czy on grał w piłkę nożną?"
    ],
    [
        "Have you been sleeping well?", 
        "Yes, I have been sleeping well.", 
        "No, I didn't sleep well last night.", 
        "I was sleeping when you called.", 
        "I sleep well every night.", 
        "Ты хорошо спал?", 
        "Ти добре спав?", 
        "Czy spałeś dobrze?"
    ],
    [
        "Has she been studying for the exam?", 
        "Yes, she has been studying for the exam.", 
        "No, she hasn't studied enough.", 
        "She was studying all evening.", 
        "She studies regularly for exams.", 
        "Она готовилась к экзамену?", 
        "Вона готувалася до екзамену?", 
        "Czy ona uczyła się do egzaminu?"
    ],
    [
        "Have they been working on the project?", 
        "Yes, they have been working on the project.", 
        "No, they didn't work on the project last week.", 
        "They were working on the project yesterday.", 
        "They work on the project every day.", 
        "Они работали над проектом?", 
        "Вони працювали над проектом?", 
        "Czy oni pracowali nad projektem?"
    ],
    [
        "Has he been studying all day?", 
        "Yes, he has been studying all day.", 
        "No, he didn't study yesterday.", 
        "He was studying when I saw him.", 
        "He studies every day after school.", 
        "Он учил весь день?", 
        "Він вчив цілий день?", 
        "Czy on uczył się przez cały dzień?"
    ],
    [
        "Have you been enjoying the vacation?", 
        "Yes, I have been enjoying the vacation.", 
        "No, I haven't enjoyed the vacation yet.", 
        "I was enjoying the vacation last week.", 
        "I enjoy vacations every year.", 
        "Тебе нравится отпуск?", 
        "Тобі подобається відпочинок?", 
        "Czy podoba ci się wakacje?"
    ],
    [
        "Has she been playing the piano?", 
        "Yes, she has been playing the piano.", 
        "No, she didn't play the piano yesterday.", 
        "She was playing the piano last night.", 
        "She plays the piano every day.", 
        "Она играла на пианино?", 
        "Вона грала на піаніно?", 
        "Czy ona grała na pianinie?"
    ],
    [
        "Have you been writing emails?", 
        "Yes, I have been writing emails.", 
        "No, I didn't write any emails today.", 
        "I was writing emails when you called.", 
        "I write emails every morning.", 
        "Ты писал письма?", 
        "Ти писав листи?", 
        "Czy pisałeś e-maile?"
    ],
    [
        "Has he been fixing the car?", 
        "Yes, he has been fixing the car.", 
        "No, he didn't fix the car yesterday.", 
        "He was fixing the car when I arrived.", 
        "He fixes the car every month.", 
        "Он чинил машину?", 
        "Він ремонтував машину?", 
        "Czy on naprawiał samochód?"
    ],
    [
        "Have you been shopping today?", 
        "Yes, I have been shopping today.", 
        "No, I didn't go shopping today.", 
        "I was shopping when you called.", 
        "I go shopping every weekend.", 
        "Ты ходил за покупками сегодня?", 
        "Ти ходив за покупками сьогодні?", 
        "Czy robiłeś zakupy dzisiaj?"
    ],
    [
        "Has she been visiting her parents?", 
        "Yes, she has been visiting her parents.", 
        "No, she hasn't visited her parents yet.", 
        "She was visiting her parents last weekend.", 
        "She visits them every month.", 
        "Она посещала своих родителей?", 
        "Вона відвідувала своїх батьків?", 
        "Czy ona odwiedzała swoich rodziców?"
    ],
    [
        "Have they been discussing the proposal?", 
        "Yes, they have been discussing the proposal.", 
        "No, they didn't discuss the proposal yet.", 
        "They were discussing the proposal yesterday.", 
        "They discuss it every Monday.", 
        "Они обсуждали предложение?", 
        "Вони обговорювали пропозицію?", 
        "Czy oni omawiali propozycję?"
    ],
    [
        "Has he been enjoying the new job?", 
        "Yes, he has been enjoying the new job.", 
        "No, he didn't enjoy the new job.", 
        "He was enjoying the new job last week.", 
        "He enjoys his job every day.", 
        "Ему нравится новая работа?", 
        "Йому подобається нова робота?", 
        "Czy on cieszy się z nowej pracy?"
    ],
    [
        "Have you been learning English?", 
        "Yes, I have been learning English.", 
        "No, I didn't learn English last year.", 
        "I was learning English when I was in London.", 
        "I learn English every day.", 
        "Ты учил английский?", 
        "Ти вивчав англійську?", 
        "Czy uczyłeś się angielskiego?"
    ],
    [
        "Has she been jogging every morning?", 
        "Yes, she has been jogging every morning.", 
        "No, she didn't jog this morning.", 
        "She was jogging yesterday morning.", 
        "She jogs every morning.", 
        "Она бегала каждое утро?", 
        "Вона бігала щоранку?", 
        "Czy ona biegała każdego ranka?"
    ],
    [
        "Have you been watching the series?", 
        "Yes, I have been watching the series.", 
        "No, I didn't watch the series yesterday.", 
        "I was watching the series last night.", 
        "I watch the series every weekend.", 
        "Ты смотрел сериал?", 
        "Ти дивився серіал?", 
        "Czy oglądałeś serial?"
    ],
    ["I have already ... my homework, so I can go out now.", "finish", "finishes", "finished", "finishing", 
        "Я уже закончил свою домашнюю работу, так что теперь могу выйти.",
        "Я вже закінчив свою домашню роботу, тож тепер можу вийти.",
        "Już skończyłem swoją pracę domową, więc mogę teraz wyjść."
       ],
       ["She has never ... to an opera, but she listens to classical music.", "go", "goes", "went", "going", 
        "Она никогда не ходила в оперу, но слушает классическую музыку.",
        "Вона ніколи не ходила в оперу, але слухає класичну музику.",
        "Nigdy nie była w operze, ale słucha muzyki klasycznej."
       ],
       ["They have just ... the new project, but they still need some improvements.", "start", "starts", "started", "starting", 
        "Они только что начали новый проект, но им все еще нужны некоторые улучшения.",
        "Вони щойно розпочали новий проєкт, але їм ще потрібні деякі покращення.",
        "Właśnie rozpoczęli nowy projekt, ale nadal potrzebują pewnych ulepszeń."
       ],
       ["He has always ... tea in the morning, but today he wants coffee.", "drink", "drinks", "drank", "drinking", 
        "Он всегда пил чай по утрам, но сегодня хочет кофе.",
        "Він завжди пив чай вранці, але сьогодні хоче кави.",
        "Zawsze pił herbatę rano, ale dziś chce kawy."
       ],
       ["We have already ... this song, but we can listen again.", "hear", "hears", "heard", "hearing", 
        "Мы уже слышали эту песню, но можем послушать снова.",
        "Ми вже чули цю пісню, але можемо послухати знову.",
        "Już słyszeliśmy tę piosenkę, ale możemy posłuchać jej ponownie."
       ],
       ["She has just ... a message, but she hasn't replied yet.", "receive", "receives", "received", "receiving", 
        "Она только что получила сообщение, но еще не ответила.",
        "Вона щойно отримала повідомлення, але ще не відповіла.",
        "Właśnie otrzymała wiadomość, ale jeszcze nie odpowiedziała."
       ],
       ["I have never ... this book, but my brother says it is interesting.", "read", "reads", "read", "reading", 
        "Я никогда не читал эту книгу, но мой брат говорит, что она интересная.",
        "Я ніколи не читав цю книгу, але мій брат каже, що вона цікава.",
        "Nigdy nie czytałem tej książki, ale mój brat mówi, że jest interesująca."
       ],
       ["They have just ... a new restaurant, but we haven't tried it yet.", "open", "opens", "opened", "opening", 
        "Они только что открыли новый ресторан, но мы его еще не пробовали.",
        "Вони щойно відкрили новий ресторан, але ми його ще не пробували.",
        "Właśnie otworzyli nową restaurację, ale jeszcze jej nie próbowaliśmy."
       ],
       ["She has never ... sushi, but she wants to try.", "eat", "eats", "ate", "eating", 
        "Она никогда не ела суши, но хочет попробовать.",
        "Вона ніколи не їла суші, але хоче спробувати.",
        "Nigdy nie jadła sushi, ale chce spróbować."
       ],
       ["He has always ... late, but today he woke up early.", "sleep", "sleeps", "slept", "sleeping", 
        "Он всегда спал допоздна, но сегодня проснулся рано.",
        "Він завжди спав допізна, але сьогодні прокинувся рано.",
        "Zawsze spał do późna, ale dziś obudził się wcześnie."
       ],
       ["We have just ... tickets, but we need to check the seats.", "bought", "buys", "buy", "buying", 
        "Мы только что купили билеты, но нам нужно проверить места.",
        "Ми щойно купили квитки, але нам потрібно перевірити місця.",
        "Właśnie kupiliśmy bilety, ale musimy sprawdzić miejsca."
       ],
       ["I have never ... him before, but he seems nice.", "meet", "meets", "met", "meeting", 
        "Я никогда не встречал его раньше, но он кажется приятным.",
        "Я ніколи не зустрічав його раніше, але він здається приємним.",
        "Nigdy go wcześniej nie spotkałem, ale wydaje się miły."
       ],
       ["They have just ... the news, but they don't believe it.", "hear", "hears", "heard", "hearing", 
        "Они только что услышали новости, но не верят в них.",
        "Вони щойно почули новини, але не вірять у них.",
        "Właśnie usłyszeli wiadomości, ale nie wierzą w nie."
       ],
       ["She has never ... a cake, but she wants to learn.", "bake", "bakes", "baked", "baking", 
        "Она никогда не пекла торт, но хочет научиться.",
        "Вона ніколи не пекла торт, але хоче навчитися.",
        "Nigdy nie piekła ciasta, ale chce się nauczyć."
       ],
       ["We have just ... a new apartment, but we need to move in.", "rented", "rents", "rent", "renting", 
        "Мы только что арендовали новую квартиру, но нам нужно въехать.",
        "Ми щойно орендували нову квартиру, але нам потрібно заїхати.",
        "Właśnie wynajęliśmy nowe mieszkanie, ale musimy się wprowadzić."
       ],
       ["I have already ... the dishes, so we can eat now.", "hwashed", "washes", "was", "washing", 
        "Я уже помыл посуду, так что теперь мы можем поесть.",
        "Я вже помив посуд, тож тепер ми можемо поїсти.",
        "Już umyłem naczynia, więc możemy teraz zjeść."
       ],
       ["She has just ... a call, but she needs to call back.", "make", "makes", "made", "making", 
        "Она только что сделала звонок, но ей нужно перезвонить.",
        "Вона щойно зробила дзвінок, але їй потрібно передзвонити.",
        "Właśnie wykonała telefon, ale musi oddzwonić."
       ],
       ["They have never ... a marathon, but they are training.", "run", "runs", "ran", "running", 
        "Они никогда не бегали марафон, но они тренируются.",
        "Вони ніколи не бігали марафон, але вони тренуються.",
        "Nigdy nie biegali w maratonie, ale trenują."
       ],
       ["I have always ... coffee in the morning, but today I had tea.", "drink", "drinks", "drank", "drinking", 
        "Я всегда пил кофе по утрам, но сегодня выпил чай.",
        "Я завжди пив каву вранці, але сьогодні випив чай.",
        "Zawsze piłem kawę rano, ale dziś wypiłem herbatę."
       ],
       ["I have noticed that he is ... a lot lately.", "running", "run", "ran", "runs", 
        "Я заметил, что он много бегает в последнее время.", 
        "Я помітив, що він багато бігає останнім часом.", 
        "Zauważyłem, że on ostatnio dużo biega."],
     
       ["She has been happy because she is ... her dream project.", "developing", "develop", "developed", "develops", 
        "Она счастлива, потому что работает над проектом своей мечты.", 
        "Вона щаслива, бо працює над проєктом своєї мрії.", 
        "Ona jest szczęśliwa, bo pracuje nad swoim wymarzonym projektem."],
     
       ["They have said she is ... to the office every day.", "coming", "come", "came", "comes", 
        "Они сказали, что она ходит в офис каждый день.", 
        "Вони сказали, що вона ходить до офісу кожного дня.", 
        "Powiedzieli, że ona codziennie przychodzi do biura."],
     
       ["We have wondered why he is ... so much noise.", "making", "make", "made", "makes", 
        "Мы удивлялись, почему он создаёт столько шума.", 
        "Ми дивувалися, чому він створює стільки шуму.", 
        "Zastanawialiśmy się, dlaczego robi tyle hałasu."],
     
       ["I have seen that she is ... her house beautifully.", "decorating", "decorate", "decorated", "decorates", 
        "Я видел, что она красиво украшает свой дом.", 
        "Я бачив, що вона гарно прикрашає свій дім.", 
        "Widziałem, że pięknie dekoruje swój dom."],
     
       ["You have been wondering why he is ... his phone all the time.", "using", "use", "used", "uses", 
        "Ты задавался вопросом, почему он постоянно использует свой телефон.", 
        "Ти задумувався, чому він постійно використовує свій телефон.", 
        "Zastanawiałeś się, dlaczego on ciągle używa swojego telefonu."],
     
       ["They have confirmed she is ... for the new role.", "applying", "apply", "applied", "applies", 
        "Они подтвердили, что она подаёт заявку на новую роль.", 
        "Вони підтвердили, що вона подає заявку на нову роль.", 
        "Potwierdzili, że aplikuje na nową rolę."],
     
       ["We have realized he is ... his skills at this job.", "improving", "improve", "improved", "improves", 
        "Мы поняли, что он улучшает свои навыки на этой работе.", 
        "Ми зрозуміли, що він покращує свої навички на цій роботі.", 
        "Zrozumieliśmy, że on doskonali swoje umiejętności w tej pracy."],
     
       ["I have noticed she is ... the same question every day.", "asking", "ask", "asked", "asks", 
        "Я заметил, что она задаёт один и тот же вопрос каждый день.", 
        "Я помітив, що вона ставить одне й те саме запитання щодня.", 
        "Zauważyłem, że ona codziennie zadaje to samo pytanie."],
     
       ["They have seen he is ... the report carefully.", "reading", "read", "read", "reads", 
        "Они видели, что он внимательно читает отчет.", 
        "Вони бачили, що він уважно читає звіт.", 
        "Widzieli, że on uważnie czyta raport."],
     
       ["I have understood why she is ... about the event.", "thinking", "think", "thought", "thinks", 
        "Я понял, почему она думает о мероприятии.", 
        "Я зрозумів, чому вона думає про захід.", 
        "Zrozumiałem, dlaczego myśli o wydarzeniu."],
     
       ["We have heard that he is ... a new language.", "learning", "learn", "learned", "learns", 
        "Мы слышали, что он учит новый язык.", 
        "Ми чули, що він вивчає нову мову.", 
        "Słyszeliśmy, że uczy się nowego języka."],
     
       ["She has mentioned he is ... a bike this summer.", "riding", "ride", "rode", "rides", 
        "Она упомянула, что он ездит на велосипеде этим летом.", 
        "Вона згадала, що він їздить на велосипеді цього літа.", 
        "Wspomniała, że jeździ na rowerze tego lata."],
     
       ["I have known why she is ... to her mom.", "talking", "talk", "talked", "talks", 
        "Я знал, почему она разговаривает с мамой.", 
        "Я знав, чому вона розмовляє з мамою.", 
        "Wiedziałem, dlaczego rozmawia z mamą."],
     
       ["They have agreed that she is ... a new job.", "searching", "search", "searched", "searches", 
        "Они согласились, что она ищет новую работу.", 
        "Вони погодилися, що вона шукає нову роботу.", 
        "Zgodzili się, że szuka nowej pracy."],
        // Заменяет многоточие словом
        function (id) {
          return replaceEllipsisWithWord(id, presentPerfectAndSimpleAndContinius);
        }
];

    // Если это свойство есть, то оно попадает в заголовок теста
    presentPerfectAndSimpleAndContinius.nameLeson = "PrPerf + (PrCont or PsSimpl)";
