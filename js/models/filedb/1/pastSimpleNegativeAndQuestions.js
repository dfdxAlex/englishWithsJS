const pastSimpleNegativeAndQuestions = [
    [
        "She did not ... any mistakes in the report.",
        "make",
        "made",
        "makes", // третье лицо
        "making", // герундий
        "Она не сделала ошибок в отчете.",
        "Вона не зробила помилок у звіті.",
        "Nie zrobiła żadnych błędów w raporcie."
      ],
      [
        "I did not ... the opportunity to travel last summer.",
        "miss",
        "missed",
        "misses", // третье лицо
        "missing", // герундий
        "Я не упустил возможность поехать в отпуск прошлым летом.",
        "Я не пропустив можливість поїхати в відпустку минулого літа.",
        "Nie przegapiłem okazji, by podróżować latem zeszłego roku."
      ],
      [
        "They did not ... their children to the zoo.",
        "take",
        "took",
        "takes", // третье лицо
        "taking", // герундий
        "Они не взяли своих детей в зоопарк.",
        "Вони не взяли своїх дітей в зоопарк.",
        "Nie zabrali swoich dzieci do zoo."
      ],
      [
        "We did not ... the problem in time.",
        "solve",
        "solved",
        "solves", // третье лицо
        "solving", // герундий
        "Мы не решили проблему вовремя.",
        "Ми не вирішили проблему вчасно.",
        "Nie rozwiązaliśmy problemu na czas."
      ],
      [
        "He did not ... the recipe correctly.",
        "follow",
        "followed",
        "follows", // третье лицо
        "following", // герундий
        "Он не следовал рецепту правильно.",
        "Він не дотримувався рецепту правильно.",
        "Nie postępował zgodnie z przepisem."
      ],
      [
        "I did not ... enough rest yesterday.",
        "get",
        "got",
        "gets", // третье лицо
        "getting", // герундий
        "Я не отдохнул достаточно вчера.",
        "Я не відпочив достатньо вчора.",
        "Nie odpocząłem wystarczająco wczoraj."
      ],
      [
        "They did not ... the meeting time.",
        "change",
        "changed",
        "changes", // третье лицо
        "changing", // герундий
        "Они не изменили время встречи.",
        "Вони не змінили час зустрічі.",
        "Nie zmienili godziny spotkania."
      ],
      [
        "We did not ... the message from the manager.",
        "receive",
        "received",
        "receives", // третье лицо
        "receiving", // герундий
        "Мы не получили сообщение от менеджера.",
        "Ми не отримали повідомлення від менеджера.",
        "Nie otrzymaliśmy wiadomości od menedżera."
      ],
      [
        "He did not ... the assignment on time.",
        "submit",
        "submitted",
        "submits", // третье лицо
        "submitting", // герундий
        "Он не сдал задание вовремя.",
        "Він не здав завдання вчасно.",
        "Nie złożył zadania na czas."
      ],
      [
        "She did not ... the final decision.",
        "make",
        "made",
        "makes", // третье лицо
        "making", // герундий
        "Она не приняла окончательное решение.",
        "Вона не прийняла остаточне рішення.",
        "Nie podjęła ostatecznej decyzji."
      ],
      // 41-50
      [
        "I did not ... the required documents to the office.",
        "send",
        "sent",
        "sends", // третье лицо
        "sending", // герундий
        "Я не отправил необходимые документы в офис.",
        "Я не надіслав необхідні документи в офіс.",
        "Nie wysłałem wymaganych dokumentów do biura."
      ],
      [
        "They did not ... the project in time.",
        "complete",
        "completed",
        "completes", // третье лицо
        "completing", // герундий
        "Они не завершили проект вовремя.",
        "Вони не завершили проект вчасно.",
        "Nie ukończyli projektu na czas."
      ],
      [
        "She did not ... her car last weekend.",
        "repair",
        "repaired",
        "repairs", // третье лицо
        "repairing", // герундий
        "Она не отремонтировала свою машину на выходных.",
        "Вона не відремонтувала свою машину на вихідних.",
        "Nie naprawiła swojego samochodu w weekend."
      ],
      [
        "We did not ... the exam last year.",
        "pass",
        "passed",
        "passes", // третье лицо
        "passing", // герундий
        "Мы не сдали экзамен в прошлом году.",
        "Ми не здали екзамен минулого року.",
        "Nie zdaliśmy egzaminu w zeszłym roku."
      ],
      [
        "He did not ... the train this morning.",
        "catch",
        "caught",
        "catches", // третье лицо
        "catching", // герундий
        "Он не успел на поезд этим утром.",
        "Він не встиг на поїзд цього ранку.",
        "Nie zdążył na pociąg tego ranka."
      ],
      [
        "They did not ... the latest news.",
        "hear",
        "heard",
        "hears", // третье лицо
        "hearing", // герундий
        "Они не услышали последних новостей.",
        "Вони не почули останніх новин.",
        "Nie usłyszeli najnowszych wiadomości."
      ],
      [
        "I did not ... the answer to the question.",
        "know",
        "knew",
        "knows", // третье лицо
        "knowing", // герундий
        "Я не знал ответа на вопрос.",
        "Я не знав відповіді на питання.",
        "Nie znałem odpowiedzi na pytanie."
      ],
      [
        "She did not ... to the party yesterday.",
        "come",
        "came",
        "comes", // третье лицо
        "coming", // герундий
        "Она не пришла на вечеринку вчера.",
        "Вона не прийшла на вечірку вчора.",
        "Nie przyszła na imprezę wczoraj."
      ],
      [
        "They did not ... the meeting on time.",
        "attend",
        "attended",
        "attends", // третье лицо
        "attending", // герундий
        "Они не присутствовали на встрече вовремя.",
        "Вони не були присутні на зустрічі вчасно.",
        "Nie uczestniczyli w spotkaniu na czas."
      ],
      [
        "We did not ... the news about the new project.",
        "hear",
        "heard",
        "hears", // третье лицо
        "hearing", // герундий
        "Мы не услышали новости о новом проекте.",
        "Ми не почули новини про новий проект.",
        "Nie usłyszeliśmy wiadomości o nowym projekcie."
      ],
      [
        "He did not ... the bus this morning.",
        "catch",
        "caught",
        "catches", // третье лицо
        "catching", // герундий
        "Он не успел на автобус этим утром.",
        "Він не встиг на автобус цього ранку.",
        "Nie złapał autobusu tego ranka."
      ],
      [
        "They did not ... the correct answer during the quiz.",
        "give",
        "gave",
        "gives", // третье лицо
        "giving", // герундий
        "Они не дали правильный ответ во время викторины.",
        "Вони не дали правильну відповідь під час вікторини.",
        "Nie podali poprawnej odpowiedzi podczas quizu."
      ],
      [
        "I did not ... my homework yesterday.",
        "finish",
        "finished",
        "finishes", // третье лицо
        "finishing", // герундий
        "Я не закончил домашку вчера.",
        "Я не закінчив домашнє завдання вчора.",
        "Nie skończyłem pracy domowej wczoraj."
      ],
      [
        "She did not ... to the office yesterday.",
        "go",
        "went",
        "goes", // третье лицо
        "going", // герундий
        "Она не пошла в офис вчера.",
        "Вона не пішла в офіс вчора.",
        "Nie poszła do biura wczoraj."
      ],
      [
        "We did not ... the right tools for the job.",
        "have",
        "had",
        "has", // третье лицо
        "having", // герундий
        "У нас не было нужных инструментов для работы.",
        "У нас не було потрібних інструментів для роботи.",
        "Nie mieliśmy odpowiednich narzędzi do pracy."
      ],
      [
        "They did not ... the deadline for the project.",
        "meet",
        "met",
        "meets", // третье лицо
        "meeting", // герундий
        "Они не успели уложиться в срок по проекту.",
        "Вони не вклалися в термін для проекту.",
        "Nie dotrzymali terminu projektu."
      ],
      [
        "He did not ... the instructions properly.",
        "follow",
        "followed",
        "follows", // третье лицо
        "following", // герундий
        "Он не следовал инструкциям правильно.",
        "Він не дотримувався інструкцій правильно.",
        "Nie postępował zgodnie z instrukcjami."
      ],
      [
        "She did not ... the invitation to the wedding.",
        "accept",
        "accepted",
        "accepts", // третье лицо
        "accepting", // герундий
        "Она не приняла приглашение на свадьбу.",
        "Вона не прийняла запрошення на весілля.",
        "Nie przyjęła zaproszenia na wesele."
      ],
      [
        "We did not ... the truth at that moment.",
        "know",
        "knew",
        "knows", // третье лицо
        "knowing", // герундий
        "Мы не знали правды в тот момент.",
        "Ми не знали правди в той момент.",
        "Nie wiedzieliśmy prawdy w tamtym momencie."
      ],
      [
        "I did not ... the last season of that show.",
        "watch",
        "watched",
        "watches", // третье лицо
        "watching", // герундий
        "Я не смотрел последний сезон этого шоу.",
        "Я не дивився останній сезон цього шоу.",
        "Nie oglądałem ostatniego sezonu tego show."
      ],
      [
        "They did not ... the meeting last week.",
        "attend",
        "attended",
        "attends", // третье лицо
        "attending", // герундий
        "Они не присутствовали на встрече на прошлой неделе.",
        "Вони не були присутні на зустрічі минулого тижня.",
        "Nie uczestniczyli w spotkaniu w zeszłym tygodniu."
      ],
      [
        "She did not ... to the doctor last week.",
        "go",
        "went",
        "goes", // третье лицо
        "going", // герундий
        "Она не пошла к доктору на прошлой неделе.",
        "Вона не пішла до лікаря на минулому тижні.",
        "Nie poszła do lekarza w zeszłym tygodniu."
      ],
      [
        "I did not ... the new phone yet.",
        "buy",
        "bought",
        "buys", // третье лицо
        "buying", // герундий
        "Я еще не купил новый телефон.",
        "Я ще не купив новий телефон.",
        "Nie kupiłem jeszcze nowego telefonu."
      ],
      [
        "We did not ... the train on time.",
        "catch",
        "caught",
        "catches", // третье лицо
        "catching", // герундий
        "Мы не успели на поезд вовремя.",
        "Ми не встигли на поїзд вчасно.",
        "Nie zdążyliśmy na pociąg na czas."
      ],
      [
        "They did not ... the instructions properly.",
        "follow",
        "followed",
        "follows", // третье лицо
        "following", // герундий
        "Они не следовали инструкциям правильно.",
        "Вони не дотримувались інструкцій правильно.",
        "Nie postępowali zgodnie z instrukcjami."
      ],
      [
        "He did not ... me about the meeting time.",
        "inform",
        "informed",
        "informs", // третье лицо
        "informing", // герундий
        "Он не сообщил мне о времени встречи.",
        "Він не повідомив мене про час зустрічі.",
        "Nie poinformował mnie o czasie spotkania."
      ],
      [
        "We did not ... any mistakes during the exam.",
        "make",
        "made",
        "makes", // третье лицо
        "making", // герундий
        "Мы не сделали ошибок на экзамене.",
        "Ми не зробили помилок під час екзамену.",
        "Nie popełniliśmy żadnych błędów podczas egzaminu."
      ],
      [
        "They did not ... the presentation in time.",
        "prepare",
        "prepared",
        "prepares", // третье лицо
        "preparing", // герундий
        "Они не подготовили презентацию вовремя.",
        "Вони не підготували презентацію вчасно.",
        "Nie przygotowali prezentacji na czas."
      ],
      [
        "He did not ... anything about the situation.",
        "know",
        "knew",
        "knows", // третье лицо
        "knowing", // герундий
        "Он не знал ничего о ситуации.",
        "Він не знав нічого про ситуацію.",
        "Nie wiedział nic o sytuacji."
      ],
      [
        "I did not ... the exam last year.",
        "pass",
        "passed",
        "passes", // третье лицо
        "passing", // герундий
        "Я не сдал экзамен в прошлом году.",
        "Я не склав екзамен минулого року.",
        "Nie zdałem egzaminu w zeszłym roku."
      ],
      [
        "They did not ... enough time for the task.",
        "allow",
        "allowed",
        "allows", // третье лицо
        "allowing", // герундий
        "Они не выделили достаточно времени для задачи.",
        "Вони не виділили достатньо часу для завдання.",
        "Nie przydzielili wystarczająco czasu na zadanie."
      ],
      [
        "We did not ... the results of the experiment.",
        "see",
        "saw",
        "sees", // третье лицо
        "seeing", // герундий
        "Мы не видели результаты эксперимента.",
        "Ми не бачили результати експерименту.",
        "Nie widzieliśmy wyników eksperymentu."
      ],
      [
        "She did not ... the invitation to the event.",
        "receive",
        "received",
        "receives", // третье лицо
        "receiving", // герундий
        "Она не получила приглашение на мероприятие.",
        "Вона не отримала запрошення на захід.",
        "Nie otrzymała zaproszenia na wydarzenie."
      ],
      [
        "Did they ... the package yesterday?",
        "receive",
        "received",
        "receives", // третье лицо
        "receiving", // герундий
        "Они получили посылку вчера?",
        "Вони отримали посилку вчора?",
        "Czy oni otrzymali paczkę wczoraj?"
      ],
      [
        "Did you ... the party last weekend?",
        "enjoy",
        "enjoyed",
        "enjoys", // третье лицо
        "enjoying", // герундий
        "Ты наслаждался вечеринкой на выходных?",
        "Ти насолоджувався вечіркою на вихідних?",
        "Czy podobała ci się impreza w zeszły weekend?"
      ],
      [
        "Did he ... the homework last night?",
        "finish",
        "finished",
        "finishes", // третье лицо
        "finishing", // герундий
        "Он закончил домашку прошлой ночью?",
        "Він закінчив домашнє завдання минулої ночі?",
        "Czy on skończył zadanie domowe wczoraj wieczorem?"
      ],
      [
        "Did they ... the meeting on time?",
        "attend",
        "attended",
        "attends", // третье лицо
        "attending", // герундий
        "Они пришли на встречу вовремя?",
        "Вони прийшли на зустріч вчасно?",
        "Czy oni przyszli na spotkanie na czas?"
      ],
      [
        "Did we ... the right decision?",
        "make",
        "made",
        "makes", // третье лицо
        "making", // герундий
        "Мы сделали правильное решение?",
        "Ми прийняли правильне рішення?",
        "Czy podjęliśmy właściwą decyzję?"
      ],
      [
        "Did she ... to the concert yesterday?",
        "go",
        "went",
        "goes", // третье лицо
        "going", // герундий
        "Она пошла на концерт вчера?",
        "Вона пішла на концерт вчора?",
        "Czy ona poszła na koncert wczoraj?"
      ],
      [
        "Did they ... the project on time?",
        "complete",
        "completed",
        "completes", // третье лицо
        "completing", // герундий
        "Они завершили проект вовремя?",
        "Вони завершили проект вчасно?",
        "Czy oni ukończyli projekt na czas?"
      ],
      [
        "Did you ... the new book last week?",
        "read",
        "read",
        "reads", // третье лицо
        "reading", // герундий
        "Ты читал новую книгу на прошлой неделе?",
        "Ти читав нову книгу на минулому тижні?",
        "Czy przeczytałeś nową książkę w zeszłym tygodniu?"
      ],
      [
        "Did he ... a mistake during the test?",
        "make",
        "made",
        "makes", // третье лицо
        "making", // герундий
        "Он сделал ошибку во время теста?",
        "Він зробив помилку під час тесту?",
        "Czy on popełnił błąd podczas testu?"
      ],
      [
        "Did we ... the bus this morning?",
        "catch",
        "caught",
        "catches", // третье лицо
        "catching", // герундий
        "Мы успели на автобус этим утром?",
        "Ми встигли на автобус цим ранком?",
        "Czy zdążyliśmy na autobus rano?"
      ],
      [
        // 11-20
        "Did you ... the wrong number?",
        "dial",
        "dialed",
        "dials", // третье лицо
        "dialing", // герундий
        "Ты набрал неправильный номер?",
        "Ти набрав неправильний номер?",
        "Czy wybrałeś zły numer?"
      ],
      [
        "Did they ... the answer to the question?",
        "know",
        "knew",
        "knows", // третье лицо
        "knowing", // герундий
        "Они знали ответ на вопрос?",
        "Вони знали відповідь на питання?",
        "Czy oni wiedzieli odpowiedź na pytanie?"
      ],
      [
        "Did he ... the invitation to the event?",
        "receive",
        "received",
        "receives", // третье лицо
        "receiving", // герундий
        "Он получил приглашение на мероприятие?",
        "Він отримав запрошення на захід?",
        "Czy on otrzymał zaproszenie na wydarzenie?"
      ],
      [
        "Did she ... a call last night?",
        "receive",
        "received",
        "receives", // третье лицо
        "receiving", // герундий
        "Она приняла звонок прошлой ночью?",
        "Вона прийняла дзвінок минулої ночі?",
        "Czy ona odebrała telefon wczoraj wieczorem?"
      ],
      [
        "Did we ... enough food for the party?",
        "buy",
        "bought",
        "buys", // третье лицо
        "buying", // герундий
        "Мы купили достаточно еды для вечеринки?",
        "Ми купили достатньо їжі для вечірки?",
        "Czy kupiliśmy wystarczająco jedzenia na imprezę?"
      ],
      [
        "Did they ... the house before moving in?",
        "clean",
        "cleaned",
        "cleans", // третье лицо
        "cleaning", // герундий
        "Они убрали дом перед тем, как переехать?",
        "Вони прибрали будинок перед тим, як переїхати?",
        "Czy oni posprzątali dom przed wprowadzeniem się?"
      ],
      [
        "Did you ... the TV show last night?",
        "watch",
        "watched",
        "watches", // третье лицо
        "watching", // герундий
        "Ты смотрел телешоу прошлой ночью?",
        "Ти дивився телешоу минулої ночі?",
        "Czy oglądałeś program telewizyjny wczoraj wieczorem?"
      ],
      [
        "Did he ... a lot of money for the car?",
        "pay",
        "paid",
        "pays", // третье лицо
        "paying", // герундий
        "Он заплатил много денег за машину?",
        "Він заплатив багато грошей за машину?",
        "Czy on zapłacił dużo pieniędzy za samochód?"
      ],
      [
        "Did she ... in the marathon last year?",
        "participate",
        "participated",
        "participates", // третье лицо
        "participating", // герундий
        "Она участвовала в марафоне в прошлом году?",
        "Вона брала участь в марафоні минулого року?",
        "Czy ona uczestniczyła w maratonie w zeszłym roku?"
      ],
      [
        "Did we ... the trip on time?",
        "plan",
        "planned",
        "plans", // третье лицо
        "planning", // герундий
        "Мы спланировали поездку вовремя?",
        "Ми спланували поїздку вчасно?",
        "Czy zaplanowaliśmy podróż na czas?"
      ],
      [
        "Did they ... the information clearly?",
        "explain",
        "explained",
        "explains", // третье лицо
        "explaining", // герундий
        "Они объяснили информацию ясно?",
        "Вони пояснили інформацію чітко?",
        "Czy oni wyjaśnili informacje wyraźnie?"
      ],
      [
        "Did you ... the car last week?",
        "sell",
        "sold",
        "sells", // третье лицо
        "selling", // герундий
        "Ты продал машину на прошлой неделе?",
        "Ти продав машину на минулому тижні?",
        "Czy sprzedałeś samochód w zeszłym tygodniu?"
      ],
      [
        "Did we ... the movie last weekend?",
        "see",
        "saw",
        "sees", // третье лицо
        "seeing", // герундий
        "Мы видели фильм на выходных?",
        "Ми бачили фільм на вихідних?",
        "Czy widzieliśmy film w zeszły weekend?"
      ],
      [
        "Did he ... his friends yesterday?",
        "meet",
        "met",
        "meets", // третье лицо
        "meeting", // герундий
        "Он встретился с друзьями вчера?",
        "Він зустрівся з друзями вчора?",
        "Czy on spotkał się z przyjaciółmi wczoraj?"
      ],

      [
        "Did you go to the cinema last weekend?", 
        "Yes, I went to the cinema last weekend.",
        "Yes, I go to the cinema last weekend.",
        "Yes, I was going to the cinema last weekend.",
        "Yes, I will go to the cinema last weekend.",
        "Ты ходил в кино на выходных? Да, я ходил в кино на выходных.",
        "Ти ходив у кіно на вихідних? Так, я ходив у кіно на вихідних.",
        "Czy poszedłeś do kina w ostatni weekend? Tak, poszedłem do kina w ostatni weekend."
      ],
      [
        "Did she finish her homework yesterday?", 
        "Yes, she finished her homework yesterday.",
        "Yes, she finishes her homework yesterday.",
        "Yes, she was finishing her homework yesterday.",
        "Yes, she will finish her homework yesterday.",
        "Она закончила свою домашку вчера? Да, она закончила свою домашку вчера.",
        "Вона закінчила свою домашку вчора? Так, вона закінчила свою домашку вчора.",
        "Czy ona skończyła swoją pracę domową wczoraj? Tak, skończyła swoją pracę domową wczoraj."
      ],
      [
        "Did they arrive on time?", 
        "Yes, they arrived on time.",
        "Yes, they arrive on time.",
        "Yes, they were arriving on time.",
        "Yes, they will arrive on time.",
        "Они прибыли вовремя? Да, они прибыли вовремя.",
        "Вони прибули вчасно? Так, вони прибули вчасно.",
        "Czy oni przyjechali na czas? Tak, przyjechali na czas."
      ],
      [
        "Did you meet him at the party?", 
        "Yes, I met him at the party.",
        "Yes, I meet him at the party.",
        "Yes, I was meeting him at the party.",
        "Yes, I will meet him at the party.",
        "Ты встретил его на вечеринке? Да, я встретил его на вечеринке.",
        "Ти зустрів його на вечірці? Так, я зустрів його на вечірці.",
        "Spotkałeś go na imprezie? Tak, spotkałem go na imprezie."
      ],
      [
        "Did he play football last Sunday?", 
        "Yes, he played football last Sunday.",
        "Yes, he plays football last Sunday.",
        "Yes, he was playing football last Sunday.",
        "Yes, he will play football last Sunday.",
        "Он играл в футбол в прошлое воскресенье? Да, он играл в футбол в прошлое воскресенье.",
        "Він грав у футбол в минулу неділю? Так, він грав у футбол в минулу неділю.",
        "Grał w piłkę nożną w ostatnią niedzielę? Tak, grał w piłkę nożną w ostatnią niedzielę."
      ],
      [
        "Did you see that movie?", 
        "Yes, I saw that movie.",
        "Yes, I see that movie.",
        "Yes, I was seeing that movie.",
        "Yes, I will see that movie.",
        "Ты видел этот фильм? Да, я видел этот фильм.",
        "Ти бачив цей фільм? Так, я бачив цей фільм.",
        "Czy widziałeś ten film? Tak, widziałem ten film."
      ],
      [
        "Did they understand the lesson?", 
        "Yes, they understood the lesson.",
        "Yes, have understand the lesson.",
        "Yes, they were understanding the lesson.",
        "Yes, they will understand the lesson.",
        "Они поняли урок?",
        "Вони зрозуміли урок?",
        "Czy oni zrozumieli lekcję?"
      ],
      [
        "Did you finish your work on time?", 
        "Yes, I finished my work on time.",
        "Yes, I finish my work on time.",
        "Yes, I was finishing my work on time.",
        "Yes, I will finish my work on time.",
        "Ты закончил свою работу вовремя? Да, я закончил свою работу вовремя.",
        "Ти закінчив свою роботу вчасно? Так, я закінчив свою роботу вчасно.",
        "Czy skończyłeś swoją pracę na czas? Tak, skończyłem swoją pracę na czas."
      ],
      [
        "Did you like the concert?", 
        "Yes, I liked the concert.",
        "Yes, I like the concert.",
        "Yes, I was liking the concert.",
        "Yes, I will like the concert.",
        "Тебе понравился концерт? Да, мне понравился концерт.",
        "Тобі сподобався концерт? Так, мені сподобався концерт.",
        "Czy podobał ci się koncert? Tak, podobał mi się koncert."
      ],
      [
        "Did you study for the test?", 
        "Yes, I studied for the test.",
        "Yes, I study for the test.",
        "Yes, I was studying for the test.",
        "Yes, I will study for the test.",
        "Ты учился к тесту? Да, я учился к тесту.",
        "Ти готувався до тесту? Так, я готувався до тесту.",
        "Czy uczyłeś się do testu? Tak, uczyłem się do testu."
      ],
      [
        "Did she call you yesterday?", 
        "Yes, she called me yesterday.",
        "Yes, she calls me yesterday.",
        "Yes, she was calling me yesterday.",
        "Yes, she will call me yesterday.",
        "Она звонила тебе вчера? Да, она звонила мне вчера.",
        "Вона дзвонила тобі вчора? Так, вона дзвонила мені вчора.",
        "Czy ona dzwoniła do ciebie wczoraj? Tak, dzwoniła do mnie wczoraj."
      ],
      [
        "Did they arrive on time?", 
        "Yes, they arrived on time.",
        "Yes, they arrive on time.",
        "Yes, they were arriving on time.",
        "Yes, they will arrive on time.",
        "Они прибыли вовремя?",
        "Вони приїхали вчасно?",
        "Czy oni przyjechali na czas?"
      ],
      [
        "Did you visit your grandparents?", 
        "Yes, I visited my grandparents.",
        "Yes, I visit my grandparents.",
        "Yes, I was visiting my grandparents.",
        "Yes, I will visit my grandparents.",
        "Ты посетил своих бабушку и дедушку?",
        "Ти відвідав своїх бабусю і дідуся?",
        "Czy odwiedziłeś swoich dziadków?"
      ],
      [
        "Did he eat breakfast?", 
        "Yes, he ate breakfast.",
        "Yes, he eats breakfast.",
        "Yes, he was eating breakfast.",
        "Yes, he will eat breakfast.",
        "Он позавтракал?",
        "Він поснідав?",
        "Czy on zjadł śniadanie?"
      ],
      [
        "Did you run in the park?", 
        "Yes, I ran in the park.",
        "Yes, I run in the park.",
        "Yes, I was running in the park.",
        "Yes, I will run in the park.",
        "Ты бегал в парке? Да, я бегал в парке.",
        "Ти бігав у парку? Так, я бігав у парку.",
        "Biegałeś w parku? Tak, biegałem w parku."
      ],
      [
        "Did you enjoy the meal?", 
        "Yes, I enjoyed the meal.",
        "Yes, I enjoy the meal.",
        "Yes, I was enjoying the meal.",
        "Yes, I will enjoy the meal.",
        "Тебе понравилась еда? Да, мне понравилась еда.",
        "Тобі сподобалась їжа? Так, мені сподобалась їжа.",
        "Czy podobał ci się posiłek? Tak, podobał mi się posiłek."
      ],
      [
        "Did you go to the cinema last weekend?", 
        "Yes, I went to the cinema last weekend.",
        "Yes, I go to the cinema last weekend.",
        "Yes, I was going to the cinema last weekend.",
        "Yes, I will go to the cinema last weekend.",
        "Ты ходил в кино на выходных? Да, я ходил в кино на выходных.",
        "Ти ходив у кіно на вихідних? Так, я ходив у кіно на вихідних.",
        "Czy poszedłeś do kina w ostatni weekend? Tak, poszedłem do kina w ostatni weekend."
      ],
      [
        "Did she finish her homework yesterday?", 
        "Yes, she finished her homework yesterday.",
        "Yes, she finishes her homework yesterday.",
        "Yes, she was finishing her homework yesterday.",
        "Yes, she will finish her homework yesterday.",
        "Она закончила свою домашку вчера? Да, она закончила свою домашку вчера.",
        "Вона закінчила свою домашку вчора? Так, вона закінчила свою домашку вчора.",
        "Czy ona skończyła swoją pracę domową wczoraj? Tak, skończyła swoją pracę domową wczoraj."
      ],
      [
        "Did they arrive on time?", 
        "Yes, they arrived on time.",
        "Yes, they arrive on time.",
        "Yes, they were arriving on time.",
        "Yes, they will arrive on time.",
        "Они прибыли вовремя? Да, они прибыли вовремя.",
        "Вони приїхали вчасно? Так, вони приїхали вчасно.",
        "Czy oni przyjechali na czas? Tak, przyjechali na czas."
      ],
      [
        "Did you meet him at the party?", 
        "Yes, I met him at the party.",
        "Yes, I meet him at the party.",
        "Yes, I was meeting him at the party.",
        "Yes, I will meet him at the party.",
        "Ты встретил его на вечеринке? Да, я встретил его на вечеринке.",
        "Ти зустрів його на вечірці? Так, я зустрів його на вечірці.",
        "Spotkałeś go na imprezie? Tak, spotkałem go na imprezie."
      ],
      [
        "Did he play football last Sunday?", 
        "Yes, he played football last Sunday.",
        "Yes, he plays football last Sunday.",
        "Yes, he was playing football last Sunday.",
        "Yes, he will play football last Sunday.",
        "Он играл в футбол в прошлое воскресенье? Да, он играл в футбол в прошлое воскресенье.",
        "Він грав у футбол в минулу неділю? Так, він грав у футбол в минулу неділю.",
        "Grał w piłkę nożną w ostatnią niedzielę? Tak, grał w piłkę nożną w ostatnią niedzielę."
      ],
      [
        "Did you see that movie?", 
        "Yes, I saw that movie.",
        "Yes, I see that movie.",
        "Yes, I was seeing that movie.",
        "Yes, I will see that movie.",
        "Ты видел этот фильм? Да, я видел этот фильм.",
        "Ти бачив цей фільм? Так, я бачив цей фільм.",
        "Czy widziałeś ten film? Tak, widziałem ten film."
      ],
      [
        "Did you finish your work on time?", 
        "Yes, I finished my work on time.",
        "Yes, I finish my work on time.",
        "Yes, I was finishing my work on time.",
        "Yes, I will finish my work on time.",
        "Ты закончил свою работу вовремя? Да, я закончил свою работу вовремя.",
        "Ти закінчив свою роботу вчасно? Так, я закінчив свою роботу вчасно.",
        "Czy skończyłeś swoją pracę na czas? Tak, skończyłem swoją pracę na czas."
      ],
      [
        "Did you like the concert?", 
        "Yes, I liked the concert.",
        "Yes, I like the concert.",
        "Yes, I was liking the concert.",
        "Yes, I will like the concert.",
        "Тебе понравился концерт? Да, мне понравился концерт.",
        "Тобі сподобався концерт? Так, мені сподобався концерт.",
        "Czy podobał ci się koncert? Tak, podobał mi się koncert."
      ],
      [
        "Did you study for the test?", 
        "Yes, I studied for the test.",
        "Yes, I study for the test.",
        "Yes, I was studying for the test.",
        "Yes, I will study for the test.",
        "Ты учился к тесту? Да, я учился к тесту.",
        "Ти готувався до тесту? Так, я готувався до тесту.",
        "Czy uczyłeś się do testu? Tak, uczyłem się do testu."
      ],
      [
        "Did she call you yesterday?", 
        "Yes, she called me yesterday.",
        "Yes, she calls me yesterday.",
        "Yes, she was calling me yesterday.",
        "Yes, she will call me yesterday.",
        "Она звонила тебе вчера? Да, она звонила мне вчера.",
        "Вона дзвонила тобі вчора? Так, вона дзвонила мені вчора.",
        "Czy ona dzwoniła do ciebie wczoraj? Tak, dzwoniła do mnie wczoraj."
      ],
      [
        "Did they arrive on time?", 
        "Yes, they arrived on time.",
        "Yes, they arrive on time.",
        "Yes, they were arriving on time.",
        "Yes, they will arrive on time.",
        "Они прибыли вовремя? Да, они прибыли вовремя.",
        "Вони приїхали вчасно? Так, вони приїхали вчасно.",
        "Czy oni przyjechali na czas? Tak, przyjechali na czas."
      ],
      [
        "Did you visit your grandparents?", 
        "Yes, I visited my grandparents.",
        "Yes, I visit my grandparents.",
        "Yes, I was visiting my grandparents.",
        "Yes, I will visit my grandparents.",
        "Ты посетил своих бабушку и дедушку? Да, я посетил своих бабушку и дедушку.",
        "Ти відвідав своїх бабусю і дідуся? Так, я відвідав своїх бабусю і дідуся.",
        "Czy odwiedziłeś swoich dziadków? Tak, odwiedziłem swoich dziadków."
      ],
      [
        "Did he eat breakfast?", 
        "Yes, he ate breakfast.",
        "Yes, he eats breakfast.",
        "Yes, he was eating breakfast.",
        "Yes, he will eat breakfast.",
        "Он позавтракал? Да, он позавтракал.",
        "Він поснідав? Так, він поснідав.",
        "Czy on zjadł śniadanie? Tak, zjadł śniadanie."
      ],
      [
        "Did you run in the park?", 
        "Yes, I ran in the park.",
        "Yes, I run in the park.",
        "Yes, I was running in the park.",
        "Yes, I will run in the park.",
        "Ты бегал в парке? Да, я бегал в парке.",
        "Ти бігав у парку? Так, я бігав у парку.",
        "Biegałeś w parku? Tak, biegałem w parku."
      ],
      [
        "Did you enjoy the meal?", 
        "Yes, I enjoyed the meal.",
        "Yes, I enjoy the meal.",
        "Yes, I was enjoying the meal.",
        "Yes, I will enjoy the meal.",
        "Тебе понравилась еда? Да, мне понравилась еда.",
        "Тобі сподобалась їжа? Так, мені сподобалась їжа.",
        "Czy podobał ci się posiłek? Tak, podobał mi się posiłek."
      ],
      [
        "Did you go to the cinema last weekend?", 
        "Yes, I went to the cinema last weekend.",
        "Yes, I go to the cinema last weekend.",
        "Yes, I was going to the cinema last weekend.",
        "Yes, I will go to the cinema last weekend.",
        "Ты ходил в кино на выходных? Да, я ходил в кино на выходных.",
        "Ти ходив у кіно на вихідних? Так, я ходив у кіно на вихідних.",
        "Czy poszedłeś do kina w ostatni weekend? Tak, poszedłem do kina w ostatni weekend."
      ],
      [
        "Did she finish her homework yesterday?", 
        "Yes, she finished her homework yesterday.",
        "Yes, she finishes her homework yesterday.",
        "Yes, she was finishing her homework yesterday.",
        "Yes, she will finish her homework yesterday.",
        "Она закончила свою домашку вчера? Да, она закончила свою домашку вчера.",
        "Вона закінчила свою домашку вчора? Так, вона закінчила свою домашку вчора.",
        "Czy ona skończyła swoją pracę domową wczoraj? Tak, skończyła swoją pracę domową wczoraj."
      ],
      [
        "Did they arrive on time?", 
        "Yes, they arrived on time.",
        "Yes, they arrive on time.",
        "Yes, they were arriving on time.",
        "Yes, they will arrive on time.",
        "Они прибыли вовремя? Да, они прибыли вовремя.",
        "Вони приїхали вчасно? Так, вони приїхали вчасно.",
        "Czy oni przyjechali na czas? Tak, przyjechali na czas."
      ],

      [
        "Did you play tennis yesterday?", 
        "No, I didn't play tennis yesterday.",
        "No, I don't play tennis yesterday.",
        "No, I wasn't playing tennis yesterday.",
        "No, I will not play tennis yesterday.",
        "Ты не играл в теннис вчера? Нет, я не играл в теннис вчера.",
        "Ти не грав у теніс вчора? Ні, я не грав у теніс вчора.",
        "Czy nie grałeś w tenisa wczoraj? Nie, nie grałem w tenisa wczoraj."
      ],
      [
        "Did you visit your friend last weekend?", 
        "No, I didn't visit my friend last weekend.",
        "No, I don't visit my friend last weekend.",
        "No, I wasn't visiting my friend last weekend.",
        "No, I will not visit my friend last weekend.",
        "Ты не навещал своего друга на выходных? Нет, я не навещал своего друга на выходных.",
        "Ти не навідував свого друга на вихідних? Ні, я не навідував свого друга на вихідних.",
        "Czy nie odwiedziłeś swojego przyjaciela w zeszły weekend? Nie, nie odwiedziłem swojego przyjaciela w zeszły weekend."
      ],
      [
        "Did she call you yesterday?", 
        "No, she didn't call me yesterday.",
        "No, she doesn't call me yesterday.",
        "No, she wasn't calling me yesterday.",
        "No, she will not call me yesterday.",
        "Она не звонила тебе вчера? Нет, она не звонила тебе вчера.",
        "Вона не дзвонила тобі вчора? Ні, вона не дзвонила тобі вчора.",
        "Czy ona nie zadzwoniła do ciebie wczoraj? Nie, nie zadzwoniła do ciebie wczoraj."
      ],
      [
        "Did you watch the movie last night?", 
        "No, I didn't watch the movie last night.",
        "No, I don't watch the movie last night.",
        "No, I wasn't watching the movie last night.",
        "No, I will not watch the movie last night.",
        "Ты не смотрел фильм прошлой ночью? Нет, я не смотрел фильм прошлой ночью.",
        "Ти не дивився фільм вчора ввечері? Ні, я не дивився фільм вчора ввечері.",
        "Czy nie oglądałeś filmu wczoraj wieczorem? Nie, nie oglądałem filmu wczoraj wieczorem."
      ],
      [
        "Did he finish his lunch?", 
        "No, he didn't finish his lunch.",
        "No, he doesn't finish his lunch.",
        "No, he wasn't finishing his lunch.",
        "No, he will not finish his lunch.",
        "Он не закончил свой обед? Нет, он не закончил свой обед.",
        "Він не закінчив свій обід? Ні, він не закінчив свій обід.",
        "Czy on nie skończył swojego obiadu? Nie, nie skończył swojego obiadu."
      ],
      [
        "Did you clean the house?", 
        "No, I didn't clean the house.",
        "No, I don't clean the house.",
        "No, I wasn't cleaning the house.",
        "No, I will not clean the house.",
        "Ты не убрался в доме? Нет, я не убрался в доме.",
        "Ти не прибрався в будинку? Ні, я не прибрався в будинку.",
        "Czy nie posprzątałeś domu? Nie, nie posprzątałem domu."
      ],
      [
        "Did they arrive on time?", 
        "No, they didn't arrive on time.",
        "No, they don't arrive on time.",
        "No, they weren't arriving on time.",
        "No, they will not arrive on time.",
        "Они не приехали вовремя? Нет, они не приехали вовремя.",
        "Вони не приїхали вчасно? Ні, вони не приїхали вчасно.",
        "Czy oni nie przyjechali na czas? Nie, nie przyjechali na czas."
      ],
      [
        "Did we meet yesterday?", 
        "No, we didn't meet yesterday.",
        "No, we don't meet yesterday.",
        "No, we weren't meeting yesterday.",
        "No, we will not meet yesterday.",
        "Мы не встретились вчера? Нет, мы не встретились вчера.",
        "Ми не зустрічалися вчора? Ні, ми не зустрічалися вчора.",
        "Czy nie spotkaliśmy się wczoraj? Nie, nie spotkaliśmy się wczoraj."
      ],
      [
        "Did they play football?", 
        "No, they didn't play football.",
        "No, they don't play football.",
        "No, they weren't playing football.",
        "No, they will not play football.",
        "Они не играли в футбол? Нет, они не играли в футбол.",
        "Вони не грали у футбол? Ні, вони не грали у футбол.",
        "Czy oni nie grali w piłkę nożną? Nie, nie grali w piłkę nożną."
      ],
      [
        "Did you study for the test?", 
        "No, I didn't study for the test.",
        "No, I don't study for the test.",
        "No, I wasn't studying for the test.",
        "No, I will not study for the test.",
        "Ты не учил уроки к тесту? Нет, я не учил уроки к тесту.",
        "Ти не вчився до тесту? Ні, я не вчився до тесту.",
        "Czy nie uczyłeś się do testu? Nie, nie uczyłem się do testu."
      ],
      [
        "Did she sing the song?", 
        "No, she didn't sing the song.",
        "No, she doesn't sing the song.",
        "No, she wasn't singing the song.",
        "No, she will not sing the song.",
        "Она не спела песню? Нет, она не спела песню.",
        "Вона не заспівала пісню? Ні, вона не заспівала пісню.",
        "Czy ona nie zaśpiewała piosenki? Nie, nie zaśpiewała piosenki."
      ],
      [
        "Did you read the book?", 
        "No, I didn't read the book.",
        "No, I don't read the book.",
        "No, I wasn't reading the book.",
        "No, I will not read the book.",
        "Ты не читал книгу? Нет, я не читал книгу.",
        "Ти не читав книгу? Ні, я не читав книгу.",
        "Czy nie czytałeś książki? Nie, nie czytałem książki."
      ],
      [
        "Did he speak at the conference?", 
        "No, he didn't speak at the conference.",
        "No, he doesn't speak at the conference.",
        "No, he wasn't speaking at the conference.",
        "No, he will not speak at the conference.",
        "Он не выступал на конференции? Нет, он не выступал на конференции.",
        "Він не виступав на конференції? Ні, він не виступав на конференції.",
        "Czy on nie przemawiał na konferencji? Nie, nie przemawiał na konferencji."
      ],
      [
        "Did you enjoy the meal?", 
        "No, I didn't enjoy the meal.",
        "No, I don't enjoy the meal.",
        "No, I wasn't enjoying the meal.",
        "No, I will not enjoy the meal.",
        "Тебе не понравилась еда? Нет, мне не понравилась еда.",
        "Тобі не сподобалась їжа? Ні, мені не сподобалась їжа.",
        "Czy nie podobał ci się posiłek? Nie, nie podobał mi się posiłek."
      ],
      [
        "Did you play tennis yesterday?", 
        "No, I didn't play tennis yesterday.",
        "No, I don't play tennis yesterday.",
        "No, I wasn't playing tennis yesterday.",
        "No, I will not play tennis yesterday.",
        "Ты не играл в теннис вчера? Нет, я не играл в теннис вчера.",
        "Ти не грав у теніс вчора? Ні, я не грав у теніс вчора.",
        "Czy nie grałeś w tenisa wczoraj? Nie, nie grałem w tenisa wczoraj."
      ],
      [
        "Did you visit your friend last weekend?", 
        "No, I didn't visit my friend last weekend.",
        "No, I don't visit my friend last weekend.",
        "No, I wasn't visiting my friend last weekend.",
        "No, I will not visit my friend last weekend.",
        "Ты не навещал своего друга на выходных? Нет, я не навещал своего друга на выходных.",
        "Ти не навідував свого друга на вихідних? Ні, я не навідував свого друга на вихідних.",
        "Czy nie odwiedziłeś swojego przyjaciela w zeszły weekend? Nie, nie odwiedziłem swojego przyjaciela w zeszły weekend."
      ],
      [
        "Did she call you yesterday?", 
        "No, she didn't call me yesterday.",
        "No, she doesn't call me yesterday.",
        "No, she wasn't calling me yesterday.",
        "No, she will not call me yesterday.",
        "Она не звонила тебе вчера? Нет, она не звонила тебе вчера.",
        "Вона не дзвонила тобі вчора? Ні, вона не дзвонила тобі вчора.",
        "Czy ona nie zadzwoniła do ciebie wczoraj? Nie, nie zadzwoniła do ciebie wczoraj."
      ],
      [
        "Did you watch the movie last night?", 
        "No, I didn't watch the movie last night.",
        "No, I don't watch the movie last night.",
        "No, I wasn't watching the movie last night.",
        "No, I will not watch the movie last night.",
        "Ты не смотрел фильм прошлой ночью? Нет, я не смотрел фильм прошлой ночью.",
        "Ти не дивився фільм вчора ввечері? Ні, я не дивився фільм вчора ввечері.",
        "Czy nie oglądałeś filmu wczoraj wieczorem? Nie, nie oglądałem filmu wczoraj wieczorem."
      ],
      [
        "Did he finish his lunch?", 
        "No, he didn't finish his lunch.",
        "No, he doesn't finish his lunch.",
        "No, he wasn't finishing his lunch.",
        "No, he will not finish his lunch.",
        "Он не закончил свой обед? Нет, он не закончил свой обед.",
        "Він не закінчив свій обід? Ні, він не закінчив свій обід.",
        "Czy on nie skończył swojego obiadu? Nie, nie skończył swojego obiadu."
      ],
      [
        "Did you clean the house?", 
        "No, I didn't clean the house.",
        "No, I don't clean the house.",
        "No, I wasn't cleaning the house.",
        "No, I will not clean the house.",
        "Ты не убрался в доме? Нет, я не убрался в доме.",
        "Ти не прибрався в будинку? Ні, я не прибрався в будинку.",
        "Czy nie posprzątałeś domu? Nie, nie posprzątałem domu."
      ],
      [
        "Did they arrive on time?", 
        "No, they didn't arrive on time.",
        "No, they don't arrive on time.",
        "No, they weren't arriving on time.",
        "No, they will not arrive on time.",
        "Они не приехали вовремя? Нет, они не приехали вовремя.",
        "Вони не приїхали вчасно? Ні, вони не приїхали вчасно.",
        "Czy oni nie przyjechali na czas? Nie, nie przyjechali na czas."
      ],
      [
        "Did she go to the party?", 
        "No, she didn't go to the party.",
        "No, she doesn't go to the party.",
        "No, she wasn't going to the party.",
        "No, she will not go to the party.",
        "Она не пошла на вечеринку? Нет, она не пошла на вечеринку.",
        "Вона не пішла на вечірку? Ні, вона не пішла на вечірку.",
        "Czy ona nie poszła na imprezę? Nie, nie poszła na imprezę."
      ],
      [
        "Did we meet yesterday?", 
        "No, we didn't meet yesterday.",
        "No, we don't meet yesterday.",
        "No, we weren't meeting yesterday.",
        "No, we will not meet yesterday.",
        "Мы не встретились вчера? Нет, мы не встретились вчера.",
        "Ми не зустрічалися вчора? Ні, ми не зустрічалися вчора.",
        "Czy nie spotkaliśmy się wczoraj? Nie, nie spotkaliśmy się wczoraj."
      ],
      [
        "Did they play football?", 
        "No, they didn't play football.",
        "No, they don't play football.",
        "No, they weren't playing football.",
        "No, they will not play football.",
        "Они не играли в футбол? Нет, они не играли в футбол.",
        "Вони не грали у футбол? Ні, вони не грали у футбол.",
        "Czy oni nie grali w piłkę nożną? Nie, nie grali w piłkę nożną."
      ],
      [
        "Did you study for the test?", 
        "No, I didn't study for the test.",
        "No, I don't study for the test.",
        "No, I wasn't studying for the test.",
        "No, I will not study for the test.",
        "Ты не учил уроки к тесту? Нет, я не учил уроки к тесту.",
        "Ти не вчився до тесту? Ні, я не вчився до тесту.",
        "Czy nie uczyłeś się do testu? Nie, nie uczyłem się do testu."
      ],
      [
        "Did she sing the song?", 
        "No, she didn't sing the song.",
        "No, she doesn't sing the song.",
        "No, she wasn't singing the song.",
        "No, she will not sing the song.",
        "Она не спела песню? Нет, она не спела песню.",
        "Вона не заспівала пісню? Ні, вона не заспівала пісню.",
        "Czy ona nie zaśpiewała piosenki? Nie, nie zaśpiewała piosenki."
      ],
      [
        "Did you read the book?", 
        "No, I didn't read the book.",
        "No, I don't read the book.",
        "No, I wasn't reading the book.",
        "No, I will not read the book.",
        "Ты не читал книгу? Нет, я не читал книгу.",
        "Ти не читав книгу? Ні, я не читав книгу.",
        "Czy nie czytałeś książki? Nie, nie czytałem książki."
      ],
      [
        "Did he speak at the conference?", 
        "No, he didn't speak at the conference.",
        "No, he doesn't speak at the conference.",
        "No, he wasn't speaking at the conference.",
        "No, he will not speak at the conference.",
        "Он не выступал на конференции? Нет, он не выступал на конференции.",
        "Він не виступав на конференції? Ні, він не виступав на конференції.",
        "Czy on nie przemawiał na konferencji? Nie, nie przemawiał na konferencji."
      ],
      [
        "Did you enjoy the meal?", 
        "No, I didn't enjoy the meal.",
        "No, I don't enjoy the meal.",
        "No, I wasn't enjoying the meal.",
        "No, I will not enjoy the meal.",
        "Тебе не понравилась еда? Нет, мне не понравилась еда.",
        "Тобі не сподобалась їжа? Ні, мені не сподобалась їжа.",
        "Czy nie podobał ci się posiłek? Nie, nie podobał mi się posiłek."
      ],
      ["She didn't go to the party.", "Did she go to the party?", "She went to the party?", "Did she went to the party?", "Did she didn't go to the party?", "Она не пошла на вечеринку.", "Вона не пішла на вечірку.", "Ona nie poszła na imprezę."],
      ["I didn't watch the movie.", "Did I watch the movie?", "I watch the movie?", "Did I watched the movie?", "Did I didn't watch the movie?", "Я не смотрел фильм.", "Я не дивився фільм.", "Nie oglądałem filmu."],
      ["They didn't eat lunch.", "Did they eat lunch?", "They eats lunch?", "Did they eaten lunch?", "Did they didn't eat lunch?", "Они не поели обед.", "Вони не поїли обід.", "Nie jedli lunchu."],
      ["He didn't like the book.", "Did he like the book?", "He liked the book?", "Did he liked the book?", "Did he didn't like the book?", "Ему не понравилась книга.", "Йому не сподобалась книга.", "Nie podobała mu się książka."],
      ["She didn't call me yesterday.", "Did she call me yesterday?", "She called me yesterday?", "Did she called me yesterday?", "Did she didn't call me yesterday?", "Она не позвонила мне вчера.", "Вона не подзвонила мені вчора.", "Nie zadzwoniła do mnie wczoraj."],
      ["They didn't finish their homework.", "Did they finish their homework?", "They finished their homework?", "Did they finished their homework?", "Did they didn't finish their homework?", "Они не закончили домашку.", "Вони не закінчили домашнє завдання.", "Nie skończyli swojej pracy domowej."],
      ["I didn't go to the store.", "Did I go to the store?", "I went to the store?", "Did I went to the store?", "Did I didn't go to the store?", "Я не ходил в магазин.", "Я не ходив до магазину.", "Nie poszedłem do sklepu."],
      ["He didn't play football.", "Did he play football?", "He plays football?", "Did he played football?", "Did he didn't play football?", "Он не играл в футбол.", "Він не грав у футбол.", "On nie grał w piłkę nożną."],
      ["We didn't meet her last week.", "Did we meet her last week?", "We met her last week?", "Did we met her last week?", "Did we didn't meet her last week?", "Мы не встретили её на прошлой неделе.", "Ми не зустріли її минулого тижня.", "Nie spotkaliśmy jej w zeszłym tygodniu."],
      ["They didn't travel last summer.", "Did they travel last summer?", "They traveled last summer?", "Did they travelled last summer?", "Did they didn't travel last summer?", "Они не путешествовали прошлым летом.", "Вони не подорожували минулого літа.", "Nie podróżowali latem ubiegłego roku."],
      ["He didn't work yesterday.", "Did he work yesterday?", "He worked yesterday?", "Did he works yesterday?", "Did he didn't work yesterday?", "Он не работал вчера.", "Він не працював вчора.", "Nie pracował wczoraj."],
      ["I didn't see her at the party.", "Did I see her at the party?", "I saw her at the party?", "Did I saw her at the party?", "Did I didn't see her at the party?", "Я не видел её на вечеринке.", "Я не бачив її на вечірці.", "Nie widziałem jej na imprezie."],
      ["She didn't sing at the concert.", "Did she sing at the concert?", "She sang at the concert?", "Did she sings at the concert?", "Did she didn't sing at the concert?", "Она не пела на концерте.", "Вона не співала на концерті.", "Nie śpiewała na koncercie."],
      ["We didn't go for a walk.", "Did we go for a walk?", "We went for a walk?", "Did we went for a walk?", "Did we didn't go for a walk?", "Мы не пошли на прогулку.", "Ми не пішли на прогулянку.", "Nie poszliśmy na spacer."],
      ["They didn't understand the question.", "Did they understand the question?", "They understood a question?", "They understood the question?", "Did they didn't understand the question?", "Они не поняли вопрос.", "Вони не зрозуміли питання.", "Nie zrozumieli pytania."],
      ["I didn't like the movie.", "Did I like the movie?", "I liked the movie?", "Did I liked the movie?", "Did I didn't like the movie?", "Мне не понравился фильм.", "Мені не сподобався фільм.", "Nie podobał mi się film."],
      ["He didn't arrive on time.", "Did he arrive on time?", "He arrived on time?", "Did he arrived on time?", "Did he didn't arrive on time?", "Он не приехал вовремя.", "Він не приїхав вчасно.", "Nie przyjechał na czas."],
      ["She didn't finish her work.", "Did she finish her work?", "She finished her work?", "Did she finished her work?", "Did she didn't finish her work?", "Она не закончила свою работу.", "Вона не закінчила свою роботу.", "Nie skończyła swojej pracy."],
      ["I didn't like the food.", "Did I like the food?", "I liked the food?", "Did I liked the food?", "Did I didn't like the food?", "Мне не понравилась еда.", "Мені не сподобалась їжа.", "Nie podobało mi się jedzenie."],
      ["They didn't clean the house.", "Did they clean the house?", "They cleaned the house?", "Did they cleaned the house?", "Did they didn't clean the house?", "Они не убрали дом.", "Вони не прибрали будинок.", "Nie posprzątali domu."],
      ["We didn't speak to her.", "Did we speak to her?", "We spoke to her?", "Did we spoke to her?", "Did we didn't speak to her?", "Мы не поговорили с ней.", "Ми не поговорили з нею.", "Nie rozmawialiśmy z nią."],
      ["He didn't enjoy the trip.", "Did he enjoy the trip?", "He enjoyed the trip?", "Did he enjoyed the trip?", "Did he didn't enjoy the trip?", "Ему не понравилась поездка.", "Йому не сподобалася поїздка.", "Nie podobała mu się podróż."],
      ["I didn't take the book.", "Did I take the book?", "I took the book?", "Did I took the book?", "Did I didn't take the book?", "Я не взял книгу.", "Я не взяв книгу.", "Nie wziąłem książki."],
      ["She didn't tell me the truth.", "Did she tell me the truth?", "She told me the truth?", "Did she told me the truth?", "Did she didn't tell me the truth?", "Она не сказала мне правду.", "Вона не сказала мені правду.", "Nie powiedziała mi prawdy."],
      ["They didn't invite me to the party.", "Did they invite me to the party?", "They invited me to the party?", "Did they invited me to the party?", "Did they didn't invite me to the party?", "Они не пригласили меня на вечеринку.", "Вони не запросили мене на вечірку.", "Nie zaprosili mnie na imprezę."],
      ["I didn't finish the book.", "Did I finish the book?", "I finished the book?", "Did I finished the book?", "Did I didn't finish the book?", "Я не закончил книгу.", "Я не закінчив книгу.", "Nie skończyłem książki."],
      ["He didn't ask me about it.", "Did he ask me about it?", "He asked me about it?", "Did he asked me about it?", "Did he didn't ask me about it?", "Он не спросил меня об этом.", "Він не спитав мене про це.", "Nie zapytał mnie o to."],
      ["They didn't leave early.", "Did they leave early?", "They left early?", "Did they left early?", "Did they didn't leave early?", "Они не ушли рано.", "Вони не пішли рано.", "Nie wyszli wcześniej."],
      ["I didn't study last night.", "Did I study last night?", "I studied last night?", "Did I studied last night?", "Did I didn't study last night?", "Я не учил(а) вчера вечером.", "Я не вчив(лася) вчора ввечері.", "Nie uczyłem się wczoraj wieczorem."],
      function (id) {
          return replaceEllipsisWithWord(id, pastSimpleNegativeAndQuestions);
        }  
  ];

