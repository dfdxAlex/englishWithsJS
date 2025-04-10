const prContiniusPerfectPassive = [
    ["Why is the road being repaired?", "The road is being repaired because of the damage.", "The road was repaired last year.", "The road has been repaired recently.", "The road is repaired every year.", "Почему дорогу ремонтируют?", "Чому дорогу ремонтують?", "Dlaczego droga jest naprawiana?"],  
    ["Why is the house being painted?", "The house is being painted to refresh its look.", "The house was painted last summer.", "The house has been painted this week.", "The house is painted every five years.", "Почему дом красят?", "Чому будинок фарбують?", "Dlaczego dom jest malowany?"],  
    ["Why are the documents being checked?", "The documents are being checked for errors.", "The documents were checked yesterday.", "The documents have been checked already.", "The documents are checked every month.", "Почему документы проверяют?", "Чому документи перевіряють?", "Dlaczego dokumenty są sprawdzane?"],  
    ["Why is the bridge being built?", "The bridge is being built to improve traffic.", "The bridge was built last decade.", "The bridge has been built recently.", "The bridge is built when needed.", "Почему строят мост?", "Чому будують міст?", "Dlaczego most jest budowany?"],  
    ["Why is the meeting being recorded?", "The meeting is being recorded for future reference.", "The meeting was recorded last week.", "The meeting has been recorded.", "The meeting is recorded every time.", "Почему встречу записывают?", "Чому зустріч записують?", "Dlaczego spotkanie jest nagrywane?"],  
    ["Why is the street being cleaned?", "The street is being cleaned after the storm.", "The street was cleaned yesterday.", "The street has been cleaned this morning.", "The street is cleaned daily.", "Почему улицу убирают?", "Чому вулицю прибирають?", "Dlaczego ulica jest sprzątana?"],  
    ["Why are the walls being repaired?", "The walls are being repaired because they are damaged.", "The walls were repaired last month.", "The walls have been repaired recently.", "The walls are repaired when necessary.", "Почему стены ремонтируют?", "Чому стіни ремонтують?", "Dlaczego ściany są naprawiane?"],  
    ["Why is the computer being fixed?", "The computer is being fixed due to a system error.", "The computer was fixed last night.", "The computer has been fixed already.", "The computer is fixed when it breaks.", "Почему компьютер чинят?", "Чому комп'ютер ремонтують?", "Dlaczego komputer jest naprawiany?"],  
    ["Why is the road being expanded?", "The road is being expanded to reduce traffic jams.", "The road was expanded in 2015.", "The road has been expanded recently.", "The road is expanded when needed.", "Почему дорогу расширяют?", "Чому дорогу розширюють?", "Dlaczego droga jest poszerzana?"],  
    ["Why is the law being changed?", "The law is being changed due to new regulations.", "The law was changed two years ago.", "The law has been changed recently.", "The law is changed when necessary.", "Почему закон меняют?", "Чому закон змінюють?", "Dlaczego prawo jest zmieniane?"],  
    ["Why is the contract being reviewed?", "The contract is being reviewed for legal accuracy.", "The contract was reviewed last week.", "The contract has been reviewed already.", "The contract is reviewed every year.", "Почему контракт проверяют?", "Чому контракт перевіряють?", "Dlaczego umowa jest sprawdzana?"],  
    ["Why is the museum being renovated?", "The museum is being renovated to attract more visitors.", "The museum was renovated in 2018.", "The museum has been renovated recently.", "The museum is renovated every decade.", "Почему музей реставрируют?", "Чому музей реставрують?", "Dlaczego muzeum jest odnawiane?"],  
    ["Why is the garden being watered?", "The garden is being watered to keep the plants healthy.", "The garden was watered this morning.", "The garden has been watered already.", "The garden is watered daily.", "Почему сад поливают?", "Чому сад поливають?", "Dlaczego ogród jest podlewany?"],  
    ["Why is the software being updated?", "The software is being updated for better security.", "The software was updated last month.", "The software has been updated recently.", "The software is updated regularly.", "Почему обновляют программное обеспечение?", "Чому оновлюють програмне забезпечення?", "Dlaczego oprogramowanie jest aktualizowane?"],  
    ["Why is the window being replaced?", "The window is being replaced because it was broken.", "The window was replaced last week.", "The window has been replaced.", "The window is replaced when needed.", "Почему заменяют окно?", "Чому замінюють вікно?", "Dlaczego okno jest wymieniane?"],  
    ["Why is the floor being cleaned?", "The floor is being cleaned because it was dirty.", "The floor was cleaned yesterday.", "The floor has been cleaned today.", "The floor is cleaned every morning.", "Почему пол моют?", "Чому миють підлогу?", "Dlaczego podłoga jest myta?"],  
    ["Why is the wall being painted?", "The wall is being painted to refresh the look.", "The wall was painted two years ago.", "The wall has been painted recently.", "The wall is painted every few years.", "Почему стену красят?", "Чому фарбують стіну?", "Dlaczego ściana jest malowana?"],  
    ["Why is the stadium being constructed?", "The stadium is being constructed for the upcoming event.", "The stadium was constructed in 2020.", "The stadium has been constructed recently.", "The stadium is constructed when needed.", "Почему строят стадион?", "Чому будують стадіон?", "Dlaczego stadion jest budowany?"],  
    ["Why is the book being translated?", "The book is being translated for a wider audience.", "The book was translated last year.", "The book has been translated recently.", "The book is translated when needed.", "Почему переводят книгу?", "Чому перекладають книгу?", "Dlaczego książka jest tłumaczona?"],  
    ["Why is the building being demolished?", "The building is being demolished for safety reasons.", "The building was demolished in 2019.", "The building has been demolished recently.", "The building is demolished when necessary.", "Почему здание сносят?", "Чому зносять будівлю?", "Dlaczego budynek jest burzony?"],  
    ["Why is the car being tested?", "The car is being tested for safety standards.", "The car was tested last week.", "The car has been tested already.", "The car is tested every year.", "Почему тестируют машину?", "Чому тестують машину?", "Dlaczego samochód jest testowany?"],  
    ["Why is the statue being restored?", "The statue is being restored due to weather damage.", "The statue was restored in 2015.", "The statue has been restored recently.", "The statue is restored when needed.", "Почему реставрируют статую?", "Чому реставрують статую?", "Dlaczego posąg jest odnawiany?"],
    ["Have they cleaned the office?", "The office has been cleaned.", "The office was cleaned yesterday.", "The office is cleaned every morning.", "The office is being cleaned right now.", "Они убрали офис?", "Вони прибрали офіс?", "Czy biuro zostało posprzątane?"],  
    ["Has she finished the report?", "The report has been finished.", "The report was finished last night.", "The report is finished every Friday.", "The report is being finished at the moment.", "Она закончила отчет?", "Вона закінчила звіт?", "Czy raport został ukończony?"],  
    ["Have they repaired the bridge?", "The bridge has been repaired.", "The bridge was repaired last year.", "The bridge is repaired when necessary.", "The bridge is being repaired now.", "Они отремонтировали мост?", "Вони відремонтували міст?", "Czy most został naprawiony?"],  
    ["Has the manager signed the contract?", "The contract has been signed.", "The contract was signed last month.", "The contract is signed by the manager every year.", "The contract is being signed right now.", "Менеджер подписал контракт?", "Менеджер підписав контракт?", "Czy menedżer podpisał umowę?"],  
    ["Have they delivered the package?", "The package has been delivered.", "The package was delivered this morning.", "The package is delivered every week.", "The package is being delivered at the moment.", "Они доставили посылку?", "Вони доставили посилку?", "Czy paczka została dostarczona?"],  
    ["Has she cooked dinner?", "Dinner has been cooked.", "Dinner was cooked an hour ago.", "Dinner is cooked every evening.", "Dinner is being cooked right now.", "Она приготовила ужин?", "Вона приготувала вечерю?", "Czy kolacja została ugotowana?"],  
    ["Have they published the article?", "The article has been published.", "The article was published last week.", "The article is published in the newspaper monthly.", "The article is being published at the moment.", "Они опубликовали статью?", "Вони опублікували статтю?", "Czy artykuł został opublikowany?"],  
    ["Has he completed the project?", "The project has been completed.", "The project was completed in 2022.", "The project is completed every quarter.", "The project is being completed now.", "Он завершил проект?", "Він завершив проєкт?", "Czy projekt został ukończony?"],  
    ["Have they painted the house?", "The house has been painted.", "The house was painted last summer.", "The house is painted every five years.", "The house is being painted right now.", "Они покрасили дом?", "Вони пофарбували будинок?", "Czy dom został pomalowany?"],  
    ["Have they repaired the road?", "The road has been repaired.", "The road was repaired last month.", "The road is repaired when necessary.", "The road is being repaired now.", "Они отремонтировали дорогу?", "Вони відремонтували дорогу?", "Czy droga została naprawiona?"],
    ["Has he fixed the computer?", "The computer has been fixed.", "The computer was fixed last night.", "The computer is fixed when necessary.", "The computer is being fixed at the moment.", "Он починил компьютер?", "Він полагодив комп'ютер?", "Czy komputer został naprawiony?"],  
    ["Have they printed the documents?", "The documents have been printed.", "The documents were printed yesterday.", "The documents are printed for every meeting.", "The documents are being printed right now.", "Они распечатали документы?", "Вони роздрукували документи?", "Czy dokumenty zostały wydrukowane?"],  
    ["Has the book been translated?", "The book has been translated.", "The book was translated two years ago.", "The book is translated when needed.", "The book is being translated at the moment.", "Книга была переведена?", "Книгу було перекладено?", "Czy książka została przetłumaczona?"],  
    ["Has the city improved the park?", "The park has been improved.", "The park was improved last summer.", "The park is improved every few years.", "The park is being improved right now.", "Город улучшил парк?", "Місто покращило парк?", "Czy park został ulepszony?"],  
    ["Has the chef prepared the meal?", "The meal has been prepared.", "The meal was prepared an hour ago.", "The meal is prepared daily.", "The meal is being prepared now.", "Шеф-повар приготовил еду?", "Шеф-кухар приготував їжу?", "Czy posiłek został przygotowany?"],  
    ["Have they opened the new store?", "The new store has been opened.", "The new store was opened last month.", "The new store is opened every Monday.", "The new store is being opened today.", "Они открыли новый магазин?", "Вони відкрили новий магазин?", "Czy nowy sklep został otwarty?"],  
    ["Has the company launched the product?", "The product has been launched.", "The product was launched last year.", "The product is launched after testing.", "The product is being launched now.", "Компания запустила продукт?", "Компанія запустила продукт?", "Czy produkt został uruchomiony?"],  
    ["Have they decorated the hall?", "The hall has been decorated.", "The hall was decorated last night.", "The hall is decorated for every event.", "The hall is being decorated at the moment.", "Они украсили зал?", "Вони прикрасили зал?", "Czy sala została udekorowana?"],  
    ["Has the police arrested the suspect?", "The suspect has been arrested.", "The suspect was arrested this morning.", "The suspect is arrested when found.", "The suspect is being arrested now.", "Полиция арестовала подозреваемого?", "Поліція заарештувала підозрюваного?", "Czy podejrzany został aresztowany?"],  
    ["Has the manager approved the proposal?", "The proposal has been approved.", "The proposal was approved last week.", "The proposal is approved every quarter.", "The proposal is being approved right now.", "Менеджер утвердил предложение?", "Менеджер затвердив пропозицію?", "Czy propozycja została zatwierdzona?"],  
    ["Have they renovated the building?", "The building has been renovated.", "The building was renovated in 2020.", "The building is renovated every decade.", "The building is being renovated right now.", "Они отремонтировали здание?", "Вони відремонтували будівлю?", "Czy budynek został odnowiony?"],  
    ["Has the teacher checked the exams?", "The exams have been checked.", "The exams were checked last Friday.", "The exams are checked every semester.", "The exams are being checked at the moment.", "Учитель проверил экзамены?", "Вчитель перевірив іспити?", "Czy egzaminy zostały sprawdzone?"],  
    ["Has the team finished the task?", "The task has been finished.", "The task was finished yesterday.", "The task is finished at the end of the week.", "The task is being finished now.", "Команда завершила задание?", "Команда завершила завдання?", "Czy zadanie zostało ukończone?"],  
    ["Have they restored the painting?", "The painting has been restored.", "The painting was restored in 2018.", "The painting is restored when necessary.", "The painting is being restored right now.", "Они восстановили картину?", "Вони відновили картину?", "Czy obraz został odrestaurowany?"],  
    ["Has the factory produced the new model?", "The new model has been produced.", "The new model was produced last quarter.", "The new model is produced every year.", "The new model is being produced right now.", "Фабрика произвела новую модель?", "Фабрика виробила нову модель?", "Czy nowy model został wyprodukowany?"],  
    ["Have they updated the system?", "The system has been updated.", "The system was updated last month.", "The system is updated regularly.", "The system is being updated now.", "Они обновили систему?", "Вони оновили систему?", "Czy system został zaktualizowany?"],  
    ["Has the hospital admitted the patient?", "The patient has been admitted.", "The patient was admitted last night.", "The patient is admitted when needed.", "The patient is being admitted at the moment.", "Больница приняла пациента?", "Лікарня прийняла пацієнта?", "Czy pacjent został przyjęty?"],  
    ["Has the government passed the law?", "The law has been passed.", "The law was passed in 2021.", "The law is passed when necessary.", "The law is being passed now.", "Правительство приняло закон?", "Уряд прийняв закон?", "Czy ustawa została uchwalona?"],  
    ["Has the scientist discovered a new element?", "A new element has been discovered.", "A new element was discovered last decade.", "New elements are discovered rarely.", "A new element is being discovered right now.", "Ученый открыл новый элемент?", "Вчений відкрив новий елемент?", "Czy nowy pierwiastek został odkryty?"],  
    ["Has the airline canceled the flight?", "The flight has been canceled.", "The flight was canceled this morning.", "Flights are canceled due to weather conditions.", "The flight is being canceled now.", "Авиакомпания отменила рейс?", "Авіакомпанія скасувала рейс?", "Czy lot został odwołany?"],
    ["Dinner is being prepared in the kitchen.",

    "What is being prepared in the kitchen?",
  
    "What has been prepared in the kitchen?",       // другое время
    "What was being prepared in the kitchen?",      // другое время
    "Who is preparing dinner in the kitchen?",      // активный залог
  
    "Ужин готовится на кухне.",
    "Вечерю готують на кухні.",
    "Obiad jest przygotowywany w kuchni."],
    [  "The room has been cleaned thoroughly.",

        "What has been cleaned thoroughly?",
      
        "What is being cleaned thoroughly?",           // настоящее длительное в пассиве
        "What had been cleaned thoroughly before?",    // past perfect passive
        "Who cleaned the room thoroughly?",            // активный залог
      
        "Комната была тщательно убрана.",
        "Кімнату було ретельно прибрано.",
        "Pokój został dokładnie posprzątany."],
    [  "The floor is being mopped right now.",

        "What is being mopped right now?",
      
        "What has been mopped?",                       // другое время
        "What was being mopped yesterday?",            // past continuous passive
        "Who is mopping the floor right now?",         // активный залог
      
        "Пол сейчас моют.",
        "Підлогу зараз миють.",
        "Podłoga jest teraz myta."],
    [  "The groceries have been delivered.",

        "What has been delivered?",
      
        "What is being delivered?",                    // настоящее длительное
        "What had been delivered before noon?",        // past perfect passive
        "Who delivered the groceries?",                // актив
      
        "Продукты были доставлены.",
        "Продукти були доставлені.",
        "Zakupy zostały dostarczone."],
    [  "The carpet is being vacuumed at the moment.",

        "What is being vacuumed at the moment?",
      
        "What has been vacuumed?",                     // present perfect passive
        "What was being vacuumed when you arrived?",   // past continuous passive
        "Who is vacuuming the carpet at the moment?",  // актив
      
        "Ковёр сейчас пылесосят.",
        "Килим зараз пилососять.",
        "Dywan jest teraz odkurzany."],
    [  "The fridge has been repaired recently.",

        "What has been repaired recently?",
      
        "What is being repaired right now?",               // настоящее длительное
        "What had been repaired before you came?",         // past perfect
        "Who repaired the fridge recently?",               // активный залог
      
        "Холодильник недавно отремонтировали.",
        "Холодильник нещодавно відремонтували.",
        "Lodówka została niedawno naprawiona."],
    [  "The bathroom is being renovated now.",

        "What is being renovated now?",
      
        "What has been renovated recently?",               // present perfect
        "What was being renovated last week?",             // past continuous
        "Who is renovating the bathroom now?",             // актив
      
        "Ванная сейчас ремонтируется.",
        "Ванну зараз ремонтують.",
        "Łazienka jest teraz remontowana."],
    [  "The dishes have been washed already.",

        "What has been washed already?",
      
        "What is being washed now?",                       // настоящее длительное
        "What had been washed before dinner?",             // past perfect
        "Who washed the dishes already?",                  // актив
      
        "Посуда уже вымыта.",
        "Посуд уже помили.",
        "Naczynia zostały już umyte."],
    [  "The garden is being watered right now.",

        "What is being watered right now?",
      
        "What has been watered today?",                    // present perfect
        "What was being watered in the morning?",          // past continuous
        "Who is watering the garden right now?",           // актив
      
        "Сад сейчас поливают.",
        "Сад зараз поливають.",
        "Ogród jest teraz podlewany."],
    [  "The package has been sent.",

        "What has been sent?",
      
        "What is being sent right now?",                   // настоящее длительное
        "What had been sent before the weekend?",          // past perfect
        "Who sent the package?",                           // актив
      
        "Посылка была отправлена.",
        "Посилку було відправлено.",
        "Paczka została wysłana."],
    [  "The windows are being cleaned now.",

        "What is being cleaned now?",
      
        "What has been cleaned already?",               // present perfect
        "What was being cleaned yesterday?",            // past continuous
        "Who is cleaning the windows right now?",       // актив
      
        "Окна сейчас моют.",
        "Вікна зараз миють.",
        "Okna są teraz myte."],
    [  "The report has been finished by the team.",

        "What has been finished by the team?",
      
        "What is being finished by the team?",            // настоящее длительное
        "What had been finished before the meeting?",    // past perfect
        "Who finished the report?",                      // активный залог
      
        "Отчёт был завершён командой.",
        "Звіт був завершений командою.",
        "Raport został zakończony przez zespół."],
    [  "The car is being washed at the moment.",

        "What is being washed at the moment?",
      
        "What has been washed recently?",                 // present perfect
        "What was being washed when you passed by?",      // past continuous
        "Who is washing the car at the moment?",          // актив
      
        "Машину сейчас моют.",
        "Машину зараз миють.",
        "Samochód jest teraz myty."],
    [  "The keys have been found.",

        "What has been found?",
      
        "What is being found?",                           // настоящее длительное
        "What had been found earlier?",                   // past perfect
        "Who found the keys?",                            // активный залог
      
        "Ключи были найдены.",
        "Ключі були знайдені.",
        "Klucze zostały znalezione."],
    [  "The documents are being reviewed by the manager.",

        "What is being reviewed by the manager?",
      
        "What has been reviewed by the manager?",         // present perfect
        "What was being reviewed when you called?",       // past continuous
        "Who is reviewing the documents?",                // активный залог
      
        "Документы сейчас просматриваются менеджером.",
        "Документи зараз переглядаються менеджером.",
        "Dokumenty są teraz przeglądane przez menedżera."],
    [  "The email has been sent successfully.",

        "What has been sent successfully?",
      
        "What is being sent right now?",                   // настоящее длительное
        "What had been sent before you replied?",          // past perfect
        "Who sent the email successfully?",                // активный залог
      
        "Письмо было отправлено успешно.",
        "Емейл було надіслано успішно.",
        "E-mail został wysłany pomyślnie."],
    [  "The video is being edited at the moment.",

        "What is being edited at the moment?",
      
        "What has been edited already?",                   // present perfect
        "What was being edited when you checked?",         // past continuous
        "Who is editing the video at the moment?",         // активный залог
      
        "Видео сейчас редактируется.",
        "Відео зараз редагується.",
        "Wideo jest teraz edytowane."],
    [  "The documents have been printed.",

        "What has been printed?",
      
        "What is being printed right now?",                // настоящее длительное
        "What had been printed earlier?",                  // past perfect
        "Who printed the documents?",                      // активный залог
      
        "Документы были распечатаны.",
        "Документи були надруковані.",
        "Dokumenty zostały wydrukowane."],
    [  "The cake is being baked in the oven.",

        "What is being baked in the oven?",
      
        "What has been baked in the oven?",                 // present perfect
        "What was being baked when you came in?",          // past continuous
        "Who is baking the cake in the oven?",             // активный залог
      
        "Торт сейчас печётся в духовке.",
        "Торт зараз печеться в духовці.",
        "Ciasto jest teraz pieczone w piekarniku."],
    [  "The room has been decorated beautifully.",

        "What has been decorated beautifully?",
      
        "What is being decorated beautifully?",            // настоящее длительное
        "What had been decorated beautifully before the event?", // past perfect
        "Who decorated the room beautifully?",             // активный залог
      
        "Комната была красиво украшена.",
        "Кімната була красиво прикрашена.",
        "Pokój został pięknie udekorowany."],
    [  "The lecture is being given by the professor right now.",

        "What is being given by the professor right now?",
      
        "What has been given during the course?",            // present perfect
        "What was being given during the last class?",      // past continuous
        "Who is giving the lecture right now?",             // активный залог
      
        "Лекция сейчас читается профессором.",
        "Лекцію зараз читає професор.",
        "Wykład jest teraz prowadzony przez profesora."],
    [  "The homework has been completed by the student.",

        "What has been completed by the student?",
      
        "What is being completed by the student?",            // настоящее длительное
        "What had been completed by the student before the deadline?", // past perfect
        "Who completed the homework?",                         // активный залог
      
        "Домашнее задание было выполнено студентом.",
        "Домашнє завдання було виконано студентом.",
        "Praca domowa została ukończona przez studenta."],
    [  "The book is being read by the student at the moment.",

        "What is being read by the student at the moment?",
      
        "What has been read by the student recently?",       // present perfect
        "What was being read when you arrived?",              // past continuous
        "Who is reading the book at the moment?",             // активный залог
      
        "Книгу сейчас читает студент.",
        "Книгу зараз читає студент.",
        "Książka jest teraz czytana przez studenta."],
    [  "The puzzle has been completed.",

        "What has been completed?",
      
        "What is being completed?",                            // настоящее длительное
        "What had been completed before you came?",            // past perfect
        "Who completed the puzzle?",                           // активный залог
      
        "Пазл был собран.",
        "Пазл був зібраний.",
        "Układanka została ułożona."],
    [  "The hiking trail is being marked at the moment.",

        "What is being marked at the moment?",
      
        "What has been marked on the trail?",                  // present perfect
        "What was being marked when you passed by?",           // past continuous
        "Who is marking the hiking trail?",                    // активный залог
      
        "Тропа для походов сейчас маркируется.",
        "Стежка для походів зараз маркується.",
        "Szlak turystyczny jest teraz oznaczany."],
    [  "The vacation has been planned for next month.",

        "What has been planned for next month?",
      
        "What is being planned for the weekend?",              // настоящее длительное
        "What had been planned before the trip?",              // past perfect
        "Who planned the vacation for next month?",            // активный залог
      
        "Отпуск был запланирован на следующий месяц.",
        "Відпустка була запланована на наступний місяць.",
        "Urlop został zaplanowany na przyszły miesiąc."],
    [  "The concert is being organized by the local committee.",

        "What is being organized by the local committee?",
      
        "What has been organized for the concert?",            // present perfect
        "What was being organized when you called?",           // past continuous
        "Who is organizing the concert?",                      // активный залог
      
        "Концерт сейчас организуется местным комитетом.",
        "Концерт зараз організовується місцевим комітетом.",
        "Koncert jest teraz organizowany przez lokalny komitet."],
    [  "The art class has been attended by many students.",

        "What has been attended by many students?",
      
        "What is being attended by many students?",            // настоящее длительное
        "What had been attended by many students before the event?", // past perfect
        "Who attended the art class?",                         // активный залог
      
        "На уроке рисования было много студентов.",
        "На урок малювання було багато студентів.",
        "Na lekcji sztuki było wielu uczniów."],
    [  "The fishing trip is being planned right now.",

        "What is being planned right now?",
      
        "What has been planned for the trip?",                  // present perfect
        "What was being planned when you arrived?",             // past continuous
        "Who is planning the fishing trip?",                    // активный залог
      
        "Рыболовная поездка сейчас планируется.",
        "Риболовна поїздка зараз планується.",
        "Wyprawa wędkarska jest teraz planowana."],
    [  "The painting has been created by the artist.",

        "What has been created by the artist?",
      
        "What is being created by the artist?",               // настоящее длительное
        "What had been created by the artist before the exhibition?", // past perfect
        "Who created the painting?",                          // активный залог
      
        "Картина была создана художником.",
        "Картина була створена художником.",
        "Obraz został stworzony przez artystę."],
    [  "The new project is being discussed in the meeting.",

        "What is being discussed in the meeting?",
      
        "What has been discussed in the meeting so far?",      // present perfect
        "What was being discussed when you left?",             // past continuous
        "Who is discussing the new project in the meeting?",   // активный залог
      
        "Новый проект сейчас обсуждается на собрании.",
        "Новий проект зараз обговорюється на нараді.",
        "Nowy projekt jest omawiany na spotkaniu."],
    [  "The game has been played by the children.",

        "What has been played by the children?",
      
        "What is being played right now?",                    // настоящее длительное
        "What had been played before dinner?",                // past perfect
        "Who played the game?",                               // активный залог
      
        "Игра была сыграна детьми.",
        "Гра була зіграна дітьми.",
        "Gra została rozegrana przez dzieci."],
    [  "The house is being painted this week.",

        "What is being painted this week?",
      
        "What has been painted already?",                     // present perfect
        "What was being painted when you visited?",           // past continuous
        "Who is painting the house this week?",               // активный залог
      
        "Дом сейчас красят на этой неделе.",
        "Дім зараз фарбують цього тижня.",
        "Dom jest malowany w tym tygodniu."],
    [  "The workshop has been organized for next weekend.",

        "What has been organized for next weekend?",
      
        "What is being organized for the weekend?",           // настоящее длительное
        "What had been organized before you joined?",        // past perfect
        "Who organized the workshop?",                        // активный залог
      
        "Мастер-класс был организован на следующие выходные.",
        "Майстер-клас був організований на наступні вихідні.",
        "Warsztat został zorganizowany na przyszły weekend."],
    [  "The camera is being tested now.",

        "What is being tested now?",
      
        "What has been tested already?",                      // present perfect
        "What was being tested when you arrived?",            // past continuous
        "Who is testing the camera now?",                     // активный залог
      
        "Камера сейчас тестируется.",
        "Камера зараз тестується.",
        "Kamera jest teraz testowana."],
    [  "The new software has been installed on the computer.",

        "What has been installed on the computer?",
      
        "What is being installed on the computer?",            // настоящее длительное
        "What had been installed before the update?",         // past perfect
        "Who installed the new software?",                    // активный залог
      
        "Новое программное обеспечение было установлено на компьютер.",
        "Нове програмне забезпечення було встановлено на комп'ютер.",
        "Nowe oprogramowanie zostało zainstalowane na komputerze."],
];

    // Если это свойство есть, то оно попадает в заголовок теста
    prContiniusPerfectPassive.nameLeson = "is being done/has been done";

    // Свойство показывает сколько индексов содержат правильные предложения
    // Если его нет, то будет считаться, что правильные предложения 
    // только индекс 0 и 1. Если 5 - это индексы 0,1,2,3,4 с правильно
    // созданными предложениями.
    prContiniusPerfectPassive.lengthTrue = 5;

