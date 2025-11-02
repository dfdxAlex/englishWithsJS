

export function getStrStart(flag)
{
    if (flag === 'init')
       return `<div class='row mb-2'>
                  <div class='col-12'>
                     <button class="working-field" type='button'`;
    if (flag === 'initWordAssembly')
       return `<div>
                 <div class="button-word">
                   <button 
                     class="init-word-assembly-str-start"
                     type='button'`;
    if (flag === 'initWordAssemblyNotTranslate')
       return `<div class='row mb-2'>
                  <div class='col-12'>
                     <button 
                        class="init-word-assembly-str-start"
                        type='button'`;
}