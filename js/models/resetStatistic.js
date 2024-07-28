const resetStatistic = () => {

    if (localStorage.getItem('level') == '1') {
        localStorage.setItem('level1_Error',0);
        localStorage.setItem('level1_Ok',0);
        handleLevelX(new LevelDataModel(1));
    }

    if (localStorage.getItem('level') == '2') {
        localStorage.setItem('level2_Error',0);
        localStorage.setItem('level2_Ok',0);
        handleLevelX(new LevelDataModel(2));
    }

}
