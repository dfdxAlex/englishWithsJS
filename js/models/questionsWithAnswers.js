const questionsWithAnswers = [
    ['Are the doors closed?', "Yes, they are.", "Yes, theyre.", "Yes, they ar.", "Yes, it is.", 'Двери закрыты?', 'Двері закриті?', 'Czy drzwi są zamknięte?'],
    ['Is the window open?', "Yes, it is.", "Yes, its.", "Yes, it open.", "Yes, it are.", 'Окно открыто?', 'Вікно відкрите?', 'Czy okno jest otwarte?'],
    ['Is the car clean?', "Yes, it is.", "Yes, its.", "Yes, it clean.", "Yes, it are.", 'Машина чистая?', 'Машина чиста?', 'Czy samochód jest czysty?'],
    ['Are the apples fresh?', "Yes, they are.", "Yes, theyre.", "Yes, they fresh.", "Yes, it is.", 'Яблоки свежие?', 'Яблука свіжі?', 'Czy jabłka są świeże?'],
    ['Is the project complete?', "Yes, it is.", "Yes, its.", "Yes, it complete.", "Yes, it are.", 'Проект завершен?', 'Проєкт завершено?', 'Czy projekt jest ukończony?'],
    ['Is the room quiet?', "Yes, it is.", "Yes, its.", "Yes, it quiet.", "Yes, it are.", 'Комната тихая?', 'Кімната тиха?', 'Czy pokój jest cichy?'],
    ['Are the chairs comfortable?', "Yes, they are.", "Yes, theyre.", "Yes, they comfortable.", "Yes, it is.", 'Стулья удобные?', 'Стільці зручні?', 'Czy krzesła są wygodne?'],
    ['Is the book interesting?', "Yes, it is.", "Yes, its.", "Yes, it interesting.", "Yes, it are.", 'Книга интересная?', 'Книга цікава?', 'Czy książka jest interesująca?'],
    ['Are the phones charged?', "Yes, they are.", "Yes, theyre.", "Yes, they charged.", "Yes, it is.", 'Телефоны заряжены?', 'Телефони заряджені?', 'Czy telefony są naładowane?'],
    ['Is the coffee hot?', "Yes, it is.", "Yes, its.", "Yes, it hot.", "Yes, it are.", 'Кофе горячий?', 'Кава гаряча?', 'Czy kawa jest gorąca?'],
    ['Are the shoes clean?', "Yes, they are.", "Yes, theyre.", "Yes, they clean.", "Yes, it is.", 'Обувь чистая?', 'Взуття чисте?', 'Czy buty są czyste?'],
    ['Is the sky clear?', "Yes, it is.", "Yes, its.", "Yes, it clear.", "Yes, it are.", 'Небо ясное?', 'Небо ясне?', 'Czy niebo jest czyste?'],
    ['Are the books new?', "Yes, they are.", "Yes, theyre.", "Yes, they new.", "Yes, it is.", 'Книги новые?', 'Книги нові?', 'Czy książki są nowe?'],
    ['Is the cat friendly?', "Yes, it is.", "Yes, its.", "Yes, it friendly.", "Yes, it are.", 'Кот дружелюбный?', 'Кіт дружелюбний?', 'Czy kot jest przyjazny?'],
    ['Are the paintings expensive?', "Yes, they are.", "Yes, theyre.", "Yes, they expensive.", "Yes, it is.", 'Картины дорогие?', 'Картини дорогі?', 'Czy obrazy są drogie?'],
    ['Is the pizza ready?', "Yes, it is.", "Yes, its.", "Yes, it ready.", "Yes, it are.", 'Пицца готова?', 'Піца готова?', 'Czy pizza jest gotowa?'],
    ['Are the lights on?', "Yes, they are.", "Yes, theyre.", "Yes, they on.", "Yes, it is.", 'Огни включены?', 'Світла включені?', 'Czy światła są włączone?'],
    ['Is the air fresh?', "Yes, it is.", "Yes, its.", "Yes, it fresh.", "Yes, it are.", 'Воздух свежий?', 'Повітря свіже?', 'Czy powietrze jest świeże?'],
    ['Are the computers on?', "Yes, they are.", "Yes, theyre.", "Yes, they on.", "Yes, it is.", 'Компьютеры включены?', 'Комп’ютери включені?', 'Czy komputery są włączone?'],
    ['Is the dog barking?', "Yes, it is.", "Yes, its.", "Yes, it barking.", "Yes, it are.", 'Собака лает?', 'Собака гавкає?', 'Czy pies szczeka?'],
    ['Are the flowers blooming?', "Yes, they are.", "Yes, theyre.", "Yes, they blooming.", "Yes, it is.", 'Цветы цветут?', 'Квіти цвітуть?', 'Czy kwiaty kwitną?'],
    ['Is the bed made?', "Yes, it is.", "Yes, its.", "Yes, it made.", "Yes, it are.", 'Кровать убрана?', 'Ліжко заправлене?', 'Czy łóżko jest posłane?'],
    ['Are the sandwiches ready?', "Yes, they are.", "Yes, theyre.", "Yes, they ready.", "Yes, it is.", 'Сэндвичи готовы?', 'Сендвічі готові?', 'Czy kanapki są gotowe?'],
    ['Is the tea hot?', "Yes, it is.", "Yes, its.", "Yes, it hot.", "Yes, it are.", 'Чай горячий?', 'Чай гарячий?', 'Czy herbata jest gorąca?'],
    ['Are the tickets available?', "Yes, they are.", "Yes, theyre.", "Yes, they available.", "Yes, it is.", 'Билеты доступны?', 'Квитки доступні?', 'Czy bilety są dostępne?'],
    ['Are the lights bright?', "Yes, they are.", "Yes, theyre.", "Yes, they bright.", "Yes, it is.", 'Огни яркие?', 'Лампи яскраві?', 'Czy światła są jasne?'],
    ['Is the soup hot?', "Yes, it is.", "Yes, its.", "Yes, it hot.", "Yes, it are.", 'Суп горячий?', 'Суп гарячий?', 'Czy zupa jest gorąca?'],
    ['Are the doors locked?', "Yes, they are.", "Yes, theyre.", "Yes, they locked.", "Yes, it is.", 'Двери заперты?', 'Двері замкнені?', 'Czy drzwi są zamknięte?'],
    ['Is the document signed?', "Yes, it is.", "Yes, its.", "Yes, it signed.", "Yes, it are.", 'Документ подписан?', 'Документ підписано?', 'Czy dokument jest podpisany?'],
    ['Are the walls painted?', "Yes, they are.", "Yes, theyre.", "Yes, they painted.", "Yes, it is.", 'Стенки окрашены?', 'Стіни пофарбовані?', 'Czy ściany są pomalowane?'],
    ['Is the fridge empty?', "Yes, it is.", "Yes, its.", "Yes, it empty.", "Yes, it are.", 'Холодильник пуст?', 'Холодильник пустий?', 'Czy lodówka jest pusta?'],
    ['Are the books on the shelf?', "Yes, they are.", "Yes, theyre.", "Yes, they on the shelf.", "Yes, it is.", 'Книги на полке?', 'Книги на полиці?', 'Czy książki są na półce?'],
    ['Is the sky clear?', "Yes, it is.", "Yes, its.", "Yes, it clear.", "Yes, it are.", 'Небо ясное?', 'Небо ясне?', 'Czy niebo jest czyste?'],
    ['Is the paint dry?', "Yes, it is.", "Yes, its.", "Yes, it dry.", "Yes, it are.", 'Краска высохла?', 'Фарба висохла?', 'Czy farba jest sucha?'],
    ['Are the windows clean?', "Yes, they are.", "Yes, theyre.", "Yes, they clean.", "Yes, it is.", 'Окна чистые?', 'Вікна чисті?', 'Czy okna są czyste?'],
    ['Is the bread fresh?', "Yes, it is.", "Yes, its.", "Yes, it fresh.", "Yes, it are.", 'Хлеб свежий?', 'Хліб свіжий?', 'Czy chleb jest świeży?'],
    ['Are the apples ripe?', "Yes, they are.", "Yes, theyre.", "Yes, they ripe.", "Yes, it is.", 'Яблоки зрелые?', 'Яблука стиглі?', 'Czy jabłka są dojrzałe?'],
    ['Is the cake delicious?', "Yes, it is.", "Yes, its.", "Yes, it delicious.", "Yes, it are.", 'Торт вкусный?', 'Торт смачний?', 'Czy ciasto jest pyszne?'],
    ['Are the gloves warm?', "Yes, they are.", "Yes, theyre.", "Yes, they warm.", "Yes, it is.", 'Перчатки теплые?', 'Рукавички теплі?', 'Czy rękawiczki są ciepłe?'],
    ['Is the dog friendly?', "Yes, it is.", "Yes, its.", "Yes, it friendly.", "Yes, it are.", 'Собака дружелюбная?', 'Собака дружелюбна?', 'Czy pies jest przyjazny?'],
    ['Are the hats stylish?', "Yes, they are.", "Yes, theyre.", "Yes, they stylish.", "Yes, it is.", 'Шляпы модные?', 'Капелюхи стильні?', 'Czy kapelusze są stylowe?'],
    ['Is the movie exciting?', "Yes, it is.", "Yes, its.", "Yes, it exciting.", "Yes, it are.", 'Фильм захватывающий?', 'Фільм захоплюючий?', 'Czy film jest ekscytujący?'],
    ['Are the keys lost?', "Yes, they are.", "Yes, theyre.", "Yes, they lost.", "Yes, it is.", 'Ключи потеряны?', 'Ключі загублені?', 'Czy klucze są zgubione?'],
    ['Is the gym busy?', "Yes, it is.", "Yes, its.", "Yes, it busy.", "Yes, it are.", 'Спортзал занят?', 'Фітнес-центр переповнений?', 'Czy siłownia jest zatłoczona?'],
    ['Are the cookies baked?', "Yes, they are.", "Yes, theyre.", "Yes, they baked.", "Yes, it is.", 'Печенье испечено?', 'Печиво спечене?', 'Czy ciasteczka są upieczone?'],
    ['Is the radio on?', "Yes, it is.", "Yes, its.", "Yes, it on.", "Yes, it are.", 'Радио включено?', 'Радіо включене?', 'Czy radio jest włączone?'],
    ['Are the screens cracked?', "Yes, they are.", "Yes, theyre.", "Yes, they cracked.", "Yes, it is.", 'Экраны треснуты?', 'Екрани тріснуті?', 'Czy ekrany są pęknięte?'],
    ['Is the painting finished?', "Yes, it is.", "Yes, its.", "Yes, it finished.", "Yes, it are.", 'Картина завершена?', 'Картина закінчена?', 'Czy obraz jest skończony?'],
    ['Are the sandwiches cold?', "Yes, they are.", "Yes, theyre.", "Yes, they cold.", "Yes, it is.", 'Сэндвичи холодные?', 'Сендвічі холодні?', 'Czy kanapki są zimne?'],
    ['Is the light dim?', "Yes, it is.", "Yes, its.", "Yes, it dim.", "Yes, it are.", 'Свет тусклый?', 'Світло тьмяне?', 'Czy światło jest przygaszone?'],
    ['Are the walls clean?', "Yes, they are.", "Yes, theyre.", "Yes, they clean.", "Yes, it is.", 'Стенки чистые?', 'Стіни чисті?', 'Czy ściany są czyste?'],
    ['Is the dinner ready?', "Yes, it is.", "Yes, its.", "Yes, it ready.", "Yes, it are.", 'Ужин готов?', 'Вечеря готова?', 'Czy obiad jest gotowy?'],
    ['Are the curtains open?', "Yes, they are.", "Yes, theyre.", "Yes, they open.", "Yes, it is.", 'Занавески открыты?', 'Штори відкриті?', 'Czy zasłony są otwarte?'],
    ['Is the sweater soft?', "Yes, it is.", "Yes, its.", "Yes, it soft.", "Yes, it are.", 'Свитер мягкий?', 'Светр м’який?', 'Czy sweter jest miękki?'],
    ['Are the plants watered?', "Yes, they are.", "Yes, theyre.", "Yes, they watered.", "Yes, it is.", 'Растения политы?', 'Рослини политі?', 'Czy rośliny są podlane?'],
    ['Is the jacket warm?', "Yes, it is.", "Yes, its.", "Yes, it warm.", "Yes, it are.", 'Куртка теплая?', 'Куртка тепла?', 'Czy kurtka jest ciepła?'],
    ['Are the lights off?', "Yes, they are.", "Yes, theyre.", "Yes, they off.", "Yes, it is.", 'Огни выключены?', 'Світло вимкнене?', 'Czy światła są wyłączone?'],
    ['Is the weather nice?', "Yes, it is.", "Yes, its.", "Yes, it nice.", "Yes, it are.", 'Погода хорошая?', 'Погода гарна?', 'Czy pogoda jest ładna?'],
    ['Are the pizzas ready?', "Yes, they are.", "Yes, theyre.", "Yes, they ready.", "Yes, it is.", 'Пиццы готовы?', 'Піци готові?', 'Czy pizze są gotowe?'],
    ['Is the car parked?', "Yes, it is.", "Yes, its.", "Yes, it parked.", "Yes, it are.", 'Машина припаркована?', 'Автомобіль припаркований?', 'Czy samochód jest zaparkowany?'],
    ['Are the reports finished?', "Yes, they are.", "Yes, theyre.", "Yes, they finished.", "Yes, it is.", 'Отчеты завершены?', 'Звіти завершені?', 'Czy raporty są zakończone?'],
    ['Is the phone off?', "Yes, it is.", "Yes, its.", "Yes, it off.", "Yes, it are.", 'Телефон выключен?', 'Телефон вимкнено?', 'Czy telefon jest wyłączony?'],
    ['Are the shirts clean?', "Yes, they are.", "Yes, theyre.", "Yes, they clean.", "Yes, it is.", 'Рубашки чистые?', 'Сорочки чисті?', 'Czy koszule są czyste?'],
    ['Is the bed comfortable?', "Yes, it is.", "Yes, its.", "Yes, it comfortable.", "Yes, it are.", 'Кровать удобная?', 'Ліжко зручне?', 'Czy łóżko jest wygodne?'],
    ['Are the windows locked?', "Yes, they are.", "Yes, theyre.", "Yes, they locked.", "Yes, it is.", 'Окна заперты?', 'Вікна замкнені?', 'Czy okna są zamknięte?'],
    ['Is the grass green?', "Yes, it is.", "Yes, its.", "Yes, it green.", "Yes, it are.", 'Трава зеленая?', 'Трава зелена?', 'Czy trawa jest zielona?'],
    ['Are the chairs new?', "Yes, they are.", "Yes, theyre.", "Yes, they new.", "Yes, it is.", 'Стулья новые?', 'Стільці нові?', 'Czy krzesła są nowe?'],
    ['Is the water cold?', "Yes, it is.", "Yes, its.", "Yes, it cold.", "Yes, it are.", 'Вода холодная?', 'Вода холодна?', 'Czy woda jest zimna?'],
    ['Are the doors open?', "Yes, they are.", "Yes, theyre.", "Yes, they open.", "Yes, it is.", 'Двери открыты?', 'Двері відкриті?', 'Czy drzwi są otwarte?'],
    ['Is the music loud?', "Yes, it is.", "Yes, its.", "Yes, it loud.", "Yes, it are.", 'Музыка громкая?', 'Музика гучна?', 'Czy muzyka jest głośna?'],
    ['Are the floors clean?', "Yes, they are.", "Yes, theyre.", "Yes, they clean.", "Yes, it is.", 'Полы чистые?', 'Підлоги чисті?', 'Czy podłogi są czyste?'],
    ['Is the coffee cold?', "Yes, it is.", "Yes, its.", "Yes, it cold.", "Yes, it are.", 'Кофе холодный?', 'Кава холодна?', 'Czy kawa jest zimna?'],
    ['Are the lights working?', "Yes, they are.", "Yes, theyre.", "Yes, they working.", "Yes, it is.", 'Огни работают?', 'Лампи працюють?', 'Czy światła działają?'],
];
