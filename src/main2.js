import { daimentInfo } from './view/daimentInfo.js';
import { htmlOldQuestionsCntr } from './controllers/htmlOldQuestionsCntr.js';
import { setBackground } from './view/styles/bodyImages/setBackground.js';
import { AppController } from './controllers/AppController.js';

daimentInfo();
htmlOldQuestionsCntr();
setBackground();
        
window.addEventListener('load', () => {
    new AppController().init();
});
