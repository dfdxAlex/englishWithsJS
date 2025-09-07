export default returnLevel33PL;

function returnLevel33PL()
{
    return `<div class="container">
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
</div>`;
}
