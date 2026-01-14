

export function getStrFinish(flag = '', id = '')
{
       if (flag === 'init')
       return `</button>
                 </div>
                 <div ${id} class="col-1"></div>
                   </div>
              `;

       return `</button>
                   </span>
              `;    
}