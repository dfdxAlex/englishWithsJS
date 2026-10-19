import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';
import { extending } from './extend/extending.js';

const unit40 = [
  [
    "Are you tired?",
    "Yes, I am.",
    "No, they don't.",
    "Yes, she has.",
    "No, he didn't.",
    "Ты устал?",
    "Ти втомився?",
    "Czy jesteś zmęczony?"
  ],
  [
    "Are they at home?",
    "No, they aren't.",
    "Yes, I do.",
    "No, she hasn't.",
    "Yes, he did.",
    "Они дома?",
    "Вони вдома?",
    "Czy oni są w domu?"
  ],
  [
    "Is she busy today?",
    "Yes, she is.",
    "No, I don't.",
    "Yes, we have.",
    "No, they didn't.",
    "Она сегодня занята?",
    "Вона сьогодні зайнята?",
    "Czy ona jest dziś zajęta?"
  ],
  [
    "Is your brother a teacher?",
    "No, he isn't.",
    "Yes, they do.",
    "No, I haven't.",
    "Yes, she did.",
    "Твой брат учитель?",
    "Твій брат учитель?",
    "Czy twój brat jest nauczycielem?"
  ],
  [
    "Are we late?",
    "Yes, we are.",
    "No, he doesn't.",
    "Yes, she has.",
    "No, I didn't.",
    "Мы опоздали?",
    "Ми запізнилися?",
    "Czy jesteśmy spóźnieni?"
  ],
  [
    "Is the weather nice?",
    "Yes, it is.",
    "No, they haven't.",
    "Yes, I do.",
    "No, she didn't.",
    "Погода хорошая?",
    "Погода гарна?",
    "Czy pogoda jest ładna?"
  ],
  [
    "Do you like coffee?",
    "Yes, I do.",
    "No, she isn't.",
    "Yes, they have.",
    "No, he didn't.",
    "Тебе нравится кофе?",
    "Тобі подобається кава?",
    "Czy lubisz kawę?"
  ],
  [
    "Do they play football?",
    "No, they don't.",
    "Yes, I am.",
    "No, she hasn't.",
    "Yes, he did.",
    "Они играют в футбол?",
    "Вони грають у футбол?",
    "Czy oni grają w piłkę nożną?"
  ],
  [
    "Do we need more time?",
    "Yes, we do.",
    "No, he isn't.",
    "Yes, she has.",
    "No, they didn't.",
    "Нам нужно больше времени?",
    "Нам потрібно більше часу?",
    "Czy potrzebujemy więcej czasu?"
  ],
  [
    "Do your parents live here?",
    "No, they don't.",
    "Yes, I have.",
    "No, she isn't.",
    "Yes, he did.",
    "Твои родители живут здесь?",
    "Твої батьки живуть тут?",
    "Czy twoi rodzice mieszkają tutaj?"
  ],
  [
    "Does he work here?",
    "Yes, he does.",
    "No, they aren't.",
    "Yes, I have.",
    "No, she didn't.",
    "Он работает здесь?",
    "Він працює тут?",
    "Czy on tutaj pracuje?"
  ],
  [
    "Does your sister drive?",
    "No, she doesn't.",
    "Yes, we are.",
    "No, I haven't.",
    "Yes, they did.",
    "Твоя сестра водит машину?",
    "Твоя сестра водить машину?",
    "Czy twoja siostra prowadzi samochód?"
  ],
  [
    "Does Tom speak English?",
    "Yes, he does.",
    "No, she isn't.",
    "Yes, I have.",
    "No, we didn't.",
    "Том говорит по-английски?",
    "Том розмовляє англійською?",
    "Czy Tom mówi po angielsku?"
  ],
  [
    "Does your dog sleep inside?",
    "No, it doesn't.",
    "Yes, they have.",
    "No, I am not.",
    "Yes, she did.",
    "Твоя собака спит дома?",
    "Твій собака спить вдома?",
    "Czy twój pies śpi w domu?"
  ],
  [
    "Does she understand?",
    "Yes, she does.",
    "No, they haven't.",
    "Yes, I am.",
    "No, he did not.",
    "Она понимает?",
    "Вона розуміє?",
    "Czy ona rozumie?"
  ],
  [
    "Did you see Tom yesterday?",
    "Yes, I did.",
    "No, she doesn't.",
    "Yes, they are.",
    "No, I haven't.",
    "Ты видел Тома вчера?",
    "Ти бачив Тома вчора?",
    "Czy widziałeś Toma wczoraj?"
  ],
  [
    "Did they arrive on time?",
    "No, they didn't.",
    "Yes, she is.",
    "No, I don't.",
    "Yes, he has.",
    "Они приехали вовремя?",
    "Вони прибули вчасно?",
    "Czy przyjechali na czas?"
  ],
  [
    "Did she call you?",
    "Yes, she did.",
    "No, they aren't.",
    "Yes, I have.",
    "No, he doesn't.",
    "Она тебе звонила?",
    "Вона тобі телефонувала?",
    "Czy ona do ciebie dzwoniła?"
  ],
  [
    "Did we win the game?",
    "No, we didn't.",
    "Yes, she has.",
    "No, he isn't.",
    "Yes, they do.",
    "Мы выиграли игру?",
    "Ми виграли гру?",
    "Czy wygraliśmy mecz?"
  ],
  [
    "Did your train leave?",
    "Yes, it did.",
    "No, they don't.",
    "Yes, I am.",
    "No, she hasn't.",
    "Твой поезд отправился?",
    "Твій потяг вирушив?",
    "Czy twój pociąg odjechał?"
  ],
  [
    "Have you got a car?",
    "Yes, I have.",
    "No, she does not.",
    "Yes, they are.",
    "No, he didn't.",
    "У тебя есть машина?",
    "У тебе є машина?",
    "Czy masz samochód?"
  ],
  [
    "Have they got children?",
    "No, they haven't.",
    "Yes, she does.",
    "No, I am not.",
    "Yes, he did.",
    "У них есть дети?",
    "У них є діти?",
    "Czy mają dzieci?"
  ],
  [
    "Have we got enough money?",
    "Yes, we have.",
    "No, she isn't.",
    "Yes, he does.",
    "No, they didn't.",
    "У нас достаточно денег?",
    "У нас достатньо грошей?",
    "Czy mamy wystarczająco pieniędzy?"
  ],
  [
    "Has she got a bike?",
    "Yes, she has.",
    "No, we don't.",
    "Yes, I am.",
    "No, they didn't.",
    "У нее есть велосипед?",
    "У неї є велосипед?",
    "Czy ona ma rower?"
  ],
  [
    "Has he got a passport?",
    "No, he hasn't.",
    "Yes, they do.",
    "No, I am not.",
    "Yes, she did.",
    "У него есть паспорт?",
    "У нього є паспорт?",
    "Czy on ma paszport?"
  ],
   [
    "Can you swim?",
    "Yes, I can.",
    "No, they won't.",
    "Yes, she has.",
    "No, he didn't.",
    "Ты умеешь плавать?",
    "Ти вмієш плавати?",
    "Czy umiesz pływać?"
  ],
  [
    "Can she drive?",
    "No, she can't.",
    "Yes, we do.",
    "No, they haven't.",
    "Yes, he will.",
    "Она умеет водить машину?",
    "Вона вміє водити машину?",
    "Czy ona umie prowadzić samochód?"
  ],
  [
    "Can they help us?",
    "Yes, they can.",
    "No, I don't.",
    "Yes, she is.",
    "No, he won't.",
    "Они могут нам помочь?",
    "Вони можуть нам допомогти?",
    "Czy oni mogą nam pomóc?"
  ],
  [
    "Can your brother cook?",
    "No, he can't.",
    "Yes, we have.",
    "No, she isn't.",
    "Yes, they did.",
    "Твой брат умеет готовить?",
    "Твій брат уміє готувати?",
    "Czy twój brat umie gotować?"
  ],
  [
    "Can we start now?",
    "Yes, we can.",
    "No, he doesn't.",
    "Yes, she has.",
    "No, they won't.",
    "Мы можем начать сейчас?",
    "Ми можемо почати зараз?",
    "Czy możemy zacząć teraz?"
  ],

  [
    "Will you be here tomorrow?",
    "Yes, I will.",
    "No, she can't.",
    "Yes, they have.",
    "No, he didn't.",
    "Ты будешь здесь завтра?",
    "Ти будеш тут завтра?",
    "Czy będziesz tutaj jutro?"
  ],
  [
    "Will they come tonight?",
    "No, they won't.",
    "Yes, I do.",
    "No, she hasn't.",
    "Yes, he can.",
    "Они придут сегодня вечером?",
    "Вони прийдуть сьогодні ввечері?",
    "Czy oni przyjdą dziś wieczorem?"
  ],
  [
    "Will she call you?",
    "Yes, she will.",
    "No, they don't.",
    "Yes, I am.",
    "No, he couldn't.",
    "Она тебе позвонит?",
    "Вона тобі зателефонує?",
    "Czy ona do ciebie zadzwoni?"
  ],
  [
    "Will it rain tomorrow?",
    "No, it won't.",
    "Yes, we have.",
    "No, she isn't.",
    "Yes, they can.",
    "Завтра будет дождь?",
    "Чи буде завтра дощ?",
    "Czy jutro będzie padać?"
  ],
  [
    "Will we finish today?",
    "Yes, we will.",
    "No, he doesn't.",
    "Yes, she has.",
    "No, they can't.",
    "Мы закончим сегодня?",
    "Ми закінчимо сьогодні?",
    "Czy skończymy dzisiaj?"
  ],

  [
    "Could you help me?",
    "Yes, I could.",
    "No, she won't.",
    "Yes, they have.",
    "No, he doesn't.",
    "Ты мог бы помочь мне?",
    "Ти міг би допомогти мені?",
    "Czy mógłbyś mi pomóc?"
  ],
  [
    "Could she hear you?",
    "No, she couldn't.",
    "Yes, we do.",
    "No, they haven't.",
    "Yes, he will.",
    "Она могла тебя слышать?",
    "Вона могла тебе чути?",
    "Czy ona mogła cię słyszeć?"
  ],
  [
    "Could they see us?",
    "Yes, they could.",
    "No, I don't.",
    "Yes, she has.",
    "No, he won't.",
    "Они могли нас видеть?",
    "Вони могли нас бачити?",
    "Czy oni mogli nas zobaczyć?"
  ],
  [
    "Could he find it?",
    "No, he couldn't.",
    "Yes, we are.",
    "No, she doesn't.",
    "Yes, they will.",
    "Он мог это найти?",
    "Він міг це знайти?",
    "Czy on mógł to znaleźć?"
  ],
  [
    "Could we leave earlier?",
    "Yes, we could.",
    "No, he hasn't.",
    "Yes, she can.",
    "No, they won't.",
    "Мы могли уйти раньше?",
    "Ми могли піти раніше?",
    "Czy mogliśmy wyjść wcześniej?"
  ],

  [
    "Must I do it now?",
    "Yes, you must.",
    "No, she can't.",
    "Yes, they do.",
    "No, he won't.",
    "Я должен сделать это сейчас?",
    "Я повинен зробити це зараз?",
    "Czy muszę zrobić to teraz?"
  ],
  [
    "Must we wait here?",
    "No, you mustn't.",
    "Yes, she has.",
    "No, they don't.",
    "Yes, he could.",
    "Мы должны ждать здесь?",
    "Ми повинні чекати тут?",
    "Czy musimy tutaj czekać?"
  ],
  [
    "Must she leave now?",
    "Yes, she must.",
    "No, we can't.",
    "Yes, they have.",
    "No, he didn't.",
    "Она должна уйти сейчас?",
    "Вона повинна піти зараз?",
    "Czy ona musi teraz wyjść?"
  ],
  [
    "Must they pay today?",
    "No, they mustn't.",
    "Yes, I do.",
    "No, she isn't.",
    "Yes, he will.",
    "Они должны заплатить сегодня?",
    "Вони повинні заплатити сьогодні?",
    "Czy oni muszą zapłacić dzisiaj?"
  ],
  [
    "Must he wear a helmet?",
    "Yes, he must.",
    "No, they haven't.",
    "Yes, we can.",
    "No, she didn't.",
    "Он должен носить шлем?",
    "Він повинен носити шолом?",
    "Czy on musi nosić kask?"
  ],

  [
    "Might she be late?",
    "Yes, she might.",
    "No, they don't.",
    "Yes, I have.",
    "No, he can't.",
    "Она может опоздать?",
    "Вона може запізнитися?",
    "Czy ona może się spóźnić?"
  ],
  [
    "Might it snow tonight?",
    "No, it might not.",
    "Yes, we do.",
    "No, she hasn't.",
    "Yes, he will.",
    "Сегодня ночью может пойти снег?",
    "Чи може сьогодні вночі піти сніг?",
    "Czy dziś w nocy może spaść śnieg?"
  ],
  [
    "Might they join us?",
    "Yes, they might.",
    "No, he doesn't.",
    "Yes, she has.",
    "No, we can't.",
    "Они могут присоединиться к нам?",
    "Вони можуть приєднатися до нас?",
    "Czy oni mogą do nas dołączyć?"
  ],
  [
    "Might we see him later?",
    "No, we might not.",
    "Yes, she is.",
    "No, they haven't.",
    "Yes, he could.",
    "Мы можем увидеть его позже?",
    "Ми можемо побачити його пізніше?",
    "Czy możemy zobaczyć go później?"
  ],
  [
    "Might he know the answer?",
    "Yes, he might.",
    "No, she doesn't.",
    "Yes, we have.",
    "No, they won't.",
    "Он может знать ответ?",
    "Він може знати відповідь?",
    "Czy on może znać odpowiedź?"
  ],
    [
    "Yes, she does.",
    "Does she work in a bank?",
    "Can she work in a bank?",
    "Will she work in a bank?",
    "Did she work in a bank?",
    "Да, она работает в банке.",
    "Так, вона працює в банку.",
    "Tak, ona pracuje w banku."
  ],

  [
    "No, she doesn't.",
    "Does she work in a bank?",
    "Can she work in a bank?",
    "Will she work in a bank?",
    "Did she work in a bank?",
    "Нет, она не работает в банке.",
    "Ні, вона не працює в банку.",
    "Nie, ona nie pracuje w banku."
  ],

  [
    "Yes, they do.",
    "Do they play football on Sundays?",
    "Can they play football on Sundays?",
    "Will they play football on Sundays?",
    "Did they play football on Sundays?",
    "Да, они играют в футбол по воскресеньям.",
    "Так, вони грають у футбол по неділях.",
    "Tak, oni grają w piłkę nożną w niedziele."
  ],

  [
    "No, they don't.",
    "Do they play football on Sundays?",
    "Can they play football on Sundays?",
    "Will they play football on Sundays?",
    "Did they play football on Sundays?",
    "Нет, они не играют в футбол по воскресеньям.",
    "Ні, вони не грають у футбол по неділях.",
    "Nie, oni nie grają w piłkę nożną w niedziele."
  ],

  [
    "Yes, he is.",
    "Is he at home?",
    "Can he be at home?",
    "Will he be at home?",
    "Might he be at home?",
    "Да, он дома.",
    "Так, він вдома.",
    "Tak, on jest w domu."
  ],

  [
    "No, he isn't.",
    "Is he at home?",
    "Can he be at home?",
    "Will he be at home?",
    "Might he be at home?",
    "Нет, его нет дома.",
    "Ні, його немає вдома.",
    "Nie, nie ma go w domu."
  ],

  [
    "Yes, they can.",
    "Can they swim?",
    "Do they swim?",
    "Will they swim?",
    "Did they swim?",
    "Да, они умеют плавать.",
    "Так, вони вміють плавати.",
    "Tak, oni umieją pływać."
  ],

  [
    "No, they can't.",
    "Can they swim?",
    "Do they swim?",
    "Will they swim?",
    "Did they swim?",
    "Нет, они не умеют плавать.",
    "Ні, вони не вміють плавати.",
    "Nie, oni nie umieją pływać."
  ],

  [
    "Yes, she will.",
    "Will she call you tomorrow?",
    "Can she call you tomorrow?",
    "Does she call you tomorrow?",
    "Did she call you tomorrow?",
    "Да, она позвонит тебе завтра.",
    "Так, вона подзвонить тобі завтра.",
    "Tak, zadzwoni do ciebie jutro."
  ],

  [
    "No, she won't.",
    "Will she call you tomorrow?",
    "Can she call you tomorrow?",
    "Does she call you tomorrow?",
    "Did she call you tomorrow?",
    "Нет, она не позвонит тебе завтра.",
    "Ні, вона не подзвонить тобі завтра.",
    "Nie, nie zadzwoni do ciebie jutro."
  ],
    [
    "Yes, he does.",
    "Does he work here?",
    "Can he work here?",
    "Will he work here?",
    "Did he work here?",
    "Да, он работает здесь.",
    "Так, він працює тут.",
    "Tak, on pracuje tutaj."
  ],

  [
    "No, he doesn't.",
    "Does he work here?",
    "Can he work here?",
    "Will he work here?",
    "Did he work here?",
    "Нет, он не работает здесь.",
    "Ні, він не працює тут.",
    "Nie, on tutaj nie pracuje."
  ],

  [
    "Yes, she does.",
    "Does she study English every day?",
    "Can she study English every day?",
    "Will she study English every day?",
    "Did she study English every day?",
    "Да, она изучает английский каждый день.",
    "Так, вона вивчає англійську щодня.",
    "Tak, ona uczy się angielskiego codziennie."
  ],

  [
    "No, she doesn't.",
    "Does she study English every day?",
    "Can she study English every day?",
    "Will she study English every day?",
    "Did she study English every day?",
    "Нет, она не изучает английский каждый день.",
    "Ні, вона не вивчає англійську щодня.",
    "Nie, ona nie uczy się angielskiego codziennie."
  ],

  [
    "Yes, they do.",
    "Do they live in Poland?",
    "Can they live in Poland?",
    "Will they live in Poland?",
    "Did they live in Poland?",
    "Да, они живут в Польше.",
    "Так, вони живуть у Польщі.",
    "Tak, oni mieszkają w Polsce."
  ],

  [
    "No, they don't.",
    "Do they live in Poland?",
    "Can they live in Poland?",
    "Will they live in Poland?",
    "Did they live in Poland?",
    "Нет, они не живут в Польше.",
    "Ні, вони не живуть у Польщі.",
    "Nie, oni nie mieszkają w Polsce."
  ],

  [
    "Yes, we do.",
    "Do we need more time?",
    "Can we need more time?",
    "Will we need more time?",
    "Did we need more time?",
    "Да, нам нужно больше времени.",
    "Так, нам потрібно більше часу.",
    "Tak, potrzebujemy więcej czasu."
  ],

  [
    "No, we don't.",
    "Do we need more time?",
    "Can we need more time?",
    "Will we need more time?",
    "Did we need more time?",
    "Нет, нам не нужно больше времени.",
    "Ні, нам не потрібно більше часу.",
    "Nie, nie potrzebujemy więcej czasu."
  ],

  [
    "Yes, he did.",
    "Did he call you yesterday?",
    "Does he call you yesterday?",
    "Will he call you yesterday?",
    "Can he call you yesterday?",
    "Да, он звонил тебе вчера.",
    "Так, він дзвонив тобі вчора.",
    "Tak, zadzwonił do ciebie wczoraj."
  ],

  [
    "No, he didn't.",
    "Did he call you yesterday?",
    "Does he call you yesterday?",
    "Will he call you yesterday?",
    "Can he call you yesterday?",
    "Нет, он не звонил тебе вчера.",
    "Ні, він не дзвонив тобі вчора.",
    "Nie, nie zadzwonił do ciebie wczoraj."
  ],

  [
    "Yes, they did.",
    "Did they arrive on time?",
    "Do they arrive on time?",
    "Will they arrive on time?",
    "Can they arrive on time?",
    "Да, они приехали вовремя.",
    "Так, вони прибули вчасно.",
    "Tak, przybyli na czas."
  ],

  [
    "No, they didn't.",
    "Did they arrive on time?",
    "Do they arrive on time?",
    "Will they arrive on time?",
    "Can they arrive on time?",
    "Нет, они не приехали вовремя.",
    "Ні, вони не прибули вчасно.",
    "Nie, nie przybyli na czas."
  ],

  [
    "Yes, she has.",
    "Has she got a bike?",
    "Can she get a bike?",
    "Will she get a bike?",
    "Did she get a bike?",
    "Да, у неё есть велосипед.",
    "Так, у неї є велосипед.",
    "Tak, ma rower."
  ],

  [
    "No, she hasn't.",
    "Has she got a bike?",
    "Can she get a bike?",
    "Will she get a bike?",
    "Did she get a bike?",
    "Нет, у неё нет велосипеда.",
    "Ні, у неї немає велосипеда.",
    "Nie, nie ma roweru."
  ],

  [
    "Yes, he has.",
    "Has he got a passport?",
    "Can he get a passport?",
    "Will he get a passport?",
    "Did he get a passport?",
    "Да, у него есть паспорт.",
    "Так, у нього є паспорт.",
    "Tak, ma paszport."
  ],

  [
    "No, he hasn't.",
    "Has he got a passport?",
    "Can he get a passport?",
    "Will he get a passport?",
    "Did he get a passport?",
    "Нет, у него нет паспорта.",
    "Ні, у нього немає паспорта.",
    "Nie, nie ma paszportu."
  ],

  [
    "Yes, they have.",
    "Have they got children?",
    "Can they get children?",
    "Will they get children?",
    "Did they get children?",
    "Да, у них есть дети.",
    "Так, у них є діти.",
    "Tak, mają dzieci."
  ],

  [
    "No, they haven't.",
    "Have they got children?",
    "Can they get children?",
    "Will they get children?",
    "Did they get children?",
    "Нет, у них нет детей.",
    "Ні, у них немає дітей.",
    "Nie, nie mają dzieci."
  ],

  [
    "Yes, we are.",
    "Are we ready?",
    "Can we be ready?",
    "Will we be ready?",
    "Might we be ready?",
    "Да, мы готовы.",
    "Так, ми готові.",
    "Tak, jesteśmy gotowi."
  ],

  [
    "No, we aren't.",
    "Are we ready?",
    "Can we be ready?",
    "Will we be ready?",
    "Might we be ready?",
    "Нет, мы не готовы.",
    "Ні, ми не готові.",
    "Nie, nie jesteśmy gotowi."
  ],

  [
    "Yes, she is.",
    "Is she busy today?",
    "Can she be busy today?",
    "Will she be busy today?",
    "Might she be busy today?",
    "Да, она сегодня занята.",
    "Так, вона сьогодні зайнята.",
    "Tak, ona jest dziś zajęta."
  ],

  [
    "No, she isn't.",
    "Is she busy today?",
    "Can she be busy today?",
    "Will she be busy today?",
    "Might she be busy today?",
    "Нет, она сегодня не занята.",
    "Ні, вона сьогодні не зайнята.",
    "Nie, ona nie jest dziś zajęta."
  ],

  [
    "Yes, they were.",
    "Were they at home yesterday?",
    "Are they at home yesterday?",
    "Will they be at home yesterday?",
    "Can they be at home yesterday?",
    "Да, вчера они были дома.",
    "Так, учора вони були вдома.",
    "Tak, wczoraj byli w domu."
  ],

  [
    "No, they weren't.",
    "Were they at home yesterday?",
    "Are they at home yesterday?",
    "Will they be at home yesterday?",
    "Can they be at home yesterday?",
    "Нет, вчера их не было дома.",
    "Ні, учора їх не було вдома.",
    "Nie, wczoraj nie było ich w domu."
  ],

  [
    "Yes, he can.",
    "Can he drive a car?",
    "Does he drive a car?",
    "Will he drive a car?",
    "Did he drive a car?",
    "Да, он умеет водить машину.",
    "Так, він уміє водити машину.",
    "Tak, umie prowadzić samochód."
  ],

  [
    "No, he can't.",
    "Can he drive a car?",
    "Does he drive a car?",
    "Will he drive a car?",
    "Did he drive a car?",
    "Нет, он не умеет водить машину.",
    "Ні, він не вміє водити машину.",
    "Nie, nie umie prowadzić samochodu."
  ],

  [
    "Yes, she can.",
    "Can she speak English?",
    "Does she speak English?",
    "Will she speak English?",
    "Did she speak English?",
    "Да, она умеет говорить по-английски.",
    "Так, вона вміє говорити англійською.",
    "Tak, umie mówić po angielsku."
  ],

  [
    "No, she can't.",
    "Can she speak English?",
    "Does she speak English?",
    "Will she speak English?",
    "Did she speak English?",
    "Нет, она не умеет говорить по-английски.",
    "Ні, вона не вміє говорити англійською.",
    "Nie, nie umie mówić po angielsku."
  ],

  [
    "Yes, we can.",
    "Can we start now?",
    "Do we start now?",
    "Will we start now?",
    "Did we start now?",
    "Да, мы можем начать сейчас.",
    "Так, ми можемо почати зараз.",
    "Tak, możemy zacząć teraz."
  ],

  [
    "No, we can't.",
    "Can we start now?",
    "Do we start now?",
    "Will we start now?",
    "Did we start now?",
    "Нет, мы не можем начать сейчас.",
    "Ні, ми не можемо почати зараз.",
    "Nie, nie możemy zacząć teraz."
  ],

  [
    "Yes, they will.",
    "Will they come tomorrow?",
    "Can they come tomorrow?",
    "Do they come tomorrow?",
    "Did they come tomorrow?",
    "Да, они придут завтра.",
    "Так, вони прийдуть завтра.",
    "Tak, przyjdą jutro."
  ],

  [
    "No, they won't.",
    "Will they come tomorrow?",
    "Can they come tomorrow?",
    "Do they come tomorrow?",
    "Did they come tomorrow?",
    "Нет, они не придут завтра.",
    "Ні, вони не прийдуть завтра.",
    "Nie, nie przyjdą jutro."
  ],

  [
    "Yes, he will.",
    "Will he help us tomorrow?",
    "Can he help us tomorrow?",
    "Does he help us tomorrow?",
    "Did he help us tomorrow?",
    "Да, он поможет нам завтра.",
    "Так, він допоможе нам завтра.",
    "Tak, pomoże nam jutro."
  ],

  [
    "No, he won't.",
    "Will he help us tomorrow?",
    "Can he help us tomorrow?",
    "Does he help us tomorrow?",
    "Did he help us tomorrow?",
    "Нет, он не поможет нам завтра.",
    "Ні, він не допоможе нам завтра.",
    "Nie, nie pomoże nam jutro."
  ],

  [
    "Yes, she will.",
    "Will she be here tomorrow?",
    "Can she be here tomorrow?",
    "Is she here tomorrow?",
    "Might she be here tomorrow?",
    "Да, она будет здесь завтра.",
    "Так, вона буде тут завтра.",
    "Tak, będzie tutaj jutro."
  ],

  [
    "No, she won't.",
    "Will she be here tomorrow?",
    "Can she be here tomorrow?",
    "Is she here tomorrow?",
    "Might she be here tomorrow?",
    "Нет, её здесь завтра не будет.",
    "Ні, її тут завтра не буде.",
    "Nie będzie jej tutaj jutro."
  ],

  [
    "Yes, you must.",
    "Must I do it now?",
    "Can I do it now?",
    "Will I do it now?",
    "Did I do it now?",
    "Да, ты должен сделать это сейчас.",
    "Так, ти повинен зробити це зараз.",
    "Tak, musisz to zrobić teraz."
  ],

  [
    "No, you mustn't.",
    "Must I do it now?",
    "Can I do it now?",
    "Will I do it now?",
    "Did I do it now?",
    "Нет, тебе нельзя делать это сейчас.",
    "Ні, тобі не можна робити це зараз.",
    "Nie, nie wolno ci tego teraz zrobić."
  ],

  [
    "Yes, we must.",
    "Must we wait here?",
    "Can we wait here?",
    "Will we wait here?",
    "Did we wait here?",
    "Да, мы должны ждать здесь.",
    "Так, ми повинні чекати тут.",
    "Tak, musimy tutaj czekać."
  ],

  [
    "No, we mustn't.",
    "Must we wait here?",
    "Can we wait here?",
    "Will we wait here?",
    "Did we wait here?",
    "Нет, нам нельзя здесь ждать.",
    "Ні, нам не можна тут чекати.",
    "Nie, nie wolno nam tutaj czekać."
  ],

  [
    "Yes, she might.",
    "Might she be late?",
    "Is she late?",
    "Will she be late?",
    "Can she be late?",
    "Да, она может опоздать.",
    "Так, вона може запізнитися.",
    "Tak, może się spóźnić."
  ],

  [
    "No, she might not.",
    "Might she be late?",
    "Is she late?",
    "Will she be late?",
    "Can she be late?",
    "Нет, она может и не опоздать.",
    "Ні, вона може й не запізнитися.",
    "Nie, może się nie spóźnić."
  ],
    [
    "Tom works in a bank. He leaves home at seven every morning. He likes his job.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "Yes, he has.",
    "Том работает в банке. Он выходит из дома каждое утро в семь. Ему нравится его работа.",
    "Том працює в банку. Він виходить з дому щодня о сьомій ранку. Йому подобається його робота.",
    "Tom pracuje w banku. Codziennie wychodzi z domu o siódmej rano. Lubi swoją pracę."
  ],
  [
    "Anna is at home. Her shoes are near the door. She is watching a film.",
    "Yes, she is.",
    "Yes, she does.",
    "Yes, she can.",
    "Yes, she has.",
    "Анна дома. Её обувь стоит возле двери. Она смотрит фильм.",
    "Анна вдома. Її взуття стоїть біля дверей. Вона дивиться фільм.",
    "Anna jest w domu. Jej buty stoją przy drzwiach. Ogląda film."
  ],
  [
    "Mike can swim very well. He goes to the swimming pool every week. He often wins races.",
    "Yes, he can.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he has.",
    "Майк очень хорошо плавает. Он ходит в бассейн каждую неделю. Он часто выигрывает соревнования.",
    "Майк дуже добре плаває. Він ходить до басейну щотижня. Він часто виграє змагання.",
    "Mike bardzo dobrze pływa. Chodzi na basen co tydzień. Często wygrywa zawody."
  ],
  [
    "Sarah has got a new bike. She rides it every weekend. It is red.",
    "Yes, she has.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she can.",
    "У Сары есть новый велосипед. Она катается на нём каждые выходные. Он красный.",
    "У Сари є новий велосипед. Вона катається на ньому кожних вихідних. Він червоний.",
    "Sarah ma nowy rower. Jeździ na nim w każdy weekend. Jest czerwony."
  ],
  [
    "John will come tomorrow. He has already bought a ticket. We will meet him at the station.",
    "Yes, he will.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "Джон приедет завтра. Он уже купил билет. Мы встретим его на вокзале.",
    "Джон приїде завтра. Він уже купив квиток. Ми зустрінемо його на вокзалі.",
    "John przyjedzie jutro. Kupił już bilet. Spotkamy go na dworcu."
  ],
  [
    "The students were in class yesterday. The teacher saw them there. They studied mathematics.",
    "Yes, they were.",
    "Yes, they are.",
    "Yes, they do.",
    "Yes, they can.",
    "Студенты были вчера на занятиях. Учитель видел их там. Они изучали математику.",
    "Студенти були вчора на заняттях. Учитель бачив їх там. Вони вивчали математику.",
    "Studenci byli wczoraj na zajęciach. Nauczyciel ich tam widział. Uczyli się matematyki."
  ],
  [
    "Kate studies English every day. She reads English books. She watches English videos.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she can.",
    "Yes, she has.",
    "Кейт изучает английский каждый день. Она читает книги на английском. Она смотрит видео на английском.",
    "Кейт вивчає англійську щодня. Вона читає книги англійською. Вона дивиться відео англійською.",
    "Kate uczy się angielskiego codziennie. Czyta książki po angielsku. Ogląda filmy po angielsku."
  ],
  [
    "We must wait here. The manager will arrive soon. He asked us not to leave.",
    "Yes, we must.",
    "Yes, we do.",
    "Yes, we are.",
    "Yes, we can.",
    "Мы должны ждать здесь. Менеджер скоро придёт. Он попросил нас не уходить.",
    "Ми повинні чекати тут. Менеджер скоро прийде. Він попросив нас не йти.",
    "Musimy tu poczekać. Menedżer wkrótce przyjdzie. Poprosił nas, żebyśmy nie odchodzili."
  ],
  [
    "Jenny might be late today. There is a lot of traffic. She sent a message about it.",
    "Yes, she might.",
    "Yes, she is.",
    "Yes, she does.",
    "Yes, she can.",
    "Дженни может сегодня опоздать. На дорогах много транспорта. Она написала об этом сообщение.",
    "Дженні може сьогодні запізнитися. На дорогах багато транспорту. Вона написала про це повідомлення.",
    "Jenny może się dziś spóźnić. Na drogach jest duży ruch. Napisała o tym wiadomość."
  ],
  [
    "Paul called me yesterday. We talked for an hour. He sounded happy.",
    "Yes, he did.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he will.",
    "Пол звонил мне вчера. Мы разговаривали целый час. Он был в хорошем настроении.",
    "Пол дзвонив мені вчора. Ми розмовляли цілу годину. Він був у гарному настрої.",
    "Paul zadzwonił do mnie wczoraj. Rozmawialiśmy przez godzinę. Był w dobrym humorze."
  ],
  [
    "Lisa drives to work every day. She never uses public transport. Her office is far away.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she can.",
    "Yes, she has.",
    "Лиза ездит на работу каждый день. Она не пользуется общественным транспортом. Её офис далеко.",
    "Ліза їздить на роботу щодня. Вона не користується громадським транспортом. Її офіс далеко.",
    "Lisa codziennie jeździ do pracy. Nie korzysta z transportu publicznego. Jej biuro jest daleko."
  ],
  [
    "Mark is very busy today. He has three meetings. He cannot leave the office.",
    "Yes, he is.",
    "Yes, he does.",
    "Yes, he can.",
    "Yes, he has.",
    "Марк сегодня очень занят. У него три встречи. Он не может покинуть офис.",
    "Марк сьогодні дуже зайнятий. У нього три зустрічі. Він не може залишити офіс.",
    "Mark jest dziś bardzo zajęty. Ma trzy spotkania. Nie może opuścić biura."
  ],
  [
    "Emma can cook very well. Her friends love her food. She often prepares dinner.",
    "Yes, she can.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she has.",
    "Эмма очень хорошо готовит. Друзья любят её еду. Она часто готовит ужин.",
    "Емма дуже добре готує. Друзі люблять її їжу. Вона часто готує вечерю.",
    "Emma bardzo dobrze gotuje. Jej przyjaciele lubią jej jedzenie. Często przygotowuje kolację."
  ],
  [
    "David has got a dog. He walks it every morning. The dog is very friendly.",
    "Yes, he has.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "У Дэвида есть собака. Он гуляет с ней каждое утро. Собака очень дружелюбная.",
    "У Девіда є собака. Він гуляє з нею щоранку. Собака дуже дружня.",
    "David ma psa. Spaceruje z nim każdego ranka. Pies jest bardzo przyjazny."
  ],
  [
    "Robert will start a new job next month. He has already signed the contract. He is excited.",
    "Yes, he will.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "Роберт начнёт новую работу в следующем месяце. Он уже подписал контракт. Он взволнован.",
    "Роберт почне нову роботу наступного місяця. Він уже підписав контракт. Він схвильований.",
    "Robert rozpocznie nową pracę w przyszłym miesiącu. Podpisał już umowę. Jest podekscytowany."
  ],

  // карточки 16-25

  [
    "The children were in the park yesterday. They played football. They came home late.",
    "Yes, they were.",
    "Yes, they are.",
    "Yes, they do.",
    "Yes, they can.",
    "Дети были вчера в парке. Они играли в футбол. Домой пришли поздно.",
    "Діти були вчора в парку. Вони грали у футбол. Додому прийшли пізно.",
    "Dzieci były wczoraj w parku. Grały w piłkę nożną. Wróciły późno do domu."
  ],
  [
    "Olivia studies at a university. She attends classes every week. She enjoys learning.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she can.",
    "Yes, she has.",
    "Оливия учится в университете. Она посещает занятия каждую неделю. Ей нравится учиться.",
    "Олівія навчається в університеті. Вона відвідує заняття щотижня. Їй подобається вчитися.",
    "Olivia studiuje na uniwersytecie. Uczestniczy w zajęciach co tydzień. Lubi się uczyć."
  ],
  [
    "Jack is in the office. His computer is on. He is working on a report.",
    "Yes, he is.",
    "Yes, he does.",
    "Yes, he can.",
    "Yes, he has.",
    "Джек в офисе. Его компьютер включён. Он работает над отчётом.",
    "Джек в офісі. Його комп'ютер увімкнений. Він працює над звітом.",
    "Jack jest w biurze. Jego komputer jest włączony. Pracuje nad raportem."
  ],
  [
    "Bella can play the piano. She practises every day. She loves music.",
    "Yes, she can.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she has.",
    "Белла умеет играть на пианино. Она занимается каждый день. Она любит музыку.",
    "Белла вміє грати на піаніно. Вона займається щодня. Вона любить музику.",
    "Bella potrafi grać na pianinie. Ćwiczy codziennie. Kocha muzykę."
  ],
  [
    "Chris has got a laptop. He uses it for work. It is very fast.",
    "Yes, he has.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "У Криса есть ноутбук. Он использует его для работы. Он очень быстрый.",
    "У Кріса є ноутбук. Він використовує його для роботи. Він дуже швидкий.",
    "Chris ma laptopa. Używa go do pracy. Jest bardzo szybki."
  ],
  [
    "They will travel to Spain next summer. They have already booked a hotel. They are excited.",
    "Yes, they will.",
    "Yes, they do.",
    "Yes, they are.",
    "Yes, they can.",
    "Они поедут в Испанию следующим летом. Они уже забронировали отель. Они рады.",
    "Вони поїдуть до Іспанії наступного літа. Вони вже забронювали готель. Вони раді.",
    "Pojadą do Hiszpanii przyszłego lata. Zarezerwowali już hotel. Są podekscytowani."
  ],
  [
    "We called our friends yesterday. We talked about holidays. The conversation was long.",
    "Yes, we did.",
    "Yes, we do.",
    "Yes, we are.",
    "Yes, we will.",
    "Мы звонили друзьям вчера. Мы говорили об отпуске. Разговор был долгим.",
    "Ми дзвонили друзям учора. Ми говорили про відпустку. Розмова була довгою.",
    "Dzwoniliśmy do przyjaciół wczoraj. Rozmawialiśmy o wakacjach. Rozmowa była długa."
  ],
  [
    "You must wear a helmet. The road is dangerous. Safety is important.",
    "Yes, you must.",
    "Yes, you do.",
    "Yes, you are.",
    "Yes, you can.",
    "Ты должен носить шлем. Дорога опасная. Безопасность важна.",
    "Ти повинен носити шолом. Дорога небезпечна. Безпека важлива.",
    "Musisz nosić kask. Droga jest niebezpieczna. Bezpieczeństwo jest ważne."
  ],
  [
    "Susan might visit us this weekend. She has not decided yet. We are waiting for her answer.",
    "Yes, she might.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she can.",
    "Сьюзан может навестить нас в эти выходные. Она ещё не решила. Мы ждём её ответ.",
    "Сьюзан може відвідати нас цими вихідними. Вона ще не вирішила. Ми чекаємо на її відповідь.",
    "Susan może odwiedzić nas w ten weekend. Jeszcze nie zdecydowała. Czekamy na jej odpowiedź."
  ],
  
    [
    "Kevin works from home. He uses his computer all day. He rarely goes to the office.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "Yes, he has.",
    "Кевин работает из дома. Он весь день пользуется компьютером. Он редко ездит в офис.",
    "Кевін працює з дому. Він весь день користується комп'ютером. Він рідко їздить до офісу.",
    "Kevin pracuje z domu. Cały dzień korzysta z komputera. Rzadko jeździ do biura."
  ],

  [
    "Laura is in the kitchen. She is making dinner. The food smells great.",
    "Yes, she is.",
    "Yes, she does.",
    "Yes, she can.",
    "Yes, she has.",
    "Лаура на кухне. Она готовит ужин. Еда прекрасно пахнет.",
    "Лаура на кухні. Вона готує вечерю. Їжа чудово пахне.",
    "Laura jest w kuchni. Przygotowuje kolację. Jedzenie pięknie pachnie."
  ],

  [
    "Peter can repair bicycles. His neighbours often ask for help. He enjoys fixing things.",
    "Yes, he can.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he has.",
    "Питер умеет ремонтировать велосипеды. Соседи часто просят его помочь. Ему нравится что-то чинить.",
    "Пітер уміє ремонтувати велосипеди. Сусіди часто просять його про допомогу. Йому подобається щось лагодити.",
    "Peter umie naprawiać rowery. Sąsiedzi często proszą go o pomoc. Lubi naprawiać rzeczy."
  ],

  [
    "Emily has got a cat. The cat sleeps on her bed. She loves animals.",
    "Yes, she has.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she can.",
    "У Эмили есть кот. Кот спит на её кровати. Она любит животных.",
    "У Емілі є кіт. Кіт спить на її ліжку. Вона любить тварин.",
    "Emily ma kota. Kot śpi na jej łóżku. Kocha zwierzęta."
  ],

  [
    "Daniel will visit his parents next weekend. He has already planned the trip. They are happy.",
    "Yes, he will.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "Даниэль навестит родителей в следующие выходные. Он уже спланировал поездку. Они рады.",
    "Даніель відвідає батьків наступних вихідних. Він уже спланував поїздку. Вони раді.",
    "Daniel odwiedzi rodziców w przyszły weekend. Zaplanował już podróż. Są szczęśliwi."
  ],

  [
    "My friends were at the concert last night. They bought tickets months ago. They really enjoyed it.",
    "Yes, they were.",
    "Yes, they are.",
    "Yes, they do.",
    "Yes, they can.",
    "Мои друзья были вчера на концерте. Они купили билеты несколько месяцев назад. Им очень понравилось.",
    "Мої друзі були вчора на концерті. Вони купили квитки кілька місяців тому. Їм дуже сподобалося.",
    "Moi przyjaciele byli wczoraj na koncercie. Kupili bilety kilka miesięcy temu. Bardzo im się podobało."
  ],

  [
    "Rachel reads before bed every night. She has many books at home. Reading helps her relax.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she can.",
    "Yes, she has.",
    "Рэйчел читает перед сном каждый вечер. У неё дома много книг. Чтение помогает ей расслабиться.",
    "Рейчел читає перед сном щовечора. У неї вдома багато книг. Читання допомагає їй розслабитися.",
    "Rachel czyta przed snem każdego wieczoru. Ma w domu wiele książek. Czytanie pomaga jej się zrelaksować."
  ],

  [
    "Adam is very tall. He plays basketball. Most people notice him immediately.",
    "Yes, he is.",
    "Yes, he does.",
    "Yes, he can.",
    "Yes, he has.",
    "Адам очень высокий. Он играет в баскетбол. Большинство людей сразу его замечает.",
    "Адам дуже високий. Він грає в баскетбол. Більшість людей одразу його помічає.",
    "Adam jest bardzo wysoki. Gra w koszykówkę. Większość ludzi od razu go zauważa."
  ],

  [
    "Sophia can speak three languages. She travels a lot. Communication is easy for her.",
    "Yes, she can.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she has.",
    "София умеет говорить на трёх языках. Она много путешествует. Ей легко общаться.",
    "Софія вміє розмовляти трьома мовами. Вона багато подорожує. Їй легко спілкуватися.",
    "Sophia potrafi mówić trzema językami. Dużo podróżuje. Łatwo jej się komunikować."
  ],

  [
    "Nick has got a motorcycle. He rides it in summer. It is very fast.",
    "Yes, he has.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "У Ника есть мотоцикл. Летом он на нём ездит. Он очень быстрый.",
    "У Ніка є мотоцикл. Влітку він на ньому їздить. Він дуже швидкий.",
    "Nick ma motocykl. Jeździ nim latem. Jest bardzo szybki."
  ],

  [
    "The train will arrive in ten minutes. The passengers are waiting. The platform is crowded.",
    "Yes, it will.",
    "Yes, it does.",
    "Yes, it is.",
    "Yes, it can.",
    "Поезд прибудет через десять минут. Пассажиры ждут. Платформа переполнена.",
    "Потяг прибуде через десять хвилин. Пасажири чекають. Платформа переповнена.",
    "Pociąg przyjedzie za dziesięć minut. Pasażerowie czekają. Peron jest zatłoczony."
  ],

  [
    "The children played outside yesterday. The weather was warm. They came back dirty.",
    "Yes, they did.",
    "Yes, they do.",
    "Yes, they are.",
    "Yes, they will.",
    "Дети играли вчера на улице. Погода была тёплой. Они вернулись грязными.",
    "Діти грали вчора надворі. Погода була теплою. Вони повернулися брудними.",
    "Dzieci bawiły się wczoraj na dworze. Pogoda była ciepła. Wróciły brudne."
  ],

  [
    "We must finish this project today. The deadline is tomorrow. Everyone is working hard.",
    "Yes, we must.",
    "Yes, we do.",
    "Yes, we are.",
    "Yes, we can.",
    "Мы должны закончить проект сегодня. Завтра крайний срок. Все усердно работают.",
    "Ми повинні завершити цей проєкт сьогодні. Завтра кінцевий термін. Усі наполегливо працюють.",
    "Musimy skończyć ten projekt dzisiaj. Termin jest jutro. Wszyscy ciężko pracują."
  ],

  [
    "The weather might change later. There are dark clouds in the sky. People are checking forecasts.",
    "Yes, it might.",
    "Yes, it is.",
    "Yes, it does.",
    "Yes, it can.",
    "Погода может измениться позже. В небе тёмные облака. Люди проверяют прогноз.",
    "Погода може змінитися пізніше. У небі темні хмари. Люди перевіряють прогноз.",
    "Pogoda może się później zmienić. Na niebie są ciemne chmury. Ludzie sprawdzają prognozę."
  ],

  [
    "Helen works in a hospital. She helps patients every day. She enjoys her profession.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she can.",
    "Yes, she has.",
    "Хелен работает в больнице. Она помогает пациентам каждый день. Ей нравится её профессия.",
    "Гелен працює в лікарні. Вона допомагає пацієнтам щодня. Їй подобається її професія.",
    "Helen pracuje w szpitalu. Pomaga pacjentom każdego dnia. Lubi swój zawód."
  ],

  [
    "George is in his room. The light is on. He is doing his homework.",
    "Yes, he is.",
    "Yes, he does.",
    "Yes, he can.",
    "Yes, he has.",
    "Джордж в своей комнате. Свет включён. Он делает домашнее задание.",
    "Джордж у своїй кімнаті. Світло увімкнене. Він робить домашнє завдання.",
    "George jest w swoim pokoju. Światło jest włączone. Odrabia pracę domową."
  ],

  [
    "Linda can sing very well. She has music lessons. She performs at school events.",
    "Yes, she can.",
    "Yes, she does.",
    "Yes, she is.",
    "Yes, she has.",
    "Линда очень хорошо поёт. Она занимается музыкой. Она выступает на школьных мероприятиях.",
    "Лінда дуже добре співає. Вона займається музикою. Вона виступає на шкільних заходах.",
    "Linda bardzo dobrze śpiewa. Uczy się muzyki. Występuje na szkolnych wydarzeniach."
  ],

  [
    "Henry has got a large garden. He grows vegetables there. His neighbours are impressed.",
    "Yes, he has.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "У Генри большой сад. Он выращивает там овощи. Соседи впечатлены.",
    "У Генрі великий сад. Він вирощує там овочі. Сусіди вражені.",
    "Henry ma duży ogród. Uprawia tam warzywa. Sąsiedzi są pod wrażeniem."
  ],

  [
    "Our guests will stay for three days. They arrive tonight. We prepared a room for them.",
    "Yes, they will.",
    "Yes, they do.",
    "Yes, they are.",
    "Yes, they can.",
    "Наши гости останутся на три дня. Они приезжают сегодня вечером. Мы подготовили для них комнату.",
    "Наші гості залишаться на три дні. Вони приїжджають сьогодні ввечері. Ми підготували для них кімнату.",
    "Nasi goście zostaną na trzy dni. Przyjeżdżają dziś wieczorem. Przygotowaliśmy dla nich pokój."
  ],

  [
    "I watched that film last week. My friends recommended it. I really liked it.",
    "Yes, I did.",
    "Yes, I do.",
    "Yes, I am.",
    "Yes, I will.",
    "Я смотрел этот фильм на прошлой неделе. Друзья его посоветовали. Мне очень понравилось.",
    "Я дивився цей фільм минулого тижня. Друзі його порадили. Мені дуже сподобалося.",
    "Oglądałem ten film w zeszłym tygodniu. Polecili mi go przyjaciele. Bardzo mi się podobał."
  ],

  [
    "You must show your ticket. The inspector is coming. The rules are strict.",
    "Yes, you must.",
    "Yes, you do.",
    "Yes, you are.",
    "Yes, you can.",
    "Ты должен показать билет. Идёт контролёр. Правила строгие.",
    "Ти повинен показати квиток. Іде контролер. Правила суворі.",
    "Musisz pokazać bilet. Nadchodzi kontroler. Zasady są surowe."
  ],

  [
    "The team might win the match. They trained very hard. Everyone is optimistic.",
    "Yes, they might.",
    "Yes, they do.",
    "Yes, they are.",
    "Yes, they can.",
    "Команда может выиграть матч. Они очень усердно тренировались. Все настроены оптимистично.",
    "Команда може виграти матч. Вони дуже наполегливо тренувалися. Усі налаштовані оптимістично.",
    "Drużyna może wygrać mecz. Trenowali bardzo ciężko. Wszyscy są optymistami."
  ],

  [
    "Ben works with computers. He writes code every day. He enjoys solving problems.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he can.",
    "Yes, he has.",
    "Бен работает с компьютерами. Он пишет код каждый день. Ему нравится решать задачи.",
    "Бен працює з комп'ютерами. Він пише код щодня. Йому подобається розв'язувати задачі.",
    "Ben pracuje z komputerami. Codziennie pisze kod. Lubi rozwiązywać problemy."
  ],

  [
    "The dog is in the garden. It is sleeping under a tree. It looks comfortable.",
    "Yes, it is.",
    "Yes, it does.",
    "Yes, it can.",
    "Yes, it has.",
    "Собака находится в саду. Она спит под деревом. Ей удобно.",
    "Собака знаходиться в саду. Вона спить під деревом. Їй зручно.",
    "Pies jest w ogrodzie. Śpi pod drzewem. Wygląda na zadowolonego."
  ],

  [
    "My brother can fix computers. Friends often ask him for help. He knows a lot about technology.",
    "Yes, he can.",
    "Yes, he does.",
    "Yes, he is.",
    "Yes, he has.",
    "Мой брат умеет ремонтировать компьютеры. Друзья часто просят его помочь. Он хорошо разбирается в технологиях.",
    "Мій брат уміє ремонтувати комп'ютери. Друзі часто просять його про допомогу. Він добре знається на технологіях.",
    "Mój brat umie naprawiać komputery. Przyjaciele często proszą go o pomoc. Zna się na technologii."
  ]

];

// console.log(unit35.length);
// unit35.push(...extending(unit35, "Don't ", "Do not "));
// unit35.push(...extending(unit35, "don't ", "do not "));
// unit35.push(...extending(unit35, "Let's ", "Let us "));
// console.log(unit35.length);

// Если это свойство есть, то оно попадает в заголовок теста
unit40.nameLeson = "I am, I don't etc";

//--созданными предложениями.
unit40.lengthTrue = 5;

// console.log(unit33.length);

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit40.push(...extendForArray(unit40));

unit40.push(...extendForArray2(unit40));

export { unit40 };


