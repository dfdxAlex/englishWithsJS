const commonFood100ua = [
    ['appetizer', 'закуска', 'десерт', 'основна страва', 'напій', 'закуска', 'закуска', 'przystawka'],
    ['beverage', 'напій', 'їжа', 'закуска', 'десерт', 'напій', 'напій', 'napój'],
    ['buffet', 'шведський стіл', 'обслуговування', 'меню', 'a la carte', 'шведський стіл', 'шведський стіл', 'bufet'],
    ['chef', 'шеф-кухар', 'офіціант', 'помічник', 'бармен', 'шеф-кухар', 'шеф-кухар', 'szef kuchni'],
    ['dish', 'страва', 'інгредієнт', 'напій', 'десерт', 'страва', 'страва', 'danie'],
    ['entree', 'основна страва', 'закуска', 'десерт', 'напій', 'основна страва', 'основна страва', 'danie główne'],
    ['ingredient', 'інгредієнт', 'страва', 'напій', 'приправи', 'інгредієнт', 'інгредієнт', 'składnik'],
    ['menu', 'меню', 'чек', 'рецепт', 'святкова пропозиція', 'меню', 'меню', 'menu'],
    ['order', 'замовлення', 'оплата', 'резерв', 'інвентар', 'замовлення', 'замовлення', 'zamówienie'],
    ['plate', 'тарілка', 'чашка', 'прибор', 'келих', 'тарілка', 'тарілка', 'talerz'],
    ['reservation', 'резервація', 'бронювання', 'замовлення', 'оплата', 'резервування', 'бронювання', 'rezerwacja'],
    ['service', 'обслуговування', 'їжа', 'десерт', 'чек', 'обслуговування', 'обслуговування', 'obsługa'],
    ['specialty', 'фірмова страва', 'закуска', 'напій', 'десерт', 'фірмова страва', 'фірмова страва', 'specjalność'],
    ['starter', 'закуска', 'основна страва', 'десерт', 'напій', 'закуска', 'закуска', 'przystawka'],
    ['table', 'стіл', 'стілець', 'меню', 'обслуговування', 'стіл', 'стіл', 'stół'],
    ['taste', 'смак', 'аромат', 'текстура', 'зовнішній вигляд', 'смак', 'смак', 'smak'],
    ['waiter', 'офіціант', 'шеф-кухар', 'бармен', 'клієнт', 'офіціант', 'офіціант', 'kelner'],
    ['waitress', 'офіціантка', 'шеф-кухар', 'бармен', 'клієнт', 'офіціантка', 'офіціантка', 'kelnerka'],
    ['wine', 'вино', 'пиво', 'вода', 'сік', 'вино', 'вино', 'wino'],
    ['baker', 'пекар', 'шеф-кухар', 'бармен', 'офіціант', 'пекар', 'пекар', 'piekarz'],
    ['barista', 'бариста', 'шеф-кухар', 'пекар', 'офіціант', 'бариста', 'бариста', 'barista'],
    ['beef', 'яловичина', 'курка', 'свинина', 'риба', 'яловичина', 'яловичина', 'wołowina'],
    ['bread', 'хліб', 'булка', 'пиріг', 'кекс', 'хліб', 'хліб', 'chleb'],
    ['butter', 'масло', 'маргарин', 'вода', 'молоко', 'масло', 'масло', 'masło'],
    ['cheese', 'сир', 'сир', 'масло', 'йогурт', 'сир', 'сир', 'ser'],
    ['chicken', 'курка', 'яловичина', 'свинина', 'риба', 'курка', 'курка', 'kurczak'],
    ['coffee', 'кава', 'чай', 'вода', 'сік', 'кава', 'кава', 'kawa'],
    ['dessert', 'десерт', 'основна страва', 'закуска', 'напій', 'десерт', 'десерт', 'deser'],
    ['egg', 'яйце', 'молоко', 'сир', 'масло', 'яйце', 'яйце', 'jajko'],
    ['fish', 'риба', 'м\'ясо', 'птиця', 'морепродукти', 'риба', 'риба', 'ryba'],
    ['flavor', 'смак', 'аромат', 'текстура', 'зовнішній вигляд', 'смак', 'смак', 'smak'],
    ['fruit', 'фрукти', 'овочі', 'м’ясо', 'молочні продукти', 'фрукти', 'фрукти', 'owoce'],
    ['grill', 'гриль', 'духовка', 'плита', 'мультиварка', 'гриль', 'гриль', 'grill'],
    ['herb', 'трави', 'спеції', 'овочі', 'фрукти', 'трави', 'трави', 'zioła'],
    ['lunch', 'обід', 'сніданок', 'вечеря', 'перекус', 'обід', 'обід', 'lunch'],
    ['meat', 'м’ясо', 'риба', 'птиця', 'морепродукти', 'м’ясо', 'м’ясо', 'mięso'],
    ['menu', 'меню', 'чек', 'рецепт', 'святкова пропозиція', 'меню', 'меню', 'menu'],
    ['noodle', 'локшина', 'рис', 'макарони', 'хліб', 'локшина', 'локшина', 'makaron'],
    ['oil', 'олія', 'вода', 'оцет', 'соєвий соус', 'олія', 'олія', 'olej'],
    ['pasta', 'паста', 'рис', 'локшина', 'макарони', 'паста', 'паста', 'pasta'],
    ['pork', 'свинина', 'яловичина', 'курка', 'риба', 'свинина', 'свинина', 'wieprzowina'],
    ['rice', 'рис', 'паста', 'макарони', 'локшина', 'рис', 'рис', 'ryż'],
    ['salad', 'салат', 'суп', 'закуска', 'десерт', 'салат', 'салат', 'sałatka'],
    ['salt', 'сіль', 'цукор', 'перець', 'спеції', 'сіль', 'сіль', 'sól'],
    ['sandwich', 'бутерброд', 'піца', 'суп', 'салат', 'бутерброд', 'бутерброд', 'kanapka'],
    ['sauce', 'соус', 'паста', 'м’ясо', 'салат', 'соус', 'соус', 'sos'],
    ['seasoning', 'приправа', 'спеції', 'соус', 'десерт', 'приправа', 'приправа', 'przyprawy'],
    ['snack', 'перекус', 'основна страва', 'десерт', 'напій', 'перекус', 'перекус', 'przekąska'],
    ['soup', 'суп', 'салат', 'закуска', 'десерт', 'суп', 'суп', 'zupa'],
    ['spice', 'спеції', 'сіль', 'цукор', 'олія', 'спеції', 'спеції', 'przyprawy'],
    ['steak', 'стейк', 'гамбургер', 'курка', 'сосиски', 'стейк', 'стейк', 'stek'],
    ['sugar', 'цукор', 'сіль', 'мед', 'сироп', 'цукор', 'цукор', 'cukier'],
    ['tea', 'чай', 'кава', 'вода', 'сік', 'чай', 'чай', 'herbata'],
    ['treat', 'частування', 'основна страва', 'десерт', 'напій', 'частування', 'частування', 'przekąska'],
    ['vegetable', 'овоч', 'фрукт', 'м’ясо', 'риба', 'овоч', 'овоч', 'warzywo'],
    ['vinegar', 'оцет', 'олія', 'вода', 'соєвий соус', 'оцет', 'оцет', 'ocet'],
    ['wine', 'вино', 'пиво', 'вода', 'сік', 'вино', 'вино', 'wino'],
    ['wrap', 'рулет', 'піца', 'суп', 'салат', 'рулет', 'рулет', 'wrap'],
    ['yogurt', 'йогурт', 'молоко', 'сир', 'сир', 'йогурт', 'йогурт', 'jogurt'],
    ['beef', 'яловичина', 'курка', 'свинина', 'риба', 'яловичина', 'яловичина', 'wołowina'],
    ['butter', 'масло', 'маргарин', 'вода', 'молоко', 'масло', 'масло', 'masło'],
    ['cheese', 'сир', 'творог', 'масло', 'йогурт', 'сир', 'сир', 'ser'],
    ['dressing', 'заправка', 'смак', 'інгредієнт', 'приправа', 'заправка', 'заправка', 'sos'],
    ['eggplant', 'баклажан', 'помідор', 'перець', 'картопля', 'баклажан', 'баклажан', 'bakłażan'],
    ['grape', 'виноград', 'яблуко', 'груша', 'апельсин', 'виноград', 'виноград', 'winogrono'],
    ['ham', 'шинка', 'свинина', 'курка', 'яловичина', 'шинка', 'шинка', 'szynka'],
    ['ice', 'лід', 'вода', 'сік', 'молоко', 'лід', 'лід', 'lód'],
    ['jam', 'варення', 'мед', 'сироп', 'масло', 'варення', 'варення', 'dżem'],
    ['lemon', 'лимон', 'апельсин', 'грейпфрут', 'лайм', 'лимон', 'лимон', 'cytryna'],
    ['meatloaf', 'м\'ясний рулет', 'стейк', 'фрикадельки', 'ковбаса', 'м\'ясний рулет', 'м\'ясний рулет', 'klops'],
    ['mushroom', 'гриб', 'овоч', 'фрукт', 'спеція', 'гриб', 'гриб', 'grzyb'],
    ['nut', 'горіх', 'фрукти', 'овочі', 'ягоди', 'горіх', 'горіх', 'orzech'],
    ['olive', 'оливка', 'грейпфрут', 'лимон', 'яблуко', 'оливка', 'оливка', 'oliwka'],
    ['pancake', 'млинець', 'вафля', 'омлет', 'гренка', 'млинець', 'млинець', 'naleśnik'],
    ['peanut', 'арахіс', 'горіх', 'фундук', 'мигдаль', 'арахіс', 'арахіс', 'orzech ziemny'],
    ['pepper', 'перець', 'сіль', 'цукор', 'спеції', 'перець', 'перець', 'pieprz'],
    ['pie', 'пиріг', 'кекс', 'тістечко', 'печиво', 'пиріг', 'пиріг', 'ciasto'],
    ['pudding', 'пудинг', 'морозиво', 'десерт', 'крем', 'пудинг', 'пудинг', 'pudding'],
    ['quiche', 'кіш', 'пиріг', 'піца', 'тарт', 'кіш', 'кіш', 'quiche'],
    ['rice', 'рис', 'паста', 'локшина', 'макарони', 'рис', 'рис', 'ryż'],
    ['scone', 'скон', 'пиріг', 'печиво', 'булочка', 'скон', 'скон', 'bułeczka'],
    ['soup', 'суп', 'салат', 'закуска', 'десерт', 'суп', 'суп', 'zupa'],
    ['taco', 'тако', 'буріто', 'енчилада', 'фахіта', 'тако', 'тако', 'taco'],
    ['toast', 'тост', 'хліб', 'млинець', 'гренка', 'тост', 'тост', 'tost'],
    ['waffle', 'вафля', 'млинець', 'пиріг', 'кекс', 'вафля', 'вафля', 'gofr'],
    ['zucchini', 'цукіні', 'помідор', 'баклажан', 'перець', 'цукіні', 'цукіні', 'cukinia'],
    ['apple', 'яблуко', 'груша', 'апельсин', 'банан', 'яблуко', 'яблуко', 'jabłko'],
    ['bacon', 'бекон', 'свинина', 'шинка', 'м\'ясо', 'бекон', 'бекон', 'bekon'],
    ['barbecue', 'барбекю', 'гриль', 'смажене', 'піца', 'барбекю', 'барбекю', 'barbecue'],
    ['cake', 'торт', 'пиріг', 'кекс', 'печиво', 'торт', 'торт', 'tort'],
    ['carrot', 'морква', 'помідор', 'огірок', 'буряк', 'морква', 'морква', 'marchew'],
    ['cereal', 'крупа', 'молоко', 'хліб', 'йогурт', 'крупа', 'крупа', 'kasza'],
    ['chocolate', 'шоколад', 'какао', 'цукерка', 'десерт', 'шоколад', 'шоколад', 'czekolada'],
    ['cookie', 'печиво', 'кекс', 'пиріг', 'булочка', 'печиво', 'печиво', 'ciastko'],
    ['cucumber', 'огірок', 'помідор', 'перець', 'морква', 'огірок', 'огірок', 'ogórek'],
    ['cupcake', 'кекс', 'пиріг', 'печиво', 'млинець', 'кекс', 'кекс', 'babeczka'],
    ['dough', 'тісто', 'хліб', 'печиво', 'пиріг', 'тісто', 'тісто', 'ciasto'],
    ['fish', 'риба', 'м\'ясо', 'птиця', 'морепродукти', 'риба', 'риба', 'ryba'],
    ['grape', 'виноград', 'яблуко', 'груша', 'апельсин', 'виноград', 'виноград', 'winogrono'],
    ['ham', 'шинка', 'свинина', 'курка', 'яловичина', 'шинка', 'шинка', 'szynka'],
    ['honey', 'мед', 'сироп', 'варення', 'цукор', 'мед', 'мед', 'miód'],
    ['lettuce', 'салат', 'петрушка', 'кріп', 'шпинат', 'салат', 'салат', 'sałata'],
    ['mayo', 'майонез', 'кетчуп', 'гірчиця', 'соус', 'майонез', 'майонез', 'majonez'],
    ['noodles', 'локшина', 'паста', 'рис', 'макарони', 'локшина', 'локшина', 'makaron'],
    ['peach', 'персик', 'яблуко', 'груша', 'слива', 'персик', 'персик', 'brzoskwinia'],
    ['syrup', 'сироп', 'мед', 'варення', 'цукор', 'сироп', 'сироп', 'syrop'],
    ['tomato', 'помідор', 'огірок', 'перець', 'морква', 'помідор', 'помідор', 'pomidor']

];

    // Если это свойство есть, то оно попадает в заголовок теста
    commonFood100ua.nameLeson = "Food 100";
