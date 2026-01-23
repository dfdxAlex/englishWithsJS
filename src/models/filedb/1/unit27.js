import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';

const unit27Start = [
  [
    "I will start a new hobby next month.",
    "What will you start next month?",
    "What did you start last month?",
    "What are you doing next month?",
    "What have you started recently?",
    "Я начну новое хобби в следующем месяце.",
    "Я почну нове хобі наступного місяця.",
    "Rozpocznę nowe hobby w przyszłym miesiącu."
  ],
  [
    "She will travel to Japan next year.",
    "Where will she travel next year?",
    "Where did she travel last year?",
    "Where are you traveling next year?",
    "Where have you traveled recently?",
    "Она поедет в Японию в следующем году.",
    "Вона поїде до Японії наступного року.",
    "Ona pojedzie do Japonii w przyszłym roku."
  ],
  [
    "We will adopt a kitten this spring.",
    "What will you adopt this spring?",
    "What did you adopt last spring?",
    "What are you adopting this spring?",
    "What have you adopted recently?",
    "Мы возьмем котенка этой весной.",
    "Ми візьмемо кошеня цієї весни.",
    "Adoptujemy kociaka tej wiosny."
  ],
  [
    "He will learn to code in Python soon.",
    "What will he learn soon?",
    "What did he learn earlier?",
    "What are you learning soon?",
    "What have you learned recently?",
    "Он скоро научится программировать на Python.",
    "Він скоро навчиться програмувати на Python.",
    "On wkrótce nauczy się programować w Pythonie."
  ],
  [
    "They will launch a new product next quarter.",
    "What will they launch next quarter?",
    "What did they launch last quarter?",
    "What are you launching next quarter?",
    "What have you launched recently?",
    "Они запустят новый продукт в следующем квартале.",
    "Вони запустять новий продукт у наступному кварталі.",
    "Oni uruchomią nowy produkt w przyszłym kwartale."
  ],
  [
    "I will try skydiving next summer.",
    "What will you try next summer?",
    "What did you try last summer?",
    "What are you trying next summer?",
    "What have you tried recently?",
    "Я попробую прыжки с парашютом следующим летом.",
    "Я спробую стрибки з парашутом наступного літа.",
    "Spróbuję skoków spadochronowych przyszłego lata."
  ],
  [
    "She will join a book club this month.",
    "What will she join this month?",
    "What did she join last month?",
    "What are you joining this month?",
    "What have you joined recently?",
    "Она вступит в книжный клуб в этом месяце.",
    "Вона приєднається до книжкового клубу цього місяця.",
    "Ona dołączy do klubu książkowego w tym miesiącu."
  ],
  [
    "We will explore a new hiking trail tomorrow.",
    "Where will you explore tomorrow?",
    "Where did you explore yesterday?",
    "Where are you exploring tomorrow?",
    "Where have you explored recently?",
    "Мы исследуем новый пешеходный маршрут завтра.",
    "Ми дослідимо новий пішохідний маршрут завтра.",
    "Zbadamy nowy szlak pieszy jutro."
  ],
  [
    "He will write a novel next year.",
    "What will he write next year?",
    "What did he write last year?",
    "What are you writing next year?",
    "What have you written recently?",
    "Он напишет роман в следующем году.",
    "Він напише роман наступного року.",
    "On napisze powieść w przyszłym roku."
  ],
  [
    "They will host a charity event this weekend.",
    "What will they host this weekend?",
    "What did they host last weekend?",
    "What are you hosting this weekend?",
    "What have you hosted recently?",
    "Они проведут благотворительное мероприятие на этих выходных.",
    "Вони проведуть благодійний захід на цих вихідних.",
    "Oni zorganizują wydarzenie charytatywne w ten weekend."
  ],
  [
    "I will take up yoga next week.",
    "What will you take up next week?",
    "What did you take up last week?",
    "What are you taking up next week?",
    "What have you taken up recently?",
    "Я займусь йогой на следующей неделе.",
    "Я займуся йогою наступного тижня.",
    "Zacznę uprawiać jogę w przyszłym tygodniu."
  ],
  [
    "She will renovate her apartment soon.",
    "What will she renovate soon?",
    "What did she renovate earlier?",
    "What are you renovating soon?",
    "What have you renovated recently?",
    "Она скоро отремонтирует свою квартиру.",
    "Вона скоро відремонтує свою квартиру.",
    "Ona wkrótce wyremontuje swoje mieszkanie."
  ],
  [
    "We will attend a music festival next month.",
    "What will you attend next month?",
    "What did you attend last month?",
    "What are you attending next month?",
    "What have you attended recently?",
    "Мы посетим музыкальный фестиваль в следующем месяце.",
    "Ми відвідаємо музичний фестиваль наступного місяця.",
    "Odwiedzimy festiwal muzyczny w przyszłym miesiącu."
  ],
  [
    "He will buy an electric car next year.",
    "What will he buy next year?",
    "What did he buy last year?",
    "What are you buying next year?",
    "What have you bought recently?",
    "Он купит электромобиль в следующем году.",
    "Він купить електромобіль наступного року.",
    "On kupi samochód elektryczny w przyszłym roku."
  ],
  [
    "They will volunteer at a local shelter this weekend.",
    "Where will they volunteer this weekend?",
    "Where did they volunteer last weekend?",
    "Where are you volunteering this weekend?",
    "Where have you volunteered recently?",
    "Они будут волонтерами в местном приюте на этих выходных.",
    "Вони будуть волонтерами в місцевому притулку на цих вихідних.",
    "Będą wolontariuszami w lokalnym schronisku w ten weekend."
  ],
  [
    "I will run a half-marathon next spring.",
    "What will you run next spring?",
    "What did you run last spring?",
    "What are you running next spring?",
    "What have you run recently?",
    "Я пробегу полумарафон следующей весной.",
    "Я пробіжу напівмарафон наступної весни.",
    "Przebędę półmaraton przyszłej wiosny."
  ],
  [
    "She will start a blog about travel soon.",
    "What will she start soon?",
    "What did she start earlier?",
    "What are you starting soon?",
    "What has she started recently?",
    "Она скоро начнет блог о путешествиях.",
    "Вона скоро почне блог про подорожі.",
    "Ona wkrótce zacznie blog o podróżach."
  ],
  [
    "We will plant a vegetable garden this spring.",
    "What will you plant this spring?",
    "What did you plant last spring?",
    "What are you planting this spring?",
    "What have you planted recently?",
    "Мы посадим огород этой весной.",
    "Ми посадимо город цієї весни.",
    "Zasadzimy ogród warzywny tej wiosny."
  ],
  [
    "He will take a cooking class next month.",
    "What will he take next month?",
    "What did he take last month?",
    "What are you taking next month?",
    "What has he taken recently?",
    "Он запишется на кулинарные курсы в следующем месяце.",
    "Він запишеться на кулінарні курси наступного місяця.",
    "On zapisze się na kurs gotowania w przyszłym miesiącu."
  ],
  [
    "They will move to a new city next year.",
    "Where will they move next year?",
    "Where did they move last year?",
    "Where are you moving next year?",
    "Where have they moved recently?",
    "Они переедут в новый город в следующем году.",
    "Вони переїдуть до нового міста наступного року.",
    "Przeprowadzą się do nowego miasta w przyszłym roku."
  ],
  [
    "I will learn to play the piano soon.",
    "What will you learn soon?",
    "What did you learn earlier?",
    "What are you learning soon?",
    "What have you learned recently?",
    "Я скоро научусь играть на пианино.",
    "Я скоро навчуся грати на піаніно.",
    "Wkrótce nauczę się grać na pianinie."
  ],
  [
    "She will organize a family reunion this summer.",
    "What will she organize this summer?",
    "What did she organize last summer?",
    "What are you organizing this summer?",
    "What has she organized recently?",
    "Она организует семейную встречу этим летом.",
    "Вона організує сімейну зустріч цього літа.",
    "Ona zorganizuje zjazd rodzinny tego lata."
  ],
  [
    "We will go scuba diving next vacation.",
    "Where will you go scuba diving next vacation?",
    "Where did you go scuba diving last vacation?",
    "Where are you going scuba diving next vacation?",
    "Where have you gone scuba diving recently?",
    "Мы отправимся на дайвинг в следующем отпуске.",
    "Ми вирушимо на дайвінг у наступній відпустці.",
    "Pojedziemy nurkować w następne wakacje."
  ],
  [
    "He will paint a mural next month.",
    "What will he paint next month?",
    "What did he paint last month?",
    "What are you painting next month?",
    "What has he painted recently?",
    "Он нарисует фреску в следующем месяце.",
    "Він намалює фреску наступного місяця.",
    "On namaluje mural w przyszłym miesiącu."
  ],
  [
    "They will open a small cafe soon.",
    "What will they open soon?",
    "What did they open earlier?",
    "What are you opening soon?",
    "What have they opened recently?",
    "Они скоро откроют небольшое кафе.",
    "Вони скоро відкриють невелике кафе.",
    "Oni wkrótce otworzą małą kawiarnię."
  ],
  [
    "I will try a new recipe tonight.",
    "What will you try tonight?",
    "What did you try last night?",
    "What are you trying tonight?",
    "What have you tried recently?",
    "Я попробую новый рецепт сегодня вечером.",
    "Я спробую новий рецепт сьогодні ввечері.",
    "Spróbuję nowego przepisu dzisiejszego wieczoru."
  ],
  [
    "She will attend a photography workshop next week.",
    "What will she attend next week?",
    "What did she attend last week?",
    "What are you attending next week?",
    "What has she attended recently?",
    "Она посетит фотомастерскую на следующей неделе.",
    "Вона відвідає фотомайстерню наступного тижня.",
    "Ona weźmie udział w warsztatach fotograficznych w przyszłym tygodniu."
  ],
  [
    "We will cycle across the countryside this weekend.",
    "Where will you cycle this weekend?",
    "Where did you cycle last weekend?",
    "Where are you cycling this weekend?",
    "Where have you cycled recently?",
    "Мы поедем на велосипедах по сельской местности в эти выходные.",
    "Ми поїдемо на велосипедах по сільській місцевості цими вихідними.",
    "Przejedziemy rowerami po wiejskich okolicach w ten weekend."
  ],
  [
    "He will design a new website next month.",
    "What will he design next month?",
    "What did he design last month?",
    "What are you designing next month?",
    "What has he designed recently?",
    "Он создаст новый веб-сайт в следующем месяце.",
    "Він створить новий вебсайт наступного місяця.",
    "On zaprojektuje nową stronę internetową w przyszłym miesiącu."
  ],
  [
    "They will perform a play next season.",
    "What will they perform next season?",
    "What did they perform last season?",
    "What are you performing next season?",
    "What have they performed recently?",
    "Они поставят пьесу в следующем сезоне.",
    "Вони поставлять п’єсу в наступному сезоні.",
    "Oni wystawią sztukę w przyszłym sezonie."
  ],
  [
    "I will donate old clothes this weekend.",
    "What will you donate this weekend?",
    "What did you donate last weekend?",
    "What are you donating this weekend?",
    "What have you donated recently?",
    "Я пожертвую старую одежду на этих выходных.",
    "Я пожертвую старий одяг на цих вихідних.",
    "Przekażę stare ubrania w ten weekend."
  ],
  [
    "She will start a podcast soon.",
    "What will she start soon?",
    "What did she start earlier?",
    "What are you starting soon?",
    "What has she started recently?",
    "Она скоро начнет подкаст.",
    "Вона скоро почне подкаст.",
    "Ona wkrótce zacznie podcast."
  ],
  [
    "We will visit a national park next month.",
    "Where will you visit next month?",
    "Where did you visit last month?",
    "Where are you visiting next month?",
    "Where have you visited recently?",
    "Мы посетим национальный парк в следующем месяце.",
    "Ми відвідаємо національний парк наступного місяця.",
    "Odwiedzimy park narodowy w przyszłym miesiącu."
  ],
  [
    "He will learn to sail this summer.",
    "What will he learn this summer?",
    "What did he learn last summer?",
    "What are you learning this summer?",
    "What has he learned recently?",
    "Он научится ходить под парусом этим летом.",
    "Він навчиться ходити під вітрилами цього літа.",
    "On nauczy się żeglować tego lata."
  ],
  [
    "They will organize a community cleanup next week.",
    "What will they organize next week?",
    "What did they organize last week?",
    "What are you organizing next week?",
    "What have they organized recently?",
    "Они организуют уборку в сообществе на следующей неделе.",
    "Вони організують прибирання в громаді наступного тижня.",
    "Oni zorganizują sprzątanie społeczności w przyszłym tygodniu."
  ],
  [
    "I will try rock climbing next month.",
    "What will you try next month?",
    "What did you try last month?",
    "What are you trying next month?",
    "What have you tried recently?",
    "Я попробую скалолазание в следующем месяце.",
    "Я спробую скелелазіння наступного місяця.",
    "Spróbuję wspinaczki skałkowej w przyszłym miesiącu."
  ],
  [
    "She will knit a sweater this winter.",
    "What will she knit this winter?",
    "What did she knit last winter?",
    "What are you knitting this winter?",
    "What has she knitted recently?",
    "Она свяжет свитер этой зимой.",
    "Вона зв’яже светр цієї зими.",
    "Ona wydzierga sweter tej zimy."
  ],
  [
    "We will go kayaking next weekend.",
    "Where will you go kayaking next weekend?",
    "Where did you go kayaking last weekend?",
    "Where are you going kayaking next weekend?",
    "Where have you gone kayaking recently?",
    "Мы отправимся на каякинг в следующие выходные.",
    "Ми вирушимо на каякінг у наступні вихідні.",
    "Pojedziemy na kajaki w przyszły weekend."
  ],
  [
    "He will compose a song next month.",
    "What will he compose next month?",
    "What did he compose last month?",
    "What are you composing next month?",
    "What has he composed recently?",
    "Он сочинит песню в следующем месяце.",
    "Він складе пісню наступного місяця.",
    "On skomponuje piosenkę w przyszłym miesiącu."
  ],
  [
    "They will build a treehouse this summer.",
    "What will they build this summer?",
    "What did they build last summer?",
    "What are you building this summer?",
    "What have they built recently?",
    "Они построят дом на дереве этим летом.",
    "Вони побудують будиночок на дереві цього літа.",
    "Oni zbudują domek na drzewie tego lata."
  ],
  [
    "I will take a dance class next week.",
    "What will you take next week?",
    "What did you take last week?",
    "What are you taking next week?",
    "What have you taken recently?",
    "Я запишусь на уроки танцев на следующей неделе.",
    "Я запишуся на уроки танців наступного тижня.",
    "Zapiszę się na zajęcia taneczne w przyszłym tygodniu."
  ],
  [
    "She will paint her nails tonight.",
    "What will she paint tonight?",
    "What did she paint last night?",
    "What are you painting tonight?",
    "What has she painted recently?",
    "Она покрасит ногти сегодня вечером.",
    "Вона пофарбує нігті сьогодні ввечері.",
    "Ona pomaluje paznokcie dzisiejszego wieczoru."
  ],
  [
    "We will watch a new movie this weekend.",
    "What will you watch this weekend?",
    "What did you watch last weekend?",
    "What are you watching this weekend?",
    "What have you watched recently?",
    "Мы посмотрим новый фильм на этих выходных.",
    "Ми подивимося новий фільм на цих вихідних.",
    "Obejrzymy nowy film w ten weekend."
  ],
  [
    "He will repair his watch next week.",
    "What will he repair next week?",
    "What did he repair last week?",
    "What are you repairing next week?",
    "What has he repaired recently?",
    "Он починит свои часы на следующей неделе.",
    "Він полагодить свій годинник наступного тижня.",
    "On naprawi swój zegarek w przyszłym tygodniu."
  ],
  [
    "They will hike in the mountains next month.",
    "Where will they hike next month?",
    "Where did they hike last month?",
    "Where are you hiking next month?",
    "Where have they hiked recently?",
    "Они отправятся в поход в горы в следующем месяце.",
    "Вони вирушать у похід в гори наступного місяця.",
    "Pojadą na wędrówkę w góry w przyszłym miesiącu."
  ],
  [
    "I will read a classic novel this month.",
    "What will you read this month?",
    "What did you read last month?",
    "What are you reading this month?",
    "What have you read recently?",
    "Я прочитаю классический роман в этом месяце.",
    "Я прочитаю класичний роман цього місяця.",
    "Przeczytam klasyczną powieść w tym miesiącu."
  ],
  [
    "She will bake a pie for the party.",
    "What will she bake for the party?",
    "What did she bake for the party?",
    "What are you baking for the party?",
    "What has she baked recently?",
    "Она испечет пирог для вечеринки.",
    "Вона спече пиріг для вечірки.",
    "Ona upiecze ciasto na imprezę."
  ],
  [
    "We will attend a comedy show next weekend.",
    "What will you attend next weekend?",
    "What did you attend last weekend?",
    "What are you attending next weekend?",
    "What have you attended recently?",
    "Мы посетим комедийное шоу в следующие выходные.",
    "Ми відвідаємо комедійне шоу у наступні вихідні.",
    "Odwiedzimy pokaz komediowy w przyszły weekend."
  ],
  [
    "He will start a fitness routine soon.",
    "What will he start soon?",
    "What did he start earlier?",
    "What are you starting soon?",
    "What has he started recently?",
    "Он скоро начнет фитнес-программу.",
    "Він скоро почне фітнес-програму.",
    "On wkrótce zacznie program fitness."
  ],
  [
    "They will adopt a new recycling habit this year.",
    "What will they adopt this year?",
    "What did they adopt last year?",
    "What are you adopting this year?",
    "What have they adopted recently?",
    "Они начнут новую привычку переработки в этом году.",
    "Вони почнуть нову звичку переробки цього року.",
    "Oni przyjmą nowy nawyk recyklingu w tym roku."
  ],
  [
    "We shall organize a surprise party for her birthday.",
    "What shall we organize for her birthday?",
    "What did we organize for her birthday?",
    "What are we organizing for her birthday?",
    "What have we organized for her birthday?",
    "Мы организуем сюрприз-вечеринку на ее день рождения.",
    "Ми організуємо сюрприз-вечірку на її день народження.",
    "Zorganizujemy imprezę-niespodziankę na jej urodziny."
  ],
  [
    "I shall prepare dinner tonight.",
    "What will you prepare tonight?",
    "What did you prepare tonight?",
    "What are you preparing tonight?",
    "What have you prepared tonight?",
    "Я приготовлю ужин сегодня вечером.",
    "Я приготую вечерю сьогодні ввечері.",
    "Przygotuję kolację dzisiejszego wieczoru."
  ],
  [
    "We shall visit the art gallery tomorrow.",
    "Where shall we visit tomorrow?",
    "Where did we visit yesterday?",
    "Where are we visiting tomorrow?",
    "Where have we visited recently?",
    "Мы посетим художественную галерею завтра.",
    "Ми відвідаємо художню галерею завтра.",
    "Odwiedzimy galerię sztuki jutro."
  ],
  [
    "I shall call the doctor in the morning.",
    "Who will you call in the morning?",
    "Who did you call this morning?",
    "Who are you calling in the morning?",
    "Who have you called recently?",
    "Я позвоню врачу утром.",
    "Я зателефоную лікареві вранці.",
    "Zadzwonię do lekarza rano."
  ],
  [
    "We shall buy tickets for the concert soon.",
    "What shall we buy soon?",
    "What did we buy earlier?",
    "What are we buying soon?",
    "What have we bought recently?",
    "Мы купим билеты на концерт скоро.",
    "Ми купимо квитки на концерт незабаром.",
    "Kupimy bilety na koncert wkrótce."
  ],
  [
    "I shall finish the report by Friday.",
    "What will you finish by Friday?",
    "What did you finish by Friday?",
    "What are you finishing by Friday?",
    "What have you finished recently?",
    "Я закончу отчет к пятнице.",
    "Я завершу звіт до п'ятниці.",
    "Skończę raport do piątku."
  ],
  [
    "We shall meet at the cafe at noon.",
    "Where shall we meet at noon?",
    "Where did we meet at noon?",
    "Where are we meeting at noon?",
    "Where have we met recently?",
    "Мы встретимся в кафе в полдень.",
    "Ми зустрінемося в кафе опівдні.",
    "Spotkamy się w kawiarni w południe."
  ],
  [
    "I shall send the email now.",
    "What will you send now?",
    "What did you send earlier?",
    "What are you sending now?",
    "What have you sent recently?",
    "Я отправлю email сейчас.",
    "Я надішлю email зараз.",
    "Wyślę e-mail teraz."
  ],
  [
    "We shall clean the garage this weekend.",
    "What shall we clean this weekend?",
    "What did we clean last weekend?",
    "What are we cleaning this weekend?",
    "What have we cleaned recently?",
    "Мы почистим гараж на этих выходных.",
    "Ми приберемо гараж цими вихідними.",
    "Wyczyścimy garaż w ten weekend."
  ],
  [
    "I shall read the book over the holiday.",
    "What will you read over the holiday?",
    "What did you read during the holiday?",
    "What are you reading over the holiday?",
    "What have you read recently?",
    "Я прочитаю книгу во время праздника.",
    "Я прочитаю книгу під час свят.",
    "Przeczytam książkę podczas wakacji."
  ],
  [
    "We shall plant flowers in the yard.",
    "What shall we plant in the yard?",
    "What did we plant in the yard?",
    "What are we planting in the yard?",
    "What have we planted recently?",
    "Мы посадим цветы во дворе.",
    "Ми посадимо квіти у дворі.",
    "Zasadźmy kwiaty na podwórku."
  ],
  [
    "I shall fix the broken chair today.",
    "What will you fix today?",
    "What did you fix today?",
    "What are you fixing today?",
    "What have you fixed recently?",
    "Я почищу сломанное кресло сегодня.",
    "Я полагоджу ламане крісло сьогодні.",
    "Naprawię zepsute krzesło dzisiaj."
  ],
  [
    "We shall watch the documentary tonight.",
    "What shall we watch tonight?",
    "What did we watch tonight?",
    "What are we watching tonight?",
    "What have we watched recently?",
    "Мы посмотрим документальный фильм сегодня вечером.",
    "Ми подивимося документальний фільм сьогодні ввечері.",
    "Obejrzyjmy dokument wieczorem."
  ],
  [
    "I shall book the hotel room tomorrow.",
    "What will you book tomorrow?",
    "What did you book yesterday?",
    "What are you booking tomorrow?",
    "What have you booked recently?",
    "Я забронирую номер в отеле завтра.",
    "Я забронюю номер в готелі завтра.",
    "Zarezerwuję pokój w hotelu jutro."
  ],
  [
    "We shall discuss the plan in the meeting.",
    "What shall we discuss in the meeting?",
    "What did we discuss in the meeting?",
    "What are we discussing in the meeting?",
    "What have we discussed recently?",
    "Мы обсудим план на встрече.",
    "Ми обговоримо план на зустрічі.",
    "Omówmy plan na spotkaniu."
  ],
  [
    "I shall water the plants this evening.",
    "What will you water this evening?",
    "What did you water this evening?",
    "What are you watering this evening?",
    "What have you watered recently?",
    "Я поллю растения сегодня вечером.",
    "Я поллю рослини цього вечора.",
    "Podleję rośliny wieczorem."
  ],
  [
    "We shall share the costs equally.",
    "How shall we share the costs?",
    "How did we share the costs?",
    "How are we sharing the costs?",
    "How have we shared the costs?",
    "Мы разделим расходы поровну.",
    "Ми розділимо витрати порівну.",
    "Podzielimy koszty po równo."
  ],
  [
    "I shall update the software soon.",
    "What will you update soon?",
    "What did you update earlier?",
    "What are you updating soon?",
    "What have you updated recently?",
    "Я обновлю программное обеспечение скоро.",
    "Я оновлю програмне забезпечення незабаром.",
    "Zaktualizuję oprogramowanie wkrótce."
  ],
  [
    "We shall celebrate with a toast.",
    "How shall we celebrate?",
    "How did we celebrate?",
    "How are we celebrating?",
    "How have we celebrated recently?",
    "Мы отпразднуем тостом.",
    "Ми відсвяткуємо тостом.",
    "Świętujmy toastem."
  ],
  [
    "I shall pack the luggage carefully.",
    "What will you pack carefully?",
    "What did you pack carefully?",
    "What are you packing carefully?",
    "What have you packed recently?",
    "Я аккуратно упакую багаж.",
    "Я акуратно спакую багаж.",
    "Spakuję bagaż ostrożnie."
  ],
  [
    "We shall arrive early for the event.",
    "When shall we arrive for the event?",
    "When did we arrive for the event?",
    "When are we arriving for the event?",
    "When have we arrived for the event?",
    "Мы приедем рано на мероприятие.",
    "Ми приїдемо рано на подію.",
    "Przyjedźmy wcześnie na wydarzenie."
  ],
  [
    "I shall review the documents today.",
    "What will you review today?",
    "What did you review today?",
    "What are you reviewing today?",
    "What have you reviewed recently?",
    "Я просмотрю документы сегодня.",
    "Я перегляну документи сьогодні.",
    "Przejrzę dokumenty dzisiaj."
  ],
  [
    "We shall choose the best option.",
    "What shall we choose?",
    "What did we choose?",
    "What are we choosing?",
    "What have we chosen recently?",
    "Мы выберем лучший вариант.",
    "Ми виберемо найкращий варіант.",
    "Wybierzmy najlepszą opcję."
  ],
  [
    "I shall answer the questions promptly.",
    "What will you answer promptly?",
    "What did you answer promptly?",
    "What are you answering promptly?",
    "What have you answered recently?",
    "Я отвечу на вопросы быстро.",
    "Я відповім на питання швидко.",
    "Odpowiem na pytania szybko."
  ],
  [
    "We shall support the team fully.",
    "How shall we support the team?",
    "How did we support the team?",
    "How are we supporting the team?",
    "How have we supported the team recently?",
    "Мы полностью поддержим команду.",
    "Ми повністю підтримаємо команду.",
    "Wspierajmy zespół w pełni."
  ],
  [
    "I shall deliver the package tomorrow.",
    "What will you deliver tomorrow?",
    "What did you deliver yesterday?",
    "What are you delivering tomorrow?",
    "What have you delivered recently?",
    "Я доставлю посылку завтра.",
    "Я доставлю пакунок завтра.",
    "Dostarczą paczkę jutro."
  ],
  [
    "We shall explore the old town together.",
    "Where shall we explore together?",
    "Where did we explore together?",
    "Where are we exploring together?",
    "Where have we explored recently?",
    "Мы вместе исследуем старый город.",
    "Ми разом дослідимо старе місто.",
    "Zbadajmy stare miasto razem."
  ],
  [
    "I shall charge the phone overnight.",
    "What will you charge overnight?",
    "What did you charge overnight?",
    "What are you charging overnight?",
    "What have you charged recently?",
    "Я заряжу телефон на ночь.",
    "Я зарядю телефон на ніч.",
    "Naładuję telefon na noc."
  ],
  [
    "We shall vote for the proposal.",
    "What shall we vote for?",
    "What did we vote for?",
    "What are we voting for?",
    "What have we voted for recently?",
    "Мы проголосуем за предложение.",
    "Ми проголосуємо за пропозицію.",
    "Zagłosujmy za propozycją."
  ],
  [
    "I shall fold the laundry now.",
    "What will you fold now?",
    "What did you fold earlier?",
    "What are you folding now?",
    "What have you folded recently?",
    "Я сложу белье сейчас.",
    "Я складатиму білизну зараз.",
    "Pofaldę pranie teraz."
  ],
  [
    "We shall renew the subscription soon.",
    "What shall we renew soon?",
    "What did we renew earlier?",
    "What are we renewing soon?",
    "What have we renewed recently?",
    "Мы продлим подписку скоро.",
    "Ми продовжимо підписку незабаром.",
    "Przedłużymy subskrypcję wkrótce."
  ],
  [
    "I shall polish the shoes before the meeting.",
    "What will you polish before the meeting?",
    "What did you polish before the meeting?",
    "What are you polishing before the meeting?",
    "What have you polished recently?",
    "Я почищу обувь перед встречей.",
    "Я почищу взуття перед зустріччю.",
    "Wypoliruję buty przed spotkaniem."
  ],
  [
    "We shall coordinate the schedules carefully.",
    "What shall we coordinate carefully?",
    "What did we coordinate carefully?",
    "What are we coordinating carefully?",
    "What have we coordinated recently?",
    "Мы тщательно скоординируем расписания.",
    "Ми ретельно скоординуємо розклади.",
    "Skoordynujmy harmonogramy ostrożnie."
  ],
  [
    "I shall attach the file to the email.",
    "What will you attach to the email?",
    "What did you attach to the email?",
    "What are you attaching to the email?",
    "What have you attached recently?",
    "Я прикреплю файл к email.",
    "Я прикріплю файл до email.",
    "Dołączę plik do e-maila."
  ],
  [
    "We shall reserve a table for dinner.",
    "What shall we reserve for dinner?",
    "What did we reserve for dinner?",
    "What are we reserving for dinner?",
    "What have we reserved recently?",
    "Мы забронируем столик на ужин.",
    "Ми забронюємо столик на вечерю.",
    "Zarezerwujemy stolik na kolację."
  ],
  [
    "I shall confirm the appointment later.",
    "What will you confirm later?",
    "What did you confirm earlier?",
    "What are you confirming later?",
    "What have you confirmed recently?",
    "Я подтвержу встречу позже.",
    "Я підтверджу зустріч пізніше.",
    "Potwierdzę spotkanie później."
  ],
  [
    "We shall distribute the materials equally.",
    "What shall we distribute equally?",
    "What did we distribute equally?",
    "What are we distributing equally?",
    "What have we distributed recently?",
    "Мы равномерно распределим материалы.",
    "Ми рівномірно розподілимо матеріали.",
    "Rozdzielimy materiały równo."
  ],
  [
    "I shall label the boxes properly.",
    "What will you label properly?",
    "What did you label properly?",
    "What are you labeling properly?",
    "What have you labeled recently?",
    "Я правильно подпишу коробки.",
    "Я правильно підпишу коробки.",
    "Oznaczę pudełka właściwie."
  ],
  [
    "We shall evaluate the options thoroughly.",
    "What shall we evaluate thoroughly?",
    "What did we evaluate thoroughly?",
    "What are we evaluating thoroughly?",
    "What have we evaluated recently?",
    "Мы тщательно оценим варианты.",
    "Ми ретельно оцінимо варіанти.",
    "Ocenimy opcje dokładnie."
  ],
  [
    "I shall recharge the batteries tonight.",
    "What will you recharge tonight?",
    "What did you recharge tonight?",
    "What are you recharging tonight?",
    "What have you recharged recently?",
    "Я перезаряжу батареи сегодня вечером.",
    "Я перезаряджу батареї сьогодні ввечері.",
    "Naładuję baterie wieczorem."
  ],
  [
    "We shall finalize the agreement soon.",
    "What shall we finalize soon?",
    "What did we finalize earlier?",
    "What are we finalizing soon?",
    "What have we finalized recently?",
    "Мы скоро финализируем соглашение.",
    "Ми скоро фіналізуємо угоду.",
    "Sfinalizujemy umowę wkrótce."
  ],
  [
    "I shall compose the message carefully.",
    "What will you compose carefully?",
    "What did you compose carefully?",
    "What are you composing carefully?",
    "What have you composed recently?",
    "Я тщательно составлю сообщение.",
    "Я ретельно складатиму повідомлення.",
    "Sporządź wiadomość ostrożnie."
  ],
  [
    "We shall integrate the new features.",
    "What shall we integrate?",
    "What did we integrate?",
    "What are we integrating?",
    "What have we integrated recently?",
    "Мы интегрируем новые функции.",
    "Ми інтегруємо нові функції.",
    "Zintegrujemy nowe funkcje."
  ],
  [
    "I shall verify the information first.",
    "What will you verify first?",
    "What did you verify first?",
    "What are you verifying first?",
    "What have you verified recently?",
    "Я сначала проверю информацию.",
    "Я спочатку перевірю інформацію.",
    "Zweryfikuję informacje najpierw."
  ],
  [
    "We shall collaborate on the project.",
    "What shall we collaborate on?",
    "What did we collaborate on?",
    "What are we collaborating on?",
    "What have we collaborated on recently?",
    "Мы будем сотрудничать по проекту.",
    "Ми співпрацюватимемо над проектом.",
    "Współpracujmy nad projektem."
  ],
  [
    "I shall customize the settings now.",
    "What will you customize now?",
    "What did you customize earlier?",
    "What are you customizing now?",
    "What have you customized recently?",
    "Я настрою параметры сейчас.",
    "Я налаштую параметри зараз.",
    "Dostosuję ustawienia teraz."
  ],
  [
    "We shall prioritize the tasks wisely.",
    "What shall we prioritize wisely?",
    "What did we prioritize wisely?",
    "What are we prioritizing wisely?",
    "What have we prioritized recently?",
    "Мы мудро расставим приоритеты задач.",
    "Ми мудро розставимо пріоритети завдань.",
    "Ustawimy priorytety zadań mądrze."
  ],

    [
    "What shall I wear to the interview?",
    "You will wear a smart suit to the interview.",
    "You wore a smart suit to the interview.",
    "You are wearing a smart suit to the interview.",
    "You have worn a smart suit to the interview.",
    "Что мне надеть на собеседование?",
    "Що мені вдягнути на співбесіду?",
    "Co powinienem założyć na rozmowę kwalifikacyjną?"
  ],
  [
    "Where shall we go for a weekend getaway?",
    "You will go to a cozy mountain cabin for a weekend getaway.",
    "You went to a cozy mountain cabin for a weekend getaway.",
    "You are going to a cozy mountain cabin for a weekend getaway.",
    "You have gone to a cozy mountain cabin for a weekend getaway.",
    "Куда нам поехать на выходные?",
    "Куди нам поїхати на вихідні?",
    "Gdzie powinniśmy pojechać na weekendowy wypad?"
  ],
  [
    "What shall I gift her for the holiday?",
    "You will gift her a beautiful necklace for the holiday.",
    "You gifted her a beautiful necklace for the holiday.",
    "You are gifting her a beautiful necklace for the holiday.",
    "You have gifted her a beautiful necklace for the holiday.",
    "Что мне подарить ей на праздник?",
    "Що мені подарувати їй на свято?",
    "Co powinienem podarować jej na święta?"
  ],
  [
    "How shall we decorate the new apartment?",
    "You will decorate the new apartment with modern furniture.",
    "You decorated the new apartment with modern furniture.",
    "You are decorating the new apartment with modern furniture.",
    "You have decorated the new apartment with modern furniture.",
    "Как нам украсить новую квартиру?",
    "Як нам прикрасити нову квартиру?",
    "Jak powinniśmy udekorować nowe mieszkanie?"
  ],
  [
    "What shall I study for the exam?",
    "You will study the main chapters for the exam.",
    "You studied the main chapters for the exam.",
    "You are studying the main chapters for the exam.",
    "You have studied the main chapters for the exam.",
    "Что мне учить для экзамена?",
    "Що мені вчити для іспиту?",
    "Co powinienem uczyć się na egzamin?"
  ],
  [
    "Where shall we hold the team meeting?",
    "You will hold the team meeting in the conference room.",
    "You held the team meeting in the conference room.",
    "You are holding the team meeting in the conference room.",
    "You have held the team meeting in the conference room.",
    "Где нам провести собрание команды?",
    "Де нам провести збори команди?",
    "Gdzie powinniśmy zorganizować spotkanie zespołu?"
  ],
  [
    "What shall I write in the journal?",
    "You will write your daily thoughts in the journal.",
    "You wrote your daily thoughts in the journal.",
    "You are writing your daily thoughts in the journal.",
    "You have written your daily thoughts in the journal.",
    "Что мне написать в дневнике?",
    "Що мені написати в щоденнику?",
    "Co powinienem napisać w dzienniku?"
  ],
  [
    "How shall we promote the event?",
    "You will promote the event through social media.",
    "You promoted the event through social media.",
    "You are promoting the event through social media.",
    "You have promoted the event through social media.",
    "Как нам продвигать мероприятие?",
    "Як нам просувати захід?",
    "Jak powinniśmy promować wydarzenie?"
  ],
  [
    "What shall I practice for the performance?",
    "You will practice your lines for the performance.",
    "You practiced your lines for the performance.",
    "You are practicing your lines for the performance.",
    "You have practiced your lines for the performance.",
    "Что мне репетировать для выступления?",
    "Що мені репетирувати для виступу?",
    "Co powinienem ćwiczyć na występ?"
  ],
  [
    "Where shall we park the car?",
    "You will park the car in the nearby lot.",
    "You parked the car in the nearby lot.",
    "You are parking the car in the nearby lot.",
    "You have parked the car in the nearby lot.",
    "Где нам припарковать машину?",
    "Де нам припаркувати машину?",
    "Gdzie powinniśmy zaparkować samochód?"
  ],
  [
    "What shall I bring to the picnic?",
    "You will bring homemade sandwiches to the picnic.",
    "You brought homemade sandwiches to the picnic.",
    "You are bringing homemade sandwiches to the picnic.",
    "You have brought homemade sandwiches to the picnic.",
    "Что мне принести на пикник?",
    "Що мені принести на пікнік?",
    "Co powinienem przynieść na piknik?"
  ],
  [
    "How shall we start the project?",
    "You will start the project with a brainstorming session.",
    "You started the project with a brainstorming session.",
    "You are starting the project with a brainstorming session.",
    "You have started the project with a brainstorming session.",
    "Как нам начать проект?",
    "Як нам почати проект?",
    "Jak powinniśmy zacząć projekt?"
  ],
  [
    "What shall I paint on the canvas?",
    "You will paint a vibrant landscape on the canvas.",
    "You painted a vibrant landscape on the canvas.",
    "You are painting a vibrant landscape on the canvas.",
    "You have painted a vibrant landscape on the canvas.",
    "Что мне нарисовать на холсте?",
    "Що мені намалювати на полотні?",
    "Co powinienem namalować na płótnie?"
  ],
  [
    "Where shall we volunteer this month?",
    "You will volunteer at the local food bank this month.",
    "You volunteered at the local food bank this month.",
    "You are volunteering at the local food bank this month.",
    "You have volunteered at the local food bank this month.",
    "Где нам волонтерить в этом месяце?",
    "Де нам волонтерити цього місяця?",
    "Gdzie powinniśmy wolontariuszować w tym miesiącu?"
  ],
  [
    "What shall I teach the students?",
    "You will teach the students basic algebra.",
    "You taught the students basic algebra.",
    "You are teaching the students basic algebra.",
    "You have taught the students basic algebra.",
    "Чему мне учить студентов?",
    "Чому мені вчити студентів?",
    "Czego powinienem uczyć studentów?"
  ],
  [
    "How shall we save for the trip?",
    "You will save for the trip by cutting extra expenses.",
    "You saved for the trip by cutting extra expenses.",
    "You are saving for the trip by cutting extra expenses.",
    "You have saved for the trip by cutting extra expenses.",
    "Как нам копить на поездку?",
    "Як нам заощаджувати на поїздку?",
    "Jak powinniśmy oszczędzać na podróż?"
  ],
  [
    "What shall I order for lunch?",
    "You will order a fresh salad for lunch.",
    "You ordered a fresh salad for lunch.",
    "You are ordering a fresh salad for lunch.",
    "You have ordered a fresh salad for lunch.",
    "Что мне заказать на обед?",
    "Що мені замовити на обід?",
    "Co powinienem zamówić na obiad?"
  ],
  [
    "Where shall we hike this weekend?",
    "You will hike in the nearby forest this weekend.",
    "You hiked in the nearby forest this weekend.",
    "You are hiking in the nearby forest this weekend.",
    "You have hiked in the nearby forest this weekend.",
    "Куда нам пойти в поход на выходных?",
    "Куди нам піти в похід на вихідних?",
    "Gdzie powinniśmy pójść na wędrówkę w weekend?"
  ],
  [
    "What shall I design for the poster?",
    "You will design a bold graphic for the poster.",
    "You designed a bold graphic for the poster.",
    "You are designing a bold graphic for the poster.",
    "You have designed a bold graphic for the poster.",
    "Что мне разработать для плаката?",
    "Що мені розробити для плакату?",
    "Co powinienem zaprojektować na plakat?"
  ],
  [
    "How shall we advertise the sale?",
    "You will advertise the sale with online banners.",
    "You advertised the sale with online banners.",
    "You are advertising the sale with online banners.",
    "You have advertised the sale with online banners.",
    "Как нам рекламировать распродажу?",
    "Як нам рекламувати розпродаж?",
    "Jak powinniśmy reklamować wyprzedaż?"
  ],
  [
    "What shall I sing at the event?",
    "You will sing a classic ballad at the event.",
    "You sang a classic ballad at the event.",
    "You are singing a classic ballad at the event.",
    "You have sung a classic ballad at the event.",
    "Что мне спеть на мероприятии?",
    "Що мені заспівати на заході?",
    "Co powinienem zaśpiewać na wydarzeniu?"
  ],
  [
    "Where shall we stay during the trip?",
    "You will stay at a seaside hotel during the trip.",
    "You stayed at a seaside hotel during the trip.",
    "You are staying at a seaside hotel during the trip.",
    "You have stayed at a seaside hotel during the trip.",
    "Где нам остановиться во время поездки?",
    "Де нам зупинитися під час поїздки?",
    "Gdzie powinniśmy zatrzymać się podczas podróży?"
  ],
  [
    "What shall I bake for the bake sale?",
    "You will bake chocolate cookies for the bake sale.",
    "You baked chocolate cookies for the bake sale.",
    "You are baking chocolate cookies for the bake sale.",
    "You have baked chocolate cookies for the bake sale.",
    "Что мне испечь для ярмарки выпечки?",
    "Що мені спекти для ярмарку випічки?",
    "Co powinienem upiec na kiermasz wypieków?"
  ],
  [
    "How shall we organize the files?",
    "You will organize the files by category.",
    "You organized the files by category.",
    "You are organizing the files by category.",
    "You have organized the files by category.",
    "Как нам организовать файлы?",
    "Як нам організувати файли?",
    "Jak powinniśmy zorganizować pliki?"
  ],
  [
    "What shall I play at the party?",
    "You will play upbeat dance music at the party.",
    "You played upbeat dance music at the party.",
    "You are playing upbeat dance music at the party.",
    "You have played upbeat dance music at the party.",
    "Что мне поставить на вечеринке?",
    "Що мені поставити на вечірці?",
    "Co powinienem zagrać na imprezie?"
  ],
  [
    "Where shall we eat dinner tonight?",
    "You will eat dinner at an Italian restaurant tonight.",
    "You ate dinner at an Italian restaurant tonight.",
    "You are eating dinner at an Italian restaurant tonight.",
    "You have eaten dinner at an Italian restaurant tonight.",
    "Где нам поужинать сегодня вечером?",
    "Де нам повечеряти сьогодні ввечері?",
    "Gdzie powinniśmy zjeść kolację dzisiaj wieczorem?"
  ],
  [
    "What shall I draw for the art contest?",
    "You will draw a city skyline for the art contest.",
    "You drew a city skyline for the art contest.",
    "You are drawing a city skyline for the art contest.",
    "You have drawn a city skyline for the art contest.",
    "Что мне нарисовать для конкурса искусства?",
    "Що мені намалювати для конкурсу мистецтва?",
    "Co powinienem narysować na konkurs sztuki?"
  ],
  [
    "How shall we plan the vacation?",
    "You will plan the vacation with a detailed itinerary.",
    "You planned the vacation with a detailed itinerary.",
    "You are planning the vacation with a detailed itinerary.",
    "You have planned the vacation with a detailed itinerary.",
    "Как нам спланировать отпуск?",
    "Як нам спланувати відпустку?",
    "Jak powinniśmy zaplanować wakacje?"
  ],
  [
    "What shall I wear for the costume party?",
    "You will wear a pirate costume for the costume party.",
    "You wore a pirate costume for the costume party.",
    "You are wearing a pirate costume for the costume party.",
    "You have worn a pirate costume for the costume party.",
    "Что мне надеть на костюмированную вечеринку?",
    "Що мені вдягнути на костюмовану вечірку?",
    "Co powinienem założyć na imprezę kostiumową?"
  ],
  [
    "Where shall we donate the books?",
    "You will donate the books to the local library.",
    "You donated the books to the local library.",
    "You are donating the books to the local library.",
    "You have donated the books to the local library.",
    "Куда нам пожертвовать книги?",
    "Куди нам пожертвувати книги?",
    "Gdzie powinniśmy przekazać książki?"
  ],
  [
    "What shall I present at the meeting?",
    "You will present a new marketing strategy at the meeting.",
    "You presented a new marketing strategy at the meeting.",
    "You are presenting a new marketing strategy at the meeting.",
    "You have presented a new marketing strategy at the meeting.",
    "Что мне представить на встрече?",
    "Що мені представити на зустрічі?",
    "Co powinienem zaprezentować na spotkaniu?"
  ],
  [
    "How shall we train for the marathon?",
    "You will train for the marathon with a daily running schedule.",
    "You trained for the marathon with a daily running schedule.",
    "You are training for the marathon with a daily running schedule.",
    "You have trained for the marathon with a daily running schedule.",
    "Как нам тренироваться для марафона?",
    "Як нам тренуватися для марафону?",
    "Jak powinniśmy trenować do maratonu?"
  ],
  [
    "What shall I build for the science fair?",
    "You will build a model volcano for the science fair.",
    "You built a model volcano for the science fair.",
    "You are building a model volcano for the science fair.",
    "You have built a model volcano for the science fair.",
    "Что мне построить для научной выставки?",
    "Що мені побудувати для наукової виставки?",
    "Co powinienem zbudować na targi naukowe?"
  ],
  [
    "Where shall we camp this summer?",
    "You will camp by the lake this summer.",
    "You camped by the lake this summer.",
    "You are camping by the lake this summer.",
    "You have camped by the lake this summer.",
    "Где нам разбить лагерь этим летом?",
    "Де нам розбити табір цього літа?",
    "Gdzie powinniśmy rozbić obóz tego lata?"
  ],
  [
    "What shall I knit for the winter?",
    "You will knit a warm scarf for the winter.",
    "You knitted a warm scarf for the winter.",
    "You are knitting a warm scarf for the winter.",
    "You have knitted a warm scarf for the winter.",
    "Что мне связать на зиму?",
    "Що мені зв’язати на зиму?",
    "Co powinienem wydziergać na zimę?"
  ],
  [
    "How shall we welcome the guests?",
    "You will welcome the guests with a warm greeting.",
    "You welcomed the guests with a warm greeting.",
    "You are welcoming the guests with a warm greeting.",
    "You have welcomed the guests with a warm greeting.",
    "Как нам встречать гостей?",
    "Як нам зустрічати гостей?",
    "Jak powinniśmy powitać gości?"
  ],
  [
    "What shall I photograph at the festival?",
    "You will photograph the colorful parade at the festival.",
    "You photographed the colorful parade at the festival.",
    "You are photographing the colorful parade at the festival.",
    "You have photographed the colorful parade at the festival.",
    "Что мне сфотографировать на фестивале?",
    "Що мені сфотографувати на фестивалі?",
    "Co powinienem sfotografować na festiwalu?"
  ],
  [
    "Where shall we shop for clothes?",
    "You will shop for clothes at the downtown boutique.",
    "You shopped for clothes at the downtown boutique.",
    "You are shopping for clothes at the downtown boutique.",
    "You have shopped for clothes at the downtown boutique.",
    "Где нам покупать одежду?",
    "Де нам купувати одяг?",
    "Gdzie powinniśmy kupować ubrania?"
  ],
  [
    "What shall I write for the blog?",
    "You will write a travel guide for the blog.",
    "You wrote a travel guide for the blog.",
    "You are writing a travel guide for the blog.",
    "You have written a travel guide for the blog.",
    "Что мне написать для блога?",
    "Що мені написати для блогу?",
    "Co powinienem napisać na bloga?"
  ],
  [
    "How shall we budget for the event?",
    "You will budget for the event with a detailed plan.",
    "You budgeted for the event with a detailed plan.",
    "You are budgeting for the event with a detailed plan.",
    "You have budgeted for the event with a detailed plan.",
    "Как нам составить бюджет для мероприятия?",
    "Як нам скласти бюджет для заходу?",
    "Jak powinniśmy zaplanować budżet na wydarzenie?"
  ],
  [
    "What shall I learn for the workshop?",
    "You will learn digital editing for the workshop.",
    "You learned digital editing for the workshop.",
    "You are learning digital editing for the workshop.",
    "You have learned digital editing for the workshop.",
    "Чему мне учиться для мастер-класса?",
    "Чому мені вчитися для майстер-класу?",
    "Czego powinienem się uczyć na warsztatach?"
  ],
  [
    "Where shall we relax this evening?",
    "You will relax at the cozy cafe this evening.",
    "You relaxed at the cozy cafe this evening.",
    "You are relaxing at the cozy cafe this evening.",
    "You have relaxed at the cozy cafe this evening.",
    "Где нам расслабиться сегодня вечером?",
    "Де нам розслабитися сьогодні ввечері?",
    "Gdzie powinniśmy odpocząć dzisiejszego wieczoru?"
  ],
  [
    "What shall I repair in the house?",
    "You will repair the leaky faucet in the house.",
    "You repaired the leaky faucet in the house.",
    "You are repairing the leaky faucet in the house.",
    "You have repaired the leaky faucet in the house.",
    "Что мне починить в доме?",
    "Що мені полагодити в будинку?",
    "Co powinienem naprawić w domu?"
  ],
  [
    "How shall we celebrate the anniversary?",
    "You will celebrate the anniversary with a special dinner.",
    "You celebrated the anniversary with a special dinner.",
    "You are celebrating the anniversary with a special dinner.",
    "You have celebrated the anniversary with a special dinner.",
    "Как нам отпраздновать годовщину?",
    "Як нам відсвяткувати річницю?",
    "Jak powinniśmy świętować rocznicę?"
  ],
  [
    "What shall I sew for the costume?",
    "You will sew a superhero cape for the costume.",
    "You sewed a superhero cape for the costume.",
    "You are sewing a superhero cape for the costume.",
    "You have sewed a superhero cape for the costume.",
    "Что мне сшить для костюма?",
    "Що мені пошити для костюма?",
    "Co powinienem uszyć na kostium?"
  ],
  [
    "Where shall we walk this afternoon?",
    "You will walk along the riverbank this afternoon.",
    "You walked along the riverbank this afternoon.",
    "You are walking along the riverbank this afternoon.",
    "You have walked along the riverbank this afternoon.",
    "Куда нам пойти гулять сегодня днем?",
    "Куди нам піти гуляти сьогодні вдень?",
    "Gdzie powinniśmy pójść na spacer po południu?"
  ],
  [
    "What shall I create for the art show?",
    "You will create a sculpture for the art show.",
    "You created a sculpture for the art show.",
    "You are creating a sculpture for the art show.",
    "You have created a sculpture for the art show.",
    "Что мне создать для художественной выставки?",
    "Що мені створити для художньої виставки?",
    "Co powinienem stworzyć na wystawę sztuki?"
  ],
  [
    "How shall we pack for the trip?",
    "You will pack for the trip with lightweight luggage.",
    "You packed for the trip with lightweight luggage.",
    "You are packing for the trip with lightweight luggage.",
    "You have packed for the trip with lightweight luggage.",
    "Как нам собираться для поездки?",
    "Як нам збиратися для поїздки?",
    "Jak powinniśmy się spakować na podróż?"
  ],
  [
    "What shall I share on social media?",
    "You will share a motivational quote on social media.",
    "You shared a motivational quote on social media.",
    "You are sharing a motivational quote on social media.",
    "You have shared a motivational quote on social media.",
    "Что мне поделиться в социальных сетях?",
    "Що мені поділитися в соціальних мережах?",
    "Co powinienem udostępnić w mediach społecznościowych?"
  ],
  [
    "Where shall we meet for coffee?",
    "You will meet for coffee at the corner cafe.",
    "You met for coffee at the corner cafe.",
    "You are meeting for coffee at the corner cafe.",
    "You have met for coffee at the corner cafe.",
    "Где нам встретиться за кофе?",
    "Де нам зустрітися за кавою?",
    "Gdzie powinniśmy się spotkać na kawę?"
  ],
  [
    "What shall I perform at the talent show?",
    "You will perform a magic trick at the talent show.",
    "You performed a magic trick at the talent show.",
    "You are performing a magic trick at the talent show.",
    "You have performed a magic trick at the talent show.",
    "Что мне исполнить на шоу талантов?",
    "Що мені виконати на шоу талантів?",
    "Co powinienem wykonać na pokazie talentów?"
  ],

    [
    "What will I wear to the charity ball?",
    "You will wear an elegant gown to the charity ball.",
    "You wore an elegant gown to the charity ball.",
    "You are wearing an elegant gown to the charity ball.",
    "You have worn an elegant gown to the charity ball.",
    "Что мне надеть на благотворительный бал?",
    "Що мені вдягнути на благодійний бал?",
    "Co założę na bal charytatywny?"
  ],
  [
    "Where will we travel for the summer vacation?",
    "You will travel to a tropical island for the summer vacation.",
    "You traveled to a tropical island for the summer vacation.",
    "You are traveling to a tropical island for the summer vacation.",
    "You have traveled to a tropical island for the summer vacation.",
    "Куда мы поедем на летние каникулы?",
    "Куди ми поїдемо на літні канікули?",
    "Gdzie pojedziemy na letnie wakacje?"
  ],
  [
    "What will I gift him for his promotion?",
    "You will gift him a stylish watch for his promotion.",
    "You gifted him a stylish watch for his promotion.",
    "You are gifting him a stylish watch for his promotion.",
    "You have gifted him a stylish watch for his promotion.",
    "Что мне подарить ему на повышение?",
    "Що мені подарувати йому на підвищення?",
    "Co podaruję mu z okazji awansu?"
  ],
  [
    "How will we decorate the office for the holiday?",
    "You will decorate the office with festive lights for the holiday.",
    "You decorated the office with festive lights for the holiday.",
    "You are decorating the office with festive lights for the holiday.",
    "You have decorated the office with festive lights for the holiday.",
    "Как мы украсим офис к празднику?",
    "Як ми прикрасимо офіс до свята?",
    "Jak udekorujemy biuro na święta?"
  ],
  [
    "What will I study for the certification?",
    "You will study advanced coding for the certification.",
    "You studied advanced coding for the certification.",
    "You are studying advanced coding for the certification.",
    "You have studied advanced coding for the certification.",
    "Что мне учить для сертификации?",
    "Що мені вчити для сертифікації?",
    "Czego będę się uczył na certyfikację?"
  ],
  [
    "Where will we host the book launch?",
    "You will host the book launch at a local bookstore.",
    "You hosted the book launch at a local bookstore.",
    "You are hosting the book launch at a local bookstore.",
    "You have hosted the book launch at a local bookstore.",
    "Где мы проведем презентацию книги?",
    "Де ми проведемо презентацію книги?",
    "Gdzie zorganizujemy premierę książki?"
  ],
  [
    "What will I write for the newsletter?",
    "You will write a feature article for the newsletter.",
    "You wrote a feature article for the newsletter.",
    "You are writing a feature article for the newsletter.",
    "You have written a feature article for the newsletter.",
    "Что мне написать для рассылки?",
    "Що мені написати для розсилки?",
    "Co napiszę do biuletynu?"
  ],
  [
    "How will we market the new app?",
    "You will market the new app with targeted ads.",
    "You marketed the new app with targeted ads.",
    "You are marketing the new app with targeted ads.",
    "You have marketed the new app with targeted ads.",
    "Как мы будем продвигать новое приложение?",
    "Як ми просуватимемо новий додаток?",
    "Jak będziemy promować nową aplikację?"
  ],
  [
    "What will I rehearse for the play?",
    "You will rehearse the main monologue for the play.",
    "You rehearsed the main monologue for the play.",
    "You are rehearsing the main monologue for the play.",
    "You have rehearsed the main monologue for the play.",
    "Что мне репетировать для спектакля?",
    "Що мені репетирувати для вистави?",
    "Co będę ćwiczył do spektaklu?"
  ],
  [
    "Where will we park for the festival?",
    "You will park in the designated lot for the festival.",
    "You parked in the designated lot for the festival.",
    "You are parking in the designated lot for the festival.",
    "You have parked in the designated lot for the festival.",
    "Где мы припаркуемся на фестивале?",
    "Де ми припаркуємося на фестивалі?",
    "Gdzie zaparkujemy na festiwalu?"
  ],
  [
    "What will I bring to the potluck?",
    "You will bring a fruit salad to the potluck.",
    "You brought a fruit salad to the potluck.",
    "You are bringing a fruit salad to the potluck.",
    "You have brought a fruit salad to the potluck.",
    "Что мне принести на общий ужин?",
    "Що мені принести на спільну вечерю?",
    "Co przyniosę na wspólny posiłek?"
  ],
  [
    "How will we launch the campaign?",
    "You will launch the campaign with a press release.",
    "You launched the campaign with a press release.",
    "You are launching the campaign with a press release.",
    "You have launched the campaign with a press release.",
    "Как мы запустим кампанию?",
    "Як ми запустимо кампанію?",
    "Jak uruchomimy kampanię?"
  ],
  [
    "What will I sketch for the art class?",
    "You will sketch a portrait for the art class.",
    "You sketched a portrait for the art class.",
    "You are sketching a portrait for the art class.",
    "You have sketched a portrait for the art class.",
    "Что мне зарисовать для урока рисования?",
    "Що мені замалювати для уроку малювання?",
    "Co naszkicuję na zajęcia plastyczne?"
  ],
  [
    "Where will we volunteer for the charity drive?",
    "You will volunteer at the community center for the charity drive.",
    "You volunteered at the community center for the charity drive.",
    "You are volunteering at the community center for the charity drive.",
    "You have volunteered at the community center for the charity drive.",
    "Где мы будем волонтерить для благотворительной акции?",
    "Де ми волонтеритимемо для благодійної акції?",
    "Gdzie będziemy wolontariuszami na akcję charytatywną?"
  ],
  [
    "What will I teach at the seminar?",
    "You will teach public speaking at the seminar.",
    "You taught public speaking at the seminar.",
    "You are teaching public speaking at the seminar.",
    "You have taught public speaking at the seminar.",
    "Чему мне учить на семинаре?",
    "Чому мені вчити на семінарі?",
    "Czego będę uczył na seminarium?"
  ],
  [
    "How will we fund the project?",
    "You will fund the project through crowdfunding.",
    "You funded the project through crowdfunding.",
    "You are funding the project through crowdfunding.",
    "You have funded the project through crowdfunding.",
    "Как мы будем финансировать проект?",
    "Як ми фінансуватимемо проект?",
    "Jak sfinansujemy projekt?"
  ],
  [
    "What will I order for the team lunch?",
    "You will order pizza for the team lunch.",
    "You ordered pizza for the team lunch.",
    "You are ordering pizza for the team lunch.",
    "You have ordered pizza for the team lunch.",
    "Что мне заказать на командный обед?",
    "Що мені замовити на командний обід?",
    "Co zamówię na obiad zespołowy?"
  ],
  [
    "Where will we trek this autumn?",
    "You will trek in the national park this autumn.",
    "You trekked in the national park this autumn.",
    "You are trekking in the national park this autumn.",
    "You have trekked in the national park this autumn.",
    "Куда мы пойдем в поход этой осенью?",
    "Куди ми підемо в похід цієї осені?",
    "Gdzie będziemy wędrować tej jesieni?"
  ],
  [
    "What will I design for the website?",
    "You will design a sleek interface for the website.",
    "You designed a sleek interface for the website.",
    "You are designing a sleek interface for the website.",
    "You have designed a sleek interface for the website.",
    "Что мне разработать для веб-сайта?",
    "Що мені розробити для вебсайту?",
    "Co zaprojektuję dla strony internetowej?"
  ],
  [
    "How will we advertise the product launch?",
    "You will advertise the product launch with a video campaign.",
    "You advertised the product launch with a video campaign.",
    "You are advertising the product launch with a video campaign.",
    "You have advertised the product launch with a video campaign.",
    "Как мы будем рекламировать запуск продукта?",
    "Як ми рекламуватимемо запуск продукту?",
    "Jak będziemy reklamować wprowadzenie produktu?"
  ],
  [
    "What will I perform at the concert?",
    "You will perform a violin solo at the concert.",
    "You performed a violin solo at the concert.",
    "You are performing a violin solo at the concert.",
    "You have performed a violin solo at the concert.",
    "Что мне исполнить на концерте?",
    "Що мені виконати на концерті?",
    "Co wykonam na koncercie?"
  ],
  [
    "Where will we stay during the conference?",
    "You will stay at a downtown hotel during the conference.",
    "You stayed at a downtown hotel during the conference.",
    "You are staying at a downtown hotel during the conference.",
    "You have stayed at a downtown hotel during the conference.",
    "Где мы остановимся во время конференции?",
    "Де ми зупинимося під час конференції?",
    "Gdzie zatrzymamy się podczas konferencji?"
  ],
  [
    "What will I bake for the fundraiser?",
    "You will bake brownies for the fundraiser.",
    "You baked brownies for the fundraiser.",
    "You are baking brownies for the fundraiser.",
    "You have baked brownies for the fundraiser.",
    "Что мне испечь для сбора средств?",
    "Що мені спекти для збору коштів?",
    "Co upiekę na zbiórkę funduszy?"
  ],
  [
    "How will we organize the workshop?",
    "You will organize the workshop with interactive sessions.",
    "You organized the workshop with interactive sessions.",
    "You are organizing the workshop with interactive sessions.",
    "You have organized the workshop with interactive sessions.",
    "Как мы организуем мастер-класс?",
    "Як ми організуємо майстер-клас?",
    "Jak zorganizujemy warsztaty?"
  ],
  [
    "What will I play at the game night?",
    "You will play a strategy board game at the game night.",
    "You played a strategy board game at the game night.",
    "You are playing a strategy board game at the game night.",
    "You have played a strategy board game at the game night.",
    "Что мне сыграть на игровой вечеринке?",
    "Що мені зіграти на ігровій вечірці?",
    "Co zagram na wieczorze gier?"
  ],
  [
    "Where will we dine for the celebration?",
    "You will dine at a rooftop restaurant for the celebration.",
    "You dined at a rooftop restaurant for the celebration.",
    "You are dining at a rooftop restaurant for the celebration.",
    "You have dined at a rooftop restaurant for the celebration.",
    "Где мы будем ужинать в честь празднования?",
    "Де ми вечерятимемо на честь святкування?",
    "Gdzie będziemy jeść na świętowanie?"
  ],
  [
    "What will I draw for the exhibition?",
    "You will draw an abstract piece for the exhibition.",
    "You drew an abstract piece for the exhibition.",
    "You are drawing an abstract piece for the exhibition.",
    "You have drawn an abstract piece for the exhibition.",
    "Что мне нарисовать для выставки?",
    "Що мені намалювати для виставки?",
    "Co narysuję na wystawę?"
  ],
  [
    "How will we schedule the classes?",
    "You will schedule the classes with a flexible timetable.",
    "You scheduled the classes with a flexible timetable.",
    "You are scheduling the classes with a flexible timetable.",
    "You have scheduled the classes with a flexible timetable.",
    "Как мы составим расписание занятий?",
    "Як ми складемо розклад занять?",
    "Jak zaplanujemy zajęcia?"
  ],
  [
    "What will I wear for the photoshoot?",
    "You will wear a vintage outfit for the photoshoot.",
    "You wore a vintage outfit for the photoshoot.",
    "You are wearing a vintage outfit for the photoshoot.",
    "You have worn a vintage outfit for the photoshoot.",
    "Что мне надеть для фотосессии?",
    "Що мені вдягнути для фотосесії?",
    "Co założę na sesję zdjęciową?"
  ],
  [
    "Where will we donate the old furniture?",
    "You will donate the old furniture to a local shelter.",
    "You donated the old furniture to a local shelter.",
    "You are donating the old furniture to a local shelter.",
    "You have donated the old furniture to a local shelter.",
    "Куда мы пожертвуем старую мебель?",
    "Куди ми пожертвуємо старі меблі?",
    "Gdzie oddamy stare meble?"
  ],
  [
    "What will I present at the conference?",
    "You will present a research paper at the conference.",
    "You presented a research paper at the conference.",
    "You are presenting a research paper at the conference.",
    "You have presented a research paper at the conference.",
    "Что мне представить на конференции?",
    "Що мені представити на конференції?",
    "Co zaprezentuję na konferencji?"
  ],
  [
    "How will we train for the competition?",
    "You will train for the competition with a coach.",
    "You trained for the competition with a coach.",
    "You are training for the competition with a coach.",
    "You have trained for the competition with a coach.",
    "Как мы будем тренироваться для соревнования?",
    "Як ми тренуватимемося для змагання?",
    "Jak będziemy trenować do zawodów?"
  ],
  [
    "What will I build for the tech fair?",
    "You will build a robot prototype for the tech fair.",
    "You built a robot prototype for the tech fair.",
    "You are building a robot prototype for the tech fair.",
    "You have built a robot prototype for the tech fair.",
    "Что мне построить для технической выставки?",
    "Що мені побудувати для технічної виставки?",
    "Co zbuduję na targi technologiczne?"
  ],
  [
    "Where will we camp for the adventure?",
    "You will camp in the forest for the adventure.",
    "You camped in the forest for the adventure.",
    "You are camping in the forest for the adventure.",
    "You have camped in the forest for the adventure.",
    "Где мы разобьем лагерь для приключения?",
    "Де ми розб’ємо табір для пригоди?",
    "Gdzie rozbijemy obóz na przygodę?"
  ],
  [
    "What will I knit for the charity sale?",
    "You will knit mittens for the charity sale.",
    "You knitted mittens for the charity sale.",
    "You are knitting mittens for the charity sale.",
    "You have knitted mittens for the charity sale.",
    "Что мне связать для благотворительной распродажи?",
    "Що мені зв’язати для благодійного розпродажу?",
    "Co wydziergam na wyprzedaż charytatywną?"
  ],
  [
    "How will we greet the visitors?",
    "You will greet the visitors with a friendly smile.",
    "You greeted the visitors with a friendly smile.",
    "You are greeting the visitors with a friendly smile.",
    "You have greeted the visitors with a friendly smile.",
    "Как мы будем встречать посетителей?",
    "Як ми вітатимемо відвідувачів?",
    "Jak powitamy gości?"
  ],
  [
    "What will I photograph at the nature reserve?",
    "You will photograph wildlife at the nature reserve.",
    "You photographed wildlife at the nature reserve.",
    "You are photographing wildlife at the nature reserve.",
    "You have photographed wildlife at the nature reserve.",
    "Что мне сфотографировать в заповеднике?",
    "Що мені сфотографувати в заповіднику?",
    "Co sfotografuję w rezerwacie przyrody?"
  ],
  [
    "Where will we shop for gifts?",
    "You will shop for gifts at the artisan market.",
    "You shopped for gifts at the artisan market.",
    "You are shopping for gifts at the artisan market.",
    "You have shopped for gifts at the artisan market.",
    "Где мы будем покупать подарки?",
    "Де ми купуватимемо подарунки?",
    "Gdzie będziemy kupować prezenty?"
  ],
  [
    "What will I post on the blog?",
    "You will post a recipe guide on the blog.",
    "You posted a recipe guide on the blog.",
    "You are posting a recipe guide on the blog.",
    "You have posted a recipe guide on the blog.",
    "Что мне опубликовать в блоге?",
    "Що мені опублікувати в блозі?",
    "Co opublikuję na blogu?"
  ],
  [
    "How will we budget for the renovation?",
    "You will budget for the renovation with a spreadsheet.",
    "You budgeted for the renovation with a spreadsheet.",
    "You are budgeting for the renovation with a spreadsheet.",
    "You have budgeted for the renovation with a spreadsheet.",
    "Как мы составим бюджет для ремонта?",
    "Як ми складемо бюджет для ремонту?",
    "Jak zaplanujemy budżet na remont?"
  ],
  [
    "What will I learn for the coding bootcamp?",
    "You will learn web development for the coding bootcamp.",
    "You learned web development for the coding bootcamp.",
    "You are learning web development for the coding bootcamp.",
    "You have learned web development for the coding bootcamp.",
    "Чему мне учиться для кодинг-лагеря?",
    "Чому мені вчитися для кодинг-табору?",
    "Czego będę się uczył na obozie programistycznym?"
  ],
  [
    "Where will we relax this weekend?",
    "You will relax at a spa resort this weekend.",
    "You relaxed at a spa resort this weekend.",
    "You are relaxing at a spa resort this weekend.",
    "You have relaxed at a spa resort this weekend.",
    "Где мы будем отдыхать на этих выходных?",
    "Де ми відпочиватимемо цими вихідними?",
    "Gdzie będziemy odpoczywać w ten weekend?"
  ],
  [
    "What will I fix in the apartment?",
    "You will fix the broken shelf in the apartment.",
    "You fixed the broken shelf in the apartment.",
    "You are fixing the broken shelf in the apartment.",
    "You have fixed the broken shelf in the apartment.",
    "Что мне починить в квартире?",
    "Що мені полагодити в квартирі?",
    "Co naprawię w mieszkaniu?"
  ],
  [
    "How will we celebrate the milestone?",
    "You will celebrate the milestone with a team outing.",
    "You celebrated the milestone with a team outing.",
    "You are celebrating the milestone with a team outing.",
    "You have celebrated the milestone with a team outing.",
    "Как мы будем праздновать достижение?",
    "Як ми святкуватимемо досягнення?",
    "Jak będziemy świętować kamień milowy?"
  ],
  [
    "What will I sew for the fashion show?",
    "You will sew a dress for the fashion show.",
    "You sewed a dress for the fashion show.",
    "You are sewing a dress for the fashion show.",
    "You have sewed a dress for the fashion show.",
    "Что мне сшить для показа мод?",
    "Що мені пошити для показу моди?",
    "Co uszyję na pokaz mody?"
  ],
  [
    "Where will we stroll this evening?",
    "You will stroll in the city park this evening.",
    "You strolled in the city park this evening.",
    "You are strolling in the city park this evening.",
    "You have strolled in the city park this evening.",
    "Где мы будем гулять сегодня вечером?",
    "Де ми гулятимемо сьогодні ввечері?",
    "Gdzie będziemy spacerować dzisiejszego wieczoru?"
  ],
  [
    "What will I create for the craft fair?",
    "You will create handmade candles for the craft fair.",
    "You created handmade candles for the craft fair.",
    "You are creating handmade candles for the craft fair.",
    "You have created handmade candles for the craft fair.",
    "Что мне создать для ярмарки ремесел?",
    "Що мені створити для ярмарки ремесел?",
    "Co stworzę na jarmark rzemiosła?"
  ],
  [
    "How will we pack for the expedition?",
    "You will pack for the expedition with durable gear.",
    "You packed for the expedition with durable gear.",
    "You are packing for the expedition with durable gear.",
    "You have packed for the expedition with durable gear.",
    "Как мы будем собираться для экспедиции?",
    "Як ми збиратимемося для експедиції?",
    "Jak spakujemy się na ekspedycję?"
  ],
  [
    "What will I share at the meeting?",
    "You will share a project update at the meeting.",
    "You shared a project update at the meeting.",
    "You are sharing a project update at the meeting.",
    "You have shared a project update at the meeting.",
    "Чем мне поделиться на встрече?",
    "Чим мені поділитися на зустрічі?",
    "Czym mam się podzielić na spotkaniu?"
  ],
  [
    "Where will we meet for the reunion?",
    "You will meet at a lakeside venue for the reunion.",
    "You met at a lakeside venue for the reunion.",
    "You are meeting at a lakeside venue for the reunion.",
    "You have met at a lakeside venue for the reunion.",
    "Где мы встретимся для воссоединения?",
    "Де ми зустрінемося для возз’єднання?",
    "Gdzie spotkamy się na zjazd?"
  ],
  [
    "What will I perform at the open mic?",
    "You will perform a poem at the open mic.",
    "You performed a poem at the open mic.",
    "You are performing a poem at the open mic.",
    "You have performed a poem at the open mic.",
    "Что мне исполнить на открытом микрофоне?",
    "Що мені виконати на відкритому мікрофоні?",
    "Co wykonam na otwartym mikrofonie?"
  ],

  [
    "The suitcase is empty, and the tickets are printed. It's time to pack for the long-awaited trip.",
    "We will pack the suitcase carefully tonight.",
    "We packed the suitcase carefully last night.",
    "We are packing the suitcase carefully now.",
    "We have packed the suitcase carefully.",
    "Чемодан пустой, а билеты напечатаны. Пора собираться в долгожданную поездку.",
    "Валіза порожня, а квитки надруковані. Час пакуватися в довгоочікувану поїздку.",
    "Walizka jest pusta, a bilety wydrukowane. Czas pakować się na długo oczekiwaną podróż."
  ],

  [
    "The journal is open, and the pen is ready. A new entry needs to be written.",
    "I will write a reflective entry tonight.",
    "I wrote a reflective entry last night.",
    "I am writing a reflective entry now.",
    "I have written a reflective entry.",
    "Дневник открыт, и ручка готова. Нужно написать новую запись.",
    "Щоденник відкритий, і ручка готова. Потрібно написати новий запис.",
    "Dziennik jest otwarty, a pióro gotowe. Trzeba napisać nowy wpis."
  ],
  [
    "The yoga mat is rolled out, and the room is quiet. It's time to practice.",
    "We shall practice a calming routine this morning.",
    "We practiced a calming routine yesterday morning.",
    "We are practicing a calming routine now.",
    "We have practiced a calming routine.",
    "Коврик для йоги расстелен, и комната тихая. Пора практиковаться.",
    "Килимок для йоги розстелений, і кімната тиха. Час практикувати.",
    "Mata do jogi jest rozłożona, a pokój cichy. Czas ćwiczyć."
  ],
  [
    "The camera is charged, and the scenery is stunning. A perfect shot awaits.",
    "I will capture a sunrise photo tomorrow.",
    "I captured a sunrise photo yesterday.",
    "I am capturing a sunrise photo now.",
    "I have captured a sunrise photo.",
    "Камера заряжена, и пейзаж потрясающий. Идеальный кадр ждет.",
    "Камера заряджена, і пейзаж приголомшливий. Ідеальний кадр чекає.",
    "Aparat jest naładowany, a krajobraz oszałamiający. Idealne zdjęcie czeka."
  ],
  [
    "The ingredients are fresh, and the recipe is chosen. A dessert needs to be made.",
    "We shall bake a lemon tart this afternoon.",
    "We baked a lemon tart yesterday afternoon.",
    "We are baking a lemon tart now.",
    "We have baked a lemon tart.",
    "Ингредиенты свежие, и рецепт выбран. Нужно приготовить десерт.",
    "Інгредієнти свіжі, і рецепт обраний. Потрібно приготувати десерт.",
    "Składniki są świeże, a przepis wybrany. Trzeba przygotować deser."
  ],
  [
    "The bicycle is ready, and the trail is clear. A ride is planned.",
    "I will cycle through the park this evening.",
    "I cycled through the park yesterday evening.",
    "I am cycling through the park now.",
    "I have cycled through the park.",
    "Велосипед готов, и тропа свободна. Запланирована поездка.",
    "Велосипед готовий, і стежка вільна. Запланована поїздка.",
    "Rower jest gotowy, a ścieżka wolna. Zaplanowana jest przejażdżka."
  ],
  [
    "The board game is set up, and friends are gathered. The evening promises fun.",
    "We shall play a strategy game tonight.",
    "We played a strategy game last night.",
    "We are playing a strategy game now.",
    "We have played a strategy game.",
    "Настольная игра готова, и друзья собрались. Вечер обещает веселье.",
    "Настільна гра готова, і друзі зібралися. Вечір обіцяє веселощі.",
    "Gra planszowa jest przygotowana, a przyjaciele zebrani. Wieczór zapowiada się wesoło."
  ],
  [
    "The notebook is open, and ideas are flowing. A new project needs planning.",
    "I will sketch a project outline today.",
    "I sketched a project outline yesterday.",
    "I am sketching a project outline now.",
    "I have sketched a project outline.",
    "Блокнот открыт, и идеи текут. Новый проект нужно спланировать.",
    "Блокнот відкритий, і ідеї пливуть. Новий проєкт потрібно спланувати.",
    "Notatnik jest otwarty, a pomysły płyną. Nowy projekt trzeba zaplanować."
  ],
  [
    "The gym is empty, and the weights are set. A workout is calling.",
    "We shall lift weights this morning.",
    "We lifted weights yesterday morning.",
    "We are lifting weights now.",
    "We have lifted weights.",
    "Спортзал пуст, и штанги готовы. Пора тренироваться.",
    "Спортзал порожній, і штанги готові. Час тренуватися.",
    "Siłownia jest pusta, a sztangi gotowe. Czas trenować."
  ],
  [
    "The sewing kit is out, and fabric is chosen. A new creation awaits.",
    "I will sew a tote bag this weekend.",
    "I sewed a tote bag last weekend.",
    "I am sewing a tote bag now.",
    "I have sewed a tote bag.",
    "Швейный набор готов, и ткань выбрана. Ждет новое творение.",
    "Швейний набір готовий, і тканина обрана. Чекає нове творіння.",
    "Zestaw do szycia jest gotowy, a tkanina wybrana. Czeka nowe dzieło."
  ],
  [
    "The playlist is ready, and the speakers are on. The mood needs a boost.",
    "We shall play upbeat music tonight.",
    "We played upbeat music last night.",
    "We are playing upbeat music now.",
    "We have played upbeat music.",
    "Плейлист готов, и колонки включены. Пора поднять настроение.",
    "Плейлист готовий, і колонки увімкнені. Час підняти настрій.",
    "Playlista jest gotowa, a głośniki włączone. Czas poprawić nastrój."
  ],
  [
    "The canvas is stretched, and brushes are clean. A masterpiece is in mind.",
    "I will create an abstract artwork tomorrow.",
    "I created an abstract artwork yesterday.",
    "I am creating an abstract artwork now.",
    "I have created an abstract artwork.",
    "Холст натянут, и кисти чистые. Мастерская работа в голове.",
    "Полотно натягнуте, і пензлі чисті. Майстерна робота в голові.",
    "Płótno jest naciągnięte, a pędzle czyste. Arcydzieło w głowie."
  ],
  [
    "The ingredients are prepped, and the oven is hot. A new dish is planned.",
    "We shall cook a spicy curry this evening.",
    "We cooked a spicy curry yesterday evening.",
    "We are cooking a spicy curry now.",
    "We have cooked a spicy curry.",
    "Ингредиенты подготовлены, и духовка нагрета. Запланировано новое блюдо.",
    "Інгредієнти підготовлені, і духовка нагріта. Заплановано нову страву.",
    "Składniki są przygotowane, a piekarnik rozgrzany. Zaplanowana jest nowa potrawa."
  ],
  [
    "The map is open, and the destination is marked. An adventure is calling.",
    "I will explore a hidden trail tomorrow.",
    "I explored a hidden trail yesterday.",
    "I am exploring a hidden trail now.",
    "I have explored a hidden trail.",
    "Карта открыта, и пункт назначения отмечен. Приключение зовет.",
    "Мапа відкрита, і пункт призначення позначений. Пригода кличе.",
    "Mapa jest otwarta, a cel oznaczony. Przygoda wzywa."
  ],
  [
    "The candles are out, and the table is set. A cozy evening is planned.",
    "We shall light scented candles tonight.",
    "We lit scented candles last night.",
    "We are lighting scented candles now.",
    "We have lit scented candles.",
    "Свечи готовы, и стол накрыт. Запланирован уютный вечер.",
    "Свічки готові, і стіл накритий. Запланований затишний вечір.",
    "Świece są gotowe, a stół nakryty. Zaplanowany jest przytulny wieczór."
  ],
  [
    "The sketchbook is open, and pencils are sharpened. A new idea needs capturing.",
    "I will draw a cityscape this afternoon.",
    "I drew a cityscape yesterday afternoon.",
    "I am drawing a cityscape now.",
    "I have drawn a cityscape.",
    "Альбом для эскизов открыт, и карандаши заточены. Нужно запечатлеть новую идею.",
    "Альбом для ескізів відкритий, і олівці заточені. Потрібно зафіксувати нову ідею.",
    "Szkicownik jest otwarty, a ołówki naostrzone. Trzeba uchwycić nowy pomysł."
  ],
  [
    "The tent is packed, and the campsite is chosen. A weekend escape awaits.",
    "We shall camp by the river this weekend.",
    "We camped by the river last weekend.",
    "We are camping by the river now.",
    "We have camped by the river.",
    "Палатка собрана, и место для кемпинга выбрано. Ждет уик-энд на природе.",
    "Намет зібраний, і місце для кемпінгу обране. Чекає вікенд на природі.",
    "Namiot jest spakowany, a miejsce na kemping wybrane. Czeka weekend na łonie natury."
  ],
  [
    "The knitting needles are ready, and the yarn is soft. A new project is starting.",
    "I will knit a cozy blanket this month.",
    "I knitted a cozy blanket last month.",
    "I am knitting a cozy blanket now.",
    "I have knitted a cozy blanket.",
    "Спицы готовы, и пряжа мягкая. Начинается новый проект.",
    "Спиці готові, і пряжа м’яка. Починається новий проєкт.",
    "Druty są gotowe, a wełna miękka. Zaczyna się nowy projekt."
  ],
  [
    "The invitations are designed, and the venue is booked. A celebration is coming.",
    "We shall host a small gathering tomorrow.",
    "We hosted a small gathering yesterday.",
    "We are hosting a small gathering now.",
    "We have hosted a small gathering.",
    "Приглашения готовы, и место забронировано. Праздник приближается.",
    "Запрошення готові, і місце заброньоване. Свято наближається.",
    "Zaproszenia są gotowe, a miejsce zarezerwowane. Święto się zbliża."
  ],
  [
    "The headphones are on, and the podcast is queued. A relaxing evening awaits.",
    "I will listen to a new episode tonight.",
    "I listened to a new episode last night.",
    "I am listening to a new episode now.",
    "I have listened to a new episode.",
    "Наушники надеты, и подкаст выбран. Ждет расслабляющий вечер.",
    "Навушники надіті, і подкаст обраний. Чекає розслабляючий вечір.",
    "Słuchawki założone, a podcast wybrany. Czeka relaksujący wieczór."
  ],
  [
    "The tools are ready, and the wood is cut. A crafting session is planned.",
    "We shall build a birdhouse this afternoon.",
    "We built a birdhouse yesterday afternoon.",
    "We are building a birdhouse now.",
    "We have built a birdhouse.",
    "Инструменты готовы, и дерево нарезано. Запланирована работа по дереву.",
    "Інструменти готові, і дерево нарізане. Запланована робота по дереву.",
    "Narzędzia są gotowe, a drewno pocięte. Zaplanowana jest sesja rzemieślnicza."
  ],
  [
    "The telescope is set up, and the sky is clear. A stargazing night is ahead.",
    "I will observe the constellations tonight.",
    "I observed the constellations last night.",
    "I am observing the constellations now.",
    "I have observed the constellations.",
    "Телескоп установлен, и небо ясное. Предстоит ночь наблюдения за звездами.",
    "Телескоп встановлений, і небо ясне. Попереду ніч спостереження за зірками.",
    "Teleskop jest ustawiony, a niebo czyste. Przed nami noc obserwacji gwiazd."
  ],
  [
    "The recipe book is open, and the pantry is stocked. A baking session is planned.",
    "We shall bake homemade bread this morning.",
    "We baked homemade bread yesterday morning.",
    "We are baking homemade bread now.",
    "We have baked homemade bread.",
    "Книга рецептов открыта, и кладовая полна. Запланирована выпечка.",
    "Книга рецептів відкрита, і комора повна. Запланована випічка.",
    "Książka kucharska jest otwarta, a spiżarnia zaopatrzona. Zaplanowana jest sesja pieczenia."
  ],
  [
    "The running shoes are laced, and the track is empty. A morning jog awaits.",
    "I will run a quick lap today.",
    "I ran a quick lap yesterday.",
    "I am running a quick lap now.",
    "I have run a quick lap.",
    "Кроссовки зашнурованы, и дорожка пуста. Утренняя пробежка ждет.",
    "Кросівки зашнуровані, і доріжка порожня. Ранкова пробіжка чекає.",
    "Buty do biegania zasznurowane, a tor pusty. Czeka poranny jogging."
  ],
  [
    "The clay is soft, and the wheel is ready. A pottery session is planned.",
    "We shall craft a ceramic vase this afternoon.",
    "We crafted a ceramic vase yesterday afternoon.",
    "We are crafting a ceramic vase now.",
    "We have crafted a ceramic vase.",
    "Глина мягкая, и гончарный круг готов. Запланирована работа с керамикой.",
    "Глина м’яка, і гончарне коло готове. Запланована робота з керамікою.",
    "Glina jest miękka, a koło garncarskie gotowe. Zaplanowana jest sesja ceramiczna."
  ],
  [
    "The journal is new, and the ideas are fresh. A brainstorming session is needed.",
    "I will jot down creative ideas tonight.",
    "I jotted down creative ideas last night.",
    "I am jotting down creative ideas now.",
    "I have jotted down creative ideas.",
    "Дневник новый, и идеи свежие. Нужна сессия мозгового штурма.",
    "Щоденник новий, і ідеї свіжі. Потрібна сесія мозкового штурму.",
    "Dziennik jest nowy, a pomysły świeże. Potrzebna jest sesja burzy mózgów."
  ],
  [
    "The hiking boots are ready, and the trail map is printed. An outdoor adventure awaits.",
    "We shall trek a scenic route tomorrow.",
    "We trekked a scenic route yesterday.",
    "We are trekking a scenic route now.",
    "We have trekked a scenic route.",
    "Походные ботинки готовы, и карта тропы напечатана. Ждет приключение на природе.",
    "Похідні черевики готові, і карта стежки надрукована. Чекає пригода на природі.",
    "Buty trekkingowe są gotowe, a mapa szlaku wydrukowana. Czeka przygoda na łonie natury."
  ],
  [
    "The puzzle pieces are scattered, and the table is clear. A relaxing activity is planned.",
    "I will assemble a jigsaw puzzle tonight.",
    "I assembled a jigsaw puzzle last night.",
    "I am assembling a jigsaw puzzle now.",
    "I have assembled a jigsaw puzzle.",
    "Кусочки пазла разбросаны, и стол свободен. Запланировано расслабляющее занятие.",
    "Шматочки пазла розкидані, і стіл вільний. Заплановане розслабляюче заняття.",
    "Kawałki układanki są rozrzucone, a stół wolny. Zaplanowana jest relaksująca aktywność."
  ],
  [
    "The seeds are sorted, and the pots are filled. A planting session is ready.",
    "We shall plant herbs this morning.",
    "We planted herbs yesterday morning.",
    "We are planting herbs now.",
    "We have planted herbs.",
    "Семена рассортированы, и горшки наполнены. Готова сессия посадки.",
    "Насіння розсортоване, і горщики наповнені. Готова сесія посадки.",
    "Nasiona są posortowane, a doniczki wypełnione. Gotowa jest sesja sadzenia."
  ],
  [
    "The headphones are charged, and the audiobook is selected. A quiet evening is planned.",
    "I will listen to a mystery novel tonight.",
    "I listened to a mystery novel last night.",
    "I am listening to a mystery novel now.",
    "I have listened to a mystery novel.",
    "Наушники заряжены, и аудиокнига выбрана. Запланирован тихий вечер.",
    "Навушники заряджені, і аудіокнига обрана. Запланований тихий вечір.",
    "Słuchawki są naładowane, a audiobook wybrany. Zaplanowany jest spokojny wieczór."
  ],
  [
    "The fabric is cut, and the pattern is ready. A sewing project is about to start.",
    "We shall stitch a quilt this weekend.",
    "We stitched a quilt last weekend.",
    "We are stitching a quilt now.",
    "We have stitched a quilt.",
    "Ткань нарезана, и выкройка готова. Швейный проект вот-вот начнется.",
    "Тканина нарізана, і викрійка готова. Швейний проєкт ось-ось почнеться.",
    "Tkanina jest pocięta, a wykrój gotowy. Projekt szycia zaraz się zacznie."
  ],
  [
    "The binoculars are packed, and the bird guide is open. A birdwatching trip is planned.",
    "I will spot rare birds tomorrow.",
    "I spotted rare birds yesterday.",
    "I am spotting rare birds now.",
    "I have spotted rare birds.",
    "Бинокль упакован, и справочник по птицам открыт. Запланирована поездка за птицами.",
    "Бінокль упакований, і довідник із птахів відкритий. Запланована поїздка за птахами.",
    "Lornetka jest spakowana, a przewodnik po ptakach otwarty. Zaplanowana jest wycieczka na obserwację ptaków."
  ],
  [
    "The paint cans are lined up, and the walls are prepped. A home refresh is coming.",
    "We shall repaint the living room this weekend.",
    "We repainted the living room last weekend.",
    "We are repainting the living room now.",
    "We have repainted the living room.",
    "Банки с краской выстроены, и стены подготовлены. Пора обновить дом.",
    "Банки з фарбою вишикувані, і стіни підготовлені. Час оновити дім.",
    "Puszki z farbą są ustawione, a ściany przygotowane. Czas odświeżyć dom."
  ],
  [
    "The journal is blank, and the pen is new. A new story needs to be written.",
    "I will write a short story tonight.",
    "I wrote a short story last night.",
    "I am writing a short story now.",
    "I have written a short story.",
    "Дневник чист, и ручка новая. Нужно написать новую историю.",
    "Щоденник чистий, і ручка нова. Потрібно написати нову історію.",
    "Dziennik jest czysty, a pióro nowe. Trzeba napisać nową historię."
  ],
  [
    "The skates are sharpened, and the rink is open. A fun session is planned.",
    "We shall skate at the rink this evening.",
    "We skated at the rink yesterday evening.",
    "We are skating at the rink now.",
    "We have skated at the rink.",
    "Коньки заточены, и каток открыт. Запланирована веселая сессия.",
    "Ковзани заточені, і каток відкритий. Запланована весела сесія.",
    "Łyżwy są naostrzone, a lodowisko otwarte. Zaplanowana jest wesoła sesja."
  ],
  [
    "The camera is set, and the props are arranged. A creative shoot is ready.",
    "I will film a short video today.",
    "I filmed a short video yesterday.",
    "I am filming a short video now.",
    "I have filmed a short video.",
    "Камера настроена, и реквизит расставлен. Готова творческая съемка.",
    "Камера налаштована, і реквізит розставлений. Готова творча зйомка.",
    "Kamera jest ustawiona, a rekwizyty rozstawione. Gotowa jest kreatywna sesja."
  ],
  [
    "The easel is up, and the watercolors are out. A painting session is planned.",
    "We shall paint a floral scene this afternoon.",
    "We painted a floral scene yesterday afternoon.",
    "We are painting a floral scene now.",
    "We have painted a floral scene.",
    "Мольберт установлен, и акварели готовы. Запланирована сессия рисования.",
    "Мольберт встановлений, і акварелі готові. Запланована сесія малювання.",
    "Sztaluga jest ustawiona, a akwarele gotowe. Zaplanowana jest sesja malarska."
  ],
  [
    "The journal is open, and the ideas are fresh. A new poem needs crafting.",
    "I will write a poem tonight.",
    "I wrote a poem last night.",
    "I am writing a poem now.",
    "I have written a poem.",
    "Дневник открыт, и идеи свежие. Нужно создать новое стихотворение.",
    "Щоденник відкритий, і ідеї свіжі. Потрібно створити новий вірш.",
    "Dziennik jest otwarty, a pomysły świeże. Trzeba stworzyć nowy wiersz."
  ],
  [
    "The picnic basket is ready, and the park is nearby. A relaxing day awaits.",
    "We shall have a picnic this afternoon.",
    "We had a picnic yesterday afternoon.",
    "We are having a picnic now.",
    "We have had a picnic.",
    "Корзина для пикника готова, и парк рядом. Ждет расслабляющий день.",
    "Кошик для пікніка готовий, і парк поруч. Чекає розслабляючий день.",
    "Koszyk piknikowy jest gotowy, a park blisko. Czeka relaksujący dzień."
  ],
  [
    "The chessboard is set, and the pieces are aligned. A match is planned.",
    "I will play a chess match tonight.",
    "I played a chess match last night.",
    "I am playing a chess match now.",
    "I have played a chess match.",
    "Шахматная доска готова, и фигуры расставлены. Запланирован матч.",
    "Шахова дошка готова, і фігури розставлені. Запланований матч.",
    "Szachownica jest gotowa, a figury ustawione. Zaplanowany jest mecz."
  ],
  [
    "The yoga studio is booked, and the schedule is set. A session is planned.",
    "We shall attend a yoga class tomorrow.",
    "We attended a yoga class yesterday.",
    "We are attending a yoga class now.",
    "We have attended a yoga class.",
    "Студия йоги забронирована, и расписание готово. Запланировано занятие.",
    "Студія йоги заброньована, і розклад готовий. Заплановане заняття.",
    "Studio jogi jest zarezerwowane, a harmonogram gotowy. Zaplanowana jest sesja."
  ],
  [
    "The sketchpad is open, and the pencils are ready. A new design needs drawing.",
    "I will sketch a fashion design today.",
    "I sketched a fashion design yesterday.",
    "I am sketching a fashion design now.",
    "I have sketched a fashion design.",
    "Блокнот для эскизов открыт, и карандаши готовы. Нужно нарисовать новый дизайн.",
    "Блокнот для ескізів відкритий, і олівці готові. Потрібно намалювати новий дизайн.",
    "Szkicownik jest otwarty, a ołówki gotowe. Trzeba narysować nowy projekt."
  ],
  [
    "The ingredients are chopped, and the stove is on. A new meal is planned.",
    "We shall cook a stir-fry tonight.",
    "We cooked a stir-fry last night.",
    "We are cooking a stir-fry now.",
    "We have cooked a stir-fry.",
    "Ингредиенты нарезаны, и плита включена. Запланировано новое блюдо.",
    "Інгредієнти нарізані, і плита увімкнена. Запланована нова страва.",
    "Składniki są pokrojone, a kuchenka włączona. Zaplanowana jest nowa potrawa."
  ],
  [
    "The journal is ready, and the thoughts are clear. A new entry is needed.",
    "I will write a gratitude list tonight.",
    "I wrote a gratitude list last night.",
    "I am writing a gratitude list now.",
    "I have written a gratitude list.",
    "Дневник готов, и мысли ясны. Нужна новая запись.",
    "Щоденник готовий, і думки ясні. Потрібен новий запис.",
    "Dziennik jest gotowy, a myśli jasne. Potrzebny jest nowy wpis."
  ],
  [
    "The kayak is ready, and the lake is calm. A paddling adventure awaits.",
    "We shall paddle across the lake tomorrow.",
    "We paddled across the lake yesterday.",
    "We are paddling across the lake now.",
    "We have paddled across the lake.",
    "Каяк готов, и озеро спокойно. Ждет приключение с веслом.",
    "Каяк готовий, і озеро спокійне. Чекає пригода з веслом.",
    "Kajak jest gotowy, a jezioro spokojne. Czeka przygoda z wiosłem."
  ],
  [
    "The canvas is blank, and the brushes are wet. A new painting is planned.",
    "I will paint a mountain view today.",
    "I painted a mountain view yesterday.",
    "I am painting a mountain view now.",
    "I have painted a mountain view.",
    "Холст пуст, и кисти влажные. Запланирована новая картина.",
    "Полотно порожнє, і пензлі вологі. Запланована нова картина.",
    "Płótno jest puste, a pędzle mokre. Zaplanowana jest nowa картина."
  ],
  [
    "The board is ready, and the pieces are set. A game night is planned.",
    "We shall play a trivia game tonight.",
    "We played a trivia game last night.",
    "We are playing a trivia game now.",
    "We have played a trivia game.",
    "Доска готова, и фигуры расставлены. Запланирован игровой вечер.",
    "Дошка готова, і фігури розставлені. Запланований ігровий вечір.",
    "Plansza jest gotowa, a elementy ustawione. Zaplanowany jest wieczór gier."
  ],
  [
    "The journal is open, and the pen is in hand. A new idea needs capturing.",
    "I will write a blog post tonight.",
    "I wrote a blog post last night.",
    "I am writing a blog post now.",
    "I have written a blog post.",
    "Дневник открыт, и ручка в руке. Нужно запечатлеть новую идею.",
    "Щоденник відкритий, і ручка в руці. Потрібно зафіксувати нову ідею.",
    "Dziennik jest otwarty, a pióro w ręce. Trzeba uchwycić nowy pomysł."
  ],
  [
    "The yoga mat is out, and the music is soft. A relaxing session is planned.",
    "We shall practice meditation this evening.",
    "We practiced meditation yesterday evening.",
    "We are practicing meditation now.",
    "We have practiced meditation.",
    "Коврик для йоги расстелен, и музыка мягкая. Запланирована расслабляющая сессия.",
    "Килимок для йоги розстелений, і музика м’яка. Запланована розслабляюча сесія.",
    "Mata do jogi jest rozłożona, a muzyka delikatna. Zaplanowana jest relaksująca sesja."
  ],
  [
    "The camera is ready, and the sunset is near. A perfect photo awaits.",
    "I will capture a sunset photo tonight.",
    "I captured a sunset photo last night.",
    "I am capturing a sunset photo now.",
    "I have captured a sunset photo.",
    "Камера готова, и закат близок. Ждет идеальное фото.",
    "Камера готова, і захід сонця близький. Чекає ідеальне фото.",
    "Aparat jest gotowy, a zachód słońca bliski. Czeka idealne zdjęcie."
  ],
  [
    "The ingredients are ready, and the kitchen is clean. A new recipe is planned.",
    "We shall bake a chocolate cake this afternoon.",
    "We baked a chocolate cake yesterday afternoon.",
    "We are baking a chocolate cake now.",
    "We have baked a chocolate cake.",
    "Ингредиенты готовы, и кухня чиста. Запланирован новый рецепт.",
    "Інгредієнти готові, і кухня чиста. Запланований новий рецепт.",
    "Składniki są gotowe, a kuchnia czysta. Zaplanowany jest nowy przepis."
  ],
  [
    "The running track is clear, and the shoes are new. A sprint session is planned.",
    "I will sprint a few laps today.",
    "I sprinted a few laps yesterday.",
    "I am sprinting a few laps now.",
    "I have sprinted a few laps.",
    "Беговая дорожка свободна, и обувь новая. Запланирована спринтерская сессия.",
    "Бігова доріжка вільна, і взуття нове. Запланована спринтерська сесія.",
    "Tor biegowy jest wolny, a buty nowe. Zaplanowana jest sesja sprinterska."
  ],
  [
    "The clay is prepared, and the tools are set. A sculpting session is planned.",
    "We shall sculpt a small statue this morning.",
    "We sculpted a small statue yesterday morning.",
    "We are sculpting a small statue now.",
    "We have sculpted a small statue.",
    "Глина готова, и инструменты расставлены. Запланирована сессия лепки.",
    "Глина готова, і інструменти розставлені. Запланована сесія ліплення.",
    "Glina jest przygotowana, a narzędzia ustawione. Zaplanowana jest sesja rzeźbiarska."
  ],
[
    "What shall we cook for dinner tonight?",
    "We shall cook pasta with tomato sauce.",
    "We are cooking pasta with tomato sauce.",
    "We cooked pasta with tomato sauce last night.",
    "We have cooked pasta with tomato sauce many times.",
    "Что нам приготовить на ужин сегодня вечером?",
    "Що нам приготувати на вечерю сьогодні ввечері?",
    "Co powinniśmy ugotować na kolację dzisiaj wieczorem?"
  ],
  [
    "Where will you park the car tomorrow?",
    "You will park the car in the underground garage.",
    "You are parking the car in the underground garage.",
    "You parked the car in the underground garage yesterday.",
    "You have parked the car in the underground garage before.",
    "Где ты припаркуешь машину завтра?",
    "Де ти припаркуєш машину завтра?",
    "Gdzie zaparkujesz samochód jutro?"
  ],
  [
    "What shall I wear to the wedding?",
    "I shall wear a long blue dress.",
    "I am wearing a long blue dress.",
    "I wore a long blue dress last year.",
    "I have worn a long blue dress to many events.",
    "Что мне надеть на свадьбу?",
    "Що мені вдягнути на весілля?",
    "Co powinienem założyć na wesele?"
  ],
  [
    "When will she meet us for coffee?",
    "She will meet us for coffee at 10 a.m.",
    "She is meeting us for coffee at 10 a.m.",
    "She met us for coffee at 10 a.m. yesterday.",
    "She has met us for coffee at 10 a.m. many times.",
    "Когда она встретится с нами за кофе?",
    "Коли вона зустрінеться з нами за кавою?",
    "Kiedy spotka się z nami na kawę?"
  ],
  [
    "What shall we bring to the picnic?",
    "We shall bring homemade sandwiches.",
    "We are bringing homemade sandwiches.",
    "We brought homemade sandwiches last time.",
    "We have brought homemade sandwiches to every picnic.",
    "Что нам принести на пикник?",
    "Що нам принести на пікнік?",
    "Co powinniśmy przynieść na piknik?"
  ],
  [
    "Where will they stay during the trip?",
    "They will stay at a cozy hotel by the lake.",
    "They are staying at a cozy hotel by the lake.",
    "They stayed at a cozy hotel by the lake last year.",
    "They have stayed at a cozy hotel by the lake before.",
    "Где они остановятся во время поездки?",
    "Де вони зупиняться під час поїздки?",
    "Gdzie zatrzymają się podczas podróży?"
  ],
  [
    "What shall I study for the exam?",
    "I shall study the last three chapters.",
    "I am studying the last three chapters.",
    "I studied the last three chapters last night.",
    "I have studied the last three chapters already.",
    "Что мне учить к экзамену?",
    "Що мені вчити до іспиту?",
    "Czego powinienem uczyć się na egzamin?"
  ],
  [
    "How will he decorate the room?",
    "He will decorate the room with balloons and lights.",
    "He is decorating the room with balloons and lights.",
    "He decorated the room with balloons and lights last party.",
    "He has decorated the room with balloons and lights many times.",
    "Как он украсит комнату?",
    "Як він прикрасить кімнату?",
    "Jak udekoruje pokój?"
  ],
  [
    "What shall we write in the email?",
    "We shall write a formal apology.",
    "We are writing a formal apology.",
    "We wrote a formal apology yesterday.",
    "We have written a formal apology before.",
    "Что нам написать в письме?",
    "Що нам написати в листі?",
    "Co powinniśmy napisać w e-mailu?"
  ],
  [
    "Where will she go for vacation?",
    "She will go to the mountains.",
    "She is going to the mountains.",
    "She went to the mountains last summer.",
    "She has gone to the mountains several times.",
    "Куда она поедет в отпуск?",
    "Куди вона поїде у відпустку?",
    "Gdzie pojedzie na wakacje?"
  ],
  [
    "What shall I gift my friend?",
    "I shall gift a handmade scarf.",
    "I am gifting a handmade scarf.",
    "I gifted a handmade scarf last birthday.",
    "I have gifted a handmade scarf to many friends.",
    "Что мне подарить другу?",
    "Що мені подарувати другові?",
    "Co powinienem podarować przyjacielowi?"
  ],
  [
    "When will you call the doctor?",
    "You will call the doctor tomorrow morning.",
    "You are calling the doctor tomorrow morning.",
    "You called the doctor last week.",
    "You have called the doctor several times this year.",
    "Когда ты позвонишь врачу?",
    "Коли ти зателефонуєш лікарю?",
    "Kiedy zadzwonisz do lekarza?"
  ],
  [
    "What shall we watch tonight?",
    "We shall watch a comedy movie.",
    "We are watching a comedy movie.",
    "We watched a comedy movie last night.",
    "We have watched a comedy movie many times.",
    "Что нам посмотреть сегодня вечером?",
    "Що нам подивитися сьогодні ввечері?",
    "Co powinniśmy obejrzeć dzisiaj wieczorem?"
  ],
  [
    "Where will he apply for the job?",
    "He will apply for the job online.",
    "He is applying for the job online.",
    "He applied for the job online last month.",
    "He has applied for the job online before.",
    "Где он подаст заявку на работу?",
    "Де він подасть заявку на роботу?",
    "Gdzie złoży podanie o pracę?"
  ],
  [
    "What shall I clean first?",
    "I shall clean the kitchen first.",
    "I am cleaning the kitchen first.",
    "I cleaned the kitchen first last time.",
    "I have cleaned the kitchen first every weekend.",
    "Что мне убрать первым?",
    "Що мені прибрати першим?",
    "Co powinienem posprzątać najpierw?"
  ],
  [
    "How will they travel to the city?",
    "They will travel to the city by train.",
    "They are traveling to the city by train.",
    "They traveled to the city by train last week.",
    "They have traveled to the city by train many times.",
    "Как они доберутся до города?",
    "Як вони дістануться до міста?",
    "Jak dostaną się do miasta?"
  ],
  [
    "What shall we plant in the garden?",
    "We shall plant roses and tulips.",
    "We are planting roses and tulips.",
    "We planted roses and tulips last spring.",
    "We have planted roses and tulips every year.",
    "Что нам посадить в саду?",
    "Що нам посадити в саду?",
    "Co powinniśmy posadzić w ogrodzie?"
  ],
  [
    "Where will she hide the gift?",
    "She will hide the gift in the closet.",
    "She is hiding the gift in the closet.",
    "She hid the gift in the closet last time.",
    "She has hidden the gift in the closet before.",
    "Где она спрячет подарок?",
    "Де вона сховатиме подарунок?",
    "Gdzie schowa prezent?"
  ],
  [
    "What shall I order for lunch?",
    "I shall order a salad and soup.",
    "I am ordering a salad and soup.",
    "I ordered a salad and soup yesterday.",
    "I have ordered a salad and soup many times.",
    "Что мне заказать на обед?",
    "Що мені замовити на обід?",
    "Co powinienem zamówić na obiad?"
  ],
  [
    "When will he finish the report?",
    "He will finish the report by Friday.",
    "He is finishing the report by Friday.",
    "He finished the report by Friday last time.",
    "He has finished the report by Friday every month.",
    "Когда он закончит отчёт?",
    "Коли він закінчить звіт?",
    "Kiedy skończy raport?"
  ],
  [
    "What shall we discuss at the meeting?",
    "We shall discuss the new project.",
    "We are discussing the new project.",
    "We discussed the new project last week.",
    "We have discussed the new project several times.",
    "Что нам обсудить на собрании?",
    "Що нам обговорити на нараді?",
    "Co powinniśmy omówić na spotkaniu?"
  ],
  [
    "Where will you charge your phone?",
    "You will charge your phone in the living room.",
    "You are charging your phone in the living room.",
    "You charged your phone in the living room yesterday.",
    "You have charged your phone in the living room many times.",
    "Где ты зарядишь телефон?",
    "Де ти зарядиш телефон?",
    "Gdzie naładujesz telefon?"
  ],
  [
    "What shall I name the puppy?",
    "I shall name the puppy Max.",
    "I am naming the puppy Max.",
    "I named the puppy Max last week.",
    "I have named the puppy Max already.",
    "Как мне назвать щенка?",
    "Як мені назвати цуценя?",
    "Jak powinienem nazwać szczeniaka?"
  ],
  [
    "How will she prepare for the presentation?",
    "She will prepare for the presentation with slides.",
    "She is preparing for the presentation with slides.",
    "She prepared for the presentation with slides last time.",
    "She has prepared for the presentation with slides before.",
    "Как она подготовится к презентации?",
    "Як вона підготуватися до презентації?",
    "Jak przygotuje się do prezentacji?"
  ],
  [
    "What shall we fix in the house?",
    "We shall fix the leaky faucet.",
    "We are fixing the leaky faucet.",
    "We fixed the leaky faucet last month.",
    "We have fixed the leaky faucet before.",
    "Что нам починить в доме?",
    "Що нам полагодити в будинку?",
    "Co powinniśmy naprawić w domu?"
  ],
  [
    "Where will they celebrate the anniversary?",
    "They will celebrate the anniversary at a restaurant.",
    "They are celebrating the anniversary at a restaurant.",
    "They celebrated the anniversary at a restaurant last year.",
    "They have celebrated the anniversary at a restaurant many times.",
    "Где они отпразднуют годовщину?",
    "Де вони відсвяткують річницю?",
    "Gdzie będą świętować rocznicę?"
  ],
  [
    "What shall I read before sleep?",
    "I shall read a short story.",
    "I am reading a short story.",
    "I read a short story last night.",
    "I have read a short story every evening.",
    "Что мне почитать перед сном?",
    "Що мені почитати перед сном?",
    "Co powinienem przeczytać przed snem?"
  ],
  [
    "When will we arrive at the station?",
    "We will arrive at the station at 7 p.m.",
    "We are arriving at the station at 7 p.m.",
    "We arrived at the station at 7 p.m. yesterday.",
    "We have arrived at the station at 7 p.m. many times.",
    "Когда мы прибудем на вокзал?",
    "Коли ми прибудемо на вокзал?",
    "Kiedy przybędziemy na dworzec?"
  ],
  [
    "What shall I draw on the card?",
    "I shall draw a heart and flowers.",
    "I am drawing a heart and flowers.",
    "I drew a heart and flowers last time.",
    "I have drawn a heart and flowers on many cards.",
    "Что мне нарисовать на открытке?",
    "Що мені намалювати на листівці?",
    "Co powinienem narysować na kartce?"
  ],
  [
    "How will you save money this month?",
    "You will save money by cooking at home.",
    "You are saving money by cooking at home.",
    "You saved money by cooking at home last month.",
    "You have saved money by cooking at home before.",
    "Как ты сэкономишь деньги в этом месяце?",
    "Як ти заощадиш гроші цього місяця?",
    "Jak zaoszczędzisz pieniądze w tym miesiącu?"
  ],
  [
    "What shall we bake for the party?",
    "We shall bake chocolate cookies.",
    "We are baking chocolate cookies.",
    "We baked chocolate cookies last party.",
    "We have baked chocolate cookies for every party.",
    "Что нам испечь для вечеринки?",
    "Що нам спекти для вечірки?",
    "Co powinniśmy upiec na imprezę?"
  ],
  [
    "Where will he hang the picture?",
    "He will hang the picture above the sofa.",
    "He is hanging the picture above the sofa.",
    "He hung the picture above the sofa last week.",
    "He has hung the picture above the sofa before.",
    "Где он повесит картину?",
    "Де він повісить картину?",
    "Gdzie powiesi obraz?"
  ],
  [
    "What shall I buy at the store?",
    "I shall buy milk and bread.",
    "I am buying milk and bread.",
    "I bought milk and bread yesterday.",
    "I have bought milk and bread many times.",
    "Что мне купить в магазине?",
    "Що мені купити в магазині?",
    "Co powinienem kupić w sklepie?"
  ],
  [
    "When will she start the new job?",
    "She will start the new job next Monday.",
    "She is starting the new job next Monday.",
    "She started the new job last Monday.",
    "She has started the new job already.",
    "Когда она начнёт новую работу?",
    "Коли вона почне нову роботу?",
    "Kiedy rozpocznie nową pracę?"
  ],
  [
    "What shall we paint on the wall?",
    "We shall paint a mural with flowers.",
    "We are painting a mural with flowers.",
    "We painted a mural with flowers last summer.",
    "We have painted a mural with flowers before.",
    "Что нам нарисовать на стене?",
    "Що нам намалювати на стіні?",
    "Co powinniśmy namalować na ścianie?"
  ],
  [
    "Where will they rent an apartment?",
    "They will rent an apartment downtown.",
    "They are renting an apartment downtown.",
    "They rented an apartment downtown last year.",
    "They have rented an apartment downtown before.",
    "Где они снимут квартиру?",
    "Де вони орендують квартиру?",
    "Gdzie wynajmą mieszkanie?"
  ],
  [
    "What shall I learn this weekend?",
    "I shall learn a new recipe.",
    "I am learning a new recipe.",
    "I learned a new recipe last weekend.",
    "I have learned a new recipe many times.",
    "Что мне выучить на этих выходных?",
    "Що мені вивчити на цих вихідних?",
    "Czego powinienem nauczyć się w ten weekend?"
  ],
  [
    "How will he contact the client?",
    "He will contact the client by email.",
    "He is contacting the client by email.",
    "He contacted the client by email yesterday.",
    "He has contacted the client by email before.",
    "Как он свяжется с клиентом?",
    "Як він зв'яжеться з клієнтом?",
    "Jak skontaktuje się z klientem?"
  ],
  [
    "What shall we organize for the event?",
    "We shall organize a photo booth.",
    "We are organizing a photo booth.",
    "We organized a photo booth last event.",
    "We have organized a photo booth many times.",
    "Что нам организовать для мероприятия?",
    "Що нам організувати для заходу?",
    "Co powinniśmy zorganizować na wydarzenie?"
  ],
  [
    "Where will you store the documents?",
    "You will store the documents in the cloud.",
    "You are storing the documents in the cloud.",
    "You stored the documents in the cloud yesterday.",
    "You have stored the documents in the cloud before.",
    "Где ты будешь хранить документы?",
    "Де ти зберігатимеш документи?",
    "Gdzie będziesz przechowywał dokumenty?"
  ],
  [
    "What shall I photograph at the festival?",
    "I shall photograph the fireworks.",
    "I am photographing the fireworks.",
    "I photographed the fireworks last year.",
    "I have photographed the fireworks many times.",
    "Что мне сфотографировать на фестивале?",
    "Що мені сфотографувати на фестивалі?",
    "Co powinienem sfotografować na festiwalu?"
  ],
  [
    "When will she deliver the package?",
    "She will deliver the package tomorrow.",
    "She is delivering the package tomorrow.",
    "She delivered the package yesterday.",
    "She has delivered the package many times.",
    "Когда она доставит посылку?",
    "Коли вона доставить посилку?",
    "Kiedy dostarczy paczkę?"
  ],
  [
    "What shall we recycle this week?",
    "We shall recycle plastic bottles.",
    "We are recycling plastic bottles.",
    "We recycled plastic bottles last week.",
    "We have recycled plastic bottles every week.",
    "Что нам переработать на этой неделе?",
    "Що нам переробити на цьому тижні?",
    "Co powinniśmy poddać recyklingowi w tym tygodniu?"
  ],
  [
    "Where will he volunteer next month?",
    "He will volunteer at the animal shelter.",
    "He is volunteering at the animal shelter.",
    "He volunteered at the animal shelter last month.",
    "He has volunteered at the animal shelter before.",
    "Где он будет волонтёрить в следующем месяце?",
    "Де він волонтеритиме наступного місяця?",
    "Gdzie będzie wolontariuszem w przyszłym miesiącu?"
  ],
  [
    "What shall I pack for the trip?",
    "I shall pack warm clothes.",
    "I am packing warm clothes.",
    "I packed warm clothes last trip.",
    "I have packed warm clothes for every trip.",
    "Что мне собрать в поездку?",
    "Що мені зібрати в поїздку?",
    "Co powinienem spakować na wyjazd?"
  ],
  [
    "How will they promote the product?",
    "They will promote the product on social media.",
    "They are promoting the product on social media.",
    "They promoted the product on social media last launch.",
    "They have promoted the product on social media before.",
    "Как они продвинут продукт?",
    "Як вони просуватимуть продукт?",
    "Jak będą promować produkt?"
  ],
  [
    "What shall we donate to charity?",
    "We shall donate old clothes.",
    "We are donating old clothes.",
    "We donated old clothes last year.",
    "We have donated old clothes many times.",
    "Что нам пожертвовать на благотворительность?",
    "Що нам пожертвувати на благодійність?",
    "Co powinniśmy przekazać na cele charytatywne?"
  ],
  [
    "Where will you install the new software?",
    "You will install the new software on the server.",
    "You are installing the new software on the server.",
    "You installed the new software on the server yesterday.",
    "You have installed the new software on the server before.",
    "Где ты установишь новое ПО?",
    "Де ти встановиш нове ПЗ?",
    "Gdzie zainstalujesz nowe oprogramowanie?"
  ],
  [
    "What shall I reserve for the dinner?",
    "I shall reserve a table for six.",
    "I am reserving a table for six.",
    "I reserved a table for six last time.",
    "I have reserved a table for six many times.",
    "Что мне забронировать на ужин?",
    "Що мені забронювати на вечерю?",
    "Co powinienem zarezerwować na kolację?"
  ],
  [
    "When will he publish the article?",
    "He will publish the article next week.",
    "He is publishing the article next week.",
    "He published the article last week.",
    "He has published the article already.",
    "Когда он опубликует статью?",
    "Коли він опублікує статтю?",
    "Kiedy opublikuje artykuł?"
  ],
[
    "What are you cooking for dinner tonight?",
    "I am cooking pasta with tomato sauce.",
    "I will cook pasta with tomato sauce.",
    "I cooked pasta with tomato sauce last night.",
    "I have cooked pasta with tomato sauce many times.",
    "Что ты готовишь на ужин сегодня вечером?",
    "Що ти готуєш на вечерю сьогодні ввечері?",
    "Co gotujesz na kolację dzisiaj wieczorem?"
  ],
  [
    "Where are you parking the car right now?",
    "I am parking the car in the underground garage.",
    "I will park the car in the underground garage.",
    "I parked the car in the underground garage yesterday.",
    "I have parked the car in the underground garage before.",
    "Где ты паркуешь машину прямо сейчас?",
    "Де ти паркуєш машину прямо зараз?",
    "Gdzie parkujesz samochód teraz?"
  ],
  [
    "What am I wearing to the wedding?",
    "You are wearing a long blue dress.",
    "You will wear a long blue dress.",
    "You wore a long blue dress last year.",
    "You have worn a long blue dress to many events.",
    "Что я надеваю на свадьбу?",
    "Що я вдягаю на весілля?",
    "Co zakładam na wesele?"
  ],
  [
    "When are we meeting for coffee?",
    "We are meeting for coffee at 10 a.m.",
    "We shall meet for coffee at 10 a.m.",
    "We met for coffee at 10 a.m. yesterday.",
    "We have met for coffee at 10 a.m. many times.",
    "Когда мы встречаемся за кофе?",
    "Коли ми зустрічаємося за кавою?",
    "Kiedy spotykamy się na kawę?"
  ],
  [
    "What are you bringing to the picnic?",
    "I am bringing homemade sandwiches.",
    "I will bring homemade sandwiches.",
    "I brought homemade sandwiches last time.",
    "I have brought homemade sandwiches to every picnic.",
    "Что ты приносишь на пикник?",
    "Що ти приносиш на пікнік?",
    "Co przynosisz na piknik?"
  ],
  [
    "Where are they staying during the trip?",
    "They are staying at a cozy hotel by the lake.",
    "They will stay at a cozy hotel by the lake.",
    "They stayed at a cozy hotel by the lake last year.",
    "They have stayed at a cozy hotel by the lake before.",
    "Где они останавливаются во время поездки?",
    "Де вони зупиняються під час поїздки?",
    "Gdzie zatrzymują się podczas podróży?"
  ],
  [
    "What am I studying for the exam?",
    "You are studying the last three chapters.",
    "You will study the last three chapters.",
    "You studied the last three chapters last night.",
    "You have studied the last three chapters already.",
    "Что я учу к экзамену?",
    "Що я вчу до іспиту?",
    "Czego uczę się na egzamin?"
  ],
  [
    "How are you decorating the room?",
    "I am decorating the room with balloons and lights.",
    "I will decorate the room with balloons and lights.",
    "I decorated the room with balloons and lights last party.",
    "I have decorated the room with balloons and lights many times.",
    "Как ты украшаешь комнату?",
    "Як ти прикрашаєш кімнату?",
    "Jak dekorujesz pokój?"
  ],
  [
    "What are we writing in the email?",
    "We are writing a formal apology.",
    "We shall write a formal apology.",
    "We wrote a formal apology yesterday.",
    "We have written a formal apology before.",
    "Что мы пишем в письме?",
    "Що ми пишемо в листі?",
    "Co piszemy w e-mailu?"
  ],
  [
    "Where is she going for vacation?",
    "She is going to the mountains.",
    "She will go to the mountains.",
    "She went to the mountains last summer.",
    "She has gone to the mountains several times.",
    "Куда она едет в отпуск?",
    "Куди вона їде у відпустку?",
    "Gdzie jedzie na wakacje?"
  ],
  [
    "What am I gifting my friend?",
    "You are gifting a handmade scarf.",
    "You will gift a handmade scarf.",
    "You gifted a handmade scarf last birthday.",
    "You have gifted a handmade scarf to many friends.",
    "Что я дарю другу?",
    "Що я дарую другові?",
    "Co daję w prezencie przyjacielowi?"
  ],
  [
    "When are you calling the doctor?",
    "I am calling the doctor right now.",
    "I will call the doctor tomorrow morning.",
    "I called the doctor last week.",
    "I have called the doctor several times this year.",
    "Когда ты звонишь врачу?",
    "Коли ти дзвониш лікарю?",
    "Kiedy dzwonisz do lekarza?"
  ],
  [
    "What are we watching tonight?",
    "We are watching a comedy movie.",
    "We shall watch a comedy movie.",
    "We watched a comedy movie last night.",
    "We have watched a comedy movie many times.",
    "Что мы смотрим сегодня вечером?",
    "Що ми дивимося сьогодні ввечері?",
    "Co oglądamy dzisiaj wieczorem?"
  ],
  [
    "Where is he applying for the job?",
    "He is applying for the job online.",
    "He will apply for the job online.",
    "He applied for the job online last month.",
    "He has applied for the job online before.",
    "Где он подаёт заявку на работу?",
    "Де він подає заявку на роботу?",
    "Gdzie składa podanie o pracę?"
  ],
  [
    "What am I cleaning first?",
    "You are cleaning the kitchen first.",
    "You will clean the kitchen first.",
    "You cleaned the kitchen first last time.",
    "You have cleaned the kitchen first every weekend.",
    "Что я убираю первым?",
    "Що я прибираю першим?",
    "Co sprzątam najpierw?"
  ],
  [
    "How are they traveling to the city?",
    "They are traveling to the city by train.",
    "They will travel to the city by train.",
    "They traveled to the city by train last week.",
    "They have traveled to the city by train many times.",
    "Как они добираются до города?",
    "Як вони дістаються до міста?",
    "Jak dojeżdżają do miasta?"
  ],
  [
    "What are we planting in the garden?",
    "We are planting roses and tulips.",
    "We shall plant roses and tulips.",
    "We planted roses and tulips last spring.",
    "We have planted roses and tulips every year.",
    "Что мы сажаем в саду?",
    "Що ми садимо в саду?",
    "Co sadzimy w ogrodzie?"
  ],
  [
    "Where is she hiding the gift?",
    "She is hiding the gift in the closet.",
    "She will hide the gift in the closet.",
    "She hid the gift in the closet last time.",
    "She has hidden the gift in the closet before.",
    "Где она прячет подарок?",
    "Де вона ховає подарунок?",
    "Gdzie chowa prezent?"
  ],
  [
    "What am I ordering for lunch?",
    "You are ordering a salad and soup.",
    "You will order a salad and soup.",
    "You ordered a salad and soup yesterday.",
    "You have ordered a salad and soup many times.",
    "Что я заказываю на обед?",
    "Що я замовляю на обід?",
    "Co zamawiam na obiad?"
  ],
  [
    "When is he finishing the report?",
    "He is finishing the report right now.",
    "He will finish the report by Friday.",
    "He finished the report by Friday last time.",
    "He has finished the report by Friday every month.",
    "Когда он заканчивает отчёт?",
    "Коли він закінчує звіт?",
    "Kiedy kończy raport?"
  ],
  [
    "What are we discussing at the meeting?",
    "We are discussing the new project.",
    "We shall discuss the new project.",
    "We discussed the new project last week.",
    "We have discussed the new project several times.",
    "Что мы обсуждаем на собрании?",
    "Що ми обговорюємо на нараді?",
    "Co omawiamy na spotkaniu?"
  ],
  [
    "Where are you charging your phone?",
    "I am charging my phone in the living room.",
    "I will charge my phone in the living room.",
    "I charged my phone in the living room yesterday.",
    "I have charged my phone in the living room many times.",
    "Где ты заряжаешь телефон?",
    "Де ти заряджаєш телефон?",
    "Gdzie ładujesz telefon?"
  ],
  [
    "What am I naming the puppy?",
    "You are naming the puppy Max.",
    "You will name the puppy Max.",
    "You named the puppy Max last week.",
    "You have named the puppy Max already.",
    "Как я называю щенка?",
    "Як я називаю цуценя?",
    "Jak nazywam szczeniaka?"
  ],
  [
    "How is she preparing for the presentation?",
    "She is preparing for the presentation with slides.",
    "She will prepare for the presentation with slides.",
    "She prepared for the presentation with slides last time.",
    "She has prepared for the presentation with slides before.",
    "Как она готовится к презентации?",
    "Як вона готуєтьcя до презентації?",
    "Jak przygotowuje się do prezentacji?"
  ],
  [
    "What are we fixing in the house?",
    "We are fixing the leaky faucet.",
    "We shall fix the leaky faucet.",
    "We fixed the leaky faucet last month.",
    "We have fixed the leaky faucet before.",
    "Что мы чиним в доме?",
    "Що ми лагодимо в будинку?",
    "Co naprawiamy w domu?"
  ],
  [
    "Where are they celebrating the anniversary?",
    "They are celebrating the anniversary at a restaurant.",
    "They will celebrate the anniversary at a restaurant.",
    "They celebrated the anniversary at a restaurant last year.",
    "They have celebrated the anniversary at a restaurant many times.",
    "Где они празднуют годовщину?",
    "Де вони святкують річницю?",
    "Gdzie świętują rocznicę?"
  ],
  [
    "What am I reading before sleep?",
    "You are reading a short story.",
    "You will read a short story.",
    "You read a short story last night.",
    "You have read a short story every evening.",
    "Что я читаю перед сном?",
    "Що я читаю перед сном?",
    "Co czytam przed snem?"
  ],
  [
    "When are we arriving at the station?",
    "We are arriving at the station at 7 p.m.",
    "We shall arrive at the station at 7 p.m.",
    "We arrived at the station at 7 p.m. yesterday.",
    "We have arrived at the station at 7 p.m. many times.",
    "Когда мы прибываем на вокзал?",
    "Коли ми прибуваємо на вокзал?",
    "Kiedy przyjeżdżamy na dworzec?"
  ],
  [
    "What am I drawing on the card?",
    "You are drawing a heart and flowers.",
    "You will draw a heart and flowers.",
    "You drew a heart and flowers last time.",
    "You have drawn a heart and flowers on many cards.",
    "Что я рисую на открытке?",
    "Що я малюю на листівці?",
    "Co rysuję na kartce?"
  ],
  [
    "How are you saving money this month?",
    "I am saving money by cooking at home.",
    "I will save money by cooking at home.",
    "I saved money by cooking at home last month.",
    "I have saved money by cooking at home before.",
    "Как ты экономишь деньги в этом месяце?",
    "Як ти заощаджуєш гроші цього місяця?",
    "Jak oszczędzasz pieniądze w tym miesiącu?"
  ],
  [
    "What are we baking for the party?",
    "We are baking chocolate cookies.",
    "We shall bake chocolate cookies.",
    "We baked chocolate cookies last party.",
    "We have baked chocolate cookies for every party.",
    "Что мы печём для вечеринки?",
    "Що ми печемо для вечірки?",
    "Co pieczemy na imprezę?"
  ],
  [
    "Where is he hanging the picture?",
    "He is hanging the picture above the sofa.",
    "He will hang the picture above the sofa.",
    "He hung the picture above the sofa last week.",
    "He has hung the picture above the sofa before.",
    "Где он вешает картину?",
    "Де він вішає картину?",
    "Gdzie wiesza obraz?"
  ],
  [
    "What am I buying at the store?",
    "You are buying milk and bread.",
    "You will buy milk and bread.",
    "You bought milk and bread yesterday.",
    "You have bought milk and bread many times.",
    "Что я покупаю в магазине?",
    "Що я купую в магазині?",
    "Co kupuję w sklepie?"
  ],
  [
    "When is she starting the new job?",
    "She is starting the new job right now.",
    "She will start the new job next Monday.",
    "She started the new job last Monday.",
    "She has started the new job already.",
    "Когда она начинает новую работу?",
    "Коли вона починає нову роботу?",
    "Kiedy zaczyna nową pracę?"
  ],
  [
    "What are we painting on the wall?",
    "We are painting a mural with flowers.",
    "We shall paint a mural with flowers.",
    "We painted a mural with flowers last summer.",
    "We have painted a mural with flowers before.",
    "Что мы рисуем на стене?",
    "Що ми малюємо на стіні?",
    "Co malujemy na ścianie?"
  ],
  [
    "Where are they renting an apartment?",
    "They are renting an apartment downtown.",
    "They will rent an apartment downtown.",
    "They rented an apartment downtown last year.",
    "They have rented an apartment downtown before.",
    "Где они снимают квартиру?",
    "Де вони орендують квартиру?",
    "Gdzie wynajmują mieszkanie?"
  ],
  [
    "What am I learning this weekend?",
    "You are learning a new recipe.",
    "You will learn a new recipe.",
    "You learned a new recipe last weekend.",
    "You have learned a new recipe many times.",
    "Что я учу на этих выходных?",
    "Що я вчу на цих вихідних?",
    "Czego uczę się w ten weekend?"
  ],
  [
    "How is he contacting the client?",
    "He is contacting the client by email.",
    "He will contact the client by email.",
    "He contacted the client by email yesterday.",
    "He has contacted the client by email before.",
    "Как он связывается с клиентом?",
    "Як він зв'язується з клієнтом?",
    "Jak kontaktuje się z klientem?"
  ],
  [
    "What are we organizing for the event?",
    "We are organizing a photo booth.",
    "We shall organize a photo booth.",
    "We organized a photo booth last event.",
    "We have organized a photo booth many times.",
    "Что мы организуем для мероприятия?",
    "Що ми організовуємо для заходу?",
    "Co organizujemy na wydarzenie?"
  ],
  [
    "Where are you storing the documents?",
    "I am storing the documents in the cloud.",
    "I will store the documents in the cloud.",
    "I stored the documents in the cloud yesterday.",
    "I have stored the documents in the cloud before.",
    "Где ты хранишь документы?",
    "Де ти зберігаєш документи?",
    "Gdzie przechowujesz dokumenty?"
  ],
  [
    "What am I photographing at the festival?",
    "You are photographing the fireworks.",
    "You will photograph the fireworks.",
    "You photographed the fireworks last year.",
    "You have photographed the fireworks many times.",
    "Что я фотографирую на фестивале?",
    "Що я фотографую на фестивалі?",
    "Co fotografuję na festiwalu?"
  ],
  [
    "When is she delivering the package?",
    "She is delivering the package right now.",
    "She will deliver the package tomorrow.",
    "She delivered the package yesterday.",
    "She has delivered the package many times.",
    "Когда она доставляет посылку?",
    "Коли вона доставляє посилку?",
    "Kiedy dostarcza paczkę?"
  ],
  [
    "What are we recycling this week?",
    "We are recycling plastic bottles.",
    "We shall recycle plastic bottles.",
    "We recycled plastic bottles last week.",
    "We have recycled plastic bottles every week.",
    "Что мы перерабатываем на этой неделе?",
    "Що ми переробляємо на цьому тижні?",
    "Co poddajemy recyklingowi w tym tygodniu?"
  ],
  [
    "Where is he volunteering next month?",
    "He is volunteering at the animal shelter.",
    "He will volunteer at the animal shelter.",
    "He volunteered at the animal shelter last month.",
    "He has volunteered at the animal shelter before.",
    "Где он волонтёрит в следующем месяце?",
    "Де він волонтерить наступного місяця?",
    "Gdzie będzie wolontariuszem w przyszłym miesiącu?"
  ],
  [
    "What am I packing for the trip?",
    "You are packing warm clothes.",
    "You will pack warm clothes.",
    "You packed warm clothes last trip.",
    "You have packed warm clothes for every trip.",
    "Что я собираю в поездку?",
    "Що я збираю в поїздку?",
    "Co pakuję na wyjazd?"
  ],
  [
    "How are they promoting the product?",
    "They are promoting the product on social media.",
    "They will promote the product on social media.",
    "They promoted the product on social media last launch.",
    "They have promoted the product on social media before.",
    "Как они продвигают продукт?",
    "Як вони просувають продукт?",
    "Jak promują produkt?"
  ],
  [
    "What are we donating to charity?",
    "We are donating old clothes.",
    "We shall donate old clothes.",
    "We donated old clothes last year.",
    "We have donated old clothes many times.",
    "Что мы жертвуем на благотворительность?",
    "Що ми жертвуємо на благодійність?",
    "Co przekazujemy na cele charytatywne?"
  ],
  [
    "Where are you installing the new software?",
    "I am installing the new software on the server.",
    "I will install the new software on the server.",
    "I installed the new software on the server yesterday.",
    "I have installed the new software on the server before.",
    "Где ты устанавливаешь новое ПО?",
    "Де ти встановлюєш нове ПЗ?",
    "Gdzie instalujesz nowe oprogramowanie?"
  ],
  [
    "What am I reserving for the dinner?",
    "You are reserving a table for six.",
    "You will reserve a table for six.",
    "You reserved a table for six last time.",
    "You have reserved a table for six many times.",
    "Что я бронирую на ужин?",
    "Що я бронюю на вечерю?",
    "Co rezerwuję na kolację?"
  ],
  [
    "When is he publishing the article?",
    "He is publishing the article right now.",
    "He will publish the article next week.",
    "He published the article last week.",
    "He has published the article already.",
    "Когда он публикует статью?",
    "Коли він публікує статтю?",
    "Kiedy publikuje artykuł?"
  ]

];

// Расширение массива за счёт вариаций с заменой will на shall и наоборот
// Здесь найти в индексе 2 все will возле i или we и заменить на shall
const unit28PartOne = unit27Start.filter(el => el[2].toLowerCase().includes('i will ') 
                                         || el[2].toLowerCase().includes('we will ')).map((el) => {
  // Создаём копию подмассива, чтобы не менять исходный
  const newEl = [...el];
  // Заменяем "might" на "may" в нужных строках
  newEl[2] = newEl[2].replace(/will/g, "shall");
  return newEl;
});

// Здесь найти в индексе 0 все will возле i или we и заменить на shall
const unit28PartTwo = unit27Start.filter(el => el[0].toLowerCase().includes('i will ') 
                                         || el[0].toLowerCase().includes('we will ')).map((el) => {
  // Создаём копию подмассива, чтобы не менять исходный
  const newEl = [...el];
  // Заменяем "might" на "may" в нужных строках
  newEl[0] = newEl[0].replace(/will/g, "shall");
  return newEl;
});

// Здесь найти в индексе 1 все will возле i или we и заменить на shall
const unit28PartThree = unit27Start.filter(el => el[1].toLowerCase().includes('i will ') 
                                         || el[1].toLowerCase().includes('we will ')).map((el) => {
  // Создаём копию подмассива, чтобы не менять исходный
  const newEl = [...el];
  // Заменяем "might" на "may" в нужных строках
  newEl[1] = newEl[1].replace(/will/g, "shall");
  return newEl;
});

// Здесь найти в индексе 0 все shall и заменить на will
const unit28PartFour = unit27Start.filter(el => el[0].toLowerCase().includes('shall ')).map((el) => {
  // Создаём копию подмассива, чтобы не менять исходный
  const newEl = [...el];
  // Заменяем "might" на "may" в нужных строках
  newEl[0] = newEl[0].replace(/shall/g, "will");
  newEl[0] = newEl[0].replace(/Shall/g, "Will");
  return newEl;
});

// Здесь найти в индексе 1 все shall и заменить на will
const unit28PartFive = unit27Start.filter(el => el[1].toLowerCase().includes('shall ')).map((el) => {
  // Создаём копию подмассива, чтобы не менять исходный
  const newEl = [...el];
  // Заменяем "might" на "may" в нужных строках
  newEl[1] = newEl[1].replace(/shall/g, "will");
  newEl[1] = newEl[1].replace(/Shall/g, "Will");
  return newEl;
});

// Здесь найти в индексе 1 все shall и заменить на will
const unit28PartSex = unit27Start.filter(el => el[0].toLowerCase().includes('shall ')
                                            && el[1].toLowerCase().includes('shall ')).map((el) => {
  // Создаём копию подмассива, чтобы не менять исходный
  const newEl = [...el];
  // Заменяем "might" на "may" в нужных строках
  newEl[1] = newEl[1].replace(/shall/g, "will");
  newEl[1] = newEl[1].replace(/Shall/g, "Will");
  newEl[0] = newEl[0].replace(/shall/g, "will");
  newEl[0] = newEl[0].replace(/Shall/g, "Will");
  return newEl;
});

const unit27 = [...unit28PartOne, ...unit28PartTwo, ...unit28PartThree, 
                    ...unit28PartFour, ...unit28PartFive, ...unit28PartSex, ...unit27Start];

    // Если это свойство есть, то оно попадает в заголовок теста
    unit27.nameLeson = "Will / Shall Part One";

    //--созданными предложениями.
    unit27.lengthTrue = 5;

    // расширение числа подмассивов за счёт замены местами нулевого и первого индекса
    unit27.push(...extendForArray(unit27));

    unit27.push(...extendForArray2(unit27));

export { unit27 };