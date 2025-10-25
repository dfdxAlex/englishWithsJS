export function returnWorkArray()
{
    const nameArray = 'window.fileDB.'+localStorage.getItem('nameArrayDb');
    const workingArray = eval(nameArray);
    return workingArray;
}