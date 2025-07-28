import { htmlOldQuestionsView } from '../view/htmlOldQuestionsView.js';
import { helpForGreenPoleOneRU } from '../view/help/helpForGreenPoleOneRU.js';
import { htmlOldQuestions } from '../models/htmlOldQuestions.js';
import { Help } from '../view/Help.js';

export function htmlOldQuestionsCntr()
{
    document.getElementById('html_old_questions').innerHTML = htmlOldQuestionsView(htmlOldQuestions());

    document.getElementById('button-help').addEventListener('click', ()=>{
        Help.viewhandleHelpToTranslate(helpForGreenPoleOneRU(),"VuUKoWdyu6Y");
   });
}