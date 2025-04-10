function helpForGreenPoleOnePL()
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
        Dlaczego tłumaczenie nie zawsze jest dokładne?
      </h2>

      <p style='margin-bottom: 12px;'>
        Tablica z danymi testowymi składa się z następujących elementów:
      </p>

      <ul style='padding-left: 20px; margin: 0;'>
        <li><strong>0</strong> — punkt (pytanie)</li>
        <li><strong>1</strong> — poprawna para do punktu 0</li>
        <li><strong>2</strong> — błędna para do punktu 0</li>
        <li><strong>3</strong> — błędna para do punktu 0</li>
        <li><strong>4</strong> — błędna para do punktu 0</li>
        <li><strong>5</strong> — tłumaczenie punktu 0 na język rosyjski</li>
        <li><strong>6</strong> — tłumaczenie punktu 0 na język ukraiński</li>
        <li><strong>7</strong> — tłumaczenie punktu 0 na język polski</li>
      </ul>

      <p style='margin-top: 16px;'>
        W testach z rozbiciem zdania na słowa, zdania mogą pochodzić nie tylko z elementu o indeksie <strong>0</strong>,
        ale także z elementów <strong>1</strong>, <strong>2</strong>, <strong>3</strong> lub <strong>4</strong>.
        Jedynie <strong>punkt 0</strong> zawiera <u>dokładne tłumaczenie</u>.
      </p>

      <p>
        Dlatego jeśli zadanie zawiera zdanie z innego elementu niż 0,
        tłumaczenie będzie odzwierciedlać jedynie <em>ogólny sens</em>, a nie dosłowne znaczenie.
      </p>
      <div id='video-help'></div>
      <div style='text-align: right; margin-top: 20px;'>
        <button onclick='document.getElementById("modalBox").remove(); document.getElementById("modalOverlay").remove();'
                style='background: #007BFF; color: white; border: none;
                       padding: 10px 20px; border-radius: 6px; font-size: 1rem;
                       cursor: pointer;'>
          Rozumiem
        </button>
      </div>
    </div>
    `;
}
