import { extendForArray } from '../extendForArray.js';
import { extendForArray2 } from '../extendForArray2.js';

const unit33 = [

["I … clean my room every Saturday.", "have to", "had to", "will have to", "would have to", "Я должен убирать свою комнату каждую субботу.", "Я мушу прибирати свою кімнату щосуботи.", "Muszę sprzątać swój pokój w każdą sobotę."],
  ["He … wear glasses all the time.", "has to", "had to", "will have to", "would have to", "Он должен носить очки всё время.", "Він мусить носити окуляри весь час.", "On musi nosić okulary przez cały czas."],
  ["We … get up early tomorrow.", "will have to", "have to", "had to", "would have to", "Нам придётся встать рано завтра.", "Нам доведеться встати рано завтра.", "Będziemy musieli wstać wcześnie jutro."],
  ["You … pay for this course in advance.", "have to", "had to", "will have to", "would have to", "Тебе нужно оплатить этот курс заранее.", "Тобі треба сплатити цей курс заздалегідь.", "Musisz zapłacić za ten kurs z góry."],
  ["They … wait for the bus for 40 minutes yesterday.", "had to", "have to", "will have to", "would have to", "Им пришлось ждать автобус 40 минут вчера.", "Їм довелося чекати автобус 40 хвилин вчора.", "Musieli czekać na autobus 40 minut wczoraj."],
  ["She … study much harder if she wants to pass.", "will have to", "has to", "had to", "would have to", "Ей придётся учиться намного усерднее, если она хочет сдать.", "Вона муситиме вчитися набагато старанніше, якщо хоче скласти.", "Będzie musiała uczyć się znacznie ciężej, jeśli chce zdać."],
  ["We … buy new tires – these are completely worn.", "have to", "had to", "will have to", "would have to", "Нам нужно купить новые шины – эти полностью изношены.", "Нам треба купити нові шини – ці повністю зношені.", "Musimy kupić nowe opony – te są zupełnie zużyte."],
  ["You … come to work on Sunday this time.", "don't have to", "didn't have to", "won't have to", "wouldn't have to", "Тебе не нужно приходить на работу в это воскресенье.", "Тобі не треба приходити на роботу в цю неділю.", "Nie musisz przychodzić do pracy w tę niedzielę."],
  ["Children … wear helmets when riding bikes here.", "have to", "had to", "will have to", "would have to", "Дети должны носить шлемы, когда катаются на велосипедах здесь.", "Діти мусять носити шоломи, коли катаються на велосипедах тут.", "Dzieci muszą nosić kaski, kiedy jeżdżą na rowerach tutaj."],
  ["I … cook dinner tonight – we ordered pizza.", "don't have to", "didn't have to", "won't have to", "wouldn't have to", "Мне не нужно готовить ужин сегодня вечером – мы заказали пиццу.", "Мені не треба готувати вечерю сьогодні ввечері – ми замовили піцу.", "Nie muszę gotować kolacji dzisiaj wieczorem – zamówiliśmy pizzę."],
  ["He … apologize – it wasn't his fault.", "doesn't have to", "didn't have to", "won't have to", "wouldn't have to", "Ему не нужно извиняться – это не его вина.", "Йому не треба вибачатися – це не його провина.", "On nie musi przepraszać – to nie była jego wina."],
  ["We … leave the house at 6 a.m. tomorrow.", "will have to", "have to", "had to", "would have to", "Нам придётся выйти из дома в 6 утра завтра.", "Нам доведеться вийти з дому о 6-й ранку завтра.", "Będziemy musieli wyjść z domu o 6 rano jutro."],
  ["You … water the flowers every day in summer.", "have to", "had to", "will have to", "would have to", "Тебе нужно поливать цветы каждый день летом.", "Тобі треба поливати квіти щодня влітку.", "Musisz podlewać kwiaty codziennie latem."],
  ["She … take this medicine three times a day.", "has to", "had to", "will have to", "would have to", "Ей нужно принимать это лекарство три раза в день.", "Вона мусить приймати цей ліки тричі на день.", "Musi brać ten lek trzy razy dziennie."],
  ["They … change the plan because of the weather.", "had to", "have to", "will have to", "would have to", "Им пришлось изменить план из-за погоды.", "Їм довелося змінити план через погоду.", "Musieli zmienić plan z powodu pogody."],
  ["I … wear a tie at this job – it's casual.", "don't have to", "didn't have to", "won't have to", "wouldn't have to", "Мне не нужно носить галстук на этой работе – там свободный стиль.", "Мені не треба носити краватку на цій роботі – там вільний стиль.", "Nie muszę nosić krawata w tej pracy – jest casual."],
  ["You … bring your own towel – they provide them.", "don't have to", "didn't have to", "won't have to", "wouldn't have to", "Тебе не нужно приносить своё полотенце – они предоставляют.", "Тобі не треба брати свій рушник – вони надають.", "Nie musisz przynosić własnego ręcznika – oni zapewniają."],
  ["He … finish the project by the end of this week.", "has to", "had to", "will have to", "would have to", "Он должен закончить проект до конца этой недели.", "Він мусить закінчити проєкт до кінця цього тижня.", "On musi skończyć projekt do końca tego tygodnia."],
  ["We … hurry – the shop closes in 10 minutes.", "have to", "had to", "will have to", "would have to", "Нам нужно торопиться – магазин закрывается через 10 минут.", "Нам треба поспішати – магазин зачиняється за 10 хвилин.", "Musimy się spieszyć – sklep zamyka się za 10 minut."],
  ["She … explain everything again tomorrow.", "will have to", "has to", "had to", "would have to", "Ей придётся всё объяснить снова завтра.", "Вона муситиме все пояснити знову завтра.", "Będzie musiała wszystko wyjaśnić jeszcze raz jutro."],
  ["Children under 12 … pay for the ticket.", "don't have to", "didn't have to", "won't have to", "wouldn't have to", "Детям до 12 лет не нужно платить за билет.", "Дітям до 12 років не треба платити за квиток.", "Dzieci poniżej 12 lat nie muszą płacić za bilet."],
  ["I … call him back later – he's busy now.", "don't have to", "didn't have to", "won't have to", "wouldn't have to", "Мне не нужно перезванивать ему позже – он сейчас занят.", "Мені не треба передзвонювати йому пізніше – він зараз зайнятий.", "Nie muszę do niego oddzwaniać później – jest teraz zajęty."],
  ["You … sign this document in two places.", "have to", "had to", "will have to", "would have to", "Тебе нужно подписать этот документ в двух местах.", "Тобі треба підписати цей документ у двох місцях.", "Musisz podpisać ten dokument w dwóch miejscach."],
  ["They … stay in quarantine for 7 days.", "had to", "have to", "will have to", "would have to", "Им пришлось оставаться на карантине 7 дней.", "Їм довелося перебувати на карантині 7 днів.", "Musieli zostać w kwarantannie przez 7 dni."],
  ["We … book tickets in advance for this concert.", "have to", "had to", "will have to", "would have to", "Нам нужно бронировать билеты заранее на этот концерт.", "Нам треба бронювати квитки заздалегідь на цей концерт.", "Musimy rezerwować bilety z wyprzedzeniem na ten koncert."],
  ["He … wear formal clothes to the interview.", "has to", "had to", "will have to", "would have to", "Ему нужно надеть официальную одежду на собеседование.", "Йому треба одягнути офіційний одяг на співбесіду.", "On musi ubrać się formalnie na rozmowę kwalifikacyjną."],
  ["You … worry – everything is under control.", "don't have to", "didn't have to", "won't have to", "wouldn't have to", "Тебе не нужно волноваться – всё под контролем.", "Тобі не треба хвилюватися – все під контролем.", "Nie musisz się martwić – wszystko jest pod kontrolą."],
  ["She … take the exam again next month.", "will have to", "has to", "had to", "would have to", "Ей придётся пересдавать экзамен в следующем месяце.", "Вона муситиме перескладати іспит наступного місяця.", "Będzie musiała ponownie podejść do egzaminu w przyszłym miesiącu."],
  ["We … bring our passports to the airport.", "have to", "had to", "will have to", "would have to", "Нам нужно взять паспорта в аэропорт.", "Нам треба взяти паспорти в аеропорт.", "Musimy zabrać paszporty na lotnisko."],
  ["I … work this weekend – I have time off.", "don't have to", "didn't have to", "won't have to", "wouldn't have to", "Мне не нужно работать на этих выходных – у меня отгул.", "Мені не треба працювати на цих вихідних – у мене відгул.", "Nie muszę pracować w ten weekend – mam wolne."],
  ["They … pay extra for checked luggage.", "have to", "had to", "will have to", "would have to", "Им нужно доплачивать за регистрируемый багаж.", "Їм треба доплачувати за зареєстрований багаж.", "Muszą dopłacić za bagaż rejestrowany."],
  ["You … remember your login details.", "have to", "had to", "will have to", "would have to", "Тебе нужно помнить свои логин и пароль.", "Тобі треба пам'ятати свої логін і пароль.", "Musisz pamiętać swoje dane logowania."],
  ["He … visit his parents more often.", "has to", "had to", "will have to", "would have to", "Ему нужно чаще навещать родителей.", "Йому треба частіше навідувати батьків.", "On powinien / musi częściej odwiedzać rodziców."],
  ["We … wait for the results until next week.", "will have to", "have to", "had to", "would have to", "Нам придётся ждать результатов до следующей недели.", "Нам доведеться чекати результатів до наступного тижня.", "Będziemy musieli czekać na wyniki do przyszłego tygodnia."],
  ["She … wear special shoes in the lab.", "has to", "had to", "will have to", "would have to", "Ей нужно носить специальную обувь в лаборатории.", "Вона мусить носити спеціальне взуття в лабораторії.", "Musi nosić specjalne buty w laboratorium."],
  ["They … leave the building during the fire drill.", "had to", "have to", "will have to", "would have to", "Им пришлось покинуть здание во время пожарной тренировки.", "Їм довелося покинути будівлю під час пожежного тренування.", "Musieli opuścić budynek podczas próbnego alarmu pożarowego."],
  ["I … buy new headphones – the old ones broke.", "have to", "had to", "will have to", "would have to", "Мне нужно купить новые наушники – старые сломались.", "Мені треба купити нові навушники – старі зламалися.", "Muszę kupić nowe słuchawki – stare się zepsuły."],
  ["We … wear masks inside the hospital.", "have to", "had to", "will have to", "would have to", "Нам нужно носить маски внутри больницы.", "Нам треба носити маски всередині лікарні.", "Musimy nosić maseczki wewnątrz szpitala."],
  ["You … be here at exactly 9 o'clock.", "have to", "had to", "will have to", "would have to", "Тебе нужно быть здесь ровно в 9 часов.", "Тобі треба бути тут рівно о 9-й годині.", "Musisz być tutaj dokładnie o 9:00."],
  ["She … translate the whole text by tomorrow.", "will have to", "has to", "had to", "would have to", "Ей придётся перевести весь текст к завтрашнему дню.", "Вона муситиме перекласти весь текст до завтра.", "Będzie musiała przetłumaczyć cały tekst do jutra."],
  ["Children … go to bed before 10 p.m.", "have to", "had to", "will have to", "would have to", "Дети должны ложиться спать до 10 вечера.", "Діти мусять лягати спати до 10-ї вечора.", "Dzieci muszą iść spać przed 22:00."],
  ["I … answer all these emails today.", "have to", "had to", "will have to", "would have to", "Мне нужно ответить на все эти письма сегодня.", "Мені треба відповісти на всі ці листи сьогодні.", "Muszę odpowiedzieć na wszystkie te maile dzisiaj."],
  ["He … drive more carefully in this weather.", "has to", "had to", "will have to", "would have to", "Ему нужно водить осторожнее в такую погоду.", "Йому треба водити обережніше в таку погоду.", "On musi jeździć ostrożniej w taką pogodę."],
  ["You … pay by card – cash is not accepted.", "have to", "had to", "will have to", "would have to", "Тебе нужно платить картой – наличные не принимают.", "Тобі треба платити карткою – готівку не приймають.", "Musisz płacić kartą – gotówka nie jest akceptowana."],
  ["We … cancel the trip because of the storm.", "had to", "have to", "will have to", "would have to", "Нам пришлось отменить поездку из-за шторма.", "Нам довелося скасувати поїздку через шторм.", "Musieliśmy odwołać wycieczkę z powodu burzy."],
  ["She … choose between two very good offers.", "has to", "had to", "will have to", "would have to", "Ей нужно выбрать между двумя очень хорошими предложениями.", "Вона мусить вибрати між двома дуже хорошими пропозиціями.", "Ona musi wybrać pomiędzy dwiema bardzo dobrymi ofertami."],
  ["I … wake up early every day this month.", "have to", "had to", "will have to", "would have to", "Мне нужно вставать рано каждый день в этом месяце.", "Мені треба вставати рано щодня цього місяця.", "Muszę wstawać wcześnie codziennie w tym miesiącu."],
 
["Why are you leaving so early today?", "I have to catch the morning train.", "I had to catch the morning train yesterday.", "I will have to catch the morning train tomorrow.", "I wouldn't have to catch the morning train if I worked from home.", "Почему ты сегодня так рано уходишь?", "Чому ти сьогодні так рано йдеш?", "Dlaczego dzisiaj wychodzisz tak wcześnie?"],
  ["Why do you look so tired?", "I have to wake up at 5 every day this week.", "I had to wake up at 5 every day last week.", "I will have to wake up at 5 next month.", "I would have to wake up at 5 if I lived in another city.", "Почему ты выглядишь таким уставшим?", "Чому ти виглядаєш таким втомленим?", "Dlaczego wyglądasz na takiego zmęczonego?"],
  ["Why can't you stay longer?", "I have to pick up my children from school.", "I had to pick up my children from school yesterday.", "I will have to pick up my children from school tomorrow.", "I wouldn't have to pick up my children if they were older.", "Почему ты не можешь остаться подольше?", "Чому ти не можеш залишитися довше?", "Dlaczego nie możesz zostać dłużej?"],
  ["Why are you wearing a suit today?", "I have to go to an important meeting.", "I had to go to an important meeting last Friday.", "I will have to go to an important meeting next week.", "I would have to go to an important meeting if I got promoted.", "Почему ты сегодня в костюме?", "Чому ти сьогодні в костюмі?", "Dlaczego dzisiaj masz na sobie garnitur?"],
  ["Why don't you join us for dinner?", "I don't have to cook tonight – my wife is preparing everything.", "I didn't have to cook last night.", "I won't have to cook next weekend.", "I wouldn't have to cook if I lived alone.", "Почему ты не присоединишься к нам на ужин?", "Чому ти не приєднаєшся до нас на вечерю?", "Dlaczego nie dołączysz do nas na kolację?"],
  ["Why are you buying so much medicine?", "I have to take antibiotics for 10 days.", "I had to take antibiotics last month.", "I will have to take antibiotics after the operation.", "I would have to take antibiotics if I got sick again.", "Почему ты покупаешь столько лекарств?", "Чому ти купуєш стільки ліків?", "Dlaczego kupujesz tyle leków?"],
  ["Why are you studying on Saturday?", "I have to prepare for Monday's exam.", "I had to prepare for last week's exam.", "I will have to prepare for next month's exam.", "I would have to prepare if I studied medicine.", "Почему ты учишься в субботу?", "Чому ти вчишся в суботу?", "Dlaczego uczysz się w sobotę?"],
  ["Why can't you lend me your car?", "I have to drive to my parents this evening.", "I had to drive to my parents last weekend.", "I will have to drive to my parents tomorrow.", "I wouldn't have to drive if they lived closer.", "Почему ты не можешь одолжить мне машину?", "Чому ти не можеш позичити мені машину?", "Dlaczego nie możesz mi pożyczyć samochodu?"],
  ["Why are you in such a bad mood?", "I have to work night shift again.", "I had to work night shift last month.", "I will have to work night shift next year.", "I wouldn't have to work night shift if I changed jobs.", "Почему у тебя такое плохое настроение?", "Чому в тебе такий поганий настрій?", "Dlaczego jesteś w takim złym humorze?"],
  ["Why don't you come to the party?", "I don't have to work tomorrow, but I'm really tired.", "I didn't have to work last weekend.", "I won't have to work next Friday.", "I wouldn't have to work if it was a holiday.", "Почему ты не придёшь на вечеринку?", "Чому ти не прийдеш на вечірку?", "Dlaczego nie przyjdziesz na imprezę?"],
  ["Why are you taking a taxi?", "I have to be at the airport in 40 minutes.", "I had to be at the airport yesterday morning.", "I will have to be at the airport next Tuesday.", "I would have to be at the airport earlier if my flight was at 6.", "Почему ты берёшь такси?", "Чому ти береш таксі?", "Dlaczego bierzesz taksówkę?"],
  ["Why are you wearing winter boots in September?", "I have to walk through a construction site.", "I had to walk through a construction site last winter.", "I will have to walk through a construction site next month.", "I wouldn't have to wear them if the weather was better.", "Почему ты в зимних ботинках в сентябре?", "Чому ти в зимових черевиках у вересні?", "Dlaczego masz zimowe buty we wrześniu?"],
  ["Why can't you drink alcohol tonight?", "I have to drive home after the meeting.", "I had to drive home yesterday evening.", "I will have to drive home tomorrow night.", "I wouldn't have to drive if I stayed at a hotel.", "Почему ты сегодня не можешь пить алкоголь?", "Чому ти сьогодні не можеш пити алкоголь?", "Dlaczego dzisiaj nie możesz pić alkoholu?"],
  ["Why are you checking your phone all the time?", "I have to wait for an important message from my boss.", "I had to wait for an important message last week.", "I will have to wait for an important message tomorrow.", "I wouldn't have to wait if he answered faster.", "Почему ты постоянно проверяешь телефон?", "Чому ти постійно перевіряєш телефон?", "Dlaczego ciągle sprawdzasz telefon?"],
  ["Why don't you want to go to the cinema?", "I don't have to see that movie – I've already watched it.", "I didn't have to see that movie last year.", "I won't have to see that movie next month.", "I wouldn't have to see it if I had Netflix.", "Почему ты не хочешь идти в кино?", "Чому ти не хочеш іти в кіно?", "Dlaczego nie chcesz iść do kina?"],
  ["Why are you buying so many groceries?", "I have to cook for 12 people this weekend.", "I had to cook for 12 people last Christmas.", "I will have to cook for 12 people next holiday.", "I would have to cook for 12 if it was my birthday.", "Почему ты покупаешь столько продуктов?", "Чому ти купуєш стільки продуктів?", "Dlaczego kupujesz tyle zakupów?"],
  ["Why are you wearing a helmet indoors?", "I have to test it before the bike ride.", "I had to test it before yesterday's ride.", "I will have to test it before tomorrow's trip.", "I wouldn't have to test it if it was new.", "Почему ты в шлеме в помещении?", "Чому ти в шоломі в приміщенні?", "Dlaczego masz kask w środku?"],
  ["Why can't you help me right now?", "I have to finish this report by 5 p.m.", "I had to finish this report yesterday.", "I will have to finish this report tomorrow.", "I wouldn't have to finish it if the deadline was later.", "Почему ты не можешь помочь мне прямо сейчас?", "Чому ти не можеш допомогти мені прямо зараз?", "Dlaczego nie możesz mi teraz pomóc?"],
  ["Why are you so nervous?", "I have to give a presentation in front of 200 people.", "I had to give a presentation last month.", "I will have to give a presentation next quarter.", "I would have to give a presentation if I worked in sales.", "Почему ты такой нервный?", "Чому ти такий нервовий?", "Dlaczego jesteś taki zdenerwowany?"],
  ["Why don't you turn on the heating?", "I don't have to – it's still quite warm.", "I didn't have to turn it on last October.", "I won't have to turn it on until November.", "I wouldn't have to turn it on if I had better windows.", "Почему ты не включаешь отопление?", "Чому ти не вмикаєш опалення?", "Dlaczego nie włączasz ogrzewania?"],

["Why are you taking the bus instead of driving?", "I have to leave my car at the service station today.", "I had to leave my car at the service station last week.", "I will have to leave my car at the service station next month.", "I wouldn't have to leave the car if it wasn't making strange noises.", "Почему ты едешь на автобусе вместо машины?", "Чому ти їдеш автобусом замість машини?", "Dlaczego jedziesz autobusem zamiast samochodem?"],
  ["Why are you so quiet today?", "I have to concentrate on this difficult task.", "I had to concentrate on a difficult task yesterday.", "I will have to concentrate on a difficult task tomorrow.", "I wouldn't have to concentrate so hard if it was easier.", "Почему ты сегодня такой тихий?", "Чому ти сьогодні такий мовчазний?", "Dlaczego jesteś dzisiaj taki cichy?"],
  ["Why don't you eat dessert?", "I don't have to follow any diet – I just don't feel like it.", "I didn't have to follow a diet last summer.", "I won't have to follow a diet after the holidays.", "I wouldn't have to refuse dessert if I wasn't full.", "Почему ты не ешь десерт?", "Чому ти не їси десерт?", "Dlaczego nie jesz deseru?"],
  ["Why are you packing so early?", "I have to catch a very early flight tomorrow.", "I had to catch an early flight last month.", "I will have to catch an early flight next year.", "I wouldn't have to pack early if the flight was in the afternoon.", "Почему ты так рано собираешь вещи?", "Чому ти так рано пакуєш речі?", "Dlaczego pakujesz się tak wcześnie?"],
  ["Why can't you go out tonight?", "I have to study for tomorrow's test.", "I had to study for yesterday's test.", "I will have to study for next week's test.", "I wouldn't have to study if the test was cancelled.", "Почему ты не можешь выйти сегодня вечером?", "Чому ти не можеш вийти сьогодні ввечері?", "Dlaczego nie możesz dzisiaj wieczorem wyjść?"],
  ["Why are you wearing sunglasses inside?", "I have to protect my eyes after the procedure.", "I had to protect my eyes after the procedure last year.", "I will have to protect my eyes after the next procedure.", "I wouldn't have to wear them if my eyes were fine.", "Почему ты в солнцезащитных очках в помещении?", "Чому ти в сонцезахисних окулярах у приміщенні?", "Dlaczego masz okulary przeciwsłoneczne w środku?"],
  ["Why are you buying winter clothes in spring?", "I have to prepare for a trip to the mountains next month.", "I had to prepare for a trip to the mountains last winter.", "I will have to prepare for a trip to the mountains next winter.", "I wouldn't have to buy them if I wasn't going skiing.", "Почему ты покупаешь зимнюю одежду весной?", "Чому ти купуєш зимовий одяг навесні?", "Dlaczego kupujesz zimowe ubrania wiosną?"],
  ["Why don't you answer your phone?", "I have to be in a meeting right now.", "I had to be in a meeting yesterday afternoon.", "I will have to be in a meeting tomorrow morning.", "I wouldn't have to ignore calls if I wasn't busy.", "Почему ты не отвечаешь на телефон?", "Чому ти не відповідаєш на телефон?", "Dlaczego nie odbierasz telefonu?"],
  ["Why are you drinking so much coffee today?", "I have to stay awake for the night shift.", "I had to stay awake for the night shift last week.", "I will have to stay awake for the night shift next Friday.", "I wouldn't have to drink coffee if I could sleep.", "Почему ты сегодня пьёшь столько кофе?", "Чому ти сьогодні п'єш стільки кави?", "Dlaczego dzisiaj pijesz tyle kawy?"],
  ["Why can't you lend me some money?", "I have to pay my rent tomorrow.", "I had to pay my rent yesterday.", "I will have to pay my rent next week.", "I wouldn't have to pay rent if I owned the apartment.", "Почему ты не можешь одолжить мне денег?", "Чому ти не можеш позичити мені грошей?", "Dlaczego nie możesz mi pożyczyć pieniędzy?"],
  ["Why are you walking instead of taking the tram?", "I have to get some fresh air after sitting all day.", "I had to get fresh air after work yesterday.", "I will have to get fresh air after tomorrow's meeting.", "I wouldn't have to walk if I wasn't so tired of sitting.", "Почему ты идёшь пешком вместо трамвая?", "Чому ти йдеш пішки замість трамвая?", "Dlaczego idziesz pieszo zamiast tramwajem?"],
  ["Why are you so happy today?", "I don't have to work this weekend!", "I didn't have to work last weekend.", "I won't have to work next weekend.", "I wouldn't have to work weekends if my schedule was different.", "Почему ты сегодня такой счастливый?", "Чому ти сьогодні такий щасливий?", "Dlaczego jesteś dzisiaj taki szczęśliwy?"],
  ["Why are you taking so many photos?", "I have to document the whole renovation process.", "I had to document the renovation last year.", "I will have to document the next renovation phase.", "I wouldn't have to take photos if the builder did it himself.", "Почему ты делаешь столько фотографий?", "Чому ти робиш стільки фотографій?", "Dlaczego robisz tyle zdjęć?"],
  ["Why can't you eat spicy food anymore?", "I have to follow doctor's orders after the stomach issues.", "I had to follow doctor's orders last year.", "I will have to follow doctor's orders for a few more weeks.", "I wouldn't have to avoid spicy food if my stomach was fine.", "Почему ты больше не можешь есть острое?", "Чому ти більше не можеш їсти гостре?", "Dlaczego nie możesz już jeść pikantnego jedzenia?"],
  ["Why are you checking the weather app every 5 minutes?", "I have to decide whether to cancel the picnic.", "I had to decide about the picnic last summer.", "I will have to decide about the barbecue tomorrow.", "I wouldn't have to check if the weather was stable.", "Почему ты каждые 5 минут проверяешь погоду?", "Чому ти кожні 5 хвилин перевіряєш погоду?", "Dlaczego co 5 minut sprawdzasz pogodę?"],
  ["Why don't you want to watch the movie?", "I don't have to watch it – I already know the ending.", "I didn't have to watch it last time.", "I won't have to watch it next time.", "I wouldn't have to skip it if it was more interesting.", "Почему ты не хочешь смотреть фильм?", "Чому ти не хочеш дивитися фільм?", "Dlaczego nie chcesz oglądać filmu?"],
  ["Why are you buying flowers?", "I have to apologize to my wife after the argument.", "I had to apologize to my wife last month.", "I will have to apologize to my wife if I forget again.", "I wouldn't have to buy flowers if we never argued.", "Почему ты покупаешь цветы?", "Чому ти купуєш квіти?", "Dlaczego kupujesz kwiaty?"],
  ["Why are you wearing two jackets?", "I have to go outside and it's freezing.", "I had to go outside in freezing weather yesterday.", "I will have to go outside tomorrow morning.", "I wouldn't have to wear two if it was warmer.", "Почему ты в двух куртках?", "Чому ти в двох куртках?", "Dlaczego masz na sobie dwie kurtki?"],
  ["Why can't you come to the gym with me?", "I have to finish this project before deadline.", "I had to finish a project last week.", "I will have to finish another project next week.", "I wouldn't have to work late if the deadline was later.", "Почему ты не можешь пойти со мной в спортзал?", "Чому ти не можеш піти зі мною в спортзал?", "Dlaczego nie możesz iść ze mną na siłownię?"],
  ["Why are you smiling so much?", "I don't have to go to work tomorrow – it's a holiday!", "I didn't have to work on last holiday.", "I won't have to work on the next holiday.", "I wouldn't have to smile if it was a regular Monday.", "Почему ты так много улыбаешься?", "Чому ти так багато посміхаєшся?", "Dlaczego tak się uśmiechasz?"],

["She has to attend a family gathering this weekend.", "When is the gathering?", "Why last month?", "Where never?", "How yesterday?", "Ей нужно присутствовать на семейном собрании на этих выходных.", "Вона мусить бути присутньою на сімейному зібранні на цих вихідних.", "Musi uczestniczyć w rodzinnym spotkaniu w ten weekend."],
  ["We don't have to wear formal clothes at our new office.", "Why is the dress code relaxed?", "When was it strict?", "How tomorrow?", "Where yesterday?", "Нам не нужно носить официальную одежду в новом офисе.", "Нам не треба носити офіційний одяг у новому офісі.", "Nie musimy nosić formalnych ubrań w naszym nowym biurze."],
  ["He has to renew his driver's license next month.", "When does he need to do it?", "Why last year?", "How never?", "Where yesterday?", "Ему нужно обновить водительские права в следующем месяце.", "Йому треба оновити водійське посвідчення наступного місяця.", "Musi odnowić prawo jazdy w przyszłym miesiącu."],
  ["They have to change trains twice to get to Gdańsk.", "How many times do they change?", "When did they change once?", "Why never?", "Where tomorrow?", "Им нужно два раза пересаживаться, чтобы добраться до Гданьска.", "Їм треба двічі пересісти, щоб дістатися до Гданська.", "Muszą dwa razy przesiąść się, żeby dojechać do Gdańska."],
  ["I don't have to water the plants this week.", "Why not this week?", "When last summer?", "How always?", "Where yesterday?", "Мне не нужно поливать растения на этой неделе.", "Мені не треба поливати рослини цього тижня.", "Nie muszę podlewać roślin w tym tygodniu."],
  ["The children have to finish their homework before dinner.", "When must they finish it?", "Why after dinner?", "How never?", "Where tomorrow morning?", "Дети должны закончить домашку до ужина.", "Діти мусять закінчити домашнє завдання до вечері.", "Dzieci muszą skończyć lekcje przed kolacją."],
  ["She doesn't have to call her boss on weekends anymore.", "Why no more on weekends?", "When every Saturday?", "How yesterday?", "Where never?", "Ей больше не нужно звонить начальнику по выходным.", "Вона більше не мусить дзвонити шефу на вихідних.", "Nie musi już dzwonić do szefa w weekendy."],
  ["We have to book the restaurant table at least three days ahead.", "How many days in advance?", "When one day?", "Why never?", "Where last week?", "Нам нужно бронировать столик в ресторане минимум за три дня.", "Нам треба бронювати столик у ресторані мінімум за три дні.", "Musimy rezerwować stolik w restauracji co najmniej trzy dni wcześniej."],
  ["He has to take his dog to the vet every six months.", "How often does he have to go?", "When once a year?", "Why never?", "Where last month?", "Ему нужно водить собаку к ветеринару каждые полгода.", "Йому треба водити собаку до ветеринара кожні півроку.", "Musi zabierać psa do weterynarza co sześć miesięcy."],
  ["You don't have to bring your own laptop to the training.", "Why isn't it necessary?", "When was it required?", "How always?", "Where yesterday?", "Тебе не нужно приносить свой ноутбук на тренинг.", "Тобі не треба брати свій ноутбук на тренінг.", "Nie musisz przynosić własnego laptopa na szkolenie."],
  ["They have to submit the report by midnight tonight.", "When is the deadline?", "Why next week?", "How never?", "Where yesterday?", "Им нужно сдать отчёт до полуночи сегодня.", "Їм треба здати звіт до півночі сьогодні.", "Muszą złożyć raport do północy dzisiaj."],
  ["I have to charge my phone before leaving the house.", "Why before leaving?", "When after coming back?", "How never?", "Where last night?", "Мне нужно зарядить телефон перед выходом из дома.", "Мені треба зарядити телефон перед виходом з дому.", "Muszę naładować telefon przed wyjściem z domu."],
  ["She has to learn 50 new words every day for the exam.", "How many words daily?", "When ten words?", "Why never?", "Where last year?", "Ей нужно учить 50 новых слов каждый день к экзамену.", "Вона мусить вчити 50 нових слів щодня до іспиту.", "Musi uczyć się 50 nowych słów codziennie do egzaminu."],
  ["We don't have to pay for parking here on Sundays.", "When is parking free?", "Why every day?", "How yesterday?", "Where never?", "Нам не нужно платить за парковку здесь по воскресеньям.", "Нам не треба платити за парковку тут по неділях.", "Nie musimy płacić za parking tutaj w niedziele."],
  ["He has to wear protective glasses in the workshop.", "Where must he wear them?", "When outside?", "Why never?", "How yesterday?", "Ему нужно носить защитные очки в мастерской.", "Йому треба носити захисні окуляри в майстерні.", "Musi nosić okulary ochronne w warsztacie."],
  ["The team has to practice three times a week.", "How often do they practice?", "When once a month?", "Why never?", "Where last season?", "Команде нужно тренироваться три раза в неделю.", "Команді треба тренуватися тричі на тиждень.", "Drużyna musi trenować trzy razy w tygodniu."],
  ["I don't have to translate the whole text – only the summary.", "What exactly do I have to translate?", "Why everything?", "When never?", "How yesterday?", "Мне не нужно переводить весь текст — только краткое содержание.", "Мені не треба перекладати весь текст — тільки резюме.", "Nie muszę tłumaczyć całego tekstu – tylko streszczenie."],
  ["She has to visit her grandparents every other weekend.", "How often does she visit them?", "When every day?", "Why never?", "Where last summer?", "Ей нужно навещать бабушку с дедушкой через каждые два выходных.", "Вона мусить відвідувати бабусю з дідусем через кожні два вихідні.", "Musi odwiedzać dziadków co drugi weekend."],
  ["We have to keep the windows closed during the heatwave.", "Why during the heatwave?", "When in winter?", "How never?", "Where yesterday?", "Нам нужно держать окна закрытыми во время жары.", "Нам треба тримати вікна зачиненими під час спеки.", "Musimy trzymać okna zamknięte podczas fali upałów."],
  ["You don't have to arrive exactly at 9:00 – 9:15 is fine.", "What time is acceptable?", "Why exactly 8:00?", "When never?", "How yesterday?", "Тебе не нужно приходить ровно в 9:00 — 9:15 тоже нормально.", "Тобі не треба приходити рівно о 9:00 — 9:15 теж підходить.", "Nie musisz przychodzić dokładnie o 9:00 – 9:15 jest w porządku."],
  ["He has to clean the fish tank once a month.", "How often does he clean it?", "When every week?", "Why never?", "Where last year?", "Ему нужно чистить аквариум раз в месяц.", "Йому треба чистити акваріум раз на місяць.", "Musi czyścić akwarium raz w miesiącu."],
  ["They don't have to bring cash – card payment is accepted.", "What payment method is okay?", "Why only cash?", "When never?", "How yesterday?", "Им не нужно приносить наличные — оплата картой принимается.", "Їм не треба брати готівку — оплата карткою приймається.", "Nie muszą przynosić gotówki – płatność kartą jest akceptowana."],
  ["I have to back up my files every evening.", "When do I have to do it?", "Why once a year?", "How never?", "Where last week?", "Мне нужно делать резервную копию файлов каждый вечер.", "Мені треба робити резервну копію файлів щовечора.", "Muszę robić kopię zapasową plików każdego wieczoru."],
  ["She has to change her bandage twice a day.", "How many times daily?", "When once a week?", "Why never?", "Where yesterday?", "Ей нужно менять повязку два раза в день.", "Вона мусить міняти пов'язку двічі на день.", "Musi zmieniać opatrunek dwa razy dziennie."],
  ["We don't have to wait in line – we have VIP tickets.", "Why don't we wait?", "When everyone waits?", "How always?", "Where never?", "Нам не нужно стоять в очереди — у нас VIP-билеты.", "Нам не треба стояти в черзі — у нас VIP-квитки.", "Nie musimy stać w kolejce – mamy bilety VIP."],
  ["The students have to read three chapters by Friday.", "By when must they read?", "Why by Monday?", "When never?", "How yesterday?", "Студентам нужно прочитать три главы к пятнице.", "Студентам треба прочитати три розділи до п'ятниці.", "Studenci muszą przeczytać trzy rozdziały do piątku."],
  ["He doesn't have to shave every day anymore.", "Why no more every day?", "When twice a day?", "How always?", "Where last month?", "Ему больше не нужно бриться каждый день.", "Йому більше не треба голитися щодня.", "Nie musi już golić się codziennie."],
  ["I have to buy new winter tires before November.", "When before?", "Why after December?", "How never?", "Where last season?", "Мне нужно купить новые зимние шины до ноября.", "Мені треба купити нові зимові шини до листопада.", "Muszę kupić nowe opony zimowe przed listopadem."],
  ["She has to feed the cat at exactly 7 p.m.", "At what time precisely?", "Why at 10 a.m.?", "When never?", "How yesterday?", "Ей нужно кормить кота ровно в 19:00.", "Вона мусить годувати кота рівно о 19:00.", "Musi karmić kota dokładnie o 19:00."],
  ["We don't have to prepare any presentation – just discussion.", "What do we have to do?", "Why full presentation?", "When never?", "How last meeting?", "Нам не нужно готовить презентацию — только обсуждение.", "Нам не треба готувати презентацію — тільки обговорення.", "Nie musimy przygotowywać żadnej prezentacji – tylko dyskusja."],
  ["They have to arrive 30 minutes before the concert starts.", "How much earlier?", "When 5 minutes?", "Why never?", "Where yesterday?", "Им нужно прийти за 30 минут до начала концерта.", "Їм треба прибути за 30 хвилин до початку концерту.", "Muszą przyjechać 30 minut przed rozpoczęciem koncertu."],
  ["You have to sign the document in blue ink.", "What color ink?", "Why pencil?", "When never?", "How yesterday?", "Тебе нужно подписать документ синей ручкой.", "Тобі треба підписати документ синьою ручкою.", "Musisz podpisać dokument niebieskim długopisem."],
  ["He has to take the medicine after every meal.", "When after?", "Why before meals?", "How never?", "Where last week?", "Ему нужно принимать лекарство после каждого приёма пищи.", "Йому треба приймати ліки після кожного прийому їжі.", "Musi brać leki po każdym posiłku."],
  ["I don't have to wear a mask outside anymore.", "Where no more?", "When inside?", "Why always?", "How yesterday?", "Мне больше не нужно носить маску на улице.", "Мені більше не треба носити маску на вулиці.", "Nie muszę już nosić maseczki na zewnątrz."],
  ["She has to practice piano at least one hour daily.", "How long minimum?", "When 10 minutes?", "Why never?", "Where last year?", "Ей нужно заниматься на пианино минимум час в день.", "Вона мусить займатися на піаніно мінімум годину щодня.", "Musi ćwiczyć na pianinie co najmniej godzinę dziennie."],
  ["We have to return the books to the library by next Tuesday.", "By when?", "Why next month?", "When never?", "How yesterday?", "Нам нужно вернуть книги в библиотеку до следующего вторника.", "Нам треба повернути книги в бібліотеку до наступного вівторка.", "Musimy oddać książki do biblioteki do przyszłego wtorku."],
  ["They don't have to wear uniforms on casual Fridays.", "On which days?", "Why every day?", "When never?", "How last year?", "Им не нужно носить форму по пятницам.", "Їм не треба носити форму по п'ятницях.", "Nie muszą nosić mundurków w casualowe piątki."],
  ["He has to check the oil level before every long trip.", "When before?", "Why after?", "How never?", "Where yesterday?", "Ему нужно проверять уровень масла перед каждой дальней поездкой.", "Йому треба перевіряти рівень оливи перед кожною далекою поїздкою.", "Musi sprawdzać poziom oleju przed każdą dłuższą podróżą."],
  ["I have to call the plumber because the tap is leaking.", "Why call?", "When electrician?", "How never?", "Where last month?", "Мне нужно вызвать сантехника, потому что кран течёт.", "Мені треба викликати сантехніка, бо кран тече.", "Muszę wezwać hydraulika, bo kran ciecze."],
  ["She doesn't have to iron her clothes – she uses a steamer.", "Why not iron?", "When always iron?", "How yesterday?", "Where never?", "Ей не нужно гладить одежду — она использует отпариватель.", "Вона не мусить прасувати одяг — вона користується паровою праскою.", "Nie musi prasować ubrań – używa parownicy."],
  ["The shop has to close earlier on public holidays.", "When earlier?", "Why later?", "How never?", "Where last year?", "Магазину нужно закрываться раньше в праздничные дни.", "Магазину треба зачинятися раніше в святкові дні.", "Sklep musi zamykać się wcześniej w święta."],
  ["We have to take off our shoes before entering the house.", "What before entering?", "Why put on?", "When never?", "How yesterday?", "Нам нужно снимать обувь перед входом в дом.", "Нам треба знімати взуття перед входом у дім.", "Musimy zdejmować buty przed wejściem do domu."],
  ["You don't have to answer all the questions – only the starred ones.", "Which ones?", "Why every?", "When never?", "How last test?", "Тебе не нужно отвечать на все вопросы — только на отмеченные звёздочкой.", "Тобі не треба відповідати на всі питання — тільки на позначені зірочкою.", "Nie musisz odpowiadać na wszystkie pytania – tylko na te z gwiazdką."],
  ["He has to mow the lawn every ten days in summer.", "How often in summer?", "When every day?", "Why never?", "Where last autumn?", "Ему нужно косить газон каждые десять дней летом.", "Йому треба косити газон кожні десять днів влітку.", "Musi kosić trawnik co dziesięć dni latem."],
  ["She has to send the invitation cards two weeks in advance.", "How much in advance?", "When one day?", "Why never?", "Where yesterday?", "Ей нужно разослать приглашения за две недели.", "Вона мусить розіслати запрошення за два тижні.", "Musi wysłać zaproszenia dwa tygodnie wcześniej."],
  ["We don't have to use the elevator – there are stairs.", "Why not necessary?", "When broken stairs?", "How always?", "Where last week?", "Нам не нужно пользоваться лифтом — есть лестница.", "Нам не треба користуватися ліфтом — є сходи.", "Nie musimy używać windy – są schody."],
  ["I have to defrost the freezer once every three months.", "How often?", "When every week?", "Why never?", "Where last year?", "Мне нужно размораживать морозилку раз в три месяца.", "Мені треба розморожувати морозилку раз на три місяці.", "Muszę rozmrażać zamrażarkę raz na trzy miesiące."],
  ["They have to wear reflective vests on the construction site.", "Where must they wear them?", "When at home?", "Why never?", "How yesterday?", "Им нужно носить светоотражающие жилеты на стройплощадке.", "Їм треба носити світловідбивні жилети на будмайданчику.", "Muszą nosić kamizelki odblaskowe na placu budowy."],
  ["She doesn't have to wake up early tomorrow – it's Saturday.", "Why not early?", "When every day?", "How always?", "Where yesterday?", "Ей не нужно рано вставать завтра — суббота.", "Вона не мусить рано вставати завтра — субота.", "Nie musi wstawać wcześnie jutro – to sobota."],
  ["He has to register for the conference before May 15th.", "By when?", "Why after June?", "When never?", "How last year?", "Ему нужно зарегистрироваться на конференцию до 15 мая.", "Йому треба зареєструватися на конференцію до 15 травня.", "Musi zarejestrować się na konferencję przed 15 maja."],

["I have to wake up at 6:30 tomorrow. I have an early flight and need to be at the airport by 8.", "Person must get up early because of morning flight.", "Person wants to sleep longer.", "Flight is in the evening.", "Airport is very close.", "Мне нужно встать в 6:30 завтра. У меня ранний рейс, надо быть в аэропорту к 8.", "Мені треба встати о 6:30 завтра. У мене ранній рейс, потрібно бути в аеропорту до 8.", "Muszę wstać o 6:30 jutro. Mam wczesny lot i muszę być na lotnisku przed 8."],

  ["I have to call the plumber today. The kitchen faucet has been leaking for three days.", "Person needs to contact plumber because of leaking faucet.", "Plumber is coming tomorrow anyway.", "Faucet stopped leaking yesterday.", "Kitchen sink is brand new.", "Мне нужно позвонить сантехнику сегодня. Кран на кухне течёт уже третий день.", "Мені треба зателефонувати сантехніку сьогодні. Кран на кухні протікає вже третій день.", "Muszę zadzwonić do hydraulika dzisiaj. Kran w kuchni cieknął od trzech dni."],

  ["I have to buy new running shoes. My old ones have holes in the soles.", "Person must purchase new running shoes due to damaged old pair.", "Old shoes are still comfortable.", "Person stopped running completely.", "New shoes are too expensive.", "Мне нужно купить новые кроссовки для бега. У старых уже дырки в подошве.", "Мені треба купити нові кросівки для бігу. У старих вже дірки в підошві.", "Muszę kupić nowe buty do biegania. Stare mają dziury w podeszwie."],

  ["I have to finish this report by Friday. The boss needs it for the Monday meeting.", "Report must be completed before Friday deadline for boss's meeting.", "Boss canceled the meeting.", "Report is optional.", "Deadline is next month.", "Мне нужно закончить этот отчёт до пятницы. Начальнику он нужен для понедельничного совещания.", "Мені треба закінчити цей звіт до п'ятниці. Начальнику він потрібен для понеділкової наради.", "Muszę skończyć ten raport do piątku. Szef potrzebuje go na poniedziałkowe spotkanie."],

  ["I have to feed the cat before leaving. She gets very loud when hungry.", "Person has to feed cat before going out to prevent noise.", "Cat has already eaten today.", "Cat doesn't like food anymore.", "Person is staying home all day.", "Мне нужно покормить кошку перед уходом. Она очень громко мяукает, когда голодная.", "Мені треба нагодувати кота перед виходом. Він дуже голосно нявкає, коли голодний.", "Muszę nakarmić kota przed wyjściem. Bardzo głośno miauczy, kiedy jest głodny."],

  ["I have to take medicine at 8 pm. Doctor said not to skip any dose.", "Person must take prescribed medicine at exact time.", "Doctor allowed to skip today.", "Medicine finished yesterday.", "Time is not important.", "Мне нужно принять лекарство в 8 вечера. Врач сказал не пропускать ни одной дозы.", "Мені треба прийняти ліки о 20:00. Лікар сказав не пропускати жодної дози.", "Muszę wziąć leki o 20:00. Lekarz powiedział, żeby nie opuszczać żadnej dawki."],

  ["I have to charge my phone now. Battery is at 7% and I have important calls.", "Person needs to charge phone immediately due to low battery.", "Phone is fully charged.", "No important calls today.", "Charger is broken.", "Мне нужно зарядить телефон сейчас. Батарея на 7%, ждут важные звонки.", "Мені треба зарядити телефон зараз. Батарея на 7%, чекають важливі дзвінки.", "Muszę naładować telefon teraz. Bateria na 7%, mam ważne rozmowy."],

  ["I have to water the flowers today. It's been hot and dry for a week.", "Flowers need watering because of hot, dry weather.", "It rained heavily yesterday.", "Flowers are artificial.", "Weather is cold and rainy.", "Мне нужно полить цветы сегодня. Уже неделю жарко и сухо.", "Мені треба полити квіти сьогодні. Вже тиждень спекотно і сухо.", "Muszę podlać kwiaty dzisiaj. Był tydzień upałów i suszy."],

  ["I have to return the library books tomorrow. They're already 5 days overdue.", "Books must be returned tomorrow due to overdue fine.", "Books were returned last week.", "Library is closed tomorrow.", "No overdue period.", "Мне нужно вернуть книги в библиотеку завтра. Они уже 5 дней просрочены.", "Мені треба повернути книги до бібліотеки завтра. Вони вже 5 днів прострочені.", "Muszę oddać książki do biblioteki jutro. Są już 5 dni po terminie."],

  ["I have to go to the dentist on Wednesday. I have a toothache since Monday.", "Person must visit dentist because of ongoing tooth pain.", "Toothache disappeared yesterday.", "Dentist appointment canceled.", "Tooth is perfectly fine.", "Мне нужно к стоматологу в среду. Зуб болит с понедельника.", "Мені треба до стоматолога в середу. Зуб болить з понеділка.", "Muszę iść do dentysty w środę. Bolą mnie zęby od poniedziałku."],

[
    "I have to pick up my sister from school at 3:15. Her bus is broken this week.",
    "The person must collect their sister from school at 3:15 because the bus is not working.",
    "Sister goes home by herself.",
    "Bus is working normally this week.",
    "School finishes at 5 pm.",
    "Мне нужно забрать сестру из школы в 15:15. Её автобус сломался на этой неделе.",
    "Мені треба забрати сестру зі школи о 15:15. Її автобус зламався цього тижня.",
    "Muszę odebrać siostrę ze szkoły o 15:15. Jej autobus zepsuł się w tym tygodniu."
  ],

  [
    "I have to pay the electricity bill by tomorrow. They will cut off the power otherwise.",
    "The electricity bill must be paid by tomorrow to avoid disconnection.",
    "Power was already cut off yesterday.",
    "Bill was paid last week.",
    "Company never cuts electricity.",
    "Мне нужно оплатить счёт за электричество до завтра. Иначе отключат свет.",
    "Мені треба сплатити рахунок за електрику до завтра. Інакше відключать світло.",
    "Muszę zapłacić rachunek za prąd do jutra. W przeciwnym razie odetną zasilanie."
  ],

  [
    "I have to go to the post office before 2 pm. I need to send an important parcel.",
    "The person has to visit the post office before 2 pm to send an important package.",
    "Parcel can be sent online.",
    "Post office is open until 8 pm.",
    "Package is not urgent.",
    "Мне нужно сходить на почту до 14:00. Нужно отправить важную посылку.",
    "Мені треба сходити на пошту до 14:00. Потрібно відправити важливу посилку.",
    "Muszę iść na pocztę przed 14:00. Muszę wysłać ważną paczkę."
  ],

  [
    "I have to take the car to the service station. The check engine light has been on for two weeks.",
    "The car needs to be taken to the mechanic because the check engine warning is on.",
    "Check engine light turned off yesterday.",
    "Car is brand new and under warranty.",
    "Service station is closed this month.",
    "Мне нужно отвезти машину в сервис. Лампочка check engine горит уже две недели.",
    "Мені треба відвезти машину в сервіс. Лампочка check engine горить вже два тижні.",
    "Muszę zawieźć samochód do serwisu. Świeci się kontrolka check engine od dwóch tygodni."
  ],

  [
    "I have to bake a cake tonight. Tomorrow is my son's birthday.",
    "A cake must be baked tonight because tomorrow is the son's birthday.",
    "Son doesn't like cake.",
    "Birthday is next month.",
    "Cake was already ordered from bakery.",
    "Мне нужно испечь торт сегодня вечером. Завтра день рождения сына.",
    "Мені треба спекти торт сьогодні ввечері. Завтра день народження сина.",
    "Muszę upiec tort dzisiaj wieczorem. Jutro urodziny syna."
  ],

  [
    "I have to book hotel rooms this week. We're going on vacation next month.",
    "Hotel rooms need to be booked this week for next month's vacation.",
    "Vacation was canceled yesterday.",
    "Family will stay with relatives.",
    "Hotels are fully booked anyway.",
    "Мне нужно забронировать номера в отеле на этой неделе. Мы едем в отпуск в следующем месяце.",
    "Мені треба забронювати номери в готелі цього тижня. Ми їдемо у відпустку наступного місяця.",
    "Muszę zarezerwować pokoje w hotelu w tym tygodniu. Jedziemy na wakacje w przyszłym miesiącu."
  ],

  [
    "I have to clean the windows this weekend. They're very dirty after the storm.",
    "Windows have to be cleaned this weekend because they became very dirty after the storm.",
    "Storm didn't happen.",
    "Windows were cleaned last week.",
    "It is winter and windows are frozen.",
    "Мне нужно помыть окна на этих выходных. Они очень грязные после шторма.",
    "Мені треба помити вікна на цих вихідних. Вони дуже брудні після бурі.",
    "Muszę umyć okna w ten weekend. Są bardzo brudne po burzy."
  ],

  [
    "I have to visit my grandmother on Sunday. She hasn't seen me for two months.",
    "The person should visit grandmother on Sunday as she hasn't seen them for two months.",
    "Grandmother lives in another country.",
    "Visit already happened last weekend.",
    "Grandmother doesn't like visitors.",
    "Мне нужно навестить бабушку в воскресенье. Она не видела меня два месяца.",
    "Мені треба навідати бабусю в неділю. Вона не бачила мене два місяці.",
    "Muszę odwiedzić babcię w niedzielę. Nie widziała mnie od dwóch miesięcy."
  ],

  [
    "I have to submit my university application before midnight. It's the last day.",
    "University application must be submitted before midnight as it's the deadline.",
    "Deadline was extended for another month.",
    "Person already studies at that university.",
    "Application is optional.",
    "Мне нужно подать заявление в университет до полуночи. Сегодня последний день.",
    "Мені треба подати заяву до університету до півночі. Сьогодні останній день.",
    "Muszę złożyć wniosek na uniwersytet przed północą. To ostatni dzień."
  ],

  [
    "I have to change the light bulb in the hallway. It's been dark since yesterday.",
    "The light bulb in the hallway needs to be replaced because it's burned out.",
    "Bulb is still working.",
    "Hallway has plenty of natural light.",
    "No one uses the hallway.",
    "Мне нужно поменять лампочку в коридоре. Там темно с вчерашнего дня.",
    "Мені треба замінити лампочку в коридорі. Там темно з учорашнього дня.",
    "Muszę wymienić żarówkę na korytarzu. Jest ciemno od wczoraj."
  ],

  [
    "I have to buy tickets for the concert tomorrow. They will probably sell out soon.",
    "Concert tickets need to be purchased tomorrow because they might sell out quickly.",
    "Concert was canceled.",
    "Tickets are still available next month.",
    "Person doesn't like that band.",
    "Мне нужно купить билеты на концерт завтра. Они, скорее всего, скоро закончатся.",
    "Мені треба купити квитки на концерт завтра. Вони, напевно, скоро закінчаться.",
    "Muszę kupić bilety na koncert jutro. Prawdopodobnie szybko się wyprzedadzą."
  ],

  // … и так далее до 50-го

  [
    "I have to iron my shirt tonight. I have an important job interview tomorrow morning.",
    "The shirt needs to be ironed tonight because of the job interview tomorrow.",
    "Interview was postponed to next week.",
    "Shirt is already ironed.",
    "Person will wear a sweater instead.",
    "Мне нужно погладить рубашку сегодня вечером. Завтра утром у меня важное собеседование.",
    "Мені треба попрасувати сорочку сьогодні ввечері. Завтра вранці у мене важливе співбесіда.",
    "Muszę wyprasować koszulę dzisiaj wieczorem. Jutro rano mam ważną rozmowę kwalifikacyjną."
  ],

  [
    "I have to throw out the expired yogurt. It smells really bad now.",
    "The expired yogurt must be thrown away because it has a bad smell.",
    "Yogurt is still fresh.",
    "Expiration date is next month.",
    "Smell is normal for this yogurt.",
    "Мне нужно выбросить просроченный йогурт. Он уже сильно пахнет.",
    "Мені треба викинути прострочений йогурт. Він вже дуже погано пахне.",
    "Muszę wyrzucić przeterminowany jogurt. Śmierdzi naprawdę źle."
  ],

[
    "I have to pick up dry cleaning after lunch. My suit is ready for tomorrow's wedding.",
    "The person has to collect dry-cleaned suit after lunch for the upcoming wedding.",
    "Suit was never sent to dry cleaning.",
    "Wedding is postponed until next year.",
    "There is no dry cleaning shop nearby.",
    "Мне нужно забрать вещи из химчистки после обеда. Мой костюм готов к завтрашней свадьбе.",
    "Мені треба забрати речі з хімчистки після обеду. Мій костюм готовий до завтрашнього весілля.",
    "Muszę odebrać rzeczy z pralni po obiedzie. Mój garnitur jest gotowy na jutrzejszy ślub."
  ],

  [
    "I have to set the alarm for 5:45 am. My train leaves at 7:12 and I need time to get to the station.",
    "The alarm must be set for 5:45 because the early train departs at 7:12.",
    "Train leaves in the afternoon.",
    "Person is driving to work tomorrow.",
    "Station is only 5 minutes away.",
    "Мне нужно поставить будильник на 5:45 утра. Поезд отправляется в 7:12, нужно время, чтобы добраться до вокзала.",
    "Мені треба поставити будильник на 5:45 ранку. Поїзд відправляється о 7:12, потрібен час, щоб дістатися до вокзалу.",
    "Muszę nastawić budzik na 5:45. Pociąg odjeżdża o 7:12 i muszę mieć czas na dojazd na dworzec."
  ],

  [
    "I have to buy batteries today. The remote control and smoke detector both stopped working.",
    "Batteries need to be purchased today because remote and smoke detector aren't functioning.",
    "Remote works with rechargeable batteries.",
    "Smoke detector has a built-in battery that lasts 10 years.",
    "Person rarely uses the remote.",
    "Мне нужно купить батарейки сегодня. Пульт и дымовой извещатель перестали работать.",
    "Мені треба купити батарейки сьогодні. Пульт і димовий сповіщувач перестали працювати.",
    "Muszę kupić baterie dzisiaj. Pilot i czujka dymu przestały działać."
  ],

  [
    "I have to meet my friend at the café at 6 pm. We agreed on it last week.",
    "The person has to be at the café at 6 pm to meet the friend as previously arranged.",
    "Friend canceled the meeting yesterday.",
    "Meeting was planned for next month.",
    "Café closed permanently last weekend.",
    "Мне нужно встретиться с другом в кафе в 18:00. Мы договорились об этом на прошлой неделе.",
    "Мені треба зустрітися з другом у кафе о 18:00. Ми домовилися про це минулого тижня.",
    "Muszę spotkać się z przyjacielem w kawiarni o 18:00. Umówiliśmy się w zeszłym tygodniu."
  ],

  [
    "I have to finish packing my suitcase tonight. Flight is tomorrow at 9:40 am.",
    "Suitcase must be packed tonight because the flight departs tomorrow morning.",
    "Flight was rescheduled to evening.",
    "Person is not going anywhere.",
    "Suitcase was packed last week.",
    "Мне нужно закончить собирать чемодан сегодня вечером. Вылет завтра в 9:40 утра.",
    "Мені треба закінчити пакувати валізу сьогодні ввечері. Виліт завтра о 9:40 ранку.",
    "Muszę skończyć pakować walizkę dzisiaj wieczorem. Lot jest jutro o 9:40 rano."
  ],

  [
    "I have to call the insurance company tomorrow morning. I had a small car accident yesterday.",
    "The insurance company must be contacted tomorrow morning because of yesterday's car accident.",
    "Accident was very minor and no damage occurred.",
    "Insurance already knows about the accident.",
    "Car is completely fine.",
    "Мне нужно позвонить в страховую компанию завтра утром. Вчера была небольшая авария.",
    "Мені треба зателефонувати в страхову компанію завтра вранці. Вчора була невелика аварія.",
    "Muszę zadzwonić do ubezpieczyciela jutro rano. Wczoraj miałem małą stłuczkę."
  ],

  [
    "I have to go to the pharmacy before closing. I need antibiotics prescribed today.",
    "The person has to visit the pharmacy before it closes to get today's prescribed antibiotics.",
    "Prescription was given for next week.",
    "Pharmacy is open 24 hours.",
    "Antibiotics are not needed anymore.",
    "Мне нужно зайти в аптеку до закрытия. Сегодня выписали антибиотики.",
    "Мені треба зайти в аптеку до закриття. Сьогодні виписали антибіотики.",
    "Muszę iść do apteki przed zamknięciem. Dziś dostałem receptę na antybiotyk."
  ],

  [
    "I have to wash the dishes right after dinner. We have guests coming over later.",
    "Dishes must be washed immediately after dinner because guests are arriving soon.",
    "Guests are not coming anymore.",
    "Dishwasher is working perfectly.",
    "Dinner was eaten out today.",
    "Мне нужно помыть посуду сразу после ужина. Позже придут гости.",
    "Мені треба помити посуд після вечері. Скоро прийдуть гості.",
    "Muszę zmyć naczynia zaraz po kolacji. Później przychodzą goście."
  ],

  [
    "I have to update my CV this evening. I'm applying for a new job tomorrow.",
    "CV needs to be updated this evening for tomorrow's job application.",
    "Job application deadline is next month.",
    "CV is already up-to-date.",
    "Person decided not to change job.",
    "Мне нужно обновить резюме сегодня вечером. Завтра подаю на новую работу.",
    "Мені треба оновити резюме сьогодні ввечері. Завтра подаю на нову роботу.",
    "Muszę zaktualizować CV dzisiaj wieczorem. Jutro aplikuję na nową pracę."
  ],

  [
    "I have to take out the trash before 7 am. Collection is very early tomorrow.",
    "Trash must be taken out before 7 am because collection happens early tomorrow.",
    "Collection day was changed to Friday.",
    "Trash bin is already empty.",
    "No trash collection this week.",
    "Мне нужно вынести мусор до 7 утра. Завтра очень рано забирают.",
    "Мені треба винести сміття до 7 ранку. Завтра дуже рано забирають.",
    "Muszę wynieść śmieci przed 7 rano. Jutro bardzo wcześnie zabierają."
  ],

  [
    "I have to buy flowers on the way home. It's our wedding anniversary today.",
    "Flowers need to be bought on the way home because today is the wedding anniversary.",
    "Anniversary is next week.",
    "Partner doesn't like flowers.",
    "Already bought flowers yesterday.",
    "Мне нужно купить цветы по дороге домой. Сегодня наша годовщина свадьбы.",
    "Мені треба купити квіти по дорозі додому. Сьогодні наша річниця весілля.",
    "Muszę kupić kwiaty w drodze do domu. Dziś jest nasza rocznica ślubu."
  ],

  [
    "I have to send the birthday card today. It has to arrive by Friday.",
    "The birthday card must be sent today to arrive by Friday.",
    "Birthday is in three weeks.",
    "Card was sent last week.",
    "Post office is on strike.",
    "Мне нужно отправить поздравительную открытку сегодня. Она должна прийти к пятнице.",
    "Мені треба відправити листівку з днем народження сьогодні. Вона має прийти до п'ятниці.",
    "Muszę wysłać kartkę urodzinową dzisiaj. Ma dojść do piątku."
  ],

  [
    "I have to defrost the chicken for dinner. We're having guests tonight.",
    "Chicken needs to be defrosted for tonight's dinner with guests.",
    "Guests canceled dinner.",
    "Dinner will be vegetarian.",
    "Chicken is already cooked.",
    "Мне нужно разморозить курицу к ужину. Сегодня придут гости.",
    "Мені треба розморозити курку до вечері. Сьогодні будуть гості.",
    "Muszę rozmrozić kurczaka na kolację. Dziś mamy gości."
  ],

  [
    "I have to go to the bank before 4 pm. I need to deposit the check today.",
    "The person must visit the bank before 4 pm to deposit today's check.",
    "Check is electronic and already deposited.",
    "Bank is open until 7 pm.",
    "No need to deposit money this week.",
    "Мне нужно зайти в банк до 16:00. Сегодня нужно внести чек.",
    "Мені треба зайти в банк до 16:00. Сьогодні потрібно внести чек.",
    "Muszę iść do banku przed 16:00. Muszę dzisiaj wpłacić czek."
  ],

  [
    "I have to water the garden before it gets dark. The forecast says no rain for the next five days.",
    "The garden needs watering before dark because no rain is expected for five days.",
    "It rained all day yesterday.",
    "Garden has automatic irrigation system.",
    "Plants are drought-resistant.",
    "Мне нужно полить сад до темноты. По прогнозу пять дней без дождя.",
    "Мені треба полити сад до темряви. За прогнозом п'ять днів без дощу.",
    "Muszę podlać ogród zanim się ściemni. Prognoza mówi, że przez pięć dni nie będzie padać."
  ],

  [
    "I have to reply to the email from my boss before the end of the day.",
    "The email from the boss requires a reply before the day ends.",
    "Boss sent the email just for information.",
    "Reply was already sent yesterday.",
    "Email was deleted by mistake.",
    "Мне нужно ответить на письмо от начальника до конца дня.",
    "Мені треба відповісти на лист від начальника до кінця дня.",
    "Muszę odpowiedzieć na maila od szefa przed końcem dnia."
  ],

  [
    "I have to buy a present for my nephew's birthday party on Saturday.",
    "A birthday present for the nephew must be bought before Saturday's party.",
    "Party was moved to next month.",
    "Nephew already received all gifts.",
    "Person is not invited to the party.",
    "Мне нужно купить подарок на день рождения племянника — вечеринка в субботу.",
    "Мені треба купити подарунок на день народження племінника — вечірка в суботу.",
    "Muszę kupić prezent na urodziny siostrzeńca — impreza w sobotę."
  ],

  [
    "I have to take the dog to the vet tomorrow morning. He has an appointment for vaccination.",
    "The dog needs to go to the vet tomorrow morning for vaccination appointment.",
    "Vaccination was done last week.",
    "Vet canceled the appointment.",
    "Dog is afraid of the vet.",
    "Мне нужно отвезти собаку к ветеринару завтра утром. У него назначена вакцинация.",
    "Мені треба відвезти собаку до ветеринара завтра вранці. У нього призначена вакцинація.",
    "Muszę zabrać psa do weterynarza jutro rano. Ma umówioną szczepionkę."
  ],

  [
    "I have to print the boarding pass tonight. Online check-in closes in two hours.",
    "Boarding pass must be printed tonight because online check-in closes soon.",
    "Check-in is open until tomorrow morning.",
    "Person has mobile boarding pass.",
    "Flight was canceled.",
    "Мне нужно распечатать посадочный талон сегодня вечером. Онлайн-регистрация закрывается через два часа.",
    "Мені треба роздрукувати посадковий талон сьогодні ввечері. Онлайн-реєстрація закривається через дві години.",
    "Muszę wydrukować kartę pokładową dzisiaj wieczorem. Check-in online zamyka się za dwie godziny."
  ],

  [
    "I have to buy new headphones. The old ones broke during my run yesterday.",
    "New headphones need to be purchased because the old ones broke yesterday.",
    "Old headphones still work perfectly.",
    "Person doesn't listen to music anymore.",
    "Headphones are under warranty.",
    "Мне нужно купить новые наушники. Старые сломались вчера во время пробежки.",
    "Мені треба купити нові навушники. Старі зламалися вчора під час пробіжки.",
    "Muszę kupić nowe słuchawki. Stare zepsuły się wczoraj podczas biegu."
  ],

  [
    "I have to confirm the restaurant reservation by noon. Otherwise we lose the table.",
    "The restaurant reservation must be confirmed by noon or it will be lost.",
    "Reservation is automatically confirmed.",
    "Restaurant is fully booked anyway.",
    "We decided to eat at home.",
    "Мне нужно подтвердить бронь в ресторане до полудня. Иначе столик отдадут.",
    "Мені треба підтвердити бронювання в ресторані до полудня. Інакше столик віддадуть.",
    "Muszę potwierdzić rezerwację w restauracji do południa. W przeciwnym razie stracimy stolik."
  ],

  [
    "I have to charge the camera battery tonight. We have a family photo session tomorrow.",
    "Camera battery needs charging tonight for tomorrow's family photo session.",
    "Photo session postponed to next weekend.",
    "We will use phones instead of camera.",
    "Battery is already fully charged.",
    "Мне нужно зарядить аккумулятор фотоаппарата сегодня вечером. Завтра семейная фотосессия.",
    "Мені треба зарядити акумулятор фотоапарата сьогодні ввечері. Завтра сімейна фотосесія.",
    "Muszę naładować baterię do aparatu dzisiaj wieczorem. Jutro mamy rodzinną sesję zdjęciową."
  ],

  [
    "I have to buy milk on the way back from work. We ran out this morning.",
    "Milk must be bought on the way home because it ran out this morning.",
    "There is still half a carton left.",
    "Family switched to plant-based milk.",
    "No one drinks milk at home.",
    "Мне нужно купить молоко по дороге с работы. Утром закончилось.",
    "Мені треба купити молоко по дорозі з роботи. Вранці закінчилося.",
    "Muszę kupić mleko w drodze z pracy. Skończyło się rano."
  ],

  [
    "I have to sign the documents before Friday. The lawyer needs them for the meeting.",
    "Documents must be signed before Friday for the lawyer's meeting.",
    "Meeting was canceled.",
    "Documents were already signed last week.",
    "Lawyer doesn't need them anymore.",
    "Мне нужно подписать документы до пятницы. Они нужны юристу для встречи.",
    "Мені треба підписати документи до п'ятниці. Вони потрібні юристу для зустрічі.",
    "Muszę podpisać dokumenty przed piątkiem. Prawnik potrzebuje ich na spotkanie."
  ],

  [
    "I have to prepare lunch boxes tonight. Kids have school trip tomorrow.",
    "Lunch boxes need to be prepared tonight for the kids' school trip tomorrow.",
    "School trip was canceled.",
    "Kids will buy food at school.",
    "Lunch boxes are already ready.",
    "Мне нужно приготовить ланч-боксы сегодня вечером. У детей завтра экскурсия в школе.",
    "Мені треба підготувати ланч-бокси сьогодні ввечері. У дітей завтра екскурсія в школі.",
    "Muszę przygotować lunchboxy dzisiaj wieczorem. Dzieci mają jutro wycieczkę szkolną."
  ],

];


// Если это свойство есть, то оно попадает в заголовок теста
unit33.nameLeson = "I have to ...";

//--созданными предложениями.
unit33.lengthTrue = 5;

console.log(unit33.length);

// расширение числа подмассивов за счёт замены местами нулевого и первого индекса
unit33.push(...extendForArray(unit33));

console.log(unit33.length);

unit33.push(...extendForArray2(unit33));

console.log(unit33.length);

export { unit33 };


