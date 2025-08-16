// временный файл с помощью

import '../styles/thouryPattern.scss';
import { ThouryDiv } from './forThouryPattern/ThouryDiv.js';
import { ThouryH2 } from './forThouryPattern/ThouryH2.js';
import { ThouryP } from './forThouryPattern/ThouryP.js';
import { ThouryUl } from './forThouryPattern/ThouryUl.js';
import { ThouryLi } from './forThouryPattern/ThouryLi.js';

export function thouryPattern()
{

    return `
    ${ThouryDiv()}
      ${ThouryH2()}Краткая форма глагола to be${ThouryH2("finish")}
        ${ThouryP("start", 1)}
            Краткая форма глагола to be (сокращённая форма) образуется за счет соединения глагола с подлежащим (местоимением) с помощью апострофа. Вот основные правила:
        ${ThouryP("finish")}
        ${ThouryUl("start")}
            ${ThouryLi("start")}I am → I'm${ThouryLi("finish")}
            ${ThouryLi("start")}You are → You're${ThouryLi("finish")}
            ${ThouryLi("start")}He is → He's${ThouryLi("finish")}
            ${ThouryLi("start")}She is → She's${ThouryLi("finish")}
            ${ThouryLi("start")}It is → It's${ThouryLi("finish")}
            ${ThouryLi("start")}We are → We're${ThouryLi("finish")}
            ${ThouryLi("start")}They are → They're${ThouryLi("finish")}
        ${ThouryUl("finish")}
        ${ThouryP("start", 1)}
            Сокращённая форма часто используется в разговорной речи и неформальной письменной речи.
        ${ThouryP("finish")}
      
    ${ThouryDiv("finish")}
`;
}
