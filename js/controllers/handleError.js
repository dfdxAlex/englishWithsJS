const handleError = () => {
    let tic = 0;

    if (localStorage.getItem('level') === '1') {
        tic = +localStorage.getItem('level1_Error');
        localStorage.setItem('level1_Error',tic+1);
    }
    
}
