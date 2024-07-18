const homeController = {
    init: function() {
        const data = homeModel.getData();
        homeView.render(data);
    }
};
