const handleOk = () => {
    let tic = 0;

    if (localStorage.getItem('level') === '1') {
        tic = +localStorage.getItem('level1_Ok');
        localStorage.setItem('level1_Ok',tic+1);
    }
    
    handleLevel1();
}
