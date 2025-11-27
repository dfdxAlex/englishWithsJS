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

export function thouryUnit13()
{
    return `
    file33
    unit-13
    ru
    h2
Правила с глаголами (Добавление окончаний)

h3
Правило 1: Добавление окончания "s"

h4
Для глаголов, заканчивающихся на согласный, добавляется окончание s для третьего лица в настоящем времени.

h4
Пример:

ul
He works every day. (Он работает каждый день.)

h3
Правило 2: Добавление окончания "es"

h4
Глаголы, заканчивающиеся на -ch, -sh, -x, -o, -ss, получают окончание es в третьем лице.

h4
Пример:

ul
She fixes the problem. (Она решает проблему.)

h3
Правило 3: Глаголы с -y

h4
Для глаголов, заканчивающихся на -y, убирается "y" и добавляется окончание ies.

h4
Пример:

ul
He carries the box. (Он несет коробку.)

h3
Правило 4: Глаголы, заканчивающиеся на гласную + "y"

h4
Если глагол заканчивается на гласную + "y", то в третьем лице просто добавляется s.

h4
Пример:

ul
She plays the piano. (Она играет на пианино.)

h3
Правило 5: Глаголы с необычным изменением

h4
Некоторые глаголы имеют нестандартные формы для третьего лица, например, "have" становится "has".

h4
Пример:

ul
She has a new car. (У неё есть новая машина.)

ua
h2
Правила з дієсловами (Додавання закінчень)

h3
Правило 1: Додавання закінчення "s"

h4
Для дієслів, що закінчуються на приголосний, додається закінчення s для третьої особи в теперішньому часі.

h4
Приклад:

ul
He works every day. (Він працює щодня.)

h3
Правило 2: Додавання закінчення "es"

h4
Дієслова, що закінчуються на -ch, -sh, -x, -o, -ss, отримують закінчення es у третій особі.

h4
Приклад:

ul
She fixes the problem. (Вона вирішує проблему.)

h3
Правило 3: Дієслова з -y

h4
Для дієслів, що закінчуються на -y, "y" замінюється на закінчення ies.

h4
Приклад:

ul
He carries the box. (Він несе коробку.)

h3
Правило 4: Дієслова, що закінчуються на голосну + "y"

h4
Якщо дієслово закінчується на голосну + "y", у третій особі просто додається s.

h4
Приклад:

ul
She plays the piano. (Вона грає на піаніно.)

h3
Правило 5: Дієслова з незвичайною зміною

h4
Деякі дієслова мають нестандартні форми для третьої особи, наприклад, "have" стає "has".

h4
Приклад:

ul
She has a new car. (У неї є нова машина.)

pl
h2
Zasady dotyczące czasowników (Dodawanie końcówek)

h3
Zasada 1: Dodawanie końcówki "s"

h4
Do czasowników kończących się na spółgłoskę dodaje się końcówkę s dla trzeciej osoby w czasie teraźniejszym.

h4
Przykład:

ul
He works every day. (On pracuje codziennie.)

h3
Zasada 2: Dodawanie końcówki "es"

h4
Czasowniki kończące się na -ch, -sh, -x, -o, -ss otrzymują końcówkę es w trzeciej osobie.

h4
Przykład:

ul
She fixes the problem. (Ona rozwiązuje problem.)

h3
Zasada 3: Czasowniki z -y

h4
Dla czasowników kończących się na -y, "y" zmienia się na końcówkę ies.

h4
Przykład:

ul
He carries the box. (On niesie pudełko.)

h3
Zasada 4: Czasowniki kończące się na samogłoskę + "y"

h4
Jeśli czasownik kończy się na samogłoskę + "y", w trzeciej osobie dodaje się po prostu s.

h4
Przykład:

ul
She plays the piano. (Ona gra na pianinie.)

h3
Zasada 5: Czasowniki ze szczególną zmianą

h4
Niektóre czasowniki mają niestandardowe formy dla trzeciej osoby, np. "have" staje się "has".

h4
Przykład:

ul
She has a new car. (Ona ma nowy samochód.)

en
h2
Rules for Verbs (Adding Endings)

h3
Rule 1: Adding the ending "s"

h4
For verbs ending in a consonant, the ending s is added for the third person in the present tense.

h4
Example:

ul
He works every day.

h3
Rule 2: Adding the ending "es"

h4
Verbs ending in -ch, -sh, -x, -o, -ss receive the ending es in the third person.

h4
Example:

ul
She fixes the problem.

h3
Rule 3: Verbs ending in -y

h4
For verbs ending in -y, the "y" is removed and replaced with ies.

h4
Example:

ul
He carries the box.

h3
Rule 4: Verbs ending in a vowel + "y"

h4
If a verb ends in a vowel + "y," simply add s in the third person.

h4
Example:

ul
She plays the piano.

h3
Rule 5: Verbs with irregular changes

h4
Some verbs have irregular forms for the third person, for example, "have" becomes "has."

h4
Example:

ul
She has a new car.


`};