(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();function returnInfoForDiamant(){return`<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog return-info-for-diamant">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="diamondsModalLabel">Информация о диамантах</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>За каждый правильный ответ начисляется <span>несколько диамантов</span>.</p>
        <p>За каждую не снятую ошибку снимается <span>три диаманта</span>.</p>
        <p>Для снятия одной ошибки тратится <span>два диаманта</span>.</p>
        <p>Снимаются ошибки в разделе статистики кнопкой <span>"Сбросить"</span>.</p>
        <p>Для отмены ошибок необходимо иметь положительные ответы в каждом конкретном тесте.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</div>
`}function returnInfoUnit22EN(){return`
      <div class="modal-body" style="color: #333; font-family: sans-serif; padding: 24px;">
        <h4 style="margin-bottom: 16px;">Passive Voice: <code>is being done</code> and <code>has been done</code></h4>

        <h5 style="color: #007BFF;">1. <code>is being done</code></h5>
        <p><strong>Tense:</strong> Present Continuous Passive</p>
        <p><strong>Used when:</strong> the action <em>is happening right now</em>. The focus is on the process.</p>
        <p><strong>Structure:</strong> Subject + is/are + <strong>being</strong> + past participle (V3)</p>

        <ul style="padding-left: 20px;">
          <li><strong>Statement:</strong> The car <code>is being repaired</code>. — The car is currently being repaired.</li>
          <li><strong>Negative:</strong> The documents <code>aren’t being printed</code>. — The documents are not being printed.</li>
          <li><strong>Question:</strong> Is the dinner <code>being prepared</code>? — Is someone preparing the dinner right now?</li>
        </ul>

        <hr style="margin: 20px 0;">

        <h5 style="color: #28A745;">2. <code>has been done</code></h5>
        <p><strong>Tense:</strong> Present Perfect Passive</p>
        <p><strong>Used when:</strong> the action <em>has already been completed</em>. The result matters now.</p>
        <p><strong>Structure:</strong> Subject + has/have + <strong>been</strong> + past participle (V3)</p>

        <ul style="padding-left: 20px;">
          <li><strong>Statement:</strong> The work <code>has been finished</code>. — The work is done.</li>
          <li><strong>Negative:</strong> The homework <code>hasn’t been done</code>. — The homework is not done yet.</li>
          <li><strong>Question:</strong> Has the house <code>been sold</code>? — Is the house already sold?</li>
        </ul>

        <hr style="margin: 20px 0;">

        <p><strong>Comparison:</strong></p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <th style="border: 1px solid #ccc; padding: 8px;">Form</th>
            <th style="border: 1px solid #ccc; padding: 8px;">When to use</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Example</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">is being done</td>
            <td style="border: 1px solid #ccc; padding: 8px;">action in progress</td>
            <td style="border: 1px solid #ccc; padding: 8px;">The room is being cleaned.</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">has been done</td>
            <td style="border: 1px solid #ccc; padding: 8px;">action completed</td>
            <td style="border: 1px solid #ccc; padding: 8px;">The room has been cleaned.</td>
          </tr>
        </table>
      </div>
    `}function returnInfoUnit22RU(){return`
      <div class="modal-body" style="color: #333; font-family: sans-serif; padding: 24px;">
        <h4 style="margin-bottom: 16px;">Пассивный залог: <code>is being done</code> и <code>has been done</code></h4>

        <h5 style="color: #007BFF;">1. <code>is being done</code></h5>
        <p><strong>Время:</strong> Present Continuous Passive (настоящее длительное пассивное)</p>
        <p><strong>Когда используется:</strong> действие происходит <em>прямо сейчас</em>, важен сам процесс.</p>
        <p><strong>Формула:</strong> Подлежащее + is/are + <strong>being</strong> + V3 (причастие прошедшего времени)</p>

        <ul style="padding-left: 20px;">
          <li><strong>Утвердительное:</strong> The car <code>is being repaired</code>. — Машину ремонтируют.</li>
          <li><strong>Отрицательное:</strong> The documents <code>aren’t being printed</code>. — Документы не печатаются.</li>
          <li><strong>Вопросительное:</strong> Is the dinner <code>being prepared</code>? — Ужин готовится?</li>
        </ul>

        <hr style="margin: 20px 0;">

        <h5 style="color: #28A745;">2. <code>has been done</code></h5>
        <p><strong>Время:</strong> Present Perfect Passive (настоящее совершенное пассивное)</p>
        <p><strong>Когда используется:</strong> действие уже <em>завершено</em>, и важен его результат.</p>
        <p><strong>Формула:</strong> Подлежащее + has/have + <strong>been</strong> + V3</p>

        <ul style="padding-left: 20px;">
          <li><strong>Утвердительное:</strong> The work <code>has been finished</code>. — Работа завершена.</li>
          <li><strong>Отрицательное:</strong> The homework <code>hasn’t been done</code>. — Домашка не сделана.</li>
          <li><strong>Вопросительное:</strong> Has the house <code>been sold</code>? — Дом продан?</li>
        </ul>

        <hr style="margin: 20px 0;">

        <p><strong>Сравнение форм:</strong></p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <th style="border: 1px solid #ccc; padding: 8px;">Форма</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Когда используется</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Пример</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">is being done</td>
            <td style="border: 1px solid #ccc; padding: 8px;">действие в процессе</td>
            <td style="border: 1px solid #ccc; padding: 8px;">The room is being cleaned.</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">has been done</td>
            <td style="border: 1px solid #ccc; padding: 8px;">действие завершено</td>
            <td style="border: 1px solid #ccc; padding: 8px;">The room has been cleaned.</td>
          </tr>
        </table>
      </div>
    `}function returnInfoUnit22PL(){return`
      <div class="modal-body" style="color: #333; font-family: sans-serif; padding: 24px;">
        <h4 style="margin-bottom: 16px;">Пассивный залог: <code>is being done</code> и <code>has been done</code></h4>

        <h5 style="color: #007BFF;">1. <code>is being done</code></h5>
        <p><strong>Время:</strong> Present Continuous Passive (настоящее длительное пассивное)</p>
        <p><strong>Когда используется:</strong> действие происходит <em>прямо сейчас</em>, важен сам процесс.</p>
        <p><strong>Формула:</strong> Подлежащее + is/are + <strong>being</strong> + V3 (причастие прошедшего времени)</p>

        <ul style="padding-left: 20px;">
          <li><strong>Утвердительное:</strong> The car <code>is being repaired</code>. — Машину ремонтируют.</li>
          <li><strong>Отрицательное:</strong> The documents <code>aren’t being printed</code>. — Документы не печатаются.</li>
          <li><strong>Вопросительное:</strong> Is the dinner <code>being prepared</code>? — Ужин готовится?</li>
        </ul>

        <hr style="margin: 20px 0;">

        <h5 style="color: #28A745;">2. <code>has been done</code></h5>
        <p><strong>Время:</strong> Present Perfect Passive (настоящее совершенное пассивное)</p>
        <p><strong>Когда используется:</strong> действие уже <em>завершено</em>, и важен его результат.</p>
        <p><strong>Формула:</strong> Подлежащее + has/have + <strong>been</strong> + V3</p>

        <ul style="padding-left: 20px;">
          <li><strong>Утвердительное:</strong> The work <code>has been finished</code>. — Работа завершена.</li>
          <li><strong>Отрицательное:</strong> The homework <code>hasn’t been done</code>. — Домашка не сделана.</li>
          <li><strong>Вопросительное:</strong> Has the house <code>been sold</code>? — Дом продан?</li>
        </ul>

        <hr style="margin: 20px 0;">

        <p><strong>Сравнение форм:</strong></p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <th style="border: 1px solid #ccc; padding: 8px;">Форма</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Когда используется</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Пример</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">is being done</td>
            <td style="border: 1px solid #ccc; padding: 8px;">действие в процессе</td>
            <td style="border: 1px solid #ccc; padding: 8px;">The room is being cleaned.</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">has been done</td>
            <td style="border: 1px solid #ccc; padding: 8px;">действие завершено</td>
            <td style="border: 1px solid #ccc; padding: 8px;">The room has been cleaned.</td>
          </tr>
        </table>
      </div>
    `}function returnInfoUnit22UA(){return`
      <div class="modal-body" style="color: #333; font-family: sans-serif; padding: 24px;">
        <h4 style="margin-bottom: 16px;">Strona bierna: <code>is being done</code> i <code>has been done</code></h4>

        <h5 style="color: #007BFF;">1. <code>is being done</code></h5>
        <p><strong>Czas:</strong> Present Continuous Passive (czas teraźniejszy ciągły w stronie biernej)</p>
        <p><strong>Użycie:</strong> czynność <em>dzieje się teraz</em>, ważny jest sam proces.</p>
        <p><strong>Budowa:</strong> Podmiot + is/are + <strong>being</strong> + czasownik w trzeciej formie (Past Participle)</p>

        <ul style="padding-left: 20px;">
          <li><strong>Zdanie twierdzące:</strong> The car <code>is being repaired</code>. — Samochód jest właśnie naprawiany.</li>
          <li><strong>Zdanie przeczące:</strong> The documents <code>aren’t being printed</code>. — Dokumenty nie są drukowane.</li>
          <li><strong>Pytanie:</strong> Is the dinner <code>being prepared</code>? — Czy obiad jest przygotowywany?</li>
        </ul>

        <hr style="margin: 20px 0;">

        <h5 style="color: #28A745;">2. <code>has been done</code></h5>
        <p><strong>Czas:</strong> Present Perfect Passive (czas teraźniejszy dokonany w stronie biernej)</p>
        <p><strong>Użycie:</strong> czynność już się <em>zakończyła</em>, liczy się rezultat teraz.</p>
        <p><strong>Budowa:</strong> Podmiot + has/have + <strong>been</strong> + czasownik w trzeciej formie</p>

        <ul style="padding-left: 20px;">
          <li><strong>Zdanie twierdzące:</strong> The work <code>has been finished</code>. — Praca została zakończona.</li>
          <li><strong>Zdanie przeczące:</strong> The homework <code>hasn’t been done</code>. — Praca domowa nie została zrobiona.</li>
          <li><strong>Pytanie:</strong> Has the house <code>been sold</code>? — Czy dom został sprzedany?</li>
        </ul>

        <hr style="margin: 20px 0;">

        <p><strong>Porównanie form:</strong></p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <th style="border: 1px solid #ccc; padding: 8px;">Forma</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Kiedy używamy</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Przykład</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">is being done</td>
            <td style="border: 1px solid #ccc; padding: 8px;">czynność trwa</td>
            <td style="border: 1px solid #ccc; padding: 8px;">The room is being cleaned.</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">has been done</td>
            <td style="border: 1px solid #ccc; padding: 8px;">czynność zakończona</td>
            <td style="border: 1px solid #ccc; padding: 8px;">The room has been cleaned.</td>
          </tr>
        </table>
      </div>
    `}function returnInfoForDiamantEN(){return`<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="border: 2px solid #28a745; border-radius: 10px;">
      <div class="modal-header" style="background-color: #e6f7e6;">
        <h5 class="modal-title" id="diamondsModalLabel" style="color: #28a745; font-weight: bold;">Information about diamonds</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-size: 1rem; line-height: 1.5; color: #333;">
        <p style="margin-bottom: 10px;">For each correct answer, <span style="color: #28a745; font-weight: bold;">several diamonds</span> is awarded.</p>
        <p style="margin-bottom: 10px;">For each unresolved error, <span style="color: #dc3545; font-weight: bold;">three diamonds</span> are deducted.</p>
        <p style="margin-bottom: 10px;">To remove one error, you need to spend <span style="color: #ffc107; font-weight: bold;">two diamonds</span>.</p>
        <p style="margin-bottom: 10px;">Errors can be removed in the statistics section using the <span style="color: #007bff; font-style: italic;">"Reset"</span> button.</p>
        <p style="margin-bottom: 0;">To remove errors, you must have positive answers in each specific test.</p>
      </div>
      <div class="modal-footer" style="background-color: #f8f9fa;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`}function returnInfoForDiamantPL(){return`<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="border: 2px solid #28a745; border-radius: 10px;">
      <div class="modal-header" style="background-color: #e6f7e6;">
        <h5 class="modal-title" id="diamondsModalLabel" style="color: #28a745; font-weight: bold;">Informacje o diamentach</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-size: 1rem; line-height: 1.5; color: #333;">
        <p style="margin-bottom: 10px;">Za każdą poprawną odpowiedź przyznawany jest <span style="color: #28a745; font-weight: bold;">kilka diamentów</span>.</p>
        <p style="margin-bottom: 10px;">Za każdy niezredukowany błąd odejmowane są <span style="color: #dc3545; font-weight: bold;">trzy diamenty</span>.</p>
        <p style="margin-bottom: 10px;">Aby usunąć jeden błąd, trzeba zużyć <span style="color: #ffc107; font-weight: bold;">dwa diamenty</span>.</p>
        <p style="margin-bottom: 10px;">Błędy można usuwać w sekcji statystyk przyciskiem <span style="color: #007bff; font-style: italic;">"Zresetuj"</span>.</p>
        <p style="margin-bottom: 0;">Aby usunąć błędy, należy uzyskać pozytywne odpowiedzi w każdym konkretnym teście.</p>
      </div>
      <div class="modal-footer" style="background-color: #f8f9fa;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
      </div>
    </div>
  </div>
</div>
`}function returnInfoForDiamantUA(){return`<div class="modal fade" id="diamondsModal" tabindex="-1" aria-labelledby="diamondsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" style="border: 2px solid #28a745; border-radius: 10px;">
      <div class="modal-header" style="background-color: #e6f7e6;">
        <h5 class="modal-title" id="diamondsModalLabel" style="color: #28a745; font-weight: bold;">Інформація про діаманти</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="font-size: 1rem; line-height: 1.5; color: #333;">
        <p style="margin-bottom: 10px;">За кожну правильну відповідь нараховується <span style="color: #28a745; font-weight: bold;">кілька діамантів</span>.</p>
        <p style="margin-bottom: 10px;">За кожну не зняту помилку знімається <span style="color: #dc3545; font-weight: bold;">три діаманти</span>.</p>
        <p style="margin-bottom: 10px;">Для зняття однієї помилки витрачається <span style="color: #ffc107; font-weight: bold;">два діаманти</span>.</p>
        <p style="margin-bottom: 10px;">Помилки знімаються в розділі статистики кнопкою <span style="color: #007bff; font-style: italic;">"Скинути"</span>.</p>
        <p style="margin-bottom: 0;">Для зняття помилок необхідно мати позитивні відповіді у кожному конкретному тесті.</p>
      </div>
      <div class="modal-footer" style="background-color: #f8f9fa;">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
      </div>
    </div>
  </div>
</div>
`}function returnLevel13(){return`<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
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
`}function returnLevel13EN(){return`<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Formation of Statements</h2>
    <p style="line-height: 1.6; color: #555;">
        Present Continuous tense is used to describe actions happening at the moment or temporarily in the present. 
        It is formed using the verb to be (am, is, are) and adding the -ing ending to the main verb.
    </p>

    <h3 style="color: #333;">Formula:</h3>
    <p style="line-height: 1.6; color: #555;">
        Subject + am/is/are + verb with -ing ending
    </p>

    <h3 style="color: #333;">Examples:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am working. <br>
        She is reading a book.
    </p>

    <h2 style="color: #333;">Formation of Questions</h2>
    <p style="line-height: 1.6; color: #555;">
        For questions, the verb to be is moved to the first position before the subject.
    </p>

    <h3 style="color: #333;">Formula:</h3>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + subject + verb with -ing ending?
    </p>

    <h3 style="color: #333;">Examples:</h3>
    <p style="line-height: 1.6; color: #555;">
        Are you working? <br>
        Is she reading a book?
    </p>

    <h2 style="color: #333;">Formation of Negations</h2>
    <p style="line-height: 1.6; color: #555;">
        The negative form is created by adding not after the form of the verb to be.
    </p>

    <h3 style="color: #333;">Formula:</h3>
    <p style="line-height: 1.6; color: #555;">
        Subject + am/is/are + not + verb with -ing ending
    </p>

    <h3 style="color: #333;">Examples:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am not working. <br>
        They are not sleeping.
    </p>
</div>
`}function returnLevel13PL(){return`<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Tworzenie stwierdzeń</h2>
    <p style="line-height: 1.6; color: #555;">
        Czas teraźniejszy ciągły (Present Continuous) jest używany do opisywania działań, które mają miejsce w danym momencie lub tymczasowo zachodzą w teraźniejszości. 
        Tworzy się go za pomocą czasownika to be (am, is, are) oraz dodania końcówki -ing do czasownika znaczącego.
    </p>

    <h3 style="color: #333;">Formuła:</h3>
    <p style="line-height: 1.6; color: #555;">
        Podmiot + am/is/are + czasownik z końcówką -ing
    </p>

    <h3 style="color: #333;">Przykłady:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am working. — Ja pracuję. <br>
        She is reading a book. — Ona czyta książkę.
    </p>

    <h2 style="color: #333;">Tworzenie pytań</h2>
    <p style="line-height: 1.6; color: #555;">
        Aby zadać pytania, czasownik to be należy przenieść na pierwsze miejsce przed podmiotem.
    </p>

    <h3 style="color: #333;">Formuła:</h3>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + podmiot + czasownik z końcówką -ing?
    </p>

    <h3 style="color: #333;">Przykłady:</h3>
    <p style="line-height: 1.6; color: #555;">
        Are you working? — Czy ty pracujesz? <br>
        Is she reading a book? — Czy ona czyta książkę?
    </p>

    <h2 style="color: #333;">Tworzenie zaprzeczeń</h2>
    <p style="line-height: 1.6; color: #555;">
        Forma zaprzeczająca tworzy się za pomocą not po formie czasownika to be.
    </p>

    <h3 style="color: #333;">Formuła:</h3>
    <p style="line-height: 1.6; color: #555;">
        Podmiot + am/is/are + not + czasownik z końcówką -ing
    </p>

    <h3 style="color: #333;">Przykłady:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am not working. — Ja nie pracuję. <br>
        They are not sleeping. — Oni nie śpią.
    </p>
</div>
`}function returnLevel13UA(){return`<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Утворення стверджень</h2>
    <p style="line-height: 1.6; color: #555;">
        Теперішній тривалий час (Present Continuous) використовується для опису дій, які відбуваються в даний момент часу або тимчасово відбуваються в теперішньому. 
        Він утворюється за допомогою дієслова to be (am, is, are) і додавання закінчення -ing до змістового дієслова.
    </p>

    <h3 style="color: #333;">Формула:</h3>
    <p style="line-height: 1.6; color: #555;">
        Підмет + am/is/are + дієслово із закінченням -ing
    </p>

    <h3 style="color: #333;">Приклади:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am working. — Я працюю. <br>
        She is reading a book. — Вона читає книгу.
    </p>

    <h2 style="color: #333;">Утворення питань</h2>
    <p style="line-height: 1.6; color: #555;">
        Для питань дієслово to be виноситься на перше місце перед підметом.
    </p>

    <h3 style="color: #333;">Формула:</h3>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + підмет + дієслово із закінченням -ing?
    </p>

    <h3 style="color: #333;">Приклади:</h3>
    <p style="line-height: 1.6; color: #555;">
        Are you working? — Ти працюєш? <br>
        Is she reading a book? — Вона ч
`}function returnLevel38(){return`<div class="accordion" id="presentPerfectAccordion">
  <!-- Определение Present Perfect -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDefinition" aria-expanded="true">
        Что такое Present Perfect?
      </button>
    </h2>
    <div id="collapseDefinition" class="accordion-collapse collapse show" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p><strong>Present Perfect</strong> (<code>have/has + V3 (Past Participle)</code>) используется, когда действие:</p>
        <ul>
          <li>✔ Завершено, но связано с настоящим (результат важен сейчас).</li>
          <li>✔ Началось в прошлом и продолжается до настоящего момента.</li>
          <li>✔ Произошло в неопределённое время в прошлом, но имеет значение для настоящего.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Simple -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrSimp">
        Когда Present Perfect используется с Present Simple?
      </button>
    </h2>
    <div id="collapsePrPerfPrSimp" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>Используется, когда <strong>Present Simple</strong> описывает повторяющееся или общее явление, а <strong>Present Perfect</strong> подчёркивает опыт, изменения или их влияние.</p>
        
        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I've always loved how she cooks.</strong> (Я всегда любил, как она готовит.)</p>
          <p>✅ <strong>We have noticed that he talks too much.</strong> (Мы заметили, что он слишком много говорит.)</p>
          <p>✅ <strong>She has never understood why people like this movie.</strong> (Она никогда не понимала, почему людям нравится этот фильм.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Continuous -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrCont">
        Когда Present Perfect используется с Present Continuous?
      </button>
    </h2>
    <div id="collapsePrPerfPrCont" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>Используется, когда <strong>Present Continuous</strong> описывает текущее действие, а <strong>Present Perfect</strong> объясняет его причину или подводит итог.</p>

        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I have noticed that she is talking to him again.</strong> (Я заметил, что она снова с ним разговаривает.)</p>
          <p>✅ <strong>They have been surprised that he is learning a new language.</strong> (Они были удивлены, что он учит новый язык.)</p>
          <p>✅ <strong>We have realized that she is working too hard.</strong> (Мы поняли, что она слишком много работает.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Общий вывод -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConclusion">
        Общий вывод
      </button>
    </h2>
    <div id="collapseConclusion" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <ul>
          <li>📌 <strong>PrPerf + PrSimp</strong> → акцент на факте, опыте, изменении.</li>
          <li>📌 <strong>PrPerf + PrCont</strong> → акцент на действии, происходящем сейчас.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`}function returnLevel38EN(){return`<div class="accordion" id="presentPerfectAccordion">
  <!-- Definition of Present Perfect -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDefinition" aria-expanded="true">
        What is Present Perfect?
      </button>
    </h2>
    <div id="collapseDefinition" class="accordion-collapse collapse show" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p><strong>Present Perfect</strong> (<code>have/has + V3 (Past Participle)</code>) is used when an action:</p>
        <ul>
          <li>✔ Has been completed but has relevance to the present (the result is important now).</li>
          <li>✔ Started in the past and continues to the present.</li>
          <li>✔ Happened at an unspecified time in the past but is relevant to the present.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Simple -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrSimp">
        When do we use Present Perfect with Present Simple?
      </button>
    </h2>
    <div id="collapsePrPerfPrSimp" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>We use Present Simple when referring to recurring or general facts, and Present Perfect emphasizes experience, changes, or their impact.</p>
        
        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I've always loved how she cooks.</strong> (Experience related to the present.)</p>
          <p>✅ <strong>We have noticed that he talks too much.</strong> (The action observed, with the result related to the present.)</p>
          <p>✅ <strong>She has never understood why people like this movie.</strong> (Refers to an experience up until the present.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Continuous -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrCont">
        When do we use Present Perfect with Present Continuous?
      </button>
    </h2>
    <div id="collapsePrPerfPrCont" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>We use Present Continuous to describe an ongoing action, and Present Perfect explains its cause or summarizes its result.</p>

        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I have noticed that she is talking to him again.</strong> (Present Perfect gives a sense of impact, Present Continuous describes the ongoing action.)</p>
          <p>✅ <strong>They have been surprised that he is learning a new language.</strong> (The surprise in the present and the continuous action of learning.)</p>
          <p>✅ <strong>We have realized that she is working too hard.</strong> (Realization in the present of the ongoing action.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- General Summary -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConclusion">
        General Summary
      </button>
    </h2>
    <div id="collapseConclusion" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <ul>
          <li>📌 <strong>PrPerf + PrSimp</strong> → Emphasis on fact, experience, or change.</li>
          <li>📌 <strong>PrPerf + PrCont</strong> → Emphasis on ongoing action and its relevance to the present.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`}function returnLevel38PL(){return`<div class="accordion" id="presentPerfectAccordion">
  <!-- Definicja Present Perfect -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDefinition" aria-expanded="true">
        Co to jest Present Perfect?
      </button>
    </h2>
    <div id="collapseDefinition" class="accordion-collapse collapse show" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p><strong>Present Perfect</strong> (<code>have/has + V3 (Past Participle)</code>) jest używane, gdy czynność:</p>
        <ul>
          <li>✔ Została zakończona, ale ma związek z teraźniejszością (rezultat jest ważny teraz).</li>
          <li>✔ Zaczęła się w przeszłości i trwa do teraz.</li>
          <li>✔ Wydarzyła się w nieokreślonym czasie w przeszłości, ale ma znaczenie dla teraźniejszości.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Simple -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrSimp">
        Kiedy używamy Present Perfect z Present Simple?
      </button>
    </h2>
    <div id="collapsePrPerfPrSimp" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>Używamy, gdy <strong>Present Simple</strong> opisuje powtarzające się lub ogólne zjawisko, a <strong>Present Perfect</strong> podkreśla doświadczenie, zmiany lub ich wpływ.</p>
        
        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I've always loved how she cooks.</strong> (Zawsze kochałem, jak ona gotuje.)</p>
          <p>✅ <strong>We have noticed that he talks too much.</strong> (Zauważyliśmy, że on mówi za dużo.)</p>
          <p>✅ <strong>She has never understood why people like this movie.</strong> (Ona nigdy nie rozumiała, dlaczego ludziom podoba się ten film.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Continuous -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrCont">
        Kiedy używamy Present Perfect z Present Continuous?
      </button>
    </h2>
    <div id="collapsePrPerfPrCont" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>Używamy, gdy <strong>Present Continuous</strong> opisuje bieżącą czynność, a <strong>Present Perfect</strong> wyjaśnia jej przyczynę lub podsumowuje jej skutki.</p>

        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I have noticed that she is talking to him again.</strong> (Zauważyłem, że ona znowu rozmawia z nim.)</p>
          <p>✅ <strong>They have been surprised that he is learning a new language.</strong> (Byli zaskoczeni, że on uczy się nowego języka.)</p>
          <p>✅ <strong>We have realized that she is working too hard.</strong> (Zrozumieliśmy, że ona pracuje za dużo.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Ogólne podsumowanie -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConclusion">
        Ogólne Podsumowanie
      </button>
    </h2>
    <div id="collapseConclusion" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <ul>
          <li>📌 <strong>PrPerf + PrSimp</strong> → akcent na fakt, doświadczenie, zmianę.</li>
          <li>📌 <strong>PrPerf + PrCont</strong> → akcent na czynność, która trwa teraz.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`}function returnLevel38UA(){return`<div class="accordion" id="presentPerfectAccordion">
  <!-- Визначення Present Perfect -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDefinition" aria-expanded="true">
        Що таке Present Perfect?
      </button>
    </h2>
    <div id="collapseDefinition" class="accordion-collapse collapse show" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p><strong>Present Perfect</strong> (<code>have/has + V3 (Past Participle)</code>) використовується, коли дія:</p>
        <ul>
          <li>✔ Завершена, але пов'язана з теперішнім (результат важливий зараз).</li>
          <li>✔ Почалася в минулому і триває до теперішнього моменту.</li>
          <li>✔ Сталася в невизначений час у минулому, але має значення для теперішнього.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Simple -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrSimp">
        Коли Present Perfect використовується з Present Simple?
      </button>
    </h2>
    <div id="collapsePrPerfPrSimp" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>Використовується, коли <strong>Present Simple</strong> описує повторюване чи загальне явище, а <strong>Present Perfect</strong> підкреслює досвід, зміни або їхній вплив.</p>
        
        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I've always loved how she cooks.</strong> (Я завжди любив, як вона готує.)</p>
          <p>✅ <strong>We have noticed that he talks too much.</strong> (Ми помітили, що він надто багато говорить.)</p>
          <p>✅ <strong>She has never understood why people like this movie.</strong> (Вона ніколи не розуміла, чому людям подобається цей фільм.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Continuous -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrCont">
        Коли Present Perfect використовується з Present Continuous?
      </button>
    </h2>
    <div id="collapsePrPerfPrCont" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>Використовується, коли <strong>Present Continuous</strong> описує поточну дію, а <strong>Present Perfect</strong> пояснює її причину або підсумовує її наслідки.</p>

        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I have noticed that she is talking to him again.</strong> (Я помітив, що вона знову з ним розмовляє.)</p>
          <p>✅ <strong>They have been surprised that he is learning a new language.</strong> (Вони здивовані, що він вивчає нову мову.)</p>
          <p>✅ <strong>We have realized that she is working too hard.</strong> (Ми зрозуміли, що вона працює надто багато.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Загальний висновок -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConclusion">
        Загальний висновок
      </button>
    </h2>
    <div id="collapseConclusion" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <ul>
          <li>📌 <strong>PrPerf + PrSimp</strong> → акцент на факті, досвіді, зміні.</li>
          <li>📌 <strong>PrPerf + PrCont</strong> → акцент на дії, що відбувається зараз.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`}function returnLevel20(){return`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Неправильные глаголы второй группы</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Неправильные глаголы второй группы имеют четкий шаблон для образования прошедшего времени (Past Simple) и причастия прошедшего времени (Past Participle). Эти глаголы обычно изменяют гласную в корне в обеих формах, и их изменение необходимо запомнить, поскольку шаблон не всегда одинаков.
          </p>

          <!-- Основные характеристики -->
          <h5>Основные характеристики:</h5>
          <ul>
            <li><strong>Изменение гласной:</strong> Прошедшее и причастие прошедшего времени часто связаны с изменением гласной в середине глагола.</li>
            <li><strong>Регулярный шаблон:</strong> Хотя это не полностью предсказуемо, неправильные глаголы второй группы обычно следуют более согласованному шаблону, чем другие неправильные глаголы. Пример:
              <ul>
                <li><strong>Основная форма:</strong> <em>drink</em> — <strong>Past Simple:</strong> <em>drank</em> — <strong>Past Participle:</strong> <em>drunk</em></li>
              </ul>
            </li>
          </ul>

          <!-- Где используются -->
          <h5>Где используются:</h5>
          <p>Неправильные глаголы второй группы часто используются в повседневной речи и письме. Они выражают:</p>
          <ul>
            <li><strong>Действия в прошлом:</strong> "Она <em>пела</em> прекрасно." (глагол <em>sang</em> — форма прошедшего времени от <em>sing</em>).</li>
            <li><strong>Время Present Perfect:</strong> "Он <em>написал</em> книгу." (глагол <em>written</em> — форма прошедшего времени от <em>write</em>).</li>
            <li><strong>Страдательные конструкции:</strong> "Песню <em>спели</em> хором." (глагол <em>sung</em> — форма прошедшего времени от <em>sing</em>).</li>
          </ul>

          <!-- Роль в обучении -->
          <h5>Роль в обучении:</h5>
          <p>Изучение неправильных глаголов второй группы важно для освоения прошедших времен и конструкций Perfect. В английском языке многие распространенные глаголы принадлежат ко второй группе, что делает их необходимыми для языковой грамотности.</p>

          <!-- Кнопка для примеров -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Пример
          </button>

          <!-- Примеры глаголов -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Основная форма:</strong> drink — <strong>Past Simple:</strong> drank — <strong>Past Participle:</strong> drunk</li>
                <li><strong>Основная форма:</strong> sing — <strong>Past Simple:</strong> sang — <strong>Past Participle:</strong> sung</li>
                <li><strong>Основная форма:</strong> speak — <strong>Past Simple:</strong> spoke — <strong>Past Participle:</strong> spoken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel20EN(){return`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Second Group Irregular Verbs</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Irregular verbs from the second group follow a distinct pattern in forming the past tense (Past Simple) and past participle (Past Participle). These verbs usually have a vowel change in the stem for both forms, and their conjugation needs to be memorized because the pattern is not always consistent.
          </p>

          <!-- Key Characteristics -->
          <h5>Key Characteristics:</h5>
          <ul>
            <li><strong>Vowel Change:</strong> The past tense and past participle often involve a change in the vowel in the middle of the verb.</li>
            <li><strong>Regular Pattern:</strong> While not completely predictable, second-group irregular verbs follow a more consistent pattern than other irregular verbs. Example:
              <ul>
                <li><strong>Base Form:</strong> <em>drink</em> — <strong>Past Simple:</strong> <em>drank</em> — <strong>Past Participle:</strong> <em>drunk</em></li>
              </ul>
            </li>
          </ul>

          <!-- Usage -->
          <h5>Usage:</h5>
          <p>Second-group irregular verbs are frequently used in everyday conversation and writing. They express:</p>
          <ul>
            <li><strong>Actions in the past:</strong> "She <em>sang</em> beautifully."</li>
            <li><strong>Perfect tenses:</strong> "He has <em>written</em> a book."</li>
            <li><strong>Passive voice:</strong> "The song was <em>sung</em> by the choir."</li>
          </ul>

          <!-- Role in Learning -->
          <h5>Role in Learning:</h5>
          <p>Learning the second group of irregular verbs is important for mastering the past and perfect tenses. In English, many commonly used verbs belong to this group, making them essential for fluency.</p>

          <!-- Button for examples -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Example
          </button>

          <!-- Examples of verbs -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Base Form</strong>: drink — <strong>Past Simple</strong>: drank — <strong>Past Participle</strong>: drunk</li>
                <li><strong>Base Form</strong>: sing — <strong>Past Simple</strong>: sang — <strong>Past Participle</strong>: sung</li>
                <li><strong>Base Form</strong>: speak — <strong>Past Simple</strong>: spoke — <strong>Past Participle</strong>: spoken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel20PL(){return`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Czasowniki Nieregularne Drugiej Grupy</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Czasowniki nieregularne z drugiej grupy mają wyraźny wzór w tworzeniu czasu przeszłego (Past Simple) i imiesłowu biernego (Past Participle). Czasowniki te zwykle zmieniają samogłoskę w rdzeniu w obu formach, a ich odmiana musi być zapamiętana, ponieważ wzór nie jest zawsze spójny.
          </p>

          <!-- Kluczowe cechy -->
          <h5>Kluczowe cechy:</h5>
          <ul>
            <li><strong>Zmiana samogłoski:</strong> Czas przeszły i imiesłów bierny często wiążą się ze zmianą samogłoski w środku czasownika.</li>
            <li><strong>Regularny wzór:</strong> Choć nie jest to całkowicie przewidywalne, czasowniki nieregularne drugiej grupy podążają za bardziej spójnym wzorem niż inne czasowniki nieregularne. Przykład:
              <ul>
                <li><strong>Forma podstawowa:</strong> <em>drink</em> — <strong>Past Simple:</strong> <em>drank</em> — <strong>Past Participle:</strong> <em>drunk</em></li>
              </ul>
            </li>
          </ul>

          <!-- Gdzie są używane -->
          <h5>Gdzie są używane:</h5>
          <p>Czasowniki nieregularne drugiej grupy są często używane w codziennej rozmowie i piśmie. Wyrażają:</p>
          <ul>
            <li><strong>Akcje w przeszłości:</strong> "Ona <em>śpiewała</em> pięknie." (czasownik <em>sang</em> jest formą przeszłą czasownika <em>sing</em>).</li>
            <li><strong>Czas Present Perfect:</strong> "On <em>napisał</em> książkę." (czasownik <em>written</em> jest formą przeszłą czasownika <em>write</em>).</li>
            <li><strong>Strona bierna:</strong> "Piosenka została <em>zaśpiewana</em> przez chór." (czasownik <em>sung</em> jest formą przeszłą czasownika <em>sing</em>).</li>
          </ul>

          <!-- Rola w nauce -->
          <h5>Rola w nauce:</h5>
          <p>Nauka czasowników nieregularnych drugiej grupy jest ważna dla opanowania czasów przeszłych i konstrukcji Perfect. W języku angielskim wiele powszechnie używanych czasowników należy do tej grupy, co czyni je niezbędnymi do płynności językowej.</p>

          <!-- Przycisk do przykładów -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Przykład
          </button>

          <!-- Przykłady czasowników -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Forma podstawowa:</strong> drink — <strong>Past Simple:</strong> drank — <strong>Past Participle:</strong> drunk</li>
                <li><strong>Forma podstawowa:</strong> sing — <strong>Past Simple:</strong> sang — <strong>Past Participle:</strong> sung</li>
                <li><strong>Forma podstawowa:</strong> speak — <strong>Past Simple:</strong> spoke — <strong>Past Participle:</strong> spoken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel20UA(){return`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Неправильні дієслова другої групи</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Неправильні дієслова другої групи мають чіткий шаблон для утворення минулого часу (Past Simple) та дієприкметника минулого часу (Past Participle). Ці дієслова зазвичай змінюють голосні в основі в обох формах, і їх зміна повинна бути запам’ятована, оскільки шаблон не завжди є однаковим.
          </p>

          <!-- Основні характеристики -->
          <h5>Основні характеристики:</h5>
          <ul>
            <li><strong>Зміна голосної:</strong> Минуле та дієприкметник минулого часу часто пов’язані зі зміною голосної в середині дієслова.</li>
            <li><strong>Регулярний шаблон:</strong> Хоча це не повністю передбачувано, неправильні дієслова другої групи зазвичай слідують більш узгодженому шаблону, ніж інші неправильні дієслова. Приклад:
              <ul>
                <li><strong>Основна форма:</strong> <em>drink</em> — <strong>Past Simple:</strong> <em>drank</em> — <strong>Past Participle:</strong> <em>drunk</em></li>
              </ul>
            </li>
          </ul>

          <!-- Де використовуються -->
          <h5>Де використовуються:</h5>
          <p>Неправильні дієслова другої групи часто використовуються в повсякденній розмові та письмі. Вони виражають:</p>
          <ul>
            <li><strong>Дії в минулому:</strong> "Вона <em>співала</em> чудово." (дієслово <em>sang</em> є формою минулого часу дієслова <em>sing</em>).</li>
            <li><strong>Час Present Perfect:</strong> "Він <em>написав</em> книгу." (дієслово <em>written</em> є формою минулого часу дієслова <em>write</em>).</li>
            <li><strong>Страждання:</strong> "Пісню було <em>співано</em> хором." (дієслово <em>sung</em> є формою минулого часу дієслова <em>sing</em>).</li>
          </ul>

          <!-- Роль у навчанні -->
          <h5>Роль у навчанні:</h5>
          <p>Вивчення неправильних дієслів другої групи є важливим для освоєння минулих часів і конструкцій Perfect. В англійській мові багато поширених дієслів належать до цієї групи, що робить їх необхідними для мовної плавності.</p>

          <!-- Кнопка для прикладів -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Приклад
          </button>

          <!-- Приклади дієслів -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Основна форма:</strong> drink — <strong>Past Simple:</strong> drank — <strong>Past Participle:</strong> drunk</li>
                <li><strong>Основна форма:</strong> sing — <strong>Past Simple:</strong> sang — <strong>Past Participle:</strong> sung</li>
                <li><strong>Основна форма:</strong> speak — <strong>Past Simple:</strong> spoke — <strong>Past Participle:</strong> spoken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel42(){return`<div class="container mt-5">
            <h1>Правило: Present Simple Passive и Past Simple Passive</h1>

            <p><strong>Что такое Present Simple Passive и Past Simple Passive?</strong></p>
            <p>1. <strong>Present Simple Passive</strong> (настоящее время в пассиве) используется для выражения действия, которое регулярно происходит или является общим фактом, при этом акцент на том, кто выполняет действие, не ставится. В этом времени субъект (тот, кто выполняет действие) может быть не важен или не указан.</p>
            <p>2. <strong>Past Simple Passive</strong> (прошедшее время в пассиве) используется для описания действий, которые произошли в прошлом, при этом акцент делается на объект, который подвергся действию, а не на того, кто его выполнил.</p>

            <p><strong>Чем отличается пассив от активного залога?</strong></p>
            <p>В активном залоге <strong>субъект</strong> выполняет действие над объектом, в пассивном — объект подвергается действию. В пассивном залоге может быть не указано, кто выполняет действие (если это не важно или неизвестно).</p>
            <p>Активный залог: <em>I read the book.</em> (Я читаю книгу.)</p>
            <p>Пассивный залог: <em>The book is read by me.</em> (Книга читается мной.)</p>

            <p><strong>Как образуются положительные и отрицательные предложения и вопросы в Present Simple Passive и Past Simple Passive?</strong></p>

            <h3>1. Present Simple Passive</h3>
            <p><strong>Формула:</strong> [объект + am/is/are + past participle (3-я форма глагола)]</p>

            <p><strong>Положительные предложения:</strong></p>
            <ul>
              <li>The house is cleaned every day. (Дом убирается каждый день.)</li>
              <li>The reports are submitted on time. (Отчеты сдаются вовремя.)</li>
            </ul>

            <p><strong>Отрицательные предложения:</strong></p>
            <ul>
              <li>The house is not cleaned every day. (Дом не убирается каждый день.)</li>
              <li>The reports are not submitted on time. (Отчеты не сдаются вовремя.)</li>
            </ul>

            <p><strong>Вопросы:</strong></p>
            <ul>
              <li>Is the house cleaned every day? (Дом убирается каждый день?)</li>
              <li>Are the reports submitted on time? (Отчеты сдаются вовремя?)</li>
            </ul>

            <h3>2. Past Simple Passive</h3>
            <p><strong>Формула:</strong> [объект + was/were + past participle (3-я форма глагола)]</p>

            <p><strong>Положительные предложения:</strong></p>
            <ul>
              <li>The book was read by me yesterday. (Книга была прочитана мной вчера.)</li>
              <li>The project was completed last week. (Проект был завершен на прошлой неделе.)</li>
            </ul>

            <p><strong>Отрицательные предложения:</strong></p>
            <ul>
              <li>The book was not read by me yesterday. (Книга не была прочитана мной вчера.)</li>
              <li>The project was not completed last week. (Проект не был завершен на прошлой неделе.)</li>
            </ul>

            <p><strong>Вопросы:</strong></p>
            <ul>
              <li>Was the book read by you yesterday? (Была ли книга прочитана вами вчера?)</li>
              <li>Was the project completed last week? (Был ли проект завершен на прошлой неделе?)</li>
            </ul>

            <h3>Основные различия между активом и пассивом в Present Simple и Past Simple:</h3>
            <p>1. <strong>Активный залог</strong> — субъект выполняет действие: <em>I write the letter.</em> (Я пишу письмо.)</p>
            <p>2. <strong>Пассивный залог</strong> — объект подвергается действию: <em>The letter is written by me.</em> (Письмо написано мной.)</p>
            <p>3. В <strong>Present Simple Passive</strong> акцент на действии, которое происходит регулярно, а в <strong>Past Simple Passive</strong> акцент на действии, которое произошло в прошлом.</p>

            <h3>Примеры:</h3>
            <p><strong>Present Simple Passive</strong>:</p>
            <ul>
              <li>The work is done by the team. (Работа выполняется командой.)</li>
              <li>The reports are checked every week. (Отчеты проверяются каждую неделю.)</li>
            </ul>

            <p><strong>Past Simple Passive</strong>:</p>
            <ul>
              <li>The work was done by the team yesterday. (Работа была выполнена командой вчера.)</li>
              <li>The reports were checked last week. (Отчеты были проверены на прошлой неделе.)</li>
            </ul>
         </div>`}function returnLevel42EN(){return`
  <div class="container mt-5">
  <h1>Rule: Present Simple Passive and Past Simple Passive</h1>

  <p><strong>What is Present Simple Passive and Past Simple Passive?</strong></p>
  <p>1. <strong>Present Simple Passive</strong> (present tense in passive voice) is used to express an action that happens regularly or is a general fact, while the focus is not on who is performing the action. In this tense, the subject (the person performing the action) may not be important or specified.</p>
  <p>2. <strong>Past Simple Passive</strong> (past tense in passive voice) is used to describe actions that happened in the past, with the focus on the object that underwent the action, rather than the one who performed it.</p>

  <p><strong>What is the difference between passive and active voice?</strong></p>
  <p>In the active voice, the <strong>subject</strong> performs an action on the object, while in the passive voice, the object undergoes the action. In the passive voice, it may not be necessary to mention who is performing the action (if it is not important or unknown).</p>
  <p>Active voice: <em>I read the book.</em> (I am reading the book.)</p>
  <p>Passive voice: <em>The book is read by me.</em> (The book is being read by me.)</p>

  <p><strong>How to form affirmative, negative sentences and questions in Present Simple Passive and Past Simple Passive?</strong></p>

  <h3>1. Present Simple Passive</h3>
  <p><strong>Formula:</strong> [object + am/is/are + past participle (3rd form of the verb)]</p>

  <p><strong>Affirmative sentences:</strong></p>
  <ul>
    <li>The house is cleaned every day. (The house is cleaned every day.)</li>
    <li>The reports are submitted on time. (The reports are submitted on time.)</li>
  </ul>

  <p><strong>Negative sentences:</strong></p>
  <ul>
    <li>The house is not cleaned every day. (The house is not cleaned every day.)</li>
    <li>The reports are not submitted on time. (The reports are not submitted on time.)</li>
  </ul>

  <p><strong>Questions:</strong></p>
  <ul>
    <li>Is the house cleaned every day? (Is the house cleaned every day?)</li>
    <li>Are the reports submitted on time? (Are the reports submitted on time?)</li>
  </ul>

  <h3>2. Past Simple Passive</h3>
  <p><strong>Formula:</strong> [object + was/were + past participle (3rd form of the verb)]</p>

  <p><strong>Affirmative sentences:</strong></p>
  <ul>
    <li>The book was read by me yesterday. (The book was read by me yesterday.)</li>
    <li>The project was completed last week. (The project was completed last week.)</li>
  </ul>

  <p><strong>Negative sentences:</strong></p>
  <ul>
    <li>The book was not read by me yesterday. (The book was not read by me yesterday.)</li>
    <li>The project was not completed last week. (The project was not completed last week.)</li>
  </ul>

  <p><strong>Questions:</strong></p>
  <ul>
    <li>Was the book read by you yesterday? (Was the book read by you yesterday?)</li>
    <li>Was the project completed last week? (Was the project completed last week?)</li>
  </ul>

  <h3>Main differences between active and passive voice in Present Simple and Past Simple:</h3>
  <p>1. <strong>Active voice</strong> — the subject performs the action: <em>I write the letter.</em> (I write the letter.)</p>
  <p>2. <strong>Passive voice</strong> — the object undergoes the action: <em>The letter is written by me.</em> (The letter is written by me.)</p>
  <p>3. In <strong>Present Simple Passive</strong>, the focus is on the action that occurs regularly, while in <strong>Past Simple Passive</strong>, the focus is on the action that occurred in the past.</p>

  <h3>Examples:</h3>
  <p><strong>Present Simple Passive</strong>:</p>
  <ul>
    <li>The work is done by the team. (The work is done by the team.)</li>
    <li>The reports are checked every week. (The reports are checked every week.)</li>
  </ul>

  <p><strong>Past Simple Passive</strong>:</p>
  <ul>
    <li>The work was done by the team yesterday. (The work was done by the team yesterday.)</li>
    <li>The reports were checked last week. (The reports were checked last week.)</li>
  </ul>

</div>`}function returnLevel42PL(){return`
          <div class="container mt-5">
          <h1>Zasada: Present Simple Passive i Past Simple Passive</h1>

          <p><strong>Co to jest Present Simple Passive i Past Simple Passive?</strong></p>
          <p>1. <strong>Present Simple Passive</strong> (czas teraźniejszy w stronie biernej) jest używany do wyrażania czynności, która regularnie się odbywa lub jest ogólnym faktem, przy czym nacisk nie jest kładziony na to, kto wykonuje czynność. W tym czasie podmiot (ten, kto wykonuje czynność) może nie być ważny lub nieokreślony.</p>
          <p>2. <strong>Past Simple Passive</strong> (czas przeszły w stronie biernej) jest używany do opisywania czynności, które miały miejsce w przeszłości, przy czym nacisk kładziony jest na obiekt, który poddał się działaniu, a nie na osobę, która wykonała tę czynność.</p>

          <p><strong>Na czym polega różnica między stroną bierną a stroną czynną?</strong></p>
          <p>W stronie czynnej <strong>podmiot</strong> wykonuje czynność na obiekcie, w stronie biernej — obiekt poddaje się czynności. W stronie biernej nie zawsze wskazuje się, kto wykonuje czynność (jeśli nie jest to istotne lub nieznane).</p>
          <p>Strona czynna: <em>I read the book.</em> (Czytam książkę.)</p>
          <p>Strona bierna: <em>The book is read by me.</em> (Książka jest czytana przeze mnie.)</p>

          <p><strong>Jak tworzyć zdania twierdzące, przeczące i pytania w Present Simple Passive i Past Simple Passive?</strong></p>

          <h3>1. Present Simple Passive</h3>
          <p><strong>Wzór:</strong> [obiekt + am/is/are + past participle (3. forma czasownika)]</p>

          <p><strong>Zdania twierdzące:</strong></p>
          <ul>
            <li>The house is cleaned every day. (Dom jest sprzątany codziennie.)</li>
            <li>The reports are submitted on time. (Raporty są składane na czas.)</li>
          </ul>

          <p><strong>Zdania przeczące:</strong></p>
          <ul>
            <li>The house is not cleaned every day. (Dom nie jest sprzątany codziennie.)</li>
            <li>The reports are not submitted on time. (Raporty nie są składane na czas.)</li>
          </ul>

          <p><strong>Pytania:</strong></p>
          <ul>
            <li>Is the house cleaned every day? (Czy dom jest sprzątany codziennie?)</li>
            <li>Are the reports submitted on time? (Czy raporty są składane na czas?)</li>
          </ul>

          <h3>2. Past Simple Passive</h3>
          <p><strong>Wzór:</strong> [obiekt + was/were + past participle (3. forma czasownika)]</p>

          <p><strong>Zdania twierdzące:</strong></p>
          <ul>
            <li>The book was read by me yesterday. (Książka została przeczytana przeze mnie wczoraj.)</li>
            <li>The project was completed last week. (Projekt został ukończony w zeszłym tygodniu.)</li>
          </ul>

          <p><strong>Zdania przeczące:</strong></p>
          <ul>
            <li>The book was not read by me yesterday. (Książka nie została przeczytana przeze mnie wczoraj.)</li>
            <li>The project was not completed last week. (Projekt nie został ukończony w zeszłym tygodniu.)</li>
          </ul>

          <p><strong>Pytania:</strong></p>
          <ul>
            <li>Was the book read by you yesterday? (Czy książka została przeczytana przez ciebie wczoraj?)</li>
            <li>Was the project completed last week? (Czy projekt został ukończony w zeszłym tygodniu?)</li>
          </ul>

          <h3>Główne różnice między stroną czynną a bierną w Present Simple i Past Simple:</h3>
          <p>1. <strong>Strona czynna</strong> — podmiot wykonuje czynność: <em>I write the letter.</em> (Piszę list.)</p>
          <p>2. <strong>Strona bierna</strong> — obiekt poddaje się czynności: <em>The letter is written by me.</em> (List jest napisany przeze mnie.)</p>
          <p>3. W <strong>Present Simple Passive</strong> nacisk kładziony jest na czynność, która odbywa się regularnie, a w <strong>Past Simple Passive</strong> nacisk na czynność, która miała miejsce w przeszłości.</p>

          <h3>Przykłady:</h3>
          <p><strong>Present Simple Passive</strong>:</p>
          <ul>
            <li>The work is done by the team. (Praca jest wykonywana przez zespół.)</li>
            <li>The reports are checked every week. (Raporty są sprawdzane co tydzień.)</li>
          </ul>

          <p><strong>Past Simple Passive</strong>:</p>
          <ul>
            <li>The work was done by the team yesterday. (Praca została wykonana przez zespół wczoraj.)</li>
            <li>The reports were checked last week. (Raporty zostały sprawdzone w zeszłym tygodniu.)</li>
          </ul>

        </div>`}function returnLevel42UA(){return`
        <div class="container mt-5">
          <h1>Правило: Present Simple Passive та Past Simple Passive</h1>

          <p><strong>Що таке Present Simple Passive та Past Simple Passive?</strong></p>
          <p>1. <strong>Present Simple Passive</strong> (теперішній час у пасиві) використовується для вираження дії, яка регулярно відбувається або є загальним фактом, при цьому акцент на тому, хто виконує дію, не ставиться. У цьому часі суб'єкт (той, хто виконує дію) може бути не важливий або не вказаний.</p>
          <p>2. <strong>Past Simple Passive</strong> (минулий час у пасиві) використовується для опису дій, які відбулися в минулому, при цьому акцент робиться на об'єкт, який зазнав дії, а не на того, хто її виконав.</p>

          <p><strong>Чим відрізняється пасив від активного стану?</strong></p>
          <p>В активному стані <strong>суб'єкт</strong> виконує дію над об'єктом, у пасивному — об'єкт зазнає дії. У пасивному стані може бути не вказано, хто виконує дію (якщо це не важливо або невідомо).</p>
          <p>Активний стан: <em>I read the book.</em> (Я читаю книгу.)</p>
          <p>Пасивний стан: <em>The book is read by me.</em> (Книга читається мною.)</p>

          <p><strong>Як утворюються стверджувальні, заперечні речення та питання у Present Simple Passive та Past Simple Passive?</strong></p>

          <h3>1. Present Simple Passive</h3>
          <p><strong>Формула:</strong> [об'єкт + am/is/are + past participle (3-тя форма дієслова)]</p>

          <p><strong>Стверджувальні речення:</strong></p>
          <ul>
            <li>The house is cleaned every day. (Дім прибирається кожен день.)</li>
            <li>The reports are submitted on time. (Звіти здаються вчасно.)</li>
          </ul>

          <p><strong>Заперечні речення:</strong></p>
          <ul>
            <li>The house is not cleaned every day. (Дім не прибирається кожен день.)</li>
            <li>The reports are not submitted on time. (Звіти не здаються вчасно.)</li>
          </ul>

          <p><strong>Питання:</strong></p>
          <ul>
            <li>Is the house cleaned every day? (Дім прибирається кожен день?)</li>
            <li>Are the reports submitted on time? (Звіти здаються вчасно?)</li>
          </ul>

          <h3>2. Past Simple Passive</h3>
          <p><strong>Формула:</strong> [об'єкт + was/were + past participle (3-тя форма дієслова)]</p>

          <p><strong>Стверджувальні речення:</strong></p>
          <ul>
            <li>The book was read by me yesterday. (Книга була прочитана мною вчора.)</li>
            <li>The project was completed last week. (Проєкт був завершений на минулому тижні.)</li>
          </ul>

          <p><strong>Заперечні речення:</strong></p>
          <ul>
            <li>The book was not read by me yesterday. (Книга не була прочитана мною вчора.)</li>
            <li>The project was not completed last week. (Проєкт не був завершений на минулому тижні.)</li>
          </ul>

          <p><strong>Питання:</strong></p>
          <ul>
            <li>Was the book read by you yesterday? (Чи була книга прочитана вами вчора?)</li>
            <li>Was the project completed last week? (Чи був проєкт завершений на минулому тижні?)</li>
          </ul>

          <h3>Основні відмінності між активом і пасивом у Present Simple та Past Simple:</h3>
          <p>1. <strong>Активний стан</strong> — суб'єкт виконує дію: <em>I write the letter.</em> (Я пишу листа.)</p>
          <p>2. <strong>Пасивний стан</strong> — об'єкт зазнає дії: <em>The letter is written by me.</em> (Лист написаний мною.)</p>
          <p>3. У <strong>Present Simple Passive</strong> акцент на дії, яка відбувається регулярно, а в <strong>Past Simple Passive</strong> акцент на дії, яка відбулася в минулому.</p>

          <h3>Приклади:</h3>
          <p><strong>Present Simple Passive</strong>:</p>
          <ul>
            <li>The work is done by the team. (Робота виконується командою.)</li>
            <li>The reports are checked every week. (Звіти перевіряються кожного тижня.)</li>
          </ul>

          <p><strong>Past Simple Passive</strong>:</p>
          <ul>
            <li>The work was done by the team yesterday. (Робота була виконана командою вчора.)</li>
            <li>The reports were checked last week. (Звіти були перевірені на минулому тижні.)</li>
          </ul>

        </div>`}function returnLevel39(){return`<div class="container mt-5">
    <h2>Present Perfect: Rules for Using <code>For</code>, <code>Since</code>, and <code>Ago</code></h2>
    <div class="accordion" id="accordionExample">
        <!-- For -->
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFor">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFor" aria-expanded="true" aria-controls="collapseFor" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>For</strong>
                </button>
            </h2>
            <div id="collapseFor" class="accordion-collapse collapse show" aria-labelledby="headingFor" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>For</strong> используется для указания длительности действия или состояния (в течение какого-то времени).</p>
                    <p>Когда вы хотите сказать, что что-то происходило на протяжении определенного периода времени, используйте <strong>for</strong>.</p>
                    <p><strong>Примеры:</strong></p>
                    <ul>
                        <li>I have lived here <strong>for</strong> five years. (Я живу здесь <strong>в течение</strong> пяти лет.)</li>
                        <li>She has worked at the company <strong>for</strong> two months. (Она работает в компании <strong>в течение</strong> двух месяцев.)</li>
                        <li>They have known each other <strong>for</strong> a long time. (Они знают друг друга <strong>в течение</strong> долгого времени.)</li>
                        <li>We have been waiting <strong>for</strong> 30 minutes. (Мы ждали <strong>в течение</strong> 30 минут.)</li>
                    </ul>
                    <p><strong>Обратите внимание:</strong> <strong>For</strong> используется с определенными промежутками времени, такими как:</p>
                    <ul>
                        <li>days (дни)</li>
                        <li>weeks (недели)</li>
                        <li>months (месяцы)</li>
                        <li>years (годы)</li>
                        <li>hours (часы)</li>
                        <li>minutes (минуты)</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Since -->
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSince">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSince" aria-expanded="false" aria-controls="collapseSince" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Since</strong>
                </button>
            </h2>
            <div id="collapseSince" class="accordion-collapse collapse" aria-labelledby="headingSince" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Since</strong> используется для указания точного момента времени, с которого началось действие.</p>
                    <p>Когда вы хотите указать момент времени, с которого началось действие, используйте <strong>since</strong>.</p>
                    <p><strong>Примеры:</strong></p>
                    <ul>
                        <li>I have lived here <strong>since</strong> 2010. (Я живу здесь <strong>с 2010 года</strong>.)</li>
                        <li>She has worked at the company <strong>since</strong> last month. (Она работает в компании <strong>с прошлого месяца</strong>.)</li>
                        <li>They have known each other <strong>since</strong> childhood. (Они знают друг друга <strong>с детства</strong>.)</li>
                        <li>We have been friends <strong>since</strong> high school. (Мы друзья <strong>с старшей школы</strong>.)</li>
                    </ul>
                    <p><strong>Обратите внимание:</strong> <strong>Since</strong> используется с точными моментами времени, такими как:</p>
                    <ul>
                        <li>years (годы)</li>
                        <li>months (месяцы)</li>
                        <li>dates (даты)</li>
                        <li>days of the week (дни недели)</li>
                        <li>events (события)</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Ago -->
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingAgo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAgo" aria-expanded="false" aria-controls="collapseAgo" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Ago</strong>
                </button>
            </h2>
            <div id="collapseAgo" class="accordion-collapse collapse" aria-labelledby="headingAgo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Ago</strong> используется для указания времени, прошедшего с момента действия. Однако, это слово не используется с Present Perfect, а только с Past Simple.</p>
                    <p>Когда вы хотите выразить, что что-то произошло в прошлом относительно настоящего времени, используйте <strong>ago</strong> с Past Simple.</p>
                    <p><strong>Примеры:</strong></p>
                    <ul>
                        <li>I met him <strong>two days ago</strong>. (Я встретил его <strong>два дня назад</strong>.)</li>
                        <li>We went to the cinema <strong>a week ago</strong>. (Мы пошли в кино <strong>неделю назад</strong>.)</li>
                        <li>She left the office <strong>three hours ago</strong>. (Она ушла из офиса <strong>три часа назад</strong>.)</li>
                    </ul>
                    <p><strong>Обратите внимание:</strong> <strong>Ago</strong> не используется с Present Perfect и всегда используется с Past Simple для указания прошедшего времени.</p>
                </div>
            </div>
        </div>

    </div>
</div>`}function returnLevel39EN(){return`<div class="container mt-5">
    <h2>Present Perfect: Rules for <code>For</code>, <code>Since</code>, and <code>Ago</code></h2>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFor">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFor" aria-expanded="true" aria-controls="collapseFor" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>For</strong>
                </button>
            </h2>
            <div id="collapseFor" class="accordion-collapse collapse show" aria-labelledby="headingFor" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>For</strong> is used to indicate the duration of an action or state (for a certain period of time).</p>
                    <p>When you want to say that something has been happening for a certain period of time, use <strong>for</strong>.</p>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li>I have lived here <strong>for</strong> five years.</li>
                        <li>She has worked at the company <strong>for</strong> two months.</li>
                        <li>They have known each other <strong>for</strong> a long time.</li>
                        <li>We have been waiting <strong>for</strong> 30 minutes.</li>
                    </ul>
                    <p><strong>Note:</strong> <strong>For</strong> is used with certain time periods such as:</p>
                    <ul>
                        <li>days</li>
                        <li>weeks</li>
                        <li>months</li>
                        <li>years</li>
                        <li>hours</li>
                        <li>minutes</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSince">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSince" aria-expanded="false" aria-controls="collapseSince" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Since</strong>
                </button>
            </h2>
            <div id="collapseSince" class="accordion-collapse collapse" aria-labelledby="headingSince" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Since</strong> is used to indicate the starting point in time when an action began.</p>
                    <p>When you want to specify the exact moment in time when an action started, use <strong>since</strong>.</p>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li>I have lived here <strong>since</strong> 2010.</li>
                        <li>She has worked at the company <strong>since</strong> last month.</li>
                        <li>They have known each other <strong>since</strong> childhood.</li>
                        <li>We have been friends <strong>since</strong> high school.</li>
                    </ul>
                    <p><strong>Note:</strong> <strong>Since</strong> is used with specific points in time such as:</p>
                    <ul>
                        <li>years</li>
                        <li>months</li>
                        <li>dates</li>
                        <li>days of the week</li>
                        <li>events</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingAgo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAgo" aria-expanded="false" aria-controls="collapseAgo" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Ago</strong>
                </button>
            </h2>
            <div id="collapseAgo" class="accordion-collapse collapse" aria-labelledby="headingAgo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Ago</strong> is used to indicate how long ago something happened from the present moment. However, it is not used with Present Perfect, but rather with Past Simple.</p>
                    <p>When you want to express that something happened in the past relative to the present time, use <strong>ago</strong> with Past Simple.</p>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li>I met him <strong>two days ago</strong>.</li>
                        <li>We went to the cinema <strong>a week ago</strong>.</li>
                        <li>She left the office <strong>three hours ago</strong>.</li>
                    </ul>
                    <p><strong>Note:</strong> <strong>Ago</strong> is not used with Present Perfect and is always used with Past Simple to indicate past time.</p>
                </div>
            </div>
        </div>
    </div>
</div>`}function returnLevel39PL(){return`<div class="container mt-5">
    <h2>Present Perfect: Zasady użycia <code>For</code>, <code>Since</code> i <code>Ago</code></h2>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFor">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFor" aria-expanded="true" aria-controls="collapseFor" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>For</strong>
                </button>
            </h2>
            <div id="collapseFor" class="accordion-collapse collapse show" aria-labelledby="headingFor" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>For</strong> jest używane do wskazania czasu trwania działania lub stanu (przez jakiś czas).</p>
                    <p>Kiedy chcesz powiedzieć, że coś działo się przez określony okres czasu, użyj <strong>for</strong>.</p>
                    <p><strong>Przykłady:</strong></p>
                    <ul>
                        <li>I have lived here <strong>for</strong> five years. (Mieszkam tu <strong>przez</strong> pięć lat.)</li>
                        <li>She has worked at the company <strong>for</strong> two months. (Ona pracuje w firmie <strong>przez</strong> dwa miesiące.)</li>
                        <li>They have known each other <strong>for</strong> a long time. (Znają się <strong>przez</strong> długi czas.)</li>
                        <li>We have been waiting <strong>for</strong> 30 minutes. (Czekamy <strong>przez</strong> 30 minut.)</li>
                    </ul>
                    <p><strong>Zauważ:</strong> <strong>For</strong> jest używane z określonymi okresami czasu, takimi jak:</p>
                    <ul>
                        <li>days (dni)</li>
                        <li>weeks (tygodnie)</li>
                        <li>months (miesiące)</li>
                        <li>years (lata)</li>
                        <li>hours (godziny)</li>
                        <li>minutes (minuty)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSince">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSince" aria-expanded="false" aria-controls="collapseSince" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Since</strong>
                </button>
            </h2>
            <div id="collapseSince" class="accordion-collapse collapse" aria-labelledby="headingSince" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Since</strong> jest używane do wskazania dokładnego momentu w czasie, od którego rozpoczęło się działanie.</p>
                    <p>Kiedy chcesz wskazać moment w czasie, od którego zaczęła się czynność, użyj <strong>since</strong>.</p>
                    <p><strong>Przykłady:</strong></p>
                    <ul>
                        <li>I have lived here <strong>since</strong> 2010. (Mieszkam tu <strong>od 2010 roku</strong>.)</li>
                        <li>She has worked at the company <strong>since</strong> last month. (Ona pracuje w firmie <strong>od zeszłego miesiąca</strong>.)</li>
                        <li>They have known each other <strong>since</strong> childhood. (Znają się <strong>od dzieciństwa</strong>.)</li>
                        <li>We have been friends <strong>since</strong> high school. (Jesteśmy przyjaciółmi <strong>od liceum</strong>.)</li>
                    </ul>
                    <p><strong>Zauważ:</strong> <strong>Since</strong> jest używane z dokładnymi momentami czasu, takimi jak:</p>
                    <ul>
                        <li>years (lata)</li>
                        <li>months (miesiące)</li>
                        <li>dates (daty)</li>
                        <li>days of the week (dni tygodnia)</li>
                        <li>events (wydarzenia)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingAgo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAgo" aria-expanded="false" aria-controls="collapseAgo" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Ago</strong>
                </button>
            </h2>
            <div id="collapseAgo" class="accordion-collapse collapse" aria-labelledby="headingAgo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Ago</strong> jest używane do wskazania czasu, który minął od momentu działania. Jednak to słowo nie jest używane z Present Perfect, tylko z Past Simple.</p>
                    <p>Kiedy chcesz wyrazić, że coś wydarzyło się w przeszłości w stosunku do chwili obecnej, użyj <strong>ago</strong> z Past Simple.</p>
                    <p><strong>Przykłady:</strong></p>
                    <ul>
                        <li>I met him <strong>two days ago</strong>. (Spotkałem go <strong>dwa dni temu</strong>.)</li>
                        <li>We went to the cinema <strong>a week ago</strong>. (Poszliśmy do kina <strong>tydzień temu</strong>.)</li>
                        <li>She left the office <strong>three hours ago</strong>. (Ona opuściła biuro <strong>trzy godziny temu</strong>.)</li>
                    </ul>
                    <p><strong>Zauważ:</strong> <strong>Ago</strong> nie jest używane z Present Perfect i zawsze używane z Past Simple, aby wskazać miniony czas.</p>
                </div>
            </div>
        </div>
    </div>
</div>`}function returnLevel39UA(){return`<div class="container mt-5">
    <h2>Present Perfect: Правила використання <code>For</code>, <code>Since</code> та <code>Ago</code></h2>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFor">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFor" aria-expanded="true" aria-controls="collapseFor" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>For</strong>
                </button>
            </h2>
            <div id="collapseFor" class="accordion-collapse collapse show" aria-labelledby="headingFor" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>For</strong> використовується для вказівки тривалості дії або стану (протягом якогось часу).</p>
                    <p>Коли ви хочете сказати, що щось відбувалося протягом певного періоду часу, використовуйте <strong>for</strong>.</p>
                    <p><strong>Приклади:</strong></p>
                    <ul>
                        <li>I have lived here <strong>for</strong> five years. (Я живу тут <strong>протягом</strong> п'яти років.)</li>
                        <li>She has worked at the company <strong>for</strong> two months. (Вона працює в компанії <strong>протягом</strong> двох місяців.)</li>
                        <li>They have known each other <strong>for</strong> a long time. (Вони знають одне одного <strong>протягом</strong> довгого часу.)</li>
                        <li>We have been waiting <strong>for</strong> 30 minutes. (Ми чекали <strong>протягом</strong> 30 хвилин.)</li>
                    </ul>
                    <p><strong>Зверніть увагу:</strong> <strong>For</strong> використовується з певними проміжками часу, такими як:</p>
                    <ul>
                        <li>days (дні)</li>
                        <li>weeks (тижні)</li>
                        <li>months (місяці)</li>
                        <li>years (роки)</li>
                        <li>hours (години)</li>
                        <li>minutes (хвилини)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSince">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSince" aria-expanded="false" aria-controls="collapseSince" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Since</strong>
                </button>
            </h2>
            <div id="collapseSince" class="accordion-collapse collapse" aria-labelledby="headingSince" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Since</strong> використовується для вказівки точного моменту часу, з якого почалося дію.</p>
                    <p>Коли ви хочете вказати момент часу, з якого почалася дія, використовуйте <strong>since</strong>.</p>
                    <p><strong>Приклади:</strong></p>
                    <ul>
                        <li>I have lived here <strong>since</strong> 2010. (Я живу тут <strong>з 2010 року</strong>.)</li>
                        <li>She has worked at the company <strong>since</strong> last month. (Вона працює в компанії <strong>з минулого місяця</strong>.)</li>
                        <li>They have known each other <strong>since</strong> childhood. (Вони знають одне одного <strong>з дитинства</strong>.)</li>
                        <li>We have been friends <strong>since</strong> high school. (Ми друзі <strong>з старшої школи</strong>.)</li>
                    </ul>
                    <p><strong>Зверніть увагу:</strong> <strong>Since</strong> використовується з точними моментами часу, такими як:</p>
                    <ul>
                        <li>years (роки)</li>
                        <li>months (місяці)</li>
                        <li>dates (дати)</li>
                        <li>days of the week (дні тижня)</li>
                        <li>events (події)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingAgo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAgo" aria-expanded="false" aria-controls="collapseAgo" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Ago</strong>
                </button>
            </h2>
            <div id="collapseAgo" class="accordion-collapse collapse" aria-labelledby="headingAgo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Ago</strong> використовується для вказівки часу, що пройшов від моменту дії. Однак це слово не використовується з Present Perfect, а тільки з Past Simple.</p>
                    <p>Коли ви хочете виразити, що щось сталося в минулому стосовно теперішнього часу, використовуйте <strong>ago</strong> з Past Simple.</p>
                    <p><strong>Приклади:</strong></p>
                    <ul>
                        <li>I met him <strong>two days ago</strong>. (Я зустрів його <strong>два дні тому</strong>.)</li>
                        <li>We went to the cinema <strong>a week ago</strong>. (Ми пішли в кіно <strong>тиждень тому</strong>.)</li>
                        <li>She left the office <strong>three hours ago</strong>. (Вона пішла з офісу <strong>три години тому</strong>.)</li>
                    </ul>
                    <p><strong>Зверніть увагу:</strong> <strong>Ago</strong> не використовується з Present Perfect і завжди використовується з Past Simple для вказівки минулого часу.</p>
                </div>
            </div>
        </div>
    </div>
</div>
`}function returnLevel37(){return`<div class="accordion" id="presentPerfectAccordion">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Определение времени Present Perfect
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <strong>Present Perfect</strong> — это время, которое используется для описания действий, имеющих связь с настоящим моментом. Оно подчеркивает результат действия, который имеет значение в текущем времени, или действия, произошедшие в неопределённый момент в прошлом. Это время формируется с помощью вспомогательного глагола <em>have</em> (или <em>has</em> для третьего лица) и причастия прошедшего времени основного глагола.
            </div>
        </div>
    </div>

    <!-- Пример 1: I have done -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                I have done
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have done my homework.</code> — Я сделал домашку. Это пример использования Present Perfect, когда результат действия важен для текущего момента.
            </div>
        </div>
    </div>

    <!-- Пример 2: I have just -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                I have just
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have just finished my lunch.</code> — Я только что закончил обедать. Здесь "just" указывает на недавность действия.
            </div>
        </div>
    </div>

    <!-- Пример 3: I have already -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                I have already
            </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have already seen that movie.</code> — Я уже видел этот фильм. Используется для выражения действий, которые произошли раньше, чем ожидалось.
            </div>
        </div>
    </div>

    <!-- Пример 4: I have not... yet -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                I have not... yet
            </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have not finished my project yet.</code> — Я ещё не закончил мой проект. Здесь "yet" подчеркивает, что действие ещё не завершено.
            </div>
        </div>
    </div>

    <!-- Пример 5: Have you ever...? -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Have you ever...?
            </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>Have you ever been to Paris?</code> — Ты когда-нибудь был в Париже? Это вопрос о прошлом опыте, не привязанном к конкретному времени.
            </div>
        </div>
    </div>

    <!-- Пример 6: I have never... -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                I have never...
            </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have never tried sushi.</code> — Я никогда не пробовал суши. Здесь "never" указывает на отсутствие опыта.
            </div>
        </div>
    </div>
</div>`}function returnLevel37EN(){return`<div class="accordion" id="presentPerfectAccordion">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Definition of Present Perfect Tense
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <strong>Present Perfect</strong> is a tense used to describe actions that are connected to the present moment. It emphasizes the result of an action that is relevant at the present time, or actions that occurred at an unspecified time in the past. This tense is formed using the auxiliary verb <em>have</em> (or <em>has</em> for third person singular) and the past participle of the main verb.
            </div>
        </div>
    </div>

    <!-- Example 1: I have done -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                I have done
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have done my homework.</code> — This sentence is an example of Present Perfect, where the result of the action (homework completion) is important at the present moment.
            </div>
        </div>
    </div>

    <!-- Example 2: I have just -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                I have just
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have just finished my lunch.</code> — "Just" indicates that the action has happened recently.
            </div>
        </div>
    </div>

    <!-- Example 3: I have already -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                I have already
            </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have already seen that movie.</code> — This is used to express actions that happened earlier than expected.
            </div>
        </div>
    </div>

    <!-- Example 4: I have not... yet -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                I have not... yet
            </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have not finished my project yet.</code> — "Yet" emphasizes that the action has not been completed.
            </div>
        </div>
    </div>

    <!-- Example 5: Have you ever...? -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Have you ever...?
            </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>Have you ever been to Paris?</code> — This question refers to past experience, not tied to a specific time.
            </div>
        </div>
    </div>

    <!-- Example 6: I have never... -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                I have never...
            </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have never tried sushi.</code> — "Never" indicates the absence of experience.
            </div>
        </div>
    </div>
</div>
`}function returnLevel37PL(){return`<div class="accordion" id="presentPerfectAccordion">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Definicja czasu Present Perfect
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <strong>Present Perfect</strong> — to czas, który jest używany do opisywania działań związanych z teraźniejszością. Podkreśla wynik działania, który ma znaczenie w danym momencie, lub działania, które miały miejsce w nieokreślonym czasie w przeszłości. Czas ten tworzy się za pomocą czasownika pomocniczego <em>have</em> (lub <em>has</em> w przypadku trzeciej osoby) oraz formy przeszłej głównego czasownika.
            </div>
        </div>
    </div>

    <!-- Przykład 1: I have done -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                I have done
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have done my homework.</code> — Zrobiłem moją pracę domową. Jest to przykład użycia Present Perfect, gdy wynik działania jest ważny dla bieżącego momentu.
            </div>
        </div>
    </div>

    <!-- Przykład 2: I have just -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                I have just
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have just finished my lunch.</code> — Właśnie skończyłem jeść lunch. "Just" wskazuje na niedawność działania.
            </div>
        </div>
    </div>

    <!-- Przykład 3: I have already -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                I have already
            </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have already seen that movie.</code> — Widziałem już ten film. Używane do wyrażenia działań, które miały miejsce wcześniej, niż się tego spodziewano.
            </div>
        </div>
    </div>

    <!-- Przykład 4: I have not... yet -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                I have not... yet
            </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have not finished my project yet.</code> — Jeszcze nie skończyłem mojego projektu. "Yet" podkreśla, że działanie nie zostało jeszcze zakończone.
            </div>
        </div>
    </div>

    <!-- Przykład 5: Have you ever...? -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Have you ever...?
            </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>Have you ever been to Paris?</code> — Czy kiedykolwiek byłeś w Paryżu? To pytanie o doświadczenie z przeszłości, niezwiązane z konkretnym czasem.
            </div>
        </div>
    </div>

    <!-- Przykład 6: I have never... -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                I have never...
            </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have never tried sushi.</code> — Nigdy nie próbowałem sushi. "Never" wskazuje na brak doświadczenia.
            </div>
        </div>
    </div>
</div>
`}function returnLevel37UA(){return`<div class="accordion" id="presentPerfectAccordion">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Визначення часу Present Perfect
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <strong>Present Perfect</strong> — це час, який використовується для опису дій, що мають зв'язок з теперішнім моментом. Він підкреслює результат дії, який має значення в поточний час, або дії, що сталися в невизначений момент в минулому. Цей час утворюється за допомогою допоміжного дієслова <em>have</em> (або <em>has</em> для третьої особи) та причастя минулого часу основного дієслова.
            </div>
        </div>
    </div>

    <!-- Приклад 1: I have done -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                I have done
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have done my homework.</code> — Я зробив домашнє завдання. Це приклад використання Present Perfect, коли результат дії важливий для поточного моменту.
            </div>
        </div>
    </div>

    <!-- Приклад 2: I have just -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                I have just
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have just finished my lunch.</code> — Я тільки що закінчив обідати. Тут "just" вказує на нещодавність дії.
            </div>
        </div>
    </div>

    <!-- Приклад 3: I have already -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                I have already
            </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have already seen that movie.</code> — Я вже бачив цей фільм. Використовується для вираження дій, які сталися раніше, ніж очікувалося.
            </div>
        </div>
    </div>

    <!-- Приклад 4: I have not... yet -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                I have not... yet
            </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have not finished my project yet.</code> — Я ще не закінчив мій проєкт. Тут "yet" підкреслює, що дія ще не завершена.
            </div>
        </div>
    </div>

    <!-- Приклад 5: Have you ever...? -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Have you ever...?
            </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>Have you ever been to Paris?</code> — Ти колись був у Парижі? Це питання про минулий досвід, не прив'язаний до конкретного часу.
            </div>
        </div>
    </div>

    <!-- Приклад 6: I have never... -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                I have never...
            </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have never tried sushi.</code> — Я ніколи не пробував суші. Тут "never" вказує на відсутність досвіду.
            </div>
        </div>
    </div>
</div>
`}function returnLevel36(){return`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Глаголы из третьей группы (Неправильные глаголы)</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Глаголы из третьей группы (irregular verbs) не следуют стандартным правилам образования форм прошедшего времени и причастия прошедшего времени. Эти глаголы имеют уникальные формы, которые необходимо запоминать, так как их нельзя предсказать по правилам.
          </p>

          <!-- Основные характеристики -->
          <h5>Основные характеристики:</h5>
          <ul>
            <li><strong>Неизменяемый инфинитив:</strong> Например, глагол <em>read</em> сохраняет одинаковое написание во всех формах, но произношение различается:
              <ul>
                <li><strong>Present:</strong> [riːd]</li>
                <li><strong>Past:</strong> [rɛd]</li>
              </ul>
            </li>
            <li><strong>Различие форм:</strong> Формы неправильных глаголов могут быть уникальными для каждой из их временных форм. Пример:
              <ul>
                <li><strong>Base Form (инфинитив):</strong> <em>begin</em> — <strong>Past Simple:</strong> <em>began</em> — <strong>Past Participle:</strong> <em>begun</em></li>
              </ul>
            </li>
          </ul>

          <!-- Где используются -->
          <h5>Где используются:</h5>
          <p>Неправильные глаголы широко используются в английском языке и встречаются как в разговорной речи, так и в письменной. Они необходимы для правильного построения различных временных конструкций и используются в следующих случаях:</p>
          <ul>
            <li><strong>Действия в прошлом:</strong> Например, в предложении <em>"She went to the store."</em> (Она пошла в магазин), где глагол <em>went</em> является неправильной формой от <em>go</em>.</li>
            <li><strong>Перфектные времена:</strong> В предложении <em>"He has written a letter."</em> (Он написал письмо) используется форма <em>written</em> от глагола <em>write</em> для образования Present Perfect.</li>
            <li><strong>Пассивный залог:</strong> В предложении <em>"The book was written by an unknown author."</em> (Книга была написана неизвестным автором) используется форма <em>written</em> от <em>write</em>.</li>
          </ul>

          <!-- Роль в изучении -->
          <h5>Роль в изучении:</h5>
          <p>Изучение неправильных глаголов очень важно для правильного формирования предложений в английском языке, особенно в прошедшем времени и перфектных конструкциях. Они составляют значительную часть повседневной речи и письменного общения. В учебниках, таких как <em>Essential Grammar in Use</em> Рэймонда Мерфи, неправильным глаголам уделяется особое внимание, включая таблицы для заучивания.</p>

          <!-- Кнопка для примеров -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Пример
          </button>

          <!-- Примеры глаголов -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Base Form</strong>: begin — <strong>Past Simple</strong>: began — <strong>Past Participle</strong>: begun</li>
                <li><strong>Base Form</strong>: read — <strong>Past Simple</strong>: read — <strong>Past Participle</strong>: read</li>
                <li><strong>Base Form</strong>: go — <strong>Past Simple</strong>: went — <strong>Past Participle</strong>: gone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel36EN(){return`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Third Group Verbs (Irregular Verbs)</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Third group verbs (irregular verbs) do not follow the standard rules for forming the past tense and past participle. These verbs have unique forms that need to be memorized, as they cannot be predicted based on rules.
          </p>

          <!-- Main features -->
          <h5>Main Features:</h5>
          <ul>
            <li><strong>Unchanged base form:</strong> For example, the verb <em>read</em> keeps the same spelling in all forms, but the pronunciation differs:
              <ul>
                <li><strong>Present:</strong> [riːd]</li>
                <li><strong>Past:</strong> [rɛd]</li>
              </ul>
            </li>
            <li><strong>Form Differences:</strong> The forms of irregular verbs can be unique for each of their tenses. Example:
              <ul>
                <li><strong>Base Form:</strong> <em>begin</em> — <strong>Past Simple:</strong> <em>began</em> — <strong>Past Participle:</strong> <em>begun</em></li>
              </ul>
            </li>
          </ul>

          <!-- Where are they used -->
          <h5>Where are they used:</h5>
          <p>Irregular verbs are widely used in English and appear in both spoken and written language. They are essential for correct formation of various tense constructions and are used in the following contexts:</p>
          <ul>
            <li><strong>Actions in the past:</strong> For example, in the sentence <em>"She went to the store."</em>, where the verb <em>went</em> is the irregular form of <em>go</em>.</li>
            <li><strong>Present Perfect tense:</strong> In the sentence <em>"He has written a letter."</em>, the form <em>written</em> of the verb <em>write</em> is used to create Present Perfect.</li>
            <li><strong>Passive voice:</strong> In the sentence <em>"The book was written by an unknown author."</em>, the form <em>written</em> of <em>write</em> is used.</li>
          </ul>

          <!-- Role of learning -->
          <h5>Role of Learning:</h5>
          <p>Learning irregular verbs is crucial for correctly forming sentences in English, especially in the past tense and in perfect constructions. These verbs are an important part of everyday speech and writing. In textbooks like <em>Essential Grammar in Use</em> by Raymond Murphy, irregular verbs are given special attention, including tables for memorization.</p>

          <!-- Button for examples -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Example
          </button>

          <!-- Examples of verbs -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Base Form</strong>: begin — <strong>Past Simple</strong>: began — <strong>Past Participle</strong>: begun</li>
                <li><strong>Base Form</strong>: read — <strong>Past Simple</strong>: read — <strong>Past Participle</strong>: read</li>
                <li><strong>Base Form</strong>: go — <strong>Past Simple</strong>: went — <strong>Past Participle</strong>: gone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel36PL(){return`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Czasowniki trzeciej grupy (Nieregularne czasowniki)</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Czasowniki trzeciej grupy (irregular verbs) nie przestrzegają standardowych zasad tworzenia formy czasu przeszłego i formy czasownika przeszłego (Past Participle). Te czasowniki mają unikalne formy, które należy zapamiętać, ponieważ nie można ich przewidzieć na podstawie zasad.
          </p>

          <!-- Główne cechy -->
          <h5>Główne cechy:</h5>
          <ul>
            <li><strong>Niezmienny bezokolicznik:</strong> Na przykład, czasownik <em>read</em> zachowuje takie samo pisownię we wszystkich formach, ale wymowa różni się:
              <ul>
                <li><strong>Present:</strong> [riːd]</li>
                <li><strong>Past:</strong> [rɛd]</li>
              </ul>
            </li>
            <li><strong>Różnica form:</strong> Formy nieregularnych czasowników mogą być unikalne dla każdego z ich form czasowych. Przykład:
              <ul>
                <li><strong>Base Form (bezokolicznik):</strong> <em>begin</em> — <strong>Past Simple:</strong> <em>began</em> — <strong>Past Participle:</strong> <em>begun</em></li>
              </ul>
            </li>
          </ul>

          <!-- Gdzie używane -->
          <h5>Gdzie używane:</h5>
          <p>Czasowniki nieregularne są szeroko stosowane w języku angielskim i można je znaleźć zarówno w mowie, jak i w piśmie. Są one niezbędne do prawidłowego formułowania różnych konstrukcji czasowych i wykorzystywane są w następujących przypadkach:</p>
          <ul>
            <li><strong>Działania w przeszłości:</strong> Przykładowo, w zdaniu <em>"She went to the store."</em> (Ona poszła do sklepu), czasownik <em>went</em> jest formą nieregularną od <em>go</em>.</li>
            <li><strong>Perfect tenses:</strong> W zdaniu <em>"He has written a letter."</em> (On napisał list) używana jest forma <em>written</em> od <em>write</em> do utworzenia Present Perfect.</li>
            <li><strong>Strona bierna:</strong> W zdaniu <em>"The book was written by an unknown author."</em> (Książka została napisana przez nieznanego autora) używana jest forma <em>written</em> od <em>write</em>.</li>
          </ul>

          <!-- Rola nauki -->
          <h5>Rola nauki:</h5>
          <p>Uczenie się nieregularnych czasowników jest bardzo ważne dla prawidłowego formułowania zdań w języku angielskim, zwłaszcza w czasie przeszłym i konstrukcjach perfektywnych. Stanowią one dużą część codziennej mowy i pisania. W podręcznikach, takich jak <em>Essential Grammar in Use</em> R. Murphy'ego, poświęca się im szczególną uwagę, w tym tabelki do zapamiętywania.</p>

          <!-- Przycisk do przykładów -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Przykład
          </button>

          <!-- Przykłady czasowników -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Base Form</strong>: begin — <strong>Past Simple</strong>: began — <strong>Past Participle</strong>: begun</li>
                <li><strong>Base Form</strong>: read — <strong>Past Simple</strong>: read — <strong>Past Participle</strong>: read</li>
                <li><strong>Base Form</strong>: go — <strong>Past Simple</strong>: went — <strong>Past Participle</strong>: gone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel36UA(){return`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Дієслова з третьої групи (Неправильні дієслова)</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Дієслова з третьої групи (irregular verbs) не слідують стандартним правилам утворення форм минулого часу та дієприкметника минулого часу. Ці дієслова мають унікальні форми, які необхідно запам'ятовувати, оскільки їх неможливо передбачити за правилами.
          </p>

          <!-- Основні характеристики -->
          <h5>Основні характеристики:</h5>
          <ul>
            <li><strong>Незмінний інфінітив:</strong> Наприклад, дієслово <em>read</em> зберігає однакове написання у всіх формах, але вимова різниться:
              <ul>
                <li><strong>Present:</strong> [riːd]</li>
                <li><strong>Past:</strong> [rɛd]</li>
              </ul>
            </li>
            <li><strong>Різниця форм:</strong> Форми неправильних дієслів можуть бути унікальними для кожної з їхніх тимчасових форм. Приклад:
              <ul>
                <li><strong>Base Form (інфінітив):</strong> <em>begin</em> — <strong>Past Simple:</strong> <em>began</em> — <strong>Past Participle:</strong> <em>begun</em></li>
              </ul>
            </li>
          </ul>

          <!-- Де використовуються -->
          <h5>Де використовуються:</h5>
          <p>Неправильні дієслова широко використовуються в англійській мові і зустрічаються як у розмовній мові, так і в письмовій. Вони необхідні для правильного побудови різних часових конструкцій і використовуються в наступних випадках:</p>
          <ul>
            <li><strong>Дії в минулому:</strong> Наприклад, у реченні <em>"She went to the store."</em> (Вона пішла до магазину), де дієслово <em>went</em> є неправильною формою від <em>go</em>.</li>
            <li><strong>Перфектні часи:</strong> У реченні <em>"He has written a letter."</em> (Він написав листа) використовується форма <em>written</em> від дієслова <em>write</em> для утворення Present Perfect.</li>
            <li><strong>Пасивний стан:</strong> У реченні <em>"The book was written by an unknown author."</em> (Книга була написана невідомим автором) використовується форма <em>written</em> від <em>write</em>.</li>
          </ul>

          <!-- Роль вивчення -->
          <h5>Роль вивчення:</h5>
          <p>Вивчення неправильних дієслів є дуже важливим для правильного формулювання речень в англійській мові, особливо в минулому часі та перфектних конструкціях. Вони складають значну частину повсякденної мови та письмового спілкування. У підручниках, таких як <em>Essential Grammar in Use</em> Реймона Мерфі, неправильним дієслів приділяється особлива увага, зокрема таблиці для запам'ятовування.</p>

          <!-- Кнопка для прикладів -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Приклад
          </button>

          <!-- Приклади дієслів -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Base Form</strong>: begin — <strong>Past Simple</strong>: began — <strong>Past Participle</strong>: begun</li>
                <li><strong>Base Form</strong>: read — <strong>Past Simple</strong>: read — <strong>Past Participle</strong>: read</li>
                <li><strong>Base Form</strong>: go — <strong>Past Simple</strong>: went — <strong>Past Participle</strong>: gone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel35(){return`<div class="card border-success">
  <div class="card-header bg-success text-white">
    <h5 class="mb-0">
      <button class="btn btn-light text-success" type="button" data-bs-toggle="collapse" data-bs-target="#pastRule" aria-expanded="true" aria-controls="pastRule">
        Сравнение Past Continuous и Past Simple
      </button>
    </h5>
  </div>
  <div id="pastRule" class="collapse show">
    <div class="card-body text-success">
      <h6><strong>1. Основные правила:</strong></h6>
      <p><strong>Past Simple:</strong> действия, которые завершились в прошлом в определенный момент.</p>
      <p><strong>Past Continuous:</strong> действия, которые были в процессе в определенный момент в прошлом.</p>

      <h6><strong>2. Слова-маркеры:</strong></h6>
      <button class="btn btn-success text-white mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#markers" aria-expanded="false" aria-controls="markers">
        Слова-маркеры
      </button>
      <div class="collapse" id="markers">
        <ul>
          <li><strong>Past Simple:</strong> yesterday, last week, last month, two days ago, in 2010.</li>
          <li><strong>Past Continuous:</strong> while, when, at 5 PM, all day yesterday.</li>
        </ul>
      </div>

      <h6><strong>3. Формулы:</strong></h6>
      <button class="btn btn-success text-white mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#formulas" aria-expanded="false" aria-controls="formulas">
        Формулы
      </button>
      <div class="collapse" id="formulas">
        <ul>
          <li><strong>Past Simple:</strong>
            <ul>
              <li><strong>Положительное:</strong> Subject + Verb (V2/ed)</li>
              <li><strong>Отрицательное:</strong> Subject + did not + Verb (V1)</li>
              <li><strong>Вопросительное:</strong> Did + Subject + Verb (V1)</li>
            </ul>
          </li>
          <li><strong>Past Continuous:</strong>
            <ul>
              <li><strong>Положительное:</strong> Subject + was/were + Verb (-ing)</li>
              <li><strong>Отрицательное:</strong> Subject + was not/were not + Verb (-ing)</li>
              <li><strong>Вопросительное:</strong> Was/Were + Subject + Verb (-ing)</li>
            </ul>
          </li>
        </ul>
      </div>

      <h6><strong>4. Примеры:</strong></h6>
      <button class="btn btn-success text-white mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
        Примеры
      </button>
      <div class="collapse" id="examples">
        <p><strong>Past Simple:</strong></p>
        <ul>
          <li>Положительное: <em>I played football yesterday.</em></li>
          <li>Отрицательное: <em>I didn’t play football yesterday.</em></li>
          <li>Вопросительное: <em>Did you play football yesterday?</em></li>
        </ul>
        <p><strong>Past Continuous:</strong></p>
        <ul>
          <li>Положительное: <em>I was reading a book at 5 PM yesterday.</em></li>
          <li>Отрицательное: <em>I wasn’t reading a book at 5 PM yesterday.</em></li>
          <li>Вопросительное: <em>Were you reading a book at 5 PM yesterday?</em></li>
        </ul>
      </div>

      <h6><strong>5. Сравнение:</strong></h6>
      <button class="btn btn-success text-white mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#comparison" aria-expanded="false" aria-controls="comparison">
        Сравнение
      </button>
      <div class="collapse" id="comparison">
        <ul>
          <li><strong>Past Simple:</strong> <em>I cleaned the house yesterday.</em></li>
          <li><strong>Past Continuous:</strong> <em>I was cleaning the house when she called.</em></li>
        </ul>
      </div>
    </div>
  </div>
</div>
`}function returnLevel35EN(){return`<div class="card mt-3">
  <div class="card-header bg-success text-white">
    <h5 class="mb-0">Comparison of Past Continuous and Past Simple</h5>
  </div>
  <div class="card-body">
    <p><strong>Past Continuous</strong> describes an action that was happening at a specific time in the past, often interrupted by another action in the <strong>Past Simple</strong>.</p>
    <p><strong>Key words for Past Continuous:</strong> while, at that moment, all day.</p>
    <p><strong>Key words for Past Simple:</strong> yesterday, last night, two days ago, in 2000.</p>
    <h6>Sentence formation:</h6>
    <ul>
      <li><strong>Affirmative sentences (Past Continuous):</strong> Subject + was/were + verb-ing.</li>
      <li><strong>Affirmative sentences (Past Simple):</strong> Subject + verb in the past form.</li>
      <li><strong>Negative sentences (Past Continuous):</strong> Subject + was/were not + verb-ing.</li>
      <li><strong>Negative sentences (Past Simple):</strong> Subject + did not + verb in the base form.</li>
      <li><strong>Questions (Past Continuous):</strong> Was/Were + subject + verb-ing?</li>
      <li><strong>Questions (Past Simple):</strong> Did + subject + verb in the base form?</li>
    </ul>
    <button class="btn btn-outline-success" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
      Examples
    </button>
    <div class="collapse mt-3" id="examples">
      <ul>
        <li>While I ... (read), my phone rang. ➡ <strong>was reading</strong></li>
        <li>She ... (not watch) TV when the lights went out. ➡ <strong>wasn't watching</strong></li>
        <li>Did you ... (play) the piano yesterday? ➡ <strong>play</strong></li>
        <li>When we ... (walk) in the park, it started to rain. ➡ <strong>were walking</strong></li>
      </ul>
    </div>
  </div>
</div>
`}function returnLevel35PL(){return`<div class="card mt-3">
  <div class="card-header bg-success text-white">
    <h5 class="mb-0">Porównanie Past Continuous i Past Simple</h5>
  </div>
  <div class="card-body">
    <p><strong>Past Continuous</strong> opisuje czynność w toku w określonym momencie w przeszłości, często zakłóconą przez inną czynność w czasie <strong>Past Simple</strong>.</p>
    <p><strong>Słowa kluczowe dla Past Continuous:</strong> while, at that moment, all day.</p>
    <p><strong>Słowa kluczowe dla Past Simple:</strong> yesterday, last night, two days ago, in 2000.</p>
    <h6>Tworzenie zdań:</h6>
    <ul>
      <li><strong>Zdania twierdzące (Past Continuous):</strong> Osoba + was/were + czasownik z końcówką -ing.</li>
      <li><strong>Zdania twierdzące (Past Simple):</strong> Osoba + czasownik w formie przeszłej.</li>
      <li><strong>Zdania przeczące (Past Continuous):</strong> Osoba + was/were not + czasownik z końcówką -ing.</li>
      <li><strong>Zdania przeczące (Past Simple):</strong> Osoba + did not + czasownik w podstawowej formie.</li>
      <li><strong>Pytania (Past Continuous):</strong> Was/Were + osoba + czasownik z końcówką -ing?</li>
      <li><strong>Pytania (Past Simple):</strong> Did + osoba + czasownik w podstawowej formie?</li>
    </ul>
    <button class="btn btn-outline-success" type="button" data-bs-toggle="collapse" data-bs-target="#przyklady" aria-expanded="false" aria-controls="przyklady">
      Przykłady
    </button>
    <div class="collapse mt-3" id="przyklady">
      <ul>
        <li>While I ... (read), my phone rang. ➡ <strong>was reading</strong></li>
        <li>She ... (not watch) TV when the lights went out. ➡ <strong>wasn't watching</strong></li>
        <li>Did you ... (play) the piano yesterday? ➡ <strong>play</strong></li>
        <li>When we ... (walk) in the park, it started to rain. ➡ <strong>were walking</strong></li>
      </ul>
    </div>
  </div>
</div>
`}function returnLevel35UA(){return`<div class="card border-success">
  <div class="card-header bg-success text-white">
    <h5 class="mb-0">
      <button class="btn btn-light text-success" type="button" data-bs-toggle="collapse" data-bs-target="#pastRule" aria-expanded="true" aria-controls="pastRule">
        Порівняння Past Continuous і Past Simple
      </button>
    </h5>
  </div>
  <div id="pastRule" class="collapse show">
    <div class="card-body text-success">
      <h6><strong>1. Основні правила:</strong></h6>
      <p><strong>Past Simple:</strong> дії, що завершилися в минулому в певний момент.</p>
      <p><strong>Past Continuous:</strong> дії, що були в процесі у певний момент в минулому.</p>

      <h6><strong>2. Слова-маркери:</strong></h6>
      <button class="btn btn-success text-white mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#markers" aria-expanded="false" aria-controls="markers">
        Слова-маркери
      </button>
      <div class="collapse" id="markers">
        <ul>
          <li><strong>Past Simple:</strong> yesterday, last week, last month, two days ago, in 2010.</li>
          <li><strong>Past Continuous:</strong> while, when, at 5 PM, all day yesterday.</li>
        </ul>
      </div>

      <h6><strong>3. Формули:</strong></h6>
      <button class="btn btn-success text-white mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#formulas" aria-expanded="false" aria-controls="formulas">
        Формули
      </button>
      <div class="collapse" id="formulas">
        <ul>
          <li><strong>Past Simple:</strong>
            <ul>
              <li><strong>Позитивне:</strong> Subject + Verb (V2/ed)</li>
              <li><strong>Негативне:</strong> Subject + did not + Verb (V1)</li>
              <li><strong>Питальне:</strong> Did + Subject + Verb (V1)</li>
            </ul>
          </li>
          <li><strong>Past Continuous:</strong>
            <ul>
              <li><strong>Позитивне:</strong> Subject + was/were + Verb (-ing)</li>
              <li><strong>Негативне:</strong> Subject + was not/were not + Verb (-ing)</li>
              <li><strong>Питальне:</strong> Was/Were + Subject + Verb (-ing)</li>
            </ul>
          </li>
        </ul>
      </div>

      <h6><strong>4. Приклади:</strong></h6>
      <button class="btn btn-success text-white mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
        Приклади
      </button>
      <div class="collapse" id="examples">
        <p><strong>Past Simple:</strong></p>
        <ul>
          <li>Позитивне: <em>I played football yesterday.</em></li>
          <li>Негативне: <em>I didn’t play football yesterday.</em></li>
          <li>Питальне: <em>Did you play football yesterday?</em></li>
        </ul>
        <p><strong>Past Continuous:</strong></p>
        <ul>
          <li>Позитивне: <em>I was reading a book at 5 PM yesterday.</em></li>
          <li>Негативне: <em>I wasn’t reading a book at 5 PM yesterday.</em></li>
          <li>Питальне: <em>Were you reading a book at 5 PM yesterday?</em></li>
        </ul>
      </div>

      <h6><strong>5. Порівняння:</strong></h6>
      <button class="btn btn-success text-white mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#comparison" aria-expanded="false" aria-controls="comparison">
        Порівняння
      </button>
      <div class="collapse" id="comparison">
        <ul>
          <li><strong>Past Simple:</strong> <em>I cleaned the house yesterday.</em></li>
          <li><strong>Past Continuous:</strong> <em>I was cleaning the house when she called.</em></li>
        </ul>
      </div>
    </div>
  </div>
</div>
`}function returnLevel40(){return`<div class="accordion" id="grammarAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
        style="background-color: #007bff; color: white; font-weight: bold;">
        Present Perfect (I have done)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#grammarAccordion">
      <div class="accordion-body" style="background-color: #f8f9fa; padding: 15px; border: 1px solid #ddd;">
        <p><strong>Объяснение:</strong> Present Perfect используется, когда действие связано с настоящим моментом. Это может быть результат, недавнее действие или жизненный опыт.</p>
        <p><strong>Примеры:</strong></p>
        <ul>
          <li><strong>Недавнее действие:</strong> I have just finished my work. (Я только что закончил работу.)</li>
          <li><strong>Жизненный опыт:</strong> She has visited Paris. (Она была в Париже.)</li>
          <li><strong>Результат:</strong> We have lost the keys. (Мы потеряли ключи, и сейчас их нет.)</li>
        </ul>
        <p><strong>Позитивные:</strong> Подлежащее + have/has + глагол (3-я форма)</p>
        <p style="font-weight: bold; color: #333;">I have finished my work.</p>
        <p><strong>Негативные:</strong> Подлежащее + have/has + not + глагол (3-я форма)</p>
        <p style="font-weight: bold; color: #333;">She has not seen this movie.</p>
        <p><strong>Вопросительные:</strong> Have/Has + подлежащее + глагол (3-я форма)?</p>
        <p style="font-weight: bold; color: #333;">Have you ever been to Paris?</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
        style="background-color: #007bff; color: white; font-weight: bold;">
        Past Simple (I did)
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#grammarAccordion">
      <div class="accordion-body" style="background-color: #f8f9fa; padding: 15px; border: 1px solid #ddd;">
        <p><strong>Объяснение:</strong> Past Simple используется для описания действий, которые произошли в конкретный момент в прошлом. Важно, когда именно это случилось.</p>
        <p><strong>Примеры:</strong></p>
        <ul>
          <li><strong>Определённое время в прошлом:</strong> I finished my work yesterday. (Я закончил работу вчера.)</li>
          <li><strong>Завершённое действие:</strong> She visited Paris last year. (Она посетила Париж в прошлом году.)</li>
          <li><strong>Событие в прошлом:</strong> We lost the keys last night. (Мы потеряли ключи прошлой ночью.)</li>
        </ul>
        <p><strong>Позитивные:</strong> Подлежащее + глагол (2-я форма)</p>
        <p style="font-weight: bold; color: #333;">I finished my work yesterday.</p>
        <p><strong>Негативные:</strong> Подлежащее + did not + глагол (1-я форма)</p>
        <p style="font-weight: bold; color: #333;">She did not see that movie.</p>
        <p><strong>Вопросительные:</strong> Did + подлежащее + глагол (1-я форма)?</p>
        <p style="font-weight: bold; color: #333;">Did you visit Paris last year?</p>
      </div>
    </div>
  </div>
</div>
`}function returnLevel40EN(){return`<div class="accordion" id="grammarAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
        style="background-color: #007bff; color: white; font-weight: bold;">
        Present Perfect (I have done)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#grammarAccordion">
      <div class="accordion-body" style="background-color: #f8f9fa; padding: 15px; border: 1px solid #ddd;">
        <p><strong>Explanation:</strong> The Present Perfect is used when an action is connected to the present moment. It can indicate a result, a recent action, or life experience.</p>
        <p><strong>Examples:</strong></p>
        <ul>
          <li><strong>Recent action:</strong> I have just finished my work.</li>
          <li><strong>Life experience:</strong> She has visited Paris.</li>
          <li><strong>Result:</strong> We have lost the keys.</li>
        </ul>
        <p><strong>Affirmative:</strong> Subject + have/has + verb (past participle)</p>
        <p style="font-weight: bold; color: #333;">I have finished my work.</p>
        <p><strong>Negative:</strong> Subject + have/has + not + verb (past participle)</p>
        <p style="font-weight: bold; color: #333;">She has not seen this movie.</p>
        <p><strong>Questions:</strong> Have/Has + subject + verb (past participle)?</p>
        <p style="font-weight: bold; color: #333;">Have you ever been to Paris?</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
        style="background-color: #007bff; color: white; font-weight: bold;">
        Past Simple (I did)
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#grammarAccordion">
      <div class="accordion-body" style="background-color: #f8f9fa; padding: 15px; border: 1px solid #ddd;">
        <p><strong>Explanation:</strong> The Past Simple is used to describe actions that happened at a specific time in the past. The exact time of the action is important.</p>
        <p><strong>Examples:</strong></p>
        <ul>
          <li><strong>Specific time in the past:</strong> I finished my work yesterday.</li>
          <li><strong>Completed action:</strong> She visited Paris last year.</li>
          <li><strong>Past event:</strong> We lost the keys last night.</li>
        </ul>
        <p><strong>Affirmative:</strong> Subject + verb (past simple form)</p>
        <p style="font-weight: bold; color: #333;">I finished my work yesterday.</p>
        <p><strong>Negative:</strong> Subject + did not + verb (base form)</p>
        <p style="font-weight: bold; color: #333;">She did not see that movie.</p>
        <p><strong>Questions:</strong> Did + subject + verb (base form)?</p>
        <p style="font-weight: bold; color: #333;">Did you visit Paris last year?</p>
      </div>
    </div>
  </div>
</div>
`}function returnLevel40PL(){return`<div class="accordion" id="grammarAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
        style="background-color: #007bff; color: white; font-weight: bold;">
        Present Perfect (I have done)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#grammarAccordion">
      <div class="accordion-body" style="background-color: #f8f9fa; padding: 15px; border: 1px solid #ddd;">
        <p><strong>Wyjaśnienie:</strong> Present Perfect jest używany, gdy czynność jest powiązana z teraźniejszością. Może to być rezultat, niedawne działanie lub doświadczenie życiowe.</p>
        <p><strong>Przykłady:</strong></p>
        <ul>
          <li><strong>Niedawne działanie:</strong> I have just finished my work. (Właśnie skończyłem pracę.)</li>
          <li><strong>Doświadczenie życiowe:</strong> She has visited Paris. (Była w Paryżu.)</li>
          <li><strong>Rezultat:</strong> We have lost the keys. (Zgubiliśmy klucze i teraz ich nie ma.)</li>
        </ul>
        <p><strong>Zdania twierdzące:</strong> Podmiot + have/has + czasownik (3. forma)</p>
        <p style="font-weight: bold; color: #333;">I have finished my work.</p>
        <p><strong>Zdania przeczące:</strong> Podmiot + have/has + not + czasownik (3. forma)</p>
        <p style="font-weight: bold; color: #333;">She has not seen this movie.</p>
        <p><strong>Pytania:</strong> Have/Has + podmiot + czasownik (3. forma)?</p>
        <p style="font-weight: bold; color: #333;">Have you ever been to Paris?</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
        style="background-color: #007bff; color: white; font-weight: bold;">
        Past Simple (I did)
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#grammarAccordion">
      <div class="accordion-body" style="background-color: #f8f9fa; padding: 15px; border: 1px solid #ddd;">
        <p><strong>Wyjaśnienie:</strong> Past Simple jest używany do opisywania działań, które miały miejsce w określonym momencie w przeszłości. Ważne jest, kiedy dokładnie to się stało.</p>
        <p><strong>Przykłady:</strong></p>
        <ul>
          <li><strong>Konkretna chwila w przeszłości:</strong> I finished my work yesterday. (Skończyłem pracę wczoraj.)</li>
          <li><strong>Zakończone działanie:</strong> She visited Paris last year. (Odwiedziła Paryż w zeszłym roku.)</li>
          <li><strong>Wydarzenie w przeszłości:</strong> We lost the keys last night. (Zgubiliśmy klucze zeszłej nocy.)</li>
        </ul>
        <p><strong>Zdania twierdzące:</strong> Podmiot + czasownik (2. forma)</p>
        <p style="font-weight: bold; color: #333;">I finished my work yesterday.</p>
        <p><strong>Zdania przeczące:</strong> Podmiot + did not + czasownik (1. forma)</p>
        <p style="font-weight: bold; color: #333;">She did not see that movie.</p>
        <p><strong>Pytania:</strong> Did + podmiot + czasownik (1. forma)?</p>
        <p style="font-weight: bold; color: #333;">Did you visit Paris last year?</p>
      </div>
    </div>
  </div>
</div>
`}function returnLevel40UA(){return`<div class="accordion" id="grammarAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
        style="background-color: #007bff; color: white; font-weight: bold;">
        Present Perfect (I have done)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#grammarAccordion">
      <div class="accordion-body" style="background-color: #f8f9fa; padding: 15px; border: 1px solid #ddd;">
        <p><strong>Пояснення:</strong> Present Perfect використовується, коли дія пов'язана з теперішнім моментом. Це може бути результат, нещодавня дія або життєвий досвід.</p>
        <p><strong>Приклади:</strong></p>
        <ul>
          <li><strong>Нещодавня дія:</strong> I have just finished my work. (Я щойно закінчив роботу.)</li>
          <li><strong>Життєвий досвід:</strong> She has visited Paris. (Вона була в Парижі.)</li>
          <li><strong>Результат:</strong> We have lost the keys. (Ми загубили ключі, і зараз їх немає.)</li>
        </ul>
        <p><strong>Позитивні:</strong> Підмет + have/has + дієслово (3-я форма)</p>
        <p style="font-weight: bold; color: #333;">I have finished my work.</p>
        <p><strong>Негативні:</strong> Підмет + have/has + not + дієслово (3-я форма)</p>
        <p style="font-weight: bold; color: #333;">She has not seen this movie.</p>
        <p><strong>Питальні:</strong> Have/Has + підмет + дієслово (3-я форма)?</p>
        <p style="font-weight: bold; color: #333;">Have you ever been to Paris?</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
        style="background-color: #007bff; color: white; font-weight: bold;">
        Past Simple (I did)
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#grammarAccordion">
      <div class="accordion-body" style="background-color: #f8f9fa; padding: 15px; border: 1px solid #ddd;">
        <p><strong>Пояснення:</strong> Past Simple використовується для опису дій, які сталися в конкретний момент у минулому. Важливо, коли саме це сталося.</p>
        <p><strong>Приклади:</strong></p>
        <ul>
          <li><strong>Конкретний час у минулому:</strong> I finished my work yesterday. (Я закінчив роботу вчора.)</li>
          <li><strong>Завершена дія:</strong> She visited Paris last year. (Вона відвідала Париж минулого року.)</li>
          <li><strong>Подія в минулому:</strong> We lost the keys last night. (Ми загубили ключі минулої ночі.)</li>
        </ul>
        <p><strong>Позитивні:</strong> Підмет + дієслово (2-я форма)</p>
        <p style="font-weight: bold; color: #333;">I finished my work yesterday.</p>
        <p><strong>Негативні:</strong> Підмет + did not + дієслово (1-я форма)</p>
        <p style="font-weight: bold; color: #333;">She did not see that movie.</p>
        <p><strong>Питальні:</strong> Did + підмет + дієслово (1-я форма)?</p>
        <p style="font-weight: bold; color: #333;">Did you visit Paris last year?</p>
      </div>
    </div>
  </div>
</div>
`}function returnLevel34(){return`<div class="card" style="width: 100%; border: 1px solid #28a745; border-radius: 5px; background-color: #e9f7ec;">
  <div class="card-body">
    <h4 class="card-title" style="font-size: 1.2rem; margin-bottom: 10px; color: #28a745;"><strong>Past Continuous Tense</strong></h4>
    <p class="card-text" style="font-size: 1rem; color: #155724;">Past Continuous Tense описывает действия, которые происходили в определённый момент в прошлом или в течение определённого времени в прошлом. Он также используется для выражения двух действий, происходивших одновременно.</p>
    <p><strong>Формула:</strong> [Subject] + was/were + [verb+ing]</p>
    
    <h5 class="card-title" style="font-size: 1.1rem; margin-top: 15px; color: #28a745;">Примеры:</h5>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example1" aria-expanded="false" aria-controls="example1">
        Пример 1
      </button>
      <div class="collapse" id="example1">
        <p class="mt-2" style="color: #155724;">She was reading a book when I called her. (Она читала книгу, когда я позвонил ей.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example2" aria-expanded="false" aria-controls="example2">
        Пример 2
      </button>
      <div class="collapse" id="example2">
        <p class="mt-2" style="color: #155724;">They were playing football all afternoon. (Они играли в футбол весь день.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example3" aria-expanded="false" aria-controls="example3">
        Пример 3
      </button>
      <div class="collapse" id="example3">
        <p class="mt-2" style="color: #155724;">I was cooking dinner when the phone rang. (Я готовил ужин, когда зазвонил телефон.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example4" aria-expanded="false" aria-controls="example4">
        Пример 4
      </button>
      <div class="collapse" id="example4">
        <p class="mt-2" style="color: #155724;">We were talking about the movie when it started raining. (Мы говорили о фильме, когда начался дождь.)</p>
      </div>
    </div>
  </div>
</div>`}function returnLevel34EN(){return`<div class="card" style="width: 100%; border: 1px solid #28a745; border-radius: 5px; background-color: #e9f7ec;">
  <div class="card-body">
    <h4 class="card-title" style="font-size: 1.2rem; margin-bottom: 10px; color: #28a745;"><strong>Past Continuous Tense</strong></h4>
    <p class="card-text" style="font-size: 1rem; color: #155724;">The Past Continuous tense describes actions that were happening at a particular moment in the past or actions that were ongoing for some time in the past. It is also used to express two actions happening at the same time in the past.</p>
    <p><strong>Formula:</strong> [Subject] + was/were + [verb+ing]</p>
    
    <h5 class="card-title" style="font-size: 1.1rem; margin-top: 15px; color: #28a745;">Examples:</h5>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example1" aria-expanded="false" aria-controls="example1">
        Example 1
      </button>
      <div class="collapse" id="example1">
        <p class="mt-2" style="color: #155724;">She was reading a book when I called her.</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example2" aria-expanded="false" aria-controls="example2">
        Example 2
      </button>
      <div class="collapse" id="example2">
        <p class="mt-2" style="color: #155724;">They were playing football all afternoon.</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example3" aria-expanded="false" aria-controls="example3">
        Example 3
      </button>
      <div class="collapse" id="example3">
        <p class="mt-2" style="color: #155724;">I was cooking dinner when the phone rang.</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example4" aria-expanded="false" aria-controls="example4">
        Example 4
      </button>
      <div class="collapse" id="example4">
        <p class="mt-2" style="color: #155724;">We were talking about the movie when it started raining.</p>
      </div>
    </div>
  </div>
</div>`}function returnLevel34PL(){return`<div class="card" style="width: 100%; border: 1px solid #28a745; border-radius: 5px; background-color: #e9f7ec;">
  <div class="card-body">
    <h4 class="card-title" style="font-size: 1.2rem; margin-bottom: 10px; color: #28a745;"><strong>Czas Past Continuous</strong></h4>
    <p class="card-text" style="font-size: 1rem; color: #155724;">Czas Past Continuous opisuje działania, które miały miejsce w określonym momencie w przeszłości lub trwały przez jakiś czas w przeszłości. Używany jest również do wyrażenia dwóch działań, które miały miejsce jednocześnie.</p>
    <p><strong>Wzór:</strong> [Podmiot] + was/were + [czasownik+ing]</p>
    
    <h5 class="card-title" style="font-size: 1.1rem; margin-top: 15px; color: #28a745;">Przykłady:</h5>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example1" aria-expanded="false" aria-controls="example1">
        Przykład 1
      </button>
      <div class="collapse" id="example1">
        <p class="mt-2" style="color: #155724;">She was reading a book when I called her. (Ona czytała książkę, kiedy zadzwoniłem do niej.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example2" aria-expanded="false" aria-controls="example2">
        Przykład 2
      </button>
      <div class="collapse" id="example2">
        <p class="mt-2" style="color: #155724;">They were playing football all afternoon. (Oni grali w piłkę nożną przez całe popołudnie.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example3" aria-expanded="false" aria-controls="example3">
        Przykład 3
      </button>
      <div class="collapse" id="example3">
        <p class="mt-2" style="color: #155724;">I was cooking dinner when the phone rang. (Gotowałem obiad, kiedy zadzwonił telefon.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example4" aria-expanded="false" aria-controls="example4">
        Przykład 4
      </button>
      <div class="collapse" id="example4">
        <p class="mt-2" style="color: #155724;">We were talking about the movie when it started raining. (Rozmawialiśmy o filmie, kiedy zaczęło padać.)</p>
      </div>
    </div>
  </div>
</div>`}function returnLevel34UA(){return`<div class="card" style="width: 100%; border: 1px solid #28a745; border-radius: 5px; background-color: #e9f7ec;">
  <div class="card-body">
    <h4 class="card-title" style="font-size: 1.2rem; margin-bottom: 10px; color: #28a745;"><strong>Час Past Continuous</strong></h4>
    <p class="card-text" style="font-size: 1rem; color: #155724;">Час Past Continuous описує дії, які відбувалися в певний момент у минулому або протягом певного часу в минулому. Він також використовується для вираження двох дій, що відбувалися одночасно.</p>
    <p><strong>Формула:</strong> [Підмет] + was/were + [дієслово+ing]</p>
    
    <h5 class="card-title" style="font-size: 1.1rem; margin-top: 15px; color: #28a745;">Приклади:</h5>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example1" aria-expanded="false" aria-controls="example1">
        Приклад 1
      </button>
      <div class="collapse" id="example1">
        <p class="mt-2" style="color: #155724;">She was reading a book when I called her. (Вона читала книгу, коли я зателефонував їй.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example2" aria-expanded="false" aria-controls="example2">
        Приклад 2
      </button>
      <div class="collapse" id="example2">
        <p class="mt-2" style="color: #155724;">They were playing football all afternoon. (Вони грали у футбол весь день.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example3" aria-expanded="false" aria-controls="example3">
        Приклад 3
      </button>
      <div class="collapse" id="example3">
        <p class="mt-2" style="color: #155724;">I was cooking dinner when the phone rang. (Я готував вечерю, коли задзвонив телефон.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example4" aria-expanded="false" aria-controls="example4">
        Приклад 4
      </button>
      <div class="collapse" id="example4">
        <p class="mt-2" style="color: #155724;">We were talking about the movie when it started raining. (Ми говорили про фільм, коли почався дощ.)</p>
      </div>
    </div>
  </div>
</div>`}function returnLevel33(){return`<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Правила с глаголами (Добавление окончаний)</h3>
      <div class="accordion" id="verbExamplesAccordion">
        <!-- 1st Rule -->
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Правило 1: Добавление окончания "s"
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Для глаголов, заканчивающихся на согласный, добавляется окончание <strong>s</strong> для третьего лица в настоящем времени.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleOne" aria-expanded="false" aria-controls="exampleOne">Пример</button>
              <div id="exampleOne" class="collapse">
                <p>He <strong>works</strong> every day. (Он работает каждый день.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2nd Rule -->
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Правило 2: Добавление окончания "es"
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Глаголы, заканчивающиеся на -ch, -sh, -x, -o, -ss, получают окончание <strong>es</strong> в третьем лице.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleTwo" aria-expanded="false" aria-controls="exampleTwo">Пример</button>
              <div id="exampleTwo" class="collapse">
                <p>She <strong>fixes</strong> the problem. (Она решает проблему.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3rd Rule -->
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Правило 3: Глаголы с -y
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Для глаголов, заканчивающихся на -y, убирается "y" и добавляется окончание <strong>ies</strong>.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleThree" aria-expanded="false" aria-controls="exampleThree">Пример</button>
              <div id="exampleThree" class="collapse">
                <p>He <strong>carries</strong> the box. (Он несет коробку.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4th Rule -->
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Правило 4: Глаголы, заканчивающиеся на гласную + "y"
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Если глагол заканчивается на гласную + "y", то в третьем лице просто добавляется <strong>s</strong>.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFour" aria-expanded="false" aria-controls="exampleFour">Пример</button>
              <div id="exampleFour" class="collapse">
                <p>She <strong>plays</strong> the piano. (Она играет на пианино.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 5th Rule -->
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Правило 5: Глаголы с необычным изменением
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Некоторые глаголы имеют нестандартные формы для третьего лица, например, "have" становится "has".</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFive" aria-expanded="false" aria-controls="exampleFive">Пример</button>
              <div id="exampleFive" class="collapse">
                <p>She <strong>has</strong> a new car. (У неё есть новая машина.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel33EN(){return`<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Rules for Verbs (Adding Endings)</h3>
      <div class="accordion" id="verbExamplesAccordion">
        <!-- 1st Rule -->
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Rule 1: Adding the "s" Ending
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>For verbs ending in a consonant, add the <strong>s</strong> ending for the third person singular in the present tense.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleOne" aria-expanded="false" aria-controls="exampleOne">Example</button>
              <div id="exampleOne" class="collapse">
                <p>He <strong>works</strong> every day.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2nd Rule -->
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Rule 2: Adding the "es" Ending
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>For verbs ending in -ch, -sh, -x, -o, or -ss, add the <strong>es</strong> ending for the third person singular.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleTwo" aria-expanded="false" aria-controls="exampleTwo">Example</button>
              <div id="exampleTwo" class="collapse">
                <p>She <strong>fixes</strong> the problem.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3rd Rule -->
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Rule 3: Verbs Ending in -y
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>For verbs ending in -y, remove the "y" and add the <strong>ies</strong> ending for the third person singular.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleThree" aria-expanded="false" aria-controls="exampleThree">Example</button>
              <div id="exampleThree" class="collapse">
                <p>He <strong>carries</strong> the box.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4th Rule -->
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Rule 4: Verbs Ending in Vowel + "y"
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>If the verb ends in a vowel + "y", simply add the <strong>s</strong> ending for the third person singular.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFour" aria-expanded="false" aria-controls="exampleFour">Example</button>
              <div id="exampleFour" class="collapse">
                <p>She <strong>plays</strong> the piano.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 5th Rule -->
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Rule 5: Irregular Verbs
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Some verbs have irregular forms in the third person singular, such as "have" becoming "has".</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFive" aria-expanded="false" aria-controls="exampleFive">Example</button>
              <div id="exampleFive" class="collapse">
                <p>She <strong>has</strong> a new car.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel33PL(){return`<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Zasady dotyczące czasowników (Dodawanie końcówek)</h3>
      <div class="accordion" id="verbExamplesAccordion">
        <!-- 1st Rule -->
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Zasada 1: Dodawanie końcówki "s"
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Dla czasowników kończących się na spółgłoskę dodaje się końcówkę <strong>s</strong> dla trzeciej osoby w czasie teraźniejszym.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleOne" aria-expanded="false" aria-controls="exampleOne">Przykład</button>
              <div id="exampleOne" class="collapse">
                <p>He <strong>works</strong> every day. (On pracuje codziennie.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2nd Rule -->
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Zasada 2: Dodawanie końcówki "es"
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Czasowniki kończące się na -ch, -sh, -x, -o, -ss otrzymują końcówkę <strong>es</strong> w trzeciej osobie.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleTwo" aria-expanded="false" aria-controls="exampleTwo">Przykład</button>
              <div id="exampleTwo" class="collapse">
                <p>She <strong>fixes</strong> the problem. (Ona rozwiązuje problem.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3rd Rule -->
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Zasada 3: Czasowniki kończące się na -y
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Dla czasowników kończących się na -y, usuwa się "y" i dodaje końcówkę <strong>ies</strong>.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleThree" aria-expanded="false" aria-controls="exampleThree">Przykład</button>
              <div id="exampleThree" class="collapse">
                <p>He <strong>carries</strong> the box. (On niesie pudełko.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4th Rule -->
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Zasada 4: Czasowniki kończące się na samogłoskę + "y"
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Jeśli czasownik kończy się na samogłoskę + "y", w trzeciej osobie wystarczy dodać <strong>s</strong>.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFour" aria-expanded="false" aria-controls="exampleFour">Przykład</button>
              <div id="exampleFour" class="collapse">
                <p>She <strong>plays</strong> the piano. (Ona gra na pianinie.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 5th Rule -->
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Zasada 5: Czasowniki nieregularne
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Niektóre czasowniki mają nieregularne formy w trzeciej osobie, na przykład "have" staje się "has".</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFive" aria-expanded="false" aria-controls="exampleFive">Przykład</button>
              <div id="exampleFive" class="collapse">
                <p>She <strong>has</strong> a new car. (Ona ma nowy samochód.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel33UA(){return`<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Правила з дієсловами (Додавання закінчень)</h3>
      <div class="accordion" id="verbExamplesAccordion">
        <!-- 1st Rule -->
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Правило 1: Додавання закінчення "s"
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Для дієслів, що закінчуються на приголосний, додається закінчення <strong>s</strong> для третьої особи в теперішньому часі.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleOne" aria-expanded="false" aria-controls="exampleOne">Приклад</button>
              <div id="exampleOne" class="collapse">
                <p>He <strong>works</strong> every day. (Він працює кожного дня.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2nd Rule -->
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Правило 2: Додавання закінчення "es"
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Дієслова, що закінчуються на -ch, -sh, -x, -o, -ss, отримують закінчення <strong>es</strong> в третій особі.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleTwo" aria-expanded="false" aria-controls="exampleTwo">Приклад</button>
              <div id="exampleTwo" class="collapse">
                <p>She <strong>fixes</strong> the problem. (Вона вирішує проблему.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3rd Rule -->
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Правило 3: Дієслова з -y
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Для дієслів, що закінчуються на -y, прибирається "y" і додається закінчення <strong>ies</strong>.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleThree" aria-expanded="false" aria-controls="exampleThree">Приклад</button>
              <div id="exampleThree" class="collapse">
                <p>He <strong>carries</strong> the box. (Він несе коробку.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4th Rule -->
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Правило 4: Дієслова, що закінчуються на голосну + "y"
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Якщо дієслово закінчується на голосну + "y", то в третій особі просто додається <strong>s</strong>.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFour" aria-expanded="false" aria-controls="exampleFour">Приклад</button>
              <div id="exampleFour" class="collapse">
                <p>She <strong>plays</strong> the piano. (Вона грає на піаніно.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 5th Rule -->
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Правило 5: Дієслова з незвичайною зміною
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Деякі дієслова мають нестандартні форми для третьої особи, наприклад, "have" стає "has".</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFive" aria-expanded="false" aria-controls="exampleFive">Приклад</button>
              <div id="exampleFive" class="collapse">
                <p>She <strong>has</strong> a new car. (В неї є нова машина.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function returnLevel32(){return`<div class="container mt-4">
  <h2 class="text-center mb-4">Past Simple: Негативные предложения и вопросы</h2>
  <div class="row">
    <div class="col-12">
      <p><strong>Зачем нужно время Past Simple?</strong></p>
      <p>Past Simple используется для описания действий, событий или состояний, которые происходили в прошлом. Это время указывает, что действие завершилось и больше не связано с настоящим.</p>
      <ul>
        <li>Для рассказов о прошедших событиях: <strong>I visited Paris last year.</strong></li>
        <li>Для описания привычек в прошлом: <strong>She always walked to school as a child.</strong></li>
        <li>Для упоминания однократных действий в прошлом: <strong>He broke his arm yesterday.</strong></li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Как формируются негативные предложения?</strong></p>
      <p>Чтобы сделать отрицание в Past Simple, используйте вспомогательный глагол <code>did</code> + <code>not</code> (<code>didn't</code>) перед основной формой глагола. Основной глагол используется в базовой форме (без окончания <code>-ed</code>).</p>
      <p><strong>Формула:</strong></p>
      <pre><code>Subject + did not (didn't) + verb (base form).</code></pre>
      <p>Примеры:</p>
      <ul>
        <li><strong>I didn't eat</strong> breakfast this morning.</li>
        <li><strong>She didn't go</strong> to the party last night.</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Как формируются вопросы?</strong></p>
      <p>Вопросы в Past Simple требуют использования вспомогательного глагола <code>did</code>. Он ставится перед подлежащим, а основной глагол остаётся в базовой форме.</p>
      <p><strong>Формула:</strong></p>
      <pre><code>Did + subject + verb (base form)?</code></pre>
      <p>Примеры:</p>
      <ul>
        <li><strong>Did</strong> you <strong>watch</strong> the movie yesterday?</li>
        <li><strong>Did</strong> they <strong>finish</strong> their homework on time?</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Когда используется отрицание и вопросы?</strong></p>
      <p>Отрицания нужны, чтобы сказать, что что-то не произошло: <strong>He didn't call me.</strong></p>
      <p>Вопросы используются, чтобы узнать, произошло ли событие или действие: <strong>Did she call you?</strong></p>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Особенности:</strong></p>
      <ul>
        <li>В отрицаниях и вопросах основной глагол всегда остаётся в базовой форме (не добавляется <code>-ed</code> или другая форма прошедшего времени).</li>
        <li>Слова-временные указатели, такие как <strong>yesterday</strong>, <strong>last week</strong>, <strong>two years ago</strong>, помогают понять, что речь идёт о прошлом.</li>
      </ul>
      <p><strong>Пример:</strong></p>
      <ul>
        <li><strong>Утверждение:</strong> She arrived late.</li>
        <li><strong>Отрицание:</strong> She didn’t arrive late.</li>
        <li><strong>Вопрос:</strong> Did she arrive late?</li>
      </ul>
    </div>
  </div>
</div>
`}function returnLevel32EN(){return`<div class="container mt-4">
  <h2 class="text-center mb-4">Past Simple: Negative Sentences and Questions</h2>
  <div class="row">
    <div class="col-12">
      <p><strong>Why is Past Simple used?</strong></p>
      <p>Past Simple is used to describe actions, events, or states that happened in the past. This tense indicates that the action is complete and has no connection with the present.</p>
      <ul>
        <li>For telling about past events: <strong>I visited Paris last year.</strong></li>
        <li>For describing habits in the past: <strong>She always walked to school as a child.</strong></li>
        <li>For mentioning one-time actions in the past: <strong>He broke his arm yesterday.</strong></li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>How to form negative sentences?</strong></p>
      <p>To make a sentence negative in Past Simple, use the auxiliary verb <code>did</code> + <code>not</code> (<code>didn't</code>) before the base form of the main verb. The main verb is used in its base form (without the <code>-ed</code> ending).</p>
      <p><strong>Formula:</strong></p>
      <pre><code>Subject + did not (didn't) + verb (base form).</code></pre>
      <p>Examples:</p>
      <ul>
        <li><strong>I didn't eat</strong> breakfast this morning.</li>
        <li><strong>She didn't go</strong> to the party last night.</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>How to form questions?</strong></p>
      <p>To make a question in Past Simple, use the auxiliary verb <code>did</code>. It is placed before the subject, and the main verb stays in its base form.</p>
      <p><strong>Formula:</strong></p>
      <pre><code>Did + subject + verb (base form)?</code></pre>
      <p>Examples:</p>
      <ul>
        <li><strong>Did</strong> you <strong>watch</strong> the movie yesterday?</li>
        <li><strong>Did</strong> they <strong>finish</strong> their homework on time?</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>When are negative sentences and questions used?</strong></p>
      <p>Negative sentences are used to say that something did not happen: <strong>He didn't call me.</strong></p>
      <p>Questions are used to ask whether an action or event happened: <strong>Did she call you?</strong></p>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Special Notes:</strong></p>
      <ul>
        <li>In negatives and questions, the main verb always remains in its base form (we don't add <code>-ed</code> or any other past tense form).</li>
        <li>Time indicators such as <strong>yesterday</strong>, <strong>last week</strong>, <strong>two years ago</strong> help to indicate that the event occurred in the past.</li>
      </ul>
      <p><strong>Example:</strong></p>
      <ul>
        <li><strong>Statement:</strong> She arrived late.</li>
        <li><strong>Negative:</strong> She didn’t arrive late.</li>
        <li><strong>Question:</strong> Did she arrive late?</li>
      </ul>
    </div>
  </div>
</div>
`}function returnLevel32PL(){return`<div class="container mt-4">
  <h2 class="text-center mb-4">Past Simple: Negatywne zdania i pytania</h2>
  <div class="row">
    <div class="col-12">
      <p><strong>Po co potrzebny jest czas Past Simple?</strong></p>
      <p>Past Simple jest używane do opisywania działań, wydarzeń lub stanów, które miały miejsce w przeszłości. Czas ten wskazuje, że akcja została zakończona i nie ma już związku z teraźniejszością.</p>
      <ul>
        <li>Do opisywania wydarzeń z przeszłości: <strong>I visited Paris last year.</strong></li>
        <li>Do opisywania przyzwyczajeń w przeszłości: <strong>She always walked to school as a child.</strong></li>
        <li>Do wspomnienia o jednorazowych działaniach w przeszłości: <strong>He broke his arm yesterday.</strong></li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Jak tworzyć zdania negatywne?</strong></p>
      <p>Aby stworzyć zdanie negatywne w Past Simple, używamy czasownika pomocniczego <code>did</code> + <code>not</code> (<code>didn't</code>) przed podstawową formą czasownika. Czasownik główny używamy w formie podstawowej (bez końcówki <code>-ed</code>).</p>
      <p><strong>Wzór:</strong></p>
      <pre><code>Subject + did not (didn't) + verb (base form).</code></pre>
      <p>Przykłady:</p>
      <ul>
        <li><strong>I didn't eat</strong> breakfast this morning.</li>
        <li><strong>She didn't go</strong> to the party last night.</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Jak tworzyć pytania?</strong></p>
      <p>Aby utworzyć pytanie w Past Simple, należy użyć czasownika pomocniczego <code>did</code>. Stawiamy go przed podmiotem, a czasownik główny pozostaje w podstawowej formie.</p>
      <p><strong>Wzór:</strong></p>
      <pre><code>Did + subject + verb (base form)?</code></pre>
      <p>Przykłady:</p>
      <ul>
        <li><strong>Did</strong> you <strong>watch</strong> the movie yesterday?</li>
        <li><strong>Did</strong> they <strong>finish</strong> their homework on time?</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Kiedy używać negacji i pytań?</strong></p>
      <p>Negacje są używane, aby powiedzieć, że coś się nie wydarzyło: <strong>He didn't call me.</strong></p>
      <p>Pytania są używane, aby dowiedzieć się, czy wydarzyła się jakaś akcja lub zdarzenie: <strong>Did she call you?</strong></p>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Specjalności:</strong></p>
      <ul>
        <li>W negacjach i pytaniach czasownik główny zawsze pozostaje w podstawowej formie (nie dodajemy <code>-ed</code> ani żadnej innej formy czasu przeszłego).</li>
        <li>Słowa wskazujące czas, takie jak <strong>yesterday</strong>, <strong>last week</strong>, <strong>two years ago</strong>, pomagają zrozumieć, że chodzi o przeszłość.</li>
      </ul>
      <p><strong>Przykład:</strong></p>
      <ul>
        <li><strong>Twierdzenie:</strong> She arrived late.</li>
        <li><strong>Negacja:</strong> She didn’t arrive late.</li>
        <li><strong>Pytanie:</strong> Did she arrive late?</li>
      </ul>
    </div>
  </div>
</div>
`}function returnLevel32UA(){return`<div class="container mt-4">
  <h2 class="text-center mb-4">Past Simple: Негативні речення та питання</h2>
  <div class="row">
    <div class="col-12">
      <p><strong>Для чого потрібен час Past Simple?</strong></p>
      <p>Past Simple використовується для опису дій, подій або станів, які відбулися в минулому. Цей час вказує на те, що дія завершена і більше не пов'язана з теперішнім.</p>
      <ul>
        <li>Для розповідей про події минулого: <strong>I visited Paris last year.</strong></li>
        <li>Для опису звичок у минулому: <strong>She always walked to school as a child.</strong></li>
        <li>Для згадок одноразових дій у минулому: <strong>He broke his arm yesterday.</strong></li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Як утворюються негативні речення?</strong></p>
      <p>Щоб зробити заперечення в Past Simple, використовуйте допоміжний дієслово <code>did</code> + <code>not</code> (<code>didn't</code>) перед основною формою дієслова. Основне дієслово використовується в базовій формі (без закінчення <code>-ed</code>).</p>
      <p><strong>Формула:</strong></p>
      <pre><code>Subject + did not (didn't) + verb (base form).</code></pre>
      <p>Приклади:</p>
      <ul>
        <li><strong>I didn't eat</strong> breakfast this morning.</li>
        <li><strong>She didn't go</strong> to the party last night.</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Як утворюються питання?</strong></p>
      <p>Питання в Past Simple вимагають використання допоміжного дієслова <code>did</code>. Воно ставиться перед підметом, а основне дієслово залишається в базовій формі.</p>
      <p><strong>Формула:</strong></p>
      <pre><code>Did + subject + verb (base form)?</code></pre>
      <p>Приклади:</p>
      <ul>
        <li><strong>Did</strong> you <strong>watch</strong> the movie yesterday?</li>
        <li><strong>Did</strong> they <strong>finish</strong> their homework on time?</li>
      </ul>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Коли використовується заперечення та питання?</strong></p>
      <p>Заперечення потрібні, щоб сказати, що щось не сталося: <strong>He didn't call me.</strong></p>
      <p>Питання використовуються, щоб дізнатися, чи відбулася подія чи дія: <strong>Did she call you?</strong></p>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-12">
      <p><strong>Особливості:</strong></p>
      <ul>
        <li>В запереченнях і питаннях основне дієслово завжди залишається в базовій формі (не додається <code>-ed</code> або інша форма минулого часу).</li>
        <li>Слова-тимчасові вказівники, такі як <strong>yesterday</strong>, <strong>last week</strong>, <strong>two years ago</strong>, допомагають зрозуміти, що йдеться про минуле.</li>
      </ul>
      <p><strong>Приклад:</strong></p>
      <ul>
        <li><strong>Ствердження:</strong> She arrived late.</li>
        <li><strong>Заперечення:</strong> She didn’t arrive late.</li>
        <li><strong>Питання:</strong> Did she arrive late?</li>
      </ul>
    </div>
  </div>
</div>
`}function returnLevel31(){return`<div class="container" style="margin: 20px;">
    <div class="border border-primary rounded p-4 bg-light">
        <h3 class="text-primary text-center">Правило образования предложений в Past Simple</h3>
        
        <h5 class="text-secondary">1. Утвердительное предложение:</h5>
        <p>Для образования утвердительного предложения в Past Simple используется вторая форма глагола (глагол в прошедшем времени).</p>
        <p class="font-weight-bold">Примеры:</p>
        <ul>
            <li>I <strong>visited</strong> my grandmother last week.</li>
            <li>They <strong>played</strong> soccer yesterday.</li>
        </ul>

        <h5 class="text-secondary">2. Правила для правильных глаголов:</h5>
        <p>Правильные глаголы образуют Past Simple, добавляя окончание <strong>-ed</strong>.</p>
        
        <table class="table table-bordered mt-2">
            <thead>
                <tr class="table-primary">
                    <th>Основная форма</th>
                    <th>Правильный Past Simple</th>
                    <th>Примечание</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>walk</td>
                    <td>walked</td>
                    <td>Добавляется окончание -ed.</td>
                </tr>
                <tr>
                    <td>play</td>
                    <td>played</td>
                    <td>Добавляется окончание -ed.</td>
                </tr>
                <tr>
                    <td>try</td>
                    <td>tried</td>
                    <td>Y меняется на I перед добавлением -ed.</td>
                </tr>
                <tr>
                    <td>stop</td>
                    <td>stopped</td>
                    <td>Удваивается конечная согласная.</td>
                </tr>
                <tr>
                    <td>like</td>
                    <td>liked</td>
                    <td>Добавляется окончание -ed.</td>
                </tr>
            </tbody>
        </table>

        <h5 class="text-secondary">3. Правила для неправильных глаголов:</h5>
        <p>Неправильные глаголы имеют уникальные формы в прошедшем времени, которые нужно запомнить.</p>
        <ul>
            <li>go → <strong>went</strong></li>
            <li>have → <strong>had</strong></li>
            <li>see → <strong>saw</strong></li>
        </ul>
    </div>
</div>
`}function returnLevel31EN(){return`<div class="container" style="margin: 20px;">
    <div class="border border-primary rounded p-4 bg-light">
        <h3 class="text-primary text-center">Rule for Forming Sentences in Past Simple</h3>
        
        <h5 class="text-secondary">1. Positive Sentence:</h5>
        <p>To create a positive sentence in Past Simple, the second form of the verb (the past tense) is used.</p>
        <p class="font-weight-bold">Examples:</p>
        <ul>
            <li>I <strong>visited</strong> my grandmother last week.</li>
            <li>They <strong>played</strong> soccer yesterday.</li>
        </ul>

        <h5 class="text-secondary">2. Rules for Regular Verbs:</h5>
        <p>Regular verbs form the Past Simple by adding the ending <strong>-ed</strong>.</p>
        
        <table class="table table-bordered mt-2">
            <thead>
                <tr class="table-primary">
                    <th>Base Form</th>
                    <th>Regular Past Simple</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>walk</td>
                    <td>walked</td>
                    <td>The ending -ed is added.</td>
                </tr>
                <tr>
                    <td>play</td>
                    <td>played</td>
                    <td>The ending -ed is added.</td>
                </tr>
                <tr>
                    <td>try</td>
                    <td>tried</td>
                    <td>The 'y' changes to 'i' before adding -ed.</td>
                </tr>
                <tr>
                    <td>stop</td>
                    <td>stopped</td>
                    <td>The final consonant is doubled.</td>
                </tr>
                <tr>
                    <td>like</td>
                    <td>liked</td>
                    <td>The ending -ed is added.</td>
                </tr>
            </tbody>
        </table>

        <h5 class="text-secondary">3. Rules for Irregular Verbs:</h5>
        <p>Irregular verbs have unique forms in the past tense that must be memorized.</p>
        <ul>
            <li>go → <strong>went</strong></li>
            <li>have → <strong>had</strong></li>
            <li>see → <strong>saw</strong></li>
        </ul>
    </div>
</div>
`}function returnLevel31PL(){return`<div class="container" style="margin: 20px;">
    <div class="border border-primary rounded p-4 bg-light">
        <h3 class="text-primary text-center">Zasada tworzenia zdań w Past Simple</h3>
        
        <h5 class="text-secondary">1. Zdanie pozytywne:</h5>
        <p>Aby utworzyć zdanie pozytywne w Past Simple, używa się drugiej formy czasownika (czasownik w czasie przeszłym).</p>
        <p class="font-weight-bold">Przykłady:</p>
        <ul>
            <li>I <strong>visited</strong> my grandmother last week.</li>
            <li>They <strong>played</strong> soccer yesterday.</li>
        </ul>

        <h5 class="text-secondary">2. Zasady dla czasowników regularnych:</h5>
        <p>Czasowniki regularne tworzą Past Simple, dodając końcówkę <strong>-ed</strong>.</p>
        
        <table class="table table-bordered mt-2">
            <thead>
                <tr class="table-primary">
                    <th>Forma podstawowa</th>
                    <th>Regularny Past Simple</th>
                    <th>Uwagi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>walk</td>
                    <td>walked</td>
                    <td>Dodaje się końcówkę -ed.</td>
                </tr>
                <tr>
                    <td>play</td>
                    <td>played</td>
                    <td>Dodaje się końcówkę -ed.</td>
                </tr>
                <tr>
                    <td>try</td>
                    <td>tried</td>
                    <td>Y zmienia się na I przed dodaniem -ed.</td>
                </tr>
                <tr>
                    <td>stop</td>
                    <td>stopped</td>
                    <td>Podwaja się ostatnia spółgłoska.</td>
                </tr>
                <tr>
                    <td>like</td>
                    <td>liked</td>
                    <td>Dodaje się końcówkę -ed.</td>
                </tr>
            </tbody>
        </table>

        <h5 class="text-secondary">3. Zasady dla czasowników nieregularnych:</h5>
        <p>Czasowniki nieregularne mają unikalne formy w czasie przeszłym, które należy zapamiętać.</p>
        <ul>
            <li>go → <strong>went</strong></li>
            <li>have → <strong>had</strong></li>
            <li>see → <strong>saw</strong></li>
        </ul>
    </div>
</div>
`}function returnLevel31UA(){return`<div class="container" style="margin: 20px;">
    <div class="border border-primary rounded p-4 bg-light">
        <h3 class="text-primary text-center">Правило утворення речень у Past Simple</h3>
        
        <h5 class="text-secondary">1. Позитивне речення:</h5>
        <p>Для утворення позитивного речення в Past Simple використовується друга форма дієслова (дієслово в минулому часі).</p>
        <p class="font-weight-bold">Приклади:</p>
        <ul>
            <li>I <strong>visited</strong> my grandmother last week.</li>
            <li>They <strong>played</strong> soccer yesterday.</li>
        </ul>

        <h5 class="text-secondary">2. Правила для правильних дієслів:</h5>
        <p>Правильні дієслова утворюють Past Simple, додаючи закінчення <strong>-ed</strong>.</p>
        
        <table class="table table-bordered mt-2">
            <thead>
                <tr class="table-primary">
                    <th>Основна форма</th>
                    <th>Правильний Past Simple</th>
                    <th>Примітка</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>walk</td>
                    <td>walked</td>
                    <td>Додається закінчення -ed.</td>
                </tr>
                <tr>
                    <td>play</td>
                    <td>played</td>
                    <td>Додається закінчення -ed.</td>
                </tr>
                <tr>
                    <td>try</td>
                    <td>tried</td>
                    <td>Y змінюється на I перед додаванням -ed.</td>
                </tr>
                <tr>
                    <td>stop</td>
                    <td>stopped</td>
                    <td>Подвоюється кінцева приголосна.</td>
                </tr>
                <tr>
                    <td>like</td>
                    <td>liked</td>
                    <td>Додається закінчення -ed.</td>
                </tr>
            </tbody>
        </table>

        <h5 class="text-secondary">3. Правила для неправильних дієслів:</h5>
        <p>Неправильні дієслова мають унікальні форми в минулому часі, які потрібно запам'ятати.</p>
        <ul>
            <li>go → <strong>went</strong></li>
            <li>have → <strong>had</strong></li>
            <li>see → <strong>saw</strong></li>
        </ul>
    </div>
</div>
`}function returnLevel23(){return`<div class="container" style="margin-top: 20px;">
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
`}function returnLevel23EN(){return`<div class="container" style="margin-top: 20px;">
    <h1 style="text-align: center; color: #333;">Reference for the verbs "was" and "were"</h1>

    <h2 style="color: #444; margin-top: 20px;">1. Rules of Usage</h2>
    <p><strong>"Was"</strong> is used with the pronouns <strong>I, he, she, it</strong> (singular).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Example: <em>I was at home.</em>
    </p>
    <p><strong>"Were"</strong> is used with the pronouns <strong>you, we, they</strong> (plural).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Example: <em>They were happy.</em>
    </p>

    <h2 style="color: #444; margin-top: 20px;">2. Forming Sentences</h2>
    
    <h3 style="color: #555; font-weight: bold;">Positive Statements</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I was tired after work.
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They were in the park yesterday.
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Negative Statements</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I wasn’t tired after work.
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They weren’t in the park yesterday.
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Questions</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Was she at school?
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Were you at the party last night?
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Negative Questions</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Wasn’t he at work yesterday?
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Weren’t they ready for the trip?
        </li>
    </ul>
</div>
`}function returnLevel23PL(){return`<div class="container" style="margin-top: 20px;">
    <h1 style="text-align: center; color: #333;">Informacje o czasownikach "was" i "were"</h1>

    <h2 style="color: #444; margin-top: 20px;">1. Zasady użycia</h2>
    <p><strong>"Was"</strong> używa się z zaimkami <strong>I, he, she, it</strong> (liczba pojedyncza).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Przykład: <em>I was at home.</em> (Byłem w domu)
    </p>
    <p><strong>"Were"</strong> używa się z zaimkami <strong>you, we, they</strong> (liczba mnoga).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Przykład: <em>They were happy.</em> (Oni byli szczęśliwi)
    </p>

    <h2 style="color: #444; margin-top: 20px;">2. Tworzenie zdań</h2>
    
    <h3 style="color: #555; font-weight: bold;">Pozytywne stwierdzenia (Statements)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I was tired after work. (Byłem zmęczony po pracy)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They were in the park yesterday. (Oni byli w parku wczoraj)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Przeczące stwierdzenia (Negative Statements)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I wasn’t tired after work. (Nie byłem zmęczony po pracy)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They weren’t in the park yesterday. (Oni nie byli w parku wczoraj)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Pytania (Questions)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Was she at school? (Czy ona była w szkole?)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Were you at the party last night? (Czy byłeś na imprezie wczoraj?)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Przeczące pytania (Negative Questions)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Wasn’t he at work yesterday? (Czy on nie był w pracy wczoraj?)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Weren’t they ready for the trip? (Czy oni nie byli gotowi do podróży?)
        </li>
    </ul>
</div>
`}function returnLevel23UA(){return`<div class="container" style="margin-top: 20px;">
    <h1 style="text-align: center; color: #333;">Довідка по дієсловам "was" і "were"</h1>

    <h2 style="color: #444; margin-top: 20px;">1. Правила використання</h2>
    <p><strong>"Was"</strong> використовується з займенниками <strong>I, he, she, it</strong> (однина).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Приклад: <em>I was at home.</em> (Я був вдома)
    </p>
    <p><strong>"Were"</strong> використовується з займенниками <strong>you, we, they</strong> (множина).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Приклад: <em>They were happy.</em> (Вони були щасливі)
    </p>

    <h2 style="color: #444; margin-top: 20px;">2. Утворення речень</h2>
    
    <h3 style="color: #555; font-weight: bold;">Позитивні твердження (Statements)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I was tired after work. (Я був втомленим після роботи)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They were in the park yesterday. (Вони були в парку вчора)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Заперечні твердження (Negative Statements)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I wasn’t tired after work. (Я не був втомленим після роботи)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They weren’t in the park yesterday. (Вони не були в парку вчора)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Питальні речення (Questions)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Was she at school? (Вона була в школі?)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Were you at the party last night? (Ти був на вечірці вчора?)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Заперечні питальні речення (Negative Questions)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Wasn’t he at work yesterday? (Хіба він не був на роботі вчора?)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Weren’t they ready for the trip? (Хіба вони не були готові до поїздки?)
        </li>
    </ul>
</div>
`}function returnLevel21(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
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
`}function returnLevel21EN(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Using the Verbs "have" and "have got"</h2>
    <p style="line-height: 1.6; color: #555;">
        The verbs "have" and "have got" are used to express possession, but they may differ in formal and informal contexts. Below are the rules for their use.
    </p>
    <h3 style="color: #333;">1. Statements</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I have a car.<br>
        - **Have got**: I have got a car.
    </p>
    <h3 style="color: #333;">2. Negative Statements</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I do not have a car.<br>
        - **Have got**: I have not got a car.
    </p>
    <h3 style="color: #333;">3. Questions</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: Do you have a car?<br>
        - **Have got**: Have you got a car?
    </p>
    <h3 style="color: #333;">Short Form "have got"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Pronoun</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Short Form "have got"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Short Form "has got"</th>
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
    <h3 style="color: #333;">Short Form "have"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Pronoun</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Short Form "have"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Short Form "has"</th>
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
`}function returnLevel21PL(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Użycie czasowników "have" i "have got"</h2>
    <p style="line-height: 1.6; color: #555;">
        Czasowniki "have" i "have got" są używane do wyrażania posiadania, ale mogą różnić się w formalnym i nieformalnym użyciu. Poniżej przedstawione są zasady ich użycia.
    </p>
    <h3 style="color: #333;">1. Zdania pozytywne</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I have a car.<br>
        - **Have got**: I have got a car.
    </p>
    <h3 style="color: #333;">2. Zdania negatywne</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I do not have a car.<br>
        - **Have got**: I have not got a car.
    </p>
    <h3 style="color: #333;">Pytania</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: Do you have a car?<br>
        - **Have got**: Have you got a car?
    </p>
    <h3 style="color: #333;">Skrócona forma "have got"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Zaimek</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Skrócona forma "have got"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Skrócona forma "has got"</th>
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
    <h3 style="color: #333;">Skrócona forma "have"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Zaimek</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Skrócona forma "have"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Skrócona forma "has"</th>
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
`}function returnLevel21UA(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Використання дієслів "have" та "have got"</h2>
    <p style="line-height: 1.6; color: #555;">
        Дієслова "have" та "have got" використовуються для вираження володіння, але можуть відрізнятися в формальному та неформальному використанні. Нижче наведені правила їх використання.
    </p>
    <h3 style="color: #333;">1. Утвердження</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I have a car.<br>
        - **Have got**: I have got a car.
    </p>
    <h3 style="color: #333;">2. Негативні утвердження</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I do not have a car.<br>
        - **Have got**: I have not got a car.
    </p>
    <h3 style="color: #333;">3. Запитання</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: Do you have a car?<br>
        - **Have got**: Have you got a car?
    </p>
    <h3 style="color: #333;">Коротка форма "have got"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Займенник</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Коротка форма "have got"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Коротка форма "has got"</th>
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
    <h3 style="color: #333;">Коротка форма "have"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Займенник</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Коротка форма "have"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Коротка форма "has"</th>
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
`}function returnLevel19(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
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
`}function returnLevel19EN(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Present Simple vs. Present Continuous</h2>
    
    <h3 style="color: #444;">Present Simple</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Definition:</strong> The Present Simple tense describes habits, general truths, or facts that are always true. It indicates actions that occur regularly or are permanent.
    </p>
    
    <h4 style="color: #444;">When to Use:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>To express routines or habits.</li>
        <li>To indicate facts or truths.</li>
        <li>To express permanent situations.</li>
    </ul>
    
    <h4 style="color: #444;">Formation:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Affirmative Sentences:</strong> <br>
        Example: "He plays football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Negative Sentences:</strong> <br>
        Example: "He does not play football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Questions:</strong> <br>
        Example: "Does he play football?"
    </p>
    
    <h3 style="color: #444;">Present Continuous</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Definition:</strong> The Present Continuous tense describes actions happening at the moment or temporary situations.
    </p>
    
    <h4 style="color: #444;">When to Use:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>To express actions taking place right now.</li>
        <li>To indicate temporary situations.</li>
        <li>To describe future plans.</li>
    </ul>
    
    <h4 style="color: #444;">Formation:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Affirmative Sentences:</strong> <br>
        Example: "He is playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Negative Sentences:</strong> <br>
        Example: "He is not playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Questions:</strong> <br>
        Example: "Is he playing football?"
    </p>
    
    <h3 style="color: #444;">Key Differences</h3>
    <ul style="line-height: 1.6; color: #555;">
        <li><strong>Time Frame:</strong>
            <ul>
                <li>Present Simple refers to habits and general truths.</li>
                <li>Present Continuous refers to actions occurring at the moment or temporary situations.</li>
            </ul>
        </li>
        <li><strong>Form:</strong>
            <ul>
                <li>Present Simple uses the base form of the verb, while Present Continuous uses the auxiliary verb "to be" combined with the main verb in the -ing form.</li>
            </ul>
        </li>
        <li><strong>Usage:</strong>
            <ul>
                <li>Present Simple is used to describe routines and facts.</li>
                <li>Present Continuous is used for current actions and future plans.</li>
            </ul>
        </li>
    </ul>
    
    <h3 style="color: #444;">Comparison Table</h3>
    <table class="table table-bordered" style="width: 100%; border: 1px solid #ddd;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="text-align: left;">Aspect</th>
                <th style="text-align: left;">Present Simple</th>
                <th style="text-align: left;">Present Continuous</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Definition</td>
                <td>Regular actions, facts</td>
                <td>Actions happening now or temporarily</td>
            </tr>
            <tr>
                <td>Usage Situations</td>
                <td>Routines, facts, permanent situations</td>
                <td>Current actions, future plans</td>
            </tr>
            <tr>
                <td>Affirmative Form</td>
                <td>Example: "He plays football."</td>
                <td>Example: "He is playing football."</td>
            </tr>
            <tr>
                <td>Negative Form</td>
                <td>Example: "He does not play football."</td>
                <td>Example: "He is not playing football."</td>
            </tr>
            <tr>
                <td>Question</td>
                <td>Example: "Does he play football?"</td>
                <td>Example: "Is he playing football?"</td>
            </tr>
        </tbody>
    </table>
    
    <p style="line-height: 1.6; color: #555;">
        These differences will help understand the contexts in which to use each tense correctly, both in speaking and writing.
    </p>
</div>
`}function returnLevel19PL(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Czas Present Simple vs. Present Continuous</h2>
    
    <h3 style="color: #444;">Present Simple</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Definicja:</strong> Czas Present Simple opisuje zwyczaje, ogólne prawdy lub fakty, które są zawsze prawdziwe. Wskazuje na działania, które odbywają się regularnie lub są stałe.
    </p>
    
    <h4 style="color: #444;">Kiedy używać:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>Aby wyrazić rutyny lub nawyki.</li>
        <li>Aby wskazać fakty lub prawdy.</li>
        <li>Aby wyrazić stałe sytuacje.</li>
    </ul>
    
    <h4 style="color: #444;">Tworzenie:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Zdania twierdzące:</strong> <br>
        Przykład: "He plays football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Zdania przeczące:</strong> <br>
        Przykład: "He does not play football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Pytania:</strong> <br>
        Przykład: "Does he play football?"
    </p>
    
    <h3 style="color: #444;">Present Continuous</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Definicja:</strong> Czas Present Continuous opisuje działania, które mają miejsce w danym momencie lub sytuacje tymczasowe.
    </p>
    
    <h4 style="color: #444;">Kiedy używać:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>Aby wyrazić działania, które odbywają się właśnie teraz.</li>
        <li>Aby wskazać tymczasowe sytuacje.</li>
        <li>Aby opisać plany na przyszłość.</li>
    </ul>
    
    <h4 style="color: #444;">Tworzenie:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Zdania twierdzące:</strong> <br>
        Przykład: "He is playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Zdania przeczące:</strong> <br>
        Przykład: "He is not playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Pytania:</strong> <br>
        Przykład: "Is he playing football?"
    </p>
    
    <h3 style="color: #444;">Kluczowe różnice</h3>
    <ul style="line-height: 1.6; color: #555;">
        <li><strong>Ramki czasowe:</strong>
            <ul>
                <li>Present Simple dotyczy zwyczajów i ogólnych prawd.</li>
                <li>Present Continuous dotyczy działań, które odbywają się w danym momencie lub sytuacji tymczasowych.</li>
            </ul>
        </li>
        <li><strong>Forma:</strong>
            <ul>
                <li>Present Simple używa podstawowej formy czasownika, podczas gdy Present Continuous używa czasownika pomocniczego "to be" w połączeniu z czasownikiem głównym w formie -ing.</li>
            </ul>
        </li>
        <li><strong>Użycie:</strong>
            <ul>
                <li>Present Simple jest używane do opisywania rutyn i faktów.</li>
                <li>Present Continuous jest używane do bieżących działań i planów na przyszłość.</li>
            </ul>
        </li>
    </ul>
    
    <h3 style="color: #444;">Tabela porównawcza</h3>
    <table class="table table-bordered" style="width: 100%; border: 1px solid #ddd;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="text-align: left;">Aspekt</th>
                <th style="text-align: left;">Present Simple</th>
                <th style="text-align: left;">Present Continuous</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Definicja</td>
                <td>Zwykłe działania, fakty</td>
                <td>Działania, które odbywają się teraz lub tymczasowo</td>
            </tr>
            <tr>
                <td>Sytuacje użycia</td>
                <td>Rutyny, fakty, stałe sytuacje</td>
                <td>Aktualne działania, plany na przyszłość</td>
            </tr>
            <tr>
                <td>Forma twierdząca</td>
                <td>Przykład: "He plays football."</td>
                <td>Przykład: "He is playing football."</td>
            </tr>
            <tr>
                <td>Forma przecząca</td>
                <td>Przykład: "He does not play football."</td>
                <td>Przykład: "He is not playing football."</td>
            </tr>
            <tr>
                <td>Pytanie</td>
                <td>Przykład: "Does he play football?"</td>
                <td>Przykład: "Is he playing football?"</td>
            </tr>
        </tbody>
    </table>
    
    <p style="line-height: 1.6; color: #555;">
        Te różnice pomogą zrozumieć, w jakich kontekstach poprawnie używać każdego czasu zarówno w mowie, jak i piśmie.
    </p>
</div>
`}function returnLevel19UA(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Просте теперішнє vs. Теперішнє тривале</h2>
    
    <h3 style="color: #444;">Просте теперішнє</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Визначення:</strong> Теперішній простий час описує звичні дії, загальні істини або факти, які завжди вірні. Він вказує на дії, які відбуваються регулярно або є постійними.
    </p>
    
    <h4 style="color: #444;">Коли використовувати:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>Для вираження рутини або звичок.</li>
        <li>Для вказівки фактів або істин.</li>
        <li>Для вираження постійних ситуацій.</li>
    </ul>
    
    <h4 style="color: #444;">Утворення:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Стверджувальні речення:</strong> <br>
        Приклад: "He plays football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Заперечні речення:</strong> <br>
        Приклад: "He does not play football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Питання:</strong> <br>
        Приклад: "Does he play football?"
    </p>
    
    <h3 style="color: #444;">Теперішнє тривале</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Визначення:</strong> Теперішній тривалий час описує дії, які відбуваються в даний момент часу або тимчасові ситуації.
    </p>
    
    <h4 style="color: #444;">Коли використовувати:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>Для вираження дій, що відбуваються прямо зараз.</li>
        <li>Для вказівки тимчасових ситуацій.</li>
        <li>Для опису майбутніх планів.</li>
    </ul>
    
    <h4 style="color: #444;">Утворення:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Стверджувальні речення:</strong> <br>
        Приклад: "He is playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Заперечні речення:</strong> <br>
        Приклад: "He is not playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Питання:</strong> <br>
        Приклад: "Is he playing football?"
    </p>
    
    <h3 style="color: #444;">Ключові відмінності</h3>
    <ul style="line-height: 1.6; color: #555;">
        <li><strong>Часові рамки:</strong>
            <ul>
                <li>Просте теперішнє стосується звичних дій і загальних істин.</li>
                <li>Теперішнє тривале стосується дій, що відбуваються в даний момент, або тимчасових ситуацій.</li>
            </ul>
        </li>
        <li><strong>Форма:</strong>
            <ul>
                <li>Просте теперішнє використовує основну форму дієслова, тоді як теперішнє тривале використовує допоміжне дієслово "to be" у поєднанні з основним дієсловом у формі -ing.</li>
            </ul>
        </li>
        <li><strong>Використання:</strong>
            <ul>
                <li>Просте теперішнє використовується для опису рутин і фактів.</li>
                <li>Теперішнє тривале використовується для ongoing actions і майбутніх планів.</li>
            </ul>
        </li>
    </ul>
    
    <h3 style="color: #444;">Таблиця порівняння</h3>
    <table class="table table-bordered" style="width: 100%; border: 1px solid #ddd;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="text-align: left;">Аспект</th>
                <th style="text-align: left;">Просте теперішнє</th>
                <th style="text-align: left;">Теперішнє тривале</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Визначення</td>
                <td>Регулярні дії, факти</td>
                <td>Дії, що відбуваються зараз або тимчасово</td>
            </tr>
            <tr>
                <td>Ситуації використання</td>
                <td>Звички, факти, постійні ситуації</td>
                <td>Поточні дії, майбутні плани</td>
            </tr>
            <tr>
                <td>Стверджувальна форма</td>
                <td>Приклад: "He plays football."</td>
                <td>Приклад: "He is playing football."</td>
            </tr>
            <tr>
                <td>Заперечна форма</td>
                <td>Приклад: "He does not play football."</td>
                <td>Приклад: "He is not playing football."</td>
            </tr>
            <tr>
                <td>Питання</td>
                <td>Приклад: "Does he play football?"</td>
                <td>Приклад: "Is he playing football?"</td>
            </tr>
        </tbody>
    </table>
    
    <p style="line-height: 1.6; color: #555;">
        Ці відмінності допоможуть зрозуміти, в яких контекстах правильно використовувати кожен час як в усній, так і в письмовій мові.
    </p>
</div>
`}function returnLevel18(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
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
`}function returnLevel18EN(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Rules for Forming Questions in the Present Simple Tense</h2>
    
    <h3 style="color: #444;">Question Structure:</h3>
    <p style="line-height: 1.6; color: #555;">
        Questions in the Present Simple tense are formed using the auxiliary verb <strong>"do"</strong> or <strong>"does"</strong>, depending on the subject. The auxiliary verb is placed before the subject in the sentence.
    </p>

    <h4 style="color: #444;">Formula:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>For I, you, we, they:</strong><br>
        Do + subject + main verb?<br>
        For example: <strong>Do you like coffee?</strong>
    </p>

    <p style="line-height: 1.6; color: #555;">
        <strong>For he, she, it:</strong><br>
        Does + subject + main verb?<br>
        For example: <strong>Does she play the piano?</strong>
    </p>

    <h4 style="color: #444;">Important Notes:</h4>
    <p style="line-height: 1.6; color: #555;">
        - <strong>"Do"</strong> is used with <strong>I, you, we, they</strong>.<br>
        - <strong>"Does"</strong> is used with <strong>he, she, it</strong>.<br>
        - Yes/no questions always require inversion: the auxiliary verb (do/does) comes before the subject.<br>
        - For other verbs, auxiliary verbs <strong>do/does</strong> are used; inversion is not applied in sentences with other verbs.
    </p>

    <p style="line-height: 1.6; color: #555;">
        These rules help to correctly formulate questions in the Present Simple tense in various contexts.
    </p>
</div>
`}function returnLevel18PL(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Zasada tworzenia pytań w czasie Present Simple</h2>
    
    <h3 style="color: #444;">Struktura pytań:</h3>
    <p style="line-height: 1.6; color: #555;">
        Pytania w czasie Present Simple tworzy się za pomocą czasownika pomocniczego <strong>"do"</strong> lub <strong>"does"</strong>, w zależności od podmiotu. Czasownik pomocniczy umieszcza się przed podmiotem w zdaniu.
    </p>

    <h4 style="color: #444;">Formuła:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Dla I, you, we, they:</strong><br>
        Do + podmiot + czasownik główny?<br>
        Przykład: <strong>Do you like coffee?</strong> (Czy lubisz kawę?)
    </p>

    <p style="line-height: 1.6; color: #555;">
        <strong>Dla he, she, it:</strong><br>
        Does + podmiot + czasownik główny?<br>
        Przykład: <strong>Does she play the piano?</strong> (Czy ona gra na pianinie?)
    </p>

    <h4 style="color: #444;">Uwagi:</h4>
    <p style="line-height: 1.6; color: #555;">
        - <strong>"Do"</strong> używa się z <strong>I, you, we, they</strong>.<br>
        - <strong>"Does"</strong> używa się z <strong>he, she, it</strong>.<br>
        - Pytania typu "tak/nie" zawsze wymagają inwersji: czasownik pomocniczy (do/does) znajduje się przed podmiotem.<br>
        - Dla innych czasowników używa się czasownika pomocniczego <strong>do/does</strong>; inwersja nie jest stosowana w zdaniach z innymi czasownikami.
    </p>

    <p style="line-height: 1.6; color: #555;">
        Te zasady pomagają poprawnie formułować pytania w czasie Present Simple w różnych kontekstach.
    </p>
</div>
`}function returnLevel18UA(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Правило для утворення запитань у Простому теперішньому часі (Present Simple)</h2>
    
    <h3 style="color: #444;">Структура запитань:</h3>
    <p style="line-height: 1.6; color: #555;">
        Запитання у Простому теперішньому часі формуються за допомогою допоміжного дієслова <strong>"do"</strong> або <strong>"does"</strong> залежно від підлягаючого. Допоміжне дієслово ставиться перед підлягаючим у реченні.
    </p>

    <h4 style="color: #444;">Формула:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Для I, you, we, they:</strong><br>
        Do + підлягаюче + основне дієслово?<br>
        Приклад: <strong>Do you like coffee?</strong> (Ти любиш каву?)
    </p>

    <p style="line-height: 1.6; color: #555;">
        <strong>Для he, she, it:</strong><br>
        Does + підлягаюче + основне дієслово?<br>
        Приклад: <strong>Does she play the piano?</strong> (Вона грає на піаніно?)
    </p>

    <h4 style="color: #444;">Примітки:</h4>
    <p style="line-height: 1.6; color: #555;">
        - <strong>"Do"</strong> використовується з <strong>I, you, we, they</strong>.<br>
        - <strong>"Does"</strong> використовується з <strong>he, she, it</strong>.<br>
        - Запитання типу "так/ні" завжди вимагають інверсії: допоміжне дієслово (do/does) йде перед підлягаючим.<br>
        - Для інших дієслів використовується допоміжне дієслово <strong>do/does</strong>; інверсія не застосовується в реченнях з іншими дієсловами.
    </p>

    <p style="line-height: 1.6; color: #555;">
        Ці правила допомагають правильно формувати запитання в Простому теперішньому часі в різних контекстах.
    </p>
</div>
`}function returnLevel17(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
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
`}function returnLevel17EN(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Present Simple Tense (Negative Form)</h2>
    
    <h4 style="color: #444;">Rule for Formation:</h4>
    <p style="line-height: 1.6; color: #555;">
        To form negative sentences in the Present Simple tense, the auxiliary verb <strong>"do"</strong> or <strong>"does"</strong> is used in conjunction with the particle <strong>"not"</strong> (shortened to <strong>"don't"</strong> or <strong>"doesn't"</strong>).
    </p>

    <h4 style="color: #444;">Structure:</h4>
    <p style="line-height: 1.6; color: #555;">
        1. For subjects <strong>I, you, we, they</strong>: <br>
        <strong>Affirmative Sentence:</strong> I work. <br>
        <strong>Negative Sentence:</strong> I do not work.
    </p>
    <p style="line-height: 1.6; color: #555;">
        2. For subjects <strong>he, she, it</strong>: <br>
        <strong>Affirmative Sentence:</strong> She plays. <br>
        <strong>Negative Sentence:</strong> She does not play.
    </p>

    <h4 style="color: #444;">Usage Situations:</h4>
    <p style="line-height: 1.6; color: #555;">
        The Present Simple tense is used to describe:<br>
        - Regular actions or habits: "I drink coffee every morning."<br>
        - Facts or universally accepted truths: "Water boils at 100 degrees Celsius."<br>
        - Schedules and timetables: "The train leaves at 9 PM."<br>
        - Actions that occur in the present but are not happening at this moment: "He usually works late."
    </p>

    <p style="line-height: 1.6; color: #555;">
        These rules ensure the correct use of the Present Simple tense in various contexts and forms.
    </p>
</div>
`}function returnLevel17PL(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Czas teraźniejszy prosty (Present Simple) w formie negatywnej</h2>
    
    <h4 style="color: #444;">Zasada tworzenia:</h4>
    <p style="line-height: 1.6; color: #555;">
        Aby tworzyć zdania negatywne w czasie teraźniejszym prostym, używa się czasownika pomocniczego <strong>"do"</strong> lub <strong>"does"</strong> w połączeniu z partykułą <strong>"not"</strong> (w skrócie <strong>"don't"</strong> lub <strong>"doesn't"</strong>).
    </p>

    <h4 style="color: #444;">Struktura:</h4>
    <p style="line-height: 1.6; color: #555;">
        1. Dla podmiotów <strong>I, you, we, they</strong>: <br>
        <strong>Zdanie twierdzące:</strong> I work. <br>
        <strong>Zdanie negatywne:</strong> I do not work. (Nie pracuję.)
    </p>
    <p style="line-height: 1.6; color: #555;">
        2. Dla podmiotów <strong>he, she, it</strong>: <br>
        <strong>Zdanie twierdzące:</strong> She plays. <br>
        <strong>Zdanie negatywne:</strong> She does not play. (Ona nie gra.)
    </p>

    <h4 style="color: #444;">Sytuacje użycia:</h4>
    <p style="line-height: 1.6; color: #555;">
        Czas teraźniejszy prosty używa się do opisywania:<br>
        - Regularnych działań lub przyzwyczajeń: "I drink coffee every morning." (Piję kawę każdego ranka.)<br>
        - Faktów lub powszechnie uznawanych prawd: "Water boils at 100 degrees Celsius." (Woda wrze w temperaturze 100 stopni Celsjusza.)<br>
        - Opisania rozkładów i programów: "The train leaves at 9 PM." (Pociąg odjeżdża o 9 wieczorem.)<br>
        - Działań, które zachodzą w czasie teraźniejszym, ale nie w danym momencie: "He usually works late." (Zwykle pracuje do późna.)
    </p>

    <p style="line-height: 1.6; color: #555;">
        Te zasady zapewniają prawidłowe użycie czasu teraźniejszego prostego w różnych kontekstach i formach.
    </p>
</div>
`}function returnLevel17UA(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Просте теперішнє час (Present Simple) у негативній формі</h2>
    
    <h4 style="color: #444;">Правило утворення:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для утворення негативних речень у простому теперішньому часі використовується допоміжне дієслово <strong>"do"</strong> або <strong>"does"</strong> у поєднанні з часткою <strong>"not"</strong> (скорочено <strong>"don't"</strong> або <strong>"doesn't"</strong>).
    </p>

    <h4 style="color: #444;">Структура:</h4>
    <p style="line-height: 1.6; color: #555;">
        1. Для підметів <strong>I, you, we, they</strong>: <br>
        <strong>Ствердження:</strong> I work. <br>
        <strong>Заперечення:</strong> I do not work. (Я не працюю.)
    </p>
    <p style="line-height: 1.6; color: #555;">
        2. Для підметів <strong>he, she, it</strong>: <br>
        <strong>Ствердження:</strong> She plays. <br>
        <strong>Заперечення:</strong> She does not play. (Вона не грає.)
    </p>

    <h4 style="color: #444;">Ситуації використання:</h4>
    <p style="line-height: 1.6; color: #555;">
        Просте теперішнє час використовується для опису:<br>
        - Регулярних дій або звичок: "I drink coffee every morning." (Я п'ю каву щоранку.)<br>
        - Фактів або загальноприйнятих істин: "Water boils at 100 degrees Celsius." (Вода кипить при 100 градусах Цельсія.)<br>
        - Описання розкладів і програм: "The train leaves at 9 PM." (Поїзд відправляється о 9 вечора.)<br>
        - Дій, що відбуваються в теперішньому часі, але не в даний момент: "He usually works late." (Він зазвичай працює до пізна.)
    </p>

    <p style="line-height: 1.6; color: #555;">
        Ці правила забезпечують правильне використання простого теперішнього часу в різних контекстах і формах.
    </p>
</div>
`}function returnLevel16(){return`<div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 20px; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
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
`}function returnLevel16EN(){return`<div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 20px; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="color: #333;">Present Simple with Frequency</h1>

    <h2 style="color: #555;">Definition:</h2>
    <p>
        Present Simple is used to describe habitual actions, facts, and routines. It often includes adverbs of frequency to indicate how often an action takes place.
    </p>

    <h2 style="color: #555;">Key Points:</h2>
    <ul>
        <li><strong>Adverbs of Frequency:</strong> Commonly used adverbs of frequency include:</li>
        <ul>
            <li>Always</li>
            <li>Usually</li>
            <li>Often</li>
            <li>Sometimes</li>
            <li>Rarely</li>
            <li>Never</li>
        </ul>
    </ul>

    <h2 style="color: #555;">Formation:</h2>
    <h3>1. Affirmative Sentences:</h3>
    <p>
        Use the base form of the verb. For example:
        <br>I always eat breakfast.
        <br>She usually goes for a walk.
    </p>

    <h3>2. Negative Sentences:</h3>
    <p>
        Use the auxiliary verb do/does + not + base verb. For example:
        <br>I do not eat breakfast.
        <br>He does not go for a walk.
    </p>

    <h3>3. Questions:</h3>
    <p>
        Form questions by placing do/does before the subject:
        <br>Do you always eat breakfast?
        <br>Does she usually go for a walk?
    </p>

    <h2 style="color: #555;">Usage:</h2>
    <p>
        When using adverbs of frequency, they typically appear before the main verb but after the verb "to be." For example:
        <br>I always play football.
        <br>He is often late.
    </p>

    <p>
        This structure helps clearly convey the frequency of actions in the present simple tense.
    </p>
</div>
`}function returnLevel16PL(){return`<div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 20px; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="color: #333;">Prosty Czas Teraźniejszy z Częstotliwością</h1>

    <h2 style="color: #555;">Definicja:</h2>
    <p>
        Prosty czas teraźniejszy (Present Simple) jest używany do opisu zwykłych działań, faktów i rutyny. Często zawiera przysłówki częstotliwości, aby wskazać, jak często dana czynność ma miejsce.
    </p>

    <h2 style="color: #555;">Kluczowe punkty:</h2>
    <ul>
        <li><strong>Przysłówki Częstotliwości:</strong> Najczęściej używane przysłówki częstotliwości:</li>
        <ul>
            <li>Always (zawsze)</li>
            <li>Usually (zazwyczaj)</li>
            <li>Often (często)</li>
            <li>Sometimes (czasami)</li>
            <li>Rarely (rzadko)</li>
            <li>Never (nigdy)</li>
        </ul>
    </ul>

    <h2 style="color: #555;">Tworzenie:</h2>
    <h3>1. Zdania afirmacyjne:</h3>
    <p>
        Użyj podstawowej formy czasownika. Na przykład:
        <br>I always eat breakfast. — Zawsze jem śniadanie.
        <br>She usually goes for a walk. — Ona zazwyczaj idzie na spacer.
    </p>

    <h3>2. Zdania przeczące:</h3>
    <p>
        Użyj czasownika pomocniczego do/does + not + podstawowy czasownik. Na przykład:
        <br>I do not eat breakfast. — Nie jem śniadania.
        <br>He does not go for a walk. — On nie idzie na spacer.
    </p>

    <h3>3. Pytania:</h3>
    <p>
        Uformuj pytania, stawiając do/does przed podmiotem:
        <br>Do you always eat breakfast? — Czy zawsze jesz śniadanie?
        <br>Does she usually go for a walk? — Czy ona zazwyczaj idzie na spacer?
    </p>

    <h2 style="color: #555;">Użycie:</h2>
    <p>
        Gdy używasz przysłówków częstotliwości, zazwyczaj stoją one przed czasownikiem głównym, ale po czasowniku "to be". Na przykład:
        <br>I always play football. — Zawsze gram w piłkę nożną.
        <br>He is often late. — On często się spóźnia.
    </p>

    <p>
        Ta struktura pomaga wyraźnie przekazać częstotliwość działań w prostym czasie teraźniejszym.
    </p>
</div>
`}function returnLevel16UA(){return`<div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 20px; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="color: #333;">Простий Теперішній Час з Періодичністю</h1>

    <h2 style="color: #555;">Визначення:</h2>
    <p>
        Простий теперішній час (Present Simple) використовується для опису звичних дій, фактів і рутини. Він часто включає прислівники частоти, щоб вказати, як часто відбувається дія.
    </p>

    <h2 style="color: #555;">Ключові моменти:</h2>
    <ul>
        <li><strong>Прислівники Частоти:</strong> Найбільш поширені прислівники частоти:</li>
        <ul>
            <li>Always (завжди)</li>
            <li>Usually (зазвичай)</li>
            <li>Often (часто)</li>
            <li>Sometimes (іноді)</li>
            <li>Rarely (рідко)</li>
            <li>Never (ніколи)</li>
        </ul>
    </ul>

    <h2 style="color: #555;">Утворення:</h2>
    <h3>1. Позитивні речення:</h3>
    <p>
        Використовуйте базову форму дієслова. Наприклад:
        <br>I always eat breakfast. — Я завжди снідаю.
        <br>She usually goes for a walk. — Вона зазвичай гуляє.
    </p>

    <h3>2. Заперечні речення:</h3>
    <p>
        Використовуйте допоміжне дієслово do/does + not + базове дієслово. Наприклад:
        <br>I do not eat breakfast. — Я не снідаю.
        <br>He does not go for a walk. — Він не гуляє.
    </p>

    <h3>3. Питання:</h3>
    <p>
        Сформулюйте питання, поставивши do/does перед підметом:
        <br>Do you always eat breakfast? — Ти завжди снідаєш?
        <br>Does she usually go for a walk? — Вона зазвичай гуляє?
    </p>

    <h2 style="color: #555;">Використання:</h2>
    <p>
        Коли ви використовуєте прислівники частоти, вони зазвичай стоять перед основним дієсловом, але після дієслова "to be". Наприклад:
        <br>I always play football. — Я завжди граю у футбол.
        <br>He is often late. — Він часто запізнюється.
    </p>

    <p>
        Ця структура допомагає чітко передати частоту дій у простому теперішньому часі.
    </p>
</div>
`}function returnLevel15(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
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
</div>`}function returnLevel15EN(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Present Simple</h2>
    <p style="line-height: 1.6; color: #555;">
        The Present Simple tense is used to describe regular actions, habits, facts, and states, as well as to express universally known truths.
    </p>
    <p style="line-height: 1.6; color: #555;">
        It applies to actions that occur consistently or periodically.
    </p>

    <h3 style="color: #333;">Formation of Present Simple</h3>

    <h4 style="color: #444;">Affirmative sentences:</h4>
    <p style="line-height: 1.6; color: #555;">
        For affirmative sentences, the base form of the verb is used. For example:
        <br> - I work. (I am describing my habitual action.)
        <br> - She plays. (A regular action, referring to her.)
    </p>

    <h4 style="color: #444;">Negative sentences:</h4>
    <p style="line-height: 1.6; color: #555;">
        In negative sentences, the auxiliary verb "do/does" is used with the particle "not". For example:
        <br> - I do not work. (Expresses a negative action.)
        <br> - He does not play. (Shows that he is not involved in the action.)
    </p>

    <h4 style="color: #444;">Questions:</h4>
    <p style="line-height: 1.6; color: #555;">
        Questions in the Present Simple tense are formed using the auxiliary verb "do/does" before the subject:
        <br> - Do you work? (Asking about a habitual action.)
        <br> - Does she play? (Inquiring about her regular activity.)
    </p>

    <h3 style="color: #333;">Usage rules:</h3>
    <p style="line-height: 1.6; color: #555;">
        - "Do" is used with I, you, we, they.
        <br> - "Does" is used with he, she, it.
    </p>

    <p style="line-height: 1.6; color: #555;">
        These rules ensure correct usage of the Present Simple tense in various contexts.
    </p>
</div>
`}function returnLevel15PL(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Present Simple</h2>
    <p style="line-height: 1.6; color: #555;">
        Czas teraźniejszy prosty (Present Simple) jest używany do opisywania regularnych czynności, nawyków, faktów i stanów, a także do wyrażania powszechnie znanych prawd.
    </p>
    <p style="line-height: 1.6; color: #555;">
        Stosuje się go do wyrażania czynności, która odbywa się stale lub z określoną regularnością.
    </p>

    <h3 style="color: #333;">Tworzenie Present Simple</h3>

    <h4 style="color: #444;">Twierdzenia:</h4>
    <p style="line-height: 1.6; color: #555;">
        Do zdań twierdzących używa się podstawowej formy czasownika. Na przykład:
        <br> - I work. (Pracuję.)
        <br> - She plays. (Ona gra.)
    </p>

    <h4 style="color: #444;">Zdania przeczące:</h4>
    <p style="line-height: 1.6; color: #555;">
        Do zdań przeczących używa się czasownika pomocniczego do/does z partykułą not. Na przykład:
        <br> - I do not work. (Nie pracuję.)
        <br> - He does not play. (On nie gra.)
    </p>

    <h4 style="color: #444;">Pytania:</h4>
    <p style="line-height: 1.6; color: #555;">
        Pytania w Present Simple tworzy się za pomocą czasownika pomocniczego do/does przed podmiotem:
        <br> - Do you work? (Czy pracujesz?)
        <br> - Does she play? (Czy ona gra?)
    </p>

    <h3 style="color: #333;">Zasady użycia:</h3>
    <p style="line-height: 1.6; color: #555;">
        - Do jest używane z I, you, we, they.
        <br> - Does jest używane z he, she, it.
    </p>

    <p style="line-height: 1.6; color: #555;">
        Te zasady zapewniają prawidłowe użycie Present Simple w różnych kontekstach.
    </p>
</div>
`}function returnLevel15UA(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Present Simple</h2>
    <p style="line-height: 1.6; color: #555;">
        Теперішній простий час (Present Simple) використовується для опису регулярних дій, звичок, фактів і станів, а також для вираження загальновідомих істин.
    </p>
    <p style="line-height: 1.6; color: #555;">
        Він застосовується для вираження дії, що відбувається постійно або з певною періодичністю.
    </p>

    <h3 style="color: #333;">Утворення Present Simple</h3>

    <h4 style="color: #444;">Ствердження:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для стверджувальних речень використовується основне значення дієслова. Наприклад:
        <br> - I work. (Я працюю.)
        <br> - She plays. (Вона грає.)
    </p>

    <h4 style="color: #444;">Заперечні речення:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для заперечних речень використовується допоміжне дієслово do/does з часткою not. Наприклад:
        <br> - I do not work. (Я не працюю.)
        <br> - He does not play. (Він не грає.)
    </p>

    <h4 style="color: #444;">Питання:</h4>
    <p style="line-height: 1.6; color: #555;">
        Питання у Present Simple утворюються за допомогою допоміжного дієслова do/does перед підметом:
        <br> - Do you work? (Ти працюєш?)
        <br> - Does she play? (Вона грає?)
    </p>

    <h3 style="color: #333;">Правила використання:</h3>
    <p style="line-height: 1.6; color: #555;">
        - Do використовується з I, you, we, they.
        <br> - Does використовується з he, she, it.
    </p>

    <p style="line-height: 1.6; color: #555;">
        Ці правила забезпечують правильне використання Present Simple в різних контекстах.
    </p>
</div>`}function returnLevel14(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
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
`}function returnLevel14EN(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Definition of Present Continuous Tense</h2>
    <p style="line-height: 1.6; color: #555;">
        The Present Continuous tense is used to describe actions happening at the moment or temporary situations. It is formed using the auxiliary verb "to be" and the main verb with the -ing ending.
    </p>

    <h3 style="color: #333;">Rule for forming questions in Present Continuous</h3>

    <h4 style="color: #444;">Question structure:</h4>
    <p style="line-height: 1.6; color: #555;">
        To form questions in Present Continuous, place the auxiliary verb "to be" (am, is, are) before the subject.
    </p>

    <h4 style="color: #444;">Formula:</h4>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + subject + verb with -ing?
    </p>

    <h4 style="color: #444;">Examples:</h4>
    <p style="line-height: 1.6; color: #555;">
        - Are you studying English? (This structure is for questions where the auxiliary verb precedes the subject.)<br>
        - Is he playing football? (Similar structure with "is" for singular subjects.)<br>
        - Am I making noise? (Used with "I" and "am.")
    </p>

    <h4 style="color: #444;">Key points to note:</h4>
    <p style="line-height: 1.6; color: #555;">
        - "Am" is used only with "I": Am I late? <br>
        - "Is" is used with singular subjects: Is she coming? <br>
        - "Are" is used with plural subjects and with "you": Are they here?
    </p>

    <p style="line-height: 1.6; color: #555;">
        To correctly form questions in Present Continuous, it is important to identify the correct form of "to be" based on the subject and follow the given formula.
    </p>
</div>
`}function returnLevel14PL(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Definicja czasu teraźniejszego ciągłego (Present Continuous)</h2>
    <p style="line-height: 1.6; color: #555;">
        Czas teraźniejszy ciągły jest używany do opisywania działań, które odbywają się w danym momencie, lub do oznaczania sytuacji tymczasowych. Tworzy się go za pomocą czasownika pomocniczego "to be" oraz czasownika głównego z końcówką -ing.
    </p>

    <h3 style="color: #333;">Zasada tworzenia pytań w czasie teraźniejszym ciągłym</h3>

    <h4 style="color: #444;">Struktura pytania:</h4>
    <p style="line-height: 1.6; color: #555;">
        Pytania w czasie teraźniejszym ciągłym tworzy się poprzez umieszczenie czasownika pomocniczego "to be" (am, is, are) przed podmiotem.
    </p>

    <h4 style="color: #444;">Formuła:</h4>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + podmiot + czasownik z końcówką -ing?
    </p>

    <h4 style="color: #444;">Przykłady:</h4>
    <p style="line-height: 1.6; color: #555;">
        - Are you studying English? (Czy uczysz się angielskiego?)<br>
        - Is he playing football? (Czy on gra w piłkę nożną?)<br>
        - Am I making noise? (Czy robię hałas?)
    </p>

    <h4 style="color: #444;">Ważne uwagi:</h4>
    <p style="line-height: 1.6; color: #555;">
        - "Am" jest używane tylko z "I": Am I late? (Czy jestem spóźniony?)<br>
        - "Is" jest używane w liczbie pojedynczej: Is she coming? (Czy ona przychodzi?)<br>
        - "Are" jest używane w liczbie mnogiej oraz z "you": Are they here? (Czy oni są tutaj?)
    </p>

    <p style="line-height: 1.6; color: #555;">
        Aby utworzyć pytania w czasie Present Continuous, należy określić formę czasownika "to be" w zależności od podmiotu i zastosować podaną formułę.
    </p>
</div>
`}function returnLevel14UA(){return`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Визначення теперішнього тривалого часу (Present Continuous)</h2>
    <p style="line-height: 1.6; color: #555;">
        Теперішній тривалий час використовується для опису дій, які відбуваються в даний момент, або для позначення тимчасових ситуацій. Він утворюється за допомогою допоміжного дієслова "to be" та основного дієслова з закінченням -ing.
    </p>

    <h3 style="color: #333;">Правило утворення питань у теперішньому тривалому часі</h3>

    <h4 style="color: #444;">Структура питання:</h4>
    <p style="line-height: 1.6; color: #555;">
        Питання у теперішньому тривалому часі утворюються шляхом винесення допоміжного дієслова "to be" (am, is, are) перед підметом.
    </p>

    <h4 style="color: #444;">Формула:</h4>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + підмет + дієслово з закінченням -ing?
    </p>

    <h4 style="color: #444;">Приклади:</h4>
    <p style="line-height: 1.6; color: #555;">
        - Are you studying English? (Ти вивчаєш англійську?)<br>
        - Is he playing football? (Він грає у футбол?)<br>
        - Am I making noise? (Я створюю шум?)
    </p>

    <h4 style="color: #444;">Важливі зауваження:</h4>
    <p style="line-height: 1.6; color: #555;">
        - "Am" використовується тільки з "I": Am I late? (Я запізнився?)<br>
        - "Is" використовується з одниною: Is she coming? (Вона приходить?)<br>
        - "Are" використовується з множиною та з "you": Are they here? (Вони тут?)
    </p>

    <p style="line-height: 1.6; color: #555;">
        Отже, для утворення питань у Present Continuous потрібно визначити форму дієслова "to be" в залежності від підмета та слідувати вказаній формулі.
    </p>
</div>
`}function helpForProgramRU(){return`
    <div class="modal help-for-program-ru" tabindex="-1" id="infoModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Учим английский</h5>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button id="button-close-info-modal" type="button" class="btn btn-primary">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>    
    `}function helpForProgramPL(){return`
    <div class="modal" tabindex="-1" id="infoModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Ucz się angielskiego</h5>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="button-close-info-modal">
              Zamknąć
            </button>
          </div>
        </div>
      </div>
    </div>    
    `}function helpForProgramUA(){return`
    <div class="modal" tabindex="-1" id="infoModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Вчимо англійську</h5>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="button-close-info-modal">
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>    
    `}function helpForProgramEN(){return`
    <div class="modal" tabindex="-1" id="infoModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Learn English</h5>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="button-close-info-modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>    
    `}function helpForHomeMenuRU(){return`
    <div class="modal modal-container" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div>
            <h5>Навигация по разделам</h5>
            <p><strong>Первый пункт меню</strong> — выбор теста по грамматике.</p>
            <p><strong>Второй пункт меню</strong> — выбор тестов для изучения слов.</p>
            <p><strong>Третий пункт меню</strong> — <em>помощь</em>. Здесь можно найти как информацию о сути задания, так и грамматические правила по теме теста.</p>
            <p><strong>Раздел "Статистика"</strong> — отображает достижения в текущем тесте.</p>
            <p><strong>Раздел "Setting"</strong> — выбор типа теста.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button id="button-close-info-modal" type="button" class="btn btn-primary">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>    
    `}function helpForHomeMenuUA(){return`
    <div class="modal modal-container" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Навігація по розділах</h5>
            <p><strong>Перший пункт меню</strong> — вибір тесту з граматики.</p>
            <p><strong>Другий пункт меню</strong> — вибір тестів для вивчення слів.</p>
            <p><strong>Третій пункт меню</strong> — <em>допомога</em>. Тут можна знайти як інформацію про суть завдання, так і граматичні правила за темою тесту.</p>
            <p><strong>Розділ "Статистика"</strong> — показує досягнення у поточному тесті.</p>
            <p><strong>Розділ "Setting"</strong> — вибір типу тесту.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="button-close-info-modal">
              Закрити
            </button>
          </div>
        </div>
      </div>
    </div>
    `}function helpForHomeMenuPL(){return`
    <div class="modal modal-container" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Nawigacja po sekcjach</h5>
            <p><strong>Pierwszy element menu</strong> — wybór testu gramatycznego.</p>
            <p><strong>Drugi element menu</strong> — wybór testów do nauki słówek.</p>
            <p><strong>Trzeci element menu</strong> — <em>pomoc</em>. Znajdziesz tu zarówno informacje o zadaniu, jak i zasady gramatyczne związane z tematem testu.</p>
            <p><strong>Sekcja "Statystyka"</strong> — pokazuje osiągnięcia w bieżącym teście.</p>
            <p><strong>Sekcja "Setting"</strong> — wybór typu testu.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button id="button-close-info-modal" type="button" class="btn btn-primary">
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
    `}function helpForHomeMenuEN(){return`
    <div class="modal modal-container" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <h5>Navigation Guide</h5>
            <p><strong>First menu item</strong> — lets you choose a grammar test.</p>
            <p><strong>Second menu item</strong> — allows you to select vocabulary tests.</p>
            <p><strong>Third menu item</strong> — <em>help section</em>. Here, you can find both an explanation of the task and grammar rules related to the test topic.</p>
            <p><strong>"Statistics" section</strong> — shows your progress in the current test.</p>
            <p><strong>"Setting" section</strong> — allows you to choose the type of test.</p>
          </div>
          <div id='video-help'></div>
          <div class="modal-footer">
            <button id="button-close-info-modal" type="button" class="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    `}function helpForGreenPoleOneUA(){return`
    <div class="help-for-green-pole-one" id='modalBox'>
      <h2>
        Чому переклад не завжди точний?
      </h2>
      <p>
        Масив з даними для тесту складається з наступних елементів:
      </p>
      <ul>
        <li><strong>0</strong> — пункт (запитання)</li>
        <li><strong>1</strong> — правильна пара до пункту 0</li>
        <li><strong>2</strong> — неправильна пара до пункту 0</li>
        <li><strong>3</strong> — неправильна пара до пункту 0</li>
        <li><strong>4</strong> — неправильна пара до пункту 0</li>
        <li><strong>5</strong> — переклад пункту 0 українською</li>
        <li><strong>6</strong> — переклад пункту 0 російською</li>
        <li><strong>7</strong> — переклад пункту 0 польською</li>
      </ul>
      <p>
        У тестах з розбором речення на слова, речення можуть братися не тільки з елемента з індексом <strong>0</strong>,
        але й з елементів <strong>1</strong>, <strong>2</strong>, <strong>3</strong> або <strong>4</strong>.
        При цьому <strong>точний переклад</strong> зберігається <u>лише для елемента з індексом 0</u>.
      </p>
      <p>
        Тому якщо у завданні використано речення з іншого елемента,
        переклад лише передає <em>загальний зміст</em>, а не дослівне значення.
      </p>
      <div id='video-help'></div>
      <div>
        <button id="button-close-info-modal">
          Зрозуміло
        </button>
      </div>
    </div>
    `}function helpForGreenPoleOneRU(e){return`
    <div class="help-for-green-pole-one" id='modalBox'>
        <h2>
          Почему перевод не всегда точный?
        </h2>
        <p>
          Массив с данными по тесту состоит из следующих элементов:
        </p>
        <ul>
            <li><strong>0</strong> — пункт (вопрос)</li>
            <li><strong>1</strong> — правильная пара к пункту 0</li>
            <li><strong>2</strong> — неверная пара к пункту 0</li>
            <li><strong>3</strong> — неверная пара к пункту 0</li>
            <li><strong>4</strong> — неверная пара к пункту 0</li>
            <li><strong>5</strong> — перевод пункта 0 на русский язык</li>
            <li><strong>6</strong> — перевод пункта 0 на украинский язык</li>
            <li><strong>7</strong> — перевод пункта 0 на польский язык</li>
        </ul>
        <p>
            На тестах с разборкой предложения на слова, предложения могут браться не только из элемента с индексом <strong>0</strong>,
            но и из элементов <strong>1</strong>, <strong>2</strong>, <strong>3</strong> или <strong>4</strong>.
            При этом <strong>точный перевод</strong> хранится <u>только для элемента с индексом 0</u>.
        </p>
        <p>
            Поэтому если в задании используется предложение из любого другого элемента,
            перевод будет отражать <em>лишь общий смысл</em>, а не дословное значение.
        </p>
        <div id='video-help'></div>
        <div>
            <button id="button-close-info-modal">
              Понятно
            </button>
        </div>
      </div>
      `}function helpForGreenPoleOnePL(){return`
    <div class="help-for-green-pole-one" id='modalBox'>
      <h2>
        Dlaczego tłumaczenie nie zawsze jest dokładne?
      </h2>
      <p>
        Tablica z danymi testowymi składa się z następujących elementów:
      </p>
      <ul>
        <li><strong>0</strong> — punkt (pytanie)</li>
        <li><strong>1</strong> — poprawna para do punktu 0</li>
        <li><strong>2</strong> — błędna para do punktu 0</li>
        <li><strong>3</strong> — błędna para do punktu 0</li>
        <li><strong>4</strong> — błędna para do punktu 0</li>
        <li><strong>5</strong> — tłumaczenie punktu 0 na język rosyjski</li>
        <li><strong>6</strong> — tłumaczenie punktu 0 na język ukraiński</li>
        <li><strong>7</strong> — tłumaczenie punktu 0 na język polski</li>
      </ul>
      <p>
        W testach z rozbiciem zdania na słowa, zdania mogą pochodzić nie tylko z elementu o indeksie <strong>0</strong>,
        ale także z elementów <strong>1</strong>, <strong>2</strong>, <strong>3</strong> lub <strong>4</strong>.
        Jedynie <strong>punkt 0</strong> zawiera <u>dokładne tłumaczenie</u>.
      </p>
      <p>
        Dlatego jeśli zadanie zawiera zdanie z innego elementu niż 0,
        tłumaczenie będzie odzwierciedlać jedynie <em>ogólny sens</em>, a nie dosłowne znaczenie.
      </p>
      <div id='video-help'></div>
      <div>
        <button id="button-close-info-modal">
          Rozumiem
        </button>
      </div>
    </div>
    `}function helpForGreenPoleOneEN(){return`
        <div class = "help-for-green-pole-one" id='modalBox'>
          <h2>
            Why is the translation not always accurate?
          </h2>
          <p>
            The test data table consists of the following elements:
          </p>
          <ul>
            <li><strong>0</strong> — point (question)</li>
            <li><strong>1</strong> — correct pair to point 0</li>
            <li><strong>2</strong> — incorrect pair to point 0</li>
            <li><strong>3</strong> — incorrect pair to point 0</li>
            <li><strong>4</strong> — incorrect pair to point 0</li>
            <li><strong>5</strong> — translation of point 0 to Russian</li>
            <li><strong>6</strong> — translation of point 0 to Ukrainian</li>
            <li><strong>7</strong> — translation of point 0 to Polish</li>
          </ul>
          <p>
            In tests with sentence breakdowns, the sentences may come not only from the element with index <strong>0</strong>,
            but also from elements <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, or <strong>4</strong>.
            Only <strong>point 0</strong> contains the <u>exact translation</u>.
          </p>
          <p>
            Therefore, if the task contains a sentence from an element other than 0,
            the translation will reflect only the <em>general meaning</em>, not the literal meaning.
          </p>
          <div id='video-help'></div>
          <div>
            <button id="button-close-info-modal">
              I Understand
            </button>
          </div>
        </div>
        `}function exportBDTranslate(){const e=[];return e.push(["","","",""]),e.push(["be/have/do in present and past tenses","be/have/do in present and past tenses","be/have/do in present and past tenses","be/have/do in present and past tenses"]),e.push([returnInfoUnit22RU(),returnInfoUnit22UA(),returnInfoUnit22PL(),returnInfoUnit22EN()]),e.push([helpForProgramRU(),helpForProgramUA(),helpForProgramPL(),helpForProgramEN()]),e.push([helpForHomeMenuRU(),helpForHomeMenuUA(),helpForHomeMenuPL(),helpForHomeMenuEN()]),e.push([helpForGreenPoleOneRU(),helpForGreenPoleOneUA(),helpForGreenPoleOnePL(),helpForGreenPoleOneEN()]),e.push([returnLevel42(),returnLevel42UA(),returnLevel42PL(),returnLevel42EN()]),e.push(["Речь примерно о:","Мова приблизно про:","Mówimy o:","We are talking approximately about:"]),e.push([returnLevel40(),returnLevel40UA(),returnLevel40PL(),returnLevel40EN()]),e.push(["Последний ответ здесь","Остання відповідь тут","Najnowsza odpowiedź tutaj","The last answer is here"]),e.push(["Предыдущий вопрос здесь","Попереднє питання тут","Poprzednie pytanie tutaj","Previous question here"]),e.push([returnLevel39(),returnLevel39UA(),returnLevel39PL(),returnLevel39EN()]),e.push([returnLevel38(),returnLevel38UA(),returnLevel38PL(),returnLevel38EN()]),e.push([returnLevel37(),returnLevel37UA(),returnLevel37PL(),returnLevel37EN()]),e.push(["В этом тесте нужно собрать предложение из предложенных слов. Имейте в виду, что иногда собранное предложение может не совпадать с общей темой теста.","У цьому тесті потрібно зібрати пропозицію із запропонованих слів. Майте на увазі, що інколи зібрана пропозиція може не співпадати із загальною темою тесту.","W tym teście musisz ułożyć zdanie z podanych słów. Pamiętaj, że czasami zebrane zdanie może nie pokrywać się z ogólnym tematem testu.","In this test you need to assemble a sentence from the given words. Keep in mind that sometimes the assembled sentence may not match the general topic of the test."]),e.push(["(может отличаться)","(може відрізнятися)","(może się różnić)","(may differ)"]),e.push([returnLevel20(),returnLevel20UA(),returnLevel20PL(),returnLevel20EN()]),e.push([returnLevel36(),returnLevel36UA(),returnLevel36PL(),returnLevel36EN()]),e.push([returnInfoForDiamant(),returnInfoForDiamantUA(),returnInfoForDiamantPL(),returnInfoForDiamantEN()]),e.push([returnLevel35(),returnLevel35UA(),returnLevel35PL(),returnLevel35EN()]),e.push([returnLevel34(),returnLevel34UA(),returnLevel34PL(),returnLevel34EN()]),e.push(["Вставьте глагол вместо троеточия или подберите правильное предложение в продолженном прошедшем времени.","Вставте дієслово замість три крапки або підберіть правильну пропозицію в минулому часі.","Wstaw czasownik zamiast wielokropka lub wybierz właściwe zdanie w czasie przeszłym ciągłym.","Insert a verb instead of the ellipsis or choose the correct sentence in the past continuous tense."]),e.push([returnLevel33(),returnLevel33UA(),returnLevel33PL(),returnLevel33EN()]),e.push([returnLevel32(),returnLevel32UA(),returnLevel32PL(),returnLevel32EN()]),e.push(["Past Simple отрицательные и вопросы","Past Simple негативні та питання","Past Simple przeczenia i pytania","Past Simple Negative and Questions"]),e.push(["Вставьте глагол вместо троеточия или подберите правильное предложение в простом прошедшем времени.","Вставте дієслово замість три крапки або підберіть правильну пропозицію в простому часі.","Wstaw czasownik zamiast wielokropka lub wybierz właściwe zdanie w czasie przeszłym prostym.","Insert a verb instead of the ellipsis or choose the correct sentence in the simple past tense."]),e.push([returnLevel31(),returnLevel31UA(),returnLevel31PL(),returnLevel31EN()]),e.push(["Подобрать пару правильный - неправильный глагол. Тест разбавлен небольшим числом правильных глаголов.","Підібрати пару правильне - неправильне дієслово. Тест розбавлений невеликою кількістю правильних дієслів.","Dopasuj właściwy czasownik nieregularny. Test jest rozcieńczany niewielką liczbą czasowników regularnych.","Match a pair of regular and irregular verbs. The test is diluted with a small number of regular verbs."]),e.push(["Прошедшее простое","Минуле просте","Przeszłość prosta","Past simple"]),e.push(["Помощь","Допомога","Pomoc","Help"]),e.push(["Теория:","Теорія:","Teoria:","Theory:"]),e.push(["Задание теста:","Завдання тесту:","Zadanie testowe:","Test task:"]),e.push(["Переводов:","Перекладів:","Tłumaczenia:","Translations:"]),e.push(["Успех:","Успіх:","Sukces:","Success:"]),e.push(["Ошибок:","Помилок:","Błędy:","Errors:"]),e.push(["Статистика","Статистика","Statystyka","Statistics"]),e.push(["Собрано алмазов:","Зібрано алмазів:","Zebrane diamenty:","Diamonds collected:"]),e.push(["Глаголы Was и Were","Глаголи Was і Were","Czasowniki Was i Were","Verbs Was and Were"]),e.push([returnLevel23(),returnLevel23UA(),returnLevel23PL(),returnLevel23EN()]),e.push(["Упс. Кто-то уже сообщил об этой ошибке.","Упс. Хтось уже повідомив про цю помилку.","Ups. Ktoś już zgłosił ten błąd.","Oops. Someone already reported this bug."]),e.push(["Ошибка зафиксирована","Помилка зафіксована","Zapisano błąd","Error recorded"]),e.push([returnLevel21(),returnLevel21UA(),returnLevel21PL(),returnLevel21EN()]),e.push(["Глаголы Have и Have Got","Дієслова Have та Have Got","Czasowniki Have i Have Got","The verbs Have and Have Got"]),e.push([returnLevel19(),returnLevel19UA(),returnLevel19PL(),returnLevel19EN()]),e.push(["Выбор между P.S. и настоящим продолженным P.C.","Вибір між P.S. та справжнім продовженим P.C.","Wybór pomiędzy P.S. i niniejszym kontynuuje P.C.","The choice between P.S. and the present continuation P.C."]),e.push([returnLevel18(),returnLevel18UA(),returnLevel18PL(),returnLevel18EN()]),e.push(["Простое настоящее  P.S. вопросы","Просте справжнє P.S. питання","Prosty prezent P.S. pytania","Simple present P.S. questions"]),e.push([returnLevel17(),returnLevel17UA(),returnLevel17PL(),returnLevel17EN()]),e.push(["Простое настоящее  P.S. негативное","Просте справжнє P.S. негативне","Prosty prezent P.S. negatywny","Simple present P.S. negative"]),e.push([returnLevel16(),returnLevel16UA(),returnLevel16PL(),returnLevel16EN()]),e.push(["Простое настоящее  P.S. плюс периодичность","Просте справжнє P.S. плюс періодичність","Prosty prezent P.S. plus częstotliwość","Simple present P.S. plus periodicity"]),e.push([returnLevel15(),returnLevel15UA(),returnLevel15PL(),returnLevel15EN()]),e.push(["Простое настоящее P.S.","Просте справжнє P.S.","Prosty prezent P.S.","Simple present P.S."]),e.push([returnLevel14(),returnLevel14UA(),returnLevel14PL(),returnLevel14EN()]),e.push(["Образования вопросов в настоящем продолженном времени P.C.","Утворення питань у поточному продовженому часі P.C.","Tworzenie pytań w czasie teraźniejszym ciągłym P.C.","Formation of questions in the present continuous tense P.C."]),e.push([returnLevel13(),returnLevel13UA(),returnLevel13PL(),returnLevel13EN()]),e.push(["Правило для настоящего продолженного времени (Present Continuous)","Правило для поточного часу (Present Continuous)","Reguła czasu teraźniejszego ciągłego","Rule for the Present Continuous"]),e.push(["Создание вопросов в Present Simple и Past Simple","Створення питань у Present Simple та Past Simple","Tworzenie pytań w czasie Present Simple i Past Simple","Forming questions in Present Simple and Past Simple"]),e.push(["Понятно","Зрозуміло","To jasne","It's clear"]),e.push(["Просто учим слова","Просто вчимо слова","Dopiero uczę się słówek","Just learning words"]),e.push(["Сокращенная форма глагола to Be","Скорочена форма дієслова","Krótka forma czasownika być","Shortened form of the verb to be"]),e.push(["Выбрать правильную пару.","Вибрати правильну пару.","Wybierz odpowiednią parę.","Choose the right pair."]),e.push(["Выбери верную форму глагола","Вибери правильну форму дієслова","Wybierz poprawną formę czasownika","Choose the correct form of the verb"]),e.push(["Вторая форма неправильных глаголов","Друга форма неправильних дієслів","Druga forma czasowników nieregularnych","The second form of irregular verbs"]),e.push(["Выбрать правильное время PS or PC","Вибрати правильне час PS or PC","Wybierz odpowiedni czas PS or PC","Choose the right time PS or PC"]),e.push(["Учить слова","Вчити слова","Ucz się słów","Learn words"]),e.push(["Подобрать правильно вопрос или ответ","Підібрати правильно питання чи відповідь","Wybierz właściwe pytanie lub odpowiedź","Choose the right question or answer"]),e.push(["Настоящее простое вопросы","Справжнє просте питання","Przedstaw proste pytania","Present simple questions"]),e.push(["Настоящее простое негативное","Справжнє просте негативне","Przedstaw prosty negatyw","Present simple negative"]),e.push(["300 глаголов","300 дієслів (RU)","300 czasowników (RU)","300 verbs (RU)"]),e.push(["50 глаголов","50 дієслів (RU/PL)","50 czasowników (RU/PL)","50 verbs (RU/PL)"]),e.push(["100 слов про спорт","100 слів про спорт (RU/PL)","100 słów o sporcie (RU/PL)","100 words about sports(RU/PL)"]),e.push(["Выберите правильно составленное предложение.","Виберіть правильно складену пропозицію.","Wybierz właściwe zdanie.","Choose the correctly constructed sentence."]),e.push(["Настоящее простое + периодичность","Справжнє просте + періодичність","Czas teraźniejszy prosty + okresowość","Present Simple + Periodicity"]),e.push(["Настоящее простое","Справжнє просте","Prezent prosty","Present simple"]),e.push(["Настоящее продолженное - вопрос","Справжнє продовжене – питання","Czas teraźniejszy ciągły – pytanie","Choose the right question"]),e.push(["Выбрать правильный вопрос","Вибрати правильне питання","Wybierz właściwe pytanie","Choose the right question"]),e.push(["Сообщить об ошибке","Повідомити про помилку","Zgłoś błąd","Report a bug"]),e.push(["Перевести вопрос","Перекласти питання","Przetłumacz pytanie","Translate question"]),e.push(["Выбрать правильный перевод","Вибрати правильний переклад","Wybierz właściwe tłumaczenie","Choose the correct translation"]),e.push(["100 слов о еде","100 слів про їжу","100 słów o jedzeniu","100 words about food"]),e.push(["100 слов о путешествии","100 слів про подорож (RU)","100 słów o podróżach (RU)","100 words about travel (RU)"]),e.push(["100 слов","100 слів (RU)","100 słów (RU)","100 words (RU)"]),e.push(["300 слов","300 слів (RU)","300 słów (RU)","300 words (RU)"]),e.push(["500 слов","500 слів (RU)","500 słów (RU)","500 words (RU)"]),e.push(["Настоящее продолженное","Присутній безперервний","Teraźniejszość ciągła","Present continuous"]),e.push(["Предыдущий вопрос/ответ","Попереднє запитання/відповідь","Poprzednie pytanie/odpowiedź","Previous question/answer"]),e.push(["Задание для теста","Завдання для тесту","Zadanie testowe","Task for the test"]),e.push(["Вопрос с вариантами ответа","Питання з варіантами відповіді","Pytanie wielokrotnego wyboru","Multiple choice question"]),e.push(["Выбрать тест.","Вибрати тест.","Wybierz test.","Select a test."]),e.push(["Where/Who...","Where/Who...","Where/Who...","Where/Who..."]),e.push(["Вставить правильное слово","Вставити правильне слово","Wstaw właściwe słowo","Insert the correct word"]),e.push(["To Be, ответь на вопрос","To Be, дай відповідь на запитання","Być, odpowiedz na pytanie","To Be, answer the question"]),e.push(["To Be, вопрос/ответ","To Be, питання/відповідь","Być, pytanie/odpowiedź","To Be, Q&A"]),e.push(["To Be, краткая форма","To Be, коротка форма","Być, krótka forma","To Be, short form"]),e.push(["Выбрать правильный вариант ответа","Вибрати правильний варіант відповіді","Wybierz poprawną odpowiedź","Choose the correct answer"]),e.push(["Сброс","Скидання","Resetowanie","Reset"]),e.push(["Выбрать правильный вариант сокращенной формы глагола to Be","Вибрати правильний варіант скороченої форми дієслова to Be","Wybierz poprawną wersję skróconej formy czasownika to Be","Choose the correct version of the shortened form of the verb to Be"]),e}class LanguageSelectorView{init(t){const s=t=="en"?"selected":"",r=t=="pl"?"selected":"",o=t=="ua"?"selected":"",a=t=="ru"?"selected":"";let n='<select id="languageSelect">';return n+=`<option ${s} id="selectEn"  value="en">EN</option>`,n+=`<option ${r} id="selectPl"  value="pl">PL</option>`,n+=`<option ${o} id="selectUa"  value="ua">UA</option>`,n+=`<option ${a} id="selectRu"  value="ru">RU</option>`,n+="</select>",n}}class LanguageController{constructor(){this.langStr=localStorage.getItem("EnglishWithJs_lang")||"ru"}translate(t){if(this.langStr==="ru")return t;let s="",r=3;switch(this.langStr){case"pl":r=2;break;case"ua":r=1;break}return s=t,exportBDTranslate().forEach(o=>{o[0]==t&&(s=o[r])}),s}init(){const t=new LanguageSelectorView,s=document.getElementById("button_lang_selected");s.innerHTML=t.init(this.langStr),document.getElementById("languageSelect").onchange=function(r){const o=r.target.value;localStorage.setItem("EnglishWithJs_lang",o)}}}class FactoryRegistr{static factoryArray={};static addObject(e,t){FactoryRegistr.factoryArray[e]=t}static getObject(nameClass,property=!1){if(nameClass in FactoryRegistr.factoryArray)return FactoryRegistr.factoryArray[nameClass];const className=eval(nameClass);let obj="";return property?obj=new className(...property):obj=new className,FactoryRegistr.addObject(nameClass,obj),obj}}function getTranslate(){return FactoryRegistr.getObject("LanguageController")}function daimentInfo(){const t=getTranslate().translate(returnInfoForDiamant());document.body.insertAdjacentHTML("beforeend",t)}function htmlOldQuestionsView(e){return`
      <div class="card shadow-lg mb-3 mx-auto position-relative html-old-questions-view">
      <div class="card-body">
        <fieldset class="border-0">
          <legend class="fs-4 text-primary mb-3" id="fieldset-legend-old">${e.yourQuestion}<button type='button' id='button-help' class='button-help'>&#10067;</button></legend>
          
          <div class="row mb-3">
            <div class="col-12">
              <div class="p-2 border rounded text-white bg-warning" id="question_old">${e.questionOld}</div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12">
              <div class="p-2 border rounded text-white bg-warning" id="clicked_element">${e.clickedElement}</div>
            </div>
          </div>

          <div class="row">
            <div class="col-8">
              <button type="button" id="search_error" class="btn btn-warning w-100">${e.searchError}</button>
            </div>
            <div class="col-2">
              <button type="button" id="log" class="btn btn-light w-100" name="log">&#x1F4DC;</button>
            </div>
            <div class="col-2">
              <button type="button" id="sound" class="btn btn-light w-100" name="sound">&#x1F50A;</button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    `}function htmlOldQuestions(){const e=FactoryRegistr.getObject("LanguageController");return{yourQuestion:e.translate("Предыдущий вопрос/ответ"),questionOld:e.translate("Предыдущий вопрос здесь"),clickedElement:e.translate("Последний ответ здесь"),searchError:e.translate("Сообщить об ошибке")}}let Help={translate:new LanguageController,viewhandleHelpToTranslate:function(e,t){const s=document.createElement("div");s.id="container-for-video-help";let r=this.translate.translate(e);r=r.replace(/<div id='video-help'><\/div>/,this.addVideoHelp(t)),s.innerHTML=r,document.body.appendChild(s),document.getElementById("button-close-info-modal").addEventListener("click",()=>{document.getElementById("container-for-video-help").remove()})},addVideoHelp(e){return`
        <div class="embed-responsive embed-responsive-16by9">
          <iframe showinfo=1 class="embed-responsive-item" src="https://www.youtube.com/embed/${e}" allowfullscreen></iframe>
        </div>
        `}};function htmlOldQuestionsCntr(){document.getElementById("html_old_questions").innerHTML=htmlOldQuestionsView(htmlOldQuestions()),document.getElementById("button-help").addEventListener("click",()=>{Help.viewhandleHelpToTranslate(helpForGreenPoleOneRU(),"VuUKoWdyu6Y")})}daimentInfo();htmlOldQuestionsCntr();function nav(){setTimeout(()=>{document.getElementById("button-help-video").addEventListener("click",e=>{e.stopPropagation(),Help.viewhandleHelpToTranslate(helpForHomeMenuRU(),"vkQYDmiTlmQ")})},0),document.getElementById("nav").innerHTML=`
     <nav class="navbar navbar-expand-sm navbar-light bg-light" id="first-teg-nav-for-nav">
    <div class="container-fluid" id="nav-first-div">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li id="helpVideo">
            <button id="button-help-video" type="button" class="fs-6 text-primary mb-3 button-help">&#10067;</button>
          </li>
          <li class="nav-item" id="nav-item-burger">
            <div class="nav-link" id="burger"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="word"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="help"></div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="statistic">Statistic</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="setting">Setting</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="button_lang_selected"></div>
          </li>
        </ul>
      </div>
    </div>
  </nav>`}const sellect=()=>[document.getElementById("search_error"),document.getElementById("log"),document.getElementById("working_field"),document.getElementById("log_for_div")];function viewLogOff(){let e=sellect();e[0].style.display="none",e[1].style.display="none",e[2].style.display="none",e[3].style.display="block"}function viewLogOn(){let e;e=sellect(),e[0].style.display="block",e[1].style.display="block",e[2].style.display="block",e[3].style.display="none"}function activatingLogs(e=!1,t=null){if(t!==null&&t.target.className!=="button_return_log")return null;new Promise((r,o)=>{e?r():o()}).then(()=>{viewLogOff()},()=>{viewLogOn()})}function handleLog(){activatingLogs(!0);const e=document.getElementById("log_for_div"),t=new LogField(Logs);e.innerHTML=t.getField(),e.onclick=s=>{activatingLogs(!1,s)}}function getHeaderWindow(e){let t="";switch(e.level){case 13:t=`${e.translate.translate("Правило для настоящего продолженного времени (Present Continuous)")}`;break;case 14:t=`${e.translate.translate("Образования вопросов в настоящем продолженном времени P.C.")}`;break;case 15:t=`${e.translate.translate("Простое настоящее P.S.")}`;break;case 16:t=`${e.translate.translate("Простое настоящее  P.S. плюс периодичность")}`;break;case 17:t=`${e.translate.translate("Простое настоящее  P.S. негативное")}`;break;case 18:t=`${e.translate.translate("Простое настоящее  P.S. вопросы")}`;break;case 19:t=`${e.translate.translate("Выбор между P.S. и настоящим продолженным P.C.")}`;break;case 21:t=`${e.translate.translate("Глаголы Have и Have Got")}`;break;case 23:t=`${e.translate.translate("Глаголы Was и Were")}`;break;case 31:t="Past Simple";break;case 32:t="Past Simple negative and questions";break;case 33:t="Present Simple (He, She, It)";break;case 34:t="Past Continuous";break;case 35:t="Past Continuous or Past Simple";break;case 37:t="Present perfect";break;case 38:t="Present perfect + (present simple or continius)";break;case 39:t="Present perfect + (for, since and ago)";break;case 40:t="Present perfect or Past simple";break;case 42:t="Present simple passive, past simple passive";break;case 43:t="Present Continuous Passive, Present Perfect Passive";break;default:t=`${e.translate.translate("Просто учим слова")}`}return'<h1 class="add-style-for-H1">'+t+"</h1>"}function thouryUnit1(){return`
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
`}function thouryUnit2(){return`
    unit2
    ru
    h2
    Вопрос с to be:

    P
    Вопрос с to be: переставь to be (am, is, are, was, were) перед подлежащим.
    Краткая форма в вопросах не используется — пишем полную (Is, Are, Was…), даже если в утвердительном предложении было сокращение (She's tired → Is she tired?).

    ul
    Примеры:
    She is tired. (She's tired) → Is she tired?
    They are ready. (They're ready) → Are they ready?
    I am late. (I'm late) → Am I late?
    He was at home. (He was at home) → Was he at home?
    We were happy. (We were happy) → Were we happy?

    P
    Отрицательные вопросы: not можно писать полностью (is not) или сокращать (isn't, aren't, wasn't, weren't) — оба варианта верные.    
    
    ul
    She is tired. → Is she not tired? или Isn't she tired?    
    They are ready. → Are they not ready? или Aren't they ready?    
    He was at home. → Was he not at home? или Wasn't he at home?    

    P
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

    P
    Заперечні питання: not можна писати повністю (is not) або скорочувати (isn't, aren't, wasn't, weren't) — обидва варіанти правильні.        

    ul
    She is tired. → Is she not tired? або Isn't she tired?    
    They are ready. → Are they not ready? або Aren't they ready?    
    He was at home. → Was he not at home? або Wasn't he at home?    
    
    P
    З питальними словами (What, Where, Why, How тощо) — ставимо їх на початок, перед to be: 

    ul
    She is here. → Where is she?    
    They are happy. → Why are they happy?    
    He was tired. → Why was he tired?
    She's not ready. → Why isn't she ready?

pl
h2
Pytanie z to be:

P
Pytanie z to be: przestaw to be (am, is, are, was, were) przed podmiotem.
Forma skrócona w pytaniach nie jest używana — piszemy pełną (Is, Are, Was…), nawet jeśli w zdaniu twierdzącym było skrócenie (She's tired → Is she tired?).

ul
Przykłady:
She is tired. (She's tired) → Is she tired?
They are ready. (They're ready) → Are they ready?
I am late. (I'm late) → Am I late?
He was at home. (He was at home) → Was he at home?
We were happy. (We were happy) → Were we happy?

P
Pytania przeczące: not można zapisać w pełnej formie (is not) lub skróconej (isn't, aren't, wasn't, weren't) — obie formy są poprawne.    

ul
She is tired. → Is she not tired? lub Isn't she tired?    
They are ready. → Are they not ready? lub Aren't they ready?    
He was at home. → Was he not at home? lub Wasn't he at home?    

P
Z zaimkami pytającymi (What, Where, Why, How itp.) — stawiamy je na początku, przed to be: 

ul
She is here. → Where is she?    
They are happy. → Why are they happy?    
He was tired. → Why was he tired?
She's not ready. → Why isn't she ready?

en
h2
Question with to be:

P
Question with to be: move the verb to be (am, is, are, was, were) before the subject.
The short form is not used in questions — write the full form (Is, Are, Was…), even if the affirmative sentence had a contraction (She's tired → Is she tired?).

ul
Examples:
She is tired. (She's tired) → Is she tired?
They are ready. (They're ready) → Are they ready?
I am late. (I'm late) → Am I late?
He was at home. (He was at home) → Was he at home?
We were happy. (We were happy) → Were we happy?

P
Negative questions: not can be written in full (is not) or contracted (isn't, aren't, wasn't, weren't) — both forms are correct.    

ul
She is tired. → Is she not tired? or Isn't she tired?    
They are ready. → Are they not ready? or Aren't they ready?    
He was at home. → Was he not at home? or Wasn't he at home?    

P
With question words (What, Where, Why, How, etc.) — place them at the beginning, before to be: 

ul
She is here. → Where is she?    
They are happy. → Why are they happy?    
He was tired. → Why was he tired?
She's not ready. → Why isn't she ready?


`}function thouryUnit2_2(){return`
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
`}const arrayDataThoury=[];arrayDataThoury.push(thouryUnit1());arrayDataThoury.push(thouryUnit2());arrayDataThoury.push(thouryUnit2_2());function returnDataArrayForStr(e){let t="";return Number.isFinite(e)?t="unit"+e:t=e,t=arrayDataThoury.find(s=>s.includes(t)),t}function searchLabel(e,t){if(e==null)return"";t+=`
`;let s=e.indexOf(t);return s<0&&(s=e.indexOf(t.charAt(0).toUpperCase()+t.slice(1))),s<0&&e.indexOf(t.toUpperCase()),s<0&&(s=0,console.log("не удалось найти маркер "+t)),s}function returnStringHelpForLanguage(e){const t=returnDataArrayForStr(e);if(t==null)return"";let s={ru:searchLabel(t,"ru"),ua:searchLabel(t,"ua"),pl:searchLabel(t,"pl"),en:searchLabel(t,"en"),strLenght:t.length,get start(){return localStorage.getItem("EnglishWithJs_lang")==="ru"?this.ru:localStorage.getItem("EnglishWithJs_lang")==="ua"?this.ua:localStorage.getItem("EnglishWithJs_lang")==="pl"?this.pl:this.en},get finish(){const o=[this.ru,this.ua,this.pl,this.en];o.sort((n,i)=>n-i);let a=o.find(n=>n>this.start);return a==null&&(a=this.strLenght),a}};return t.slice(s.start,s.finish)}function ThouryH2(e="start",t=0){return e==="start"?`<h2 id="thoury-pattern-h2-${t}">`:"</h2>"}function ThouryH3(e="start",t=0){return e==="start"?`<h3 id="thoury-pattern-h3-${t}">`:"</h3>"}function ThouryH4(e="start",t=0){return e==="start"?`<h4 id="thoury-pattern-h4-${t}">`:"</h4>"}function ThouryUl(e="start",t=0){return e==="start"?`<ul id="thoury-pattern-ui-${t}">`:"</ul>"}function ThouryLi(e="start",t=0){return e==="start"?`<li id="thoury-pattern-li-${t}">`:"</li>"}function ThouryDiv(e="start"){return e==="start"?'<div class="thoury-pattern" id="thoury-pattern">':"</div>"}function returnBodyHelpForLanguage(e){let t=returnStringHelpForLanguage(e);if(t=="")return"";let s=t.split(`
`),r="",o="",a="",n=0;for(let i of s){if(n++,i.trim()==""&&a!==""){o=="h2"&&(a=ThouryH2("start",n)+a+ThouryH2(""),r=r+a+"<hr>"),o=="ul"&&(a=ThouryUl("start",n)+a+ThouryUl(""),r=r+a),o=="h3"&&(a=ThouryH3("start",n)+a+ThouryH3(""),r=r+a),o=="h4"&&(a=ThouryH4("start",n)+a+ThouryH4(""),r=r+a),o="",a="";continue}if(i.includes("h2")){o="h2";continue}if(i.includes("h3")){o="h3";continue}if(i.includes("h4")){o="h4";continue}if(i.includes("ul")){o="ul";continue}(o=="h4"||o=="h3"||o=="h2"||o=="ul")&&((o=="h4"||o=="h3"||o=="h2"||o=="P")&&(a+=i),o=="ul"&&(a+=ThouryLi("start",n)+i+ThouryLi("")))}return ThouryDiv()+r+ThouryDiv("")}function getBodyThoury(e){switch(e.level){case 43:return e.translate.translate(returnInfoUnit22RU());case 42:return e.translate.translate(returnLevel42());case 40:return e.translate.translate(returnLevel40());case 39:return e.translate.translate(returnLevel39());case 38:return e.translate.translate(returnLevel38());case 37:return e.translate.translate(returnLevel37());case 20:return e.translate.translate(returnLevel20());case 36:return e.translate.translate(returnLevel36());case 35:return e.translate.translate(returnLevel35());case 34:return e.translate.translate(returnLevel34());case 33:return e.translate.translate(returnLevel33());case 32:return e.translate.translate(returnLevel32());case 31:return e.translate.translate(returnLevel31());case 23:return e.translate.translate(returnLevel23());case 21:return e.translate.translate(returnLevel21());case 19:return e.translate.translate(returnLevel19());case 18:return e.translate.translate(returnLevel18());case 17:return e.translate.translate(returnLevel17());case 16:return e.translate.translate(returnLevel16());case 15:return e.translate.translate(returnLevel15());case 14:return e.translate.translate(returnLevel14());case 13:return e.translate.translate(returnLevel13());default:let t=e.level-8;e.level==11&&(t="unit2-2");let s=returnBodyHelpForLanguage(t);return s==""?e.translate.translate("Просто учим слова"):s}}function getWorkPlace(e,t,s){return`
    <div class="card shadow-lg rounded-3 get-work-place">
     <button id="${s}"
         type="button" class="btn-close" aria-label="Close" 
    >
     </button>
     <div class="card-body">
       <h5 class="card-title">${e}</h5>
       <p class="card-text">${t}</p>
     </div>
    </div>
    `}function renderThoury(){document.getElementById("exercise").style.display="block",document.getElementById("exercise").innerHTML=this.strLocal,document.getElementById(this.idForButtonClosed).addEventListener("click",()=>{document.getElementById("exercise").style.display="none"})}const DataSet={};class Thoury{static translate=getTranslate();static idForButtonClosed="button-for-get-work-place";static handleThoury(t){this.level=t;const s=this;this.strLocal=getWorkPlace("",this.bodyThoury(),this.idForButtonClosed),DataSet.renderThoury||(document.getElementById("level30").addEventListener("click",function(){renderThoury.call(s)}),DataSet.renderThoury=!0)}static headerThoury(){return getHeaderWindow(this)}static bodyThoury(){return getBodyThoury(this)}}class Exercise{static idForButtonClosed="help-for-test";init(t){const s=getTranslate();this.cartTitle=s.translate("Задание для теста"),this.strLocal=getWorkPlace(this.cartTitle,t,this.idForButtonClosed),document.getElementById("level29").onclick=renderThoury.bind(this)}}function diamentReturnStr(){let e=0,t=0,s=0,r=0;for(let l in localStorage)r=parseInt(localStorage.getItem(l)),!(isNaN(r)||r=="")&&(l.includes("_Ok")&&(e+=r),l.includes("_Error")&&(t+=r),l.includes("intTranslate")&&(s+=r));const o=e-t*3-s/2;let a=parseInt(o),n="💎";a<0&&(n="💀");let i="<span>😊</span>";return t/e<=.5&&t/e>0&&(i="<span>😔</span>"),t/e<=.8&&t/e>.5&&(i='<span">😭</span>'),[n,i,a]}function diamentView(e,t,s){return[t,s,e]=diamentReturnStr(),`
    <div class="diament-view">
        <div>
            <span>${e}</span>
            <span data-bs-toggle="modal" data-bs-target="#diamondsModal">${t}</span>
        </div>
        <div>
        <button id="prime-help" type="button" class="text-primary mb-3">&#10067;</button> 
            ${s}  
        </div>
    </div>`}function hundleHelpPrime(){let e=!0,t=document.querySelector("#diament");return t||(e=!1),t.innerHTML=diamentView(),t=document.querySelector("#prime-help"),t||(e=!1),t.addEventListener("click",s=>{s.stopPropagation(),Help.viewhandleHelpToTranslate(helpForProgramRU(),"RwzDBkaEwjI")}),e}let DataOk={};const levelStr=()=>localStorage.getItem("level")||"9",countStr=()=>localStorage.getItem("intTranslate_"+levelStr())||"0";DataOk={level:{str:levelStr(),int:parseInt(levelStr())||9,get levelNameOk(){return"level"+levelStr()+"_Ok"},get levelNameError(){return"level"+levelStr()+"_Error"}},count:{str:countStr(),int:parseInt(countStr())||0},get ok(){return parseFloat(localStorage.getItem("level"+levelStr()+"_Ok"))||0},set ok(e){localStorage.setItem("level"+levelStr()+"_Ok",e)},get error(){return parseFloat(localStorage.getItem("level"+levelStr()+"_Error"))||0},set error(e){localStorage.setItem("level"+levelStr()+"_Error",e)},get rezult(){return this.ok+this.error==0?0:this.ok/(this.ok+this.error)*100},get countInt(){return parseInt(countStr())},get countStr(){return countStr()},set countInt(e){localStorage.setItem("intTranslate_"+levelStr(),e)},setLevelOk:function(e){this.levelNameOk=e,e=e.replace(/level/,""),e=e.replace(/_Ok/,""),this.setLevel(e)},setLevelError:function(e){this.levelNameError=e,e=e.replace(/'level'/,""),e=e.replace(/'_Error'/,""),this.setLevel(e)},setLevel:function(e){return this.level.int=parseFloat(e),this.level.str=e,localStorage.setItem("level",e),this.level.int},getOkIndex:e=>parseFloat(localStorage.getItem("level"+e+"_Ok"))||0,getErrorIndex:e=>parseFloat(localStorage.getItem("level"+e+"_Error"))||0,addOk:function(e){this.ok+=parseFloat(e)||0,localStorage.setItem(this.level.levelNameOk,this.ok)},addError:function(e){this.error+=parseFloat(e)||0,localStorage.setItem(this.level.levelNameError,this.error)}};window.languageSelectorView=new LanguageSelectorView;window.BDTranslate=exportBDTranslate();window.LanguageController=new LanguageController;window.FactoryRegistr=FactoryRegistr;window.Help=Help;window.nav=nav();window.diament=diament;window.handleLog=handleLog;window.Thoury=Thoury;window.Exercise=Exercise;window.hundleHelpPrime=hundleHelpPrime;window.DataOk=DataOk;window.getTranslate=getTranslate();function initEventForMenuStatistic(){let e=!0;const t=getTranslate(),s=document.getElementById("level24");s?s.innerHTML=t.translate("Собрано алмазов:")+Math.trunc(DataOk.ok):e=!1;const r=document.getElementById("level25");r?r.innerHTML=t.translate("Ошибок:")+DataOk.error:e=!1;const o=document.getElementById("level26");o?o.innerHTML=t.translate("Успех:")+Math.floor(DataOk.rezult)+"%":e=!1;const a=document.getElementById("level27");a?(a.innerHTML=t.translate("Сброс"),a.addEventListener("click",()=>{resetStatistic()})):e=!1;const n=document.getElementById("level28");return n?n.innerHTML=t.translate("Переводов:")+DataOk.countInt:e=!1,e}function hundleUpdateBurgerOrWord(e){const t=document.getElementById(e);return t?(t.addEventListener("click",()=>{initEventForMenuStatistic()}),!0):!1}window.addEventListener("load",()=>{});const id=setInterval(()=>{let e=!0;hundleHelpPrime()||(e=!1),initEventForMenuStatistic()||(e=!1),hundleUpdateBurgerOrWord("burger")||(e=!1),hundleUpdateBurgerOrWord("word")||(e=!1),hundleUpdateBurgerOrWord("statistic")||(e=!1),e&&(console.log("Все элементы получили свои события"),clearInterval(id))},300);
