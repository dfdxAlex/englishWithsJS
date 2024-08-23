const commonFood100 = [
    ['appetizer', 'закуска', 'десерт', 'основное блюдо', 'напиток', 'закуска', 'закуска', 'przystawka'],
    ['beverage', 'напиток', 'еда', 'закуска', 'десерт', 'напиток', 'напій', 'napój'],
    ['buffet', 'шведский стол', 'обслуживание', 'меню', 'a la carte', 'шведский стол', 'шведський стіл', 'bufet'],
    ['chef', 'шеф-повар', 'официант', 'помощник', 'бармен', 'шеф-повар', 'шеф-кухар', 'szef kuchni'],
    ['dish', 'блюдо', 'ингредиент', 'напиток', 'десерт', 'блюдо', 'страва', 'danie'],
    ['entree', 'основное блюдо', 'закуска', 'десерт', 'напиток', 'основное блюдо', 'основна страва', 'danie główne'],
    ['ingredient', 'ингредиент', 'блюдо', 'напиток', 'приправы', 'ингредиент', 'інгредієнт', 'składnik'],
    ['menu', 'меню', 'чек', 'рецепт', 'праздничное предложение', 'меню', 'меню', 'menu'],
    ['order', 'заказ', 'оплата', 'резерв', 'инвентарь', 'заказ', 'замовлення', 'zamówienie'],
    ['plate', 'тарелка', 'чашка', 'прибора', 'бокал', 'тарелка', 'тарілка', 'talerz'],
    ['reservation', 'бронирование', 'заселиться', 'заказ', 'оплата', 'бронирование', 'бронювання', 'rezerwacja'],
    ['service', 'обслуживание', 'еда', 'десерт', 'чек', 'обслуживание', 'обслуговування', 'obsługa'],
    ['specialty', 'фирменное блюдо', 'закуска', 'напиток', 'десерт', 'фирменное блюдо', 'фірмова страва', 'specjalność'],
    ['starter', 'закуска', 'основное блюдо', 'десерт', 'напиток', 'закуска', 'закуска', 'przystawka'],
    ['table', 'стол', 'стул', 'меню', 'обслуживание', 'стол', 'стіл', 'stół'],
    ['taste', 'вкус', 'аромат', 'текстура', 'внешний вид', 'вкус', 'смак', 'smak'],
    ['waiter', 'официант', 'шеф-повар', 'бармен', 'клиент', 'официант', 'офіціант', 'kelner'],
    ['waitress', 'официантка', 'шеф-повар', 'бармен', 'клиент', 'официантка', 'офіціантка', 'kelnerka'],
    ['wine', 'вино', 'пиво', 'вода', 'сок', 'вино', 'вино', 'wino'],
    ['baker', 'пекарь', 'шеф-повар', 'бармен', 'официант', 'пекарь', 'пекар', 'piekarz'],
    ['barista', 'бариста', 'шеф-повар', 'пекарь', 'официант', 'бариста', 'бариста', 'barista'],
    ['beef', 'говядина', 'курица', 'свинина', 'рыба', 'говядина', 'яловичина', 'wołowina'],
    ['bread', 'хлеб', 'булка', 'пирог', 'кекс', 'хлеб', 'хліб', 'chleb'],
    ['butter', 'масло', 'маргарин', 'вода', 'молоко', 'масло', 'масло', 'masło'],
    ['cheese', 'сыр', 'творог', 'масло', 'йогурт', 'сыр', 'сир', 'ser'],
    ['chicken', 'курица', 'говядина', 'свинина', 'рыба', 'курица', 'курка', 'kurczak'],
    ['coffee', 'кофе', 'чай', 'вода', 'сок', 'кофе', 'кава', 'kawa'],
    ['dessert', 'десерт', 'основное блюдо', 'закуска', 'напиток', 'десерт', 'десерт', 'deser'],
    ['egg', 'яйцо', 'молоко', 'сыр', 'масло', 'яйцо', 'яйце', 'jajko']
    ['fish', 'рыба', 'мясо', 'птица', 'морепродукты', 'рыба', 'риба', 'ryba'],
    ['flavor', 'вкус', 'аромат', 'текстура', 'внешний вид', 'вкус', 'смак', 'smak'],
    ['fruit', 'фрукты', 'овощи', 'мясо', 'молочные продукты', 'фрукты', 'фрукти', 'owoce'],
    ['grill', 'гриль', 'духовка', 'плита', 'мультиварка', 'гриль', 'гриль', 'grill'],
    ['herb', 'травы', 'специи', 'овощи', 'фрукты', 'травы', 'трави', 'zioła'],
    ['lunch', 'обед', 'завтрак', 'ужин', 'перекус', 'обед', 'обід', 'lunch'],
    ['meat', 'мясо', 'рыба', 'птица', 'морепродукты', 'мясо', 'м’ясо', 'mięso'],
    ['menu', 'меню', 'чек', 'рецепт', 'праздничное предложение', 'меню', 'меню', 'menu'],
    ['noodle', 'лапша', 'рис', 'макароны', 'хлеб', 'лапша', 'локшина', 'makaron'],
    ['oil', 'масло', 'вода', 'уксус', 'соевый соус', 'масло', 'олія', 'olej'],
    ['pasta', 'паста', 'рис', 'лапша', 'макароны', 'паста', 'паста', 'pasta'],
    ['pork', 'свинина', 'говядина', 'курица', 'рыба', 'свинина', 'свинина', 'wieprzowina'],
    ['rice', 'рис', 'паста', 'макароны', 'лапша', 'рис', 'рис', 'ryż'],
    ['salad', 'салат', 'суп', 'закуска', 'десерт', 'салат', 'салат', 'sałatka'],
    ['salt', 'соль', 'сахар', 'перец', 'специи', 'соль', 'сіль', 'sól'],
    ['sandwich', 'бутерброд', 'пицца', 'суп', 'салат', 'бутерброд', 'бутерброд', 'kanapka'],
    ['sauce', 'соус', 'паста', 'мясо', 'салат', 'соус', 'соус', 'sos'],
    ['seasoning', 'приправы', 'специи', 'соус', 'десерт', 'приправы', 'приправа', 'przyprawy'],
    ['snack', 'перекус', 'основное блюдо', 'десерт', 'напиток', 'перекус', 'перекус', 'przekąska'],
    ['soup', 'суп', 'салат', 'закуска', 'десерт', 'суп', 'суп', 'zupa'],
    ['spice', 'специи', 'соль', 'сахар', 'масло', 'специи', 'спеції', 'przyprawy'],
    ['steak', 'стейк', 'гамбургер', 'курица', 'сосиски', 'стейк', 'стейк', 'stek'],
    ['sugar', 'сахар', 'соль', 'мед', 'сироп', 'сахар', 'цукор', 'cukier'],
    ['tea', 'чай', 'кофе', 'вода', 'сок', 'чай', 'чай', 'herbata'],
    ['treat', 'угощение', 'основное блюдо', 'десерт', 'напиток', 'угощение', 'частування', 'przekąska'],
    ['vegetable', 'овощ', 'фрукт', 'мясо', 'рыба', 'овощ', 'овоч', 'warzywo'],
    ['vinegar', 'уксус', 'масло', 'вода', 'соевый соус', 'уксус', 'оцет', 'ocet'],
    ['wine', 'вино', 'пиво', 'вода', 'сок', 'вино', 'вино', 'wino'],
    ['wrap', 'ролл', 'пицца', 'суп', 'салат', 'ролл', 'рулет', 'wrap'],
    ['yogurt', 'йогурт', 'молоко', 'творог', 'сыр', 'йогурт', 'йогурт', 'jogurt'],
    ['beef', 'говядина', 'курица', 'свинина', 'рыба', 'говядина', 'яловичина', 'wołowina'],
    ['butter', 'масло', 'маргарин', 'вода', 'молоко', 'масло', 'масло', 'masło'],
    ['cheese', 'сыр', 'творог', 'масло', 'йогурт', 'сыр', 'сир', 'ser'],
    ['dressing', 'соус', 'вкус', 'ингредиент', 'приправа', 'соус', 'заправка', 'sos'],
    ['eggplant', 'баклажан', 'помидор', 'перец', 'картофель', 'баклажан', 'баклажан', 'bakłażan'],
    ['grape', 'виноград', 'яблоко', 'груша', 'апельсин', 'виноград', 'виноград', 'winogrono'],
    ['ham', 'ветчина', 'свинина', 'курица', 'говядина', 'ветчина', 'шинка', 'szynka'],
    ['ice', 'лёд', 'вода', 'сок', 'молоко', 'лёд', 'лід', 'lód'],
    ['jam', 'варенье', 'мёд', 'сироп', 'масло', 'варенье', 'варення', 'dżem'],
    ['lemon', 'лимон', 'апельсин', 'грейпфрут', 'лайм', 'лимон', 'лимон', 'cytryna'],

    ['meatloaf', 'мясной рулет', 'стейк', 'фрикадельки', 'колбаса', 'мясной рулет', 'м\'ясний рулет', 'klops'],
    ['mushroom', 'гриб', 'овощ', 'фрукт', 'специя', 'гриб', 'гриб', 'grzyb'],
    ['nut', 'орех', 'фрукты', 'овощи', 'ягоды', 'орех', 'горіх', 'orzech'],
    ['olive', 'оливка', 'грейпфрут', 'лимон', 'яблоко', 'оливка', 'оливка', 'oliwka'],
    ['pancake', 'блин', 'вафля', 'омлет', 'гренка', 'блин', 'млинець', 'naleśnik'],
    ['peanut', 'арахис', 'орех', 'фундук', 'миндаль', 'арахис', 'арахіс', 'orzech ziemny'],
    ['pepper', 'перец', 'соль', 'сахар', 'специи', 'перец', 'перець', 'pieprz']
    ['pie', 'пирог', 'кекс', 'пирожное', 'печенье', 'пирог', 'пиріг', 'ciasto'],
    ['pudding', 'пудинг', 'мороженое', 'десерт', 'крем', 'пудинг', 'пудинг', 'pudding'],
    ['quiche', 'киш', 'пирог', 'пицца', 'тарт', 'кіш', 'кіш', 'quiche'],
    ['rice', 'рис', 'паста', 'лапша', 'макароны', 'рис', 'рис', 'ryż'],
    ['scone', 'скон', 'пирог', 'печенье', 'булочка', 'скон', 'скон', 'bułeczka'],
    ['scone', 'лепешка', 'пирог', 'печенье', 'булочка', 'лепешка', 'коржик', 'ciasto'],
    ['scones', 'булочки', 'скон', 'лепешка', 'булочка', 'булочки', 'булочки', 'bułeczka'],
    ['soup', 'суп', 'салат', 'закуска', 'десерт', 'суп', 'суп', 'zupa'],
    ['taco', 'тако', 'буррито', 'энчилада', 'фахита', 'тако', 'тако', 'taco'],
    ['toast', 'тост', 'хлеб', 'блин', 'гренка', 'тост', 'тост', 'tost'],
    ['waffle', 'вафля', 'блин', 'пирог', 'кекс', 'вафля', 'вафля', 'gofr'],
    ['zucchini', 'цуккини', 'помидор', 'баклажан', 'перец', 'цуккини', 'цукіні', 'cukinia'],
    ['apple', 'яблоко', 'груша', 'апельсин', 'банан', 'яблоко', 'яблуко', 'jabłko'],
    ['bacon', 'бекон', 'свинина', 'ветчина', 'мясо', 'бекон', 'бекон', 'bekon'],
    ['barbecue', 'барбекю', 'гриль', 'жареное', 'пицца', 'барбекю', 'барбекю', 'barbecue'],
    ['cake', 'торт', 'пирог', 'кекс', 'печенье', 'торт', 'торт', 'tort'],
    ['carrot', 'морковь', 'помидор', 'огурец', 'свекла', 'морковь', 'морква', 'marchew'],
    ['cereal', 'крупа', 'молоко', 'хлеб', 'йогурт', 'крупа', 'крупа', 'kasza'],
    ['chocolate', 'шоколад', 'какао', 'конфета', 'десерт', 'шоколад', 'шоколад', 'czekolada'],
    ['cookie', 'печенье', 'кекс', 'пирог', 'булочка', 'печенье', 'печиво', 'ciastko'],
    ['cucumber', 'огурец', 'помидор', 'перец', 'морковь', 'огурец', 'огірок', 'ogórek'],
    ['cupcake', 'кекс', 'пирог', 'печенье', 'блин', 'кекс', 'кекс', 'babeczka'],
    ['dough', 'тесто', 'хлеб', 'печенье', 'пирог', 'тесто', 'тісто', 'ciasto'],
    ['fish', 'рыба', 'мясо', 'птица', 'морепродукты', 'рыба', 'риба', 'ryba'],
    ['grape', 'виноград', 'яблоко', 'груша', 'апельсин', 'виноград', 'виноград', 'winogrono'],
    ['ham', 'ветчина', 'свинина', 'курица', 'говядина', 'ветчина', 'шинка', 'szynka'],
    ['honey', 'мёд', 'сироп', 'варенье', 'сахар', 'мёд', 'мед', 'miód'],
    ['lettuce', 'салат', 'петрушка', 'укроп', 'шпинат', 'салат', 'салат', 'sałata'],
    ['mayo', 'майонез', 'кетчуп', 'горчица', 'соус', 'майонез', 'майонез', 'majonez'],
    ['noodles', 'лапша', 'паста', 'рис', 'макароны', 'лапша', 'локшина', 'makaron'],
    ['peach', 'персик', 'яблоко', 'груша', 'слива', 'персик', 'персик', 'brzoskwinia'],
    ['syrup', 'сироп', 'мёд', 'варенье', 'сахар', 'сироп', 'сироп', 'syrop'],
    ['tomato', 'помидор', 'огурец', 'перец', 'морковь', 'помидор', 'помідор', 'pomidor']
];
