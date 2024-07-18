const homeView = {
    render: function(data) {
        document.getElementById('title').textContent = data.title;
        document.getElementById('message').textContent = data.message;
    }
};
