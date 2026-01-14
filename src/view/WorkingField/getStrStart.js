
// Функция возвращает начальную часть разметки, для кнопок различных уровней

export function getStrStart(flag)
{
    if (flag === 'init')
       return `<div class='row mb-2'>
                  <div class='col-11'>
                     <button class="working-field" type='button'`;

    // Если пришел флаг init, то срабатываем по условию, если любой другой флаг, то то что осталось
       return `<span>
                 <button 
                   class="init-word-assembly-str-start"
                   type='button'`;
}