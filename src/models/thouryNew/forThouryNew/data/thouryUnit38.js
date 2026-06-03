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

export function thouryUnit38()
{
    return `
    file59
    unit-38
    ru
    h2
Правило: Конструкция "There + to be" в разных временах

h3
Конструкция There is / There are (в прошедшем, настоящем совершенном и будущем времени) используется, когда мы говорим о существовании или наличии кого-то или чего-то в определённом месте или времени.

h3
Основные формы:

ul
Past SimpleThere was / There were
О событиях и ситуациях, которые произошли и закончились в прошлом
There was a big party yesterday.
Present Perfect
There has been / There have been
О событиях, которые начались в прошлом и имеют связь с настоящим (результат важен сейчас)
There has been a lot of rain this week.Future SimpleThere will be
О событиях и ситуациях, которые произойдут в будущемThere will be a meeting tomorrow.

h3
Подробное объяснение каждой формы
1. There was / There were (Past Simple)

ul
Используется, когда:
Говорим о прошлом (вчера, на прошлой неделе, в 2020 году и т.д.).
Ситуация или объект уже не существует или закончился.

h3
Примеры:

ul
There was a strange noise in the house last night. → (шум был, но сейчас его нет)
There were many tourists in the city last summer.

h3
2. There has been / There have been (Present Perfect)
Используется, когда:

ul
Событие началось в прошлом и продолжается или имеет важный результат в настоящем.
Часто с выражениями: today, this week/month/year, recently, lately, in the last few days.

h3
Примеры:

ul
There has been a lot of traffic this morning. → (утро ещё не закончилось)
There have been many problems with the new system lately. → (проблемы были и всё ещё актуальны)

h3
Важно:

ul
has been — с неисчисляемыми существительными и he/she/it
have been — с исчисляемыми во множественном числе

ul
3. There will be (Future Simple)
Используется, когда:

ul
Мы говорим о будущих событиях, планах, прогнозах, ожиданиях.
Часто с выражениями: tomorrow, next week/month/year, in the future, soon.

h3
Примеры:

ul
There will be a big concert next Saturday.
There will be more robots in our lives in the future.

h3
Сравнение трёх форм (одно предложение в разных временах)

ul
There was a big storm yesterday. → (вчера была буря — всё закончилось)
There has been a big storm this week. → (на этой неделе уже была буря, возможно ещё будет)
There will be a big storm tomorrow. → (завтра ожидается буря)

h3
Краткое правило для запоминания:

ul
was/were → законченное прошлое
has/have been → прошлое, связанное с настоящим
will be → будущее

`
}
