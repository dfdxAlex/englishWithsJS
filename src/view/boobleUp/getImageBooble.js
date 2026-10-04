// Запускается при ответе на тест
// удаляет картинку бонусного ящика, если она есть
// возвращает одну из картинок в зависимости от результата ответа

export function getImageBooble(diamant)
{
  
    if (diamant === '-1') {
        return '<span class="diamond">💀</span>';
    }
    
    if (diamant === '0') {
        return '<span class="diamond">🎓</span>';
    }

    return '<span class="diamond">💎</span>';
}