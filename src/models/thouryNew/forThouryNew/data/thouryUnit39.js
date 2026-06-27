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

export function thouryUnit39()
{
    return `
    file60
    unit-39
    ru
    h2
UNIT 39 — IT  

h3
Полное правило и случаи использования

h3
1. IT как формальное подлежащее (dummy subject)

h3
В английском языке подлежащее обязательно.  
Когда в русском/украинском/польском подлежащее отсутствует, его роль выполняет IT.

h3
Используется для:

ul
1) Погоды  
- It’s raining.  
- It’s snowing.  
- It’s windy.

ul
2) Температуры  
- It’s cold today.  
- It’s getting warmer.

ul
3) Времени  
- It’s late.  
- It’s 5 o’clock.

ul
4) Даты и дней  
- It’s Monday.  
- It’s the 27th of June.

ul
5) Расстояний  
- It’s 10 km to the city.  
- It’s far from here.

ul
6) Времени/пути до места  
- It’s a long way to the station.  
- It’s ten minutes to the bus stop.

h3
2. IT для описания ситуации / состояния

h3
IT используется, когда мы говорим о ситуации в целом, а не о конкретном объекте.

ul
1) Состояния / ощущения  
- It’s noisy here.  
- It’s quiet in the library.  
- It’s dark outside.

ul
2) Оценки ситуации  
- It’s strange to be here.  
- It’s nice to see you.  
- It’s important to rest.

ul
3) Сложность / лёгкость  
- It’s difficult to understand this text.  
- It’s easy to learn this rule.

ul
4) Опасность / безопасность  
- It’s dangerous to drive fast.  
- It’s safe to cross here.

h3
3. IT + adjective + to‑infinitive

h3
Формула:  

ul
IT + be + adjective + to + verb

h3
Используется для оценки действия:

ul
- It’s hard to wake up early.  
- It’s important to drink water.  
- It’s impossible to finish this today.  
- It’s fun to travel.

h4
Это безличная конструкция, НЕ «оно трудно».

h3
4. IT + adjective + that‑clause

h3
Используется для оценки целого предложения:

ul
- It’s surprising that he left so early.  
- It’s clear that she is right.  
- It’s possible that they forgot.

h3
5. IT для расстояния / времени / пути

h3
Формула:  

ul
IT + be + distance/time + to + place

ul
Примеры:  
- It’s 3 km to the hospital.  
- It’s a long way to the beach.  
- It’s ten minutes to the station.

h3
6. IT в описаниях ситуаций (как в наших подмассивах)

h4
Используется для описания окружающей среды, атмосферы, условий.

h4
Примеры:

ul
Ситуация:  
"It’s very noisy in the café. It’s hard to hear anything."  
Резюме:  
"The café is loud and hard to hear in."

ul
Ситуация:  
"It’s getting dark outside. The lights are still off."  
Резюме:  
"It’s dark outside and the lights aren’t on."

h3
7. Короткое резюме (самое важное)

ul
- IT используется, когда нет реального подлежащего.  
- IT описывает погоду, время, дату, расстояние, температуру.  
- IT вводит оценку ситуации (It’s nice… It’s strange… It’s difficult…).  
- IT используется в конструкциях с to‑infinitive и that‑clause.  
- IT описывает ситуацию в целом, а не объект.


`
}
