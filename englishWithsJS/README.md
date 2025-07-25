# englishWithsJS

<a href="https://dfdxalex.github.io/englishWithsJS/index.html" target="_blank">Link for project:</a>


## Why Data is Stored in an Array Instead of a Database

In this project, data is stored in a local array, not in a database. This approach is designed to ensure smooth operation in environments with unstable internet and minimal server usage.

### Key Reasons:

- **Offline Functionality:** The app works without a constant internet connection, allowing users to access core features even when the network is unavailable.
  
- **Reduced Server Load:** With no database queries, the server is kept lightweight and efficient, avoiding unnecessary strain.

- **Speed and Simplicity:** Storing data in an array ensures faster access and a more responsive user experience, without the overhead of database interactions.

- **Minimal Network Usage:** The app reduces data traffic by not requiring frequent server communication, ideal for areas with limited bandwidth.

- **Data Integrity and Security:** Data remains local, minimizing the risk of network disruptions or security issues related to external databases.

This approach is ideal for applications where reliability, speed, and minimal server interaction are key priorities.


## Структура проекта

```plaintext
/project-root
├── index.html
├── css
│   └── styles.css
├── js
│   ├── app.js
│   ├── controllers
│   │   └── homeController.js
│   ├── models
│   │   └── homeModel.js
│   └── views
│       └── homeView.js
├── assets
│   └── logo.png
└── tests
    ├── controllers
    │   └── homeController.test.js
    ├── models
    │   └── homeModel.test.js
    └── views
        └── homeView.test.js
```

## Структура проекта

### Корневая папка

- **index.html**: Главная страница проекта.

### Папка `css`

- **styles.css**: Основные стили для проекта.

### Папка `js`

- **app.js**: Основной файл приложения, запускающий контроллер.
- **controllers**
  - **homeController.js**: Контроллер для домашней страницы.
- **models**
  - **homeModel.js**: Модель для получения данных домашней страницы.
- **views**
  - **homeView.js**: Представление для отображения данных домашней страницы.

### Папка `assets`

- **logo.png**: Логотип или другие статические ресурсы.

### Папка `tests`

- **controllers**
  - **homeController.test.js**: Тесты для `homeController`.
- **models**
  - **homeModel.test.js**: Тесты для `homeModel`.
- **views**
  - **homeView.test.js**: Тесты для `homeView`.


