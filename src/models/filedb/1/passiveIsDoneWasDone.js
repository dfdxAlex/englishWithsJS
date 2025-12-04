import { extendForArray } from '../extendForArray.js';

export const passiveIsDoneWasDone = [
    ["The dog chases the ball.", "The ball is chased by the dog.", "The dog is chasing the ball.", "The ball will be chased by the dog.", "The dog has chased the ball.", "Собака гоняется за мячом.", "Собака бігає за м'ячем.", "Pies goni piłkę."],
    ["She reads books.", "Books are read by her.", "She is reading a book.", "Books will be read by her.", "She had read many books.", "Она читает книги.", "Вона читає книги.", "Ona czyta książki."],
    ["They paint the house.", "The house is painted by them.", "They are painting the house.", "The house will be painted by them.", "They have been painting the house.", "Они красят дом.", "Вони фарбують будинок.", "Oni malują dom."],
    ["We clean the room.", "The room is cleaned by us.", "We are cleaning the room.", "The room will be cleaned by us.", "We had cleaned the room.", "Мы убираем комнату.", "Ми прибираємо кімнату.", "Czyścimy pokój."],
    ["He writes a letter.", "A letter is written by him.", "He is writing a letter.", "The letter was being written by him.", "He will have written the letter.", "Он пишет письмо.", "Він пише листа.", "On pisze list."],
    ["They play football.", "Football is played by them.", "They are playing football.", "Football was played by them.", "They have played football.", "Они играют в футбол.", "Вони грають у футбол.", "Oni grają w piłkę nożną."],
    ["I drink coffee.", "Coffee is drunk by me.", "I am drinking coffee.", "Coffee was being drunk by me.", "I have drunk coffee.", "Я пью кофе.", "Я п'ю каву.", "Piję kawę."],
    ["She makes a cake.", "A cake is made by her.", "She is making a cake.", "The cake is being made by her.", "She had made a cake.", "Она делает торт.", "Вона робить торт.", "Ona robi ciasto."],
    ["They build a house.", "A house is built by them.", "They are building a house.", "The house will be built by them.", "They have been building the house.", "Они строят дом.", "Вони будують будинок.", "Oni budują dom."],
    ["We open the door.", "The door is opened by us.", "We are opening the door.", "The door will be opened by us.", "We had opened the door.", "Мы открываем дверь.", "Ми відкриваємо двері.", "Otwieramy drzwi."],
    ["The teacher explains the lesson.", "The lesson is explained by the teacher.", "The teacher is explaining the lesson.", "The lesson will be explained by the teacher.", "The teacher had explained the lesson.", "Учитель объясняет урок.", "Вчитель пояснює урок.", "Nauczyciel wyjaśnia lekcję."],
    ["I sing a song.", "A song is sung by me.", "I am singing a song.", "The song was being sung by me.", "I will have sung a song.", "Я пою песню.", "Я співаю пісню.", "Śpiewam piosenkę."],
    ["They watch a movie.", "A movie is watched by them.", "They are watching a movie.", "The movie was watched by them.", "They have been watching a movie.", "Они смотрят фильм.", "Вони дивляться фільм.", "Oni oglądają film."],
    ["He eats an apple.", "An apple is eaten by him.", "He is eating an apple.", "The apple was being eaten by him.", "He had eaten an apple.", "Он ест яблоко.", "Він їсть яблуко.", "On je jabłko."],
    ["We study English.", "English is studied by us.", "We are studying English.", "English will be studied by us.", "We had studied English.", "Мы учим английский.", "Ми вивчаємо англійську.", "Studiujemy angielski."],
    ["She drives a car.", "A car is driven by her.", "She is driving a car.", "The car was being driven by her.", "She has driven a car.", "Она водит машину.", "Вона водить машину.", "Ona prowadzi samochód."],
    ["They eat lunch.", "Lunch is eaten by them.", "They are eating lunch.", "Lunch was being eaten by them.", "They have eaten lunch.", "Они едят обед.", "Вони їдять обід.", "Oni jedzą obiad."],
    ["The cat catches the mouse.", "The mouse is caught by the cat.", "The cat is catching the mouse.", "The mouse will be caught by the cat.", "The cat has been catching the mouse.", "Кошка ловит мышь.", "Кішка ловить мишу.", "Kot łapie mysz."],
    ["She teaches math.", "Math is taught by her.", "She is teaching math.", "Math will be taught by her.", "She had taught math.", "Она преподает математику.", "Вона пояснює математику.", "Ona uczy matematyki."],
    ["I write a story.", "A story is written by me.", "I am writing a story.", "The story was being written by me.", "I have written a story.", "Я пишу рассказ.", "Я пишу оповідання.", "Piszę opowiadanie."],
    ["They sing a song.", "A song is sung by them.", "They are singing a song.", "The song is being sung by them.", "They had sung a song.", "Они поют песню.", "Вони співають пісню.", "Oni śpiewają piosenkę."],
    ["We play the piano.", "The piano is played by us.", "We are playing the piano.", "The piano will be played by us.", "We had played the piano.", "Мы играем на пианино.", "Ми граємо на піаніно.", "Gramy na fortepianie."],
    ["He fixes the car.", "The car is fixed by him.", "He is fixing the car.", "The car will be fixed by him.", "He has fixed the car.", "Он чинит машину.", "Він ремонтує машину.", "On naprawia samochód."],
    ["The chef cooks the meal.", "The meal is cooked by the chef.", "The chef is cooking the meal.", "The meal will be cooked by the chef.", "The chef has cooked the meal.", "Повар готовит еду.", "Шеф-кухар готує їжу.", "Kucharz gotuje posiłek."],
    ["She reads a book.", "A book is read by her.", "She is reading a book.", "The book will be read by her.", "She had read a book.", "Она читает книгу.", "Вона читає книгу.", "Ona czyta książkę."],
    ["I clean the kitchen.", "The kitchen is cleaned by me.", "I am cleaning the kitchen.", "The kitchen was cleaned by me.", "I have cleaned the kitchen.", "Я убираю на кухне.", "Я прибираю на кухні.", "Sprzątam w kuchni."],
    ["They drink water.", "Water is drunk by them.", "They are drinking water.", "Water was being drunk by them.", "They have drunk water.", "Они пьют воду.", "Вони п'ють воду.", "Oni piją wodę."],
    ["He cuts the paper.", "The paper is cut by him.", "He is cutting the paper.", "The paper will be cut by him.", "He has cut the paper.", "Он режет бумагу.", "Він ріже папір.", "On tnie papier."],
    ["She draws a picture.", "A picture is drawn by her.", "She is drawing a picture.", "The picture will be drawn by her.", "She had drawn a picture.", "Она рисует картину.", "Вона малює картину.", "Ona rysuje obrazek."],
    ["They build a bridge.", "A bridge is built by them.", "They are building a bridge.", "The bridge was built by them.", "They have built a bridge.", "Они строят мост.", "Вони будують міст.", "Oni budują most."],
    ["I fix the computer.", "The computer is fixed by me.", "I am fixing the computer.", "The computer will be fixed by me.", "I have fixed the computer.", "Я чинил компьютер.", "Я ремонтую комп'ютер.", "Naprawiam komputer."],
    ["We paint the wall.", "The wall is painted by us.", "We are painting the wall.", "The wall will be painted by us.", "We had painted the wall.", "Мы красим стену.", "Ми фарбуємо стіну.", "Malujemy ścianę."],
    ["The baby cries.", "The baby is cried by the baby.", "The baby is crying.", "The baby will cry.", "The baby has cried.", "Ребёнок плачет.", "Дитина плаче.", "Dziecko płacze."],
    ["She talks to her friend.", "Her friend is talked to by her.", "She is talking to her friend.", "Her friend will be talked to by her.", "She has talked to her friend.", "Она разговаривает с другом.", "Вона розмовляє з другом.", "Ona rozmawia z przyjacielem."],
    ["They run in the morning.", "The morning is run in by them.", "They are running in the morning.", "The morning was run in by them.", "They have run in the morning.", "Они бегают утром.", "Вони бігають вранці.", "Oni biegają rano."],
    ["I listen to music.", "Music is listened to by me.", "I am listening to music.", "Music was listened to by me.", "I have listened to music.", "Я слушаю музыку.", "Я слухаю музику.", "Słucham muzyki."],
    ["She loves her cat.", "Her cat is loved by her.", "She is loving her cat.", "Her cat was loved by her.", "She has loved her cat.", "Она любит свою кошку.", "Вона любить свою кішку.", "Ona kocha swoją kotkę."],
    ["They make a decision.", "A decision is made by them.", "They are making a decision.", "A decision will be made by them.", "They have made a decision.", "Они принимают решение.", "Вони приймають рішення.", "Oni podejmują decyzję."],
    ["I clean the window.", "The window is cleaned by me.", "I am cleaning the window.", "The window was cleaned by me.", "I have cleaned the window.", "Я мою окно.", "Я мию вікно.", "Czyścimy okno."],
    ["He cuts the vegetables.", "The vegetables are cut by him.", "He is cutting the vegetables.", "The vegetables will be cut by him.", "He has cut the vegetables.", "Он режет овощи.", "Він ріже овочі.", "On kroi warzywa."],
    ["We play chess.", "Chess is played by us.", "We are playing chess.", "Chess will be played by us.", "We have played chess.", "Мы играем в шахматы.", "Ми граємо в шахи.", "Gramy w szachy."],
    ["They eat cake.", "Cake is eaten by them.", "They are eating cake.", "Cake will be eaten by them.", "They have eaten cake.", "Они едят торт.", "Вони їдять торт.", "Oni jedzą ciasto."],
    ["She teaches English.", "English is taught by her.", "She is teaching English.", "English will be taught by her.", "She has taught English.", "Она учит английский.", "Вона викладає англійську.", "Ona uczy angielskiego."],
    ["They build a fence.", "A fence is built by them.", "They are building a fence.", "The fence will be built by them.", "They have built a fence.", "Они строят забор.", "Вони будують паркан.", "Oni budują ogrodzenie."],
    ["I send an email.", "An email is sent by me.", "I am sending an email.", "The email was sent by me.", "I have sent an email.", "Я отправляю письмо.", "Я відправляю листа.", "Wysyłam e-mail."],
    ["He cooks dinner.", "Dinner is cooked by him.", "He is cooking dinner.", "Dinner will be cooked by him.", "He has cooked dinner.", "Он готовит ужин.", "Він готує вечерю.", "On gotuje obiad."],
    ["We play tennis.", "Tennis is played by us.", "We are playing tennis.", "Tennis was played by us.", "We have played tennis.", "Мы играем в теннис.", "Ми граємо в теніс.", "Gramy w tenisa."],
    ["I wrote a letter.", "A letter was written by me.", "I am writing a letter.", "The letter has been written by me.", "I had written a letter.", "Я написал письмо.", "Я написав листа.", "Napisałem list."],
    ["She visited the museum.", "The museum was visited by her.", "She is visiting the museum.", "The museum will be visited by her.", "She had visited the museum.", "Она посетила музей.", "Вона відвідала музей.", "Ona odwiedziła muzeum."],
    ["They cleaned the house.", "The house was cleaned by them.", "They are cleaning the house.", "The house will be cleaned by them.", "They had cleaned the house.", "Они убрали дом.", "Вони прибрали будинок.", "Oni posprzątali dom."],
    ["I watched a movie.", "A movie was watched by me.", "I am watching a movie.", "The movie will be watched by me.", "I had watched a movie.", "Я смотрел фильм.", "Я дивився фільм.", "Oglądałem film."],
    ["He fixed the car.", "The car was fixed by him.", "He is fixing the car.", "The car will be fixed by him.", "He had fixed the car.", "Он починил машину.", "Він полагодив машину.", "On naprawił samochód."],
    ["We built a house.", "A house was built by us.", "We are building a house.", "The house will be built by us.", "We had built a house.", "Мы построили дом.", "Ми побудували будинок.", "Zbudowaliśmy dom."],
    ["She cooked dinner.", "Dinner was cooked by her.", "She is cooking dinner.", "Dinner will be cooked by her.", "She had cooked dinner.", "Она готовила ужин.", "Вона готувала вечерю.", "Ona gotowała obiad."],
    ["They played football.", "Football was played by them.", "They are playing football.", "Football will be played by them.", "They had played football.", "Они играли в футбол.", "Вони грали у футбол.", "Oni grali w piłkę nożną."],
    ["I called my friend.", "My friend was called by me.", "I am calling my friend.", "My friend will be called by me.", "I had called my friend.", "Я позвонил другу.", "Я подзвонив другу.", "Zadzwoniłem do przyjaciela."],
    ["He read a book.", "A book was read by him.", "He is reading a book.", "The book will be read by him.", "He had read a book.", "Он читал книгу.", "Він читав книгу.", "On czytał książkę."],
    ["We ate lunch.", "Lunch was eaten by us.", "We are eating lunch.", "Lunch will be eaten by us.", "We had eaten lunch.", "Мы поели обед.", "Ми поїли обід.", "Zjedliśmy obiad."],
    ["They studied English.", "English was studied by them.", "They are studying English.", "English will be studied by them.", "They had studied English.", "Они учились английскому.", "Вони вивчали англійську.", "Uczyli się angielskiego."],
    ["I finished my homework.", "My homework was finished by me.", "I am finishing my homework.", "My homework will be finished by me.", "I had finished my homework.", "Я закончил домашку.", "Я закінчив домашку.", "Skończyłem pracę domową."],
    ["He opened the door.", "The door was opened by him.", "He is opening the door.", "The door will be opened by him.", "He had opened the door.", "Он открыл дверь.", "Він відчинив двері.", "On otworzył drzwi."],
    ["We painted the wall.", "The wall was painted by us.", "We are painting the wall.", "The wall will be painted by us.", "We had painted the wall.", "Мы покрасили стену.", "Ми пофарбували стіну.", "Pomalowaliśmy ścianę."],
    ["I found the keys.", "The keys were found by me.", "I am finding the keys.", "The keys will be found by me.", "I had found the keys.", "Я нашел ключи.", "Я знайшов ключі.", "Znalazłem klucze."],
    ["She helped me.", "I was helped by her.", "She is helping me.", "I will be helped by her.", "She had helped me.", "Она мне помогла.", "Вона мені допомогла.", "Ona mi pomogła."],
    ["They built a bridge.", "A bridge was built by them.", "They are building a bridge.", "The bridge will be built by them.", "They had built a bridge.", "Они построили мост.", "Вони побудували міст.", "Zbudowali most."],
    ["He answered the question.", "The question was answered by him.", "He is answering the question.", "The question will be answered by him.", "He had answered the question.", "Он ответил на вопрос.", "Він відповів на питання.", "On odpowiedział na pytanie."],
    ["We read the article.", "The article was read by us.", "We are reading the article.", "The article will be read by us.", "We had read the article.", "Мы прочитали статью.", "Ми прочитали статтю.", "Przeczytaliśmy artykuł."],
    ["I closed the window.", "The window was closed by me.", "I am closing the window.", "The window will be closed by me.", "I had closed the window.", "Я закрыл окно.", "Я закрив вікно.", "Zamknąłem okno."],
    ["He walked to the park.", "The park was walked to by him.", "He is walking to the park.", "The park will be walked to by him.", "He had walked to the park.", "Он шел в парк.", "Він йшов у парк.", "On szedł do parku."],
    ["They sold the house.", "The house was sold by them.", "They are selling the house.", "The house will be sold by them.", "They had sold the house.", "Они продали дом.", "Вони продали будинок.", "Sprzedali dom."],
    ["I took the bus.", "The bus was taken by me.", "I am taking the bus.", "The bus will be taken by me.", "I had taken the bus.", "Я поехал на автобусе.", "Я поїхав автобусом.", "Pojechałem autobusem."],
    ["She bought a gift.", "A gift was bought by her.", "She is buying a gift.", "A gift will be bought by her.", "She had bought a gift.", "Она купила подарок.", "Вона купила подарунок.", "Kupiła prezent."],
    ["We met them yesterday.", "They were met by us yesterday.", "We are meeting them today.", "They will be met by us tomorrow.", "We had met them yesterday.", "Мы встретили их вчера.", "Ми зустріли їх учора.", "Spotkaliśmy ich wczoraj."],
    ["I traveled to Paris.", "Paris was traveled to by me.", "I am traveling to Paris.", "Paris will be traveled to by me.", "I had traveled to Paris.", "Я поехал в Париж.", "Я поїхав до Парижа.", "Pojechałem do Paryża."],
    ["He wrote a book.", "A book was written by him.", "He is writing a book.", "The book will be written by him.", "He had written a book.", "Он написал книгу.", "Він написав книгу.", "Napisał książkę."],
    ["They repaired the car.", "The car was repaired by them.", "They are repairing the car.", "The car will be repaired by them.", "They had repaired the car.", "Они починили машину.", "Вони відремонтували машину.", "Naprawili samochód."],
    ["We went to the cinema.", "The cinema was gone to by us.", "We are going to the cinema.", "The cinema will be gone to by us.", "We had gone to the cinema.", "Мы пошли в кино.", "Ми пішли в кіно.", "Poszliśmy do kina."],
    ["I lost my wallet.", "My wallet was lost by me.", "I am losing my wallet.", "My wallet will be lost by me.", "I had lost my wallet.", "Я потерял кошелек.", "Я втратив гаманець.", "Zgubiłem portfel."],
    ["They painted the fence.", "The fence was painted by them.", "They are painting the fence.", "The fence will be painted by them.", "They had painted the fence.", "Они покрасили забор.", "Вони пофарбували паркан.", "Pomalowali ogrodzenie."],
    ["She studied at the university.", "The university was studied at by her.", "She is studying at the university.", "The university will be studied at by her.", "She had studied at the university.", "Она училась в университете.", "Вона навчалася в університеті.", "Ona studiowała na uniwersytecie."],
    ["I walked to the store.", "The store was walked to by me.", "I am walking to the store.", "The store will be walked to by me.", "I had walked to the store.", "Я пошел в магазин.", "Я пішов до магазину.", "Poszedłem do sklepu."],
    ["He sang a song.", "A song was sung by him.", "He is singing a song.", "A song will be sung by him.", "He had sung a song.", "Он спел песню.", "Він співав пісню.", "On zaśpiewał piosenkę."],
    ["We cleaned the yard.", "The yard was cleaned by us.", "We are cleaning the yard.", "The yard will be cleaned by us.", "We had cleaned the yard.", "Мы убрали во дворе.", "Ми прибрали на подвір'ї.", "Posprzątaliśmy podwórko."],
    ["I wrote an email.", "An email was written by me.", "I am writing an email.", "An email will be written by me.", "I had written an email.", "Я написал электронное письмо.", "Я написав електронного листа.", "Napisałem e-mail."],
    ["She drank water.", "Water was drunk by her.", "She is drinking water.", "Water will be drunk by her.", "She had drunk water.", "Она пила воду.", "Вона пила воду.", "Piła wodę."],
    ["They gave me a gift.", "I was given a gift by them.", "They are giving me a gift.", "I will be given a gift by them.", "They had given me a gift.", "Они дали мне подарок.", "Вони дали мені подарунок.", "Dali mi prezent."],
    ["He ran a marathon.", "A marathon was run by him.", "He is running a marathon.", "A marathon will be run by him.", "He had run a marathon.", "Он пробежал марафон.", "Він пробіг марафон.", "Biegł w maratonie."],
    [
      "She does not eat apples.",
      "Apples are not eaten by her.",
      "She did not eat apples.",
      "She will not eat apples.",
      "She is not eating apples.",
      "Она не ест яблоки.",
      "Вона не їсть яблука.",
      "Ona nie je jabłek."
    ],
    [
      "He does not watch TV.",
      "TV is not watched by him.",
      "He did not watch TV.",
      "He will not watch TV.",
      "He is not watching TV.",
      "Он не смотрит телевизор.",
      "Він не дивиться телевізор.",
      "On nie ogląda telewizji."
    ],
    [
      "They do not play football.",
      "Football is not played by them.",
      "They did not play football.",
      "They will not play football.",
      "They are not playing football.",
      "Они не играют в футбол.",
      "Вони не грають у футбол.",
      "Oni nie grają w piłkę nożną."
    ],
    [
      "She does not like coffee.",
      "Coffee is not liked by her.",
      "She did not like coffee.",
      "She will not like coffee.",
      "She is not liking coffee.",
      "Она не любит кофе.",
      "Вона не любить каву.",
      "Ona nie lubi kawy."
    ],
    [
      "We do not read books.",
      "Books are not read by us.",
      "We did not read books.",
      "We will not read books.",
      "We are not reading books.",
      "Мы не читаем книги.",
      "Ми не читаємо книги.",
      "My nie czytamy książek."
    ],
    [
      "You do not write letters.",
      "Letters are not written by you.",
      "You did not write letters.",
      "You will not write letters.",
      "You are not writing letters.",
      "Ты не пишешь письма.",
      "Ти не пишеш листи.",
      "Ty nie piszesz listów."
    ],
    [
      "She does not drive a car.",
      "A car is not driven by her.",
      "She did not drive a car.",
      "She will not drive a car.",
      "She is not driving a car.",
      "Она не водит машину.",
      "Вона не водить машину.",
      "Ona nie prowadzi samochodu."
    ],
    [
      "They do not cook dinner.",
      "Dinner is not cooked by them.",
      "They did not cook dinner.",
      "They will not cook dinner.",
      "They are not cooking dinner.",
      "Они не готовят ужин.",
      "Вони не готують вечерю.",
      "Oni nie gotują kolacji."
    ],
    [
      "He does not open the window.",
      "The window is not opened by him.",
      "He did not open the window.",
      "He will not open the window.",
      "He is not opening the window.",
      "Он не открывает окно.",
      "Він не відкриває вікно.",
      "On nie otwiera okna."
    ],
    [
      "We do not clean the house.",
      "The house is not cleaned by us.",
      "We did not clean the house.",
      "We will not clean the house.",
      "We are not cleaning the house.",
      "Мы не убираем дом.",
      "Ми не прибираємо будинок.",
      "My nie sprzątamy domu."
    ],
    [
      "She does not sing songs.",
      "Songs are not sung by her.",
      "She did not sing songs.",
      "She will not sing songs.",
      "She is not singing songs.",
      "Она не поёт песни.",
      "Вона не співає пісень.",
      "Ona nie śpiewa piosenek."
    ],
    [
      "He does not fix cars.",
      "Cars are not fixed by him.",
      "He did not fix cars.",
      "He will not fix cars.",
      "He is not fixing cars.",
      "Он не чинит машины.",
      "Він не ремонтує машини.",
      "On nie naprawia samochodów."
    ],

        // 0 - негативное предложение в Present Simple (активный залог)
        ["I don't like coffee.", 
     
          // 1 - тот же вопрос в Past Simple (пассивный залог)
          "Coffee was not liked by me.", 
          
          // 2 - тот же вопрос в Future Simple (активный залог)
          "I won't like coffee tomorrow.", 
          
          // 3 - тот же вопрос в Present Continuous (активный залог)
          "I am not liking coffee right now.", 
          
          // 4 - тот же вопрос в Past Simple (активный залог)
          "I didn't like coffee yesterday.", 
          
          // 5 - перевод на русский
          "Я не люблю кофе.", 
          
          // 6 - перевод на украинский
          "Я не люблю каву.", 
          
          // 7 - перевод на польский
          "Nie lubię kawy."],
      
          // 8 - негативное предложение в Present Simple (активный залог)
          ["She doesn't play the piano.", 
          
          // 9 - тот же вопрос в Past Simple (пассивный залог)
          "The piano was not played by her.", 
          
          // 10 - тот же вопрос в Future Simple (активный залог)
          "She won't play the piano tomorrow.", 
          
          // 11 - тот же вопрос в Present Continuous (активный залог)
          "She is not playing the piano right now.", 
          
          // 12 - тот же вопрос в Past Simple (активный залог)
          "She didn't play the piano yesterday.", 
          
          // 13 - перевод на русский
          "Она не играет на пианино.", 
          
          // 14 - перевод на украинский
          "Вона не грає на піаніно.", 
          
          // 15 - перевод на польский
          "Ona nie gra na fortepianie."],
      
          // 16 - негативное предложение в Present Simple (активный залог)
          ["They don't understand the lesson.", 
          
          // 17 - тот же вопрос в Past Simple (пассивный залог)
          "The lesson was not understood by them.", 
          
          // 18 - тот же вопрос в Future Simple (активный залог)
          "They won't understand the lesson tomorrow.", 
          
          // 19 - тот же вопрос в Present Continuous (активный залог)
          "They are not understanding the lesson right now.", 
          
          // 20 - тот же вопрос в Past Simple (активный залог)
          "They didn't understand the lesson yesterday.", 
          
          // 21 - перевод на русский
          "Они не понимают урок.", 
          
          // 22 - перевод на украинский
          "Вони не розуміють урок.", 
          
          // 23 - перевод на польский
          "Oni nie rozumieją lekcji."],
      
          // 24 - негативное предложение в Present Simple (активный залог)
          ["I don't eat vegetables.", 
          
          // 25 - тот же вопрос в Past Simple (пассивный залог)
          "Vegetables were not eaten by me.", 
          
          // 26 - тот же вопрос в Future Simple (активный залог)
          "I won't eat vegetables tomorrow.", 
          
          // 27 - тот же вопрос в Present Continuous (активный залог)
          "I am not eating vegetables right now.", 
          
          // 28 - тот же вопрос в Past Simple (активный залог)
          "I didn't eat vegetables yesterday.", 
          
          // 29 - перевод на русский
          "Я не ем овощи.", 
          
          // 30 - перевод на украинский
          "Я не їм овочі.", 
          
          // 31 - перевод на польский
          "Nie jem warzyw."],
      
          // 32 - негативное предложение в Present Simple (активный залог)
          ["He doesn't read books.", 
          
          // 33 - тот же вопрос в Past Simple (пассивный залог)
          "Books were not read by him.", 
          
          // 34 - тот же вопрос в Future Simple (активный залог)
          "He won't read books tomorrow.", 
          
          // 35 - тот же вопрос в Present Continuous (активный залог)
          "He is not reading books right now.", 
          
          // 36 - тот же вопрос в Past Simple (активный залог)
          "He didn't read books yesterday.", 
          
          // 37 - перевод на русский
          "Он не читает книги.", 
          
          // 38 - перевод на украинский
          "Він не читає книжки.", 
          
          // 39 - перевод на польский
          "On nie czyta książek."],
      
          // 40 - негативное предложение в Present Simple (активный залог)
          ["We don't travel abroad.", 
          
          // 41 - тот же вопрос в Past Simple (пассивный залог)
          "Travels abroad were not made by us.", 
          
          // 42 - тот же вопрос в Future Simple (активный залог)
          "We won't travel abroad next year.", 
          
          // 43 - тот же вопрос в Present Continuous (активный залог)
          "We are not traveling abroad right now.", 
          
          // 44 - тот же вопрос в Past Simple (активный залог)
          "We didn't travel abroad last year.", 
          
          // 45 - перевод на русский
          "Мы не путешествуем за границу.", 
          
          // 46 - перевод на украинский
          "Ми не подорожуємо за кордон.", 
          
          // 47 - перевод на польский
          "Nie podróżujemy za granicę."],
      
          // 48 - негативное предложение в Present Simple (активный залог)
          ["I don't eat breakfast.", 
          
          // 49 - тот же вопрос в Past Simple (пассивный залог)
          "Breakfast was not eaten by me.", 
          
          // 50 - тот же вопрос в Future Simple (активный залог)
          "I won't eat breakfast tomorrow.", 
          
          // 51 - тот же вопрос в Present Continuous (активный залог)
          "I am not eating breakfast right now.", 
          
          // 52 - тот же вопрос в Past Simple (активный залог)
          "I didn't eat breakfast yesterday.", 
          
          // 53 - перевод на русский
          "Я не ем завтрак.", 
          
          // 54 - перевод на украинский
          "Я не їм сніданок.", 
          
          // 55 - перевод на польский
          "Nie jem śniadania."],

          ["Is the report written by the team every week?", "Yes, the report is written by the team every week.", "Yes, the team writes the report every week.", "Yes, the report was written by the team last week.", "Yes, the team wrote the report last week.", "Отчёт пишется командой каждую неделю?", "Чи звіт пишеться командою кожного тижня?", "Czy raport jest pisany przez zespół co tydzień?"],
          ["Is the task completed on time?", "Yes, the task is completed on time.", "Yes, the team completes the task on time.", "Yes, the task was completed on time last week.", "Yes, the team completed the task on time last week.", "Задача выполняется вовремя?", "Чи завдання виконується вчасно?", "Czy zadanie jest ukończone na czas?"],
          ["Is the email sent to the client?", "Yes, the email is sent to the client.", "Yes, the team sends the email to the client.", "Yes, the email was sent to the client yesterday.", "Yes, the team sent the email to the client yesterday.", "Письмо отправляется клиенту?", "Чи лист надсилається клієнту?", "Czy email jest wysyłany do klienta?"],
          ["Is the document reviewed before submission?", "Yes, the document is reviewed before submission.", "Yes, the team reviews the document before submission.", "Yes, the document was reviewed before submission last time.", "Yes, the team reviewed the document before submission last time.", "Документ проверяется перед отправкой?", "Чи документ перевіряється перед поданням?", "Czy dokument jest sprawdzany przed złożeniem?"],
          ["Is the website updated regularly?", "Yes, the website is updated regularly.", "Yes, the team updates the website regularly.", "Yes, the website was updated last month.", "Yes, the team updated the website last month.", "Сайт обновляется регулярно?", "Чи сайт оновлюється регулярно?", "Czy strona internetowa jest regularnie aktualizowana?"],
          ["Is the software tested before release?", "Yes, the software is tested before release.", "Yes, the team tests the software before release.", "Yes, the software was tested before the last release.", "Yes, the team tested the software before the last release.", "Программное обеспечение тестируется перед релизом?", "Чи програмне забезпечення тестується перед випуском?", "Czy oprogramowanie jest testowane przed wydaniem?"],
          ["Is the meeting scheduled for tomorrow?", "Yes, the meeting is scheduled for tomorrow.", "Yes, the team schedules the meeting for tomorrow.", "Yes, the meeting was scheduled for yesterday.", "Yes, the team scheduled the meeting for yesterday.", "Встреча назначена на завтра?", "Чи зустріч запланована на завтра?", "Czy spotkanie jest zaplanowane na jutro?"],
          ["Is the report submitted on time?", "Yes, the report is submitted on time.", "Yes, the team submits the report on time.", "Yes, the report was submitted on time last week.", "Yes, the team submitted the report on time last week.", "Отчёт подается вовремя?", "Чи звіт подається вчасно?", "Czy raport jest składany na czas?"],
          ["Is the presentation prepared for the client?", "Yes, the presentation is prepared for the client.", "Yes, the team prepares the presentation for the client.", "Yes, the presentation was prepared for the client last month.", "Yes, the team prepared the presentation for the client last month.", "Презентация подготовлена для клиента?", "Чи презентація підготовлена для клієнта?", "Czy prezentacja jest przygotowana dla klienta?"],
          ["Is the task assigned to someone?", "Yes, the task is assigned to someone.", "Yes, the manager assigns the task to someone.", "Yes, the task was assigned to someone last week.", "Yes, the manager assigned the task to someone last week.", "Задача назначена кому-то?", "Чи завдання призначено комусь?", "Czy zadanie zostało przypisane do kogoś?"],
          ["Is the issue resolved?", "Yes, the issue is resolved.", "Yes, the team resolves the issue.", "Yes, the issue was resolved last week.", "Yes, the team resolved the issue last week.", "Проблема решена?", "Чи проблема вирішена?", "Czy problem został rozwiązany?"],
          ["Is the feedback provided to the team?", "Yes, the feedback is provided to the team.", "Yes, the manager provides feedback to the team.", "Yes, the feedback was provided to the team last time.", "Yes, the manager provided feedback to the team last time.", "Обратная связь предоставлена команде?", "Чи зворотний зв'язок надано команді?", "Czy feedback został przekazany zespołowi?"],
          ["Is the system maintained regularly?", "Yes, the system is maintained regularly.", "Yes, the team maintains the system regularly.", "Yes, the system was maintained last month.", "Yes, the team maintained the system last month.", "Система обслуживается регулярно?", "Чи система обслуговується регулярно?", "Czy system jest regularnie utrzymywany?"],
          ["Is the new software feature tested?", "Yes, the new software feature is tested.", "Yes, the team tests the new software feature.", "Yes, the new software feature was tested last week.", "Yes, the team tested the new software feature last week.", "Новая функция программного обеспечения протестирована?", "Чи нову функцію програмного забезпечення протестовано?", "Czy nowa funkcja oprogramowania jest testowana?"],
          ["Is the task completed by the deadline?", "Yes, the task is completed by the deadline.", "Yes, the team completes the task by the deadline.", "Yes, the task was completed by the deadline last time.", "Yes, the team completed the task by the deadline last time.", "Задача выполнена к сроку?", "Чи завдання виконано вчасно?", "Czy zadanie zostało ukończone w terminie?"],
          ["Is the code reviewed before merge?", "Yes, the code is reviewed before merge.", "Yes, the team reviews the code before merging.", "Yes, the code was reviewed before the last merge.", "Yes, the team reviewed the code before the last merge.", "Код проверяется перед слиянием?", "Чи код перевіряється перед злиттям?", "Czy kod jest przeglądany przed połączeniem?"],
          ["Is the task prioritized?", "Yes, the task is prioritized.", "Yes, the manager prioritizes the task.", "Yes, the task was prioritized last week.", "Yes, the manager prioritized the task last week.", "Задача приоритизирована?", "Чи завдання пріоритезовано?", "Czy zadanie jest priorytetowane?"],
          ["Is the document signed by the manager?", "Yes, the document is signed by the manager.", "Yes, the manager signs the document.", "Yes, the document was signed by the manager yesterday.", "Yes, the manager signed the document yesterday.", "Документ подписан менеджером?", "Чи документ підписаний менеджером?", "Czy dokument jest podpisany przez menedżera?"],
          ["Is the system updated regularly?", "Yes, the system is updated regularly.", "Yes, the team updates the system regularly.", "Yes, the system was updated last month.", "Yes, the team updated the system last month.", "Система обновляется регулярно?", "Чи система оновлюється регулярно?", "Czy system jest regularnie aktualizowany?"],
          ["Is the software compatible with the platform?", "Yes, the software is compatible with the platform.", "Yes, the team ensures the software is compatible with the platform.", "Yes, the software was compatible with the platform last time.", "Yes, the team ensured the software was compatible with the platform last time.", "Программное обеспечение совместимо с платформой?", "Чи програмне забезпечення сумісне з платформою?", "Czy oprogramowanie jest kompatybilne z platformą?"],
          ["Is the product delivered on time?", "Yes, the product is delivered on time.", "Yes, the team delivers the product on time.", "Yes, the product was delivered on time last week.", "Yes, the team delivered the product on time last week.", "Продукт доставлен вовремя?", "Чи продукт доставлений вчасно?", "Czy produkt jest dostarczany na czas?"],
          ["Is the feedback reviewed by the team?", "Yes, the feedback is reviewed by the team.", "Yes, the manager reviews the feedback with the team.", "Yes, the feedback was reviewed by the team last time.", "Yes, the manager reviewed the feedback with the team last time.", "Обратная связь проверяется командой?", "Чи зворотний зв'язок перевіряється командою?", "Czy feedback jest przeglądany przez zespół?"],
          ["Is the new design approved by the client?", "Yes, the new design is approved by the client.", "Yes, the client approves the new design.", "Yes, the new design was approved by the client last week.", "Yes, the client approved the new design last week.", "Новый дизайн одобрен клиентом?", "Чи новий дизайн схвалений клієнтом?", "Czy nowy projekt jest zatwierdzony przez klienta?"],
          ["Is the issue escalated to management?", "Yes, the issue is escalated to management.", "Yes, the team escalates the issue to management.", "Yes, the issue was escalated to management last time.", "Yes, the team escalated the issue to management last time.", "Проблема эскалирована в руководство?", "Чи проблема ескалована в управління?", "Czy problem został eskalowany do zarządu?"],
          ["Is the system backup performed daily?", "Yes, the system backup is performed daily.", "Yes, the team performs the system backup daily.", "Yes, the system backup was performed yesterday.", "Yes, the team performed the system backup yesterday.", "Резервное копирование системы выполняется ежедневно?", "Чи щоденно виконується резервне копіювання системи?", "Czy kopia zapasowa systemu jest wykonywana codziennie?"],
          ["Is the document printed for the meeting?", "Yes, the document is printed for the meeting.", "Yes, the team prints the document for the meeting.", "Yes, the document was printed for the meeting last time.", "Yes, the team printed the document for the meeting last time.", "Документ распечатан для встречи?", "Чи документ надрукований для зустрічі?", "Czy dokument jest drukowany na spotkanie?"],
          ["Is the presentation reviewed before the meeting?", "Yes, the presentation is reviewed before the meeting.", "Yes, the team reviews the presentation before the meeting.", "Yes, the presentation was reviewed before the last meeting.", "Yes, the team reviewed the presentation before the last meeting.", "Презентация проверена перед встречей?", "Чи презентація перевірена перед зустріччю?", "Czy prezentacja jest przeglądana przed spotkaniem?"],
          ['Was the homework finished by you yesterday?', 'Yes, the homework was finished by me yesterday.', 'Yes, I finished the homework yesterday.', 'Yes, the homework is finished by me every day.', 'Yes, I finish the homework every day.', 'Была ли домашняя работа закончена вами вчера?', 'Чи була домашня робота закінчена вами вчора?', 'Czy praca domowa została ukończona przez ciebie wczoraj?'],
          ['Was the meal cooked by you last night?', 'Yes, the meal was cooked by me last night.', 'Yes, I cooked the meal last night.', 'Yes, the meal is cooked by me every night.', 'Yes, I cook the meal every night.', 'Было ли блюдо приготовлено вами прошлой ночью?', 'Чи була страва приготована вами минулої ночі?', 'Czy posiłek został ugotowany przez ciebie wczoraj w nocy?'],
          ['Was the report submitted by you yesterday?', 'Yes, the report was submitted by me yesterday.', 'Yes, I submitted the report yesterday.', 'Yes, the report is submitted by me every week.', 'Yes, I submit the report every week.', 'Был ли отчет сдан вами вчера?', 'Чи був звіт поданий вами вчора?', 'Czy raport został złożony przez ciebie wczoraj?'],
          ['Was the room cleaned by you last week?', 'Yes, the room was cleaned by me last week.', 'Yes, I cleaned the room last week.', 'Yes, the room is cleaned by me every week.', 'Yes, I clean the room every week.', 'Была ли комната убрана вами на прошлой неделе?', 'Чи була кімната прибрана вами минулого тижня?', 'Czy pokój został posprzątany przez ciebie w zeszłym tygodniu?'],
          ['Was the email sent by you yesterday?', 'Yes, the email was sent by me yesterday.', 'Yes, I sent the email yesterday.', 'Yes, the email is sent by me every day.', 'Yes, I send the email every day.', 'Было ли письмо отправлено вами вчера?', 'Чи було листа надіслано вами вчора?', 'Czy e-mail został wysłany przez ciebie wczoraj?'],
          ['Was the presentation prepared by you last month?', 'Yes, the presentation was prepared by me last month.', 'Yes, I prepared the presentation last month.', 'Yes, the presentation is prepared by me every month.', 'Yes, I prepare the presentation every month.', 'Была ли презентация подготовлена вами в прошлом месяце?', 'Чи була презентація підготовлена вами минулого місяця?', 'Czy prezentacja została przygotowana przez ciebie w zeszłym miesiącu?'],
          ['Was the article written by you last week?', 'Yes, the article was written by me last week.', 'Yes, I wrote the article last week.', 'Yes, the article is written by me every week.', 'Yes, I write the article every week.', 'Была ли статья написана вами на прошлой неделе?', 'Чи була стаття написана вами минулого тижня?', 'Czy artykuł został napisany przez ciebie w zeszłym tygodniu?'],
          ['Was the task completed by you today?', 'Yes, the task was completed by me today.', 'Yes, I completed the task today.', 'Yes, the task is completed by me every day.', 'Yes, I complete the task every day.', 'Была ли задача выполнена вами сегодня?', 'Чи була задача виконана вами сьогодні?', 'Czy zadanie zostało wykonane przez ciebie dzisiaj?'],
          ['Was the cleaning done by you yesterday?', 'Yes, the cleaning was done by me yesterday.', 'Yes, I did the cleaning yesterday.', 'Yes, the cleaning is done by me every week.', 'Yes, I do the cleaning every week.', 'Была ли уборка сделана вами вчера?', 'Чи була прибірка зроблена вами вчора?', 'Czy sprzątanie zostało wykonane przez ciebie wczoraj?'],
          ['Was the document signed by you last night?', 'Yes, the document was signed by me last night.', 'Yes, I signed the document last night.', 'Yes, the document is signed by me every week.', 'Yes, I sign the document every week.', 'Был ли документ подписан вами прошлой ночью?', 'Чи був документ підписаний вами минулої ночі?', 'Czy dokument został podpisany przez ciebie zeszłej nocy?'],
          ['Was the homework checked by you this morning?', 'Yes, the homework was checked by me this morning.', 'Yes, I checked the homework this morning.', 'Yes, the homework is checked by me every morning.', 'Yes, I check the homework every morning.', 'Была ли домашняя работа проверена вами сегодня утром?', 'Чи була домашня робота перевірена вами сьогодні вранці?', 'Czy praca domowa została sprawdzona przez ciebie dziś rano?'],
          ['Was the project finalized by you last Friday?', 'Yes, the project was finalized by me last Friday.', 'Yes, I finalized the project last Friday.', 'Yes, the project is finalized by me every month.', 'Yes, I finalize the project every month.', 'Был ли проект завершён вами в прошлую пятницу?', 'Чи був проект завершений вами минулої п\'ятниці?', 'Czy projekt został sfinalizowany przez ciebie w zeszły piątek?'],
          ['Was the exam passed by you last semester?', 'Yes, the exam was passed by me last semester.', 'Yes, I passed the exam last semester.', 'Yes, the exam is passed by me every semester.', 'Yes, I pass the exam every semester.', 'Был ли экзамен сдан вами в прошлом семестре?', 'Чи був екзамен складений вами минулого семестру?', 'Czy egzamin został zdany przez ciebie w zeszłym semestrze?'],
          ['Was the application reviewed by you last month?', 'Yes, the application was reviewed by me last month.', 'Yes, I reviewed the application last month.', 'Yes, the application is reviewed by me every month.', 'Yes, I review the application every month.', 'Было ли заявление рассмотрено вами в прошлом месяце?', 'Чи була заявка розглянута вами минулого місяця?', 'Czy aplikacja została przejrzana przez ciebie w zeszłym miesiącu?'],
          ['Was the meeting scheduled by you yesterday?', 'Yes, the meeting was scheduled by me yesterday.', 'Yes, I scheduled the meeting yesterday.', 'Yes, the meeting is scheduled by me every week.', 'Yes, I schedule the meeting every week.', 'Была ли встреча запланирована вами вчера?', 'Чи була зустріч запланована вами вчора?', 'Czy spotkanie zostało zaplanowane przez ciebie wczoraj?'],
          ['Was the budget approved by you this year?', 'Yes, the budget was approved by me this year.', 'Yes, I approved the budget this year.', 'Yes, the budget is approved by me every year.', 'Yes, I approve the budget every year.', 'Был ли бюджет утвержден вами в этом году?', 'Чи був бюджет затверджений вами цього року?', 'Czy budżet został zatwierdzony przez ciebie w tym roku?'],
          ['Was the phone call made by you last night?', 'Yes, the phone call was made by me last night.', 'Yes, I made the phone call last night.', 'Yes, the phone call is made by me every night.', 'Yes, I make the phone call every night.', 'Был ли телефонный звонок сделан вами прошлой ночью?', 'Чи був телефонний дзвінок зроблений вами минулої ночі?', 'Czy telefon został wykonany przez ciebie wczoraj w nocy?'],
          ['Was the car washed by you yesterday?', 'Yes, the car was washed by me yesterday.', 'Yes, I washed the car yesterday.', 'Yes, the car is washed by me every week.', 'Yes, I wash the car every week.', 'Была ли машина вымыта вами вчера?', 'Чи була машина вимита вами вчора?', 'Czy samochód został umyty przez ciebie wczoraj?'],
          ['Was the letter posted by you this morning?', 'Yes, the letter was posted by me this morning.', 'Yes, I posted the letter this morning.', 'Yes, the letter is posted by me every morning.', 'Yes, I post the letter every morning.', 'Было ли письмо отправлено вами этим утром?', 'Чи було листа надіслано вами цим ранком?', 'Czy list został wysłany przez ciebie dziś rano?'],
          ['Was the task explained by you yesterday?', 'Yes, the task was explained by me yesterday.', 'Yes, I explained the task yesterday.', 'Yes, the task is explained by me every day.', 'Yes, I explain the task every day.', 'Была ли задача объяснена вами вчера?', 'Чи була задача пояснена вами вчора?', 'Czy zadanie zostało wyjaśnione przez ciebie wczoraj?'],
          ['Was the software installed by you last weekend?', 'Yes, the software was installed by me last weekend.', 'Yes, I installed the software last weekend.', 'Yes, the software is installed by me every weekend.', 'Yes, I install the software every weekend.', 'Было ли программное обеспечение установлено вами на прошлых выходных?', 'Чи було програмне забезпечення встановлено вами на минулих вихідних?', 'Czy oprogramowanie zostało zainstalowane przez ciebie w zeszły weekend?'],
          ['Was the printer repaired by you last month?', 'Yes, the printer was repaired by me last month.', 'Yes, I repaired the printer last month.', 'Yes, the printer is repaired by me every month.', 'Yes, I repair the printer every month.', 'Был ли принтер отремонтирован вами в прошлом месяце?', 'Чи був принтер відремонтований вами минулого місяця?', 'Czy drukarka została naprawiona przez ciebie w zeszłym miesiącu?'],
          ['Was the video edited by you yesterday?', 'Yes, the video was edited by me yesterday.', 'Yes, I edited the video yesterday.', 'Yes, the video is edited by me every week.', 'Yes, I edit the video every week.', 'Было ли видео отредактировано вами вчера?', 'Чи було відео відредаговано вами вчора?', 'Czy wideo zostało edytowane przez ciebie wczoraj?'],
          ['Was the survey completed by you last year?', 'Yes, the survey was completed by me last year.', 'Yes, I completed the survey last year.', 'Yes, the survey is completed by me every year.', 'Yes, I complete the survey every year.', 'Был ли опрос завершен вами в прошлом году?', 'Чи був опитування завершений вами минулого року?', 'Czy ankieta została wypełniona przez ciebie w zeszłym roku?'],
          ['Was the document updated by you last week?', 'Yes, the document was updated by me last week.', 'Yes, I updated the document last week.', 'Yes, the document is updated by me every month.', 'Yes, I update the document every month.', 'Был ли документ обновлён вами на прошлой неделе?', 'Чи був документ оновлений вами минулого тижня?', 'Czy dokument został zaktualizowany przez ciebie w zeszłym tygodniu?'],
  ];
  
    // Если это свойство есть, то оно попадает в заголовок теста
    passiveIsDoneWasDone.nameLeson = "is done/was done";

    // Свойство показывает сколько индексов содержат правильные предложения
    // Если его нет, то будет считаться, что правильные предложения 
    // только индекс 0 и 1. Если 5 - это индексы 0,1,2,3,4 с правильно
    // созданными предложениями.
    passiveIsDoneWasDone.lengthTrue = 5;

    // расширение числа подмассивов за счёт замены местами нулевого и первого индекса
    passiveIsDoneWasDone.push(...extendForArray(passiveIsDoneWasDone));

