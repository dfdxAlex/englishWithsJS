import '../../controllers/styles/thoury.scss';
// import { returnHeaderHelpForLanguage } from '../thouryNew/forThouryNew/returnHeaderHelpForLanguage.js';

// Функция возвращает нужную разметку для заголовка окна теории
// В параметре передается this, поэтому доступны ресурсы вызываемого класса.
export function getHeaderWindow(thisS) 
{  
    let rez = "";
    switch (thisS.level) {
            case 13: 
                rez = `${thisS.translate.translate('Правило для настоящего продолженного времени (Present Continuous)')}`;
                break;
            case 14: 
                rez = `${thisS.translate.translate('Образования вопросов в настоящем продолженном времени P.C.')}`;
                break;
            case 15: 
                rez = `${thisS.translate.translate('Простое настоящее P.S.')}`;
                break;
            case 16: 
                rez = `${thisS.translate.translate('Простое настоящее  P.S. плюс периодичность')}`;
                break;
            case 17: 
                rez = `${thisS.translate.translate('Простое настоящее  P.S. негативное')}`;
                break;
            case 18: 
                rez = `${thisS.translate.translate('Простое настоящее  P.S. вопросы')}`;
                break;
            case 19: 
                rez = `${thisS.translate.translate('Выбор между P.S. и настоящим продолженным P.C.')}`;
                break;
            case 21: 
                rez = `${thisS.translate.translate('Глаголы Have и Have Got')}`;
                break;
            case 23: 
                rez = `${thisS.translate.translate(`Глаголы Was и Were`)}`;
                break;
            case 31: 
                rez = `Past Simple`;
                break;
            case 32: 
                rez = `Past Simple negative and questions`;
                break;
            case 33: 
                rez = `Present Simple (He, She, It)`;
                break;
            case 34: 
                rez = `Past Continuous`;
                break;
            case 35: 
                rez = `Past Continuous or Past Simple`;
                break;
            case 37: 
                rez = `Present perfect`;
                break;           
            case 38: 
                rez = `Present perfect + (present simple or continius)`;  
                break;        
            case 39: 
                rez = `Present perfect + (for, since and ago)`;      
                break;
            case 40: 
                rez = `Present perfect or Past simple`;    
                break;   
            case 42: 
                rez = `Present simple passive, past simple passive`; 
                break;   
            case 43: 
                rez = `Present Continuous Passive, Present Perfect Passive`; 
                break;   
            default:
                rez = `${thisS.translate.translate('Просто учим слова')}`;
        }

        return '<h1 class="add-style-for-H1">' + rez + '</h1>';
    }