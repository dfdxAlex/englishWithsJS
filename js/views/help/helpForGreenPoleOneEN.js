function helpForGreenPoleOneEN()
{
    return `
        <div id='modalOverlay' style='position: fixed; top: 0; left: 0; width: 100%; height: 100%;
         background: rgba(0, 0, 0, 0.5); z-index: 9998;' onclick='document.getElementById("modalOverlay").remove(); document.getElementById("modalBox").remove();'></div>
    
        <div class = "help-for-green-pole-one" id='modalBox' style='position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; border: 1px solid #ccc; border-radius: 12px; padding: 24px;
            width: 90%; max-width: 520px; z-index: 9999;
            box-shadow: 0 6px 24px rgba(0,0,0,0.25); font-family: sans-serif;
            line-height: 1.6; color: #333;'>
    
          <h2 style='margin-top: 0; font-size: 1.5rem; color: #222;'>
            Why is the translation not always accurate?
          </h2>
    
          <p style='margin-bottom: 12px;'>
            The test data table consists of the following elements:
          </p>
    
          <ul style='padding-left: 20px; margin: 0;'>
            <li><strong>0</strong> — point (question)</li>
            <li><strong>1</strong> — correct pair to point 0</li>
            <li><strong>2</strong> — incorrect pair to point 0</li>
            <li><strong>3</strong> — incorrect pair to point 0</li>
            <li><strong>4</strong> — incorrect pair to point 0</li>
            <li><strong>5</strong> — translation of point 0 to Russian</li>
            <li><strong>6</strong> — translation of point 0 to Ukrainian</li>
            <li><strong>7</strong> — translation of point 0 to Polish</li>
          </ul>
    
          <p style='margin-top: 16px;'>
            In tests with sentence breakdowns, the sentences may come not only from the element with index <strong>0</strong>,
            but also from elements <strong>1</strong>, <strong>2</strong>, <strong>3</strong>, or <strong>4</strong>.
            Only <strong>point 0</strong> contains the <u>exact translation</u>.
          </p>
    
          <p>
            Therefore, if the task contains a sentence from an element other than 0,
            the translation will reflect only the <em>general meaning</em>, not the literal meaning.
          </p>
          <div id='video-help'></div>
          <div style='text-align: right; margin-top: 20px;'>
            <button onclick='document.getElementById("modalBox").remove(); document.getElementById("modalOverlay").remove();'
                    style='background: #007BFF; color: white; border: none;
                           padding: 10px 20px; border-radius: 6px; font-size: 1rem;
                           cursor: pointer;'>
              I Understand
            </button>
          </div>
        </div>
        `;
}
