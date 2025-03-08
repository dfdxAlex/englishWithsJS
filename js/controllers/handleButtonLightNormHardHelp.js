function handleHelp()
{
    const respons = document.getElementById('clicked_element');
    respons.innerText = indexQuestion()[0];
    localStorage.setItem('was_click_help','true');
}


function returnWorkArray()
{
    const nameArray = localStorage.getItem('nameArrayDb');
    const workingArray = eval(nameArray);
    return workingArray;
}

function indexQuestion()
{
    const index = localStorage.getItem('randomEl');
    return returnWorkArray()[index];
}
