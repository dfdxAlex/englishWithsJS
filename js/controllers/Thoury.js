
class Thoury
{

static handleThoury(level)
{
    this.level = level;
    this.translate = FactoryRegistr.getObject("LanguageController");

    this.strLocal = `
    <div class="card shadow-lg rounded-3" style="width: 80vw;  position: relative;">
     <button type="button" class="btn-close" aria-label="Close" style="position: absolute; top: 10px; right: 10px;"  onclick="document.getElementById('exercise').style.display='none'"></button>
      <div class="card-body">
        <h5 class="card-title">${this.headerThoury()}</h5>
        <p class="card-text">${this.bodyThoury()}</p>
      </div>
    </div>
    `;
    document.getElementById('level30').onclick = cardThoury.bind(null, this);
    }

    // Функция помещает информацию в заголовок раздела Теория
    static addStyleForH1 = '<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">';
    static headerThoury()
    {
        switch (this.level) {
            case 9:
            case 10:
                return `${this.addStyleForH1+this.translate.translate('Сокращенная форма глагола to Be')}</h1>`;
            case 11:
                return `${this.addStyleForH1+this.translate.translate('Создание вопросов в Present Simple и Past Simple')}</h1>`;
            case 13: 
                return `${this.addStyleForH1+this.translate.translate('Правило для настоящего продолженного времени (Present Continuous)')}</h1>`;
            case 14: 
                return `${this.addStyleForH1+this.translate.translate('Образования вопросов в настоящем продолженном времени P.C.')}</h1>`;
            case 15: 
                return `${this.addStyleForH1+this.addStyleForH1+this.translate.translate('Простое настоящее P.S.')}</h1>`;
            case 16: 
                return `${this.addStyleForH1+this.translate.translate('Простое настоящее  P.S. плюс периодичность')}</h1>`;
            case 17: 
                return `${this.addStyleForH1+this.translate.translate('Простое настоящее  P.S. негативное')}</h1>`;
            case 18: 
                return `${this.addStyleForH1+this.translate.translate('Простое настоящее  P.S. вопросы')}</h1>`;
            case 19: 
                return `${this.addStyleForH1+this.translate.translate('Выбор между P.S. и настоящим продолженным P.C.')}</h1>`;
            case 21: 
                return `${this.addStyleForH1+this.translate.translate('Глаголы Have и Have Got')}</h1>`;
            case 23: 
                return `${this.addStyleForH1+this.translate.translate(`Глаголы Was и Were`)}</h1>`;
            case 31: 
                return this.addStyleForH1+`Past Simple</h1>`;
            case 32: 
                return this.addStyleForH1+`Past Simple negative and questions</h1>`;
            case 33: 
                return this.addStyleForH1+`Present Simple (He, She, It)</h1>`;
            case 34: 
                return this.addStyleForH1+`Past Continuous</h1>`;
            case 35: 
                return this.addStyleForH1+`Past Continuous or Past Simple</h1>`; 
            case 37: 
                return this.addStyleForH1+`Present perfect</h1>`;           
            case 38: 
                return this.addStyleForH1+`Present perfect + (present simple or continius)</h1>`;          
            case 39: 
                return this.addStyleForH1+`Present perfect + (for, since and ago)</h1>`;      
            case 40: 
                return this.addStyleForH1+`Present perfect or Past simple</h1>`;       
            case 42: 
                return this.addStyleForH1+`Present simple passive, past simple passive</h1>`;    
            default:
                return `${this.addStyleForH1+this.translate.translate('Просто учим слова')}</h1>`;
        }
    }
    // Функция помещает информацию в тело раздела Теория
    static bodyThoury()
    {
      // if (this.level === 15) 
      //   return this.translate.translate(``);
      // if (this.level === 15) 
      //   return this.translate.translate(``);
      if (this.level === 42) 
        return this.translate.translate(returnLevel42());
      if (this.level === 40) 
        return this.translate.translate(returnLevel40());
      if (this.level === 39) 
        return this.translate.translate(returnLevel39());
      if (this.level === 38) 
        return this.translate.translate(returnLevel38());
      if (this.level === 37) 
        return this.translate.translate(returnLevel37());
      if (this.level === 20) 
        return this.translate.translate(returnLevel20());
      if (this.level === 36) 
        return this.translate.translate(returnLevel36());
      if (this.level === 35) 
        return this.translate.translate(returnLevel35());
      if (this.level === 34) 
        return this.translate.translate(returnLevel34());
      if (this.level === 33) 
        return this.translate.translate(returnLevel33());
      if (this.level === 32) 
        return this.translate.translate(returnLevel32());
      if (this.level === 31) 
        return this.translate.translate(returnLevel31());

      if (this.level === 23) 
        return this.translate.translate(returnLevel23());

      if (this.level === 21) 
        return this.translate.translate(returnLevel21());

      if (this.level === 19) 
        return this.translate.translate(returnLevel19());

      if (this.level === 18) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Правило для образования вопросов в Простом настоящем времени (Present Simple)</h2>
    
    <h3 style="color: #444;">Структура вопросов:</h3>
    <p style="line-height: 1.6; color: #555;">
        Вопросы в Простом настоящем времени формируются с помощью вспомогательного глагола <strong>"do"</strong> или <strong>"does"</strong> в зависимости от подлежащего. Вспомогательный глагол ставится перед подлежащим в предложении.
    </p>

    <h4 style="color: #444;">Формула:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Для I, you, we, they:</strong><br>
        Do + подлежащее + основной глагол?<br>
        Пример: <strong>Do you like coffee?</strong> (Ты любишь кофе?)
    </p>

    <p style="line-height: 1.6; color: #555;">
        <strong>Для he, she, it:</strong><br>
        Does + подлежащее + основной глагол?<br>
        Пример: <strong>Does she play the piano?</strong> (Она играет на пианино?)
    </p>

    <h4 style="color: #444;">Примечания:</h4>
    <p style="line-height: 1.6; color: #555;">
        - <strong>"Do"</strong> используется с <strong>I, you, we, they</strong>.<br>
        - <strong>"Does"</strong> используется с <strong>he, she, it</strong>.<br>
        - Вопросы типа "да/нет" всегда требуют инверсии: вспомогательный глагол (do/does) идет перед подлежащим.<br>
        - Для других глаголов используется вспомогательный глагол <strong>do/does</strong>; инверсия не применяется в предложениях с другими глаголами.
    </p>

    <p style="line-height: 1.6; color: #555;">
        Эти правила помогают правильно формировать вопросы в Простом настоящем времени в различных контекстах.
    </p>
</div>
`);

      if (this.level === 17) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Простое настоящее время (Present Simple) в негативной форме</h2>
    
    <h4 style="color: #444;">Правило образования:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для образования негативных предложений в простом настоящем времени используется вспомогательный глагол <strong>"do"</strong> или <strong>"does"</strong> в сочетании с частицей <strong>"not"</strong> (сокращенно <strong>"don't"</strong> или <strong>"doesn't"</strong>).
    </p>

    <h4 style="color: #444;">Структура:</h4>
    <p style="line-height: 1.6; color: #555;">
        1. Для подлежащих <strong>I, you, we, they</strong>: <br>
        <strong>Утверждение:</strong> I work. <br>
        <strong>Отрицание:</strong> I do not work. (Я не работаю.)
    </p>
    <p style="line-height: 1.6; color: #555;">
        2. Для подлежащих <strong>he, she, it</strong>: <br>
        <strong>Утверждение:</strong> She plays. <br>
        <strong>Отрицание:</strong> She does not play. (Она не играет.)
    </p>

    <h4 style="color: #444;">Ситуации использования:</h4>
    <p style="line-height: 1.6; color: #555;">
        Простое настоящее время используется для описания:<br>
        - Регулярных действий или привычек: "I drink coffee every morning." (Я пью кофе каждое утро.)<br>
        - Фактов или общепринятых истин: "Water boils at 100 degrees Celsius." (Вода закипает при 100 градусах Цельсия.)<br>
        - Описания расписаний и программ: "The train leaves at 9 PM." (Поезд отправляется в 9 вечера.)<br>
        - Действий, происходящих в настоящее время, но не в данный момент: "He usually works late." (Он обычно работает допоздна.)
    </p>

    <p style="line-height: 1.6; color: #555;">
        Эти правила обеспечивают правильное использование простого настоящего времени в различных контекстах и формах.
    </p>
</div>
`);

      if (this.level === 16) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 20px; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="color: #333;">Простое Настоящее Время с Периодичностью</h1>

    <h2 style="color: #555;">Определение:</h2>
    <p>
        Простое настоящее время (Present Simple) используется для описания привычных действий, фактов и рутин. Оно часто включает наречия частоты, чтобы указать, как часто происходит действие.
    </p>

    <h2 style="color: #555;">Ключевые моменты:</h2>
    <ul>
        <li><strong>Наречия Частоты:</strong> Наиболее распространенные наречия частоты:</li>
        <ul>
            <li>Always (всегда)</li>
            <li>Usually (обычно)</li>
            <li>Often (часто)</li>
            <li>Sometimes (иногда)</li>
            <li>Rarely (редко)</li>
            <li>Never (никогда)</li>
        </ul>
    </ul>

    <h2 style="color: #555;">Образование:</h2>
    <h3>1. Утвердительные предложения:</h3>
    <p>
        Используйте базовую форму глагола. Например:
        <br>I always eat breakfast. — Я всегда завтракаю.
        <br>She usually goes for a walk. — Она обычно гуляет.
    </p>

    <h3>2. Отрицательные предложения:</h3>
    <p>
        Используйте вспомогательный глагол do/does + not + базовый глагол. Например:
        <br>I do not eat breakfast. — Я не завтракаю.
        <br>He does not go for a walk. — Он не гуляет.
    </p>

    <h3>3. Вопросы:</h3>
    <p>
        Сформируйте вопросы, поставив do/does перед подлежащим:
        <br>Do you always eat breakfast? — Ты всегда завтракаешь?
        <br>Does she usually go for a walk? — Она обычно гуляет?
    </p>

    <h2 style="color: #555;">Использование:</h2>
    <p>
        Когда вы используете наречия частоты, они обычно стоят перед основным глаголом, но после глагола "to be". Например:
        <br>I always play football. — Я всегда играю в футбол.
        <br>He is often late. — Он часто опаздывает.
    </p>

    <p>
        Эта структура помогает четко передать частоту действий в простом настоящем времени.
    </p>
</div>
`);

      if (this.level === 15) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Present Simple</h2>
    <p style="line-height: 1.6; color: #555;">
        Настоящее простое время (Present Simple) используется для описания регулярных действий, привычек, фактов и состояний, а также для выражения общеизвестных истин.
    </p>
    <p style="line-height: 1.6; color: #555;">
        Оно применяется для выражения действия, которое происходит постоянно или с определенной периодичностью.
    </p>

    <h3 style="color: #333;">Образование Present Simple</h3>

    <h4 style="color: #444;">Утверждения:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для положительных предложений используется основное значение глагола. Например:
        <br> - I work. (Я работаю.)
        <br> - She plays. (Она играет.)
    </p>

    <h4 style="color: #444;">Отрицательные предложения:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для отрицательных предложений используется вспомогательный глагол do/does с частицей not. Например:
        <br> - I do not work. (Я не работаю.)
        <br> - He does not play. (Он не играет.)
    </p>

    <h4 style="color: #444;">Вопросы:</h4>
    <p style="line-height: 1.6; color: #555;">
        Вопросы в Present Simple образуются с помощью вспомогательного глагола do/does перед подлежащим:
        <br> - Do you work? (Ты работаешь?)
        <br> - Does she play? (Она играет?)
    </p>

    <h3 style="color: #333;">Правила использования:</h3>
    <p style="line-height: 1.6; color: #555;">
        - Do используется с I, you, we, they.
        <br> - Does используется с he, she, it.
    </p>

    <p style="line-height: 1.6; color: #555;">
        Эти правила обеспечивают правильное использование Present Simple в различных контекстах.
    </p>
</div>`);

      if (this.level === 14) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Определение настоящего продолженного времени</h2>
    <p style="line-height: 1.6; color: #555;">
        Настоящее продолженное время используется для описания действий, происходящих в данный момент, или для обозначения временных ситуаций. Оно образуется при помощи вспомогательного глагола "to be" и основного глагола с окончанием -ing.
    </p>

    <h3 style="color: #333;">Образование вопросов в настоящем продолженном времени</h3>

    <h4 style="color: #444;">Структура вопроса:</h4>
    <p style="line-height: 1.6; color: #555;">
        Вопросы в настоящем продолженном времени образуются путем вынесения вспомогательного глагола "to be" (am, is, are) на первое место перед подлежащим.
    </p>

    <h4 style="color: #444;">Формула:</h4>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + подлежащее + глагол с окончанием -ing?
    </p>

    <h4 style="color: #444;">Примеры:</h4>
    <p style="line-height: 1.6; color: #555;">
        - Are you studying English? (Ты изучаешь английский?)<br>
        - Is he playing football? (Он играет в футбол?)<br>
        - Am I making noise? (Я шумлю?)
    </p>

    <h4 style="color: #444;">Важные заметки:</h4>
    <p style="line-height: 1.6; color: #555;">
        - "Am" используется только с "I": Am I late? (Я опоздал?)<br>
        - "Is" используется с единственным числом: Is she coming? (Она приходит?)<br>
        - "Are" используется с множественным числом и с "you": Are they here? (Они здесь?)
    </p>

    <p style="line-height: 1.6; color: #555;">
        Таким образом, для образования вопросов в настоящем продолженном времени важно определить правильную форму "to be" в зависимости от подлежащего и следовать указанной формуле.
    </p>
</div>
`);

      if (this.level === 9 || this.level === 10) 
            return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Краткая форма глагола to be</h2>
    <p style="line-height: 1.6; color: #555;">
        Краткая форма глагола to be (сокращённая форма) образуется за счет соединения глагола с подлежащим (местоимением) с помощью апострофа. Вот основные правила:
    </p>
    <ul style="line-height: 1.6; color: #555;">
        <li>I am → I'm</li>
        <li>You are → You're</li>
        <li>He is → He's</li>
        <li>She is → She's</li>
        <li>It is → It's</li>
        <li>We are → We're</li>
        <li>They are → They're</li>
    </ul>
    <p style="line-height: 1.6; color: #555;">
        Сокращённая форма часто используется в разговорной речи и неформальной письменной речи.
    </p>
</div>
`);
          
      if (this.level === 11) 
            return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Вопросы с глаголом "to be" (Present/Past Simple)</h2>
    <p style="line-height: 1.6; color: #555;">
        Для образования вопросительных предложений с глаголом to be в настоящем (Present Simple) или прошедшем времени (Past Simple), глагол выносится на первое место перед подлежащим.
    </p>

    <h3 style="color: #333;">Пример 1:</h3>
    <p style="line-height: 1.6; color: #555;">
        Утверждение: You are ready.<br>
        Вопрос: Are you ready?
    </p>

    <h3 style="color: #333;">Пример 2:</h3>
    <p style="line-height: 1.6; color: #555;">
        Утверждение: He was tired.<br>
        Вопрос: Was he tired?
    </p>

    <h2 style="color: #333;">Особенности:</h2>
    <p style="line-height: 1.6; color: #555;">
        Вопросы типа да/нет всегда требуют инверсии: глагол to be (в любой форме) идёт перед подлежащим.
        Это правило не применяется в предложениях с другими глаголами (не to be), там используются вспомогательные глаголы (do, does, did).
    </p>
</div>
`);
           if (this.level === 13) 
            return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Образование утверждений</h2>
    <p style="line-height: 1.6; color: #555;">
        Настоящее продолженное время (Present Continuous) используется для описания действий, которые происходят в данный момент времени или временно происходят в настоящем. 
        Оно образуется при помощи глагола to be (am, is, are) и добавления окончания -ing к смысловому глаголу.
    </p>

    <h3 style="color: #333;">Формула:</h3>
    <p style="line-height: 1.6; color: #555;">
        Подлежащее + am/is/are + глагол с окончанием -ing
    </p>

    <h3 style="color: #333;">Примеры:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am working. — Я работаю. <br>
        She is reading a book. — Она читает книгу.
    </p>

    <h2 style="color: #333;">Образование вопросов</h2>
    <p style="line-height: 1.6; color: #555;">
        Для вопросов глагол to be выносится на первое место перед подлежащим.
    </p>

    <h3 style="color: #333;">Формула:</h3>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + подлежащее + глагол с окончанием -ing?
    </p>

    <h3 style="color: #333;">Примеры:</h3>
    <p style="line-height: 1.6; color: #555;">
        Are you working? — Ты работаешь? <br>
        Is she reading a book? — Она читает книгу?
    </p>

    <h2 style="color: #333;">Образование отрицаний</h2>
    <p style="line-height: 1.6; color: #555;">
        Отрицательная форма образуется при помощи not после формы глагола to be.
    </p>

    <h3 style="color: #333;">Формула:</h3>
    <p style="line-height: 1.6; color: #555;">
        Подлежащее + am/is/are + not + глагол с окончанием -ing
    </p>

    <h3 style="color: #333;">Примеры:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am not working. — Я не работаю. <br>
        They are not sleeping. — Они не спят.
    </p>
</div>
`);

        return this.translate.translate('Просто учим слова');
    }
}

function cardThoury(thisS)
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = thisS.strLocal;
}
