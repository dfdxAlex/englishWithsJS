// новый функционал для помощи, просто текст.
// первыя строка - название file11 - привязан к старой архитектуре
// unit-23 - принадлежность к уроку
// вторая строка - это начало помощи для конкретного языка (RU)
// Первый главный заголовок h2, перед текстом заголовка
// Добавлены h3, h4
// перед списком UL
// закрывается тег там, где встречает пустую строку

// Из этого файла заголовок помощи должен попасть в функцию getHeaderWindow()
// Сама информация на нужном языке должна попасть в функцию getBodyThoury()

// каждый новый файл нужно прописать arrayDataThoury.js
// если нужен кастыль, то тут getBodyThoury

export function thouryUnit2()
{
    return `
    file10
    unit-2
    ru
    h2
    Вопрос с to be:

    h3
    Вопрос с to be: переставь to be (am, is, are, was, were) перед подлежащим.
    Краткая форма в вопросах не используется — пишем полную (Is, Are, Was…), даже если в утвердительном предложении было сокращение (She's tired → Is she tired?).

    ul
    Примеры:
    She is tired. (She's tired) → Is she tired?
    They are ready. (They're ready) → Are they ready?
    I am late. (I'm late) → Am I late?
    He was at home. (He was at home) → Was he at home?
    We were happy. (We were happy) → Were we happy?

    h3
    Отрицательные вопросы: not можно писать полностью (is not) или сокращать (isn't, aren't, wasn't, weren't) — оба варианта верные.    
    
    ul
    She is tired. → Is she not tired? или Isn't she tired?    
    They are ready. → Are they not ready? или Aren't they ready?    
    He was at home. → Was he not at home? или Wasn't he at home?    

    h3
    С вопросительными словами (What, Where, Why, How и др.) — ставим их в начало, перед to be: 
    
    ul
    She is here. → Where is she?    
    They are happy. → Why are they happy?    
    He was tired. → Why was he tired?
    She's not ready. → Why isn't she ready?

    ua
    h2
    Питання з to be:    

    P
    Питання з to be: перестав to be (am, is, are, was, were) перед підметом.
    Скорочена форма у питаннях не використовується — пишемо повну (Is, Are, Was…), навіть якщо в стверджувальному реченні було скорочення (She's tired → Is she tired?).    

    ul
    Приклади:
    She is tired. (She's tired) → Is she tired?
    They are ready. (They're ready) → Are they ready?
    I am late. (I'm late) → Am I late?
    He was at home. (He was at home) → Was he at home?
    We were happy. (We were happy) → Were we happy?    

    h3
    Заперечні питання: not можна писати повністю (is not) або скорочувати (isn't, aren't, wasn't, weren't) — обидва варіанти правильні.        

    ul
    She is tired. → Is she not tired? або Isn't she tired?    
    They are ready. → Are they not ready? або Aren't they ready?    
    He was at home. → Was he not at home? або Wasn't he at home?    
    
    h3
    З питальними словами (What, Where, Why, How тощо) — ставимо їх на початок, перед to be: 

    ul
    She is here. → Where is she?    
    They are happy. → Why are they happy?    
    He was tired. → Why was he tired?
    She's not ready. → Why isn't she ready?

pl
h2
Pytanie z to be:

h3
Pytanie z to be: przestaw to be (am, is, are, was, were) przed podmiotem.
Forma skrócona w pytaniach nie jest używana — piszemy pełną (Is, Are, Was…), nawet jeśli w zdaniu twierdzącym było skrócenie (She's tired → Is she tired?).

ul
Przykłady:
She is tired. (She's tired) → Is she tired?
They are ready. (They're ready) → Are they ready?
I am late. (I'm late) → Am I late?
He was at home. (He was at home) → Was he at home?
We were happy. (We were happy) → Were we happy?

h3
Pytania przeczące: not można zapisać w pełnej formie (is not) lub skróconej (isn't, aren't, wasn't, weren't) — obie formy są poprawne.    

ul
She is tired. → Is she not tired? lub Isn't she tired?    
They are ready. → Are they not ready? lub Aren't they ready?    
He was at home. → Was he not at home? lub Wasn't he at home?    

h3
Z zaimkami pytającymi (What, Where, Why, How itp.) — stawiamy je na początku, przed to be: 

ul
She is here. → Where is she?    
They are happy. → Why are they happy?    
He was tired. → Why was he tired?
She's not ready. → Why isn't she ready?

en
h2
Question with to be:

h3
Question with to be: move the verb to be (am, is, are, was, were) before the subject.
The short form is not used in questions — write the full form (Is, Are, Was…), even if the affirmative sentence had a contraction (She's tired → Is she tired?).

ul
Examples:
She is tired. (She's tired) → Is she tired?
They are ready. (They're ready) → Are they ready?
I am late. (I'm late) → Am I late?
He was at home. (He was at home) → Was he at home?
We were happy. (We were happy) → Were we happy?

h3
Negative questions: not can be written in full (is not) or contracted (isn't, aren't, wasn't, weren't) — both forms are correct.    

ul
She is tired. → Is she not tired? or Isn't she tired?    
They are ready. → Are they not ready? or Aren't they ready?    
He was at home. → Was he not at home? or Wasn't he at home?    

h3
With question words (What, Where, Why, How, etc.) — place them at the beginning, before to be: 

ul
She is here. → Where is she?    
They are happy. → Why are they happy?    
He was tired. → Why was he tired?
She's not ready. → Why isn't she ready?

`;
}
