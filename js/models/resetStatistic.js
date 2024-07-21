const resetStatistic = () => {
    localStorage.setItem('level1_Error',0);
    localStorage.setItem('level1_Ok',0);

    handleLevel1();
}
