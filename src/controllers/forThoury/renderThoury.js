export * from '../../models/forFactoryRegistr/getTranslate.js';

export function renderThoury()
{
    document.getElementById('exercise').style.display='block';
    document.getElementById('exercise').innerHTML = this.strLocal;
    document.getElementById(this.idForButtonClosed).addEventListener('click', ()=>{
        document.getElementById('exercise').style.display='none';
    });
}