// новый функционал для помощи, просто текст.
// первыя строка - название unit1
// вторая строка - это начало помощи для конкретного языка (RU)
// Первый главный заголовок h2, перед текстом заголовка
// Перед абзацем P
// перед списком UL
// закрывается тег там, где встречает пустую строку

// Из этого файла заголовок помощи должен попасть в функцию getHeaderWindow()
// Сама информация на нужном языке должна попасть в функцию getBodyThoury()

export function thouryUnit2_2()
{
    return `
    unit2-2
    ru
    h2
    Вопросы с глаголом to Be (Present/Past Simple)

    h4
    Для образования вопросительных предложений с глаголом to be в настоящем (Present Simple) или прошедшем времени (Past Simple), глагол выносится на первое место перед подлежащим.

    h3
    Пример 1:

    h4
        Утверждение: You are ready.
        Вопрос: Are you ready?

    h3
    Пример 2:

    h4
        Утверждение: He was tired.
        Вопрос: Was he tired?

    h3
    Особенности:

    h4
        Вопросы типа да/нет всегда требуют инверсии: глагол to be (в любой форме) идёт перед подлежащим.
        Это правило не применяется в предложениях с другими глаголами (не to be), там используются вспомогательные глаголы (do, does, did).


    en
    h2
    Questions with the verb "to be" (Present/Past Simple)

    h3
        To form interrogative sentences with the verb to be in the present (Present Simple) or past tense (Past Simple), the verb is placed first before the subject.

    h2
    Example 1:

    h3
        Statement: You are ready.
        Question: Are you ready?

    h2
    Example 2:

    h3
        Statement: He was tired.
        Question: Was he tired?

    h2
    Features:

    h3
        Yes/no questions always require inversion: the verb to be (in any form) comes before the subject. 
        This rule does not apply to sentences with other verbs (not to be), where auxiliary verbs (do, does, did) are used.


    pl
    h2
    Pytania z czasownikiem "to be" (Present/Past Simple)
    
    h3
        Aby utworzyć zdania pytające z czasownikiem to be w czasie teraźniejszym (Present Simple) lub przeszłym (Past Simple), czasownik należy postawić na pierwszym miejscu przed podmiotem.

    h2
    Przykład 1:

    h3
        Twierdzenie: You are ready.
        Pytanie: Are you ready?

    h3
    Przykład 2:
    
    h3
        Twierdzenie: He was tired.
        Pytanie: Was he tired?

    h2
    Cechy szczególne:

    h3
        Pytania typu tak/nie zawsze wymagają inwersji: czasownik to be (w dowolnej formie) stoi przed podmiotem.
        Ta zasada nie ma zastosowania w zdaniach z innymi czasownikami (nie to be), tam używane są czasowniki pomocnicze (do, does, did).

    ua
    h3
    Запитання з дієсловом "to be" (Present/Past Simple)
    
    h4
        Для утворення запитальних речень з дієсловом to be у теперішньому (Present Simple) або минулому часі (Past Simple), дієслово виноситься на перше місце перед підлягаючим.

    h3
    Приклад 1:
    
    h4
        Твердження: You are ready.
        Запитання: Are you ready?

    h3
    Приклад 2:
    
    h4
        Твердження: He was tired.
        Питання: Was he tired?

    h3
    Особливості:

    h4
        Запитання типу так/ні завжди вимагають інверсії: дієслово to be (у будь-якій формі) йде перед підлягаючим.
        Це правило не застосовується в реченнях з іншими дієсловами (не to be), там використовуються допоміжні дієслова (do, does, did).
`;
}
