// This code is written inefficiently.

import returnInfoUnit from '../controllers/forThoury/indexForThoury.js';

// образец, чтобы долго не думать, если нужно будет возвращать старое подключение
// файлов для перевода помощи и теории
// при этом нужно будет удалить ссылку на объект returnInfoUnit.
// import { returnInfoUnit22EN } from './../view/thoury/returnInfoUnit22EN.js';

export function exportBDTranslate()
{

const BDTranslate = [];

BDTranslate.push(
    [``, 
     ``, 
     ``,
     ``]);

BDTranslate.push(
  [`be/have/do in present and past tenses`, 
  `be/have/do in present and past tenses`, 
  `be/have/do in present and past tenses`, 
  `be/have/do in present and past tenses`]);
BDTranslate.push(
  [returnInfoUnit.helpForProgramRU(), 
   returnInfoUnit.helpForProgramUA(), 
   returnInfoUnit.helpForProgramPL(),
   returnInfoUnit.helpForProgramEN()]);
BDTranslate.push(
  [returnInfoUnit.helpForHomeMenuRU(), 
   returnInfoUnit.helpForHomeMenuUA(), 
   returnInfoUnit.helpForHomeMenuPL(),
   returnInfoUnit.helpForHomeMenuEN()]);
BDTranslate.push(
  [returnInfoUnit.helpForGreenPoleOneRU(), 
   returnInfoUnit.helpForGreenPoleOneUA(), 
   returnInfoUnit.helpForGreenPoleOnePL(),
   returnInfoUnit.helpForGreenPoleOneEN()]);
BDTranslate.push(
  [`Примерно:`, 
   `Приблизно:`, 
   `Mówimy o:`,
   `We are talking approximately about:`]);
BDTranslate.push(
  [`Последний ответ здесь`, 
   `Остання відповідь тут`, 
   `Najnowsza odpowiedź tutaj`,
   `The last answer is here`]);
BDTranslate.push(
  [`Предыдущий вопрос здесь`, 
   `Попереднє питання тут`, 
   `Poprzednie pytanie tutaj`,
   `Previous question here`]);
BDTranslate.push(
  [`В этом тесте нужно собрать предложение из предложенных слов. Имейте в виду, что иногда собранное предложение может не совпадать с общей темой теста.`, 
   `У цьому тесті потрібно зібрати пропозицію із запропонованих слів. Майте на увазі, що інколи зібрана пропозиція може не співпадати із загальною темою тесту.`, 
   `W tym teście musisz ułożyć zdanie z podanych słów. Pamiętaj, że czasami zebrane zdanie może nie pokrywać się z ogólnym tematem testu.`,
   `In this test you need to assemble a sentence from the given words. Keep in mind that sometimes the assembled sentence may not match the general topic of the test.`]);
BDTranslate.push(
  [`(может отличаться)`, 
   `(може відрізнятися)`, 
   `(może się różnić)`,
   `(may differ)`]);
BDTranslate.push(
  [returnInfoUnit.returnLevel20(), 
   returnInfoUnit.returnLevel20UA(), 
   returnInfoUnit.returnLevel20PL(),
   returnInfoUnit.returnLevel20EN()]);
BDTranslate.push(
  [returnInfoUnit.returnInfoForDiamant(), 
   returnInfoUnit.returnInfoForDiamantUA(), 
   returnInfoUnit.returnInfoForDiamantPL(),
   returnInfoUnit.returnInfoForDiamantEN()]);
BDTranslate.push(
   [returnInfoUnit.returnLevel35(), 
    returnInfoUnit.returnLevel35UA(), 
    returnInfoUnit.returnLevel35PL(),
    returnInfoUnit.returnLevel35EN()]);
BDTranslate.push(
   [returnInfoUnit.returnLevel34(), 
    returnInfoUnit.returnLevel34UA(), 
    returnInfoUnit.returnLevel34PL(),
    returnInfoUnit.returnLevel34EN()]);
BDTranslate.push(
   [`Вставьте глагол вместо троеточия или подберите правильное предложение в продолженном прошедшем времени.`, 
    `Вставте дієслово замість три крапки або підберіть правильну пропозицію в минулому часі.`, 
    `Wstaw czasownik zamiast wielokropka lub wybierz właściwe zdanie w czasie przeszłym ciągłym.`,
    `Insert a verb instead of the ellipsis or choose the correct sentence in the past continuous tense.`]);
BDTranslate.push(
   [returnInfoUnit.returnLevel33(), 
    returnInfoUnit.returnLevel33UA(), 
    returnInfoUnit.returnLevel33PL(),
    returnInfoUnit.returnLevel33EN()]);
BDTranslate.push(
    [returnInfoUnit.returnLevel32(), 
     returnInfoUnit.returnLevel32UA(), 
     returnInfoUnit.returnLevel32PL(),
     returnInfoUnit.returnLevel32EN()]);
BDTranslate.push(
   [`Past Simple отрицательные и вопросы`, 
    `Past Simple негативні та питання`, 
    `Past Simple przeczenia i pytania`,
    `Past Simple Negative and Questions`]);
BDTranslate.push(
    [`Вставьте глагол вместо троеточия или подберите правильное предложение в простом прошедшем времени.`, 
     `Вставте дієслово замість три крапки або підберіть правильну пропозицію в простому часі.`, 
     `Wstaw czasownik zamiast wielokropka lub wybierz właściwe zdanie w czasie przeszłym prostym.`,
     `Insert a verb instead of the ellipsis or choose the correct sentence in the simple past tense.`]);
BDTranslate.push(
   [returnInfoUnit.returnLevel31(), 
    returnInfoUnit.returnLevel31UA(), 
    returnInfoUnit.returnLevel31PL(),
    returnInfoUnit.returnLevel31EN()]);
BDTranslate.push(
    [`Подобрать пару правильный - неправильный глагол. Тест разбавлен небольшим числом правильных глаголов.`, 
     `Підібрати пару правильне - неправильне дієслово. Тест розбавлений невеликою кількістю правильних дієслів.`, 
     `Dopasuj właściwy czasownik nieregularny. Test jest rozcieńczany niewielką liczbą czasowników regularnych.`,
     `Match a pair of regular and irregular verbs. The test is diluted with a small number of regular verbs.`]);
BDTranslate.push(
   [`Прошедшее простое`, 
    `Минуле просте`, 
    `Przeszłość prosta`,
    `Past simple`]);
BDTranslate.push(
    [`Помощь`, 
     `Допомога`, 
     `Pomoc`,
     `Help`]);
BDTranslate.push(
    [`Теория:`, 
     `Теорія:`, 
     `Teoria:`,
     `Theory:`]);
BDTranslate.push(
    [`Задание теста:`, 
     `Завдання тесту:`, 
     `Zadanie testowe:`,
     `Test task:`]);
BDTranslate.push(
    [`Переводов:`, 
     `Перекладів:`, 
     `Tłumaczenia:`,
     `Translations:`]);
BDTranslate.push(
    [`Успех:`, 
     `Успіх:`, 
     `Sukces:`,
     `Success:`]);
BDTranslate.push(
    [`Ошибок:`, 
     `Помилок:`, 
     `Błędy:`,
     `Errors:`]);
BDTranslate.push(
    [`Статистика`, 
     `Статистика`, 
     `Statystyka`,
     `Statistics`]);
BDTranslate.push(
    [`Собрано алмазов:`, 
     `Зібрано алмазів:`, 
     `Zebrane diamenty:`,
     `Diamonds collected:`]);
BDTranslate.push(
    [`Глаголы Was и Were`, 
     `Глаголи Was і Were`, 
     `Czasowniki Was i Were`,
     `Verbs Was and Were`]);
BDTranslate.push(
    [returnInfoUnit.returnLevel23(), 
     returnInfoUnit.returnLevel23UA(), 
     returnInfoUnit.returnLevel23PL(),
     returnInfoUnit.returnLevel23EN()]);
BDTranslate.push(
    [`Упс. Кто-то уже сообщил об этой ошибке.`, 
     `Упс. Хтось уже повідомив про цю помилку.`, 
     `Ups. Ktoś już zgłosił ten błąd.`,
     `Oops. Someone already reported this bug.`]);
BDTranslate.push(
    [`Ошибка зафиксирована`, 
     `Помилка зафіксована`, 
     `Zapisano błąd`,
     `Error recorded`]);
BDTranslate.push(
    [returnInfoUnit.returnLevel21(), 
     returnInfoUnit.returnLevel21UA(), 
     returnInfoUnit.returnLevel21PL(),
     returnInfoUnit.returnLevel21EN()]);
BDTranslate.push(
    [`Глаголы Have и Have Got`, 
     `Дієслова Have та Have Got`, 
     `Czasowniki Have i Have Got`,
     `The verbs Have and Have Got`]);
BDTranslate.push(
    [returnInfoUnit.returnLevel19(), 
     returnInfoUnit.returnLevel19UA(), 
     returnInfoUnit.returnLevel19PL(),
     returnInfoUnit.returnLevel19EN()]);
BDTranslate.push(
    [`Выбор между P.S. и настоящим продолженным P.C.`, 
     `Вибір між P.S. та справжнім продовженим P.C.`, 
     `Wybór pomiędzy P.S. i niniejszym kontynuuje P.C.`,
     `The choice between P.S. and the present continuation P.C.`]);
BDTranslate.push(
    [returnInfoUnit.returnLevel18(), 
     returnInfoUnit.returnLevel18UA(), 
     returnInfoUnit.returnLevel18PL(),
     returnInfoUnit.returnLevel18EN()]);
BDTranslate.push(
    [`Простое настоящее  P.S. вопросы`, 
     `Просте справжнє P.S. питання`, 
     `Prosty prezent P.S. pytania`,
     `Simple present P.S. questions`]);
BDTranslate.push(
    [returnInfoUnit.returnLevel17(), 
      returnInfoUnit.returnLevel17UA(), 
      returnInfoUnit.returnLevel17PL(),
      returnInfoUnit.returnLevel17EN()]);
BDTranslate.push(
    [`Простое настоящее  P.S. негативное`, 
     `Просте справжнє P.S. негативне`, 
     `Prosty prezent P.S. negatywny`,
     `Simple present P.S. negative`]);
BDTranslate.push(
    [returnInfoUnit.returnLevel16(), 
     returnInfoUnit.returnLevel16UA(), 
     returnInfoUnit.returnLevel16PL(),
     returnInfoUnit.returnLevel16EN()]);
BDTranslate.push(
    [`Простое настоящее  P.S. плюс периодичность`, 
     `Просте справжнє P.S. плюс періодичність`, 
     `Prosty prezent P.S. plus częstotliwość`,
     `Simple present P.S. plus periodicity`]);
BDTranslate.push(
    [returnInfoUnit.returnLevel15(), 
     returnInfoUnit.returnLevel15UA(), 
     returnInfoUnit.returnLevel15PL(),
     returnInfoUnit.returnLevel15EN()]);
BDTranslate.push(
    [`Простое настоящее P.S.`, 
     `Просте справжнє P.S.`, 
     `Prosty prezent P.S.`,
     `Simple present P.S.`]);
BDTranslate.push(
    [returnInfoUnit.returnLevel14(), 
     returnInfoUnit.returnLevel14UA(), 
     returnInfoUnit.returnLevel14PL(),
     returnInfoUnit.returnLevel14EN()]);
BDTranslate.push(
    [`Образования вопросов в настоящем продолженном времени P.C.`, 
     `Утворення питань у поточному продовженому часі P.C.`, 
     `Tworzenie pytań w czasie teraźniejszym ciągłym P.C.`,
     `Formation of questions in the present continuous tense P.C.`]);
BDTranslate.push(
    [`Правило для настоящего продолженного времени (Present Continuous)`, 
     `Правило для поточного часу (Present Continuous)`, 
     `Reguła czasu teraźniejszego ciągłego`,
     `Rule for the Present Continuous`]);
BDTranslate.push(
   [`Создание вопросов в Present Simple и Past Simple`, 
    `Створення питань у Present Simple та Past Simple`, 
    `Tworzenie pytań w czasie Present Simple i Past Simple`,
    `Forming questions in Present Simple and Past Simple`]);
BDTranslate.push(
    ['Понятно', 
     'Зрозуміло', 
     'To jasne',
     'It\'s clear']);
BDTranslate.push(
    ['Просто учим слова', 
     'Просто вчимо слова', 
     'Dopiero uczę się słówek',
     'Just learning words']);
BDTranslate.push(
    ['Сокращенная форма глагола to Be', 
     'Скорочена форма дієслова', 
     'Krótka forma czasownika być',
     'Shortened form of the verb to be']);
BDTranslate.push(
    ['Выбрать правильную пару.', 
     'Вибрати правильну пару.', 
     'Wybierz odpowiednią parę.',
     'Choose the right pair.']);
BDTranslate.push(
    ['Выбери верную форму глагола', 
     'Вибери правильну форму дієслова', 
     'Wybierz poprawną formę czasownika',
     'Choose the correct form of the verb']);
BDTranslate.push(
    ['Вторая форма неправильных глаголов', 
     'Друга форма неправильних дієслів', 
     'Druga forma czasowników nieregularnych',
     'The second form of irregular verbs']);
BDTranslate.push(
    ['Выбрать правильное время PS or PC', 
     'Вибрати правильне час PS or PC', 
     'Wybierz odpowiedni czas PS or PC',
     'Choose the right time PS or PC']);
BDTranslate.push(
    ['Учить слова', 
     'Вчити слова', 
     'Ucz się słów',
     'Learn words']);
BDTranslate.push(
    ['Подобрать правильно вопрос или ответ', 
     'Підібрати правильно питання чи відповідь', 
     'Wybierz właściwe pytanie lub odpowiedź',
     'Choose the right question or answer']);
BDTranslate.push(
    ['Настоящее простое вопросы', 
     'Справжнє просте питання', 
     'Przedstaw proste pytania',
     'Present simple questions']);
BDTranslate.push(
    ['Настоящее простое негативное', 
     'Справжнє просте негативне', 
     'Przedstaw prosty negatyw',
     'Present simple negative']);
BDTranslate.push(
    ['300 глаголов', 
     '300 дієслів (RU)', 
     '300 czasowników (RU)',
     '300 verbs (RU)']);
BDTranslate.push(
    ['50 глаголов', 
     '50 дієслів (RU/PL)', 
     '50 czasowników (RU/PL)',
     '50 verbs (RU/PL)']);
BDTranslate.push(
    ['100 слов про спорт', 
     '100 слів про спорт (RU/PL)', 
     '100 słów o sporcie (RU/PL)',
     '100 words about sports(RU/PL)']);
BDTranslate.push(
    ['Выберите правильно составленное предложение.', 
     'Виберіть правильно складену пропозицію.', 
     'Wybierz właściwe zdanie.',
     'Choose the correctly constructed sentence.']);
BDTranslate.push(
    ['Настоящее простое + периодичность', 
     'Справжнє просте + періодичність', 
     'Czas teraźniejszy prosty + okresowość',
     'Present Simple + Periodicity']);
BDTranslate.push(
    ['Настоящее простое', 
     'Справжнє просте', 
     'Prezent prosty',
     'Present simple']);
BDTranslate.push(
    ['Настоящее продолженное - вопрос', 
     'Справжнє продовжене – питання', 
     'Czas teraźniejszy ciągły – pytanie',
     'Choose the right question']);
BDTranslate.push(
    ['Выбрать правильный вопрос', 
     'Вибрати правильне питання', 
     'Wybierz właściwe pytanie',
     'Choose the right question']);
BDTranslate.push(
    ['Сообщить об ошибке', 
     'Повідомити про помилку', 
     'Zgłoś błąd',
     'Report a bug']);
BDTranslate.push(
    ['Перевести вопрос', 
     'Перекласти питання', 
     'Przetłumacz pytanie',
     'Translate question']);
BDTranslate.push(
    ['Выбрать правильный перевод', 
     'Вибрати правильний переклад', 
     'Wybierz właściwe tłumaczenie',
     'Choose the correct translation']);
BDTranslate.push(
        ['100 слов о еде', 
         '100 слів про їжу', 
         '100 słów o jedzeniu',
         '100 words about food']);
BDTranslate.push(
        ['100 слов о путешествии', 
         '100 слів про подорож (RU)', 
         '100 słów o podróżach (RU)',
         '100 words about travel (RU)']);
BDTranslate.push(
        ['100 слов', 
         '100 слів (RU)', 
         '100 słów (RU)',
         '100 words (RU)']);
BDTranslate.push(
        ['300 слов', 
         '300 слів (RU)', 
         '300 słów (RU)',
         '300 words (RU)']);
BDTranslate.push(
    ['500 слов', 
     '500 слів (RU)', 
     '500 słów (RU)',
     '500 words (RU)']);
BDTranslate.push(
    ['Настоящее продолженное', 
     'Присутній безперервний', 
     'Teraźniejszość ciągła',
     'Present continuous']);
BDTranslate.push(
    ['Последний тест', 
     'Останній тест', 
     'Ostatni test',
     'The last test']);
BDTranslate.push(
    ['Задание для теста', 
     'Завдання для тесту', 
     'Zadanie testowe',
     'Task for the test']);
BDTranslate.push(
    ['Вопрос с вариантами ответа', 
     'Питання з варіантами відповіді', 
     'Pytanie wielokrotnego wyboru',
     'Multiple choice question']);
// BDTranslate.push(
//     ['Выбрать тест.', 
//      'Вибрати тест.', 
//      'Wybierz test.',
//      'Select a test.']);
BDTranslate.push(
    ['Where/Who...', 
     'Where/Who...', 
     'Where/Who...',
     'Where/Who...']);
BDTranslate.push(
    ['Вставить правильное слово', 
     'Вставити правильне слово', 
     'Wstaw właściwe słowo',
     'Insert the correct word']);
BDTranslate.push(
    ['To Be, ответь на вопрос', 
     'To Be, дай відповідь на запитання', 
     'Być, odpowiedz na pytanie',
     'To Be, answer the question']);
BDTranslate.push(
    ['To Be, вопрос/ответ', 
     'To Be, питання/відповідь', 
     'Być, pytanie/odpowiedź',
     'To Be, Q&A']);
BDTranslate.push(
    ['To Be, краткая форма', 
     'To Be, коротка форма', 
     'Być, krótka forma',
     'To Be, short form']);
BDTranslate.push(
    ['Выбрать правильный вариант ответа', 
     'Вибрати правильний варіант відповіді', 
     'Wybierz poprawną odpowiedź',
     'Choose the correct answer']);
BDTranslate.push(
    ['Сброс', 
     'Скидання', 
     'Resetowanie',
     'Reset']);
BDTranslate.push(
   ['Выбрать правильный вариант сокращенной формы глагола to Be', 
    'Вибрати правильний варіант скороченої форми дієслова to Be', 
    'Wybierz poprawną wersję skróconej formy czasownika to Be',
    'Choose the correct version of the shortened form of the verb to Be']);

return BDTranslate;
}
