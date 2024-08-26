const presetnContiniusQuestion = [
    [
        "Yes, she is studying now.",
        "Is she studying now?",
        "Is she study now?",        
        "Does she studying now?",   
        "Are she studying now?",    
        "Да, она учится сейчас.",
        "Так, вона вчиться зараз.",
        "Tak, ona teraz się uczy."
    ],
    [
        "Yes, they are playing football.",
        "Are they playing football?",
        "Is they playing football?",  
        "Are they plays football?",    
        "Do they playing football?",   
        "Да, они играют в футбол.",
        "Так, вони грають у футбол.",
        "Tak, oni grają w piłkę nożną."
    ],
    [
        "No, he isn’t watching TV.",
        "Is he watching TV?",
        "Is he watch TV?",        
        "Are he watching TV?",    
        "Does he watching TV?",   
        "Нет, он не смотрит телевизор.",
        "Ні, він не дивиться телевізор.",
        "Nie, on nie ogląda telewizji."
    ],
    [
        "Yes, we are working on the project.",
        "Are we working on the project?",
        "Is we working on the project?",  
        "Are we works on the project?",   
        "Do we working on the project?",  
        "Да, мы работаем над проектом.",
        "Так, ми працюємо над проєктом.",
        "Tak, pracujemy nad projektem."
    ],
    [
        "No, she isn’t going to the party.",
        "Is she going to the party?",
        "Is she go to the party?",    
        "Are she going to the party?", 
        "Does she going to the party?", 
        "Нет, она не идет на вечеринку.",
        "Ні, вона не йде на вечірку.",
        "Nie, ona nie idzie na imprezę."
    ],
    [
        "Yes, they are preparing dinner.",
        "Are they preparing dinner?",
        "Is they preparing dinner?", 
        "Are they prepares dinner?",  
        "Do they preparing dinner?",  
        "Да, они готовят ужин.",
        "Так, вони готують вечерю.",
        "Tak, oni przygotowują kolację."
    ],
    [
        "No, he isn’t reading a book.",
        "Is he reading a book?",
        "Is he read a book?",       
        "Are he reading a book?",  
        "Does he reading a book?", 
        "Нет, он не читает книгу.",
        "Ні, він не читає книгу.",
        "Nie, on nie czyta książki."
    ],
    [
        "Yes, she is listening to music.",
        "Is she listening to music?",
        "Is she listen to music?",    
        "Are she listening to music?", 
        "Does she listening to music?", 
        "Да, она слушает музыку.",
        "Так, вона слухає музику.",
        "Tak, ona słucha muzyki."
    ],
    [
        "No, they aren’t cleaning the house.",
        "Are they cleaning the house?",
        "Is they cleaning the house?",  
        "Are they cleans the house?",   
        "Do they cleaning the house?",  
        "Нет, они не убирают дом.",
        "Ні, вони не прибирають будинок.",
        "Nie, oni nie sprzątają domu."
    ],
    [
        "Yes, I am writing an email.",
        "Am I writing an email?",
        "Is I writing an email?",   
        "Am I write an email?",    
        "Do I writing an email?",  
        "Да, я пишу письмо.",
        "Так, я пишу лист.",
        "Tak, piszę e-mail."
    ],
    [
        "Yes, they are having lunch.",
        "Are they having lunch?",
        "Is they having lunch?",  
        "Are they has lunch?",    
        "Do they having lunch?",  
        "Да, они обедают.",
        "Так, вони обідають.",
        "Tak, oni jedzą obiad."
    ],
    [
        "No, she isn’t talking on the phone.",
        "Is she talking on the phone?",
        "Is she talk on the phone?",   
        "Are she talking on the phone?", 
        "Does she talking on the phone?", 
        "Нет, она не разговаривает по телефону.",
        "Ні, вона не розмовляє по телефону.",
        "Nie, ona nie rozmawia przez telefon."
    ],
    [
        "Yes, we are watching a movie.",
        "Are we watching a movie?",
        "Is we watching a movie?",  
        "Are we watches a movie?",  
        "Do we watching a movie?",  
        "Да, мы смотрим фильм.",
        "Так, ми дивимось фільм.",
        "Tak, oglądamy film."
    ],
    [
        "No, they aren’t playing video games.",
        "Are they playing video games?",
        "Is they playing video games?",  
        "Are they plays video games?",   
        "Do they playing video games?",  
        "Нет, они не играют в видеоигры.",
        "Ні, вони не грають у відеоігри.",
        "Nie, oni nie grają w gry wideo."
    ],
    [
        "Yes, he is driving to work.",
        "Is he driving to work?",
        "Is he drive to work?",     
        "Are he driving to work?",  
        "Does he driving to work?", 
        "Да, он едет на работу.",
        "Так, він їде на роботу.",
        "Tak, jedzie do pracy."
    ],
    [
        "No, she isn’t painting the wall.",
        "Is she painting the wall?",
        "Is she paint the wall?",   
        "Are she painting the wall?", 
        "Does she painting the wall?", 
        "Нет, она не красит стену.",
        "Ні, вона не фарбує стіну.",
        "Nie, ona nie maluje ściany."
    ],
    [
        "Yes, they are playing basketball.",
        "Are they playing basketball?",
        "Is they playing basketball?", 
        "Are they plays basketball?",  
        "Do they playing basketball?", 
        "Да, они играют в баскетбол.",
        "Так, вони грають у баскетбол.",
        "Tak, oni grają w koszykówkę."
    ],
    [
        "No, he isn’t studying for the exam.",
        "Is he studying for the exam?",
        "Is he study for the exam?",   
        "Are he studying for the exam?", 
        "Does he studying for the exam?", 
        "Нет, он не готовится к экзамену.",
        "Ні, він не готується до іспиту.",
        "Nie, on nie uczy się do egzaminu."
    ],
    [
        "Yes, she is playing the piano.",
        "Is she playing the piano?",
        "Is she play the piano?",    
        "Are she playing the piano?", 
        "Does she playing the piano?", 
        "Да, она играет на пианино.",
        "Так, вона грає на піаніно.",
        "Tak, ona gra na pianinie."
    ],
    [
        "No, they aren’t working on the report.",
        "Are they working on the report?",
        "Is they working on the report?", 
        "Are they works on the report?",  
        "Do they working on the report?", 
        "Нет, они не работают над отчетом.",
        "Ні, вони не працюють над звітом.",
        "Nie, oni nie pracują nad raportem."
    ],
    [
        "Yes, he is fixing the car.",
        "Is he fixing the car?",
        "Is he fix the car?",     
        "Are he fixing the car?",  
        "Does he fixing the car?", 
        "Да, он чинит машину.",
        "Так, він ремонтує машину.",
        "Tak, on naprawia samochód."
    ],
    [
        "No, she isn’t cleaning the kitchen.",
        "Is she cleaning the kitchen?",
        "Is she clean the kitchen?",   
        "Are she cleaning the kitchen?", 
        "Does she cleaning the kitchen?", 
        "Нет, она не убирает на кухне.",
        "Ні, вона не прибирає на кухні.",
        "Nie, ona nie sprząta w kuchni."
    ],
    [
        "Yes, they are visiting their grandparents.",
        "Are they visiting their grandparents?",
        "Is they visiting their grandparents?", 
        "Are they visits their grandparents?",  
        "Do they visiting their grandparents?", 
        "Да, они навещают своих бабушку и дедушку.",
        "Так, вони відвідують своїх бабусю та дідуся.",
        "Tak, odwiedzają swoich dziadków."
    ],
    [
        "No, he isn’t taking a shower.",
        "Is he taking a shower?",
        "Is he take a shower?",     
        "Are he taking a shower?",  
        "Does he taking a shower?", 
        "Нет, он не принимает душ.",
        "Ні, він не приймає душ.",
        "Nie, on nie bierze prysznica."
    ],
    [
        "Yes, she is doing her homework.",
        "Is she doing her homework?",
        "Is she do her homework?",    
        "Are she doing her homework?", 
        "Does she doing her homework?", 
        "Да, она делает домашнее задание.",
        "Так, вона робить домашнє завдання.",
        "Tak, ona odrabia pracę domową."
    ],
    [
        "No, they aren’t building a new house.",
        "Are they building a new house?",
        "Is they building a new house?",  
        "Are they builds a new house?",   
        "Do they building a new house?",  
        "Нет, они не строят новый дом.",
        "Ні, вони не будують новий будинок.",
        "Nie, oni nie budują nowego domu."
    ],
    [
        "Yes, he is writing a report.",
        "Is he writing a report?",
        "Is he write a report?",    
        "Are he writing a report?", 
        "Does he writing a report?", 
        "Да, он пишет отчет.",
        "Так, він пише звіт.",
        "Tak, on pisze raport."
    ],
    [
        "No, she isn’t baking a cake.",
        "Is she baking a cake?",
        "Is she bake a cake?",    
        "Are she baking a cake?", 
        "Does she baking a cake?", 
        "Нет, она не печет торт.",
        "Ні, вона не пече торт.",
        "Nie, ona nie piecze ciasta."
    ],
    [
        "Yes, they are preparing for the trip.",
        "Are they preparing for the trip?",
        "Is they preparing for the trip?",  
        "Are they prepares for the trip?",  
        "Do they preparing for the trip?",  
        "Да, они готовятся к поездке.",
        "Так, вони готуються до подорожі.",
        "Tak, przygotowują się do podróży."
    ],
    [
        "No, he isn’t fixing the computer.",
        "Is he fixing the computer?",
        "Is he fix the computer?",    
        "Are he fixing the computer?", 
        "Does he fixing the computer?", 
        "Нет, он не чинит компьютер.",
        "Ні, він не ремонтує комп'ютер.",
        "Nie, on nie naprawia komputera."
    ],
    [
        "Yes, she is drawing a picture.",
        "Is she drawing a picture?",
        "Is she draw a picture?",    
        "Are she drawing a picture?", 
        "Does she drawing a picture?", 
        "Да, она рисует картину.",
        "Так, вона малює картину.",
        "Tak, ona rysuje obraz."
    ],
    [
        "No, they aren’t playing cards.",
        "Are they playing cards?",
        "Is they playing cards?",  
        "Are they plays cards?",   
        "Do they playing cards?",  
        "Нет, они не играют в карты.",
        "Ні, вони не грають у карти.",
        "Nie, oni nie grają w karty."
    ],
    [
        "Yes, he is talking to his friend.",
        "Is he talking to his friend?",
        "Is he talk to his friend?",   
        "Are he talking to his friend?", 
        "Does he talking to his friend?", 
        "Да, он разговаривает с другом.",
        "Так, він розмовляє з другом.",
        "Tak, rozmawia z przyjacielem."
    ],
    [
        "No, she isn’t cooking dinner.",
        "Is she cooking dinner?",
        "Is she cook dinner?",    
        "Are she cooking dinner?", 
        "Does she cooking dinner?", 
        "Нет, она не готовит ужин.",
        "Ні, вона не готує вечерю.",
        "Nie, ona nie gotuje obiadu."
    ],
    [
        "Yes, they are dancing.",
        "Are they dancing?",
        "Is they dancing?",  
        "Are they dances?",   
        "Do they dancing?",  
        "Да, они танцуют.",
        "Так, вони танцюють.",
        "Tak, oni tańczą."
    ],
    [
        "No, he isn’t cleaning his room.",
        "Is he cleaning his room?",
        "Is he clean his room?",    
        "Are he cleaning his room?", 
        "Does he cleaning his room?", 
        "Нет, он не убирает свою комнату.",
        "Ні, він не прибирає свою кімнату.",
        "Nie, on nie sprząta swojego pokoju."
    ],
    [
        "Yes, she is singing a song.",
        "Is she singing a song?",
        "Is she sing a song?",    
        "Are she singing a song?", 
        "Does she singing a song?", 
        "Да, она поет песню.",
        "Так, вона співає пісню.",
        "Tak, ona śpiewa piosenkę."
    ],
    [
        "No, they aren’t playing chess.",
        "Are they playing chess?",
        "Is they playing chess?",  
        "Are they plays chess?",   
        "Do they playing chess?",  
        "Нет, они не играют в шахматы.",
        "Ні, вони не грають у шахи.",
        "Nie, oni nie grają w szachy."
    ],
    [
        "Yes, he is washing the dishes.",
        "Is he washing the dishes?",
        "Is he wash the dishes?",    
        "Are he washing the dishes?", 
        "Does he washing the dishes?", 
        "Да, он моет посуду.",
        "Так, він миє посуд.",
        "Tak, on myje naczynia."
    ],
    [
        "No, she isn’t watering the plants.",
        "Is she watering the plants?",
        "Is she water the plants?",    
        "Are she watering the plants?", 
        "Does she watering the plants?", 
        "Нет, она не поливает растения.",
        "Ні, вона не поливає рослини.",
        "Nie, ona nie podlewa roślin."
    ],
    [
        "Yes, they are exercising.",
        "Are they exercising?",
        "Is they exercising?",  
        "Are they exercises?",  
        "Do they exercising?",  
        "Да, они занимаются физическими упражнениями.",
        "Так, вони займаються фізичними вправами.",
        "Tak, oni ćwiczą."
    ],
    [
        "No, he isn’t taking out the trash.",
        "Is he taking out the trash?",
        "Is he take out the trash?",     
        "Are he taking out the trash?",  
        "Does he taking out the trash?", 
        "Нет, он не выносит мусор.",
        "Ні, він не виносить сміття.",
        "Nie, on nie wynosi śmieci."
    ],
    [
        "Yes, she is playing the guitar.",
        "Is she playing the guitar?",
        "Is she play the guitar?",    
        "Are she playing the guitar?", 
        "Does she playing the guitar?", 
        "Да, она играет на гитаре.",
        "Так, вона грає на гітарі.",
        "Tak, ona gra na gitarze."
    ],
    [
        "No, they aren’t watching TV.",
        "Are they watching TV?",
        "Is they watching TV?",  
        "Are they watches TV?",   
        "Do they watching TV?",  
        "Нет, они не смотрят телевизор.",
        "Ні, вони не дивляться телевізор.",
        "Nie, oni nie oglądają telewizji."
    ],
    [
        "Yes, he is riding a bike.",
        "Is he riding a bike?",
        "Is he ride a bike?",    
        "Are he riding a bike?", 
        "Does he riding a bike?", 
        "Да, он едет на велосипеде.",
        "Так, він їде на велосипеді.",
        "Tak, on jedzie na rowerze."
    ],
    [
        "No, she isn’t walking the dog.",
        "Is she walking the dog?",
        "Is she walk the dog?",    
        "Are she walking the dog?", 
        "Does she walking the dog?", 
        "Нет, она не гуляет с собакой.",
        "Ні, вона не вигулює собаку.",
        "Nie, ona nie wyprowadza psa."
    ],
    [
        "Yes, they are painting the house.",
        "Are they painting the house?",
        "Is they painting the house?",  
        "Are they paints the house?",   
        "Do they painting the house?",  
        "Да, они красят дом.",
        "Так, вони фарбують будинок.",
        "Tak, oni malują dom."
    ],
    [
        "No, he isn’t washing the car.",
        "Is he washing the car?",
        "Is he wash the car?",    
        "Are he washing the car?", 
        "Does he washing the car?", 
        "Нет, он не моет машину.",
        "Ні, він не миє машину.",
        "Nie, on nie myje samochodu."
    ],
    [
        "Yes, she is decorating the room.",
        "Is she decorating the room?",
        "Is she decorate the room?",    
        "Are she decorating the room?", 
        "Does she decorating the room?", 
        "Да, она украшает комнату.",
        "Так, вона прикрашає кімнату.",
        "Tak, ona dekoruje pokój."
    ],
    [
        "No, they aren’t shopping for groceries.",
        "Are they shopping for groceries?",
        "Is they shopping for groceries?",  
        "Are they shops for groceries?",   
        "Do they shopping for groceries?",  
        "Нет, они не покупают продукты.",
        "Ні, вони не купують продукти.",
        "Nie, oni nie robią zakupów spożywczych."
    ],
    [
        "Yes, he is reading a newspaper.",
        "Is he reading a newspaper?",
        "Is he read a newspaper?",    
        "Are he reading a newspaper?", 
        "Does he reading a newspaper?", 
        "Да, он читает газету.",
        "Так, він читає газету.",
        "Tak, on czyta gazetę."
    ],
    [
        "No, she isn’t knitting a scarf.",
        "Is she knitting a scarf?",
        "Is she knit a scarf?",    
        "Are she knitting a scarf?", 
        "Does she knitting a scarf?", 
        "Нет, она не вяжет шарф.",
        "Ні, вона не в’яже шарф.",
        "Nie, ona nie robi na drutach szalika."
    ],
    [
        "Yes, they are preparing for the meeting.",
        "Are they preparing for the meeting?",
        "Is they preparing for the meeting?",  
        "Are they prepares for the meeting?",  
        "Do they preparing for the meeting?",  
        "Да, они готовятся к встрече.",
        "Так, вони готуються до зустрічі.",
        "Tak, przygotowują się do spotkania."
    ],
    [
        "No, he isn’t fixing the bike.",
        "Is he fixing the bike?",
        "Is he fix the bike?",    
        "Are he fixing the bike?", 
        "Does he fixing the bike?", 
        "Нет, он не чинит велосипед.",
        "Ні, він не ремонтує велосипед.",
        "Nie, on nie naprawia roweru."
    ],
    [
        "Yes, she is arranging the flowers.",
        "Is she arranging the flowers?",
        "Is she arrange the flowers?",    
        "Are she arranging the flowers?", 
        "Does she arranging the flowers?", 
        "Да, она расставляет цветы.",
        "Так, вона розставляє квіти.",
        "Tak, ona układa kwiaty."
    ],
    [
        "No, they aren’t playing tennis.",
        "Are they playing tennis?",
        "Is they playing tennis?",  
        "Are they plays tennis?",   
        "Do they playing tennis?",  
        "Нет, они не играют в теннис.",
        "Ні, вони не грають у теніс.",
        "Nie, oni nie grają w tenisa."
    ],
    [
        "Yes, he is taking a nap.",
        "Is he taking a nap?",
        "Is he take a nap?",    
        "Are he taking a nap?", 
        "Does he taking a nap?", 
        "Да, он вздремнул.",
        "Так, він дрімає.",
        "Tak, on drzema."
    ],
    [
        "No, she isn’t ironing the clothes.",
        "Is she ironing the clothes?",
        "Is she iron the clothes?",    
        "Are she ironing the clothes?", 
        "Does she ironing the clothes?", 
        "Нет, она не гладит одежду.",
        "Ні, вона не прасує одяг.",
        "Nie, ona nie prasuje ubrań."
    ],
    [
        "Yes, they are planning their vacation.",
        "Are they planning their vacation?",
        "Is they planning their vacation?",  
        "Are they plans their vacation?",   
        "Do they planning their vacation?",  
        "Да, они планируют свой отпуск.",
        "Так, вони планують свою відпустку.",
        "Tak, oni planują swoje wakacje."
    ],
    [
        "No, he isn’t feeding the cat.",
        "Is he feeding the cat?",
        "Is he feed the cat?",    
        "Are he feeding the cat?", 
        "Does he feeding the cat?", 
        "Нет, он не кормит кошку.",
        "Ні, він не годує кота.",
        "Nie, on nie karmi kota."
    ],
    [
        "Yes, she is brushing her hair.",
        "Is she brushing her hair?",
        "Is she brush her hair?",    
        "Are she brushing her hair?", 
        "Does she brushing her hair?", 
        "Да, она расчесывает волосы.",
        "Так, вона розчісує волосся.",
        "Tak, ona szczotkuje włosy."
    ],
    [
        "No, they aren’t playing the violin.",
        "Are they playing the violin?",
        "Is they playing the violin?",  
        "Are they plays the violin?",   
        "Do they playing the violin?",  
        "Нет, они не играют на скрипке.",
        "Ні, вони не грають на скрипці.",
        "Nie, oni nie grają na skrzypcach."
    ],
    [
        "Yes, he is setting the table.",
        "Is he setting the table?",
        "Is he set the table?",    
        "Are he setting the table?", 
        "Does he setting the table?", 
        "Да, он накрывает на стол.",
        "Так, він накриває на стіл.",
        "Tak, on nakrywa do stołu."
    ],
    [
        "No, she isn’t taking pictures.",
        "Is she taking pictures?",
        "Is she take pictures?",    
        "Are she taking pictures?", 
        "Does she taking pictures?", 
        "Нет, она не фотографирует.",
        "Ні, вона не фотографує.",
        "Nie, ona nie robi zdjęć."
    ],
    [
        "Yes, they are packing their bags.",
        "Are they packing their bags?",
        "Is they packing their bags?",  
        "Are they packs their bags?",   
        "Do they packing their bags?",  
        "Да, они собирают вещи.",
        "Так, вони пакують свої речі.",
        "Tak, oni pakują swoje torby."
    ],
    [
        "No, he isn’t painting the fence.",
        "Is he painting the fence?",
        "Is he paint the fence?",    
        "Are he painting the fence?", 
        "Does he painting the fence?", 
        "Нет, он не красит забор.",
        "Ні, він не фарбує паркан.",
        "Nie, on nie maluje płotu."
    ],
    [
        "Yes, she is washing the windows.",
        "Is she washing the windows?",
        "Is she wash the windows?",    
        "Are she washing the windows?", 
        "Does she washing the windows?", 
        "Да, она моет окна.",
        "Так, вона миє вікна.",
        "Tak, ona myje okna."
    ],
    [
        "No, they aren’t playing the drums.",
        "Are they playing the drums?",
        "Is they playing the drums?",  
        "Are they plays the drums?",   
        "Do they playing the drums?",  
        "Нет, они не играют на барабанах.",
        "Ні, вони не грають на барабанах.",
        "Nie, oni nie grają na bębnach."
    ],
    [
        "Yes, he is walking in the park.",
        "Is he walking in the park?",
        "Is he walk in the park?",    
        "Are he walking in the park?", 
        "Does he walking in the park?", 
        "Да, он гуляет в парке.",
        "Так, він гуляє у парку.",
        "Tak, on spaceruje po parku."
    ],
    [
        "No, she isn’t reading a magazine.",
        "Is she reading a magazine?",
        "Is she read a magazine?",    
        "Are she reading a magazine?", 
        "Does she reading a magazine?", 
        "Нет, она не читает журнал.",
        "Ні, вона не читає журнал.",
        "Nie, ona nie czyta magazynu."
    ],
    [
        "Yes, they are learning English.",
        "Are they learning English?",
        "Is they learning English?",  
        "Are they learns English?",   
        "Do they learning English?",  
        "Да, они учат английский.",
        "Так, вони вчать англійську.",
        "Tak, oni uczą się angielskiego."
    ],
    [
        "No, he isn’t making coffee.",
        "Is he making coffee?",
        "Is he make coffee?",    
        "Are he making coffee?", 
        "Does he making coffee?", 
        "Нет, он не готовит кофе.",
        "Ні, він не готує каву.",
        "Nie, on nie robi kawy."
    ],
    [
        "Yes, she is shopping for clothes.",
        "Is she shopping for clothes?",
        "Is she shop for clothes?",    
        "Are she shopping for clothes?", 
        "Does she shopping for clothes?", 
        "Да, она покупает одежду.",
        "Так, вона купує одяг.",
        "Tak, ona kupuje ubrania."
    ],
    [
        "No, they aren’t feeding the birds.",
        "Are they feeding the birds?",
        "Is they feeding the birds?",  
        "Are they feeds the birds?",   
        "Do they feeding the birds?",  
        "Нет, они не кормят птиц.",
        "Ні, вони не годують птахів.",
        "Nie, oni nie karmią ptaków."
    ],
    [
        "Yes, he is drawing a map.",
        "Is he drawing a map?",
        "Is he draw a map?",    
        "Are he drawing a map?", 
        "Does he drawing a map?", 
        "Да, он рисует карту.",
        "Так, він малює карту.",
        "Tak, on rysuje mapę."
    ],
    [
        "No, she isn’t doing yoga.",
        "Is she doing yoga?",
        "Is she do yoga?",    
        "Are she doing yoga?", 
        "Does she doing yoga?", 
        "Нет, она не занимается йогой.",
        "Ні, вона не займається йогою.",
        "Nie, ona nie ćwiczy jogi."
    ],
    [
        "I am currently reading a novel.",
        "What are you reading these days?",
        "How many books are you reading at the moment?",
        "When do you usually read?",
        "Where do you like to read?",
        "Я сейчас читаю роман.",
        "Я зараз читаю роман.",
        "Obecnie czytam powieść."
    ],
    [
        "I am learning to cook new dishes.",
        "What are you cooking at the moment?",
        "How often are you trying new recipes?",
        "When did you start cooking new dishes?",
        "Where do you find your recipes?",
        "Я учусь готовить новые блюда.",
        "Я вчуся готувати нові страви.",
        "Uczę się gotować nowe dania."
    ],
    [
        "I am enjoying my weekend getaway.",
        "What are you doing this weekend?",
        "How often are you taking weekend trips?",
        "When did you start going on weekend getaways?",
        "Where do you like to go for a weekend trip?",
        "Мне нравится мой уикенд.",
        "Мені подобається мій вікенд.",
        "Lubię mój weekendowy wyjazd."
    ],
    [
        "I am spending time with my family today.",
        "What are you doing with your family today?",
        "How often are you spending time with your family?",
        "When did you last have a family day?",
        "Where do you usually spend time with your family?",
        "Я провожу время с семьей сегодня.",
        "Я проводжу час з родиною сьогодні.",
        "Spędzam dzisiaj czas z rodziną."
    ],
    [
        "I am trying out a new sport.",
        "What sport are you trying at the moment?",
        "How often are you trying new sports?",
        "When did you start trying new sports?",
        "Where do you usually practice new sports?",
        "Я пробую новый спорт.",
        "Я пробую новий спорт.",
        "Próbuję nowego sportu."
    ],
    [
        "I am enjoying my new hobby of painting.",
        "What hobby are you enjoying currently?",
        "How often are you painting these days?",
        "When did you start your painting hobby?",
        "Where do you usually paint?",
        "Мне нравится моё новое увлечение живописью.",
        "Мені подобається моє нове хобі - живопис.",
        "Cieszę się nowym hobby malowania."
    ],
    [
        "I am exploring new recipes for baking.",
        "What recipes are you exploring right now?",
        "How often are you baking these days?",
        "When did you start exploring new baking recipes?",
        "Where do you find new baking recipes?",
        "Я исследую новые рецепты для выпечки.",
        "Я вивчаю нові рецепти для випічки.",
        "Odkrywam nowe przepisy na pieczenie."
    ],
    [
        "I am attending a language course.",
        "What language are you learning at the moment?",
        "How often are you attending language classes?",
        "When did you start learning this language?",
        "Where do you attend your language classes?",
        "Я посещаю языковой курс.",
        "Я відвідую мовний курс.",
        "Uczę się na kursie językowym."
    ],
    [
        "I am practicing yoga daily.",
        "What type of exercise are you doing?",
        "How often are you practicing yoga?",
        "When did you start practicing yoga?",
        "Where do you usually practice yoga?",
        "Я занимаюсь йогой каждый день.",
        "Я практикую йогу щодня.",
        "Ćwiczę jogę codziennie."
    ],
    [
        "I am gardening on weekends.",
        "What are you planting in your garden?",
        "How often are you gardening?",
        "When did you start gardening?",
        "Where do you buy your gardening supplies?",
        "Я занимаюсь садоводством по выходным.",
        "Я займаюся садівництвом на вихідних.",
        "Ogrodnictwo to moje hobby w weekendy."
    ],
    [
        "I am studying for my exams this week.",
        "What subjects are you studying?",
        "How often are you studying?",
        "When did you start preparing for your exams?",
        "Where do you study?",
        "Я учусь для экзаменов на этой неделе.",
        "Я навчаюся до іспитів цього тижня.",
        "Uczę się do egzaminów w tym tygodniu."
    ],
    [
        "I am visiting new places during my vacation.",
        "What places are you visiting on vacation?",
        "How often are you traveling during vacations?",
        "When did you start visiting new places?",
        "Where do you prefer to travel?",
        "Я посещаю новые места во время отпуска.",
        "Я відвідую нові місця під час відпустки.",
        "Odwiedzam nowe miejsca podczas wakacji."
    ],
    [
        "I am exploring local markets this weekend.",
        "What markets are you exploring?",
        "How often are you visiting local markets?",
        "When did you start exploring markets?",
        "Where is your favorite local market?",
        "Я исследую местные рынки в эти выходные.",
        "Я досліджую місцеві ринки цього вихідного.",
        "Eksploruję lokalne targi w ten weekend."
    ],
    [
        "I am watching a new documentary series.",
        "What documentary series are you watching?",
        "How often are you watching documentaries?",
        "When did you start watching this series?",
        "Where do you find your documentaries?",
        "Я смотрю новый документальный сериал.",
        "Я дивлюсь новий документальний серіал.",
        "Oglądam nowy serial dokumentalny."
    ],
    [
        "I am participating in a book club meeting.",
        "What book are you discussing in your club?",
        "How often are you attending book club meetings?",
        "When did you start participating in book clubs?",
        "Where does your book club meet?",
        "Я участвую в собрании книжного клуба.",
        "Я беру участь у зустрічі книжкового клубу.",
        "Uczestniczę w spotkaniu klubu książki."
    ],
    [
        "I am learning to play a new musical instrument.",
        "What musical instrument are you learning?",
        "How often are you practicing this instrument?",
        "When did you start learning this instrument?",
        "Where do you practice playing your instrument?",
        "Я учусь играть на новом музыкальном инструменте.",
        "Я вчуся грати на новому музичному інструменті.",
        "Uczę się grać na nowym instrumencie muzycznym."
    ],
    [
        "I am enjoying my new fitness routine.",
        "What fitness activities are you doing?",
        "How often are you following your fitness routine?",
        "When did you start your new fitness routine?",
        "Where do you usually work out?",
        "Мне нравится моя новая фитнес-программа.",
        "Мені подобається моя нова фітнес-програма.",
        "Cieszę się z nowego planu treningowego."
    ],
    [
        "I am practicing my cooking skills.",
        "What are you cooking to practice?",
        "How often are you practicing your cooking?",
        "When did you start improving your cooking skills?",
        "Where do you usually cook?",
        "Я практикую свои кулинарные навыки.",
        "Я практикую свої кулінарні навички.",
        "Ćwiczę swoje umiejętności kulinarne."
    ],
    [
        "I am exploring new hiking trails.",
        "What trails are you exploring currently?",
        "How often are you going hiking?",
        "When did you start exploring new trails?",
        "Where do you go hiking?",
        "Я исследую новые туристические маршруты.",
        "Я досліджую нові туристичні маршрути.",
        "Odkrywam nowe szlaki turystyczne."
    ],
    [
        "I am taking an online course in digital marketing.",
        "What online course are you taking?",
        "How often are you studying online?",
        "When did you start your online course?",
        "Where do you access your course materials?",
        "Я прохожу онлайн-курс по цифровому маркетингу.",
        "Я проходжу онлайн-курс з цифрового маркетингу.",
        "Biorę udział w kursie online z marketingu cyfrowego."
    ],
    [
        "I am working on a new painting project.",
        "What painting project are you working on?",
        "How often are you painting?",
        "When did you start this painting project?",
        "Where do you paint your artwork?",
        "Я работаю над новым живописным проектом.",
        "Я працюю над новим живописним проектом.",
        "Pracuję nad nowym projektem malarskim."
    ],
    [
        "I am visiting art galleries this month.",
        "What art galleries are you visiting?",
        "How often are you visiting art galleries?",
        "When did you start visiting galleries?",
        "Where are your favorite art galleries?",
        "Я посещаю художественные галереи в этом месяце.",
        "Я відвідую художні галереї цього місяця.",
        "Odwiedzam galerie sztuki w tym miesiącu."
    ],
    [
        "I am trying new exercises for my workout.",
        "What new exercises are you trying?",
        "How often are you changing your workout routine?",
        "When did you start incorporating new exercises?",
        "Where do you usually work out?",
        "Я пробую новые упражнения для своей тренировки.",
        "Я пробую нові вправи для свого тренування.",
        "Próbuję nowych ćwiczeń w swoim treningu."
    ],
    [
        "I am learning a new language.",
        "What new language are you learning?",
        "How often are you studying this language?",
        "When did you start learning this language?",
        "Where do you practice your language skills?",
        "Я изучаю новый язык.",
        "Я вивчаю нову мову.",
        "Uczę się nowego języka."
    ],
    [
        "I am exploring different cuisines.",
        "What cuisines are you exploring?",
        "How often are you trying new foods?",
        "When did you start exploring different cuisines?",
        "Where do you find new recipes?",
        "Я исследую разные кухни.",
        "Я досліджую різні кухні.",
        "Odkrywam różne kuchnie."
    ],
    [
        "I am practicing photography techniques.",
        "What photography techniques are you learning?",
        "How often are you practicing photography?",
        "When did you start learning photography?",
        "Where do you usually take photos?",
        "Я практикую техники фотографии.",
        "Я практикую техніки фотографії.",
        "Ćwiczę techniki fotografii."
    ],
    [
        "I am attending cooking classes.",
        "What cooking classes are you taking?",
        "How often are you attending these classes?",
        "When did you start taking cooking classes?",
        "Where do you take your cooking classes?",
        "Я посещаю кулинарные курсы.",
        "Я відвідую кулінарні курси.",
        "Uczę się na kursach kulinarnych."
    ],
    [
        "I am planning a new travel itinerary.",
        "What are you planning for your next trip?",
        "How often do you plan your travels?",
        "When did you start planning your travel itinerary?",
        "Where do you usually travel?",
        "Я планирую новый маршрут для путешествия.",
        "Я планую новий маршрут для подорожі.",
        "Planuję nowy plan podróży."
    ],
    [
        "I am practicing meditation techniques.",
        "What meditation techniques are you using?",
        "How often do you practice meditation?",
        "When did you start meditating?",
        "Where do you meditate?",
        "Я практикую техники медитации.",
        "Я практикую техніки медитації.",
        "Ćwiczę techniki medytacji."
    ],
    [
        "I am enjoying a new podcast series.",
        "What podcast series are you listening to?",
        "How often do you listen to podcasts?",
        "When did you start listening to this series?",
        "Where do you usually listen to podcasts?",
        "Мне нравится новый подкаст-сериал.",
        "Мені подобається новий подкаст-серіал.",
        "Cieszę się nowym podcastem."
    ],
    [
        "I am working on a new writing project.",
        "What writing project are you working on?",
        "How often are you writing?",
        "When did you start this writing project?",
        "Where do you usually write?",
        "Я работаю над новым писательским проектом.",
        "Я працюю над новим письменницьким проектом.",
        "Pracuję nad nowym projektem pisarskim."
    ],
    [
        "I am attending fitness boot camp sessions.",
        "What boot camp sessions are you attending?",
        "How often are you attending these sessions?",
        "When did you start going to boot camp?",
        "Where do you attend your fitness boot camp?",
        "Я посещаю занятия фитнес-boot camp.",
        "Я відвідую заняття фітнес-boot camp.",
        "Uczęszczam na sesje boot campu fitnessowego."
    ],
    [
        "I am learning about digital photography.",
        "What digital photography techniques are you learning?",
        "How often are you studying photography?",
        "When did you start learning digital photography?",
        "Where do you take your photography classes?",
        "Я изучаю цифровую фотографию.",
        "Я вивчаю цифрову фотографію.",
        "Uczę się fotografii cyfrowej."
    ],
    [
        "I am trying out new fitness routines.",
        "What new fitness routines are you trying?",
        "How often are you changing your routine?",
        "When did you start trying new routines?",
        "Where do you work out?",
        "Я пробую новые фитнес-рутины.",
        "Я пробую нові фітнес-рутини.",
        "Próbuję nowych rutyn fitnessowych."
    ],
    [
        "I am exploring different cooking techniques.",
        "What cooking techniques are you exploring?",
        "How often do you try new techniques?",
        "When did you start exploring cooking techniques?",
        "Where do you learn new cooking methods?",
        "Я изучаю разные кулинарные техники.",
        "Я досліджую різні кулінарні техніки.",
        "Odkrywam różne techniki gotowania."
    ],
    [
        "I am attending a photography workshop.",
        "What photography workshop are you attending?",
        "How often do you attend workshops?",
        "When did you start attending photography workshops?",
        "Where do you take your photography workshops?",
        "Я посещаю мастер-класс по фотографии.",
        "Я відвідую майстер-клас по фотографії.",
        "Uczęszczam na warsztaty fotograficzne."
    ],
    [
        "I am learning about digital marketing strategies.",
        "What digital marketing strategies are you learning?",
        "How often do you study digital marketing?",
        "When did you start learning about digital marketing?",
        "Where do you find your marketing courses?",
        "Я изучаю стратегии цифрового маркетинга.",
        "Я вивчаю стратегії цифрового маркетингу.",
        "Uczę się strategii marketingu cyfrowego."
    ],
    [
        "I am exploring local cultural events.",
        "What local cultural events are you exploring?",
        "How often do you attend cultural events?",
        "When did you start exploring local events?",
        "Where do you find information about cultural events?",
        "Я исследую местные культурные события.",
        "Я досліджую місцеві культурні події.",
        "Odkrywam lokalne wydarzenia kulturalne."
    ],
    [
        "I am attending a workshop on creative writing.",
        "What creative writing workshop are you attending?",
        "How often do you participate in writing workshops?",
        "When did you start attending creative writing workshops?",
        "Where do you attend your writing workshops?",
        "Я посещаю мастер-класс по креативному письму.",
        "Я відвідую майстер-клас з креативного письма.",
        "Uczęszczam na warsztaty kreatywnego pisania."
    ],
    [
        "I am trying new techniques in digital art.",
        "What new techniques in digital art are you trying?",
        "How often do you experiment with digital art?",
        "When did you start trying new digital art techniques?",
        "Where do you create your digital art?",
        "Я пробую новые техники в цифровом искусстве.",
        "Я пробую нові техніки в цифровому мистецтві.",
        "Próbuję nowych technik w sztuce cyfrowej."
    ],
    [
        "I am participating in a local theater production.",
        "What theater production are you participating in?",
        "How often do you participate in theater productions?",
        "When did you start participating in local theater?",
        "Where do you rehearse for your theater role?",
        "Я участвую в местной театральной постановке.",
        "Я беру участь у місцевій театральній постановці.",
        "Biorę udział w lokalnej produkcji teatralnej."
    ],
    [
        "I am learning new dance moves.",
        "What dance moves are you learning?",
        "How often do you practice dancing?",
        "When did you start learning new dance moves?",
        "Where do you take your dance lessons?",
        "Я учусь новым танцевальным движениям.",
        "Я вчуся новим танцювальним рухам.",
        "Uczę się nowych kroków tanecznych."
    ],
    [
        "I am exploring different types of photography.",
        "What types of photography are you exploring?",
        "How often do you practice different photography styles?",
        "When did you start exploring different photography types?",
        "Where do you take your photos?",
        "Я исследую разные виды фотографии.",
        "Я досліджую різні види фотографії.",
        "Odkrywam różne rodzaje fotografii."
    ],
    [
        "I am taking up a new sport.",
        "What new sport are you taking up?",
        "How often are you practicing this new sport?",
        "When did you start this new sport?",
        "Where do you usually practice this sport?",
        "Я начинаю заниматься новым спортом.",
        "Я починаю займатися новим спортом.",
        "Zaczynam uprawiać nowy sport."
    ],
    [
        "I am attending workshops on personal development.",
        "What personal development workshops are you attending?",
        "How often do you attend personal development workshops?",
        "When did you start attending these workshops?",
        "Where do you find personal development workshops?",
        "Я посещаю семинары по личностному росту.",
        "Я відвідую семінари з особистісного розвитку.",
        "Uczęszczam na warsztaty rozwoju osobistego."
    ],
    [
        "I am learning to play a new board game.",
        "What board game are you learning to play?",
        "How often do you play new board games?",
        "When did you start learning this board game?",
        "Where do you usually play board games?",
        "Я учусь играть в новую настольную игру.",
        "Я вчуся грати в нову настільну гру.",
        "Uczę się grać w nową grę planszową."
    ],
    [
        "I am exploring new genres of music.",
        "What new music genres are you exploring?",
        "How often do you listen to new music genres?",
        "When did you start exploring new music genres?",
        "Where do you discover new music?",
        "Я исследую новые музыкальные жанры.",
        "Я досліджую нові музичні жанри.",
        "Odkrywam nowe gatunki muzyczne."
    ],
    [
        "I am planning a new home renovation project.",
        "What home renovation project are you planning?",
        "How often do you undertake home renovation projects?",
        "When did you start planning this renovation?",
        "Where do you get your renovation ideas?",
        "Я планирую новый проект по ремонту дома.",
        "Я планую новий проект з ремонту дому.",
        "Planowałem nowy projekt remontowy w domu."
    ],
    [
        "I am working on improving my public speaking skills.",
        "What are you doing to improve your public speaking skills?",
        "How often are you practicing public speaking?",
        "When did you start focusing on public speaking?",
        "Where do you practice your speeches?",
        "Я работаю над улучшением своих навыков публичных выступлений.",
        "Я працюю над покращенням своїх навичок публічних виступів.",
        "Pracuję nad poprawą moich umiejętności wystąpień publicznych."
    ],
    [
        "I am learning about sustainable living practices.",
        "What sustainable living practices are you learning?",
        "How often do you incorporate sustainability into your life?",
        "When did you start learning about sustainable living?",
        "Where do you find information about sustainability?",
        "Я изучаю практики устойчивого образа жизни.",
        "Я вивчаю практики сталого способу життя.",
        "Uczę się praktyk zrównoważonego rozwoju."
    ],
    [
        "I am attending a seminar on financial planning.",
        "What financial planning seminar are you attending?",
        "How often do you attend financial seminars?",
        "When did you start focusing on financial planning?",
        "Where do you find financial planning seminars?",
        "Я посещаю семинар по финансовому планированию.",
        "Я відвідую семінар з фінансового планування.",
        "Uczęszczam na seminarium z planowania finansowego."
    ],
    [
        "I am practicing my guitar skills.",
        "What guitar skills are you practicing?",
        "How often do you practice guitar?",
        "When did you start improving your guitar skills?",
        "Where do you practice playing the guitar?",
        "Я практикую свои навыки игры на гитаре.",
        "Я практикую свої навички гри на гітарі.",
        "Ćwiczę swoje umiejętności gry na gitarze."
    ],
    [
        "I am exploring new art techniques.",
        "What new art techniques are you exploring?",
        "How often do you try new art techniques?",
        "When did you start experimenting with art techniques?",
        "Where do you create your art?",
        "Я исследую новые художественные техники.",
        "Я досліджую нові художні техніки.",
        "Odkrywam nowe techniki artystyczne."
    ],
    [
        "I am participating in a local music festival.",
        "What music festival are you participating in?",
        "How often do you attend music festivals?",
        "When did you start participating in festivals?",
        "Where is your favorite music festival held?",
        "Я участвую в местном музыкальном фестивале.",
        "Я беру участь у місцевому музичному фестивалі.",
        "Biorę udział w lokalnym festiwalu muzycznym."
    ],
    [
        "I am learning how to make handmade crafts.",
        "What handmade crafts are you learning to make?",
        "How often do you create handmade crafts?",
        "When did you start learning crafts?",
        "Where do you get your craft materials?",
        "Я учусь делать ручные изделия.",
        "Я вчуся робити ручні вироби.",
        "Uczę się robić rękodzieło."
    ],
    [
        "I am exploring different photography styles.",
        "What photography styles are you exploring?",
        "How often do you try different styles of photography?",
        "When did you start exploring new photography styles?",
        "Where do you take your photos?",
        "Я исследую различные стили фотографии.",
        "Я досліджую різні стилі фотографії.",
        "Odkrywam różne style fotografii."
    ],
    [
        "I am attending a cooking class for Italian cuisine.",
        "What Italian cuisine class are you attending?",
        "How often do you attend cooking classes?",
        "When did you start learning Italian cuisine?",
        "Where do you take your Italian cooking classes?",
        "Я посещаю кулинарный курс по итальянской кухне.",
        "Я відвідую курс з італійської кухні.",
        "Uczęszczam na kurs gotowania włoskiego."
    ],
    [
        "I am exploring new gardening techniques.",
        "What new gardening techniques are you trying?",
        "How often do you try new gardening methods?",
        "When did you start exploring new gardening techniques?",
        "Where do you practice your gardening?",
        "Я исследую новые техники садоводства.",
        "Я досліджую нові техніки садівництва.",
        "Odkrywam nowe techniki ogrodnictwa."
    ],
    [
        "I am taking up a new fitness challenge.",
        "What new fitness challenge are you taking up?",
        "How often do you participate in fitness challenges?",
        "When did you start this new fitness challenge?",
        "Where do you work out for this challenge?",
        "Я беру участие в новом фитнес-челлендже.",
        "Я беру участь у новому фітнес-виклику.",
        "Podejmuję nowe wyzwanie fitnessowe."
    ],
    [
        "I am learning about creative writing techniques.",
        "What creative writing techniques are you learning?",
        "How often do you practice creative writing?",
        "When did you start learning creative writing techniques?",
        "Where do you take creative writing classes?",
        "Я изучаю техники креативного письма.",
        "Я вивчаю техніки креативного письма.",
        "Uczę się technik pisania kreatywnego."
    ],
    [
        "I am attending a seminar on environmental sustainability.",
        "What environmental sustainability seminar are you attending?",
        "How often do you attend seminars on sustainability?",
        "When did you start focusing on environmental issues?",
        "Where do you find seminars on environmental sustainability?",
        "Я посещаю семинар по экологической устойчивости.",
        "Я відвідую семінар з екологічної стійкості.",
        "Uczęszczam na seminarium dotyczące zrównoważonego rozwoju środowiska."
    ],
    [
        "I am practicing my skills in watercolor painting.",
        "What skills in watercolor painting are you practicing?",
        "How often do you paint with watercolors?",
        "When did you start learning watercolor painting?",
        "Where do you usually do your watercolor paintings?",
        "Я практикую свои навыки в акварельной живописи.",
        "Я практикую свої навички в акварельному живопису.",
        "Ćwiczę swoje umiejętności malowania akwarelami."
    ],
    [
        "I am exploring new genres of literature.",
        "What new genres of literature are you exploring?",
        "How often do you read different genres of books?",
        "When did you start exploring new literature genres?",
        "Where do you find new books to read?",
        "Я исследую новые жанры литературы.",
        "Я досліджую нові жанри літератури.",
        "Odkrywam nowe gatunki literatury."
    ],
    [
        "I am learning to play a new video game.",
        "What new video game are you learning to play?",
        "How often do you play video games?",
        "When did you start learning this video game?",
        "Where do you play your video games?",
        "Я учусь играть в новую видеоигру.",
        "Я вчуся грати в нову відеогру.",
        "Uczę się grać w nową grę wideo."
    ],
    [
        "I am exploring different architectural styles.",
        "What architectural styles are you exploring?",
        "How often do you study architectural styles?",
        "When did you start exploring architectural styles?",
        "Where do you find inspiration for architectural designs?",
        "Я исследую разные архитектурные стили.",
        "Я досліджую різні архітектурні стилі.",
        "Odkrywam różne style architektoniczne."
    ],
    [
        "I am attending a workshop on digital illustration.",
        "What digital illustration workshop are you attending?",
        "How often do you participate in illustration workshops?",
        "When did you start focusing on digital illustration?",
        "Where do you take your digital illustration classes?",
        "Я посещаю мастер-класс по цифровой иллюстрации.",
        "Я відвідую майстер-клас з цифрової ілюстрації.",
        "Uczęszczam na warsztaty z cyfrowej ilustracji."
    ],
    [
        "I am learning about film production techniques.",
        "What film production techniques are you learning?",
        "How often do you study film production?",
        "When did you start learning about film production?",
        "Where do you find film production courses?",
        "Я изучаю техники производства фильмов.",
        "Я вивчаю техніки виробництва фільмів.",
        "Uczę się technik produkcji filmowej."
    ],
    [
        "I am practicing my cooking skills with new recipes.",
        "What new recipes are you trying out?",
        "How often do you experiment with new recipes?",
        "When did you start trying new recipes?",
        "Where do you get your cooking inspiration?",
        "Я практикую свои кулинарные навыки с новыми рецептами.",
        "Я практикую свої кулінарні навички з новими рецептами.",
        "Ćwiczę swoje umiejętności kulinarne z nowymi przepisami."
    ]

];
