// Функция избавляется от null

//покрыта тестом

export function notNull(arg, start=0)
{
    if (arg !== null && arg !== undefined && !isNaN(arg)) return arg;
    return start;
}
