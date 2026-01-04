import { extendForArray } from '../extendForArray.js';
import { extending } from './extend/extending.js';

const unit32 = [
  [
    'You have a bad headache.',
    'You should see a doctor.',
    'You shouldn’t see a doctor.',
    'You should go to a party.',
    'You shouldn’t drink water.',
    'У тебя сильная головная боль.',
    'У тебе сильний головний біль.',
    'Masz silny ból głowy.'
  ],
  [
    'It is raining heavily.',
    'You should take an umbrella.',
    'You shouldn’t take an umbrella.',
    'You should wear sunglasses.',
    'You shouldn’t stay dry.',
    'Идёт сильный дождь.',
    'Йде сильний дощ.',
    'Pada ulewny deszcz.'
  ],
  [
    'You feel very tired.',
    'You should get some rest.',
    'You shouldn’t get any rest.',
    'You should run a marathon.',
    'You shouldn’t sleep tonight.',
    'Ты чувствуешь сильную усталость.',
    'Ти почуваєшся дуже втомленим.',
    'Czujesz się bardzo zmęczony.'
  ],
  [
    'You have an important exam tomorrow.',
    'You should study tonight.',
    'You shouldn’t study at all.',
    'You should watch movies all night.',
    'You shouldn’t prepare for it.',
    'Завтра у тебя важный экзамен.',
    'Завтра в тебе важливий іспит.',
    'Jutro masz ważny egzamin.'
  ],
  [
    'You are feeling sick.',
    'You should stay at home.',
    'You shouldn’t stay at home.',
    'You should go to work.',
    'You shouldn’t take any medicine.',
    'Ты плохо себя чувствуешь.',
    'Ти погано себе почуваєш.',
    'Źle się czujesz.'
  ],
  [
    'The road is very slippery.',
    'You should drive carefully.',
    'You shouldn’t drive carefully.',
    'You should drive very fast.',
    'You shouldn’t pay attention.',
    'Дорога очень скользкая.',
    'Дорога дуже слизька.',
    'Droga jest bardzo śliska.'
  ],
  [
    'You are late for work.',
    'You should hurry up.',
    'You shouldn’t hurry up.',
    'You should stop and relax.',
    'You shouldn’t try to be on time.',
    'Ты опаздываешь на работу.',
    'Ти запізнюєшся на роботу.',
    'Spóźniasz się do pracy.'
  ],
  [
    'Your phone battery is almost empty.',
    'You should charge your phone.',
    'You shouldn’t charge your phone.',
    'You should keep using it.',
    'You shouldn’t save battery.',
    'Батарея телефона почти разряжена.',
    'Батарея телефону майже розряджена.',
    'Bateria telefonu jest prawie rozładowana.'
  ],
  [
    'You feel cold.',
    'You should put on a jacket.',
    'You shouldn’t put on a jacket.',
    'You should wear shorts.',
    'You shouldn’t try to get warm.',
    'Тебе холодно.',
    'Тобі холодно.',
    'Jest ci zimno.'
  ],
  [
    'You have a lot of work to do.',
    'You should focus on your tasks.',
    'You shouldn’t focus on your tasks.',
    'You should waste time.',
    'You shouldn’t finish anything.',
    'У тебя много работы.',
    'У тебе багато роботи.',
    'Masz dużo pracy.'
  ],
  [
    'You don’t understand the question.',
    'You should ask for help.',
    'You shouldn’t ask for help.',
    'You should ignore it.',
    'You shouldn’t try to understand it.',
    'Ты не понимаешь вопрос.',
    'Ти не розумієш питання.',
    'Nie rozumiesz pytania.'
  ],
  [
    'It is very hot outside.',
    'You should drink more water.',
    'You shouldn’t drink water.',
    'You should wear a heavy coat.',
    'You shouldn’t try to cool down.',
    'На улице очень жарко.',
    'На вулиці дуже спекотно.',
    'Na zewnątrz jest bardzo gorąco.'
  ],
  [
    'You have a toothache.',
    'You should visit a dentist.',
    'You shouldn’t visit a dentist.',
    'You should eat sweets.',
    'You shouldn’t care about it.',
    'У тебя болит зуб.',
    'У тебе болить зуб.',
    'Boli cię ząb.'
  ],
  [
    'Your computer is not working properly.',
    'You should restart it.',
    'You shouldn’t restart it.',
    'You should break it.',
    'You shouldn’t try to fix it.',
    'Компьютер работает неправильно.',
    'Комп’ютер працює неправильно.',
    'Komputer nie działa poprawnie.'
  ],
  [
    'You are preparing for a trip.',
    'You should pack your bags.',
    'You shouldn’t pack anything.',
    'You should stay at home.',
    'You shouldn’t prepare at all.',
    'Ты готовишься к поездке.',
    'Ти готуєшся до поїздки.',
    'Przygotowujesz się do podróży.'
  ],
  [
    'You feel stressed.',
    'You should take a break.',
    'You shouldn’t take a break.',
    'You should work all night.',
    'You shouldn’t relax.',
    'Ты чувствуешь стресс.',
    'Ти відчуваєш стрес.',
    'Czujesz stres.'
  ],
  [
    'You are learning a new language.',
    'You should practice every day.',
    'You shouldn’t practice at all.',
    'You should stop studying.',
    'You shouldn’t try to improve.',
    'Ты изучаешь новый язык.',
    'Ти вивчаєш нову мову.',
    'Uczysz się nowego języka.'
  ],
  [
    'You have an early meeting tomorrow.',
    'You should go to bed early.',
    'You shouldn’t go to bed early.',
    'You should stay up all night.',
    'You shouldn’t get enough sleep.',
    'Завтра у тебя ранняя встреча.',
    'Завтра в тебе рання зустріч.',
    'Jutro masz wczesne spotkanie.'
  ],
  [
    'Your room is very messy.',
    'You should clean your room.',
    'You shouldn’t clean your room.',
    'You should make it messier.',
    'You shouldn’t organize anything.',
    'В твоей комнате очень грязно.',
    'У твоїй кімнаті дуже брудно.',
    'Twój pokój jest bardzo brudny.'
  ],
  [
    'You want to stay healthy.',
    'You should eat healthy food.',
    'You shouldn’t eat healthy food.',
    'You should eat only junk food.',
    'You shouldn’t care about your health.',
    'Ты хочешь быть здоровым.',
    'Ти хочеш бути здоровим.',
    'Chcesz być zdrowy.'
  ],

    [
    'You are driving very fast in the city.',
    'You must slow down.',
    'You should speed up.',
    'You must drive even faster.',
    'You shouldn’t pay attention to signs.',
    'Ты едешь слишком быстро по городу.',
    'Ти їдеш надто швидко містом.',
    'Jedziesz bardzo szybko po mieście.'
  ],
  [
    'You feel very sick.',
    'You must see a doctor.',
    'You shouldn’t see a doctor.',
    'You must go to work.',
    'You should ignore the pain.',
    'Тебе очень плохо.',
    'Тобі дуже погано.',
    'Czujesz się bardzo źle.'
  ],
  [
    'The exam starts in five minutes.',
    'You must hurry.',
    'You should relax and wait.',
    'You shouldn’t come on time.',
    'You must take a nap.',
    'Экзамен начинается через пять минут.',
    'Іспит починається через п’ять хвилин.',
    'Egzamin zaczyna się za pięć minut.'
  ],
  [
    'It is forbidden to park here.',
    'You mustn’t park here.',
    'You should park here.',
    'You must leave your car.',
    'You shouldn’t follow the rules.',
    'Здесь запрещено парковаться.',
    'Тут заборонено паркуватися.',
    'Tutaj nie wolno parkować.'
  ],
  [
    'You forgot your passport at home.',
    'You must go back and get it.',
    'You shouldn’t worry about it.',
    'You must travel without documents.',
    'You should ignore the problem.',
    'Ты забыл паспорт дома.',
    'Ти забув паспорт удома.',
    'Zapomniałeś paszportu w domu.'
  ],
  [
    'The baby is sleeping.',
    'You must be quiet.',
    'You should make some noise.',
    'You must turn on loud music.',
    'You shouldn’t care about it.',
    'Ребёнок спит.',
    'Дитина спить.',
    'Dziecko śpi.'
  ],
  [
    'The road is icy.',
    'You must drive carefully.',
    'You should drive very fast.',
    'You must close your eyes.',
    'You shouldn’t slow down.',
    'Дорога покрыта льдом.',
    'Дорога слизька.',
    'Droga jest oblodzona.'
  ],
  [
    'You are in a library.',
    'You must be quiet.',
    'You should talk loudly.',
    'You must shout.',
    'You shouldn’t respect others.',
    'Ты в библиотеке.',
    'Ти в бібліотеці.',
    'Jesteś w bibliotece.'
  ],
  [
    'The fire alarm is ringing.',
    'You must leave the building.',
    'You should stay inside.',
    'You must ignore it.',
    'You shouldn’t react.',
    'Сработала пожарная сигнализация.',
    'Спрацювала пожежна сигналізація.',
    'Włączył się alarm przeciwpożarowy.'
  ],
  [
    'You are taking an important test.',
    'You must turn off your phone.',
    'You should check messages.',
    'You must answer calls.',
    'You shouldn’t follow the rules.',
    'Ты сдаёшь важный тест.',
    'Ти складаєш важливий тест.',
    'Piszesz ważny test.'
  ],
  [
    'You are feeling very cold.',
    'You must put on a coat.',
    'You shouldn’t wear warm clothes.',
    'You must go outside without a jacket.',
    'You should freeze.',
    'Тебе очень холодно.',
    'Тобі дуже холодно.',
    'Jest ci bardzo zimno.'
  ],
  [
    'You broke the company rules.',
    'You must report it.',
    'You shouldn’t tell anyone.',
    'You must hide it.',
    'You should pretend nothing happened.',
    'Ты нарушил правила компании.',
    'Ти порушив правила компанії.',
    'Złamałeś zasady firmy.'
  ],
  [
    'You are driving without a seatbelt.',
    'You must fasten your seatbelt.',
    'You shouldn’t use a seatbelt.',
    'You must keep driving like this.',
    'You should ignore safety.',
    'Ты едешь без ремня безопасности.',
    'Ти їдеш без ременя безпеки.',
    'Jedziesz bez pasów bezpieczeństwa.'
  ],
  [
    'The deadline is today.',
    'You must finish the work.',
    'You should postpone it.',
    'You must forget about it.',
    'You shouldn’t hurry.',
    'Срок сдачи сегодня.',
    'Термін здачі сьогодні.',
    'Termin jest dzisiaj.'
  ],
  [
    'You are feeling very hungry.',
    'You must eat something.',
    'You shouldn’t eat at all.',
    'You must skip meals.',
    'You should stay hungry.',
    'Ты очень голоден.',
    'Ти дуже голодний.',
    'Jesteś bardzo głodny.'
  ],
  [
    'You see a red traffic light.',
    'You must stop.',
    'You should keep driving.',
    'You must speed up.',
    'You shouldn’t obey traffic rules.',
    'Ты видишь красный сигнал светофора.',
    'Ти бачиш червоне світло.',
    'Widzisz czerwone światło.'
  ],
  [
    'Your phone battery is empty.',
    'You must charge your phone.',
    'You shouldn’t charge it.',
    'You must turn it off forever.',
    'You should keep using it.',
    'Батарея телефона разряжена.',
    'Батарея телефону розряджена.',
    'Bateria telefonu jest rozładowana.'
  ],
  [
    'You are very late for work.',
    'You must call your boss.',
    'You shouldn’t inform anyone.',
    'You must ignore the situation.',
    'You should disappear.',
    'Ты сильно опаздываешь на работу.',
    'Ти сильно запізнюєшся на роботу.',
    'Bardzo spóźniasz się do pracy.'
  ],
  [
    'The instructions are very clear.',
    'You must follow them.',
    'You shouldn’t follow them.',
    'You must do the opposite.',
    'You should ignore them.',
    'Инструкции очень понятные.',
    'Інструкції дуже зрозумілі.',
    'Instrukcje są bardzo jasne.'
  ],
  [
    'You are crossing the street.',
    'You must look both ways.',
    'You shouldn’t look around.',
    'You must close your eyes.',
    'You should run blindly.',
    'Ты переходишь улицу.',
    'Ти переходиш вулицю.',
    'Przechodzisz przez ulicę.'
  ],

    [
    'You feel a bit tired.',
    'You should have a rest.',
    'You must have a rest.',
    'You shouldn’t sleep at all.',
    'You should work all night.',
    'Ты чувствуешь себя немного уставшим.',
    'Ти почуваєшся трохи втомленим.',
    'Czujesz się trochę zmęczony.'
  ],
  [
    'You have a headache.',
    'You should take some medicine.',
    'You must take some medicine.',
    'You shouldn’t drink water.',
    'You should ignore the pain.',
    'У тебя болит голова.',
    'У тебе болить голова.',
    'Boli cię głowa.'
  ],
  [
    'It is very cold outside.',
    'You should wear a jacket.',
    'You must wear a jacket.',
    'You shouldn’t wear warm clothes.',
    'You should go out in a T-shirt.',
    'На улице очень холодно.',
    'Надворі дуже холодно.',
    'Na zewnątrz jest bardzo zimno.'
  ],
  [
    'You feel sick.',
    'You should stay at home.',
    'You must stay at home.',
    'You shouldn’t rest.',
    'You should go to work.',
    'Ты плохо себя чувствуешь.',
    'Ти почуваєшся погано.',
    'Źle się czujesz.'
  ],
  [
    'You have an exam tomorrow.',
    'You should study tonight.',
    'You must study tonight.',
    'You shouldn’t prepare at all.',
    'You should watch movies all evening.',
    'У тебя завтра экзамен.',
    'У тебе завтра іспит.',
    'Masz jutro egzamin.'
  ],
  [
    'You are late for work.',
    'You should hurry up.',
    'You must hurry up.',
    'You shouldn’t rush.',
    'You should walk very slowly.',
    'Ты опаздываешь на работу.',
    'Ти запізнюєшся на роботу.',
    'Spóźniasz się do pracy.'
  ],
  [
    'Your phone battery is low.',
    'You should charge your phone.',
    'You must charge your phone.',
    'You shouldn’t use a charger.',
    'You should keep using your phone.',
    'У твоего телефона садится батарея.',
    'У твого телефону сідає батарея.',
    'Bateria w twoim telefonie jest prawie rozładowana.'
  ],
  [
    'You feel very stressed.',
    'You should relax a bit.',
    'You must relax right now.',
    'You shouldn’t rest at all.',
    'You should work even harder.',
    'Ты чувствуешь сильный стресс.',
    'Ти відчуваєш сильний стрес.',
    'Czujesz duży stres.'
  ],
  [
    'It is raining heavily.',
    'You should take an umbrella.',
    'You must take an umbrella.',
    'You shouldn’t protect yourself.',
    'You should go without a jacket.',
    'Идёт сильный дождь.',
    'Йде сильний дощ.',
    'Pada ulewny deszcz.'
  ],
  [
    'You feel hungry.',
    'You should eat something.',
    'You must eat something.',
    'You shouldn’t eat at all.',
    'You should skip meals.',
    'Ты чувствуешь голод.',
    'Ти відчуваєш голод.',
    'Czujesz głód.'
  ],
  [
    'You have a cold.',
    'You should drink warm tea.',
    'You must drink warm tea.',
    'You shouldn’t drink anything.',
    'You should eat ice cream.',
    'Ты простудился.',
    'Ти застудився.',
    'Przeziębiłeś się.'
  ],
  [
    'You feel sleepy.',
    'You should go to bed.',
    'You must go to bed.',
    'You shouldn’t sleep.',
    'You should stay awake all night.',
    'Ты хочешь спать.',
    'Ти хочеш спати.',
    'Chce ci się spać.'
  ],
  [
    'You have a lot of homework.',
    'You should start now.',
    'You must start now.',
    'You shouldn’t do it at all.',
    'You should forget about it.',
    'У тебя много домашнего задания.',
    'У тебе багато домашнього завдання.',
    'Masz dużo pracy domowej.'
  ],
  [
    'You feel nervous before a meeting.',
    'You should take a deep breath.',
    'You must calm down immediately.',
    'You shouldn’t calm down.',
    'You should panic.',
    'Ты нервничаешь перед встречей.',
    'Ти нервуєш перед зустріччю.',
    'Denerwujesz się przed spotkaniem.'
  ],
  [
    'Your eyes are tired.',
    'You should take a break.',
    'You must stop working.',
    'You shouldn’t rest.',
    'You should stare at the screen.',
    'У тебя устали глаза.',
    'У тебе втомилися очі.',
    'Twoje oczy są zmęczone.'
  ],
  [
    'You are bored at home.',
    'You should go for a walk.',
    'You must go for a walk.',
    'You shouldn’t leave the house.',
    'You should stay inside all day.',
    'Тебе скучно дома.',
    'Тобі нудно вдома.',
    'Nudzisz się w domu.'
  ],
  [
    'You feel thirsty.',
    'You should drink some water.',
    'You must drink some water.',
    'You shouldn’t drink anything.',
    'You should ignore thirst.',
    'Ты хочешь пить.',
    'Ти хочеш пити.',
    'Chce ci się pić.'
  ],
  [
    'You have free time.',
    'You should relax.',
    'You must relax.',
    'You shouldn’t rest.',
    'You should stay busy.',
    'У тебя есть свободное время.',
    'У тебе є вільний час.',
    'Masz wolny czas.'
  ],
  [
    'You feel cold.',
    'You should put on a sweater.',
    'You must put on a sweater.',
    'You shouldn’t wear warm clothes.',
    'You should take off your jacket.',
    'Тебе холодно.',
    'Тобі холодно.',
    'Jest ci zimno.'
  ],
  [
    'You are tired after work.',
    'You should relax in the evening.',
    'You must relax in the evening.',
    'You shouldn’t rest.',
    'You should keep working.',
    'Ты устал после работы.',
    'Ти втомився після роботи.',
    'Jesteś zmęczony po pracy.'
  ],

    [
    'You feel very tired.',
    'You should have a rest.',
    'You must have a rest.',
    'I think you shouldn’t work all night.',
    'You should go to the gym now.',
    'Ты чувствуешь себя очень уставшим.',
    'Ти почуваєшся дуже втомленим.',
    'Czujesz się bardzo zmęczony.'
  ],
  [
    'You have a headache.',
    'I think you should take some medicine.',
    'You must take some medicine.',
    'You shouldn’t drink water.',
    'You should ignore the pain.',
    'У тебя болит голова.',
    'У тебе болить голова.',
    'Boli cię głowa.'
  ],
  [
    'It is very cold outside.',
    'You should wear a jacket.',
    'You must wear a jacket.',
    'I think you shouldn’t wear warm clothes.',
    'You should go out in a T-shirt.',
    'На улице очень холодно.',
    'Надворі дуже холодно.',
    'Na zewnątrz jest bardzo zimno.'
  ],
  [
    'You feel sick.',
    'You should stay at home.',
    'I think you must stay at home.',
    'You shouldn’t rest.',
    'You should go to work.',
    'Ты плохо себя чувствуешь.',
    'Ти почуваєшся погано.',
    'Źle się czujesz.'
  ],
  [
    'You have an exam tomorrow.',
    'You should study tonight.',
    'You must study tonight.',
    'You shouldn’t prepare at all.',
    'I think you should watch movies all evening.',
    'У тебя завтра экзамен.',
    'У тебе завтра іспит.',
    'Masz jutro egzamin.'
  ],
  [
    'You are late for work.',
    'I think you should hurry up.',
    'You must hurry up.',
    'You shouldn’t rush.',
    'You should walk very slowly.',
    'Ты опаздываешь на работу.',
    'Ти запізнюєшся на роботу.',
    'Spóźniasz się do pracy.'
  ],
  [
    'Your phone battery is low.',
    'You should charge your phone.',
    'I think you must charge your phone.',
    'You shouldn’t use a charger.',
    'You should keep using your phone.',
    'У твоего телефона садится батарея.',
    'У твого телефону сідає батарея.',
    'Bateria w twoim telefonie jest prawie rozładowana.'
  ],
  [
    'You feel stressed.',
    'You should relax a bit.',
    'You must relax immediately.',
    'I think you shouldn’t rest.',
    'You should work harder.',
    'Ты чувствуешь стресс.',
    'Ти відчуваєш стрес.',
    'Czujesz stres.'
  ],
  [
    'It is raining heavily.',
    'You should take an umbrella.',
    'You must take an umbrella.',
    'You shouldn’t protect yourself.',
    'I think you should go without a jacket.',
    'Идёт сильный дождь.',
    'Йде сильний дощ.',
    'Pada ulewny deszcz.'
  ],
  [
    'You feel hungry.',
    'I think you should eat something.',
    'You must eat something.',
    'You shouldn’t eat at all.',
    'You should skip meals.',
    'Ты чувствуешь голод.',
    'Ти відчуваєш голод.',
    'Czujesz głód.'
  ],
  [
    'You have a cold.',
    'You should drink warm tea.',
    'You must drink warm tea.',
    'I think you shouldn’t drink anything.',
    'You should eat ice cream.',
    'Ты простудился.',
    'Ти застудився.',
    'Przeziębiłeś się.'
  ],
  [
    'You feel sleepy.',
    'You should go to bed.',
    'I think you must go to bed.',
    'You shouldn’t sleep.',
    'You should stay awake all night.',
    'Ты хочешь спать.',
    'Ти хочеш спати.',
    'Chce ci się spać.'
  ],
  [
    'You have free time.',
    'You should relax.',
    'You must relax.',
    'I think you shouldn’t rest.',
    'You should stay busy.',
    'У тебя есть свободное время.',
    'У тебе є вільний час.',
    'Masz wolny czas.'
  ],
  [
    'You feel thirsty.',
    'You should drink some water.',
    'You must drink some water.',
    'You shouldn’t drink anything.',
    'I think you should ignore thirst.',
    'Ты хочешь пить.',
    'Ти хочеш пити.',
    'Chce ci się pić.'
  ],
  [
    'You are bored at home.',
    'I think you should go for a walk.',
    'You must go for a walk.',
    'You shouldn’t leave the house.',
    'You should stay inside all day.',
    'Тебе скучно дома.',
    'Тобі нудно вдома.',
    'Nudzisz się w domu.'
  ],
  [
    'Your eyes are tired.',
    'You should take a break.',
    'You must stop working.',
    'You shouldn’t rest.',
    'I think you should stare at the screen.',
    'У тебя устали глаза.',
    'У тебе втомилися очі.',
    'Twoje oczy są zmęczone.'
  ],
  [
    'You feel cold.',
    'You should put on a sweater.',
    'I think you must put on a sweater.',
    'You shouldn’t wear warm clothes.',
    'You should take off your jacket.',
    'Тебе холодно.',
    'Тобі холодно.',
    'Jest ci zimno.'
  ],
  [
    'You are nervous before a meeting.',
    'You should calm down.',
    'You must calm down.',
    'I think you shouldn’t relax.',
    'You should panic.',
    'Ты нервничаешь перед встречей.',
    'Ти нервуєш перед зустріччю.',
    'Denerwujesz się przed spotkaniem.'
  ],
  [
    'You are tired after work.',
    'You should relax in the evening.',
    'You must relax in the evening.',
    'You shouldn’t rest.',
    'I think you should keep working.',
    'Ты устал после работы.',
    'Ти втомився після роботи.',
    'Jesteś zmęczony po pracy.'
  ],
  [
    'You feel unwell.',
    'I think you should see a doctor.',
    'You must see a doctor.',
    'You shouldn’t get help.',
    'You should ignore your health.',
    'Ты плохо себя чувствуешь.',
    'Ти погано себе почуваєш.',
    'Źle się czujesz.'
  ],

    [
    'You have been working all day and feel very tired. You also have a headache.',
    'You should have a rest.',
    'You should work even harder.',
    'You shouldn’t sleep tonight.',
    'You should go to the gym now.',
    'Ты работал весь день и чувствуешь сильную усталость. У тебя также болит голова.',
    'Ти працював увесь день і почуваєшся дуже втомленим. У тебе також болить голова.',
    'Pracowałeś cały dzień i czujesz się bardzo zmęczony. Boli cię też głowa.'
  ],
  [
    'It is raining heavily and very cold outside. You forgot your jacket at home.',
    'You should stay inside.',
    'You should go for a long walk.',
    'You shouldn’t protect yourself from rain.',
    'You should wear light summer clothes.',
    'Идёт сильный дождь и очень холодно. Ты забыл куртку дома.',
    'Йде сильний дощ і дуже холодно. Ти забув куртку вдома.',
    'Pada ulewny deszcz i jest bardzo zimno. Zapomniałeś kurtki w domu.'
  ],
  [
    'You have an important exam tomorrow. You haven’t studied anything yet.',
    'You should start studying now.',
    'You should watch movies all night.',
    'You shouldn’t prepare at all.',
    'You should ignore the exam.',
    'У тебя завтра важный экзамен. Ты ещё ничего не учил.',
    'У тебе завтра важливий іспит. Ти ще нічого не вчив.',
    'Masz jutro ważny egzamin. Jeszcze niczego się nie uczyłeś.'
  ],
  [
    'You feel sick and have a fever. You feel weak and dizzy.',
    'You should see a doctor.',
    'You should go to work.',
    'You shouldn’t get any medical help.',
    'You should ignore your health.',
    'Ты плохо себя чувствуешь и у тебя температура. Ты чувствуешь слабость и головокружение.',
    'Ти погано себе почуваєш і маєш температуру. Ти відчуваєш слабкість і запаморочення.',
    'Źle się czujesz i masz gorączkę. Czujesz się słaby i masz zawroty głowy.'
  ],
  [
    'Your phone battery is almost empty. You need your phone later today.',
    'You should charge your phone.',
    'You should keep watching videos.',
    'You shouldn’t use a charger.',
    'You should turn off charging.',
    'У твоего телефона почти разрядилась батарея. Телефон понадобится тебе позже.',
    'У твого телефону майже розряджена батарея. Телефон знадобиться тобі пізніше.',
    'Bateria w twoim telefonie jest prawie rozładowana. Będziesz go później potrzebować.'
  ],
  [
    'You are very hungry and haven’t eaten all day. Your stomach hurts.',
    'You should eat something.',
    'You shouldn’t eat at all.',
    'You should skip meals.',
    'You should wait until tomorrow.',
    'Ты очень голоден и не ел весь день. У тебя болит желудок.',
    'Ти дуже голодний і не їв увесь день. У тебе болить шлунок.',
    'Jesteś bardzo głodny i nie jadłeś cały dzień. Boli cię żołądek.'
  ],
  [
    'You feel very stressed because of work. You cannot concentrate anymore.',
    'You should relax a bit.',
    'You should take more work.',
    'You shouldn’t rest.',
    'You should keep pushing yourself.',
    'Ты чувствуешь сильный стресс из-за работы. Ты больше не можешь сосредоточиться.',
    'Ти відчуваєш сильний стрес через роботу. Ти більше не можеш зосередитися.',
    'Czujesz duży stres z powodu pracy. Nie możesz się już skoncentrować.'
  ],
  [
    'It is very late and you have to wake up early. You feel sleepy.',
    'You should go to bed.',
    'You shouldn’t sleep tonight.',
    'You should drink coffee and stay awake.',
    'You should start a new task.',
    'Уже очень поздно и тебе нужно рано вставать. Ты хочешь спать.',
    'Вже дуже пізно і тобі потрібно рано вставати. Ти хочеш спати.',
    'Jest bardzo późno i musisz wcześnie wstać. Chce ci się spać.'
  ],
  [
    'Your eyes hurt after working at the computer. You have been staring at the screen for hours.',
    'You should take a break.',
    'You should look at the screen longer.',
    'You shouldn’t rest your eyes.',
    'You should increase screen brightness.',
    'У тебя болят глаза после работы за компьютером. Ты смотрел в экран несколько часов.',
    'У тебе болять очі після роботи за комп’ютером. Ти дивився в екран кілька годин.',
    'Bolą cię oczy po pracy przy komputerze. Patrzyłeś na ekran przez kilka godzin.'
  ],
  [
    'You are late for an important meeting. Other people are already waiting.',
    'You should hurry up.',
    'You should walk very slowly.',
    'You shouldn’t rush at all.',
    'You should take a long break.',
    'Ты опаздываешь на важную встречу. Другие люди уже ждут.',
    'Ти запізнюєшся на важливу зустріч. Інші люди вже чекають.',
    'Spóźniasz się na ważne spotkanie. Inni ludzie już czekają.'
  ],

  [
    'You feel cold at home. The window is open and it is winter.',
    'You should close the window.',
    'You should open another window.',
    'You shouldn’t wear warm clothes.',
    'You should turn off the heating.',
    'Тебе холодно дома. Окно открыто и сейчас зима.',
    'Тобі холодно вдома. Вікно відкрите і зараз зима.',
    'Jest ci zimno w domu. Okno jest otwarte i jest zima.'
  ],
  [
    'You have free time in the evening. You feel tired but relaxed.',
    'You should rest.',
    'You should start working again.',
    'You shouldn’t relax.',
    'You should look for stress.',
    'У тебя есть свободное время вечером. Ты чувствуешь усталость, но расслаблен.',
    'У тебе є вільний час увечері. Ти відчуваєш втому, але розслаблений.',
    'Masz wolny czas wieczorem. Czujesz się zmęczony, ale spokojny.'
  ],
  [
    'You feel thirsty after exercising. You haven’t drunk anything for hours.',
    'You should drink some water.',
    'You shouldn’t drink anything.',
    'You should ignore thirst.',
    'You should keep training without water.',
    'Ты хочешь пить после тренировки. Ты не пил несколько часов.',
    'Ти хочеш пити після тренування. Ти не пив кілька годин.',
    'Chce ci się pić po ćwiczeniach. Nie piłeś od kilku godzin.'
  ],
  [
    'You are bored at home and feel lonely. You have nothing to do.',
    'You should go out and meet friends.',
    'You should stay alone all day.',
    'You shouldn’t talk to anyone.',
    'You should avoid people.',
    'Тебе скучно дома и ты чувствуешь себя одиноко. Тебе нечем заняться.',
    'Тобі нудно вдома і ти почуваєшся самотньо. Тобі нічим зайнятися.',
    'Nudzisz się w domu i czujesz się samotny. Nie masz co robić.'
  ],
  [
    'You made a mistake at work. You feel nervous about it.',
    'You should apologize.',
    'You shouldn’t say anything.',
    'You should blame someone else.',
    'You should ignore the problem.',
    'Ты допустил ошибку на работе. Ты нервничаешь из-за этого.',
    'Ти зробив помилку на роботі. Ти нервуєш через це.',
    'Popełniłeś błąd w pracy. Denerwujesz się z tego powodu.'
  ],
  [
    'You feel unwell but keep working. Your condition is getting worse.',
    'You should stop and rest.',
    'You should work even more.',
    'You shouldn’t take a break.',
    'You should ignore your health.',
    'Ты плохо себя чувствуешь, но продолжаешь работать. Твоё состояние ухудшается.',
    'Ти погано себе почуваєш, але продовжуєш працювати. Твій стан погіршується.',
    'Źle się czujesz, ale nadal pracujesz. Twój stan się pogarsza.'
  ],
  [
    "Because it's raining, you take an umbrella.",
    "Because it's raining, you should take an umbrella.",
    "Because it's raining, you shouldn't take an umbrella.",
    "Because it's raining, you should wear sunglasses.",
    "Because it's raining, you should leave your umbrella at home.",
    "Поскольку идёт дождь, ты берёшь зонт.",
    "Оскільки йде дощ, ти береш парасольку.",
    "Ponieważ pada deszcz, bierzesz parasol."
  ],
  [
    "Since you have a terrible headache, you see a doctor.",
    "Since you have a terrible headache, you should see a doctor.",
    "Since you have a terrible headache, you shouldn't see a doctor.",
    "Since you have a terrible headache, you should listen to loud music.",
    "Since you have a terrible headache, you should skip sleep all night.",
    "Раз у тебя сильная головная боль, ты идёшь к врачу.",
    "Оскільки в тебе сильний головний біль, ти йдеш до лікаря.",
    "Skoro masz silny ból głowy, idziesz do lekarza."
  ],
  [
    "Because you have an exam tomorrow, you study tonight.",
    "Because you have an exam tomorrow, you should study tonight.",
    "Because you have an exam tomorrow, you shouldn't study tonight.",
    "Because you have an exam tomorrow, you should play video games all evening.",
    "Because you have an exam tomorrow, you should skip all revision.",
    "Поскольку завтра экзамен, ты занимаешься сегодня вечером.",
    "Оскільки завтра іспит, ти займаєшся сьогодні ввечері.",
    "Ponieważ jutro masz egzamin, uczysz się dziś wieczorem."
  ],
  [
    "Since you feel very tired, you drive.",
    "Since you feel very tired, you shouldn't drive.",
    "Since you feel very tired, you should drive.",
    "Since you feel very tired, you should drive even faster.",
    "Since you feel very tired, you shouldn't rest at all.",
    "Раз ты очень устал, ты садишься за руль.",
    "Оскільки ти дуже втомився, ти сідаєш за кермо.",
    "Skoro jesteś bardzo zmęczony, prowadzisz samochód."
  ],
  [
    "Because you want to save money, you buy the most expensive option.",
    "Because you want to save money, you shouldn't buy the most expensive option.",
    "Because you want to save money, you should buy the most expensive option.",
    "Because you want to save money, you should spend even more.",
    "Because you want to save money, you shouldn't compare prices.",
    "Поскольку ты хочешь сэкономить, ты покупаешь самый дорогой вариант.",
    "Оскільки ти хочеш зекономити, ти купуєш найдорожчий варіант.",
    "Ponieważ chcesz oszczędzić pieniądze, kupujesz najdroższą opcję."
  ],
  [
    "Since your phone battery is low, you charge it.",
    "Since your phone battery is low, you should charge it.",
    "Since your phone battery is low, you shouldn't charge it.",
    "Since your phone battery is low, you should stream videos at full brightness.",
    "Since your phone battery is low, you should turn on the flashlight for fun.",
    "Раз заряд телефона на исходе, ты ставишь его на зарядку.",
    "Оскільки заряд телефону майже закінчився, ти ставиш його на зарядку.",
    "Skoro bateria w telefonie jest na wyczerpaniu, ładujesz go."
  ],
  [
    "Because the food smells bad, you eat it.",
    "Because the food smells bad, you shouldn't eat it.",
    "Because the food smells bad, you should eat it.",
    "Because the food smells bad, you should serve it to guests.",
    "Because the food smells bad, you shouldn't check the expiration date.",
    "Поскольку еда плохо пахнет, ты её ешь.",
    "Оскільки їжа погано пахне, ти її їси.",
    "Ponieważ jedzenie źle pachnie, jesz je."
  ],
  [
    "Since you have a job interview, you arrive early.",
    "Since you have a job interview, you should arrive early.",
    "Since you have a job interview, you shouldn't arrive early.",
    "Since you have a job interview, you should arrive an hour late.",
    "Since you have a job interview, you should forget your documents at home.",
    "Раз у тебя собеседование, ты приходишь рано.",
    "Оскільки в тебе співбесіда, ти приходиш рано.",

  ],
  [
    "Because your knee hurts, you run a marathon.",
    "Because your knee hurts, you shouldn't run a marathon.",
    "Because your knee hurts, you should run a marathon.",
    "Because your knee hurts, you should do extra jumping exercises.",
    "Because your knee hurts, you shouldn't rest at all.",
    "Поскольку у тебя болит колено, ты бежишь марафон.",
    "Оскільки в тебе болить коліно, ти біжиш марафон.",
    "Ponieważ boli cię kolano, biegniesz maraton."
  ],
  [
    "Since you promised, you keep your word.",
    "Since you promised, you should keep your word.",
    "Since you promised, you shouldn't keep your word.",
    "Since you promised, you should pretend you never said it.",
    "Since you promised, you should make excuses instead.",
    "Раз ты пообещал, ты держишь слово.",
    "Оскільки ти пообіцяв, ти дотримуєшся слова.",
    "Skoro obiecałeś, dotrzymujesz słowa."
  ],
  [
    "Because the room is very hot, you open a window.",
    "Because the room is very hot, you should open a window.",
    "Because the room is very hot, you shouldn't open a window.",
    "Because the room is very hot, you should turn on the heater.",
    "Because the room is very hot, you should wear a thick coat.",
    "Поскольку в комнате очень жарко, ты открываешь окно.",
    "Оскільки в кімнаті дуже спекотно, ти відчиняєш вікно.",
    "Ponieważ w pokoju jest bardzo gorąco, otwierasz okno."
  ],
  [
    "Since you are driving, you text.",
    "Since you are driving, you shouldn't text.",
    "Since you are driving, you should text.",
    "Since you are driving, you should read a long article on your phone.",
    "Since you are driving, you should close your eyes for a second.",
    "Раз ты за рулём, ты пишешь сообщения.",
    "Оскільки ти за кермом, ти пишеш повідомлення.",
    "Skoro prowadzisz samochód, piszesz wiadomości."
  ],

    [
    "Your flight boards in 40 minutes. The airport is far away, and your bag is still not packed.",
    "You should leave for the airport as soon as possible.",
    "You shouldn't hurry at all.",
    "You should start watching a movie instead.",
    "You shouldn't take any documents with you.",
    "Твой рейс начинается посадкой через 40 минут. Аэропорт далеко, а сумка ещё не собрана.",
    "Твій рейс починає посадку через 40 хвилин. Аеропорт далеко, а сумка ще не зібрана.",
    "Twój lot ma boarding za 40 minut. Lotnisko jest daleko, a torba wciąż nie jest spakowana."
  ],
  [
    "Your phone battery is at 5%. You need it for navigation on your way home.",
    "You should charge your phone soon.",
    "You shouldn't charge your phone at all.",
    "You should delete your contacts right now.",
    "You shouldn't bring your phone with you.",
    "Заряд телефона на 5%. Он нужен тебе для навигации по дороге домой.",
    "Заряд телефону 5%. Він потрібен тобі для навігації дорогою додому.",
    "Bateria w telefonie ma 5%. Potrzebujesz go do nawigacji w drodze do domu."
  ],
  [
    "Your friend looks upset and quiet. They say they had a very bad day and want to talk.",
    "You should listen to your friend.",
    "You shouldn't listen to your friend.",
    "You should laugh at the situation.",
    "You shouldn't let your friend finish a sentence.",
    "Твой друг выглядит расстроенным и молчаливым. Он говорит, что у него был очень плохой день и хочет поговорить.",
    "Твій друг виглядає засмученим і мовчазним. Він каже, що в нього був дуже поганий день і хоче поговорити.",
    "Twój przyjaciel wygląda na przygnębionego i cichego. Mówi, że miał bardzo zły dzień i chce porozmawiać."
  ],
  [
    "Your laptop gets very hot after a few minutes. It also makes a strange clicking sound when you open files.",
    "You should back up your data and have the laptop checked.",
    "You shouldn't save any of your files anywhere.",
    "You should keep the laptop on your bed under a blanket.",
    "You shouldn't turn the laptop off even if it freezes.",
    "Твой ноутбук сильно нагревается через несколько минут. Он также издаёт странные щелчки, когда ты открываешь файлы.",
    "Твій ноутбук сильно нагрівається через кілька хвилин. Він також видає дивні клацання, коли ти відкриваєш файли.",
    "Twój laptop bardzo się nagrzewa po kilku minutach. Wydaje też dziwny stukający dźwięk, gdy otwierasz pliki."
  ],
  [
    "It is snowing heavily and the road looks slippery. Other cars are braking often.",
    "You should drive slowly.",
    "You shouldn't reduce your speed.",
    "You should accelerate on every turn.",
    "You shouldn't keep a safe distance from other cars.",
    "Сильно идёт снег, и дорога выглядит скользкой. Другие машины часто тормозят.",
    "Сильно йде сніг, і дорога виглядає слизькою. Інші машини часто гальмують.",
    "Pada gęsty śnieg i droga wygląda na śliską. Inne samochody często hamują."
  ],
  [
    "You forgot your keys inside the apartment. It is late and you cannot get in.",
    "You should ask for help from a neighbor or a locksmith.",
    "You shouldn't tell anyone about the problem.",
    "You should try to break a window with your hand.",
    "You shouldn't take your phone with you.",
    "Ты забыл ключи в квартире. Уже поздно, и ты не можешь попасть внутрь.",
    "Ти забув ключі в квартирі. Уже пізно, і ти не можеш потрапити всередину.",
    "Zapomniałeś kluczy w mieszkaniu. Jest późno i nie możesz wejść do środka."
  ],
  [
    "You smell something burning in the kitchen. Smoke is coming from the toaster.",
    "You should turn off the toaster and ventilate the kitchen.",
    "You shouldn't do anything and just wait.",
    "You should add more bread to the toaster.",
    "You shouldn't open any windows.",
    "Ты чувствуешь запах гари на кухне. Из тостера идёт дым.",
    "Ти відчуваєш запах горілого на кухні. З тостера йде дим.",
    "Czujesz zapach spalenizny w kuchni. Z tostera wydobywa się dym."
  ],
  [
    "You have a fever and your body feels weak. You also slept badly last night.",
    "You should rest and drink enough fluids.",
    "You shouldn't rest at all today.",
    "You should go for an intense run outside.",
    "You shouldn't drink anything.",
    "У тебя температура и слабость. Ты также плохо спал прошлой ночью.",
    "У тебе температура і слабкість. Ти також погано спав минулої ночі.",
    "Masz gorączkę i czujesz się słabo. Dodatkowo źle spałeś zeszłej nocy."
  ],
  [
    "Your meeting starts at 9:00. You are still at home and it takes about 30 minutes to get there.",
    "You should leave now to arrive on time.",
    "You shouldn't leave yet.",
    "You should take a long shower first.",
    "You shouldn't check the address of the place.",
    "Твоя встреча начинается в 9:00. Ты ещё дома, а дорога занимает около 30 минут.",
    "Твоя зустріч починається о 9:00. Ти ще вдома, а дорога займає приблизно 30 хвилин.",
    "Twoje spotkanie zaczyna się o 9:00. Nadal jesteś w domu, a dojazd zajmuje około 30 minut."
  ],
  [
    "You are trying to focus on studying, but your phone keeps buzzing with notifications. You lose concentration every few minutes.",
    "You should turn off notifications while you study.",
    "You shouldn't change anything and keep checking your phone.",
    "You should open more social media apps.",
    "You shouldn't study at all today.",
    "Ты пытаешься сосредоточиться на учёбе, но телефон постоянно вибрирует от уведомлений. Ты теряешь концентрацию каждые несколько минут.",
    "Ти намагаєшся зосередитися на навчанні, але телефон постійно дзижчить від сповіщень. Ти втрачаєш концентрацію кожні кілька хвилин.",
    "Próbujesz skupić się na nauce, ale telefon ciągle wibruje od powiadomień. Co kilka minut tracisz koncentrację."
  ],
  [
    "You have been lifting heavy boxes all day. Your lower back feels sore and tight.",
    "You should take a break and lift carefully.",
    "You shouldn't rest at all.",
    "You should lift faster to finish sooner.",
    "You shouldn't ask anyone for help with heavy items.",
    "Ты весь день поднимаешь тяжёлые коробки. Поясница болит и напряжена.",
    "Ти весь день піднімав важкі коробки. Поперек болить і напружений.",
    "Cały dzień podnosiłeś ciężkie pudełka. Dolna część pleców jest obolała i spięta."
  ],
  [
    "The sun is very strong at the beach. Your skin turns red quickly.",
    "You should use sunscreen.",
    "You shouldn't protect your skin from the sun.",
    "You should stay outside all day without shade.",
    "You shouldn't drink water in hot weather.",
    "Солнце на пляже очень сильное. Кожа быстро краснеет.",
    "Сонце на пляжі дуже сильне. Шкіра швидко червоніє.",
    "Słońce na plaży jest bardzo mocne. Skóra szybko robi się czerwona."
  ],
  [
    "Your dog has not eaten since morning. The bowl is empty and the dog keeps looking at it.",
    "You should feed your dog.",
    "You shouldn't feed your dog today.",
    "You should hide the food and walk away.",
    "You shouldn't give the dog any water either.",
    "Твоя собака не ела с утра. Миска пустая, и собака постоянно на неё смотрит.",
    "Твоя собака не їла зранку. Миска порожня, і собака постійно на неї дивиться.",
    "Twój pies nie jadł od rana. Miska jest pusta, a pies ciągle na nią patrzy."
  ],
  [
    "You broke a glass in the kitchen. Small pieces are scattered on the floor near your feet.",
    "You should clean it up carefully, preferably with gloves.",
    "You shouldn't clean anything and leave it there.",
    "You should walk barefoot across the area.",
    "You shouldn't tell anyone that there is broken glass.",
    "Ты разбил стакан на кухне. Мелкие осколки рассыпаны по полу рядом с твоими ногами.",
    "Ти розбив склянку на кухні. Дрібні уламки розсипані по підлозі біля твоїх ніг.",
    "Stłukłeś szklankę w kuchni. Małe kawałki są rozsypane na podłodze obok twoich stóp."
  ],
  [
    "You notice a strong smell of gas in the kitchen. The window is closed and the room feels stuffy.",
    "You should ventilate the room and turn off the gas supply if possible.",
    "You shouldn't open any windows.",
    "You should light a match to check the smell.",
    "You shouldn't tell anyone about it.",
    "Ты чувствуешь сильный запах газа на кухне. Окно закрыто, и в комнате душно.",
    "Ти відчуваєш сильний запах газу на кухні. Вікно зачинене, і в кімнаті душно.",
    "Czujesz silny zapach gazu w kuchni. Okno jest zamknięte, a w pomieszczeniu jest duszno."
  ],
  [
    "You found a wallet on the sidewalk. There is an ID card inside with a name and address.",
    "You should try to return the wallet to its owner.",
    "You shouldn't do anything and keep the wallet.",
    "You should throw the wallet into the trash.",
    "You shouldn't look for any contact information.",
    "Ты нашёл кошелёк на тротуаре. Внутри есть удостоверение с именем и адресом.",
    "Ти знайшов гаманець на тротуарі. Усередині є посвідчення з ім’ям та адресою.",
    "Znalazłeś portfel na chodniku. W środku jest dowód z imieniem i adresem."
  ],
  [
    "You are frying food and the oil starts to smoke. The pan is extremely hot.",
    "You should lower the heat and be careful.",
    "You shouldn't change anything and keep heating it.",
    "You should pour water into the hot oil.",
    "You shouldn't stay in the kitchen while cooking.",
    "Ты жаришь еду, и масло начинает дымиться. Сковорода очень горячая.",
    "Ти смажиш їжу, і олія починає диміти. Пательня дуже гаряча.",
    "Smażysz jedzenie i olej zaczyna dymić. Patelnia jest bardzo gorąca."
  ],
  [
    "The milk in your fridge expired two days ago. It smells sour when you open it.",
    "You shouldn't drink the milk.",
    "You should drink the milk anyway.",
    "You should leave the milk on the table all day.",
    "You shouldn't check the expiration date next time.",
    "Молоко в холодильнике просрочено два дня назад. Оно кисло пахнет, когда ты открываешь его.",
    "Молоко в холодильнику прострочене два дні тому. Воно кисло пахне, коли ти його відкриваєш.",
    "Mleko w lodówce jest przeterminowane od dwóch dni. Pachnie kwaśno, gdy je otwierasz."
  ],
  [
    "The room feels very hot and the air is heavy. You start sweating even when you sit still.",
    "You should open a window to get some fresh air.",
    "You shouldn't open a window at all.",
    "You should turn on the heater.",
    "You shouldn't drink water in a hot room.",
    "В комнате очень жарко и душно. Ты начинаешь потеть даже сидя.",
    "У кімнаті дуже спекотно і душно. Ти починаєш пітніти навіть сидячи.",
    "W pokoju jest bardzo gorąco i duszno. Zaczynasz się pocić nawet na siedząco."
  ],
  [
    "Your neighbors are playing loud music after midnight. You have to wake up early tomorrow.",
    "You should ask them politely to lower the volume.",
    "You shouldn't say anything and suffer silently.",
    "You should start playing even louder music back.",
    "You shouldn't sleep at all tonight.",
    "Соседи включили громкую музыку после полуночи. Тебе нужно рано вставать завтра.",
    "Сусіди вмикнули гучну музику після півночі. Тобі потрібно рано вставати завтра.",
    "Sąsiedzi puszczają głośną muzykę po północy. Jutro musisz wstać wcześnie."
  ],
  [
    "You need to print a document today. The printer shows an empty ink warning.",
    "You should replace the ink or use another printer.",
    "You shouldn't do anything and hope it prints.",
    "You should shake the printer and hit it.",
    "You shouldn't save the document before printing.",
    "Тебе нужно распечатать документ сегодня. Принтер показывает, что чернила закончились.",
    "Тобі потрібно роздрукувати документ сьогодні. Принтер показує, що чорнило закінчилося.",
    "Musisz dziś wydrukować dokument. Drukarka pokazuje, że tusz jest pusty."
  ],
  [
    "You saw a message that your password was found in a data leak. You use the same password on many websites.",
    "You should change your password and use a stronger one.",
    "You shouldn't change anything.",
    "You should share your password with a friend for safekeeping.",
    "You shouldn't use two-factor authentication.",
    "Ты увидел сообщение, что твой пароль оказался в утечке данных. Ты используешь тот же пароль на многих сайтах.",
    "Ти побачив повідомлення, що твій пароль потрапив в витік даних. Ти використовуєш той самий пароль на багатьох сайтах.",
    "Zobaczyłeś wiadomość, że twoje hasło było w wycieku danych. Używasz tego samego hasła na wielu stronach."
  ],
  [
    "You ride your bike after sunset. Cars have trouble seeing you on the road.",
    "You should use bike lights.",
    "You shouldn't use any lights at night.",
    "You should wear all black with no reflectors.",
    "You shouldn't follow traffic rules.",
    "Ты едешь на велосипеде после заката. Машинам трудно тебя заметить на дороге.",
    "Ти їдеш на велосипеді після заходу сонця. Водіям важко тебе помітити на дорозі.",
    "Jedziesz rowerem po zachodzie słońca. Samochodom trudno cię zauważyć na drodze."
  ],
  [
    "You cut your finger while cooking. The cut is small but it is bleeding.",
    "You should clean the cut and cover it.",
    "You shouldn't clean the cut at all.",
    "You should put dirt on it to stop the bleeding.",
    "You shouldn't wash your hands after cooking.",
    "Ты порезал палец во время готовки. Порез небольшой, но он кровоточит.",
    "Ти порізав палець під час готування. Поріз невеликий, але він кровоточить.",
    "Skaleczyłeś palec podczas gotowania. Skaleczenie jest małe, ale krwawi."
  ],
  [
    "You are traveling abroad next week. Your passport expires very soon.",
    "You should check the passport rules and renew it if needed.",
    "You shouldn't check your passport at all.",
    "You should leave your passport at home.",
    "You shouldn't bring any identification documents.",
    "Ты едешь за границу на следующей неделе. Срок действия паспорта скоро заканчивается.",
    "Ти їдеш за кордон наступного тижня. Термін дії паспорта скоро закінчується.",
    "Wyjeżdżasz za granicę w przyszłym tygodniu. Twój paszport niedługo traci ważność."
  ],
  [
    "You received an email from your bank with a strange link. The message asks you to confirm your account details urgently.",
    "You shouldn't click the link in that email.",
    "You should click the link immediately.",
    "You should send your password by email to confirm it.",
    "You shouldn't check the sender address.",
    "Ты получил письмо якобы от банка со странной ссылкой. В сообщении просят срочно подтвердить данные аккаунта.",
    "Ти отримав лист нібито від банку з дивним посиланням. У повідомленні просять терміново підтвердити дані акаунта.",
    "Dostałeś e-mail rzekomo z banku z dziwnym linkiem. Wiadomość prosi o pilne potwierdzenie danych konta."
  ],
  [
    "One step on your ladder is cracked. You need to reach a high shelf in the garage.",
    "You shouldn't use that ladder until it is fixed or replaced.",
    "You should climb it quickly anyway.",
    "You should stand on the very top step and lean far forward.",
    "You shouldn't ask anyone to hold the ladder.",
    "Одна ступень на лестнице треснула. Тебе нужно достать до высокой полки в гараже.",
    "Одна сходинка на драбині тріснула. Тобі потрібно дістатися до високої полиці в гаражі.",
    "Jeden stopień drabiny jest pęknięty. Musisz sięgnąć do wysokiej półki w garażu."
  ],
  [
    "The forecast says it will rain in the afternoon. You plan to be outside for several hours.",
    "You should take an umbrella or a rain jacket.",
    "You shouldn't take any protection from rain.",
    "You should wear sandals even if it pours.",
    "You shouldn't check the weather again.",
    "По прогнозу днём будет дождь. Ты планируешь быть на улице несколько часов.",
    "За прогнозом вдень буде дощ. Ти плануєш бути надворі кілька годин.",
    "Prognoza mówi, że po południu będzie padać. Planujesz być na zewnątrz przez kilka godzin."
  ],
  [
    "You just finished a hard workout. Your mouth is dry and you feel thirsty.",
    "You should drink water.",
    "You shouldn't drink anything after exercise.",
    "You should eat only salty snacks to fix it.",
    "You shouldn't rest after training.",
    "Ты только что закончил тяжёлую тренировку. Во рту сухо и хочется пить.",
    "Ти щойно закінчив важке тренування. У роті сухо і хочеться пити.",
    "Właśnie skończyłeś ciężki trening. Masz sucho w ustach i czujesz pragnienie."
  ],
  [
    "You have a food allergy. You bought a new snack and you are not sure what is inside.",
    "You should read the ingredient list before eating it.",
    "You shouldn't check the ingredients at all.",
    "You should eat it quickly without looking.",
    "You shouldn't carry any allergy medication.",
    "У тебя пищевая аллергия. Ты купил новый перекус и не уверен, что в составе.",
    "У тебе харчова алергія. Ти купив новий перекус і не впевнений, що в складі.",
    "Masz alergię pokarmową. Kupiłeś nową przekąskę i nie jesteś pewien, co jest w składzie."
  ],
  [
    "A friend invited you to a party. You already have plans and cannot go.",
    "You should reply and say you cannot make it.",
    "You shouldn't reply at all.",
    "You should block your friend right away.",
    "You shouldn't read the invitation message.",
    "Друг пригласил тебя на вечеринку. У тебя уже есть планы, и ты не можешь прийти.",
    "Друг запросив тебе на вечірку. У тебе вже є плани, і ти не можеш прийти.",
    "Przyjaciel zaprosił cię na imprezę. Masz już plany i nie możesz przyjść."
  ],
  [
    "The room is dark and you need to read a contract. The letters are hard to see.",
    "You should turn on a lamp or improve the lighting.",
    "You shouldn't use any light while reading.",
    "You should close your eyes for a minute and sign anyway.",
    "You shouldn't look at the text closely.",
    "В комнате темно, а тебе нужно прочитать договор. Буквы плохо видно.",
    "У кімнаті темно, а тобі потрібно прочитати договір. Літери погано видно.",
    "W pokoju jest ciemno i musisz przeczytać umowę. Litery są słabo widoczne."
  ],
  [
    "The check engine light turned on while you were driving. The car feels a bit different than usual.",
    "You should have the car checked soon.",
    "You shouldn't pay attention to the warning light.",
    "You should drive much faster to test it.",
    "You shouldn't look at the manual or error codes.",
    "Во время езды загорелся индикатор Check Engine. Машина ощущается немного иначе, чем обычно.",
    "Під час їзди загорівся індикатор Check Engine. Авто відчувається трохи інакше, ніж зазвичай.",
    "Podczas jazdy zapaliła się kontrolka Check Engine. Samochód zachowuje się trochę inaczej niż zwykle."
  ],
  [
    "You put pasta into a pot, but the water is still cold. You are in a hurry and want it ready quickly.",
    "You should wait until the water boils before cooking properly.",
    "You shouldn't use water at all for pasta.",
    "You should cook pasta in a dry pot with no heat.",
    "You shouldn't stir the pasta at any point.",
    "Ты положил пасту в кастрюлю, но вода ещё холодная. Ты спешишь и хочешь, чтобы всё было готово быстро.",
    "Ти поклав макарони в каструлю, але вода ще холодна. Ти поспішаєш і хочеш, щоб усе було готово швидко.",
    "Włożyłeś makaron do garnka, ale woda jest jeszcze zimna. Spieszysz się i chcesz, żeby szybko był gotowy."
  ],
  [
    "You cannot fall asleep at night. You drank a large coffee late in the evening.",
    "You shouldn't drink caffeine late in the day.",
    "You should drink even more coffee before bed.",
    "You should start playing loud music at midnight.",
    "You shouldn't try any calm bedtime routine.",
    "Ты не можешь уснуть ночью. Ты выпил большой кофе поздно вечером.",
    "Ти не можеш заснути вночі. Ти випив велику каву пізно ввечері.",
    "Nie możesz zasnąć w nocy. Wypiłeś dużą kawę późnym wieczorem."
  ],
  [
    "You have a job interview tomorrow morning. Your shirt is wrinkled and your shoes are dirty.",
    "You should prepare your clothes in advance.",
    "You shouldn't care about your appearance at all.",
    "You should arrive two hours late on purpose.",
    "You shouldn't learn anything about the company.",
    "У тебя собеседование завтра утром. Рубашка помята, а обувь грязная.",
    "У тебе співбесіда завтра вранці. Сорочка пом’ята, а взуття брудне.",
    "Masz rozmowę kwalifikacyjną jutro rano. Koszula jest pognieciona, a buty brudne."
  ],
  [
    "You spilled water on your laptop keyboard. The screen is still on and the fan is running.",
    "You should turn the laptop off and dry it carefully.",
    "You shouldn't turn it off and just keep using it.",
    "You should pour more water to wash the keys.",
    "You shouldn't unplug the charger.",
    "Ты пролил воду на клавиатуру ноутбука. Экран всё ещё включен, и вентилятор работает.",
    "Ти пролив воду на клавіатуру ноутбука. Екран ще увімкнений, і вентилятор працює.",
    "Rozlałeś wodę na klawiaturę laptopa. Ekran nadal jest włączony, a wentylator pracuje."
  ],
  [
    "Your child is sleeping in the next room. The house is quiet and it is already late.",
    "You should speak quietly.",
    "You shouldn't lower your voice at all.",
    "You should play loud music right now.",
    "You shouldn't close doors carefully.",
    "Твой ребёнок спит в соседней комнате. В доме тихо, и уже поздно.",
    "Твоя дитина спить у сусідній кімнаті. У домі тихо, і вже пізно.",
    "Twoje dziecko śpi w następnym pokoju. W domu jest cicho i jest już późno."
  ],
  [
    "You have a big project due soon. The task feels overwhelming and you do not know where to start.",
    "You should break the work into smaller steps and plan your time.",
    "You shouldn't make any plan and just hope it works out.",
    "You should start three new projects today.",
    "You shouldn't work on it until the last hour.",
    "У тебя скоро срок сдачи большого проекта. Задача кажется слишком большой, и ты не знаешь, с чего начать.",
    "У тебе скоро дедлайн великого проєкту. Завдання здається надто великим, і ти не знаєш, з чого почати.",
    "Masz wkrótce termin oddania dużego projektu. Zadanie wydaje się przytłaczające i nie wiesz, od czego zacząć."
  ],
  [
    "You suddenly feel dizzy when you stand up. The room spins for a moment.",
    "You should sit down and take a moment to recover.",
    "You shouldn't sit down at all.",
    "You should start running immediately.",
    "You shouldn't drink any water today.",
    "У тебя внезапно кружится голова, когда ты встаёшь. Комната на мгновение начинает вращаться.",
    "У тебе раптово паморочиться голова, коли ти встаєш. Кімната на мить наче обертається.",
    "Nagle kręci ci się w głowie, gdy wstajesz. Pokój przez chwilę się kręci."
  ],
  [
    "You cannot find an important file on your computer. You deleted some folders yesterday by mistake.",
    "You should check the recycle bin or your backups.",
    "You shouldn't look for the file anywhere.",
    "You should delete more folders to fix it.",
    "You shouldn't save files in the future.",
    "Ты не можешь найти важный файл на компьютере. Вчера ты случайно удалил несколько папок.",
    "Ти не можеш знайти важливий файл на комп’ютері. Учора ти випадково видалив кілька папок.",
    "Nie możesz znaleźć ważnego pliku na komputerze. Wczoraj przez pomyłkę usunąłeś kilka folderów."
  ],
  [
    "You feel sick and your throat hurts. You were invited to a crowded party tonight.",
    "You shouldn't go to the party while you feel sick.",
    "You should go anyway and stay very close to everyone.",
    "You should skip all sleep and drink energy drinks.",
    "You shouldn't wash your hands today.",
    "Ты плохо себя чувствуешь и у тебя болит горло. Тебя пригласили на многолюдную вечеринку сегодня вечером.",
    "Ти погано почуваєшся і в тебе болить горло. Тебе запросили на людну вечірку сьогодні ввечері.",
    "Czujesz się źle i boli cię gardło. Zostałeś zaproszony na zatłoczoną imprezę dziś wieczorem."
  ],
  [
    "You are cutting tomatoes and the knife keeps slipping. The blade feels dull.",
    "You should use a sharper knife or sharpen this one.",
    "You shouldn't change the knife and keep forcing it.",
    "You should cut faster with more pressure.",
    "You shouldn't pay attention to your fingers.",
    "Ты режешь помидоры, и нож постоянно соскальзывает. Лезвие кажется тупым.",
    "Ти ріжеш помідори, і ніж постійно зісковзує. Лезо здається тупим.",
    "Kroisz pomidory i nóż ciągle się ślizga. Ostrze wydaje się tępe."
  ],
  [
    "Your new shoes rub your heels. You already have small blisters after one day.",
    "You should wear them gradually and protect your heels.",
    "You shouldn't do anything and keep wearing them all day.",
    "You should walk a marathon in them tomorrow.",
    "You shouldn't use any socks with those shoes.",
    "Новые туфли натирают пятки. Уже появились маленькие мозоли после одного дня.",
    "Нове взуття натирає п’яти. Уже з’явилися невеликі пухирі після одного дня.",
    "Nowe buty obcierają pięty. Po jednym dniu masz już małe pęcherze."
  ],
  [
    "The weather is very cold and windy. You will be outside for a long time.",
    "You should dress warmly.",
    "You shouldn't wear a coat at all.",
    "You should go outside in shorts and sandals.",
    "You shouldn't check the forecast.",
    "Погода очень холодная и ветреная. Ты будешь на улице долго.",
    "Погода дуже холодна і вітряна. Ти будеш надворі довго.",
    "Pogoda jest bardzo zimna i wietrzna. Będziesz na zewnątrz przez długi czas."
  ],
  [
    "Your smoke detector makes a short beep every minute. The battery warning light is on.",
    "You should replace the battery in the smoke detector.",
    "You shouldn't replace the battery and just ignore it.",
    "You should remove the detector completely and throw it away.",
    "You shouldn't have any smoke detectors at home.",
    "Датчик дыма пищит каждую минуту. Горит индикатор разряда батареи.",
    "Димовий датчик пищить щохвилини. Горить індикатор розрядженої батареї.",
    "Czujnik dymu piszczy co minutę. Świeci się kontrolka baterii."
  ],
  [
    "Your internet connection drops several times a day. You have an important video call in an hour.",
    "You should test your connection and prepare a backup option.",
    "You shouldn't check anything and just hope it works.",
    "You should turn off your router right before the call.",
    "You shouldn't charge your laptop before the call.",
    "Интернет отключается несколько раз в день. Через час у тебя важный видеозвонок.",
    "Інтернет відключається кілька разів на день. За годину в тебе важливий відеодзвінок.",
    "Internet rozłącza się kilka razy dziennie. Za godzinę masz ważną rozmowę wideo."
  ],
  [
    "You are going hiking tomorrow. Your water bottle has a crack and it leaks.",
    "You should take a different bottle or fix the leak before the hike.",
    "You shouldn't bring any water at all.",
    "You should carry only salty food and no drinks.",
    "You shouldn't tell anyone where you are going.",
    "Ты идёшь в поход завтра. Твоя бутылка для воды треснула и протекает.",
    "Ти йдеш у похід завтра. Твоя пляшка для води тріснула і протікає.",
    "Jutro idziesz na wędrówkę. Twoja butelka na wodę jest pęknięta i przecieka."
  ],
  [
    "You left your car lights on overnight. In the morning the engine does not start.",
    "You should try to jump-start the car or call for help.",
    "You shouldn't do anything and just keep turning the key.",
    "You should remove the battery and throw it away.",
    "You shouldn't ask anyone for jumper cables.",
    "Ты оставил фары включёнными на ночь. Утром двигатель не заводится.",
    "Ти залишив фари увімкненими на ніч. Вранці двигун не заводиться.",
    "Zostawiłeś włączone światła na noc. Rano silnik nie chce odpalić."
  ],
  [
    "Your eyes feel dry after many hours at the computer. You rarely look away from the screen.",
    "You should take short breaks and rest your eyes.",
    "You shouldn't take any breaks at all.",
    "You should increase screen brightness to the maximum.",
    "You shouldn't blink while working.",
    "Глаза сохнут после многих часов за компьютером. Ты почти не отводишь взгляд от экрана.",
    "Очі пересихають після багатьох годин за комп’ютером. Ти майже не відводиш погляд від екрана.",
    "Oczy są suche po wielu godzinach przy komputerze. Rzadko odrywasz wzrok od ekranu."
  ],
  [
    "You are about to send an important email. You are angry and your message sounds very harsh.",
    "You should reread it and calm down before sending.",
    "You should send it immediately without reading.",
    "You shouldn't check for any mistakes.",
    "You should add more insults to make it stronger.",
    "Ты собираешься отправить важное письмо. Ты злой, и сообщение звучит очень резко.",
    "Ти збираєшся надіслати важливий лист. Ти злий, і повідомлення звучить дуже різко.",
    "Masz wysłać ważnego maila. Jesteś zły i wiadomość brzmi bardzo ostro."
  ],
  [
    "You bought chicken and forgot it in your car for several hours. Now it feels warm and smells strange.",
    "You shouldn't cook and eat that chicken.",
    "You should eat it anyway to avoid waste.",
    "You should leave it at room temperature for another day.",
    "You shouldn't wash your hands after touching it.",
    "Ты купил курицу и забыл её в машине на несколько часов. Сейчас она тёплая и странно пахнет.",
    "Ти купив курку й забув її в машині на кілька годин. Зараз вона тепла і дивно пахне.",
    "Kupiłeś kurczaka i zostawiłeś go w samochodzie na kilka godzin. Teraz jest ciepły i dziwnie pachnie."
  ],
  [
    "You are working on a ladder near the edge of a balcony. The surface under the ladder is uneven.",
    "You should make sure the ladder is stable before climbing.",
    "You shouldn't check the ladder at all.",
    "You should climb while holding tools in both hands.",
    "You shouldn't ask anyone to support the ladder.",
    "Ты работаешь на лестнице возле края балкона. Поверхность под лестницей неровная.",
    "Ти працюєш на драбині біля краю балкона. Поверхня під драбиною нерівна.",
    "Pracujesz na drabinie blisko krawędzi balkonu. Podłoże pod drabiną jest nierówne."
  ],
  [
    "You are cooking and you notice your sleeve is close to the flame. The fabric is loose and can catch fire easily.",
    "You should keep your clothes away from the flame while cooking.",
    "You shouldn't pay attention to the flame at all.",
    "You should move even closer to the stove.",
    "You shouldn't use any kitchen safety rules.",
    "Ты готовишь и замечаешь, что рукав близко к пламени. Ткань свободная и легко может загореться.",
    "Ти готуєш і помічаєш, що рукав близько до полум’я. Тканина вільна й легко може загорітися.",
    "Gotujesz i zauważasz, że rękaw jest blisko płomienia. Materiał jest luźny i łatwo może się zapalić."
  ],
  [
    "You are learning English and you keep forgetting new words. You only study once a week.",
    "You should practice a little every day.",
    "You shouldn't study at all between lessons.",
    "You should stop learning new words completely.",
    "You shouldn't read or listen to English.",
    "Ты учишь английский и постоянно забываешь новые слова. Ты занимаешься только раз в неделю.",
    "Ти вчиш англійську і постійно забуваєш нові слова. Ти займаєшся лише раз на тиждень.",
    "Uczysz się angielskiego i ciągle zapominasz nowe słowa. Uczysz się tylko raz w tygodniu."
  ],
  [
    "You notice mold spots on the bathroom wall. The room has poor ventilation and stays damp for hours.",
    "You should improve ventilation and clean the mold properly.",
    "You shouldn't ventilate the bathroom at all.",
    "You should keep the bathroom door closed all day.",
    "You shouldn't clean anything for months.",
    "Ты заметил пятна плесени на стене в ванной. Там плохая вентиляция, и влажность держится часами.",
    "Ти помітив плями плісняви на стіні у ванній. Там погана вентиляція, і вологість тримається годинами.",
    "Zauważyłeś plamy pleśni na ścianie w łazience. Jest słaba wentylacja i wilgoć utrzymuje się godzinami."
  ],
  [
    "You are about to cross the street, but you hear a fast car coming. You cannot see it clearly because of a parked van.",
    "You should wait until you can see the road clearly before crossing.",
    "You should run across immediately without looking.",
    "You shouldn't use the crosswalk when it is available.",
    "You should close your eyes and cross quickly.",
    "Ты собираешься перейти улицу, но слышишь, как быстро приближается машина. Ты не видишь её из-за припаркованного фургона.",
    "Ти збираєшся перейти вулицю, але чуєш, як швидко наближається авто. Ти не бачиш його через припаркований фургон.",
    "Masz przejść przez ulicę, ale słyszysz szybko nadjeżdżający samochód. Nie widzisz go dobrze przez zaparkowanego busa."
  ],
  [
    "You are sharing a document with your team. The file is the only copy and it contains important data.",
    "You should make a backup before you share or edit it.",
    "You shouldn't keep any backup at all.",
    "You should delete the file right after sending it.",
    "You shouldn't save your work anywhere.",
    "Ты делишься документом с командой. Это единственная копия, и в ней важные данные.",
    "Ти ділишся документом із командою. Це єдина копія, і в ній важливі дані.",
    "Udostępniasz dokument zespołowi. To jedyna kopia i zawiera ważne dane."
  ],
  [
    "You are at a restaurant and you feel something stuck in your throat after a bite. It is hard to swallow.",
    "You should stop eating and ask for help or water.",
    "You should keep eating quickly to push it down.",
    "You shouldn't tell anyone what happened.",
    "You should start laughing while you cannot swallow.",
    "Ты в ресторане и чувствуешь, что что-то застряло в горле после кусочка. Трудно глотать.",
    "Ти в ресторані й відчуваєш, що щось застрягло в горлі після шматочка. Важко ковтати.",
    "Jesteś w restauracji i po kęsie czujesz, że coś utknęło w gardle. Trudno przełykać."
  ],
  [
    "You are writing a contract number into a form. One wrong digit will send the payment to the wrong account.",
    "You should double-check the number before submitting.",
    "You shouldn't check it and just submit.",
    "You should type random digits to save time.",
    "You shouldn't read what you entered.",
    "Ты вводишь номер договора в форму. Одна неправильная цифра отправит платеж не туда.",
    "Ти вводиш номер договору у форму. Одна неправильна цифра відправить платіж не туди.",
    "Wpisujesz numer umowy do formularza. Jedna zła cyfra wyśle płatność na niewłaściwe konto."
  ],
  [
    "You are at the supermarket and you see a big discount on a product. You do not need it and you came only for basics.",
    "You should stick to your list if you want to avoid unnecessary spending.",
    "You should buy everything on sale without thinking.",
    "You shouldn't look at prices at all.",
    "You should spend more money to feel better.",
    "Ты в супермаркете и видишь большую скидку на товар. Он тебе не нужен, и ты пришёл только за базовыми вещами.",
    "Ти в супермаркеті й бачиш велику знижку на товар. Він тобі не потрібен, і ти прийшов лише по базові речі.",
    "Jesteś w supermarkecie i widzisz dużą zniżkę na produkt. Nie potrzebujesz go i przyszedłeś tylko po podstawowe rzeczy."
  ],
  [
    "You have a long drive ahead and you slept only four hours. Your eyes feel heavy already.",
    "You shouldn't start a long drive while you are exhausted.",
    "You should drive anyway and ignore the fatigue.",
    "You should drink alcohol to relax before driving.",
    "You shouldn't take any breaks on the road.",
    "Тебе предстоит долгая поездка, а ты спал всего четыре часа. Глаза уже тяжелеют.",
    "Тобі належить довга поїздка, а ти спав лише чотири години. Очі вже важчають.",
    "Czeka cię długa jazda, a spałeś tylko cztery godziny. Oczy są już ciężkie."
  ],
  [
    "You are using a public Wi-Fi network at a cafe. You plan to log in to your bank account.",
    "You shouldn't access sensitive accounts on public Wi-Fi.",
    "You should enter all passwords and save them in the browser.",
    "You should share your bank login with the network owner.",
    "You shouldn't use any security settings.",
    "Ты пользуешься публичным Wi-Fi в кафе. Ты собираешься войти в банковский аккаунт.",
    "Ти користуєшся публічним Wi-Fi у кафе. Ти збираєшся увійти в банківський акаунт.",
    "Korzystasz z publicznego Wi-Fi w kawiarni. Planujesz zalogować się na konto bankowe."
  ],
  [
    "You are painting a wall and the paint is still wet. You want to move furniture back immediately.",
    "You should wait until the paint dries before moving furniture close to it.",
    "You shouldn't wait at all and touch the wall right away.",
    "You should wipe the wet paint with your sleeve.",
    "You shouldn't protect the floor from paint.",
    "Ты красишь стену, и краска ещё мокрая. Ты хочешь сразу поставить мебель обратно.",
    "Ти фарбуєш стіну, і фарба ще мокра. Ти хочеш одразу поставити меблі назад.",
    "Malujesz ścianę i farba jest jeszcze mokra. Chcesz od razu przestawić meble z powrotem."
  ],
  [
    "You are in a hurry and you see the traffic light turning yellow. There is a crosswalk ahead with people waiting.",
    "You should slow down and be ready to stop.",
    "You should speed up as much as possible.",
    "You shouldn't watch the road in that moment.",
    "You should look at your phone instead of the light.",
    "Ты спешишь и видишь, что светофор переключается на жёлтый. Впереди переход, и люди ждут.",
    "Ти поспішаєш і бачиш, що світлофор перемикається на жовтий. Попереду перехід, і люди чекають.",
    "Spieszysz się i widzisz, że światło zmienia się na żółte. Przed tobą jest przejście, a ludzie czekają."
  ],
  [
    "You are using a power tool and the noise is very loud. Your ears ring after a few minutes.",
    "You should wear hearing protection.",
    "You shouldn't protect your ears at all.",
    "You should increase the tool speed just for fun.",
    "You shouldn't take any safety precautions.",
    "Ты работаешь электроинструментом, и шум очень громкий. Через несколько минут начинают звенеть уши.",
    "Ти працюєш електроінструментом, і шум дуже гучний. Через кілька хвилин починає дзвеніти у вухах.",
    "Używasz elektronarzędzia i hałas jest bardzo głośny. Po kilku minutach dzwoni ci w uszach."
  ],
  [
    "You have a lot of messages to answer at work. You keep switching between tasks and feel more stressed.",
    "You should prioritize and answer the most important messages first.",
    "You should answer only the easiest messages and ignore the rest.",
    "You shouldn't answer anyone for a week.",
    "You should open ten chats at the same time and reply randomly.",
    "У тебя на работе много сообщений, на которые нужно ответить. Ты постоянно переключаешься между задачами и чувствуешь ещё больше стресса.",
    "У тебе на роботі багато повідомлень, на які потрібно відповісти. Ти постійно перемикаєшся між задачами й відчуваєш ще більше стресу.",
    "W pracy masz dużo wiadomości do odpisania. Ciągle przełączasz się między zadaniami i czujesz jeszcze większy stres."
  ],
  [
    "You are cooking rice and it starts boiling over. Water spills onto the stove.",
    "You should lower the heat and watch the pot.",
    "You shouldn't change the heat at all.",
    "You should leave the kitchen until it stops by itself.",
    "You shouldn't clean the spilled water.",
    "Ты варишь рис, и он начинает убегать. Вода проливается на плиту.",
    "Ти вариш рис, і він починає втікати. Вода проливається на плиту.",
    "Gotujesz ryż i zaczyna wykipieć. Woda wylewa się na kuchenkę."
  ],
  [
    "You notice your credit card is missing. You used it in a shop an hour ago.",
    "You should block the card and contact your bank.",
    "You shouldn't do anything and wait for tomorrow.",
    "You should post your card number online to find it.",
    "You shouldn't tell the bank that it is missing.",
    "Ты заметил, что кредитной карты нет. Ты пользовался ею в магазине час назад.",
    "Ти помітив, що кредитної картки немає. Ти користувався нею в магазині годину тому.",
    "Zauważyłeś, że brakuje twojej karty kredytowej. Używałeś jej w sklepie godzinę temu."
  ],
  [
    "You are about to start a new medication. You do not understand the instructions on the label.",
    "You should ask a pharmacist or a doctor to explain the instructions.",
    "You shouldn't ask anyone and just guess the dosage.",
    "You should take double the dose to make it work faster.",
    "You shouldn't read the label at all.",
    "Ты собираешься начать принимать новое лекарство. Ты не понимаешь инструкцию на упаковке.",
    "Ти збираєшся почати приймати нові ліки. Ти не розумієш інструкцію на етикетці.",
    "Masz zacząć brać nowy lek. Nie rozumiesz instrukcji na etykiecie."
  ],
  [
    "You are cleaning the bathroom and you open a bottle of strong chemical cleaner. The smell is very sharp in the small room.",
    "You should ventilate the room while using strong cleaners.",
    "You shouldn't open any windows while using chemicals.",
    "You should mix different cleaners together to make it stronger.",
    "You shouldn't read the safety warnings on the bottle.",
    "Ты убираешь ванную и открываешь бутылку сильного химического средства. Запах очень резкий в маленьком помещении.",
    "Ти прибираєш ванну й відкриваєш пляшку сильного хімічного засобу. Запах дуже різкий у маленькому приміщенні.",
    "Sprzątasz łazienkę i otwierasz butelkę silnego środka chemicznego. Zapach jest bardzo ostry w małym pomieszczeniu."
  ],
  [
    "You are about to send a large amount of money online. The recipient name does not match the account details.",
    "You should stop and verify the recipient details first.",
    "You should send the money anyway to finish quickly.",
    "You shouldn't check any numbers or names.",
    "You should hurry and skip confirmation steps.",
    "Ты собираешься перевести большую сумму онлайн. Имя получателя не совпадает с данными счёта.",
    "Ти збираєшся переказати велику суму онлайн. Ім’я отримувача не збігається з даними рахунку.",
    "Masz wysłać dużą kwotę pieniędzy online. Nazwa odbiorcy nie pasuje do danych konta."
  ],
  [
    "You are working outside and dark clouds appear. You hear thunder in the distance.",
    "You should go to a safe place indoors.",
    "You shouldn't worry about lightning at all.",
    "You should hold a metal pole in the open field.",
    "You shouldn't stop working even if the storm gets closer.",
    "Ты работаешь на улице и появляются тёмные тучи. Вдалеке слышен гром.",
    "Ти працюєш надворі й з’являються темні хмари. Удалині чути грім.",
    "Pracujesz na zewnątrz i pojawiają się ciemne chmury. W oddali słychać grzmot."
  ],
  [
    "You are in a quiet library. People around you are reading and studying.",
    "You should speak quietly.",
    "You shouldn't lower your voice in the library.",
    "You should play music on speakers.",
    "You shouldn't respect any rules there.",
    "Ты в тихой библиотеке. Люди вокруг читают и учатся.",
    "Ти в тихій бібліотеці. Люди навколо читають і навчаються.",
    "Jesteś w cichej bibliotece. Ludzie dookoła czytają i uczą się."
  ],
[
    "Should I eat vegetables every day?",
    "Yes, you should eat vegetables every day for good health.",
    "No, you shouldn't eat vegetables every day because they are unhealthy.",
    "Yes, you should eat vegetables every day to gain weight quickly.",
    "No, you shouldn't eat vegetables every day as they have no nutrients.",
    "Должен ли я есть овощи каждый день?",
    "Чи повинен я їсти овочі щодня?",
    "Czy powinienem jeść warzywa codziennie?"
  ],
  [
    "Should I go to bed early?",
    "Yes, you should go to bed early to get enough sleep.",
    "No, you shouldn't go to bed early because sleep is not important.",
    "Yes, you should go to bed early to feel tired all day.",
    "No, you shouldn't go to bed early if you want to be energetic.",
    "Должен ли я ложиться спать рано?",
    "Чи повинен я лягати спати рано?",
    "Czy powinienem kłaść się spać wcześnie?"
  ],
  [
    "Should I brush my teeth twice a day?",
    "Yes, you should brush your teeth twice a day for oral hygiene.",
    "No, you shouldn't brush your teeth twice a day because it's too often.",
    "Yes, you should brush your teeth twice a day to damage your enamel.",
    "No, you shouldn't brush your teeth twice a day to keep them clean.",
    "Должен ли я чистить зубы два раза в день?",
    "Чи повинен я чистити зуби двічі на день?",
    "Czy powinienem myć zęby dwa razy dziennie?"
  ],
  [
    "Should I wear a seatbelt in the car?",
    "Yes, you should wear a seatbelt in the car for safety.",
    "No, you shouldn't wear a seatbelt in the car because it's uncomfortable.",
    "Yes, you should wear a seatbelt in the car to increase risk in accidents.",
    "No, you shouldn't wear a seatbelt in the car to stay protected.",
    "Должен ли я пристегиваться ремнём безопасности в машине?",
    "Чи повинен я пристебуватися ременем безпеки в машині?",
    "Czy powinienem zapinać pas bezpieczeństwa w samochodzie?"
  ],
  [
    "Should I study for exams in advance?",
    "Yes, you should study for exams in advance to do well.",
    "No, you shouldn't study for exams in advance because it's useless.",
    "Yes, you should study for exams in advance to forget everything.",
    "No, you shouldn't study for exams in advance to get good grades.",
    "Должен ли я готовиться к экзаменам заранее?",
    "Чи повинен я готуватися до іспитів заздалегідь?",
    "Czy powinienem uczyć się do egzaminów z wyprzedzeniem?"
  ],
  [
    "Should I drink alcohol in moderation?",
    "No, you shouldn't drink alcohol at all if possible, but if you do, in moderation.",
    "Yes, you should drink alcohol excessively every day.",
    "No, you shouldn't drink alcohol in moderation to stay healthy.",
    "Yes, you should drink alcohol in moderation to harm your liver.",
    "Не должен ли я пить алкоголь в умеренных количествах?",
    "Чи не повинен я пити алкоголь у помірних кількостях?",
    "Czy nie powinienem pić alkoholu z umiarem?"
  ],
  [
    "Should I save money for the future?",
    "Yes, you should save money for the future.",
    "No, you shouldn't save money for the future because it's pointless.",
    "Yes, you should save money for the future to go broke quickly.",
    "No, you shouldn't save money for the future to be financially secure.",
    "Должен ли я копить деньги на будущее?",
    "Чи повинен я заощаджувати гроші на майбутнє?",
    "Czy powinienem oszczędzać pieniądze na przyszłość?"
  ],
  [
    "Should I exercise regularly?",
    "Yes, you should exercise regularly to stay fit.",
    "No, you shouldn't exercise regularly because it's harmful.",
    "Yes, you should exercise regularly to become weak.",
    "No, you shouldn't exercise regularly to maintain health.",
    "Должен ли я регулярно заниматься спортом?",
    "Чи повинен я регулярно займатися спортом?",
    "Czy powinienem regularnie ćwiczyć?"
  ],
  [
    "Should I read books?",
    "Yes, you should read books to expand your knowledge.",
    "No, you shouldn't read books because they are boring.",
    "Yes, you should read books to limit your thinking.",
    "No, you shouldn't read books to learn new things.",
    "Должен ли я читать книги?",
    "Чи повинен я читати книги?",
    "Czy powinienem czytać książki?"
  ],
  [
    "Should I be kind to others?",
    "Yes, you should be kind to others.",
    "No, you shouldn't be kind to others because it's weak.",
    "Yes, you should be kind to others to make enemies.",
    "No, you shouldn't be kind to others to build good relationships.",
    "Должен ли я быть добрым к другим?",
    "Чи повинен я бути добрим до інших?",
    "Czy powinienem być życzliwy dla innych?"
  ],
  [
    "Should I recycle waste?",
    "Yes, you should recycle waste to protect the environment.",
    "No, you shouldn't recycle waste because it's too much effort.",
    "Yes, you should recycle waste to pollute more.",
    "No, you shouldn't recycle waste to help the planet.",
    "Должен ли я сортировать и перерабатывать мусор?",
    "Чи повинен я сортувати та переробляти сміття?",
    "Czy powinienem segregować odpady?"
  ],
  [
    "Should I learn a foreign language?",
    "Yes, you should learn a foreign language for better opportunities.",
    "No, you shouldn't learn a foreign language because it's difficult.",
    "Yes, you should learn a foreign language to limit your communication.",
    "No, you shouldn't learn a foreign language to broaden horizons.",
    "Должен ли я учить иностранный язык?",
    "Чи повинен я вчити іноземну мову?",
    "Czy powinienem uczyć się języka obcego?"
  ],
  [
    "Should I help people in need?",
    "Yes, you should help people in need.",
    "No, you shouldn't help people in need because it's none of your business.",
    "Yes, you should help people in need to feel worse.",
    "No, you shouldn't help people in need to make the world better.",
    "Должен ли я помогать людям в беде?",
    "Чи повинен я допомагати людям у біді?",
    "Czy powinienem pomagać ludziom w potrzebie?"
  ],
  [
    "Should I eat breakfast every morning?",
    "Yes, you should eat breakfast every morning for energy.",
    "No, you shouldn't eat breakfast every morning because it's unnecessary.",
    "Yes, you should eat breakfast every morning to feel hungry all day.",
    "No, you shouldn't eat breakfast every morning to start the day well.",
    "Должен ли я завтракать каждое утро?",
    "Чи повинен я снідати щоранку?",
    "Czy powinienem jeść śniadanie każdego ranka?"
  ],
  [
    "Should I spend time with family?",
    "Yes, you should spend time with family.",
    "No, you shouldn't spend time with family because it's boring.",
    "Yes, you should spend time with family to feel lonely.",
    "No, you shouldn't spend time with family to strengthen bonds.",
    "Должен ли я проводить время с семьёй?",
    "Чи повинен я проводити час із сім'єю?",
    "Czy powinienem spędzać czas z rodziną?"
  ],
  [
    "Should I avoid smoking?",
    "Yes, you should avoid smoking for your health.",
    "No, you shouldn't avoid smoking because it's cool.",
    "Yes, you should avoid smoking to damage your lungs.",
    "No, you shouldn't avoid smoking to live longer.",
    "Должен ли я избегать курения?",
    "Чи повинен я уникати куріння?",
    "Czy powinienem unikać palenia?"
  ],
  [
    "Should I walk more instead of driving?",
    "Yes, you should walk more for exercise and environment.",
    "No, you shouldn't walk more because it's tiring.",
    "Yes, you should walk more to waste time.",
    "No, you shouldn't walk more to stay healthy.",
    "Должен ли я больше ходить пешком вместо езды на машине?",
    "Чи повинен я більше ходити пішки замість їзди на машині?",
    "Czy powinienem więcej chodzić pieszo zamiast jeździć samochodem?"
  ],
  [
    "Should I drink coffee in moderation?",
    "Yes, you should drink coffee in moderation.",
    "No, you shouldn't drink coffee in moderation because it's bad.",
    "Yes, you should drink coffee in moderation to get insomnia.",
    "No, you shouldn't drink coffee in moderation for enjoyment.",
    "Должен ли я пить кофе в умеренных количествах?",
    "Чи повинен я пити каву в помірних кількостях?",
    "Czy powinienem pić kawę z umiarem?"
  ],
  [
    "Should I apologize when I'm wrong?",
    "Yes, you should apologize when you're wrong.",
    "No, you shouldn't apologize when you're wrong because it's weak.",
    "Yes, you should apologize when you're wrong to lose respect.",
    "No, you shouldn't apologize when you're wrong to maintain relationships.",
    "Должен ли я извиняться, когда я не прав?",
    "Чи повинен я вибачатися, коли я неправий?",
    "Czy powinienem przepraszać, kiedy się mylę?"
  ],
  [
    "Should I limit screen time?",
    "Yes, you should limit screen time for better health.",
    "No, you shouldn't limit screen time because it's fun.",
    "Yes, you should limit screen time to strain your eyes more.",
    "No, you shouldn't limit screen time to rest your eyes.",
    "Должен ли я ограничивать время за экраном?",
    "Чи повинен я обмежувати час за екраном?",
    "Czy powinienem ograniczać czas przed ekranem?"
  ],
  [
    "Should I eat fruits daily?",
    "Yes, you should eat fruits daily for vitamins.",
    "No, you shouldn't eat fruits daily because they are expensive.",
    "Yes, you should eat fruits daily to lack nutrients.",
    "No, you shouldn't eat fruits daily for a balanced diet.",
    "Должен ли я есть фрукты ежедневно?",
    "Чи повинен я їсти фрукти щодня?",
    "Czy powinienem jeść owoce codziennie?"
  ],
  [
    "Should I be honest?",
    "Yes, you should be honest in most situations.",
    "No, you shouldn't be honest because it hurts feelings.",
    "Yes, you should be honest to lose friends.",
    "No, you shouldn't be honest to build trust.",
    "Должен ли я быть честным?",
    "Чи повинен я бути чесним?",
    "Czy powinienem być uczciwy?"
  ],
  [
    "Should I get regular health check-ups?",
    "Yes, you should get regular health check-ups.",
    "No, you shouldn't get regular health check-ups because it's scary.",
    "Yes, you should get regular health check-ups to ignore problems.",
    "No, you shouldn't get regular health check-ups for prevention.",
    "Должен ли я проходить регулярные медосмотры?",
    "Чи повинен я проходити регулярні медогляди?",
    "Czy powinienem robić regularne badania lekarskie?"
  ],
  [
    "Should I respect other people's opinions?",
    "Yes, you should respect other people's opinions.",
    "No, you shouldn't respect other people's opinions because they are wrong.",
    "Yes, you should respect other people's opinions to create conflict.",
    "No, you shouldn't respect other people's opinions for harmony.",
    "Должен ли я уважать мнения других людей?",
    "Чи повинен я поважати думки інших людей?",
    "Czy powinienem szanować opinie innych ludzi?"
  ],
  [
    "Should I use sunscreen?",
    "Yes, you should use sunscreen to protect your skin.",
    "No, you shouldn't use sunscreen because it blocks vitamin D.",
    "Yes, you should use sunscreen to get sunburned easily.",
    "No, you shouldn't use sunscreen for skin health.",
    "Должен ли я использовать солнцезащитный крем?",
    "Чи повинен я використовувати сонцезахисний крем?",
    "Czy powinienem używać kremu z filtrem?"
  ],
  [
    "Should I plan my day?",
    "Yes, you should plan your day for productivity.",
    "No, you shouldn't plan your day because plans fail.",
    "Yes, you should plan your day to waste time.",
    "No, you shouldn't plan your day to be organized.",
    "Должен ли я планировать свой день?",
    "Чи повинен я планувати свій день?",
    "Czy powinienem planować swój dzień?"
  ],
  [
    "Should I forgive others?",
    "Yes, you should forgive others for your peace of mind.",
    "No, you shouldn't forgive others because they don't deserve it.",
    "Yes, you should forgive others to hold grudges forever.",
    "No, you shouldn't forgive others to move on.",
    "Должен ли я прощать других?",
    "Чи повинен я пробачати інших?",
    "Czy powinienem przebaczać innym?"
  ],
  [
    "Should I drink green tea?",
    "Yes, you should drink green tea for its benefits.",
    "No, you shouldn't drink green tea because it's bitter.",
    "Yes, you should drink green tea to gain weight.",
    "No, you shouldn't drink green tea for antioxidants.",
    "Должен ли я пить зелёный чай?",
    "Чи повинен я пити зелений чай?",
    "Czy powinienem pić zieloną herbatę?"
  ],
  [
    "Should I take breaks while working?",
    "Yes, you should take breaks while working for better focus.",
    "No, you shouldn't take breaks while working because it's lazy.",
    "Yes, you should take breaks while working to reduce productivity.",
    "No, you shouldn't take breaks while working to stay efficient.",
    "Должен ли я делать перерывы во время работы?",
    "Чи повинен я робити перерви під час роботи?",
    "Czy powinienem robić przerwy podczas pracy?"
  ],
  [
    "Should I listen to music while studying?",
    "No, you shouldn't listen to music while studying if it distracts you.",
    "Yes, you should listen to loud music while studying to concentrate better.",
    "No, you shouldn't listen to music while studying to improve focus.",
    "Yes, you should listen to music while studying to remember less.",
    "Должен ли я слушать музыку во время учёбы?",
    "Чи повинен я слухати музику під час навчання?",
    "Czy powinienem słuchać muzyki podczas nauki?"
  ],
  [
    "Should I keep promises?",
    "Yes, you should keep promises to be trustworthy.",
    "No, you shouldn't keep promises because circumstances change.",
    "Yes, you should keep promises to lose credibility.",
    "No, you shouldn't keep promises to be reliable.",
    "Должен ли я держать обещания?",
    "Чи повинен я тримати обіцянки?",
    "Czy powinienem dotrzymywać obietnic?"
  ],
  [
    "Should I eat less sugar?",
    "Yes, you should eat less sugar for health.",
    "No, you shouldn't eat less sugar because it's tasty.",
    "Yes, you should eat less sugar to get diabetes faster.",
    "No, you shouldn't eat less sugar to stay healthy.",
    "Должен ли я есть меньше сахара?",
    "Чи повинен я їсти менше цукру?",
    "Czy powinienem jeść mniej cukru?"
  ],
  [
    "Should I learn to cook?",
    "Yes, you should learn to cook for independence.",
    "No, you shouldn't learn to cook because takeaways are easier.",
    "Yes, you should learn to cook to depend on others.",
    "No, you shouldn't learn to cook for healthy meals.",
    "Должен ли я научиться готовить?",
    "Чи повинен я навчитися готувати?",
    "Czy powinienem nauczyć się gotować?"
  ],
  [
    "Should I meditate?",
    "Yes, you should meditate for mental clarity.",
    "No, you shouldn't meditate because it's boring.",
    "Yes, you should meditate to increase stress.",
    "No, you shouldn't meditate for relaxation.",
    "Должен ли я медитировать?",
    "Чи повинен я медитувати?",
    "Czy powinienem medytować?"
  ],
  [
    "Should I say thank you?",
    "Yes, you should say thank you to show gratitude.",
    "No, you shouldn't say thank you because it's unnecessary.",
    "Yes, you should say thank you to seem ungrateful.",
    "No, you shouldn't say thank you for politeness.",
    "Должен ли я говорить спасибо?",
    "Чи повинен я казати дякую?",
    "Czy powinienem mówić dziękuję?"
  ],
  [
    "Should I avoid junk food?",
    "Yes, you should avoid junk food for better health.",
    "No, you shouldn't avoid junk food because it's convenient.",
    "Yes, you should avoid junk food to gain nutrients.",
    "No, you shouldn't avoid junk food to feel energetic.",
    "Должен ли я избегать фастфуда?",
    "Чи повинен я уникати фастфуду?",
    "Czy powinienem unikać fast foodów?"
  ],
  [
    "Should I set goals?",
    "Yes, you should set goals to achieve more.",
    "No, you shouldn't set goals because they disappoint.",
    "Yes, you should set goals to fail constantly.",
    "No, you shouldn't set goals for motivation.",
    "Должен ли я ставить цели?",
    "Чи повинен я ставити цілі?",
    "Czy powinienem wyznaczać cele?"
  ],
  [
    "Should I drink water when thirsty?",
    "Yes, you should drink water when thirsty.",
    "No, you shouldn't drink water when thirsty because ignore it.",
    "Yes, you should drink water when thirsty to stay dehydrated.",
    "No, you shouldn't drink water when thirsty for hydration.",
    "Должен ли я пить воду, когда хочу пить?",
    "Чи повинен я пити воду, коли хочу пити?",
    "Czy powinienem pić wodę, kiedy jestem spragniony?"
  ],
  [
    "Should I smile more?",
    "Yes, you should smile more to feel happier.",
    "No, you shouldn't smile more because it's fake.",
    "Yes, you should smile more to feel sad.",
    "No, you shouldn't smile more for positive mood.",
    "Должен ли я больше улыбаться?",
    "Чи повинен я більше посміхатися?",
    "Czy powinienem więcej się uśmiechać?"
  ],
  [
    "Should I back up important files?",
    "Yes, you should back up important files.",
    "No, you shouldn't back up important files because it's time-consuming.",
    "Yes, you should back up important files to lose data easily.",
    "No, you shouldn't back up important files for safety.",
    "Должен ли я делать резервные копии важных файлов?",
    "Чи повинен я робити резервні копії важливих файлів?",
    "Czy powinienem robić kopie zapasowe ważnych plików?"
  ],
  [
    "Should I learn first aid?",
    "Yes, you should learn first aid to help in emergencies.",
    "No, you shouldn't learn first aid because it's complicated.",
    "Yes, you should learn first aid to be helpless.",
    "No, you shouldn't learn first aid for preparedness.",
    "Должен ли я изучить первую помощь?",
    "Чи повинен я вивчити першу допомогу?",
    "Czy powinienem nauczyć się pierwszej pomocy?"
  ],
  [
    "Should I turn off lights when leaving a room?",
    "Yes, you should turn off lights to save energy.",
    "No, you shouldn't turn off lights because it's minor.",
    "Yes, you should turn off lights to waste electricity.",
    "No, you shouldn't turn off lights for environment.",
    "Должен ли я выключать свет, выходя из комнаты?",
    "Чи повинен я вимикати світло, виходячи з кімнати?",
    "Czy powinienem wyłączać światło wychodząc z pokoju?"
  ],
  [
    "Should I listen actively?",
    "Yes, you should listen actively in conversations.",
    "No, you shouldn't listen actively because it's effort.",
    "Yes, you should listen actively to misunderstand.",
    "No, you shouldn't listen actively for better communication.",
    "Должен ли я активно слушать?",
    "Чи повинен я активно слухати?",
    "Czy powinienem aktywnie słuchać?"
  ],
  [
    "Should I wear a helmet when cycling?",
    "Yes, you should wear a helmet when cycling for safety.",
    "No, you shouldn't wear a helmet because it's uncomfortable.",
    "Yes, you should wear a helmet to increase head injury risk.",
    "No, you shouldn't wear a helmet for protection.",
    "Должен ли я надевать шлем при езде на велосипеде?",
    "Чи повинен я одягати шолом під час їзди на велосипеді?",
    "Czy powinienem nosić kask podczas jazdy na rowerze?"
  ],
  [
    "Should I express my feelings?",
    "Yes, you should express your feelings healthily.",
    "No, you shouldn't express your feelings because it's weak.",
    "Yes, you should express your feelings to bottle them up.",
    "No, you shouldn't express your feelings for mental health.",
    "Должен ли я выражать свои чувства?",
    "Чи повинен я виражати свої почуття?",
    "Czy powinienem wyrażać swoje uczucia?"
  ],
  [
    "Should I avoid procrastination?",
    "Yes, you should avoid procrastination for productivity.",
    "No, you shouldn't avoid procrastination because it's normal.",
    "Yes, you should avoid procrastination to stress more.",
    "No, you shouldn't avoid procrastination to get things done.",
    "Должен ли я избегать прокрастинации?",
    "Чи повинен я уникати прокрастинації?",
    "Czy powinienem unikać prokrastynacji?"
  ],
  [
    "Should I appreciate small things?",
    "Yes, you should appreciate small things for happiness.",
    "No, you shouldn't appreciate small things because they are insignificant.",
    "Yes, you should appreciate small things to feel unhappy.",
    "No, you shouldn't appreciate small things for gratitude.",
    "Должен ли я ценить мелочи?",
    "Чи повинен я цінувати дрібниці?",
    "Czy powinienem doceniać drobne rzeczy?"
  ],
  [
    "Should I keep learning new things?",
    "Yes, you should keep learning new things throughout life.",
    "No, you shouldn't keep learning because school is over.",
    "Yes, you should keep learning to stay ignorant.",
    "No, you shouldn't keep learning for personal growth.",
    "Должен ли я продолжать учиться новому?",
    "Чи повинен я продовжувати вчитися новому?",
    "Czy powinienem ciągle uczyć się nowych rzeczy?"
  ],

[
    "Should I drink plenty of water every day?",
    "Yes, you must drink plenty of water every day to stay hydrated.",
    "No, you shouldn't drink plenty of water because it can cause overhydration.",
    "Yes, you can drink plenty of water every day if you want to feel constantly thirsty.",
    "No, you don't have to drink plenty of water every day to maintain good health.",
    "Должен ли я пить много воды каждый день?",
    "Чи повинен я пити багато води щодня?",
    "Czy powinienem pić dużo wody codziennie?"
  ],
  [
    "Should I exercise regularly?",
    "Yes, you should exercise regularly to keep fit.",
    "No, you mustn't exercise regularly because it's dangerous.",
    "Yes, you can exercise regularly only if you want to get exhausted quickly.",
    "No, you don't have to exercise regularly to have strong muscles.",
    "Должен ли я регулярно заниматься спортом?",
    "Чи повинен я регулярно займатися спортом?",
    "Czy powinienem regularnie ćwiczyć?"
  ],
  [
    "Should I eat breakfast every morning?",
    "Yes, you ought to eat breakfast every morning for better energy.",
    "No, you needn't eat breakfast every morning because it's optional.",
    "Yes, you may eat breakfast every morning to feel hungry all day.",
    "No, you can't eat breakfast every morning if you want to start the day well.",
    "Должен ли я завтракать каждое утро?",
    "Чи повинен я снідати щоранку?",
    "Czy powinienem jeść śniadanie każdego ranka?"
  ],
  [
    "Should I wear a seatbelt in the car?",
    "Yes, you have to wear a seatbelt in the car for safety.",
    "No, you don't have to wear a seatbelt if you're driving slowly.",
    "Yes, you can wear a seatbelt in the car to increase risk in accidents.",
    "No, you mustn't wear a seatbelt to stay protected.",
    "Должен ли я пристегиваться ремнём безопасности в машине?",
    "Чи повинен я пристебуватися ременем безпеки в машині?",
    "Czy powinienem zapinać pas bezpieczeństwa w samochodzie?"
  ],
  [
    "Should I brush my teeth twice a day?",
    "Yes, you should brush your teeth twice a day.",
    "No, you needn't brush your teeth twice a day – once is enough.",
    "Yes, you must brush your teeth twice a day to damage your enamel.",
    "No, you can't brush your teeth twice a day for good oral health.",
    "Должен ли я чистить зубы два раза в день?",
    "Чи повинен я чистити зуби двічі на день?",
    "Czy powinienem myć zęby dwa razy dziennie?"
  ],
  [
    "Should I get enough sleep?",
    "Yes, you must get enough sleep to function properly.",
    "No, you shouldn't get enough sleep because it wastes time.",
    "Yes, you can get enough sleep if you want to feel tired all day.",
    "No, you don't have to get enough sleep to be productive.",
    "Должен ли я высыпаться?",
    "Чи повинен я висипатися?",
    "Czy powinienem się wysypiać?"
  ],
  [
    "Should I save money?",
    "Yes, you ought to save money for emergencies.",
    "No, you mustn't save money – spend everything.",
    "Yes, you may save money to go broke faster.",
    "No, you needn't save money for financial security.",
    "Должен ли я копить деньги?",
    "Чи повинен я заощаджувати гроші?",
    "Czy powinienem oszczędzać pieniądze?"
  ],
  [
    "Should I read books?",
    "Yes, you should read books to broaden your mind.",
    "No, you don't have to read books – watching videos is better.",
    "Yes, you can read books to limit your knowledge.",
    "No, you must read books to stay ignorant.",
    "Должен ли я читать книги?",
    "Чи повинен я читати книги?",
    "Czy powinienem czytać książki?"
  ],
  [
    "Should I avoid smoking?",
    "Yes, you shouldn't smoke for your health.",
    "No, you can smoke if you enjoy it.",
    "Yes, you must smoke to live longer.",
    "No, you have to smoke to avoid lung problems.",
    "Должен ли я избегать курения?",
    "Чи повинен я уникати куріння?",
    "Czy powinienem unikać palenia?"
  ],
  [
    "Should I learn foreign languages?",
    "Yes, you should learn foreign languages for better opportunities.",
    "No, you needn't learn foreign languages in the age of translators.",
    "Yes, you may learn foreign languages to complicate communication.",
    "No, you can't learn foreign languages to travel easily.",
    "Должен ли я учить иностранные языки?",
    "Чи повинен я вчити іноземні мови?",
    "Czy powinienem uczyć się języków obcych?"
  ],
  [
    "Should I recycle?",
    "Yes, you ought to recycle to help the environment.",
    "No, you mustn't recycle – it's too much hassle.",
    "Yes, you can recycle to increase pollution.",
    "No, you don't have to recycle for a cleaner planet.",
    "Должен ли я сортировать мусор для переработки?",
    "Чи повинен я сортувати сміття для переробки?",
    "Czy powinienem segregować śmieci?"
  ],
  [
    "Should I be kind to others?",
    "Yes, you should be kind to others.",
    "No, you shouldn't be kind – people take advantage.",
    "Yes, you must be kind to make enemies.",
    "No, you needn't be kind to build relationships.",
    "Должен ли я быть добрым к другим?",
    "Чи повинен я бути добрим до інших?",
    "Czy powinienem być życzliwy dla innych?"
  ],
  [
    "Should I eat vegetables daily?",
    "Yes, you have to eat vegetables daily for vitamins.",
    "No, you can skip vegetables – meat is enough.",
    "Yes, you should eat vegetables daily to lack nutrients.",
    "No, you mustn't eat vegetables for balanced diet.",
    "Должен ли я есть овощи ежедневно?",
    "Чи повинен я їсти овочі щодня?",
    "Czy powinienem jeść warzywa codziennie?"
  ],
  [
    "Should I spend time with family?",
    "Yes, you should spend time with family.",
    "No, you don't have to – friends are more important.",
    "Yes, you may spend time with family to feel lonely.",
    "No, you can't spend time with family to strengthen bonds.",
    "Должен ли я проводить время с семьёй?",
    "Чи повинен я проводити час із сім'єю?",
    "Czy powinienem spędzać czas z rodziną?"
  ],
  [
    "Should I study hard?",
    "Yes, you must study hard to achieve good results.",
    "No, you needn't study hard – luck matters more.",
    "Yes, you can study hard to fail exams.",
    "No, you shouldn't study hard for knowledge.",
    "Должен ли я усердно учиться?",
    "Чи повинен я старанно вчитися?",
    "Czy powinienem uczyć się pilnie?"
  ],
  [
    "Should I use sunscreen?",
    "Yes, you should use sunscreen to protect skin.",
    "No, you mustn't use sunscreen – natural tan is better.",
    "Yes, you have to use sunscreen to get sunburned.",
    "No, you don't have to use sunscreen for skin health.",
    "Должен ли я использовать солнцезащитный крем?",
    "Чи повинен я використовувати сонцезахисний крем?",
    "Czy powinienem używać kremu z filtrem?"
  ],
  [
    "Should I apologize when wrong?",
    "Yes, you ought to apologize when you're wrong.",
    "No, you shouldn't apologize – it shows weakness.",
    "Yes, you can apologize to lose respect.",
    "No, you needn't apologize to maintain relationships.",
    "Должен ли я извиняться, когда не прав?",
    "Чи повинен я вибачатися, коли неправий?",
    "Czy powinienem przepraszać, kiedy się mylę?"
  ],
  [
    "Should I limit screen time?",
    "Yes, you should limit screen time for eye health.",
    "No, you can use screens as much as you want.",
    "Yes, you must limit screen time to strain eyes more.",
    "No, you don't have to limit screen time for better sleep.",
    "Должен ли я ограничивать время за экраном?",
    "Чи повинен я обмежувати час за екраном?",
    "Czy powinienem ograniczać czas przed ekranem?"
  ],
  [
    "Should I eat fruits every day?",
    "Yes, you should eat fruits every day.",
    "No, you needn't eat fruits – they're too sweet.",
    "Yes, you may eat fruits every day to lack vitamins.",
    "No, you can't eat fruits every day for immunity.",
    "Должен ли я есть фрукты каждый день?",
    "Чи повинен я їсти фрукти щодня?",
    "Czy powinienem jeść owoce codziennie?"
  ],
  [
    "Should I be honest?",
    "Yes, you have to be honest in most cases.",
    "No, you shouldn't be honest – white lies are okay.",
    "Yes, you must be honest to lose trust.",
    "No, you ought not to be honest for good relationships.",
    "Должен ли я быть честным?",
    "Чи повинен я бути чесним?",
    "Czy powinienem być uczciwy?"
  ],
  [
    "Should I do regular health check-ups?",
    "Yes, you should do regular health check-ups.",
    "No, you don't have to – only when sick.",
    "Yes, you can do regular check-ups to ignore early signs.",
    "No, you must do regular check-ups for prevention.",
    "Должен ли я проходить регулярные медосмотры?",
    "Чи повинен я проходити регулярні медогляди?",
    "Czy powinienem robić regularne badania lekarskie?"
  ],
  [
    "Should I respect others' opinions?",
    "Yes, you ought to respect others' opinions.",
    "No, you needn't respect wrong opinions.",
    "Yes, you should respect others' opinions to create arguments.",
    "No, you can't respect others' opinions for harmony.",
    "Должен ли я уважать мнения других?",
    "Чи повинен я поважати думки інших?",
    "Czy powinienem szanować opinie innych?"
  ],
  [
    "Should I walk more?",
    "Yes, you should walk more for exercise.",
    "No, you mustn't walk more – drive everywhere.",
    "Yes, you have to walk more to get tired faster.",
    "No, you may walk more for better fitness.",
    "Должен ли я больше ходить пешком?",
    "Чи повинен я більше ходити пішки?",
    "Czy powinienem więcej chodzić pieszo?"
  ],
  [
    "Should I plan my day?",
    "Yes, you can plan your day for productivity.",
    "No, you shouldn't plan – go with the flow.",
    "Yes, you must plan your day to waste time.",
    "No, you don't have to plan your day to be organized.",
    "Должен ли я планировать свой день?",
    "Чи повинен я планувати свій день?",
    "Czy powinienem planować swój dzień?"
  ],
  [
    "Should I forgive others?",
    "Yes, you should forgive others for peace.",
    "No, you can't forgive serious wrongs.",
    "Yes, you ought to forgive to hold grudges.",
    "No, you needn't forgive to move on.",
    "Должен ли я прощать других?",
    "Чи повинен я пробачати інших?",
    "Czy powinienem przebaczać innym?"
  ],
  [
    "Should I take breaks at work?",
    "Yes, you must take breaks to stay focused.",
    "No, you shouldn't take breaks – work non-stop.",
    "Yes, you can take breaks to reduce efficiency.",
    "No, you have to take breaks for better performance.",
    "Должен ли я делать перерывы на работе?",
    "Чи повинен я робити перерви на роботі?",
    "Czy powinienem robić przerwy w pracy?"
  ],
  [
    "Should I keep promises?",
    "Yes, you have to keep promises.",
    "No, you may break small promises.",
    "Yes, you should keep promises to lose trust.",
    "No, you don't have to keep promises to be reliable.",
    "Должен ли я держать обещания?",
    "Чи повинен я тримати обіцянки?",
    "Czy powinienem dotrzymywać obietnic?"
  ],
  [
    "Should I reduce sugar intake?",
    "Yes, you should reduce sugar intake.",
    "No, you can eat as much sugar as you like.",
    "Yes, you must reduce sugar to harm health.",
    "No, you needn't reduce sugar for better teeth.",
    "Должен ли я сократить потребление сахара?",
    "Чи повинен я скоротити споживання цукру?",
    "Czy powinienem zmniejszyć spożycie cukru?"
  ],
  [
    "Should I learn to cook?",
    "Yes, you ought to learn to cook.",
    "No, you don't have to – order delivery.",
    "Yes, you can learn to cook to eat unhealthy food.",
    "No, you must learn to cook for independence.",
    "Должен ли я научиться готовить?",
    "Чи повинен я навчитися готувати?",
    "Czy powinienem nauczyć się gotować?"
  ],
  [
    "Should I meditate daily?",
    "Yes, you should meditate daily for calm.",
    "No, you needn't meditate – it's not for everyone.",
    "Yes, you may meditate to increase stress.",
    "No, you can't meditate for mental health.",
    "Должен ли я медитировать ежедневно?",
    "Чи повинен я медитувати щодня?",
    "Czy powinienem medytować codziennie?"
  ],
  [
    "Should I say thank you?",
    "Yes, you must say thank you for politeness.",
    "No, you shouldn't say thank you – it's obvious.",
    "Yes, you have to say thank you to seem rude.",
    "No, you may say thank you for gratitude.",
    "Должен ли я говорить спасибо?",
    "Чи повинен я казати дякую?",
    "Czy powinienem mówić dziękuję?"
  ],
  [
    "Should I avoid junk food?",
    "Yes, you should avoid junk food.",
    "No, you can eat junk food occasionally.",
    "Yes, you ought to avoid junk food to gain weight fast.",
    "No, you must avoid junk food for energy.",
    "Должен ли я избегать фастфуда?",
    "Чи повинен я уникати фастфуду?",
    "Czy powinienem unikać fast foodów?"
  ],
  [
    "Should I set goals?",
    "Yes, you have to set goals for motivation.",
    "No, you don't have to set goals – life happens.",
    "Yes, you should set goals to fail constantly.",
    "No, you needn't set goals for success.",
    "Должен ли я ставить цели?",
    "Чи повинен я ставити цілі?",
    "Czy powinienem wyznaczać cele?"
  ],
  [
    "Should I drink when thirsty?",
    "Yes, you must drink when thirsty.",
    "No, you can ignore thirst sometimes.",
    "Yes, you shouldn't drink when thirsty to stay hydrated.",
    "No, you have to drink when thirsty to dehydrate.",
    "Должен ли я пить, когда хочу пить?",
    "Чи повинен я пити, коли хочу пити?",
    "Czy powinienem pić, kiedy jestem spragniony?"
  ],
  [
    "Should I smile more?",
    "Yes, you should smile more.",
    "No, you mustn't smile – be serious.",
    "Yes, you can smile more to feel worse.",
    "No, you don't have to smile more for happiness.",
    "Должен ли я больше улыбаться?",
    "Чи повинен я більше посміхатися?",
    "Czy powinienem więcej się uśmiechać?"
  ],
  [
    "Should I backup files?",
    "Yes, you ought to backup important files.",
    "No, you needn't backup – cloud is enough.",
    "Yes, you may backup files to lose data easily.",
    "No, you can't backup files for safety.",
    "Должен ли я делать резервные копии файлов?",
    "Чи повинен я робити резервні копії файлів?",
    "Czy powinienem robić kopie zapasowe plików?"
  ],
  [
    "Should I learn first aid?",
    "Yes, you should learn first aid.",
    "No, you don't have to – professionals handle it.",
    "Yes, you must learn first aid to be helpless.",
    "No, you have to learn first aid for emergencies.",
    "Должен ли я изучить первую помощь?",
    "Чи повинен я вивчити першу допомогу?",
    "Czy powinienem nauczyć się pierwszej pomocy?"
  ],
  [
    "Should I turn off lights?",
    "Yes, you should turn off lights when leaving.",
    "No, you can leave lights on.",
    "Yes, you ought to turn off lights to waste energy.",
    "No, you must turn off lights for savings.",
    "Должен ли я выключать свет, уходя из комнаты?",
    "Чи повинен я вимикати світло, виходячи з кімнати?",
    "Czy powinienem wyłączać światło wychodząc z pokoju?"
  ],
  [
    "Should I listen actively?",
    "Yes, you have to listen actively.",
    "No, you shouldn't – think about your response.",
    "Yes, you can listen actively to misunderstand.",
    "No, you needn't listen actively for communication.",
    "Должен ли я активно слушать?",
    "Чи повинен я активно слухати?",
    "Czy powinienem aktywnie słuchać?"
  ],
  [
    "Should I wear a helmet when cycling?",
    "Yes, you must wear a helmet when cycling.",
    "No, you don't have to if riding slowly.",
    "Yes, you should wear a helmet to risk injury.",
    "No, you may wear a helmet for protection.",
    "Должен ли я надевать шлем на велосипеде?",
    "Чи повинен я одягати шолом на велосипеді?",
    "Czy powinienem nosić kask na rowerze?"
  ],
  [
    "Should I express feelings?",
    "Yes, you should express feelings healthily.",
    "No, you mustn't express – keep inside.",
    "Yes, you can express feelings to bottle them up.",
    "No, you have to express feelings for mental health.",
    "Должен ли я выражать чувства?",
    "Чи повинен я виражати почуття?",
    "Czy powinienem wyrażać uczucia?"
  ],
  [
    "Should I avoid procrastination?",
    "Yes, you ought to avoid procrastination.",
    "No, you can procrastinate – it's normal.",
    "Yes, you must avoid procrastination to stress more.",
    "No, you shouldn't avoid procrastination for productivity.",
    "Должен ли я избегать прокрастинации?",
    "Чи повинен я уникати прокрастинації?",
    "Czy powinienem unikać prokrastynacji?"
  ],
  [
    "Should I appreciate small things?",
    "Yes, you should appreciate small things.",
    "No, you needn't – focus on big achievements.",
    "Yes, you may appreciate small things to be unhappy.",
    "No, you don't have to appreciate small things for joy.",
    "Должен ли я ценить мелочи?",
    "Чи повинен я цінувати дрібниці?",
    "Czy powinienem doceniać drobiazgi?"
  ],
  [
    "Should I continue learning?",
    "Yes, you have to continue learning lifelong.",
    "No, you can stop learning after school.",
    "Yes, you should continue learning to stay behind.",
    "No, you must continue learning for growth.",
    "Должен ли я продолжать учиться всю жизнь?",
    "Чи повинен я продовжувати вчитися все життя?",
    "Czy powinienem uczyć się przez całe życie?"
  ],
  [
    "Should I help others?",
    "Yes, you should help others when you can.",
    "No, you mustn't help – mind your business.",
    "Yes, you ought to help others to feel worse.",
    "No, you needn't help others to make difference.",
    "Должен ли я помогать другим?",
    "Чи повинен я допомагати іншим?",
    "Czy powinienem pomagać innym?"
  ],
  [
    "Should I drink green tea?",
    "Yes, you can drink green tea for antioxidants.",
    "No, you shouldn't drink green tea – coffee is better.",
    "Yes, you must drink green tea to gain weight.",
    "No, you have to drink green tea for health benefits.",
    "Должен ли я пить зелёный чай?",
    "Чи повинен я пити зелений чай?",
    "Czy powinienem pić zieloną herbatę?"
  ],
  [
    "Should I wash hands before eating?",
    "Yes, you must wash hands before eating.",
    "No, you don't have to if they're clean.",
    "Yes, you should wash hands to spread germs.",
    "No, you can wash hands for hygiene.",
    "Должен ли я мыть руки перед едой?",
    "Чи повинен я мити руки перед їжею?",
    "Czy powinienem myć ręce przed jedzeniem?"
  ],
  [
    "Should I go to bed early?",
    "Yes, you ought to go to bed early.",
    "No, you may stay up late.",
    "Yes, you have to go to bed early to lack sleep.",
    "No, you shouldn't go to bed early for rest.",
    "Должен ли я ложиться спать рано?",
    "Чи повинен я лягати спати рано?",
    "Czy powinienem kłaść się spać wcześnie?"
  ],
  [
    "Should I be punctual?",
    "Yes, you should be punctual.",
    "No, you can be late sometimes.",
    "Yes, you must be punctual to miss opportunities.",
    "No, you needn't be punctual for respect.",
    "Должен ли я быть пунктуальным?",
    "Чи повинен я бути пунктуальним?",
    "Czy powinienem być punktualny?"
  ],
  
];

// Расширение тестов за счёт подмены синонимов
unit32.push(...extending(unit32, 'should ', 'ought to '));
unit32.push(...extending(unit32, "shouldn't ", 'should not '));
unit32.push(...extending(unit32, "shouldn't ", 'ought not to '));
unit32.push(...extending(unit32, "shouldn't ", "oughtn't to "));
console.log(unit32.length);

// Если это свойство есть, то оно попадает в заголовок теста
unit32.nameLeson = "Should";

//--созданными предложениями.
unit32.lengthTrue = 5;

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit32.push(...extendForArray(unit32));

export { unit32 };


