export default returnLevel35;

function returnLevel35()
{
    return `<div class="card border-success">
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
`;
}
