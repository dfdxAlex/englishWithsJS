# englishWithsJS

Link for project:
https://dfdxalex.github.io/englishWithsJS/index.html

/project-root
├── /src
│   ├── /controllers
│   │   ├── userController.js
│   │   └── productController.js
│   ├── /models
│   │   ├── userModel.js
│   │   └── productModel.js
│   ├── /views
│   │   ├── userView.js
│   │   └── productView.js
│   ├── app.js
│   ├── index.js
│   └── router.js
├── /public
│   ├── index.html
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
└── README.md


### Описание файлов и папок

#### /src
Корневая папка для исходного кода JavaScript.

- **/controllers**
  Папка для контроллеров, которые обрабатывают пользовательский ввод и взаимодействие между моделями и представлениями.
  - **userController.js**
    Контроллер для управления данными пользователей. Включает функции для получения данных пользователей.
  - **productController.js**
    Контроллер для управления данными продуктов. Включает функции для получения данных продуктов.

- **/models**
  Папка для моделей данных, которые отвечают за бизнес-логику и взаимодействие с данными.
  - **userModel.js**
    Модель данных пользователей. Включает функции для получения списка пользователей.
  - **productModel.js**
    Модель данных продуктов. Включает функции для получения списка продуктов.

- **/views**
  Папка для представлений, которые отвечают за отображение данных пользователю.
  - **userView.js**
    Представление для отображения данных пользователей.
  - **productView.js**
    Представление для отображения данных продуктов.

- **app.js**
  Основной файл приложения, который инициализирует приложение и обрабатывает маршрутизацию.
  
- **index.js**
  Входной файл JavaScript, который запускает инициализацию приложения после загрузки DOM.

- **router.js**
  Файл маршрутизации, который определяет, какое представление отображать в зависимости от URL.

#### /public
Папка для статических файлов, таких как HTML, CSS и изображения.

- **index.html**
  Основной HTML-файл для вашего приложения, который загружается при посещении сайта.
  
- **styles.css**
  Файл стилей CSS для вашего приложения.

#### .gitignore
Файл конфигурации Git, который указывает, какие файлы и папки должны быть проигнорированы системой контроля версий Git.

#### index.html (в корне проекта)
Файл для переадресации на `public/index.html`, чтобы обеспечить совместимость с GitHub Pages.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="refresh" content="0; URL='public/index.html'">
    <title>Redirecting...</title>
</head>
<body>
    <p>If you are not redirected automatically, follow this <a href="public/index.html">link to the home page</a>.</p>
</body>
</html>

