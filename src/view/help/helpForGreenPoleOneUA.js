import './styles/helpForGreenPoleOneRU.scss';

export function helpForGreenPoleOneUA() 
{
    return `
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
    `;
}
