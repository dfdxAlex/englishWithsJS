export class LogField
{
    constructor (logs)
    {
        this.logs = logs;
    }

    getField()
    {
        const accordionEl = `
                             <div class="accordion-item">
                               <h2 class="accordion-header" id="headingOne">
                                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   Header
                                 </button>
                               </h2>
                               <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionLog">
                                 <div class="accordion-body">
                                   Body
                                 </div>
                               </div>
                             </div>
                           `;
        const workArray = this.logs.logs;

        let rezultLocal = '<div class="accordion" id="accordionLog">';

        workArray.forEach((element, index) => {
            const headingOne = 'heading' + index;
            const collapseOne = 'collapse' + index;

            // Делаем заголовок аккордиона
            let headerAccordiona = '<span ';
            if (element.str === 'Error') headerAccordiona += 'class="log-accordion-header-error"';
            else headerAccordiona += 'class="log-accordion-header-ok"';
            headerAccordiona += '>' + element.str + '</span>&nbsp;&numero;';
            headerAccordiona += element.index + '&nbsp;';
            headerAccordiona += element.question.slice(0,15);
            headerAccordiona += '&nbsp;&nbsp;<span" class="button_return_log">&#8617;</span>'
            
            // Делаем тело аккордиона
            let bodyAccordion = 'Status:';
            if (element.str === 'Error') bodyAccordion += '<span class="log-accordion-header-error">';
            else bodyAccordion += '<span class="log-accordion-header-ok">';
            bodyAccordion += element.str + '</span>&nbsp;&numero;' + element.index + '&nbsp;';
            bodyAccordion += '<i>' + element.nameArray + '</i><br>';
            bodyAccordion += '<strong>Question:<i>' +element.question + '</i></strong><br>';
            bodyAccordion += '<strong>Answer:<i>' +element.rezult + '</i></strong><br>';

            let accordionElLocal = accordionEl;
            accordionElLocal = accordionElLocal.replace(/headingOne/g, headingOne);
            accordionElLocal = accordionElLocal.replace(/collapseOne/g, collapseOne);
            accordionElLocal = accordionElLocal.replace(/Header/, headerAccordiona);
            accordionElLocal = accordionElLocal.replace(/Body/, bodyAccordion);
            rezultLocal += accordionElLocal;
        });

        rezultLocal += `</div>`;

        return rezultLocal;
    }
}
