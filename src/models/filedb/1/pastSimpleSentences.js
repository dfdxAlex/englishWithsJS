import { extendForArray } from '../extendForArray.js';

export const pastSimpleSentences = [
    [
        "They ... the new movie last night.",
        "watched",
        "watches", "watching", "watch",
        "Они смотрели новый фильм прошлой ночью.",
        "Вони дивилися новий фільм минулої ночі.",
        "Oni oglądali nowy film wczoraj wieczorem."
    ],
    [
        "She ... her grandmother over the weekend.",
        "visited",
        "visits", "visiting", "visit",
        "Она навещала свою бабушку на выходных.",
        "Вона відвідала свою бабусю на вихідних.",
        "Odwiedziła swoją babcię w weekend."
    ],
    [
        "He ... the answer to the question correctly.",
        "guessed",
        "guess", "guessing", "guesses",
        "Он правильно угадал ответ на вопрос.",
        "Він правильно вгадав відповідь на питання.",
        "Zgadł poprawną odpowiedź na pytanie."
    ],
    [
        "They ... their first car together.",
        "bought",
        "buy", "buying", "buys",
        "Они купили свою первую машину вместе.",
        "Вони купили свою першу машину разом.",
        "Kupili swój pierwszy samochód razem."
    ],
    [
        "She ... a beautiful picture of the sunset.",
        "painted",
        "paint", "painting", "paints",
        "Она нарисовала красивую картину заката.",
        "Вона намалювала красиву картину заходу сонця.",
        "Namalowała piękny obraz zachodu słońca."
    ],
    [
        "He ... a letter to his friend.",
        "sent",
        "send", "sending", "sends",
        "Он отправил письмо своему другу.",
        "Він надіслав листа своєму другові.",
        "Wysłał list do swojego przyjaciela."
    ],
    [
        "They ... early in the morning.",
        "left",
        "leave", "leaving", "leaves",
        "Они уехали рано утром.",
        "Вони поїхали рано вранці.",
        "Wyjechali wcześnie rano."
    ],
    [
        "She ... a delicious meal for everyone.",
        "cooked",
        "cook", "cooking", "cooks",
        "Она приготовила вкусное блюдо для всех.",
        "Вона приготувала смачну страву для всіх.",
        "Ugotowała smaczne danie dla wszystkich."
    ],
    [
        "He ... about the event after it happened.",
        "learned",
        "learn", "learning", "learns",
        "Он узнал о событии после его происшествия.",
        "Він дізнався про подію після її настання.",
        "Dowiedział się o wydarzeniu po fakcie."
    ],
    [
        "They ... a house in the countryside.",
        "built",
        "build", "building", "builds",
        "Они построили дом в деревне.",
        "Вони побудували будинок у селі.",
        "Zbudowali dom na wsi."
    ],
    [
        "She ... a lost dog near her home.",
        "found",
        "find", "finding", "finds",
        "Она нашла потерявшуюся собаку рядом со своим домом.",
        "Вона знайшла загубленого собаку біля свого дому.",
        "Znalazła zagubionego psa w pobliżu swojego domu."
    ],
    [
        "He ... a gift for his sister's birthday.",
        "chose",
        "choose", "choosing", "chooses",
        "Он выбрал подарок на день рождения своей сестры.",
        "Він обрав подарунок на день народження своєї сестри.",
        "Wybrał prezent na urodziny swojej siostry."
    ],
    [
        "They ... to a new city last year.",
        "moved",
        "move", "moving", "moves",
        "Они переехали в новый город в прошлом году.",
        "Вони переїхали в нове місто минулого року.",
        "Przeprowadzili się do nowego miasta w zeszłym roku."
    ],
    [
        "She ... a song at the talent show.",
        "sang",
        "sing", "singing", "sings",
        "Она спела песню на шоу талантов.",
        "Вона заспівала пісню на шоу талантів.",
        "Zaśpiewała piosenkę na pokazie talentów."
    ],
    [
        "He ... all his friends to the party.",
        "invited",
        "invite", "inviting", "invites",
        "Он пригласил всех своих друзей на вечеринку.",
        "Він запросив усіх своїх друзів на вечірку.",
        "Zaprosił wszystkich swoich przyjaciół na imprezę."
    ],
    [
        "They ... for hours by the river.",
        "sat",
        "sit", "sitting", "sits",
        "Они сидели часами у реки.",
        "Вони сиділи годинами біля річки.",
        "Siedzieli godzinami nad rzeką."
    ],
    [
        "She ... in a swimming competition last summer.",
        "competed",
        "compete", "competing", "competes",
        "Она участвовала в соревнованиях по плаванию прошлым летом.",
        "Вона брала участь у змаганнях з плавання минулого літа.",
        "Wzięła udział w zawodach pływackich latem."
    ],
    [
        "He ... a loud noise outside.",
        "heard",
        "hear", "hearing", "hears",
        "Он услышал громкий шум снаружи.",
        "Він почув гучний шум зовні.",
        "Usłyszał głośny hałas na zewnątrz."
    ],
    [
        "They ... a famous actor at the event.",
        "met",
        "meet", "meeting", "meets",
        "Они встретили известного актера на мероприятии.",
        "Вони зустріли відомого актора на заході.",
        "Spotkali słynnego aktora na wydarzeniu."
    ],
    [
        "She ... the marathon last year.",
        "ran",
        "run", "running", "runs",
        "Она пробежала марафон в прошлом году.",
        "Вона пробігла марафон минулого року.",
        "Przebiegła maraton w zeszłym roku."
    ],
    [
        "He ... the mystery before anyone else.",
        "solved",
        "solve", "solving", "solves",
        "Он разгадал загадку раньше всех.",
        "Він розгадав загадку раніше всіх.",
        "Rozwiązał zagadkę przed wszystkimi."
    ],
    [
        "They ... the broken fence together.",
        "fixed",
        "fix", "fixing", "fixes",
        "Они вместе починили сломанный забор.",
        "Вони разом полагодили зламаний паркан.",
        "Naprawili zepsute ogrodzenie razem."
    ],
    [
        "She ... to visit her relatives last month.",
        "traveled",
        "travel", "traveling", "travels",
        "Она поехала навестить своих родственников в прошлом месяце.",
        "Вона поїхала відвідати своїх родичів минулого місяця.",
        "Podróżowała odwiedzić rodzinę w zeszłym miesiącu."
    ],
    [
        "He ... his favorite song on the piano.",
        "played",
        "play", "playing", "plays",
        "Он сыграл свою любимую песню на пианино.",
        "Він зіграв свою улюблену пісню на піаніно.",
        "Zagrał swoją ulubioną piosenkę na pianinie."
    ],
    [
        "They ... in a dance competition together.",
        "performed",
        "perform", "performing", "performs",
        "Они вместе выступили в танцевальном конкурсе.",
        "Вони разом виступили на танцювальному конкурсі.",
        "Wystąpili razem w konkursie tanecznym."
    ],
    [
        "She ... her favorite book yesterday.",
        "read",
        "reads", "reading", "reader",
        "Она прочитала свою любимую книгу вчера.",
        "Вона прочитала свою улюблену книгу вчора.",
        "Przeczytała swoją ulubioną książkę wczoraj."
    ],
    [
        "They ... to the concert last Saturday.",
        "went",
        "go", "going", "goes",
        "Они пошли на концерт в прошлую субботу.",
        "Вони пішли на концерт минулої суботи.",
        "Poszli na koncert w zeszłą sobotę."
    ],
    [
        "He ... his homework before dinner.",
        "finished",
        "finish", "finishing", "finishes",
        "Он закончил домашнее задание перед ужином.",
        "Він закінчив домашнє завдання перед вечерею.",
        "Ukończył pracę domową przed kolacją."
    ],
    [
        "She ... her keys and couldn't find them.",
        "lost",
        "lose", "losing", "loses",
        "Она потеряла ключи и не могла их найти.",
        "Вона загубила ключі і не могла їх знайти.",
        "Zgubiła klucze i nie mogła ich znaleźć."
    ],
    [
        "They ... all their friends to the party.",
        "invited",
        "invite", "inviting", "invites",
        "Они пригласили всех своих друзей на вечеринку.",
        "Вони запросили всіх своїх друзів на вечірку.",
        "Zaprosili wszystkich swoich przyjaciół na imprezę."
    ],
    [
        "He ... his wallet at the restaurant.",
        "forgot",
        "forget", "forgetting", "forgets",
        "Он забыл свой кошелек в ресторане.",
        "Він забув свій гаманець у ресторані.",
        "Zapomniał portfela w restauracji."
    ],
    [
        "She ... the letter yesterday morning.",
        "wrote",
        "write", "writing", "written",
        "Она написала письмо вчера утром.",
        "Вона написала листа вчора вранці.",
        "Napisała list wczoraj rano."
    ],
    [
        "They ... in the new apartment last month.",
        "moved",
        "move", "moving", "moves",
        "Они переехали в новую квартиру в прошлом месяце.",
        "Вони переїхали в нову квартиру минулого місяця.",
        "Przeprowadzili się do nowego mieszkania w zeszłym miesiącu."
    ],
    [
        "He ... his car last weekend.",
        "sold",
        "sell", "selling", "sells",
        "Он продал свою машину на прошлых выходных.",
        "Він продав свою машину минулих вихідних.",
        "Sprzedał swój samochód w zeszły weekend."
    ],
    [
        "She ... a delicious cake for the party.",
        "baked",
        "bake", "baking", "bakes",
        "Она испекла вкусный торт для вечеринки.",
        "Вона спекла смачний торт для вечірки.",
        "Upiekła pyszne ciasto na imprezę."
    ],
    [
        "They ... the big match on Friday.",
        "watched",
        "watch", "watching", "watches",
        "Они смотрели важный матч в пятницу.",
        "Вони дивилися важливий матч у п'ятницю.",
        "Oglądali wielki mecz w piątek."
    ],
    [
        "He ... his old guitar last month.",
        "sold",
        "sell", "selling", "sells",
        "Он продал свою старую гитару в прошлом месяце.",
        "Він продав свою стару гітару минулого місяця.",
        "Sprzedał swoją starą gitarę w zeszłym miesiącu."
    ],
    [
        "They ... to the park every Sunday last month.",
        "went",
        "go", "going", "goes",
        "Они ходили в парк каждое воскресенье прошлого месяца.",
        "Вони ходили в парк кожну неділю минулого місяця.",
        "Chodzili do parku każdej niedzieli w zeszłym miesiącu."
    ],
    [
        "He ... the letter carefully.",
        "read",
        "reads", "reading", "reader",
        "Он внимательно прочитал письмо.",
        "Він уважно прочитав лист.",
        "Przeczytał uważnie list."
    ],
    [
        "She ... her friend with a project.",
        "helped",
        "help", "helping", "helps",
        "Она помогла подруге с проектом.",
        "Вона допомогла подрузі з проєктом.",
        "Pomogła przyjaciółce w projekcie."
    ],
    [
        "They ... their old house last year.",
        "sold",
        "sell", "selling", "sells",
        "Они продали свой старый дом в прошлом году.",
        "Вони продали свій старий будинок минулого року.",
        "Sprzedali swój stary dom w zeszłym roku."
    ],
    [
        "She ... to finish her work.",
        "tried",
        "try", "trying", "tries",
        "Она старалась закончить свою работу.",
        "Вона старалася закінчити свою роботу.",
        "Starała się skończyć swoją pracę."
    ],
    [
        "They ... very late to the meeting.",
        "came",
        "come", "coming", "comes",
        "Они пришли очень поздно на встречу.",
        "Вони прийшли дуже пізно на зустріч.",
        "Przyszli bardzo późno na spotkanie."
    ],
    [
        "He ... his jacket at home.",
        "left",
        "leave", "leaving", "leaves",
        "Он оставил свою куртку дома.",
        "Він залишив свою куртку вдома.",
        "Zostawił kurtkę w domu."
    ],
    [
        "She ... the message yesterday evening.",
        "sent",
        "send", "sending", "sends",
        "Она отправила сообщение вчера вечером.",
        "Вона відправила повідомлення вчора ввечері.",
        "Wysłała wiadomość wczoraj wieczorem."
    ],
    [
        "They ... breakfast at a cafe.",
        "had",
        "have", "having", "has",
        "Они завтракали в кафе.",
        "Вони снідали у кафе.",
        "Zjedli śniadanie w kawiarni."
    ],
    [
        "He ... a beautiful picture of the mountains.",
        "painted",
        "paint", "painting", "paints",
        "Он нарисовал красивую картину гор.",
        "Він намалював гарну картину гір.",
        "Namalował piękny obraz gór."
    ],
    [
        "She ... a long walk with her dog.",
        "took",
        "take", "taking", "takes",
        "Она совершила долгую прогулку с собакой.",
        "Вона здійснила довгу прогулянку з собакою.",
        "Poszła na długi spacer z psem."
    ],

    [
        "He drinks coffee every morning.",
        "He drank coffee every morning.",
        "He is drinking coffee every morning.",
        "He has been drinking coffee every morning.",
        "He will drink coffee every morning.",
        "Он пьёт кофе каждое утро.",
        "Він п'є каву щоранку.",
        "On pije kawę każdego ranka."
    ],
    [
        "They play football on Sundays.",
        "They played football on Sundays.",
        "They are playing football on Sundays.",
        "They have played football on Sundays.",
        "They will play football on Sundays.",
        "Они играют в футбол по воскресеньям.",
        "Вони грають у футбол щонеділі.",
        "Oni grają w piłkę nożną w niedzielę."
    ],
    [
        "I visit my grandmother every month.",
        "I visited my grandmother every month.",
        "I am visiting my grandmother every month.",
        "I have visited my grandmother every month.",
        "I will visit my grandmother every month.",
        "Я навещаю свою бабушку каждый месяц.",
        "Я відвідую свою бабусю кожного місяця.",
        "Odwiedzam moją babcię co miesiąc."
    ],
    [
        "She reads books in her free time.",
        "She read books in her free time.",
        "She is reading books in her free time.",
        "She has read books in her free time.",
        "She will read books in her free time.",
        "Она читает книги в свободное время.",
        "Вона читає книги у вільний час.",
        "Ona czyta książki w wolnym czasie."
    ],
    [
        "We go to the gym after work.",
        "We went to the gym after work.",
        "We are going to the gym after work.",
        "We have gone to the gym after work.",
        "We will go to the gym after work.",
        "Мы ходим в спортзал после работы.",
        "Ми ходимо до спортзалу після роботи.",
        "Chodzimy na siłownię po pracy."
    ],
    [
        "He writes letters to his friends.",
        "He wrote letters to his friends.",
        "He is writing letters to his friends.",
        "He has written letters to his friends.",
        "He will write letters to his friends.",
        "Он пишет письма своим друзьям.",
        "Він пише листи своїм друзям.",
        "On pisze listy do swoich przyjaciół."
    ],
    [
        "She cooks dinner for her family.",
        "She cooked dinner for her family.",
        "She is cooking dinner for her family.",
        "She has cooked dinner for her family.",
        "She will cook dinner for her family.",
        "Она готовит ужин для своей семьи.",
        "Вона готує вечерю для своєї родини.",
        "Ona gotuje obiad dla swojej rodziny."
    ],
    [
        "They watch TV in the evening.",
        "They watched TV in the evening.",
        "They are watching TV in the evening.",
        "They have watched TV in the evening.",
        "They will watch TV in the evening.",
        "Они смотрят телевизор вечером.",
        "Вони дивляться телевізор ввечері.",
        "Oni oglądają telewizję wieczorem."
    ],
    [
        "I ride my bike to school.",
        "I rode my bike to school.",
        "I am riding my bike to school.",
        "I have ridden my bike to school.",
        "I will ride my bike to school.",
        "Я езжу в школу на велосипеде.",
        "Я їжджу до школи на велосипеді.",
        "Jeżdżę do szkoły na rowerze."
    ],
    [
        "He studies hard for exams.",
        "He studied hard for exams.",
        "He is studying hard for exams.",
        "He has studied hard for exams.",
        "He will study hard for exams.",
        "Он усердно готовится к экзаменам.",
        "Він старанно готується до іспитів.",
        "On pilnie się uczy do egzaminów."
    ],

    [
        "She plays the piano beautifully.",
        "She played the piano beautifully.",
        "She is playing the piano beautifully.",
        "She has played the piano beautifully.",
        "She will play the piano beautifully.",
        "Она прекрасно играет на пианино.",
        "Вона чудово грає на піаніно.",
        "Ona pięknie gra na pianinie."
    ],
    [
        "They travel to different countries every summer.",
        "They traveled to different countries every summer.",
        "They are traveling to different countries every summer.",
        "They have traveled to different countries every summer.",
        "They will travel to different countries every summer.",
        "Они путешествуют по разным странам каждое лето.",
        "Вони подорожують до різних країн кожного літа.",
        "Oni podróżują do różnych krajów każdego lata."
    ],
    [
        "I take photos during vacations.",
        "I took photos during vacations.",
        "I am taking photos during vacations.",
        "I have taken photos during vacations.",
        "I will take photos during vacations.",
        "Я фотографирую во время отпусков.",
        "Я роблю фото під час відпустки.",
        "Robię zdjęcia podczas wakacji."
    ],
    [
        "He plays chess with his friends.",
        "He played chess with his friends.",
        "He is playing chess with his friends.",
        "He has played chess with his friends.",
        "He will play chess with his friends.",
        "Он играет в шахматы с друзьями.",
        "Він грає в шахи з друзями.",
        "On gra w szachy ze swoimi przyjaciółmi."
    ],
    [
        "We enjoy hiking on weekends.",
        "We enjoyed hiking on weekends.",
        "We are enjoying hiking on weekends.",
        "We have enjoyed hiking on weekends.",
        "We will enjoy hiking on weekends.",
        "Мы наслаждаемся походами по выходным.",
        "Ми насолоджуємося пішими прогулянками на вихідних.",
        "Cieszymy się wędrówkami w weekendy."
    ],
    [
        "She teaches English at a school.",
        "She taught English at a school.",
        "She is teaching English at a school.",
        "She has taught English at a school.",
        "She will teach English at a school.",
        "Она преподает английский в школе.",
        "Вона викладає англійську в школі.",
        "Uczy angielskiego w szkole."
    ],
    [
        "They listen to music every evening.",
        "They listened to music every evening.",
        "They are listening to music every evening.",
        "They have listened to music every evening.",
        "They will listen to music every evening.",
        "Они слушают музыку каждый вечер.",
        "Вони слухають музику що вечора.",
        "Oni słuchają muzyki każdego wieczoru."
    ],
    [
        "I draw pictures in my sketchbook.",
        "I drew pictures in my sketchbook.",
        "I am drawing pictures in my sketchbook.",
        "I have drawn pictures in my sketchbook.",
        "I will draw pictures in my sketchbook.",
        "Я рисую картинки в своем альбоме.",
        "Я малю картинки у своєму ескізнику.",
        "Rysuję obrazki w swoim szkicowniku."
    ],
    [
        "He fixes cars in his garage.",
        "He fixed cars in his garage.",
        "He is fixing cars in his garage.",
        "He has fixed cars in his garage.",
        "He will fix cars in his garage.",
        "Он чинит машины в своем гараже.",
        "Він ремонтує автомобілі у своєму гаражі.",
        "Naprawia samochody w swoim garażu."
    ],
    [
        "She plants flowers in the garden.",
        "She planted flowers in the garden.",
        "She is planting flowers in the garden.",
        "She has planted flowers in the garden.",
        "She will plant flowers in the garden.",
        "Она сажает цветы в саду.",
        "Вона садить квіти в саду.",
        "Sadzi kwiaty w ogrodzie."
    ],
    [
        "They swim in the pool during summer.",
        "They swam in the pool during summer.",
        "They are swimming in the pool during summer.",
        "They have swum in the pool during summer.",
        "They will swim in the pool during summer.",
        "Они плавают в бассейне летом.",
        "Вони плавають у басейні влітку.",
        "Pływają w basenie latem."
    ],
    [
        "I help my parents with chores.",
        "I helped my parents with chores.",
        "I am helping my parents with chores.",
        "I have helped my parents with chores.",
        "I will help my parents with chores.",
        "Я помогаю родителям с домашними делами.",
        "Я допомагаю батькам з домашніми обов'язками.",
        "Pomagam rodzicom w obowiązkach domowych."
    ],
    [
        "He runs every morning to stay fit.",
        "He ran every morning to stay fit.",
        "He is running every morning to stay fit.",
        "He has run every morning to stay fit.",
        "He will run every morning to stay fit.",
        "Он бегает каждое утро, чтобы поддерживать форму.",
        "Він бігає щоранку, щоб залишатися у формі.",
        "Biega każdego ranka, aby być w formie."
    ],
    [
        "They explore new places on vacations.",
        "They explored new places on vacations.",
        "They are exploring new places on vacations.",
        "They have explored new places on vacations.",
        "They will explore new places on vacations.",
        "Они исследуют новые места в отпусках.",
        "Вони досліджують нові місця у відпустці.",
        "Badają nowe miejsca podczas wakacji."
    ],
    [
        "I watch documentaries on weekends.",
        "I watched documentaries on weekends.",
        "I am watching documentaries on weekends.",
        "I have watched documentaries on weekends.",
        "I will watch documentaries on weekends.",
        "Я смотрю документальные фильмы по выходным.",
        "Я дивлюсь документальні фільми на вихідних.",
        "Oglądam dokumenty w weekendy."
    ],
    [
        "She learns new languages quickly.",
        "She learned new languages quickly.",
        "She is learning new languages quickly.",
        "She has learned new languages quickly.",
        "She will learn new languages quickly.",
        "Она быстро учит новые языки.",
        "Вона швидко вивчає нові мови.",
        "Szybko uczy się nowych języków."
    ],
    [
        "They celebrate birthdays with parties.",
        "They celebrated birthdays with parties.",
        "They are celebrating birthdays with parties.",
        "They have celebrated birthdays with parties.",
        "They will celebrate birthdays with parties.",
        "Они отмечают дни рождения вечеринками.",
        "Вони святкують дні народження вечірками.",
        "Świętują urodziny przyjęciami."
    ],
    [
        "I build models in my free time.",
        "I built models in my free time.",
        "I am building models in my free time.",
        "I have built models in my free time.",
        "I will build models in my free time.",
        "Я собираю модели в свободное время.",
        "Я збираю моделі у вільний час.",
        "Buduję modele w wolnym czasie."
    ],
    [
        "He attends classes every day.",
        "He attended classes every day.",
        "He is attending classes every day.",
        "He has attended classes every day.",
        "He will attend classes every day.",
        "Он посещает занятия каждый день.",
        "Він відвідує заняття щодня.",
        "Uczęszcza na zajęcia codziennie."
    ],
    [
        "They enjoy reading novels.",
        "They enjoyed reading novels.",
        "They are enjoying reading novels.",
        "They have enjoyed reading novels.",
        "They will enjoy reading novels.",
        "Они любят читать романы.",
        "Вони люблять читати романи.",
        "Cieszą się czytaniem powieści."
    ],
    [
        "I clean my room every week.",
        "I cleaned my room every week.",
        "I am cleaning my room every week.",
        "I have cleaned my room every week.",
        "I will clean my room every week.",
        "Я убираю свою комнату каждую неделю.",
        "Я прибираю свою кімнату щотижня.",
        "Sprzątam swój pokój co tydzień."
    ],
    [
        "She enjoys cooking new recipes.",
        "She enjoyed cooking new recipes.",
        "She is enjoying cooking new recipes.",
        "She has enjoyed cooking new recipes.",
        "She will enjoy cooking new recipes.",
        "Она любит готовить новые рецепты.",
        "Вона любить готувати нові рецепти.",
        "Lubi gotować nowe przepisy."
    ],
    [
        "We visited the museum on holidays.",
        "We visited the museum on holidays.",
        "We are visiting the museum on holidays.",
        "We have visited the museum on holidays.",
        "We will visit the museum on holidays.",
        "Мы посетили музей на праздниках.",
        "Ми відвідали музей на свята.",
        "Odwiedziliśmy muzeum w święta."
    ],
    [
        "He plays football every Saturday.",
        "He played football every Saturday.",
        "He is playing football every Saturday.",
        "He has played football every Saturday.",
        "He will play football every Saturday.",
        "Он играет в футбол каждую субботу.",
        "Він грає у футбол кожну суботу.",
        "Gra w piłkę nożną w każdą sobotę."
    ],
    [
        "They clean the house every spring.",
        "They cleaned the house every spring.",
        "They are cleaning the house every spring.",
        "They have cleaned the house every spring.",
        "They will clean the house every spring.",
        "Они убирают дом каждую весну.",
        "Вони прибирають будинок кожної весни.",
        "Sprzątają dom każdej wiosny."
    ],
    [
        "I bake cookies for the holidays.",
        "I baked cookies for the holidays.",
        "I am baking cookies for the holidays.",
        "I have baked cookies for the holidays.",
        "I will bake cookies for the holidays.",
        "Я пеку печенье на праздники.",
        "Я пекла печиво на свята.",
        "Piekę ciastka na święta."
    ],
    [
        "She organizes events for her community.",
        "She organized events for her community.",
        "She is organizing events for her community.",
        "She has organized events for her community.",
        "She will organize events for her community.",
        "Она организует мероприятия для своего сообщества.",
        "Вона організовує заходи для своєї громади.",
        "Organizuje wydarzenia dla swojej społeczności."
    ],
    [
        "They play video games after school.",
        "They played video games after school.",
        "They are playing video games after school.",
        "They have played video games after school.",
        "They will play video games after school.",
        "Они играют в видеоигры после школы.",
        "Вони грають у відеоігри після школи.",
        "Grają w gry wideo po szkole."
    ],
    [
        "I read books every night.",
        "I read books every night.",
        "I am reading books every night.",
        "I have read books every night.",
        "I will read books every night.",
        "Я читаю книги каждую ночь.",
        "Я читаю книги щоночі.",
        "Czytam książki każdej nocy."
    ],
    [
        "He studies math every day.",
        "He studied math every day.",
        "He is studying math every day.",
        "He has studied math every day.",
        "He will study math every day.",
        "Он изучает математику каждый день.",
        "Він вивчає математику щодня.",
        "Bada matematykę codziennie."
    ],
    [
        "They walk their dogs in the park.",
        "They walked their dogs in the park.",
        "They are walking their dogs in the park.",
        "They have walked their dogs in the park.",
        "They will walk their dogs in the park.",
        "Они выгуливают своих собак в парке.",
        "Вони вигулюють своїх собак у парку.",
        "Wyprowadzają swoje psy do parku."
    ],
    [
        "I practice guitar every day.",
        "I practiced guitar every day.",
        "I am practicing guitar every day.",
        "I have practiced guitar every day.",
        "I will practice guitar every day.",
        "Я занимаюсь гитарой каждый день.",
        "Я займаюся гітарою щодня.",
        "Codziennie ćwiczę gitarę."
    ],
    [
        "She enjoys gardening in her free time.",
        "She enjoyed gardening in her free time.",
        "She is enjoying gardening in her free time.",
        "She has enjoyed gardening in her free time.",
        "She will enjoy gardening in her free time.",
        "Она любит садоводство в свободное время.",
        "Вона любить садівництво у вільний час.",
        "Lubi ogrodnictwo w wolnym czasie."
    ],
    [
        "They take care of their pets.",
        "They took care of their pets.",
        "They are taking care of their pets.",
        "They have taken care of their pets.",
        "They will take care of their pets.",
        "Они заботятся о своих питомцах.",
        "Вони піклуються про своїх домашніх тварин.",
        "Dbają o swoje zwierzęta."
    ],
    [
        "I listen to podcasts on my way to work.",
        "I listened to podcasts on my way to work.",
        "I am listening to podcasts on my way to work.",
        "I have listened to podcasts on my way to work.",
        "I will listen to podcasts on my way to work.",
        "Я слушаю подкасты по дороге на работу.",
        "Я слухаю подкасти дорогою на роботу.",
        "Słucham podcastów w drodze do pracy."
    ],
    [
        "He rides his bike every weekend.",
        "He rode his bike every weekend.",
        "He is riding his bike every weekend.",
        "He has ridden his bike every weekend.",
        "He will ride his bike every weekend.",
        "Он ездит на велосипеде каждые выходные.",
        "Він їздить на велосипеді кожні вихідні.",
        "Jeździ na rowerze w każdy weekend."
    ],
    [
        "They share their food with others.",
        "They shared their food with others.",
        "They are sharing their food with others.",
        "They have shared their food with others.",
        "They will share their food with others.",
        "Они делятся своей едой с другими.",
        "Вони діляться своєю їжею з іншими.",
        "Dzielą się jedzeniem z innymi."
    ],
    [
        "I write in my journal every night.",
        "I wrote in my journal every night.",
        "I am writing in my journal every night.",
        "I have written in my journal every night.",
        "I will write in my journal every night.",
        "Я пишу в своем дневнике каждую ночь.",
        "Я пишу в своєму щоденнику щоночі.",
        "Piszę w swoim dzienniku każdej nocy."
    ],
    [
        "She draws pictures of animals.",
        "She drew pictures of animals.",
        "She is drawing pictures of animals.",
        "She has drawn pictures of animals.",
        "She will draw pictures of animals.",
        "Она рисует картинки с животными.",
        "Вона малює картинки з тваринами.",
        "Rysuje obrazki zwierząt."
    ],
    [
        "They teach their kids good manners.",
        "They taught their kids good manners.",
        "They are teaching their kids good manners.",
        "They have taught their kids good manners.",
        "They will teach their kids good manners.",
        "Они учат своих детей хорошим манерам.",
        "Вони вчать своїх дітей хорошим манерам.",
        "Uczą swoje dzieci dobrych manier."
    ],
    [
        "I cycle to work every day.",
        "I cycled to work every day.",
        "I am cycling to work every day.",
        "I have cycled to work every day.",
        "I will cycle to work every day.",
        "Я катаюсь на велосипеде на работу каждый день.",
        "Я їжджу на велосипеді на роботу щодня.",
        "Jeżdżę do pracy na rowerze codziennie."
    ],
    [
        "She participates in community service.",
        "She participated in community service.",
        "She is participating in community service.",
        "She has participated in community service.",
        "She will participate in community service.",
        "Она участвует в общественной деятельности.",
        "Вона бере участь у громадських роботах.",
        "Uczestniczy w pracach społecznych."
    ],
    [
        "I am reading a book.",
        "I read a book.",
        "I was reading a book.",
        "I will be reading a book.",
        "I have read a book.",
        "Я читаю книгу.",
        "Я читаю книгу.",
        "Czytam książkę."
    ],
    [
        "She is cooking dinner.",
        "She cooked dinner.",
        "She was cooking dinner.",
        "She will be cooking dinner.",
        "She has cooked dinner.",
        "Она готовит ужин.",
        "Вона готує вечерю.",
        "Ona gotuje kolację."
    ],
    [
        "They are playing soccer.",
        "They played soccer.",
        "They were playing soccer.",
        "They will be playing soccer.",
        "They have played soccer.",
        "Они играют в футбол.",
        "Вони грають у футбол.",
        "Grają w piłkę nożną."
    ],
    [
        "We are watching a movie.",
        "We watched a movie.",
        "We were watching a movie.",
        "We will be watching a movie.",
        "We have watched a movie.",
        "Мы смотрим фильм.",
        "Ми дивимось фільм.",
        "Oglądamy film."
    ],
    [
        "He is writing a letter.",
        "He wrote a letter.",
        "He was writing a letter.",
        "He will be writing a letter.",
        "He has written a letter.",
        "Он пишет письмо.",
        "Він пише листа.",
        "Pisze list."
    ],
    [
        "They are studying for exams.",
        "They studied for exams.",
        "They were studying for exams.",
        "They will be studying for exams.",
        "They have studied for exams.",
        "Они учатся к экзаменам.",
        "Вони готуються до іспитів.",
        "Uczą się do egzaminów."
    ],
    [
        "I am walking my dog.",
        "I walked my dog.",
        "I was walking my dog.",
        "I will be walking my dog.",
        "I have walked my dog.",
        "Я выгуливаю свою собаку.",
        "Я вигулюю свою собаку.",
        "Wyprowadzam swojego psa."
    ],
    [
        "She is painting a picture.",
        "She painted a picture.",
        "She was painting a picture.",
        "She will be painting a picture.",
        "She has painted a picture.",
        "Она рисует картину.",
        "Вона малює картину.",
        "Maluje obraz."
    ],
    [
        "We are visiting our friends.",
        "We visited our friends.",
        "We were visiting our friends.",
        "We will be visiting our friends.",
        "We have visited our friends.",
        "Мы навещаем наших друзей.",
        "Ми відвідуємо наших друзів.",
        "Odwiedzamy naszych przyjaciół."
    ],
    [
        "They are traveling to Europe.",
        "They traveled to Europe.",
        "They were traveling to Europe.",
        "They will be traveling to Europe.",
        "They have traveled to Europe.",
        "Они путешествуют по Европе.",
        "Вони подорожують Європою.",
        "Podróżują do Europy."
    ],
    [
        "I am taking a shower.",
        "I took a shower.",
        "I was taking a shower.",
        "I will be taking a shower.",
        "I have taken a shower.",
        "Я принимаю душ.",
        "Я приймаю душ.",
        "Biorę prysznic."
    ],
    [
        "She is doing her homework.",
        "She did her homework.",
        "She was doing her homework.",
        "She will be doing her homework.",
        "She has done her homework.",
        "Она делает домашнее задание.",
        "Вона робить домашнє завдання.",
        "Ona robi swoje zadanie domowe."
    ],
    [
        "They are playing video games.",
        "They played video games.",
        "They were playing video games.",
        "They will be playing video games.",
        "They have played video games.",
        "Они играют в видеоигры.",
        "Вони грають у відеоігри.",
        "Grają w gry wideo."
    ],
    [
        "We are cleaning the house.",
        "We cleaned the house.",
        "We were cleaning the house.",
        "We will be cleaning the house.",
        "We have cleaned the house.",
        "Мы убираем дом.",
        "Ми прибираємо будинок.",
        "Sprzątamy dom."
    ],
    [
        "He is fixing his bike.",
        "He fixed his bike.",
        "He was fixing his bike.",
        "He will be fixing his bike.",
        "He has fixed his bike.",
        "Он чинит свой велосипед.",
        "Він ремонтує свій велосипед.",
        "Naprawia swój rower."
    ],
    [
        "They are gardening on the weekend.",
        "They gardened on the weekend.",
        "They were gardening on the weekend.",
        "They will be gardening on the weekend.",
        "They have gardened on the weekend.",
        "Они занимаются садоводством в выходные.",
        "Вони займаються садівництвом на вихідних.",
        "Ogrodniczą w weekend."
    ],
    [
        "I am learning to cook.",
        "I learned to cook.",
        "I was learning to cook.",
        "I will be learning to cook.",
        "I have learned to cook.",
        "Я учусь готовить.",
        "Я вчуся готувати.",
        "Uczę się gotować."
    ],
    [
        "She is shopping for groceries.",
        "She shopped for groceries.",
        "She was shopping for groceries.",
        "She will be shopping for groceries.",
        "She has shopped for groceries.",
        "Она покупает продукты.",
        "Вона купує продукти.",
        "Kupuje zakupy spożywcze."
    ],
    [
        "We are practicing our presentation.",
        "We practiced our presentation.",
        "We were practicing our presentation.",
        "We will be practicing our presentation.",
        "We have practiced our presentation.",
        "Мы репетируем нашу презентацию.",
        "Ми репетируємо нашу презентацію.",
        "Ćwiczymy naszą prezentację."
    ],
    [
        "He is browsing the internet.",
        "He browsed the internet.",
        "He was browsing the internet.",
        "He will be browsing the internet.",
        "He has browsed the internet.",
        "Он просматривает интернет.",
        "Він переглядає інтернет.",
        "Przegląda internet."
    ],
    [
        "They are taking pictures.",
        "They took pictures.",
        "They were taking pictures.",
        "They will be taking pictures.",
        "They have taken pictures.",
        "Они делают фотографии.",
        "Вони фотографують.",
        "Robią zdjęcia."
    ],
    [
        "I am helping my sister.",
        "I helped my sister.",
        "I was helping my sister.",
        "I will be helping my sister.",
        "I have helped my sister.",
        "Я помогаю своей сестре.",
        "Я допомагаю своїй сестрі.",
        "Pomagam mojej siostrze."
    ],
    [
        "She is playing the piano.",
        "She played the piano.",
        "She was playing the piano.",
        "She will be playing the piano.",
        "She has played the piano.",
        "Она играет на пианино.",
        "Вона грає на піаніно.",
        "Gra na pianinie."
    ],
    [
        "We are jogging in the park.",
        "We jogged in the park.",
        "We were jogging in the park.",
        "We will be jogging in the park.",
        "We have jogged in the park.",
        "Мы бегаем в парке.",
        "Ми бігаємо в парку.",
        "Biegamy w parku."
    ],
    [
        "They are having a meeting.",
        "They had a meeting.",
        "They were having a meeting.",
        "They will be having a meeting.",
        "They have had a meeting.",
        "У них встреча.",
        "У них зустріч.",
        "Mają spotkanie."
    ],
    [
        "I am assembling furniture.",
        "I assembled furniture.",
        "I was assembling furniture.",
        "I will be assembling furniture.",
        "I have assembled furniture.",
        "Я собираю мебель.",
        "Я збираю меблі.",
        "Składam meble."
    ],
    [
        "She is training for a marathon.",
        "She trained for a marathon.",
        "She was training for a marathon.",
        "She will be training for a marathon.",
        "She has trained for a marathon.",
        "Она тренируется к марафону.",
        "Вона тренується до марафону.",
        "Trenuje do maratonu."
    ],
    [
        "We are making dinner.",
        "We made dinner.",
        "We were making dinner.",
        "We will be making dinner.",
        "We have made dinner.",
        "Мы готовим ужин.",
        "Ми готуємо вечерю.",
        "Robimy kolację."
    ],
    [
        "They are exploring the city.",
        "They explored the city.",
        "They were exploring the city.",
        "They will be exploring the city.",
        "They have explored the city.",
        "Они исследуют город.",
        "Вони досліджують місто.",
        "Eksplorują miasto."
    ],
    [
        "I am arranging my schedule.",
        "I arranged my schedule.",
        "I was arranging my schedule.",
        "I will be arranging my schedule.",
        "I have arranged my schedule.",
        "Я планирую свое расписание.",
        "Я складаю свій графік.",
        "Ustalam mój harmonogram."
    ],
    [
        "She is chatting with friends.",
        "She chatted with friends.",
        "She was chatting with friends.",
        "She will be chatting with friends.",
        "She has chatted with friends.",
        "Она болтает с друзьями.",
        "Вона спілкується з друзями.",
        "Rozmawia z przyjaciółmi."
    ],
    [
        "We are preparing for the trip.",
        "We prepared for the trip.",
        "We were preparing for the trip.",
        "We will be preparing for the trip.",
        "We have prepared for the trip.",
        "Мы готовимся к поездке.",
        "Ми готуємося до поїздки.",
        "Przygotowujemy się do wyjazdu."
    ],
    [
        "They are collecting stamps.",
        "They collected stamps.",
        "They were collecting stamps.",
        "They will be collecting stamps.",
        "They have collected stamps.",
        "Они собирают марки.",
        "Вони збирають марки.",
        "Zbierają znaczki."
    ],
    [
        "I am trying a new recipe.",
        "I tried a new recipe.",
        "I was trying a new recipe.",
        "I will be trying a new recipe.",
        "I have tried a new recipe.",
        "Я пробую новый рецепт.",
        "Я намагаюся новий рецепт.",
        "Próbuję nowy przepis."
    ],
    [
        "She is giving a presentation.",
        "She gave a presentation.",
        "She was giving a presentation.",
        "She will be giving a presentation.",
        "She has given a presentation.",
        "Она делает презентацию.",
        "Вона робить презентацію.",
        "Robi prezentację."
    ],
    [
        "We are attending a conference.",
        "We attended a conference.",
        "We were attending a conference.",
        "We will be attending a conference.",
        "We have attended a conference.",
        "Мы участвуем в конференции.",
        "Ми беремо участь у конференції.",
        "Bierzemy udział w konferencji."
    ],
    [
        "They are planning a vacation.",
        "They planned a vacation.",
        "They were planning a vacation.",
        "They will be planning a vacation.",
        "They have planned a vacation.",
        "Они планируют отпуск.",
        "Вони планують відпустку.",
        "Planują wakacje."
    ],
    [
        "I am organizing a party.",
        "I organized a party.",
        "I was organizing a party.",
        "I will be organizing a party.",
        "I have organized a party.",
        "Я организую вечеринку.",
        "Я організовую вечірку.",
        "Organizuję imprezę."
    ],
    [
        "She is traveling to Paris.",
        "She traveled to Paris.",
        "She was traveling to Paris.",
        "She will be traveling to Paris.",
        "She has traveled to Paris.",
        "Она путешествует в Париж.",
        "Вона подорожує до Парижа.",
        "Podróżuje do Paryża."
    ],
    [
        "They are waiting for the bus.",
        "They waited for the bus.",
        "They were waiting for the bus.",
        "They will be waiting for the bus.",
        "They have waited for the bus.",
        "Они ждут автобус.",
        "Вони чекають автобус.",
        "Czekają na autobus."
    ],
    [
        "We are building a sandcastle.",
        "We built a sandcastle.",
        "We were building a sandcastle.",
        "We will be building a sandcastle.",
        "We have built a sandcastle.",
        "Мы строим песочницу.",
        "Ми будуємо піщанку.",
        "Budujemy zamek z piasku."
    ],
    [
        "He is reading a novel.",
        "He read a novel.",
        "He was reading a novel.",
        "He will be reading a novel.",
        "He has read a novel.",
        "Он читает роман.",
        "Він читає роман.",
        "Czyta powieść."
    ],
    [
        "They are painting the fence.",
        "They painted the fence.",
        "They were painting the fence.",
        "They will be painting the fence.",
        "They have painted the fence.",
        "Они красят забор.",
        "Вони фарбують паркан.",
        "Malują płot."
    ],
    [
        "I am exercising at the gym.",
        "I exercised at the gym.",
        "I was exercising at the gym.",
        "I will be exercising at the gym.",
        "I have exercised at the gym.",
        "Я занимаюсь в спортзале.",
        "Я займаюся в спортзалі.",
        "Ćwiczę na siłowni."
    ],
    [
        "She is watching a documentary.",
        "She watched a documentary.",
        "She was watching a documentary.",
        "She will be watching a documentary.",
        "She has watched a documentary.",
        "Она смотрит документальный фильм.",
        "Вона дивиться документальний фільм.",
        "Ona ogląda dokument."
    ],
    [
        "We are exploring the forest.",
        "We explored the forest.",
        "We were exploring the forest.",
        "We will be exploring the forest.",
        "We have explored the forest.",
        "Мы исследуем лес.",
        "Ми досліджуємо ліс.",
        "Badajemy las."
    ],
    [
        "They are attending a workshop.",
        "They attended a workshop.",
        "They were attending a workshop.",
        "They will be attending a workshop.",
        "They have attended a workshop.",
        "Они посещают семинар.",
        "Вони відвідують семінар.",
        "Uczestniczą w warsztatach."
    ],
    [
        "I am knitting a sweater.",
        "I knitted a sweater.",
        "I was knitting a sweater.",
        "I will be knitting a sweater.",
        "I have knitted a sweater.",
        "Я вяжу свитер.",
        "Я в'яжу светр.",
        "Robię sweter."
    ],
    [
        "She is studying for her exams.",
        "She studied for her exams.",
        "She was studying for her exams.",
        "She will be studying for her exams.",
        "She has studied for her exams.",
        "Она готовится к экзаменам.",
        "Вона готується до іспитів.",
        "Przygotowuje się do egzaminów."
    ],
    [
        "We are enjoying the concert.",
        "We enjoyed the concert.",
        "We were enjoying the concert.",
        "We will be enjoying the concert.",
        "We have enjoyed the concert.",
        "Мы наслаждаемся концертом.",
        "Ми насолоджуємося концертом.",
        "Cieszymy się koncertem."
    ],
    [
        "They are recording a podcast.",
        "They recorded a podcast.",
        "They were recording a podcast.",
        "They will be recording a podcast.",
        "They have recorded a podcast.",
        "Они записывают подкаст.",
        "Вони записують подкаст.",
        "Nagrywają podcast."
    ],
    [
        "I am playing soccer with friends.",
        "I played soccer with friends.",
        "I was playing soccer with friends.",
        "I will be playing soccer with friends.",
        "I have played soccer with friends.",
        "Я играю в футбол с друзьями.",
        "Я граю у футбол з друзями.",
        "Gram w piłkę nożną z przyjaciółmi."
    ],
    [
        "She is volunteering at the shelter.",
        "She volunteered at the shelter.",
        "She was volunteering at the shelter.",
        "She will be volunteering at the shelter.",
        "She has volunteered at the shelter.",
        "Она волонтерит в приюте.",
        "Вона волонтерить у притулку.",
        "Ona jest wolontariuszką w schronisku."
    ],
    [
        "We are taking a break.",
        "We took a break.",
        "We were taking a break.",
        "We will be taking a break.",
        "We have taken a break.",
        "Мы делаем перерыв.",
        "Ми робимо перерву.",
        "Robimy przerwę."
    ],
    [
        "They are sending invitations.",
        "They sent invitations.",
        "They were sending invitations.",
        "They will be sending invitations.",
        "They have sent invitations.",
        "Они отправляют приглашения.",
        "Вони відправляють запрошення.",
        "Wysyłają zaproszenia."
    ],
    [
        "I am planting flowers.",
        "I planted flowers.",
        "I was planting flowers.",
        "I will be planting flowers.",
        "I have planted flowers.",
        "Я сажаю цветы.",
        "Я саджаю квіти.",
        "Sadze kwiaty."
    ],
    [
        "She is playing chess.",
        "She played chess.",
        "She was playing chess.",
        "She will be playing chess.",
        "She has played chess.",
        "Она играет в шахматы.",
        "Вона грає в шахи.",
        "Gra w szachy."
    ],
    [
        "We are riding bicycles.",
        "We rode bicycles.",
        "We were riding bicycles.",
        "We will be riding bicycles.",
        "We have ridden bicycles.",
        "Мы катаемся на велосипедах.",
        "Ми катаємося на велосипедах.",
        "Jeździmy na rowerach."
    ],
    [
        "They are helping at the community center.",
        "They helped at the community center.",
        "They were helping at the community center.",
        "They will be helping at the community center.",
        "They have helped at the community center.",
        "Они помогают в центре сообщества.",
        "Вони допомагають у центрі громади.",
        "Pomagają w centrum społeczności."
    ],
    [
        "I am cleaning my room.",
        "I cleaned my room.",
        "I was cleaning my room.",
        "I will be cleaning my room.",
        "I have cleaned my room.",
        "Я убираю свою комнату.",
        "Я прибираю свою кімнату.",
        "Sprzątam mój pokój."
    ],
    [
        "She is riding her horse.",
        "She rode her horse.",
        "She was riding her horse.",
        "She will be riding her horse.",
        "She has ridden her horse.",
        "Она ездит на своем коне.",
        "Вона їздить на своєму коні.",
        "Jeździ na swoim koniu."
    ],
    [
        "We are enjoying our vacation.",
        "We enjoyed our vacation.",
        "We were enjoying our vacation.",
        "We will be enjoying our vacation.",
        "We have enjoyed our vacation.",
        "Мы наслаждаемся нашим отпуском.",
        "Ми насолоджуємося нашими канікулами.",
        "Cieszymy się wakacjami."
    ],
    [
        "They are doing yoga.",
        "They did yoga.",
        "They were doing yoga.",
        "They will be doing yoga.",
        "They have done yoga.",
        "Они занимаются йогой.",
        "Вони займаються йогою.",
        "Uprawiają jogę."
    ],
    function (id) {
        return replaceEllipsisWithWord(id, pastSimpleSentences);
    }  
];

  // Если это свойство есть, то оно попадает в заголовок теста
  pastSimpleSentences.nameLeson = "Past Simple Sentences";

    // Свойство показывает сколько индексов содержат правильные предложения
    // Если его нет, то будет считаться, что правильные предложения 
    // только индекс 0 и 1. Если 5 - это индексы 0,1,2,3,4 с правильно
    // созданными предложениями.
    pastSimpleSentences.lengthTrue = 2;

    // расширение числа подмассивов за счёт замены местами нулевого и первого индекса
    pastSimpleSentences.push(...extendForArray(pastSimpleSentences));
