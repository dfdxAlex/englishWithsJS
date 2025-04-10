function helpForGreenPoleOneRU(video)
{
    return `
    <div id='modalOverlay' style='position: fixed; top: 0; left: 0; width: 100%; height: 100%;
     background: rgba(0, 0, 0, 0.5); z-index: 9998;' onclick='document.getElementById(\"modalOverlay\").remove(); document.getElementById(\"modalBox\").remove();'></div>

    <div class = "help-for-green-pole-one" id='modalBox' style='position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: white; border: 1px solid #ccc; border-radius: 12px; padding: 24px;
        width: 90%; max-width: 520px; z-index: 9999;
        box-shadow: 0 6px 24px rgba(0,0,0,0.25); font-family: sans-serif;
        line-height: 1.6; color: #333;'>

      <h2 style='margin-top: 0; font-size: 1.5rem; color: #222;'>
        Почему перевод не всегда точный?
      </h2>

      <p style='margin-bottom: 12px;'>
        Массив с данными по тесту состоит из следующих элементов:
      </p>

      <ul style='padding-left: 20px; margin: 0;'>
        <li><strong>0</strong> — пункт (вопрос)</li>
        <li><strong>1</strong> — правильная пара к пункту 0</li>
        <li><strong>2</strong> — неверная пара к пункту 0</li>
        <li><strong>3</strong> — неверная пара к пункту 0</li>
        <li><strong>4</strong> — неверная пара к пункту 0</li>
        <li><strong>5</strong> — перевод пункта 0 на русский язык</li>
        <li><strong>6</strong> — перевод пункта 0 на украинский язык</li>
        <li><strong>7</strong> — перевод пункта 0 на польский язык</li>
      </ul>

      <p style='margin-top: 16px;'>
        На тестах с разборкой предложения на слова, предложения могут браться не только из элемента с индексом <strong>0</strong>,
        но и из элементов <strong>1</strong>, <strong>2</strong>, <strong>3</strong> или <strong>4</strong>.
        При этом <strong>точный перевод</strong> хранится <u>только для элемента с индексом 0</u>.
      </p>

      <p>
        Поэтому если в задании используется предложение из любого другого элемента,
        перевод будет отражать <em>лишь общий смысл</em>, а не дословное значение.
      </p>

      <div id='video-help'></div>

      <div style='text-align: right; margin-top: 20px;'>
        <button onclick='document.getElementById("modalBox").remove(); document.getElementById("modalOverlay").remove();'
                style='background: #007BFF; color: white; border: none;
                       padding: 10px 20px; border-radius: 6px; font-size: 1rem;
                       cursor: pointer;'>
          Понятно
        </button>
      </div>
    </div>
    `;
}
