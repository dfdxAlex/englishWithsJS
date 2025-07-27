import './styles/helpForGreenPoleOneRU.scss';

export function helpForGreenPoleOneRU(video)
{
    return `
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
      `;
}
