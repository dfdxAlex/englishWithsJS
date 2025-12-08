// новый функционал для помощи, просто текст.
// первыя строка - название file11 - привязан к старой архитектуре
// именно file11 привязывает помощь у уроку. в данном примере помощь вызывается при level = 11
// unit-23 - принадлежность к уроку
// вторая строка - это начало помощи для конкретного языка (RU)
// Первый главный заголовок h2, перед текстом заголовка
// Добавлены h3, h4
// перед списком UL
// закрывается тег там, где встречает пустую строку

// каждый новый файл нужно прописать arrayDataThoury.js
// если нужен кастыль, то тут getBodyThoury

// returnBodyHelpForLanguage() - находит псевдотеги, если проблемы смотри там

export function thouryUnit31()
{
    return `
    file52
    unit-31
    ru
    h2
Применение:

h3
1. must — обязан / должно быть

h4
Используется, когда говорящий сам считает что-то обязательным, нужным, важным.

h4
Формула:

h4
must + verb (без to)

h4
Значение: внутреннее правило, личная необходимость.

h4
Примеры:

ul
I must call my mom. — Я должен позвонить маме (сам так считаю).
You must be quiet. — Ты должен вести себя тихо.
We must leave now. — Мы должны уйти сейчас.

h3
2. mustn’t — нельзя (строгий запрет)

h4
Используется, когда что-то запрещено.

h4
Формула:

h4
mustn’t + verb

h4
Значение: строгий запрет.

h4
Примеры:

ul
You mustn’t smoke here. — Здесь нельзя курить.
You mustn’t touch this wire. — Нельзя трогать этот провод.
Students mustn’t be late. — Студентам нельзя опаздывать.

h4
⚠️ Важно:

ul
mustn’t ≠ don’t have to
Mustn’t = запрещено
Don’t have to = не обязательно

h3
3. have to — должен (внешнее обязательство)

h4
Используется, когда обязанность идет извне: закон, правило, указание, расписание.

h4
Формула:

ul
have to + verb
(he/she/it — has to)

h4
Значение: внешние правила.

h4
Примеры:

ul
I have to wear a uniform at work. — Я должен носить форму (правило).
She has to take the test tomorrow. — Она должна сдавать тест завтра (расписание).
We have to follow the rules. — Мы должны следовать правилам.

h3
4. don’t need to / don’t have to — не нужно, нет необходимости

h4
Используется, когда что-то НЕ обязательно.

h4
Можно сделать, можно не делать — выбор свободный.

h4
Формула:

h4
don’t need to + verb

h4
или

h4
don’t have to + verb

h4
Значение: нет необходимости.

h4
Примеры:

ul
You don’t need to come early. — Не нужно приходить рано.
I don’t have to work today. — Мне не нужно работать сегодня.
She doesn’t need to bring her laptop. — Ей не нужно приносить ноутбук.

h4
⚠️ Важно:

h4
don’t need to — НЕ означает запрет!

h4
Это лишь отсутствие необходимости.

h3
💡 Коротко в одной таблице

ul
must	обязан (личное мнение)	I must study.
mustn’t	нельзя (строгий запрет)	You mustn’t touch it.
have to	обязан (правило извне)	I have to wear a helmet.
don’t need to	не обязательно	You don’t need to come early.

pl
h2
Zastosowanie:

h3

must — muszę / trzeba

h4
Używa się, gdy mówiący sam uważa coś za obowiązkowe, potrzebne lub ważne.

h4
Formuła:

h4
must + czasownik (bez to)

h4
Znaczenie: wewnętrzna zasada, osobista konieczność.

h4
Przykłady:

ul
I must call my mom. — Muszę zadzwonić do mamy (sam tak uważam).
You must be quiet. — Musisz być cicho.
We must leave now. — Musimy już iść.

h3
2. mustn’t — nie wolno (surowy zakaz)

h4
Używa się, gdy coś jest zabronione.

h4
Formuła:

h4
mustn’t + czasownik

h4
Znaczenie: surowy zakaz.

h4
Przykłady:

ul
You mustn’t smoke here. — Nie wolno tu palić.
You mustn’t touch this wire. — Nie wolno dotykać tego przewodu.
Students mustn’t be late. — Studentom nie wolno się spóźniać.

h4
⚠️ Ważne:

ul
mustn’t ≠ don’t have to
Mustn’t = zakaz
Don’t have to = brak obowiązku

h3
3. have to — muszę (obowiązek zewnętrzny)

h4
Używa się, gdy obowiązek pochodzi z zewnątrz: z prawa, zasad, polecenia, harmonogramu.

h4
Formuła:

ul
have to + czasownik
(he/she/it — has to)

h4
Znaczenie: zewnętrzne zasady.

h4
Przykłady:

ul
I have to wear a uniform at work. — Muszę nosić mundur w pracy (zasada).
She has to take the test tomorrow. — Ona musi jutro napisać test (harmonogram).
We have to follow the rules. — Musimy przestrzegać zasad.

h3
4. don’t need to / don’t have to — nie trzeba, nie ma potrzeby

h4
Używa się, gdy coś NIE jest obowiązkowe.

h4
Można coś zrobić, ale nie trzeba — wybór jest dowolny.

h4
Formuła:

h4
don’t need to + czasownik

h4
albo

h4
don’t have to + czasownik

h4
Znaczenie: brak konieczności.

h4
Przykłady:

ul
You don’t need to come early. — Nie trzeba przychodzić wcześnie.
I don’t have to work today. — Nie muszę dziś pracować.
She doesn’t need to bring her laptop. — Ona nie musi przynosić swojego laptopa.

h4
⚠️ Ważne:

h4
don’t need to — NIE oznacza zakazu!

h4
To tylko brak konieczności.

h3
💡 Krótko w jednej tabeli

ul
must — obowiązek (osobista opinia) — I must study.
mustn’t — zakaz (surowy) — You mustn’t touch it.
have to — obowiązek (zasady zewnętrzne) — I have to wear a helmet.
don’t need to — nie trzeba — You don’t need to come early.

ua
h2
Застосування:

h3

must — мушу / потрібно

h4
Використовується, коли мовець сам вважає щось обов’язковим, потрібним або важливим.

h4
Формула:

h4
must + дієслово (без to)

h4
Значення: внутрішнє правило, особиста необхідність.

h4
Приклади:

ul
I must call my mom. — Я мушу подзвонити мамі (сам так вважаю).
You must be quiet. — Ти повинен бути тихо.
We must leave now. — Нам потрібно йти зараз.

h3
2. mustn’t — не можна (сувора заборона)

h4
Використовується, коли щось заборонено.

h4
Формула:

h4
mustn’t + дієслово

h4
Значення: сувора заборона.

h4
Приклади:

ul
You mustn’t smoke here. — Тут не можна палити.
You mustn’t touch this wire. — Не можна торкатися цього дроту.
Students mustn’t be late. — Студентам не можна запізнюватися.

h4
⚠️ Важливо:

ul
mustn’t ≠ don’t have to
Mustn’t = заборона
Don’t have to = немає необхідності

h3
3. have to — мушу (зовнішній обов’язок)

h4
Використовується, коли обов’язок надходить ззовні: закон, правила, вказівка, розклад.

h4
Формула:

ul
have to + дієслово
(he/she/it — has to)

h4
Значення: зовнішні правила.

h4
Приклади:

ul
I have to wear a uniform at work. — Я повинен носити форму на роботі (правило).
She has to take the test tomorrow. — Вона повинна складати тест завтра (розклад).
We have to follow the rules. — Ми повинні дотримуватися правил.

h3
4. don’t need to / don’t have to — не потрібно, немає необхідності

h4
Використовується, коли щось НЕ є обов’язковим.

h4
Можна зробити, можна не робити — вибір вільний.

h4
Формула:

h4
don’t need to + дієслово

h4
або

h4
don’t have to + дієслово

h4
Значення: відсутність необхідності.

h4
Приклади:

ul
You don’t need to come early. — Не потрібно приходити рано.
I don’t have to work today. — Мені не потрібно працювати сьогодні.
She doesn’t need to bring her laptop. — Їй не потрібно приносити свій ноутбук.

h4
⚠️ Важливо:

h4
don’t need to — НЕ означає заборону!

h4
Це лише відсутність необхідності.

h3
💡 Коротко в одній таблиці

ul
must — обов’язок (особиста думка) — I must study.
mustn’t — заборона (сувора) — You mustn’t touch it.
have to — обов’язок (зовнішні правила) — I have to wear a helmet.
don’t need to — не потрібно — You don’t need to come early.

en
h2
Usage:

h3

must — obligation / strong necessity

h4
Used when the speaker personally feels something is necessary or important.

h4
Formula:

h4
must + verb (without to)

h4
Meaning: internal rule, personal necessity.

h4
Examples:

ul
I must call my mom. 
You must be quiet. 
We must leave now. 

h3
2. mustn’t — prohibition (strict ban)

h4
Used to say that something is forbidden.

h4
Formula:

h4
mustn’t + verb

h4
Meaning: strict prohibition.

h4
Examples:

ul
You mustn’t smoke here. 
You mustn’t touch this wire. 
Students mustn’t be late. 

h4
⚠️ Important:

ul
mustn’t ≠ don’t have to
Mustn’t = prohibition
Don’t have to = not necessary

h3
3. have to — obligation from outside (rules, laws, instructions)

h4
Used when the obligation comes from an external source: law, instructions, schedule.

h4
Formula:

ul
have to + verb
(he/she/it — has to)

h4
Meaning: external rules, outside obligation.

h4
Examples:

ul
I have to wear a uniform at work. 
She has to take the test tomorrow. 
We have to follow the rules. 

h3
4. don’t need to / don’t have to — no necessity

h4
Used when something is NOT necessary.

h4
You may do it, but it is optional.

h4
Formula:

h4
don’t need to + verb

h4
or

h4
don’t have to + verb

h4
Meaning: lack of necessity.

h4
Examples:

ul
You don’t need to come early. 
I don’t have to work today. 
She doesn’t need to bring her laptop. 

h4
⚠️ Important:

h4
don’t need to does NOT mean prohibition.

h4
It only means there is no obligation.

h3
💡 Summary table

ul
must — personal obligation — I must study.
mustn’t — prohibition — You mustn’t touch it.
have to — external obligation — I have to wear a helmet.
don’t need to — not necessary — You don’t need to come early.

`}
