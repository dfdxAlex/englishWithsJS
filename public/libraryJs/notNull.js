// Функция избавляется от null

function notNull(arg, start=0)
{
    if (arg !== null) return arg;
    return start;
}
