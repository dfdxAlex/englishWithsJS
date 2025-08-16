// новый функционал для помощи, просто текст.
// первыя строка - нахвание unit1
// вторая строка - это начало помощи для конкретного языка (RU)
// Первый главный заголовок h2, перед текстом заголовка
// Перед абзацем P
// перед списком UL
// закрывается тег там, где встречает пустую строку

// Из этого файла заголовок помощи должен попасть в функцию getHeaderWindow()
// Сама информация на нужном языке должна попасть в функцию getBodyThoury()

export function thouryUnit1()
{
    return `
    unit1
    ru
    h2
    Краткая форма глагола to be

    h4
    Краткая форма глагола to be (сокращённая форма) образуется за счет соединения глагола с подлежащим (местоимением) с помощью апострофа. Вот основные правила:
    
    ul
    I am → I'm
    You are → You're
    He is → He's
    She is → She's
    It is → It's
    We are → We're
    They are → They're

    h4    
    Сокращённая форма часто используется в разговорной речи и неформальной письменной речи.

    en
    h2
    Short Form of the Verb "to be"

    h4
    The short form of the verb "to be" (contraction) is created by combining the verb with the subject (pronoun) using an apostrophe. Here are the main rules:

    ul
    I am → I'm
    You are → You're
    He is → He's
    She is → She's
    It is → It's
    We are → We're
    They are → They're

    h4
    The contraction is commonly used in spoken language and informal writing.

    pl
    h2
    Skrócona forma czasownika to be

    h4
    Skrócona forma czasownika to be (forma skrócona) powstaje przez połączenie czasownika z podmiotem (zaimkiem) za pomocą apostrofu. Oto podstawowe zasady:
    
    ul
    I am → I'm
    You are → You're
    He is → He's
    She is → She's
    It is → It's
    We are → We're
    They are → They're

    h4
    Forma skrócona często jest używana w mowie potocznej i nieformalnym piśmie.

    ua
    h2
    Скорочена форма дієслова to be

    h4
    Скорочена форма дієслова to be (скорочена форма) утворюється за рахунок з'єднання дієслова з підлеглим (займенником) за допомогою апострофа. Ось основні правила:

    ul
    I am → I'm
    You are → You're
    He is → He's
    She is → She's
    It is → It's
    We are → We're
    They are → They're

    h4
    Скорочена форма часто використовується в розмовній мові та неформальній письмовій мові.
`;
}
