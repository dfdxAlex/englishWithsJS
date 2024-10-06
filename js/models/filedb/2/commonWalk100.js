let commonWalk100 = [
    ['airport', 'аэропорт', 'вокзал', 'станция', 'платформа', '', '', ''],
    ['hotel', 'гостиница', 'отель', 'хостел', 'мотель', '', '', ''],
    ['luggage', 'багаж', 'чемодан', 'сумка', 'рюкзак', '', '', ''],
    ['map', 'карта', 'план', 'схема', 'путеводитель', '', '', ''],
    ['passport', 'паспорт', 'документ', 'виза', 'идентификатор', '', '', ''],
    ['reservation', 'бронирование', 'резерв', 'заказ', 'регистрация', '', '', ''],
    ['tour', 'тур', 'экскурсия', 'путешествие', 'поездка', '', '', ''],
    ['guide', 'гид', 'проводник', 'экскурсовод', 'инструктор', '', '', ''],
    ['trip', 'поездка', 'путешествие', 'экспедиция', 'сборы', '', '', ''],
    ['ticket', 'билет', 'проездной', 'путёвка', 'талон', '', '', ''],
    ['train', 'поезд', 'автобус', 'трамвай', 'метро', '', '', ''],
    ['vacation', 'отпуск', 'каникулы', 'праздники', 'перерыв', '', '', ''],
    ['travel', 'путешествовать', 'поездка', 'путешествие', 'перемещение', '', '', ''],
    ['hostel', 'хостел', 'гостиница', 'отель', 'кемпинг', '', '', ''],
    ['check-in', 'регистрация', 'заселение', 'вход', 'бронирование', '', '', ''],
    ['check-out', 'выписка', 'выезд', 'проверка', 'оплата', '', '', ''],
    ['reservation', 'резерв', 'бронирование', 'заказ', 'регистрация', '', '', ''],
    ['destination', 'место назначения', 'пункт назначения', 'цель', 'место отдыха', '', '', ''],
    ['boarding', 'посадка', 'регистрация', 'вход', 'обзор', '', '', ''],
    ['itinerary', 'маршрут', 'план', 'программа', 'дорожная карта', '', '', ''],
    ['sightseeing', 'осмотр достопримечательностей', 'экскурсия', 'тур', 'поездка', '', '', ''],
    ['beach', 'пляж', 'морской берег', 'зона отдыха', 'прибрежная зона', '', '', ''],
    ['city', 'город', 'площадь', 'район', 'улица', '', '', ''],
    ['reservation', 'бронирование', 'заказ', 'резерв', 'регистрация', '', '', ''],
    ['cab', 'такси', 'такси', 'автомобиль', 'служба такси', '', '', ''],
    ['cruise', 'круиз', 'рейс', 'путешествие', 'морской тур', '', '', ''],
    ['excursion', 'экскурсия', 'тур', 'путешествие', 'поездка', '', '', ''],
    ['guidebook', 'путеводитель', 'гид', 'справочник', 'книга', '', '', ''],
    ['hostel', 'хостел', 'гостиница', 'отель', 'кемпинг', '', '', ''],
    ['lodge', 'лагерь', 'постоялый двор', 'отель', 'гостиница', '', '', ''],
    ['motel', 'мотель', 'гостиница', 'отель', 'хостел', '', '', ''],
    ['resort', 'курорт', 'отдых', 'заведение', 'отель', '', '', ''],
    ['room', 'номер', 'комната', 'гостиная', 'спальня', '', '', ''],
    ['suite', 'люкс', 'номер', 'апартаменты', 'комната', '', '', ''],
    ['taxi', 'такси', 'автомобиль', 'таксомотор', 'служба такси', '', '', ''],
    ['travel', 'путешествовать', 'поездка', 'путешествие', 'путеводитель', '', '', ''],
    ['view', 'вид', 'пейзаж', 'смотреть', 'панорама', '', '', ''],
    ['visit', 'посещение', 'визит', 'экскурсия', 'поездка', '', '', ''],
    ['weather', 'погода', 'климат', 'атмосфера', 'температура', '', '', ''],
    ['backpack', 'рюкзак', 'сумка', 'чемодан', 'сумка для путешествий', '', '', ''],
    ['beach', 'пляж', 'песок', 'море', 'отдых', '', '', ''],
    ['boat', 'лодка', 'катер', 'яхта', 'корабль', '', '', ''],
    ['camping', 'кемпинг', 'лагерь', 'палатка', 'отдых на природе', '', '', ''],
    ['destination', 'пункт назначения', 'место назначения', 'цель', 'направление', '', '', ''],
    ['excursion', 'экскурсия', 'поездка', 'тур', 'осмотр', '', '', ''],
    ['fare', 'тариф', 'плата', 'стоимость', 'цена', '', '', ''],
    ['flight', 'рейс', 'полет', 'вылет', 'авиаперелет', '', '', ''],
    ['guide', 'гид', 'экскурсовод', 'проводник', 'инструктор', '', '', ''],
    ['journey', 'путешествие', 'поездка', 'путь', 'экспедиция', '', '', ''],
    ['lodge', 'лагерь', 'гостиница', 'постоялый двор', 'отель', '', '', ''],
    ['map', 'карта', 'план', 'схема', 'путеводитель', '', '', ''],
    ['monument', 'памятник', 'достопримечательность', 'памятный знак', 'скульптура', '', '', ''],
    ['museum', 'музей', 'галерея', 'выставка', 'коллекция', '', '', ''],
    ['park', 'парк', 'площадь', 'сад', 'зона отдыха', '', '', ''],
    ['pass', 'проездной', 'билет', 'доступ', 'перепуск', '', '', ''],
    ['pedestrian', 'пешеход', 'пешеходная зона', 'пешеходный', 'пешеходная дорожка', '', '', ''],
    ['pier', 'пирс', 'пристань', 'набережная', 'взлетно-посадочная полоса', '', '', ''],
    ['pool', 'бассейн', 'плавательный бассейн', 'к swimming', 'зона для плавания', '', '', ''],
    ['reservoir', 'водохранилище', 'озеро', 'бассейн', 'водоем', '', '', ''],
    ['reservoir', 'резервуар', 'озеро', 'бассейн', 'водоем', '', '', ''], 
    ['ride', 'поездка', 'аттракцион', 'поездка', 'прогулка', '', '', ''],
    ['sightseeing', 'осмотр достопримечательностей', 'тур', 'экскурсия', 'путешествие', '', '', ''],
    ['spa', 'спа', 'курорт', 'оздоровительный центр', 'массажный салон', '', '', ''],
    ['station', 'станция', 'вокзал', 'площадь', 'остановка', '', '', ''],
    ['trail', 'тропа', 'маршрут', 'пешеходная дорожка', 'путь', '', '', ''],
    ['transport', 'транспорт', 'перевозка', 'транспортное средство', 'передвижение', '', '', ''],
    ['travel', 'путешествие', 'поездка', 'перемещение', 'путешествовать', '', '', ''],
    ['ticket', 'билет', 'проездной', 'путевка', 'талон', '', '', ''],
    ['tourist', 'турист', 'путешественник', 'гостя', 'путешествующий', '', '', ''],
    ['vacation', 'отпуск', 'каникулы', 'праздники', 'время отдыха', '', '', ''],
    ['viewpoint', 'обзорная площадка', 'точка обзора', 'панорама', 'вид', '', '', ''],
    ['visa', 'виза', 'разрешение', 'документ', 'паспорт', '', '', ''],
    ['waterfall', 'водопад', 'поток', 'водопад', 'река', '', '', ''],
    ['way', 'путь', 'дорога', 'тропинка', 'маршрут', '', '', ''],
    ['zoo', 'зоопарк', 'животные', 'парк', 'зоологический парк', '', '', ''],
    ['excursion', 'экскурсия', 'поездка', 'путешествие', 'тур', '', '', ''],
    ['landmark', 'достопримечательность', 'памятник', 'место', 'объект', '', '', ''],
    ['guide', 'гид', 'проводник', 'руководитель', 'помощник', '', '', ''],
    ['backpack', 'рюкзак', 'сумка', 'чемодан', 'пакет', '', '', ''],
    ['scenery', 'пейзаж', 'вид', 'ландшафт', 'молодёжь', '', '', ''],
    ['adventure', 'приключение', 'экспедиция', 'поездка', 'авантюра', '', '', ''],
    ['explore', 'исследовать', 'изучать', 'обследовать', 'разведывать', '', '', ''],
    ['vacation', 'отпуск', 'каникулы', 'выходные', 'путешествие', '', '', ''],
    ['trip', 'поездка', 'путешествие', 'экскурсия', 'визит', '', '', ''],
    ['destination', 'пункт назначения', 'место назначения', 'цель', 'адрес', '', '', ''],
    ['itinerary', 'маршрут', 'план', 'программа', 'путеводитель', '', '', ''],
    ['hostel', 'хостел', 'гостиница', 'общежитие', 'номер', '', '', ''],
    ['tour', 'тур', 'поездка', 'экскурсия', 'экспедиция', '', '', ''],
    ['sightseeing', 'осмотр достопримечательностей', 'туризм', 'путешествие', 'поездка', '', '', ''],
    ['passport', 'паспорт', 'документ', 'виза', 'удостоверение личности', '', '', ''],
    ['luggage', 'багаж', 'чемодан', 'сумка', 'пакет', '', '', ''],
    ['reservation', 'бронирование', 'заказ', 'резервация', 'подтверждение', '', '', ''],
    ['suite', 'люкс', 'номер', 'апартамент', 'гостиница', '', '', ''],
    ['reception', 'рецепция', 'приём', 'регистрация', 'администратор', '', '', ''],
    ['check-in', 'регистрация', 'заселение', 'вход', 'прибытие', '', '', ''],
    ['check-out', 'выписка', 'выезд', 'отъезд', 'завершение', '', '', ''],
    ['transportation', 'транспорт', 'перевозка', 'транспортировка', 'перемещение', '', '', ''],
    ['cabin', 'кабина', 'номер', 'бунгало', 'палатка', '', '', ''],
    ['cruise', 'круиз', 'путешествие', 'плавание', 'экспедиция', '', '', ''],
    ['excursion', 'экскурсия', 'поездка', 'путешествие', 'тур', '', '', ''],
    ['tourist', 'турист', 'путешественник', 'посетитель', 'гость', '', '', ''],
    ['guidebook', 'путеводитель', 'гид', 'книга', 'инструкция', '', '', ''],
    ['map', 'карта', 'план', 'схема', 'график', '', '', ''],
    ['reservation', 'бронирование', 'планирование', 'заказ', 'подтверждение', '', '', ''],
    ['cottage', 'дача', 'коттедж', 'домик', 'жилище', '', '', ''],
    ['booking', 'бронирование', 'резервирование', 'заказ', 'регистрация', '', '', ''],
    ['journey', 'путешествие', 'поездка', 'маршрут', 'путь', '', '', ''],
    ['stay', 'проживание', 'остановка', 'времяпрепровождение', 'отдых', '', '', ''],
    ['resort', 'курорт', 'отдых', 'гостиница', 'санаторий', '', '', ''],
    ['transit', 'транзит', 'перевозка', 'проезд', 'передвижение', '', '', ''],
    ['destination', 'пункт назначения', 'цель', 'место', 'адрес', '', '', ''],
    ['travel', 'путешествовать', 'поездка', 'экспедиция', 'путешествие', '', '', ''],
    ['accommodation', 'жильё', 'размещение', 'гостиница', 'место', '', '', ''],
    ['tourist', 'турист', 'посетитель', 'путешественник', 'гость', '', '', '']
];

// этот код добавляет правильный перевод - это индекс 1 на место с 
// индексом 5, оттуда движек использует это значение
// это вместо того, чтобы заполнить это с помощью чата джипити
// такой фокус с переводом на украинский и польский не получится,
// нужен новый массив
commonWalk100.forEach((el, index, array) => {
    array[index][5] = el[1];
});