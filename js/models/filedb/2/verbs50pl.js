const verbs50pl = [
  ["run", "biegać", "latać", "pływać", "skakać", "biegać", "", ""],
  ["eat", "jeść", "spać", "czytać", "pracować", "jeść", "jeść", ""],
  ["write", "pisać", "chodzić", "tańczyć", "grać", "pisać", "", ""],
  ["go", "iść", "skakać", "lecieć", "śpiewać", "iść", "", ""],
  ["see", "widzieć", "mówić", "czuć", "słyszeć", "widzieć", "", ""],
  ["hear", "słyszeć", "widzieć", "dotykać", "skakać", "słyszeć", "", ""],
  ["sleep", "spać", "chodzić", "biegać", "pływać", "spać", "", ""],
  ["speak", "mówić", "słuchać", "widzieć", "skakać", "mówić", "", ""],
  ["read", "czytać", "pisać", "biegać", "latać", "czytać", "", ""],
  ["drink", "pić", "jeść", "patrzeć", "czytać", "pić", "", ""],
  ["fly", "latać", "skakać", "chodzić", "czytać", "latać", "", ""],
  ["swim", "pływać", "latać", "biegać", "spać", "pływać", "", ""],
  ["drive", "prowadzić", "lecieć", "iść", "skakać", "prowadzić", "", ""],
  ["walk", "chodzić", "pływać", "lecieć", "patrzeć", "chodzić", "", ""],
  ["jump", "skakać", "biegać", "latać", "iść", "skakać", "", ""],
  ["sing", "śpiewać", "spać", "biegać", "skakać", "śpiewać", "", ""],
  ["dance", "tańczyć", "śpiewać", "czytać", "latać", "tańczyć", "", ""],
  ["teach", "uczyć", "pływać", "skakać", "czytać", "uczyć", "", ""],
  ["learn", "uczyć się", "spać", "latać", "grać", "uczyć się", "", ""],
  ["play", "grać", "czytać", "biegać", "lecieć", "grać", "", ""],
  ["paint", "malować", "pływać", "iść", "tańczyć", "malować", "", ""],
  ["draw", "rysować", "pisać", "patrzeć", "latać", "rysować", "", ""],
  ["cook", "gotować", "biegać", "latać", "grać", "gotować", "", ""],
  ["open", "otwierać", "zamykać", "czytać", "pisać", "otwierać", "", ""],
  ["close", "zamykać", "otwierać", "iść", "grać", "zamykać", "", ""],
  ["sit", "siedzieć", "stać", "iść", "skakać", "siedzieć", "", ""],
  ["stand", "stać", "siedzieć", "lecieć", "czytać", "stać", "", ""],
  ["love", "kochać", "nienawidzić", "słuchać", "latać", "kochać", "", ""],
  ["hate", "nienawidzić", "kochać", "skakać", "biegać", "nienawidzić", "", ""],
  ["look", "patrzeć", "słuchać", "mówić", "skakać", "patrzeć", "", ""],
  ["watch", "obserwować", "biegać", "czytać", "słuchać", "obserwować", "", ""],
  ["watch", "oglądać", "biegać", "czytać", "słuchać", "oglądać", "", ""],
  ["smile", "uśmiechać się", "płakać", "spać", "latać", "uśmiechać się", "", ""],
  ["cry", "płakać", "uśmiechać się", "latać", "pisać", "płakać", "", ""],
  ["give", "dawać", "brać", "patrzeć", "czytać", "dawać", "", ""],
  ["take", "brać", "dawać", "grać", "skakać", "brać", "", ""],
  ["buy", "kupować", "sprzedawać", "grać", "pracować", "kupować", "", ""],
  ["sell", "sprzedawać", "kupować", "lecieć", "spać", "sprzedawać", "", ""],
  ["help", "pomagać", "przeszkadzać", "spać", "śmiać się", "pomagać", "", ""],
  ["need", "potrzebować", "chcieć", "czytać", "latać", "potrzebować", "", ""],
  ["want", "chcieć", "potrzebować", "skakać", "śpiewać", "chcieć", "", ""],
  ["make", "robić", "łamać", "iść", "latać", "robić", "", ""],
  ["break", "łamać", "robić", "pisać", "grać", "łamać", "", ""],
  ["fix", "naprawiać", "łamać", "iść", "czytać", "naprawiać", "", ""],
  ["find", "znaleźć", "zgubić", "iść", "biegać", "znaleźć", "", ""],
  ["lose", "zgubić", "znaleźć", "czytać", "biegać", "zgubić", "", ""],
  ["call", "dzwonić", "grać", "patrzeć", "latać", "dzwonić", "", ""],
  ["answer", "odpowiadać", "pytać", "lecieć", "biegać", "odpowiadać", "", ""],
  ["ask", "pytać", "odpowiadać", "grać", "czytać", "pytać", "", ""],
  ["clean", "czyścić", "brudzić", "rysować", "spać", "czyścić", "", ""],
  ["dirty", "brudzić", "czyścić", "grać", "biegać", "brudzić", "", ""],
  ];

// этот код добавляет правильный перевод - это индекс 1 на место с 
// индексом 5, оттуда движек использует это значение
// это вместо того, чтобы заполнить это с помощью чата джипити
// такой фокус с переводом на украинский и польский не получится,
// нужен новый массив
verbs50pl.forEach((el, index, array) => {
  array[index][7] = el[1];
});
  
// Если это свойство есть, то оно попадает в заголовок теста
verbs50pl.nameLeson = "Verbs 50";
