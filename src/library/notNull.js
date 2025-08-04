// Функция избавляется от null

export function notNull(arg, start=0)
{
    if (arg !== null && arg !== undefined && !isNaN(arg)) return arg;
    return start;
}
