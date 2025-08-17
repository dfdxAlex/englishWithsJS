import '../styles/getWorkPlace.scss';

// функция возвращает разметку для окон помощи по тесту и по типу задания. 
// функция универмальная, принимает три параметра, шапку, тело и id для персонализации окна
export function getWorkPlace(body, id)
{
    return `
    <div class="card shadow-lg rounded-3 get-work-place">
     <button id="${id}"
         type="button" class="btn-close" aria-label="Close" 
    >
     </button>
     <div class="card-body">
       <p class="card-text">${body}</p>
     </div>
    </div>
    `;
}