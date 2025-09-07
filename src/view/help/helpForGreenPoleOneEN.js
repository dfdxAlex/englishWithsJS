import './styles/helpForGreenPoleOneRU.scss';

export default helpForGreenPoleOneEN;

function helpForGreenPoleOneEN()
{
    return `
        <div class = "help-for-green-pole-one" id='modalBox'>
          <h2>
            Why is the translation not always accurate?
          </h2>
          <p>
            The test data table consists of the following elements:
          </p>
          <ul>
            <li><strong>0</strong> — point (question)</li>
            <li><strong>1</strong> — correct pair to point 0</li>
            <li><strong>2</strong> — incorrect pair to point 0</li>
            <li><strong>3</strong> — incorrect pair to point 0</li>
            <li><strong>4</strong> — incorrect pair to point 0</li>
            <li><strong>5</strong> — translation of point 0 to Russian</li>
            <li><strong>6</strong> — translation of point 0 to Ukrainian</li>
            <li><strong>7</strong> — translation of point 0 to Polish</li>
          </ul>
          <p>
            In tests with sentence breakdowns, the sentences may come not only from the element with index <strong>0</strong>,
            but also from elements <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, or <strong>4</strong>.
            Only <strong>point 0</strong> contains the <u>exact translation</u>.
          </p>
          <p>
            Therefore, if the task contains a sentence from an element other than 0,
            the translation will reflect only the <em>general meaning</em>, not the literal meaning.
          </p>
          <div id='video-help'></div>
          <div>
            <button id="button-close-info-modal">
              I Understand
            </button>
          </div>
        </div>
        `;
}
