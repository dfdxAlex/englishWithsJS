import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';
import { extending } from './extend/extending.js';

const unit38 = [

[
    "There was a big black dog in the garden yesterday.",
    "It was barking loudly at the postman.",
    "There were many students in the classroom.",
    "There was a delicious cake on the table.",
    "There were three cars in the parking lot.",
    "Вчера в саду была большая чёрная собака.",
    "Вчора в саду був великий чорний собака.",
    "Wczoraj w ogrodzie był duży czarny pies."
  ],
  [
    "There were many people at the football match.",
    "The fans were cheering and singing songs.",
    "There was a small bird on the windowsill.",
    "There were five books on my desk.",
    "There was heavy rain all day long.",
    "На футбольном матче было много людей.",
    "На футбольному матчі було багато людей.",
    "Na meczu piłkarskim było dużo ludzi."
  ],
  [
    "There was a beautiful rainbow in the sky after the rain.",
    "It had all the colors from red to violet.",
    "There were twenty students absent from school.",
    "There was a new shop near the station.",
    "There were two cats sleeping on the chair.",
    "После дождя на небе была красивая радуга.",
    "Після дощу на небі була красива веселка.",
    "Po deszczu na niebie była piękna tęcza."
  ],
  [
    "There was a strange noise coming from the basement.",
    "I was too scared to go down and check.",
    "There were fresh vegetables in the market.",
    "There was a big party at my neighbor's house.",
    "There were many clouds in the sky.",
    "Из подвала доносился странный шум.",
    "З підвалу лунав дивний шум.",
    "Z piwnicy dochodził dziwny hałas."
  ],
  [
    "There were a lot of tourists in the old town last summer.",
    "They were taking photos of every building.",
    "There was only one slice of pizza left.",
    "There were three apples on the plate.",
    "There was a fast train to London.",
    "Прошлым летом в старом городе было много туристов.",
    "Минулого літа в старому місті було багато туристів.",
    "Zeszłego lata w starym mieście było dużo turystów."
  ],
  [
    "There was a huge traffic jam on the main road.",
    "Drivers were honking their horns for hours.",
    "There were beautiful flowers in the park.",
    "There was a nice cafe near the beach.",
    "There were many birds in the tree.",
    "На главной дороге была огромная пробка.",
    "На головній дорозі був величезний затор.",
    "Na głównej drodze był ogromny korek."
  ],
  [
    "There was a letter from my grandmother in the mailbox.",
    "She wrote that she missed me very much.",
    "There were many new houses in the village.",
    "There was a big storm last night.",
    "There were ten candles on the birthday cake.",
    "В почтовом ящике было письмо от бабушки.",
    "У поштовій скриньці був лист від бабусі.",
    "W skrzynce była list od babci."
  ],
  [
    "There were many empty seats in the cinema.",
    "The movie wasn't very popular.",
    "There was a red car parked outside.",
    "There were five glasses on the table.",
    "There was strong wind yesterday.",
    "В кинотеатре было много свободных мест.",
    "У кінотеатрі було багато вільних місць.",
    "W kinie było dużo wolnych miejsc."
  ],
  [
    "There was a delicious smell coming from the kitchen.",
    "My mother was baking an apple pie.",
    "There were many stars in the sky.",
    "There was a big spider in the corner.",
    "There were three dogs running in the park.",
    "Из кухни доносился вкусный запах.",
    "З кухні йшов смачний запах.",
    "Z kuchni dochodził pyszny zapach."
  ],
  [
    "There were dark clouds above the mountains.",
    "It looked like it was going to rain soon.",
    "There was a small kitten under the table.",
    "There were twenty children in the playground.",
    "There was a new phone in the shop.",
    "Над горами были тёмные тучи.",
    "Над горами були темні хмари.",
    "Nad górami były ciemne chmury."
  ],
  [
    "There was a power cut in our building last night.",
    "We had to use candles for three hours.",
    "There were many books in the library.",
    "There was a big fish in the lake.",
    "There were beautiful paintings on the wall.",
    "Вчера вечером в нашем доме отключили свет.",
    "Вчора ввечері в нашому будинку вимкнули світло.",
    "Wczoraj wieczorem w naszym budynku był brak prądu."
  ],
  [
    "There were two policemen standing at the corner.",
    "They were checking people's documents.",
    "There was a nice restaurant nearby.",
    "There were fresh fruits at the market.",
    "There was loud music from the club.",
    "На углу стояли два полицейских.",
    "На розі стояли два поліцейських.",
    "Na rogu stali dwaj policjanci."
  ],
  [
    "There was a small wooden boat on the lake.",
    "A fisherman was sitting quietly inside it.",
    "There were many cars on the highway.",
    "There was a big castle on the hill.",
    "There were ten eggs in the fridge.",
    "На озере была маленькая деревянная лодка.",
    "На озері був маленький дерев'яний човен.",
    "Na jeziorze była mała drewniana łódka."
  ],
  [
    "There were many colorful balloons at the birthday party.",
    "The children were very happy.",
    "There was a tall building in the center.",
    "There were five chairs around the table.",
    "There was hot coffee in the cup.",
    "На дне рождения было много разноцветных шариков.",
    "На дні народження було багато кольорових кульок.",
    "Na urodzinach było dużo kolorowych balonów."
  ],
  [
    "There was thick fog on the road this morning.",
    "We could hardly see anything.",
    "There were beautiful butterflies in the garden.",
    "There was a new supermarket in town.",
    "There were three windows open.",
    "Сегодня утром на дороге был густой туман.",
    "Сьогодні вранці на дорозі був густий туман.",
    "Dziś rano na drodze była gęsta mgła."
  ],
  [
    "There was a broken window in the classroom.",
    "The teacher was very angry.",
    "There were many apples on the tree.",
    "There was a long queue at the bus stop.",
    "There were fresh flowers in the vase.",
    "В классе было разбитое окно.",
    "У класі було розбите вікно.",
    "W klasie było wybite okno."
  ],
  [
    "There were hundreds of stars in the clear night sky.",
    "We lay on the grass and watched them.",
    "There was a big truck on the street.",
    "There were many toys on the floor.",
    "There was cold milk in the bottle.",
    "На ясном ночном небе было сотни звёзд.",
    "На чистому нічному небі було сотні зірок.",
    "Na czystym nocnym niebie było setki gwiazd."
  ],
  [
    "There was a long queue in front of the cinema.",
    "Everyone wanted to see the new movie.",
    "There were dirty dishes in the sink.",
    "There was a fast horse on the farm.",
    "There were ten pencils on the desk.",
    "Перед кинотеатром была длинная очередь.",
    "Перед кінотеатром була довга черга.",
    "Przed kinem była długa kolejka."
  ],
  [
    "There was an old map on the table.",
    "It showed a hidden treasure.",
    "There were many birds flying south.",
    "There was a green door in the house.",
    "There were fresh vegetables in the basket.",
    "На столе лежала старая карта.",
    "На столі лежала стара карта.",
    "Na stole była stara mapa."
  ],
  [
    "There were five big boxes in the hallway.",
    "We didn't know what was inside them.",
    "There was a small bird in the cage.",
    "There were many clouds yesterday.",
    "There was a loud concert in the park.",
    "В коридоре было пять больших коробок.",
    "У коридорі було п'ять великих коробок.",
    "W korytarzu było pięć dużych pudeł."
  ],
  [
    "There was a fire in the old factory last week.",
    "Fortunately no one was hurt.",
    "There were beautiful dresses in the shop.",
    "There was a new computer in the office.",
    "There were twenty students in the group.",
    "На прошлой неделе на старой фабрике был пожар.",
    "Минулого тижня на старій фабриці була пожежа.",
    "W zeszłym tygodniu w starej fabryce był pożar."
  ],
  [
    "There were many ducks on the pond.",
    "They were swimming and making funny noises.",
    "There was a big yellow bus at the stop.",
    "There were three cakes in the bakery.",
    "There was strong coffee on the table.",
    "На пруду было много уток.",
    "На ставку було багато качок.",
    "Na stawie było dużo kaczek."
  ],
  [
    "There was a surprise gift under my pillow.",
    "My sister left it for me.",
    "There were many cars in the parking lot.",
    "There was heavy snow in the mountains.",
    "There were ten chairs in the room.",
    "Под моей подушкой был сюрприз-подарок.",
    "Під моєю подушкою був сюрприз-подарунок.",
    "Pod moją poduszką był niespodziewany prezent."
  ],
  [
    "There was a very important meeting at 9 o'clock.",
    "All managers had to attend.",
    "There were fresh strawberries at the market.",
    "There was loud thunder during the storm.",
    "There were many flowers near the house.",
    "В 9 часов было очень важное собрание.",
    "О 9 годині була дуже важлива зустріч.",
    "O 9 godzinie było bardzo ważne spotkanie."
  ],
  [
    "There were beautiful Christmas lights in the street.",
    "They made the city look magical.",
    "There was a small key in the lock.",
    "There were many books on the shelf.",
    "There was hot chocolate in the cup.",
    "На улице были красивые рождественские огни.",
    "На вулиці були красиві різдвяні вогні.",
    "Na ulicy były piękne świąteczne światła."
  ],
  [
    "There was a loud knock at the door at midnight.",
    "I wondered who it could be.",
    "There were many fish in the river.",
    "There was a red bicycle near the fence.",
    "There were twenty photos on the wall.",
    "В полночь в дверь громко постучали.",
    "Опівночі в двері голосно постукали.",
    "O północy rozległo się głośne pukanie do drzwi."
  ],
  [
    "There were fresh footprints in the snow.",
    "Someone had walked through the garden.",
    "There was a big mirror in the bedroom.",
    "There were many apples in the basket.",
    "There was warm bread on the table.",
    "В снегу были свежие следы.",
    "У снігу були свіжі сліди.",
    "W śniegu były świeże ślady."
  ],
  [
    "There was a small village at the foot of the mountain.",
    "It looked very peaceful.",
    "There were many clouds in the sky.",
    "There was a fast train passing by.",
    "There were five glasses of juice.",
    "У подножия горы была маленькая деревня.",
    "Біля підніжжя гори було маленьке село.",
    "U podnóża góry była mała wioska."
  ],
  [
    "There were a lot of mistakes in his test.",
    "He needed to study more.",
    "There was a white cat on the roof.",
    "There were three windows in the room.",
    "There was cold wind blowing.",
    "В его тесте было много ошибок.",
    "У його тесті було багато помилок.",
    "W jego teście było dużo błędów."
  ],
  [
    "There was a mysterious letter without a sender.",
    "I was afraid to open it.",
    "There were many cars on the highway.",
    "There was a big brown bear in the forest.",
    "There were beautiful roses in the garden.",
    "Пришло загадочное письмо без отправителя.",
    "Прийшов загадковий лист без відправника.",
    "Przyszedł tajemniczy list bez nadawcy."
  ],
  [
    "There has been a big accident on the highway this morning.",
    "Traffic is completely blocked in both directions.",
    "There have been many tourists in the city this year.",
    "There has been heavy rain all week.",
    "There have been three meetings today.",
    "Сегодня утром на шоссе произошло большое ДТП.",
    "Сьогодні вранці на шосе сталася велика аварія.",
    "Dziś rano na autostradzie był duży wypadek."
  ],
  [
    "There have been many changes in our company recently.",
    "Several departments have been reorganized.",
    "There has been a nice cake at the party.",
    "There have been five books on the shelf.",
    "There has been a beautiful rainbow.",
    "В нашей компании недавно произошло много изменений.",
    "В нашій компанії нещодавно було багато змін.",
    "W naszej firmie ostatnio było dużo zmian."
  ],
  [
    "There has been a lot of noise from the neighbors all day.",
    "I couldn't concentrate on my work.",
    "There have been many students in the class.",
    "There has been a small dog in the garden.",
    "There have been fresh apples in the shop.",
    "Весь день от соседей был сильный шум.",
    "Цілий день від сусідів був сильний шум.",
    "Cały dzień od sąsiadów było dużo hałasu."
  ],
  [
    "There have been several strong earthquakes in the region this month.",
    "People are feeling nervous.",
    "There has been a delicious dinner at home.",
    "There have been many flowers in the park.",
    "There has been a new phone in the store.",
    "В этом месяце в регионе произошло несколько сильных землетрясений.",
    "У цьому місяці в регіоні було кілька сильних землетрусів.",
    "W tym miesiącu w regionie było kilka silnych trzęsień ziemi."
  ],
  [
    "There has been no electricity in the village since yesterday.",
    "People are using candles and generators.",
    "There have been many birds in the sky.",
    "There has been a big party downtown.",
    "There have been ten new students.",
    "В деревне нет электричества со вчерашнего дня.",
    "У селі немає електрики з учора.",
    "We wsi nie ma prądu od wczoraj."
  ],
  [
    "There has been a serious problem with the computer system.",
    "The IT team is trying to fix it.",
    "There have been many cars in the parking lot.",
    "There has been warm weather all week.",
    "There have been three letters in the mailbox.",
    "С компьютерной системой возникла серьёзная проблема.",
    "З комп'ютерною системою виникла серйозна проблема.",
    "W systemie komputerowym był poważny problem."
  ],
  [
    "There have been a lot of tourists in Rome this summer.",
    "The hotels are almost fully booked.",
    "There has been a small kitten under the table.",
    "There have been five cakes at the party.",
    "There has been loud music next door.",
    "Этим летом в Риме было очень много туристов.",
    "Цього літа в Римі було дуже багато туристів.",
    "Tego lata w Rzymie było dużo turystów."
  ],
  [
    "There has been heavy rain for three days.",
    "Many roads are flooded.",
    "There have been many good films this year.",
    "There has been a new shop near my house.",
    "There have been twenty people at the meeting.",
    "Уже три дня идут сильные дожди.",
    "Вже три дні йдуть сильні дощі.",
    "Od trzech dni są ulewne deszcze."
  ],
  [
    "There have been several complaints about the new teacher.",
    "The school director is investigating the situation.",
    "There has been a beautiful sunset today.",
    "There have been fresh vegetables in the market.",
    "There has been a fast car on the street.",
    "Поступило несколько жалоб на нового учителя.",
    "Надійшло кілька скарг на нового вчителя.",
    "Było kilka skarg na nowego nauczyciela."
  ],
  [
    "There has been a big increase in prices this year.",
    "People are worried about inflation.",
    "There have been many stars in the sky.",
    "There has been a nice present for me.",
    "There have been three dogs in the park.",
    "В этом году произошло большое повышение цен.",
    "Цього року було велике підвищення цін.",
    "W tym roku był duży wzrost cen."
  ],
  [
    "There has been a fire in the old warehouse.",
    "Firefighters are still working on the scene.",
    "There have been many happy moments this week.",
    "There has been a small bird on the window.",
    "There have been five meetings today.",
    "В старом складе произошёл пожар.",
    "У старому складі сталася пожежа.",
    "W starym magazynie był pożar."
  ],
  [
    "There have been many interesting exhibitions in the museum lately.",
    "I have already visited three of them.",
    "There has been cold wind all morning.",
    "There have been ten new houses in the street.",
    "There has been a big cake on the table.",
    "В последнее время в музее было много интересных выставок.",
    "Останнім часом у музеї було багато цікавих виставок.",
    "Ostatnio w muzeum było dużo interesujących wystaw."
  ],
  [
    "There has been almost no snow this winter.",
    "It feels very unusual.",
    "There have been many children in the playground.",
    "There has been a new car in the garage.",
    "There have been loud noises at night.",
    "Этой зимой почти не было снега.",
    "Цієї зими майже не було снігу.",
    "Tegoroczną zimę prawie nie było śniegu."
  ],
  [
    "There have been several power cuts in our area this week.",
    "It's becoming very annoying.",
    "There has been a beautiful dress in the shop.",
    "There have been fresh fruits on the table.",
    "There has been a long queue.",
    "На этой неделе в нашем районе было несколько отключений света.",
    "На цьому тижні в нашому районі було кілька відключень світла.",
    "W tym tygodniu w naszej okolicy było kilka przerw w dostawie prądu."
  ],
  [
    "There has been a lot of progress in her English.",
    "She can already speak quite well.",
    "There have been many clouds in the sky.",
    "There has been a small key on the floor.",
    "There have been twenty students absent.",
    "В её английском языке заметен большой прогресс.",
    "В її англійській мові помітний великий прогрес.",
    "W jej angielskim był duży postęp."
  ],
  [
    "There has been a lot of construction work near my house recently.",
    "The noise starts every morning at 7 o'clock.",
    "There have been many birds in the garden.",
    "There has been a delicious dinner at home.",
    "There have been five new students in the class.",
    "В последнее время возле моего дома было много строительных работ.",
    "Останнім часом біля мого будинку було багато будівельних робіт.",
    "Ostatnio w pobliżu mojego domu było dużo prac budowlanych."
  ],
  [
    "There have been many new restaurants opened in the city center.",
    "It's becoming a very popular area for dining.",
    "There has been heavy snow in the mountains.",
    "There have been twenty children at the party.",
    "There has been a small problem with the car.",
    "В центре города открылось много новых ресторанов.",
    "У центрі міста відкрилося багато нових ресторанів.",
    "W centrum miasta otwarto wiele nowych restauracji."
  ],
  [
    "There has been a significant decrease in crime rates this year.",
    "The new police program seems to be working.",
    "There have been many flowers in the park.",
    "There has been a big party last weekend.",
    "There have been three meetings today.",
    "В этом году наблюдается значительное снижение уровня преступности.",
    "Цього року спостерігається значне зниження рівня злочинності.",
    "W tym roku nastąpił znaczny spadek przestępczości."
  ],
  [
    "There have been very strong winds all night long.",
    "Several trees have fallen down.",
    "There has been a nice cake on the table.",
    "There have been many tourists on the beach.",
    "There has been fresh bread in the kitchen.",
    "Всю ночь дули очень сильные ветры.",
    "Всю ніч дули дуже сильні вітри.",
    "Przez całą noc wiały bardzo silne wiatry."
  ],
  [
    "There has been a flu outbreak in our school.",
    "Many students are staying at home.",
    "There have been beautiful sunsets this week.",
    "There has been a new shop near the station.",
    "There have been ten books on the shelf.",
    "В нашей школе началась вспышка гриппа.",
    "У нашій школі почався спалах грипу.",
    "W naszej szkole wybuchła epidemia grypy."
  ],
  [
    "There have been major improvements in public transport this year.",
    "Buses and trains are now much more reliable.",
    "There has been a small kitten in the garden.",
    "There have been many clouds in the sky.",
    "There has been loud music from the neighbors.",
    "В этом году произошли значительные улучшения в общественном транспорте.",
    "Цього року відбулися значні покращення в громадському транспорті.",
    "W tym roku nastąpiły duże poprawy w transporcie publicznym."
  ],
  [
    "There has been a leak in the roof since last month.",
    "We need to call a repairman as soon as possible.",
    "There have been five dogs in the park.",
    "There has been a beautiful rainbow today.",
    "There have been many people at the concert.",
    "С прошлого месяца на крыше появилась течь.",
    "З минулого місяця на даху з'явилася теча.",
    "Od zeszłego miesiąca jest przeciek w dachu."
  ],
  [
    "There have been several complaints about the hotel service.",
    "The manager is now trying to solve the problems.",
    "There has been cold weather all week.",
    "There have been fresh vegetables in the market.",
    "There has been a big fire in the city.",
    "Поступило несколько жалоб на обслуживание в отеле.",
    "Надійшло кілька скарг на обслуговування в готелі.",
    "Było kilka skarg na obsługę hotelu."
  ],
  [
    "There has been no news from him for two weeks.",
    "We are starting to get worried.",
    "There have been many stars in the sky.",
    "There has been a long queue at the shop.",
    "There have been twenty students in the group.",
    "От него уже две недели нет никаких новостей.",
    "Від нього вже два тижні немає жодних новин.",
    "Nie ma od niego wiadomości od dwóch tygodni."
  ],
  [
    "There have been many weddings in our town this month.",
    "The local church has been very busy.",
    "There has been a small bird on the windowsill.",
    "There have been heavy rains recently.",
    "There has been a new phone in the store.",
    "В этом месяце в нашем городе было много свадеб.",
    "У цьому місяці в нашому місті було багато весіль.",
    "W tym miesiącu w naszym mieście było dużo ślubów."
  ],
  [
    "There has been serious pollution in the river this summer.",
    "Fish are dying and people can't swim there.",
    "There have been many happy moments this year.",
    "There has been a big truck on the road.",
    "There have been ten candles on the cake.",
    "Этим летом в реке наблюдается серьёзное загрязнение.",
    "Цього літа в річці серйозне забруднення.",
    "Tego lata w rzece jest poważne zanieczyszczenie."
  ],
  [
    "There have been technical problems with the website all day.",
    "The developers are working to fix them.",
    "There has been a nice present for my sister.",
    "There have been fresh fruits on the table.",
    "There has been loud thunder during the storm.",
    "Весь день были технические проблемы с сайтом.",
    "Цілий день були технічні проблеми з сайтом.",
    "Cały dzień były problemy techniczne ze stroną."
  ],
  [
    "There has been a lot of laughter coming from the children's room.",
    "They seem to be having a great time.",
    "There have been many cars in the parking lot.",
    "There has been strong wind outside.",
    "There have been three meetings this morning.",
    "Из детской комнаты доносилось много смеха.",
    "З дитячої кімнати лунало багато сміху.",
    "Z pokoju dzieci dochodziło dużo śmiechu."
  ],
  [
    "There have been many flight delays at the airport today.",
    "Passengers are getting frustrated.",
    "There has been a beautiful dress in the shop window.",
    "There have been twenty people at the party.",
    "There has been hot coffee on the table.",
    "Сегодня в аэропорту много задержек рейсов.",
    "Сьогодні в аеропорту багато затримок рейсів.",
    "Dziś na lotnisku było wiele opóźnień lotów."
  ],
  [
    "There has been a very positive change in his attitude lately.",
    "He has become much more friendly and helpful.",
    "There have been many books in the new library.",
    "There has been a small accident on the street.",
    "There have been fresh flowers in the vase.",
    "В последнее время в его отношении произошла очень позитивная перемена.",
    "Останнім часом в його ставленні відбулася дуже позитивна зміна.",
    "Ostatnio nastąpiła bardzo pozytywna zmiana w jego nastawieniu."
  ],
  [
    "There will be a big festival in the city next month.",
    "Many people are already planning to attend.",
    "There will be heavy rain tomorrow.",
    "There will be a new teacher next year.",
    "There will be many tourists in summer.",
    "В следующем месяце в городе будет большой фестиваль.",
    "Наступного місяця в місті буде великий фестиваль.",
    "W przyszłym miesiącu w mieście będzie duży festiwal."
  ],
  [
    "There will be a lot of traffic on the road tomorrow morning.",
    "We should leave the house earlier.",
    "There will be a beautiful rainbow after the rain.",
    "There will be fresh bread in the morning.",
    "There will be three new students.",
    "Завтра утром на дороге будет много пробок.",
    "Завтра вранці на дорозі буде багато заторів.",
    "Jutro rano na drodze będzie duży ruch."
  ],
  [
    "There will be a important meeting at 10 o'clock tomorrow.",
    "All employees must attend.",
    "There will be many flowers in the garden.",
    "There will be a small dog in the house.",
    "There will be hot weather next week.",
    "Завтра в 10 часов будет важное собрание.",
    "Завтра о 10 годині буде важлива зустріч.",
    "Jutro o 10 będzie ważne spotkanie."
  ],
  [
    "There will be no classes next Friday.",
    "It is a public holiday.",
    "There will be a new shop in the street.",
    "There will be many birds in the sky.",
    "There will be fresh fruit at the market.",
    "В следующую пятницу занятий не будет.",
    "Наступної п'ятниці занять не буде.",
    "W przyszły piątek nie będzie lekcji."
  ],
  [
    "There will be a big storm tonight.",
    "We need to close all the windows.",
    "There will be a nice party next weekend.",
    "There will be many people at the concert.",
    "There will be a long queue at the cinema.",
    "Сегодня ночью будет сильная буря.",
    "Сьогодні вночі буде сильна буря.",
    "Dziś w nocy będzie duża burza."
  ],
  [
    "There will be many new jobs in the technology sector next year.",
    "Young people are very excited about it.",
    "There will be cold weather in winter.",
    "There will be a small kitten in the garden.",
    "There will be five meetings this week.",
    "В следующем году в технологическом секторе появится много новых рабочих мест.",
    "Наступного року в технологічному секторі з'явиться багато нових робочих місць.",
    "W przyszłym roku w sektorze technologicznym będzie dużo nowych miejsc pracy."
  ],
  [
    "There will be a lot of snow in the mountains this weekend.",
    "We can go skiing.",
    "There will be a beautiful sunset today.",
    "There will be fresh vegetables in the shop.",
    "There will be ten students in the group.",
    "В эти выходные в горах будет много снега.",
    "Ці вихідні в горах буде багато снігу.",
    "W ten weekend w górach będzie dużo śniegu."
  ],
  [
    "There will be a new shopping center near our house.",
    "It will open next spring.",
    "There will be many stars in the sky.",
    "There will be a big fire in the forest.",
    "There will be loud music at the party.",
    "Возле нашего дома будет новый торговый центр.",
    "Біля нашого будинку буде новий торговий центр.",
    "W pobliżu naszego domu będzie nowe centrum handlowe."
  ],
  [
    "There will be an English exam at the end of the month.",
    "Students are already preparing for it.",
    "There will be a small bird on the window.",
    "There will be heavy rain all day.",
    "There will be three cakes at the party.",
    "В конце месяца будет экзамен по английскому.",
    "Наприкінці місяця буде іспит з англійської.",
    "Pod koniec miesiąca będzie egzamin z angielskiego."
  ],
  [
    "There will be a lot of guests at the wedding.",
    "We need to order more food.",
    "There will be a new car in the garage.",
    "There will be beautiful flowers in the park.",
    "There will be strong wind tomorrow.",
    "На свадьбе будет много гостей.",
    "На весіллі буде багато гостей.",
    "Na weselu będzie dużo gości."
  ],
  [
    "There will be no internet connection tomorrow morning.",
    "The company is doing maintenance work.",
    "There will be a nice cafe nearby.",
    "There will be many children in the playground.",
    "There will be fresh bread on the table.",
    "Завтра утром не будет интернета.",
    "Завтра вранці не буде інтернету.",
    "Jutro rano nie będzie połączenia z internetem."
  ],
  [
    "There will be a solar eclipse next month.",
    "It will be visible in our country.",
    "There will be a big party tonight.",
    "There will be many tourists here.",
    "There will be five new books.",
    "В следующем месяце будет солнечное затмение.",
    "Наступного місяця буде сонячне затемнення.",
    "W przyszłym miesiącu będzie zaćmienie Słońca."
  ],
  [
    "There will be a charity concert in the park next Saturday.",
    "All money will go to help children.",
    "There will be cold milk in the fridge.",
    "There will be a long queue at the bus stop.",
    "There will be many clouds in the sky.",
    "В следующую субботу в парке будет благотворительный концерт.",
    "Наступної суботи в парку буде благодійний концерт.",
    "W przyszłą sobotę w parku będzie koncert charytatywny."
  ],
  [
    "There will be more electric cars on the roads in the future.",
    "It will help reduce pollution.",
    "There will be a small problem with the computer.",
    "There will be beautiful dresses in the shop.",
    "There will be twenty people at the meeting.",
    "В будущем на дорогах будет больше электромобилей.",
    "У майбутньому на дорогах буде більше електромобілів.",
    "W przyszłości na drogach będzie więcej samochodów elektrycznych."
  ],
  [
    "There will be a surprise for you when you come home.",
    "I think you will like it.",
    "There will be heavy snow next week.",
    "There will be many apples on the tree.",
    "There will be loud thunder tonight.",
    "Когда ты придёшь домой, тебя будет ждать сюрприз.",
    "Коли ти прийдеш додому, тебе чекатиме сюрприз.",
    "Będzie dla ciebie niespodzianka, kiedy wrócisz do domu."
  ],
  [
    "There will be a lot of work to do next week.",
    "We should start preparing today.",
    "There will be a nice restaurant nearby.",
    "There will be fresh flowers in the vase.",
    "There will be three dogs in the garden.",
    "На следующей неделе будет много работы.",
    "На наступному тижні буде багато роботи.",
    "W przyszłym tygodniu będzie dużo pracy."
  ],
  [
    "There will be fireworks at midnight on New Year's Eve.",
    "It will be very beautiful.",
    "There will be a small key on the table.",
    "There will be many books in the library.",
    "There will be hot coffee in the morning.",
    "В новогоднюю ночь в полночь будет фейерверк.",
    "В новорічну ніч опівночі буде феєрверк.",
    "W noc sylwestrową o północy będą fajerwerki."
  ],
  [
    "There will be a new hospital in our district next year.",
    "It will help many local people.",
    "There will be a big truck on the road.",
    "There will be beautiful butterflies in the garden.",
    "There will be ten candles on the cake.",
    "В следующем году в нашем районе будет новая больница.",
    "Наступного року в нашому районі буде нова лікарня.",
    "W przyszłym roku w naszej dzielnicy będzie nowy szpital."
  ],
  [
    "There will be an international conference in Kyiv in October.",
    "Many experts will come from different countries.",
    "There will be a small accident on the street.",
    "There will be fresh strawberries at the market.",
    "There will be loud music from the club.",
    "В октябре в Киеве будет международная конференция.",
    "У жовтні в Києві буде міжнародна конференція.",
    "W październiku w Kijowie będzie międzynarodowa konferencja."
  ],
  [
    "There will be less plastic waste in the future.",
    "People are becoming more environmentally conscious.",
    "There will be a nice present for my friend.",
    "There will be many stars tonight.",
    "There will be strong wind in the mountains.",
    "В будущем будет меньше пластиковых отходов.",
    "У майбутньому буде менше пластикових відходів.",
    "W przyszłości będzie mniej plastikowych odpadów."
  ],
  [
    "There will be a music festival on the beach this summer.",
    "Many famous bands will perform.",
    "There will be a long queue at the airport.",
    "There will be cold weather tomorrow.",
    "There will be twenty students in the class.",
    "Этим летом на пляже будет музыкальный фестиваль.",
    "Цього літа на пляжі буде музичний фестиваль.",
    "Tego lata na plaży będzie festiwal muzyczny."
  ],
  [
    "There will be a parent-teacher meeting next Tuesday.",
    "Parents will discuss student progress.",
    "There will be a big castle on the hill.",
    "There will be many ducks on the pond.",
    "There will be fresh bread in the bakery.",
    "В следующий вторник будет собрание родителей и учителей.",
    "Наступного вівторка буде збори батьків і вчителів.",
    "W przyszły wtorek będzie spotkanie rodziców z nauczycielami."
  ],
  [
    "There will be more online lessons in the future.",
    "It is more convenient for many students.",
    "There will be a beautiful rainbow soon.",
    "There will be five boxes in the hallway.",
    "There will be hot chocolate in the evening.",
    "В будущем будет больше онлайн-уроков.",
    "У майбутньому буде більше онлайн-уроків.",
    "W przyszłości będzie więcej lekcji online."
  ],
  [
    "There will be a national holiday on Monday.",
    "Many shops will be closed.",
    "There will be a small boat on the lake.",
    "There will be many colorful balloons.",
    "There will be a power cut tomorrow.",
    "В понедельник будет государственный праздник.",
    "У понеділок буде державне свято.",
    "W poniedziałek będzie święto narodowe."
  ],
  [
    "There will be a lot of opportunities for young people next year.",
    "They should study hard now.",
    "There will be a mysterious letter tomorrow.",
    "There will be fresh footprints in the snow.",
    "There will be a nice cafe in the park.",
    "В следующем году для молодых людей будет много возможностей.",
    "Наступного року для молодих людей буде багато можливостей.",
    "W przyszłym roku będzie dużo możliwości dla młodych ludzi."
  ],
  [
    "There will be an important football match this weekend.",
    "The whole city is excited.",
    "There will be a broken window in the classroom.",
    "There will be thick fog in the morning.",
    "There will be many empty seats.",
    "В эти выходные будет важный футбольный матч.",
    "Ці вихідні буде важливий футбольний матч.",
    "W ten weekend będzie ważny mecz piłkarski."
  ],
  [
    "There will be a science exhibition at school next week.",
    "Students are preparing their projects.",
    "There will be a letter from grandmother.",
    "There will be a delicious smell from the kitchen.",
    "There will be dark clouds above the mountains.",
    "На следующей неделе в школе будет выставка науки.",
    "Наступного тижня в школі буде виставка науки.",
    "W przyszłym tygodniu w szkole będzie wystawa naukowa."
  ],
  [
    "There will be a price increase for train tickets soon.",
    "It's better to buy them now.",
    "There will be many colorful balloons at the party.",
    "There will be a power cut last night.",
    "There will be two policemen at the corner.",
    "Скоро будет повышение цен на билеты поездов.",
    "Незабаром буде підвищення цін на квитки поїздів.",
    "Wkrótce będzie podwyżka cen biletów kolejowych."
  ],
  [
    "There will be beautiful cherry blossoms in the park next spring.",
    "We should go there together.",
    "There will be a strange noise in the basement.",
    "There will be a long queue in front of the cinema.",
    "There will be an old map on the table.",
    "В следующем году весной в парке будут красивые цветущие вишни.",
    "Наступної весни в парку будуть красиві квітучі вишні.",
    "W przyszłą wiosnę w parku będą piękne kwitnące wiśnie."
  ],
  [
    "There will be a big change in our lives next year.",
    "We are looking forward to it.",
    "There will be fresh footprints in the snow.",
    "There will be many ducks on the pond.",
    "There will be a surprise gift under the pillow.",
    "В следующем году в нашей жизни произойдёт большая перемена.",
    "Наступного року в нашому житті відбудеться велика зміна.",
    "W przyszłym roku będzie duża zmiana w naszym życiu."
  ]

];

// console.log(unit35.length);
// unit35.push(...extending(unit35, "Don't ", "Do not "));
// unit35.push(...extending(unit35, "don't ", "do not "));
// unit35.push(...extending(unit35, "Let's ", "Let us "));
// console.log(unit35.length);

// Если это свойство есть, то оно попадает в заголовок теста
unit38.nameLeson = "There was/were/has/have been/will be";

//--созданными предложениями.
unit38.lengthTrue = 5;

// console.log(unit33.length);

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit38.push(...extendForArray(unit38));

unit38.push(...extendForArray2(unit38));

export { unit38 };


