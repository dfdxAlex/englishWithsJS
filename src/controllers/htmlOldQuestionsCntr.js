import { htmlOldQuestionsView } from '../view/htmlOldQuestionsView.js';
import indexForThoury from '../controllers/forThoury/indexForThoury.js';
import { htmlOldQuestions } from '../models/htmlOldQuestions.js';
import { Help } from '../view/Help.js';

export function htmlOldQuestionsCntr()
{
    document.getElementById('html_old_questions').innerHTML = htmlOldQuestionsView(htmlOldQuestions());

    document.getElementById('button-help').addEventListener('click', ()=>{
        Help.viewhandleHelpToTranslate(indexForThoury.helpForGreenPoleOneRU(),"VuUKoWdyu6Y");
   });
}