const haveAndHaveGot = [
    [
        "I have a book", 
        "I have got a book", 
        "I has got a book", 
        "I got have a book", 
        "I have book a got", 
        "У меня есть книга", 
        "У мене є книга", 
        "Mam książkę"
      ],
      [
        "She has a cat", 
        "She has got a cat", 
        "She have got a cat", 
        "She got has a cat", 
        "She has cat a got", 
        "У неё есть кот", 
        "У неї є кіт", 
        "Ma kota"
      ],
      [
        "We have a dog", 
        "We have got a dog", 
        "We has got a dog", 
        "We got have a dog", 
        "We have dog a got", 
        "У нас есть собака", 
        "У нас є собака", 
        "Mamy psa"
      ],
      [
        "He has a car", 
        "He has got a car", 
        "He have got a car", 
        "He got has a car", 
        "He has car a got", 
        "У него есть машина", 
        "У нього є машина", 
        "Ma samochód"
      ],
      [
        "They have a house", 
        "They have got a house", 
        "They has got a house", 
        "They got have a house", 
        "They have house a got", 
        "У них есть дом", 
        "У них є будинок", 
        "Mają dom"
      ],
      [
        "You have a pen", 
        "You have got a pen", 
        "You has got a pen", 
        "You got have a pen", 
        "You have pen a got", 
        "У тебя есть ручка", 
        "У тебе є ручка", 
        "Masz długopis"
      ],
      [
        "She has a bike", 
        "She has got a bike", 
        "She have got a bike", 
        "She got has a bike", 
        "She has bike a got", 
        "У неё есть велосипед", 
        "У неї є велосипед", 
        "Ma rower"
      ],
      [
        "I have a computer", 
        "I have got a computer", 
        "I has got a computer", 
        "I got have a computer", 
        "I have computer a got", 
        "У меня есть компьютер", 
        "У мене є комп'ютер", 
        "Mam komputer"
      ],
      [
        "We have a garden", 
        "We have got a garden", 
        "We has got a garden", 
        "We got have a garden", 
        "We have garden a got", 
        "У нас есть сад", 
        "У нас є сад", 
        "Mamy ogród"
      ],
      [
        "He has a bike", 
        "He has got a bike", 
        "He have got a bike", 
        "He got has a bike", 
        "He has bike a got", 
        "У него есть велосипед", 
        "У нього є велосипед", 
        "Ma rower"
      ],
      [
        "They have a dog", 
        "They have got a dog", 
        "They has got a dog", 
        "They got have a dog", 
        "They have dog a got", 
        "У них есть собака", 
        "У них є собака", 
        "Mają psa"
      ],
      [
        "You have a book", 
        "You have got a book", 
        "You has got a book", 
        "You got have a book", 
        "You have book a got", 
        "У тебя есть книга", 
        "У тебе є книга", 
        "Masz książkę"
      ],
      [
        "She has a phone", 
        "She has got a phone", 
        "She have got a phone", 
        "She got has a phone", 
        "She has phone a got", 
        "У неё есть телефон", 
        "У неї є телефон", 
        "Ma telefon"
      ],
      [
        "We have a meeting", 
        "We have got a meeting", 
        "We has got a meeting", 
        "We got have a meeting", 
        "We have meeting a got", 
        "У нас есть встреча", 
        "У нас є зустріч", 
        "Mamy spotkanie"
      ],
      [
        "He has a sister", 
        "He has got a sister", 
        "He have got a sister", 
        "He got has a sister", 
        "He has sister a got", 
        "У него есть сестра", 
        "У нього є сестра", 
        "Ma siostrę"
      ],
      [
        "They have a car", 
        "They have got a car", 
        "They has got a car", 
        "They got have a car", 
        "They have car a got", 
        "У них есть машина", 
        "У них є машина", 
        "Mają samochód"
      ],
      [
        "I have a job", 
        "I have got a job", 
        "I has got a job", 
        "I got have a job", 
        "I have job a got", 
        "У меня есть работа", 
        "У мене є робота", 
        "Mam pracę"
      ],
      [
        "We have a house", 
        "We have got a house", 
        "We has got a house", 
        "We got have a house", 
        "We have house a got", 
        "У нас есть дом", 
        "У нас є будинок", 
        "Mamy dom"
      ],
      [
        "He has a friend", 
        "He has got a friend", 
        "He have got a friend", 
        "He got has a friend", 
        "He has friend a got", 
        "У него есть друг", 
        "У нього є друг", 
        "Ma przyjaciela"
      ],
      [
        "They have a laptop", 
        "They have got a laptop", 
        "They has got a laptop", 
        "They got have a laptop", 
        "They have laptop a got", 
        "У них есть ноутбук", 
        "У них є ноутбук", 
        "Mają laptop"
      ],
      [
        "You have a cup", 
        "You have got a cup", 
        "You has got a cup", 
        "You got have a cup", 
        "You have cup a got", 
        "У тебя есть чашка", 
        "У тебе є чашка", 
        "Masz kubek"
      ],
      [
        "She has a job", 
        "She has got a job", 
        "She have got a job", 
        "She got has a job", 
        "She has job a got", 
        "У неё есть работа", 
        "У неї є робота", 
        "Ma pracę"
      ],
      [
        "We have a computer", 
        "We have got a computer", 
        "We has got a computer", 
        "We got have a computer", 
        "We have computer a got", 
        "У нас есть компьютер", 
        "У нас є комп'ютер", 
        "Mamy komputer"
      ],
      [
        "I have a chair", 
        "I have got a chair", 
        "I has got a chair", 
        "I got have a chair", 
        "I have chair a got", 
        "У меня есть стул", 
        "У мене є стілець", 
        "Mam krzesło"
      ],
      [
        "They have a phone", 
        "They have got a phone", 
        "They has got a phone", 
        "They got have a phone", 
        "They have phone a got", 
        "У них есть телефон", 
        "У них є телефон", 
        "Mają telefon"
      ],
      [
        "You have a bike", 
        "You have got a bike", 
        "You has got a bike", 
        "You got have a bike", 
        "You have bike a got", 
        "У тебя есть велосипед", 
        "У тебе є велосипед", 
        "Masz rower"
      ],
      [
        "I have a car",                   
        "I've got a car",                 
        "I've a got car",                 
        "I've got car a",                 
        "I has got a car",                
        "У меня есть машина",             
        "У мене є машина",                
        "Mam samochód"                    
      ],
      [
        "He has a house", 
        "He's got a house", 
        "He've got a house", 
        "He's got house a", 
        "He has got house", 
        "У него есть дом", 
        "У нього є будинок", 
        "Ma dom"
      ],
      [
        "We have a dog", 
        "We've got a dog", 
        "We got've a dog", 
        "We got a dog've", 
        "We's got a dog", 
        "У нас есть собака", 
        "У нас є собака", 
        "Mamy psa"
      ],
      [
        "They have a meeting", 
        "They've got a meeting", 
        "They's got a meeting", 
        "They got've a meeting", 
        "They've meeting got", 
        "У них есть встреча", 
        "У них є зустріч", 
        "Mają spotkanie"
      ],
      [
        "She has a cat", 
        "She's got a cat", 
        "She've got a cat", 
        "She's got cat a", 
        "She has got cat", 
        "У неё есть кот", 
        "У неї є кіт", 
        "Ma kota"
      ],
      [
        "I have a phone",                   
        "I've got a phone",                 
        "I've got phone a",                 
        "I have phone a",                   
        "I has a phone",                    
        "У меня есть телефон",              
        "У мене є телефон",                 
        "Mam telefon"                       
      ],
      [
        "He has a laptop", 
        "He's got a laptop", 
        "He's laptop got a", 
        "He have got a laptop", 
        "He'as got laptop", 
        "У него есть ноутбук", 
        "У нього є ноутбук", 
        "Ma laptop"
      ],
      [
        "We have a garden", 
        "We've got a garden", 
        "We garden have a", 
        "We got a garden've", 
        "We has got a garden", 
        "У нас есть сад", 
        "У нас є сад", 
        "Mamy ogród"
      ],
      [
        "They have a project", 
        "They've got a project", 
        "They've project got a", 
        "They have got project", 
        "They has a project", 
        "У них есть проект", 
        "У них є проект", 
        "Mają projekt"
      ],
      [
        "She has a friend", 
        "She's got a friend", 
        "She got's a friend", 
        "She have a friend", 
        "She has got friend", 
        "У неё есть подруга", 
        "У неї є подруга", 
        "Ma przyjaciółkę"
      ],
      [
        "I have time", 
        "I've got time", 
        "I've time got", 
        "I has time", 
        "I have got a time", 
        "У меня есть время", 
        "У мене є час", 
        "Mam czas"
      ],
      [
        "He has an idea", 
        "He's got an idea", 
        "He got's an idea", 
        "He have an idea", 
        "He has got idea", 
        "У него есть идея", 
        "У нього є ідея", 
        "Ma pomysł"
      ],
      [
        "We have a plan", 
        "We've got a plan", 
        "We have plan a", 
        "We's got a plan", 
        "We has got plan", 
        "У нас есть план", 
        "У нас є план", 
        "Mamy plan"
      ],
      [
        "They have a solution", 
        "They've got a solution", 
        "They've got solution a", 
        "They have solution got", 
        "They has a solution", 
        "У них есть решение", 
        "У них є рішення", 
        "Mają rozwiązanie"
      ],
      [
        "She has a job", 
        "She's got a job", 
        "She got's a job", 
        "She have job a", 
        "She has got job", 
        "У неё есть работа", 
        "У неї є робота", 
        "Ma pracę"
      ],
      [
        "I have a headache", 
        "I've got a headache", 
        "I've a got headache", 
        "I have got headache a", 
        "I has a headache", 
        "У меня головная боль", 
        "У мене головний біль", 
        "Mam ból głowy"
      ],
      [
        "He has a car", 
        "He's got a car", 
        "He have got car a", 
        "He has car a got", 
        "He got a car", 
        "У него есть машина", 
        "У нього є машина", 
        "Ma samochód"
      ],
      [
        "We have a meeting", 
        "We've got a meeting", 
        "We meeting have a", 
        "We's got a meeting", 
        "We has got a meeting", 
        "У нас есть встреча", 
        "У нас є зустріч", 
        "Mamy spotkanie"
      ],
      [
        "They have a holiday", 
        "They've got a holiday", 
        "They have got holiday a", 
        "They got holiday a", 
        "They has a holiday", 
        "У них есть отпуск", 
        "У них є відпустка", 
        "Mają wakacje"
      ],
      [
        "She has a house", 
        "She's got a house", 
        "She has house a got", 
        "She got a house", 
        "She has got house", 
        "У неё есть дом", 
        "У неї є будинок", 
        "Ma dom"
      ],
      [
        "I have a bicycle", 
        "I've got a bicycle", 
        "I have bicycle got a", 
        "I got a bicycle've", 
        "I has got bicycle", 
        "У меня есть велосипед", 
        "У мене є велосипед", 
        "Mam rower"
      ],
      [
        "He has a brother", 
        "He's got a brother", 
        "He has brother got a", 
        "He got a brother've", 
        "He have got a brother", 
        "У него есть брат", 
        "У нього є брат", 
        "Ma brata"
      ],
      [
        "We have a sister", 
        "We've got a sister", 
        "We sister have a", 
        "We has got sister a", 
        "We's got a sister", 
        "У нас есть сестра", 
        "У нас є сестра", 
        "Mamy siostrę"
      ],
      [
        "They have a child", 
        "They've got a child", 
        "They child have a", 
        "They got a child've", 
        "They has got a child", 
        "У них есть ребёнок", 
        "У них є дитина", 
        "Mają dziecko"
      ],
      [
        "She has a cat", 
        "She's got a cat", 
        "She have cat a", 
        "She got a cat've", 
        "She has got cat", 
        "У неё есть кошка", 
        "У неї є кішка", 
        "Ma кота"
      ],
      [
        "I have money", 
        "I've got money", 
        "I have got money a", 
        "I got money've", 
        "I has a money", 
        "У меня есть деньги", 
        "У мене є гроші", 
        "Mam pieniądze"
      ],
      [
        "He has a wallet", 
        "He's got a wallet", 
        "He have wallet a", 
        "He has got wallet", 
        "He got a wallet've", 
        "У него есть кошелёк", 
        "У нього є гаманець", 
        "Ma portfel"
      ],
      [
        "We have a TV", 
        "We've got a TV", 
        "We got TV have a", 
        "We has got a TV", 
        "We have got TV a", 
        "У нас есть телевизор", 
        "У нас є телевізор", 
        "Mamy telewizor"
      ],
      [
        "They have a laptop", 
        "They've got a laptop", 
        "They have got laptop a", 
        "They got a laptop've", 
        "They has a laptop", 
        "У них есть ноутбук", 
        "У них є ноутбук", 
        "Mają laptop"
      ],
      [
        "She has a phone", 
        "She's got a phone", 
        "She have got a phone", 
        "She got phone a", 
        "She has phone got", 
        "У неё есть телефон", 
        "У неї є телефон", 
        "Ma telefon"
      ],
      [
        "I have a camera", 
        "I've got a camera", 
        "I camera have a", 
        "I have got camera a", 
        "I has got camera", 
        "У меня есть камера", 
        "У мене є камера", 
        "Mam aparat"
      ],
      [
        "He has a book", 
        "He's got a book", 
        "He have got book a", 
        "He has book got a", 
        "He got a book've", 
        "У него есть книга", 
        "У нього є книга", 
        "Ma książkę"
      ],
      [
        "We have a computer", 
        "We've got a computer", 
        "We computer have a", 
        "We has computer got a", 
        "We got a computer've", 
        "У нас есть компьютер", 
        "У нас є комп'ютер", 
        "Mamy komputer"
      ],
      [
        "I have a phone",                   
        "I've got a phone",                 
        "I've got phone a",                 
        "I have phone a",                   
        "I has a phone",                    
        "У меня есть телефон",              
        "У мене є телефон",                 
        "Mam telefon"                       
      ],
      [
        "He has a laptop", 
        "He's got a laptop", 
        "He's laptop got a", 
        "He have got a laptop", 
        "He has got laptop", 
        "У него есть ноутбук", 
        "У нього є ноутбук", 
        "Ma laptop"
      ],
      [
        "We have a garden", 
        "We've got a garden", 
        "We garden have a", 
        "We got a garden've", 
        "We has got a garden", 
        "У нас есть сад", 
        "У нас є сад", 
        "Mamy ogród"
      ],
      [
        "They have a project", 
        "They've got a project", 
        "They've project got a", 
        "They have got project", 
        "They has a project", 
        "У них есть проект", 
        "У них є проект", 
        "Mają projekt"
      ],
      [
        "She has a friend", 
        "She's got a friend", 
        "She got's a friend", 
        "She have a friend", 
        "She has got friend", 
        "У неё есть подруга", 
        "У неї є подруга", 
        "Ma przyjaciółkę"
      ],
      [
        "I have time", 
        "I've got time", 
        "I've time got", 
        "I has time", 
        "I have got a time", 
        "У меня есть время", 
        "У мене є час", 
        "Mam czas"
      ],
      [
        "He has an idea", 
        "He's got an idea", 
        "He got's an idea", 
        "He have an idea", 
        "He has got idea", 
        "У него есть идея", 
        "У нього є ідея", 
        "Ma pomysł"
      ],
      [
        "We have a plan", 
        "We've got a plan", 
        "We have plan a", 
        "We's got a plan", 
        "We has got plan", 
        "У нас есть план", 
        "У нас є план", 
        "Mamy plan"
      ],
      [
        "They have a solution", 
        "They've got a solution", 
        "They've got solution a", 
        "They have solution got", 
        "They has a solution", 
        "У них есть решение", 
        "У них є рішення", 
        "Mają rozwiązanie"
      ],
      [
        "She has a job", 
        "She's got a job", 
        "She got's a job", 
        "She have job a", 
        "She has got job", 
        "У неё есть работа", 
        "У неї є робота", 
        "Ma pracę"
      ],
      [
        "I have a headache", 
        "I've got a headache", 
        "I've a got headache", 
        "I have got headache a", 
        "I has a headache", 
        "У меня головная боль", 
        "У мене головний біль", 
        "Mam ból głowy"
      ],
      [
        "He has a car", 
        "He's got a car", 
        "He have got car a", 
        "He has car a got", 
        "He got a car", 
        "У него есть машина", 
        "У нього є машина", 
        "Ma samochód"
      ],
      [
        "We have a meeting", 
        "We've got a meeting", 
        "We meeting have a", 
        "We's got a meeting", 
        "We has got a meeting", 
        "У нас есть встреча", 
        "У нас є зустріч", 
        "Mamy spotkanie"
      ],
      [
        "They have a holiday", 
        "They've got a holiday", 
        "They have got holiday a", 
        "They got holiday a", 
        "They has a holiday", 
        "У них есть отпуск", 
        "У них є відпустка", 
        "Mają wakacje"
      ],
      [
        "She has a house", 
        "She's got a house", 
        "She has house a got", 
        "She got a house", 
        "She has got house", 
        "У неё есть дом", 
        "У неї є будинок", 
        "Ma dom"
      ],
      [
        "I have a bicycle", 
        "I've got a bicycle", 
        "I have bicycle got a", 
        "I got a bicycle've", 
        "I has got bicycle", 
        "У меня есть велосипед", 
        "У мене є велосипед", 
        "Mam rower"
      ],
      [
        "He has a brother", 
        "He's got a brother", 
        "He has brother got a", 
        "He got a brother've", 
        "He have got a brother", 
        "У него есть брат", 
        "У нього є брат", 
        "Ma brata"
      ],
      [
        "We have a sister", 
        "We've got a sister", 
        "We sister have a", 
        "We has got sister a", 
        "We's got a sister", 
        "У нас есть сестра", 
        "У нас є сестра", 
        "Mamy siostrę"
      ],
      [
        "They have a child", 
        "They've got a child", 
        "They child have a", 
        "They have child got a", 
        "They has got a child", 
        "У них есть ребёнок", 
        "У них є дитина", 
        "Mają dziecko"
      ],
      [
        "She has a cat", 
        "She's got a cat", 
        "She have cat a", 
        "She got a cat've", 
        "She has got cat", 
        "У неё есть кошка", 
        "У неї є кішка", 
        "Ma кота"
      ],
      [
        "I have money", 
        "I've got money", 
        "I have got money a", 
        "I got money've", 
        "I has a money", 
        "У меня есть деньги", 
        "У мене є гроші", 
        "Mam pieniądze"
      ],
      [
        "He has a wallet", 
        "He's got a wallet", 
        "He have wallet a", 
        "He has got wallet", 
        "He got a wallet've", 
        "У него есть кошелёк", 
        "У нього є гаманець", 
        "Ma portfel"
      ],
      [
        "We have a TV", 
        "We've got a TV", 
        "We got TV have a", 
        "We has got a TV", 
        "We have got TV a", 
        "У нас есть телевизор", 
        "У нас є телевізор", 
        "Mamy telewizor"
      ],
      [
        "They have a laptop", 
        "They've got a laptop", 
        "They have got laptop a", 
        "They got a laptop've", 
        "They has a laptop", 
        "У них есть ноутбук", 
        "У них є ноутбук", 
        "Mają laptop"
      ],
      [
        "She has a phone", 
        "She's got a phone", 
        "She have got a phone", 
        "She got phone a", 
        "She has phone got", 
        "У неё есть телефон", 
        "У неї є телефон", 
        "Ma telefon"
      ],
      [
        "I have a camera", 
        "I've got a camera", 
        "I camera have a", 
        "I have got camera a", 
        "I has got camera", 
        "У меня есть камера", 
        "У мене є камера", 
        "Mam aparat"
      ],
      [
        "He has a book", 
        "He's got a book", 
        "He have got book a", 
        "He has book got a", 
        "He got a book've", 
        "У него есть книга", 
        "У нього є книга", 
        "Ma książkę"
      ],
      [
        "We have a computer", 
        "We've got a computer", 
        "We computer have a", 
        "We has computer got a", 
        "We got a computer've", 
        "У нас есть компьютер", 
        "У нас є комп'ютер", 
        "Mamy komputer"
      ],
      [
        "I've got a phone",                    
        "I have a phone",                      
        "I've got phone a",                    
        "I has got a phone",                   
        "I have got phone a",                  
        "У меня есть телефон",                 
        "У мене є телефон",                    
        "Mam telefon"                          
      ],
      [
        "He's got a laptop", 
        "He has a laptop",  
        "He's laptop got a", 
        "He have got a laptop", 
        "He has got laptop", 
        "У него есть ноутбук", 
        "У нього є ноутбук", 
        "Ma laptop"                           
      ],
      [
        "We've got a garden", 
        "We have a garden", 
        "We garden have a", 
        "We's got a garden", 
        "We has got a garden", 
        "У нас есть сад", 
        "У нас є сад", 
        "Mamy ogród"                          
      ],
      [
        "They've got a project", 
        "They have a project", 
        "They have project got", 
        "They got's a project", 
        "They has got a project", 
        "У них есть проект", 
        "У них є проект", 
        "Mają projekt"                         
      ],
      [
        "She's got a friend", 
        "She has a friend", 
        "She has friend got", 
        "She got's a friend", 
        "She have a friend", 
        "У неё есть подруга", 
        "У неї є подруга", 
        "Ma przyjaciółkę"                     
      ],
      [
        "I've got time", 
        "I have time", 
        "I've time got", 
        "I has got time", 
        "I have got a time", 
        "У меня есть время", 
        "У мене є час", 
        "Mam czas"                             
      ],
      [
        "He's got an idea", 
        "He has an idea", 
        "He have an idea", 
        "He got's an idea", 
        "He has got idea", 
        "У него есть идея", 
        "У нього є ідея", 
        "Ma pomysł"                           
      ],
      [
        "We've got a plan", 
        "We have a plan", 
        "We have got plan a", 
        "We's got a plan", 
        "We has got plan", 
        "У нас есть план", 
        "У нас є план", 
        "Mamy plan"                            
      ],
      [
        "They've got a solution", 
        "They have a solution", 
        "They have solution got", 
        "They've solution a got", 
        "They has a solution", 
        "У них есть решение", 
        "У них є рішення", 
        "Mają rozwiązanie"                    
      ],
      [
        "She's got a job", 
        "She has a job", 
        "She got's a job", 
        "She have job a", 
        "She has got job", 
        "У неё есть работа", 
        "У неї є робота", 
        "Ma pracę"                             
      ],
      [
        "I've got a headache", 
        "I have a headache", 
        "I has a headache", 
        "I've a got headache", 
        "I have got headache a", 
        "У меня головная боль", 
        "У мене головний біль", 
        "Mam ból głowy"                        
      ],
      [
        "He's got a car", 
        "He has a car", 
        "He has got car a", 
        "He have got a car", 
        "He got a car've", 
        "У него есть машина", 
        "У нього є машина", 
        "Ma samochód"                         
      ],
      [
        "We've got a meeting", 
        "We have a meeting", 
        "We have meeting got", 
        "We got a meeting've", 
        "We has got a meeting", 
        "У нас есть встреча", 
        "У нас є зустріч", 
        "Mamy spotkanie"                       
      ],
      [
        "They've got a holiday", 
        "They have a holiday", 
        "They have got holiday a", 
        "They holiday got a", 
        "They has a holiday", 
        "У них есть отпуск", 
        "У них є відпустка", 
        "Mają wakacje"                         
      ],
      [
        "She's got a house", 
        "She has a house", 
        "She have house got a", 
        "She got a house've", 
        "She has got house", 
        "У неё есть дом", 
        "У неї є будинок", 
        "Ma dom"                              
      ],
      [
        "I've got a bicycle", 
        "I have a bicycle", 
        "I bicycle have a", 
        "I have got bicycle a", 
        "I has got bicycle", 
        "У меня есть велосипед", 
        "У мене є велосипед", 
        "Mam rower"                            
      ],
      [
        "He's got a brother", 
        "He has a brother", 
        "He brother have got a", 
        "He got a brother've", 
        "He have got a brother", 
        "У него есть брат", 
        "У нього є брат", 
        "Ma brata"                            
      ],
      [
        "We've got a sister", 
        "We have a sister", 
        "We sister have got a", 
        "We have got a sister", 
        "We's got a sister", 
        "У нас есть сестра", 
        "У нас є сестра", 
        "Mamy siostrę"                        
      ],
      [
        "They've got a child", 
        "They have a child", 
        "They child have a", 
        "They have got child a", 
        "They has got a child", 
        "У них есть ребёнок", 
        "У них є дитина", 
        "Mają dziecko"                         
      ],
      [
        "She's got a cat", 
        "She has a cat", 
        "She have got cat a", 
        "She got a cat've", 
        "She has got cat", 
        "У неё есть кошка", 
        "У неї є кішка", 
        "Ma kota"                             
      ],
      [
        "I've got money", 
        "I have money", 
        "I has got money", 
        "I've money got a", 
        "I have got a money", 
        "У меня есть деньги", 
        "У мене є гроші", 
        "Mam pieniądze"                        
      ],
      [
        "He's got a wallet", 
        "He has a wallet", 
        "He have got wallet a", 
        "He has wallet a got", 
        "He got a wallet've", 
        "У него есть кошелёк", 
        "У нього є гаманець", 
        "Ma portfel"                            
      ],
      [
        "We've got a TV", 
        "We have a TV", 
        "We got TV have a", 
        "We has got a TV", 
        "We have got TV a", 
        "У нас есть телевизор", 
        "У нас є телевізор", 
        "Mamy telewizor"                      
      ],
      [
        "They've got a laptop", 
        "They have a laptop", 
        "They laptop have got a", 
        "They got a laptop've", 
        "They has got laptop", 
        "У них есть ноутбук", 
        "У них є ноутбук", 
        "Mają laptop"                          
      ],
      [
        "She's got a phone", 
        "She has a phone", 
        "She have got a phone", 
        "She got phone a", 
        "She has phone got", 
        "У неё есть телефон", 
        "У неї є телефон", 
        "Ma telefon"                            
      ],
      [
        "I've got a camera", 
        "I have a camera", 
        "I camera have a", 
        "I have got camera a", 
        "I has got camera", 
        "У меня есть камера", 
        "У мене є камера", 
        "Mam aparat"                           
      ],
      [
        "He's got a book", 
        "He has a book", 
        "He have got book a", 
        "He has book got a", 
        "He got a book've", 
        "У него есть книга", 
        "У нього є книга", 
        "Ma książkę"                         
      ],
      [
        "We've got a computer", 
        "We have a computer", 
        "We computer have a", 
        "We have got computer a", 
        "We has got a computer", 
        "У нас есть компьютер", 
        "У нас є комп'ютер", 
        "Mamy komputer"                       
      ],
      [
        "They've got a desk", 
        "They have a desk", 
        "They desk have got a", 
        "They've a got desk", 
        "They has got a desk", 
        "У них есть стол", 
        "У них є стіл", 
        "Mają biurko"                         
      ],
      [
        "She's got a guitar", 
        "She has a guitar", 
        "She have guitar a got", 
        "She got guitar a", 
        "She has got guitar", 
        "У неё есть гитара", 
        "У неї є гітара", 
        "Ma gitarę"                           
      ],
      [
        "I've got a subscription", 
        "I have a subscription", 
        "I subscription have got a", 
        "I have got subscription a", 
        "I has got subscription", 
        "У меня есть подписка", 
        "У мене є підписка", 
        "Mam subskrypcję"                      
      ],
      [
        "He's got a project", 
        "He has a project", 
        "He project have got a", 
        "He has got project a", 
        "He got project a", 
        "У него есть проект", 
        "У нього є проект", 
        "Ma projekt"                           
      ],
      [
        "We've got a mentor", 
        "We have a mentor", 
        "We mentor have got a", 
        "We have got mentor a", 
        "We's got a mentor", 
        "У нас есть наставник", 
        "У нас є наставник", 
        "Mamy mentora"                         
      ],
      [
        "They've got a solution", 
        "They have a solution", 
        "They solution have got a", 
        "They've a got solution", 
        "They has got solution", 
        "У них есть решение", 
        "У них є рішення", 
        "Mają rozwiązanie"                    
      ],
      [
        "She's got a vacation", 
        "She has a vacation", 
        "She have vacation a got", 
        "She got vacation a", 
        "She has got vacation", 
        "У неё есть отпуск", 
        "У неї є відпустка", 
        "Ma wakacje"                          
      ],
      [
        "I've got a recipe", 
        "I have a recipe", 
        "I recipe have got a", 
        "I have got recipe a", 
        "I has got recipe", 
        "У меня есть рецепт", 
        "У мене є рецепт", 
        "Mam przepis"                           
      ],
      [
        "He's got a meeting", 
        "He has a meeting", 
        "He meeting have got a", 
        "He has got meeting a", 
        "He got a meeting've", 
        "У него есть встреча", 
        "У нього є зустріч", 
        "Ma spotkanie"                         
      ],
      [
        "We've got a commitment", 
        "We have a commitment", 
        "We commitment have got a", 
        "We have got commitment a", 
        "We's got a commitment", 
        "У нас есть обязательство", 
        "У нас є зобов'язання", 
        "Mamy zobowiązanie"                    
      ],
      [
        "They've got a community", 
        "They have a community", 
        "They community have got a", 
        "They've a got community", 
        "They has got a community", 
        "У них есть сообщество", 
        "У них є спільнота", 
        "Mają społeczność"                    
      ],
      [
        "She's got a promise", 
        "She has a promise", 
        "She promise have got a", 
        "She got promise a", 
        "She has got promise", 
        "У неё есть обещание", 
        "У неї є обіцянка", 
        "Ma obietnicę"                         
      ],
      [
        "I've got an idea", 
        "I have an idea", 
        "I have idea got an", 
        "I've idea got a", 
        "I has got an idea", 
        "У меня есть идея", 
        "У мене є ідея", 
        "Mam pomysł"                            
      ],
      [
        "He's got a connection", 
        "He has a connection", 
        "He have connection got a", 
        "He has got connection a", 
        "He got a connection've", 
        "У него есть связь", 
        "У нього є зв'язок", 
        "Ma połączenie"                        
      ],
      [
        "We've got a subscription", 
        "We have a subscription", 
        "We subscription have got a", 
        "We have got subscription a", 
        "We has got a subscription", 
        "У нас есть подписка", 
        "У нас є підписка", 
        "Mamy subskrypcję"                      
      ],
      [
        "They've got a deal", 
        "They have a deal", 
        "They deal have got a", 
        "They've a got deal", 
        "They has got a deal", 
        "У них есть сделка", 
        "У них є угода", 
        "Mają umowę"                          
      ],
      [
        "She's got a strategy", 
        "She has a strategy", 
        "She strategy have got a", 
        "She got strategy a", 
        "She has got strategy", 
        "У неё есть стратегия", 
        "У неї є стратегія", 
        "Ma strategię"                          
      ],
      [
        "I've got a message", 
        "I have a message", 
        "I message have got a", 
        "I have got message a", 
        "I has got a message", 
        "У меня есть сообщение", 
        "У мене є повідомлення", 
        "Mam wiadomość"                        
      ],
      [
        "He's got a task", 
        "He has a task", 
        "He task have got a", 
        "He has got task a", 
        "He got a task've", 
        "У него есть задача", 
        "У нього є завдання", 
        "Ma zadanie"                           
      ],
      [
        "We've got an opportunity", 
        "We have an opportunity", 
        "We opportunity have got a", 
        "We have got opportunity a", 
        "We has got an opportunity", 
        "У нас есть возможность", 
        "У нас є можливість", 
        "Mamy okazję"                         
      ],
      [
        "They've got a chance", 
        "They have a chance", 
        "They chance have got a", 
        "They've a got chance", 
        "They has got a chance", 
        "У них есть шанс", 
        "У них є шанс", 
        "Mają szansę"                          
      ],
      [
        "She's got a meeting", 
        "She has a meeting", 
        "She have got meeting a", 
        "She got meeting a", 
        "She has got meeting", 
        "У неё есть встреча", 
        "У неї є зустріч", 
        "Ma spotkanie"                          
      ],
      [
        "I've got a project", 
        "I have a project", 
        "I have got project a", 
        "I got project a", 
        "I has got a project", 
        "У меня есть проект", 
        "У мене є проект", 
        "Mam projekt"                          
      ],
      [
        "I have a car", 
        "Have you got a car?", 
        "You got a car have?", 
        "Got you a car have?", 
        "Have you a car got?", 
        "У меня есть машина", 
        "У мене є автомобіль", 
        "Mam samochód"                           
      ],
      [
        "She has a beautiful garden", 
        "Has she got a beautiful garden?", 
        "She got beautiful garden has?", 
        "Got she a beautiful garden?", 
        "Has she a garden beautiful got?", 
        "У неё есть красивый сад", 
        "У неї є красивий сад", 
        "Ma piękny ogród"                         
      ],
      [
        "They have three dogs", 
        "Have they got three dogs?", 
        "They got three dogs have?", 
        "Got they three dogs have?", 
        "Have they dogs three got?", 
        "У них три собаки", 
        "У них три собаки", 
        "Mają trzy psy"                           
      ],
      [
        "He has a new job", 
        "Has he got a new job?", 
        "He got a new job has?", 
        "Got he a new job?", 
        "Has he job a new got?", 
        "У него новая работа", 
        "У нього нова робота", 
        "Ma nową pracę"                           
      ],
      [
        "We have a great team", 
        "Have we got a great team?", 
        "We got great team have?", 
        "Got we a great team?", 
        "Have we team great got?", 
        "У нас отличная команда", 
        "У нас чудова команда", 
        "Mamy wspaniały zespół"                    
      ],
      [
        "You have an interesting project", 
        "Have you got an interesting project?", 
        "You got an interesting project have?", 
        "Got you an interesting project?", 
        "Have you project interesting got?", 
        "У тебя интересный проект", 
        "У тебе цікавий проект", 
        "Masz ciekawy projekt"                      
      ],
      [
        "I have a good book", 
        "Have you got a good book?", 
        "You got a good book have?", 
        "Got you a good book?", 
        "Have you book good got?", 
        "У меня хорошая книга", 
        "У мене хороша книга", 
        "Mam dobrą książkę"                         
      ],
      [
        "She has a beautiful dress", 
        "Has she got a beautiful dress?", 
        "She got a beautiful dress has?", 
        "Got she a beautiful dress?", 
        "Has she dress a beautiful got?", 
        "У неё красивое платье", 
        "У неї красиве плаття", 
        "Ma piękną sukienkę"                       
      ],
      [
        "They have a lovely house", 
        "Have they got a lovely house?", 
        "They got a lovely house have?", 
        "Got they a lovely house?", 
        "Have they house lovely got?", 
        "У них прекрасный дом", 
        "У них прекрасний будинок", 
        "Mają piękny dom"                           
      ],
      [
        "He has a wonderful family", 
        "Has he got a wonderful family?", 
        "He got a wonderful family has?", 
        "Got he a wonderful family?", 
        "Has he family a wonderful got?", 
        "У него замечательная семья", 
        "У нього чудова сім'я", 
        "Ma wspaniałą rodzinę"                     
      ],
      [
        "We have delicious food", 
        "Have we got delicious food?", 
        "We got delicious food have?", 
        "Got we delicious food?", 
        "Have we food delicious got?", 
        "У нас вкусная еда", 
        "У нас смачна їжа", 
        "Mamy pyszne jedzenie"                      
      ],
      [
        "I have a new phone", 
        "Have you got a new phone?", 
        "You got a new phone have?", 
        "Got you a new phone?", 
        "Have you phone new got?", 
        "У меня новый телефон", 
        "У мене новий телефон", 
        "Mam nowy telefon"                           
      ],
      [
        "She has a nice bicycle", 
        "Has she got a nice bicycle?", 
        "She got a nice bicycle has?", 
        "Got she a nice bicycle?", 
        "Has she bicycle nice got?", 
        "У неё хороший велосипед", 
        "У неї хороший велосипед", 
        "Ma ładny rower"                         
      ],
      [
        "They have an exciting trip", 
        "Have they got an exciting trip?", 
        "They got an exciting trip have?", 
        "Got they an exciting trip?", 
        "Have they trip exciting got?", 
        "У них захватывающая поездка", 
        "У них захоплююча поїздка", 
        "Mają ekscytującą podróż"                           
      ],
      [
        "He has an old guitar", 
        "Has he got an old guitar?", 
        "He got an old guitar has?", 
        "Got he an old guitar?", 
        "Has he guitar old got?", 
        "У него старая гитара", 
        "У нього стара гітара", 
        "Ma starą gitarę"                           
      ],
      [
        "We have a big challenge", 
        "Have we got a big challenge?", 
        "We got a big challenge have?", 
        "Got we a big challenge?", 
        "Have we challenge big got?", 
        "У нас большая задача", 
        "У нас велике завдання", 
        "Mamy duże wyzwanie"                    
      ],
      [
        "You have a great idea", 
        "Have you got a great idea?", 
        "You got a great idea have?", 
        "Got you a great idea?", 
        "Have you idea great got?", 
        "У тебя отличная идея", 
        "У тебе чудова ідея", 
        "Masz świetny pomysł"                      
      ],
      [
        "I have a unique collection", 
        "Have you got a unique collection?", 
        "You got a unique collection have?", 
        "Got you a unique collection?", 
        "Have you collection unique got?", 
        "У меня уникальная коллекция", 
        "У мене унікальна колекція", 
        "Mam unikalną kolekcję"                         
      ],
      [
        "She has a lovely smile", 
        "Has she got a lovely smile?", 
        "She got a lovely smile has?", 
        "Got she a lovely smile?", 
        "Has she smile lovely got?", 
        "У неё очаровательная улыбка", 
        "У неї приваблива усмішка", 
        "Ma uroczy uśmiech"                       
      ],
      [
        "They have a successful business", 
        "Have they got a successful business?", 
        "They got a successful business have?", 
        "Got they a successful business?", 
        "Have they business successful got?", 
        "У них успешный бизнес", 
        "У них успішний бізнес", 
        "Mają udany biznes"                           
      ],
      [
        "He has a funny joke", 
        "Has he got a funny joke?", 
        "He got a funny joke has?", 
        "Got he a funny joke?", 
        "Has he joke funny got?", 
        "У него смешная шутка", 
        "У нього смішний жарт", 
        "Ma śmieszny żart"                         
      ],
      [
        "We have an important meeting", 
        "Have we got an important meeting?", 
        "We got an important meeting have?", 
        "Got we an important meeting?", 
        "Have we meeting important got?", 
        "У нас важная встреча", 
        "У нас важлива зустріч", 
        "Mamy ważne spotkanie"                    
      ],
      [
        "You have a wonderful opportunity", 
        "Have you got a wonderful opportunity?", 
        "You got a wonderful opportunity have?", 
        "Got you a wonderful opportunity?", 
        "Have you opportunity wonderful got?", 
        "У тебя замечательная возможность", 
        "У тебе чудова можливість", 
        "Masz wspaniałą okazję"                      
      ],
      [
        "I have a comfortable chair", 
        "Have you got a comfortable chair?", 
        "You got a comfortable chair have?", 
        "Got you a comfortable chair?", 
        "Have you chair comfortable got?", 
        "У меня удобный стул", 
        "У мене зручний стілець", 
        "Mam wygodne krzesło"                         
      ],
      [
        "She has a stylish outfit", 
        "Has she got a stylish outfit?", 
        "She got a stylish outfit has?", 
        "Got she a stylish outfit?", 
        "Has she outfit stylish got?", 
        "У неё стильный наряд", 
        "У неї стильний одяг", 
        "Ma stylowy strój"                       
      ],
      [
        "They have a fantastic vacation", 
        "Have they got a fantastic vacation?", 
        "They got a fantastic vacation have?", 
        "Got they a fantastic vacation?", 
        "Have they vacation fantastic got?", 
        "У них фантастический отпуск", 
        "У них фантастична відпустка", 
        "Mają fantastyczne wakacje"                           
      ],
      [
        "He has a precious gem", 
        "Has he got a precious gem?", 
        "He got a precious gem has?", 
        "Got he a precious gem?", 
        "Has he gem precious got?", 
        "У него драгоценный камень", 
        "У нього коштовний камінь", 
        "Ma cenny kamień"                         
      ],
      [
        "We have an excellent teacher", 
        "Have we got an excellent teacher?", 
        "We got an excellent teacher have?", 
        "Got we an excellent teacher?", 
        "Have we teacher excellent got?", 
        "У нас отличный учитель", 
        "У нас чудовий вчитель", 
        "Mamy doskonałego nauczyciela"                    
      ],
      [
        "You have an amazing talent", 
        "Have you got an amazing talent?", 
        "You got an amazing talent have?", 
        "Got you an amazing talent?", 
        "Have you talent amazing got?", 
        "У тебя удивительный талант", 
        "У тебе дивовижний талант", 
        "Masz niesamowity talent"                      
      ],
      [
        "I have a cozy home", 
        "Have you got a cozy home?", 
        "You got a cozy home have?", 
        "Got you a cozy home?", 
        "Have you home cozy got?", 
        "У меня уютный дом", 
        "У мене затишний дім", 
        "Mam przytulny dom"                         
      ],
      [
        "She has a rare collection", 
        "Has she got a rare collection?", 
        "She got a rare collection has?", 
        "Got she a rare collection?", 
        "Has she collection rare got?", 
        "У неё редкая коллекция", 
        "У неї рідкісна колекція", 
        "Ma rzadką kolekcję"                       
      ],
      [
        "They have a thrilling adventure", 
        "Have they got a thrilling adventure?", 
        "They got a thrilling adventure have?", 
        "Got they a thrilling adventure?", 
        "Have they adventure thrilling got?", 
        "У них захватывающее приключение", 
        "У них захоплююча пригода", 
        "Mają ekscytującą przygodę"                           
      ],
      [
        "He has a smart idea", 
        "Has he got a smart idea?", 
        "He got a smart idea has?", 
        "Got he a smart idea?", 
        "Has he idea smart got?", 
        "У него умная идея", 
        "У нього розумна ідея", 
        "Ma mądry pomysł"                         
      ],
      [
        "We have exciting news", 
        "Have we got exciting news?", 
        "We got exciting news have?", 
        "Got we exciting news?", 
        "Have we news exciting got?", 
        "У нас захватывающие новости", 
        "У нас захоплюючі новини", 
        "Mamy ekscytujące wiadomości"                    
      ],
      [
        "You have a delightful surprise", 
        "Have you got a delightful surprise?", 
        "You got a delightful surprise have?", 
        "Got you a delightful surprise?", 
        "Have you surprise delightful got?", 
        "У тебя приятный сюрприз", 
        "У тебе приємний сюрприз", 
        "Masz przyjemną niespodziankę"                      
      ],
      [
        "I have an impressive skill", 
        "Have you got an impressive skill?", 
        "You got an impressive skill have?", 
        "Got you an impressive skill?", 
        "Have you skill impressive got?", 
        "У меня впечатляющее умение", 
        "У мене вражаюча навичка", 
        "Mam imponującą umiejętność"                         
      ],
      [
        "She has a beautiful garden", 
        "Has she got a beautiful garden?", 
        "She got a beautiful garden has?", 
        "Got she a beautiful garden?", 
        "Has she garden beautiful got?", 
        "У неё красивый сад", 
        "У неї гарний сад", 
        "Ma piękny ogród"                       
      ],
      [
        "They have a new project", 
        "Have they got a new project?", 
        "They got a new project have?", 
        "Got they a new project?", 
        "Have they project new got?", 
        "У них новый проект", 
        "У них новий проект", 
        "Mają nowy projekt"                           
      ],
      [
        "He has a challenging task", 
        "Has he got a challenging task?", 
        "He got a challenging task has?", 
        "Got he a challenging task?", 
        "Has he task challenging got?", 
        "У него сложная задача", 
        "У нього складне завдання", 
        "Ma trudne zadanie"                         
      ],
      [
        "We have a loyal friend", 
        "Have we got a loyal friend?", 
        "We got a loyal friend have?", 
        "Got we a loyal friend?", 
        "Have we friend loyal got?", 
        "У нас верный друг", 
        "У нас вірний друг", 
        "Mamy wiernego przyjaciela"                    
      ],
      [
        "You have a great memory", 
        "Have you got a great memory?", 
        "You got a great memory have?", 
        "Got you a great memory?", 
        "Have you memory great got?", 
        "У тебя отличная память", 
        "У тебе чудова пам'ять", 
        "Masz świetną pamięć"                      
      ],
      [
        "I have a powerful computer", 
        "Have you got a powerful computer?", 
        "You got a powerful computer have?", 
        "Got you a powerful computer?", 
        "Have you computer powerful got?", 
        "У меня мощный компьютер", 
        "У мене потужний комп'ютер", 
        "Mam potężny komputer"                         
      ],
      [
        "She has an inspiring story", 
        "Has she got an inspiring story?", 
        "She got an inspiring story has?", 
        "Got she an inspiring story?", 
        "Has she story inspiring got?", 
        "У неё вдохновляющая история", 
        "У неї надихаюча історія", 
        "Ma inspirującą historię"                       
      ],
      [
        "They have an amazing journey", 
        "Have they got an amazing journey?", 
        "They got an amazing journey have?", 
        "Got they an amazing journey?", 
        "Have they journey amazing got?", 
        "У них удивительное путешествие", 
        "У них дивовижна подорож", 
        "Mają niesamowitą podróż"                           
      ],
      [
        "He has a unique perspective", 
        "Has he got a unique perspective?", 
        "He got a unique perspective has?", 
        "Got he a unique perspective?", 
        "Has he perspective unique got?", 
        "У него уникальная перспектива", 
        "У нього унікальна перспектива", 
        "Ma unikalną perspektywę"                         
      ],
      [
        "We have a bright future", 
        "Have we got a bright future?", 
        "We got a bright future have?", 
        "Got we a bright future?", 
        "Have we future bright got?", 
        "У нас светлое будущее", 
        "У нас світле майбутнє", 
        "Mamy jasną przyszłość"                    
      ],
      [
        "You have a lovely pet", 
        "Have you got a lovely pet?", 
        "You got a lovely pet have?", 
        "Got you a lovely pet?", 
        "Have you pet lovely got?", 
        "У тебя милый питомец", 
        "У тебе милий улюбленець", 
        "Masz urocze zwierzątko"                      
      ],
      [
        "I have a wonderful family", 
        "Have you got a wonderful family?", 
        "You got a wonderful family have?", 
        "Got you a wonderful family?", 
        "Have you family wonderful got?", 
        "У меня замечательная семья", 
        "У мене чудова родина", 
        "Mam wspaniałą rodzinę"                         
      ],
      [
        "She has a fantastic job", 
        "Has she got a fantastic job?", 
        "She got a fantastic job has?", 
        "Got she a fantastic job?", 
        "Has she job fantastic got?", 
        "У неё фантастическая работа", 
        "У неї фантастична робота", 
        "Ma fantastyczną pracę"                       
      ],
      [
        "They have an exciting opportunity", 
        "Have they got an exciting opportunity?", 
        "They got an exciting opportunity have?", 
        "Got they an exciting opportunity?", 
        "Have they opportunity exciting got?", 
        "У них захватывающая возможность", 
        "У них захоплююча можливість", 
        "Mają ekscytującą okazję"                           
      ],
      [
        "He has a reliable source", 
        "Has he got a reliable source?", 
        "He got a reliable source has?", 
        "Got he a reliable source?", 
        "Has he source reliable got?", 
        "У него надежный источник", 
        "У нього надійне джерело", 
        "Ma niezawodne źródło"                         
      ],
      [
        "We have a meaningful conversation", 
        "Have we got a meaningful conversation?", 
        "We got a meaningful conversation have?", 
        "Got we a meaningful conversation?", 
        "Have we conversation meaningful got?", 
        "У нас содержательный разговор", 
        "У нас змістовна розмова", 
        "Mamy znaczącą rozmowę"                    
      ],
      [
        "You have a deep understanding", 
        "Have you got a deep understanding?", 
        "You got a deep understanding have?", 
        "Got you a deep understanding?", 
        "Have you understanding deep got?", 
        "У тебя глубокое понимание", 
        "У тебе глибоке розуміння", 
        "Masz głębokie zrozumienie"                      
      ],
      [
        "I have a bright idea", 
        "Have you got a bright idea?", 
        "You got a bright idea have?", 
        "Got you a bright idea?", 
        "Have you idea bright got?", 
        "У меня блестящая идея", 
        "У мене яскрава ідея", 
        "Mam świetny pomysł"                         
      ],
      [
        "She has a delightful voice", 
        "Has she got a delightful voice?", 
        "She got a delightful voice has?", 
        "Got she a delightful voice?", 
        "Has she voice delightful got?", 
        "У неё приятный голос", 
        "У неї приємний голос", 
        "Ma przyjemny głos"                       
      ],
      [
        "They have a challenging project", 
        "Have they got a challenging project?", 
        "They got a challenging project have?", 
        "Got they a challenging project?", 
        "Have they project challenging got?", 
        "У них сложный проект", 
        "У них складний проект", 
        "Mają trudny projekt"                           
      ],
      [
        "He has an interesting perspective", 
        "Has he got an interesting perspective?", 
        "He got an interesting perspective has?", 
        "Got he an interesting perspective?", 
        "Has he perspective interesting got?", 
        "У него интересная перспектива", 
        "У нього цікава перспектива", 
        "Ma interesującą perspektywę"                         
      ],
      [
        "We have a busy schedule", 
        "Have we got a busy schedule?", 
        "We got a busy schedule have?", 
        "Got we a busy schedule?", 
        "Have we schedule busy got?", 
        "У нас напряженный график", 
        "У нас напружений графік", 
        "Mamy napięty harmonogram"                    
      ],
      [
        "You have a special talent", 
        "Have you got a special talent?", 
        "You got a special talent have?", 
        "Got you a special talent?", 
        "Have you talent special got?", 
        "У тебя особый талант", 
        "У тебе особливий талант", 
        "Masz szczególny talent"                      
      ],
      [
        "I do not have an impressive skill", 
        "Do you not have an impressive skill?", 
        "You do not have an impressive skill, do?", 
        "Have you an impressive skill not?", 
        "Not have you an impressive skill?", 
        "У меня нет впечатляющего умения", 
        "У мене немає вражаючої навички", 
        "Nie mam imponującej umiejętności"                         
      ],
      [
        "She does not have a beautiful garden", 
        "Does she not have a beautiful garden?", 
        "She does not have a beautiful garden, does she?", 
        "Have she a beautiful garden not?", 
        "Not have she a beautiful garden?", 
        "У неё нет красивого сада", 
        "У неї немає гарного саду", 
        "Nie ma pięknego ogrodu"                       
      ],
      [
        "They do not have a new project", 
        "Do they not have a new project?", 
        "They do not have a new project, do they?", 
        "Have they a new project not?", 
        "Not have they a new project?", 
        "У них нет нового проекта", 
        "У них немає нового проекту", 
        "Nie mają nowego projektu"                           
      ],
      [
        "He does not have a challenging task", 
        "Does he not have a challenging task?", 
        "He does not have a challenging task, does he?", 
        "Have he a challenging task not?", 
        "Not have he a challenging task?", 
        "У него нет сложной задачи", 
        "У нього немає складного завдання", 
        "Nie ma trudnego zadania"                         
      ],
      [
        "We do not have a loyal friend", 
        "Do we not have a loyal friend?", 
        "We do not have a loyal friend, do we?", 
        "Have we a loyal friend not?", 
        "Not have we a loyal friend?", 
        "У нас нет верного друга", 
        "У нас немає вірного друга", 
        "Nie mamy wiernego przyjaciela"                    
      ],
      [
        "You do not have a great memory", 
        "Do you not have a great memory?", 
        "You do not have a great memory, do you?", 
        "Have you a great memory not?", 
        "Not have you a great memory?", 
        "У тебя нет отличной памяти", 
        "У тебе немає чудової пам'яті", 
        "Nie masz świetnej pamięci"                      
      ],
      [
        "I do not have a powerful computer", 
        "Do you not have a powerful computer?", 
        "You do not have a powerful computer, do you?", 
        "Have you a powerful computer not?", 
        "Not have you a powerful computer?", 
        "У меня нет мощного компьютера", 
        "У мене немає потужного комп'ютера", 
        "Nie mam potężnego komputera"                         
      ],
      [
        "She does not have an inspiring story", 
        "Does she not have an inspiring story?", 
        "She does not have an inspiring story, does she?", 
        "Have she an inspiring story not?", 
        "Not have she an inspiring story?", 
        "У неё нет вдохновляющей истории", 
        "У неї немає надихаючої історії", 
        "Nie ma inspirującej historii"                       
      ],
      [
        "They do not have an amazing journey", 
        "Do they not have an amazing journey?", 
        "They do not have an amazing journey, do they?", 
        "Have they an amazing journey not?", 
        "Not have they an amazing journey?", 
        "У них нет удивительного путешествия", 
        "У них немає дивовижної подорожі", 
        "Nie mają niesamowitej podróży"                           
      ],
      [
        "He does not have a unique perspective", 
        "Does he not have a unique perspective?", 
        "He does not have a unique perspective, does he?", 
        "Have he a unique perspective not?", 
        "Not have he a unique perspective?", 
        "У него нет уникальной перспективы", 
        "У нього немає унікальної перспективи", 
        "Nie ma unikalnej perspektywy"                         
      ],
      [
        "We do not have a bright future", 
        "Do we not have a bright future?", 
        "We do not have a bright future, do we?", 
        "Have we a bright future not?", 
        "Not have we a bright future?", 
        "У нас нет светлого будущего", 
        "У нас немає світлого майбутнього", 
        "Nie mamy jasnej przyszłości"                    
      ],
      [
        "You do not have a lovely pet", 
        "Do you not have a lovely pet?", 
        "You do not have a lovely pet, do you?", 
        "Have you a lovely pet not?", 
        "Not have you a lovely pet?", 
        "У тебя нет милого питомца", 
        "У тебе немає милого улюбленця", 
        "Nie masz urocze zwierzątko"                      
      ],
      [
        "I do not have a wonderful family", 
        "Do you not have a wonderful family?", 
        "You do not have a wonderful family, do you?", 
        "Have you a wonderful family not?", 
        "Not have you a wonderful family?", 
        "У меня нет замечательной семьи", 
        "У мене немає чудової родини", 
        "Nie mam wspaniałej rodziny"                         
      ],
      [
        "She does not have a fantastic job", 
        "Does she not have a fantastic job?", 
        "She does not have a fantastic job, does she?", 
        "Have she a fantastic job not?", 
        "Not have she a fantastic job?", 
        "У неё нет фантастической работы", 
        "У неї немає фантастичної роботи", 
        "Nie ma fantastycznej pracy"                       
      ],
      [
        "They do not have an exciting opportunity", 
        "Do they not have an exciting opportunity?", 
        "They do not have an exciting opportunity, do they?", 
        "Have they an exciting opportunity not?", 
        "Not have they an exciting opportunity?", 
        "У них нет захватывающей возможности", 
        "У них немає захоплюючої можливості", 
        "Nie mają ekscytującej okazji"                           
      ],
      [
        "He does not have a reliable source", 
        "Does he not have a reliable source?", 
        "He does not have a reliable source, does he?", 
        "Have he a reliable source not?", 
        "Not have he a reliable source?", 
        "У него нет надежного источника", 
        "У нього немає надійного джерела", 
        "Nie ma niezawodnego źródła"                         
      ],
      [
        "We do not have a meaningful conversation", 
        "Do we not have a meaningful conversation?", 
        "We do not have a meaningful conversation, do we?", 
        "Have we a meaningful conversation not?", 
        "Not have we a meaningful conversation?", 
        "У нас нет содержательного разговора", 
        "У нас немає змістовної розмови", 
        "Nie mamy znaczącej rozmowy"                    
      ],
      [
        "You do not have a deep understanding", 
        "Do you not have a deep understanding?", 
        "You do not have a deep understanding, do you?", 
        "Have you a deep understanding not?", 
        "Not have you a deep understanding?", 
        "У тебя нет глубокого понимания", 
        "У тебе немає глибокого розуміння", 
        "Nie masz głębokiego zrozumienia"                      
      ],
      [
        "I do not have a bright idea", 
        "Do you not have a bright idea?", 
        "You do not have a bright idea, do you?", 
        "Have you a bright idea not?", 
        "Not have you a bright idea?", 
        "У меня нет блестящей идеи", 
        "У мене немає яскравої ідеї", 
        "Nie mam świetnego pomysłu"                         
      ],
      [
        "She does not have a delightful voice", 
        "Does she not have a delightful voice?", 
        "She does not have a delightful voice, does she?", 
        "Have she a delightful voice not?", 
        "Not have she a delightful voice?", 
        "У неё нет приятного голоса", 
        "У неї немає приємного голосу", 
        "Nie ma przyjemnego głosu"                       
      ],
      [
        "They do not have a challenging project", 
        "Do they not have a challenging project?", 
        "They do not have a challenging project, do they?", 
        "Have they a challenging project not?", 
        "Not have they a challenging project?", 
        "У них нет сложного проекта", 
        "У них немає складного проекту", 
        "Nie mają trudnego projektu"                           
      ],
      [
        "I do not like to swim", 
        "Do you not like to swim?", 
        "You do not like to swim, do you?", 
        "Like you to swim not?", 
        "Not like you to swim?", 
        "Мне не нравится плавать", 
        "Мені не подобається плавати", 
        "Nie lubię pływać"                        
      ],
      [
        "She does not enjoy reading", 
        "Does she not enjoy reading?", 
        "She does not enjoy reading, does she?", 
        "Enjoy she reading not?", 
        "Not enjoy she reading?", 
        "Ей не нравится читать", 
        "Їй не подобається читати", 
        "Nie lubi czytać"                          
      ],
      [
        "They do not play football", 
        "Do they not play football?", 
        "They do not play football, do they?", 
        "Play they football not?", 
        "Not play they football?", 
        "Они не играют в футбол", 
        "Вони не грають у футбол", 
        "Nie grają w piłkę nożną"                      
      ],
      [
        "He does not cook well", 
        "Does he not cook well?", 
        "He does not cook well, does he?", 
        "Cook he well not?", 
        "Not cook he well?", 
        "Он плохо готовит", 
        "Він погано готує", 
        "Nie gotuje dobrze"                          
      ],
      [
        "We do not travel often", 
        "Do we not travel often?", 
        "We do not travel often, do we?", 
        "Travel we often not?", 
        "Not travel we often?", 
        "Мы не часто путешествуем", 
        "Ми не часто подорожуємо", 
        "Nie podróżujemy często"                      
      ],
      [
        "You do not enjoy dancing", 
        "Do you not enjoy dancing?", 
        "You do not enjoy dancing, do you?", 
        "Enjoy you dancing not?", 
        "Not enjoy you dancing?", 
        "Тебе не нравится танцевать", 
        "Тобі не подобається танцювати", 
        "Nie lubisz tańczyć"                          
      ],
      [
        "I do not eat meat", 
        "Do you not eat meat?", 
        "You do not eat meat, do you?", 
        "Eat you meat not?", 
        "Not eat you meat?", 
        "Я не ем мясо", 
        "Я не їм м'ясо", 
        "Nie jem mięsa"                        
      ],
      [
        "She does not study French", 
        "Does she not study French?", 
        "She does not study French, does she?", 
        "Study she French not?", 
        "Not study she French?", 
        "Она не изучает французский", 
        "Вона не вивчає французьку", 
        "Nie uczy się francuskiego"                          
      ],
      [
        "They do not watch TV", 
        "Do they not watch TV?", 
        "They do not watch TV, do they?", 
        "Watch they TV not?", 
        "Not watch they TV?", 
        "Они не смотрят телевизор", 
        "Вони не дивляться телевізор", 
        "Nie oglądają telewizji"                      
      ],
      [
        "He does not play the guitar", 
        "Does he not play the guitar?", 
        "He does not play the guitar, does he?", 
        "Play he the guitar not?", 
        "Not play he the guitar?", 
        "Он не играет на гитаре", 
        "Він не грає на гітарі", 
        "Nie gra na gitarze"                          
      ],
      [
        "We do not like hiking", 
        "Do we not like hiking?", 
        "We do not like hiking, do we?", 
        "Like we hiking not?", 
        "Not like we hiking?", 
        "Нам не нравится походы", 
        "Нам не подобаються походи", 
        "Nie lubimy wędrówek"                        
      ],
      [
        "I have not got a car", 
        "Have you not got a car?", 
        "You have not got a car, have you?", 
        "Got you not a car?", 
        "Have not you got a car?", 
        "У меня нет машины", 
        "У мене немає автомобіля", 
        "Nie mam samochodu"                        
      ],
      [
        "She has not got a dog", 
        "Has she not got a dog?", 
        "She has not got a dog, has she?", 
        "Got she not a dog?", 
        "Has not she got a dog?", 
        "У нее нет собаки", 
        "В неї немає собаки", 
        "Nie ma psa"                          
      ],
      [
        "They have not got a house", 
        "Have they not got a house?", 
        "They have not got a house, have they?", 
        "Got they not a house?", 
        "Have not they got a house?", 
        "У них нет дома", 
        "В них немає будинку", 
        "Nie mają domu"                      
      ],
      [
        "He has not got a bike", 
        "Has he not got a bike?", 
        "He has not got a bike, has he?", 
        "Got he not a bike?", 
        "Has not he got a bike?", 
        "У него нет велосипеда", 
        "У нього немає велосипеда", 
        "Nie ma roweru"                          
      ],
      [
        "We have not got enough time", 
        "Have we not got enough time?", 
        "We have not got enough time, have we?", 
        "Got we not enough time?", 
        "Have not we got enough time?", 
        "У нас недостаточно времени", 
        "У нас недостатньо часу", 
        "Nie mamy wystarczająco dużo czasu"                      
      ],
      [
        "You have not got a job", 
        "Have you not got a job?", 
        "You have not got a job, have you?", 
        "Got you not a job?", 
        "Have not you got for job?", 
        "У тебя нет работы", 
        "У тебе немає роботи", 
        "Nie masz pracy"                          
      ],
      [
        "I have not got any money", 
        "Have you not got any money?", 
        "You have not got any money, have you?", 
        "Got you not any money?", 
        "Have not you got any money?", 
        "У меня нет денег", 
        "У мене немає грошей", 
        "Nie mam pieniędzy"                        
      ],
      [
        "She has not got a computer", 
        "Has she not got a computer?", 
        "She has not got a computer, has she?", 
        "Got she not a computer?", 
        "Has not she got a computer?", 
        "У нее нет компьютера", 
        "В неї немає комп'ютера", 
        "Nie ma komputera"                          
      ],
      [
        "They have not got a garden", 
        "Have they not got a garden?", 
        "They have not got a garden, have they?", 
        "Got they not a garden?", 
        "Have not they got a garden?", 
        "У них нет сада", 
        "В них немає саду", 
        "Nie mają ogrodu"                      
      ],
      [
        "He has not got a plan", 
        "Has he not got a plan?", 
        "He has not got a plan, has he?", 
        "Got he not a plan?", 
        "Has not he got a plan?", 
        "У него нет плана", 
        "У нього немає плану", 
        "Nie ma planu"                          
      ],
      [
        "I haven't got a car", 
        "Haven't you got a car?", 
        "You've not got a car, have you?", 
        "Got you not a car?", 
        "Haven't you got a car?", 
        "У меня нет машины", 
        "У мене немає автомобіля", 
        "Nie mam samochodu"                        
      ],
      [
        "She hasn't got a dog", 
        "Hasn't she got a dog?", 
        "She's not got a dog, has she?", 
        "Got she not a dog?", 
        "Hasn't she got a dog?", 
        "У нее нет собаки", 
        "В неї немає собаки", 
        "Nie ma psa"                          
      ],
      [
        "They haven't got a house", 
        "Haven't they got a house?", 
        "They've not got a house, have they?", 
        "Got they not a house?", 
        "Haven't they got a house?", 
        "У них нет дома", 
        "В них немає будинку", 
        "Nie mają domu"                      
      ],
      [
        "He hasn't got a bike", 
        "Hasn't he got a bike?", 
        "He's not got a bike, has he?", 
        "Got he not a bike?", 
        "Hasn't he got a bike?", 
        "У него нет велосипеда", 
        "У нього немає велосипеда", 
        "Nie ma roweru"                          
      ],
      [
        "We haven't got enough time", 
        "Haven't we got enough time?", 
        "We've not got enough time, have we?", 
        "Got we not enough time?", 
        "Haven't we got enough time?", 
        "У нас недостаточно времени", 
        "У нас недостатньо часу", 
        "Nie mamy wystarczająco dużo czasu"                      
      ],
      [
        "You haven't got a job", 
        "Haven't you got a job?", 
        "You've not got a job, have you?", 
        "Got you not a job?", 
        "Haven't you got a job?", 
        "У тебя нет работы", 
        "У тебе немає роботи", 
        "Nie masz pracy"                          
      ],
      [
        "I haven't got any money", 
        "Haven't you got any money?", 
        "You've not got any money, have you?", 
        "Got you not any money?", 
        "Haven't you got any money?", 
        "У меня нет денег", 
        "У мене немає грошей", 
        "Nie mam pieniędzy"                        
      ],
      [
        "She hasn't got a computer", 
        "Hasn't she got a computer?", 
        "She's not got a computer, has she?", 
        "Got she not a computer?", 
        "Hasn't she got a computer?", 
        "У нее нет компьютера", 
        "В неї немає комп'ютера", 
        "Nie ma komputera"                          
      ],
      [
        "They haven't got a garden", 
        "Haven't they got a garden?", 
        "They've not got a garden, have they?", 
        "Got they not a garden?", 
        "Haven't they got a garden?", 
        "У них нет сада", 
        "В них немає саду", 
        "Nie mają ogrodu"                      
      ],
      [
        "He hasn't got a plan", 
        "Hasn't he got a plan?", 
        "He's not got a plan, has he?", 
        "Got he not a plan?", 
        "Hasn't he got a plan?", 
        "У него нет плана", 
        "У нього немає плану", 
        "Nie ma planu"                          
      ],
      [
        "I haven't got a bicycle", 
        "Haven't you got a bicycle?", 
        "You've not got a bicycle, have you?", 
        "Got you not a bicycle?", 
        "Haven't you got a bicycle?", 
        "У меня нет велосипеда", 
        "У мене немає велосипеда", 
        "Nie mam roweru"                        
      ],
      [
        "She hasn't got a cat", 
        "Hasn't she got a cat?", 
        "She's not got a cat, has she?", 
        "Got she not a cat?", 
        "Hasn't she got a cat?", 
        "У нее нет кошки", 
        "В неї немає кота", 
        "Nie ma kota"                          
      ],
      [
        "They haven't got a TV", 
        "Haven't they got a TV?", 
        "They've not got a TV, have they?", 
        "Got they not a TV?", 
        "Haven't they got a TV?", 
        "У них нет телевизора", 
        "В них немає телевізора", 
        "Nie mają telewizora"                      
      ],
      [
        "He hasn't got a job", 
        "Hasn't he got a job?", 
        "He's not got a job, has he?", 
        "Got he not a job?", 
        "Hasn't he got a job?", 
        "У него нет работы", 
        "У нього немає роботи", 
        "Nie ma pracy"                          
      ],
      [
        "We haven't got a solution", 
        "Haven't we got a solution?", 
        "We've not got a solution, have we?", 
        "Got we not a solution?", 
        "Haven't we got a solution?", 
        "У нас нет решения", 
        "У нас немає рішення", 
        "Nie mamy rozwiązania"                      
      ],
      [
        "You haven't got the answer", 
        "Haven't you got the answer?", 
        "You've not got the answer, have you?", 
        "Got you not the answer?", 
        "Haven't you got the answer?", 
        "У тебя нет ответа", 
        "У тебе немає відповіді", 
        "Nie masz odpowiedzi"                          
      ],
      [
        "I haven't got a ticket", 
        "Haven't you got a ticket?", 
        "You've not got a ticket, have you?", 
        "Got you not a ticket?", 
        "Haven't you got a ticket?", 
        "У меня нет билета", 
        "У мене немає квитка", 
        "Nie mam biletu"                        
      ],
      [
        "She hasn't got a friend", 
        "Hasn't she got a friend?", 
        "She's not got a friend, has she?", 
        "Got she not a friend?", 
        "Hasn't she got a friend?", 
        "У нее нет друга", 
        "В неї немає друга", 
        "Nie ma przyjaciela"                          
      ],
      [
        "They haven't got a clue", 
        "Haven't they got a clue?", 
        "They've not got a clue, have they?", 
        "Got they not a clue?", 
        "Haven't they got a clue?", 
        "У них нет идеи", 
        "В них немає ідеї", 
        "Nie mają pojęcia"                      
      ],
      [
        "He hasn't got a book", 
        "Hasn't he got a book?", 
        "He's not got a book, has he?", 
        "Got he not a book?", 
        "Hasn't he got a book?", 
        "У него нет книги", 
        "У нього немає книги", 
        "Nie ma książki"                          
      ],
      [
        "I have a car", 
        "Do you have a car?", 
        "Have you got a car, do you?", 
        "You have a car, don't you?", 
        "Do you have a car?", 
        "У меня есть машина", 
        "У мене є машина", 
        "I have a car"
      ],
      [
        "She has a dog", 
        "Does she have a dog?", 
        "Has she got a dog, does she?", 
        "She has a dog, hasn't she?", 
        "Does she have a dog?", 
        "У нее есть собака", 
        "В неї є собака", 
        "She has a dog"
      ],
      [
        "They have a house", 
        "Do they have a house?", 
        "Have they got a house, do they?", 
        "They have a house, don't they?", 
        "Do they have a house?", 
        "У них есть дом", 
        "В них є будинок", 
        "They have a house"
      ],
      [
        "He has a computer", 
        "Does he have a computer?", 
        "Has he got a computer, does he?", 
        "He has a computer, hasn't he?", 
        "Does he have a computer?", 
        "У него есть компьютер", 
        "В нього є комп'ютер", 
        "He has a computer"
      ],
      [
        "We have friends", 
        "Do we have friends?", 
        "Have we got friends, do we?", 
        "We have friends, don't we?", 
        "Do we have friends?", 
        "У нас есть друзья", 
        "У нас є друзі", 
        "We have friends"
      ],
      [
        "You have time", 
        "Do you have time?", 
        "Have you got time, do you?", 
        "You have time, don't you?", 
        "Do you have time?", 
        "У тебя есть время", 
        "У тебе є час", 
        "You have time"
      ],
      [
        "I have a question", 
        "Do you have a question?", 
        "Have you got a question, do you?", 
        "You have a question, don't you?", 
        "Do you have question?", 
        "У меня есть вопрос", 
        "У мене є питання", 
        "I have a question"
      ],
      [
        "She has a bicycle", 
        "Does she have a bicycle?", 
        "Has she got a bicycle, does she?", 
        "She has a bicycle, hasn't she?", 
        "Does she has a bicycle?", 
        "У нее есть велосипед", 
        "В неї є велосипед", 
        "She has a bicycle"
      ],
      [
        "They have books", 
        "Do they have books?", 
        "Have they got books, do they?", 
        "They have books, don't they?", 
        "Do they have books?", 
        "У них есть книги", 
        "В них є книги", 
        "They have books"
      ],
      [
        "He has a plan", 
        "Does he have a plan?", 
        "Has he got a plan, does he?", 
        "He has a plan, hasn't he?", 
        "Does he have a plan?", 
        "У него есть план", 
        "У нього є план", 
        "He has a plan"
      ],
      [
        "I have a brother", 
        "Do you have a brother?", 
        "Have you got a brother, do you?", 
        "You have a brother, don't you?", 
        "Do you have a brother?", 
        "У меня есть брат", 
        "У мене є брат", 
        "Mam brata"
      ],
      [
        "She has a cat", 
        "Does she have a cat?", 
        "Has she got a cat, does she?", 
        "She has a cat, hasn't she?", 
        "Does she have a cat?", 
        "У нее есть кошка", 
        "В неї є кішка", 
        "Ona ma kota"
      ],
      [
        "They have a garden", 
        "Do they have a garden?", 
        "Have they got a garden, do they?", 
        "They have a garden, don't they?", 
        "Do they have a garden?", 
        "У них есть сад", 
        "В них є сад", 
        "Oni mają ogród"
      ],
      [
        "He has a job", 
        "Does he have a job?", 
        "Has he got a job, does he?", 
        "He has a job, hasn't he?", 
        "Does he have a job?", 
        "У него есть работа", 
        "У нього є робота", 
        "On ma pracę"
      ],
      [
        "We have a project", 
        "Do we have a project?", 
        "Have we got a project, do we?", 
        "We have a project, don't we?", 
        "Have we a project?", 
        "У нас есть проект", 
        "У нас є проект", 
        "Mamy projekt"
      ],
      [
        "You have a ticket", 
        "Do you have a ticket?", 
        "Have you got a ticket, do you?", 
        "You have a ticket, don't you?", 
        "You have got a ticket?", 
        "У тебя есть билет", 
        "У тебе є квиток", 
        "Masz bilet"
      ],
      [
        "I have homework", 
        "Do you have homework?", 
        "Have you got homework, do you?", 
        "You have homework, don't you?", 
        "Do you have homework?", 
        "У меня есть домашнее задание", 
        "У мене є домашнє завдання", 
        "Mam pracę domową"
      ],
      [
        "She has a friend", 
        "Does she have a friend?", 
        "Has she got a friend, does she?", 
        "She has a friend, hasn't she?", 
        "Does she have a friend?", 
        "У нее есть друг", 
        "В неї є друг", 
        "Ona ma przyjaciela"
      ],
      [
        "They have a vacation", 
        "Do they have a vacation?", 
        "Have they got a vacation, do they?", 
        "They have a vacation, don't they?", 
        "Do they have a vacation?", 
        "У них есть отпуск", 
        "В них є відпустка", 
        "Oni mają wakacje"
      ],
      [
        "He has a phone", 
        "Does he have a phone?", 
        "Has he got a phone, does he?", 
        "He has a phone, hasn't he?", 
        "Does he have a phone?", 
        "У него есть телефон", 
        "У нього є телефон", 
        "On ma telefon"
      ],
      [
        "I don't have time", 
        "Don't you have time?", 
        "Haven't you got time, do you?", 
        "You don't have time, do you?", 
        "Don't you have a time?", 
        "У меня нет времени", 
        "В мене немає часу", 
        "Nie mam czasu"
      ],
      [
        "She doesn't have a car", 
        "Doesn't she have a car?", 
        "Hasn't she got a car, does she?", 
        "She doesn't have a car, does she?", 
        "Doesn't she have a car?", 
        "У нее нет машины", 
        "У неї немає автомобіля", 
        "Ona nie ma samochodu"
      ],
      [
        "They don't have pets", 
        "Don't they have pets?", 
        "Haven't they got pets, do they?", 
        "They don't have pets, do they?", 
        "Don't they have pets?", 
        "У них нет домашних животных", 
        "У них немає домашніх тварин", 
        "Oni nie mają zwierząt domowych"
      ],
      [
        "He doesn't have a plan", 
        "Doesn't he have a plan?", 
        "Hasn't he got a plan, does he?", 
        "He doesn't have a plan, does he?", 
        "Doesn't he have a plan?", 
        "У него нет плана", 
        "У нього немає плану", 
        "On nie ma planu"
      ],
      [
        "We don't have a solution", 
        "Don't we have a solution?", 
        "Haven't we got a solution, do we?", 
        "We don't have a solution, do we?", 
        "Don't we have a solution?", 
        "У нас нет решения", 
        "У нас немає рішення", 
        "Nie mamy rozwiązania"
      ],
      [
        "You don't have an umbrella", 
        "Don't you have an umbrella?", 
        "Haven't you got an umbrella, do you?", 
        "You don't have an umbrella, do you?", 
        "Dasn't you have an umbrella?", 
        "У тебя нет зонта", 
        "У тебе немає парасолі", 
        "Nie masz parasola"
      ],
      [
        "I don't have any questions", 
        "Don't you have any questions?", 
        "Haven't you got any questions, do you?", 
        "You don't have any questions, do you?", 
        "Don't you have any questions?", 
        "У меня нет вопросов", 
        "У мене немає питань", 
        "Nie mam pytań"
      ],
      [
        "She doesn't have any siblings", 
        "Doesn't she have any siblings?", 
        "Hasn't she got any siblings, does she?", 
        "She doesn't have any siblings, does she?", 
        "Doesn't she have any siblings?", 
        "У нее нет братьев и сестер", 
        "У неї немає братів і сестер", 
        "Ona nie ma rodzeństwa"
      ],
      [
        "They don't have enough money", 
        "Don't they have enough money?", 
        "Haven't they got enough money, do they?", 
        "They don't have enough money, do they?", 
        "Don't they have enough money?", 
        "У них нет достаточно денег", 
        "У них немає достатньо грошей", 
        "Oni nie mają wystarczająco pieniędzy"
      ],
      [
        "He doesn't have a dog", 
        "Doesn't he have a dog?", 
        "Hasn't he got a dog, does he?", 
        "He doesn't have a dog, does he?", 
        "Doesn't he have a dog?", 
        "У него нет собаки", 
        "У нього немає собаки", 
        "On nie ma psa"
      ]
];
