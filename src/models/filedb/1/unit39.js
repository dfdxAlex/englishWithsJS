import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';
import { extending } from './extend/extending.js';

const unit39 = [
  [
    "It’s raining now.",
    "It’s wet outside now.",
    "It’s my birthday today.",
    "It’s 20 kilometers to the airport.",
    "It’s difficult to learn Chinese.",
    "Сейчас идёт дождь.",
    "Зараз іде дощ.",
    "Teraz pada deszcz."
  ],
  [
    "It’s cold today.",
    "It’s very chilly outside today.",
    "It’s my sister’s wedding today.",
    "It’s 3 kilometers to the river.",
    "It’s hard to solve this math problem.",
    "Сегодня холодно.",
    "Сьогодні холодно.",
    "Dziś jest zimno."
  ],
  [
    "It’s hot in the room.",
    "It’s very warm inside the room.",
    "It’s 9 o’clock in the evening.",
    "It’s a long way to the museum.",
    "It’s snowing heavily today.",
    "В комнате жарко.",
    "У кімнаті спекотно.",
    "W pokoju jest gorąco."
  ],
  [
    "It’s windy outside.",
    "It’s very strong wind outside.",
    "It’s my first day at work.",
    "It’s 15 kilometers to the border.",
    "It’s difficult to cook this dish.",
    "На улице ветрено.",
    "На вулиці вітряно.",
    "Na dworze jest wietrznie."
  ],
  [
    "It’s snowing today.",
    "It’s white and snowy everywhere today.",
    "It’s 7 o’clock in the morning.",
    "It’s very far from the station.",
    "It’s easy to fix this computer.",
    "Сегодня идёт снег.",
    "Сьогодні йде сніг.",
    "Dziś pada śnieg."
  ],
  [
    "It’s late already.",
    "It’s very late at this moment.",
    "It’s cold in the mountains.",
    "It’s 12 kilometers to the lake.",
    "It’s raining in the city center.",
    "Уже поздно.",
    "Вже пізно.",
    "Jest już późno."
  ],
  [
    "It’s early in the morning.",
    "It’s very early right now.",
    "It’s difficult to drive here.",
    "It’s 4 kilometers to the beach.",
    "It’s warm and sunny today.",
    "Рано утром.",
    "Рано вранці.",
    "Wcześnie rano."
  ],
  [
    "It’s dark outside.",
    "It’s completely dark outside now.",
    "It’s easy to learn Spanish.",
    "It’s 2 kilometers to the supermarket.",
    "It’s raining in the mountains.",
    "На улице темно.",
    "На вулиці темно.",
    "Na dworze jest ciemno."
  ],
  [
    "It’s bright in this room.",
    "It’s very light in this room.",
    "It’s 10 o’clock at night.",
    "It’s snowing in the village.",
    "It’s hard to wake up early.",
    "В этой комнате светло.",
    "У цій кімнаті світло.",
    "W tym pokoju jest jasno."
  ],
  [
    "It’s noisy here.",
    "It’s very loud in this place.",
    "It’s 6 kilometers to the airport.",
    "It’s cold in the forest.",
    "It’s raining in the city.",
    "Здесь шумно.",
    "Тут шумно.",
    "Tutaj jest głośno."
  ],
  [
    "It’s quiet in the library.",
    "It’s very silent in the library.",
    "It’s 8 o’clock in the morning.",
    "It’s hot in the desert.",
    "It’s snowing in the mountains.",
    "В библиотеке тихо.",
    "У бібліотеці тихо.",
    "W bibliotece jest cicho."
  ],
  [
    "It’s difficult to wake up early.",
    "It’s hard to get out of bed early.",
    "It’s 3 kilometers to the hospital.",
    "It’s sunny and warm today.",
    "It’s raining in the park.",
    "Трудно просыпаться рано.",
    "Важко прокидатися рано.",
    "Trudno wstawać wcześnie."
  ],
  [
    "It’s easy to learn this rule.",
    "It’s simple to understand this rule.",
    "It’s 11 o’clock now.",
    "It’s cold in the mountains.",
    "It’s snowing heavily today.",
    "Легко выучить это правило.",
    "Легко вивчити це правило.",
    "Łatwo nauczyć się tej zasady."
  ],
  [
    "It’s important to rest.",
    "It’s necessary to take a break.",
    "It’s 5 kilometers to the river.",
    "It’s raining in the city.",
    "It’s hot in the kitchen.",
    "Важно отдыхать.",
    "Важливо відпочивати.",
    "Ważne jest odpoczywać."
  ],
  [
    "It’s nice to see you.",
    "It’s good to meet you.",
    "It’s 9 kilometers to the station.",
    "It’s snowing in the forest.",
    "It’s difficult to solve this task.",
    "Приятно тебя видеть.",
    "Приємно тебе бачити.",
    "Miło cię widzieć."
  ],
  [
    "It’s strange to be here.",
    "It’s unusual to be in this place.",
    "It’s 2 o’clock now.",
    "It’s hot in the room.",
    "It’s raining in the village.",
    "Странно быть здесь.",
    "Дивно бути тут.",
    "Dziwnie tu być."
  ],
  [
    "It’s fun to travel.",
    "It’s enjoyable to go on trips.",
    "It’s 14 kilometers to the border.",
    "It’s cold in the mountains.",
    "It’s snowing outside.",
    "Путешествовать весело.",
    "Подорожувати весело.",
    "Podróżowanie jest fajne."
  ],
  [
    "It’s dangerous to drive fast.",
    "It’s risky to drive at high speed.",
    "It’s 7 o’clock in the evening.",
    "It’s warm in the room.",
    "It’s raining in the city center.",
    "Опасно ездить быстро.",
    "Небезпечно їздити швидко.",
    "Niebezpiecznie jest jeździć szybko."
  ],
  [
    "It’s safe to cross here.",
    "It’s okay to cross the street at this point.",
    "It’s 12 kilometers to the airport.",
    "It’s snowing in the mountains.",
    "It’s difficult to wake up early.",
    "Здесь безопасно переходить.",
    "Тут безпечно переходити.",
    "Tutaj jest bezpiecznie przechodzić."
  ],
  [
    "It’s possible to fix this.",
    "It’s easy to repair this thing.",
    "It’s 4 kilometers to the beach.",
    "It’s raining heavily today.",
    "It’s cold in the forest.",
    "Это можно исправить.",
    "Це можна виправити.",
    "Można to naprawić."
  ],

  [
    "It’s warm today.",
    "It’s pleasantly warm outside today.",
    "It’s 11 kilometers to the airport.",
    "It’s snowing in the mountains.",
    "It’s difficult to understand physics.",
    "Сегодня тепло.",
    "Сьогодні тепло.",
    "Dziś jest ciepło."
  ],
  [
    "It’s very hot outside.",
    "It’s extremely warm outside right now.",
    "It’s 5 o’clock in the morning.",
    "It’s raining in the forest.",
    "It’s easy to fix this phone.",
    "На улице очень жарко.",
    "На вулиці дуже спекотно.",
    "Na dworze jest bardzo gorąco."
  ],
  [
    "It’s cool this evening.",
    "It’s a bit chilly this evening.",
    "It’s 2 kilometers to the school.",
    "It’s snowing heavily today.",
    "It’s difficult to wake up early.",
    "Сегодня вечером прохладно.",
    "Сьогодні ввечері прохолодно.",
    "Dziś wieczorem jest chłodno."
  ],
  [
    "It’s foggy outside.",
    "It’s very misty outside now.",
    "It’s 9 o’clock at night.",
    "It’s warm in the kitchen.",
    "It’s easy to learn this topic.",
    "На улице туман.",
    "На вулиці туман.",
    "Na dworze jest mgliście."
  ],
  [
    "It’s sunny today.",
    "It’s bright and sunny outside today.",
    "It’s 6 kilometers to the river.",
    "It’s snowing in the village.",
    "It’s difficult to drive here.",
    "Сегодня солнечно.",
    "Сьогодні сонячно.",
    "Dziś jest słonecznie."
  ],
  [
    "It’s cloudy this morning.",
    "It’s very overcast this morning.",
    "It’s 3 kilometers to the hospital.",
    "It’s hot in the desert.",
    "It’s raining in the city center.",
    "Сегодня утром облачно.",
    "Сьогодні вранці хмарно.",
    "Dziś rano jest pochmurno."
  ],
  [
    "It’s getting dark.",
    "It’s becoming darker outside now.",
    "It’s 10 kilometers to the station.",
    "It’s warm in the living room.",
    "It’s snowing in the mountains.",
    "Становится темно.",
    "Сутеніє.",
    "Robi się ciemno."
  ],
  [
    "It’s getting late.",
    "It’s becoming quite late now.",
    "It’s 8 o’clock in the morning.",
    "It’s cold in the forest.",
    "It’s raining heavily today.",
    "Становится поздно.",
    "Стає пізно.",
    "Robi się późno."
  ],
  [
    "It’s comfortable here.",
    "It’s very cozy in this place.",
    "It’s 4 kilometers to the beach.",
    "It’s snowing in the city.",
    "It’s difficult to solve this task.",
    "Здесь комфортно.",
    "Тут комфортно.",
    "Tutaj jest wygodnie."
  ],
  [
    "It’s uncomfortable to sit here.",
    "It’s not pleasant to sit in this place.",
    "It’s 12 kilometers to the airport.",
    "It’s warm in the room.",
    "It’s raining in the mountains.",
    "Здесь неудобно сидеть.",
    "Тут незручно сидіти.",
    "Tutaj niewygodnie siedzieć."
  ],
  [
    "It’s interesting to read this book.",
    "It’s enjoyable to read this book.",
    "It’s 7 o’clock in the evening.",
    "It’s cold in the kitchen.",
    "It’s snowing outside.",
    "Интересно читать эту книгу.",
    "Цікаво читати цю книгу.",
    "Ciekawie się czyta tę książkę."
  ],
  [
    "It’s boring to wait here.",
    "It’s not fun to wait in this place.",
    "It’s 5 kilometers to the river.",
    "It’s warm in the office.",
    "It’s raining in the forest.",
    "Здесь скучно ждать.",
    "Тут нудно чекати.",
    "Nudno tu czekać."
  ],
  [
    "It’s exciting to travel abroad.",
    "It’s thrilling to go to other countries.",
    "It’s 9 o’clock at night.",
    "It’s cold in the mountains.",
    "It’s snowing in the village.",
    "Путешествовать за границу волнительно.",
    "Подорожувати за кордон захопливо.",
    "Ekscytująco jest podróżować za granicę."
  ],
  [
    "It’s relaxing to sit by the sea.",
    "It’s calming to sit near the water.",
    "It’s 2 kilometers to the supermarket.",
    "It’s raining in the city.",
    "It’s difficult to learn Japanese.",
    "Расслабляет сидеть у моря.",
    "Розслабляє сидіти біля моря.",
    "Relaksuje siedzenie nad morzem."
  ],
  [
    "It’s stressful to work at night.",
    "It’s hard to work during nighttime.",
    "It’s 11 kilometers to the border.",
    "It’s warm in the living room.",
    "It’s snowing heavily today.",
    "Стрессово работать ночью.",
    "Стресово працювати вночі.",
    "Stresujące jest pracować w nocy."
  ],
  [
    "It’s impossible to finish this today.",
    "It’s too hard to complete this today.",
    "It’s 6 kilometers to the station.",
    "It’s sunny and warm today.",
    "It’s raining in the mountains.",
    "Невозможно закончить это сегодня.",
    "Неможливо закінчити це сьогодні.",
    "Nie da się tego skończyć dziś."
  ],
  [
    "It’s possible to do it tomorrow.",
    "It’s realistic to complete it tomorrow.",
    "It’s 3 kilometers to the hospital.",
    "It’s cold in the forest.",
    "It’s snowing in the city.",
    "Можно сделать это завтра.",
    "Можна зробити це завтра.",
    "Można to zrobić jutro."
  ],
  [
    "It’s helpful to take notes.",
    "It’s useful to write things down.",
    "It’s 10 kilometers to the airport.",
    "It’s warm in the kitchen.",
    "It’s raining heavily today.",
    "Полезно делать заметки.",
    "Корисно робити нотатки.",
    "Pomocne jest robienie notatek."
  ],
  [
    "It’s dangerous to swim here.",
    "It’s unsafe to swim in this place.",
    "It’s 7 o’clock in the morning.",
    "It’s snowing in the mountains.",
    "It’s easy to learn this rule.",
    "Опасно плавать здесь.",
    "Небезпечно плавати тут.",
    "Niebezpiecznie jest tu pływać."
  ],
  [
    "It’s safe to walk here at night.",
    "It’s okay to walk here after dark.",
    "It’s 8 kilometers to the river.",
    "It’s hot in the room.",
    "It’s raining in the village.",
    "Здесь безопасно гулять ночью.",
    "Тут безпечно гуляти вночі.",
    "Bezpiecznie jest chodzić tu nocą."
  ],

  [
    "It’s hard to focus today.",
    "It’s difficult to concentrate today.",
    "It’s 9 kilometers to the airport.",
    "It’s snowing in the mountains.",
    "It’s warm in the living room.",
    "Сегодня трудно сосредоточиться.",
    "Сьогодні важко зосередитися.",
    "Dziś trudno się skupić."
  ],
  [
    "It’s easy to forget things.",
    "It’s simple to forget small details.",
    "It’s 6 kilometers to the river.",
    "It’s raining in the forest.",
    "It’s hot in the kitchen.",
    "Легко забывать вещи.",
    "Легко забувати речі.",
    "Łatwo zapominać rzeczy."
  ],
  [
    "It’s surprising to see him here.",
    "It’s unexpected to meet him in this place.",
    "It’s 3 kilometers to the hospital.",
    "It’s snowing heavily today.",
    "It’s warm in the office.",
    "Удивительно видеть его здесь.",
    "Дивно бачити його тут.",
    "Zaskakujące jest go tu widzieć."
  ],
  [
    "It’s unusual to hear silence here.",
    "It’s strange that it’s so quiet here.",
    "It’s 10 kilometers to the station.",
    "It’s raining in the city center.",
    "It’s cold in the mountains.",
    "Необычно слышать тишину здесь.",
    "Незвично чути тишу тут.",
    "Niezwykłe jest słyszeć tu ciszę."
  ],
  [
    "It’s normal to feel tired.",
    "It’s common to feel tired sometimes.",
    "It’s 8 o’clock in the evening.",
    "It’s snowing in the village.",
    "It’s hot in the desert.",
    "Нормально чувствовать усталость.",
    "Нормально відчувати втому.",
    "To normalne czuć zmęczenie."
  ],
  [
    "It’s polite to say thank you.",
    "It’s good manners to say thank you.",
    "It’s 12 kilometers to the airport.",
    "It’s raining in the mountains.",
    "It’s difficult to learn Japanese.",
    "Вежливо говорить спасибо.",
    "Ввічливо казати дякую.",
    "Uprzejmie jest mówić dziękuję."
  ],
  [
    "It’s rude to interrupt people.",
    "It’s impolite to talk over someone.",
    "It’s 5 kilometers to the river.",
    "It’s warm in the room.",
    "It’s snowing outside.",
    "Грубо перебивать людей.",
    "Грубо перебивати людей.",
    "Niegrzecznie jest przerywać ludziom."
  ],
  [
    "It’s helpful to ask questions.",
    "It’s useful to ask for clarification.",
    "It’s 4 kilometers to the beach.",
    "It’s raining in the forest.",
    "It’s cold in the kitchen.",
    "Полезно задавать вопросы.",
    "Корисно ставити запитання.",
    "Pomocne jest zadawanie pytań."
  ],
  [
    "It’s confusing to read this text.",
    "It’s hard to understand this text clearly.",
    "It’s 7 o’clock in the morning.",
    "It’s snowing in the mountains.",
    "It’s warm in the office.",
    "Запутанно читать этот текст.",
    "Заплутано читати цей текст.",
    "Ten tekst jest mylący."
  ],
  [
    "It’s clear what to do.",
    "It’s obvious what needs to be done.",
    "It’s 11 kilometers to the border.",
    "It’s raining heavily today.",
    "It’s hot in the living room.",
    "Понятно, что делать.",
    "Зрозуміло, що робити.",
    "Jasne jest, co trzeba zrobić."
  ],
  [
    "It’s impossible to know everything.",
    "It’s not realistic to know absolutely everything.",
    "It’s 2 kilometers to the supermarket.",
    "It’s snowing in the village.",
    "It’s warm in the kitchen.",
    "Невозможно знать всё.",
    "Неможливо знати все.",
    "Nie da się wiedzieć wszystkiego."
  ],
  [
    "It’s possible to learn quickly.",
    "It’s realistic to study fast.",
    "It’s 9 o’clock at night.",
    "It’s raining in the city.",
    "It’s cold in the mountains.",
    "Можно учиться быстро.",
    "Можна вчитися швидко.",
    "Można uczyć się szybko."
  ],
  [
    "It’s dangerous to walk on ice.",
    "It’s risky to walk on frozen surfaces.",
    "It’s 6 kilometers to the station.",
    "It’s snowing heavily today.",
    "It’s warm in the office.",
    "Опасно ходить по льду.",
    "Небезпечно ходити по льоду.",
    "Niebezpiecznie jest chodzić po lodzie."
  ],
  [
    "It’s safe to drink this water.",
    "It’s okay to drink this water.",
    "It’s 3 kilometers to the hospital.",
    "It’s raining in the mountains.",
    "It’s hot in the desert.",
    "Эту воду безопасно пить.",
    "Цю воду безпечно пити.",
    "Tę wodę można bezpiecznie pić."
  ],
  [
    "It’s fun to play games.",
    "It’s enjoyable to play games.",
    "It’s 10 kilometers to the airport.",
    "It’s snowing in the forest.",
    "It’s difficult to solve this task.",
    "Весело играть в игры.",
    "Весело грати в ігри.",
    "Fajnie jest grać w gry."
  ],
  [
    "It’s tiring to work all day.",
    "It’s exhausting to work the whole day.",
    "It’s 8 o’clock in the morning.",
    "It’s raining in the city center.",
    "It’s warm in the kitchen.",
    "Утомительно работать весь день.",
    "Виснажливо працювати весь день.",
    "Męczące jest pracować cały dzień."
  ],
  [
    "It’s relaxing to listen to music.",
    "It’s calming to listen to music.",
    "It’s 5 kilometers to the river.",
    "It’s snowing in the mountains.",
    "It’s cold in the forest.",
    "Расслабляет слушать музыку.",
    "Розслабляє слухати музику.",
    "Relaksuje słuchanie muzyki."
  ],
  [
    "It’s stressful to be late.",
    "It’s unpleasant to arrive late.",
    "It’s 12 kilometers to the airport.",
    "It’s raining heavily today.",
    "It’s warm in the living room.",
    "Стрессово опаздывать.",
    "Стресово запізнюватися.",
    "Stresujące jest się spóźniać."
  ],
  [
    "It’s normal to make mistakes.",
    "It’s natural to make mistakes sometimes.",
    "It’s 4 kilometers to the beach.",
    "It’s snowing in the village.",
    "It’s hot in the kitchen.",
    "Нормально ошибаться.",
    "Нормально помилятися.",
    "To normalne popełniać błędy."
  ],
  [
    "It’s helpful to practice every day.",
    "It’s useful to train daily.",
    "It’s 7 o’clock in the evening.",
    "It’s raining in the forest.",
    "It’s cold in the mountains.",
    "Полезно практиковаться каждый день.",
    "Корисно практикуватися щодня.",
    "Pomocne jest ćwiczyć codziennie."
  ],

  [
    "It’s hard to stay awake.",
    "It’s difficult to keep your eyes open.",
    "It’s 9 kilometers to the airport.",
    "It’s snowing in the mountains.",
    "It’s warm in the living room.",
    "Трудно не заснуть.",
    "Важко не заснути.",
    "Trudno nie zasnąć."
  ],
  [
    "It’s easy to fall asleep here.",
    "It’s simple to relax and fall asleep here.",
    "It’s 6 kilometers to the river.",
    "It’s raining in the forest.",
    "It’s hot in the kitchen.",
    "Здесь легко уснуть.",
    "Тут легко заснути.",
    "Łatwo tu zasnąć."
  ],
  [
    "It’s surprising to hear this news.",
    "It’s unexpected to receive such news.",
    "It’s 3 kilometers to the hospital.",
    "It’s snowing heavily today.",
    "It’s warm in the office.",
    "Удивительно слышать такие новости.",
    "Дивно чути такі новини.",
    "Zaskakujące jest usłyszeć tę wiadomość."
  ],
  [
    "It’s unusual to see him smiling.",
    "It’s strange to see him in a good mood.",
    "It’s 10 kilometers to the station.",
    "It’s raining in the city center.",
    "It’s cold in the mountains.",
    "Необычно видеть его улыбающимся.",
    "Незвично бачити його усміхненим.",
    "Niezwykłe jest widzieć go uśmiechniętego."
  ],
  [
    "It’s normal to feel nervous.",
    "It’s common to feel nervous sometimes.",
    "It’s 8 o’clock in the evening.",
    "It’s snowing in the village.",
    "It’s hot in the desert.",
    "Нормально нервничать.",
    "Нормально нервувати.",
    "To normalne się denerwować."
  ],
  [
    "It’s polite to listen carefully.",
    "It’s good manners to pay attention.",
    "It’s 12 kilometers to the airport.",
    "It’s raining in the mountains.",
    "It’s difficult to learn Japanese.",
    "Вежливо внимательно слушать.",
    "Ввічливо уважно слухати.",
    "Uprzejmie jest uważnie słuchać."
  ],
  [
    "It’s rude to ignore people.",
    "It’s impolite to pretend not to hear someone.",
    "It’s 5 kilometers to the river.",
    "It’s warm in the room.",
    "It’s snowing outside.",
    "Грубо игнорировать людей.",
    "Грубо ігнорувати людей.",
    "Niegrzecznie jest ignorować ludzi."
  ],
  [
    "It’s helpful to write reminders.",
    "It’s useful to keep notes.",
    "It’s 4 kilometers to the beach.",
    "It’s raining in the forest.",
    "It’s cold in the kitchen.",
    "Полезно писать напоминания.",
    "Корисно писати нагадування.",
    "Pomocne jest pisać przypomnienia."
  ],
  [
    "It’s confusing to follow these instructions.",
    "It’s hard to understand these instructions.",
    "It’s 7 o’clock in the morning.",
    "It’s snowing in the mountains.",
    "It’s warm in the office.",
    "Запутанно следовать этим инструкциям.",
    "Заплутано слідувати цим інструкціям.",
    "Te instrukcje są mylące."
  ],
  [
    "It’s clear what he means.",
    "It’s obvious what he is trying to say.",
    "It’s 11 kilometers to the border.",
    "It’s raining heavily today.",
    "It’s hot in the living room.",
    "Понятно, что он имеет в виду.",
    "Зрозуміло, що він має на увазі.",
    "Jasne jest, co on ma na myśli."
  ],
  [
    "It’s impossible to answer this question.",
    "It’s too hard to give a clear answer.",
    "It’s 2 kilometers to the supermarket.",
    "It’s snowing in the village.",
    "It’s warm in the kitchen.",
    "Невозможно ответить на этот вопрос.",
    "Неможливо відповісти на це питання.",
    "Nie da się odpowiedzieć na to pytanie."
  ],
  [
    "It’s possible to fix the situation.",
    "It’s realistic to improve things.",
    "It’s 9 o’clock at night.",
    "It’s raining in the city.",
    "It’s cold in the mountains.",
    "Можно исправить ситуацию.",
    "Можна виправити ситуацію.",
    "Można naprawić sytuację."
  ],
  [
    "It’s dangerous to touch this wire.",
    "It’s risky to touch this electrical wire.",
    "It’s 6 kilometers to the station.",
    "It’s snowing heavily today.",
    "It’s warm in the office.",
    "Опасно трогать этот провод.",
    "Небезпечно торкатися цього дроту.",
    "Niebezpiecznie jest dotykać tego przewodu."
  ],
  [
    "It’s safe to use this device.",
    "It’s okay to operate this device.",
    "It’s 3 kilometers to the hospital.",
    "It’s raining in the mountains.",
    "It’s hot in the desert.",
    "Безопасно пользоваться этим устройством.",
    "Безпечно користуватися цим пристроєм.",
    "Bezpiecznie jest używać tego urządzenia."
  ],
  [
    "It’s fun to cook together.",
    "It’s enjoyable to prepare food together.",
    "It’s 10 kilometers to the airport.",
    "It’s snowing in the forest.",
    "It’s difficult to solve this task.",
    "Весело готовить вместе.",
    "Весело готувати разом.",
    "Fajnie jest gotować razem."
  ],
  [
    "It’s tiring to stand all day.",
    "It’s exhausting to stand for many hours.",
    "It’s 8 o’clock in the morning.",
    "It’s raining in the city center.",
    "It’s warm in the kitchen.",
    "Утомительно стоять весь день.",
    "Виснажливо стояти весь день.",
    "Męczące jest stać cały dzień."
  ],
  [
    "It’s relaxing to drink tea in silence.",
    "It’s calming to enjoy tea quietly.",
    "It’s 5 kilometers to the river.",
    "It’s snowing in the mountains.",
    "It’s cold in the forest.",
    "Расслабляет пить чай в тишине.",
    "Розслабляє пити чай у тиші.",
    "Relaksuje picie herbaty w ciszy."
  ],
  [
    "It’s stressful to move to a new city.",
    "It’s difficult to relocate to a new place.",
    "It’s 12 kilometers to the airport.",
    "It’s raining heavily today.",
    "It’s warm in the living room.",
    "Стрессово переезжать в новый город.",
    "Стресово переїжджати в нове місто.",
    "Stresujące jest przeprowadzać się do nowego miasta."
  ],
  [
    "It’s normal to feel confused sometimes.",
    "It’s natural to feel confused occasionally.",
    "It’s 4 kilometers to the beach.",
    "It’s snowing in the village.",
    "It’s hot in the kitchen.",
    "Нормально иногда путаться.",
    "Нормально інколи плутатися.",
    "To normalne czasem się mylić."
  ],
  [
    "It’s helpful to repeat new words.",
    "It’s useful to practice vocabulary.",
    "It’s 7 o’clock in the evening.",
    "It’s raining in the forest.",
    "It’s cold in the mountains.",
    "Полезно повторять новые слова.",
    "Корисно повторювати нові слова.",
    "Pomocne jest powtarzanie nowych słów."
  ],

  [
    "It’s hard to stay positive sometimes.",
    "It’s difficult to keep a positive attitude sometimes.",
    "It’s 9 kilometers to the airport.",
    "It’s snowing in the mountains.",
    "It’s warm in the living room.",
    "Иногда трудно оставаться позитивным.",
    "Іноді важко залишатися позитивним.",
    "Czasem trudno pozostać pozytywnym."
  ],
  [
    "It’s easy to get distracted.",
    "It’s simple to lose focus.",
    "It’s 6 kilometers to the river.",
    "It’s raining in the forest.",
    "It’s hot in the kitchen.",
    "Легко отвлечься.",
    "Легко відволіктися.",
    "Łatwo się rozproszyć."
  ],
  [
    "It’s surprising to see them together.",
    "It’s unexpected to see them in the same place.",
    "It’s 3 kilometers to the hospital.",
    "It’s snowing heavily today.",
    "It’s warm in the office.",
    "Удивительно видеть их вместе.",
    "Дивно бачити їх разом.",
    "Zaskakujące jest widzieć ich razem."
  ],
  [
    "It’s unusual to hear him laugh.",
    "It’s strange to hear him laughing.",
    "It’s 10 kilometers to the station.",
    "It’s raining in the city center.",
    "It’s cold in the mountains.",
    "Необычно слышать, как он смеётся.",
    "Незвично чути, як він сміється.",
    "Niezwykłe jest słyszeć jego śmiech."
  ],
  [
    "It’s normal to feel lonely sometimes.",
    "It’s common to feel lonely occasionally.",
    "It’s 8 o’clock in the evening.",
    "It’s snowing in the village.",
    "It’s hot in the desert.",
    "Нормально иногда чувствовать одиночество.",
    "Нормально інколи відчувати самотність.",
    "To normalne czasem czuć się samotnym."
  ],
  [
    "It’s polite to wait your turn.",
    "It’s good manners to wait patiently.",
    "It’s 12 kilometers to the airport.",
    "It’s raining in the mountains.",
    "It’s difficult to learn Japanese.",
    "Вежливо ждать своей очереди.",
    "Ввічливо чекати своєї черги.",
    "Uprzejmie jest czekać na swoją kolej."
  ],
  [
    "It’s rude to shout at people.",
    "It’s impolite to raise your voice at others.",
    "It’s 5 kilometers to the river.",
    "It’s warm in the room.",
    "It’s snowing outside.",
    "Грубо кричать на людей.",
    "Грубо кричати на людей.",
    "Niegrzecznie jest krzyczeć na ludzi."
  ],
  [
    "It’s helpful to plan ahead.",
    "It’s useful to think in advance.",
    "It’s 4 kilometers to the beach.",
    "It’s raining in the forest.",
    "It’s cold in the kitchen.",
    "Полезно планировать заранее.",
    "Корисно планувати наперед.",
    "Pomocne jest planować z wyprzedzeniem."
  ],
  [
    "It’s confusing to talk to him.",
    "It’s hard to understand what he means.",
    "It’s 7 o’clock in the morning.",
    "It’s snowing in the mountains.",
    "It’s warm in the office.",
    "С ним запутанно разговаривать.",
    "З ним заплутано розмовляти.",
    "Trudno z nim rozmawiać."
  ],
  [
    "It’s clear that she is right.",
    "It’s obvious that she is correct.",
    "It’s 11 kilometers to the border.",
    "It’s raining heavily today.",
    "It’s hot in the living room.",
    "Понятно, что она права.",
    "Зрозуміло, що вона має рацію.",
    "Jasne jest, że ona ma rację."
  ],
  [
    "It’s impossible to change the past.",
    "It’s not realistic to change what already happened.",
    "It’s 2 kilometers to the supermarket.",
    "It’s snowing in the village.",
    "It’s warm in the kitchen.",
    "Невозможно изменить прошлое.",
    "Неможливо змінити минуле.",
    "Nie da się zmienić przeszłości."
  ],
  [
    "It’s possible to start again.",
    "It’s realistic to begin from scratch.",
    "It’s 9 o’clock at night.",
    "It’s raining in the city.",
    "It’s cold in the mountains.",
    "Можно начать заново.",
    "Можна почати знову.",
    "Można zacząć od nowa."
  ],
  [
    "It’s dangerous to run on wet floors.",
    "It’s risky to run on slippery surfaces.",
    "It’s 6 kilometers to the station.",
    "It’s snowing heavily today.",
    "It’s warm in the office.",
    "Опасно бегать по мокрому полу.",
    "Небезпечно бігати по мокрій підлозі.",
    "Niebezpiecznie jest biegać po mokrej podłodze."
  ],
  [
    "It’s safe to cross the street here.",
    "It’s okay to cross at this point.",
    "It’s 3 kilometers to the hospital.",
    "It’s raining in the mountains.",
    "It’s hot in the desert.",
    "Здесь безопасно переходить улицу.",
    "Тут безпечно переходити дорогу.",
    "Bezpiecznie jest przechodzić tutaj."
  ],
  [
    "It’s fun to learn new things.",
    "It’s enjoyable to discover new information.",
    "It’s 10 kilometers to the airport.",
    "It’s snowing in the forest.",
    "It’s difficult to solve this task.",
    "Весело учить новое.",
    "Весело вчити нове.",
    "Fajnie jest uczyć się nowych rzeczy."
  ],
  [
    "It’s tiring to clean the whole house.",
    "It’s exhausting to clean everything.",
    "It’s 8 o’clock in the morning.",
    "It’s raining in the city center.",
    "It’s warm in the kitchen.",
    "Утомительно убирать весь дом.",
    "Виснажливо прибирати весь будинок.",
    "Męczące jest sprzątać cały dom."
  ],
  [
    "It’s relaxing to watch the sunset.",
    "It’s calming to look at the sunset.",
    "It’s 5 kilometers to the river.",
    "It’s snowing in the mountains.",
    "It’s cold in the forest.",
    "Расслабляет смотреть на закат.",
    "Розслабляє дивитися на захід сонця.",
    "Relaksuje oglądanie zachodu słońca."
  ],
  [
    "It’s stressful to take an exam.",
    "It’s difficult to stay calm during an exam.",
    "It’s 12 kilometers to the airport.",
    "It’s raining heavily today.",
    "It’s warm in the living room.",
    "Стрессово сдавать экзамен.",
    "Стресово складати іспит.",
    "Stresujące jest zdawać egzamin."
  ],
  [
    "It’s normal to feel excited before a trip.",
    "It’s natural to feel excited before traveling.",
    "It’s 4 kilometers to the beach.",
    "It’s snowing in the village.",
    "It’s hot in the kitchen.",
    "Нормально волноваться перед поездкой.",
    "Нормально хвилюватися перед поїздкою.",
    "To normalne ekscytować się przed podróżą."
  ],
  [
    "It’s helpful to organize your workspace.",
    "It’s useful to keep your desk tidy.",
    "It’s 7 o’clock in the evening.",
    "It’s raining in the forest.",
    "It’s cold in the mountains.",
    "Полезно организовать своё рабочее место.",
    "Корисно організувати своє робоче місце.",
    "Pomocne jest uporządkować swoje miejsce pracy."
  ],

  [
    "It’s getting warmer this afternoon.",
    "Is it getting warmer this afternoon?",
    "Is it far from the train station?",
    "Is it raining in your city?",
    "Is it easy to cook this meal?",
    "Сегодня днём становится теплее.",
    "Сьогодні вдень теплішає.",
    "Po południu robi się cieplej."
  ],
  [
    "It’s becoming windy outside.",
    "Is it becoming windy outside?",
    "Is it 12 kilometers to the airport?",
    "Is it snowing in the mountains?",
    "Is it difficult to learn German?",
    "На улице становится ветрено.",
    "На вулиці стає вітряно.",
    "Na dworze robi się wietrznie."
  ],
  [
    "It’s getting brighter in the room.",
    "Is it getting brighter in the room?",
    "Is it your birthday today?",
    "Is it raining heavily now?",
    "Is it hard to wake up early?",
    "В комнате становится светлее.",
    "У кімнаті світлішає.",
    "W pokoju robi się jaśniej."
  ],
  [
    "It’s becoming harder to focus.",
    "Is it becoming harder to focus?",
    "Is it 5 kilometers to the river?",
    "Is it snowing in the village?",
    "Is it warm in the kitchen?",
    "Становится труднее сосредоточиться.",
    "Стає важче зосередитися.",
    "Trudniej się skupić."
  ],
  [
    "It’s getting easier to understand this topic.",
    "Is it getting easier to understand this topic?",
    "Is it far from your home?",
    "Is it raining in the forest?",
    "Is it cold in the mountains?",
    "Эту тему становится легче понимать.",
    "Цю тему стає легше розуміти.",
    "Łatwiej zrozumieć ten temat."
  ],
  [
    "It’s becoming more comfortable here.",
    "Is it becoming more comfortable here?",
    "Is it 3 kilometers to the hospital?",
    "Is it snowing outside?",
    "Is it difficult to fix this phone?",
    "Здесь становится комфортнее.",
    "Тут стає комфортніше.",
    "Robi się tu wygodniej."
  ],
  [
    "It’s getting colder in the evenings.",
    "Is it getting colder in the evenings?",
    "Is it warm in the living room?",
    "Is it raining in the city center?",
    "Is it easy to learn Spanish?",
    "По вечерам становится холоднее.",
    "Ввечері стає холодніше.",
    "Wieczorami robi się zimniej."
  ],
  [
    "It’s becoming noisy in this area.",
    "Is it becoming noisy in this area?",
    "Is it 10 kilometers to the station?",
    "Is it snowing in the mountains?",
    "Is it difficult to solve this task?",
    "В этом районе становится шумно.",
    "У цьому районі стає шумно.",
    "W tej okolicy robi się głośno."
  ],
  [
    "It’s getting quieter in the library.",
    "Is it getting quieter in the library?",
    "Is it raining in your town?",
    "Is it hot in the desert?",
    "Is it far from the border?",
    "В библиотеке становится тише.",
    "У бібліотеці стає тихіше.",
    "W bibliotece robi się ciszej."
  ],
  [
    "It’s becoming easier to fall asleep.",
    "Is it becoming easier to fall asleep?",
    "Is it 8 kilometers to the river?",
    "Is it snowing in the forest?",
    "Is it warm in the office?",
    "Засыпать становится легче.",
    "Засинати стає легше.",
    "Łatwiej zasnąć."
  ],
  [
    "It’s getting harder to stay awake.",
    "Is it getting harder to stay awake?",
    "Is it raining in the mountains?",
    "Is it cold in the forest?",
    "Is it easy to fix this?",
    "Труднее оставаться бодрым.",
    "Важче залишатися бадьорим.",
    "Trudniej nie zasnąć."
  ],
  [
    "It’s becoming more interesting to read this book.",
    "Is it becoming more interesting to read this book?",
    "Is it 2 kilometers to the supermarket?",
    "Is it snowing heavily today?",
    "Is it warm in the living room?",
    "Эту книгу становится интереснее читать.",
    "Цю книгу стає цікавіше читати.",
    "Ta książka robi się ciekawsza."
  ],
  [
    "It’s getting easier to speak English.",
    "Is it getting easier to speak English?",
    "Is it raining in the city?",
    "Is it cold in the mountains?",
    "Is it difficult to wake up early?",
    "Говорить по‑английски становится легче.",
    "Говорити англійською стає легше.",
    "Łatwiej mówić po angielsku."
  ],
  [
    "It’s becoming harder to find time.",
    "Is it becoming harder to find time?",
    "Is it 11 kilometers to the airport?",
    "Is it snowing in the village?",
    "Is it warm in the kitchen?",
    "Становится труднее находить время.",
    "Стає важче знаходити час.",
    "Trudniej znaleźć czas."
  ],
  [
    "It’s getting more comfortable to work here.",
    "Is it getting more comfortable to work here?",
    "Is it raining outside?",
    "Is it cold in the forest?",
    "Is it easy to learn this rule?",
    "Работать здесь становится комфортнее.",
    "Працювати тут стає комфортніше.",
    "Pracuje się tu wygodniej."
  ],
  [
    "It’s becoming easier to stay calm.",
    "Is it becoming easier to stay calm?",
    "Is it 7 o’clock in the morning?",
    "Is it snowing in the mountains?",
    "Is it warm in the office?",
    "Становится легче сохранять спокойствие.",
    "Стає легше зберігати спокій.",
    "Łatwiej zachować spokój."
  ],
  [
    "It’s getting harder to hear anything.",
    "Is it getting harder to hear anything?",
    "Is it raining in the forest?",
    "Is it hot in the desert?",
    "Is it far from the city center?",
    "Становится труднее что‑то услышать.",
    "Стає важче щось почути.",
    "Trudniej coś usłyszeć."
  ],
  [
    "It’s becoming easier to stay organized.",
    "Is it becoming easier to stay organized?",
    "Is it 4 kilometers to the beach?",
    "Is it snowing in the city?",
    "Is it warm in the living room?",
    "Становится легче быть организованным.",
    "Стає легше бути організованим.",
    "Łatwiej być zorganizowanym."
  ],
  [
    "It’s getting more difficult to decide.",
    "Is it getting more difficult to decide?",
    "Is it raining in your town?",
    "Is it cold in the mountains?",
    "Is it easy to fix this?",
    "Становится труднее принимать решения.",
    "Стає важче приймати рішення.",
    "Trudniej podjąć decyzję."
  ],
  [
    "It’s becoming easier to stay motivated.",
    "Is it becoming easier to stay motivated?",
    "Is it 6 kilometers to the station?",
    "Is it snowing heavily today?",
    "Is it warm in the kitchen?",
    "Становится легче сохранять мотивацию.",
    "Стає легше зберігати мотивацію.",
    "Łatwiej utrzymać motywację."
  ],
  [
    "It’s getting harder to remember names.",
    "Is it getting harder to remember names?",
    "Is it raining in the mountains?",
    "Is it cold in the forest?",
    "Is it easy to learn Spanish?",
    "Становится труднее запоминать имена.",
    "Стає важче запам’ятовувати імена.",
    "Trudniej zapamiętać imiona."
  ],
  [
    "It’s becoming easier to stay healthy.",
    "Is it becoming easier to stay healthy?",
    "Is it 8 kilometers to the river?",
    "Is it snowing in the village?",
    "Is it warm in the office?",
    "Становится легче быть здоровым.",
    "Стає легше бути здоровим.",
    "Łatwiej być zdrowym."
  ],
  [
    "It’s getting more difficult to stay patient.",
    "Is it getting more difficult to stay patient?",
    "Is it raining in the city center?",
    "Is it cold in the mountains?",
    "Is it easy to fix this?",
    "Становится труднее оставаться терпеливым.",
    "Стає важче залишатися терплячим.",
    "Trudniej zachować cierpliwość."
  ],
  [
    "It’s becoming easier to stay focused.",
    "Is it becoming easier to stay focused?",
    "Is it 3 kilometers to the hospital?",
    "Is it snowing in the forest?",
    "Is it warm in the kitchen?",
    "Становится легче сохранять концентрацию.",
    "Стає легше зберігати концентрацію.",
    "Łatwiej utrzymać koncentrację."
  ],
  [
    "It’s getting harder to stay quiet.",
    "Is it getting harder to stay quiet?",
    "Is it raining in your city?",
    "Is it cold in the desert?",
    "Is it easy to learn this rule?",
    "Становится труднее молчать.",
    "Стає важче мовчати.",
    "Trudniej milczeć."
  ],

  [
    "It’s becoming easier to trust people.",
    "Is it becoming easier to trust people?",
    "Is it raining in the mountains?",
    "Is it far from the airport?",
    "Is it warm in the kitchen?",
    "Становится легче доверять людям.",
    "Стає легше довіряти людям.",
    "Łatwiej ufać ludziom."
  ],
  [
    "It’s getting harder to stay silent.",
    "Is it getting harder to stay silent?",
    "Is it snowing in the forest?",
    "Is it 10 kilometers to the station?",
    "Is it easy to learn this rule?",
    "Становится труднее молчать.",
    "Стає важче мовчати.",
    "Trudniej milczeć."
  ],
  [
    "It’s becoming easier to stay positive.",
    "Is it becoming easier to stay positive?",
    "Is it raining in your city?",
    "Is it cold in the mountains?",
    "Is it difficult to fix this?",
    "Становится легче оставаться позитивным.",
    "Стає легше залишатися позитивним.",
    "Łatwiej pozostać pozytywnym."
  ],
  [
    "It’s getting harder to stay focused at night.",
    "Is it getting harder to stay focused at night?",
    "Is it warm in the living room?",
    "Is it snowing heavily today?",
    "Is it far from your home?",
    "Ночью становится труднее концентрироваться.",
    "Вночі стає важче концентруватися.",
    "Trudniej skupić się nocą."
  ],
  [
    "It’s becoming easier to wake up early.",
    "Is it becoming easier to wake up early?",
    "Is it raining in the forest?",
    "Is it hot in the desert?",
    "Is it 3 kilometers to the hospital?",
    "Просыпаться рано становится легче.",
    "Прокидатися рано стає легше.",
    "Łatwiej wstawać wcześnie."
  ],
  [
    "It’s getting harder to stay warm.",
    "Is it getting harder to stay warm?",
    "Is it snowing in the mountains?",
    "Is it warm in the office?",
    "Is it easy to learn Spanish?",
    "Становится труднее сохранять тепло.",
    "Стає важче зберігати тепло.",
    "Trudniej utrzymać ciepło."
  ],
  [
    "It’s becoming easier to stay organized at work.",
    "Is it becoming easier to stay organized at work?",
    "Is it raining in the city center?",
    "Is it cold in the forest?",
    "Is it far from the border?",
    "На работе становится легче быть организованным.",
    "На роботі стає легше бути організованим.",
    "Łatwiej być zorganizowanym w pracy."
  ],
  [
    "It’s getting harder to stay relaxed.",
    "Is it getting harder to stay relaxed?",
    "Is it snowing in the village?",
    "Is it warm in the kitchen?",
    "Is it 6 kilometers to the river?",
    "Становится труднее расслабляться.",
    "Стає важче розслаблятися.",
    "Trudniej się zrelaksować."
  ],
  [
    "It’s becoming easier to stay productive.",
    "Is it becoming easier to stay productive?",
    "Is it raining outside?",
    "Is it cold in the mountains?",
    "Is it easy to fix this phone?",
    "Становится легче оставаться продуктивным.",
    "Стає легше залишатися продуктивним.",
    "Łatwiej być produktywnym."
  ],
  [
    "It’s getting harder to stay awake during meetings.",
    "Is it getting harder to stay awake during meetings?",
    "Is it snowing heavily today?",
    "Is it warm in the living room?",
    "Is it far from the city center?",
    "На встречах становится труднее не заснуть.",
    "На зустрічах стає важче не заснути.",
    "Trudniej nie zasnąć na spotkaniach."
  ],
  [
    "It’s becoming easier to stay hydrated.",
    "Is it becoming easier to stay hydrated?",
    "Is it raining in the forest?",
    "Is it cold in the desert?",
    "Is it 12 kilometers to the airport?",
    "Становится легче пить достаточно воды.",
    "Стає легше пити достатньо води.",
    "Łatwiej dbać o nawodnienie."
  ],
  [
    "It’s getting harder to stay on schedule.",
    "Is it getting harder to stay on schedule?",
    "Is it snowing in the mountains?",
    "Is it warm in the office?",
    "Is it easy to learn this rule?",
    "Становится труднее придерживаться расписания.",
    "Стає важче дотримуватися графіка.",
    "Trudniej trzymać się harmonogramu."
  ],
  [
    "It’s becoming easier to stay active.",
    "Is it becoming easier to stay active?",
    "Is it raining in your city?",
    "Is it cold in the forest?",
    "Is it far from the station?",
    "Становится легче быть активным.",
    "Стає легше бути активним.",
    "Łatwiej być aktywnym."
  ],
  [
    "It’s getting harder to stay optimistic.",
    "Is it getting harder to stay optimistic?",
    "Is it snowing in the village?",
    "Is it warm in the kitchen?",
    "Is it easy to fix this?",
    "Становится труднее оставаться оптимистом.",
    "Стає важче залишатися оптимістом.",
    "Trudniej pozostać optymistą."
  ],
  [
    "It’s becoming easier to stay flexible.",
    "Is it becoming easier to stay flexible?",
    "Is it raining in the mountains?",
    "Is it cold in the desert?",
    "Is it 5 kilometers to the river?",
    "Становится легче быть гибким.",
    "Стає легше бути гнучким.",
    "Łatwiej być elastycznym."
  ],
  [
    "It’s getting harder to stay focused while studying.",
    "Is it getting harder to stay focused while studying?",
    "Is it snowing heavily today?",
    "Is it warm in the living room?",
    "Is it far from your home?",
    "Учиться становится труднее концентрируясь.",
    "Вчитися стає важче концентруючись.",
    "Trudniej skupić się podczas nauki."
  ],
  [
    "It’s becoming easier to stay calm under pressure.",
    "Is it becoming easier to stay calm under pressure?",
    "Is it raining in the forest?",
    "Is it cold in the mountains?",
    "Is it easy to learn Spanish?",
    "Становится легче сохранять спокойствие под давлением.",
    "Стає легше зберігати спокій під тиском.",
    "Łatwiej zachować spokój pod presją."
  ],
  [
    "It’s getting harder to stay organized at home.",
    "Is it getting harder to stay organized at home?",
    "Is it snowing in the village?",
    "Is it warm in the office?",
    "Is it 3 kilometers to the hospital?",
    "Дома становится труднее быть организованным.",
    "Вдома стає важче бути організованим.",
    "Trudniej być zorganizowanym w domu."
  ],
  [
    "It’s becoming easier to stay focused in the morning.",
    "Is it becoming easier to stay focused in the morning?",
    "Is it raining in your city?",
    "Is it cold in the forest?",
    "Is it far from the border?",
    "По утрам становится легче концентрироваться.",
    "Вранці стає легше концентруватися.",
    "Rano łatwiej się skupić."
  ],
  [
    "It’s getting harder to stay awake after lunch.",
    "Is it getting harder to stay awake after lunch?",
    "Is it snowing in the mountains?",
    "Is it warm in the kitchen?",
    "Is it easy to fix this?",
    "После обеда становится труднее не заснуть.",
    "Після обіду стає важче не заснути.",
    "Po obiedzie trudniej nie zasnąć."
  ],
  [
    "It’s becoming easier to stay focused during work.",
    "Is it becoming easier to stay focused during work?",
    "Is it raining in the forest?",
    "Is it cold in the desert?",
    "Is it 10 kilometers to the station?",
    "Во время работы становится легче концентрироваться.",
    "Під час роботи стає легше концентруватися.",
    "Łatwiej skupić się podczas pracy."
  ],
  [
    "It’s getting harder to stay motivated in winter.",
    "Is it getting harder to stay motivated in winter?",
    "Is it snowing heavily today?",
    "Is it warm in the living room?",
    "Is it far from your home?",
    "Зимой становится труднее сохранять мотивацию.",
    "Взимку стає важче зберігати мотивацію.",
    "Zimą trudniej utrzymać motywację."
  ],
  [
    "It’s becoming easier to stay focused while reading.",
    "Is it becoming easier to stay focused while reading?",
    "Is it raining in the city center?",
    "Is it cold in the mountains?",
    "Is it easy to learn this rule?",
    "Во время чтения становится легче концентрироваться.",
    "Під час читання стає легше концентруватися.",
    "Łatwiej skupić się podczas czytania."
  ],
  [
    "It’s getting harder to stay disciplined.",
    "Is it getting harder to stay disciplined?",
    "Is it snowing in the village?",
    "Is it warm in the kitchen?",
    "Is it 6 kilometers to the river?",
    "Становится труднее сохранять дисциплину.",
    "Стає важче зберігати дисципліну.",
    "Trudniej zachować dyscyplinę."
  ],
  [
    "It’s becoming easier to stay focused during conversations.",
    "Is it becoming easier to stay focused during conversations?",
    "Is it raining in your city?",
    "Is it cold in the forest?",
    "Is it far from the airport?",
    "Во время разговоров становится легче концентрироваться.",
    "Під час розмов стає легше концентруватися.",
    "Łatwiej skupić się podczas rozmów."
  ],

  [
    "It’s very quiet in the office today. It feels unusual.",
    "The office is unusually quiet today.",
    "The weather is getting colder this week.",
    "It’s difficult to understand this topic.",
    "It’s far from the train station.",
    "Сегодня в офисе очень тихо. Это необычно.",
    "Сьогодні в офісі дуже тихо. Це незвично.",
    "Dziś w biurze jest bardzo cicho. To nietypowe."
  ],
  [
    "It’s getting colder outside. It’s not comfortable to walk.",
    "It’s cold outside and uncomfortable to walk.",
    "It’s easy to fix this computer.",
    "It’s warm and sunny today.",
    "It’s 12 kilometers to the airport.",
    "На улице холодает. Ходить некомфортно.",
    "На вулиці холодає. Ходити незручно.",
    "Na dworze robi się zimniej. Chodzi się niewygodnie."
  ],
  [
    "It’s very crowded in the supermarket. It’s hard to move.",
    "The supermarket is crowded and hard to move in.",
    "It’s raining heavily in the mountains.",
    "It’s easy to learn this rule.",
    "It’s far from the city center.",
    "В супермаркете очень многолюдно. Трудно двигаться.",
    "У супермаркеті дуже людно. Важко рухатися.",
    "W supermarkecie jest tłoczno. Trudno się poruszać."
  ],
  [
    "It’s getting dark earlier now. It feels like winter is coming.",
    "It’s getting dark earlier, like winter is near.",
    "It’s easy to cook this meal.",
    "It’s warm in the living room.",
    "It’s snowing in the village.",
    "Сейчас темнеет раньше. Кажется, приближается зима.",
    "Зараз темніє раніше. Здається, наближається зима.",
    "Robi się ciemno wcześniej. Wygląda na to, że zbliża się zima."
  ],
  [
    "It’s very hot in the kitchen. It’s hard to stay there.",
    "The kitchen is too hot to stay in.",
    "It’s raining in the forest.",
    "It’s easy to understand this topic.",
    "It’s far from the border.",
    "На кухне очень жарко. Там трудно находиться.",
    "На кухні дуже спекотно. Там важко бути.",
    "W kuchni jest bardzo gorąco. Trudno tam wytrzymać."
  ],
  [
    "It’s getting noisy outside. Cars keep passing by.",
    "It’s noisy outside because many cars are passing.",
    "It’s easy to fix this phone.",
    "It’s snowing heavily today.",
    "It’s warm in the office.",
    "На улице становится шумно. Машины постоянно проезжают.",
    "На вулиці стає шумно. Машини постійно проїжджають.",
    "Na dworze robi się głośno. Samochody ciągle przejeżdżają."
  ],
  [
    "It’s very warm in the room. It feels comfortable.",
    "The room is warm and comfortable.",
    "It’s difficult to wake up early.",
    "It’s raining in the mountains.",
    "It’s far from the station.",
    "В комнате очень тепло. Комфортно.",
    "У кімнаті дуже тепло. Комфортно.",
    "W pokoju jest bardzo ciepło. Jest wygodnie."
  ],
  [
    "It’s getting harder to breathe here. It’s too stuffy.",
    "It’s stuffy here and hard to breathe.",
    "It’s easy to learn Spanish.",
    "It’s snowing in the forest.",
    "It’s warm in the kitchen.",
    "Здесь становится трудно дышать. Слишком душно.",
    "Тут стає важко дихати. Занадто душно.",
    "Tu robi się duszno. Trudno oddychać."
  ],
  [
    "It’s very bright in this room. The sun is shining directly inside.",
    "The room is very bright because of the sun.",
    "It’s raining in the city center.",
    "It’s difficult to solve this task.",
    "It’s far from your home.",
    "В этой комнате очень светло. Солнце светит прямо внутрь.",
    "У цій кімнаті дуже світло. Сонце світить прямо всередину.",
    "W tym pokoju jest bardzo jasno. Słońce świeci prosto do środka."
  ],
  [
    "It’s getting colder in the apartment. The heating isn’t working well.",
    "The apartment is getting colder because the heating is weak.",
    "It’s easy to fix this computer.",
    "It’s warm and sunny today.",
    "It’s snowing in the mountains.",
    "В квартире холодает. Отопление плохо работает.",
    "У квартирі холодає. Опалення погано працює.",
    "W mieszkaniu robi się zimniej. Ogrzewanie słabo działa."
  ],
  [
    "It’s very slippery outside. It’s dangerous to walk.",
    "It’s dangerous to walk because it’s slippery.",
    "It’s easy to learn this rule.",
    "It’s warm in the living room.",
    "It’s far from the airport.",
    "На улице очень скользко. Ходить опасно.",
    "На вулиці дуже слизько. Ходити небезпечно.",
    "Na dworze jest bardzo ślisko. Chodzić jest niebezpiecznie."
  ],
  [
    "It’s getting harder to see the road. The fog is thick.",
    "The fog is thick and the road is hard to see.",
    "It’s raining in the forest.",
    "It’s easy to fix this phone.",
    "It’s warm in the kitchen.",
    "Дорогу становится трудно видеть. Туман густой.",
    "Дорогу важко бачити. Туман густий.",
    "Trudno widzieć drogę. Mgła jest gęsta."
  ],
  [
    "It’s very quiet at home. Everyone is sleeping.",
    "The house is quiet because everyone is asleep.",
    "It’s snowing heavily today.",
    "It’s far from the city center.",
    "It’s easy to learn Spanish.",
    "Дома очень тихо. Все спят.",
    "Вдома дуже тихо. Усі сплять.",
    "W domu jest bardzo cicho. Wszyscy śpią."
  ],
  [
    "It’s getting warmer in the garden. The sun finally came out.",
    "The garden is warmer now because the sun came out.",
    "It’s raining in the mountains.",
    "It’s difficult to wake up early.",
    "It’s far from the station.",
    "В саду теплеет. Наконец вышло солнце.",
    "У саду теплішає. Нарешті вийшло сонце.",
    "W ogrodzie robi się cieplej. Wyszło słońce."
  ],
  [
    "It’s very dark in the hallway. The light bulb burned out.",
    "The hallway is dark because the bulb burned out.",
    "It’s warm in the living room.",
    "It’s raining in the forest.",
    "It’s easy to fix this computer.",
    "В коридоре очень темно. Лампочка перегорела.",
    "У коридорі дуже темно. Лампочка перегоріла.",
    "W korytarzu jest bardzo ciemno. Żarówka się spaliła."
  ],
  [
    "It’s getting noisy upstairs. Someone is moving furniture.",
    "It’s noisy upstairs because someone is moving furniture.",
    "It’s snowing in the village.",
    "It’s far from the airport.",
    "It’s easy to learn this rule.",
    "Наверху становится шумно. Кто‑то двигает мебель.",
    "Нагорі стає шумно. Хтось рухає меблі.",
    "Na górze robi się głośno. Ktoś przesuwa meble."
  ],
  [
    "It’s very warm outside. It feels like summer already.",
    "It’s warm outside, almost like summer.",
    "It’s raining heavily today.",
    "It’s difficult to fix this phone.",
    "It’s far from the border.",
    "На улице очень тепло. Уже как летом.",
    "На вулиці дуже тепло. Вже як влітку.",
    "Na dworze jest bardzo ciepło. Prawie jak latem."
  ],
  [
    "It’s getting colder in the hallway. The door was left open.",
    "The hallway is colder because the door is open.",
    "It’s snowing in the mountains.",
    "It’s easy to learn Spanish.",
    "It’s warm in the kitchen.",
    "В коридоре холодает. Дверь оставили открытой.",
    "У коридорі холодає. Двері залишили відкритими.",
    "W korytarzu robi się zimniej. Drzwi zostały otwarte."
  ],
  [
    "It’s very dusty in the room. It hasn’t been cleaned for days.",
    "The room is dusty because it hasn’t been cleaned.",
    "It’s raining in the city center.",
    "It’s warm in the living room.",
    "It’s far from the station.",
    "В комнате очень пыльно. Несколько дней не убирали.",
    "У кімнаті дуже пилюка. Кілька днів не прибирали.",
    "W pokoju jest bardzo kurz. Od dni nikt nie sprzątał."
  ],
  [
    "It’s getting brighter outside. The clouds are moving away.",
    "It’s brighter outside because the clouds moved.",
    "It’s snowing in the forest.",
    "It’s difficult to wake up early.",
    "It’s far from the airport.",
    "На улице светлеет. Тучи расходятся.",
    "На вулиці світлішає. Хмари розходяться.",
    "Na dworze robi się jaśniej. Chmury się rozchodzą."
  ],
  [
    "It’s very cold in the bathroom. The window is open.",
    "The bathroom is cold because the window is open.",
    "It’s raining in the mountains.",
    "It’s easy to learn this rule.",
    "It’s warm in the kitchen.",
    "В ванной очень холодно. Окно открыто.",
    "У ванній дуже холодно. Вікно відкрите.",
    "W łazience jest bardzo zimno. Okno jest otwarte."
  ],
  [
    "It’s getting louder outside. A concert is starting nearby.",
    "It’s loud outside because a concert is starting.",
    "It’s snowing heavily today.",
    "It’s far from the city center.",
    "It’s easy to fix this phone.",
    "На улице становится громче. Рядом начинается концерт.",
    "На вулиці стає голосніше. Поруч починається концерт.",
    "Na dworze robi się głośniej. W pobliżu zaczyna się koncert."
  ],
  [
    "It’s very warm in the car. The sun has been shining on it.",
    "The car is warm because the sun heated it.",
    "It’s raining in the forest.",
    "It’s difficult to solve this task.",
    "It’s far from the border.",
    "В машине очень тепло. Солнце нагрело её.",
    "У машині дуже тепло. Сонце її нагріло.",
    "W samochodzie jest bardzo ciepło. Słońce go nagrzało."
  ],
  [
    "It’s getting colder near the window. The wind is strong today.",
    "It’s cold near the window because of the strong wind.",
    "It’s snowing in the mountains.",
    "It’s easy to learn Spanish.",
    "It’s warm in the living room.",
    "У окна холодает. Сегодня сильный ветер.",
    "Біля вікна холодає. Сьогодні сильний вітер.",
    "Przy oknie robi się zimniej. Dziś jest silny wiatr."
  ],
  [
    "It’s very quiet outside. It feels peaceful.",
    "It’s peaceful outside because it’s quiet.",
    "It’s raining heavily today.",
    "It’s far from the airport.",
    "It’s difficult to fix this phone.",
    "На улице очень тихо. Спокойно.",
    "На вулиці дуже тихо. Спокійно.",
    "Na dworze jest bardzo cicho. Spokojnie."
  ],

  [
    "It’s very windy near the river today. It’s hard to walk straight.",
    "It’s windy near the river and difficult to walk.",
    "It’s easy to fix this phone.",
    "It’s warm in the living room.",
    "It’s snowing in the mountains.",
    "Сегодня возле реки очень ветрено. Трудно идти прямо.",
    "Сьогодні біля річки дуже вітряно. Важко йти прямо.",
    "Nad rzeką jest dziś bardzo wietrznie. Trudno iść prosto."
  ],
  [
    "It’s getting warmer in the apartment. The heating finally works.",
    "The apartment is warmer because the heating works now.",
    "It’s raining in the forest.",
    "It’s far from the airport.",
    "It’s difficult to learn this rule.",
    "В квартире теплеет. Отопление наконец работает.",
    "У квартирі теплішає. Опалення нарешті працює.",
    "W mieszkaniu robi się cieplej. Ogrzewanie wreszcie działa."
  ],
  [
    "It’s very quiet in the park. Almost no one is here.",
    "The park is quiet because almost nobody is there.",
    "It’s snowing heavily today.",
    "It’s warm in the kitchen.",
    "It’s easy to fix this computer.",
    "В парке очень тихо. Почти никого нет.",
    "У парку дуже тихо. Майже нікого немає.",
    "W parku jest bardzo cicho. Prawie nikogo nie ma."
  ],
  [
    "It’s getting darker in the sky. A storm is coming.",
    "The sky is getting dark because a storm is coming.",
    "It’s far from the city center.",
    "It’s warm and sunny today.",
    "It’s easy to learn Spanish.",
    "Небо темнеет. Приближается шторм.",
    "Небо темніє. Наближається шторм.",
    "Na niebie robi się ciemniej. Nadchodzi burza."
  ],
  [
    "It’s very warm in the greenhouse. The plants are growing fast.",
    "The greenhouse is warm and the plants grow quickly.",
    "It’s raining in the mountains.",
    "It’s difficult to wake up early.",
    "It’s far from the station.",
    "В теплице очень тепло. Растения быстро растут.",
    "У теплиці дуже тепло. Рослини швидко ростуть.",
    "W szklarni jest bardzo ciepło. Rośliny szybko rosną."
  ],
  [
    "It’s getting colder near the lake. The wind is strong.",
    "It’s cold near the lake because of the strong wind.",
    "It’s easy to fix this phone.",
    "It’s warm in the living room.",
    "It’s snowing in the forest.",
    "У озера холодает. Ветер сильный.",
    "Біля озера холодає. Вітер сильний.",
    "Nad jeziorem robi się zimniej. Wiatr jest silny."
  ],
  [
    "It’s very bright outside. The snow reflects the sunlight.",
    "It’s bright because the snow reflects the sun.",
    "It’s raining in the city center.",
    "It’s difficult to solve this task.",
    "It’s far from the border.",
    "На улице очень светло. Снег отражает солнце.",
    "На вулиці дуже світло. Сніг відбиває сонце.",
    "Na dworze jest bardzo jasno. Śnieg odbija słońce."
  ],
  [
    "It’s getting warmer in the classroom. The sun is shining through the windows.",
    "The classroom is warmer because the sun shines in.",
    "It’s snowing heavily today.",
    "It’s warm in the kitchen.",
    "It’s easy to learn this rule.",
    "В классе теплеет. Солнце светит через окна.",
    "У класі теплішає. Сонце світить через вікна.",
    "W klasie robi się cieplej. Słońce świeci przez okna."
  ],
  [
    "It’s very noisy on the street. A parade is passing by.",
    "It’s noisy because a parade is happening.",
    "It’s raining in the forest.",
    "It’s far from the airport.",
    "It’s warm in the living room.",
    "На улице очень шумно. Проходит парад.",
    "На вулиці дуже шумно. Проходить парад.",
    "Na ulicy jest bardzo głośno. Przechodzi parada."
  ],
  [
    "It’s getting colder in the garage. The door won’t close properly.",
    "The garage is cold because the door doesn’t close.",
    "It’s snowing in the mountains.",
    "It’s easy to learn Spanish.",
    "It’s warm in the office.",
    "В гараже холодает. Дверь плохо закрывается.",
    "У гаражі холодає. Двері погано зачиняються.",
    "W garażu robi się zimniej. Drzwi się nie domykają."
  ],
  [
    "It’s very quiet in the library. Everyone is studying.",
    "The library is quiet because people are studying.",
    "It’s raining heavily today.",
    "It’s far from the station.",
    "It’s easy to fix this phone.",
    "В библиотеке очень тихо. Все занимаются.",
    "У бібліотеці дуже тихо. Усі навчаються.",
    "W bibliotece jest bardzo cicho. Wszyscy się uczą."
  ],
  [
    "It’s getting brighter outside. The sun is rising.",
    "It’s brighter because the sun is rising.",
    "It’s snowing in the forest.",
    "It’s difficult to wake up early.",
    "It’s far from the airport.",
    "На улице светлеет. Восходит солнце.",
    "На вулиці світлішає. Сходить сонце.",
    "Na dworze robi się jaśniej. Słońce wschodzi."
  ],
  [
    "It’s very cold in the attic. The insulation is old.",
    "The attic is cold because the insulation is old.",
    "It’s raining in the mountains.",
    "It’s warm in the living room.",
    "It’s easy to learn this rule.",
    "На чердаке очень холодно. Утеплитель старый.",
    "На горищі дуже холодно. Утеплювач старий.",
    "Na strychu jest bardzo zimno. Izolacja jest stara."
  ],
  [
    "It’s getting louder in the stadium. The match is starting.",
    "It’s loud because the match is starting.",
    "It’s snowing heavily today.",
    "It’s far from the border.",
    "It’s easy to fix this computer.",
    "На стадионе становится громче. Матч начинается.",
    "На стадіоні стає голосніше. Матч починається.",
    "Na stadionie robi się głośniej. Mecz się zaczyna."
  ],
  [
    "It’s very warm in the hallway. The radiator is on full power.",
    "The hallway is warm because the radiator is strong.",
    "It’s raining in the forest.",
    "It’s difficult to solve this task.",
    "It’s far from the station.",
    "В коридоре очень тепло. Радиатор работает на полную.",
    "У коридорі дуже тепло. Радіатор працює на повну.",
    "W korytarzu jest bardzo ciepło. Grzejnik działa na pełnej mocy."
  ],
  [
    "It’s getting colder in the backyard. The sun has gone behind the clouds.",
    "The backyard is colder because the sun disappeared.",
    "It’s snowing in the mountains.",
    "It’s warm in the kitchen.",
    "It’s easy to learn Spanish.",
    "Во дворе холодает. Солнце ушло за облака.",
    "У дворі холодає. Сонце сховалося за хмари.",
    "Na podwórku robi się zimniej. Słońce schowało się za chmury."
  ],
  [
    "It’s very quiet in the museum. People are walking slowly.",
    "The museum is quiet because visitors walk silently.",
    "It’s raining heavily today.",
    "It’s far from the airport.",
    "It’s easy to fix this phone.",
    "В музее очень тихо. Люди ходят медленно.",
    "У музеї дуже тихо. Люди ходять повільно.",
    "W muzeum jest bardzo cicho. Ludzie chodzą powoli."
  ],
  [
    "It’s getting brighter in the living room. Someone opened the curtains.",
    "The living room is brighter because the curtains were opened.",
    "It’s snowing in the forest.",
    "It’s difficult to wake up early.",
    "It’s far from the border.",
    "В гостиной светлеет. Кто‑то открыл шторы.",
    "У вітальні світлішає. Хтось відкрив штори.",
    "W salonie robi się jaśniej. Ktoś otworzył zasłony."
  ],
  [
    "It’s very cold on the balcony. The wind is strong today.",
    "The balcony is cold because of the strong wind.",
    "It’s raining in the mountains.",
    "It’s warm in the living room.",
    "It’s easy to learn this rule.",
    "На балконе очень холодно. Сегодня сильный ветер.",
    "На балконі дуже холодно. Сьогодні сильний вітер.",
    "Na balkonie jest bardzo zimno. Dziś jest silny wiatr."
  ],
  [
    "It’s getting noisier downtown. More cars are arriving.",
    "Downtown is getting noisier because more cars arrived.",
    "It’s snowing heavily today.",
    "It’s far from the station.",
    "It’s easy to fix this computer.",
    "В центре становится шумнее. Приезжает больше машин.",
    "У центрі стає шумніше. Приїжджає більше машин.",
    "W centrum robi się głośniej. Przyjeżdża więcej samochodów."
  ],
  [
    "It’s very warm in the sun. The wind stopped blowing.",
    "It’s warm because the wind stopped and the sun is shining.",
    "It’s raining in the forest.",
    "It’s difficult to solve this task.",
    "It’s far from the airport.",
    "На солнце очень тепло. Ветер перестал дуть.",
    "На сонці дуже тепло. Вітер перестав дути.",
    "Na słońcu jest bardzo ciepło. Wiatr przestał wiać."
  ],
  [
    "It’s getting colder in the basement. The air is damp.",
    "The basement is cold because the air is damp.",
    "It’s snowing in the mountains.",
    "It’s warm in the kitchen.",
    "It’s easy to learn Spanish.",
    "В подвале холодает. Воздух сырой.",
    "У підвалі холодає. Повітря вологе.",
    "W piwnicy robi się zimniej. Powietrze jest wilgotne."
  ],
  [
    "It’s very quiet in the waiting room. Everyone is nervous.",
    "The waiting room is quiet because people are nervous.",
    "It’s raining heavily today.",
    "It’s far from the border.",
    "It’s easy to fix this phone.",
    "В комнате ожидания очень тихо. Все нервничают.",
    "У кімнаті очікування дуже тихо. Усі нервують.",
    "W poczekalni jest bardzo cicho. Wszyscy są zdenerwowani."
  ],
  [
    "It’s getting brighter in the kitchen. Someone turned on the lamp.",
    "The kitchen is brighter because the lamp was turned on.",
    "It’s snowing in the forest.",
    "It’s difficult to wake up early.",
    "It’s far from the station.",
    "На кухне светлеет. Кто‑то включил лампу.",
    "На кухні світлішає. Хтось увімкнув лампу.",
    "W kuchni robi się jaśniej. Ktoś włączył lampę."
  ],
  [
    "It’s very cold outside. The temperature dropped suddenly.",
    "It’s cold outside because the temperature dropped.",
    "It’s raining in the mountains.",
    "It’s warm in the living room.",
    "It’s easy to learn this rule.",
    "На улице очень холодно. Температура резко упала.",
    "На вулиці дуже холодно. Температура різко впала.",
    "Na dworze jest bardzo zimno. Temperatura nagle spadła."
  ]

];

// console.log(unit35.length);
// unit35.push(...extending(unit35, "Don't ", "Do not "));
// unit35.push(...extending(unit35, "don't ", "do not "));
// unit35.push(...extending(unit35, "Let's ", "Let us "));
// console.log(unit35.length);

// Если это свойство есть, то оно попадает в заголовок теста
unit39.nameLeson = "It ...";

//--созданными предложениями.
unit39.lengthTrue = 5;

// console.log(unit33.length);

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit39.push(...extendForArray(unit39));

unit39.push(...extendForArray2(unit39));

export { unit39 };


