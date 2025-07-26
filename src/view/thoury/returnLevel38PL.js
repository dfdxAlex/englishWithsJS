export function returnLevel38PL()
{
    return `<div class="accordion" id="presentPerfectAccordion">
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
`;
}
