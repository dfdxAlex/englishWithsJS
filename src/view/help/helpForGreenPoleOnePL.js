import './styles/helpForGreenPoleOneRU.scss';

export function helpForGreenPoleOnePL()
{
    return `
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
    `;
}
