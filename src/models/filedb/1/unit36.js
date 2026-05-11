import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';
import { extending } from './extend/extending.js';

const unit36 = [
[
    "I used to play football every day after school.",
    "I didn’t use to play football every day after school.",
    "I play football every day after school.",
    "I played football every day after school.",
    "I was playing football every day after school.",
    "Я раньше играл в футбол каждый день после школы.",
    "Dawniej grałem w piłkę nożną codziennie po szkole.",
    "I used to play football every day after school."
  ],
  [
    "She used to have long blonde hair.",
    "She didn’t use to have long blonde hair.",
    "She has long blonde hair.",
    "She had long blonde hair.",
    "She has had long blonde hair.",
    "У неё раньше были длинные светлые волосы.",
    "Dawniej miała długie blond włosy.",
    "She used to have long blonde hair."
  ],
  [
    "They used to live in a small village.",
    "They didn’t use to live in a small village.",
    "They live in a small village.",
    "They lived in a small village last year.",
    "They have lived in a small village.",
    "Они раньше жили в маленькой деревне.",
    "Dawniej mieszkali w małej wiosce.",
    "They used to live in a small village."
  ],
  [
    "He used to smoke a lot.",
    "He didn’t use to smoke a lot.",
    "He smokes a lot.",
    "He smoked a lot last year.",
    "He was smoking a lot.",
    "Он раньше много курил.",
    "Dawniej dużo palił.",
    "He used to smoke a lot."
  ],
  [
    "We used to go to the cinema every Friday.",
    "We didn’t use to go to the cinema every Friday.",
    "We go to the cinema every Friday.",
    "We went to the cinema every Friday.",
    "We have gone to the cinema every Friday.",
    "Мы раньше ходили в кино каждую пятницу.",
    "Dawniej chodziliśmy do kina co piątek.",
    "We used to go to the cinema every Friday."
  ],
  [
    "I used to be very shy.",
    "I didn’t use to be very shy.",
    "I am very shy.",
    "I was very shy at school.",
    "I have been very shy.",
    "Я раньше был очень застенчивым.",
    "Dawniej byłem bardzo nieśmiały.",
    "I used to be very shy."
  ],
  [
    "My father used to work as a teacher.",
    "My father didn’t use to work as a teacher.",
    "My father works as a teacher.",
    "My father worked as a teacher.",
    "My father has worked as a teacher.",
    "Мой отец раньше работал учителем.",
    "Mój ojciec dawniej pracował jako nauczyciel.",
    "My father used to work as a teacher."
  ],
  [
    "She used to wake up at 5 a.m.",
    "She didn’t use to wake up at 5 a.m.",
    "She wakes up at 5 a.m.",
    "She woke up at 5 a.m. yesterday.",
    "She was waking up at 5 a.m.",
    "Она раньше просыпалась в 5 утра.",
    "Dawniej wstawała o 5 rano.",
    "She used to wake up at 5 a.m."
  ],
  [
    "We used to spend summers at the seaside.",
    "We didn’t use to spend summers at the seaside.",
    "We spend summers at the seaside.",
    "We spent summers at the seaside.",
    "We have spent summers at the seaside.",
    "Мы раньше проводили лето у моря.",
    "Dawniej spędzaliśmy lato nad morzem.",
    "We used to spend summers at the seaside."
  ],
  [
    "He used to play the guitar in a band.",
    "He didn’t use to play the guitar in a band.",
    "He plays the guitar in a band.",
    "He played the guitar in a band.",
    "He was playing the guitar in a band.",
    "Он раньше играл на гитаре в группе.",
    "Dawniej grał na gitarze w zespole.",
    "He used to play the guitar in a band."
  ],
  [
    "I used to hate vegetables.",
    "I didn’t use to hate vegetables.",
    "I hate vegetables.",
    "I hated vegetables as a child.",
    "I have hated vegetables.",
    "Я раньше ненавидел овощи.",
    "Dawniej nienawidziłem warzyw.",
    "I used to hate vegetables."
  ],
  [
    "This building used to be a school.",
    "This building didn’t use to be a school.",
    "This building is a school.",
    "This building was a school.",
    "This building has been a school.",
    "Это здание раньше было школой.",
    "Ten budynek dawniej był szkołą.",
    "This building used to be a school."
  ],
  [
    "They used to argue all the time.",
    "They didn’t use to argue all the time.",
    "They argue all the time.",
    "They argued all the time.",
    "They were arguing all the time.",
    "Они раньше постоянно ссорились.",
    "Dawniej ciągle się kłócili.",
    "They used to argue all the time."
  ],
  [
    "I used to drink a lot of coffee.",
    "I didn’t use to drink a lot of coffee.",
    "I drink a lot of coffee.",
    "I drank a lot of coffee.",
    "I have drunk a lot of coffee.",
    "Я раньше пил много кофе.",
    "Dawniej piłem dużo kawy.",
    "I used to drink a lot of coffee."
  ],
  [
    "She used to be afraid of spiders.",
    "She didn’t use to be afraid of spiders.",
    "She is afraid of spiders.",
    "She was afraid of spiders.",
    "She has been afraid of spiders.",
    "Она раньше боялась пауков.",
    "Dawniej bała się pająków.",
    "She used to be afraid of spiders."
  ],
  [
    "We used to visit our grandparents every weekend.",
    "We didn’t use to visit our grandparents every weekend.",
    "We visit our grandparents every weekend.",
    "We visited our grandparents every weekend.",
    "We have visited our grandparents every weekend.",
    "Мы раньше навещали бабушку и дедушку каждые выходные.",
    "Dawniej odwiedzaliśmy dziadków co weekend.",
    "We used to visit our grandparents every weekend."
  ],
  [
    "He used to ride a bicycle to work.",
    "He didn’t use to ride a bicycle to work.",
    "He rides a bicycle to work.",
    "He rode a bicycle to work.",
    "He was riding a bicycle to work.",
    "Он раньше ездил на велосипеде на работу.",
    "Dawniej jeździł rowerem do pracy.",
    "He used to ride a bicycle to work."
  ],
  [
    "I used to collect stamps.",
    "I didn’t use to collect stamps.",
    "I collect stamps.",
    "I collected stamps.",
    "I have collected stamps.",
    "Я раньше собирал марки.",
    "Dawniej zbierałem znaczki.",
    "I used to collect stamps."
  ],
  [
    "The shop used to sell old books.",
    "The shop didn’t use to sell old books.",
    "The shop sells old books.",
    "The shop sold old books.",
    "The shop has sold old books.",
    "Этот магазин раньше продавал старые книги.",
    "Ten sklep dawniej sprzedawał stare książki.",
    "The shop used to sell old books."
  ],
  [
    "She used to sing in a choir.",
    "She didn’t use to sing in a choir.",
    "She sings in a choir.",
    "She sang in a choir.",
    "She was singing in a choir.",
    "Она раньше пела в хоре.",
    "Dawniej śpiewała w chórze.",
    "She used to sing in a choir."
  ],
  [
    "I used to watch cartoons every morning.",
    "I didn’t use to watch cartoons every morning.",
    "I watch cartoons every morning.",
    "I watched cartoons every morning.",
    "I was watching cartoons every morning.",
    "Я раньше смотрел мультфильмы каждое утро.",
    "Dawniej oglądałem bajki co rano.",
    "I used to watch cartoons every morning."
  ],
  [
    "They used to travel abroad every summer.",
    "They didn’t use to travel abroad every summer.",
    "They travel abroad every summer.",
    "They travelled abroad every summer.",
    "They have travelled abroad every summer.",
    "Они раньше ездили за границу каждое лето.",
    "Dawniej jeździli za granicę co lato.",
    "They used to travel abroad every summer."
  ],
  [
    "My brother used to play computer games all night.",
    "My brother didn’t use to play computer games all night.",
    "My brother plays computer games all night.",
    "My brother played computer games all night.",
    "My brother has played computer games all night.",
    "Мой брат раньше играл в компьютерные игры всю ночь.",
    "Mój brat dawniej grał w gry komputerowe całą noc.",
    "My brother used to play computer games all night."
  ],
  [
    "She used to wear glasses.",
    "She didn’t use to wear glasses.",
    "She wears glasses.",
    "She wore glasses.",
    "She has worn glasses.",
    "Она раньше носила очки.",
    "Dawniej nosiła okulary.",
    "She used to wear glasses."
  ],
  [
    "We used to have a big garden.",
    "We didn’t use to have a big garden.",
    "We have a big garden.",
    "We had a big garden.",
    "We have had a big garden.",
    "У нас раньше был большой сад.",
    "Dawniej mieliśmy duży ogród.",
    "We used to have a big garden."
  ],
  [
    "I used to believe in ghosts.",
    "I didn’t use to believe in ghosts.",
    "I believe in ghosts.",
    "I believed in ghosts.",
    "I have believed in ghosts.",
    "Я раньше верил в привидения.",
    "Dawniej wierzyłem w duchy.",
    "I used to believe in ghosts."
  ],
  [
    "He used to be a very good dancer.",
    "He didn’t use to be a very good dancer.",
    "He is a very good dancer.",
    "He was a very good dancer.",
    "He has been a very good dancer.",
    "Он раньше был очень хорошим танцором.",
    "Dawniej był bardzo dobrym tancerzem.",
    "He used to be a very good dancer."
  ],
  [
    "The city used to be much quieter.",
    "The city didn’t use to be much quieter.",
    "The city is much quieter.",
    "The city was much quieter.",
    "The city has been much quieter.",
    "Город раньше был намного тише.",
    "Miasto dawniej było o wiele spokojniejsze.",
    "The city used to be much quieter."
  ],
  [
    "I used to read a lot of books.",
    "I didn’t use to read a lot of books.",
    "I read a lot of books.",
    "I read a lot of books last year.",
    "I have read a lot of books.",
    "Я раньше читал много книг.",
    "Dawniej czytałem dużo książek.",
    "I used to read a lot of books."
  ],
  [
    "She used to cry easily.",
    "She didn’t use to cry easily.",
    "She cries easily.",
    "She cried easily.",
    "She has cried easily.",
    "Она раньше легко плакала.",
    "Dawniej łatwo płakała.",
    "She used to cry easily."
  ],
  [
    "We used to live without a smartphone.",
    "We didn’t use to live without a smartphone.",
    "We live without a smartphone.",
    "We lived without a smartphone.",
    "We have lived without a smartphone.",
    "Мы раньше жили без смартфона.",
    "Dawniej żyliśmy bez smartfona.",
    "We used to live without a smartphone."
  ],
  [
    "He used to eat too much junk food.",
    "He didn’t use to eat too much junk food.",
    "He eats too much junk food.",
    "He ate too much junk food.",
    "He has eaten too much junk food.",
    "Он раньше ел слишком много вредной еды.",
    "Dawniej jadł za dużo fast foodu.",
    "He used to eat too much junk food."
  ],
  [
    "I used to have a pet rabbit.",
    "I didn’t use to have a pet rabbit.",
    "I have a pet rabbit.",
    "I had a pet rabbit.",
    "I have had a pet rabbit.",
    "У меня раньше был домашний кролик.",
    "Dawniej miałem królika jako zwierzaka.",
    "I used to have a pet rabbit."
  ],
  [
    "They used to fight a lot as children.",
    "They didn’t use to fight a lot as children.",
    "They fight a lot as children.",
    "They fought a lot as children.",
    "They have fought a lot as children.",
    "Они раньше часто дрались в детстве.",
    "Dawniej często się bili jako dzieci.",
    "They used to fight a lot as children."
  ],
  [
    "She used to speak French fluently.",
    "She didn’t use to speak French fluently.",
    "She speaks French fluently.",
    "She spoke French fluently.",
    "She has spoken French fluently.",
    "Она раньше свободно говорила по-французски.",
    "Dawniej mówiła płynnie po francusku.",
    "She used to speak French fluently."
  ],
  [
    "I used to go fishing with my grandfather.",
    "I didn’t use to go fishing with my grandfather.",
    "I go fishing with my grandfather.",
    "I went fishing with my grandfather.",
    "I have gone fishing with my grandfather.",
    "Я раньше ходил на рыбалку с дедушкой.",
    "Dawniej chodziłem na ryby z dziadkiem.",
    "I used to go fishing with my grandfather."
  ],
  [
    "The house used to be white.",
    "The house didn’t use to be white.",
    "The house is white.",
    "The house was white.",
    "The house has been white.",
    "Дом раньше был белым.",
    "Dom dawniej był biały.",
    "The house used to be white."
  ],
  [
    "We used to have family dinners every Sunday.",
    "We didn’t use to have family dinners every Sunday.",
    "We have family dinners every Sunday.",
    "We had family dinners every Sunday.",
    "We have had family dinners every Sunday.",
    "Мы раньше устраивали семейные ужины каждое воскресенье.",
    "Dawniej mieliśmy rodzinne obiady co niedzielę.",
    "We used to have family dinners every Sunday."
  ],
  [
    "He used to be very thin.",
    "He didn’t use to be very thin.",
    "He is very thin.",
    "He was very thin.",
    "He has been very thin.",
    "Он раньше был очень худым.",
    "Dawniej był bardzo chudy.",
    "He used to be very thin."
  ],
  [
    "I used to listen to rock music.",
    "I didn’t use to listen to rock music.",
    "I listen to rock music.",
    "I listened to rock music.",
    "I have listened to rock music.",
    "Я раньше слушал рок-музыку.",
    "Dawniej słuchałem rocka.",
    "I used to listen to rock music."
  ],
  [
    "She used to draw pictures every day.",
    "She didn’t use to draw pictures every day.",
    "She draws pictures every day.",
    "She drew pictures every day.",
    "She was drawing pictures every day.",
    "Она раньше рисовала картинки каждый день.",
    "Dawniej rysowała obrazki codziennie.",
    "She used to draw pictures every day."
  ],
  [
    "They used to own a red car.",
    "They didn’t use to own a red car.",
    "They own a red car.",
    "They owned a red car.",
    "They have owned a red car.",
    "Они раньше владели красной машиной.",
    "Dawniej mieli czerwony samochód.",
    "They used to own a red car."
  ],
  [
    "I used to be late for school.",
    "I didn’t use to be late for school.",
    "I am late for school.",
    "I was late for school.",
    "I have been late for school.",
    "Я раньше опаздывал в школу.",
    "Dawniej spóźniałem się do szkoły.",
    "I used to be late for school."
  ],
  [
    "My grandmother used to tell us fairy tales.",
    "My grandmother didn’t use to tell us fairy tales.",
    "My grandmother tells us fairy tales.",
    "My grandmother told us fairy tales.",
    "My grandmother has told us fairy tales.",
    "Моя бабушка раньше рассказывала нам сказки.",
    "Moja babcia dawniej opowiadała nam bajki.",
    "My grandmother used to tell us fairy tales."
  ],
  [
    "He used to run every morning.",
    "He didn’t use to run every morning.",
    "He runs every morning.",
    "He ran every morning.",
    "He was running every morning.",
    "Он раньше бегал каждое утро.",
    "Dawniej biegał co rano.",
    "He used to run every morning."
  ],
  [
    "We used to write letters to each other.",
    "We didn’t use to write letters to each other.",
    "We write letters to each other.",
    "We wrote letters to each other.",
    "We have written letters to each other.",
    "Мы раньше писали друг другу письма.",
    "Dawniej pisaliśmy do siebie listy.",
    "We used to write letters to each other."
  ],
  [
    "The river used to be cleaner.",
    "The river didn’t use to be cleaner.",
    "The river is cleaner.",
    "The river was cleaner.",
    "The river has been cleaner.",
    "Река раньше была чище.",
    "Rzeka dawniej była czystszą.",
    "The river used to be cleaner."
  ],
  [
    "I used to dream of becoming a pilot.",
    "I didn’t use to dream of becoming a pilot.",
    "I dream of becoming a pilot.",
    "I dreamed of becoming a pilot.",
    "I have dreamed of becoming a pilot.",
    "Я раньше мечтал стать пилотом.",
    "Dawniej marzyłem o zostaniu pilotem.",
    "I used to dream of becoming a pilot."
  ],
  [
    "She used to keep a diary.",
    "She didn’t use to keep a diary.",
    "She keeps a diary.",
    "She kept a diary.",
    "She has kept a diary.",
    "Она раньше вела дневник.",
    "Dawniej prowadziła pamiętnik.",
    "She used to keep a diary."
  ],
  [
    "People used to dress more formally.",
    "People didn’t use to dress more formally.",
    "People dress more formally.",
    "People dressed more formally.",
    "People have dressed more formally.",
    "Люди раньше одевались более формально.",
    "Ludzie dawniej ubierali się bardziej formalnie.",
    "People used to dress more formally."
  ],



  [
    "I used to play football every day after school.",
    "Did you use to play football every day after school?",
    "Did you use to live in a small village?",
    "Did she use to work as a doctor?",
    "Did they use to speak French fluently?",
    "Я раньше играл в футбол каждый день после школы.",
    "Dawniej grałem w piłkę nożną codziennie po szkole.",
    "I used to play football every day after school."
  ],
  [
    "She used to have long blonde hair.",
    "Did she use to have long blonde hair?",
    "Did he use to collect stamps?",
    "Did you use to wake up at 5 a.m.?",
    "Did they use to own a red car?",
    "У неё раньше были длинные светлые волосы.",
    "Dawniej miała długie blond włosy.",
    "She used to have long blonde hair."
  ],
  [
    "They used to live in a small village.",
    "Did they use to live in a small village?",
    "Did you use to smoke a lot?",
    "Did she use to sing in a choir?",
    "Did he use to ride a bicycle to work?",
    "Они раньше жили в маленькой деревне.",
    "Dawniej mieszkali w małej wiosce.",
    "They used to live in a small village."
  ],
  [
    "He used to smoke a lot.",
    "Did he use to smoke a lot?",
    "Did you use to be very shy?",
    "Did we use to spend summers at the seaside?",
    "Did she use to argue all the time?",
    "Он раньше много курил.",
    "Dawniej dużo palił.",
    "He used to smoke a lot."
  ],
  [
    "We used to go to the cinema every Friday.",
    "Did you use to go to the cinema every Friday?",
    "Did I use to have long hair?",
    "Did they use to play the guitar in a band?",
    "Did she use to wake up at 5 a.m.?",
    "Мы раньше ходили в кино каждую пятницу.",
    "Dawniej chodziliśmy do kina co piątek.",
    "We used to go to the cinema every Friday."
  ],
  [
    "I used to be very shy.",
    "Did you use to be very shy?",
    "Did she use to live in London?",
    "Did he use to drink a lot of coffee?",
    "Did they use to visit their grandparents?",
    "Я раньше был очень застенчивым.",
    "Dawniej byłem bardzo nieśmiały.",
    "I used to be very shy."
  ],
  [
    "My father used to work as a teacher.",
    "Did your father use to work as a teacher?",
    "Did you use to hate vegetables?",
    "Did she use to be afraid of spiders?",
    "Did he use to collect stamps?",
    "Мой отец раньше работал учителем.",
    "Mój ojciec dawniej pracował jako nauczyciel.",
    "My father used to work as a teacher."
  ],
  [
    "She used to wake up at 5 a.m.",
    "Did she use to wake up at 5 a.m.?",
    "Did they use to travel abroad every summer?",
    "Did you use to play computer games all night?",
    "Did he use to wear glasses?",
    "Она раньше просыпалась в 5 утра.",
    "Dawniej wstawała o 5 rano.",
    "She used to wake up at 5 a.m."
  ],
  [
    "We used to spend summers at the seaside.",
    "Did you use to spend summers at the seaside?",
    "Did she use to have a big garden?",
    "Did I use to believe in ghosts?",
    "Did they use to be very good dancers?",
    "Мы раньше проводили лето у моря.",
    "Dawniej spędzaliśmy lato nad morzem.",
    "We used to spend summers at the seaside."
  ],
  [
    "He used to play the guitar in a band.",
    "Did he use to play the guitar in a band?",
    "Did you use to read a lot of books?",
    "Did she use to cry easily?",
    "Did we use to live without smartphones?",
    "Он раньше играл на гитаре в группе.",
    "Dawniej grał na gitarze w zespole.",
    "He used to play the guitar in a band."
  ],
  [
    "I used to hate vegetables.",
    "Did you use to hate vegetables?",
    "Did he use to run every morning?",
    "Did they use to write letters?",
    "Did she use to keep a diary?",
    "Я раньше ненавидел овощи.",
    "Dawniej nienawidziłem warzyw.",
    "I used to hate vegetables."
  ],
  [
    "This building used to be a school.",
    "Did this building use to be a school?",
    "Did you use to eat too much junk food?",
    "Did she use to have a pet rabbit?",
    "Did they use to fight a lot?",
    "Это здание раньше было школой.",
    "Ten budynek dawniej był szkołą.",
    "This building used to be a school."
  ],
  [
    "They used to argue all the time.",
    "Did they use to argue all the time?",
    "Did I use to listen to rock music?",
    "Did you use to draw pictures every day?",
    "Did he use to own a red car?",
    "Они раньше постоянно ссорились.",
    "Dawniej ciągle się kłócili.",
    "They used to argue all the time."
  ],
  [
    "I used to drink a lot of coffee.",
    "Did you use to drink a lot of coffee?",
    "Did she use to speak French fluently?",
    "Did we use to go fishing?",
    "Did they use to dress more formally?",
    "Я раньше пил много кофе.",
    "Dawniej piłem dużo kawy.",
    "I used to drink a lot of coffee."
  ],
  [
    "She used to be afraid of spiders.",
    "Did she use to be afraid of spiders?",
    "Did you use to be late for school?",
    "Did he use to tell fairy tales?",
    "Did they use to have family dinners?",
    "Она раньше боялась пауков.",
    "Dawniej bała się pająków.",
    "She used to be afraid of spiders."
  ],
  // ... (з 16 по 50 я продовжив у тому ж стилі)
  [
    "We used to visit our grandparents every weekend.",
    "Did you use to visit your grandparents every weekend?",
    "Did she use to sing in a choir?",
    "Did he use to ride a bicycle?",
    "Did they use to live in a big city?",
    "Мы раньше навещали бабушку и дедушку каждые выходные.",
    "Dawniej odwiedzaliśmy dziadków co weekend.",
    "We used to visit our grandparents every weekend."
  ],
  [
    "He used to ride a bicycle to work.",
    "Did he use to ride a bicycle to work?",
    "Did you use to collect stamps?",
    "Did she use to sell old books?",
    "Did I use to watch cartoons every morning?",
    "Он раньше ездил на велосипеде на работу.",
    "Dawniej jeździł rowerem do pracy.",
    "He used to ride a bicycle to work."
  ],
  [
    "I used to collect stamps.",
    "Did you use to collect stamps?",
    "Did they use to be best friends?",
    "Did she use to have long hair?",
    "Did he use to smoke a lot?",
    "Я раньше собирал марки.",
    "Dawniej zbierałem znaczki.",
    "I used to collect stamps."
  ],
  [
    "The shop used to sell old books.",
    "Did the shop use to sell old books?",
    "Did you use to play the piano?",
    "Did we use to live in the countryside?",
    "Did she use to be very confident?",
    "Этот магазин раньше продавал старые книги.",
    "Ten sklep dawniej sprzedawał stare książki.",
    "The shop used to sell old books."
  ],
  [
    "She used to sing in a choir.",
    "Did she use to sing in a choir?",
    "Did you use to dream of becoming a pilot?",
    "Did he use to keep a diary?",
    "Did they use to run every morning?",
    "Она раньше пела в хоре.",
    "Dawniej śpiewała w chórze.",
    "She used to sing in a choir."
  ],
  [
    "I used to watch cartoons every morning.",
    "Did you use to watch cartoons every morning?",
    "Did she use to be very thin?",
    "Did we use to write letters?",
    "Did they use to argue all the time?",
    "Я раньше смотрел мультфильмы каждое утро.",
    "Dawniej oglądałem bajki co rano.",
    "I used to watch cartoons every morning."
  ],
  [
    "They used to travel abroad every summer.",
    "Did they use to travel abroad every summer?",
    "Did you use to hate vegetables?",
    "Did he use to work as a teacher?",
    "Did she use to wake up early?",
    "Они раньше ездили за границу каждое лето.",
    "Dawniej jeździli za granicę co lato.",
    "They used to travel abroad every summer."
  ],
  [
    "My brother used to play computer games all night.",
    "Did your brother use to play computer games all night?",
    "Did you use to spend summers at the seaside?",
    "Did she use to have long hair?",
    "Did they use to live in a village?",
    "Мой брат раньше играл в компьютерные игры всю ночь.",
    "Mój brat dawniej grał w gry komputerowe całą noc.",
    "My brother used to play computer games all night."
  ],
  [
    "She used to wear glasses.",
    "Did she use to wear glasses?",
    "Did you use to be afraid of spiders?",
    "Did he use to drink coffee?",
    "Did we use to go to the cinema?",
    "Она раньше носила очки.",
    "Dawniej nosiła okulary.",
    "She used to wear glasses."
  ],
  [
    "We used to have a big garden.",
    "Did you use to have a big garden?",
    "Did they use to smoke a lot?",
    "Did she use to play football?",
    "Did I use to collect stamps?",
    "У нас раньше был большой сад.",
    "Dawniej mieliśmy duży ogród.",
    "We used to have a big garden."
  ],
  [
    "I used to believe in ghosts.",
    "Did you use to believe in ghosts?",
    "Did he use to be a good dancer?",
    "Did she use to live in London?",
    "Did they use to argue often?",
    "Я раньше верил в привидения.",
    "Dawniej wierzyłem w duchy.",
    "I used to believe in ghosts."
  ],
  [
    "He used to be a very good dancer.",
    "Did he use to be a very good dancer?",
    "Did you use to read a lot?",
    "Did we use to visit grandparents?",
    "Did she use to wake up at 5 a.m.?",
    "Он раньше был очень хорошим танцором.",
    "Dawniej był bardzo dobrym tancerzem.",
    "He used to be a very good dancer."
  ],
  [
    "The city used to be much quieter.",
    "Did the city use to be much quieter?",
    "Did you use to eat junk food?",
    "Did she use to keep a diary?",
    "Did they use to wear glasses?",
    "Город раньше был намного тише.",
    "Miasto dawniej było o wiele spokojniejsze.",
    "The city used to be much quieter."
  ],
  [
    "I used to read a lot of books.",
    "Did you use to read a lot of books?",
    "Did he use to play in a band?",
    "Did she use to live in a village?",
    "Did we use to travel abroad?",
    "Я раньше читал много книг.",
    "Dawniej czytałem dużo książek.",
    "I used to read a lot of books."
  ],
  [
    "She used to cry easily.",
    "Did she use to cry easily?",
    "Did you use to have a pet rabbit?",
    "Did they use to fight as children?",
    "Did he use to speak French?",
    "Она раньше легко плакала.",
    "Dawniej łatwo płakała.",
    "She used to cry easily."
  ],
  [
    "We used to live without a smartphone.",
    "Did you use to live without a smartphone?",
    "Did she use to be shy?",
    "Did I use to smoke?",
    "Did they use to go to the cinema?",
    "Мы раньше жили без смартфона.",
    "Dawniej żyliśmy bez smartfona.",
    "We used to live without a smartphone."
  ],
  [
    "He used to eat too much junk food.",
    "Did he use to eat too much junk food?",
    "Did you use to be late for school?",
    "Did she use to sing in a choir?",
    "Did we use to have big garden?",
    "Он раньше ел слишком много вредной еды.",
    "Dawniej jadł za dużo fast foodu.",
    "He used to eat too much junk food."
  ],
  [
    "I used to have a pet rabbit.",
    "Did you use to have a pet rabbit?",
    "Did they use to travel every summer?",
    "Did he use to ride a bike?",
    "Did she use to wear glasses?",
    "У меня раньше был домашний кролик.",
    "Dawniej miałem królika jako zwierzaka.",
    "I used to have a pet rabbit."
  ],
  [
    "They used to fight a lot as children.",
    "Did they use to fight a lot as children?",
    "Did you use to believe in ghosts?",
    "Did she use to read books?",
    "Did he use to work as a teacher?",
    "Они раньше часто дрались в детстве.",
    "Dawniej często się bili jako dzieci.",
    "They used to fight a lot as children."
  ],
  [
    "She used to speak French fluently.",
    "Did she use to speak French fluently?",
    "Did you use to watch cartoons?",
    "Did we use to spend summers at sea?",
    "Did they use to argue all the time?",
    "Она раньше свободно говорила по-французски.",
    "Dawniej mówiła płynnie po francusku.",
    "She used to speak French fluently."
  ],
  [
    "I used to go fishing with my grandfather.",
    "Did you use to go fishing with your grandfather?",
    "Did she use to have long hair?",
    "Did he use to play guitar?",
    "Did they use to live in a village?",
    "Я раньше ходил на рыбалку с дедушкой.",
    "Dawniej chodziłem na ryby z dziadkiem.",
    "I used to go fishing with my grandfather."
  ],
  [
    "The house used to be white.",
    "Did the house use to be white?",
    "Did you use to drink a lot of coffee?",
    "Did she use to be afraid of spiders?",
    "Did they use to visit grandparents?",
    "Дом раньше был белым.",
    "Dom dawniej był biały.",
    "The house used to be white."
  ],
  [
    "We used to have family dinners every Sunday.",
    "Did you use to have family dinners every Sunday?",
    "Did he use to be very thin?",
    "Did she use to listen to rock music?",
    "Did I use to draw every day?",
    "Мы раньше устраивали семейные ужины каждое воскресенье.",
    "Dawniej mieliśmy rodzinne obiady co niedzielę.",
    "We used to have family dinners every Sunday."
  ],
  [
    "He used to be very thin.",
    "Did he use to be very thin?",
    "Did you use to play football?",
    "Did they use to sell old books?",
    "Did she use to wake up early?",
    "Он раньше был очень худым.",
    "Dawniej był bardzo chudy.",
    "He used to be very thin."
  ],
  [
    "I used to listen to rock music.",
    "Did you use to listen to rock music?",
    "Did she use to have a big garden?",
    "Did he use to believe in ghosts?",
    "Did we use to travel abroad?",
    "Я раньше слушал рок-музыку.",
    "Dawniej słuchałem rocka.",
    "I used to listen to rock music."
  ],
  [
    "She used to draw pictures every day.",
    "Did she use to draw pictures every day?",
    "Did you use to hate vegetables?",
    "Did they use to own a red car?",
    "Did he use to smoke?",
    "Она раньше рисовала картинки каждый день.",
    "Dawniej rysowała obrazki codziennie.",
    "She used to draw pictures every day."
  ],
  [
    "They used to own a red car.",
    "Did they use to own a red car?",
    "Did you use to be very shy?",
    "Did she use to go fishing?",
    "Did he use to work as a teacher?",
    "Они раньше владели красной машиной.",
    "Dawniej mieli czerwony samochód.",
    "They used to own a red car."
  ],
  [
    "I used to be late for school.",
    "Did you use to be late for school?",
    "Did she use to cry easily?",
    "Did they use to live without smartphones?",
    "Did he use to eat junk food?",
    "Я раньше опаздывал в школу.",
    "Dawniej spóźniałem się do szkoły.",
    "I used to be late for school."
  ],
  [
    "My grandmother used to tell us fairy tales.",
    "Did your grandmother use to tell you fairy tales?",
    "Did you use to read a lot?",
    "Did she use to wear glasses?",
    "Did they use to have family dinners?",
    "Моя бабушка раньше рассказывала нам сказки.",
    "Moja babcia dawniej opowiadała nam bajki.",
    "My grandmother used to tell us fairy tales."
  ],
  [
    "He used to run every morning.",
    "Did he use to run every morning?",
    "Did you use to collect stamps?",
    "Did she use to sing in a choir?",
    "Did we use to argue a lot?",
    "Он раньше бегал каждое утро.",
    "Dawniej biegał co rano.",
    "He used to run every morning."
  ],
  [
    "We used to write letters to each other.",
    "Did you use to write letters to each other?",
    "Did she use to be afraid of spiders?",
    "Did he use to play computer games?",
    "Did they use to spend summers at the sea?",
    "Мы раньше писали друг другу письма.",
    "Dawniej pisaliśmy do siebie listy.",
    "We used to write letters to each other."
  ],
  [
    "The river used to be cleaner.",
    "Did the river use to be cleaner?",
    "Did you use to dream of becoming a pilot?",
    "Did she use to keep a diary?",
    "Did they use to dress formally?",
    "Река раньше была чище.",
    "Rzeka dawniej była czystszą.",
    "The river used to be cleaner."
  ],
  [
    "I used to dream of becoming a pilot.",
    "Did you use to dream of becoming a pilot?",
    "Did he use to have long hair?",
    "Did she use to live in a village?",
    "Did we use to go to the cinema?",
    "Я раньше мечтал стать пилотом.",
    "Dawniej marzyłem o zostaniu pilotem.",
    "I used to dream of becoming a pilot."
  ],
  [
    "She used to keep a diary.",
    "Did she use to keep a diary?",
    "Did you use to fight as children?",
    "Did they use to speak French?",
    "Did he use to watch cartoons?",
    "Она раньше вела дневник.",
    "Dawniej prowadziła pamiętnik.",
    "She used to keep a diary."
  ],
  [
    "People used to dress more formally.",
    "Did people use to dress more formally?",
    "Did you use to be very thin?",
    "Did she use to eat junk food?",
    "Did they use to have a pet rabbit?",
    "Люди раньше одевались более формально.",
    "Ludzie dawniej ubierali się bardziej formalnie.",
    "People used to dress more formally."
  ],

  [
    "When I was a child, I went to the swimming pool almost every weekend with my friends. Now I rarely have time to swim because of work.",
    "I used to go swimming every weekend.",
    "I go swimming every weekend.",
    "I used to go swimming every day.",
    "I was going swimming every weekend.",
    "Когда я был ребёнком, я ходил в бассейн почти каждые выходные с друзьями. Сейчас у меня редко бывает время плавать из-за работы.",
    "Коли я був дитиною, я ходив у басейн майже кожні вихідні з друзями. Зараз у мене рідко буває час плавати через роботу.",
    "Kiedy byłem dzieckiem, chodziłem na basen prawie co weekend z przyjaciółmi. Teraz rzadko mam czas na pływanie z powodu pracy."
  ],
  [
    "As a student, Maria lived in a small apartment near the university. She moved to a big house after getting married.",
    "Maria used to live near the university.",
    "Maria lives near the university.",
    "Maria used to live in a big house.",
    "Maria was living near the university.",
    "Когда Мария была студенткой, она жила в маленькой квартире недалеко от университета. Она переехала в большой дом после свадьбы.",
    "Коли Марія була студенткою, вона жила в маленькій квартирі недалеко від університету. Вона переїхала у великий будинок після весілля.",
    "Kiedy Maria była studentką, mieszkała w małym mieszkaniu niedaleko uniwersytetu. Przeprowadziła się do dużego domu po ślubie."
  ],
  [
    "When he was younger, Alex played the guitar in a rock band. Now he only listens to music.",
    "Alex used to play the guitar in a band.",
    "Alex plays the guitar in a band.",
    "Alex used to listen to music all the time.",
    "Alex was playing the guitar in a band.",
    "Когда он был моложе, Алекс играл на гитаре в рок-группе. Сейчас он только слушает музыку.",
    "Коли він був молодшим, Алекс грав на гітарі в рок-групі. Зараз він тільки слухає музику.",
    "Kiedy był młodszy, Alex grał na gitarze w rockowym zespole. Teraz tylko słucha muzyki."
  ],
  [
    "In the past, we visited our grandparents every summer. Now we see them only on holidays.",
    "We used to visit our grandparents every summer.",
    "We visit our grandparents every summer.",
    "We used to see them only on holidays.",
    "We were visiting our grandparents every summer.",
    "В прошлом мы ездили к бабушке и дедушке каждое лето. Сейчас мы видим их только по праздникам.",
    "У минулому ми їздили до бабусі та дідуся кожне літо. Зараз ми бачимо їх лише на свята.",
    "W przeszłości odwiedzaliśmy dziadków co lato. Teraz widzimy ich tylko od święta."
  ],
  [
    "When she was a teenager, Anna hated vegetables and never ate them. Now she eats salad every day.",
    "Anna used to hate vegetables.",
    "Anna hates vegetables.",
    "Anna used to eat salad every day.",
    "Anna was hating vegetables.",
    "Когда она была подростком, Анна ненавидела овощи и никогда их не ела. Сейчас она ест салат каждый день.",
    "Коли вона була підлітком, Анна ненавиділа овочі і ніколи їх не їла. Зараз вона їсть салат щодня.",
    "Kiedy była nastolatką, Anna nienawidziła warzyw i nigdy ich nie jadła. Teraz je sałatkę codziennie."
  ],
  [
    "I worked as a waiter for many years before becoming a teacher. I really enjoyed that job at first.",
    "I used to work as a waiter.",
    "I work as a waiter.",
    "I used to be a teacher.",
    "I was working as a waiter.",
    "Я много лет работал официантом, прежде чем стал учителем. Сначала мне очень нравилась эта работа.",
    "Я багато років працював офіціантом, перш ніж став учителем. Спочатку мені дуже подобалася ця робота.",
    "Przez wiele lat pracowałem jako kelner, zanim zostałem nauczycielem. Na początku bardzo lubiłem tę pracę."
  ],
  [
    "This street was very quiet ten years ago. Now it is full of cars and people all the time.",
    "This street used to be very quiet.",
    "This street is very quiet.",
    "This street used to be full of cars.",
    "This street was being quiet.",
    "Эта улица была очень тихой десять лет назад. Сейчас она полна машин и людей.",
    "Ця вулиця була дуже тихою десять років тому. Зараз вона повна машин і людей.",
    "Ta ulica była bardzo cicha dziesięć lat temu. Teraz jest pełna samochodów i ludzi."
  ],
  [
    "When I was a kid, I was afraid of the dark and always slept with the light on.",
    "I used to be afraid of the dark.",
    "I am afraid of the dark.",
    "I used to sleep without any light.",
    "I was being afraid of the dark.",
    "Когда я был ребёнком, я боялся темноты и всегда спал с включённым светом.",
    "Коли я був дитиною, я боявся темряви і завжди спав з увімкненим світлом.",
    "Kiedy byłem dzieckiem, bałem się ciemności i zawsze spałem przy włączonym świetle."
  ],
  [
    "My grandmother baked delicious cakes every Sunday. She stopped after she turned 80.",
    "My grandmother used to bake cakes every Sunday.",
    "My grandmother bakes cakes every Sunday.",
    "My grandmother used to stop baking.",
    "My grandmother was baking cakes every Sunday.",
    "Моя бабушка пекла вкусные торты каждое воскресенье. Она перестала после 80 лет.",
    "Моя бабуся пекла смачні торти кожної неділі. Вона перестала після 80 років.",
    "Moja babcia piekła pyszne ciasta co niedzielę. Przestała po osiemdziesiątce."
  ],
  [
    "Peter smoked two packs of cigarettes a day. He quit smoking five years ago.",
    "Peter used to smoke a lot.",
    "Peter smokes a lot.",
    "Peter used to quit smoking.",
    "Peter was smoking two packs a day.",
    "Питер курил две пачки сигарет в день. Он бросил курить пять лет назад.",
    "Пітер курив дві пачки сигарет на день. Він кинув курити п'ять років тому.",
    "Peter palił dwie paczki papierosów dziennie. Rzucił palenie pięć lat temu."
  ],
  [
    "We lived in a small village with no internet. Then we moved to the city.",
    "We used to live in a small village.",
    "We live in a small village.",
    "We used to live in a big city.",
    "We were living in a small village.",
    "Мы жили в маленькой деревне без интернета. Потом мы переехали в город.",
    "Ми жили в маленькій деревні без інтернету. Потім ми переїхали в місто.",
    "Mieszkaliśmy w małej wiosce bez internetu. Potem przeprowadziliśmy się do miasta."
  ],
  [
    "She had very long hair when she was in school. She cut it short last year.",
    "She used to have long hair.",
    "She has long hair.",
    "She used to have short hair.",
    "She was having long hair.",
    "У неё были очень длинные волосы, когда она училась в школе. Она коротко постриглась в прошлом году.",
    "У неї були дуже довге волосся, коли вона вчилася в школі. Вона коротко підстриглася минулого року.",
    "Miała bardzo długie włosy kiedy chodziła do szkoły. Obcięła je na krótko w zeszłym roku."
  ],
  [
    "I rode my bicycle to school every morning. Now I drive a car.",
    "I used to ride a bicycle to school.",
    "I ride a bicycle to school.",
    "I used to drive a car to school.",
    "I was riding a bicycle to school.",
    "Я ездил на велосипеде в школу каждое утро. Сейчас я езжу на машине.",
    "Я їздив на велосипеді до школи щоранку. Зараз я їжджу на машині.",
    "Jeździłem rowerem do szkoły co rano. Teraz jeżdżę samochodem."
  ],
  [
    "They were best friends in childhood. Now they don't talk to each other.",
    "They used to be best friends.",
    "They are best friends.",
    "They used to fight all the time.",
    "They were being best friends.",
    "Они были лучшими друзьями в детстве. Сейчас они не общаются друг с другом.",
    "Вони були найкращими друзями в дитинстві. Зараз вони не спілкуються один з одним.",
    "Byli najlepszymi przyjaciółmi w dzieciństwie. Teraz nie rozmawiają ze sobą."
  ],
  [
    "I watched cartoons every morning before school. Now I watch news.",
    "I used to watch cartoons every morning.",
    "I watch cartoons every morning.",
    "I used to watch news every morning.",
    "I was watching cartoons every morning.",
    "Я смотрел мультфильмы каждое утро перед школой. Сейчас я смотрю новости.",
    "Я дивився мультфільми щоранку перед школою. Зараз я дивлюся новини.",
    "Oglądałem bajki co rano przed szkołą. Teraz oglądam wiadomości."
  ],
  [
    "The old shop sold only books. Now it is a modern cafe.",
    "The shop used to sell books.",
    "The shop sells books.",
    "The shop used to be a cafe.",
    "The shop was selling only books.",
    "В старом магазине продавались только книги. Сейчас это современное кафе.",
    "У старому магазині продавалися тільки книги. Зараз це сучасне кафе.",
    "Stary sklep sprzedawał tylko książki. Teraz jest nowoczesną kawiarnią."
  ],
  [
    "She was very shy and never spoke in class. Now she is a confident teacher.",
    "She used to be very shy.",
    "She is very shy.",
    "She used to be confident.",
    "She was being very shy.",
    "Она была очень застенчивой и никогда не говорила на уроках. Сейчас она уверенная в себе учительница.",
    "Вона була дуже сором'язливою і ніколи не говорила на уроках. Зараз вона впевнена в собі вчителька.",
    "Była bardzo nieśmiała i nigdy nie odzywała się na lekcjach. Teraz jest pewną siebie nauczycielką."
  ],
  [
    "We didn't have a car, so we walked everywhere. We bought a car last year.",
    "We used to walk everywhere.",
    "We walk everywhere.",
    "We used to have a car.",
    "We were walking everywhere.",
    "У нас не було машини, тому ми ходили пішки всюди. Ми купили машину минулого року.",
    "У нас не було машини, тому ми ходили пішки всюди. Ми купили машину торік.",
    "Nie mieliśmy samochodu, więc chodziliśmy wszędzie pieszo. Kupiliśmy samochód w zeszłym roku."
  ],
  [
    "He drank five cups of coffee every day. Now he drinks only tea.",
    "He used to drink a lot of coffee.",
    "He drinks a lot of coffee.",
    "He used to drink tea.",
    "He was drinking five cups of coffee.",
    "Он пил пять чашек кофе каждый день. Сейчас он пьёт только чай.",
    "Він пив п'ять чашок кави щодня. Зараз він п'є тільки чай.",
    "Pijał pięć filiżanek kawy dziennie. Teraz pije tylko herbatę."
  ],
  [
    "I collected stamps as a hobby when I was young. I stopped many years ago.",
    "I used to collect stamps.",
    "I collect stamps.",
    "I used to stop collecting stamps.",
    "I was collecting stamps.",
    "Я собирал марки в качестве хобби, когда был молодым. Я перестал много лет назад.",
    "Я збирав марки як хобі, коли був молодим. Я перестав багато років тому.",
    "Zbierałem znaczki jako hobby kiedy byłem młody. Przestałem wiele lat temu."
  ],
  [
    "The river near our house was clean and full of fish. Now it is polluted.",
    "The river used to be clean.",
    "The river is clean.",
    "The river used to be polluted.",
    "The river was being clean.",
    "Река около нашего дома была чистой и полной рыбы. Сейчас она загрязнена.",
    "Річка біля нашого будинку була чистою і повною риби. Зараз вона забруднена.",
    "Rzeka koło naszego domu była czysta i pełna ryb. Teraz jest zanieczyszczona."
  ],
  [
    "She cried very easily when she watched sad movies. Now she rarely cries.",
    "She used to cry easily.",
    "She cries easily.",
    "She used to rarely cry.",
    "She was crying easily.",
    "Она очень легко плакала, когда смотрела грустные фильмы. Сейчас она редко плачет.",
    "Вона дуже легко плакала, коли дивилася сумні фільми. Зараз вона рідко плаче.",
    "Płakała bardzo łatwo oglądając smutne filmy. Teraz rzadko płacze."
  ],
  [
    "We had big family dinners every Sunday at my grandparents' house.",
    "We used to have family dinners every Sunday.",
    "We have family dinners every Sunday.",
    "We used to have dinners only on holidays.",
    "We were having family dinners every Sunday.",
    "У нас были большие семейные ужины каждое воскресенье в доме бабушки и дедушки.",
    "У нас були великі сімейні вечері кожної неділі в будинку бабусі та дідуся.",
    "Mieliśmy duże rodzinne obiady co niedzielę w domu dziadków."
  ],
  [
    "I believed in Santa Claus until I was ten years old.",
    "I used to believe in Santa Claus.",
    "I believe in Santa Claus.",
    "I used to stop believing in Santa Claus.",
    "I was believing in Santa Claus.",
    "Я верил в Санта Клауса до десяти лет.",
    "Я вірив у Санта Клауса до десяти років.",
    "Wierzyłem w Świętego Mikołaja do dziesiątego roku życia."
  ],
  [
    "People dressed more formally for work in the past.",
    "People used to dress more formally.",
    "People dress more formally.",
    "People used to dress casually.",
    "People were dressing more formally.",
    "Люди одевались более формально на работу в прошлом.",
    "Люди одягалися більш формально на роботу в минулому.",
    "Ludzie ubierali się bardziej formalnie do pracy w przeszłości."
  ],
  [
    "I dreamed of becoming a pilot when I was a child.",
    "I used to dream of becoming a pilot.",
    "I dream of becoming a pilot.",
    "I used to dream of becoming a doctor.",
    "I was dreaming of becoming a pilot.",
    "Я мечтал стать пилотом, когда был ребёнком.",
    "Я мріяв стати пілотом, коли був дитиною.",
    "Marzyłem o zostaniu pilotem kiedy byłem dzieckiem."
  ],
  [
    "She kept a personal diary every night before sleeping.",
    "She used to keep a diary.",
    "She keeps a diary.",
    "She used to read a diary.",
    "She was keeping a diary.",
    "Она вела личный дневник каждую ночь перед сном.",
    "Вона вела особистий щоденник кожної ночі перед сном.",
    "Prowadziła osobisty pamiętnik każdej nocy przed snem."
  ],
  [
    "My father told us bedtime stories every evening.",
    "My father used to tell us bedtime stories.",
    "My father tells us bedtime stories.",
    "My father used to read us books.",
    "My father was telling us stories.",
    "Мой отец рассказывал нам сказки на ночь каждый вечер.",
    "Мій батько розповідав нам казки на ніч щовечора.",
    "Mój ojciec opowiadał nam bajki na dobranoc co wieczór."
  ],
  [
    "The house was painted white many years ago. Now it is grey.",
    "The house used to be white.",
    "The house is white.",
    "The house used to be grey.",
    "The house was being white.",
    "Дом был покрашен в белый цвет много лет назад. Сейчас он серый.",
    "Будинок був пофарбований у білий колір багато років тому. Зараз він сірий.",
    "Dom był pomalowany na biało wiele lat temu. Teraz jest szary."
  ],
  [
    "I played outside with friends until late in the evening.",
    "I used to play outside until late.",
    "I play outside until late.",
    "I used to stay at home in the evening.",
    "I was playing outside until late.",
    "Я гулял на улице с друзьями до позднего вечера.",
    "Я гуляв на вулиці з друзями до пізнього вечора.",
    "Bawiłem się na zewnątrz z przyjaciółmi do późnego wieczora."
  ],
  [
    "She spoke three languages fluently when she was twenty.",
    "She used to speak three languages fluently.",
    "She speaks three languages fluently.",
    "She used to speak only one language.",
    "She was speaking three languages.",
    "Она свободно говорила на трёх языках, когда ей было двадцать.",
    "Вона вільно говорила трьома мовами, коли їй було двадцять.",
    "Mówiła biegle w trzech językach kiedy miała dwadzieścia lat."
  ],
  [
    "We didn't have smartphones, so we talked face to face more.",
    "We used to talk face to face more.",
    "We talk face to face more.",
    "We used to use smartphones more.",
    "We were talking face to face.",
    "У нас не було смартфонів, тому ми більше спілкувалися вживу.",
    "У нас не було смартфонів, тому ми більше розмовляли вживу.",
    "Nie mieliśmy smartfonów, więc więcej rozmawialiśmy twarzą w twarz."
  ],
  [
    "He was very thin and ate very little when he was a student.",
    "He used to be very thin.",
    "He is very thin.",
    "He used to be overweight.",
    "He was being very thin.",
    "Он был очень худым и ел очень мало, когда был студентом.",
    "Він був дуже худим і їв дуже мало, коли був студентом.",
    "Był bardzo chudy i jadł bardzo mało kiedy był studentem."
  ],
  [
    "I listened to rock music every day after school.",
    "I used to listen to rock music every day.",
    "I listen to rock music every day.",
    "I used to listen to classical music.",
    "I was listening to rock music.",
    "Я слушал рок-музыку каждый день после школы.",
    "Я слухав рок-музику щодня після школи.",
    "Słuchałem rocka codziennie po szkole."
  ],
  [
    "They argued a lot when they were young.",
    "They used to argue a lot.",
    "They argue a lot.",
    "They used to agree all the time.",
    "They were arguing a lot.",
    "Они часто ссорились, когда были молодыми.",
    "Вони часто сварилися, коли були молодими.",
    "Często się kłócili kiedy byli młodzi."
  ],
  [
    "I drew pictures and painted every afternoon.",
    "I used to draw pictures every day.",
    "I draw pictures every day.",
    "I used to read books every afternoon.",
    "I was drawing pictures every afternoon.",
    "Я малював картинки і фарбував кожний день після обіду.",
    "Я малював картинки і фарбував кожного дня після обіду.",
    "Rysowałem i malowałem obrazy co popołudnie."
  ],
  [
    "The park near my house was empty in the mornings. Now it's always crowded.",
    "The park used to be empty.",
    "The park is empty.",
    "The park used to be crowded.",
    "The park was being empty.",
    "Парк около моего дома был пустым по утрам. Сейчас он всегда переполнен.",
    "Парк біля мого будинку був порожнім вранці. Зараз він завжди переповнений.",
    "Park koło mojego domu był pusty rano. Teraz jest zawsze zatłoczony."
  ],
  [
    "She wrote long letters to her friends every month.",
    "She used to write long letters.",
    "She writes long letters.",
    "She used to send short messages.",
    "She was writing long letters.",
    "Она писала длинные письма своим друзьям каждый месяц.",
    "Вона писала довгі листи своїм друзям кожного місяця.",
    "Pisała długie listy do przyjaciół co miesiąc."
  ],
  [
    "I was late for school almost every day.",
    "I used to be late for school.",
    "I am late for school.",
    "I used to be early for school.",
    "I was being late for school.",
    "Я опаздывал в школу почти каждый день.",
    "Я запізнювався до школи майже щодня.",
    "Spóźniałem się do szkoły prawie codziennie."
  ],
  [
    "My family went on picnics every weekend in spring.",
    "We used to go on picnics every weekend.",
    "We go on picnics every weekend.",
    "We used to stay at home every weekend.",
    "We were going on picnics every weekend.",
    "Моя семья ездила на пикники каждые выходные весной.",
    "Моя сім'я їздила на пікніки кожні вихідні навесні.",
    "Moja rodzina jeździła na pikniki co weekend wiosną."
  ],
  [
    "He had a pet parrot that could speak many words.",
    "He used to have a pet parrot.",
    "He has a pet parrot.",
    "He used to have a dog.",
    "He was having a pet parrot.",
    "У него был домашний попугай, который умел говорить много слов.",
    "У нього був домашній папуга, який вмів говорити багато слів.",
    "Miał papugę, która umiała mówić wiele słów."
  ],
  [
    "The school had only one computer for all students.",
    "The school used to have only one computer.",
    "The school has only one computer.",
    "The school used to have many computers.",
    "The school was having one computer.",
    "В школе был только один компьютер на всех учеников.",
    "У школі був тільки один комп'ютер на всіх учнів.",
    "W szkole był tylko jeden komputer dla wszystkich uczniów."
  ],
  [
    "I wanted to be a famous actor when I was a teenager.",
    "I used to want to be a famous actor.",
    "I want to be a famous actor.",
    "I used to want to be a doctor.",
    "I was wanting to be an actor.",
    "Я хотел стать знаменитым актёром, когда был подростком.",
    "Я хотів стати знаменитим актором, коли був підлітком.",
    "Chciałem zostać sławnym aktorem kiedy byłem nastolatkiem."
  ],
  [
    "She wore colorful dresses every day in summer.",
    "She used to wear colorful dresses.",
    "She wears colorful dresses.",
    "She used to wear black clothes.",
    "She was wearing colorful dresses.",
    "Она носила яркие платья каждый день летом.",
    "Вона носила яскраві сукні кожен день влітку.",
    "Nosiła kolorowe sukienki codziennie latem."
  ],
  [
    "We didn't lock the doors at night because the village was safe.",
    "We used to leave the doors unlocked.",
    "We leave the doors unlocked.",
    "We used to lock the doors all the time.",
    "We were leaving the doors unlocked.",
    "Мы не запирали двери на ночь, потому что деревня была безопасной.",
    "Ми не зачиняли двері на ніч, тому що село було безпечним.",
    "Nie zamykaliśmy drzwi na noc, bo wioska była bezpieczna."
  ],
  [
    "I read books under the blanket with a flashlight at night.",
    "I used to read books at night with a flashlight.",
    "I read books at night with a flashlight.",
    "I used to watch TV at night.",
    "I was reading books under the blanket.",
    "Я читал книги под одеялом с фонариком ночью.",
    "Я читав книги під ковдрою з ліхтариком вночі.",
    "Czytałem książki pod kołdrą z latarką w nocy."
  ],
  [
    "The bakery on the corner made fresh bread every morning at 6 a.m.",
    "The bakery used to make fresh bread every morning.",
    "The bakery makes fresh bread every morning.",
    "The bakery used to sell only cakes.",
    "The bakery was making fresh bread.",
    "Пекарня на углу пекла свежий хлеб каждое утро в 6 часов.",
    "Пекарня на розі пекла свіжий хліб щоранку о 6 годині.",
    "Piekarnia na rogu piekła świeży chleb co rano o 6:00."
  ],
  [
    "Children played football in the street without worrying about cars.",
    "Children used to play football in the street.",
    "Children play football in the street.",
    "Children used to play inside the house.",
    "Children were playing football in the street.",
    "Дети играли в футбол на улице, не беспокоясь о машинах.",
    "Діти грали у футбол на вулиці, не турбуючись про машини.",
    "Dzieci grały w piłkę na ulicy bez obaw o samochody."
  ],
  [
    "I had to share one room with my three brothers.",
    "I used to share a room with my brothers.",
    "I share a room with my brothers.",
    "I used to have my own room.",
    "I was sharing a room with my brothers.",
    "Мне приходилось делить одну комнату с тремя братьями.",
    "Мені доводилося ділити одну кімнату з трьома братами.",
    "Musiałem dzielić pokój z trzema braćmi."
  ],
  [
    "She smiled at everyone she met on the street.",
    "She used to smile at everyone.",
    "She smiles at everyone.",
    "She used to ignore everyone.",
    "She was smiling at everyone.",
    "Она улыбалась всем, кого встречала на улице.",
    "Вона усміхалася всім, кого зустрічала на вулиці.",
    "Uśmiechała się do każdego kogo spotykała na ulicy."
  ]

];

// console.log(unit35.length);
// unit35.push(...extending(unit35, "Don't ", "Do not "));
// unit35.push(...extending(unit35, "don't ", "do not "));
// unit35.push(...extending(unit35, "Let's ", "Let us "));
// console.log(unit35.length);

// Если это свойство есть, то оно попадает в заголовок теста
unit36.nameLeson = "I used to ...";

//--созданными предложениями.
unit36.lengthTrue = 5;

// console.log(unit33.length);

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit36.push(...extendForArray(unit36));

unit36.push(...extendForArray2(unit36));

export { unit36 };


