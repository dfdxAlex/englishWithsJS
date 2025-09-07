export default returnInfoUnit22RU;

function returnInfoUnit22RU()
{
    return `
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
    `;
}
