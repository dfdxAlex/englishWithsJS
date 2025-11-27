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

export function thouryUnit10()
{
    return `
    file23
    unit-10
    ru
    h2
Справка по глаголам "was" и "were"

h3
Правила использования

h4
"Was" используется с местоимениями I, he, she, it (единичными подлежащими).

ul
Пример: I was at home. (Я был дома)

h4
"Were" используется с местоимениями you, we, they (множественными подлежащими).

ul
Пример: They were happy. (Они были счастливы)

h3
Образование предложений

h4
Положительные утверждения (Statements):

ul
I was tired after work. (Я был уставшим после работы)
They were in the park yesterday. (Они были в парке вчера)

h4
Отрицательные утверждения (Negative Statements):

ul
I wasn’t tired after work. (Я не был уставшим после работы)
They weren’t in the park yesterday. (Они не были в парке вчера)

h4
Вопросительные предложения (Questions):

ul
Was she at school? (Она была в школе?)
Were you at the party last night? (Ты был на вечеринке вчера?)

h4
Отрицательные вопросительные предложения (Negative Questions):

ul
Wasn’t he at work yesterday? (Разве он не был на работе вчера?)
Weren’t they ready for the trip? (Разве они не были готовы к поездке?)

ua
h2
Довідка щодо дієслів "was" і "were"

h3
Правила використання

h4
"Was" використовується з займенниками I, he, she, it (однина).

ul
Приклад: I was at home. (Я був удома)

h4
"Were" використовується з займенниками you, we, they (множина).

ul
Приклад: They were happy. (Вони були щасливі)

h3
Утворення речень

h4
Стверджувальні речення (Statements):

ul
I was tired after work. (Я був втомленим після роботи)
They were in the park yesterday. (Вони були в парку вчора)

h4
Заперечні речення (Negative Statements):

ul
I wasn’t tired after work. (Я не був втомленим після роботи)
They weren’t in the park yesterday. (Вони не були в парку вчора)

h4
Питальні речення (Questions):

ul
Was she at school? (Вона була в школі?)
Were you at the party last night? (Ти був на вечірці вчора?)

h4
Заперечні питальні речення (Negative Questions):

ul
Wasn’t he at work yesterday? (Хіба він не був на роботі вчора?)
Weren’t they ready for the trip? (Хіба вони не були готові до подорожі?)


pl
h2
Informacja o czasownikach "was" i "were"

h3
Zasady użycia

h4
"Was" używa się z zaimkami I, he, she, it (liczba pojedyncza).

ul
Przykład: I was at home. (Byłem w domu)

h4
"Were" używa się z zaimkami you, we, they (liczba mnoga).

ul
Przykład: They were happy. (Oni byli szczęśliwi)

h3
Tworzenie zdań

h4
Zdania twierdzące (Statements):

ul
I was tired after work. (Byłem zmęczony po pracy)
They were in the park yesterday. (Oni byli w parku wczoraj)

h4
Zdania przeczące (Negative Statements):

ul
I wasn’t tired after work. (Nie byłem zmęczony po pracy)
They weren’t in the park yesterday. (Oni nie byli w parku wczoraj)

h4
Pytania (Questions):

ul
Was she at school? (Czy ona była w szkole?)
Were you at the party last night? (Czy byłeś na imprezie wczoraj?)

h4
Pytania przeczące (Negative Questions):

ul
Wasn’t he at work yesterday? (Czy on nie był wczoraj w pracy?)
Weren’t they ready for the trip? (Czy oni nie byli gotowi na wycieczkę?)


en
h2
Reference for the verbs "was" and "were"

h3
Usage rules

h4
"Was" is used with the pronouns I, he, she, it (singular subjects).

ul
Example: I was at home. (I was at home)

h4
"Were" is used with the pronouns you, we, they (plural subjects).

ul
Example: They were happy. (They were happy)

h3
Forming sentences

h4
Affirmative statements (Statements):

ul
I was tired after work.
They were in the park yesterday.

h4
Negative statements (Negative Statements):

ul
I wasn’t tired after work.
They weren’t in the park yesterday.

h4
Questions:

ul
Was she at school?
Were you at the party last night?

h4
Negative questions:

ul
Wasn’t he at work yesterday?
Weren’t they ready for the trip?


`};