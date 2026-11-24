import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';
import { extending } from './extend/extending.js';

const unit41 = [

[
"I've lost my key.",
"Have you?",
"Are you?",
"Don't you?",
"Did you?",
"Я потерял свой ключ.",
"Я загубив свій ключ.",
"Zgubiłem klucz."
],
[
"I'm tired.",
"Are you?",
"Have you?",
"Don't you?",
"Did you?",
"Я устал.",
"Я втомився.",
"Jestem zmęczony."
],
[
"We bought a new car.",
"Did you?",
"Have you?",
"Are you?",
"Don't you?",
"Мы купили новую машину.",
"Ми купили нову машину.",
"Kupiliśmy nowy samochód."
],
[
"I can't swim.",
"Can't you?",
"Do you?",
"Have you?",
"Are you?",
"Я не умею плавать.",
"Я не вмію плавати.",
"Nie umiem pływać."
],
[
"Kate doesn't eat meat.",
"Doesn't she?",
"Is she?",
"Has she?",
"Won't she?",
"Кейт не ест мясо.",
"Кейт не їсть м'яса.",
"Kate nie je mięsa."
],
[
"I was late yesterday.",
"Were you?",
"Have you?",
"Do you?",
"Are you?",
"Я вчера опоздал.",
"Я вчора запізнився.",
"Wczoraj się spóźniłem."
],
[
"Tom has gone home.",
"Has he?",
"Is he?",
"Did he?",
"Does he?",
"Том ушёл домой.",
"Том пішов додому.",
"Tom poszedł do domu."
],
[
"I don't like coffee.",
"Don't you?",
"Are you?",
"Have you?",
"Didn't you?",
"Я не люблю кофе.",
"Я не люблю каву.",
"Nie lubię kawy."
],
[
"We'll be there soon.",
"Will you?",
"Have you?",
"Do you?",
"Were you?",
"Мы скоро будем там.",
"Ми скоро будемо там.",
"Wkrótce tam będziemy."
],
[
"Sarah is ill.",
"Is she?",
"Has she?",
"Did she?",
"Does she?",
"Сара больна.",
"Сара хвора.",
"Sarah jest chora."
],
[
"I've never been to London.",
"Have you?",
"Are you?",
"Did you?",
"Don't you?",
"Я никогда не был в Лондоне.",
"Я ніколи не був у Лондоні.",
"Nigdy nie byłem w Londynie."
],
[
"They live in Canada.",
"Do they?",
"Have they?",
"Are they?",
"Will they?",
"Они живут в Канаде.",
"Вони живуть у Канаді.",
"Mieszkają w Kanadzie."
],
[
"I wasn't sleeping.",
"Weren't you?",
"Don't you?",
"Have you?",
"Are you?",
"Я не спал.",
"Я не спав.",
"Nie spałem."
],
[
"We've finished the work.",
"Have you?",
"Did you?",
"Are you?",
"Were you?",
"Мы закончили работу.",
"Ми закінчили роботу.",
"Skończyliśmy pracę."
],
[
"My sister can drive.",
"Can she?",
"Does she?",
"Has she?",
"Is she?",
"Моя сестра умеет водить.",
"Моя сестра вміє водити.",
"Moja siostra umie prowadzić."
],
[
"I didn't see Mike.",
"Didn't you?",
"Don't you?",
"Haven't you?",
"Aren't you?",
"Я не видел Майка.",
"Я не бачив Майка.",
"Nie widziałem Mike'a."
],
[
"The shop is closed.",
"Is it?",
"Has it?",
"Does it?",
"Did it?",
"Магазин закрыт.",
"Магазин зачинений.",
"Sklep jest zamknięty."
],
[
"We were surprised.",
"Were you?",
"Are you?",
"Have you?",
"Do you?",
"Мы были удивлены.",
"Ми були здивовані.",
"Byliśmy zaskoczeni."
],
[
"John doesn't work here.",
"Doesn't he?",
"Isn't he?",
"Hasn't he?",
"Won't he?",
"Джон здесь не работает.",
"Джон тут не працює.",
"John tu nie pracuje."
],
[
"I'll call you tomorrow.",
"Will you?",
"Do you?",
"Have you?",
"Did you?",
"Я позвоню тебе завтра.",
"Я подзвоню тобі завтра.",
"Zadzwonię do ciebie jutro."
],

[
"They've sold their house.",
"Have they?",
"Did they?",
"Are they?",
"Will they?",
"Они продали свой дом.",
"Вони продали свій будинок.",
"Sprzedali swój dom."
],
[
"I can speak Spanish.",
"Can you?",
"Do you?",
"Have you?",
"Are you?",
"Я умею говорить по-испански.",
"Я вмію говорити іспанською.",
"Umiem mówić po hiszpańsku."
],
[
"She isn't coming tonight.",
"Isn't she?",
"Doesn't she?",
"Hasn't she?",
"Won't she?",
"Она не придёт сегодня вечером.",
"Вона не прийде сьогодні ввечері.",
"Nie przyjdzie dziś wieczorem."
],
[
"We were very busy.",
"Were you?",
"Are you?",
"Have you?",
"Do you?",
"Мы были очень заняты.",
"Ми були дуже зайняті.",
"Byliśmy bardzo zajęci."
],
[
"I've seen that movie.",
"Have you?",
"Did you?",
"Were you?",
"Do you?",
"Я видел этот фильм.",
"Я бачив цей фільм.",
"Widziałem ten film."
],
[
"Tom works in a bank.",
"Does he?",
"Is he?",
"Has he?",
"Did he?",
"Том работает в банке.",
"Том працює в банку.",
"Tom pracuje w banku."
],
[
"I won't be late.",
"Won't you?",
"Don't you?",
"Haven't you?",
"Didn't you?",
"Я не опоздаю.",
"Я не запізнюся.",
"Nie spóźnię się."
],
[
"They aren't ready yet.",
"Aren't they?",
"Haven't they?",
"Didn't they?",
"Don't they?",
"Они ещё не готовы.",
"Вони ще не готові.",
"Oni jeszcze nie są gotowi."
],
[
"I forgot her name.",
"Did you?",
"Have you?",
"Are you?",
"Do you?",
"Я забыл её имя.",
"Я забув її ім'я.",
"Zapomniałem jej imienia."
],
[
"Mary has three children.",
"Does she?",
"Has she?",
"Is she?",
"Did she?",
"У Мэри трое детей.",
"У Мері троє дітей.",
"Mary ma troje dzieci."
],
[
"We can't stay longer.",
"Can't you?",
"Won't you?",
"Don't you?",
"Haven't you?",
"Мы не можем остаться дольше.",
"Ми не можемо залишитися довше.",
"Nie możemy zostać dłużej."
],
[
"I was born in 1990.",
"Were you?",
"Are you?",
"Have you?",
"Do you?",
"Я родился в 1990 году.",
"Я народився у 1990 році.",
"Urodziłem się w 1990 roku."
],
[
"The children are asleep.",
"Are they?",
"Were they?",
"Do they?",
"Have they?",
"Дети спят.",
"Діти сплять.",
"Dzieci śpią."
],
[
"I haven't finished yet.",
"Haven't you?",
"Don't you?",
"Didn't you?",
"Aren't you?",
"Я ещё не закончил.",
"Я ще не закінчив.",
"Jeszcze nie skończyłem."
],
[
"We met Sarah yesterday.",
"Did you?",
"Have you?",
"Are you?",
"Do you?",
"Мы встретили Сару вчера.",
"Ми зустріли Сару вчора.",
"Spotkaliśmy Sarę wczoraj."
],
[
"My brother can cook.",
"Can he?",
"Does he?",
"Has he?",
"Is he?",
"Мой брат умеет готовить.",
"Мій брат уміє готувати.",
"Mój brat umie gotować."
],
[
"It isn't raining now.",
"Isn't it?",
"Doesn't it?",
"Hasn't it?",
"Won't it?",
"Сейчас не идёт дождь.",
"Зараз не йде дощ.",
"Teraz nie pada."
],
[
"I've just had lunch.",
"Have you?",
"Did you?",
"Do you?",
"Are you?",
"Я только что пообедал.",
"Я щойно пообідав.",
"Dopiero co zjadłem obiad."
],
[
"They study English.",
"Do they?",
"Are they?",
"Have they?",
"Did they?",
"Они изучают английский.",
"Вони вивчають англійську.",
"Uczą się angielskiego."
],
[
"She couldn't understand.",
"Couldn't she?",
"Doesn't she?",
"Hasn't she?",
"Won't she?",
"Она не могла понять.",
"Вона не могла зрозуміти.",
"Nie mogła zrozumieć."
],

[
"You should see a doctor.",
"Should I?",
"Have I?",
"Am I?",
"Did I?",
"Тебе стоит обратиться к врачу.",
"Тобі варто звернутися до лікаря.",
"Powinieneś pójść do lekarza."
],
[
"I must leave now.",
"Must you?",
"Do you?",
"Have you?",
"Are you?",
"Я должен сейчас уйти.",
"Я мушу зараз піти.",
"Muszę teraz wyjść."
],
[
"She has passed her exam.",
"Has she?",
"Did she?",
"Is she?",
"Does she?",
"Она сдала экзамен.",
"Вона склала іспит.",
"Zdała egzamin."
],
[
"We don't watch TV.",
"Don't you?",
"Haven't you?",
"Aren't you?",
"Didn't you?",
"Мы не смотрим телевизор.",
"Ми не дивимося телевізор.",
"Nie oglądamy telewizji."
],
[
"I was very nervous.",
"Were you?",
"Have you?",
"Do you?",
"Are you?",
"Я очень нервничал.",
"Я дуже нервував.",
"Byłem bardzo zdenerwowany."
],
[
"They can help us.",
"Can they?",
"Do they?",
"Have they?",
"Are they?",
"Они могут нам помочь.",
"Вони можуть нам допомогти.",
"Mogą nam pomóc."
],
[
"It wasn't expensive.",
"Wasn't it?",
"Isn't it?",
"Hasn't it?",
"Doesn't it?",
"Это было недорого.",
"Це було недорого.",
"To nie było drogie."
],
[
"I've forgotten my password.",
"Have you?",
"Did you?",
"Are you?",
"Do you?",
"Я забыл свой пароль.",
"Я забув свій пароль.",
"Zapomniałem hasła."
],
[
"We'll need more time.",
"Will you?",
"Do you?",
"Have you?",
"Did you?",
"Нам понадобится больше времени.",
"Нам знадобиться більше часу.",
"Będziemy potrzebowali więcej czasu."
],
[
"Tom isn't married.",
"Isn't he?",
"Doesn't he?",
"Hasn't he?",
"Won't he?",
"Том не женат.",
"Том не одружений.",
"Tom nie jest żonaty."
],
[
"I could swim when I was six.",
"Could you?",
"Can you?",
"Have you?",
"Do you?",
"Я умел плавать в шесть лет.",
"Я вмів плавати у шість років.",
"Umiałem pływać w wieku sześciu lat."
],
[
"They've moved to Berlin.",
"Have they?",
"Did they?",
"Are they?",
"Will they?",
"Они переехали в Берлин.",
"Вони переїхали до Берліна.",
"Przeprowadzili się do Berlina."
],
[
"She doesn't drive.",
"Doesn't she?",
"Isn't she?",
"Hasn't she?",
"Didn't she?",
"Она не водит машину.",
"Вона не водить машину.",
"Ona nie prowadzi samochodu."
],
[
"I'm learning English.",
"Are you?",
"Have you?",
"Do you?",
"Did you?",
"Я изучаю английский.",
"Я вивчаю англійську.",
"Uczę się angielskiego."
],
[
"We had a great time.",
"Did you?",
"Have you?",
"Are you?",
"Will you?",
"Мы отлично провели время.",
"Ми чудово провели час.",
"Świetnie się bawiliśmy."
],
[
"The train has arrived.",
"Has it?",
"Is it?",
"Did it?",
"Does it?",
"Поезд прибыл.",
"Потяг прибув.",
"Pociąg przyjechał."
],
[
"I won't tell anyone.",
"Won't you?",
"Don't you?",
"Haven't you?",
"Didn't you?",
"Я никому не скажу.",
"Я нікому не скажу.",
"Nie powiem nikomu."
],
[
"They weren't surprised.",
"Weren't they?",
"Aren't they?",
"Haven't they?",
"Don't they?",
"Они не были удивлены.",
"Вони не були здивовані.",
"Nie byli zaskoczeni."
],
[
"My father works abroad.",
"Does he?",
"Is he?",
"Has he?",
"Did he?",
"Мой отец работает за границей.",
"Мій батько працює за кордоном.",
"Mój ojciec pracuje za granicą."
],
[
"I've already paid.",
"Have you?",
"Did you?",
"Are you?",
"Do you?",
"Я уже заплатил.",
"Я вже заплатив.",
"Już zapłaciłem."
],

[
"She will join us later.",
"Will she?",
"Does she?",
"Has she?",
"Is she?",
"Она присоединится к нам позже.",
"Вона приєднається до нас пізніше.",
"Dołączy do nas później."
],
[
"I haven't read that book.",
"Haven't you?",
"Don't you?",
"Didn't you?",
"Aren't you?",
"Я не читал эту книгу.",
"Я не читав цю книгу.",
"Nie czytałem tej książki."
],
[
"We can finish today.",
"Can you?",
"Do you?",
"Have you?",
"Will you?",
"Мы можем закончить сегодня.",
"Ми можемо закінчити сьогодні.",
"Możemy skończyć dzisiaj."
],
[
"He isn't at home.",
"Isn't he?",
"Doesn't he?",
"Hasn't he?",
"Won't he?",
"Его нет дома.",
"Його немає вдома.",
"Nie ma go w domu."
],
[
"I met her last week.",
"Did you?",
"Have you?",
"Do you?",
"Are you?",
"Я встретил её на прошлой неделе.",
"Я зустрів її минулого тижня.",
"Spotkałem ją w zeszłym tygodniu."
],
[
"They were angry.",
"Were they?",
"Are they?",
"Have they?",
"Do they?",
"Они были злы.",
"Вони були злі.",
"Byli źli."
],
[
"I can drive a truck.",
"Can you?",
"Do you?",
"Have you?",
"Were you?",
"Я умею водить грузовик.",
"Я вмію водити вантажівку.",
"Umiem prowadzić ciężarówkę."
],
[
"We've been very busy.",
"Have you?",
"Were you?",
"Did you?",
"Do you?",
"Мы были очень заняты.",
"Ми були дуже зайняті.",
"Byliśmy bardzo zajęci."
],
[
"Tom doesn't like fish.",
"Doesn't he?",
"Isn't he?",
"Hasn't he?",
"Didn't he?",
"Том не любит рыбу.",
"Том не любить рибу.",
"Tom nie lubi ryb."
],
[
"I'm feeling better now.",
"Are you?",
"Have you?",
"Do you?",
"Did you?",
"Сейчас мне лучше.",
"Зараз мені краще.",
"Czuję się teraz lepiej."
],
[
"The bus was late.",
"Was it?",
"Is it?",
"Has it?",
"Does it?",
"Автобус опоздал.",
"Автобус запізнився.",
"Autobus się spóźnił."
],
[
"She has a new job.",
"Does she?",
"Has she?",
"Is she?",
"Did she?",
"У неё новая работа.",
"У неї нова робота.",
"Ma nową pracę."
],
[
"I couldn't sleep.",
"Couldn't you?",
"Didn't you?",
"Haven't you?",
"Don't you?",
"Я не мог уснуть.",
"Я не міг заснути.",
"Nie mogłem zasnąć."
],
[
"They'll arrive tomorrow.",
"Will they?",
"Have they?",
"Do they?",
"Are they?",
"Они приедут завтра.",
"Вони приїдуть завтра.",
"Przyjadą jutro."
],
[
"We aren't ready.",
"Aren't you?",
"Haven't you?",
"Don't you?",
"Weren't you?",
"Мы не готовы.",
"Ми не готові.",
"Nie jesteśmy gotowi."
],
[
"I've lost my wallet.",
"Have you?",
"Did you?",
"Are you?",
"Do you?",
"Я потерял кошелёк.",
"Я загубив гаманець.",
"Zgubiłem portfel."
],
[
"Sarah can speak French.",
"Can she?",
"Does she?",
"Has she?",
"Is she?",
"Сара говорит по-французски.",
"Сара говорить французькою.",
"Sarah mówi po francusku."
],
[
"It wasn't difficult.",
"Wasn't it?",
"Isn't it?",
"Hasn't it?",
"Doesn't it?",
"Это было нетрудно.",
"Це було неважко.",
"To nie było trudne."
],
[
"I don't watch football.",
"Don't you?",
"Haven't you?",
"Aren't you?",
"Didn't you?",
"Я не смотрю футбол.",
"Я не дивлюся футбол.",
"Nie oglądam piłki nożnej."
],
[
"They've bought a house.",
"Have they?",
"Did they?",
"Are they?",
"Do they?",
"Они купили дом.",
"Вони купили будинок.",
"Kupili dom."
],

[
"You should get some rest.",
"Should I?",
"Am I?",
"Have I?",
"Did I?",
"Тебе стоит немного отдохнуть.",
"Тобі варто трохи відпочити.",
"Powinieneś trochę odpocząć."
],
[
"I must be careful.",
"Must you?",
"Do you?",
"Have you?",
"Are you?",
"Я должен быть осторожным.",
"Я мушу бути обережним.",
"Muszę być ostrożny."
],
[
"She should arrive soon.",
"Should she?",
"Is she?",
"Has she?",
"Does she?",
"Она должна скоро приехать.",
"Вона повинна скоро приїхати.",
"Powinna wkrótce przyjechać."
],
[
"We must hurry.",
"Must you?",
"Do you?",
"Have you?",
"Are you?",
"Мы должны поторопиться.",
"Ми повинні поспішати.",
"Musimy się pospieszyć."
],
[
"I'd like some coffee.",
"Would you?",
"Do you?",
"Have you?",
"Are you?",
"Я бы хотел кофе.",
"Я б хотів кави.",
"Chciałbym kawy."
],
[
"They would never do that.",
"Would they?",
"Do they?",
"Have they?",
"Are they?",
"Они никогда бы так не поступили.",
"Вони ніколи б так не зробили.",
"Nigdy by tego nie zrobili."
],
[
"She might be right.",
"Might she?",
"Is she?",
"Has she?",
"Does she?",
"Возможно, она права.",
"Можливо, вона має рацію.",
"Może mieć rację."
],
[
"I could help you tomorrow.",
"Could you?",
"Can you?",
"Have you?",
"Do you?",
"Я мог бы помочь тебе завтра.",
"Я міг би допомогти тобі завтра.",
"Mógłbym ci jutro pomóc."
],
[
"We shouldn't wait.",
"Shouldn't you?",
"Don't you?",
"Haven't you?",
"Aren't you?",
"Нам не стоит ждать.",
"Нам не варто чекати.",
"Nie powinniśmy czekać."
],
[
"He must work tonight.",
"Must he?",
"Does he?",
"Has he?",
"Is he?",
"Он должен работать сегодня вечером.",
"Він мусить працювати сьогодні ввечері.",
"Musi dziś wieczorem pracować."
],
[
"I won't forget.",
"Won't you?",
"Don't you?",
"Haven't you?",
"Didn't you?",
"Я не забуду.",
"Я не забуду.",
"Nie zapomnę."
],
[
"They can't stay here.",
"Can't they?",
"Don't they?",
"Haven't they?",
"Aren't they?",
"Они не могут остаться здесь.",
"Вони не можуть залишитися тут.",
"Nie mogą tu zostać."
],
[
"She was very happy.",
"Was she?",
"Is she?",
"Has she?",
"Does she?",
"Она была очень счастлива.",
"Вона була дуже щаслива.",
"Była bardzo szczęśliwa."
],
[
"We aren't lost.",
"Aren't you?",
"Don't you?",
"Haven't you?",
"Weren't you?",
"Мы не заблудились.",
"Ми не заблукали.",
"Nie zgubiliśmy się."
],
[
"I've found my keys.",
"Have you?",
"Did you?",
"Are you?",
"Do you?",
"Я нашёл свои ключи.",
"Я знайшов свої ключі.",
"Znalazłem swoje klucze."
],
[
"Tom can fix it.",
"Can he?",
"Does he?",
"Has he?",
"Is he?",
"Том может это починить.",
"Том може це полагодити.",
"Tom może to naprawić."
],
[
"The meeting was cancelled.",
"Was it?",
"Is it?",
"Has it?",
"Does it?",
"Встречу отменили.",
"Зустріч скасували.",
"Spotkanie zostało odwołane."
],
[
"I don't remember.",
"Don't you?",
"Didn't you?",
"Haven't you?",
"Aren't you?",
"Я не помню.",
"Я не пам'ятаю.",
"Nie pamiętam."
],
[
"They've already left.",
"Have they?",
"Did they?",
"Are they?",
"Do they?",
"Они уже ушли.",
"Вони вже пішли.",
"Oni już wyszli."
],
[
"Sarah will call later.",
"Will she?",
"Does she?",
"Has she?",
"Is she?",
"Сара позвонит позже.",
"Сара подзвонить пізніше.",
"Sarah zadzwoni później."
],

];

// console.log(unit35.length);
// unit35.push(...extending(unit35, "Don't ", "Do not "));
// unit35.push(...extending(unit35, "don't ", "do not "));
// unit35.push(...extending(unit35, "Let's ", "Let us "));
// console.log(unit35.length);

// Если это свойство есть, то оно попадает в заголовок теста
unit41.nameLeson = "Have you? Are you? Don't you? etc";

//--созданными предложениями.
unit41.lengthTrue = 5;

// console.log(unit33.length);

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit41.push(...extendForArray(unit41));

unit41.push(...extendForArray2(unit41));

export { unit41 };


