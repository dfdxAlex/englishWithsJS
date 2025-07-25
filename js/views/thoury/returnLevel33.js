function returnLevel33()
{
    return `<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h3>Правила с глаголами (Добавление окончаний)</h3>
      <div class="accordion" id="verbExamplesAccordion">
        <!-- 1st Rule -->
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Правило 1: Добавление окончания "s"
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Для глаголов, заканчивающихся на согласный, добавляется окончание <strong>s</strong> для третьего лица в настоящем времени.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleOne" aria-expanded="false" aria-controls="exampleOne">Пример</button>
              <div id="exampleOne" class="collapse">
                <p>He <strong>works</strong> every day. (Он работает каждый день.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2nd Rule -->
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Правило 2: Добавление окончания "es"
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Глаголы, заканчивающиеся на -ch, -sh, -x, -o, -ss, получают окончание <strong>es</strong> в третьем лице.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleTwo" aria-expanded="false" aria-controls="exampleTwo">Пример</button>
              <div id="exampleTwo" class="collapse">
                <p>She <strong>fixes</strong> the problem. (Она решает проблему.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3rd Rule -->
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Правило 3: Глаголы с -y
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Для глаголов, заканчивающихся на -y, убирается "y" и добавляется окончание <strong>ies</strong>.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleThree" aria-expanded="false" aria-controls="exampleThree">Пример</button>
              <div id="exampleThree" class="collapse">
                <p>He <strong>carries</strong> the box. (Он несет коробку.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4th Rule -->
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Правило 4: Глаголы, заканчивающиеся на гласную + "y"
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Если глагол заканчивается на гласную + "y", то в третьем лице просто добавляется <strong>s</strong>.</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFour" aria-expanded="false" aria-controls="exampleFour">Пример</button>
              <div id="exampleFour" class="collapse">
                <p>She <strong>plays</strong> the piano. (Она играет на пианино.)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 5th Rule -->
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Правило 5: Глаголы с необычным изменением
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#verbExamplesAccordion">
            <div class="card-body">
              <p>Некоторые глаголы имеют нестандартные формы для третьего лица, например, "have" становится "has".</p>
              <button class="btn btn-success" data-toggle="collapse" data-target="#exampleFive" aria-expanded="false" aria-controls="exampleFive">Пример</button>
              <div id="exampleFive" class="collapse">
                <p>She <strong>has</strong> a new car. (У неё есть новая машина.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}
