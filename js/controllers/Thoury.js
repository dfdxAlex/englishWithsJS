
class Thoury
{

static handleThoury(level)
{
    this.level = level;
    this.translate = FactoryRegistr.getObject("LanguageController");

    // const modslWindow = `
    // <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    //   Теория
    // </button>
    // <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    //   <div class="modal-dialog">
    //     <div class="modal-content">
    //       <div class="modal-header">
    //         <h1 class="modal-title fs-5" id="staticBackdropLabel">${this.headerThoury()}</h1>
    //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
    //       </div>
    //       <div class="modal-body">
    //         ${this.bodyThoury()}
    //       </div>
    //       <div class="modal-footer">
    //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${this.translate.translate('Понятно')}</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //     `;    

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
    static headerThoury()
    {
        if (this.level === 9 || this.level === 10) 
            return this.translate.translate('Сокращенная форма глагола to Be');
        if (this.level === 11) 
            return this.translate.translate('Создание вопросов в Present Simple и Past Simple');
        if (this.level === 13) 
          return this.translate.translate('Правило для настоящего продолженного времени (Present Continuous)');
        if (this.level === 14) 
          return this.translate.translate('Образования вопросов в настоящем продолженном времени P.C.');
        if (this.level === 15) 
          return this.translate.translate('Простое настоящее P.S.');
        if (this.level === 16) 
          return this.translate.translate('Простое настоящее  P.S. плюс периодичность');
        if (this.level === 17) 
          return this.translate.translate('Простое настоящее  P.S. негативное');
        if (this.level === 18) 
          return this.translate.translate('Простое настоящее  P.S. вопросы');
        if (this.level === 19) 
          return this.translate.translate('Выбор между P.S. и настоящим продолженным P.C.');
        if (this.level === 21) 
          return this.translate.translate('Глаголы Have и Have Got');
        if (this.level === 23) 
            return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Глаголы Was и Were</h1>`);

        return this.translate.translate('Просто учим слова');
    }
    // Функция помещает информацию в тело раздела Теория
    static bodyThoury()
    {
      // if (this.level === 15) 
      //   return this.translate.translate(``);
      if (this.level === 23) 
         return this.translate.translate(`<div class="container" style="margin-top: 20px;">
    <h1 style="text-align: center; color: #333;">Справка по глаголам "was" и "were"</h1>

    <h2 style="color: #444; margin-top: 20px;">1. Правила использования</h2>
    <p><strong>"Was"</strong> используется с местоимениями <strong>I, he, she, it</strong> (единичными подлежащими).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Пример: <em>I was at home.</em> (Я был дома)
    </p>
    <p><strong>"Were"</strong> используется с местоимениями <strong>you, we, they</strong> (множественными подлежащими).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Пример: <em>They were happy.</em> (Они были счастливы)
    </p>

    <h2 style="color: #444; margin-top: 20px;">2. Образование предложений</h2>
    
    <h3 style="color: #555; font-weight: bold;">Положительные утверждения (Statements)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I was tired after work. (Я был уставшим после работы)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They were in the park yesterday. (Они были в парке вчера)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Отрицательные утверждения (Negative Statements)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I wasn’t tired after work. (Я не был уставшим после работы)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They weren’t in the park yesterday. (Они не были в парке вчера)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Вопросительные предложения (Questions)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Was she at school? (Она была в школе?)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Were you at the party last night? (Ты был на вечеринке вчера?)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Отрицательные вопросительные предложения (Negative Questions)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Wasn’t he at work yesterday? (Разве он не был на работе вчера?)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Weren’t they ready for the trip? (Разве они не были готовы к поездке?)
        </li>
    </ul>
</div>
`);

      if (this.level === 21) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Использование глаголов "have" и "have got"</h2>
    
    <p style="line-height: 1.6; color: #555;">
        Глаголы "have" и "have got" используются для выражения обладания, но могут различаться в формальном и неформальном использовании. Ниже представлены правила их использования.
    </p>
    
    <h3 style="color: #333;">1. Утверждения</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I have a car.<br>
        - **Have got**: I have got a car.
    </p>
    
    <h3 style="color: #333;">2. Негативные утверждения</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I do not have a car.<br>
        - **Have got**: I have not got a car.
    </p>

    <h3 style="color: #333;">3. Вопросы</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: Do you have a car?<br>
        - **Have got**: Have you got a car?
    </p>

    <h3 style="color: #333;">Краткая форма "have got"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Местоимение</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Краткая форма "have got"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Краткая форма "has got"</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">I</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">I've got</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">You</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">You've got</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">He</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">He's got</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">She</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">She's got</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">It</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">It's got</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">We</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">We've got</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">They</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">They've got</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
        </tbody>
    </table>

    <h3 style="color: #333;">Краткая форма "have"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Местоимение</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Краткая форма "have"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Краткая форма "has"</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">I</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">I've</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">You</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">You've</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">He</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">He's</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">She</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">She's</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">It</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">It's</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">We</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">We've</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">They</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">They've</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
        </tbody>
    </table>

</div>
`);

      if (this.level === 19) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Простое настоящее vs. Настоящее продолженное</h2>
    
    <h3 style="color: #444;">Простое настоящее</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Определение:</strong> Настоящее простое время описывает привычные действия, общие истины или факты, которые всегда верны. Оно указывает на действия, которые происходят регулярно или являются постоянными.
    </p>
    
    <h4 style="color: #444;">Когда использовать:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>Для выражения рутины или привычек.</li>
        <li>Для указания фактов или истин.</li>
        <li>Для выражения постоянных ситуаций.</li>
    </ul>
    
    <h4 style="color: #444;">Образование:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Утвердительные предложения:</strong> <br>
        Пример: "He plays football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Отрицательные предложения:</strong> <br>
        Пример: "He does not play football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Вопросы:</strong> <br>
        Пример: "Does he play football?"
    </p>
    
    <h3 style="color: #444;">Настоящее продолженное</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Определение:</strong> Настоящее продолженное время описывает действия, которые происходят в данный момент времени или временные ситуации.
    </p>
    
    <h4 style="color: #444;">Когда использовать:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>Для выражения действий, происходящих прямо сейчас.</li>
        <li>Для указания временных ситуаций.</li>
        <li>Для описания будущих планов.</li>
    </ul>
    
    <h4 style="color: #444;">Образование:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Утвердительные предложения:</strong> <br>
        Пример: "He is playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Отрицательные предложения:</strong> <br>
        Пример: "He is not playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Вопросы:</strong> <br>
        Пример: "Is he playing football?"
    </p>
    
    <h3 style="color: #444;">Ключевые различия</h3>
    <ul style="line-height: 1.6; color: #555;">
        <li><strong>Временные рамки:</strong>
            <ul>
                <li>Простое настоящее относится к привычным действиям и общим истинам.</li>
                <li>Настоящее продолженное относится к действиям, происходящим в данный момент, или временным ситуациям.</li>
            </ul>
        </li>
        <li><strong>Форма:</strong>
            <ul>
                <li>Простое настоящее использует основную форму глагола, тогда как настоящее продолженное использует вспомогательный глагол "to be" в сочетании с основным глаголом в форме -ing.</li>
            </ul>
        </li>
        <li><strong>Использование:</strong>
            <ul>
                <li>Простое настоящее используется для описания рутин и фактов.</li>
                <li>Настоящее продолженное используется для ongoing actions и будущих планов.</li>
            </ul>
        </li>
    </ul>
    
    <h3 style="color: #444;">Таблица сравнения</h3>
    <table class="table table-bordered" style="width: 100%; border: 1px solid #ddd;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="text-align: left;">Аспект</th>
                <th style="text-align: left;">Простое настоящее</th>
                <th style="text-align: left;">Настоящее продолженное</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Определение</td>
                <td>Регулярные действия, факты</td>
                <td>Действия, происходящие сейчас или временно</td>
            </tr>
            <tr>
                <td>Случаи использования</td>
                <td>Привычки, факты, постоянные ситуации</td>
                <td>Текущие действия, будущие планы</td>
            </tr>
            <tr>
                <td>Утвердительная форма</td>
                <td>Пример: "He plays football."</td>
                <td>Пример: "He is playing football."</td>
            </tr>
            <tr>
                <td>Отрицательная форма</td>
                <td>Пример: "He does not play football."</td>
                <td>Пример: "He is not playing football."</td>
            </tr>
            <tr>
                <td>Вопросы</td>
                <td>Пример: "Does he play football?"</td>
                <td>Пример: "Is he playing football?"</td>
            </tr>
        </tbody>
    </table>
    
    <p style="line-height: 1.6; color: #555;">
        Эти различия помогут понять, в каких контекстах правильно использовать каждое время как в устной, так и в письменной речи.
    </p>
</div>
`);

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
