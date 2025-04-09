function helpForGreenPoleOneUA() 
{
    return `
    <div id='modalOverlay' style='position: fixed; top: 0; left: 0; width: 100%; height: 100%;
     background: rgba(0, 0, 0, 0.5); z-index: 9998;' onclick='document.getElementById(\"modalOverlay\").remove(); document.getElementById(\"modalBox\").remove();'></div>

    <div id='modalBox' style='position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: white; border: 1px solid #ccc; border-radius: 12px; padding: 24px;
        width: 90%; max-width: 520px; z-index: 9999;
        box-shadow: 0 6px 24px rgba(0,0,0,0.25); font-family: sans-serif;
        line-height: 1.6; color: #333;'>

      <h2 style='margin-top: 0; font-size: 1.5rem; color: #222;'>
        Чому переклад не завжди точний?
      </h2>

      <p style='margin-bottom: 12px;'>
        Масив з даними для тесту складається з наступних елементів:
      </p>

      <ul style='padding-left: 20px; margin: 0;'>
        <li><strong>0</strong> — пункт (запитання)</li>
        <li><strong>1</strong> — правильна пара до пункту 0</li>
        <li><strong>2</strong> — неправильна пара до пункту 0</li>
        <li><strong>3</strong> — неправильна пара до пункту 0</li>
        <li><strong>4</strong> — неправильна пара до пункту 0</li>
        <li><strong>5</strong> — переклад пункту 0 українською</li>
        <li><strong>6</strong> — переклад пункту 0 російською</li>
        <li><strong>7</strong> — переклад пункту 0 польською</li>
      </ul>

      <p style='margin-top: 16px;'>
        У тестах з розбором речення на слова, речення можуть братися не тільки з елемента з індексом <strong>0</strong>,
        але й з елементів <strong>1</strong>, <strong>2</strong>, <strong>3</strong> або <strong>4</strong>.
        При цьому <strong>точний переклад</strong> зберігається <u>лише для елемента з індексом 0</u>.
      </p>

      <p>
        Тому якщо у завданні використано речення з іншого елемента,
        переклад лише передає <em>загальний зміст</em>, а не дослівне значення.
      </p>

      <div style='text-align: right; margin-top: 20px;'>
        <button onclick='document.getElementById("modalBox").remove(); document.getElementById("modalOverlay").remove();'
                style='background: #007BFF; color: white; border: none;
                       padding: 10px 20px; border-radius: 6px; font-size: 1rem;
                       cursor: pointer;'>
          Зрозуміло
        </button>
      </div>
    </div>
    `;
}
