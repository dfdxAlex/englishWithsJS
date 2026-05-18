import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';
import { extending } from './extend/extending.js';

const unit37 = [

[
    "There is a big red apple on the table.",
    "A big red apple is on the table.",
    "There are many apples in the basket.",
    "There is a small green pear under the chair.",
    "There are three bananas on the kitchen counter.",
    "На столе лежит большое красное яблоко.",
    "На столі лежить велике червоне яблуко.",
    "Na stole leży duże czerwone jabłko."
  ],
  [
    "There are five beautiful flowers in the vase.",
    "Five beautiful flowers are in the vase.",
    "There is one big yellow flower near the window.",
    "There are two cats sleeping on the sofa.",
    "There is fresh milk in the fridge.",
    "В вазе стоят пять красивых цветов.",
    "У вазі стоять п'ять красивих квітів.",
    "W wazonie stoi pięć pięknych kwiatów."
  ],
  [
    "There is a comfortable blue sofa in the living room.",
    "A comfortable blue sofa is in the living room.",
    "There are many books on the shelves.",
    "There is a small black cat under the table.",
    "There are four chairs around the dining table.",
    "В гостиной стоит удобный синий диван.",
    "У вітальні стоїть зручний синій диван.",
    "W salonie stoi wygodna niebieska sofa."
  ],
  [
    "There are three black cars parked near the house.",
    "Three black cars are parked near the house.",
    "There is a new bicycle in the garage.",
    "There are many birds in the tree.",
    "There is fresh snow on the roof.",
    "Около дома припаркованы три чёрных автомобиля.",
    "Біля будинку припарковано три чорних автомобіля.",
    "Obok domu zaparkowane są trzy czarne samochody."
  ],
  [
    "There is an interesting old book on the shelf.",
    "An interesting old book is on the shelf.",
    "There are two modern laptops on the desk.",
    "There is a big brown dog in the garden.",
    "There are colorful pictures on the wall.",
    "На полке лежит интересная старая книга.",
    "На полиці лежить цікава стара книга.",
    "Na półce leży interesująca stara książka."
  ],
  [
    "There are seven students in the classroom.",
    "Seven students are in the classroom.",
    "There is one teacher at the board.",
    "There are many desks in the room.",
    "There is a big window in the classroom.",
    "В классе семь учеников.",
    "У класі семеро учнів.",
    "W klasie jest siedmiu uczniów."
  ],
  [
    "There is a large brown dog in the garden.",
    "A large brown dog is in the garden.",
    "There are three cats on the roof.",
    "There is a small white rabbit under the tree.",
    "There are many birds in the sky.",
    "В саду большая коричневая собака.",
    "У саду великий коричневий собака.",
    "W ogrodzie jest duży brązowy pies."
  ],
  [
    "There are twelve eggs in the fridge.",
    "Twelve eggs are in the fridge.",
    "There is fresh milk on the table.",
    "There are two bottles of juice.",
    "There is a big watermelon in the fridge.",
    "В холодильнике двенадцать яиц.",
    "У холодильнику дванадцять яєць.",
    "W lodówce jest dwanaście jaj."
  ],
  [
    "There is a fast red car on the road.",
    "A fast red car is on the road.",
    "There are many trucks on the highway.",
    "There is a blue bicycle near the house.",
    "There are three motorcycles in the garage.",
    "На дороге быстрая красная машина.",
    "На дорозі швидка червона машина.",
    "Na drodze jest szybki czerwony samochód."
  ],
  [
    "There are eight chairs around the table.",
    "Eight chairs are around the table.",
    "There is a big wooden table in the center.",
    "There are many plates on the table.",
    "There is delicious food in the kitchen.",
    "Вокруг стола восемь стульев.",
    "Навколо столу вісім стільців.",
    "Wokół stołu jest osiem krzeseł."
  ],
  // ... Продолжение (с 11 по 50)
  [
    "There is a tall green tree in the park.",
    "A tall green tree is in the park.",
    "There are many flowers near the tree.",
    "There is a small lake in the park.",
    "There are children playing on the grass.",
    "В парке высокое зелёное дерево.",
    "У парку високе зелене дерево.",
    "W parku jest wysokie zielone drzewo."
  ],
  [
    "There are twenty books on the shelf.",
    "Twenty books are on the shelf.",
    "There is one old dictionary.",
    "There are many magazines.",
    "There is a small lamp on the desk.",
    "На полке двадцать книг.",
    "На полиці двадцять книг.",
    "Na półce jest dwadzieścia książek."
  ],
  [
    "There is a beautiful white cat on the windowsill.",
    "A beautiful white cat is on the windowsill.",
    "There are two dogs in the yard.",
    "There is fresh water in the bowl.",
    "There are birds outside the window.",
    "На подоконнике красивая белая кошка.",
    "На підвіконні красива біла кішка.",
    "Na parapecie jest piękny biały kot."
  ],
  [
    "There are six oranges in the bowl.",
    "Six oranges are in the bowl.",
    "There is one big pineapple.",
    "There are three apples.",
    "There is sweet juice on the table.",
    "В миске шесть апельсинов.",
    "У мисці шість апельсинів.",
    "W misce jest sześć pomarańczy."
  ],
  [
    "There is a new black phone on the desk.",
    "A new black phone is on the desk.",
    "There are two laptops nearby.",
    "There is a blue notebook.",
    "There are many pens in the cup.",
    "На столе новый чёрный телефон.",
    "На столі новий чорний телефон.",
    "Na biurku jest nowy czarny telefon."
  ],
  [
    "There are ten children playing in the yard.",
    "Ten children are playing in the yard.",
    "There is one teacher watching them.",
    "There are many balls on the grass.",
    "There is a big slide in the playground.",
    "Во дворе играют десять детей.",
    "На подвір'ї грають десять дітей.",
    "Na podwórku bawi się dziesięcioro dzieci."
  ],
  [
    "There is a bright yellow sun in the sky.",
    "A bright yellow sun is in the sky.",
    "There are white clouds around it.",
    "There is a small plane flying.",
    "There are many birds in the sky.",
    "На небе яркое жёлтое солнце.",
    "На небі яскраве жовте сонце.",
    "Na niebie jest jasne żółte słońce."
  ],
  [
    "There are four seasons in a year.",
    "Four seasons are in a year.",
    "There is cold weather in winter.",
    "There are green leaves in spring.",
    "There is hot sun in summer.",
    "В году четыре сезона.",
    "У році чотири сезони.",
    "W roku są cztery pory roku."
  ],
  [
    "There is fresh bread on the table.",
    "Fresh bread is on the table.",
    "There are many fruits in the basket.",
    "There is hot tea in the cup.",
    "There are cookies in the box.",
    "На столе свежий хлеб.",
    "На столі свіжий хліб.",
    "Na stole jest świeży chleb."
  ],
  [
    "There are nine players on the football field.",
    "Nine players are on the football field.",
    "There is one referee.",
    "There are many spectators in the stands.",
    "There is a big goal at each end.",
    "На футбольном поле девять игроков.",
    "На футбольному полі дев'ять гравців.",
    "Na boisku piłkarskim jest dziewięciu zawodników."
  ],
  [
    "There is a modern white refrigerator in the kitchen.",
    "A modern white refrigerator is in the kitchen.",
    "There are many vegetables inside.",
    "There is fresh milk on the shelf.",
    "There are eggs in the door.",
    "На кухне современный белый холодильник.",
    "На кухні сучасний білий холодильник.",
    "W kuchni jest nowoczesna biała lodówka."
  ],
  [
    "There are fifteen computers in the office.",
    "Fifteen computers are in the office.",
    "There is one big printer.",
    "There are many desks and chairs.",
    "There is coffee in the kitchenette.",
    "В офисе пятнадцать компьютеров.",
    "В офісі п'ятнадцять комп'ютерів.",
    "W biurze jest piętnaście komputerów."
  ],
  [
    "There is a small cute kitten under the bed.",
    "A small cute kitten is under the bed.",
    "There are toys on the floor.",
    "There is a ball of yarn.",
    "There are socks in the corner.",
    "Под кроватью маленький милый котёнок.",
    "Під ліжком маленький милый кошеня.",
    "Pod łóżkiem jest mały słodki kociak."
  ],
  [
    "There are two tall buildings in the city center.",
    "Two tall buildings are in the city center.",
    "There is a big park nearby.",
    "There are many cars on the street.",
    "There is a subway station.",
    "В центре города два высоких здания.",
    "У центрі міста два високих будинки.",
    "W centrum miasta są dwa wysokie budynki."
  ],
  [
    "There is delicious chocolate cake in the fridge.",
    "Delicious chocolate cake is in the fridge.",
    "There are fresh strawberries on the plate.",
    "There is vanilla ice cream.",
    "There are candles on the table.",
    "В холодильнике вкусный шоколадный торт.",
    "У холодильнику смачний шоколадний торт.",
    "W lodówce jest pyszne czekoladowe ciasto."
  ],
  [
    "There are thirty days in September.",
    "Thirty days are in September.",
    "There are thirty-one days in October.",
    "There is one extra day in February sometimes.",
    "There are twelve months in a year.",
    "В сентябре тридцать дней.",
    "У вересні тридцять днів.",
    "We wrześniu jest trzydzieści dni."
  ],
  [
    "There is a heavy black bag on the floor.",
    "A heavy black bag is on the floor.",
    "There are clothes inside the bag.",
    "There is a laptop in the backpack.",
    "There are shoes near the door.",
    "На полу тяжёлая чёрная сумка.",
    "На підлозі важка чорна сумка.",
    "Na podłodze jest ciężka czarna torba."
  ],
  [
    "There are many colorful balloons at the party.",
    "Many colorful balloons are at the party.",
    "There is a big birthday cake.",
    "There are children laughing.",
    "There is loud music playing.",
    "На вечеринке много разноцветных шаров.",
    "На вечірці багато різнокольорових кульок.",
    "Na imprezie jest dużo kolorowych balonów."
  ],
  [
    "There is a quiet small library near my house.",
    "A quiet small library is near my house.",
    "There are thousands of books inside.",
    "There is a comfortable reading area.",
    "There are students studying.",
    "Около моего дома тихая маленькая библиотека.",
    "Біля мого будинку тиха маленька бібліотека.",
    "Obok mojego domu jest cicha mała biblioteka."
  ],
  [
    "There are eleven players on the basketball team.",
    "Eleven players are on the basketball team.",
    "There is one coach.",
    "There are many fans cheering.",
    "There is a big scoreboard.",
    "В баскетбольной команде одиннадцать игроков.",
    "У баскетбольній команді одинадцять гравців.",
    "W drużynie koszykarskiej jest jedenastu zawodników."
  ],
  [
    "There is hot fresh coffee in my cup.",
    "Hot fresh coffee is in my cup.",
    "There is sugar on the table.",
    "There are cookies next to the cup.",
    "There is milk in the small jug.",
    "В моей чашке горячий свежий кофе.",
    "У моїй чашці гаряча свіжа кава.",
    "W moim kubku jest gorąca świeża kawa."
  ],
  [
    "There are four wheels on the car.",
    "Four wheels are on the car.",
    "There is one steering wheel.",
    "There are two headlights.",
    "There is an engine under the hood.",
    "На машине четыре колеса.",
    "На машині чотири колеса.",
    "Samochód ma cztery koła."
  ],
  [
    "There is a big green frog in the pond.",
    "A big green frog is in the pond.",
    "There are many fish swimming.",
    "There are water lilies on the surface.",
    "There is a dragonfly flying.",
    "В пруду большая зелёная лягушка.",
    "У ставку велика зелена жаба.",
    "W stawie jest duża zielona żaba."
  ],
  [
    "There are twenty-five letters in the alphabet.",
    "Twenty-five letters are in the alphabet.",
    "There is one missing letter.",
    "There are many words in the dictionary.",
    "There is a grammar book on the shelf.",
    "В алфавите двадцать пять букв.",
    "В алфавіті двадцять п'ять літер.",
    "W alfabecie jest dwadzieścia pięć liter."
  ],
  [
    "There is soft white snow on the mountain.",
    "Soft white snow is on the mountain.",
    "There are skiers on the slope.",
    "There is a small wooden cabin.",
    "There are tall pine trees.",
    "На горе мягкий белый снег.",
    "На горі м'який білий сніг.",
    "Na górze jest miękki biały śnieg."
  ],
  [
    "There are six glasses on the tray.",
    "Six glasses are on the tray.",
    "There is one bottle of water.",
    "There are fresh lemons.",
    "There is ice in the bucket.",
    "На подносе шесть стаканов.",
    "На таці шість склянок.",
    "Na tacy jest sześć szklanek."
  ],
  [
    "There is a famous old castle on the hill.",
    "A famous old castle is on the hill.",
    "There are tall stone towers.",
    "There is a deep moat around it.",
    "There are knights in the story.",
    "На холме знаменитый старый замок.",
    "На пагорбі знаменитий старий замок.",
    "Na wzgórzu jest słynny stary zamek."
  ],
  [
    "There are eight planets in our solar system.",
    "Eight planets are in our solar system.",
    "There is one sun.",
    "There are many stars in the galaxy.",
    "There is a moon orbiting Earth.",
    "В нашей солнечной системе восемь планет.",
    "У нашій сонячній системі вісім планет.",
    "W naszym Układzie Słonecznym jest osiem planet."
  ],
  [
    "There is a loud alarm clock on the nightstand.",
    "A loud alarm clock is on the nightstand.",
    "There are books beside the bed.",
    "There is a glass of water.",
    "There are warm blankets.",
    "На тумбочке громкий будильник.",
    "На тумбочці гучний будильник.",
    "Na szafce nocnej jest głośny budzik."
  ],
  [
    "There are three spoons and two forks in the drawer.",
    "Three spoons and two forks are in the drawer.",
    "There is one big knife.",
    "There are many plates in the cupboard.",
    "There is clean water in the sink.",
    "В ящике три ложки и две вилки.",
    "У шухляді три ложки і дві виделки.",
    "W szufladzie są trzy łyżki i dwa widelce."
  ],
  [
    "There is a warm yellow light in the room.",
    "A warm yellow light is in the room.",
    "There are shadows on the wall.",
    "There is a comfortable armchair.",
    "There are pictures hanging.",
    "В комнате тёплый жёлтый свет.",
    "У кімнаті тепле жовте світло.",
    "W pokoju jest ciepłe żółte światło."
  ],
  [
    "There are fifty states in the USA.",
    "Fifty states are in the USA.",
    "There is one president.",
    "There are many big cities.",
    "There is a big flag.",
    "В США пятьдесят штатов.",
    "У США п'ятдесят штатів.",
    "W USA jest pięćdziesiąt stanów."
  ],
  [
    "There is a shiny silver key in my pocket.",
    "A shiny silver key is in my pocket.",
    "There is an old wooden door.",
    "There are many locks.",
    "There is a secret box.",
    "В моём кармане блестящий серебряный ключ.",
    "У моєму кишені блискучий срібний ключ.",
    "W mojej kieszeni jest błyszczący srebrny klucz."
  ],
  [
    "There are seven days in a week.",
    "Seven days are in a week.",
    "There is one weekend.",
    "There are five working days.",
    "There is a lot of rest on Sunday.",
    "В неделе семь дней.",
    "У тижні сім днів.",
    "W tygodniu jest siedem dni."
  ],
  [
    "There is cold fresh water in the bottle.",
    "Cold fresh water is in the bottle.",
    "There are many ice cubes.",
    "There is lemon inside.",
    "There is a blue straw.",
    "В бутылке холодная свежая вода.",
    "У пляшці холодна свіжа вода.",
    "W butelce jest zimna świeża woda."
  ],
  [
    "There are four legs on the table.",
    "Four legs are on the table.",
    "There is a big flat top.",
    "There are chairs around it.",
    "There is food on the table.",
    "У стола четыре ножки.",
    "У столу чотири ніжки.",
    "Stół ma cztery nogi."
  ],
  [
    "There is a happy smiling child in the photo.",
    "A happy smiling child is in the photo.",
    "There are balloons in the background.",
    "There is a birthday cake.",
    "There are presents on the floor.",
    "На фото счастливый улыбающийся ребёнок.",
    "На фото щаслива усміхнена дитина.",
    "Na zdjęciu jest szczęśliwe uśmiechnięte dziecko."
  ],
  [
    "There are two big windows in the bedroom.",
    "Two big windows are in the bedroom.",
    "There is a large bed.",
    "There is a wardrobe in the corner.",
    "There are curtains on the windows.",
    "В спальне два больших окна.",
    "У спальні два великих вікна.",
    "W sypialni są dwa duże okna."
  ],
  [
    "There is a fast modern train at the station.",
    "A fast modern train is at the station.",
    "There are many passengers.",
    "There is a big clock on the wall.",
    "There are suitcases everywhere.",
    "На станции быстрый современный поезд.",
    "На станції швидкий сучасний потяг.",
    "Na stacji jest szybki nowoczesny pociąg."
  ],
  
  [
    "There is a big black dog in the garden. There are many flowers around the dog.",
    "There is a big black dog surrounded by flowers in the garden.",
    "There is a small white cat playing in the garden.",
    "There are many birds flying over the garden.",
    "There is a swimming pool in the backyard.",
    "В саду большая чёрная собака. Вокруг собаки много цветов.",
    "У саду великий чорний собака. Навколо собаки багато квітів.",
    "W ogrodzie jest duży czarny pies. Wokół psa jest dużo kwiatów."
  ],
  [
    "There are five red apples on the table. There is a big yellow banana next to them.",
    "There are five red apples and one banana on the table.",
    "There are only oranges and grapes on the table.",
    "There is one apple and many bananas.",
    "There are vegetables and bread on the kitchen counter.",
    "На столе пять красных яблок. Рядом с ними большой жёлтый банан.",
    "На столі п'ять червоних яблук. Поруч з ними великий жовтий банан.",
    "Na stole jest pięć czerwonych jabłek. Obok nich jest duży żółty banan."
  ],
  [
    "There is a new blue car in front of the house. There are two bicycles near the car.",
    "There is a new blue car and two bicycles in front of the house.",
    "There is only one old red car parked there.",
    "There are many motorcycles in front of the house.",
    "There is a big truck blocking the entrance.",
    "Перед домом новая синяя машина. Рядом с ней два велосипеда.",
    "Перед будинком нова синя машина. Поруч два велосипеди.",
    "Przed domem jest nowy niebieski samochód. Obok niego są dwa rowery."
  ],
  [
    "There are many students in the classroom. There is one teacher standing at the board.",
    "There are many students and one teacher in the classroom.",
    "There is only one student in the classroom today.",
    "There are many teachers and no students.",
    "There are children playing games in the classroom.",
    "В классе много учеников. У доски стоит один учитель.",
    "У класі багато учнів. Біля дошки стоїть один вчитель.",
    "W klasie jest wielu uczniów. Jeden nauczyciel stoi przy tablicy."
  ],
  [
    "There is fresh milk in the fridge. There are six eggs and some cheese there.",
    "There is fresh milk, eggs and cheese in the fridge.",
    "There are only vegetables and fruits in the fridge.",
    "There is only juice and water in the fridge.",
    "There is a big chocolate cake inside.",
    "В холодильнике свежее молоко. Там шесть яиц и немного сыра.",
    "У холодильнику свіже молоко. Там шість яєць і трохи сиру.",
    "W lodówce jest świeże mleko. Jest tam sześć jajek i trochę sera."
  ],
  [
    "There is a beautiful white cat on the windowsill. There are two birds outside the window.",
    "There is a white cat watching two birds from the windowsill.",
    "There is a big brown dog sleeping on the windowsill.",
    "There are three cats playing together.",
    "There is a flower pot on the windowsill.",
    "На подоконнике красивая белая кошка. За окном две птицы.",
    "На підвіконні красива біла кішка. За вікном дві пташки.",
    "Na parapecie jest piękny biały kot. Za oknem są dwa ptaki."
  ],
  [
    "There are twenty books on the shelf. There is a small green plant between the books.",
    "There are twenty books and a small plant on the shelf.",
    "There are only magazines and newspapers there.",
    "There is one big dictionary and no other books.",
    "There are many photo frames on the shelf.",
    "На полке двадцать книг. Между ними маленькое зелёное растение.",
    "На полиці двадцять книг. Між ними маленька зелена рослина.",
    "Na półce jest dwadzieścia książek. Między nimi stoi mała zielona roślina."
  ],
  [
    "There is a big party in the hall. There are many colorful balloons everywhere.",
    "There is a big party with many colorful balloons in the hall.",
    "There is a quiet meeting with few people.",
    "There is a concert with musicians on stage.",
    "There are many tables with food but no balloons.",
    "В зале большая вечеринка. Повсюду много разноцветных шаров.",
    "У залі велика вечірка. Скрізь багато різнокольорових кульок.",
    "W sali jest duża impreza. Wszędzie jest dużo kolorowych balonów."
  ],
  [
    "There are three tall trees in the park. There is a small wooden bench under the trees.",
    "There are three tall trees and a bench under them in the park.",
    "There is only one small tree in the park.",
    "There are many flowers but no trees.",
    "There is a playground with swings in the park.",
    "В парке три высоких дерева. Под ними маленькая деревянная скамейка.",
    "У парку три високих дерева. Під ними маленька дерев'яна лавка.",
    "W parku są trzy wysokie drzewa. Pod nimi stoi mała drewniana ławka."
  ],
  [
    "There is a delicious chocolate cake on the table. There are seven candles on the cake.",
    "There is a chocolate cake with seven candles on the table.",
    "There is a big bowl of fruit on the table.",
    "There are sandwiches and juice for the party.",
    "There is an empty plate on the table.",
    "На столе вкусный шоколадный торт. На торте семь свечек.",
    "На столі смачний шоколадний торт. На торті сім свічок.",
    "Na stole jest pyszne czekoladowe ciasto. Na cieście jest siedem świeczek."
  ],
  [
    "There are many cars on the street. There is a big traffic jam near the bridge.",
    "There are many cars and a traffic jam on the street.",
    "There are almost no cars on the road today.",
    "There is only one bus moving quickly.",
    "There are many bicycles and pedestrians.",
    "На улице много машин. Около моста большая пробка.",
    "На вулиці багато машин. Біля мосту велика пробка.",
    "Na ulicy jest dużo samochodów. Jest duży korek koło mostu."
  ],
  [
    "There is a comfortable sofa in the living room. There are two armchairs next to it.",
    "There is a sofa and two armchairs in the living room.",
    "There is only one small chair in the room.",
    "There are many beds and no sofa.",
    "There is a big dining table in the center.",
    "В гостиной удобный диван. Рядом с ним два кресла.",
    "У вітальні зручний диван. Поруч два крісла.",
    "W salonie jest wygodna sofa. Obok niej stoją dwa fotele."
  ],
  [
    "There are four cups of hot coffee on the tray. There is a plate of cookies next to them.",
    "There are four cups of coffee and cookies on the tray.",
    "There is only tea and no coffee.",
    "There are glasses of cold juice on the tray.",
    "There is one big cake on the tray.",
    "На подносе четыре чашки горячего кофе. Рядом тарелка с печеньем.",
    "На таці чотири чашки гарячої кави. Поруч тарілка з печивом.",
    "Na tacy są cztery filiżanki gorącej kawy. Obok jest talerz z ciasteczkami."
  ],
  [
    "There is a small brown bird in the tree. There are many green leaves on the branches.",
    "There is a small bird sitting in a tree full of green leaves.",
    "There is a big black cat in the tree.",
    "There are many flowers but no birds.",
    "There is a squirrel running on the tree.",
    "На дереве маленькая коричневая птичка. На ветках много зелёных листьев.",
    "На дереві маленька коричнева пташка. На гілках багато зеленого листя.",
    "Na drzewie jest mały brązowy ptak. Na gałęziach jest dużo zielonych liści."
  ],
  [
    "There are two large windows in the bedroom. There is a big bed between them.",
    "There are two large windows and a bed in the bedroom.",
    "There is only one small window in the room.",
    "There are three doors and no windows.",
    "There is a desk and chair near the window.",
    "В спальне два больших окна. Между ними большая кровать.",
    "У спальні два великих вікна. Між ними велике ліжко.",
    "W sypialni są dwa duże okna. Między nimi stoi duże łóżko."
  ],
  [
    "There is a long queue at the bus stop. There are many people waiting for the bus.",
    "There is a long queue of people waiting at the bus stop.",
    "There is no one at the bus stop.",
    "There are only two people waiting calmly.",
    "There is a taxi waiting for passengers.",
    "На автобусной остановке длинная очередь. Много людей ждут автобус.",
    "На автобусній зупинці довга черга. Багато людей чекають автобус.",
    "Na przystanku jest długa kolejka. Dużo ludzi czeka na autobus."
  ],
  [
    "There are many colorful clothes in the shop. There is a big sale this week.",
    "There are many colorful clothes on sale in the shop.",
    "There are only black and white clothes in the shop.",
    "There is expensive furniture on sale.",
    "There are many shoes but no clothes.",
    "В магазине много разноцветной одежды. На этой неделе большая распродажа.",
    "У магазині багато різнокольорового одягу. Цього тижня великий розпродаж.",
    "W sklepie jest dużo kolorowych ubrań. W tym tygodniu jest wielka wyprzedaż."
  ],
  [
    "There is a heavy rain outside. There are many puddles on the street.",
    "There is heavy rain and many puddles on the street.",
    "There is nice sunny weather today.",
    "There is light snow falling gently.",
    "There is strong wind but no rain.",
    "На улице сильный дождь. На дороге много луж.",
    "На вулиці сильний дощ. На дорозі багато калюж.",
    "Na zewnątrz pada ulewny deszcz. Na ulicy jest dużo kałuż."
  ],
  [
    "There are three pictures on the wall. There is a small clock between the pictures.",
    "There are three pictures and a clock on the wall.",
    "There is one big mirror on the wall.",
    "There are many shelves with books.",
    "There is a large television hanging on the wall.",
    "На стене три картины. Между ними маленькие часы.",
    "На стіні три картини. Між ними маленький годинник.",
    "Na ścianie są trzy obrazy. Między nimi jest mały zegar."
  ],
  [
    "There is a big family dinner at home. There are fifteen people sitting at the table.",
    "There is a big family dinner with fifteen people at the table.",
    "There is a small dinner with only three people.",
    "There is a birthday party with friends.",
    "There are only two people eating quietly.",
    "Дома большой семейный ужин. За столом сидят пятнадцать человек.",
    "Вдома велика сімейна вечеря. За столом сидять п'ятнадцять людей.",
    "W domu jest duża rodzinna kolacja. Przy stole siedzi piętnaście osób."
  ]


];

// console.log(unit35.length);
// unit35.push(...extending(unit35, "Don't ", "Do not "));
// unit35.push(...extending(unit35, "don't ", "do not "));
// unit35.push(...extending(unit35, "Let's ", "Let us "));
// console.log(unit35.length);

// Если это свойство есть, то оно попадает в заголовок теста
unit37.nameLeson = "There is / are";

//--созданными предложениями.
unit37.lengthTrue = 5;

// console.log(unit33.length);

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit37.push(...extendForArray(unit37));

unit37.push(...extendForArray2(unit37));

export { unit37 };


