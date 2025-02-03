
class Thoury
{

static handleThoury(level)
{
    this.level = level;
    this.translate = FactoryRegistr.getObject("LanguageController");

    this.strLocal = `
    <div class="card shadow-lg rounded-3" style="width: 80vw;  position: relative;">
     <button type="button" class="btn-close" aria-label="Close" style="position: absolute; top: 10px; right: 10px;"  onclick="document.getElementById('exercise').style.display='none'"></button>
      <div class="card-body">
        <h5 class="card-title">${this.headerThoury()}</h5>
        <p class="card-text">${this.bodyThoury()}</p>
      </div>
    </div>
    `;
    document.getElementById('level30').onclick = cardThoury.bind(null, this);
    }

    // Функция помещает информацию в заголовок раздела Теория
    static headerThoury()
    {
        if (this.level === 9 || this.level === 10) 
            return this.translate.translate('Сокращенная форма глагола to Be');
        if (this.level === 11) 
            return this.translate.translate('Создание вопросов в Present Simple и Past Simple');
        if (this.level === 13) 
          return this.translate.translate('Правило для настоящего продолженного времени (Present Continuous)');
        if (this.level === 14) 
          return this.translate.translate('Образования вопросов в настоящем продолженном времени P.C.');
        if (this.level === 15) 
          return this.translate.translate('Простое настоящее P.S.');
        if (this.level === 16) 
          return this.translate.translate('Простое настоящее  P.S. плюс периодичность');
        if (this.level === 17) 
          return this.translate.translate('Простое настоящее  P.S. негативное');
        if (this.level === 18) 
          return this.translate.translate('Простое настоящее  P.S. вопросы');
        if (this.level === 19) 
          return this.translate.translate('Выбор между P.S. и настоящим продолженным P.C.');
        if (this.level === 21) 
          return this.translate.translate('Глаголы Have и Have Got');
        if (this.level === 23) 
            return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Глаголы Was и Were</h1>`);
        if (this.level === 31) 
            return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Past Simple</h1>`);
        if (this.level === 32) 
            return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Past Simple negative and questions</h1>`);
        if (this.level === 33) 
            return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Present Simple (He, She, It)</h1>`);
        if (this.level === 34) 
            return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Past Continuous</h1>`);
        if (this.level === 35) 
          return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Past Continuous or Past Simple</h1>`); 
        if (this.level === 37) 
          return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Present perfect</h1>`);           
        if (this.level === 38) 
          return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Present perfect + (present simple or continius)</h1>`);          
        if (this.level === 39) 
          return this.translate.translate(`<h1 style="text-align: center; color: #333; font-size: 2.5em; margin-bottom: 20px; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Present perfect + (for, since and ago)</h1>`);          
        return this.translate.translate('Просто учим слова');
    }
    // Функция помещает информацию в тело раздела Теория
    static bodyThoury()
    {
      // if (this.level === 15) 
      //   return this.translate.translate(``);
      // if (this.level === 15) 
      //   return this.translate.translate(``);
      // if (this.level === 15) 
      //   return this.translate.translate(``);
      if (this.level === 39) 
        return this.translate.translate(`<div class="container mt-5">
    <h2>Present Perfect: Rules for Using <code>For</code>, <code>Since</code>, and <code>Ago</code></h2>
    <div class="accordion" id="accordionExample">
        
        <!-- For -->
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFor">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFor" aria-expanded="true" aria-controls="collapseFor" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>For</strong>
                </button>
            </h2>
            <div id="collapseFor" class="accordion-collapse collapse show" aria-labelledby="headingFor" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>For</strong> используется для указания длительности действия или состояния (в течение какого-то времени).</p>
                    <p>Когда вы хотите сказать, что что-то происходило на протяжении определенного периода времени, используйте <strong>for</strong>.</p>
                    <p><strong>Примеры:</strong></p>
                    <ul>
                        <li>I have lived here <strong>for</strong> five years. (Я живу здесь <strong>в течение</strong> пяти лет.)</li>
                        <li>She has worked at the company <strong>for</strong> two months. (Она работает в компании <strong>в течение</strong> двух месяцев.)</li>
                        <li>They have known each other <strong>for</strong> a long time. (Они знают друг друга <strong>в течение</strong> долгого времени.)</li>
                        <li>We have been waiting <strong>for</strong> 30 minutes. (Мы ждали <strong>в течение</strong> 30 минут.)</li>
                    </ul>
                    <p><strong>Обратите внимание:</strong> <strong>For</strong> используется с определенными промежутками времени, такими как:</p>
                    <ul>
                        <li>days (дни)</li>
                        <li>weeks (недели)</li>
                        <li>months (месяцы)</li>
                        <li>years (годы)</li>
                        <li>hours (часы)</li>
                        <li>minutes (минуты)</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Since -->
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingSince">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSince" aria-expanded="false" aria-controls="collapseSince" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Since</strong>
                </button>
            </h2>
            <div id="collapseSince" class="accordion-collapse collapse" aria-labelledby="headingSince" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Since</strong> используется для указания точного момента времени, с которого началось действие.</p>
                    <p>Когда вы хотите указать момент времени, с которого началось действие, используйте <strong>since</strong>.</p>
                    <p><strong>Примеры:</strong></p>
                    <ul>
                        <li>I have lived here <strong>since</strong> 2010. (Я живу здесь <strong>с 2010 года</strong>.)</li>
                        <li>She has worked at the company <strong>since</strong> last month. (Она работает в компании <strong>с прошлого месяца</strong>.)</li>
                        <li>They have known each other <strong>since</strong> childhood. (Они знают друг друга <strong>с детства</strong>.)</li>
                        <li>We have been friends <strong>since</strong> high school. (Мы друзья <strong>с старшей школы</strong>.)</li>
                    </ul>
                    <p><strong>Обратите внимание:</strong> <strong>Since</strong> используется с точными моментами времени, такими как:</p>
                    <ul>
                        <li>years (годы)</li>
                        <li>months (месяцы)</li>
                        <li>dates (даты)</li>
                        <li>days of the week (дни недели)</li>
                        <li>events (события)</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Ago -->
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingAgo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAgo" aria-expanded="false" aria-controls="collapseAgo" style="font-weight: bold; background-color: #f8f9fa;">
                    <strong>Ago</strong>
                </button>
            </h2>
            <div id="collapseAgo" class="accordion-collapse collapse" aria-labelledby="headingAgo" data-bs-parent="#accordionExample">
                <div class="accordion-body" style="background-color: #f7f7f7; padding: 20px;">
                    <p><strong>Ago</strong> используется для указания времени, прошедшего с момента действия. Однако, это слово не используется с Present Perfect, а только с Past Simple.</p>
                    <p>Когда вы хотите выразить, что что-то произошло в прошлом относительно настоящего времени, используйте <strong>ago</strong> с Past Simple.</p>
                    <p><strong>Примеры:</strong></p>
                    <ul>
                        <li>I met him <strong>two days ago</strong>. (Я встретил его <strong>два дня назад</strong>.)</li>
                        <li>We went to the cinema <strong>a week ago</strong>. (Мы пошли в кино <strong>неделю назад</strong>.)</li>
                        <li>She left the office <strong>three hours ago</strong>. (Она ушла из офиса <strong>три часа назад</strong>.)</li>
                    </ul>
                    <p><strong>Обратите внимание:</strong> <strong>Ago</strong> не используется с Present Perfect и всегда используется с Past Simple для указания прошедшего времени.</p>
                </div>
            </div>
        </div>

    </div>
</div>`);
       if (this.level === 38) 
         return this.translate.translate(`<div class="accordion" id="presentPerfectAccordion">
  <!-- Определение Present Perfect -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDefinition" aria-expanded="true">
        Что такое Present Perfect?
      </button>
    </h2>
    <div id="collapseDefinition" class="accordion-collapse collapse show" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p><strong>Present Perfect</strong> (<code>have/has + V3 (Past Participle)</code>) используется, когда действие:</p>
        <ul>
          <li>✔ Завершено, но связано с настоящим (результат важен сейчас).</li>
          <li>✔ Началось в прошлом и продолжается до настоящего момента.</li>
          <li>✔ Произошло в неопределённое время в прошлом, но имеет значение для настоящего.</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Simple -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrSimp">
        Когда Present Perfect используется с Present Simple?
      </button>
    </h2>
    <div id="collapsePrPerfPrSimp" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>Используется, когда <strong>Present Simple</strong> описывает повторяющееся или общее явление, а <strong>Present Perfect</strong> подчёркивает опыт, изменения или их влияние.</p>
        
        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I've always loved how she cooks.</strong> (Я всегда любил, как она готовит.)</p>
          <p>✅ <strong>We have noticed that he talks too much.</strong> (Мы заметили, что он слишком много говорит.)</p>
          <p>✅ <strong>She has never understood why people like this movie.</strong> (Она никогда не понимала, почему людям нравится этот фильм.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Present Perfect + Present Continuous -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrPerfPrCont">
        Когда Present Perfect используется с Present Continuous?
      </button>
    </h2>
    <div id="collapsePrPerfPrCont" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <p>Используется, когда <strong>Present Continuous</strong> описывает текущее действие, а <strong>Present Perfect</strong> объясняет его причину или подводит итог.</p>

        <div class="p-3 border-start border-primary">
          <p>✅ <strong>I have noticed that she is talking to him again.</strong> (Я заметил, что она снова с ним разговаривает.)</p>
          <p>✅ <strong>They have been surprised that he is learning a new language.</strong> (Они были удивлены, что он учит новый язык.)</p>
          <p>✅ <strong>We have realized that she is working too hard.</strong> (Мы поняли, что она слишком много работает.)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Общий вывод -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConclusion">
        Общий вывод
      </button>
    </h2>
    <div id="collapseConclusion" class="accordion-collapse collapse" data-bs-parent="#presentPerfectAccordion">
      <div class="accordion-body">
        <ul>
          <li>📌 <strong>PrPerf + PrSimp</strong> → акцент на факте, опыте, изменении.</li>
          <li>📌 <strong>PrPerf + PrCont</strong> → акцент на действии, происходящем сейчас.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`);
       if (this.level === 37) 
         return this.translate.translate(`<div class="accordion" id="presentPerfectAccordion">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Определение времени Present Perfect
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <strong>Present Perfect</strong> — это время, которое используется для описания действий, имеющих связь с настоящим моментом. Оно подчеркивает результат действия, который имеет значение в текущем времени, или действия, произошедшие в неопределённый момент в прошлом. Это время формируется с помощью вспомогательного глагола <em>have</em> (или <em>has</em> для третьего лица) и причастия прошедшего времени основного глагола.
            </div>
        </div>
    </div>

    <!-- Пример 1: I have done -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                I have done
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have done my homework.</code> — Я сделал домашку. Это пример использования Present Perfect, когда результат действия важен для текущего момента.
            </div>
        </div>
    </div>

    <!-- Пример 2: I have just -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                I have just
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have just finished my lunch.</code> — Я только что закончил обедать. Здесь "just" указывает на недавность действия.
            </div>
        </div>
    </div>

    <!-- Пример 3: I have already -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                I have already
            </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have already seen that movie.</code> — Я уже видел этот фильм. Используется для выражения действий, которые произошли раньше, чем ожидалось.
            </div>
        </div>
    </div>

    <!-- Пример 4: I have not... yet -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                I have not... yet
            </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have not finished my project yet.</code> — Я ещё не закончил мой проект. Здесь "yet" подчеркивает, что действие ещё не завершено.
            </div>
        </div>
    </div>

    <!-- Пример 5: Have you ever...? -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Have you ever...?
            </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>Have you ever been to Paris?</code> — Ты когда-нибудь был в Париже? Это вопрос о прошлом опыте, не привязанном к конкретному времени.
            </div>
        </div>
    </div>

    <!-- Пример 6: I have never... -->
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                I have never...
            </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#presentPerfectAccordion">
            <div class="accordion-body">
                <code>I have never tried sushi.</code> — Я никогда не пробовал суши. Здесь "never" указывает на отсутствие опыта.
            </div>
        </div>
    </div>
</div>`);
       if (this.level === 20) 
         return this.translate.translate(`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Неправильные глаголы второй группы</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Неправильные глаголы второй группы имеют четкий шаблон для образования прошедшего времени (Past Simple) и причастия прошедшего времени (Past Participle). Эти глаголы обычно изменяют гласную в корне в обеих формах, и их изменение необходимо запомнить, поскольку шаблон не всегда одинаков.
          </p>

          <!-- Основные характеристики -->
          <h5>Основные характеристики:</h5>
          <ul>
            <li><strong>Изменение гласной:</strong> Прошедшее и причастие прошедшего времени часто связаны с изменением гласной в середине глагола.</li>
            <li><strong>Регулярный шаблон:</strong> Хотя это не полностью предсказуемо, неправильные глаголы второй группы обычно следуют более согласованному шаблону, чем другие неправильные глаголы. Пример:
              <ul>
                <li><strong>Основная форма:</strong> <em>drink</em> — <strong>Past Simple:</strong> <em>drank</em> — <strong>Past Participle:</strong> <em>drunk</em></li>
              </ul>
            </li>
          </ul>

          <!-- Где используются -->
          <h5>Где используются:</h5>
          <p>Неправильные глаголы второй группы часто используются в повседневной речи и письме. Они выражают:</p>
          <ul>
            <li><strong>Действия в прошлом:</strong> "Она <em>пела</em> прекрасно." (глагол <em>sang</em> — форма прошедшего времени от <em>sing</em>).</li>
            <li><strong>Время Present Perfect:</strong> "Он <em>написал</em> книгу." (глагол <em>written</em> — форма прошедшего времени от <em>write</em>).</li>
            <li><strong>Страдательные конструкции:</strong> "Песню <em>спели</em> хором." (глагол <em>sung</em> — форма прошедшего времени от <em>sing</em>).</li>
          </ul>

          <!-- Роль в обучении -->
          <h5>Роль в обучении:</h5>
          <p>Изучение неправильных глаголов второй группы важно для освоения прошедших времен и конструкций Perfect. В английском языке многие распространенные глаголы принадлежат ко второй группе, что делает их необходимыми для языковой грамотности.</p>

          <!-- Кнопка для примеров -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Пример
          </button>

          <!-- Примеры глаголов -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Основная форма:</strong> drink — <strong>Past Simple:</strong> drank — <strong>Past Participle:</strong> drunk</li>
                <li><strong>Основная форма:</strong> sing — <strong>Past Simple:</strong> sang — <strong>Past Participle:</strong> sung</li>
                <li><strong>Основная форма:</strong> speak — <strong>Past Simple:</strong> spoke — <strong>Past Participle:</strong> spoken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
       if (this.level === 36) 
         return this.translate.translate(`<div class="container mt-5">
  <div class="row">
    <div class="col-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Глаголы из третьей группы (Неправильные глаголы)</h3>
        </div>
        <div class="card-body">
          <p class="lead">
            Глаголы из третьей группы (irregular verbs) не следуют стандартным правилам образования форм прошедшего времени и причастия прошедшего времени. Эти глаголы имеют уникальные формы, которые необходимо запоминать, так как их нельзя предсказать по правилам.
          </p>

          <!-- Основные характеристики -->
          <h5>Основные характеристики:</h5>
          <ul>
            <li><strong>Неизменяемый инфинитив:</strong> Например, глагол <em>read</em> сохраняет одинаковое написание во всех формах, но произношение различается:
              <ul>
                <li><strong>Present:</strong> [riːd]</li>
                <li><strong>Past:</strong> [rɛd]</li>
              </ul>
            </li>
            <li><strong>Различие форм:</strong> Формы неправильных глаголов могут быть уникальными для каждой из их временных форм. Пример:
              <ul>
                <li><strong>Base Form (инфинитив):</strong> <em>begin</em> — <strong>Past Simple:</strong> <em>began</em> — <strong>Past Participle:</strong> <em>begun</em></li>
              </ul>
            </li>
          </ul>

          <!-- Где используются -->
          <h5>Где используются:</h5>
          <p>Неправильные глаголы широко используются в английском языке и встречаются как в разговорной речи, так и в письменной. Они необходимы для правильного построения различных временных конструкций и используются в следующих случаях:</p>
          <ul>
            <li><strong>Действия в прошлом:</strong> Например, в предложении <em>"She went to the store."</em> (Она пошла в магазин), где глагол <em>went</em> является неправильной формой от <em>go</em>.</li>
            <li><strong>Перфектные времена:</strong> В предложении <em>"He has written a letter."</em> (Он написал письмо) используется форма <em>written</em> от глагола <em>write</em> для образования Present Perfect.</li>
            <li><strong>Пассивный залог:</strong> В предложении <em>"The book was written by an unknown author."</em> (Книга была написана неизвестным автором) используется форма <em>written</em> от <em>write</em>.</li>
          </ul>

          <!-- Роль в изучении -->
          <h5>Роль в изучении:</h5>
          <p>Изучение неправильных глаголов очень важно для правильного формирования предложений в английском языке, особенно в прошедшем времени и перфектных конструкциях. Они составляют значительную часть повседневной речи и письменного общения. В учебниках, таких как <em>Essential Grammar in Use</em> Рэймонда Мерфи, неправильным глаголам уделяется особое внимание, включая таблицы для заучивания.</p>

          <!-- Кнопка для примеров -->
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#examples" aria-expanded="false" aria-controls="examples">
            Пример
          </button>

          <!-- Примеры глаголов -->
          <div class="collapse mt-3" id="examples">
            <div class="card card-body">
              <ul>
                <li><strong>Base Form</strong>: begin — <strong>Past Simple</strong>: began — <strong>Past Participle</strong>: begun</li>
                <li><strong>Base Form</strong>: read — <strong>Past Simple</strong>: read — <strong>Past Participle</strong>: read</li>
                <li><strong>Base Form</strong>: go — <strong>Past Simple</strong>: went — <strong>Past Participle</strong>: gone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
      if (this.level === 35) 
        return this.translate.translate(`<div class="card border-success">
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
`);
      if (this.level === 34) 
        return this.translate.translate(`<div class="card" style="width: 100%; border: 1px solid #28a745; border-radius: 5px; background-color: #e9f7ec;">
  <div class="card-body">
    <h4 class="card-title" style="font-size: 1.2rem; margin-bottom: 10px; color: #28a745;"><strong>Past Continuous Tense</strong></h4>
    <p class="card-text" style="font-size: 1rem; color: #155724;">Past Continuous Tense описывает действия, которые происходили в определённый момент в прошлом или в течение определённого времени в прошлом. Он также используется для выражения двух действий, происходивших одновременно.</p>
    <p><strong>Формула:</strong> [Subject] + was/were + [verb+ing]</p>
    
    <h5 class="card-title" style="font-size: 1.1rem; margin-top: 15px; color: #28a745;">Примеры:</h5>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example1" aria-expanded="false" aria-controls="example1">
        Пример 1
      </button>
      <div class="collapse" id="example1">
        <p class="mt-2" style="color: #155724;">She was reading a book when I called her. (Она читала книгу, когда я позвонил ей.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example2" aria-expanded="false" aria-controls="example2">
        Пример 2
      </button>
      <div class="collapse" id="example2">
        <p class="mt-2" style="color: #155724;">They were playing football all afternoon. (Они играли в футбол весь день.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example3" aria-expanded="false" aria-controls="example3">
        Пример 3
      </button>
      <div class="collapse" id="example3">
        <p class="mt-2" style="color: #155724;">I was cooking dinner when the phone rang. (Я готовил ужин, когда зазвонил телефон.)</p>
      </div>
    </div>
    <div class="example" style="margin-bottom: 10px;">
      <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#example4" aria-expanded="false" aria-controls="example4">
        Пример 4
      </button>
      <div class="collapse" id="example4">
        <p class="mt-2" style="color: #155724;">We were talking about the movie when it started raining. (Мы говорили о фильме, когда начался дождь.)</p>
      </div>
    </div>
  </div>
</div>`);
      if (this.level === 33) 
        return this.translate.translate(`<div class="container">
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
</div>`);
       if (this.level === 32) 
         return this.translate.translate(`<div class="container mt-4">
  <h2 class="text-center mb-4">Past Simple: Негативные предложения и вопросы</h2>

  <div class="row">
    <div class="col-12">
      <p><strong>Зачем нужно время Past Simple?</strong></p>
      <p>Past Simple используется для описания действий, событий или состояний, которые происходили в прошлом. Это время указывает, что действие завершилось и больше не связано с настоящим.</p>
      <ul>
        <li>Для рассказов о прошедших событиях: <strong>I visited Paris last year.</strong></li>
        <li>Для описания привычек в прошлом: <strong>She always walked to school as a child.</strong></li>
        <li>Для упоминания однократных действий в прошлом: <strong>He broke his arm yesterday.</strong></li>
      </ul>
    </div>
  </div>

  <hr>

  <div class="row">
    <div class="col-12">
      <p><strong>Как формируются негативные предложения?</strong></p>
      <p>Чтобы сделать отрицание в Past Simple, используйте вспомогательный глагол <code>did</code> + <code>not</code> (<code>didn't</code>) перед основной формой глагола. Основной глагол используется в базовой форме (без окончания <code>-ed</code>).</p>
      <p><strong>Формула:</strong></p>
      <pre><code>Subject + did not (didn't) + verb (base form).</code></pre>
      <p>Примеры:</p>
      <ul>
        <li><strong>I didn't eat</strong> breakfast this morning.</li>
        <li><strong>She didn't go</strong> to the party last night.</li>
      </ul>
    </div>
  </div>

  <hr>

  <div class="row">
    <div class="col-12">
      <p><strong>Как формируются вопросы?</strong></p>
      <p>Вопросы в Past Simple требуют использования вспомогательного глагола <code>did</code>. Он ставится перед подлежащим, а основной глагол остаётся в базовой форме.</p>
      <p><strong>Формула:</strong></p>
      <pre><code>Did + subject + verb (base form)?</code></pre>
      <p>Примеры:</p>
      <ul>
        <li><strong>Did</strong> you <strong>watch</strong> the movie yesterday?</li>
        <li><strong>Did</strong> they <strong>finish</strong> their homework on time?</li>
      </ul>
    </div>
  </div>

  <hr>

  <div class="row">
    <div class="col-12">
      <p><strong>Когда используется отрицание и вопросы?</strong></p>
      <p>Отрицания нужны, чтобы сказать, что что-то не произошло: <strong>He didn't call me.</strong></p>
      <p>Вопросы используются, чтобы узнать, произошло ли событие или действие: <strong>Did she call you?</strong></p>
    </div>
  </div>

  <hr>

  <div class="row">
    <div class="col-12">
      <p><strong>Особенности:</strong></p>
      <ul>
        <li>В отрицаниях и вопросах основной глагол всегда остаётся в базовой форме (не добавляется <code>-ed</code> или другая форма прошедшего времени).</li>
        <li>Слова-временные указатели, такие как <strong>yesterday</strong>, <strong>last week</strong>, <strong>two years ago</strong>, помогают понять, что речь идёт о прошлом.</li>
      </ul>
      <p><strong>Пример:</strong></p>
      <ul>
        <li><strong>Утверждение:</strong> She arrived late.</li>
        <li><strong>Отрицание:</strong> She didn’t arrive late.</li>
        <li><strong>Вопрос:</strong> Did she arrive late?</li>
      </ul>
    </div>
  </div>
</div>
`);
       if (this.level === 31) 
         return this.translate.translate(`<div class="container" style="margin: 20px;">
    <div class="border border-primary rounded p-4 bg-light">
        <h3 class="text-primary text-center">Правило образования предложений в Past Simple</h3>
        
        <h5 class="text-secondary">1. Утвердительное предложение:</h5>
        <p>Для образования утвердительного предложения в Past Simple используется вторая форма глагола (глагол в прошедшем времени).</p>
        <p class="font-weight-bold">Примеры:</p>
        <ul>
            <li>I <strong>visited</strong> my grandmother last week.</li>
            <li>They <strong>played</strong> soccer yesterday.</li>
        </ul>

        <h5 class="text-secondary">2. Правила для правильных глаголов:</h5>
        <p>Правильные глаголы образуют Past Simple, добавляя окончание <strong>-ed</strong>.</p>
        
        <table class="table table-bordered mt-2">
            <thead>
                <tr class="table-primary">
                    <th>Основная форма</th>
                    <th>Правильный Past Simple</th>
                    <th>Примечание</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>walk</td>
                    <td>walked</td>
                    <td>Добавляется окончание -ed.</td>
                </tr>
                <tr>
                    <td>play</td>
                    <td>played</td>
                    <td>Добавляется окончание -ed.</td>
                </tr>
                <tr>
                    <td>try</td>
                    <td>tried</td>
                    <td>Y меняется на I перед добавлением -ed.</td>
                </tr>
                <tr>
                    <td>stop</td>
                    <td>stopped</td>
                    <td>Удваивается конечная согласная.</td>
                </tr>
                <tr>
                    <td>like</td>
                    <td>liked</td>
                    <td>Добавляется окончание -ed.</td>
                </tr>
            </tbody>
        </table>

        <h5 class="text-secondary">3. Правила для неправильных глаголов:</h5>
        <p>Неправильные глаголы имеют уникальные формы в прошедшем времени, которые нужно запомнить.</p>
        <ul>
            <li>go → <strong>went</strong></li>
            <li>have → <strong>had</strong></li>
            <li>see → <strong>saw</strong></li>
        </ul>
    </div>
</div>
`);

      if (this.level === 23) 
         return this.translate.translate(`<div class="container" style="margin-top: 20px;">
    <h1 style="text-align: center; color: #333;">Справка по глаголам "was" и "were"</h1>

    <h2 style="color: #444; margin-top: 20px;">1. Правила использования</h2>
    <p><strong>"Was"</strong> используется с местоимениями <strong>I, he, she, it</strong> (единичными подлежащими).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Пример: <em>I was at home.</em> (Я был дома)
    </p>
    <p><strong>"Were"</strong> используется с местоимениями <strong>you, we, they</strong> (множественными подлежащими).</p>
    <p style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
        Пример: <em>They were happy.</em> (Они были счастливы)
    </p>

    <h2 style="color: #444; margin-top: 20px;">2. Образование предложений</h2>
    
    <h3 style="color: #555; font-weight: bold;">Положительные утверждения (Statements)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I was tired after work. (Я был уставшим после работы)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They were in the park yesterday. (Они были в парке вчера)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Отрицательные утверждения (Negative Statements)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            I wasn’t tired after work. (Я не был уставшим после работы)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            They weren’t in the park yesterday. (Они не были в парке вчера)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Вопросительные предложения (Questions)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Was she at school? (Она была в школе?)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Were you at the party last night? (Ты был на вечеринке вчера?)
        </li>
    </ul>

    <h3 style="color: #555; font-weight: bold;">Отрицательные вопросительные предложения (Negative Questions)</h3>
    <ul style="list-style-type: none; padding-left: 0;">
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Wasn’t he at work yesterday? (Разве он не был на работе вчера?)
        </li>
        <li style="background-color: #e9f7e1; padding: 10px; border-left: 3px solid #4CAF50;">
            Weren’t they ready for the trip? (Разве они не были готовы к поездке?)
        </li>
    </ul>
</div>
`);

      if (this.level === 21) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Использование глаголов "have" и "have got"</h2>
    
    <p style="line-height: 1.6; color: #555;">
        Глаголы "have" и "have got" используются для выражения обладания, но могут различаться в формальном и неформальном использовании. Ниже представлены правила их использования.
    </p>
    
    <h3 style="color: #333;">1. Утверждения</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I have a car.<br>
        - **Have got**: I have got a car.
    </p>
    
    <h3 style="color: #333;">2. Негативные утверждения</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: I do not have a car.<br>
        - **Have got**: I have not got a car.
    </p>

    <h3 style="color: #333;">3. Вопросы</h3>
    <p style="line-height: 1.6; color: #555;">
        - **Have**: Do you have a car?<br>
        - **Have got**: Have you got a car?
    </p>

    <h3 style="color: #333;">Краткая форма "have got"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Местоимение</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Краткая форма "have got"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Краткая форма "has got"</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">I</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">I've got</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">You</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">You've got</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">He</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">He's got</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">She</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">She's got</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">It</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">It's got</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">We</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">We've got</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">They</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">They've got</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
        </tbody>
    </table>

    <h3 style="color: #333;">Краткая форма "have"</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
        <thead>
            <tr style="background-color: #e9ecef;">
                <th style="padding: 10px; border: 1px solid #dee2e6;">Местоимение</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Краткая форма "have"</th>
                <th style="padding: 10px; border: 1px solid #dee2e6;">Краткая форма "has"</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">I</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">I've</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">You</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">You've</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">He</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">He's</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">She</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">She's</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">It</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">It's</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">We</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">We've</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #dee2e6;">They</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">They've</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">N/A</td>
            </tr>
        </tbody>
    </table>

</div>
`);

      if (this.level === 19) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Простое настоящее vs. Настоящее продолженное</h2>
    
    <h3 style="color: #444;">Простое настоящее</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Определение:</strong> Настоящее простое время описывает привычные действия, общие истины или факты, которые всегда верны. Оно указывает на действия, которые происходят регулярно или являются постоянными.
    </p>
    
    <h4 style="color: #444;">Когда использовать:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>Для выражения рутины или привычек.</li>
        <li>Для указания фактов или истин.</li>
        <li>Для выражения постоянных ситуаций.</li>
    </ul>
    
    <h4 style="color: #444;">Образование:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Утвердительные предложения:</strong> <br>
        Пример: "He plays football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Отрицательные предложения:</strong> <br>
        Пример: "He does not play football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Вопросы:</strong> <br>
        Пример: "Does he play football?"
    </p>
    
    <h3 style="color: #444;">Настоящее продолженное</h3>
    <p style="line-height: 1.6; color: #555;">
        <strong>Определение:</strong> Настоящее продолженное время описывает действия, которые происходят в данный момент времени или временные ситуации.
    </p>
    
    <h4 style="color: #444;">Когда использовать:</h4>
    <ul style="line-height: 1.6; color: #555;">
        <li>Для выражения действий, происходящих прямо сейчас.</li>
        <li>Для указания временных ситуаций.</li>
        <li>Для описания будущих планов.</li>
    </ul>
    
    <h4 style="color: #444;">Образование:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Утвердительные предложения:</strong> <br>
        Пример: "He is playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Отрицательные предложения:</strong> <br>
        Пример: "He is not playing football."
    </p>
    <p style="line-height: 1.6; color: #555;">
        <strong>Вопросы:</strong> <br>
        Пример: "Is he playing football?"
    </p>
    
    <h3 style="color: #444;">Ключевые различия</h3>
    <ul style="line-height: 1.6; color: #555;">
        <li><strong>Временные рамки:</strong>
            <ul>
                <li>Простое настоящее относится к привычным действиям и общим истинам.</li>
                <li>Настоящее продолженное относится к действиям, происходящим в данный момент, или временным ситуациям.</li>
            </ul>
        </li>
        <li><strong>Форма:</strong>
            <ul>
                <li>Простое настоящее использует основную форму глагола, тогда как настоящее продолженное использует вспомогательный глагол "to be" в сочетании с основным глаголом в форме -ing.</li>
            </ul>
        </li>
        <li><strong>Использование:</strong>
            <ul>
                <li>Простое настоящее используется для описания рутин и фактов.</li>
                <li>Настоящее продолженное используется для ongoing actions и будущих планов.</li>
            </ul>
        </li>
    </ul>
    
    <h3 style="color: #444;">Таблица сравнения</h3>
    <table class="table table-bordered" style="width: 100%; border: 1px solid #ddd;">
        <thead>
            <tr style="background-color: #f2f2f2;">
                <th style="text-align: left;">Аспект</th>
                <th style="text-align: left;">Простое настоящее</th>
                <th style="text-align: left;">Настоящее продолженное</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Определение</td>
                <td>Регулярные действия, факты</td>
                <td>Действия, происходящие сейчас или временно</td>
            </tr>
            <tr>
                <td>Случаи использования</td>
                <td>Привычки, факты, постоянные ситуации</td>
                <td>Текущие действия, будущие планы</td>
            </tr>
            <tr>
                <td>Утвердительная форма</td>
                <td>Пример: "He plays football."</td>
                <td>Пример: "He is playing football."</td>
            </tr>
            <tr>
                <td>Отрицательная форма</td>
                <td>Пример: "He does not play football."</td>
                <td>Пример: "He is not playing football."</td>
            </tr>
            <tr>
                <td>Вопросы</td>
                <td>Пример: "Does he play football?"</td>
                <td>Пример: "Is he playing football?"</td>
            </tr>
        </tbody>
    </table>
    
    <p style="line-height: 1.6; color: #555;">
        Эти различия помогут понять, в каких контекстах правильно использовать каждое время как в устной, так и в письменной речи.
    </p>
</div>
`);

      if (this.level === 18) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Правило для образования вопросов в Простом настоящем времени (Present Simple)</h2>
    
    <h3 style="color: #444;">Структура вопросов:</h3>
    <p style="line-height: 1.6; color: #555;">
        Вопросы в Простом настоящем времени формируются с помощью вспомогательного глагола <strong>"do"</strong> или <strong>"does"</strong> в зависимости от подлежащего. Вспомогательный глагол ставится перед подлежащим в предложении.
    </p>

    <h4 style="color: #444;">Формула:</h4>
    <p style="line-height: 1.6; color: #555;">
        <strong>Для I, you, we, they:</strong><br>
        Do + подлежащее + основной глагол?<br>
        Пример: <strong>Do you like coffee?</strong> (Ты любишь кофе?)
    </p>

    <p style="line-height: 1.6; color: #555;">
        <strong>Для he, she, it:</strong><br>
        Does + подлежащее + основной глагол?<br>
        Пример: <strong>Does she play the piano?</strong> (Она играет на пианино?)
    </p>

    <h4 style="color: #444;">Примечания:</h4>
    <p style="line-height: 1.6; color: #555;">
        - <strong>"Do"</strong> используется с <strong>I, you, we, they</strong>.<br>
        - <strong>"Does"</strong> используется с <strong>he, she, it</strong>.<br>
        - Вопросы типа "да/нет" всегда требуют инверсии: вспомогательный глагол (do/does) идет перед подлежащим.<br>
        - Для других глаголов используется вспомогательный глагол <strong>do/does</strong>; инверсия не применяется в предложениях с другими глаголами.
    </p>

    <p style="line-height: 1.6; color: #555;">
        Эти правила помогают правильно формировать вопросы в Простом настоящем времени в различных контекстах.
    </p>
</div>
`);

      if (this.level === 17) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Простое настоящее время (Present Simple) в негативной форме</h2>
    
    <h4 style="color: #444;">Правило образования:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для образования негативных предложений в простом настоящем времени используется вспомогательный глагол <strong>"do"</strong> или <strong>"does"</strong> в сочетании с частицей <strong>"not"</strong> (сокращенно <strong>"don't"</strong> или <strong>"doesn't"</strong>).
    </p>

    <h4 style="color: #444;">Структура:</h4>
    <p style="line-height: 1.6; color: #555;">
        1. Для подлежащих <strong>I, you, we, they</strong>: <br>
        <strong>Утверждение:</strong> I work. <br>
        <strong>Отрицание:</strong> I do not work. (Я не работаю.)
    </p>
    <p style="line-height: 1.6; color: #555;">
        2. Для подлежащих <strong>he, she, it</strong>: <br>
        <strong>Утверждение:</strong> She plays. <br>
        <strong>Отрицание:</strong> She does not play. (Она не играет.)
    </p>

    <h4 style="color: #444;">Ситуации использования:</h4>
    <p style="line-height: 1.6; color: #555;">
        Простое настоящее время используется для описания:<br>
        - Регулярных действий или привычек: "I drink coffee every morning." (Я пью кофе каждое утро.)<br>
        - Фактов или общепринятых истин: "Water boils at 100 degrees Celsius." (Вода закипает при 100 градусах Цельсия.)<br>
        - Описания расписаний и программ: "The train leaves at 9 PM." (Поезд отправляется в 9 вечера.)<br>
        - Действий, происходящих в настоящее время, но не в данный момент: "He usually works late." (Он обычно работает допоздна.)
    </p>

    <p style="line-height: 1.6; color: #555;">
        Эти правила обеспечивают правильное использование простого настоящего времени в различных контекстах и формах.
    </p>
</div>
`);

      if (this.level === 16) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 20px; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="color: #333;">Простое Настоящее Время с Периодичностью</h1>

    <h2 style="color: #555;">Определение:</h2>
    <p>
        Простое настоящее время (Present Simple) используется для описания привычных действий, фактов и рутин. Оно часто включает наречия частоты, чтобы указать, как часто происходит действие.
    </p>

    <h2 style="color: #555;">Ключевые моменты:</h2>
    <ul>
        <li><strong>Наречия Частоты:</strong> Наиболее распространенные наречия частоты:</li>
        <ul>
            <li>Always (всегда)</li>
            <li>Usually (обычно)</li>
            <li>Often (часто)</li>
            <li>Sometimes (иногда)</li>
            <li>Rarely (редко)</li>
            <li>Never (никогда)</li>
        </ul>
    </ul>

    <h2 style="color: #555;">Образование:</h2>
    <h3>1. Утвердительные предложения:</h3>
    <p>
        Используйте базовую форму глагола. Например:
        <br>I always eat breakfast. — Я всегда завтракаю.
        <br>She usually goes for a walk. — Она обычно гуляет.
    </p>

    <h3>2. Отрицательные предложения:</h3>
    <p>
        Используйте вспомогательный глагол do/does + not + базовый глагол. Например:
        <br>I do not eat breakfast. — Я не завтракаю.
        <br>He does not go for a walk. — Он не гуляет.
    </p>

    <h3>3. Вопросы:</h3>
    <p>
        Сформируйте вопросы, поставив do/does перед подлежащим:
        <br>Do you always eat breakfast? — Ты всегда завтракаешь?
        <br>Does she usually go for a walk? — Она обычно гуляет?
    </p>

    <h2 style="color: #555;">Использование:</h2>
    <p>
        Когда вы используете наречия частоты, они обычно стоят перед основным глаголом, но после глагола "to be". Например:
        <br>I always play football. — Я всегда играю в футбол.
        <br>He is often late. — Он часто опаздывает.
    </p>

    <p>
        Эта структура помогает четко передать частоту действий в простом настоящем времени.
    </p>
</div>
`);

      if (this.level === 15) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Present Simple</h2>
    <p style="line-height: 1.6; color: #555;">
        Настоящее простое время (Present Simple) используется для описания регулярных действий, привычек, фактов и состояний, а также для выражения общеизвестных истин.
    </p>
    <p style="line-height: 1.6; color: #555;">
        Оно применяется для выражения действия, которое происходит постоянно или с определенной периодичностью.
    </p>

    <h3 style="color: #333;">Образование Present Simple</h3>

    <h4 style="color: #444;">Утверждения:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для положительных предложений используется основное значение глагола. Например:
        <br> - I work. (Я работаю.)
        <br> - She plays. (Она играет.)
    </p>

    <h4 style="color: #444;">Отрицательные предложения:</h4>
    <p style="line-height: 1.6; color: #555;">
        Для отрицательных предложений используется вспомогательный глагол do/does с частицей not. Например:
        <br> - I do not work. (Я не работаю.)
        <br> - He does not play. (Он не играет.)
    </p>

    <h4 style="color: #444;">Вопросы:</h4>
    <p style="line-height: 1.6; color: #555;">
        Вопросы в Present Simple образуются с помощью вспомогательного глагола do/does перед подлежащим:
        <br> - Do you work? (Ты работаешь?)
        <br> - Does she play? (Она играет?)
    </p>

    <h3 style="color: #333;">Правила использования:</h3>
    <p style="line-height: 1.6; color: #555;">
        - Do используется с I, you, we, they.
        <br> - Does используется с he, she, it.
    </p>

    <p style="line-height: 1.6; color: #555;">
        Эти правила обеспечивают правильное использование Present Simple в различных контекстах.
    </p>
</div>`);

      if (this.level === 14) 
        return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0,0,0,0.1); margin: 20px;">
    <h2 style="color: #333;">Определение настоящего продолженного времени</h2>
    <p style="line-height: 1.6; color: #555;">
        Настоящее продолженное время используется для описания действий, происходящих в данный момент, или для обозначения временных ситуаций. Оно образуется при помощи вспомогательного глагола "to be" и основного глагола с окончанием -ing.
    </p>

    <h3 style="color: #333;">Образование вопросов в настоящем продолженном времени</h3>

    <h4 style="color: #444;">Структура вопроса:</h4>
    <p style="line-height: 1.6; color: #555;">
        Вопросы в настоящем продолженном времени образуются путем вынесения вспомогательного глагола "to be" (am, is, are) на первое место перед подлежащим.
    </p>

    <h4 style="color: #444;">Формула:</h4>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + подлежащее + глагол с окончанием -ing?
    </p>

    <h4 style="color: #444;">Примеры:</h4>
    <p style="line-height: 1.6; color: #555;">
        - Are you studying English? (Ты изучаешь английский?)<br>
        - Is he playing football? (Он играет в футбол?)<br>
        - Am I making noise? (Я шумлю?)
    </p>

    <h4 style="color: #444;">Важные заметки:</h4>
    <p style="line-height: 1.6; color: #555;">
        - "Am" используется только с "I": Am I late? (Я опоздал?)<br>
        - "Is" используется с единственным числом: Is she coming? (Она приходит?)<br>
        - "Are" используется с множественным числом и с "you": Are they here? (Они здесь?)
    </p>

    <p style="line-height: 1.6; color: #555;">
        Таким образом, для образования вопросов в настоящем продолженном времени важно определить правильную форму "to be" в зависимости от подлежащего и следовать указанной формуле.
    </p>
</div>
`);

      if (this.level === 9 || this.level === 10) 
            return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Краткая форма глагола to be</h2>
    <p style="line-height: 1.6; color: #555;">
        Краткая форма глагола to be (сокращённая форма) образуется за счет соединения глагола с подлежащим (местоимением) с помощью апострофа. Вот основные правила:
    </p>
    <ul style="line-height: 1.6; color: #555;">
        <li>I am → I'm</li>
        <li>You are → You're</li>
        <li>He is → He's</li>
        <li>She is → She's</li>
        <li>It is → It's</li>
        <li>We are → We're</li>
        <li>They are → They're</li>
    </ul>
    <p style="line-height: 1.6; color: #555;">
        Сокращённая форма часто используется в разговорной речи и неформальной письменной речи.
    </p>
</div>
`);
          
      if (this.level === 11) 
            return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Вопросы с глаголом "to be" (Present/Past Simple)</h2>
    <p style="line-height: 1.6; color: #555;">
        Для образования вопросительных предложений с глаголом to be в настоящем (Present Simple) или прошедшем времени (Past Simple), глагол выносится на первое место перед подлежащим.
    </p>

    <h3 style="color: #333;">Пример 1:</h3>
    <p style="line-height: 1.6; color: #555;">
        Утверждение: You are ready.<br>
        Вопрос: Are you ready?
    </p>

    <h3 style="color: #333;">Пример 2:</h3>
    <p style="line-height: 1.6; color: #555;">
        Утверждение: He was tired.<br>
        Вопрос: Was he tired?
    </p>

    <h2 style="color: #333;">Особенности:</h2>
    <p style="line-height: 1.6; color: #555;">
        Вопросы типа да/нет всегда требуют инверсии: глагол to be (в любой форме) идёт перед подлежащим.
        Это правило не применяется в предложениях с другими глаголами (не to be), там используются вспомогательные глаголы (do, does, did).
    </p>
</div>
`);
           if (this.level === 13) 
            return this.translate.translate(`<div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); margin: 20px;">
    <h2 style="color: #333;">Образование утверждений</h2>
    <p style="line-height: 1.6; color: #555;">
        Настоящее продолженное время (Present Continuous) используется для описания действий, которые происходят в данный момент времени или временно происходят в настоящем. 
        Оно образуется при помощи глагола to be (am, is, are) и добавления окончания -ing к смысловому глаголу.
    </p>

    <h3 style="color: #333;">Формула:</h3>
    <p style="line-height: 1.6; color: #555;">
        Подлежащее + am/is/are + глагол с окончанием -ing
    </p>

    <h3 style="color: #333;">Примеры:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am working. — Я работаю. <br>
        She is reading a book. — Она читает книгу.
    </p>

    <h2 style="color: #333;">Образование вопросов</h2>
    <p style="line-height: 1.6; color: #555;">
        Для вопросов глагол to be выносится на первое место перед подлежащим.
    </p>

    <h3 style="color: #333;">Формула:</h3>
    <p style="line-height: 1.6; color: #555;">
        Am/Is/Are + подлежащее + глагол с окончанием -ing?
    </p>

    <h3 style="color: #333;">Примеры:</h3>
    <p style="line-height: 1.6; color: #555;">
        Are you working? — Ты работаешь? <br>
        Is she reading a book? — Она читает книгу?
    </p>

    <h2 style="color: #333;">Образование отрицаний</h2>
    <p style="line-height: 1.6; color: #555;">
        Отрицательная форма образуется при помощи not после формы глагола to be.
    </p>

    <h3 style="color: #333;">Формула:</h3>
    <p style="line-height: 1.6; color: #555;">
        Подлежащее + am/is/are + not + глагол с окончанием -ing
    </p>

    <h3 style="color: #333;">Примеры:</h3>
    <p style="line-height: 1.6; color: #555;">
        I am not working. — Я не работаю. <br>
        They are not sleeping. — Они не спят.
    </p>
</div>
`);

        return this.translate.translate('Просто учим слова');
    }
}

function cardThoury(thisS)
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = thisS.strLocal;
}
