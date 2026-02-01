import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';

const unit34 = [

  ["Would you like some coffee?", "Yes, please. I'd love some.", "No, I like tea.", "Yes, I like coffee very much.", "No, thank you, I'm not hungry.", "Хочешь немного кофе?", "Бажаєш трохи кави?", "Chcesz trochę kawy?"],
  ["Would you like tea or coffee?", "I'd like tea, please.", "No, I like both.", "Yes, I like tea very much.", "No, I don't like hot drinks.", "Чай или кофе?", "Чай чи кава?", "Herbatę czy kawę?"],
  ["Would you like to go to the cinema tonight?", "Yes, I'd love to!", "No, I like watching films at home.", "Yes, I like cinema.", "No, I don't like movies.", "Хочешь сегодня вечером в кино?", "Хочеш сьогодні ввечері в кіно?", "Chcesz iść dzisiaj wieczorem do kina?"],
  ["Would you like some water?", "Yes, please. Just a little.", "No, I like juice.", "Yes, I like water very much.", "No, thank you, I'm not thirsty.", "Хочешь воды?", "Бажаєш води?", "Chcesz wody?"],
  ["Would you like to join us for dinner?", "I'd love to, thank you!", "No, I like eating alone.", "Yes, I like dinner.", "No, I don't like food.", "Хочешь присоединиться к нам на ужин?", "Хочеш приєднатися до нас на вечерю?", "Chcesz dołączyć do nas na kolację?"],
  ["Would you like a piece of cake?", "Yes, please! It looks delicious.", "No, I like cookies.", "Yes, I like cake very much.", "No, thank you, I'm on a diet forever.", "Хочешь кусочек торта?", "Бажаєш шматочок торта?", "Chcesz kawałek ciasta?"],
  ["Would you like to come to my birthday party?", "Yes, I'd be happy to come!", "No, I like quiet evenings.", "Yes, I like parties.", "No, I don't like people.", "Хочешь прийти на мой день рождения?", "Хочеш прийти на мій день народження?", "Chcesz przyjść na moje urodziny?"],
  ["Would you like some help with your bags?", "Yes, thank you very much.", "No, I like carrying heavy things.", "Yes, I like help.", "No, I don't like bags.", "Хочешь помощи с сумками?", "Бажаєш допомоги з сумками?", "Chcesz pomocy z torbami?"],
  ["Would you like to try sushi?", "Yes, I'd like to try it.", "No, I like pizza.", "Yes, I like Japanese food.", "No, I don't like raw fish.", "Хочешь попробовать суши?", "Хочеш спробувати суші?", "Chcesz spróbować sushi?"],
  ["Would you like another drink?", "No, thanks. I'm fine.", "Yes, I like drinking a lot.", "No, I don't like drinks.", "Yes, I like water.", "Хочешь ещё один напиток?", "Бажаєш ще один напій?", "Chcesz jeszcze jeden napój?"],
  ["Would you like to dance?", "I'd love to!", "No, I like sitting.", "Yes, I like dancing very much.", "No, I don't like music.", "Хочешь потанцевать?", "Хочеш потанцювати?", "Chcesz zatańczyć?"],
  ["Would you like some ice cream?", "Yes, please! Chocolate one.", "No, I like fruit.", "Yes, I like ice cream every day.", "No, thank you, it's winter.", "Хочешь мороженого?", "Бажаєш морозива?", "Chcesz lody?"],
  ["Would you like to visit Paris one day?", "Yes, I'd really like to!", "No, I like my city.", "Yes, I like France.", "No, I don't like traveling.", "Хочешь когда-нибудь посетить Париж?", "Хочеш колись відвідати Париж?", "Chcesz kiedyś odwiedzić Paryż?"],
  ["Would you like a window seat or an aisle seat?", "I'd like a window seat, please.", "No, I like seats.", "Yes, I like flying.", "No, I don't like planes.", "Место у окна или у прохода?", "Місце біля вікна чи біля проходу?", "Miejsce przy oknie czy przy przejściu?"],
  ["Would you like to order now?", "Yes, we're ready.", "No, I like waiting.", "Yes, I like food.", "No, I don't like restaurants.", "Хочешь сделать заказ сейчас?", "Хочеш зробити замовлення зараз?", "Chcesz złożyć zamówienie teraz?"],
  ["Would you like me to open the window?", "Yes, please. It's hot.", "No, I like fresh air.", "Yes, I like windows.", "No, I don't like wind.", "Открыть окно?", "Відкрити вікно?", "Otworzyć okno?"],
  ["Would you like some more time?", "No, thanks. We're ready to order.", "Yes, I like thinking.", "No, I don't like decisions.", "Yes, I like menus.", "Ещё немного времени?", "Ще трохи часу?", "Trochę więcej czasu?"],
  ["Would you like to watch a movie tonight?", "Yes, that sounds great!", "No, I like books.", "Yes, I like films very much.", "No, I don't like TV.", "Хочешь посмотреть фильм сегодня вечером?", "Хочеш подивитися фільм сьогодні ввечері?", "Chcesz obejrzeć film dzisiaj wieczorem?"],
  ["Would you like a taxi?", "Yes, please. Thank you.", "No, I like walking.", "Yes, I like cars.", "No, I don't like driving.", "Вызвать такси?", "Замовити таксі?", "Wezwać taksówkę?"],
  ["Would you like to meet on Friday?", "Yes, Friday works for me.", "No, I like weekends.", "Yes, I like meetings.", "No, I don't like people.", "Встретимся в пятницу?", "Зустрінемося в п’ятницю?", "Spotkamy się w piątek?"],
  ["Would you like some sugar in your tea?", "No, thank you. I like it without.", "Yes, I like sweet tea.", "No, I don't like tea.", "Yes, I like sugar very much.", "Сахар в чай?", "Цукор у чай?", "Cukier do herbaty?"],
  ["Would you like to try this new game?", "Yes, sure! Let's play.", "No, I like old games.", "Yes, I like games very much.", "No, I don't like computers.", "Хочешь попробовать эту новую игру?", "Хочеш спробувати цю нову гру?", "Chcesz spróbować tę nową grę?"],
  ["Would you like a lift home?", "Yes, that would be great. Thank you.", "No, I like walking home.", "Yes, I like cars very much.", "No, I don't like driving.", "Подвезти домой?", "Підвезти додому?", "Podwieźć do domu?"],
  ["Would you like to have lunch together?", "I'd love to!", "No, I like eating alone.", "Yes, I like lunch.", "No, I don't like food.", "Пообедаем вместе?", "Пообідаємо разом?", "Zjemy razem obiad?"],
  ["Would you like some milk in your coffee?", "Yes, just a little, please.", "No, I like black coffee.", "Yes, I like milk very much.", "No, I don't like coffee.", "Молоко в кофе?", "Молоко в каву?", "Mleko do kawy?"],
  ["Would you like to go hiking this weekend?", "Yes, that sounds nice!", "No, I like staying home.", "Yes, I like mountains.", "No, I don't like nature.", "Хочешь пойти в поход на выходных?", "Хочеш піти в похід на вихідних?", "Chcesz iść na wycieczkę w góry w ten weekend?"],
  ["Would you like another slice of pizza?", "No, thanks. I'm full.", "Yes, I like pizza very much.", "No, I don't like pizza.", "Yes, I like eating a lot.", "Ещё кусочек пиццы?", "Ще шматочок піци?", "Jeszcze kawałek pizzy?"],
  ["Would you like to learn Spanish?", "Yes, I'd like to very much.", "No, I like English.", "Yes, I like languages.", "No, I don't like studying.", "Хочешь учить испанский?", "Хочеш вчити іспанську?", "Chcesz uczyć się hiszpańskiego?"],
  ["Would you like some bread with your soup?", "Yes, please.", "No, I like rice.", "Yes, I like bread very much.", "No, thank you, I'm not hungry.", "Хлеба к супу?", "Хліба до супу?", "Chleba do zupy?"],
  ["Would you like to see my photos?", "Yes, I'd love to!", "No, I like videos.", "Yes, I like photos very much.", "No, I don't like pictures.", "Хочешь посмотреть мои фото?", "Хочеш подивитися мої фото?", "Chcesz zobaczyć moje zdjęcia?"],
  ["Would you like a smaller size?", "No, this one is perfect, thanks.", "Yes, I like big clothes.", "No, I don't like shopping.", "Yes, I like trying on things.", "Меньший размер?", "Менший розмір?", "Mniejszy rozmiar?"],
  ["Would you like to come over for coffee?", "Yes, that would be lovely.", "No, I like drinking alone.", "Yes, I like coffee very much.", "No, I don't like visiting people.", "Зайдёшь на кофе?", "Зайдеш на каву?", "Wpadniesz na kawę?"],
  ["Would you like some fruit for dessert?", "Yes, please. An apple.", "No, I like cake.", "Yes, I like fruit very much.", "No, thank you, I'm sweet enough.", "Фрукты на десерт?", "Фрукти на десерт?", "Owoce na deser?"],
  ["Would you like to try skydiving?", "No, thanks. I'm scared of heights.", "Yes, I like extreme sports.", "No, I don't like adventures.", "Yes, I like falling.", "Хочешь попробовать прыжок с парашютом?", "Хочеш спробувати стрибок з парашутом?", "Chcesz spróbować skok ze spadochronem?"],
  ["Would you like me to call a doctor?", "No, thank you. I'm okay.", "Yes, I like doctors.", "No, I don't like medicine.", "Yes, I like being sick.", "Вызвать врача?", "Викликати лікаря?", "Wezwać lekarza?"],
  ["Would you like to book tickets online?", "Yes, that's easier.", "No, I like queues.", "Yes, I like internet.", "No, I don't like computers.", "Забронировать билеты онлайн?", "Замовити квитки онлайн?", "Zarezerwować bilety online?"],
  ["Would you like some music?", "Yes, please. Something calm.", "No, I like silence.", "Yes, I like loud music.", "No, I don't like songs.", "Включить музыку?", "Увімкнути музику?", "Włączyć muzykę?"],
  ["Would you like to change the channel?", "No, this program is good.", "Yes, I like TV.", "No, I don't like television.", "Yes, I like remote controls.", "Переключить канал?", "Перемкнути канал?", "Zmienić kanał?"],
  ["Would you like a blanket?", "Yes, please. It's cold.", "No, I like being cold.", "Yes, I like blankets very much.", "No, thank you, I'm hot.", "Плед?", "Плед?", "Koc?"],
  ["Would you like to go shopping?", "Yes, let's go!", "No, I like staying home.", "Yes, I like malls.", "No, I don't like money.", "Пойдём по магазинам?", "Ходімо по магазинах?", "Idziemy na zakupy?"],
  ["Would you like some advice?", "Yes, please. I need it.", "No, I like making mistakes.", "Yes, I like listening.", "No, I don't like people.", "Хочешь совет?", "Бажаєш поради?", "Chcesz rady?"],
  ["Would you like to stay longer?", "No, I have to go soon.", "Yes, I like this place very much.", "No, I don't like time.", "Yes, I like waiting.", "Останешься подольше?", "Залишишся довше?", "Zostaniesz dłużej?"],
  ["Would you like a receipt?", "Yes, please.", "No, I like losing money.", "Yes, I like paper.", "No, I don't like shops.", "Чек?", "Чек?", "Paragon?"],
  ["Would you like to sing karaoke?", "Yes, why not!", "No, I like listening.", "Yes, I like my voice.", "No, I don't like music.", "Споём караоке?", "Співаємо караоке?", "Zaśpiewamy karaoke?"],
  ["Would you like some fresh air?", "Yes, let's open the window.", "No, I like stuffy rooms.", "Yes, I like wind very much.", "No, thank you, I'm okay.", "Свежий воздух?", "Свіже повітря?", "Świeże powietrze?"],
  ["Would you like to take a photo?", "Yes, good idea!", "No, I like being invisible.", "Yes, I like cameras.", "No, I don't like memories.", "Сфотографируемся?", "Сфотографуємося?", "Zróbmy zdjęcie?"],
  ["Would you like to try yoga?", "Yes, I'd like to start.", "No, I like running.", "Yes, I like stretching.", "No, I don't like relaxing.", "Попробуешь йогу?", "Спробуєш йогу?", "Chcesz spróbować jogi?"],
  ["Would you like some company?", "Yes, please. That would be nice.", "No, I like being alone.", "Yes, I like people very much.", "No, I don't like talking.", "Составить компанию?", "Скласти компанію?", "Potrzymać towarzystwo?"],
  ["Would you like to order dessert now?", "Yes, the chocolate cake, please.", "No, I like being hungry.", "Yes, I like sweets very much.", "No, thank you, I'm sweet enough.", "Заказать десерт сейчас?", "Замовити десерт зараз?", "Zamówić deser teraz?"],

  ["What would you like to drink?", "I'd like some orange juice, please.", "No, I like water.", "Yes, I like drinking tea every day.", "No, thank you, I don't drink anything.", "Что бы ты хотел выпить?", "Що б ти хотів випити?", "Co chciałbyś się napić?"],
  ["Where would you like to go on holiday?", "I'd like to go to Italy.", "No, I like staying home.", "Yes, I like travelling very much.", "No, I don't like holidays.", "Куда бы ты хотел поехать в отпуск?", "Куди б ти хотів поїхати у відпустку?", "Gdzie chciałbyś pojechać na wakacje?"],
  ["When would you like to meet?", "I'd like to meet at 7 p.m.", "No, I like mornings.", "Yes, I like meetings very much.", "No, I don't like time.", "Когда бы ты хотел встретиться?", "Коли б ти хотів зустрітися?", "Kiedy chciałbyś się spotkać?"],
  ["How would you like your steak?", "I'd like it medium rare, please.", "No, I like well done.", "Yes, I like meat very much.", "No, thank you, I'm vegetarian.", "Как бы ты хотел стейк?", "Як би ти хотів стейк?", "Jak chciałbyś stek?"],
  ["Why would you like to learn English?", "I'd like to travel and communicate better.", "No, I like my own language.", "Yes, I like English very much.", "No, I don't like studying languages.", "Почему бы ты хотел учить английский?", "Чому б ти хотів вивчати англійську?", "Dlaczego chciałbyś uczyć się angielskiego?"],
  ["Who would you like to invite to the party?", "I'd like to invite my best friends.", "No, I like being alone.", "Yes, I like parties very much.", "No, I don't like people.", "Кого бы ты хотел пригласить на вечеринку?", "Кого б ти хотів запросити на вечірку?", "Kogo chciałbyś zaprosić na imprezę?"],
  ["Which would you like — tea or coffee?", "I'd like tea, please.", "No, I like both.", "Yes, I like hot drinks.", "No, I don't like anything hot.", "Что бы ты хотел — чай или кофе?", "Що б ти хотів — чай чи каву?", "Które byś wolał — herbatę czy kawę?"],
  ["What would you like for your birthday?", "I'd like a new phone.", "No, I like old things.", "Yes, I like gifts very much.", "No, I don't like birthdays.", "Что бы ты хотел на день рождения?", "Що б ти хотів на день народження?", "Co chciałbyś na urodziny?"],
  ["Where would you like to sit?", "I'd like to sit by the window.", "No, I like the back row.", "Yes, I like seats very much.", "No, I don't like sitting.", "Где бы ты хотел сесть?", "Де б ти хотів сісти?", "Gdzie chciałbyś usiąść?"],
  ["How would you like to pay — cash or card?", "I'd like to pay by card, please.", "No, I like cash.", "Yes, I like paying very much.", "No, I don't like money.", "Как бы ты хотел оплатить — наличными или картой?", "Як би ти хотів оплатити — готівкою чи карткою?", "Jak chciałbyś zapłacić — gotówką czy kartą?"],

  // 11–50 — новые
  ["What would you like for dinner tonight?", "I'd like pasta with seafood.", "No, I like breakfast more.", "Yes, I like eating dinner very much.", "No, I don't like food in the evening.", "Что бы ты хотел на ужин сегодня?", "Що б ти хотів на вечерю сьогодні?", "Co chciałbyś na kolację dzisiaj?"],
  ["Where would you like to celebrate New Year?", "I'd like to go to the mountains.", "No, I like home celebrations.", "Yes, I like fireworks very much.", "No, I don't like holidays.", "Где бы ты хотел встретить Новый год?", "Де б ти хотів зустріти Новий рік?", "Gdzie chciałbyś świętować Nowy Rok?"],
  ["When would you like your coffee — now or later?", "I'd like it now, please.", "No, I like cold coffee.", "Yes, I like coffee anytime.", "No, I don't like caffeine.", "Когда бы ты хотел кофе — сейчас или позже?", "Коли б ти хотів каву — зараз чи пізніше?", "Kiedy chciałbyś kawę — teraz czy później?"],
  ["How would you like me to help you?", "I'd like you to explain it again.", "No, I like doing everything alone.", "Yes, I like help very much.", "No, I don't like asking for help.", "Как бы ты хотел, чтобы я помог?", "Як би ти хотів, щоб я допоміг?", "Jak chciałbyś, żebym ci pomógł?"],
  ["Why would you like this job?", "I'd like it because of the team and projects.", "No, I like my current job.", "Yes, I like working very much.", "No, I don't like jobs.", "Почему бы ты хотел эту работу?", "Чому б ти хотів цю роботу?", "Dlaczego chciałbyś tę pracę?"],
  ["Who would you like to talk to right now?", "I'd like to talk to my mom.", "No, I like silence.", "Yes, I like talking very much.", "No, I don't like people.", "С кем бы ты хотел поговорить прямо сейчас?", "З ким би ти хотів поговорити зараз?", "Z kim chciałbyś teraz porozmawiać?"],
  ["Which would you like to watch — comedy or drama?", "I'd like a comedy, please.", "No, I like action movies.", "Yes, I like films very much.", "No, I don't like watching anything.", "Что бы ты хотел посмотреть — комедию или драму?", "Що б ти хотів подивитися — комедію чи драму?", "Co chciałbyś obejrzeć — komedię czy dramat?"],
  ["What would you like to do this weekend?", "I'd like to go hiking.", "No, I like working on weekends.", "Yes, I like weekends very much.", "No, I don't like free time.", "Что бы ты хотел сделать на этих выходных?", "Що б ти хотів зробити на цих вихідних?", "Co chciałbyś robić w ten weekend?"],
  ["Where would you like to live in the future?", "I'd like to live near the sea.", "No, I like my current city.", "Yes, I like big cities very much.", "No, I don't like moving.", "Где бы ты хотел жить в будущем?", "Де б ти хотів жити в майбутньому?", "Gdzie chciałbyś mieszkać w przyszłości?"],
  ["How would you like your eggs?", "I'd like them scrambled, please.", "No, I like them boiled.", "Yes, I like eggs very much.", "No, thank you, I'm vegan.", "Как бы ты хотел яйца?", "Як би ти хотів яйця?", "Jak chciałbyś jajka?"],
  ["When would you like to start the project?", "I'd like to start next Monday.", "No, I like waiting.", "Yes, I like projects very much.", "No, I don't like starting things.", "Когда бы ты хотел начать проект?", "Коли б ти хотів почати проєкт?", "Kiedy chciałbyś zacząć projekt?"],
  ["What would you like as a gift?", "I'd like a good book.", "No, I like surprises.", "Yes, I like gifts very much.", "No, I don't like receiving things.", "Что бы ты хотел в подарок?", "Що б ти хотів у подарунок?", "Co chciałbyś w prezencie?"],
  ["Why would you like to visit Japan?", "I'd like to see the culture and food.", "No, I like Europe more.", "Yes, I like Asia very much.", "No, I don't like traveling far.", "Почему бы ты хотел посетить Японию?", "Чому б ти хотів відвідати Японію?", "Dlaczego chciałbyś odwiedzić Japonię?"],
  ["Which color would you like for the walls?", "I'd like light gray.", "No, I like bright colors.", "Yes, I like painting very much.", "No, I don't like changing colors.", "Какой цвет бы ты хотел для стен?", "Який колір би ти хотів для стін?", "Jaki kolor chciałbyś na ścianach?"],
  ["Who would you like to be your teacher?", "I'd like someone patient and experienced.", "No, I like learning alone.", "Yes, I like teachers very much.", "No, I don't like studying.", "Кого бы ты хотел в учителя?", "Кого б ти хотів у вчителі?", "Kogo chciałbyś mieć za nauczyciela?"],
  ["What would you like to eat for breakfast?", "I'd like pancakes with syrup.", "No, I like salty breakfast.", "Yes, I like morning food very much.", "No, I don't like eating early.", "Что бы ты хотел на завтрак?", "Що б ти хотів на сніданок?", "Co chciałbyś na śniadanie?"],
  ["Where would you like to spend your honeymoon?", "I'd like to go to Bali.", "No, I like staying home.", "Yes, I like romantic trips very much.", "No, I don't like marriage.", "Где бы ты хотел провести медовый месяц?", "Де б ти хотів провести медовий місяць?", "Gdzie chciałbyś spędzić miesiąc miodowy?"],
  ["How would you like the music — loud or quiet?", "I'd like it quiet, please.", "No, I like loud music.", "Yes, I like music very much.", "No, I don't like any music.", "Как бы ты хотел музыку — громко или тихо?", "Як би ти хотів музику — голосно чи тихо?", "Jak chciałbyś muzykę — głośno czy cicho?"],
  ["When would you like your delivery?", "I'd like it tomorrow morning.", "No, I like waiting longer.", "Yes, I like packages very much.", "No, I don't like shopping online.", "Когда бы ты хотел доставку?", "Коли б ти хотів доставку?", "Kiedy chciałbyś dostawę?"],
  ["What would you like to name your pet?", "I'd like to call him Luna.", "No, I like traditional names.", "Yes, I like animals very much.", "No, I don't like pets.", "Как бы ты хотел назвать питомца?", "Як би ти хотів назвати улюбленця?", "Jak chciałbyś nazwać pupila?"],
  ["Which movie would you like to see first?", "I'd like the new Marvel one.", "No, I like old classics.", "Yes, I like cinema very much.", "No, I don't like watching films.", "Какой фильм бы ты хотел посмотреть первым?", "Який фільм би ти хотів подивитися першим?", "Który film chciałbyś obejrzeć najpierw?"],
  ["Why would you like more time off?", "I'd like to rest and travel.", "No, I like working a lot.", "Yes, I like vacations very much.", "No, I don't like free days.", "Почему бы ты хотел больше выходных?", "Чому б ти хотів більше вихідних?", "Dlaczego chciałbyś więcej wolnego?"],
  ["Who would you like on your team?", "I'd like people who are creative.", "No, I like working solo.", "Yes, I like teams very much.", "No, I don't like colleagues.", "Кого бы ты хотел в свою команду?", "Кого б ти хотів у свою команду?", "Kogo chciałbyś w swoim zespole?"],
  ["How would you like your room cleaned?", "I'd like it deep cleaned, please.", "No, I like mess.", "Yes, I like cleaning very much.", "No, I don't like tidy rooms.", "Как бы ты хотел убрать комнату?", "Як би ти хотів прибрати кімнату?", "Jak chciałbyś posprzątać pokój?"],
  ["What would you like to study next?", "I'd like to learn programming.", "No, I like my current subject.", "Yes, I like studying very much.", "No, I don't like school.", "Что бы ты хотел изучать дальше?", "Що б ти хотів вивчати далі?", "Co chciałbyś studiować dalej?"],
  ["Where would you like the meeting to be?", "I'd like it in the conference room.", "No, I like online meetings.", "Yes, I like meetings very much.", "No, I don't like discussing things.", "Где бы ты хотел провести встречу?", "Де б ти хотів провести зустріч?", "Gdzie chciałbyś odbyć spotkanie?"],
  ["Which one would you like — small or large?", "I'd like the large one, please.", "No, I like medium size.", "Yes, I like choosing very much.", "No, I don't like sizes.", "Какой бы ты хотел — маленький или большой?", "Який би ти хотів — маленький чи великий?", "Który byś wolał — mały czy duży?"],
  ["When would you like to take the exam?", "I'd like to take it in June.", "No, I like postponing exams.", "Yes, I like tests very much.", "No, I don't like exams.", "Когда бы ты хотел сдать экзамен?", "Коли б ти хотів скласти іспит?", "Kiedy chciałbyś podejść do egzaminu?"],
  ["What would you like to cook tonight?", "I'd like to make sushi.", "No, I like ordering food.", "Yes, I like cooking very much.", "No, I don't like kitchen.", "Что бы ты хотел приготовить сегодня?", "Що б ти хотів приготувати сьогодні?", "Co chciałbyś ugotować dzisiaj?"],
  ["Why would you like a new computer?", "I'd like it for faster work and gaming.", "No, I like my old one.", "Yes, I like technology very much.", "No, I don't like computers.", "Почему бы ты хотел новый компьютер?", "Чому б ти хотів новий комп'ютер?", "Dlaczego chciałbyś nowy komputer?"],
  ["Who would you like to meet in real life?", "I'd like to meet my favorite author.", "No, I like online friends.", "Yes, I like meeting people very much.", "No, I don't like strangers.", "Кого бы ты хотел встретить вживую?", "Кого б ти хотів зустріти вживу?", "Kogo chciałbyś spotkać na żywo?"],
  ["How would you like the temperature — warm or cool?", "I'd like it cool, please.", "No, I like heat.", "Yes, I like air conditioning very much.", "No, I don't like changing temperature.", "Какой температуры бы ты хотел — тепло или прохладно?", "Якої температури би ти хотів — тепло чи прохолодно?", "Jaką temperaturę byś wolał — ciepłą czy chłodną?"],
  ["What would you like to read next?", "I'd like a fantasy novel.", "No, I like non-fiction.", "Yes, I like books very much.", "No, I don't like reading.", "Что бы ты хотел прочитать следующим?", "Що б ти хотів прочитати наступним?", "Co chciałbyś przeczytać jako następne?"],
  ["Where would you like your package delivered?", "I'd like it to my office.", "No, I like home delivery.", "Yes, I like packages very much.", "No, I don't like waiting for mail.", "Куда бы ты хотел доставить посылку?", "Куди б ти хотів доставити посилку?", "Gdzie chciałbyś dostarczyć paczkę?"],
  ["Which would you like — sweet or salty?", "I'd like something sweet.", "No, I like both equally.", "Yes, I like snacks very much.", "No, I don't like tastes.", "Что бы ты хотел — сладкое или солёное?", "Що б ти хотів — солодке чи солоне?", "Co byś wolał — słodkie czy słone?"],
  ["When would you like to go home?", "I'd like to go now.", "No, I like staying late.", "Yes, I like home very much.", "No, I don't like my house.", "Когда бы ты хотел пойти домой?", "Коли б ти хотів піти додому?", "Kiedy chciałbyś iść do domu?"],
  ["How would you like your haircut?", "I'd like it short on the sides.", "No, I like long hair.", "Yes, I like haircuts very much.", "No, I don't like barbers.", "Как бы ты хотел подстричься?", "Як би ти хотів підстригтися?", "Jak chciałbyś się ostrzyc?"],
  ["What would you like to dream about tonight?", "I'd like to dream about flying.", "No, I like nightmares.", "Yes, I like dreams very much.", "No, I don't like sleeping.", "О чём бы ты хотел мечтать сегодня ночью?", "Про що б ти хотів мріяти цієї ночі?", "O czym chciałbyś śnić dzisiaj w nocy?"],
  ["Why would you like to change your phone?", "I'd like a better camera and battery.", "No, I like my current one.", "Yes, I like new gadgets very much.", "No, I don't like phones.", "Почему бы ты хотел сменить телефон?", "Чому б ти хотів змінити телефон?", "Dlaczego chciałbyś zmienić telefon?"],
  ["Who would you like to thank?", "I'd like to thank my family.", "No, I like being independent.", "Yes, I like saying thank you very much.", "No, I don't like gratitude.", "Кого бы ты хотел поблагодарить?", "Кого б ти хотів подякувати?", "Komu chciałbyś podziękować?"],
  ["Which book would you like to recommend?", "I'd like to recommend 'Dune'.", "No, I like unknown books.", "Yes, I like reading recommendations very much.", "No, I don't like books.", "Какую книгу бы ты хотел порекомендовать?", "Яку книгу би ти хотів порекомендувати?", "Którą książkę chciałbyś polecić?"],
  ["What would you like the weather to be like tomorrow?", "I'd like it sunny and warm.", "No, I like rain.", "Yes, I like good weather very much.", "No, I don't like weather.", "Какой бы ты хотел погоду завтра?", "Яку б ти хотів погоду завтра?", "Jaką pogodę chciałbyś jutro?"],

[
    "You are sitting in a cozy café with a friend. The waiter comes to your table and smiles at you.",
    "Would you like to see the menu?",
    "Would you like to go hiking tomorrow?",
    "Would you like a new laptop?",
    "Would you like some medicine?",
    "Ты сидишь в уютном кафе с другом. Официант подходит к вашему столику и улыбается.",
    "Ти сидиш у затишному кафе з другом. Офіціант підходить до вашого столика й усміхається.",
    "Siedzisz w przytulnej kawiarni z przyjacielem. Kelner podchodzi do waszego stolika i się uśmiecha."
  ],
  [
    "Your grandmother has just baked a fresh apple pie. She takes it out of the oven and looks at you.",
    "Would you like a piece of pie?",
    "Would you like to learn Japanese?",
    "Would you like to clean the garage?",
    "Would you like some ice skates?",
    "Твоя бабушка только что испекла свежий яблочный пирог. Она достаёт его из духовки и смотрит на тебя.",
    "Твоя бабуся щойно спекла свіжий яблучний пиріг. Вона дістає його з духовки й дивиться на тебе.",
    "Twoja babcia właśnie upiekła świeży szarlotkę. Wyjmuje go z piekarnika i patrzy na Ciebie."
  ],
  [
    "It is a very hot summer day. You are sitting on the balcony and fanning yourself with a magazine.",
    "Would you like something cold to drink?",
    "Would you like a hot chocolate?",
    "Would you like to go ice skating?",
    "Would you like a thick blanket?",
    "Очень жаркий летний день. Ты сидишь на балконе и обмахиваешься журналом.",
    "Дуже спекотний літній день. Ти сидиш на балконі й обмахуєшся журналом.",
    "To bardzo gorący letni dzień. Siedzisz na balkonie i wachlujesz się magazynem."
  ],
  [
    "Your best friend calls you in the evening. He says he has no plans tonight and sounds excited.",
    "Would you like to go to the cinema tonight?",
    "Would you like some breakfast now?",
    "Would you like to do your taxes?",
    "Would you like a bigger TV?",
    "Твой лучший друг звонит вечером. Он говорит, что у него нет планов на сегодня и звучит взволнованно.",
    "Твій найкращий друг телефонує ввечері. Він каже, що в нього немає планів на сьогодні й звучить схвильовано.",
    "Twój najlepszy przyjaciel dzwoni wieczorem. Mówi, że nie ma planów na dziś i brzmi podekscytowany."
  ],
  [
    "You have just finished a long and tiring workout at the gym. You are breathing heavily and sweating.",
    "Would you like some water?",
    "Would you like to run another 5 km?",
    "Would you like a very spicy meal?",
    "Would you like to start lifting weights again?",
    "Ты только что закончил длинную и утомительную тренировку в зале. Ты тяжело дышишь и вспотел.",
    "Ти щойно закінчив довге й виснажливе тренування в залі. Ти важко дихаєш і спітнів.",
    "Dopiero co skończyłeś długi i męczący trening na siłowni. Ciężko oddychasz i jesteś spocony."
  ],
  [
    "You are standing in a clothing store. You see a nice jacket on the hanger and touch the fabric.",
    "Would you like to try it on?",
    "Would you like some coffee?",
    "Would you like to buy a house?",
    "Would you like to watch cartoons?",
    "Ты стоишь в магазине одежды. Видишь красивую куртку на вешалке и трогаешь ткань.",
    "Ти стоїш у магазині одягу. Бачиш гарну куртку на вішалці й торкаєшся тканини.",
    "Stoisz w sklepie odzieżowym. Widzisz ładną kurtkę na wieszaku i dotykasz materiału."
  ],
  [
    "It is your birthday today. Your mom walks into the room carrying a cake with lit candles.",
    "Would you like to make a wish?",
    "Would you like some broccoli?",
    "Would you like to wash the dishes?",
    "Would you like to go to the dentist?",
    "Сегодня твой день рождения. Мама заходит в комнату с тортом, на котором горят свечи.",
    "Сьогодні твій день народження. Мама заходить у кімнату з тортом, на якому горять свічки.",
    "Dzisiaj są Twoje urodziny. Mama wchodzi do pokoju z tortem, na którym palą się świeczki."
  ],
  [
    "You are sitting on a plane during a flight. The flight attendant comes down the aisle with a cart.",
    "Would you like something to drink?",
    "Would you like to fly the plane?",
    "Would you like a skateboard?",
    "Would you like to jump with a parachute?",
    "Ты сидишь в самолёте во время полёта. Бортпроводница идёт по проходу с тележкой.",
    "Ти сидиш у літаку під час польоту. Бортпровідниця йде проходом із візком.",
    "Siedzisz w samolocie podczas lotu. Stewardessa idzie przejściem z wózkiem."
  ],
  [
    "You arrive at your friend's house. He opens the door and gives you a big smile.",
    "Would you like to come in?",
    "Would you like some painkillers?",
    "Would you like to solve math problems?",
    "Would you like a pet snake?",
    "Ты пришёл в дом к другу. Он открывает дверь и широко улыбается.",
    "Ти прийшов у дім до друга. Він відчиняє двері й широко усміхається.",
    "Przyszedłeś do domu przyjaciela. Otwiera drzwi i szeroko się uśmiecha."
  ],
  [
    "It is raining heavily outside. You are standing under a small roof without an umbrella.",
    "Would you like my umbrella?",
    "Would you like a sun hat?",
    "Would you like to go sunbathing?",
    "Would you like some sunscreen?",
    "На улице сильно идёт дождь. Ты стоишь под маленьким навесом без зонта.",
    "На вулиці сильно йде дощ. Ти стоїш під маленьким навісом без парасольки.",
    "Na zewnątrz mocno pada deszcz. Stoisz pod małym daszkiem bez parasola."
  ],
  [
    "You are in the library looking for an interesting book to read during the weekend.",
    "Would you like some help finding a book?",
    "Would you like to play video games?",
    "Would you like a hamburger?",
    "Would you like to take a nap?",
    "Ты в библиотеке ищешь интересную книгу, чтобы почитать на выходных.",
    "Ти в бібліотеці шукаєш цікаву книгу, щоб почитати на вихідних.",
    "Jesteś w bibliotece i szukasz ciekawej książki do czytania w weekend."
  ],
  [
    "Your sister has finished cooking dinner and the table is already set with plates and cutlery.",
    "Would you like to eat now?",
    "Would you like to go to the gym?",
    "Would you like a skateboard?",
    "Would you like to watch a scary movie?",
    "Твоя сестра закончила готовить ужин, и стол уже накрыт тарелками и приборами.",
    "Твоя сестра закінчила готувати вечерю, і стіл уже накритий тарілками та приборами.",
    "Twoja siostra skończyła gotować kolację, a stół jest już nakryty talerzami i sztućcami."
  ],
  [
    "You are sitting on a bench in the park. An ice cream seller walks by ringing a little bell.",
    "Would you like an ice cream?",
    "Would you like to study physics?",
    "Would you like a winter coat?",
    "Would you like to do your homework?",
    "Ты сидишь на скамейке в парке. Мимо проходит продавец мороженого и звенит в колокольчик.",
    "Ти сидиш на лавці в парку. Поруч проходить продавець морозива й дзвенить у дзвіночок.",
    "Siedzisz na ławce w parku. Obok przechodzi sprzedawca lodów i dzwoni dzwoneczkiem."
  ],
  [
    "You feel very sleepy after a long day at work or school. Your eyes are closing by themselves.",
    "Would you like to go to bed?",
    "Would you like to jog for an hour?",
    "Would you like a strong espresso?",
    "Would you like to work overtime?",
    "Ты очень сонный после долгого дня на работе или в школе. Глаза сами закрываются.",
    "Ти дуже сонний після довгого дня на роботі чи в школі. Очі самі закриваються.",
    "Jesteś bardzo senny po długim dniu w pracy lub w szkole. Same oczy się zamykają."
  ],
  [
    "Your colleague sees that you are struggling with a difficult report at work.",
    "Would you like some help with the report?",
    "Would you like to go clubbing?",
    "Would you like a parrot?",
    "Would you like some sushi?",
    "Твой коллега видит, что ты мучаешься с трудным отчётом на работе.",
    "Твій колега бачить, що ти мучишся з важким звітом на роботі.",
    "Twój kolega widzi, że męczysz się z trudnym raportem w pracy."
  ],
  [
    "You are browsing headphones in an electronics store and putting one model next to your ear.",
    "Would you like to try them on?",
    "Would you like some soup?",
    "Would you like to read poetry?",
    "Would you like a goldfish?",
    "Ты примеряешь наушники в магазине электроники и подносишь одну модель к уху.",
    "Ти приміряєш навушники в магазині електроніки й підносиш одну модель до вуха.",
    "Przymierzasz słuchawki w sklepie elektronicznym i przykładzasz jedną parę do ucha."
  ],
  [
    "It is winter and very cold. Your mother notices you are shivering when you come home.",
    "Would you like a cup of hot tea?",
    "Would you like ice cream?",
    "Would you like to go to the beach?",
    "Would you like a fan?",
    "Зима, очень холодно. Мама замечает, что ты дрожишь, когда приходишь домой.",
    "Зима, дуже холодно. Мама помічає, що ти тремтиш, коли приходиш додому.",
    "Jest zima i bardzo zimno. Mama zauważa, że drżysz, gdy wracasz do domu."
  ],
  [
    "You have just finished painting a picture and show it proudly to your roommate.",
    "Would you like to hang it on the wall?",
    "Would you like some cough syrup?",
    "Would you like to play chess?",
    "Would you like a sandwich?",
    "Ты только что закончил картину и с гордостью показываешь её соседу по комнате.",
    "Ти щойно закінчив картину й гордо показуєш її сусіду по кімнаті.",
    "Dopiero co skończyłeś malować obraz i dumnie pokazujesz go współlokatorowi."
  ],
  [
    "You are traveling by train. The conductor walks through the carriage checking tickets.",
    "Would you like something to eat from the trolley?",
    "Would you like to drive the train?",
    "Would you like a bicycle?",
    "Would you like to get off at the next station?",
    "Ты едешь в поезде. Кондуктор проходит по вагону и проверяет билеты.",
    "Ти їдеш у потязі. Кондуктор проходить вагоном і перевіряє квитки.",
    "Podróżujesz pociągiem. Konduktor przechodzi przez wagon i sprawdza bilety."
  ],
  [
    "Your younger brother is playing a nice melody on the guitar in the living room.",
    "Would you like to sing along?",
    "Would you like some carrots?",
    "Would you like to iron clothes?",
    "Would you like a motorcycle?",
    "Твой младший брат играет красивую мелодию на гитаре в гостиной.",
    "Твій молодший брат грає красиву мелодію на гітарі у вітальні.",
    "Twój młodszy brat gra ładną melodię na gitarze w salonie."
  ],
  [
    "You are at the dentist waiting for your appointment. The assistant calls your name.",
    "Would you like to come in now?",
    "Would you like a tattoo?",
    "Would you like to run a marathon?",
    "Would you like some cake?",
    "Ты в стоматологической клинике ждёшь приёма. Ассистент зовёт твоё имя.",
    "Ти в стоматологічній клініці чекаєш прийому. Асистент кличе твоє ім'я.",
    "Jesteś u dentysty i czekasz na wizytę. Asystentka wywołuje Twoje imię."
  ],
  [
    "The waiter brings your main course and places it in front of you.",
    "Would you like some pepper or salt?",
    "Would you like to buy stocks?",
    "Would you like a puppy?",
    "Would you like to do laundry?",
    "Официант приносит твоё основное блюдо и ставит перед тобой.",
    "Офіціант приносить твою основну страву й ставить перед тобою.",
    "Kelner przynosi Twoje danie główne i stawia je przed Tobą."
  ],
  [
    "You are at home alone and feel a bit bored in the evening.",
    "Would you like to watch a movie together?",
    "Would you like to mow the lawn?",
    "Would you like some broccoli?",
    "Would you like to study accounting?",
    "Ты дома один и немного скучаешь вечером.",
    "Ти вдома один і трохи нудьгуєш увечері.",
    "Jesteś sam w domu i trochę się nudzisz wieczorem."
  ],
  [
    "Your neighbor is moving a heavy box and looks like he needs help.",
    "Would you like some help with that box?",
    "Would you like a helicopter ride?",
    "Would you like to learn ballet?",
    "Would you like some chocolate?",
    "Твой сосед пытается поднять тяжёлую коробку и выглядит так, будто ему нужна помощь.",
    "Твій сусід намагається підняти важку коробку й виглядає так, ніби йому потрібна допомога.",
    "Twój sąsiad próbuje podnieść ciężkie pudło i wygląda, jakby potrzebował pomocy."
  ],
  [
    "You are in a bookstore and cannot decide which novel to buy.",
    "Would you like a recommendation?",
    "Would you like to go bungee jumping?",
    "Would you like some glue?",
    "Would you like to repair a car?",
    "Ты в книжном магазине и не можешь решить, какой роман купить.",
    "Ти в книгарні й не можеш вирішити, який роман купити.",
    "Jesteś w księgarni i nie możesz się zdecydować, którą powieść kupić."
  ],
  [
    "It is late at night and you are still working on your laptop.",
    "Would you like some coffee to stay awake?",
    "Would you like to go swimming now?",
    "Would you like a pillow?",
    "Would you like to play soccer?",
    "Поздно ночью, а ты всё ещё работаешь за ноутбуком.",
    "Пізно вночі, а ти все ще працюєш за ноутбуком.",
    "Jest późna noc, a Ty wciąż pracujesz na laptopie."
  ],
  [
    "You are waiting for the bus on a cold morning and your hands are freezing.",
    "Would you like my gloves?",
    "Would you like a surfboard?",
    "Would you like some ice?",
    "Would you like to go to the desert?",
    "Ты ждёшь автобус на холодном утре, и руки замерзают.",
    "Ти чекаєш автобус холодним ранком, і руки замерзають.",
    "Czekasz na autobus w zimny poranek i ręce Ci zamarzają."
  ],
  [
    "Your teacher finishes explaining a difficult topic and looks at the class.",
    "Would you like me to explain it again?",
    "Would you like to become a pilot?",
    "Would you like some popcorn?",
    "Would you like to skip class?",
    "Твой учитель закончил объяснять сложную тему и смотрит на класс.",
    "Твій учитель закінчив пояснювати складну тему й дивиться на клас.",
    "Twój nauczyciel skończył wyjaśniać trudny temat i patrzy na klasę."
  ],
  [
    "You are at a family dinner and everyone has almost finished eating.",
    "Would you like some dessert?",
    "Would you like to do push-ups?",
    "Would you like a new passport?",
    "Would you like to clean windows?",
    "Ты на семейном ужине, и почти все уже поели.",
    "Ти на сімейній вечері, і майже всі вже поїли.",
    "Jesteś na rodzinnym obiedzie i prawie wszyscy już zjedli."
  ],
  [
    "A street musician is playing beautiful violin music nearby.",
    "Would you like to stay and listen for a while?",
    "Would you like some nails?",
    "Would you like to fix a bike?",
    "Would you like a hammer?",
    "Уличный музыкант играет красивую скрипичную музыку неподалёку.",
    "Вуличний музикант грає красиву скрипкову музику неподалік.",
    "Uliczny muzyk gra piękną muzykę skrzypcową w pobliżu."
  ],
  [
    "You are in a hotel room after a long trip and feel very tired.",
    "Would you like an extra pillow?",
    "Would you like to climb a mountain?",
    "Would you like some energy drink?",
    "Would you like to go jogging?",
    "Ты в номере отеля после долгой поездки и очень устал.",
    "Ти в номері готелю після довгої поїздки й дуже втомився.",
    "Jesteś w pokoju hotelowym po długiej podróży i jesteś bardzo zmęczony."
  ],
  [
    "Your friend shows you photos from his recent trip to the mountains.",
    "Would you like to see more photos?",
    "Would you like some cement?",
    "Would you like to build a house?",
    "Would you like to paint fences?",
    "Твой друг показывает тебе фото из недавней поездки в горы.",
    "Твій друг показує тобі фото з недавньої поїздки в гори.",
    "Twój przyjaciel pokazuje Ci zdjęcia z niedawnej wycieczki w góry."
  ],
  [
    "The barista at the coffee shop asks what you want after you reach the counter.",
    "Would you like your coffee with milk?",
    "Would you like to buy land?",
    "Would you like some hay?",
    "Would you like to ride a horse?",
    "Бариста в кофейне спрашивает, что ты хочешь, когда ты подходишь к стойке.",
    "Бариста в кав'ярні запитує, що ти хочеш, коли ти підходиш до стійки.",
    "Barista w kawiarni pyta, czego chcesz, gdy dochodzisz do lady."
  ],
  [
    "You are at the zoo looking at the penguins swimming happily.",
    "Would you like to buy some fish to feed them?",
    "Would you like to become invisible?",
    "Would you like some magic potion?",
    "Would you like to fly like a bird?",
    "Ты в зоопарке смотришь, как пингвины весело плавают.",
    "Ти в зоопарку дивишся, як пінгвіни весело плавають.",
    "Jesteś w zoo i patrzysz, jak pingwiny radośnie pływają."
  ],
  [
    "Your phone battery is almost dead and you are far from home.",
    "Would you like to borrow my charger?",
    "Would you like to swim across the river?",
    "Would you like some fireworks?",
    "Would you like to light a bonfire?",
    "У твоего телефона почти села батарея, и ты далеко от дома.",
    "У твого телефону майже сів акумулятор, і ти далеко від дому.",
    "Twojemu telefonowi prawie padła bateria, a jesteś daleko od domu."
  ],
  [
    "You are trying on shoes in a shop and the seller is waiting nearby.",
    "Would you like a different size?",
    "Would you like to join the army?",
    "Would you like some rope?",
    "Would you like to climb trees?",
    "Ты примеряешь обувь в магазине, а продавец ждёт рядом.",
    "Ти приміряєш взуття в магазині, а продавець чекає поруч.",
    "Przymierzasz buty w sklepie, a sprzedawca czeka obok."
  ],
  [
    "It starts to get dark and you are still walking in the forest.",
    "Would you like to use my flashlight?",
    "Would you like some candy?",
    "Would you like to play hide and seek?",
    "Would you like a kite?",
    "Начинает темнеть, а ты всё ещё идёшь по лесу.",
    "Починає темніти, а ти все ще йдеш лісом.",
    "Zaczyna się ściemniać, a Ty wciąż idziesz przez las."
  ],
  [
    "Your little cousin is afraid of the dark during a power outage.",
    "Would you like me to tell you a story?",
    "Would you like to solve a puzzle?",
    "Would you like some broccoli soup?",
    "Would you like to do homework?",
    "Твой маленький двоюродный брат боится темноты во время отключения света.",
    "Твій маленький двоюрідний брат боїться темряви під час відключення світла.",
    "Twój mały kuzyn boi się ciemności podczas przerwy w prądzie."
  ],
  [
    "You are at a concert and the band starts playing your favorite song.",
    "Would you like to dance?",
    "Would you like some nails and screws?",
    "Would you like to fix furniture?",
    "Would you like a drill?",
    "Ты на концерте, и группа начинает играть твою любимую песню.",
    "Ти на концерті, і група починає грати твою улюблену пісню.",
    "Jesteś na koncercie, a zespół zaczyna grać Twoją ulubioną piosenkę."
  ],
  [
    "The rain suddenly stops and a beautiful rainbow appears in the sky.",
    "Would you like to take a photo of it?",
    "Would you like some gasoline?",
    "Would you like to drive a truck?",
    "Would you like a tractor?",
    "Дождь внезапно прекращается, и в небе появляется красивая радуга.",
    "Дощ раптово припиняється, і в небі з'являється гарна веселка.",
    "Deszcz nagle ustaje i na niebie pojawia się piękna tęcza."
  ],
  [
    "You are waiting in a long queue at the post office.",
    "Would you like me to keep your place while you sit down?",
    "Would you like to become a king?",
    "Would you like some treasure?",
    "Would you like a crown?",
    "Ты стоишь в длинной очереди на почте.",
    "Ти стоїш у довгій черзі на пошті.",
    "Stoisz w długiej kolejce na poczcie."
  ],
  [
    "Your cat jumps on the table and looks at your plate curiously.",
    "Would you like a little piece of chicken?",
    "Would you like to go diving?",
    "Would you like some oxygen tank?",
    "Would you like flippers?",
    "Твой кот запрыгивает на стол и с любопытством смотрит на твою тарелку.",
    "Твій кіт стрибає на стіл і з цікавістю дивиться на твою тарілку.",
    "Twój kot wskakuje na stół i ciekawie patrzy na Twój talerz."
  ],
  [
    "You are at an amusement park and see a big roller coaster.",
    "Would you like to ride it with me?",
    "Would you like some knitting needles?",
    "Would you like to sew a dress?",
    "Would you like yarn?",
    "Ты в парке аттракционов и видишь большой американские горки.",
    "Ти в парку атракціонів і бачиш великі американські гірки.",
    "Jesteś w parku rozrywki i widzisz dużą kolejkę górską."
  ],
  [
    "The Wi-Fi at the café suddenly stops working.",
    "Would you like me to share my hotspot?",
    "Would you like some paint?",
    "Would you like to draw graffiti?",
    "Would you like a spray can?",
    "Wi-Fi в кафе внезапно перестаёт работать.",
    "Wi-Fi в кафе раптово перестає працювати.",
    "Wi-Fi w kawiarni nagle przestaje działać."
  ],
  [
    "You are looking at old family photos together with your parents.",
    "Would you like to hear the story behind this picture?",
    "Would you like some cement mixer?",
    "Would you like to build a wall?",
    "Would you like bricks?",
    "Ты вместе с родителями рассматриваешь старые семейные фотографии.",
    "Ти разом з батьками розглядаєш старі сімейні фотографії.",
    "Oglądasz stare rodzinne zdjęcia razem z rodzicami."
  ],
  [
    "A street vendor is selling fresh hot waffles with many toppings.",
    "Would you like one with chocolate and bananas?",
    "Would you like some scuba gear?",
    "Would you like to explore a shipwreck?",
    "Would you like an underwater camera?",
    "Уличный торговец продаёт свежие горячие вафли с разными топпингами.",
    "Вуличний торговець продає свіжі гарячі вафлі з різними топінгами.",
    "Uliczny sprzedawca oferuje świeże gorące gofry z różnymi dodatkami."
  ],

];


// Если это свойство есть, то оно попадает в заголовок теста
unit34.nameLeson = "Would you like ...";

//--созданными предложениями.
unit34.lengthTrue = 5;

// console.log(unit33.length);

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit34.push(...extendForArray(unit34));

unit34.push(...extendForArray2(unit34));

export { unit34 };


