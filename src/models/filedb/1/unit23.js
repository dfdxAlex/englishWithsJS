import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';

export const unit23 = [
    ["Are you eating?", "Yes, I am eating.", "Did you eat?", "You eat every day.", "You had eaten.", "Ты ешь?", "Ти їси?", "Czy jesz?"],
    ["She is reading.", "Is she reading?", "She read a book.", "She reads a lot.", "She had read it.", "Она читает.", "Вона читає.", "Ona czyta."],
    ["Are they going?", "Yes, they are going.", "They went home.", "They go often.", "They had gone already.", "Они идут?", "Вони йдуть?", "Czy oni idą?"],
    ["I am writing.", "Am I writing?", "I wrote a letter.", "I write emails.", "I had written before.", "Я пишу.", "Я пишу.", "Piszę."],
    ["Is he watching TV?", "Yes, he is watching TV.", "He watched TV.", "He watches TV.", "He had watched it.", "Он смотрит телевизор?", "Він дивиться телевізор?", "Czy on ogląda telewizję?"],
    ["We are cooking.", "Are we cooking?", "We cooked dinner.", "We cook every day.", "We had cooked before.", "Мы готовим.", "Ми готуємо.", "Gotujemy."],
    ["Are you driving?", "Yes, I am driving.", "Did you drive?", "You drive well.", "You had driven before.", "Ты ведёшь машину?", "Ти ведеш машину?", "Czy prowadzisz samochód?"],
    ["He is playing.", "Is he playing?", "He played yesterday.", "He plays daily.", "He had played before.", "Он играет.", "Він грає.", "On gra."],
    ["Am I speaking?", "Yes, you are speaking.", "I spoke to him.", "I speak clearly.", "I had spoken before.", "Я говорю?", "Я говорю?", "Czy mówię?"],
    ["They are swimming.", "Are they swimming?", "They swam fast.", "They swim well.", "They had swum before.", "Они плавают.", "Вони плавають.", "Oni pływają."],
    ["Is she singing?", "Yes, she is singing.", "She sang beautifully.", "She sings songs.", "She had sung before.", "Она поёт?", "Вона співає?", "Czy ona śpiewa?"],
    ["We are running.", "Are we running?", "We ran fast.", "We run daily.", "We had run before.", "Мы бегаем.", "Ми бігаємо.", "Biegamy."],
    ["Are you reading?", "Yes, I am reading.", "Did you read?", "You read often.", "You had read it.", "Ты читаешь?", "Ти читаєш?", "Czy czytasz?"],
    ["He is listening.", "Is he listening?", "He listened carefully.", "He listens to music.", "He had listened before.", "Он слушает.", "Він слухає.", "On słucha."],
    ["Am I dancing?", "Yes, you are dancing.", "I danced last night.", "I dance often.", "I had danced before.", "Я танцую?", "Я танцюю?", "Czy tańczę?"],
    ["She is painting.", "Is she painting?", "She painted a picture.", "She paints well.", "She had painted before.", "Она рисует.", "Вона малює.", "Ona maluje."],
    ["Are we learning?", "Yes, we are learning.", "We learned quickly.", "We learn daily.", "We had learned it.", "Мы учимся?", "Ми вчимося?", "Czy się uczymy?"],
    ["They are laughing.", "Are they laughing?", "They laughed loudly.", "They laugh a lot.", "They had laughed before.", "Они смеются.", "Вони сміються.", "Oni się śmieją."],
    ["I am sleeping.", "Am I sleeping?", "I slept well.", "I sleep here.", "I had slept before.", "Я сплю.", "Я сплю.", "Śpię."],
    ["Is he working?", "Yes, he is working.", "He worked late.", "He works hard.", "He had worked before.", "Он работает?", "Він працює?", "Czy on pracuje?"],
    ["You are shopping.", "Are you shopping?", "You shopped a lot.", "You shop online.", "You had shopped earlier.", "Ты покупаешь.", "Ти купуєш.", "Robisz zakupy."],
    ["Are they talking?", "Yes, they are talking.", "They talked yesterday.", "They talk a lot.", "They had talked already.", "Они разговаривают?", "Вони розмовляють?", "Czy oni rozmawiają?"],
    ["She is cleaning.", "Is she cleaning?", "She cleaned the room.", "She cleans every day.", "She had cleaned before.", "Она убирает.", "Вона прибирає.", "Ona sprząta."],
    ["We are fixing it.", "Are we fixing it?", "We fixed it.", "We fix things.", "We had fixed it before.", "Мы чинем это.", "Ми це лагодимо.", "Naprawiamy to."],
    ["Is he calling?", "Yes, he is calling.", "He called you.", "He calls often.", "He had called before.", "Он звонит?", "Він телефонує?", "Czy on dzwoni?"],
    ["I am studying.", "Am I studying?", "I studied last night.", "I study often.", "I had studied before.", "Я учусь.", "Я вчуся.", "Uczę się."],
    ["They are building.", "Are they building?", "They built a house.", "They build things.", "They had built it.", "Они строят.", "Вони будують.", "Budują."],
    ["Are we walking?", "Yes, we are walking.", "We walked together.", "We walk daily.", "We had walked far.", "Мы идём пешком?", "Ми йдемо пішки?", "Czy idziemy pieszo?"],
    ["You are helping.", "Are you helping?", "You helped me.", "You help everyone.", "You had helped earlier.", "Ты помогаешь.", "Ти допомагаєш.", "Pomagasz."],
    ["Is she cooking?", "Yes, she is cooking.", "She cooked lunch.", "She cooks well.", "She had cooked before.", "Она готовит?", "Вона готує?", "Czy ona gotuje?"],


    [
        "They didn't have a car last year.", // Negative (have)
        "Did they have a car last year?", // Question
        "Do they have a car now?", // Present Simple
        "Will they have a car next year?", // Future Simple
        "Had they had a car before last year?", // Past Perfect
        "У них не было машины в прошлом году.", // Russian
        "У них не було машини минулого року.", // Ukrainian
        "Nie mieli samochodu w zeszłym roku." // Polish
    ],
    [
        "I wasn't tired after the trip.", // Negative (be)
        "Were you tired after the trip?", // Question
        "Am I tired now?", // Present Simple
        "Will I be tired after the next trip?", // Future Simple
        "Had I been tired before the trip?", // Past Perfect
        "Я не был уставшим после поездки.", // Russian
        "Я не був втомленим після поїздки.", // Ukrainian
        "Nie byłem zmęczony po podróży." // Polish
    ],
    [
        "She didn't have enough time yesterday.", // Negative (have)
        "Did she have enough time yesterday?", // Question
        "Does she have enough time today?", // Present Simple
        "Will she have enough time tomorrow?", // Future Simple
        "Had she had enough time before yesterday?", // Past Perfect
        "У нее не было достаточно времени вчера.", // Russian
        "У неї не було достатньо часу вчора.", // Ukrainian
        "Nie miała wystarczająco dużo czasu wczoraj." // Polish
    ],
    [
        "He didn't do the dishes after dinner.", // Negative (do)
        "Did he do the dishes after dinner?", // Question
        "Does he do the dishes now?", // Present Simple
        "Will he do the dishes after the next dinner?", // Future Simple
        "Had he done the dishes before dinner?", // Past Perfect
        "Он не мыл посуду после ужина.", // Russian
        "Він не мив посуд після вечері.", // Ukrainian
        "Nie zmywał naczyń po kolacji." // Polish
    ],
    [
        "I didn't have a pet last year.", // Negative (have)
        "Did you have a pet last year?", // Question
        "Do I have a pet now?", // Present Simple
        "Will I have a pet next year?", // Future Simple
        "Had I had a pet before last year?", // Past Perfect
        "У меня не было питомца в прошлом году.", // Russian
        "У мене не було домашньої тварини минулого року.", // Ukrainian
        "Nie miałem zwierzaka w zeszłym roku." // Polish
    ],
    [
        "We weren't late for the meeting.", // Negative (be)
        "Were you late for the meeting?", // Question
        "Are we late for the meeting now?", // Present Simple
        "Will we be late for the next meeting?", // Future Simple
        "Had we been late for the meeting before?", // Past Perfect
        "Мы не опоздали на встречу.", // Russian
        "Ми не запізнилися на зустріч.", // Ukrainian
        "Nie spóźniliśmy się na spotkanie." // Polish
    ],
    [
        "He didn't have breakfast yesterday.", // Negative (have)
        "Did he have breakfast yesterday?", // Question
        "Does he have breakfast today?", // Present Simple
        "Will he have breakfast tomorrow?", // Future Simple
        "Had he had breakfast before yesterday?", // Past Perfect
        "Он не завтракал вчера.", // Russian
        "Він не снідав учора.", // Ukrainian
        "Nie jadł śniadania wczoraj." // Polish
    ],

    [
        "Wasn't she at the party last night?", // Negative question (be)
        "She was at the party last night.", // Answer
        "She is at the party now.", // Present Simple
        "She will be at the party tomorrow.", // Future Simple
        "She had been at the party before.", // Past Perfect
        "Разве она не была на вечеринке вчера вечером?", // Russian
        "Хіба вона не була на вечірці вчора ввечері?", // Ukrainian
        "Czy nie była na imprezie wczoraj wieczorem?" // Polish
    ],
    [
        "Didn't they have a car last year?", // Negative question (have)
        "They had a car last year.", // Answer
        "They have a car now.", // Present Simple
        "They will have a car next year.", // Future Simple
        "They had had a car before last year.", // Past Perfect
        "Разве у них не было машины в прошлом году?", // Russian
        "Хіба у них не було машини минулого року?", // Ukrainian
        "Czy nie mieli samochodu w zeszłym roku?" // Polish
    ],
    [
        "Didn't he do his homework yesterday?", // Negative question (do)
        "He did his homework yesterday.", // Answer
        "He does his homework today.", // Present Simple
        "He will do his homework tomorrow.", // Future Simple
        "He had done his homework before yesterday.", // Past Perfect
        "Разве он не делал домашнюю работу вчера?", // Russian
        "Хіба він не робив домашню роботу вчора?", // Ukrainian
        "Czy nie odrobił pracy domowej wczoraj?" // Polish
    ],
    [
        "Wasn't I tired after the trip?", // Negative question (be)
        "You were tired after the trip.", // Answer
        "I am tired now.", // Present Simple
        "I will be tired after the next trip.", // Future Simple
        "I had been tired before the trip.", // Past Perfect
        "Разве я не был уставшим после поездки?", // Russian
        "Хіба я не був втомленим після поїздки?", // Ukrainian
        "Czy nie byłem zmęczony po podróży?" // Polish
    ],
    [
        "Didn't we visit the museum last weekend?", // Negative question (do)
        "You visited the museum last weekend.", // Answer
        "We visit the museum today.", // Present Simple
        "We will visit the museum next weekend.", // Future Simple
        "We had visited the museum before last weekend.", // Past Perfect
        "Разве мы не посещали музей в прошлые выходные?", // Russian
        "Хіба ми не відвідували музей минулими вихідними?", // Ukrainian
        "Czy nie odwiedziliśmy muzeum w zeszły weekend?" // Polish
    ],
    [
        "Didn't she have enough time yesterday?", // Negative question (have)
        "She had enough time yesterday.", // Answer
        "She has enough time today.", // Present Simple
        "She will have enough time tomorrow.", // Future Simple
        "She had had enough time before yesterday.", // Past Perfect
        "Разве у нее не было достаточно времени вчера?", // Russian
        "Хіба у неї не було достатньо часу вчора?", // Ukrainian
        "Czy nie miała wystarczająco dużo czasu wczoraj?" // Polish
    ],
    [
        "Wasn't the movie interesting last night?", // Negative question (be)
        "The movie was interesting last night.", // Answer
        "The movie is interesting now.", // Present Simple
        "The movie will be interesting tonight.", // Future Simple
        "The movie had been interesting before last night.", // Past Perfect
        "Разве фильм не был интересным вчера вечером?", // Russian
        "Хіба фільм не був цікавим вчора ввечері?", // Ukrainian
        "Czy film nie był interesujący wczoraj wieczorem?" // Polish
    ],
    [
        "Didn't he do the dishes after dinner?", // Negative question (do)
        "He did the dishes after dinner.", // Answer
        "He does the dishes now.", // Present Simple
        "He will do the dishes after the next dinner.", // Future Simple
        "He had done the dishes before dinner.", // Past Perfect
        "Разве он не мыл посуду после ужина?", // Russian
        "Хіба він не мив посуд після вечері?", // Ukrainian
        "Czy nie zmywał naczyń po kolacji?" // Polish
    ],
    [
        "Weren't they at home last evening?", // Negative question (be)
        "They were at home last evening.", // Answer
        "They are at home now.", // Present Simple
        "They will be at home tomorrow evening.", // Future Simple
        "They had been at home before last evening.", // Past Perfect
        "Разве они не были дома вчера вечером?", // Russian
        "Хіба вони не були вдома вчора ввечері?", // Ukrainian
        "Czy nie byli w domu wczoraj wieczorem?" // Polish
    ],
    [
        "Didn't I have a pet last year?", // Negative question (have)
        "You had a pet last year.", // Answer
        "I have a pet now.", // Present Simple
        "I will have a pet next year.", // Future Simple
        "I had had a pet before last year.", // Past Perfect
        "Разве у меня не было питомца в прошлом году?", // Russian
        "Хіба у мене не було домашньої тварини минулого року?", // Ukrainian
        "Czy nie miałem zwierzaka w zeszłym roku?" // Polish
    ],
    [
        "Didn't she play tennis yesterday?", // Negative question (do)
        "She played tennis yesterday.", // Answer
        "She plays tennis today.", // Present Simple
        "She will play tennis tomorrow.", // Future Simple
        "She had played tennis before yesterday.", // Past Perfect
        "Разве она не играла в теннис вчера?", // Russian
        "Хіба вона не грала в теніс вчора?", // Ukrainian
        "Czy nie grała w tenisa wczoraj?" // Polish
    ],
    [
        "Weren't we late for the meeting?", // Negative question (be)
        "You were late for the meeting.", // Answer
        "We are late for the meeting now.", // Present Simple
        "We will be late for the next meeting.", // Future Simple
        "We had been late for the meeting before.", // Past Perfect
        "Разве мы не опоздали на встречу?", // Russian
        "Хіба ми не запізнилися на зустріч?", // Ukrainian
        "Czy nie spóźniliśmy się na spotkanie?" // Polish
    ],
    [
        "Didn't you see the new movie last week?", // Negative question (do)
        "You saw the new movie last week.", // Answer
        "You see the new movie now.", // Present Simple
        "You will see the new movie next week.", // Future Simple
        "You had seen the new movie before last week.", // Past Perfect
        "Разве ты не видел новый фильм на прошлой неделе?", // Russian
        "Хіба ти не бачив новий фільм минулого тижня?", // Ukrainian
        "Czy nie widziałeś nowego filmu w zeszłym tygodniu?" // Polish
    ],
    [
        "Didn't he have breakfast yesterday?", // Negative question (have)
        "He had breakfast yesterday.", // Answer
        "He has breakfast today.", // Present Simple
        "He will have breakfast tomorrow.", // Future Simple
        "He had had breakfast before yesterday.", // Past Perfect
        "Разве он не завтракал вчера?", // Russian
        "Хіба він не снідав учора?", // Ukrainian
        "Czy nie jadł śniadania wczoraj?" // Polish
    ],
    [
        "Wasn't it cold last winter?", // Negative question (be)
        "It was cold last winter.", // Answer
        "It is cold now.", // Present Simple
        "It will be cold next winter.", // Future Simple
        "It had been cold before last winter.", // Past Perfect
        "Разве не было холодно прошлой зимой?", // Russian
        "Хіба не було холодно минулої зими?", // Ukrainian
        "Czy nie było zimno zeszłej zimy?" // Polish
    ],
    [
        "Didn't they do their chores last weekend?", // Negative question (do)
        "They did their chores last weekend.", // Answer
        "They do their chores now.", // Present Simple
        "They will do their chores next weekend.", // Future Simple
        "They had done their chores before last weekend.", // Past Perfect
        "Разве они не делали свои дела в прошлые выходные?", // Russian
        "Хіба вони не виконували свої справи минулими вихідними?", // Ukrainian
        "Czy nie robili swoich obowiązków w zeszły weekend?" // Polish
    ],
    [
        "Wasn't she happy at the event?", // Negative question (be)
        "She was happy at the event.", // Answer
        "She is happy now.", // Present Simple
        "She will be happy at the next event.", // Future Simple
        "She had been happy before the event.", // Past Perfect
        "Разве она не была счастлива на мероприятии?", // Russian
        "Хіба вона не була щаслива на заході?", // Ukrainian
        "Czy nie była szczęśliwa na wydarzeniu?" // Polish
    ],
    [
        "Didn't I have a phone last month?", // Negative question (have)
        "You had a phone last month.", // Answer
        "I have a phone now.", // Present Simple
        "I will have a phone next month.", // Future Simple
        "I had had a phone before last month.", // Past Perfect
        "Разве у меня не было телефона в прошлом месяце?", // Russian
        "Хіба у мене не було телефону минулого місяця?", // Ukrainian
        "Czy nie miałem telefonu w zeszłym miesiącu?" // Polish
    ],
    [
        "Didn't he write a letter yesterday?", // Negative question (do)
        "He wrote a letter yesterday.", // Answer
        "He writes a letter today.", // Present Simple
        "He will write a letter tomorrow.", // Future Simple
        "He had written a letter before yesterday.", // Past Perfect
        "Разве он не написал письмо вчера?", // Russian
        "Хіба він не написав лист учора?", // Ukrainian
        "Czy nie napisał listu wczoraj?" // Polish
    ],
    [
        "Weren't we ready for the test?", // Negative question (be)
        "You were ready for the test.", // Answer
        "We are ready for the test now.", // Present Simple
        "We will be ready for the next test.", // Future Simple
        "We had been ready for the test before.", // Past Perfect
        "Разве мы не были готовы к тесту?", // Russian
        "Хіба ми не були готові до тесту?", // Ukrainian
        "Czy nie byliśmy gotowi na test?" // Polish
    ],
    [
        "Didn't they travel to Paris last summer?", // Negative question (do)
        "They traveled to Paris last summer.", // Answer
        "They travel to Paris now.", // Present Simple
        "They will travel to Paris next summer.", // Future Simple
        "They had traveled to Paris before last summer.", // Past Perfect
        "Разве они не путешествовали в Париж прошлым летом?", // Russian
        "Хіба вони не подорожували до Парижа минулого літа?", // Ukrainian
        "Czy nie podróżowali do Paryża zeszłego lata?" // Polish
    ],
    [
        "Didn't she have a job last year?", // Negative question (have)
        "She had a job last year.", // Answer
        "She has a job now.", // Present Simple
        "She will have a job next year.", // Future Simple
        "She had had a job before last year.", // Past Perfect
        "Разве у нее не было работы в прошлом году?", // Russian
        "Хіба у неї не було роботи минулого року?", // Ukrainian
        "Czy nie miała pracy w zeszłym roku?" // Polish
    ],
    [
        "Wasn't he at the concert last night?", // Negative question (be)
        "He was at the concert last night.", // Answer
        "He is at the concert now.", // Present Simple
        "He will be at the concert tomorrow.", // Future Simple
        "He had been at the concert before last night.", // Past Perfect
        "Разве он не был на концерте вчера вечером?", // Russian
        "Хіба він не був на концерті вчора ввечері?", // Ukrainian
        "Czy nie był na koncercie wczoraj wieczorem?" // Polish
    ],
    [
        "Didn't they do their shopping yesterday?", // Negative question (do)
        "They did their shopping yesterday.", // Answer
        "They do their shopping today.", // Present Simple
        "They will do their shopping tomorrow.", // Future Simple
        "They had done their shopping before yesterday.", // Past Perfect
        "Разве они не делали покупки вчера?", // Russian
        "Хіба вони не робили покупки вчора?", // Ukrainian
        "Czy nie robili zakupów wczoraj?" // Polish
    ],
    [
        "Wasn't the book interesting last month?", // Negative question (be)
        "The book was interesting last month.", // Answer
        "The book is interesting now.", // Present Simple
        "The book will be interesting next month.", // Future Simple
        "The book had been interesting before last month.", // Past Perfect
        "Разве книга не была интересной в прошлом месяце?", // Russian
        "Хіба книга не була цікавою минулого місяця?", // Ukrainian
        "Czy książka nie była interesująca w zeszłym miesiącu?" // Polish
    ],
    [
        "Didn't I have a vacation last summer?", // Negative question (have)
        "You had a vacation last summer.", // Answer
        "I have a vacation now.", // Present Simple
        "I will have a vacation next summer.", // Future Simple
        "I had had a vacation before last summer.", // Past Perfect
        "Разве у меня не было отпуска прошлым летом?", // Russian
        "Хіба у мене не було відпустки минулого літа?", // Ukrainian
        "Czy nie miałem wakacji zeszłego lata?" // Polish
    ],
    [
        "Didn't she call her friend yesterday?", // Negative question (do)
        "She called her friend yesterday.", // Answer
        "She calls her friend today.", // Present Simple
        "She will call her friend tomorrow.", // Future Simple
        "She had called her friend before yesterday.", // Past Perfect
        "Разве она не звонила своему другу вчера?", // Russian
        "Хіба вона не телефонувала своєму другу вчора?", // Ukrainian
        "Czy nie dzwoniła do swojego przyjaciela wczoraj?" // Polish
    ],
    [
        "Wasn't it rainy last weekend?", // Negative question (be)
        "It was rainy last weekend.", // Answer
        "It is rainy now.", // Present Simple
        "It will be rainy next weekend.", // Future Simple
        "It had been rainy before last weekend.", // Past Perfect
        "Разве не было дождливо в прошлые выходные?", // Russian
        "Хіба не було дощово минулими вихідними?", // Ukrainian
        "Czy nie było deszczowo w zeszły weekend?" // Polish
    ],
    [
        "Didn't he clean the room yesterday?", // Negative question (do)
        "He cleaned the room yesterday.", // Answer
        "He cleans the room today.", // Present Simple
        "He will clean the room tomorrow.", // Future Simple
        "He had cleaned the room before yesterday.", // Past Perfect
        "Разве он не убирал комнату вчера?", // Russian
        "Хіба він не прибирав кімнату вчора?", // Ukrainian
        "Czy nie sprzątał pokoju wczoraj?" // Polish
    ],
    [
        "Weren't we at the park last Sunday?", // Negative question (be)
        "You were at the park last Sunday.", // Answer
        "We are at the park now.", // Present Simple
        "We will be at the park next Sunday.", // Future Simple
        "We had been at the park before last Sunday.", // Past Perfect
        "Разве мы не были в парке в прошлое воскресенье?", // Russian
        "Хіба ми не були в парку минулої неділі?", // Ukrainian
        "Czy nie byliśmy w parku w zeszłą niedzielę?" // Polish
    ],

    [
        "Isn't she at the party now?", // Negative question (be)
        "She is at the party now.", // Answer
        "She was at the party yesterday.", // Past Simple
        "She will be at the party tomorrow.", // Future Simple
        "She has been at the party today.", // Present Perfect
        "Разве она не на вечеринке сейчас?", // Russian
        "Хіба вона не на вечірці зараз?", // Ukrainian
        "Czy nie jest na imprezie teraz?" // Polish
    ],
    [
        "Don't they have a car?", // Negative question (have)
        "They have a car.", // Answer
        "They had a car last year.", // Past Simple
        "They will have a car next year.", // Future Simple
        "They have had a car this year.", // Present Perfect
        "Разве у них нет машины?", // Russian
        "Хіба у них немає машини?", // Ukrainian
        "Czy nie mają samochodu?" // Polish
    ],
    [
        "Doesn't he do his homework every day?", // Negative question (do)
        "He does his homework every day.", // Answer
        "He did his homework yesterday.", // Past Simple
        "He will do his homework tomorrow.", // Future Simple
        "He has done his homework today.", // Present Perfect
        "Разве он не делает домашнюю работу каждый день?", // Russian
        "Хіба він не робить домашню роботу щодня?", // Ukrainian
        "Czy nie odrabia pracy domowej codziennie?" // Polish
    ],
    [
        "Aren't you tired after work?", // Negative question (be)
        "I am tired after work.", // Answer
        "I was tired after work yesterday.", // Past Simple
        "I will be tired after work tomorrow.", // Future Simple
        "I have been tired after work today.", // Present Perfect
        "Разве ты не устаешь после работы?", // Russian
        "Хіба ти не втомлюєшся після роботи?", // Ukrainian
        "Czy nie jesteś zmęczony po pracy?" // Polish
    ],
    [
        "Don't we visit the museum regularly?", // Negative question (do)
        "We visit the museum regularly.", // Answer
        "We visited the museum last weekend.", // Past Simple
        "We will visit the museum next weekend.", // Future Simple
        "We have visited the museum this month.", // Present Perfect
        "Разве мы не посещаем музей регулярно?", // Russian
        "Хіба ми не відвідуємо музей регулярно?", // Ukrainian
        "Czy nie odwiedzamy muzeum regularnie?" // Polish
    ],
    [
        "Doesn't she have enough time today?", // Negative question (have)
        "She has enough time today.", // Answer
        "She had enough time yesterday.", // Past Simple
        "She will have enough time tomorrow.", // Future Simple
        "She has had enough time this week.", // Present Perfect
        "Разве у нее нет достаточно времени сегодня?", // Russian
        "Хіба у неї немає достатньо часу сьогодні?", // Ukrainian
        "Czy nie ma wystarczająco dużo czasu dzisiaj?" // Polish
    ],
    [
        "Isn't the movie interesting?", // Negative question (be)
        "The movie is interesting.", // Answer
        "The movie was interesting last night.", // Past Simple
        "The movie will be interesting tomorrow.", // Future Simple
        "The movie has been interesting today.", // Present Perfect
        "Разве фильм не интересный?", // Russian
        "Хіба фільм не цікавий?", // Ukrainian
        "Czy film nie jest interesujący?" // Polish
    ],
    [
        "Doesn't he do the dishes after dinner?", // Negative question (do)
        "He does the dishes after dinner.", // Answer
        "He did the dishes after dinner yesterday.", // Past Simple
        "He will do the dishes after dinner tomorrow.", // Future Simple
        "He has done the dishes today.", // Present Perfect
        "Разве он не моет посуду после ужина?", // Russian
        "Хіба він не миє посуд після вечері?", // Ukrainian
        "Czy nie zmywa naczyń po kolacji?" // Polish
    ],
    [
        "Aren't they at home now?", // Negative question (be)
        "They are at home now.", // Answer
        "They were at home last evening.", // Past Simple
        "They will be at home tomorrow evening.", // Future Simple
        "They have been at home today.", // Present Perfect
        "Разве они не дома сейчас?", // Russian
        "Хіба вони не вдома зараз?", // Ukrainian
        "Czy nie są w domu teraz?" // Polish
    ],
    [
        "Don't I have a pet?", // Negative question (have)
        "You have a pet.", // Answer
        "I had a pet last year.", // Past Simple
        "I will have a pet next year.", // Future Simple
        "I have had a pet this year.", // Present Perfect
        "Разве у меня нет питомца?", // Russian
        "Хіба у мене немає домашньої тварини?", // Ukrainian
        "Czy nie mam zwierzaka?" // Polish
    ],
    [
        "Doesn't she play tennis every week?", // Negative question (do)
        "She plays tennis every week.", // Answer
        "She played tennis yesterday.", // Past Simple
        "She will play tennis tomorrow.", // Future Simple
        "She has played tennis this week.", // Present Perfect
        "Разве она не играет в теннис каждую неделю?", // Russian
        "Хіба вона не грає в теніс щотижня?", // Ukrainian
        "Czy nie gra w tenisa co tydzień?" // Polish
    ],
    [
        "Aren't we late for the meeting?", // Negative question (be)
        "We are late for the meeting.", // Answer
        "We were late for the meeting yesterday.", // Past Simple
        "We will be late for the next meeting.", // Future Simple
        "We have been late for the meeting today.", // Present Perfect
        "Разве мы не опаздываем на встречу?", // Russian
        "Хіба ми не запізнюємося на зустріч?", // Ukrainian
        "Czy nie spóźniamy się na spotkanie?" // Polish
    ],
    [
        "Don't you see the new movie every month?", // Negative question (do)
        "You see the new movie every month.", // Answer
        "You saw the new movie last week.", // Past Simple
        "You will see the new movie next week.", // Future Simple
        "You have seen the new movie this month.", // Present Perfect
        "Разве ты не смотришь новый фильм каждый месяц?", // Russian
        "Хіба ти не дивишся новий фільм щомісяця?", // Ukrainian
        "Czy nie oglądasz nowego filmu co miesiąc?" // Polish
    ],
    [
        "Doesn't he have breakfast every morning?", // Negative question (have)
        "He has breakfast every morning.", // Answer
        "He had breakfast yesterday.", // Past Simple
        "He will have breakfast tomorrow.", // Future Simple
        "He has had breakfast today.", // Present Perfect
        "Разве он не завтракает каждое утро?", // Russian
        "Хіба він не снідає щоранку?", // Ukrainian
        "Czy nie je śniadania co rano?" // Polish
    ],
    [
        "Isn't it cold today?", // Negative question (be)
        "It is cold today.", // Answer
        "It was cold yesterday.", // Past Simple
        "It will be cold tomorrow.", // Future Simple
        "It has been cold this week.", // Present Perfect
        "Разве сегодня не холодно?", // Russian
        "Хіба сьогодні не холодно?", // Ukrainian
        "Czy nie jest zimno dzisiaj?" // Polish
    ],
    [
        "Don't they do their chores every weekend?", // Negative question (do)
        "They do their chores every weekend.", // Answer
        "They did their chores last weekend.", // Past Simple
        "They will do their chores next weekend.", // Future Simple
        "They have done their chores this weekend.", // Present Perfect
        "Разве они не делают свои дела каждые выходные?", // Russian
        "Хіба вони не виконують свої справи щовихідних?", // Ukrainian
        "Czy nie robią swoich obowiązków co weekend?" // Polish
    ],
    [
        "Isn't she happy at work?", // Negative question (be)
        "She is happy at work.", // Answer
        "She was happy at work yesterday.", // Past Simple
        "She will be happy at work tomorrow.", // Future Simple
        "She has been happy at work today.", // Present Perfect
        "Разве она не счастлива на работе?", // Russian
        "Хіба вона не щаслива на роботі?", // Ukrainian
        "Czy nie jest szczęśliwa w pracy?" // Polish
    ],
    [
        "Don't I have a phone?", // Negative question (have)
        "You have a phone.", // Answer
        "I had a phone last month.", // Past Simple
        "I will have a phone next month.", // Future Simple
        "I have had a phone this year.", // Present Perfect
        "Разве у меня нет телефона?", // Russian
        "Хіба у мене немає телефону?", // Ukrainian
        "Czy nie mam telefonu?" // Polish
    ],
    [
        "Doesn't he write a letter every week?", // Negative question (do)
        "He writes a letter every week.", // Answer
        "He wrote a letter yesterday.", // Past Simple
        "He will write a letter tomorrow.", // Future Simple
        "He has written a letter this week.", // Present Perfect
        "Разве он не пишет письмо каждую неделю?", // Russian
        "Хіба він не пише лист щотижня?", // Ukrainian
        "Czy nie pisze listu co tydzień?" // Polish
    ],
    [
        "Aren't we ready for the test?", // Negative question (be)
        "We are ready for the test.", // Answer
        "We were ready for the test yesterday.", // Past Simple
        "We will be ready for the next test.", // Future Simple
        "We have been ready for the test today.", // Present Perfect
        "Разве мы не готовы к тесту?", // Russian
        "Хіба ми не готові до тесту?", // Ukrainian
        "Czy nie jesteśmy gotowi na test?" // Polish
    ],
    [
        "Don't they travel to Paris every year?", // Negative question (do)
        "They travel to Paris every year.", // Answer
        "They traveled to Paris last summer.", // Past Simple
        "They will travel to Paris next summer.", // Future Simple
        "They have traveled to Paris this year.", // Present Perfect
        "Разве они не путешествуют в Париж каждый год?", // Russian
        "Хіба вони не подорожують до Парижа щороку?", // Ukrainian
        "Czy nie podróżują do Paryża co roku?" // Polish
    ],
    [
        "Doesn't she have a job?", // Negative question (have)
        "She has a job.", // Answer
        "She had a job last year.", // Past Simple
        "She will have a job next year.", // Future Simple
        "She has had a job this year.", // Present Perfect
        "Разве у нее нет работы?", // Russian
        "Хіба у неї немає роботи?", // Ukrainian
        "Czy nie ma pracy?" // Polish
    ],
    [
        "Isn't he at the concert now?", // Negative question (be)
        "He is at the concert now.", // Answer
        "He was at the concert last night.", // Past Simple
        "He will be at the concert tomorrow.", // Future Simple
        "He has been at the concert today.", // Present Perfect
        "Разве он не на концерте сейчас?", // Russian
        "Хіба він не на концерті зараз?", // Ukrainian
        "Czy nie jest na koncercie teraz?" // Polish
    ],
    [
        "Don't they do their shopping every Saturday?", // Negative question (do)
        "They do their shopping every Saturday.", // Answer
        "They did their shopping last Saturday.", // Past Simple
        "They will do their shopping next Saturday.", // Future Simple
        "They have done their shopping this week.", // Present Perfect
        "Разве они не делают покупки каждую субботу?", // Russian
        "Хіба вони не роблять покупки щосуботи?", // Ukrainian
        "Czy nie robią zakupów w każdą sobotę?" // Polish
    ],
    [
        "Isn't the book interesting?", // Negative question (be)
        "The book is interesting.", // Answer
        "The book was interesting last month.", // Past Simple
        "The book will be interesting next month.", // Future Simple
        "The book has been interesting this week.", // Present Perfect
        "Разве книга не интересная?", // Russian
        "Хіба книга не цікава?", // Ukrainian
        "Czy książka nie jest interesująca?" // Polish
    ],
    [
        "Don't I have a vacation every year?", // Negative question (have)
        "You have a vacation every year.", // Answer
        "I had a vacation last summer.", // Past Simple
        "I will have a vacation next summer.", // Future Simple
        "I have had a vacation this year.", // Present Perfect
        "Разве у меня нет отпуска каждый год?", // Russian
        "Хіба у мене немає відпустки щороку?", // Ukrainian
        "Czy nie mam wakacji co roku?" // Polish
    ],
    [
        "Doesn't she call her friend every day?", // Negative question (do)
        "She calls her friend every day.", // Answer
        "She called her friend yesterday.", // Past Simple
        "She will call her friend tomorrow.", // Future Simple
        "She has called her friend today.", // Present Perfect
        "Разве она не звонит своему другу каждый день?", // Russian
        "Хіба вона не телефонує своєму другу щодня?", // Ukrainian
        "Czy nie dzwoni do swojego przyjaciela codziennie?" // Polish
    ],
    [
        "Isn't it rainy today?", // Negative question (be)
        "It is rainy today.", // Answer
        "It was rainy yesterday.", // Past Simple
        "It will be rainy tomorrow.", // Future Simple
        "It has been rainy this week.", // Present Perfect
        "Разве сегодня не дождливо?", // Russian
        "Хіба сьогодні не дощово?", // Ukrainian
        "Czy nie jest deszczowo dzisiaj?" // Polish
    ],
    [
        "Doesn't he clean the room every week?", // Negative question (do)
        "He cleans the room every week.", // Answer
        "He cleaned the room yesterday.", // Past Simple
        "He will clean the room tomorrow.", // Future Simple
        "He has cleaned the room this week.", // Present Perfect
        "Разве он не убирает комнату каждую неделю?", // Russian
        "Хіба він не прибирає кімнату щотижня?", // Ukrainian
        "Czy nie sprząta pokoju co tydzień?" // Polish
    ],
    [
        "Aren't we at the park every Sunday?", // Negative question (be)
        "We are at the park every Sunday.", // Answer
        "We were at the park last Sunday.", // Past Simple
        "We will be at the park next Sunday.", // Future Simple
        "We have been at the park this month.", // Present Perfect
        "Разве мы не в парке каждое воскресенье?", // Russian
        "Хіба ми не в парку щонеділі?", // Ukrainian
        "Czy nie jesteśmy w parku w każdą niedzielę?" // Polish
    ],

    [
        "Isn't he at school now?", // Negative question (be)
        "He is at school now.", // Answer
        "He was at school yesterday.", // Past Simple
        "He will be at school tomorrow.", // Future Simple
        "He has been at school today.", // Present Perfect
        "Разве он не в школе сейчас?", // Russian
        "Хіба він не в школі зараз?", // Ukrainian
        "Czy nie jest w szkole teraz?" // Polish
    ],
    [
        "Don't they have a dog?", // Negative question (have)
        "They have a dog.", // Answer
        "They had a dog last year.", // Past Simple
        "They will have a dog next year.", // Future Simple
        "They have had a dog this year.", // Present Perfect
        "Разве у них нет собаки?", // Russian
        "Хіба у них немає собаки?", // Ukrainian
        "Czy nie mają psa?" // Polish
    ],
    [
        "Doesn't she read books every evening?", // Negative question (do)
        "She reads books every evening.", // Answer
        "She read books yesterday evening.", // Past Simple
        "She will read books tomorrow evening.", // Future Simple
        "She has read books today.", // Present Perfect
        "Разве она не читает книги каждый вечер?", // Russian
        "Хіба вона не читає книги щовечора?", // Ukrainian
        "Czy nie czyta książek każdego wieczoru?" // Polish
    ],
    [
        "Aren't you busy at work?", // Negative question (be)
        "I am busy at work.", // Answer
        "I was busy at work yesterday.", // Past Simple
        "I will be busy at work tomorrow.", // Future Simple
        "I have been busy at work today.", // Present Perfect
        "Разве ты не занят на работе?", // Russian
        "Хіба ти не зайнятий на роботі?", // Ukrainian
        "Czy nie jesteś zajęty w pracy?" // Polish
    ],
    [
        "Don't we attend classes every week?", // Negative question (do)
        "We attend classes every week.", // Answer
        "We attended classes last week.", // Past Simple
        "We will attend classes next week.", // Future Simple
        "We have attended classes this week.", // Present Perfect
        "Разве мы не посещаем занятия каждую неделю?", // Russian
        "Хіба ми не відвідуємо заняття щотижня?", // Ukrainian
        "Czy nie uczęszczamy na zajęcia co tydzień?" // Polish
    ],
    [
        "Doesn't he have a laptop?", // Negative question (have)
        "He has a laptop.", // Answer
        "He had a laptop last month.", // Past Simple
        "He will have a laptop next month.", // Future Simple
        "He has had a laptop this year.", // Present Perfect
        "Разве у него нет ноутбука?", // Russian
        "Хіба у нього немає ноутбука?", // Ukrainian
        "Czy nie ma laptopa?" // Polish
    ],
    [
        "Isn't the weather nice today?", // Negative question (be)
        "The weather is nice today.", // Answer
        "The weather was nice yesterday.", // Past Simple
        "The weather will be nice tomorrow.", // Future Simple
        "The weather has been nice this week.", // Present Perfect
        "Разве погода не хорошая сегодня?", // Russian
        "Хіба погода не гарна сьогодні?", // Ukrainian
        "Czy pogoda nie jest ładna dzisiaj?" // Polish
    ],
    [
        "Doesn't she cook dinner every night?", // Negative question (do)
        "She cooks dinner every night.", // Answer
        "She cooked dinner last night.", // Past Simple
        "She will cook dinner tomorrow night.", // Future Simple
        "She has cooked dinner today.", // Present Perfect
        "Разве она не готовит ужин каждый вечер?", // Russian
        "Хіба вона не готує вечерю щовечора?", // Ukrainian
        "Czy nie gotuje kolacji każdego wieczoru?" // Polish
    ],
    [
        "Aren't they in the office now?", // Negative question (be)
        "They are in the office now.", // Answer
        "They were in the office yesterday.", // Past Simple
        "They will be in the office tomorrow.", // Future Simple
        "They have been in the office today.", // Present Perfect
        "Разве они не в офисе сейчас?", // Russian
        "Хіба вони не в офісі зараз?", // Ukrainian
        "Czy nie są w biurze teraz?" // Polish
    ],
    [
        "Don't I have a ticket?", // Negative question (have)
        "You have a ticket.", // Answer
        "I had a ticket last week.", // Past Simple
        "I will have a ticket next week.", // Future Simple
        "I have had a ticket this month.", // Present Perfect
        "Разве у меня нет билета?", // Russian
        "Хіба у мене немає квитка?", // Ukrainian
        "Czy nie mam biletu?" // Polish
    ],
    [
        "Doesn't he play soccer every weekend?", // Negative question (do)
        "He plays soccer every weekend.", // Answer
        "He played soccer last weekend.", // Past Simple
        "He will play soccer next weekend.", // Future Simple
        "He has played soccer this weekend.", // Present Perfect
        "Разве он не играет в футбол каждые выходные?", // Russian
        "Хіба він не грає у футбол щовихідних?", // Ukrainian
        "Czy nie gra w piłkę nożną w każdy weekend?" // Polish
    ],
    [
        "Aren't we early for the event?", // Negative question (be)
        "We are early for the event.", // Answer
        "We were early for the event yesterday.", // Past Simple
        "We will be early for the next event.", // Future Simple
        "We have been early for the event today.", // Present Perfect
        "Разве мы не рано на мероприятии?", // Russian
        "Хіба ми не рано на заході?", // Ukrainian
        "Czy nie jesteśmy wcześnie na wydarzeniu?" // Polish
    ],
    [
        "Don't you watch TV every evening?", // Negative question (do)
        "You watch TV every evening.", // Answer
        "You watched TV yesterday evening.", // Past Simple
        "You will watch TV tomorrow evening.", // Future Simple
        "You have watched TV today.", // Present Perfect
        "Разве ты не смотришь телевизор каждый вечер?", // Russian
        "Хіба ти не дивишся телевізор щовечора?", // Ukrainian
        "Czy nie oglądasz telewizji każdego wieczoru?" // Polish
    ],
    [
        "Doesn't she have a bicycle?", // Negative question (have)
        "She has a bicycle.", // Answer
        "She had a bicycle last year.", // Past Simple
        "She will have a bicycle next year.", // Future Simple
        "She has had a bicycle this year.", // Present Perfect
        "Разве у нее нет велосипеда?", // Russian
        "Хіба у неї немає велосипеда?", // Ukrainian
        "Czy nie ma roweru?" // Polish
    ],
    [
        "Isn't it sunny today?", // Negative question (be)
        "It is sunny today.", // Answer
        "It was sunny yesterday.", // Past Simple
        "It will be sunny tomorrow.", // Future Simple
        "It has been sunny this week.", // Present Perfect
        "Разве сегодня не солнечно?", // Russian
        "Хіба сьогодні не сонячно?", // Ukrainian
        "Czy nie jest słonecznie dzisiaj?" // Polish
    ],
    [
        "Don't they clean the house every week?", // Negative question (do)
        "They clean the house every week.", // Answer
        "They cleaned the house last week.", // Past Simple
        "They will clean the house next week.", // Future Simple
        "They have cleaned the house this week.", // Present Perfect
        "Разве они не убирают дом каждую неделю?", // Russian
        "Хіба вони не прибирають будинок щотижня?", // Ukrainian
        "Czy nie sprzątają domu co tydzień?" // Polish
    ],
    [
        "Isn't she at the gym now?", // Negative question (be)
        "She is at the gym now.", // Answer
        "She was at the gym yesterday.", // Past Simple
        "She will be at the gym tomorrow.", // Future Simple
        "She has been at the gym today.", // Present Perfect
        "Разве она не в спортзале сейчас?", // Russian
        "Хіба вона не в спортзалі зараз?", // Ukrainian
        "Czy nie jest na siłowni teraz?" // Polish
    ],
    [
        "Don't I have a meeting today?", // Negative question (have)
        "You have a meeting today.", // Answer
        "I had a meeting yesterday.", // Past Simple
        "I will have a meeting tomorrow.", // Future Simple
        "I have had a meeting this week.", // Present Perfect
        "Разве у меня нет встречи сегодня?", // Russian
        "Хіба у мене немає зустрічі сьогодні?", // Ukrainian
        "Czy nie mam spotkania dzisiaj?" // Polish
    ],
    [
        "Doesn't he study English every day?", // Negative question (do)
        "He studies English every day.", // Answer
        "He studied English yesterday.", // Past Simple
        "He will study English tomorrow.", // Future Simple
        "He has studied English today.", // Present Perfect
        "Разве он не изучает английский каждый день?", // Russian
        "Хіба він не вивчає англійську щодня?", // Ukrainian
        "Czy nie uczy się angielskiego codziennie?" // Polish
    ],
    [
        "Aren't we at the library now?", // Negative question (be)
        "We are at the library now.", // Answer
        "We were at the library yesterday.", // Past Simple
        "We will be at the library tomorrow.", // Future Simple
        "We have been at the library today.", // Present Perfect
        "Разве мы не в библиотеке сейчас?", // Russian
        "Хіба ми не в бібліотеці зараз?", // Ukrainian
        "Czy nie jesteśmy w bibliotece teraz?" // Polish
    ],
    [
        "Don't they go jogging every morning?", // Negative question (do)
        "They go jogging every morning.", // Answer
        "They went jogging yesterday morning.", // Past Simple
        "They will go jogging tomorrow morning.", // Future Simple
        "They have gone jogging today.", // Present Perfect
        "Разве они не бегают по утрам?", // Russian
        "Хіба вони не бігають щоранку?", // Ukrainian
        "Czy nie biegają co rano?" // Polish
    ],
    [
        "Doesn't she have a camera?", // Negative question (have)
        "She has a camera.", // Answer
        "She had a camera last year.", // Past Simple
        "She will have a camera next year.", // Future Simple
        "She has had a camera this year.", // Present Perfect
        "Разве у нее нет камеры?", // Russian
        "Хіба у неї немає камери?", // Ukrainian
        "Czy nie ma aparatu fotograficznego?" // Polish
    ],
    [
        "Isn't he happy with his job?", // Negative question (be)
        "He is happy with his job.", // Answer
        "He was happy with his job last year.", // Past Simple
        "He will be happy with his job next year.", // Future Simple
        "He has been happy with his job this year.", // Present Perfect
        "Разве он не доволен своей работой?", // Russian
        "Хіба він не задоволений своєю роботою?", // Ukrainian
        "Czy nie jest zadowolony z pracy?" // Polish
    ],
    [
        "Don't they paint the house every year?", // Negative question (do)
        "They paint the house every year.", // Answer
        "They painted the house last year.", // Past Simple
        "They will paint the house next year.", // Future Simple
        "They have painted the house this year.", // Present Perfect
        "Разве они не красят дом каждый год?", // Russian
        "Хіба вони не фарбують будинок щороку?", // Ukrainian
        "Czy nie malują domu co roku?" // Polish
    ],
    [
        "Isn't the coffee hot?", // Negative question (be)
        "The coffee is hot.", // Answer
        "The coffee was hot earlier.", // Past Simple
        "The coffee will be hot later.", // Future Simple
        "The coffee has been hot today.", // Present Perfect
        "Разве кофе не горячий?", // Russian
        "Хіба кава не гаряча?", // Ukrainian
        "Czy kawa nie jest gorąca?" // Polish
    ],
    [
        "Don't I have a pen?", // Negative question (have)
        "You have a pen.", // Answer
        "I had a pen yesterday.", // Past Simple
        "I will have a pen tomorrow.", // Future Simple
        "I have had a pen today.", // Present Perfect
        "Разве у меня нет ручки?", // Russian
        "Хіба у мене немає ручки?", // Ukrainian
        "Czy nie mam długopisu?" // Polish
    ],
    [
        "Doesn't she sing in the choir every Sunday?", // Negative question (do)
        "She sings in the choir every Sunday.", // Answer
        "She sang in the choir last Sunday.", // Past Simple
        "She will sing in the choir next Sunday.", // Future Simple
        "She has sung in the choir today.", // Present Perfect
        "Разве она не поет в хоре каждое воскресенье?", // Russian
        "Хіба вона не співає в хорі щонеділі?", // Ukrainian
        "Czy nie śpiewa w chórze w każdą niedzielę?" // Polish
    ],
    [
        "Isn't it crowded at the market today?", // Negative question (be)
        "It is crowded at the market today.", // Answer
        "It was crowded at the market yesterday.", // Past Simple
        "It will be crowded at the market tomorrow.", // Future Simple
        "It has been crowded at the market today.", // Present Perfect
        "Разве на рынке не многолюдно сегодня?", // Russian
        "Хіба на ринку не людно сьогодні?", // Ukrainian
        "Czy nie jest tłoczno na rynku dzisiaj?" // Polish
    ],
    [
        "Don't they play chess every evening?", // Negative question (do)
        "They play chess every evening.", // Answer
        "They played chess yesterday evening.", // Past Simple
        "They will play chess tomorrow evening.", // Future Simple
        "They have played chess today.", // Present Perfect
        "Разве они не играют в шахматы каждый вечер?", // Russian
        "Хіба вони не грають у шахи щовечора?", // Ukrainian
        "Czy nie grają w szachy każdego wieczoru?" // Polish
    ],
    [
        "Aren't you at the beach every summer?", // Negative question (be)
        "We are at the beach every summer.", // Answer
        "We were at the beach last summer.", // Past Simple
        "We will be at the beach next summer.", // Future Simple
        "We have been at the beach this summer.", // Present Perfect
        "Разве вы не на пляже каждое лето?", // Russian
        "Хіба ви не на пляжі щоліта?", // Ukrainian
        "Czy nie jesteście na plaży każdego lata?" // Polish
    ],

    [
        "Haven't you been to Paris?", // Negative question (be)
        "I have been to Paris.", // Answer
        "I was in Paris last year.", // Past Simple
        "I will be in Paris next year.", // Future Simple
        "I had been to Paris before 2020.", // Past Perfect
        "Разве ты не был в Париже?", // Russian
        "Хіба ти не був у Парижі?", // Ukrainian
        "Czy nie byłeś w Paryżu?" // Polish
    ],
    [
        "Haven't they had a meeting this week?", // Negative question (have)
        "They have had a meeting this week.", // Answer
        "They had a meeting last week.", // Past Simple
        "They will have a meeting next week.", // Future Simple
        "They had had a meeting before this week.", // Past Perfect
        "Разве у них не было встречи на этой неделе?", // Russian
        "Хіба у них не було зустрічі цього тижня?", // Ukrainian
        "Czy nie mieli spotkania w tym tygodniu?" // Polish
    ],
    [
        "Hasn't she done her homework yet?", // Negative question (do)
        "She has done her homework.", // Answer
        "She did her homework yesterday.", // Past Simple
        "She will do her homework tomorrow.", // Future Simple
        "She had done her homework before class.", // Past Perfect
        "Разве она не сделала домашнюю работу?", // Russian
        "Хіба вона не зробила домашню роботу?", // Ukrainian
        "Czy nie odrobiła pracy domowej?" // Polish
    ],
    [
        "Haven't we been tired this week?", // Negative question (be)
        "We have been tired this week.", // Answer
        "We were tired last week.", // Past Simple
        "We will be tired next week.", // Future Simple
        "We had been tired before this week.", // Past Perfect
        "Разве мы не были уставшими на этой неделе?", // Russian
        "Хіба ми не були втомленими цього тижня?", // Ukrainian
        "Czy nie byliśmy zmęczeni w tym tygodniu?" // Polish
    ],
    [
        "Hasn't he visited the museum yet?", // Negative question (do)
        "He has visited the museum.", // Answer
        "He visited the museum last month.", // Past Simple
        "He will visit the museum next month.", // Future Simple
        "He had visited the museum before this year.", // Past Perfect
        "Разве он не посетил музей?", // Russian
        "Хіба він не відвідав музей?", // Ukrainian
        "Czy nie odwiedził muzeum?" // Polish
    ],
    [
        "Haven't they had enough time today?", // Negative question (have)
        "They have had enough time today.", // Answer
        "They had enough time yesterday.", // Past Simple
        "They will have enough time tomorrow.", // Future Simple
        "They had had enough time before today.", // Past Perfect
        "Разве у них не было достаточно времени сегодня?", // Russian
        "Хіба у них не було достатньо часу сьогодні?", // Ukrainian
        "Czy nie mieli wystarczająco dużo czasu dzisiaj?" // Polish
    ],
    [
        "Hasn't the movie been interesting so far?", // Negative question (be)
        "The movie has been interesting.", // Answer
        "The movie was interesting yesterday.", // Past Simple
        "The movie will be interesting tomorrow.", // Future Simple
        "The movie had been interesting before today.", // Past Perfect
        "Разве фильм не был интересным до сих пор?", // Russian
        "Хіба фільм не був цікавим досі?", // Ukrainian
        "Czy film nie był interesujący do tej pory?" // Polish
    ],
    [
        "Hasn't he done the dishes today?", // Negative question (do)
        "He has done the dishes today.", // Answer
        "He did the dishes yesterday.", // Past Simple
        "He will do the dishes tomorrow.", // Future Simple
        "He had done the dishes before today.", // Past Perfect
        "Разве он не помыл посуду сегодня?", // Russian
        "Хіба він не помив посуд сьогодні?", // Ukrainian
        "Czy nie zmył naczyń dzisiaj?" // Polish
    ],
    [
        "Haven't they been at home this morning?", // Negative question (be)
        "They have been at home this morning.", // Answer
        "They were at home yesterday morning.", // Past Simple
        "They will be at home tomorrow morning.", // Future Simple
        "They had been at home before this morning.", // Past Perfect
        "Разве они не были дома этим утром?", // Russian
        "Хіба вони не були вдома цього ранку?", // Ukrainian
        "Czy nie byli w domu dziś rano?" // Polish
    ],
    [
        "Haven't you had a pet this year?", // Negative question (have)
        "I have had a pet this year.", // Answer
        "I had a pet last year.", // Past Simple
        "I will have a pet next year.", // Future Simple
        "I had had a pet before this year.", // Past Perfect
        "Разве у тебя не было питомца в этом году?", // Russian
        "Хіба у тебе не було домашньої тварини цього року?", // Ukrainian
        "Czy nie miałem zwierzaka w tym roku?" // Polish
    ],
    [
        "Hasn't she played tennis this week?", // Negative question (do)
        "She has played tennis this week.", // Answer
        "She played tennis last week.", // Past Simple
        "She will play tennis next week.", // Future Simple
        "She had played tennis before this week.", // Past Perfect
        "Разве она не играла в теннис на этой неделе?", // Russian
        "Хіба вона не грала в теніс цього тижня?", // Ukrainian
        "Czy nie grała w tenisa w tym tygodniu?" // Polish
    ],
    [
        "Haven't we been late for meetings this month?", // Negative question (be)
        "We have been late for meetings this month.", // Answer
        "We were late for meetings last month.", // Past Simple
        "We will be late for meetings next month.", // Future Simple
        "We had been late for meetings before this month.", // Past Perfect
        "Разве мы не опаздывали на встречи в этом месяце?", // Russian
        "Хіба ми не запізнювалися на зустрічі цього місяця?", // Ukrainian
        "Czy nie spóźnialiśmy się na spotkania w tym miesiącu?" // Polish
    ],
    [
        "Haven't you seen the new movie yet?", // Negative question (do)
        "I have seen the new movie.", // Answer
        "I saw the new movie last week.", // Past Simple
        "I will see the new movie next week.", // Future Simple
        "I had seen the new movie before this month.", // Past Perfect
        "Разве ты не видел новый фильм?", // Russian
        "Хіба ти не бачив новий фільм?", // Ukrainian
        "Czy nie widziałeś nowego filmu?" // Polish
    ],
    [
        "Hasn't he had breakfast today?", // Negative question (have)
        "He has had breakfast today.", // Answer
        "He had breakfast yesterday.", // Past Simple
        "He will have breakfast tomorrow.", // Future Simple
        "He had had breakfast before today.", // Past Perfect
        "Разве он не завтракал сегодня?", // Russian
        "Хіба він не снідав сьогодні?", // Ukrainian
        "Czy nie jadł śniadania dzisiaj?" // Polish
    ],
    [
        "Hasn't it been cold this week?", // Negative question (be)
        "It has been cold this week.", // Answer
        "It was cold last week.", // Past Simple
        "It will be cold next week.", // Future Simple
        "It had been cold before this week.", // Past Perfect
        "Разве не было холодно на этой неделе?", // Russian
        "Хіба не було холодно цього тижня?", // Ukrainian
        "Czy nie było zimno w tym tygodniu?" // Polish
    ],
    [
        "Haven't they done their chores this weekend?", // Negative question (do)
        "They have done their chores this weekend.", // Answer
        "They did their chores last weekend.", // Past Simple
        "They will do their chores next weekend.", // Future Simple
        "They had done their chores before this weekend.", // Past Perfect
        "Разве они не сделали свои дела в эти выходные?", // Russian
        "Хіба вони не виконали свої справи цими вихідними?", // Ukrainian
        "Czy nie zrobili swoich obowiązków w ten weekend?" // Polish
    ],
    [
        "Hasn't she been happy at work this month?", // Negative question (be)
        "She has been happy at work this month.", // Answer
        "She was happy at work last month.", // Past Simple
        "She will be happy at work next month.", // Future Simple
        "She had been happy at work before this month.", // Past Perfect
        "Разве она не была счастлива на работе в этом месяце?", // Russian
        "Хіба вона не була щаслива на роботі цього місяця?", // Ukrainian
        "Czy nie była szczęśliwa w pracy w tym miesiącu?" // Polish
    ],
    [
        "Haven't you had a phone this year?", // Negative question (have)
        "I have had a phone this year.", // Answer
        "I had a phone last year.", // Past Simple
        "I will have a phone next year.", // Future Simple
        "I had had a phone before this year.", // Past Perfect
        "Разве у тебя не было телефона в этом году?", // Russian
        "Хіба у тебе не було телефону цього року?", // Ukrainian
        "Czy nie miałem telefonu w tym roku?" // Polish
    ],
    [
        "Hasn't he written a letter this week?", // Negative question (do)
        "He has written a letter this week.", // Answer
        "He wrote a letter last week.", // Past Simple
        "He will write a letter next week.", // Future Simple
        "He had written a letter before this week.", // Past Perfect
        "Разве он не написал письмо на этой неделе?", // Russian
        "Хіба він не написав листа цього тижня?", // Ukrainian
        "Czy nie napisał listu w tym tygodniu?" // Polish
    ],
    [
        "Haven't we been ready for the test this week?", // Negative question (be)
        "We have been ready for the test this week.", // Answer
        "We were ready for the test last week.", // Past Simple
        "We will be ready for the test next week.", // Future Simple
        "We had been ready for the test before this week.", // Past Perfect
        "Разве мы не были готовы к тесту на этой неделе?", // Russian
        "Хіба ми не були готові до тесту цього тижня?", // Ukrainian
        "Czy nie byliśmy gotowi na test w tym tygodniu?" // Polish
    ],
    [
        "Haven't they traveled to London this year?", // Negative question (do)
        "They have traveled to London this year.", // Answer
        "They traveled to London last year.", // Past Simple
        "They will travel to London next year.", // Future Simple
        "They had traveled to London before this year.", // Past Perfect
        "Разве они не путешествовали в Лондон в этом году?", // Russian
        "Хіба вони не подорожували до Лондона цього року?", // Ukrainian
        "Czy nie podróżowali do Londynu w tym roku?" // Polish
    ],
    [
        "Hasn't she had a job this month?", // Negative question (have)
        "She has had a job this month.", // Answer
        "She had a job last month.", // Past Simple
        "She will have a job next month.", // Future Simple
        "She had had a job before this month.", // Past Perfect
        "Разве у нее не было работы в этом месяце?", // Russian
        "Хіба у неї не було роботи цього місяця?", // Ukrainian
        "Czy nie miała pracy w tym miesiącu?" // Polish
    ],
    [
        "Haven't you been to the concert this week?", // Negative question (be)
        "I have been to the concert this week.", // Answer
        "I was at the concert last week.", // Past Simple
        "I will be at the concert next week.", // Future Simple
        "I had been to the concert before this week.", // Past Perfect
        "Разве ты не был на концерте на этой неделе?", // Russian
        "Хіба ти не був на концерті цього тижня?", // Ukrainian
        "Czy nie byłeś na koncercie w tym tygodniu?" // Polish
    ],
    [
        "Haven't they done their shopping this week?", // Negative question (do)
        "They have done their shopping this week.", // Answer
        "They did their shopping last week.", // Past Simple
        "They will do their shopping next week.", // Future Simple
        "They had done their shopping before this week.", // Past Perfect
        "Разве они не делали покупки на этой неделе?", // Russian
        "Хіба вони не робили покупки цього тижня?", // Ukrainian
        "Czy nie robili zakupów w tym tygodniu?" // Polish
    ],
    [
        "Hasn't the book been interesting this month?", // Negative question (be)
        "The book has been interesting this month.", // Answer
        "The book was interesting last month.", // Past Simple
        "The book will be interesting next month.", // Future Simple
        "The book had been interesting before this month.", // Past Perfect
        "Разве книга не была интересной в этом месяце?", // Russian
        "Хіба книга не була цікавою цього місяця?", // Ukrainian
        "Czy książka nie była interesująca w tym miesiącu?" // Polish
    ],
    [
        "Haven't you had a vacation this year?", // Negative question (have)
        "I have had a vacation this year.", // Answer
        "I had a vacation last year.", // Past Simple
        "I will have a vacation next year.", // Future Simple
        "I had had a vacation before this year.", // Past Perfect
        "Разве у тебя не было отпуска в этом году?", // Russian
        "Хіба у тебе не було відпустки цього року?", // Ukrainian
        "Czy nie miałem wakacji w tym roku?" // Polish
    ],
    [
        "Hasn't she called her friend this week?", // Negative question (do)
        "She has called her friend this week.", // Answer
        "She called her friend last week.", // Past Simple
        "She will call her friend next week.", // Future Simple
        "She had called her friend before this week.", // Past Perfect
        "Разве она не звонила своему другу на этой неделе?", // Russian
        "Хіба вона не телефонувала своєму другу цього тижня?", // Ukrainian
        "Czy nie dzwoniła do swojego przyjaciela w tym tygodniu?" // Polish
    ],
    [
        "Hasn't it been rainy this week?", // Negative question (be)
        "It has been rainy this week.", // Answer
        "It was rainy last week.", // Past Simple
        "It will be rainy next week.", // Future Simple
        "It had been rainy before this week.", // Past Perfect
        "Разве не было дождливо на этой неделе?", // Russian
        "Хіба не було дощово цього тижня?", // Ukrainian
        "Czy nie było deszczowo w tym tygodniu?" // Polish
    ],
    [
        "Hasn't he cleaned the room this week?", // Negative question (do)
        "He has cleaned the room this week.", // Answer
        "He cleaned the room last week.", // Past Simple
        "He will clean the room next week.", // Future Simple
        "He had cleaned the room before this week.", // Past Perfect
        "Разве он не убирал комнату на этой неделе?", // Russian
        "Хіба він не прибирав кімнату цього тижня?", // Ukrainian
        "Czy nie sprzątał pokoju w tym tygodniu?" // Polish
    ],
    [
        "Haven't we been to the park this month?", // Negative question (be)
        "We have been to the park this month.", // Answer
        "We were at the park last month.", // Past Simple
        "We will be at the park next month.", // Future Simple
        "We had been to the park before this month.", // Past Perfect
        "Разве мы не были в парке в этом месяце?", // Russian
        "Хіба ми не були в парку цього місяця?", // Ukrainian
        "Czy nie byliśmy w parku w tym miesiącu?" // Polish
    ],

    [
        "Have you been to Paris?", // Affirmative question (be)
        "I have been to Paris.", // Answer
        "I was in Paris last year.", // Past Simple
        "I will be in Paris next year.", // Future Simple
        "I had been to Paris before 2020.", // Past Perfect
        "Ты был в Париже?", // Russian
        "Чи був ти в Парижі?", // Ukrainian
        "Czy byłeś w Paryżu?" // Polish
    ],
    [
        "Haven't they had a meeting this week?", // Negative question (have)
        "They have had a meeting this week.", // Answer
        "They had a meeting last week.", // Past Simple
        "They will have a meeting next week.", // Future Simple
        "They had had a meeting before this week.", // Past Perfect
        "Разве у них не было встречи на этой неделе?", // Russian
        "Хіба у них не було зустрічі цього тижня?", // Ukrainian
        "Czy nie mieli spotkania w tym tygodniu?" // Polish
    ],
    [
        "Has she done her homework yet?", // Affirmative question (do)
        "She has done her homework.", // Answer
        "She did her homework yesterday.", // Past Simple
        "She will do her homework tomorrow.", // Future Simple
        "She had done her homework before class.", // Past Perfect
        "Она сделала домашнюю работу?", // Russian
        "Чи зробила вона домашню роботу?", // Ukrainian
        "Czy odrobiła pracę domową?" // Polish
    ],
    [
        "Haven't we been tired this week?", // Negative question (be)
        "We have been tired this week.", // Answer
        "We were tired last week.", // Past Simple
        "We will be tired next week.", // Future Simple
        "We had been tired before this week.", // Past Perfect
        "Разве мы не были уставшими на этой неделе?", // Russian
        "Хіба ми не були втомленими цього тижня?", // Ukrainian
        "Czy nie byliśmy zmęczeni w tym tygodniu?" // Polish
    ],
    [
        "Has he visited the museum yet?", // Affirmative question (do)
        "He has visited the museum.", // Answer
        "He visited the museum last month.", // Past Simple
        "He will visit the museum next month.", // Future Simple
        "He had visited the museum before this year.", // Past Perfect
        "Он посетил музей?", // Russian
        "Чи відвідав він музей?", // Ukrainian
        "Czy odwiedził muzeum?" // Polish
    ],
    [
        "Haven't they had enough time today?", // Negative question (have)
        "They have had enough time today.", // Answer
        "They had enough time yesterday.", // Past Simple
        "They will have enough time tomorrow.", // Future Simple
        "They had had enough time before today.", // Past Perfect
        "Разве у них не было достаточно времени сегодня?", // Russian
        "Хіба у них не було достатньо часу сьогодні?", // Ukrainian
        "Czy nie mieli wystarczająco dużo czasu dzisiaj?" // Polish
    ],
    [
        "Has the movie been interesting so far?", // Affirmative question (be)
        "The movie has been interesting.", // Answer
        "The movie was interesting yesterday.", // Past Simple
        "The movie will be interesting tomorrow.", // Future Simple
        "The movie had been interesting before today.", // Past Perfect
        "Фильм был интересным до сих пор?", // Russian
        "Чи був фільм цікавим досі?", // Ukrainian
        "Czy film był interesujący do tej pory?" // Polish
    ],
    [
        "Hasn't he done the dishes today?", // Negative question (do)
        "He has done the dishes today.", // Answer
        "He did the dishes yesterday.", // Past Simple
        "He will do the dishes tomorrow.", // Future Simple
        "He had done the dishes before today.", // Past Perfect
        "Разве он не помыл посуду сегодня?", // Russian
        "Хіба він не помив посуд сьогодні?", // Ukrainian
        "Czy nie zmył naczyń dzisiaj?" // Polish
    ],
    [
        "Have they been at home this morning?", // Affirmative question (be)
        "They have been at home this morning.", // Answer
        "They were at home yesterday morning.", // Past Simple
        "They will be at home tomorrow morning.", // Future Simple
        "They had been at home before this morning.", // Past Perfect
        "Они были дома этим утром?", // Russian
        "Чи були вони вдома цього ранку?", // Ukrainian
        "Czy byli w domu dziś rano?" // Polish
    ],
    [
        "Haven't you had a pet this year?", // Negative question (have)
        "I have had a pet this year.", // Answer
        "I had a pet last year.", // Past Simple
        "I will have a pet next year.", // Future Simple
        "I had had a pet before this year.", // Past Perfect
        "Разве у тебя не было питомца в этом году?", // Russian
        "Хіба у тебе не було домашньої тварини цього року?", // Ukrainian
        "Czy nie miałem zwierzaka w tym roku?" // Polish
    ],
    [
        "Has she played tennis this week?", // Affirmative question (do)
        "She has played tennis this week.", // Answer
        "She played tennis last week.", // Past Simple
        "She will play tennis next week.", // Future Simple
        "She had played tennis before this week.", // Past Perfect
        "Она играла в теннис на этой неделе?", // Russian
        "Чи грала вона в теніс цього тижня?", // Ukrainian
        "Czy grała w tenisa w tym tygodniu?" // Polish
    ],
    [
        "Haven't we been late for meetings this month?", // Negative question (be)
        "We have been late for meetings this month.", // Answer
        "We were late for meetings last month.", // Past Simple
        "We will be late for meetings next month.", // Future Simple
        "We had been late for meetings before this month.", // Past Perfect
        "Разве мы не опаздывали на встречи в этом месяце?", // Russian
        "Хіба ми не запізнювалися на зустрічі цього місяця?", // Ukrainian
        "Czy nie spóźnialiśmy się na spotkania w tym miesiącu?" // Polish
    ],
    [
        "Have you seen the new movie yet?", // Affirmative question (do)
        "I have seen the new movie.", // Answer
        "I saw the new movie last week.", // Past Simple
        "I will see the new movie next week.", // Future Simple
        "I had seen the new movie before this month.", // Past Perfect
        "Ты видел новый фильм?", // Russian
        "Чи бачив ти новий фільм?", // Ukrainian
        "Czy widziałeś nowy film?" // Polish
    ],
    [
        "Hasn't he had breakfast today?", // Negative question (have)
        "He has had breakfast today.", // Answer
        "He had breakfast yesterday.", // Past Simple
        "He will have breakfast tomorrow.", // Future Simple
        "He had had breakfast before today.", // Past Perfect
        "Разве он не завтракал сегодня?", // Russian
        "Хіба він не снідав сьогодні?", // Ukrainian
        "Czy nie jadł śniadania dzisiaj?" // Polish
    ],
    [
        "Has it been cold this week?", // Affirmative question (be)
        "It has been cold this week.", // Answer
        "It was cold last week.", // Past Simple
        "It will be cold next week.", // Future Simple
        "It had been cold before this week.", // Past Perfect
        "Было холодно на этой неделе?", // Russian
        "Чи було холодно цього тижня?", // Ukrainian
        "Czy było zimno w tym tygodniu?" // Polish
    ],
    [
        "Haven't they done their chores this weekend?", // Negative question (do)
        "They have done their chores this weekend.", // Answer
        "They did their chores last weekend.", // Past Simple
        "They will do their chores next weekend.", // Future Simple
        "They had done their chores before this weekend.", // Past Perfect
        "Разве они не сделали свои дела в эти выходные?", // Russian
        "Хіба вони не виконали свої справи цими вихідними?", // Ukrainian
        "Czy nie zrobili swoich obowiązków w ten weekend?" // Polish
    ],
    [
        "Has she been happy at work this month?", // Affirmative question (be)
        "She has been happy at work this month.", // Answer
        "She was happy at work last month.", // Past Simple
        "She will be happy at work next month.", // Future Simple
        "She had been happy at work before this month.", // Past Perfect
        "Она была счастлива на работе в этом месяце?", // Russian
        "Чи була вона щаслива на роботі цього місяця?", // Ukrainian
        "Czy była szczęśliwa w pracy w tym miesiącu?" // Polish
    ],
    [
        "Haven't you had a phone this year?", // Negative question (have)
        "I have had a phone this year.", // Answer
        "I had a phone last year.", // Past Simple
        "I will have a phone next year.", // Future Simple
        "I had had a phone before this year.", // Past Perfect
        "Разве у тебя не было телефона в этом году?", // Russian
        "Хіба у тебе не було телефону цього року?", // Ukrainian
        "Czy nie miałem telefonu w tym roku?" // Polish
    ],
    [
        "Has he written a letter this week?", // Affirmative question (do)
        "He has written a letter this week.", // Answer
        "He wrote a letter last week.", // Past Simple
        "He will write a letter next week.", // Future Simple
        "He had written a letter before this week.", // Past Perfect
        "Он написал письмо на этой неделе?", // Russian
        "Чи написав він листа цього тижня?", // Ukrainian
        "Czy napisał list w tym tygodniu?" // Polish
    ],
    [
        "Have we been ready for the test this week?", // Affirmative question (be)
        "We have been ready for the test this week.", // Answer
        "We were ready for the test last week.", // Past Simple
        "We will be ready for the test next week.", // Future Simple
        "We had been ready for the test before this week.", // Past Perfect
        "Мы были готовы к тесту на этой неделе?", // Russian
        "Чи були ми готові до тесту цього тижня?", // Ukrainian
        "Czy byliśmy gotowi na test w tym tygodniu?" // Polish
    ],
    [
        "Haven't they traveled to London this year?", // Negative question (do)
        "They have traveled to London this year.", // Answer
        "They traveled to London last year.", // Past Simple
        "They will travel to London next year.", // Future Simple
        "They had traveled to London before this year.", // Past Perfect
        "Разве они не путешествовали в Лондон в этом году?", // Russian
        "Хіба вони не подорожували до Лондона цього року?", // Ukrainian
        "Czy nie podróżowali do Londynu w tym roku?" // Polish
    ],
    [
        "Has she had a job this month?", // Affirmative question (have)
        "She has had a job this month.", // Answer
        "She had a job last month.", // Past Simple
        "She will have a job next month.", // Future Simple
        "She had had a job before this month.", // Past Perfect
        "У нее была работа в этом месяце?", // Russian
        "Чи була у неї робота цього місяця?", // Ukrainian
        "Czy miała pracę w tym miesiącu?" // Polish
    ],
    [
        "Have you been to the concert this week?", // Affirmative question (be)
        "I have been to the concert this week.", // Answer
        "I was at the concert last week.", // Past Simple
        "I will be at the concert next week.", // Future Simple
        "I had been to the concert before this week.", // Past Perfect
        "Ты был на концерте на этой неделе?", // Russian
        "Чи був ти на концерті цього тижня?", // Ukrainian
        "Czy byłeś na koncercie w tym tygodniu?" // Polish
    ],
    [
        "Haven't they done their shopping this week?", // Negative question (do)
        "They have done their shopping this week.", // Answer
        "They did their shopping last week.", // Past Simple
        "They will do their shopping next week.", // Future Simple
        "They had done their shopping before this week.", // Past Perfect
        "Разве они не делали покупки на этой неделе?", // Russian
        "Хіба вони не робили покупки цього тижня?", // Ukrainian
        "Czy nie robili zakupów w tym tygodniu?" // Polish
    ],
    [
        "Has the book been interesting this month?", // Affirmative question (be)
        "The book has been interesting this month.", // Answer
        "The book was interesting last month.", // Past Simple
        "The book will be interesting next month.", // Future Simple
        "The book had been interesting before this month.", // Past Perfect
        "Книга была интересной в этом месяце?", // Russian
        "Чи була книга цікавою цього місяця?", // Ukrainian
        "Czy książka była interesująca w tym miesiącu?" // Polish
    ],
    [
        "Haven't you had a vacation this year?", // Negative question (have)
        "I have had a vacation this year.", // Answer
        "I had a vacation last year.", // Past Simple
        "I will have a vacation next year.", // Future Simple
        "I had had a vacation before this year.", // Past Perfect
        "Разве у тебя не было отпуска в этом году?", // Russian
        "Хіба у тебе не було відпустки цього року?", // Ukrainian
        "Czy nie miałem wakacji w tym roku?" // Polish
    ],
    [
        "Has she called her friend this week?", // Affirmative question (do)
        "She has called her friend this week.", // Answer
        "She called her friend last week.", // Past Simple
        "She will call her friend next week.", // Future Simple
        "She had called her friend before this week.", // Past Perfect
        "Она звонила своему другу на этой неделе?", // Russian
        "Чи телефонувала вона своєму другу цього тижня?", // Ukrainian
        "Czy dzwoniła do swojego przyjaciela w tym tygodniu?" // Polish
    ],
    [
        "Has it been rainy this week?", // Affirmative question (be)
        "It has been rainy this week.", // Answer
        "It was rainy last week.", // Past Simple
        "It will be rainy next week.", // Future Simple
        "It had been rainy before this week.", // Past Perfect
        "Было дождливо на этой неделе?", // Russian
        "Чи було дощово цього тижня?", // Ukrainian
        "Czy było deszczowo w tym tygodniu?" // Polish
    ],
    [
        "Hasn't he cleaned the room this week?", // Negative question (do)
        "He has cleaned the room this week.", // Answer
        "He cleaned the room last week.", // Past Simple
        "He will clean the room next week.", // Future Simple
        "He had cleaned the room before this week.", // Past Perfect
        "Разве он не убирал комнату на этой неделе?", // Russian
        "Хіба він не прибирав кімнату цього тижня?", // Ukrainian
        "Czy nie sprzątał pokoju w tym tygodniu?" // Polish
    ],
    [
        "Have we been to the park this month?", // Affirmative question (be)
        "We have been to the park this month.", // Answer
        "We were at the park last month.", // Past Simple
        "We will be at the park next month.", // Future Simple
        "We had been to the park before this month.", // Past Perfect
        "Мы были в парке в этом месяце?", // Russian
        "Чи були ми в парку цього місяця?", // Ukrainian
        "Czy byliśmy w parku w tym miesiącu?" // Polish
    ],

    [
        "Have you been to Tokyo?", // Affirmative question (be)
        "I have been to Tokyo.", // Answer
        "I was in Tokyo last year.", // Past Simple
        "I will be in Tokyo next year.", // Future Simple
        "I had been to Tokyo before 2023.", // Past Perfect
        "Ты был в Токио?", // Russian
        "Чи був ти в Токіо?", // Ukrainian
        "Czy byłeś w Tokio?" // Polish
    ],
    [
        "Haven't they had a party this month?", // Negative question (have)
        "They have had a party this month.", // Answer
        "They had a party last month.", // Past Simple
        "They will have a party next month.", // Future Simple
        "They had had a party before this month.", // Past Perfect
        "Разве у них не было вечеринки в этом месяце?", // Russian
        "Хіба у них не було вечірки цього місяця?", // Ukrainian
        "Czy nie mieli imprezy w tym miesiącu?" // Polish
    ],
    [
        "Has she finished her project yet?", // Affirmative question (do)
        "She has finished her project.", // Answer
        "She finished her project last week.", // Past Simple
        "She will finish her project next week.", // Future Simple
        "She had finished her project before this month.", // Past Perfect
        "Она закончила свой проект?", // Russian
        "Чи закінчила вона свій проєкт?", // Ukrainian
        "Czy skończyła swój projekt?" // Polish
    ],
    [
        "Haven't we been busy this week?", // Negative question (be)
        "We have been busy this week.", // Answer
        "We were busy last week.", // Past Simple
        "We will be busy next week.", // Future Simple
        "We had been busy before this week.", // Past Perfect
        "Разве мы не были заняты на этой неделе?", // Russian
        "Хіба ми не були зайняті цього тижня?", // Ukrainian
        "Czy nie byliśmy zajęci w tym tygodniu?" // Polish
    ],
    [
        "Has he painted the house yet?", // Affirmative question (do)
        "He has painted the house.", // Answer
        "He painted the house last year.", // Past Simple
        "He will paint the house next year.", // Future Simple
        "He had painted the house before this year.", // Past Perfect
        "Он покрасил дом?", // Russian
        "Чи пофарбував він будинок?", // Ukrainian
        "Czy pomalował dom?" // Polish
    ],
    [
        "Haven't they had lunch today?", // Negative question (have)
        "They have had lunch today.", // Answer
        "They had lunch yesterday.", // Past Simple
        "They will have lunch tomorrow.", // Future Simple
        "They had had lunch before today.", // Past Perfect
        "Разве у них не было обеда сегодня?", // Russian
        "Хіба у них не було обіду сьогодні?", // Ukrainian
        "Czy nie jedli obiadu dzisiaj?" // Polish
    ],
    [
        "Has the event been exciting so far?", // Affirmative question (be)
        "The event has been exciting.", // Answer
        "The event was exciting yesterday.", // Past Simple
        "The event will be exciting tomorrow.", // Future Simple
        "The event had been exciting before today.", // Past Perfect
        "Мероприятие было захватывающим до сих пор?", // Russian
        "Чи була подія захоплюючою досі?", // Ukrainian
        "Czy wydarzenie było ekscytujące do tej pory?" // Polish
    ],
    [
        "Hasn't she cleaned the kitchen today?", // Negative question (do)
        "She has cleaned the kitchen today.", // Answer
        "She cleaned the kitchen yesterday.", // Past Simple
        "She will clean the kitchen tomorrow.", // Future Simple
        "She had cleaned the kitchen before today.", // Past Perfect
        "Разве она не убрала кухню сегодня?", // Russian
        "Хіба вона не прибрала кухню сьогодні?", // Ukrainian
        "Czy nie sprzątnęła kuchni dzisiaj?" // Polish
    ],
    [
        "Have they been in the city this week?", // Affirmative question (be)
        "They have been in the city this week.", // Answer
        "They were in the city last week.", // Past Simple
        "They will be in the city next week.", // Future Simple
        "They had been in the city before this week.", // Past Perfect
        "Они были в городе на этой неделе?", // Russian
        "Чи були вони в місті цього тижня?", // Ukrainian
        "Czy byli w mieście w tym tygodniu?" // Polish
    ],
    [
        "Haven't you had a car this year?", // Negative question (have)
        "I have had a car this year.", // Answer
        "I had a car last year.", // Past Simple
        "I will have a car next year.", // Future Simple
        "I had had a car before this year.", // Past Perfect
        "Разве у тебя не было машины в этом году?", // Russian
        "Хіба у тебе не було машини цього року?", // Ukrainian
        "Czy nie miałem samochodu w tym roku?" // Polish
    ],
    [
        "Has he played the guitar this month?", // Affirmative question (do)
        "He has played the guitar this month.", // Answer
        "He played the guitar last month.", // Past Simple
        "He will play the guitar next month.", // Future Simple
        "He had played the guitar before this month.", // Past Perfect
        "Он играл на гитаре в этом месяце?", // Russian
        "Чи грав він на гітарі цього місяця?", // Ukrainian
        "Czy grał na gitarze w tym miesiącu?" // Polish
    ],
    [
        "Haven't we been early for classes this week?", // Negative question (be)
        "We have been early for classes this week.", // Answer
        "We were early for classes last week.", // Past Simple
        "We will be early for classes next week.", // Future Simple
        "We had been early for classes before this week.", // Past Perfect
        "Разве мы не были рано на занятиях на этой неделе?", // Russian
        "Хіба ми не були рано на заняттях цього тижня?", // Ukrainian
        "Czy nie byliśmy wcześnie na zajęciach w tym tygodniu?" // Polish
    ],
    [
        "Have you read the new book yet?", // Affirmative question (do)
        "I have read the new book.", // Answer
        "I read the new book last month.", // Past Simple
        "I will read the new book next month.", // Future Simple
        "I had read the new book before this year.", // Past Perfect
        "Ты прочитал новую книгу?", // Russian
        "Чи прочитав ти нову книгу?", // Ukrainian
        "Czy przeczytałeś nową książkę?" // Polish
    ],
    [
        "Hasn't she had coffee today?", // Negative question (have)
        "She has had coffee today.", // Answer
        "She had coffee yesterday.", // Past Simple
        "She will have coffee tomorrow.", // Future Simple
        "She had had coffee before today.", // Past Perfect
        "Разве она не пила кофе сегодня?", // Russian
        "Хіба вона не пила каву сьогодні?", // Ukrainian
        "Czy nie piła kawy dzisiaj?" // Polish
    ],
    [
        "Has it been sunny this week?", // Affirmative question (be)
        "It has been sunny this week.", // Answer
        "It was sunny last week.", // Past Simple
        "It will be sunny next week.", // Future Simple
        "It had been sunny before this week.", // Past Perfect
        "Было солнечно на этой неделе?", // Russian
        "Чи було сонячно цього тижня?", // Ukrainian
        "Czy było słonecznie w tym tygodniu?" // Polish
    ],
    [
        "Haven't they fixed the car this month?", // Negative question (do)
        "They have fixed the car this month.", // Answer
        "They fixed the car last month.", // Past Simple
        "They will fix the car next month.", // Future Simple
        "They had fixed the car before this month.", // Past Perfect
        "Разве они не починили машину в этом месяце?", // Russian
        "Хіба вони не полагодили машину цього місяця?", // Ukrainian
        "Czy nie naprawili samochodu w tym miesiącu?" // Polish
    ],
    [
        "Has she been calm at work this week?", // Affirmative question (be)
        "She has been calm at work this week.", // Answer
        "She was calm at work last week.", // Past Simple
        "She will be calm at work next week.", // Future Simple
        "She had been calm at work before this week.", // Past Perfect
        "Она была спокойна на работе на этой неделе?", // Russian
        "Чи була вона спокійна на роботі цього тижня?", // Ukrainian
        "Czy była spokojna w pracy w tym tygodniu?" // Polish
    ],
    [
        "Haven't you had a laptop this year?", // Negative question (have)
        "I have had a laptop this year.", // Answer
        "I had a laptop last year.", // Past Simple
        "I will have a laptop next year.", // Future Simple
        "I had had a laptop before this year.", // Past Perfect
        "Разве у тебя не было ноутбука в этом году?", // Russian
        "Хіба у тебе не було ноутбука цього року?", // Ukrainian
        "Czy nie miałem laptopa w tym roku?" // Polish
    ],
    [
        "Has he cooked dinner this week?", // Affirmative question (do)
        "He has cooked dinner this week.", // Answer
        "He cooked dinner last week.", // Past Simple
        "He will cook dinner next week.", // Future Simple
        "He had cooked dinner before this week.", // Past Perfect
        "Он готовил ужин на этой неделе?", // Russian
        "Чи готував він вечерю цього тижня?", // Ukrainian
        "Czy gotował kolację w tym tygodniu?" // Polish
    ],
    [
        "Have we been to the beach this month?", // Affirmative question (be)
        "We have been to the beach this month.", // Answer
        "We were at the beach last month.", // Past Simple
        "We will be at the beach next month.", // Future Simple
        "We had been to the beach before this month.", // Past Perfect
        "Мы были на пляже в этом месяце?", // Russian
        "Чи були ми на пляжі цього місяця?", // Ukrainian
        "Czy byliśmy na plaży w tym miesiącu?" // Polish
    ],
    [
        "Haven't they visited their family this year?", // Negative question (do)
        "They have visited their family this year.", // Answer
        "They visited their family last year.", // Past Simple
        "They will visit their family next year.", // Future Simple
        "They had visited their family before this year.", // Past Perfect
        "Разве они не навещали семью в этом году?", // Russian
        "Хіба вони не відвідували родину цього року?", // Ukrainian
        "Czy nie odwiedzili rodziny w tym roku?" // Polish
    ],
    [
        "Has she had a bicycle this year?", // Affirmative question (have)
        "She has had a bicycle this year.", // Answer
        "She had a bicycle last year.", // Past Simple
        "She will have a bicycle next year.", // Future Simple
        "She had had a bicycle before this year.", // Past Perfect
        "У нее был велосипед в этом году?", // Russian
        "Чи був у неї велосипед цього року?", // Ukrainian
        "Czy miała rower w tym roku?" // Polish
    ],
    [
        "Have you been to the zoo this month?", // Affirmative question (be)
        "I have been to the zoo this month.", // Answer
        "I was at the zoo last month.", // Past Simple
        "I will be at the zoo next month.", // Future Simple
        "I had been to the zoo before this month.", // Past Perfect
        "Ты был в зоопарке в этом месяце?", // Russian
        "Чи був ти в зоопарку цього місяця?", // Ukrainian
        "Czy byłeś w zoo w tym miesiącu?" // Polish
    ],
    [
        "Haven't they watered the plants this week?", // Negative question (do)
        "They have watered the plants this week.", // Answer
        "They watered the plants last week.", // Past Simple
        "They will water the plants next week.", // Future Simple
        "They had watered the plants before this week.", // Past Perfect
        "Разве они не поливали растения на этой неделе?", // Russian
        "Хіба вони не поливали рослини цього тижня?", // Ukrainian
        "Czy nie podlewali roślin w tym tygodniu?" // Polish
    ],
    [
        "Has the game been fun this week?", // Affirmative question (be)
        "The game has been fun this week.", // Answer
        "The game was fun last week.", // Past Simple
        "The game will be fun next week.", // Future Simple
        "The game had been fun before this week.", // Past Perfect
        "Игра была веселой на этой неделе?", // Russian
        "Чи була гра веселою цього тижня?", // Ukrainian
        "Czy gra była zabawna w tym tygodniu?" // Polish
    ],
    [
        "Haven't you had a ticket this week?", // Negative question (have)
        "I have had a ticket this week.", // Answer
        "I had a ticket last week.", // Past Simple
        "I will have a ticket next week.", // Future Simple
        "I had had a ticket before this week.", // Past Perfect
        "Разве у тебя не было билета на этой неделе?", // Russian
        "Хіба у тебе не було квитка цього тижня?", // Ukrainian
        "Czy nie miałem biletu w tym tygodniu?" // Polish
    ],
    [
        "Has she walked the dog this morning?", // Affirmative question (do)
        "She has walked the dog this morning.", // Answer
        "She walked the dog yesterday morning.", // Past Simple
        "She will walk the dog tomorrow morning.", // Future Simple
        "She had walked the dog before this morning.", // Past Perfect
        "Она выгуливала собаку этим утром?", // Russian
        "Чи вигулювала вона собаку цього ранку?", // Ukrainian
        "Czy wyprowadziła psa dziś rano?" // Polish
    ],
    [
        "Has it been windy this week?", // Affirmative question (be)
        "It has been windy this week.", // Answer
        "It was windy last week.", // Past Simple
        "It will be windy next week.", // Future Simple
        "It had been windy before this week.", // Past Perfect
        "Было ветрено на этой неделе?", // Russian
        "Чи було вітряно цього тижня?", // Ukrainian
        "Czy było wietrznie w tym tygodniu?" // Polish
    ],
    [
        "Hasn't he studied for the exam this week?", // Negative question (do)
        "He has studied for the exam this week.", // Answer
        "He studied for the exam last week.", // Past Simple
        "He will study for the exam next week.", // Future Simple
        "He had studied for the exam before this week.", // Past Perfect
        "Разве он не готовился к экзамену на этой неделе?", // Russian
        "Хіба він не готувався до іспиту цього тижня?", // Ukrainian
        "Czy nie uczył się do egzaminu w tym tygodniu?" // Polish
    ],
    [
        "Have we been to the theater this month?", // Affirmative question (be)
        "We have been to the theater this month.", // Answer
        "We were at the theater last month.", // Past Simple
        "We will be at the theater next month.", // Future Simple
        "We had been to the theater before this month.", // Past Perfect
        "Мы были в театре в этом месяце?", // Russian
        "Чи були ми в театрі цього місяця?", // Ukrainian
        "Czy byliśmy w teatrze w tym miesiącu?" // Polish
    ],

    [
        "Was the room cleaned yesterday?", // Affirmative question (be)
        "The room was cleaned yesterday.", // Answer
        "The room is cleaned today.", // Present Simple
        "The room will be cleaned tomorrow.", // Future Simple
        "The room had been cleaned before yesterday.", // Past Perfect
        "Комната была убрана вчера?", // Russian
        "Чи була кімната прибрана вчора?", // Ukrainian
        "Czy pokój został posprzątany wczoraj?" // Polish
    ],
    [
        "Weren't the books read last week?", // Negative question (be)
        "The books were read last week.", // Answer
        "The books are read this week.", // Present Simple
        "The books will be read next week.", // Future Simple
        "The books had been read before last week.", // Past Perfect
        "Разве книги не были прочитаны на прошлой неделе?", // Russian
        "Хіба книги не були прочитані минулого тижня?", // Ukrainian
        "Czy książki nie zostały przeczytane w zeszłym tygodniu?" // Polish
    ],
    [
        "Was the house painted last year?", // Affirmative question (be)
        "The house was painted last year.", // Answer
        "The house is painted this year.", // Present Simple
        "The house will be painted next year.", // Future Simple
        "The house had been painted before last year.", // Past Perfect
        "Дом был покрашен в прошлом году?", // Russian
        "Чи був будинок пофарбований минулого року?", // Ukrainian
        "Czy dom został pomalowany w zeszłym roku?" // Polish
    ],
    [
        "Wasn't the car repaired last month?", // Negative question (be)
        "The car was repaired last month.", // Answer
        "The car is repaired this month.", // Present Simple
        "The car will be repaired next month.", // Future Simple
        "The car had been repaired before last month.", // Past Perfect
        "Разве машина не была отремонтирована в прошлом месяце?", // Russian
        "Хіба машина не була відремонтована минулого місяця?", // Ukrainian
        "Czy samochód nie został naprawiony w zeszłym miesiącu?" // Polish
    ],
    [
        "Was the letter written yesterday?", // Affirmative question (be)
        "The letter was written yesterday.", // Answer
        "The letter is written today.", // Present Simple
        "The letter will be written tomorrow.", // Future Simple
        "The letter had been written before yesterday.", // Past Perfect
        "Письмо было написано вчера?", // Russian
        "Чи був лист написаний учора?", // Ukrainian
        "Czy list został napisany wczoraj?" // Polish
    ],
    [
        "Weren't the dishes washed last night?", // Negative question (be)
        "The dishes were washed last night.", // Answer
        "The dishes are washed tonight.", // Present Simple
        "The dishes will be washed tomorrow night.", // Future Simple
        "The dishes had been washed before last night.", // Past Perfect
        "Разве посуда не была помыта вчера вечером?", // Russian
        "Хіба посуд не був помитий вчора ввечері?", // Ukrainian
        "Czy naczynia nie zostały umyte wczoraj wieczorem?" // Polish
    ],
    [
        "Was the project completed last week?", // Affirmative question (be)
        "The project was completed last week.", // Answer
        "The project is completed this week.", // Present Simple
        "The project will be completed next week.", // Future Simple
        "The project had been completed before last week.", // Past Perfect
        "Проект был завершен на прошлой неделе?", // Russian
        "Чи був проєкт завершений минулого тижня?", // Ukrainian
        "Czy projekt został ukończony w zeszłym tygodniu?" // Polish
    ],
    [
        "Wasn't the garden watered yesterday?", // Negative question (be)
        "The garden was watered yesterday.", // Answer
        "The garden is watered today.", // Present Simple
        "The garden will be watered tomorrow.", // Future Simple
        "The garden had been watered before yesterday.", // Past Perfect
        "Разве сад не был полит вчера?", // Russian
        "Хіба сад не був политий учора?", // Ukrainian
        "Czy ogród nie został podlany wczoraj?" // Polish
    ],
    [
        "Was the cake baked last weekend?", // Affirmative question (be)
        "The cake was baked last weekend.", // Answer
        "The cake is baked this weekend.", // Present Simple
        "The cake will be baked next weekend.", // Future Simple
        "The cake had been baked before last weekend.", // Past Perfect
        "Торт был испечен в прошлые выходные?", // Russian
        "Чи був торт спечений минулими вихідними?", // Ukrainian
        "Czy ciasto zostało upieczone w zeszły weekend?" // Polish
    ],
    [
        "Weren't the windows cleaned last month?", // Negative question (be)
        "The windows were cleaned last month.", // Answer
        "The windows are cleaned this month.", // Present Simple
        "The windows will be cleaned next month.", // Future Simple
        "The windows had been cleaned before last month.", // Past Perfect
        "Разве окна не были вымыты в прошлом месяце?", // Russian
        "Хіба вікна не були помиті минулого місяця?", // Ukrainian
        "Czy okna nie zostały umyte w zeszłym miesiącu?" // Polish
    ],
    [
        "Was the report prepared yesterday?", // Affirmative question (be)
        "The report was prepared yesterday.", // Answer
        "The report is prepared today.", // Present Simple
        "The report will be prepared tomorrow.", // Future Simple
        "The report had been prepared before yesterday.", // Past Perfect
        "Отчет был подготовлен вчера?", // Russian
        "Чи був звіт підготовлений учора?", // Ukrainian
        "Czy raport został przygotowany wczoraj?" // Polish
    ],
    [
        "Wasn't the dog walked last evening?", // Negative question (be)
        "The dog was walked last evening.", // Answer
        "The dog is walked this evening.", // Present Simple
        "The dog will be walked tomorrow evening.", // Future Simple
        "The dog had been walked before last evening.", // Past Perfect
        "Разве собака не была выгуляна вчера вечером?", // Russian
        "Хіба собака не була вигуляна вчора ввечері?", // Ukrainian
        "Czy pies nie został wyprowadzony wczoraj wieczorem?" // Polish
    ],
    [
        "Was the homework checked last night?", // Affirmative question (be)
        "The homework was checked last night.", // Answer
        "The homework is checked tonight.", // Present Simple
        "The homework will be checked tomorrow night.", // Future Simple
        "The homework had been checked before last night.", // Past Perfect
        "Домашняя работа была проверена вчера вечером?", // Russian
        "Чи була домашня робота перевірена вчора ввечері?", // Ukrainian
        "Czy praca domowa została sprawdzona wczoraj wieczorem?" // Polish
    ],
    [
        "Weren't the emails sent last week?", // Negative question (be)
        "The emails were sent last week.", // Answer
        "The emails are sent this week.", // Present Simple
        "The emails will be sent next week.", // Future Simple
        "The emails had been sent before last week.", // Past Perfect
        "Разве электронные письма не были отправлены на прошлой неделе?", // Russian
        "Хіба електронні листи не були відправлені минулого тижня?", // Ukrainian
        "Czy e-maile nie zostały wysłane w zeszłym tygodniu?" // Polish
    ],
    [
        "Was the meal cooked yesterday?", // Affirmative question (be)
        "The meal was cooked yesterday.", // Answer
        "The meal is cooked today.", // Present Simple
        "The meal will be cooked tomorrow.", // Future Simple
        "The meal had been cooked before yesterday.", // Past Perfect
        "Еда была приготовлена вчера?", // Russian
        "Чи була їжа приготовлена вчора?", // Ukrainian
        "Czy posiłek został ugotowany wczoraj?" // Polish
    ],
    [
        "Wasn't the floor mopped last weekend?", // Negative question (be)
        "The floor was mopped last weekend.", // Answer
        "The floor is mopped this weekend.", // Present Simple
        "The floor will be mopped next weekend.", // Future Simple
        "The floor had been mopped before last weekend.", // Past Perfect
        "Разве пол не был вымыт в прошлые выходные?", // Russian
        "Хіба підлога не була помита минулими вихідними?", // Ukrainian
        "Czy podłoga nie została umyta w zeszły weekend?" // Polish
    ],
    [
        "Was the car washed last week?", // Affirmative question (be)
        "The car was washed last week.", // Answer
        "The car is washed this week.", // Present Simple
        "The car will be washed next week.", // Future Simple
        "The car had been washed before last week.", // Past Perfect
        "Машина была помыта на прошлой неделе?", // Russian
        "Чи була машина помита минулого тижня?", // Ukrainian
        "Czy samochód został umyty w zeszłym tygodniu?" // Polish
    ],
    [
        "Weren't the documents signed yesterday?", // Negative question (be)
        "The documents were signed yesterday.", // Answer
        "The documents are signed today.", // Present Simple
        "The documents will be signed tomorrow.", // Future Simple
        "The documents had been signed before yesterday.", // Past Perfect
        "Разве документы не были подписаны вчера?", // Russian
        "Хіба документи не були підписані вчора?", // Ukrainian
        "Czy dokumenty nie zostały podpisane wczoraj?" // Polish
    ],
    [
        "Was the package delivered last month?", // Affirmative question (be)
        "The package was delivered last month.", // Answer
        "The package is delivered this month.", // Present Simple
        "The package will be delivered next month.", // Future Simple
        "The package had been delivered before last month.", // Past Perfect
        "Посылка была доставлена в прошлом месяце?", // Russian
        "Чи була посилка доставлена минулого місяця?", // Ukrainian
        "Czy paczka została dostarczona w zeszłym miesiącu?" // Polish
    ],
    [
        "Wasn't the painting finished last week?", // Negative question (be)
        "The painting was finished last week.", // Answer
        "The painting is finished this week.", // Present Simple
        "The painting will be finished next week.", // Future Simple
        "The painting had been finished before last week.", // Past Perfect
        "Разве картина не была закончена на прошлой неделе?", // Russian
        "Хіба картина не була закінчена минулого тижня?", // Ukrainian
        "Czy obraz nie został ukończony w zeszłym tygodniu?" // Polish
    ],
    [
        "Was the garden planted last spring?", // Affirmative question (be)
        "The garden was planted last spring.", // Answer
        "The garden is planted this spring.", // Present Simple
        "The garden will be planted next spring.", // Future Simple
        "The garden had been planted before last spring.", // Past Perfect
        "Сад был посажен прошлой весной?", // Russian
        "Чи був сад посаджений минулої весни?", // Ukrainian
        "Czy ogród został zasadzony zeszłej wiosny?" // Polish
    ],
    [
        "Weren't the invitations sent last month?", // Negative question (be)
        "The invitations were sent last month.", // Answer
        "The invitations are sent this month.", // Present Simple
        "The invitations will be sent next month.", // Future Simple
        "The invitations had been sent before last month.", // Past Perfect
        "Разве приглашения не были отправлены в прошлом месяце?", // Russian
        "Хіба запрошення не були відправлені минулого місяця?", // Ukrainian
        "Czy zaproszenia nie zostały wysłane w zeszłym miesiącu?" // Polish
    ],
    [
        "Was the fence repaired last summer?", // Affirmative question (be)
        "The fence was repaired last summer.", // Answer
        "The fence is repaired this summer.", // Present Simple
        "The fence will be repaired next summer.", // Future Simple
        "The fence had been repaired before last summer.", // Past Perfect
        "Забор был отремонтирован прошлым летом?", // Russian
        "Чи був паркан відремонтований минулого літа?", // Ukrainian
        "Czy płot został naprawiony zeszłego lata?" // Polish
    ],
    [
        "Wasn't the book published last year?", // Negative question (be)
        "The book was published last year.", // Answer
        "The book is published this year.", // Present Simple
        "The book will be published next year.", // Future Simple
        "The book had been published before last year.", // Past Perfect
        "Разве книга не была опубликована в прошлом году?", // Russian
        "Хіба книга не була опублікована минулого року?", // Ukrainian
        "Czy książka nie została opublikowana w zeszłym roku?" // Polish
    ],

    [
        "The room was cleaned yesterday.", // Statement (be)
        "Was the room cleaned yesterday?", // Question
        "Is the room cleaned today?", // Present Simple
        "Will the room be cleaned tomorrow?", // Future Simple
        "Had the room been cleaned before yesterday?", // Past Perfect
        "Комната была убрана вчера.", // Russian
        "Кімната була прибрана вчора.", // Ukrainian
        "Pokój został posprzątany wczoraj." // Polish
    ],
    [
        "The books were read last week.", // Statement (be)
        "Were the books read last week?", // Question
        "Are the books read this week?", // Present Simple
        "Will the books be read next week?", // Future Simple
        "Had the books been read before last week?", // Past Perfect
        "Книги были прочитаны на прошлой неделе.", // Russian
        "Книги були прочитані минулого тижня.", // Ukrainian
        "Książki zostały przeczytane w zeszłym tygodniu." // Polish
    ],
    [
        "The house was painted last year.", // Statement (be)
        "Was the house painted last year?", // Question
        "Is the house painted this year?", // Present Simple
        "Will the house be painted next year?", // Future Simple
        "Had the house been painted before last year?", // Past Perfect
        "Дом был покрашен в прошлом году.", // Russian
        "Будинок був пофарбований минулого року.", // Ukrainian
        "Dom został pomalowany w zeszłym roku." // Polish
    ],
    [
        "The car was repaired last month.", // Statement (be)
        "Was the car repaired last month?", // Question
        "Is the car repaired this month?", // Present Simple
        "Will the car be repaired next month?", // Future Simple
        "Had the car been repaired before last month?", // Past Perfect
        "Машина была отремонтирована в прошлом месяце.", // Russian
        "Машина була відремонтована минулого місяця.", // Ukrainian
        "Samochód został naprawiony w zeszłym miesiącu." // Polish
    ],
    [
        "The letter was written yesterday.", // Statement (be)
        "Was the letter written yesterday?", // Question
        "Is the letter written today?", // Present Simple
        "Will the letter be written tomorrow?", // Future Simple
        "Had the letter been written before yesterday?", // Past Perfect
        "Письмо было написано вчера.", // Russian
        "Лист був написаний учора.", // Ukrainian
        "List został napisany wczoraj." // Polish
    ],
    [
        "The dishes were washed last night.", // Statement (be)
        "Were the dishes washed last night?", // Question
        "Are the dishes washed tonight?", // Present Simple
        "Will the dishes be washed tomorrow night?", // Future Simple
        "Had the dishes been washed before last night?", // Past Perfect
        "Посуда была помыта вчера вечером.", // Russian
        "Посуд був помитий вчора ввечері.", // Ukrainian
        "Naczynia zostały umyte wczoraj wieczorem." // Polish
    ],
    [
        "The project was completed last week.", // Statement (be)
        "Was the project completed last week?", // Question
        "Is the project completed this week?", // Present Simple
        "Will the project be completed next week?", // Future Simple
        "Had the project been completed before last week?", // Past Perfect
        "Проект был завершен на прошлой неделе.", // Russian
        "Проєкт був завершений минулого тижня.", // Ukrainian
        "Projekt został ukończony w zeszłym tygodniu." // Polish
    ],
    [
        "The garden was watered yesterday.", // Statement (be)
        "Was the garden watered yesterday?", // Question
        "Is the garden watered today?", // Present Simple
        "Will the garden be watered tomorrow?", // Future Simple
        "Had the garden been watered before yesterday?", // Past Perfect
        "Сад был полит вчера.", // Russian
        "Сад був полятий учора.", // Ukrainian
        "Ogród został podlany wczoraj." // Polish
    ],
    [
        "The cake was baked last weekend.", // Statement (be)
        "Was the cake baked last weekend?", // Question
        "Is the cake baked this weekend?", // Present Simple
        "Will the cake be baked next weekend?", // Future Simple
        "Had the cake been baked before last weekend?", // Past Perfect
        "Торт был испечен в прошлые выходные.", // Russian
        "Торт був спечений минулими вихідними.", // Ukrainian
        "Ciasto zostało upieczone w zeszły weekend." // Polish
    ],
    [
        "The windows were cleaned last month.", // Statement (be)
        "Were the windows cleaned last month?", // Question
        "Are the windows cleaned this month?", // Present Simple
        "Will the windows be cleaned next month?", // Future Simple
        "Had the windows been cleaned before last month?", // Past Perfect
        "Окна были вымыты в прошлом месяце.", // Russian
        "Вікна були помиті минулого місяця.", // Ukrainian
        "Okna zostały umyte w zeszłym miesiącu." // Polish
    ],
    [
        "The report was prepared yesterday.", // Statement (be)
        "Was the report prepared yesterday?", // Question
        "Is the report prepared today?", // Present Simple
        "Will the report be prepared tomorrow?", // Future Simple
        "Had the report been prepared before yesterday?", // Past Perfect
        "Отчет был подготовлен вчера.", // Russian
        "Звіт був підготовлений учора.", // Ukrainian
        "Raport został przygotowany wczoraj." // Polish
    ],
    [
        "The dog was walked last evening.", // Statement (be)
        "Was the dog walked last evening?", // Question
        "Is the dog walked this evening?", // Present Simple
        "Will the dog be walked tomorrow evening?", // Future Simple
        "Had the dog been walked before last evening?", // Past Perfect
        "Собака была выгуляна вчера вечером.", // Russian
        "Собака була вигуляна вчора ввечері.", // Ukrainian
        "Pies został wyprowadzony wczoraj wieczorem." // Polish
    ],
    [
        "The homework was checked last night.", // Statement (be)
        "Was the homework checked last night?", // Question
        "Is the homework checked tonight?", // Present Simple
        "Will the homework be checked tomorrow night?", // Future Simple
        "Had the homework been checked before last night?", // Past Perfect
        "Домашняя работа была проверена вчера вечером.", // Russian
        "Домашня робота була перевірена вчора ввечері.", // Ukrainian
        "Praca domowa została sprawdzona wczoraj wieczorem." // Polish
    ],
    [
        "The emails were sent last week.", // Statement (be)
        "Were the emails sent last week?", // Question
        "Are the emails sent this week?", // Present Simple
        "Will the emails be sent next week?", // Future Simple
        "Had the emails been sent before last week?", // Past Perfect
        "Электронные письма были отправлены на прошлой неделе.", // Russian
        "Електронні листи були відправлені минулого тижня.", // Ukrainian
        "E-maile zostały wysłane w zeszłym tygodniu." // Polish
    ],
    [
        "The meal was cooked yesterday.", // Statement (be)
        "Was the meal cooked yesterday?", // Question
        "Is the meal cooked today?", // Present Simple
        "Will the meal be cooked tomorrow?", // Future Simple
        "Had the meal been cooked before yesterday?", // Past Perfect
        "Еда была приготовлена вчера.", // Russian
        "Їжа була приготовлена вчора.", // Ukrainian
        "Posiłek został ugotowany wczoraj." // Polish
    ],
    [
        "The floor was mopped last weekend.", // Statement (be)
        "Was the floor mopped last weekend?", // Question
        "Is the floor mopped this weekend?", // Present Simple
        "Will the floor be mopped next weekend?", // Future Simple
        "Had the floor been mopped before last weekend?", // Past Perfect
        "Пол был вымыт в прошлые выходные.", // Russian
        "Підлога була помита минулими вихідними.", // Ukrainian
        "Podłoga została umyta w zeszły weekend." // Polish
    ],
    [
        "The car was washed last week.", // Statement (be)
        "Was the car washed last week?", // Question
        "Is the car washed this week?", // Present Simple
        "Will the car be washed next week?", // Future Simple
        "Had the car been washed before last week?", // Past Perfect
        "Машина была помыта на прошлой неделе.", // Russian
        "Машина була помита минулого тижня.", // Ukrainian
        "Samochód został umyty w zeszłym tygodniu." // Polish
    ],
    [
        "The documents were signed yesterday.", // Statement (be)
        "Were the documents signed yesterday?", // Question
        "Are the documents signed today?", // Present Simple
        "Will the documents be signed tomorrow?", // Future Simple
        "Had the documents been signed before yesterday?", // Past Perfect
        "Документы были подписаны вчера.", // Russian
        "Документи були підписані вчора.", // Ukrainian
        "Dokumenty zostały podpisane wczoraj." // Polish
    ],
    [
        "The package was delivered last month.", // Statement (be)
        "Was the package delivered last month?", // Question
        "Is the package delivered this month?", // Present Simple
        "Will the package be delivered next month?", // Future Simple
        "Had the package been delivered before last month?", // Past Perfect
        "Посылка была доставлена в прошлом месяце.", // Russian
        "Посилка була доставлена минулого місяця.", // Ukrainian
        "Paczka została dostarczona w zeszłym miesiącu." // Polish
    ],
    [
        "The painting was finished last week.", // Statement (be)
        "Was the painting finished last week?", // Question
        "Is the painting finished this week?", // Present Simple
        "Will the painting be finished next week?", // Future Simple
        "Had the painting been finished before last week?", // Past Perfect
        "Картина была закончена на прошлой неделе.", // Russian
        "Картина була закінчена минулого тижня.", // Ukrainian
        "Obraz został ukończony w zeszłym tygodniu." // Polish
    ],
    [
        "The garden was planted last spring.", // Statement (be)
        "Was the garden planted last spring?", // Question
        "Is the garden planted this spring?", // Present Simple
        "Will the garden be planted next spring?", // Future Simple
        "Had the garden been planted before last spring?", // Past Perfect
        "Сад был посажен прошлой весной.", // Russian
        "Сад був посаджений минулої весни.", // Ukrainian
        "Ogród został zasadzony zeszłej wiosny." // Polish
    ],
    [
        "The invitations were sent last month.", // Statement (be)
        "Were the invitations sent last month?", // Question
        "Are the invitations sent this month?", // Present Simple
        "Will the invitations be sent next month?", // Future Simple
        "Had the invitations been sent before last month?", // Past Perfect
        "Приглашения были отправлены в прошлом месяце.", // Russian
        "Запрошення були відправлені минулого місяця.", // Ukrainian
        "Zaproszenia zostały wysłane w zeszłym miesiącu." // Polish
    ],
    [
        "The fence was repaired last summer.", // Statement (be)
        "Was the fence repaired last summer?", // Question
        "Is the fence repaired this summer?", // Present Simple
        "Will the fence be repaired next summer?", // Future Simple
        "Had the fence been repaired before last summer?", // Past Perfect
        "Забор был отремонтирован прошлым летом.", // Russian
        "Паркан був відремонтований минулого літа.", // Ukrainian
        "Płot został naprawiony zeszłego lata." // Polish
    ],
    [
        "The book was published last year.", // Statement (be)
        "Was the book published last year?", // Question
        "Is the book published this year?", // Present Simple
        "Will the book be published next year?", // Future Simple
        "Had the book been published before last year?", // Past Perfect
        "Книга была опубликована в прошлом году.", // Russian
        "Книга була опублікована минулого року.", // Ukrainian
        "Książka została opublikowana w zeszłym roku." // Polish
    ],
    [
        "The room was decorated last weekend.", // Statement (be)
        "Was the room decorated last weekend?", // Question
        "Is the room decorated this weekend?", // Present Simple
        "Will the room be decorated next weekend?", // Future Simple
        "Had the room been decorated before last weekend?", // Past Perfect
        "Комната была украшена в прошлые выходные.", // Russian
        "Кімната була прикрашена минулими вихідними.", // Ukrainian
        "Pokój został udekorowany w zeszły weekend." // Polish
    ],
    [
        "The table was set yesterday.", // Statement (be)
        "Was the table set yesterday?", // Question
        "Is the table set today?", // Present Simple
        "Will the table be set tomorrow?", // Future Simple
        "Had the table been set before yesterday?", // Past Perfect
        "Стол был накрыт вчера.", // Russian
        "Стіл був накритий учора.", // Ukrainian
        "Stół został nakryty wczoraj." // Polish
    ],
    [
        "The clothes were ironed last night.", // Statement (be)
        "Were the clothes ironed last night?", // Question
        "Are the clothes ironed tonight?", // Present Simple
        "Will the clothes be ironed tomorrow night?", // Future Simple
        "Had the clothes been ironed before last night?", // Past Perfect
        "Одежда была поглажена вчера вечером.", // Russian
        "Одяг був попрасований вчора ввечері.", // Ukrainian
        "Ubrania zostały wyprasowane wczoraj wieczorem." // Polish
    ],
    [
        "The building was constructed last year.", // Statement (be)
        "Was the building constructed last year?", // Question
        "Is the building constructed this year?", // Present Simple
        "Will the building be constructed next year?", // Future Simple
        "Had the building been constructed before last year?", // Past Perfect
        "Здание было построено в прошлом году.", // Russian
        "Будівля була побудована минулого року.", // Ukrainian
        "Budynek został zbudowany w zeszłym roku." // Polish
    ],
    [
        "The tickets were booked last week.", // Statement (be)
        "Were the tickets booked last week?", // Question
        "Are the tickets booked this week?", // Present Simple
        "Will the tickets be booked next week?", // Future Simple
        "Had the tickets been booked before last week?", // Past Perfect
        "Билеты были забронированы на прошлой неделе.", // Russian
        "Квитки були заброньовані минулого тижня.", // Ukrainian
        "Bilety zostały zarezerwowane w zeszłym tygodniu." // Polish
    ],
    [
        "The plants were watered last evening.", // Statement (be)
        "Were the plants watered last evening?", // Question
        "Are the plants watered this evening?", // Present Simple
        "Will the plants be watered tomorrow evening?", // Future Simple
        "Had the plants been watered before last evening?", // Past Perfect
        "Растения были политы вчера вечером.", // Russian
        "Рослини були политі вчора ввечері.", // Ukrainian
        "Rośliny zostały podlane wczoraj wieczorem." // Polish
    ],

    [
        "Is the room cleaned daily?", // Affirmative question (be)
        "The room is cleaned daily.", // Answer
        "The room was cleaned yesterday.", // Past Simple
        "The room will be cleaned tomorrow.", // Future Simple
        "The room has been cleaned today.", // Present Perfect
        "Комната убирается ежедневно?", // Russian
        "Чи прибирається кімната щодня?", // Ukrainian
        "Czy pokój jest sprzątany codziennie?" // Polish
    ],
    [
        "Aren’t the books read every month?", // Negative question (be)
        "The books are read every month.", // Answer
        "The books were read last month.", // Past Simple
        "The books will be read next month.", // Future Simple
        "The books have been read this month.", // Present Perfect
        "Разве книги не читаются каждый месяц?", // Russian
        "Хіба книги не читаються щомісяця?", // Ukrainian
        "Czy książki nie są czytane co miesiąc?" // Polish
    ],
    [
        "Is the house painted every year?", // Affirmative question (be)
        "The house is painted every year.", // Answer
        "The house was painted last year.", // Past Simple
        "The house will be painted next year.", // Future Simple
        "The house has been painted this year.", // Present Perfect
        "Дом красится каждый год?", // Russian
        "Чи фарбується будинок щороку?", // Ukrainian
        "Czy dom jest malowany co roku?" // Polish
    ],
    [
        "Isn’t the car repaired monthly?", // Negative question (be)
        "The car is repaired monthly.", // Answer
        "The car was repaired last month.", // Past Simple
        "The car will be repaired next month.", // Future Simple
        "The car has been repaired this month.", // Present Perfect
        "Разве машина не ремонтируется ежемесячно?", // Russian
        "Хіба машина не ремонтується щомісяця?", // Ukrainian
        "Czy samochód nie jest naprawiany co miesiąc?" // Polish
    ],
    [
        "Are the letters written weekly?", // Affirmative question (be)
        "The letters are written weekly.", // Answer
        "The letters were written last week.", // Past Simple
        "The letters will be written next week.", // Future Simple
        "The letters have been written this week.", // Present Perfect
        "Письма пишутся еженедельно?", // Russian
        "Чи пишуться листи щотижня?", // Ukrainian
        "Czy listy są pisane co tydzień?" // Polish
    ],
    [
        "Aren’t the dishes washed every evening?", // Negative question (be)
        "The dishes are washed every evening.", // Answer
        "The dishes were washed yesterday evening.", // Past Simple
        "The dishes will be washed tomorrow evening.", // Future Simple
        "The dishes have been washed today.", // Present Perfect
        "Разве посуда не моется каждый вечер?", // Russian
        "Хіба посуд не миється щовечора?", // Ukrainian
        "Czy naczynia nie są myte co wieczór?" // Polish
    ],
    [
        "Is the project reviewed monthly?", // Affirmative question (be)
        "The project is reviewed monthly.", // Answer
        "The project was reviewed last month.", // Past Simple
        "The project will be reviewed next month.", // Future Simple
        "The project has been reviewed this month.", // Present Perfect
        "Проект пересматривается ежемесячно?", // Russian
        "Чи переглядається проєкт щомісяця?", // Ukrainian
        "Czy projekt jest przeglądany co miesiąc?" // Polish
    ],
    [
        "Isn’t the garden watered daily?", // Negative question (be)
        "The garden is watered daily.", // Answer
        "The garden was watered yesterday.", // Past Simple
        "The garden will be watered tomorrow.", // Future Simple
        "The garden has been watered today.", // Present Perfect
        "Разве сад не поливается ежедневно?", // Russian
        "Хіба сад не поливається щодня?", // Ukrainian
        "Czy ogród nie jest podlewany codziennie?" // Polish
    ],
    [
        "Is the cake baked every weekend?", // Affirmative question (be)
        "The cake is baked every weekend.", // Answer
        "The cake was baked last weekend.", // Past Simple
        "The cake will be baked next weekend.", // Future Simple
        "The cake has been baked this weekend.", // Present Perfect
        "Торт печется каждые выходные?", // Russian
        "Чи печеться торт щовихідних?", // Ukrainian
        "Czy ciasto jest pieczone w każdy weekend?" // Polish
    ],
    [
        "Aren’t the windows cleaned monthly?", // Negative question (be)
        "The windows are cleaned monthly.", // Answer
        "The windows were cleaned last month.", // Past Simple
        "The windows will be cleaned next month.", // Future Simple
        "The windows have been cleaned this month.", // Present Perfect
        "Разве окна не моются ежемесячно?", // Russian
        "Хіба вікна не миються щомісяця?", // Ukrainian
        "Czy okna nie są myte co miesiąc?" // Polish
    ],
    [
        "Is the report prepared weekly?", // Affirmative question (be)
        "The report is prepared weekly.", // Answer
        "The report was prepared last week.", // Past Simple
        "The report will be prepared next week.", // Future Simple
        "The report has been prepared this week.", // Present Perfect
        "Отчет готовится еженедельно?", // Russian
        "Чи готується звіт щотижня?", // Ukrainian
        "Czy raport jest przygotowywany co tydzień?" // Polish
    ],
    [
        "Isn’t the dog walked daily?", // Negative question (be)
        "The dog is walked daily.", // Answer
        "The dog was walked yesterday.", // Past Simple
        "The dog will be walked tomorrow.", // Future Simple
        "The dog has been walked today.", // Present Perfect
        "Разве собака не выгуливается ежедневно?", // Russian
        "Хіба собака не вигулюється щодня?", // Ukrainian
        "Czy pies nie jest wyprowadzany codziennie?" // Polish
    ],
    [
        "Is the homework checked every evening?", // Affirmative question (be)
        "The homework is checked every evening.", // Answer
        "The homework was checked yesterday evening.", // Past Simple
        "The homework will be checked tomorrow evening.", // Future Simple
        "The homework has been checked today.", // Present Perfect
        "Домашняя работа проверяется каждый вечер?", // Russian
        "Чи перевіряється домашня робота щовечора?", // Ukrainian
        "Czy praca domowa jest sprawdzana co wieczór?" // Polish
    ],
    [
        "Aren’t the emails sent daily?", // Negative question (be)
        "The emails are sent daily.", // Answer
        "The emails were sent yesterday.", // Past Simple
        "The emails will be sent tomorrow.", // Future Simple
        "The emails have been sent today.", // Present Perfect
        "Разве электронные письма не отправляются ежедневно?", // Russian
        "Хіба електронні листи не відправляються щодня?", // Ukrainian
        "Czy e-maile nie są wysyłane codziennie?" // Polish
    ],
    [
        "Is the meal cooked every day?", // Affirmative question (be)
        "The meal is cooked every day.", // Answer
        "The meal was cooked yesterday.", // Past Simple
        "The meal will be cooked tomorrow.", // Future Simple
        "The meal has been cooked today.", // Present Perfect
        "Еда готовится каждый день?", // Russian
        "Чи готується їжа щодня?", // Ukrainian
        "Czy posiłek jest gotowany codziennie?" // Polish
    ],
    [
        "Isn’t the floor mopped weekly?", // Negative question (be)
        "The floor is mopped weekly.", // Answer
        "The floor was mopped last week.", // Past Simple
        "The floor will be mopped next week.", // Future Simple
        "The floor has been mopped this week.", // Present Perfect
        "Разве пол не моется еженедельно?", // Russian
        "Хіба підлога не миється щотижня?", // Ukrainian
        "Czy podłoga nie jest myta co tydzień?" // Polish
    ],
    [
        "Is the car washed every month?", // Affirmative question (be)
        "The car is washed every month.", // Answer
        "The car was washed last month.", // Past Simple
        "The car will be washed next month.", // Future Simple
        "The car has been washed this month.", // Present Perfect
        "Машина моется каждый месяц?", // Russian
        "Чи миється машина щомісяця?", // Ukrainian
        "Czy samochód jest myty co miesiąc?" // Polish
    ],
    [
        "Aren’t the documents signed daily?", // Negative question (be)
        "The documents are signed daily.", // Answer
        "The documents were signed yesterday.", // Past Simple
        "The documents will be signed tomorrow.", // Future Simple
        "The documents have been signed today.", // Present Perfect
        "Разве документы не подписываются ежедневно?", // Russian
        "Хіба документи не підписуються щодня?", // Ukrainian
        "Czy dokumenty nie są podpisywane codziennie?" // Polish
    ],
    [
        "Is the package delivered weekly?", // Affirmative question (be)
        "The package is delivered weekly.", // Answer
        "The package was delivered last week.", // Past Simple
        "The package will be delivered next week.", // Future Simple
        "The package has been delivered this week.", // Present Perfect
        "Посылка доставляется еженедельно?", // Russian
        "Чи доставляється посилка щотижня?", // Ukrainian
        "Czy paczka jest dostarczana co tydzień?" // Polish
    ],
    [
        "Isn’t the painting restored annually?", // Negative question (be)
        "The painting is restored annually.", // Answer
        "The painting was restored last year.", // Past Simple
        "The painting will be restored next year.", // Future Simple
        "The painting has been restored this year.", // Present Perfect
        "Разве картина не реставрируется ежегодно?", // Russian
        "Хіба картина не реставрується щороку?", // Ukrainian
        "Czy obraz nie jest odnawiany co roku?" // Polish
    ],
    [
        "Is the garden maintained monthly?", // Affirmative question (be)
        "The garden is maintained monthly.", // Answer
        "The garden was maintained last month.", // Past Simple
        "The garden will be maintained next month.", // Future Simple
        "The garden has been maintained this month.", // Present Perfect
        "Сад обслуживается ежемесячно?", // Russian
        "Чи обслуговується сад щомісяця?", // Ukrainian
        "Czy ogród jest utrzymywany co miesiąc?" // Polish
    ],
    [
        "Aren’t the invitations sent weekly?", // Negative question (be)
        "The invitations are sent weekly.", // Answer
        "The invitations were sent last week.", // Past Simple
        "The invitations will be sent next week.", // Future Simple
        "The invitations have been sent this week.", // Present Perfect
        "Разве приглашения не отправляются еженедельно?", // Russian
        "Хіба запрошення не відправляються щотижня?", // Ukrainian
        "Czy zaproszenia nie są wysyłane co tydzień?" // Polish
    ],
    [
        "Is the fence repaired annually?", // Affirmative question (be)
        "The fence is repaired annually.", // Answer
        "The fence was repaired last year.", // Past Simple
        "The fence will be repaired next year.", // Future Simple
        "The fence has been repaired this year.", // Present Perfect
        "Забор ремонтируется ежегодно?", // Russian
        "Чи ремонтується паркан щороку?", // Ukrainian
        "Czy płot jest naprawiany co roku?" // Polish
    ],
    [
        "Isn’t the book published monthly?", // Negative question (be)
        "The book is published monthly.", // Answer
        "The book was published last month.", // Past Simple
        "The book will be published next month.", // Future Simple
        "The book has been published this month.", // Present Perfect
        "Разве книга не публикуется ежемесячно?", // Russian
        "Хіба книга не публікується щомісяця?", // Ukrainian
        "Czy książka nie jest publikowana co miesiąc?" // Polish
    ],
    [
        "Is the room decorated annually?", // Affirmative question (be)
        "The room is decorated annually.", // Answer
        "The room was decorated last year.", // Past Simple
        "The room will be decorated next year.", // Future Simple
        "The room has been decorated this year.", // Present Perfect
        "Комната украшается ежегодно?", // Russian
        "Чи прикрашається кімната щороку?", // Ukrainian
        "Czy pokój jest dekorowany co roku?" // Polish
    ],
    [
        "Aren’t the tables set daily?", // Negative question (be)
        "The tables are set daily.", // Answer
        "The tables were set yesterday.", // Past Simple
        "The tables will be set tomorrow.", // Future Simple
        "The tables have been set today.", // Present Perfect
        "Разве столы не накрываются ежедневно?", // Russian
        "Хіба столи не накриваються щодня?", // Ukrainian
        "Czy stoły nie są nakrywane codziennie?" // Polish
    ],
    [
        "Is the laundry done weekly?", // Affirmative question (be)
        "The laundry is done weekly.", // Answer
        "The laundry was done last week.", // Past Simple
        "The laundry will be done next week.", // Future Simple
        "The laundry has been done this week.", // Present Perfect
        "Стирка делается еженедельно?", // Russian
        "Чи робиться прання щотижня?", // Ukrainian
        "Czy pranie jest robione co tydzień?" // Polish
    ],
    [
        "Isn’t the building cleaned daily?", // Negative question (be)
        "The building is cleaned daily.", // Answer
        "The building was cleaned yesterday.", // Past Simple
        "The building will be cleaned tomorrow.", // Future Simple
        "The building has been cleaned today.", // Present Perfect
        "Разве здание не убирается ежедневно?", // Russian
        "Хіба будівля не прибирається щодня?", // Ukrainian
        "Czy budynek nie jest sprzątany codziennie?" // Polish
    ],
    [
        "Are the tickets booked weekly?", // Affirmative question (be)
        "The tickets are booked weekly.", // Answer
        "The tickets were booked last week.", // Past Simple
        "The tickets will be booked next week.", // Future Simple
        "The tickets have been booked this week.", // Present Perfect
        "Билеты бронируются еженедельно?", // Russian
        "Чи бронюються квитки щотижня?", // Ukrainian
        "Czy bilety są rezerwowane co tydzień?" // Polish
    ],
    [
        "Aren’t the plants watered daily?", // Negative question (be)
        "The plants are watered daily.", // Answer
        "The plants were watered yesterday.", // Past Simple
        "The plants will be watered tomorrow.", // Future Simple
        "The plants have been watered today.", // Present Perfect
        "Разве растения не поливаются ежедневно?", // Russian
        "Хіба рослини не поливаються щодня?", // Ukrainian
        "Czy rośliny nie są podlewane codziennie?" // Polish
    ],

    [
        "The room is cleaned daily.", // Statement (be)
        "Is the room cleaned daily?", // Question
        "Was the room cleaned yesterday?", // Past Simple
        "Will the room be cleaned tomorrow?", // Future Simple
        "Has the room been cleaned today?", // Present Perfect
        "Комната убирается ежедневно.", // Russian
        "Кімната прибирається щодня.", // Ukrainian
        "Pokój jest sprzątany codziennie." // Polish
    ],
    [
        "The books are read every month.", // Statement (be)
        "Are the books read every month?", // Question
        "Were the books read last month?", // Past Simple
        "Will the books be read next month?", // Future Simple
        "Have the books been read this month?", // Present Perfect
        "Книги читаются каждый месяц.", // Russian
        "Книги читаються щомісяця.", // Ukrainian
        "Książki są czytane co miesiąc." // Polish
    ],
    [
        "The house is painted every year.", // Statement (be)
        "Is the house painted every year?", // Question
        "Was the house painted last year?", // Past Simple
        "Will the house be painted next year?", // Future Simple
        "Has the house been painted this year?", // Present Perfect
        "Дом красится каждый год.", // Russian
        "Будинок фарбується щороку.", // Ukrainian
        "Dom jest malowany co roku." // Polish
    ],
    [
        "The car is repaired monthly.", // Statement (be)
        "Is the car repaired monthly?", // Question
        "Was the car repaired last month?", // Past Simple
        "Will the car be repaired next month?", // Future Simple
        "Has the car been repaired this month?", // Present Perfect
        "Машина ремонтируется ежемесячно.", // Russian
        "Машина ремонтується щомісяця.", // Ukrainian
        "Samochód jest naprawiany co miesiąc." // Polish
    ],
    [
        "The letters are written weekly.", // Statement (be)
        "Are the letters written weekly?", // Question
        "Were the letters written last week?", // Past Simple
        "Will the letters be written next week?", // Future Simple
        "Have the letters been written this week?", // Present Perfect
        "Письма пишутся еженедельно.", // Russian
        "Листи пишуться щотижня.", // Ukrainian
        "Listy są pisane co tydzień." // Polish
    ],
    [
        "The dishes are washed every evening.", // Statement (be)
        "Are the dishes washed every evening?", // Question
        "Were the dishes washed yesterday evening?", // Past Simple
        "Will the dishes be washed tomorrow evening?", // Future Simple
        "Have the dishes been washed today?", // Present Perfect
        "Посуда моется каждый вечер.", // Russian
        "Посуд миється щовечора.", // Ukrainian
        "Naczynia są myte co wieczór." // Polish
    ],
    [
        "The project is reviewed monthly.", // Statement (be)
        "Is the project reviewed monthly?", // Question
        "Was the project reviewed last month?", // Past Simple
        "Will the project be reviewed next month?", // Future Simple
        "Has the project been reviewed this month?", // Present Perfect
        "Проект пересматривается ежемесячно.", // Russian
        "Проєкт переглядається щомісяця.", // Ukrainian
        "Projekt jest przeglądany co miesiąc." // Polish
    ],
    [
        "The garden is watered daily.", // Statement (be)
        "Is the garden watered daily?", // Question
        "Was the garden watered yesterday?", // Past Simple
        "Will the garden be watered tomorrow?", // Future Simple
        "Has the garden been watered today?", // Present Perfect
        "Сад поливается ежедневно.", // Russian
        "Сад поливається щодня.", // Ukrainian
        "Ogród jest podlewany codziennie." // Polish
    ],
    [
        "The cake is baked every weekend.", // Statement (be)
        "Is the cake baked every weekend?", // Question
        "Was the cake baked last weekend?", // Past Simple
        "Will the cake be baked next weekend?", // Future Simple
        "Has the cake been baked this weekend?", // Present Perfect
        "Торт печется каждые выходные.", // Russian
        "Торт печеться щовихідних.", // Ukrainian
        "Ciasto jest pieczone w każdy weekend." // Polish
    ],
    [
        "The windows are cleaned monthly.", // Statement (be)
        "Are the windows cleaned monthly?", // Question
        "Were the windows cleaned last month?", // Past Simple
        "Will the windows be cleaned next month?", // Future Simple
        "Have the windows been cleaned this month?", // Present Perfect
        "Окна моются ежемесячно.", // Russian
        "Вікна миються щомісяця.", // Ukrainian
        "Okna są myte co miesiąc." // Polish
    ],
    [
        "The report is prepared weekly.", // Statement (be)
        "Is the report prepared weekly?", // Question
        "Was the report prepared last week?", // Past Simple
        "Will the report be prepared next week?", // Future Simple
        "Has the report been prepared this week?", // Present Perfect
        "Отчет готовится еженедельно.", // Russian
        "Звіт готується щотижня.", // Ukrainian
        "Raport jest przygotowywany co tydzień." // Polish
    ],
    [
        "The dog is walked daily.", // Statement (be)
        "Is the dog walked daily?", // Question
        "Was the dog walked yesterday?", // Past Simple
        "Will the dog be walked tomorrow?", // Future Simple
        "Has the dog been walked today?", // Present Perfect
        "Собака выгуливается ежедневно.", // Russian
        "Собака вигулюється щодня.", // Ukrainian
        "Pies jest wyprowadzany codziennie." // Polish
    ],
    [
        "The homework is checked every evening.", // Statement (be)
        "Is the homework checked every evening?", // Question
        "Was the homework checked yesterday evening?", // Past Simple
        "Will the homework be checked tomorrow evening?", // Future Simple
        "Has the homework been checked today?", // Present Perfect
        "Домашняя работа проверяется каждый вечер.", // Russian
        "Домашня робота перевіряється щовечора.", // Ukrainian
        "Praca domowa jest sprawdzana co wieczór." // Polish
    ],
    [
        "The emails are sent daily.", // Statement (be)
        "Are the emails sent daily?", // Question
        "Were the emails sent yesterday?", // Past Simple
        "Will the emails be sent tomorrow?", // Future Simple
        "Have the emails been sent today?", // Present Perfect
        "Электронные письма отправляются ежедневно.", // Russian
        "Електронні листи відправляються щодня.", // Ukrainian
        "E-maile są wysyłane codziennie." // Polish
    ],
    [
        "The meal is cooked every day.", // Statement (be)
        "Is the meal cooked every day?", // Question
        "Was the meal cooked yesterday?", // Past Simple
        "Will the meal be cooked tomorrow?", // Future Simple
        "Has the meal been cooked today?", // Present Perfect
        "Еда готовится каждый день.", // Russian
        "Їжа готується щодня.", // Ukrainian
        "Posiłek jest gotowany codziennie." // Polish
    ],
    [
        "The floor is mopped weekly.", // Statement (be)
        "Is the floor mopped weekly?", // Question
        "Was the floor mopped last week?", // Past Simple
        "Will the floor be mopped next week?", // Future Simple
        "Has the floor been mopped this week?", // Present Perfect
        "Пол моется еженедельно.", // Russian
        "Підлога миється щотижня.", // Ukrainian
        "Podłoga jest myta co tydzień." // Polish
    ],
    [
        "The car is washed every month.", // Statement (be)
        "Is the car washed every month?", // Question
        "Was the car washed last month?", // Past Simple
        "Will the car be washed next month?", // Future Simple
        "Has the car been washed this month?", // Present Perfect
        "Машина моется каждый месяц.", // Russian
        "Машина миється щомісяця.", // Ukrainian
        "Samochód jest myty co miesiąc." // Polish
    ],
    [
        "The documents are signed daily.", // Statement (be)
        "Are the documents signed daily?", // Question
        "Were the documents signed yesterday?", // Past Simple
        "Will the documents be signed tomorrow?", // Future Simple
        "Have the documents been signed today?", // Present Perfect
        "Документы подписываются ежедневно.", // Russian
        "Документи підписуються щодня.", // Ukrainian
        "Dokumenty są podpisywane codziennie." // Polish
    ],
    [
        "The package is delivered weekly.", // Statement (be)
        "Is the package delivered weekly?", // Question
        "Was the package delivered last week?", // Past Simple
        "Will the package be delivered next week?", // Future Simple
        "Has the package been delivered this week?", // Present Perfect
        "Посылка доставляется еженедельно.", // Russian
        "Посилка доставляється щотижня.", // Ukrainian
        "Paczka jest dostarczana co tydzień." // Polish
    ],
    [
        "The painting is restored annually.", // Statement (be)
        "Is the painting restored annually?", // Question
        "Was the painting restored last year?", // Past Simple
        "Will the painting be restored next year?", // Future Simple
        "Has the painting been restored this year?", // Present Perfect
        "Картина реставрируется ежегодно.", // Russian
        "Картина реставрується щороку.", // Ukrainian
        "Obraz jest odnawiany co roku." // Polish
    ],
    [
        "The garden is maintained monthly.", // Statement (be)
        "Is the garden maintained monthly?", // Question
        "Was the garden maintained last month?", // Past Simple
        "Will the garden be maintained next month?", // Future Simple
        "Has the garden been maintained this month?", // Present Perfect
        "Сад обслуживается ежемесячно.", // Russian
        "Сад обслуговується щомісяця.", // Ukrainian
        "Ogród jest utrzymywany co miesiąc." // Polish
    ],
    [
        "The invitations are sent weekly.", // Statement (be)
        "Are the invitations sent weekly?", // Question
        "Were the invitations sent last week?", // Past Simple
        "Will the invitations be sent next week?", // Future Simple
        "Have the invitations been sent this week?", // Present Perfect
        "Приглашения отправляются еженедельно.", // Russian
        "Запрошення відправляються щотижня.", // Ukrainian
        "Zaproszenia są wysyłane co tydzień." // Polish
    ],
    [
        "The fence is repaired annually.", // Statement (be)
        "Is the fence repaired annually?", // Question
        "Was the fence repaired last year?", // Past Simple
        "Will the fence be repaired next year?", // Future Simple
        "Has the fence been repaired this year?", // Present Perfect
        "Забор ремонтируется ежегодно.", // Russian
        "Паркан ремонтується щороку.", // Ukrainian
        "Płot jest naprawiany co roku." // Polish
    ],
    [
        "The book is published monthly.", // Statement (be)
        "Is the book published monthly?", // Question
        "Was the book published last month?", // Past Simple
        "Will the book be published next month?", // Future Simple
        "Has the book been published this month?", // Present Perfect
        "Книга публикуется ежемесячно.", // Russian
        "Книга публікується щомісяця.", // Ukrainian
        "Książka jest publikowana co miesiąc." // Polish
    ],
    [
        "The room is decorated annually.", // Statement (be)
        "Is the room decorated annually?", // Question
        "Was the room decorated last year?", // Past Simple
        "Will the room be decorated next year?", // Future Simple
        "Has the room been decorated this year?", // Present Perfect
        "Комната украшается ежегодно.", // Russian
        "Кімната прикрашається щороку.", // Ukrainian
        "Pokój jest dekorowany co roku." // Polish
    ],
    [
        "The tables are set daily.", // Statement (be)
        "Are the tables set daily?", // Question
        "Were the tables set yesterday?", // Past Simple
        "Will the tables be set tomorrow?", // Future Simple
        "Have the tables been set today?", // Present Perfect
        "Столы накрываются ежедневно.", // Russian
        "Столи накриваються щодня.", // Ukrainian
        "Stoły są nakrywane codziennie." // Polish
    ],
    [
        "The laundry is done weekly.", // Statement (be)
        "Is the laundry done weekly?", // Question
        "Was the laundry done last week?", // Past Simple
        "Will the laundry be done next week?", // Future Simple
        "Has the laundry been done this week?", // Present Perfect
        "Стирка делается еженедельно.", // Russian
        "Прання робиться щотижня.", // Ukrainian
        "Pranie jest robione co tydzień." // Polish
    ],
    [
        "The building is cleaned daily.", // Statement (be)
        "Is the building cleaned daily?", // Question
        "Was the building cleaned yesterday?", // Past Simple
        "Will the building be cleaned tomorrow?", // Future Simple
        "Has the building been cleaned today?", // Present Perfect
        "Здание убирается ежедневно.", // Russian
        "Будівля прибирається щодня.", // Ukrainian
        "Budynek jest sprzątany codziennie." // Polish
    ],
    [
        "The tickets are booked weekly.", // Statement (be)
        "Are the tickets booked weekly?", // Question
        "Were the tickets booked last week?", // Past Simple
        "Will the tickets be booked next week?", // Future Simple
        "Have the tickets been booked this week?", // Present Perfect
        "Билеты бронируются еженедельно.", // Russian
        "Квитки бронюються щотижня.", // Ukrainian
        "Bilety są rezerwowane co tydzień." // Polish
    ],
    [
        "The plants are watered daily.", // Statement (be)
        "Are the plants watered daily?", // Question
        "Were the plants watered yesterday?", // Past Simple
        "Will the plants be watered tomorrow?", // Future Simple
        "Have the plants been watered today?", // Present Perfect
        "Растения поливаются ежедневно.", // Russian
        "Рослини поливаються щодня.", // Ukrainian
        "Rośliny są podlewane codziennie." // Polish
    ],

    [
        "Was she working yesterday?", // Affirmative question (be)
        "She was working yesterday.", // Answer
        "She is working today.", // Present Continuous
        "She will be working tomorrow.", // Future Continuous
        "She had been working before yesterday.", // Past Perfect Continuous
        "Она работала вчера?", // Russian
        "Чи працювала вона вчора?", // Ukrainian
        "Czy pracowała wczoraj?" // Polish
    ],
    [
        "Weren’t they studying last night?", // Negative question (be)
        "They were studying last night.", // Answer
        "They are studying tonight.", // Present Continuous
        "They will be studying tomorrow night.", // Future Continuous
        "They had been studying before last night.", // Past Perfect Continuous
        "Разве они не учились вчера вечером?", // Russian
        "Хіба вони не вчилися вчора ввечері?", // Ukrainian
        "Czy nie uczyli się wczoraj wieczorem?" // Polish
    ],
    [
        "Was he reading a book last evening?", // Affirmative question (be)
        "He was reading a book last evening.", // Answer
        "He is reading a book now.", // Present Continuous
        "He will be reading a book tomorrow evening.", // Future Continuous
        "He had been reading a book before last evening.", // Past Perfect Continuous
        "Он читал книгу вчера вечером?", // Russian
        "Чи читав він книгу вчора ввечері?", // Ukrainian
        "Czy czytał książkę wczoraj wieczorem?" // Polish
    ],
    [
        "Wasn’t she cooking dinner at 7 PM?", // Negative question (be)
        "She was cooking dinner at 7 PM.", // Answer
        "She is cooking dinner now.", // Present Continuous
        "She will be cooking dinner tomorrow at 7 PM.", // Future Continuous
        "She had been cooking dinner before 7 PM.", // Past Perfect Continuous
        "Разве она не готовила ужин в 7 вечера?", // Russian
        "Хіба вона не готувала вечерю о 7 годині вечора?", // Ukrainian
        "Czy nie gotowała kolacji o 19:00?" // Polish
    ],
    [
        "Were you playing soccer yesterday?", // Affirmative question (be)
        "You were playing soccer yesterday.", // Answer
        "You are playing soccer today.", // Present Continuous
        "You will be playing soccer tomorrow.", // Future Continuous
        "You had been playing soccer before yesterday.", // Past Perfect Continuous
        "Ты играл в футбол вчера?", // Russian
        "Чи грав ти у футбол вчора?", // Ukrainian
        "Czy grałeś w piłkę nożną wczoraj?" // Polish
    ],
    [
        "Weren’t we watching a movie last night?", // Negative question (be)
        "We were watching a movie last night.", // Answer
        "We are watching a movie now.", // Present Continuous
        "We will be watching a movie tomorrow night.", // Future Continuous
        "We had been watching a movie before last night.", // Past Perfect Continuous
        "Разве мы не смотрели фильм вчера вечером?", // Russian
        "Хіба ми не дивилися фільм вчора ввечері?", // Ukrainian
        "Czy nie oglądaliśmy filmu wczoraj wieczorem?" // Polish
    ],
    [
        "Was he writing a letter at noon?", // Affirmative question (be)
        "He was writing a letter at noon.", // Answer
        "He is writing a letter now.", // Present Continuous
        "He will be writing a letter tomorrow at noon.", // Future Continuous
        "He had been writing a letter before noon.", // Past Perfect Continuous
        "Он писал письмо в полдень?", // Russian
        "Чи писав він лист опівдні?", // Ukrainian
        "Czy pisał list w południe?" // Polish
    ],
    [
        "Wasn’t she painting the house last weekend?", // Negative question (be)
        "She was painting the house last weekend.", // Answer
        "She is painting the house this weekend.", // Present Continuous
        "She will be painting the house next weekend.", // Future Continuous
        "She had been painting the house before last weekend.", // Past Perfect Continuous
        "Разве она не красила дом в прошлые выходные?", // Russian
        "Хіба вона не фарбувала будинок минулими вихідними?", // Ukrainian
        "Czy nie malowała domu w zeszły weekend?" // Polish
    ],
    [
        "Were they running in the park yesterday?", // Affirmative question (be)
        "They were running in the park yesterday.", // Answer
        "They are running in the park today.", // Present Continuous
        "They will be running in the park tomorrow.", // Future Continuous
        "They had been running in the park before yesterday.", // Past Perfect Continuous
        "Они бегали в парке вчера?", // Russian
        "Чи бігали вони в парку вчора?", // Ukrainian
        "Czy biegali w parku wczoraj?" // Polish
    ],
    [
        "Wasn’t he fixing the car last evening?", // Negative question (be)
        "He was fixing the car last evening.", // Answer
        "He is fixing the car now.", // Present Continuous
        "He will be fixing the car tomorrow evening.", // Future Continuous
        "He had been fixing the car before last evening.", // Past Perfect Continuous
        "Разве он не чинил машину вчера вечером?", // Russian
        "Хіба він не ремонтував машину вчора ввечері?", // Ukrainian
        "Czy nie naprawiał samochodu wczoraj wieczorem?" // Polish
    ],
    [
        "Was she teaching a class yesterday?", // Affirmative question (be)
        "She was teaching a class yesterday.", // Answer
        "She is teaching a class today.", // Present Continuous
        "She will be teaching a class tomorrow.", // Future Continuous
        "She had been teaching a class before yesterday.", // Past Perfect Continuous
        "Она вела урок вчера?", // Russian
        "Чи вела вона урок вчора?", // Ukrainian
        "Czy prowadziła zajęcia wczoraj?" // Polish
    ],
    [
        "Weren’t you cleaning the house last weekend?", // Negative question (be)
        "You were cleaning the house last weekend.", // Answer
        "You are cleaning the house this weekend.", // Present Continuous
        "You will be cleaning the house next weekend.", // Future Continuous
        "You had been cleaning the house before last weekend.", // Past Perfect Continuous
        "Разве ты не убирал дом в прошлые выходные?", // Russian
        "Хіба ти не прибирав будинок минулими вихідними?", // Ukrainian
        "Czy nie sprzątałeś domu w zeszły weekend?" // Polish
    ],
    [
        "Was he swimming in the pool yesterday?", // Affirmative question (be)
        "He was swimming in the pool yesterday.", // Answer
        "He is swimming in the pool today.", // Present Continuous
        "He will be swimming in the pool tomorrow.", // Future Continuous
        "He had been swimming in the pool before yesterday.", // Past Perfect Continuous
        "Он плавал в бассейне вчера?", // Russian
        "Чи плавав він у басейні вчора?", // Ukrainian
        "Czy pływał w basenie wczoraj?" // Polish
    ],
    [
        "Weren’t they dancing at the party last night?", // Negative question (be)
        "They were dancing at the party last night.", // Answer
        "They are dancing at the party now.", // Present Continuous
        "They will be dancing at the party tomorrow night.", // Future Continuous
        "They had been dancing at the party before last night.", // Past Perfect Continuous
        "Разве они не танцевали на вечеринке вчера вечером?", // Russian
        "Хіба вони не танцювали на вечірці вчора ввечері?", // Ukrainian
        "Czy nie tańczyli na imprezie wczoraj wieczorem?" // Polish
    ],
    [
        "Was she singing in the choir last Sunday?", // Affirmative question (be)
        "She was singing in the choir last Sunday.", // Answer
        "She is singing in the choir this Sunday.", // Present Continuous
        "She will be singing in the choir next Sunday.", // Future Continuous
        "She had been singing in the choir before last Sunday.", // Past Perfect Continuous
        "Она пела в хоре в прошлое воскресенье?", // Russian
        "Чи співала вона в хорі минулої неділі?", // Ukrainian
        "Czy śpiewała w chórze w zeszłą niedzielę?" // Polish
    ],
    [
        "Wasn’t he gardening last afternoon?", // Negative question (be)
        "He was gardening last afternoon.", // Answer
        "He is gardening this afternoon.", // Present Continuous
        "He will be gardening tomorrow afternoon.", // Future Continuous
        "He had been gardening before last afternoon.", // Past Perfect Continuous
        "Разве он не занимался садоводством вчера днем?", // Russian
        "Хіба він не займався садівництвом вчора вдень?", // Ukrainian
        "Czy nie zajmował się ogrodem wczoraj po południu?" // Polish
    ],
    [
        "Were you walking in the park yesterday?", // Affirmative question (be)
        "You were walking in the park yesterday.", // Answer
        "You are walking in the park today.", // Present Continuous
        "You will be walking in the park tomorrow.", // Future Continuous
        "You had been walking in the park before yesterday.", // Past Perfect Continuous
        "Ты гулял в парке вчера?", // Russian
        "Чи гуляв ти в парку вчора?", // Ukrainian
        "Czy spacerowałeś w parku wczoraj?" // Polish
    ],
    [
        "Weren’t they talking on the phone last evening?", // Negative question (be)
        "They were talking on the phone last evening.", // Answer
        "They are talking on the phone now.", // Present Continuous
        "They will be talking on the phone tomorrow evening.", // Future Continuous
        "They had been talking on the phone before last evening.", // Past Perfect Continuous
        "Разве они не разговаривали по телефону вчера вечером?", // Russian
        "Хіба вони не розмовляли по телефону вчора ввечері?", // Ukrainian
        "Czy nie rozmawiali przez telefon wczoraj wieczorem?" // Polish
    ],
    [
        "Was she exercising at the gym yesterday?", // Affirmative question (be)
        "She was exercising at the gym yesterday.", // Answer
        "She is exercising at the gym today.", // Present Continuous
        "She will be exercising at the gym tomorrow.", // Future Continuous
        "She had been exercising at the gym before yesterday.", // Past Perfect Continuous
        "Она занималась в спортзале вчера?", // Russian
        "Чи займалася вона в спортзалі вчора?", // Ukrainian
        "Czy ćwiczyła na siłowni wczoraj?" // Polish
    ],
    [
        "Wasn’t he drawing a picture last night?", // Negative question (be)
        "He was drawing a picture last night.", // Answer
        "He is drawing a picture now.", // Present Continuous
        "He will be drawing a picture tomorrow night.", // Future Continuous
        "He had been drawing a picture before last night.", // Past Perfect Continuous
        "Разве он не рисовал картину вчера вечером?", // Russian
        "Хіба він не малював картину вчора ввечері?", // Ukrainian
        "Czy nie rysował obrazu wczoraj wieczorem?" // Polish
    ],
    [
        "Were they hiking in the mountains last weekend?", // Affirmative question (be)
        "They were hiking in the mountains last weekend.", // Answer
        "They are hiking in the mountains this weekend.", // Present Continuous
        "They will be hiking in the mountains next weekend.", // Future Continuous
        "They had been hiking in the mountains before last weekend.", // Past Perfect Continuous
        "Они ходили в поход в горы в прошлые выходные?", // Russian
        "Чи ходили вони в похід у гори минулими вихідними?", // Ukrainian
        "Czy wędrowali w górach w zeszły weekend?" // Polish
    ],
    [
        "Wasn’t she shopping at the mall yesterday?", // Negative question (be)
        "She was shopping at the mall yesterday.", // Answer
        "She is shopping at the mall today.", // Present Continuous
        "She will be shopping at the mall tomorrow.", // Future Continuous
        "She had been shopping at the mall before yesterday.", // Past Perfect Continuous
        "Разве она не делала покупки в торговом центре вчера?", // Russian
        "Хіба вона не робила покупки в торговому центрі вчора?", // Ukrainian
        "Czy nie robiła zakupów w centrum handlowym wczoraj?" // Polish
    ],
    [
        "Was he jogging in the park last morning?", // Affirmative question (be)
        "He was jogging in the park last morning.", // Answer
        "He is jogging in the park this morning.", // Present Continuous
        "He will be jogging in the park tomorrow morning.", // Future Continuous
        "He had been jogging in the park before last morning.", // Past Perfect Continuous
        "Он бегал в парке вчера утром?", // Russian
        "Чи бігав він у парку вчора вранці?", // Ukrainian
        "Czy biegał w parku wczoraj rano?" // Polish
    ],
    [
        "Weren’t you painting the fence last weekend?", // Negative question (be)
        "You were painting the fence last weekend.", // Answer
        "You are painting the fence this weekend.", // Present Continuous
        "You will be painting the fence next weekend.", // Future Continuous
        "You had been painting the fence before last weekend.", // Past Perfect Continuous
        "Разве ты не красил забор в прошлые выходные?", // Russian
        "Хіба ти не фарбував паркан минулими вихідними?", // Ukrainian
        "Czy nie malowałeś płotu w zeszły weekend?" // Polish
    ],

    [
        "She was working yesterday.", // Statement (be)
        "Was she working yesterday?", // Question
        "Is she working today?", // Present Continuous
        "Will she be working tomorrow?", // Future Continuous
        "Had she been working before yesterday?", // Past Perfect Continuous
        "Она работала вчера.", // Russian
        "Вона працювала вчора.", // Ukrainian
        "Ona pracowała wczoraj." // Polish
    ],
    [
        "They were studying last night.", // Statement (be)
        "Were they studying last night?", // Question
        "Are they studying tonight?", // Present Continuous
        "Will they be studying tomorrow night?", // Future Continuous
        "Had they been studying before last night?", // Past Perfect Continuous
        "Они учились вчера вечером.", // Russian
        "Вони вчилися вчора ввечері.", // Ukrainian
        "Oni uczyli się wczoraj wieczorem." // Polish
    ],
    [
        "He was reading a book last evening.", // Statement (be)
        "Was he reading a book last evening?", // Question
        "Is he reading a book now?", // Present Continuous
        "Will he be reading a book tomorrow evening?", // Future Continuous
        "Had he been reading a book before last evening?", // Past Perfect Continuous
        "Он читал книгу вчера вечером.", // Russian
        "Він читав книгу вчора ввечері.", // Ukrainian
        "On czytał książkę wczoraj wieczorem." // Polish
    ],
    [
        "She was cooking dinner at 7 PM.", // Statement (be)
        "Was she cooking dinner at 7 PM?", // Question
        "Is she cooking dinner now?", // Present Continuous
        "Will she be cooking dinner tomorrow at 7 PM?", // Future Continuous
        "Had she been cooking dinner before 7 PM?", // Past Perfect Continuous
        "Она готовила ужин в 7 вечера.", // Russian
        "Вона готувала вечерю о 7 годині вечора.", // Ukrainian
        "Ona gotowała kolację o 19:00." // Polish
    ],
    [
        "You were playing soccer yesterday.", // Statement (be)
        "Were you playing soccer yesterday?", // Question
        "Are you playing soccer today?", // Present Continuous
        "Will you be playing soccer tomorrow?", // Future Continuous
        "Had you been playing soccer before yesterday?", // Past Perfect Continuous
        "Ты играл в футбол вчера.", // Russian
        "Ти грав у футбол вчора.", // Ukrainian
        "Grałeś w piłkę nożną wczoraj." // Polish
    ],
    [
        "We were watching a movie last night.", // Statement (be)
        "Were we watching a movie last night?", // Question
        "Are we watching a movie now?", // Present Continuous
        "Will we be watching a movie tomorrow night?", // Future Continuous
        "Had we been watching a movie before last night?", // Past Perfect Continuous
        "Мы смотрели фильм вчера вечером.", // Russian
        "Ми дивилися фільм вчора ввечері.", // Ukrainian
        "Oglądaliśmy film wczoraj wieczorem." // Polish
    ],
    [
        "He was writing a letter at noon.", // Statement (be)
        "Was he writing a letter at noon?", // Question
        "Is he writing a letter now?", // Present Continuous
        "Will he be writing a letter tomorrow at noon?", // Future Continuous
        "Had he been writing a letter before noon?", // Past Perfect Continuous
        "Он писал письмо в полдень.", // Russian
        "Він писав лист опівдні.", // Ukrainian
        "On pisał list w południe." // Polish
    ],
    [
        "She was painting the house last weekend.", // Statement (be)
        "Was she painting the house last weekend?", // Question
        "Is she painting the house this weekend?", // Present Continuous
        "Will she be painting the house next weekend?", // Future Continuous
        "Had she been painting the house before last weekend?", // Past Perfect Continuous
        "Она красила дом в прошлые выходные.", // Russian
        "Вона фарбувала будинок минулими вихідними.", // Ukrainian
        "Ona malowała dom w zeszły weekend." // Polish
    ],
    [
        "They were running in the park yesterday.", // Statement (be)
        "Were they running in the park yesterday?", // Question
        "Are they running in the park today?", // Present Continuous
        "Will they be running in the park tomorrow?", // Future Continuous
        "Had they been running in the park before yesterday?", // Past Perfect Continuous
        "Они бегали в парке вчера.", // Russian
        "Вони бігали в парку вчора.", // Ukrainian
        "Oni biegali w parku wczoraj." // Polish
    ],
    [
        "He was fixing the car last evening.", // Statement (be)
        "Was he fixing the car last evening?", // Question
        "Is he fixing the car now?", // Present Continuous
        "Will he be fixing the car tomorrow evening?", // Future Continuous
        "Had he been fixing the car before last evening?", // Past Perfect Continuous
        "Он чинил машину вчера вечером.", // Russian
        "Він ремонтував машину вчора ввечері.", // Ukrainian
        "On naprawiał samochód wczoraj wieczorem." // Polish
    ],
    [
        "She was teaching a class yesterday.", // Statement (be)
        "Was she teaching a class yesterday?", // Question
        "Is she teaching a class today?", // Present Continuous
        "Will she be teaching a class tomorrow?", // Future Continuous
        "Had she been teaching a class before yesterday?", // Past Perfect Continuous
        "Она вела урок вчера.", // Russian
        "Вона вела урок вчора.", // Ukrainian
        "Ona prowadziła zajęcia wczoraj." // Polish
    ],
    [
        "You were cleaning the house last weekend.", // Statement (be)
        "Were you cleaning the house last weekend?", // Question
        "Are you cleaning the house this weekend?", // Present Continuous
        "Will you be cleaning the house next weekend?", // Future Continuous
        "Had you been cleaning the house before last weekend?", // Past Perfect Continuous
        "Ты убирал дом в прошлые выходные.", // Russian
        "Ти прибирав будинок минулими вихідними.", // Ukrainian
        "Sprzątałeś dom w zeszły weekend." // Polish
    ],
    [
        "He was swimming in the pool yesterday.", // Statement (be)
        "Was he swimming in the pool yesterday?", // Question
        "Is he swimming in the pool today?", // Present Continuous
        "Will he be swimming in the pool tomorrow?", // Future Continuous
        "Had he been swimming in the pool before yesterday?", // Past Perfect Continuous
        "Он плавал в бассейне вчера.", // Russian
        "Він плавав у басейні вчора.", // Ukrainian
        "On pływał w basenie wczoraj." // Polish
    ],
    [
        "They were dancing at the party last night.", // Statement (be)
        "Were they dancing at the party last night?", // Question
        "Are they dancing at the party now?", // Present Continuous
        "Will they be dancing at the party tomorrow night?", // Future Continuous
        "Had they been dancing at the party before last night?", // Past Perfect Continuous
        "Они танцевали на вечеринке вчера вечером.", // Russian
        "Вони танцювали на вечірці вчора ввечері.", // Ukrainian
        "Oni tańczyli na imprezie wczoraj wieczorem." // Polish
    ],
    [
        "She was singing in the choir last Sunday.", // Statement (be)
        "Was she singing in the choir last Sunday?", // Question
        "Is she singing in the choir this Sunday?", // Present Continuous
        "Will she be singing in the choir next Sunday?", // Future Continuous
        "Had she been singing in the choir before last Sunday?", // Past Perfect Continuous
        "Она пела в хоре в прошлое воскресенье.", // Russian
        "Вона співала в хорі минулої неділі.", // Ukrainian
        "Ona śpiewała w chórze w zeszłą niedzielę." // Polish
    ],
    [
        "He was gardening last afternoon.", // Statement (be)
        "Was he gardening last afternoon?", // Question
        "Is he gardening this afternoon?", // Present Continuous
        "Will he be gardening tomorrow afternoon?", // Future Continuous
        "Had he been gardening before last afternoon?", // Past Perfect Continuous
        "Он занимался садоводством вчера днем.", // Russian
        "Він займався садівництвом вчора вдень.", // Ukrainian
        "On zajmował się ogrodem wczoraj po południu." // Polish
    ],
    [
        "You were walking in the park yesterday.", // Statement (be)
        "Were you walking in the park yesterday?", // Question
        "Are you walking in the park today?", // Present Continuous
        "Will you be walking in the park tomorrow?", // Future Continuous
        "Had you been walking in the park before yesterday?", // Past Perfect Continuous
        "Ты гулял в парке вчера.", // Russian
        "Ти гуляв у парку вчора.", // Ukrainian
        "Spacerowałeś w parku wczoraj." // Polish
    ],
    [
        "They were talking on the phone last evening.", // Statement (be)
        "Were they talking on the phone last evening?", // Question
        "Are they talking on the phone now?", // Present Continuous
        "Will they be talking on the phone tomorrow evening?", // Future Continuous
        "Had they been talking on the phone before last evening?", // Past Perfect Continuous
        "Они разговаривали по телефону вчера вечером.", // Russian
        "Вони розмовляли по телефону вчора ввечері.", // Ukrainian
        "Oni rozmawiali przez telefon wczoraj wieczorem." // Polish
    ],
    [
        "She was exercising at the gym yesterday.", // Statement (be)
        "Was she exercising at the gym yesterday?", // Question
        "Is she exercising at the gym today?", // Present Continuous
        "Will she be exercising at the gym tomorrow?", // Future Continuous
        "Had she been exercising at the gym before yesterday?", // Past Perfect Continuous
        "Она занималась в спортзале вчера.", // Russian
        "Вона займалася в спортзалі вчора.", // Ukrainian
        "Ona ćwiczyła na siłowni wczoraj." // Polish
    ],
    [
        "He was drawing a picture last night.", // Statement (be)
        "Was he drawing a picture last night?", // Question
        "Is he drawing a picture now?", // Present Continuous
        "Will he be drawing a picture tomorrow night?", // Future Continuous
        "Had he been drawing a picture before last night?", // Past Perfect Continuous
        "Он рисовал картину вчера вечером.", // Russian
        "Він малював картину вчора ввечері.", // Ukrainian
        "On rysował obraz wczoraj wieczorem." // Polish
    ],
    [
        "They were hiking in the mountains last weekend.", // Statement (be)
        "Were they hiking in the mountains last weekend?", // Question
        "Are they hiking in the mountains this weekend?", // Present Continuous
        "Will they be hiking in the mountains next weekend?", // Future Continuous
        "Had they been hiking in the mountains before last weekend?", // Past Perfect Continuous
        "Они ходили в поход в горы в прошлые выходные.", // Russian
        "Вони ходили в похід у гори минулими вихідними.", // Ukrainian
        "Oni wędrowali w górach w zeszły weekend." // Polish
    ],
    [
        "She was shopping at the mall yesterday.", // Statement (be)
        "Was she shopping at the mall yesterday?", // Question
        "Is she shopping at the mall today?", // Present Continuous
        "Will she be shopping at the mall tomorrow?", // Future Continuous
        "Had she been shopping at the mall before yesterday?", // Past Perfect Continuous
        "Она делала покупки в торговом центре вчера.", // Russian
        "Вона робила покупки в торговому центрі вчора.", // Ukrainian
        "Ona robiła zakupy w centrum handlowym wczoraj." // Polish
    ],
    [
        "He was jogging in the park last morning.", // Statement (be)
        "Was he jogging in the park last morning?", // Question
        "Is he jogging in the park this morning?", // Present Continuous
        "Will he be jogging in the park tomorrow morning?", // Future Continuous
        "Had he been jogging in the park before last morning?", // Past Perfect Continuous
        "Он бегал в парке вчера утром.", // Russian
        "Він бігав у парку вчора вранці.", // Ukrainian
        "On biegał w parku wczoraj rano." // Polish
    ],
    [
        "You were painting the fence last weekend.", // Statement (be)
        "Were you painting the fence last weekend?", // Question
        "Are you painting the fence this weekend?", // Present Continuous
        "Will you be painting the fence next weekend?", // Future Continuous
        "Had you been painting the fence before last weekend?", // Past Perfect Continuous
        "Ты красил забор в прошлые выходные.", // Russian
        "Ти фарбував паркан минулими вихідними.", // Ukrainian
        "Malowałeś płot w zeszły weekend." // Polish
    ],
    [
        "She was knitting a scarf last evening.", // Statement (be)
        "Was she knitting a scarf last evening?", // Question
        "Is she knitting a scarf now?", // Present Continuous
        "Will she be knitting a scarf tomorrow evening?", // Future Continuous
        "Had she been knitting a scarf before last evening?", // Past Perfect Continuous
        "Она вязала шарф вчера вечером.", // Russian
        "Вона в’язала шарф вчора ввечері.", // Ukrainian
        "Ona robiła na drutach szalik wczoraj wieczorem." // Polish
    ],
    [
        "They were playing chess yesterday.", // Statement (be)
        "Were they playing chess yesterday?", // Question
        "Are they playing chess today?", // Present Continuous
        "Will they be playing chess tomorrow?", // Future Continuous
        "Had they been playing chess before yesterday?", // Past Perfect Continuous
        "Они играли в шахматы вчера.", // Russian
        "Вони грали в шахи вчора.", // Ukrainian
        "Oni grali w szachy wczoraj." // Polish
    ],
    [
        "He was repairing the bike last afternoon.", // Statement (be)
        "Was he repairing the bike last afternoon?", // Question
        "Is he repairing the bike this afternoon?", // Present Continuous
        "Will he be repairing the bike tomorrow afternoon?", // Future Continuous
        "Had he been repairing the bike before last afternoon?", // Past Perfect Continuous
        "Он чинил велосипед вчера днем.", // Russian
        "Він ремонтував велосипед вчора вдень.", // Ukrainian
        "On naprawiał rower wczoraj po południu." // Polish
    ],
    [
        "She was baking cookies last night.", // Statement (be)
        "Was she baking cookies last night?", // Question
        "Is she baking cookies now?", // Present Continuous
        "Will she be baking cookies tomorrow night?", // Future Continuous
        "Had she been baking cookies before last night?", // Past Perfect Continuous
        "Она пекла печенье вчера вечером.", // Russian
        "Вона пекла печиво вчора ввечері.", // Ukrainian
        "Ona piekła ciasteczka wczoraj wieczorem." // Polish
    ],
    [
        "You were gardening last weekend.", // Statement (be)
        "Were you gardening last weekend?", // Question
        "Are you gardening this weekend?", // Present Continuous
        "Will you be gardening next weekend?", // Future Continuous
        "Had you been gardening before last weekend?", // Past Perfect Continuous
        "Ты занимался садоводством в прошлые выходные.", // Russian
        "Ти займався садівництвом минулими вихідними.", // Ukrainian
        "Zajmowałeś się ogrodem w zeszły weekend." // Polish
    ],
    [
        "They were chatting online last evening.", // Statement (be)
        "Were they chatting online last evening?", // Question
        "Are they chatting online now?", // Present Continuous
        "Will they be chatting online tomorrow evening?", // Future Continuous
        "Had they been chatting online before last evening?", // Past Perfect Continuous
        "Они общались онлайн вчера вечером.", // Russian
        "Вони спілкувалися онлайн вчора ввечері.", // Ukrainian
        "Oni rozmawiali online wczoraj wieczorem." // Polish
    ],

    [
        "Is she working now?", // Affirmative question (be)
        "She is working now.", // Answer
        "She was working yesterday.", // Past Continuous
        "She will be working tomorrow.", // Future Continuous
        "She has been working today.", // Present Perfect Continuous
        "Она работает сейчас?", // Russian
        "Чи працює вона зараз?", // Ukrainian
        "Czy ona teraz pracuje?" // Polish
    ],
    [
        "Aren’t they studying at the moment?", // Negative question (be)
        "They are studying at the moment.", // Answer
        "They were studying last night.", // Past Continuous
        "They will be studying tomorrow.", // Future Continuous
        "They have been studying today.", // Present Perfect Continuous
        "Разве они не учатся сейчас?", // Russian
        "Хіба вони не вчаться зараз?", // Ukrainian
        "Czy oni nie uczą się teraz?" // Polish
    ],
    [
        "Is he reading a book right now?", // Affirmative question (be)
        "He is reading a book right now.", // Answer
        "He was reading a book last evening.", // Past Continuous
        "He will be reading a book tomorrow.", // Future Continuous
        "He has been reading a book today.", // Present Perfect Continuous
        "Он читает книгу прямо сейчас?", // Russian
        "Чи читає він книгу прямо зараз?", // Ukrainian
        "Czy on czyta książkę teraz?" // Polish
    ],
    [
        "Isn’t she cooking dinner now?", // Negative question (be)
        "She is cooking dinner now.", // Answer
        "She was cooking dinner yesterday.", // Past Continuous
        "She will be cooking dinner tomorrow.", // Future Continuous
        "She has been cooking dinner today.", // Present Perfect Continuous
        "Разве она не готовит ужин сейчас?", // Russian
        "Хіба вона не готує вечерю зараз?", // Ukrainian
        "Czy ona nie gotuje kolacji teraz?" // Polish
    ],
    [
        "Are you playing soccer at the moment?", // Affirmative question (be)
        "You are playing soccer at the moment.", // Answer
        "You were playing soccer yesterday.", // Past Continuous
        "You will be playing soccer tomorrow.", // Future Continuous
        "You have been playing soccer today.", // Present Perfect Continuous
        "Ты играешь в футбол сейчас?", // Russian
        "Чи граєш ти у футбол зараз?", // Ukrainian
        "Czy grasz w piłkę nożną teraz?" // Polish
    ],
    [
        "Aren’t we watching a movie right now?", // Negative question (be)
        "We are watching a movie right now.", // Answer
        "We were watching a movie last night.", // Past Continuous
        "We will be watching a movie tomorrow.", // Future Continuous
        "We have been watching a movie today.", // Present Perfect Continuous
        "Разве мы не смотрим фильм сейчас?", // Russian
        "Хіба ми не дивимося фільм зараз?", // Ukrainian
        "Czy nie oglądamy filmu teraz?" // Polish
    ],
    [
        "Is he writing a letter now?", // Affirmative question (be)
        "He is writing a letter now.", // Answer
        "He was writing a letter yesterday.", // Past Continuous
        "He will be writing a letter tomorrow.", // Future Continuous
        "He has been writing a letter today.", // Present Perfect Continuous
        "Он пишет письмо сейчас?", // Russian
        "Чи пише він лист зараз?", // Ukrainian
        "Czy on pisze list teraz?" // Polish
    ],
    [
        "Isn’t she painting the house today?", // Negative question (be)
        "She is painting the house today.", // Answer
        "She was painting the house last weekend.", // Past Continuous
        "She will be painting the house tomorrow.", // Future Continuous
        "She has been painting the house today.", // Present Perfect Continuous
        "Разве она не красит дом сегодня?", // Russian
        "Хіба вона не фарбує будинок сьогодні?", // Ukrainian
        "Czy ona nie maluje domu dzisiaj?" // Polish
    ],
    [
        "Are they running in the park now?", // Affirmative question (be)
        "They are running in the park now.", // Answer
        "They were running in the park yesterday.", // Past Continuous
        "They will be running in the park tomorrow.", // Future Continuous
        "They have been running in the park today.", // Present Perfect Continuous
        "Они бегают в парке сейчас?", // Russian
        "Чи бігають вони в парку зараз?", // Ukrainian
        "Czy oni biegają w parku teraz?" // Polish
    ],
    [
        "Isn’t he fixing the car now?", // Negative question (be)
        "He is fixing the car now.", // Answer
        "He was fixing the car yesterday.", // Past Continuous
        "He will be fixing the car tomorrow.", // Future Continuous
        "He has been fixing the car today.", // Present Perfect Continuous
        "Разве он не чинит машину сейчас?", // Russian
        "Хіба він не ремонтує машину зараз?", // Ukrainian
        "Czy on nie naprawia samochodu teraz?" // Polish
    ],
    [
        "Is she teaching a class now?", // Affirmative question (be)
        "She is teaching a class now.", // Answer
        "She was teaching a class yesterday.", // Past Continuous
        "She will be teaching a class tomorrow.", // Future Continuous
        "She has been teaching a class today.", // Present Perfect Continuous
        "Она ведет урок сейчас?", // Russian
        "Чи веде вона урок зараз?", // Ukrainian
        "Czy ona prowadzi zajęcia teraz?" // Polish
    ],
    [
        "Aren’t you cleaning the house today?", // Negative question (be)
        "You are cleaning the house today.", // Answer
        "You were cleaning the house last weekend.", // Past Continuous
        "You will be cleaning the house tomorrow.", // Future Continuous
        "You have been cleaning the house today.", // Present Perfect Continuous
        "Разве ты не убираешь дом сегодня?", // Russian
        "Хіба ти не прибираєш будинок сьогодні?", // Ukrainian
        "Czy nie sprzątasz domu dzisiaj?" // Polish
    ],
    [
        "Is he swimming in the pool now?", // Affirmative question (be)
        "He is swimming in the pool now.", // Answer
        "He was swimming in the pool yesterday.", // Past Continuous
        "He will be swimming in the pool tomorrow.", // Future Continuous
        "He has been swimming in the pool today.", // Present Perfect Continuous
        "Он плавает в бассейне сейчас?", // Russian
        "Чи плаває він у басейні зараз?", // Ukrainian
        "Czy on pływa w basenie teraz?" // Polish
    ],
    [
        "Aren’t they dancing at the party now?", // Negative question (be)
        "They are dancing at the party now.", // Answer
        "They were dancing at the party last night.", // Past Continuous
        "They will be dancing at the party tomorrow.", // Future Continuous
        "They have been dancing at the party today.", // Present Perfect Continuous
        "Разве они не танцуют на вечеринке сейчас?", // Russian
        "Хіба вони не танцюють на вечірці зараз?", // Ukrainian
        "Czy oni nie tańczą na imprezie teraz?" // Polish
    ],
    [
        "Is she singing in the choir now?", // Affirmative question (be)
        "She is singing in the choir now.", // Answer
        "She was singing in the choir yesterday.", // Past Continuous
        "She will be singing in the choir tomorrow.", // Future Continuous
        "She has been singing in the choir today.", // Present Perfect Continuous
        "Она поет в хоре сейчас?", // Russian
        "Чи співає вона в хорі зараз?", // Ukrainian
        "Czy ona śpiewa w chórze teraz?" // Polish
    ],
    [
        "Isn’t he gardening now?", // Negative question (be)
        "He is gardening now.", // Answer
        "He was gardening yesterday.", // Past Continuous
        "He will be gardening tomorrow.", // Future Continuous
        "He has been gardening today.", // Present Perfect Continuous
        "Разве он не занимается садоводством сейчас?", // Russian
        "Хіба він не займається садівництвом зараз?", // Ukrainian
        "Czy on nie zajmuje się ogrodem teraz?" // Polish
    ],
    [
        "Are you walking in the park now?", // Affirmative question (be)
        "You are walking in the park now.", // Answer
        "You were walking in the park yesterday.", // Past Continuous
        "You will be walking in the park tomorrow.", // Future Continuous
        "You have been walking in the park today.", // Present Perfect Continuous
        "Ты гуляешь в парке сейчас?", // Russian
        "Чи гуляєш ти в парку зараз?", // Ukrainian
        "Czy spacerujesz w parku teraz?" // Polish
    ],
    [
        "Aren’t they talking on the phone now?", // Negative question (be)
        "They are talking on the phone now.", // Answer
        "They were talking on the phone yesterday.", // Past Continuous
        "They will be talking on the phone tomorrow.", // Future Continuous
        "They have been talking on the phone today.", // Present Perfect Continuous
        "Разве они не разговаривают по телефону сейчас?", // Russian
        "Хіба вони не розмовляють по телефону зараз?", // Ukrainian
        "Czy oni nie rozmawiają przez telefon teraz?" // Polish
    ],
    [
        "Is she exercising at the gym now?", // Affirmative question (be)
        "She is exercising at the gym now.", // Answer
        "She was exercising at the gym yesterday.", // Past Continuous
        "She will be exercising at the gym tomorrow.", // Future Continuous
        "She has been exercising at the gym today.", // Present Perfect Continuous
        "Она занимается в спортзале сейчас?", // Russian
        "Чи займається вона в спортзалі зараз?", // Ukrainian
        "Czy ona ćwiczy na siłowni teraz?" // Polish
    ],
    [
        "Isn’t he drawing a picture now?", // Negative question (be)
        "He is drawing a picture now.", // Answer
        "He was drawing a picture yesterday.", // Past Continuous
        "He will be drawing a picture tomorrow.", // Future Continuous
        "He has been drawing a picture today.", // Present Perfect Continuous
        "Разве он не рисует картину сейчас?", // Russian
        "Хіба він не малює картину зараз?", // Ukrainian
        "Czy on nie rysuje obrazu teraz?" // Polish
    ],
    [
        "Are they hiking in the mountains today?", // Affirmative question (be)
        "They are hiking in the mountains today.", // Answer
        "They were hiking in the mountains last weekend.", // Past Continuous
        "They will be hiking in the mountains tomorrow.", // Future Continuous
        "They have been hiking in the mountains today.", // Present Perfect Continuous
        "Они ходят в поход в горы сегодня?", // Russian
        "Чи ходять вони в похід у гори сьогодні?", // Ukrainian
        "Czy oni wędrują w górach dzisiaj?" // Polish
    ],
    [
        "Isn’t she shopping at the mall now?", // Negative question (be)
        "She is shopping at the mall now.", // Answer
        "She was shopping at the mall yesterday.", // Past Continuous
        "She will be shopping at the mall tomorrow.", // Future Continuous
        "She has been shopping at the mall today.", // Present Perfect Continuous
        "Разве она не делает покупки в торговом центре сейчас?", // Russian
        "Хіба вона не робить покупки в торговому центрі зараз?", // Ukrainian
        "Czy ona nie robi zakupów w centrum handlowym teraz?" // Polish
    ],
    [
        "Is he jogging in the park now?", // Affirmative question (be)
        "He is jogging in the park now.", // Answer
        "He was jogging in the park yesterday.", // Past Continuous
        "He will be jogging in the park tomorrow.", // Future Continuous
        "He has been jogging in the park today.", // Present Perfect Continuous
        "Он бегает в парке сейчас?", // Russian
        "Чи бігає він у парку зараз?", // Ukrainian
        "Czy on biega w parku teraz?" // Polish
    ],
    [
        "Aren’t you painting the fence today?", // Negative question (be)
        "You are painting the fence today.", // Answer
        "You were painting the fence last weekend.", // Past Continuous
        "You will be painting the fence tomorrow.", // Future Continuous
        "You have been painting the fence today.", // Present Perfect Continuous
        "Разве ты не красишь забор сегодня?", // Russian
        "Хіба ти не фарбуєш паркан сьогодні?", // Ukrainian
        "Czy nie malujesz płotu dzisiaj?" // Polish
    ],
    [
        "Is she having lunch now?", // Affirmative question (have)
        "She is having lunch now.", // Answer
        "She was having lunch yesterday.", // Past Continuous
        "She will be having lunch tomorrow.", // Future Continuous
        "She has been having lunch today.", // Present Perfect Continuous
        "Она обедает сейчас?", // Russian
        "Чи обідає вона зараз?", // Ukrainian
        "Czy ona je lunch teraz?" // Polish
    ],
    [
        "Isn’t he knitting a scarf now?", // Negative question (be)
        "He is knitting a scarf now.", // Answer
        "He was knitting a scarf yesterday.", // Past Continuous
        "He will be knitting a scarf tomorrow.", // Future Continuous
        "He has been knitting a scarf today.", // Present Perfect Continuous
        "Разве он не вяжет шарф сейчас?", // Russian
        "Хіба він не в’яже шарф зараз?", // Ukrainian
        "Czy on nie robi na drutach szalika teraz?" // Polish
    ],
    [
        "Are they playing chess now?", // Affirmative question (be)
        "They are playing chess now.", // Answer
        "They were playing chess yesterday.", // Past Continuous
        "They will be playing chess tomorrow.", // Future Continuous
        "They have been playing chess today.", // Present Perfect Continuous
        "Они играют в шахматы сейчас?", // Russian
        "Чи грають вони в шахи зараз?", // Ukrainian
        "Czy oni grają w szachy teraz?" // Polish
    ],
    [
        "Isn’t she baking cookies now?", // Negative question (be)
        "She is baking cookies now.", // Answer
        "She was baking cookies yesterday.", // Past Continuous
        "She will be baking cookies tomorrow.", // Future Continuous
        "She has been baking cookies today.", // Present Perfect Continuous
        "Разве она не печет печенье сейчас?", // Russian
        "Хіба вона не пече печиво зараз?", // Ukrainian
        "Czy ona nie piecze ciasteczek teraz?" // Polish
    ],
    [
        "Is he repairing the bike now?", // Affirmative question (be)
        "He is repairing the bike now.", // Answer
        "He was repairing the bike yesterday.", // Past Continuous
        "He will be repairing the bike tomorrow.", // Future Continuous
        "He has been repairing the bike today.", // Present Perfect Continuous
        "Он чинит велосипед сейчас?", // Russian
        "Чи ремонтує він велосипед зараз?", // Ukrainian
        "Czy on naprawia rower teraz?" // Polish
    ],
    [
        "Aren’t they chatting online now?", // Negative question (be)
        "They are chatting online now.", // Answer
        "They were chatting online yesterday.", // Past Continuous
        "They will be chatting online tomorrow.", // Future Continuous
        "They have been chatting online today.", // Present Perfect Continuous
        "Разве они не общаются онлайн сейчас?", // Russian
        "Хіба вони не спілкуються онлайн зараз?", // Ukrainian
        "Czy oni nie rozmawiają online teraz?" // Polish
    ],

    [
        "She is working now.", // Statement (be)
        "Is she working now?", // Question
        "Was she working yesterday?", // Past Continuous
        "Will she be working tomorrow?", // Future Continuous
        "Has she been working today?", // Present Perfect Continuous
        "Она работает сейчас.", // Russian
        "Вона працює зараз.", // Ukrainian
        "Ona teraz pracuje." // Polish
    ],
    [
        "They are studying at the moment.", // Statement (be)
        "Are they studying at the moment?", // Question
        "Were they studying last night?", // Past Continuous
        "Will they be studying tomorrow?", // Future Continuous
        "Have they been studying today?", // Present Perfect Continuous
        "Они учатся сейчас.", // Russian
        "Вони вчаться зараз.", // Ukrainian
        "Oni uczą się teraz." // Polish
    ],
    [
        "He is reading a book right now.", // Statement (be)
        "Is he reading a book right now?", // Question
        "Was he reading a book last evening?", // Past Continuous
        "Will he be reading a book tomorrow?", // Future Continuous
        "Has he been reading a book today?", // Present Perfect Continuous
        "Он читает книгу прямо сейчас.", // Russian
        "Він читає книгу прямо зараз.", // Ukrainian
        "On czyta książkę teraz." // Polish
    ],
    [
        "She is cooking dinner now.", // Statement (be)
        "Is she cooking dinner now?", // Question
        "Was she cooking dinner yesterday?", // Past Continuous
        "Will she be cooking dinner tomorrow?", // Future Continuous
        "Has she been cooking dinner today?", // Present Perfect Continuous
        "Она готовит ужин сейчас.", // Russian
        "Вона готує вечерю зараз.", // Ukrainian
        "Ona gotuje kolację teraz." // Polish
    ],
    [
        "You are playing soccer at the moment.", // Statement (be)
        "Are you playing soccer at the moment?", // Question
        "Were you playing soccer yesterday?", // Past Continuous
        "Will you be playing soccer tomorrow?", // Future Continuous
        "Have you been playing soccer today?", // Present Perfect Continuous
        "Ты играешь в футбол сейчас.", // Russian
        "Ти граєш у футбол зараз.", // Ukrainian
        "Grasz w piłkę nożną teraz." // Polish
    ],
    [
        "We are watching a movie right now.", // Statement (be)
        "Are we watching a movie right now?", // Question
        "Were we watching a movie last night?", // Past Continuous
        "Will we be watching a movie tomorrow?", // Future Continuous
        "Have we been watching a movie today?", // Present Perfect Continuous
        "Мы смотрим фильм сейчас.", // Russian
        "Ми дивимося фільм зараз.", // Ukrainian
        "Oglądamy film teraz." // Polish
    ],
    [
        "He is writing a letter now.", // Statement (be)
        "Is he writing a letter now?", // Question
        "Was he writing a letter yesterday?", // Past Continuous
        "Will he be writing a letter tomorrow?", // Future Continuous
        "Has he been writing a letter today?", // Present Perfect Continuous
        "Он пишет письмо сейчас.", // Russian
        "Він пише лист зараз.", // Ukrainian
        "On pisze list teraz." // Polish
    ],
    [
        "She is painting the house today.", // Statement (be)
        "Is she painting the house today?", // Question
        "Was she painting the house last weekend?", // Past Continuous
        "Will she be painting the house tomorrow?", // Future Continuous
        "Has she been painting the house today?", // Present Perfect Continuous
        "Она красит дом сегодня.", // Russian
        "Вона фарбує будинок сьогодні.", // Ukrainian
        "Ona maluje dom dzisiaj." // Polish
    ],
    [
        "They are running in the park now.", // Statement (be)
        "Are they running in the park now?", // Question
        "Were they running in the park yesterday?", // Past Continuous
        "Will they be running in the park tomorrow?", // Future Continuous
        "Have they been running in the park today?", // Present Perfect Continuous
        "Они бегают в парке сейчас.", // Russian
        "Вони бігають у парку зараз.", // Ukrainian
        "Oni biegają w parku teraz." // Polish
    ],
    [
        "He is fixing the car now.", // Statement (be)
        "Is he fixing the car now?", // Question
        "Was he fixing the car yesterday?", // Past Continuous
        "Will he be fixing the car tomorrow?", // Future Continuous
        "Has he been fixing the car today?", // Present Perfect Continuous
        "Он чинит машину сейчас.", // Russian
        "Він ремонтує машину зараз.", // Ukrainian
        "On naprawia samochód teraz." // Polish
    ],
    [
        "She is teaching a class now.", // Statement (be)
        "Is she teaching a class now?", // Question
        "Was she teaching a class yesterday?", // Past Continuous
        "Will she be teaching a class tomorrow?", // Future Continuous
        "Has she been teaching a class today?", // Present Perfect Continuous
        "Она ведет урок сейчас.", // Russian
        "Вона веде урок зараз.", // Ukrainian
        "Ona prowadzi zajęcia teraz." // Polish
    ],
    [
        "You are cleaning the house today.", // Statement (be)
        "Are you cleaning the house today?", // Question
        "Were you cleaning the house last weekend?", // Past Continuous
        "Will you be cleaning the house tomorrow?", // Future Continuous
        "Have you been cleaning the house today?", // Present Perfect Continuous
        "Ты убираешь дом сегодня.", // Russian
        "Ти прибираєш будинок сьогодні.", // Ukrainian
        "Sprzątasz dom dzisiaj." // Polish
    ],
    [
        "He is swimming in the pool now.", // Statement (be)
        "Is he swimming in the pool now?", // Question
        "Was he swimming in the pool yesterday?", // Past Continuous
        "Will he be swimming in the pool tomorrow?", // Future Continuous
        "Has he been swimming in the pool today?", // Present Perfect Continuous
        "Он плавает в бассейне сейчас.", // Russian
        "Він плаває у басейні зараз.", // Ukrainian
        "On pływa w basenie teraz." // Polish
    ],
    [
        "They are dancing at the party now.", // Statement (be)
        "Are they dancing at the party now?", // Question
        "Were they dancing at the party last night?", // Past Continuous
        "Will they be dancing at the party tomorrow?", // Future Continuous
        "Have they been dancing at the party today?", // Present Perfect Continuous
        "Они танцуют на вечеринке сейчас.", // Russian
        "Вони танцюють на вечірці зараз.", // Ukrainian
        "Oni tańczą na imprezie teraz." // Polish
    ],
    [
        "She is singing in the choir now.", // Statement (be)
        "Is she singing in the choir now?", // Question
        "Was she singing in the choir yesterday?", // Past Continuous
        "Will she be singing in the choir tomorrow?", // Future Continuous
        "Has she been singing in the choir today?", // Present Perfect Continuous
        "Она поет в хоре сейчас.", // Russian
        "Вона співає у хорі зараз.", // Ukrainian
        "Ona śpiewa w chórze teraz." // Polish
    ],
    [
        "He is gardening now.", // Statement (be)
        "Is he gardening now?", // Question
        "Was he gardening yesterday?", // Past Continuous
        "Will he be gardening tomorrow?", // Future Continuous
        "Has he been gardening today?", // Present Perfect Continuous
        "Он занимается садоводством сейчас.", // Russian
        "Він займається садівництвом зараз.", // Ukrainian
        "On zajmuje się ogrodem teraz." // Polish
    ],
    [
        "You are walking in the park now.", // Statement (be)
        "Are you walking in the park now?", // Question
        "Were you walking in the park yesterday?", // Past Continuous
        "Will you be walking in the park tomorrow?", // Future Continuous
        "Have you been walking in the park today?", // Present Perfect Continuous
        "Ты гуляешь в парке сейчас.", // Russian
        "Ти гуляєш у парку зараз.", // Ukrainian
        "Spacerujesz w parku teraz." // Polish
    ],
    [
        "They are talking on the phone now.", // Statement (be)
        "Are they talking on the phone now?", // Question
        "Were they talking on the phone yesterday?", // Past Continuous
        "Will they be talking on the phone tomorrow?", // Future Continuous
        "Have they been talking on the phone today?", // Present Perfect Continuous
        "Они разговаривают по телефону сейчас.", // Russian
        "Вони розмовляють по телефону зараз.", // Ukrainian
        "Oni rozmawiają przez telefon teraz." // Polish
    ],
    [
        "She is exercising at the gym now.", // Statement (be)
        "Is she exercising at the gym now?", // Question
        "Was she exercising at the gym yesterday?", // Past Continuous
        "Will she be exercising at the gym tomorrow?", // Future Continuous
        "Has she been exercising at the gym today?", // Present Perfect Continuous
        "Она занимается в спортзале сейчас.", // Russian
        "Вона займається у спортзалі зараз.", // Ukrainian
        "Ona ćwiczy na siłowni teraz." // Polish
    ],
    [
        "He is drawing a picture now.", // Statement (be)
        "Is he drawing a picture now?", // Question
        "Was he drawing a picture yesterday?", // Past Continuous
        "Will he be drawing a picture tomorrow?", // Future Continuous
        "Has he been drawing a picture today?", // Present Perfect Continuous
        "Он рисует картину сейчас.", // Russian
        "Він малює картину зараз.", // Ukrainian
        "On rysuje obraz teraz." // Polish
    ],
    [
        "They are hiking in the mountains today.", // Statement (be)
        "Are they hiking in the mountains today?", // Question
        "Were they hiking in the mountains last weekend?", // Past Continuous
        "Will they be hiking in the mountains tomorrow?", // Future Continuous
        "Have they been hiking in the mountains today?", // Present Perfect Continuous
        "Они ходят в поход в горы сегодня.", // Russian
        "Вони ходять у похід у гори сьогодні.", // Ukrainian
        "Oni wędrują w górach dzisiaj." // Polish
    ],
    [
        "She is shopping at the mall now.", // Statement (be)
        "Is she shopping at the mall now?", // Question
        "Was she shopping at the mall yesterday?", // Past Continuous
        "Will she be shopping at the mall tomorrow?", // Future Continuous
        "Has she been shopping at the mall today?", // Present Perfect Continuous
        "Она делает покупки в торговом центре сейчас.", // Russian
        "Вона робить покупки у торговому центрі зараз.", // Ukrainian
        "Ona robi zakupy w centrum handlowym teraz." // Polish
    ],
    [
        "He is jogging in the park now.", // Statement (be)
        "Is he jogging in the park now?", // Question
        "Was he jogging in the park yesterday?", // Past Continuous
        "Will he be jogging in the park tomorrow?", // Future Continuous
        "Has he been jogging in the park today?", // Present Perfect Continuous
        "Он бегает в парке сейчас.", // Russian
        "Він бігає у парку зараз.", // Ukrainian
        "On biega w parku teraz." // Polish
    ],
    [
        "You are painting the fence today.", // Statement (be)
        "Are you painting the fence today?", // Question
        "Were you painting the fence last weekend?", // Past Continuous
        "Will you be painting the fence tomorrow?", // Future Continuous
        "Have you been painting the fence today?", // Present Perfect Continuous
        "Ты красишь забор сегодня.", // Russian
        "Ти фарбуєш паркан сьогодні.", // Ukrainian
        "Malujesz płot dzisiaj." // Polish
    ],
    [
        "She is having lunch now.", // Statement (have)
        "Is she having lunch now?", // Question
        "Was she having lunch yesterday?", // Past Continuous
        "Will she be having lunch tomorrow?", // Future Continuous
        "Has she been having lunch today?", // Present Perfect Continuous
        "Она обедает сейчас.", // Russian
        "Вона обідає зараз.", // Ukrainian
        "Ona je lunch teraz." // Polish
    ],
    [
        "He is knitting a scarf now.", // Statement (be)
        "Is he knitting a scarf now?", // Question
        "Was he knitting a scarf yesterday?", // Past Continuous
        "Will he be knitting a scarf tomorrow?", // Future Continuous
        "Has he been knitting a scarf today?", // Present Perfect Continuous
        "Он вяжет шарф сейчас.", // Russian
        "Він в’яже шарф зараз.", // Ukrainian
        "On robi na drutach szalik teraz." // Polish
    ],
    [
        "They are playing chess now.", // Statement (be)
        "Are they playing chess now?", // Question
        "Were they playing chess yesterday?", // Past Continuous
        "Will they be playing chess tomorrow?", // Future Continuous
        "Have they been playing chess today?", // Present Perfect Continuous
        "Они играют в шахматы сейчас.", // Russian
        "Вони грають у шахи зараз.", // Ukrainian
        "Oni grają w szachy teraz." // Polish
    ],
    [
        "She is baking cookies now.", // Statement (be)
        "Is she baking cookies now?", // Question
        "Was she baking cookies yesterday?", // Past Continuous
        "Will she be baking cookies tomorrow?", // Future Continuous
        "Has she been baking cookies today?", // Present Perfect Continuous
        "Она печет печенье сейчас.", // Russian
        "Вона пече печиво зараз.", // Ukrainian
        "Ona piecze ciasteczka teraz." // Polish
    ],
    [
        "He is repairing the bike now.", // Statement (be)
        "Is he repairing the bike now?", // Question
        "Was he repairing the bike yesterday?", // Past Continuous
        "Will he be repairing the bike tomorrow?", // Future Continuous
        "Has he been repairing the bike today?", // Present Perfect Continuous
        "Он чинит велосипед сейчас.", // Russian
        "Він ремонтує велосипед зараз.", // Ukrainian
        "On naprawia rower teraz." // Polish
    ],
    [
        "They are chatting online now.", // Statement (be)
        "Are they chatting online now?", // Question
        "Were they chatting online yesterday?", // Past Continuous
        "Will they be chatting online tomorrow?", // Future Continuous
        "Have they been chatting online today?", // Present Perfect Continuous
        "Они общаются онлайн сейчас.", // Russian
        "Вони спілкуються онлайн зараз.", // Ukrainian
        "Oni rozmawiają online teraz." // Polish
    ]

];

    // Если это свойство есть, то оно попадает в заголовок теста
    unit23.nameLeson = "Be/Have/Do in present and past tenses";

    // Свойство показывает сколько индексов содержат правильные предложения
    // Если его нет, то будет считаться, что правильные предложения 
    // только индекс 0 и 1. Если 5 - это индексы 0,1,2,3,4 с правильно
    // созданными предложениями.
    unit23.lengthTrue = 5;

    // расширение числа подмассивов за счёт замены местами нулевого и первого индекса
    unit23.push(...extendForArray(unit23));

    unit23.push(...extendForArray2(unit23));