import { FactoryRegistr } from '../FactoryRegistr.js';

// Функция возвращает нужную разметку для заголовка окна теории
// В параметре передается this, поэтому доступны ресурсы вызываемого класса.
export function getHeaderWindow(thisS) 
{
    let translate = FactoryRegistr.getObject("LanguageController");
    let rez = "";
    switch (thisS.level) {
            case 9:
            case 10:
                rez = `${translate.translate('Сокращенная форма глагола to Be')}</h1>`;
                break;
            case 11:
                rez = `${translate.translate('Создание вопросов в Present Simple и Past Simple')}</h1>`;
                break;
            case 13: 
                rez = `${translate.translate('Правило для настоящего продолженного времени (Present Continuous)')}</h1>`;
                break;
            case 14: 
                rez = `${translate.translate('Образования вопросов в настоящем продолженном времени P.C.')}</h1>`;
                break;
            case 15: 
                rez = `${translate.translate('Простое настоящее P.S.')}</h1>`;
                break;
            case 16: 
                rez = `${translate.translate('Простое настоящее  P.S. плюс периодичность')}</h1>`;
                break;
            case 17: 
                rez = `${translate.translate('Простое настоящее  P.S. негативное')}</h1>`;
                break;
            case 18: 
                rez = `${translate.translate('Простое настоящее  P.S. вопросы')}</h1>`;
                break;
            case 19: 
                rez = `${translate.translate('Выбор между P.S. и настоящим продолженным P.C.')}</h1>`;break;
            case 21: 
                rez = `${translate.translate('Глаголы Have и Have Got')}</h1>`;
                break;
            case 23: 
                rez = `${translate.translate(`Глаголы Was и Were`)}</h1>`;
                break;
            case 31: 
                rez = `Past Simple</h1>`;
                break;
            case 32: 
                rez = `Past Simple negative and questions</h1>`;
                break;
            case 33: 
                rez = `Present Simple (He, She, It)</h1>`;
                break;
            case 34: 
                rez = `Past Continuous</h1>`;
                break;
            case 35: 
                rez = `Past Continuous or Past Simple</h1>`;
                break;
            case 37: 
                rez = `Present perfect</h1>`;
                break;           
            case 38: 
                rez = `Present perfect + (present simple or continius)</h1>`;  
                break;        
            case 39: 
                rez = `Present perfect + (for, since and ago)</h1>`;      
                break;
            case 40: 
                rez = `Present perfect or Past simple</h1>`;    
                break;   
            case 42: 
                rez = `Present simple passive, past simple passive</h1>`; 
                break;   
            case 43: 
                rez = `Present Continuous Passive, Present Perfect Passive</h1>`; 
                break;   
            default:
                rez = `${translate.translate('Просто учим слова')}</h1>`;
        }

        let rezult = thisS.addStyleForH1 + rez;
        return rezult;
    }