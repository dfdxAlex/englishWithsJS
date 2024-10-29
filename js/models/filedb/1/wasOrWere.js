const wasOrWere = [
    [
      "was/yesterday/late/I", // перемешанные слова с разделением слешем
      "I was late yesterday", // правильное предложение
      "I were late yesterday", // замена was на were
      "I was yesterday late", // неправильный вариант 1
      "Yesterday was I late", // неправильный вариант 2
      "Я опоздал вчера", // перевод на русский
      "Я запізнився вчора", // перевод на украинский
      "Spóźniłem się wczoraj" // перевод на польский
    ],
    [
      "were/the/concert/they/at", 
      "They were at the concert", 
      "They was at the concert", 
      "They concert were at", 
      "Concert they at were", 
      "Они были на концерте", 
      "Вони були на концерті", 
      "Oni byli na koncercie"
    ],
    [
      "we/at/park/were/the",
      "We were at the park",
      "We was at the park",
      "At we park were the",
      "The were park we at",
      "Мы были в парке",
      "Ми були в парку",
      "Byliśmy w parku"
    ],
    [
      "she/lucky/was/very",
      "She was very lucky",
      "She were very lucky",
      "Very lucky was she",
      "Lucky she very was",
      "Она была очень везучей",
      "Вона була дуже щасливою",
      "Ona była bardzo szczęśliwa"
    ],
    [
      "were/on/time/we",
      "We were on time",
      "We was on time",
      "On time were we",
      "We time were on",
      "Мы были вовремя",
      "Ми були вчасно",
      "Byliśmy na czas"
    ],
    [
      "meeting/he/was/at/the",
      "He was at the meeting",
      "He were at the meeting",
      "At meeting was he the",
      "Meeting the was at he",
      "Он был на встрече",
      "Він був на зустрічі",
      "Był na spotkaniu"
    ],
    [
      "trip/she/was/on/a",
      "She was on a trip",
      "She were on a trip",
      "On trip a she was",
      "Was trip a on she",
      "Она была в поездке",
      "Вона була в поїздці",
      "Ona była na wycieczce"
    ],
    [
      "was/very/fun/it",
      "It was very fun",
      "It were very fun",
      "Very fun was it",
      "Fun very was it",
      "Это было очень весело",
      "Це було дуже весело",
      "To było bardzo zabawne"
    ],
    [
      "weather/was/great/the",
      "The weather was great",
      "The weather were great",
      "Weather the great was",
      "Great the weather was",
      "Погода была отличная",
      "Погода була чудова",
      "Pogoda była świetna"
    ],
    [
      "were/they/happy",
      "They were happy",
      "They was happy",
      "Happy they were",
      "Were happy they",
      "Они были счастливы",
      "Вони були щасливі",
      "Byli szczęśliwi"
    ],
    [
        "was/cold/it/very",
        "It was very cold",
        "It were very cold",
        "Cold very was it",
        "Very it was cold",
        "Было очень холодно",
        "Було дуже холодно",
        "Było bardzo zimno"
      ],
      [
        "were/on/vacation/they",
        "They were on vacation",
        "They was on vacation",
        "Vacation they were on",
        "On vacation they were",
        "Они были в отпуске",
        "Вони були у відпустці",
        "Byli na wakacjach"
      ],
      [
        "was/birthday/her/yesterday",
        "Yesterday was her birthday",
        "Yesterday were her birthday",
        "Birthday yesterday was her",
        "Her was birthday yesterday",
        "Вчера был её день рождения",
        "Вчора був її день народження",
        "Wczoraj były jej urodziny"
      ],
      [
        "were/the/movies/at/we",
        "We were at the movies",
        "We was at the movies",
        "Movies we were at",
        "At movies were we",
        "Мы были в кино",
        "Ми були в кіно",
        "Byliśmy w kinie"
      ],
      [
        "was/fun/it/so/much",
        "It was so much fun",
        "It were so much fun",
        "Fun much so it was",
        "Was fun it so much",
        "Это было очень весело",
        "Це було дуже весело",
        "To było bardzo fajne"
      ],
      [
        "were/you/home/at",
        "You were at home",
        "You was at home",
        "Home you were at",
        "At home you were",
        "Ты был дома",
        "Ти був вдома",
        "Byłeś w domu"
      ],
      [
        "was/dinner/delicious/the",
        "The dinner was delicious",
        "The dinner were delicious",
        "Delicious dinner was the",
        "Dinner the delicious was",
        "Ужин был вкусным",
        "Вечеря була смачною",
        "Kolacja była pyszna"
      ],
      [
        "were/they/outside",
        "They were outside",
        "They was outside",
        "Outside were they",
        "They outside were",
        "Они были снаружи",
        "Вони були надворі",
        "Byli na zewnątrz"
      ],
      [
        "was/the/sunset/beautiful",
        "The sunset was beautiful",
        "The sunset were beautiful",
        "Sunset beautiful the was",
        "Beautiful was the sunset",
        "Закат был красивым",
        "Захід сонця був красивим",
        "Zachód słońca był piękny"
      ],
      [
        "were/friends/my/there",
        "My friends were there",
        "My friends was there",
        "There friends were my",
        "Were there friends my",
        "Мои друзья были там",
        "Мої друзі були там",
        "Moi przyjaciele byli tam"
      ],
      [
        "was/the/exam/difficult",
        "The exam was difficult",
        "The exam were difficult",
        "Difficult the exam was",
        "Exam the was difficult",
        "Экзамен был сложным",
        "Іспит був складним",
        "Egzamin był trudny"
      ],
      [
        "were/at/the/mall/we",
        "We were at the mall",
        "We was at the mall",
        "Mall we were at the",
        "The mall we were at",
        "Мы были в торговом центре",
        "Ми були в торговому центрі",
        "Byliśmy w galerii handlowej"
      ],
      [
        "was/dog/happy/the",
        "The dog was happy",
        "The dog were happy",
        "Happy dog was the",
        "Was happy the dog",
        "Собака была счастлива",
        "Собака була щаслива",
        "Pies był szczęśliwy"
      ],
      [
        "were/on/time/they",
        "They were on time",
        "They was on time",
        "Time on were they",
        "On time they were",
        "Они были вовремя",
        "Вони були вчасно",
        "Byli na czas"
      ],
      [
        "was/the/meeting/short",
        "The meeting was short",
        "The meeting were short",
        "Short meeting the was",
        "Was short meeting the",
        "Встреча была короткой",
        "Зустріч була короткою",
        "Spotkanie było krótkie"
      ],
      [
        "was/day/the/long",
        "The day was long",
        "The day were long",
        "Long day the was",
        "Was day long the",
        "День был долгим",
        "День був довгим",
        "Dzień był długi"
      ],
      [
        "were/at/we/park/the",
        "We were at the park",
        "We was at the park",
        "Park we were at",
        "The were park we at",
        "Мы были в парке",
        "Ми були в парку",
        "Byliśmy w parku"
      ],
      [
        "was/afternoon/the/sunny",
        "The afternoon was sunny",
        "The afternoon were sunny",
        "Sunny afternoon was the",
        "Afternoon the sunny was",
        "День был солнечный",
        "День був сонячним",
        "Popołudnie było słoneczne"
      ],
      [
        "were/they/at/hotel/the",
        "They were at the hotel",
        "They was at the hotel",
        "At the hotel they were",
        "They were hotel at the",
        "Они были в отеле",
        "Вони були в готелі",
        "Byli w hotelu"
      ],
      [
        "was/class/tough/the",
        "The class was tough",
        "The class were tough",
        "Class tough was the",
        "Tough the was class",
        "Класс был тяжелым",
        "Клас був важким",
        "Klasa była trudna"
      ],
      [
        "was/breakfast/delicious/the",
        "The breakfast was delicious",
        "The breakfast were delicious",
        "Breakfast the delicious was",
        "Delicious was the breakfast",
        "Завтрак был вкусным",
        "Сніданок був смачним",
        "Śniadanie było pyszne"
      ],
      [
        "were/out/they/of/town",
        "They were out of town",
        "They was out of town",
        "Out they were of town",
        "Town of were out they",
        "Они были за городом",
        "Вони були за містом",
        "Byli poza miastem"
      ],
      [
        "was/party/the/fun",
        "The party was fun",
        "The party were fun",
        "Party the fun was",
        "Was the fun party",
        "Вечеринка была весёлой",
        "Вечірка була веселою",
        "Impreza była zabawna"
      ],
      [
        "were/their/plans/canceled",
        "Their plans were canceled",
        "Their plans was canceled",
        "Plans canceled their were",
        "Canceled their were plans",
        "Их планы были отменены",
        "Їхні плани були скасовані",
        "Ich plany zostały odwołane"
      ],
      [
        "was/his/smile/warm",
        "His smile was warm",
        "His smile were warm",
        "Warm his smile was",
        "Smile warm his was",
        "Его улыбка была тёплой",
        "Його посмішка була теплою",
        "Jego uśmiech był ciepły"
      ],
      [
        "were/they/excited",
        "They were excited",
        "They was excited",
        "Excited they were",
        "Were they excited",
        "Они были взволнованы",
        "Вони були схвильовані",
        "Byli podekscytowani"
      ],
      [
        "was/his/idea/brilliant",
        "His idea was brilliant",
        "His idea were brilliant",
        "Idea brilliant his was",
        "Brilliant was his idea",
        "Его идея была блестящей",
        "Його ідея була блискучою",
        "Jego pomysł był genialny"
      ],
      [
        "were/students/the/in/class",
        "The students were in class",
        "The students was in class",
        "Class in were the students",
        "Students in the class were",
        "Студенты были в классе",
        "Студенти були в класі",
        "Uczniowie byli w klasie"
      ],
      [
        "was/flower/the/beautiful",
        "The flower was beautiful",
        "The flower were beautiful",
        "Flower was beautiful the",
        "Was beautiful the flower",
        "Цветок был красивым",
        "Квітка була красивою",
        "Kwiat był piękny"
      ],
      [
        "were/they/siblings",
        "They were siblings",
        "They was siblings",
        "Siblings they were",
        "Were they siblings",
        "Они были братьями и сестрами",
        "Вони були братами і сестрами",
        "Byli rodzeństwem"
      ],
      [
        "was/music/the/soothing",
        "The music was soothing",
        "The music were soothing",
        "Music soothing was the",
        "The soothing music was",
        "Музыка была успокаивающей",
        "Музика була заспокійливою",
        "Muzyka była kojąca"
      ],
      [
        "were/friends/his/supportive",
        "His friends were supportive",
        "His friends was supportive",
        "Supportive friends his were",
        "Friends were supportive his",
        "Его друзья поддерживали",
        "Його друзі підтримували",
        "Jego przyjaciele byli wspierający"
      ],
      [
        "was/teacher/the/helpful",
        "The teacher was helpful",
        "The teacher were helpful",
        "Teacher helpful was the",
        "Helpful teacher was the",
        "Учитель был полезен",
        "Учитель був корисний",
        "Nauczyciel był pomocny"
      ],
      [
        "were/they/late/again",
        "They were late again",
        "They was late again",
        "Late were again they",
        "They again were late",
        "Они снова опоздали",
        "Вони знову запізнилися",
        "Znowu się spóźnili"
      ],
      [
        "was/sky/the/clear",
        "The sky was clear",
        "The sky were clear",
        "Clear sky the was",
        "Was clear the sky",
        "Небо было ясным",
        "Небо було ясним",
        "Niebo było czyste"
      ],
      [
        "were/they/near/lake/the",
        "They were near the lake",
        "They was near the lake",
        "Near lake the were they",
        "They lake near were the",
        "Они были возле озера",
        "Вони були біля озера",
        "Byli blisko jeziora"
      ],
      [
        "was/lunch/good/the",
        "The lunch was good",
        "The lunch were good",
        "Lunch the good was",
        "Good was the lunch",
        "Обед был вкусным",
        "Обід був смачним",
        "Obiad był smaczny"
      ],
      [
        "were/the/roads/clear",
        "The roads were clear",
        "The roads was clear",
        "Roads clear were the",
        "Clear the were roads",
        "Дороги были чистыми",
        "Дороги були чистими",
        "Drogi były czyste"
      ],
      [
        "was/holiday/relaxing/the",
        "The holiday was relaxing",
        "The holiday were relaxing",
        "Holiday relaxing was the",
        "The relaxing holiday was",
        "Отпуск был расслабляющим",
        "Відпустка була розслабляючою",
        "Wakacje były relaksujące"
      ],
      [
        "were/friends/his/honest",
        "His friends were honest",
        "His friends was honest",
        "Friends were honest his",
        "Honest were friends his",
        "Его друзья были честными",
        "Його друзі були чесними",
        "Jego przyjaciele byli szczerzy"
      ],
      [
        "not/was/weather/cold/the",
        "The weather was not cold",
        "The weather were not cold",
        "Weather not was cold the",
        "Not cold was the weather",
        "Погода не была холодной",
        "Погода не була холодною",
        "Pogoda nie była zimna"
      ],
      [
        "not/were/friends/helpful/my",
        "My friends were not helpful",
        "My friends was not helpful",
        "Helpful not my friends were",
        "Friends were not my helpful",
        "Мои друзья не были полезными",
        "Мої друзі не були корисними",
        "Moi przyjaciele nie byli pomocni"
      ],
      [
        "was/not/meeting/interesting/the",
        "The meeting was not interesting",
        "The meeting were not interesting",
        "Meeting the was interesting not",
        "Not was interesting the meeting",
        "Встреча не была интересной",
        "Зустріч не була цікавою",
        "Spotkanie nie było interesujące"
      ],
      [
        "were/not/lights/on/the",
        "The lights were not on",
        "The lights was not on",
        "Lights not on were the",
        "Not lights the were on",
        "Огни не горели",
        "Вогні не були увімкнені",
        "Światła nie były włączone"
      ],
      [
        "was/not/movie/the/scary",
        "The movie was not scary",
        "The movie were not scary",
        "Movie was the not scary",
        "Scary movie was not the",
        "Фильм не был страшным",
        "Фільм не був страшним",
        "Film nie był straszny"
      ],
      [
        "not/were/games/fun/the",
        "The games were not fun",
        "The games was not fun",
        "Games the not were fun",
        "Fun the were games not",
        "Игры не были весёлыми",
        "Ігри не були веселими",
        "Gry nie były zabawne"
      ],
      [
        "was/not/show/impressive/the",
        "The show was not impressive",
        "The show were not impressive",
        "Show impressive the not was",
        "Not impressive was the show",
        "Шоу не было впечатляющим",
        "Шоу не було вражаючим",
        "Przedstawienie nie było imponujące"
      ],
      [
        "not/were/they/at/home",
        "They were not at home",
        "They was not at home",
        "Home at were not they",
        "Not were they at home",
        "Они не были дома",
        "Вони не були вдома",
        "Nie byli w domu"
      ],
      [
        "was/not/food/tasty/the",
        "The food was not tasty",
        "The food were not tasty",
        "Tasty food was the not",
        "Food the was tasty not",
        "Еда не была вкусной",
        "Їжа не була смачною",
        "Jedzenie nie było smaczne"
      ],
      [
        "not/were/students/ready/the",
        "The students were not ready",
        "The students was not ready",
        "Students not were ready the",
        "Not ready the were students",
        "Студенты не были готовы",
        "Студенти не були готові",
        "Uczniowie nie byli gotowi"
      ],
      [
        "not/was/book/interesting/the",
        "The book was not interesting",
        "The book were not interesting",
        "Book interesting the not was",
        "Not the book was interesting",
        "Книга не была интересной",
        "Книга не була цікавою",
        "Książka nie była interesująca"
      ],
      [
        "not/were/people/happy/the",
        "The people were not happy",
        "The people was not happy",
        "People not happy were the",
        "Not were the people happy",
        "Люди не были счастливы",
        "Люди не були щасливі",
        "Ludzie nie byli szczęśliwi"
      ],
      [
        "not/was/sky/clear/the",
        "The sky was not clear",
        "The sky were not clear",
        "Sky clear the was not",
        "Not clear the sky was",
        "Небо не было ясным",
        "Небо не було ясним",
        "Niebo nie było czyste"
      ],
      [
        "were/not/birds/singing/the",
        "The birds were not singing",
        "The birds was not singing",
        "Birds singing not were the",
        "Not the singing were birds",
        "Птицы не пели",
        "Птахи не співали",
        "Ptaki nie śpiewały"
      ],
      [
        "not/was/movie/good/the",
        "The movie was not good",
        "The movie were not good",
        "Movie good the not was",
        "Not was good the movie",
        "Фильм не был хорошим",
        "Фільм не був гарним",
        "Film nie był dobry"
      ],
      [
        "were/not/kids/awake/the",
        "The kids were not awake",
        "The kids was not awake",
        "Kids awake not were the",
        "Not awake were the kids",
        "Дети не были бодры",
        "Діти не були бадьорі",
        "Dzieci nie były obudzone"
      ],
      [
        "not/was/coffee/hot/the",
        "The coffee was not hot",
        "The coffee were not hot",
        "Coffee hot was the not",
        "Hot the was coffee not",
        "Кофе не был горячим",
        "Кава не була гарячою",
        "Kawa nie była gorąca"
      ],
      [
        "were/not/clouds/in/sky/the",
        "The clouds were not in the sky",
        "The clouds was not in the sky",
        "Clouds the not were sky in",
        "Not were the clouds in sky",
        "В небе не было облаков",
        "У небі не було хмар",
        "Niebo nie było zachmurzone"
      ],
      [
        "not/was/train/late/the",
        "The train was not late",
        "The train were not late",
        "Train not was late the",
        "Not late was train the",
        "Поезд не опоздал",
        "Потяг не запізнився",
        "Pociąg nie był spóźniony"
      ],
      [
        "not/were/friends/angry/my",
        "My friends were not angry",
        "My friends was not angry",
        "Friends not my were angry",
        "Not angry were friends my",
        "Мои друзья не были злы",
        "Мої друзі не були злі",
        "Moi przyjaciele nie byli źli"
      ],
      [
        "was/not/milk/fresh/the",
        "The milk was not fresh",
        "The milk were not fresh",
        "Milk fresh not was the",
        "Not was milk fresh the",
        "Молоко не было свежим",
        "Молоко не було свіжим",
        "Mleko nie było świeże"
      ],
      [
        "not/were/trees/green/the",
        "The trees were not green",
        "The trees was not green",
        "Trees green not were the",
        "Not green were trees the",
        "Деревья не были зелёными",
        "Дерева не були зеленими",
        "Drzewa nie były zielone"
      ],
      [
        "was/not/dinner/ready/the",
        "The dinner was not ready",
        "The dinner were not ready",
        "Dinner ready was the not",
        "Not dinner ready was the",
        "Ужин не был готов",
        "Вечеря не була готова",
        "Kolacja nie była gotowa"
      ],
      [
        "not/were/they/in/time",
        "They were not in time",
        "They was not in time",
        "In time were they not",
        "Not they were in time",
        "Они не успели вовремя",
        "Вони не встигли вчасно",
        "Nie zdążyli na czas"
      ],
      [
        "was/not/cake/sweet/the",
        "The cake was not sweet",
        "The cake were not sweet",
        "Cake not was sweet the",
        "Not the cake sweet was",
        "Торт не был сладким",
        "Торт не був солодким",
        "Ciasto nie było słodkie"
      ],
      [
        "not/were/plans/clear/their",
        "Their plans were not clear",
        "Their plans was not clear",
        "Plans not their clear were",
        "Clear were not plans their",
        "Их планы не были ясными",
        "Їхні плани не були ясними",
        "Ich plany nie były jasne"
      ],
      [
        "not/was/house/warm/the",
        "The house was not warm",
        "The house were not warm",
        "House not warm was the",
        "Not was warm the house",
        "Дом не был тёплым",
        "Будинок не був теплим",
        "Dom nie był ciepły"
      ],
      [
        "not/were/pets/calm/their",
        "Their pets were not calm",
        "Their pets was not calm",
        "Pets calm not were their",
        "Not calm their were pets",
        "Их питомцы не были спокойными",
        "Їхні улюбленці не були спокійними",
        "Ich zwierzęta nie były spokojne"
      ],
      [
        "not/was/car/clean/the",
        "The car was not clean",
        "The car were not clean",
        "Car clean was the not",
        "Not clean car the was",
        "Машина не была чистой",
        "Машина не була чистою",
        "Samochód nie był czysty"
      ],
      [
        "were/not/kids/hungry/the",
        "The kids were not hungry",
        "The kids was not hungry",
        "Kids hungry were not the",
        "Not hungry kids the were",
        "Дети не были голодными",
        "Діти не були голодними",
        "Dzieci nie były głodne"
      ],
      [
        "not/was/rain/heavy/the",
        "The rain was not heavy",
        "The rain were not heavy",
        "Rain heavy was the not",
        "Not heavy was rain the",
        "Дождь не был сильным",
        "Дощ не був сильним",
        "Deszcz nie był intensywny"
      ],
      [
        "not/were/flowers/in/garden/the",
        "The flowers were not in the garden",
        "The flowers was not in the garden",
        "Flowers not in were the garden",
        "Not garden the flowers were in",
        "Цветы не были в саду",
        "Квіти не були в саду",
        "Kwiaty nie były w ogrodzie"
      ],
      [
      "was/the/weather/cold?",
      "Was the weather cold?",
      "Were the weather cold?",
      "The weather was cold?",
      "Cold was the weather?",
      "Погода была холодной?",
      "Погода була холодною?",
      "Czy pogoda była zimna?"
    ],
    [
      "were/the/friends/helpful?",
      "Were the friends helpful?",
      "Was the friends helpful?",
      "The friends were helpful?",
      "Helpful were the friends?",
      "Друзья были полезными?",
      "Друзі були корисними?",
      "Czy przyjaciele byli pomocni?"
    ],
    [
      "was/the/meeting/interesting?",
      "Was the meeting interesting?",
      "Were the meeting interesting?",
      "The meeting was interesting?",
      "Interesting was the meeting?",
      "Встреча была интересной?",
      "Зустріч була цікавою?",
      "Czy spotkanie było interesujące?"
    ],
    [
      "were/the/lights/on?",
      "Were the lights on?",
      "Was the lights on?",
      "The lights were on?",
      "On were the lights?",
      "Огни горели?",
      "Вогні горіли?",
      "Czy światła były włączone?"
    ],
    [
      "was/the/movie/scary?",
      "Was the movie scary?",
      "Were the movie scary?",
      "The movie was scary?",
      "Scary was the movie?",
      "Фильм был страшным?",
      "Фільм був страшним?",
      "Czy film był straszny?"
    ],
    [
      "were/the/games/fun?",
      "Were the games fun?",
      "Was the games fun?",
      "The games were fun?",
      "Fun were the games?",
      "Игры были весёлыми?",
      "Ігри були веселими?",
      "Czy gry były zabawne?"
    ],
    [
      "was/the/show/impressive?",
      "Was the show impressive?",
      "Were the show impressive?",
      "The show was impressive?",
      "Impressive was the show?",
      "Шоу было впечатляющим?",
      "Шоу було вражаючим?",
      "Czy przedstawienie było imponujące?"
    ],
    [
      "were/they/home?",
      "Were they at home?",
      "Was they at home?",
      "They were at home?",
      "At home were they?",
      "Они были дома?",
      "Вони були вдома?",
      "Czy oni byli w domu?"
    ],
    [
      "was/the/food/tasty?",
      "Was the food tasty?",
      "Were the food tasty?",
      "The food was tasty?",
      "Tasty was the food?",
      "Еда была вкусной?",
      "Їжа була смачною?",
      "Czy jedzenie było smaczne?"
    ],
    [
      "were/the/students/ready?",
      "Were the students ready?",
      "Was the students ready?",
      "The students were ready?",
      "Ready were the students?",
      "Студенты были готовы?",
      "Студенти були готові?",
      "Czy uczniowie byli gotowi?"
    ],
    [
    "were/the/friends/happy?",
    "Were the friends happy?",
    "Was the friends happy?",
    "The friends were happy?",
    "Happy were the friends?",
    "Друзья были счастливыми?",
    "Друзі були щасливими?",
    "Czy przyjaciele byli szczęśliwi?"
  ],
  [
    "was/the/event/successful?",
    "Was the event successful?",
    "Were the event successful?",
    "The event was successful?",
    "Successful was the event?",
    "Мероприятие прошло успешно?",
    "Захід пройшов успішно?",
    "Czy wydarzenie było udane?"
  ],
  [
    "were/the/pictures/beautiful?",
    "Were the pictures beautiful?",
    "Was the pictures beautiful?",
    "The pictures were beautiful?",
    "Beautiful were the pictures?",
    "Картины были красивыми?",
    "Картини були красивими?",
    "Czy zdjęcia były piękne?"
  ],
  [
    "was/the/baby/sleeping?",
    "Was the baby sleeping?",
    "Were the baby sleeping?",
    "The baby was sleeping?",
    "Sleeping was the baby?",
    "Младенец спал?",
    "Малюк спав?",
    "Czy dziecko spało?"
  ],
  [
    "were/the/family/there?",
    "Were the family there?",
    "Was the family there?",
    "The family were there?",
    "There were the family?",
    "Семья была там?",
    "Сім'я була там?",
    "Czy rodzina była tam?"
  ],
  [
    "was/the/lecture/informative?",
    "Was the lecture informative?",
    "Were the lecture informative?",
    "The lecture was informative?",
    "Informative was the lecture?",
    "Лекция была информативной?",
    "Лекція була інформативною?",
    "Czy wykład był informacyjny?"
  ],
  [
    "were/the/facilities/clean?",
    "Were the facilities clean?",
    "Was the facilities clean?",
    "The facilities were clean?",
    "Clean were the facilities?",
    "Помещения были чистыми?",
    "Приміщення були чистими?",
    "Czy obiekty były czyste?"
  ],
  [
    "was/the/music/loud?",
    "Was the music loud?",
    "Were the music loud?",
    "The music was loud?",
    "Loud was the music?",
    "Музыка была громкой?",
    "Музика була гучною?",
    "Czy muzyka była głośna?"
  ],
  [
    "were/the/children/playing?",
    "Were the children playing?",
    "Was the children playing?",
    "The children were playing?",
    "Playing were the children?",
    "Дети играли?",
    "Діти грали?",
    "Czy dzieci bawiły się?"
  ],
  [
    "was/the/sunset/beautiful?",
    "Was the sunset beautiful?",
    "Were the sunset beautiful?",
    "The sunset was beautiful?",
    "Beautiful was the sunset?",
    "Закат был красивым?",
    "Захід сонця був красивим?",
    "Czy zachód słońca był piękny?"
  ],
  [
    "were/the/answers/clear?",
    "Were the answers clear?",
    "Was the answers clear?",
    "The answers were clear?",
    "Clear were the answers?",
    "Ответы были ясными?",
    "Відповіді були зрозумілими?",
    "Czy odpowiedzi były jasne?"
  ],
  [
    "was/the/walk/refreshing?",
    "Was the walk refreshing?",
    "Were the walk refreshing?",
    "The walk was refreshing?",
    "Refreshing was the walk?",
    "Прогулка была освежающей?",
    "Прогулянка була освіжаючою?",
    "Czy spacer był odświeżający?"
  ],
  [
    "were/the/conversations/interesting?",
    "Were the conversations interesting?",
    "Was the conversations interesting?",
    "The conversations were interesting?",
    "Interesting were the conversations?",
    "Разговоры были интересными?",
    "Розмови були цікавими?",
    "Czy rozmowy były interesujące?"
  ],
  [
    "was/the/plan/feasible?",
    "Was the plan feasible?",
    "Were the plan feasible?",
    "The plan was feasible?",
    "Feasible was the plan?",
    "План был осуществимым?",
    "План був здійсненним?",
    "Czy plan był wykonalny?"
  ],
  [
    "were/the/meetings/productive?",
    "Were the meetings productive?",
    "Was the meetings productive?",
    "The meetings were productive?",
    "Productive were the meetings?",
    "Встречи были продуктивными?",
    "Зустрічі були продуктивними?",
    "Czy spotkania były produktywne?"
  ],
  [
    "was/the/website/user-friendly?",
    "Was the website user-friendly?",
    "Were the website user-friendly?",
    "The website was user-friendly?",
    "User-friendly was the website?",
    "Сайт был удобным?",
    "Сайт був зручним?",
    "Czy strona była przyjazna dla użytkownika?"
  ],
  [
    "were/the/prices/reasonable?",
    "Were the prices reasonable?",
    "Was the prices reasonable?",
    "The prices were reasonable?",
    "Reasonable were the prices?",
    "Цены были разумными?",
    "Ціни були розумними?",
    "Czy ceny były rozsądne?"
  ],
  [
    "was/the/morning/busy?",
    "Was the morning busy?",
    "Were the morning busy?",
    "The morning was busy?",
    "Busy was the morning?",
    "Утро было загруженным?",
    "Ранок був зайнятим?",
    "Czy poranek był zajęty?"
  ],
  [
    "were/the/notes/helpful?",
    "Were the notes helpful?",
    "Was the notes helpful?",
    "The notes were helpful?",
    "Helpful were the notes?",
    "Записи были полезными?",
    "Записи були корисними?",
    "Czy notatki były pomocne?"
  ],
  [
    "was/the/trip/long?",
    "Was the trip long?",
    "Were the trip long?",
    "The trip was long?",
    "Long was the trip?",
    "Поездка была долгой?",
    "Поїздка була довгою?",
    "Czy podróż była długa?"
  ],
  [
    "were/the/employees/happy?",
    "Were the employees happy?",
    "Was the employees happy?",
    "The employees were happy?",
    "Happy were the employees?",
    "Сотрудники были счастливыми?",
    "Співробітники були щасливими?",
    "Czy pracownicy byli szczęśliwi?"
  ],
  [
    "was/the/traffic/bad?",
    "Was the traffic bad?",
    "Were the traffic bad?",
    "The traffic was bad?",
    "Bad was the traffic?",
    "Движение было плохим?",
    "Рух був поганим?",
    "Czy ruch był zły?"
  ],
  [
    "were/the/animals/active?",
    "Were the animals active?",
    "Was the animals active?",
    "The animals were active?",
    "Active were the animals?",
    "Животные были активными?",
    "Тварини були активними?",
    "Czy zwierzęta były aktywne?"
  ],
  [
    "was/the/solution/effective?",
    "Was the solution effective?",
    "Were the solution effective?",
    "The solution was effective?",
    "Effective was the solution?",
    "Решение было эффективным?",
    "Рішення було ефективним?",
    "Czy rozwiązanie było skuteczne?"
  ],
  [
    "were/the/clients/satisfied?",
    "Were the clients satisfied?",
    "Was the clients satisfied?",
    "The clients were satisfied?",
    "Satisfied were the clients?",
    "Клиенты были довольны?",
    "Клієнти були задоволені?",
    "Czy klienci byli zadowoleni?"
  ],
  [
    "was/the/rain/expected?",
    "Was the rain expected?",
    "Were the rain expected?",
    "The rain was expected?",
    "Expected was the rain?",
    "Дождь ожидался?",
    "Дощ очікувався?",
    "Czy deszcz był spodziewany?"
  ],
  [
    "were/the/phones/charged?",
    "Were the phones charged?",
    "Was the phones charged?",
    "The phones were charged?",
    "Charged were the phones?",
    "Телефоны были заряжены?",
    "Телефони були заряджені?",
    "Czy telefony były naładowane?"
  ],
  [
    "The weather was nice.",
    "Was the weather nice?",
    "Were the weather nice?",
    "Was the nice weather?",
    "Were nice the weather?",
    "Погода была хорошей.",
    "Погода була хорошою.",
    "Pogoda była ładna."
  ],
  [
    "The students were not paying attention.",
    "Were the students not paying attention?",
    "Was the students not paying attention?",
    "Students were not paying attention?",
    "Not paying attention were the students?",
    "Студенты не обращали внимания.",
    "Студенти не звертали уваги.",
    "Studenci nie zwracali uwagi."
  ],
  [
    "The cake was delicious.",
    "Was the cake delicious?",
    "Were the cake delicious?",
    "Was the delicious cake?",
    "Were delicious the cake?",
    "Торт был вкусным.",
    "Торт був смачним.",
    "Ciasto było pyszne."
  ],
  [
    "The meeting was not successful.",
    "Was the meeting not successful?",
    "Were the meeting not successful?",
    "Meeting was not successful?",
    "Not successful was the meeting?",
    "Встреча не была успешной.",
    "Зустріч не була успішною.",
    "Spotkanie nie było udane."
  ],
  [
    "The movie was interesting.",
    "Was the movie interesting?",
    "Were the movie interesting?",
    "Was the interesting movie?",
    "Were interesting the movie?",
    "Фильм был интересным.",
    "Фільм був цікавим.",
    "Film był interesujący."
  ],
  [
    "The project was not completed on time.",
    "Was the project not completed on time?",
    "Were the project not completed on time?",
    "Project was not completed on time?",
    "Not completed on time was the project?",
    "Проект не был завершён вовремя.",
    "Проект не був завершений вчасно.",
    "Projekt nie został ukończony na czas."
  ],
  [
    "The flowers were blooming.",
    "Were the flowers blooming?",
    "Was the flowers blooming?",
    "Blooming were the flowers?",
    "Were blooming the flowers?",
    "Цветы цвели.",
    "Квіти цвіли.",
    "Kwiaty kwitły."
  ],
  [
    "The homework was not difficult.",
    "Was the homework not difficult?",
    "Were the homework not difficult?",
    "Homework was not difficult?",
    "Not difficult was the homework?",
    "Домашняя работа не была сложной.",
    "Домашнє завдання не було складним.",
    "Praca domowa nie była trudna."
  ],
  [
    "The concert was amazing.",
    "Was the concert amazing?",
    "Were the concert amazing?",
    "Was the amazing concert?",
    "Were amazing the concert?",
    "Концерт был потрясающим.",
    "Концерт був дивовижним.",
    "Koncert był niesamowity."
  ],
  [
    "The car was not working.",
    "Was the car not working?",
    "Were the car not working?",
    "Car was not working?",
    "Not working was the car?",
    "Машина не работала.",
    "Автомобіль не працював.",
    "Samochód nie działał."
  ],
  [
    "The food was tasty.",
    "Was the food tasty?",
    "Were the food tasty?",
    "Was the tasty food?",
    "Were tasty the food?",
    "Еда была вкусной.",
    "Їжа була смачною.",
    "Jedzenie było smaczne."
  ],
  [
    "The results were surprising.",
    "Were the results surprising?",
    "Was the results surprising?",
    "Surprising were the results?",
    "Were surprising the results?",
    "Результаты были неожиданными.",
    "Результати були несподіваними.",
    "Wyniki były zaskakujące."
  ],
  [
    "The coffee was hot.",
    "Was the coffee hot?",
    "Were the coffee hot?",
    "Was the hot coffee?",
    "Were hot the coffee?",
    "Кофе был горячим.",
    "Кава була гарячою.",
    "Kawa była gorąca."
  ],
  [
    "The books were interesting.",
    "Were the books interesting?",
    "Was the books interesting?",
    "Interesting were the books?",
    "Were interesting the books?",
    "Книги были интересными.",
    "Книги були цікавими.",
    "Książki były interesujące."
  ],
  [
    "The lesson was boring.",
    "Was the lesson boring?",
    "Were the lesson boring?",
    "Was the boring lesson?",
    "Were boring the lesson?",
    "Урок был скучным.",
    "Урок був нудним.",
    "Lekcja była nudna."
  ],
  [
    "The sky was clear.",
    "Was the sky clear?",
    "Were the sky clear?",
    "Clear was the sky?",
    "Were clear the sky?",
    "Небо было ясным.",
    "Небо було ясним.",
    "Niebo było czyste."
  ],
  [
    "The gifts were expensive.",
    "Were the gifts expensive?",
    "Was the gifts expensive?",
    "Expensive were the gifts?",
    "Were expensive the gifts?",
    "Подарки были дорогими.",
    "Подарунки були дорогими.",
    "Prezenty były drogie."
  ],
  [
    "The students were not ready.",
    "Were the students not ready?",
    "Was the students not ready?",
    "Students were not ready?",
    "Not ready were the students?",
    "Студенты не были готовы.",
    "Студенти не були готові.",
    "Studenci nie byli gotowi."
  ],
  [
    "The dinner was delicious.",
    "Was the dinner delicious?",
    "Were the dinner delicious?",
    "Was the delicious dinner?",
    "Were delicious the dinner?",
    "Ужин был вкусным.",
    "Вечеря була смачною.",
    "Kolacja była pyszna."
  ],
  [
    "The children were not sleeping.",
    "Were the children not sleeping?",
    "Was the children not sleeping?",
    "Children were not sleeping?",
    "Not sleeping were the children?",
    "Дети не спали.",
    "Діти не спали.",
    "Dzieci nie spały."
  ],
  [
    "The vacation was relaxing.",
    "Was the vacation relaxing?",
    "Were the vacation relaxing?",
    "Relaxing was the vacation?",
    "Were relaxing the vacation?",
    "Отпуск был расслабляющим.",
    "Відпустка була розслаблюючою.",
    "Wakacje były relaksujące."
  ],
  [
    "The presentation was not clear.",
    "Was the presentation not clear?",
    "Were the presentation not clear?",
    "Presentation was not clear?",
    "Not clear was the presentation?",
    "Презентация не была ясной.",
    "Презентація не була зрозумілою.",
    "Prezentacja nie była jasna."
  ],
  [
    "The sunset was beautiful.",
    "Was the sunset beautiful?",
    "Were the sunset beautiful?",
    "Beautiful was the sunset?",
    "Were beautiful the sunset?",
    "Закат был красивым.",
    "Захід сонця був красивим.",
    "Zachód słońca był piękny."
  ],
  [
    "The show was not enjoyable.",
    "Was the show not enjoyable?",
    "Were the show not enjoyable?",
    "Show was not enjoyable?",
    "Not enjoyable was the show?",
    "Шоу не было приятным.",
    "Шоу не було приємним.",
    "Pokaz nie był przyjemny."
  ],
  [
    "The team was winning.",
    "Was the team winning?",
    "Were the team winning?",
    "Winning was the team?",
    "Were winning the team?",
    "Команда побеждала.",
    "Команда перемагала.",
    "Zespół wygrywał."
  ],
  [
    "The party was fun.",
    "Was the party fun?",
    "Were the party fun?",
    "Fun was the party?",
    "Were fun the party?",
    "Вечеринка была весёлой.",
    "Вечірка була веселою.",
    "Impreza była zabawna."
  ],
  [
    "The cat was sleeping.",
    "Was the cat sleeping?",
    "Were the cat sleeping?",
    "Sleeping was the cat?",
    "Were sleeping the cat?",
    "Кошка спала.",
    "Кішка спала.",
    "Kot spał."
  ],
  [
    "The friends were laughing.",
    "Were the friends laughing?",
    "Was the friends laughing?",
    "Laughing were the friends?",
    "Were laughing the friends?",
    "Друзья смеялись.",
    "Друзі сміялися.",
    "Przyjaciele się śmiali."
  ],
  [
    "The tasks were finished.",
    "Were the tasks finished?",
    "Was the tasks finished?",
    "Finished were the tasks?",
    "Were finished the tasks?",
    "Задачи были завершены.",
    "Завдання були виконані.",
    "Zadania zostały zakończone."
  ],
  [
    "The dog was barking.",
    "Was the dog barking?",
    "Were the dog barking?",
    "Barking was the dog?",
    "Were barking the dog?",
    "Собака лаяла.",
    "Собака гавкала.",
    "Pies szczekał."
  ],
  [
    "The lessons were informative.",
    "Were the lessons informative?",
    "Was the lessons informative?",
    "Informative were the lessons?",
    "Were informative the lessons?",
    "Уроки были информативными.",
    "Уроки були інформативними.",
    "Lekcje były pouczające."
  ],
  [
    "The trip was unforgettable.",
    "Was the trip unforgettable?",
    "Were the trip unforgettable?",
    "Unforgettable was the trip?",
    "Were unforgettable the trip?",
    "Поездка была незабываемой.",
    "Подорож була незабутньою.",
    "Podróż była niezapomniana."
  ],
  [
    "The computer was not working.",
    "Was the computer not working?",
    "Were the computer not working?",
    "Computer was not working?",
    "Not working was the computer?",
    "Компьютер не работал.",
    "Комп'ютер не працював.",
    "Komputer nie działał."
  ],
  [
    "The road was blocked.",
    "Was the road blocked?",
    "Were the road blocked?",
    "Blocked was the road?",
    "Were blocked the road?",
    "Дорога была заблокирована.",
    "Дорога була заблокована.",
    "Droga była zablokowana."
  ],
  [
    "Was the weather nice?",
    "The weather was nice.",
    "The weather were nice.",
    "The weather was not nice.",
    "Nice was the weather?",
    "Была ли погода хорошей?",
    "Чи була погода гарною?",
    "Czy pogoda była ładna?"
  ],
  [
    "Were the kids happy?",
    "The kids were happy.",
    "The kids was happy.",
    "The kids were not happy.",
    "Happy were the kids?",
    "Дети были счастливы.",
    "Діти були щасливими.",
    "Dzieci były szczęśliwe."
  ],
  [
    "Was the food delicious?",
    "The food was delicious.",
    "The food were delicious.",
    "The food  not was delicious.",
    "Delicious was the food?",
    "Еда была вкусной.",
    "Їжа була смачною.",
    "Jedzenie było pyszne."
  ],
  [
    "Were they at the party?",
    "They were at the party.",
    "They was at the party.",
    "They were not at the party.",
    "At the party were they?",
    "Они были на вечеринке.",
    "Вони були на вечірці.",
    "Oni byli na imprezie."
  ],
  [
    "Was the movie interesting?",
    "The movie was interesting.",
    "The movie were interesting.",
    "The movie was not interesting.",
    "Interesting was the movie?",
    "Фильм был интересным.",
    "Фільм був цікавим.",
    "Film był interesujący."
  ],
  [
    "Were the results surprising?",
    "The results were surprising.",
    "The results was surprising.",
    "The results were not surprising.",
    "Surprising were the results?",
    "Результаты были неожиданными.",
    "Результати були несподіваними.",
    "Wyniki były zaskakujące."
  ],
  [
    "Was the test difficult?",
    "The test was difficult.",
    "The test were difficult.",
    "The test was not difficult.",
    "Difficult was the test?",
    "Тест был сложным.",
    "Тест був складним.",
    "Test był trudny."
  ],
  [
    "Were we late?",
    "We were late.",
    "We was late.",
    "We were not late.",
    "Late were we?",
    "Мы опоздали.",
    "Ми запізнилися.",
    "Spóźniliśmy się."
  ],
  [
    "Was his answer correct?",
    "His answer was correct.",
    "His answer were correct.",
    "His answer was not correct.",
    "Correct was his answer?",
    "Его ответ был правильным.",
    "Його відповідь була правильною.",
    "Jego odpowiedź była poprawna."
  ],
  [
    "Were the flowers beautiful?",
    "The flowers were beautiful.",
    "The flowers was beautiful.",
    "The flowers were not beautiful.",
    "Beautiful were the flowers?",
    "Цветы были красивыми.",
    "Квіти були красивими.",
    "Kwiaty były piękne."
  ],
  [
    "Was the presentation clear?",
    "The presentation was clear.",
    "The presentation were clear.",
    "The presentation was not clear.",
    "Clear was the presentation?",
    "Презентация была ясной.",
    "Презентація була зрозумілою.",
    "Prezentacja była jasna."
  ],
  [
    "Were they satisfied with the service?",
    "They were satisfied with the service.",
    "They was satisfied with the service.",
    "They were not satisfied with the service.",
    "Satisfied were they with the service?",
    "Они были удовлетворены обслуживанием.",
    "Вони були задоволені обслуговуванням.",
    "Byli zadowoleni z usługi."
  ],
  [
    "Was your phone charged?",
    "My phone was charged.",
    "My phone were charged.",
    "My phone was not charged.",
    "Charged was my phone?",
    "Мой телефон был заряжен.",
    "Мій телефон був заряджений.",
    "Mój telefon był naładowany."
  ],
  [
    "Were the tickets available?",
    "The tickets were available.",
    "The tickets was available.",
    "The tickets were not available.",
    "Available were the tickets?",
    "Билеты были доступны.",
    "Квитки були доступні.",
    "Bilety były dostępne."
  ],
  [
    "Was the meeting productive?",
    "The meeting was productive.",
    "The meeting were productive.",
    "The meeting was not productive.",
    "Productive was the meeting?",
    "Встреча была продуктивной.",
    "Зустріч була продуктивною.",
    "Spotkanie było produktywne."
  ],
  [
    "Were you able to finish on time?",
    "I was able to finish on time.",
    "I were able to finish on time.",
    "I was not able to finish on time.",
    "Able were you to finish on time?",
    "Я смог закончить вовремя.",
    "Я зміг закінчити вчасно.",
    "Udało mi się skończyć na czas."
  ],
  [
    "Was the solution effective?",
    "The solution was effective.",
    "The solution were effective.",
    "The solution was not effective.",
    "Effective was the solution?",
    "Решение было эффективным.",
    "Рішення було ефективним.",
    "Rozwiązanie było skuteczne."
  ],
  [
    "Were the results consistent?",
    "The results were consistent.",
    "The results was consistent.",
    "The results were not consistent.",
    "Consistent were the results?",
    "Результаты были последовательными.",
    "Результати були послідовними.",
    "Wyniki były spójne."
  ],
  [
    "Was the lecture interesting?",
    "The lecture was interesting.",
    "The lecture were interesting.",
    "The lecture was not interesting.",
    "Interesting was the lecture?",
    "Лекция была интересной.",
    "Лекція була цікавою.",
    "Wykład był interesujący."
  ],
  [
    "Were the instructions clear?",
    "The instructions were clear.",
    "The instructions was clear.",
    "The instructions were not clear.",
    "Clear were the instructions?",
    "Инструкции были ясными.",
    "Інструкції були зрозумілими.",
    "Instrukcje były jasne."
  ],
  [
    "Was the project completed on time?",
    "The project was completed on time.",
    "The project were completed on time.",
    "The project was not completed on time.",
    "Completed was the project on time?",
    "Проект был завершен вовремя.",
    "Проект був завершений вчасно.",
    "Projekt został ukończony na czas."
  ],
  [
    "Were the students engaged?",
    "The students were engaged.",
    "The students was engaged.",
    "The students were not engaged.",
    "Engaged were the students?",
    "Студенты были вовлечены.",
    "Студенти були залучені.",
    "Studenci byli zaangażowani."
  ],
  [
    "Was the book worth reading?",
    "The book was worth reading.",
    "The book were worth reading.",
    "The book was not worth reading.",
    "Worth was the book reading?",
    "Книга стоила прочтения.",
    "Книга варта прочитання.",
    "Książka była warta przeczytania."
  ],
  [
    "Were the reviews positive?",
    "The reviews were positive.",
    "The reviews was positive.",
    "The reviews were not positive.",
    "Positive were the reviews?",
    "Отзывы были положительными.",
    "Відгуки були позитивними.",
    "Recenzje były pozytywne."
  ],
  [
    "Was the training helpful?",
    "The training was helpful.",
    "The training were helpful.",
    "The training was not helpful.",
    "Helpful was the training?",
    "Тренинг был полезным.",
    "Тренінг був корисним.",
    "Szkolenie było pomocne."
  ],
  [
    "Were the desserts delicious?",
    "The desserts were delicious.",
    "The desserts was delicious.",
    "The desserts were not delicious.",
    "Delicious were the desserts?",
    "Десерты были вкусными.",
    "Десерти були смачними.",
    "Desery były pyszne."
  ],
  [
    "Was the city crowded?",
    "The city was crowded.",
    "The city were crowded.",
    "The city was not crowded.",
    "Crowded was the city?",
    "Город был переполнен.",
    "Місто було переповнене.",
    "Miasto było zatłoczone."
  ],
  [
    "Were the facilities adequate?",
    "The facilities were adequate.",
    "The facilities was adequate.",
    "The facilities were not adequate.",
    "Adequate were the facilities?",
    "Условия были адекватными.",
    "Умови були адекватними.",
    "Udogodnienia były wystarczające."
  ],
  [
    "Was the service prompt?",
    "The service was prompt.",
    "The service were prompt.",
    "The service was not prompt.",
    "Prompt was the service?",
    "Обслуживание было своевременным.",
    "Обслуговування було своєчасним.",
    "Usługa była szybka."
  ],
  [
    "Were the chairs comfortable?",
    "The chairs were comfortable.",
    "The chairs was comfortable.",
    "The chairs were not comfortable.",
    "Comfortable were the chairs?",
    "Стулья были удобными.",
    "Стільці були зручними.",
    "Krzesła były wygodne."
  ],
  [
    "Was the discussion fruitful?",
    "The discussion was fruitful.",
    "The discussion were fruitful.",
    "The discussion was not fruitful.",
    "Fruitful was the discussion?",
    "Обсуждение было плодотворным.",
    "Обговорення було продуктивним.",
    "Dyskusja była owocna."
  ],
  [
    "Were the exams challenging?",
    "The exams were challenging.",
    "The exams was challenging.",
    "The exams were not challenging.",
    "Challenging were the exams?",
    "Экзамены были сложными.",
    "Екзамени були складними.",
    "Egzaminy były trudne."
  ],
  [
    "Was the atmosphere relaxing?",
    "The atmosphere was relaxing.",
    "The atmosphere were relaxing.",
    "The atmosphere was not relaxing.",
    "Relaxing was the atmosphere?",
    "Атмосфера была расслабляющей.",
    "Атмосфера була розслаблюючою.",
    "Atmosfera była relaksująca."
  ],
  [
    "Were the colors vibrant?",
    "The colors were vibrant.",
    "The colors was vibrant.",
    "The colors were not vibrant.",
    "Vibrant were the colors?",
    "Цвета были яркими.",
    "Кольори були яскравими.",
    "Kolory były żywe."
  ],
  [
    "Was the journey enjoyable?",
    "The journey was enjoyable.",
    "The journey were enjoyable.",
    "The journey was not enjoyable.",
    "Enjoyable was the journey?",
    "Путешествие было приятным.",
    "Подорож була приємною.",
    "Podróż była przyjemna."
  ],
  [
    "Were the meetings effective?",
    "The meetings were effective.",
    "The meetings was effective.",
    "The meetings were not effective.",
    "Effective were the meetings?",
    "Встречи были эффективными.",
    "Зустрічі були ефективними.",
    "Spotkania były skuteczne."
  ],
  [
    "Wasn't the presentation clear?",
    "The presentation was not clear.",
    "The presentation were not clear.",
    "The presentation was clear.",
    "Clear was the presentation not?",
    "Презентация была не ясной.",
    "Презентація не була зрозумілою.",
    "Prezentacja nie była jasna."
  ],
  [
    "Weren't they satisfied with the service?",
    "They were not satisfied with the service.",
    "They was not satisfied with the service.",
    "They were satisfied with the service.",
    "Satisfied were they not with the service?",
    "Они не были удовлетворены обслуживанием.",
    "Вони не були задоволені обслуговуванням.",
    "Nie byli zadowoleni z usługi."
  ],
  [
    "Wasn't your phone charged?",
    "My phone was not charged.",
    "My phone were not charged.",
    "My phone was charged.",
    "Charged was my phone not?",
    "Мой телефон не был заряжен.",
    "Мій телефон не був заряджений.",
    "Mój telefon nie był naładowany."
  ],
  [
    "Weren't the tickets available?",
    "The tickets were not available.",
    "The tickets was not available.",
    "The tickets were available.",
    "Available were the tickets not?",
    "Билеты не были доступны.",
    "Квитки не були доступні.",
    "Bilety nie były dostępne."
  ],
  [
    "Wasn't the meeting productive?",
    "The meeting was not productive.",
    "The meeting were not productive.",
    "The meeting was productive.",
    "Productive was the meeting not?",
    "Встреча не была продуктивной.",
    "Зустріч не була продуктивною.",
    "Spotkanie nie było produktywne."
  ],
  [
    "Weren't you able to finish on time?",
    "I was not able to finish on time.",
    "I were not able to finish on time.",
    "I was able to finish on time.",
    "Able were you not to finish on time?",
    "Я не смог закончить вовремя.",
    "Я не зміг закінчити вчасно.",
    "Nie udało mi się skończyć na czas."
  ],
  [
    "Wasn't the solution effective?",
    "The solution was not effective.",
    "The solution were not effective.",
    "The solution was effective.",
    "Effective was the solution not?",
    "Решение не было эффективным.",
    "Рішення не було ефективним.",
    "Rozwiązanie nie było skuteczne."
  ],
  [
    "Weren't the results consistent?",
    "The results were not consistent.",
    "The results was not consistent.",
    "The results were consistent.",
    "Consistent were the results not?",
    "Результаты не были последовательными.",
    "Результати не були послідовними.",
    "Wyniki nie były spójne."
  ],
  [
    "Wasn't the lecture interesting?",
    "The lecture was not interesting.",
    "The lecture were not interesting.",
    "The lecture was interesting.",
    "Interesting was the lecture not?",
    "Лекция не была интересной.",
    "Лекція не була цікавою.",
    "Wykład nie był interesujący."
  ],
  [
    "Weren't the instructions clear?",
    "The instructions were not clear.",
    "The instructions was not clear.",
    "The instructions were clear.",
    "Clear were the instructions not?",
    "Инструкции не были ясными.",
    "Інструкції не були зрозумілими.",
    "Instrukcje nie były jasne."
  ],
  [
    "Wasn't the project completed on time?",
    "The project was not completed on time.",
    "The project were not completed on time.",
    "The project was completed on time.",
    "Completed was the project not on time?",
    "Проект не был завершен вовремя.",
    "Проект не був завершений вчасно.",
    "Projekt nie został ukończony na czas."
  ],
  [
    "Weren't the students engaged?",
    "The students were not engaged.",
    "The students was not engaged.",
    "The students were engaged.",
    "Engaged were the students not?",
    "Студенты не были вовлечены.",
    "Студенти не були залучені.",
    "Studenci nie byli zaangażowani."
  ],
  [
    "Wasn't the book worth reading?",
    "The book was not worth reading.",
    "The book were not worth reading.",
    "The book was worth reading.",
    "Worth was the book not reading?",
    "Книга не стоила прочтения.",
    "Книга не варта прочитання.",
    "Książka nie była warta przeczytania."
  ],
  [
    "Weren't the reviews positive?",
    "The reviews were not positive.",
    "The reviews was not positive.",
    "The reviews were positive.",
    "Positive were the reviews not?",
    "Отзывы не были положительными.",
    "Відгуки не були позитивними.",
    "Recenzje nie były pozytywne."
  ],
  [
    "Wasn't the training helpful?",
    "The training was not helpful.",
    "The training were not helpful.",
    "The training was helpful.",
    "Helpful was the training not?",
    "Тренинг не был полезным.",
    "Тренінг не був корисним.",
    "Szkolenie nie było pomocne."
  ],
  [
    "Weren't the desserts delicious?",
    "The desserts were not delicious.",
    "The desserts was not delicious.",
    "The desserts were delicious.",
    "Delicious were the desserts not?",
    "Десерты не были вкусными.",
    "Десерти не були смачними.",
    "Desery nie były pyszne."
  ],
  [
    "Wasn't the city crowded?",
    "The city was not crowded.",
    "The city were not crowded.",
    "The city was crowded.",
    "Crowded was the city not?",
    "Город не был переполнен.",
    "Місто не було переповнене.",
    "Miasto nie było zatłoczone."
  ],
  [
    "Weren't the facilities adequate?",
    "The facilities were not adequate.",
    "The facilities was not adequate.",
    "The facilities were adequate.",
    "Adequate were the facilities not?",
    "Условия не были адекватными.",
    "Умови не були адекватними.",
    "Udogodnienia nie były wystarczające."
  ],
  [
    "Wasn't the service prompt?",
    "The service was not prompt.",
    "The service were not prompt.",
    "The service was prompt.",
    "Prompt was the service not?",
    "Обслуживание не было своевременным.",
    "Обслуговування не було своєчасним.",
    "Usługa nie była szybka."
  ],
  [
    "Weren't the chairs comfortable?",
    "The chairs were not comfortable.",
    "The chairs was not comfortable.",
    "The chairs were comfortable.",
    "Comfortable were the chairs not?",
    "Стулья не были удобными.",
    "Стільці не були зручними.",
    "Krzesła nie były wygodne."
  ],
  [
    "Wasn't the discussion fruitful?",
    "The discussion was not fruitful.",
    "The discussion were not fruitful.",
    "The discussion was fruitful.",
    "Fruitful was the discussion not?",
    "Обсуждение не было плодотворным.",
    "Обговорення не було продуктивним.",
    "Dyskusja nie była owocna."
  ],
  [
    "Weren't the exams challenging?",
    "The exams were not challenging.",
    "The exams was not challenging.",
    "The exams were challenging not.",
    "Challenging were the exams not?",
    "Экзамены не были сложными.",
    "Екзамени не були складними.",
    "Egzaminy nie były trudne."
  ],
  [
    "Wasn't the atmosphere relaxing?",
    "The atmosphere was not relaxing.",
    "The atmosphere were not relaxing.",
    "The atmosphere was relaxing.",
    "Relaxing was the atmosphere not?",
    "Атмосфера не была расслабляющей.",
    "Атмосфера не була розслаблюючою.",
    "Atmosfera nie była relaksująca."
  ],
  [
    "Weren't the colors vibrant?",
    "The colors were not vibrant.",
    "The colors was not vibrant.",
    "The colors were vibrant.",
    "Vibrant were the colors not?",
    "Цвета не были яркими.",
    "Кольори не були яскравими.",
    "Kolory nie były żywe."
  ],
  [
    "Wasn't the journey enjoyable?",
    "The journey was not enjoyable.",
    "The journey were not enjoyable.",
    "The journey was enjoyable.",
    "Enjoyable was the journey not?",
    "Путешествие не было приятным.",
    "Подорож не була приємною.",
    "Podróż nie była przyjemna."
  ],
  [
    "Weren't the meetings effective?",
    "The meetings were not effective.",
    "The meetings was not effective.",
    "The meetings were effective.",
    "Effective were the meetings not?",
    "Встречи не были эффективными.",
    "Зустрічі не були ефективними.",
    "Spotkania nie były efektywne."
  ],
  ["... happy?", "was", "were", "", "", "Ты был счастлив?", "Ти був щасливий?", "Ty był szczęśliwy?"],
  ["... your friends here?", "were", "was", "", "", "Твои друзья были здесь?", "Твої друзі були тут?", "Twoi przyjaciele byli tutaj?"],
  ["... at the party last night?", "was", "were", "", "", "Ты был на вечеринке прошлой ночью?", "Ти був на вечірці минулої ночі?", "Ty byłeś na imprezie zeszłej nocy?"],
  ["... ready to go?", "were", "was", "", "", "Вы были готовы идти?", "Ви були готові йти?", "Byliście gotowi, aby iść?"],
  ["... interested in the topic?", "was", "were", "", "", "Ты был заинтересован в теме?", "Ти був зацікавлений у темі?", "Byłeś zainteresowany tematem?"],
  ["... in the library yesterday?", "were", "was", "", "", "Вы были в библиотеке вчера?", "Ви були в бібліотеці вчора?", "Byliście w bibliotece wczoraj?"],
  ["... surprised by the news?", "was", "were", "", "", "Ты был удивлён новостями?", "Ти був здивований новинами?", "Ty byłeś zaskoczony wiadomościami?"],
  ["... at school last week?", "were", "was", "", "", "Вы были в школе на прошлой неделе?", "Ви були в школі на минулому тижні?", "Byliście w szkole w zeszłym tygodniu?"],
  ["... happy with your results?", "were", "was", "", "", "Ты был доволен своими результатами?", "Ти був задоволений своїми результатами?", "Ty byłeś zadowolony ze swoich wyników?"],
  ["... able to help?", "were", "was", "", "", "Ты смог помочь?", "Ти зміг допомогти?", "Ty byłeś w stanie pomóc?"],
  ["... at the concert last week?", "was", "were", "", "", "Ты был на концерте на прошлой неделе?", "Ти був на концерті минулого тижня?", "Ty byłeś na koncercie w zeszłym tygodniu?"],
  ["... in the office yesterday?", "were", "was", "", "", "Вы были в офисе вчера?", "Ви були в офісі вчора?", "Byliście w biurze wczoraj?"],
  ["... happy with the outcome?", "was", "were", "", "", "Ты был доволен результатом?", "Ти був задоволений результатом?", "Ty byłeś zadowolony z wyniku?"],
  ["... excited about the trip?", "were", "was", "", "", "Вы были в восторге от поездки?", "Ви були в захваті від поїздки?", "Byliście podekscytowani wyjazdem?"],
  ["... ready for the challenge?", "was", "were", "", "", "Ты был готов к испытанию?", "Ти був готовий до випробування?", "Ty byłeś gotowy na wyzwanie?"],
  ["... afraid of the storm?", "was", "were", "", "", "Ты боялся шторма?", "Ти боявся шторму?", "Ty bałeś się burzy?"],
  ["... satisfied with your work?", "were", "was", "", "", "Вы были довольны своей работой?", "Ви були задоволені своєю роботою?", "Byliście zadowoleni z swojej pracy?"],
  ["... invited to the party?", "were", "was", "", "", "Ты был приглашен на вечеринку?", "Ти був запрошений на вечірку?", "Ty byłeś zaproszony na imprezę?"],
  ["... at home last weekend?", "were", "was", "", "", "Вы были дома на прошлых выходных?", "Ви були вдома на минулих вихідних?", "Byliście w domu w zeszły weekend?"],
  ["... busy with your studies?", "was", "were", "", "", "Ты был занят учёбой?", "Ти був зайнятий навчанням?", "Ty byłeś zajęty nauką?"],
  
  ["... your favorite movie?", "was", "were", "", "", "Это был твой любимый фильм?", "Це був твій улюблений фільм?", "To był twój ulubiony film?"],
  ["... friends with your classmates?", "were", "was", "", "", "Вы дружили с одноклассниками?", "Ви дружили з однокласниками?", "Byliście przyjaciółmi z kolegami z klasy?"],
  ["... happy about the results?", "was", "were", "", "", "Ты был рад результатам?", "Ти був радий результатам?", "Ty byłeś zadowolony z wyników?"],
  ["... at the meeting last Friday?", "were", "was", "", "", "Вы были на встрече в прошлую пятницу?", "Ви були на зустрічі в минулий п'ятницю?", "Byliście na spotkaniu w zeszły piątek?"],
  ["... working on the project?", "were", "was", "", "", "Ты работал над проектом?", "Ти працював над проектом?", "Ty pracowałeś nad projektem?"],
  ["... able to attend the wedding?", "were", "was", "", "", "Ты смог прийти на свадьбу?", "Ти зміг прийти на весілля?", "Ty byłeś w stanie przyjść na wesele?"],
  ["... aware of the changes?", "was", "were", "", "", "Ты был в курсе изменений?", "Ти був у курсі змін?", "Ty byłeś świadomy zmian?"],
  ["... happy to see your family?", "was", "were", "", "", "Ты был рад увидеть свою семью?", "Ти був радий бачити свою сім'ю?", "Ty byłeś szczęśliwy, widząc swoją rodzinę?"],
  ["... involved in the project?", "were", "was", "", "", "Вы были вовлечены в проект?", "Ви були залучені до проекту?", "Byliście zaangażowani w projekt?"],
  
  ["... on vacation last month?", "were", "was", "", "", "Ты был в отпуске в прошлом месяце?", "Ти був у відпустці минулого місяця?", "Ty byłeś na wakacjach w zeszłym miesiącu?"],
  ["... close to your siblings?", "were", "was", "", "", "Вы были близки со своими братьями и сестрами?", "Ви були близькі зі своїми братами і сестрами?", "Byliście blisko ze swoimi rodzeństwem?"],
  ["... excited about the new job?", "was", "were", "", "", "Ты был взволнован новой работой?", "Ти був схвильований новою роботою?", "Ty byłeś podekscytowany nową pracą?"],
  ["... prepared for the exam?", "were", "was", "", "", "Вы были готовы к экзамену?", "Ви були готові до іспиту?", "Byliście gotowi na egzamin?"],
  ["... pleased with your performance?", "were", "was", "", "", "Ты был доволен своей игрой?", "Ти був задоволений своєю грою?", "Ty byłeś zadowolony ze swojej wydajności?"],
  ["... worried about the test?", "was", "were", "", "", "Ты волновался по поводу теста?", "Ти хвилювався з приводу тесту?", "Ty martwiłeś się o test?"],
  ["... excited for the holidays?", "were", "was", "", "", "Вы были рады праздникам?", "Ви були раді святам?", "Byliście podekscytowani wakacjami?"],
  ["... happy to help?", "were", "was", "", "", "Ты был рад помочь?", "Ти був радий допомогти?", "Ty byłeś szczęśliwy, że mogłem pomóc?"],
  ["... on the same page?", "were", "was", "", "", "Вы были на одной волне?", "Ви були на одній хвилі?", "Byliście na tej samej stronie?"],
  
  ["... at the festival last year?", "were", "was", "", "", "Ты был на фестивале в прошлом году?", "Ти був на фестивалі в минулому році?", "Ty byłeś na festiwalu w zeszłym roku?"],
  ["... surprised by the announcement?", "was", "were", "", "", "Ты был удивлён объявлением?", "Ти був здивований оголошенням?", "Ty byłeś zaskoczony ogłoszeniem?"],
  ["... interested in learning new skills?", "were", "was", "", "", "Вы были заинтересованы в изучении новых навыков?", "Ви були зацікавлені в навчанні нових навичок?", "Byliście zainteresowani nauką nowych umiejętności?"],
  ["... your goals last year?", "were", "was", "", "", "Это были твои цели в прошлом году?", "Це були твої цілі минулого року?", "To były twoje cele w zeszłym roku?"],
  ["... involved in any clubs?", "were", "was", "", "", "Ты был вовлечен в какие-либо клубы?", "Ти був залучений у якісь клуби?", "Byłeś zaangażowany w jakieś kluby?"],
  ["... on the team last season?", "were", "was", "", "", "Вы были в команде в прошлом сезоне?", "Ви були в команді в минулому сезоні?", "Byliście w drużynie w zeszłym sezonie?"],
  ["... part of the project?", "was", "were", "", "", "Ты был частью проекта?", "Ти був частиною проекту?", "Ty byłeś częścią projektu?"],
  ["... able to find a solution?", "were", "was", "", "", "Вы смогли найти решение?", "Ви змогли знайти рішення?", "Byliście w stanie znaleźć rozwiązanie?"],
  ["... enthusiastic about the changes?", "was", "were", "", "", "Ты был восторжен изменениями?", "Ти був захоплений змінами?", "Ty byłeś entuzjastyczny co do zmian?"],
  ["... confident in your abilities?", "were", "was", "", "", "Вы были уверены в своих способностях?", "Ви були впевнені у своїх здібностях?", "Byliście pewni swoich zdolności?"],
 
  // проверено
  ["Why ... at the concert last week?", "was", "were", "", "", "Почему ты был на концерте на прошлой неделе?", "Чому ти був на концерті минулого тижня?", "Dlaczego byłeś na koncercie w zeszłym tygodniu?"],
  ["Where ... in the office yesterday?", "were", "was", "", "", "Где вы были в офисе вчера?", "Де ви були в офісі вчора?", "Gdzie byliście w biurze wczoraj?"],
  ["What ... happy about the outcome?", "was", "were", "", "", "Что тебя радовало в результате?", "Що тебе радувало в результаті?", "Co ciebie cieszyło w wyniku?"],
  ["When ... excited about the trip?", "were", "was", "", "", "Когда вы были в восторге от поездки?", "Коли ви були в захваті від поїздки?", "Kiedy byliście w ekscytacji z powodu wyjazdu?"],
  ["How ... ready for the challenge?", "was", "were", "", "", "Как ты был готов к испытанию?", "Як ти був готовий до випробування?", "Jak byłeś gotowy na wyzwanie?"],
  
  // проверено
  ["Who ... afraid of the storm?", "was", "were", "", "", "Кто ты боялся шторма?", "Хто ти боявся шторму?", "Kto bałeś się burzy?"],
  ["Which ... satisfied with your work?", "were", "was", "", "", "Какой из вас был доволен своей работой?", "Який з вас був задоволений своєю роботою?", "Który z was był zadowolony z pracy?"],
  ["Whom ... invited to the party?", "were", "was", "", "", "Кого ты пригласил на вечеринку?", "Кого ти запросив на вечірку?", "Kogo zaprosiłeś na imprezę?"],
  ["What ... at home last weekend?", "were", "was", "", "", "Что ты делал дома на прошлых выходных?", "Що ти робив вдома на минулих вихідних?", "Co robiłeś w domu w zeszły weekend?"],
  ["Which ... busy with your studies?", "was", "were", "", "", "Какой из вас был занят учёбой?", "Який з вас був зайнятий навчанням?", "Który z was był zajęty nauką?"],
  
  // проверено
  ["Why ... your favorite movie?", "was", "were", "", "", "Почему это был твой любимый фильм?", "Чому це був твій улюблений фільм?", "Dlaczego to był twój ulubiony film?"],
  ["Who ... your friends with your classmates?", "were", "was", "", "", "С кем ты дружил с одноклассниками?", "З ким ти дружив з однокласниками?", "Z kim przyjaźniłeś się z kolegami z klasy?"],
  ["How ... happy about the results?", "was", "were", "", "", "Как ты был рад результатам?", "Як ти був радий результатам?", "Jak byłeś zadowolony z wyników?"],
  ["When ... at the meeting last Friday?", "were", "was", "", "", "Когда вы были на встрече в прошлую пятницу?", "Коли ви були на зустрічі в минулий п'ятницю?", "Kiedy byliście na spotkaniu w zeszły piątek?"],
  ["What ... working on the project?", "were", "was", "", "", "Что ты делал над проектом?", "Що ти робив над проектом?", "Co robiłeś nad projektem?"],
  
  // проверено
  ["Who ... the guests able to attend the wedding?", "were", "was", "", "", "Кто смог прийти на свадьбу?", "Хто зміг прийти на весілля?", "Kto mógł przyjść na wesele?"],
  ["Why ... aware of the changes?", "was", "were", "", "", "Почему ты был в курсе изменений?", "Чому ти був у курсі змін?", "Dlaczego byłeś świadomy zmian?"],
  ["What ... happy to see your family?", "was", "were", "", "", "Что тебя радовало видеть свою семью?", "Що тебе радувало бачити свою сім'ю?", "Co ciebie cieszyło, widząc swoją rodzinę?"],
  ["Where ... involved in the project?", "were", "was", "", "", "Где вы были вовлечены в проект?", "Де ви були залучені до проекту?", "Gdzie byliście zaangażowani w projekt?"],
  ["When ... on vacation last month?", "were", "was", "", "", "Когда ты был в отпуске в прошлом месяце?", "Коли ти був у відпустці минулого місяця?", "Kiedy byłeś na wakacjach w zeszłym miesiącu?"],
  
  // проверено
  ["How ... you close to your siblings?", "were", "was", "", "", "Как ты был близок со своими братьями и сестрами?", "Як ти був близький зі своїми братами і сестрами?", "Jak byłeś blisko ze swoimi rodzeństwem?"],
  ["What ... excited about the new job?", "was", "were", "", "", "Что тебя волновало в новой работе?", "Що тебе хвилювало в новій роботі?", "Co ciebie ekscytowało w nowej pracy?"],
  ["Who ... prepared for the exam?", "were", "was", "", "", "Кто был готов к экзамену?", "Хто був готовий до іспиту?", "Kto był gotowy na egzamin?"],
  ["Why ... pleased with your performance?", "were", "was", "", "", "Почему вы были довольны своей игрой?", "Чому ви були задоволені своєю грою?", "Dlaczego byliście zadowoleni ze swojej wydajności?"],
  ["How ... worried about the test?", "was", "were", "", "", "Как ты волновался по поводу теста?", "Як ти хвилювався з приводу тесту?", "Jak martwiłeś się o test?"],
  
  // проверено
  ["What ... you excited for the holidays?", "were", "was", "", "", "Что вас радовало в праздниках?", "Що вас радувало в святах?", "Co ciebie cieszyło w wakacjach?"],
  ["Who ... you happy to help?", "were", "was", "", "", "Кто был рад помочь?", "Хто був радий допомогти?", "Kto był szczęśliwy, że mógł pomóc?"],
  ["What ... you on the same page?", "were", "was", "", "", "Что вас связывало?", "Що вас пов'язувало?", "Co was łączyło?"],
  ["Where ... you at the festival last year?", "were", "was", "", "", "Где ты был на фестивале в прошлом году?", "Де ти був на фестивалі в минулому році?", "Gdzie byłeś na festiwalu w zeszłym roku?"],
  ["Why ... you surprised by the announcement?", "were", "was", "", "", "Почему ты был удивлён объявлением?", "Чому ти був здивований оголошенням?", "Dlaczego byłeś zaskoczony ogłoszeniem?"],
  
  // проверено
  ["When ... you interested in learning new skills?", "were", "was", "", "", "Когда вы были заинтересованы в изучении новых навыков?", "Коли ви були зацікавлені в навчанні нових навичок?", "Kiedy byliście zainteresowani nauką nowych umiejętności?"],
  ["How ... your goals last year?", "were", "was", "", "", "Каковы были твои цели в прошлом году?", "Які були твої цілі минулого року?", "Jakie były twoje cele w zeszłym roku?"],
  ["What ... you involved in any clubs?", "were", "was", "", "", "Какие клубы ты посещал?", "Які клуби ти відвідував?", "Jakie kluby odwiedzałeś?"],
  ["Who ... on the team last season?", "was", "were", "", "", "Кто был в команде в прошлом сезоне?", "Хто був у команді в минулому сезоні?", "Kto był w drużynie w zeszłym sezonie?"],
  ["Why ... he part of the project?", "was", "were", "", "", "Почему ты был частью проекта?", "Чому ти був частиною проекту?", "Dlaczego byłeś częścią projektu?"],
  
  ["How ... you able to find a solution?", "were", "was", "", "", "Как вы смогли найти решение?", "Як ви змогли знайти рішення?", "Jak byliście w stanie znaleźć rozwiązanie?"],
  ["I ... happy with my results.", "was", "were", "", "", "Я был доволен своими результатами.", "Я був задоволений своїми результатами.", "Byłem zadowolony z moich wyników."],
  ["They ... not ready for the presentation.", "were", "was", "", "", "Они не были готовы к презентации.", "Вони не були готові до презентації.", "Nie byli gotowi na prezentację."],
  ["He ... excited about the opportunity.", "was", "were", "", "", "Он был взволнован возможностью.", "Він був в захваті від можливості.", "Był podekscytowany możliwością."],
  ["We ... not aware of the changes.", "were", "was", "", "", "Мы не были в курсе изменений.", "Ми не були в курсі змін.", "Nie byliśmy świadomi zmian."],
  ["She ... proud of her achievements.", "was", "were", "", "", "Она была горда своими достижениями.", "Вона була горда своїми досягненнями.", "Była dumna ze swoich osiągnięć."],
  
  ["You ... not interested in the event.", "were", "was", "", "", "Ты не был заинтересован в событии.", "Ти не був зацікавлений у заході.", "Nie byłeś zainteresowany wydarzeniem."],
  ["I ... late to the meeting.", "was", "were", "", "", "Я опоздал на встречу.", "Я запізнився на зустріч.", "Spóźniłem się na spotkanie."],
  ["They ... excited about the new project.", "were", "was", "", "", "Они были рады новому проекту.", "Вони були раді новому проекту.", "Byli podekscytowani nowym projektem."],
  ["It ... not easy to solve the problem.", "was", "were", "", "", "Это было не просто решить проблему.", "Це було не просто вирішити проблему.", "Nie było łatwo rozwiązać problem."],
  ["We ... not prepared for the test.", "were", "was", "", "", "Мы не были готовы к тесту.", "Ми не були готові до тесту.", "Nie byliśmy gotowi na test."],
  
  ["He ... very talented in his field.", "was", "were", "", "", "Он был очень талантлив в своей области.", "Він був дуже талановитий у своїй галузі.", "Był bardzo utalentowany w swojej dziedzinie."],
  ["You ... not alone in this situation.", "were", "was", "", "", "Ты не был один в этой ситуации.", "Ти не був один у цій ситуації.", "Nie byłeś sam w tej sytuacji."],
  ["She ... determined to succeed.", "was", "were", "", "", "Она была настроена на успех.", "Вона була налаштована на успіх.", "Była zdeterminowana, aby odnieść sukces."],
  ["They ... not aware of the deadline.", "were", "was", "", "", "Они не знали о сроках.", "Вони не знали про терміни.", "Nie byli świadomi terminu."],
  ["I ... surprised by the news.", "was", "were", "", "", "Я был удивлен новостями.", "Я був здивований новинами.", "Byłem zaskoczony wiadomościami."],
  
  ["We ... very close friends.", "were", "was", "", "", "Мы были очень близкими друзьями.", "Ми були дуже близькими друзями.", "Byliśmy bardzo bliskimi przyjaciółmi."],
  ["He ... not focused during the meeting.", "was", "were", "", "", "Он не был сосредоточен во время встречи.", "Він не був зосереджений під час зустрічі.", "Nie był skoncentrowany podczas spotkania."],
  ["They ... thrilled about the announcement.", "were", "was", "", "", "Они были в восторге от объявления.", "Вони були в захваті від оголошення.", "Byli podekscytowani ogłoszeniem."],
  ["I ... not feeling well yesterday.", "was", "were", "", "", "Я вчера плохо себя чувствовал.", "Я вчора погано почувався.", "Wczoraj źle się czułem."],
  ["She ... excited about the trip.", "was", "were", "", "", "Она была взволнована поездкой.", "Вона була в захваті від поїздки.", "Była podekscytowana wyjazdem."],
  
  ["You ... not happy with the results.", "were", "was", "", "", "Ты не был доволен результатами.", "Ти не був задоволений результатами.", "Nie byłeś zadowolony z wyników."],
  ["They ... responsible for the project.", "were", "was", "", "", "Они были ответственны за проект.", "Вони були відповідальні за проект.", "Byli odpowiedzialni za projekt."],
  ["I ... pleased with the outcome.", "was", "were", "", "", "Я был доволен результатом.", "Я був задоволений результатом.", "Byłem zadowolony z wyniku."],
  ["He ... not ready for the challenge.", "was", "were", "", "", "Он не был готов к вызову.", "Він не був готовий до виклику.", "Nie był gotowy na wyzwanie."],
  ["We ... happy to see you.", "were", "was", "", "", "Мы были рады тебя видеть.", "Ми були раді тебе бачити.", "Byliśmy szczęśliwi, że mogliśmy cię zobaczyć."],
  
  ["She ... nervous before the interview.", "was", "were", "", "", "Она была нервной перед интервью.", "Вона була нервова перед інтерв'ю.", "Była zdenerwowana przed rozmową."],
  ["You ... not helpful during the meeting.", "were", "was", "", "", "Ты не был полезен на встрече.", "Ти не був корисний на зустрічі.", "Nie byłeś pomocny podczas spotkania."],
  ["They ... confident in their abilities.", "were", "was", "", "", "Они были уверены в своих способностях.", "Вони були впевнені у своїх здібностях.", "Byli pewni swoich umiejętności."],
  ["I ... not expecting that outcome.", "was", "were", "", "", "Я не ожидал такого результата.", "Я не очікував такого результату.", "Nie spodziewałem się takiego wyniku."],
  ["He ... enthusiastic about the new role.", "was", "were", "", "", "Он был в восторге от новой роли.", "Він був у захваті від нової ролі.", "Był podekscytowany nową rolą."],
  
  ["We ... ready for the changes.", "were", "was", "", "", "Мы были готовы к изменениям.", "Ми були готові до змін.", "Byliśmy gotowi na zmiany."],
  ["They ... supportive of each other.", "were", "was", "", "", "Они поддерживали друг друга.", "Вони підтримували один одного.", "Wspierali się nawzajem."],
  ["She ... not satisfied with her job.", "was", "were", "", "", "Она не была довольна своей работой.", "Вона не була задоволена своєю роботою.", "Nie była zadowolona ze swojej pracy."],
  ["I ... proud of my achievements.", "was", "were", "", "", "Я гордился своими достижениями.", "Я пишався своїми досягненнями.", "Byłem dumny ze swoich osiągnięć."],
  ["You ... not participating in the event.", "were", "was", "", "", "Ты не участвовал в мероприятии.", "Ти не брав участі в заході.", "Nie brałeś udziału w wydarzeniu."],
  
  ["They ... focused on their goals.", "were", "was", "", "", "Они были сосредоточены на своих целях.", "Вони були зосереджені на своїх цілях.", "Byli skoncentrowani na swoich celach."],
  ["We ... happy to help our friends.", "were", "was", "", "", "Мы были рады помочь нашим друзьям.", "Ми були раді допомогти нашим друзям.", "Byliśmy szczęśliwi, że mogliśmy pomóc naszym przyjaciołom."],
  ["He ... not very pleased with the situation.", "was", "were", "", "", "Он не был очень доволен ситуацией.", "Він не був дуже задоволений ситуацією.", "Nie był zbyt zadowolony z sytuacji."],
  
  function (id) {
    //функция подготавливает предложение, которое должно попасть
    //в блок предыдущих ответов, для этого все индексы 0-74
    //конкатенируются нулевой и первый индекс.
    if (wasOrWere[id][0].indexOf('...') !== -1) {
        let str = wasOrWere[id][0]
        const rez = str.replace('...',wasOrWere[id][1]);
        return rez;
    } else {
        return wasOrWere[id][1];
    }
  }   
];

// Заменить все was и were на was/were
wasOrWere.forEach((el, index, array) => {
  if (!Array.isArray(el)) return ;

  if (el[0].indexOf('was//')) {
    array[index][0] = el[0].replace('was', 'was/were');
    return ;
  }
  if (el[0].indexOf('were//')) {
    array[index][0] = el[0].replace('were', 'was/were');
    return ;
  }
      
});
  