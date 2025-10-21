import { htmlOldQuestionsView } from '../view/htmlOldQuestionsView.js';
import indexForThoury from '../controllers/forThoury/indexForThoury.js';
import { htmlOldQuestionsModels } from '../models/htmlOldQuestionsModels.js';
import { Help } from '../view/Help.js';

export function htmlOldQuestionsCntr()
{
    document.getElementById('html_old_questions').innerHTML = htmlOldQuestionsView(htmlOldQuestionsModels());

    document.getElementById('button-help-video-2').addEventListener('click', ()=>{
        Help.viewhandleHelpToTranslate(indexForThoury.helpForGreenPoleOneRU(),"VuUKoWdyu6Y");
   });
}