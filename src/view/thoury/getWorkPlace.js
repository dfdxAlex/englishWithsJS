import '../styles/getWorkPlace.scss';

export function getWorkPlace(header, body)
{
    return `
    <div class="card shadow-lg rounded-3 get-work-place">
     <button id="button-for-get-work-place"
         type="button" class="btn-close" aria-label="Close" 
    >
     </button>
     <div class="card-body">
       <h5 class="card-title">${header}</h5>
       <p class="card-text">${body}</p>
     </div>
    </div>
    `;
}