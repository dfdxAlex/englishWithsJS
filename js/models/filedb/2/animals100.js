const animals100 = [
    ["dog", "собака", "кошка", "волк", "лиса", "", "", ""],
    ["cat", "кошка", "собака", "тигр", "леопард", "", "", ""],
    ["wolf", "волк", "медведь", "пантера", "енот", "", "", ""],
    ["fox", "лиса", "рысь", "хорёк", "сурок", "", "", ""],
    ["bear", "медведь", "кабан", "лось", "крот", "", "", ""],
    ["lion", "лев", "тигр", "гепард", "пума", "", "", ""],
    ["tiger", "тигр", "лев", "рысь", "шакал", "", "", ""],
    ["rabbit", "кролик", "заяц", "кенгуру", "сурок", "", "", ""],
    ["hare", "заяц", "кролик", "дикобраз", "мышь", "", "", ""],
    ["squirrel", "белка", "хомяк", "выдра", "енот", "", "", ""],
    ["deer", "олень", "лось", "коза", "газель", "", "", ""],
    ["moose", "лось", "бизон", "верблюд", "зебра", "", "", ""],
    ["horse", "лошадь", "осел", "корова", "козёл", "", "", ""],
    ["cow", "корова", "бык", "антилопа", "кошка", "", "", ""],
    ["goat", "коза", "овца", "зебра", "осёл", "", "", ""],
    ["sheep", "овца", "коза", "жираф", "пума", "", "", ""],
    ["boar", "кабан", "бизон", "сурок", "выдра", "", "", ""],
    ["hedgehog", "ёж", "хомяк", "барсук", "волк", "", "", ""],
    ["badger", "барсук", "енот", "мышь", "гепард", "", "", ""],
    ["raccoon", "енот", "сурок", "выдра", "барсук", "", "", ""],
    ["beaver", "бобр", "енот", "мышь", "рысь", "", "", ""],
    ["otter", "выдра", "норка", "бобёр", "барсук", "", "", ""],
    ["mole", "крот", "хорёк", "выдра", "дикобраз", "", "", ""],
    ["mouse", "мышь", "крыса", "барсук", "кенгуру", "", "", ""],
    ["rat", "крыса", "мышь", "хомяк", "енот", "", "", ""],
    ["hamster", "хомяк", "мышь", "барсук", "лось", "", "", ""],
    ["ferret", "хорёк", "кролик", "енот", "барсук", "", "", ""],
    ["chinchilla", "шиншилла", "кошка", "кролик", "выдра", "", "", ""],
    ["kangaroo", "кенгуру", "коала", "заяц", "опоссум", "", "", ""],
    ["koala", "коала", "медведь", "лиса", "енот", "", "", ""],
    ["panda", "панда", "медведь", "енот", "тигр", "", "", ""],
    ["giraffe", "жираф", "лошадь", "олень", "зебра", "", "", ""],
    ["zebra", "зебра", "лошадь", "газель", "антилопа", "", "", ""],
    ["elephant", "слон", "носорог", "гиппопотам", "мамонт", "", "", ""],
    ["rhino", "носорог", "слон", "крокодил", "тигр", "", "", ""],
    ["hippo", "гиппопотам", "слон", "аллигатор", "медведь", "", "", ""],
    ["crocodile", "крокодил", "аллигатор", "дракон", "варан", "", "", ""],
    ["alligator", "аллигатор", "крокодил", "варан", "питон", "", "", ""],
    ["python", "питон", "уж", "кобра", "варан", "", "", ""],
    ["cobra", "кобра", "питон", "ящерица", "дракон", "", "", ""],
    ["lizard", "ящерица", "хамелеон", "дракон", "питон", "", "", ""],
    ["chameleon", "хамелеон", "варан", "крокодил", "уж", "", "", ""],
    ["turtle", "черепаха", "лягушка", "змея", "крокодил", "", "", ""],
    ["frog", "лягушка", "жаба", "черепаха", "рыба", "", "", ""],
    ["toad", "жаба", "лягушка", "змея", "ящерица", "", "", ""],
    ["newt", "тритон", "геккон", "лягушка", "уж", "", "", ""],
    ["gecko", "геккон", "варан", "тритон", "лягушка", "", "", ""],
    ["salamander", "саламандра", "геккон", "ящерица", "варан", "", "", ""],
    ["alpaca", "альпака", "лама", "козёл", "антилопа", "", "", ""],
    ["anteater", "муравьед", "броненосец", "сурок", "енот", "", "", ""],
    ["armadillo", "броненосец", "муравьед", "кабара", "бобёр", "", "", ""],
    ["bison", "бизон", "бык", "лось", "козёл", "", "", ""],
    ["buffalo", "буйвол", "бизон", "осёл", "баран", "", "", ""],
    ["camel", "верблюд", "лошадь", "осёл", "коза", "", "", ""],
    ["caracal", "каракал", "рысь", "лиса", "пума", "", "", ""],
    ["cheetah", "гепард", "леопард", "тигр", "пантера", "", "", ""],
    ["coyote", "койот", "волк", "лисица", "енот", "", "", ""],
    ["dingo", "динго", "волк", "лиса", "койот", "", "", ""],
    ["donkey", "осёл", "лошадь", "зебра", "козёл", "", "", ""],
    ["dugong", "дюгонь", "морж", "котик", "тюлень", "", "", ""],
    ["echidna", "ехидна", "утконос", "сурикат", "какаду", "", "", ""],
    ["ermine", "горностай", "ласка", "норка", "шакал", "", "", ""],
    ["gazelle", "газель", "антилопа", "лошадь", "коза", "", "", ""],
    ["gnu", "гну", "бизон", "антилопа", "лошадь", "", "", ""],
    ["hyena", "гиена", "шакал", "волк", "лиса", "", "", ""],
    ["ibex", "горный козёл", "антилопа", "лось", "овца", "", "", ""],
    ["jackal", "шакал", "лиса", "волк", "пума", "", "", ""],
    ["jaguar", "ягуар", "леопард", "гепард", "тигр", "", "", ""],
    ["kinkajou", "кинкажу", "енот", "опоссум", "хорёк", "", "", ""],
    ["lemur", "лемур", "мартышка", "капуцин", "шимпанзе", "", "", ""],
    ["lynx", "рысь", "пума", "леопард", "барсук", "", "", ""],
    ["manatee", "ламантин", "морж", "котик", "тюлень", "", "", ""],
    ["marmoset", "игрунка", "капуцин", "шимпанзе", "лемур", "", "", ""],
    ["meerkat", "сурикат", "енот", "ласка", "норка", "", "", ""],
    ["monkey", "обезьяна", "шимпанзе", "мартышка", "орангутан", "", "", ""],
    ["ocelot", "оцелот", "леопард", "гепард", "пума", "", "", ""],
    ["orangutan", "орангутан", "шимпанзе", "горилла", "капуцин", "", "", ""],
    ["platypus", "утконос", "ехидна", "барсук", "дикобраз", "", "", ""],
    ["porcupine", "дикобраз", "барсук", "еж", "сурок", "", "", ""],
    ["pronghorn", "вилорог", "антилопа", "газель", "лось", "", "", ""],
    ["quokka", "квокка", "кенгуру", "опоссум", "коала", "", "", ""],
    ["rhinoceros", "носорог", "гиппопотам", "слон", "бизон", "", "", ""],
    ["sea lion", "морской лев", "котик", "тюлень", "морж", "", "", ""],
    ["sloth", "ленивец", "коала", "обезьяна", "опоссум", "", "", ""],
    ["snow leopard", "снежный барс", "пума", "рысь", "тигр", "", "", ""],
    ["springbok", "спрингбок", "антилопа", "газель", "козёл", "", "", ""],
    ["sugar glider", "сахарный поссум", "летучая мышь", "кенгуру", "опоссум", "", "", ""],
    ["tapir", "тапир", "кабан", "бегемот", "осьминог", "", "", ""],
    ["tasmanian devil", "тасманийский дьявол", "енот", "сурикат", "барсук", "", "", ""],
    ["thylacine", "тиласин", "волк", "пума", "лиса", "", "", ""],
    ["warthog", "бородавочник", "кабан", "бизон", "антилопа", "", "", ""],
    ["wombat", "вомбат", "кенгуру", "коала", "опоссум", "", "", ""],
    ["yak", "як", "бизон", "корова", "лошадь", "", "", ""],
    ["zebu", "зебу", "корова", "бизон", "кабан", "", "", ""],
    ["альпака", "alpaca", "llama", "goat", "antelope", "", "", ""],
    ["муравьед", "anteater", "armadillo", "marmot", "raccoon", "", "", ""],
    ["броненосец", "armadillo", "anteater", "beaver", "capybara", "", "", ""],
    ["бизон", "bison", "bull", "moose", "goat", "", "", ""],
    ["буйвол", "buffalo", "bison", "donkey", "ram", "", "", ""],
    ["верблюд", "camel", "horse", "donkey", "goat", "", "", ""],
    ["каракал", "caracal", "lynx", "fox", "puma", "", "", ""],
    ["гепард", "cheetah", "leopard", "tiger", "panther", "", "", ""],
    ["койот", "coyote", "wolf", "fox", "raccoon", "", "", ""],
    ["динго", "dingo", "wolf", "fox", "coyote", "", "", ""],
    ["осёл", "donkey", "horse", "zebra", "goat", "", "", ""],
    ["дюгонь", "dugong", "walrus", "seal", "sea otter", "", "", ""],
    ["ехидна", "echidna", "platypus", "meerkat", "cockatoo", "", "", ""],
    ["горностай", "ermine", "weasel", "mink", "jackal", "", "", ""],
    ["газель", "gazelle", "antelope", "horse", "goat", "", "", ""],
    ["гну", "gnu", "bison", "antelope", "horse", "", "", ""],
    ["гиена", "hyena", "jackal", "wolf", "fox", "", "", ""],
    ["горный козёл", "ibex", "antelope", "moose", "sheep", "", "", ""],
    ["шакал", "jackal", "fox", "wolf", "puma", "", "", ""],
    ["ягуар", "jaguar", "leopard", "cheetah", "tiger", "", "", ""],
    ["кинкажу", "kinkajou", "raccoon", "opossum", "ferret", "", "", ""],
    ["лемур", "lemur", "marmoset", "capuchin", "chimpanzee", "", "", ""],
    ["рысь", "lynx", "puma", "leopard", "badger", "", "", ""],
    ["ламантин", "manatee", "walrus", "seal", "sea lion", "", "", ""],
    ["игрунка", "marmoset", "capuchin", "chimpanzee", "lemur", "", "", ""],
    ["сурикат", "meerkat", "raccoon", "weasel", "mink", "", "", ""],
    ["обезьяна", "monkey", "chimpanzee", "marmoset", "orangutan", "", "", ""],
    ["оцелот", "ocelot", "leopard", "cheetah", "puma", "", "", ""],
    ["орангутан", "orangutan", "chimpanzee", "gorilla", "capuchin", "", "", ""],
    ["утконос", "platypus", "echidna", "badger", "porcupine", "", "", ""],
    ["дикобраз", "porcupine", "badger", "hedgehog", "marmot", "", "", ""],
    ["вилорог", "pronghorn", "antelope", "gazelle", "moose", "", "", ""],
    ["квокка", "quokka", "kangaroo", "opossum", "koala", "", "", ""],
    ["носорог", "rhinoceros", "hippopotamus", "elephant", "bison", "", "", ""],
    ["морской лев", "sea lion", "fur seal", "seal", "walrus", "", "", ""],
    ["ленивец", "sloth", "koala", "monkey", "opossum", "", "", ""],
    ["снежный барс", "snow leopard", "puma", "lynx", "tiger", "", "", ""],
    ["спрингбок", "springbok", "antelope", "gazelle", "goat", "", "", ""],
    ["сахарный поссум", "sugar glider", "bat", "kangaroo", "opossum", "", "", ""],
    ["тапир", "tapir", "boar", "hippopotamus", "aardvark", "", "", ""],
    ["тасманийский дьявол", "tasmanian devil", "raccoon", "meerkat", "badger", "", "", ""],
    ["тиласин", "thylacine", "wolf", "puma", "fox", "", "", ""],
    ["бородавочник", "warthog", "boar", "bison", "antelope", "", "", ""],
    ["вомбат", "wombat", "kangaroo", "koala", "opossum", "", "", ""],
    ["як", "yak", "bison", "cow", "horse", "", "", ""],
    ["зебу", "zebu", "cow", "bison", "boar", "", "", ""],
  ];
// этот код добавляет правильный перевод - это индекс 1 на место с 
// индексом 5, оттуда движек использует это значение
// это вместо того, чтобы заполнить это с помощью чата джипити
// такой фокус с переводом на украинский и польский не получится,
// нужен новый массив
animals100.forEach((el, index, array) => {
    array[index][5] = el[1];
});

// Если это свойство есть, то оно попадает в заголовок теста
animals100.nameLeson = "Animals 100";
