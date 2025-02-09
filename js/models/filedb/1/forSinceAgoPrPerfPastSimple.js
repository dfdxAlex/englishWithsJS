const forSinceAgoPrPerfPastSimple = [
    ["I moved to this city a year ...", "ago", "for", "since", "earlier", "Я переехал в этот город год назад.", "Я переїхав у це місто рік тому.", "Przeprowadziłem się do tego miasta rok temu."],
    ["She finished university ...", "ago", "for", "since", "previously", "Она закончила университет два года назад.", "Вона закінчила університет два роки тому.", "Ukończyła uniwersytet dwa lata temu."],
    ["They left the party an hour ...", "ago", "for", "since", "before", "Они ушли с вечеринки час назад.", "Вони пішли з вечірки годину тому.", "Wyszli z imprezy godzinę temu."],
    ["He bought his car two years ...", "ago", "for", "since", "back", "Он купил свою машину два года назад.", "Він купив свою машину два роки тому.", "Kupił swój samochód dwa lata temu."],
    ["We started this project a month ...", "ago", "for", "since", "earlier", "Мы начали этот проект месяц назад.", "Ми почали цей проєкт місяць тому.", "Rozpoczęliśmy ten projekt miesiąc temu."],
    ["I saw that movie a week ...", "ago", "for", "since", "before", "Я смотрел этот фильм неделю назад.", "Я дивився цей фільм тиждень тому.", "Widziałem ten film tydzień temu."],
    ["She called me ten minutes ...", "ago", "for", "since", "previously", "Она позвонила мне десять минут назад.", "Вона зателефонувала мені десять хвилин тому.", "Zadzwoniła do mnie dziesięć minut temu."],
    ["They visited Paris five years ...", "ago", "for", "since", "back", "Они посетили Париж пять лет назад.", "Вони відвідали Париж п'ять років тому.", "Odwiedzili Paryż pięć lat temu."],
    ["He started learning English three months ...", "ago", "for", "since", "earlier", "Он начал учить английский три месяца назад.", "Він почав вчити англійську три місяці тому.", "Zaczął uczyć się angielskiego trzy miesiące temu."],
    ["We met at that cafe two days ...", "ago", "for", "since", "before", "Мы встретились в том кафе два дня назад.", "Ми зустрілися в тому кафе два дні тому.", "Spotkaliśmy się w tej kawiarni dwa dni temu."],
    ["She left home an hour ...", "ago", "for", "since", "previously", "Она вышла из дома час назад.", "Вона вийшла з дому годину тому.", "Wyszła z domu godzinę temu."],
    ["They got married ten years ...", "ago", "for", "since", "back", "Они поженились десять лет назад.", "Вони одружилися десять років тому.", "Pobrali się dziesięć lat temu."],
    ["I read this book a long time ...", "ago", "for", "since", "earlier", "Я прочитал эту книгу давным-давно.", "Я прочитав цю книгу давним-давно.", "Przeczytałem tę książkę dawno temu."],
    ["He graduated from college four years ...", "ago", "for", "since", "before", "Он окончил колледж четыре года назад.", "Він закінчив коледж чотири роки тому.", "Ukończył college cztery lata temu."],
    ["We arrived at the airport three hours ...", "ago", "for", "since", "previously", "Мы прибыли в аэропорт три часа назад.", "Ми прибули в аеропорт три години тому.", "Przybyliśmy na lotnisko trzy godziny temu."],
    ["She moved abroad six months ...", "ago", "for", "since", "back", "Она переехала за границу шесть месяцев назад.", "Вона переїхала за кордон шість місяців тому.", "Przeprowadziła się za granicę sześć miesięcy temu."],
    ["They opened their store a year ...", "ago", "for", "since", "earlier", "Они открыли свой магазин год назад.", "Вони відкрили свій магазин рік тому.", "Otworzyli swój sklep rok temu."],
    ["I started driving five years ...", "ago", "for", "since", "before", "Я начал водить пять лет назад.", "Я почав водити п'ять років тому.", "Zacząłem prowadzić pięć lat temu."],
    ["She finished her homework two hours ...", "ago", "for", "since", "previously", "Она закончила домашнюю работу два часа назад.", "Вона закінчила домашню роботу дві години тому.", "Skończyła zadanie domowe dwie godziny temu."],
    ["They built this house twenty years ...", "ago", "for", "since", "back", "Они построили этот дом двадцать лет назад.", "Вони побудували цей будинок двадцять років тому.", "Zbudowali ten dom dwadzieścia lat temu."],
    ["I bought my phone six months ...", "ago", "for", "since", "earlier", "Я купил свой телефон шесть месяцев назад.", "Я купив свій телефон шість місяців тому.", "Kupiłem swój telefon sześć miesięcy temu."],
    ["He joined the company three years ...", "ago", "for", "since", "before", "Он присоединился к компании три года назад.", "Він приєднався до компанії три роки тому.", "Dołączył do firmy trzy lata temu."],
    ["We last met two weeks ...", "ago", "for", "since", "previously", "Мы в последний раз встречались две недели назад.", "Ми востаннє зустрічалися два тижні тому.", "Ostatni raz spotkaliśmy się dwa tygodnie temu."],
    ["She cooked dinner an hour ...", "ago", "for", "since", "back", "Она приготовила ужин час назад.", "Вона приготувала вечерю годину тому.", "Ugotowała obiad godzinę temu."],
    ["They adopted a dog three months ...", "ago", "for", "since", "earlier", "Они взяли собаку три месяца назад.", "Вони взяли собаку три місяці тому.", "Zaadoptowali psa trzy miesiące temu."],
    ["I started reading this book two days ...", "ago", "for", "since", "before", "Я начал читать эту книгу два дня назад.", "Я почав читати цю книгу два дні тому.", "Zacząłem czytać tę książkę dwa dni temu."],
    ["He got his license four years ...", "ago", "for", "since", "previously", "Он получил свои права четыре года назад.", "Він отримав свої права чотири роки тому.", "Dostał prawo jazdy cztery lata temu."],
    ["We moved into this apartment a month ...", "ago", "for", "since", "back", "Мы переехали в эту квартиру месяц назад.", "Ми переїхали в цю квартиру місяць тому.", "Przeprowadziliśmy się do tego mieszkania miesiąc temu."],
    ["I have lived in this city ... five years.", "for", "ago", "since", "during", "Я живу в этом городе уже пять лет.", "Я живу в цьому місті вже п’ять років.", "Mieszkam w tym mieście od pięciu lat."],
    ["She has worked at this company ... a long time.", "for", "ago", "since", "throughout", "Она работает в этой компании уже давно.", "Вона працює в цій компанії вже давно.", "Ona pracuje w tej firmie od dawna."],
    ["They have known each other ... childhood.", "since", "ago", "for", "over", "Они знают друг друга с детства.", "Вони знають один одного з дитинства.", "Znają się od dzieciństwa."],
    ["We have been friends ... many years.", "for", "ago", "since", "through", "Мы друзья уже много лет.", "Ми друзі вже багато років.", "Jesteśmy przyjaciółmi od wielu lat."],
    ["He has studied English ... six months.", "for", "ago", "since", "throughout", "Он изучает английский уже шесть месяцев.", "Він вивчає англійську вже шість місяців.", "Uczy się angielskiego od sześciu miesięcy."],
    ["I have been waiting ... an hour.", "for", "ago", "since", "over", "Я жду уже час.", "Я чекаю вже годину.", "Czekam już godzinę."],
    ["She has lived here ... a decade.", "for", "ago", "since", "through", "Она живет здесь уже десять лет.", "Вона живе тут вже десять років.", "Mieszka tu od dziesięciu lat."],
    ["He has played football ... he was ten.", "for", "ago", "since", "over", "Он играет в футбол с десяти лет.", "Він грає у футбол з десяти років.", "Gra w piłkę nożną od dziesiątego roku życia."],
    ["We have been married ... 2005.", "for", "ago", "since", "during", "Мы женаты с 2005 года.", "Ми одружені з 2005 року.", "Jesteśmy małżeństwem od 2005 roku."],
    ["They have been traveling ... two weeks.", "for", "ago", "since", "throughout", "Они путешествуют уже две недели.", "Вони подорожують вже два тижні.", "Podróżują już od dwóch tygodni."],
    ["She has been reading this book ... a month.", "for", "ago", "since", "over", "Она читает эту книгу уже месяц.", "Вона читає цю книгу вже місяць.", "Czyta tę książkę od miesiąca."],
    ["I have been feeling sick ... yesterday.", "for", "ago", "since", "through", "Я чувствую себя больным с вчерашнего дня.", "Я почуваюся хворим з учорашнього дня.", "Czuję się chory od wczoraj."],
    ["He has owned this car ... five years.", "for", "ago", "since", "over", "У него эта машина уже пять лет.", "Він володіє цим автомобілем вже п’ять років.", "Ma ten samochód od pięciu lat."],
    ["They have been learning Spanish ... last summer.", "for", "ago", "since", "during", "Они изучают испанский с прошлого лета.", "Вони вивчають іспанську з минулого літа.", "Uczą się hiszpańskiego od zeszłego lata."],
    ["We have waited ... half an hour.", "for", "ago", "since", "throughout", "Мы ждали уже полчаса.", "Ми чекали вже пів години.", "Czekaliśmy już pół godziny."],
    ["I have had this phone ... two years.", "for", "ago", "since", "over", "У меня этот телефон уже два года.", "У мене цей телефон вже два роки.", "Mam ten telefon od dwóch lat."],
    ["She has been practicing piano ... she was a child.", "for", "ago", "since", "through", "Она играет на пианино с детства.", "Вона грає на піаніно з дитинства.", "Gra na pianinie od dzieciństwa."],
    ["He has been working on this project ... months.", "for", "ago", "since", "throughout", "Он работает над этим проектом уже несколько месяцев.", "Він працює над цим проектом вже кілька місяців.", "Pracuje nad tym projektem od kilku miesięcy."],
    ["We have lived in this house ... our childhood.", "for", "ago", "since", "over", "Мы живем в этом доме с детства.", "Ми живемо в цьому будинку з дитинства.", "Mieszkamy w tym domu od dzieciństwa."],
    ["They have been running ... three hours.", "for", "ago", "since", "through", "Они бегают уже три часа.", "Вони бігають вже три години.", "Biegają już trzy godziny."],
    ["She has been driving ... morning.", "for", "ago", "since", "throughout", "Она водит с утра.", "Вона водить з ранку.", "Prowadzi od rana."],
    ["He has been fixing his bike ... yesterday afternoon.", "for", "ago", "since", "over", "Он чинит велосипед со вчерашнего дня.", "Він ремонтує велосипед з учорашнього дня.", "Naprawia rower od wczorajszego popołudnia."],
    ["We have been shopping ... hours.", "for", "ago", "since", "through", "Мы ходим по магазинам уже несколько часов.", "Ми ходимо по магазинах вже кілька годин.", "Robimy zakupy już od kilku godzin."],
    ["I have been thinking about this ... a long time.", "for", "ago", "since", "during", "Я думаю об этом уже давно.", "Я думаю про це вже давно.", "Myślę o tym od dawna."],
    ["She has been waiting ... half a day.", "for", "ago", "since", "throughout", "Она ждет уже полдня.", "Вона чекає вже півдня.", "Czeka już pół dnia."],
    ["He has been running this business ... last year.", "for", "ago", "since", "over", "Он управляет этим бизнесом с прошлого года.", "Він керує цим бізнесом з минулого року.", "Prowadzi ten biznes od zeszłego roku."],
    ["We have been traveling ... two months.", "for", "ago", "since", "through", "Мы путешествуем уже два месяца.", "Ми подорожуємо вже два місяці.", "Podróżujemy już od dwóch miesięcy."],
    ["They have been discussing this topic ... the last meeting.", "for", "ago", "since", "throughout", "Они обсуждают эту тему с последней встречи.", "Вони обговорюють цю тему з останньої зустрічі.", "Dyskutują na ten temat od ostatniego spotkania."],
    ["I have been writing this book ... years.", "for", "ago", "since", "during", "Я пишу эту книгу уже несколько лет.", "Я пишу цю книгу вже кілька років.", "Piszę tę książkę od kilku lat."],
    ["She has been researching this topic ... a long time.", "for", "ago", "since", "over", "Она изучает эту тему уже давно.", "Вона досліджує цю тему вже давно.", "Bada ten temat od dawna."],
    ["I have known him ... 2010.", "since", "for", "ago", "recently", "Я знаю его с 2010 года.", "Я знаю його з 2010 року.", "Znam go od 2010 roku."],
    ["She has been working here ... two years.", "since", "for", "ago", "lately", "Она работает здесь с двумя годами.", "Вона працює тут вже два роки.", "Ona pracuje tutaj od dwóch lat."],
    ["They have been married ... last summer.", "since", "for", "ago", "currently", "Они женаты с прошлого лета.", "Вони одружені з минулого літа.", "Są małżeństwem od zeszłego lata."],
    ["I haven't seen him ... last Monday.", "since", "for", "ago", "recently", "Я не видел его с прошлого понедельника.", "Я не бачив його з минулого понеділка.", "Nie widziałem go od zeszłego poniedziałku."],
    ["We have been friends ... childhood.", "since", "for", "ago", "recently", "Мы друзья с детства.", "Ми друзі з дитинства.", "Jesteśmy przyjaciółmi od dzieciństwa."],
    ["I have lived here ... I was a child.", "since", "for", "ago", "now", "Я живу здесь с детства.", "Я живу тут з дитинства.", "Mieszkam tutaj od dzieciństwa."],
    ["She has been waiting ... 10 o'clock.", "since", "for", "ago", "currently", "Она ждет с 10 часов.", "Вона чекає з 10 години.", "Czeka od godziny 10."],
    ["They have studied English ... three years.", "since", "for", "ago", "lately", "Они учат английский три года.", "Вони вивчають англійську вже три роки.", "Oni uczą się angielskiego od trzech lat."],
    ["He has been playing the piano ... He was a kid.", "since", "for", "ago", "recently", "Он играет на пианино с детства.", "Вiн грае на піаніно з дитинства.", "Gra na pianinie od dzieciństwa."],
    ["He has been sick ... last week.", "since", "for", "ago", "currently", "Он болен с прошлой недели.", "Він хворіє з минулого тижня.", "Jest chory od zeszłego tygodnia."],
    ["She has worked here ... five years.", "since", "for", "ago", "now", "Она работает здесь пять лет.", "Вона працює тут вже п’ять років.", "Ona pracuje tutaj od pięciu lat."],
    ["I have been reading this book ... two weeks.", "for", "since", "ago", "recently", "Я читаю эту книгу две недели.", "Я читаю цю книгу вже два тижні.", "Czytam tę książkę od dwóch tygodni."],
    ["We have been learning French ... last year.", "since", "for", "ago", "currently", "Мы учим французский с прошлого года.", "Ми вивчаємо французьку з минулого року.", "Uczymy się francuskiego od zeszłego roku."],
    ["He has been living here ... 2015.", "since", "for", "ago", "lately", "Он живет здесь с 2015 года.", "Він живе тут з 2015 року.", "Mieszka tutaj od 2015 roku."],
    ["I have been working on this project ... January.", "since", "for", "ago", "recently", "Я работаю над этим проектом с января.", "Я працюю над цим проектом з січня.", "Pracuję nad tym projektem od stycznia."],
    ["They have been dating ... last month.", "since", "for", "ago", "now", "Они встречаются с прошлого месяца.", "Вони зустрічаються з минулого місяця.", "Spotykają się od zeszłego miesiąca."],
    ["I have known her ... we were at school.", "since", "for", "ago", "currently", "Я знаю её с тех пор, как мы учились в школе.", "Я знаю її з того часу, як ми були в школі.", "Znam ją od czasów, kiedy byliśmy w szkole."],
    ["We have been working here ... 2018.", "since", "for", "ago", "now", "Мы работаем здесь с 2018 года.", "Ми працюємо тут з 2018 року.", "Pracujemy tutaj od 2018 roku."],
    ["She has been living in London ... five years.", "since", "for", "ago", "lately", "Она живет в Лондоне пять лет.", "Вона живе в Лондоні вже п’ять років.", "Ona mieszka w Londynie od pięciu lat."],
    ["I have been studying Spanish ... 2019.", "since", "for", "ago", "currently", "Я изучаю испанский с 2019 года.", "Я вивчаю іспанську з 2019 року.", "Uczę się hiszpańskiego od 2019 roku."],
    ["They have been working on the project ... January.", "since", "for", "ago", "recently", "Они работают над проектом с января.", "Вони працюють над проектом з січня.", "Pracują nad projektem od stycznia."],
    ["I have been waiting ... an hour.", "since", "for", "ago", "currently", "Я жду уже час.", "Я чекаю вже годину.", "Czekam już godzinę."],
    ["She has been cooking ... noon.", "since", "for", "ago", "lately", "Она готовит с полудня.", "Вона готує з полудня.", "Ona gotuje od południa."],
    ["He has been reading the book ... last week.", "since", "for", "ago", "recently", "Он читает эту книгу с прошлой недели.", "Він читає цю книгу з минулого тижня.", "Czyta tę książkę od zeszłego tygodnia."],
    ["They have been waiting for a reply ... Monday.", "since", "for", "ago", "currently", "Они ждут ответа с понедельника.", "Вони чекають відповіді з понеділка.", "Czekają na odpowiedź od poniedziałku."],
    ["I have known this fact ... my childhood.", "since", "for", "ago", "lately", "Я знаю этот факт с детства.", "Я знаю цей факт з дитинства.", "Znam ten fakt od dzieciństwa."],
    ["We have been learning English ... six months.", "since", "for", "ago", "now", "Мы учим английский шесть месяцев.", "Ми вивчаємо англійську вже шість місяців.", "Uczymy się angielskiego od sześciu miesięcy."],
    ["She has been working on this issue ... the beginning of the year.", "since", "for", "ago", "recently", "Она работает над этим вопросом с начала года.", "Вона працює над цим питанням з початку року.", "Ona pracuje nad tym problemem od początku roku."],
    ["I have lived here for five years.", "How long have you lived here?", "How long you have lived here?", "How long did you live here?", "For how long have you lived here?", "Я живу здесь уже пять лет.", "Я живу тут вже п'ять років.", "Mieszkam tu od pięciu lat."],
    ["She has been studying French since 2019.", "Since when has she been studying French?", "Since when she has been studying French?", "When has she been studying French since 2019?", "Since what year she has been studying French?", "Она учит французский с 2019 года.", "Вона вивчає французьку з 2019 року.", "Ona uczy się francuskiego od 2019 roku."],
    ["They moved to London two years ago.", "When did they move to London?", "When they moved to London?", "When did they moved to London?", "When they move to London?", "Они переехали в Лондон два года назад.", "Вони переїхали до Лондона два роки тому.", "Przeprowadzili się do Londynu dwa lata temu."],
    ["I haven't seen her since last Tuesday.", "Since when haven't you seen her?", "Since when you haven't seen her?", "When you haven't seen her since last Tuesday?", "Since what time you haven't seen her?", "Я не видел её с прошлого вторника.", "Я не бачив її з минулого вівторка.", "Nie widziałem jej od zeszłego wtorku."],
    ["We have been friends for 10 years.", "How long have you been friends?", "For how long have you been friends?", "How many years have you been friends?", "For how many years you have been friends?", "Мы друзья уже 10 лет.", "Ми друзі вже 10 років.", "Jesteśmy przyjaciółmi od 10 lat."],
    ["He has been working here since January.", "Since when has he been working here?", "Since when he works here?", "When he has been working here since January?", "Since what time he has been working here?", "Он работает здесь с января.", "Він працює тут з січня.", "On pracuje tutaj od stycznia."],
    ["They have lived in this house for three years.", "How long have they lived in this house?", "For how long have they lived in this house?", "How many years have they lived in this house?", "For how many years they have lived in this house?", "Они живут в этом доме уже три года.", "Вони живуть в цьому будинку вже три роки.", "Mieszkają w tym domu od trzech lat."],
    ["I saw him two days ago.", "When did you see him?", "When you saw him?", "When did you saw him?", "When have you seen him?", "Я видел его два дня назад.", "Я бачив його два дні тому.", "Widziałem go dwa dni temu."],
    ["She has been traveling for a week.", "How long has she been traveling?", "How many days has she been traveling?", "For how long she has been traveling?", "How long she has been traveling?", "Она путешествует уже неделю.", "Вона подорожує вже тиждень.", "Podróżuje od tygodnia."],
    ["We haven't gone to the cinema for months.", "How long has it been since you went to the cinema?", "How many months has it been since you went to the cinema?", "How long you haven't gone to the cinema?", "For how many months you haven't gone to the cinema?", "Мы не ходили в кино уже несколько месяцев.", "Ми не ходили в кіно вже кілька місяців.", "Nie byliśmy w kinie od kilku miesięcy."],
    ["They have been married since 2010.", "Since when have they been married?", "Since when they are married?", "Since what year they have been married?", "From when they have been married?", "Они женаты с 2010 года.", "Вони одружені з 2010 року.", "Są małżeństwem od 2010 roku."],
    ["I have not seen him for a long time.", "How long has it been since you saw him?", "How long you haven't seen him?", "How long it's been since you saw him?", "How many time you haven't seen him?", "Я давно его не видел.", "Я давно його не бачив.", "Dawno go nie widziałem."],
    ["He left the house an hour ago.", "When did he leave the house?", "When he left the house?", "When did he left the house?", "How long ago he left the house?", "Он ушел из дома час назад.", "Він пішов з дому годину тому.", "On wyszedł z domu godzinę temu."],
    ["We have been waiting for the bus for 20 minutes.", "How long have you been waiting for the bus?", "How long you have been waiting for the bus?", "How many minutes have you been waiting for the bus?", "For how long you have been waiting for the bus?", "Мы ждем автобус уже 20 минут.", "Ми чекаємо на автобус вже 20 хвилин.", "Czekamy na autobus już 20 minut."],
    ["I haven't been to Paris since 2015.", "Since when haven't you been to Paris?", "Since when you haven't been to Paris?", "When haven't you been to Paris since 2015?", "Since what time you haven't been to Paris?", "Я не был в Париже с 2015 года.", "Я не був у Парижі з 2015 року.", "Nie byłem w Paryżu od 2015 roku."],
    function (id) {
      return replaceEllipsisWithWord(id, forSinceAgoPrPerfPastSimple);
    }  
  ];

  // Если это свойство есть, то оно попадает в заголовок теста
  forSinceAgoPrPerfPastSimple.nameLeson = "for, since, ago - Pr.Perf+Ps.Sp";
  