
// import { commonFood100 } from './2/commonFood100.js';
// import { animals100 } from './2/animals100.js';
// import { commonFood100pl } from './2/commonFood100pl.js';
// import { commonFood100ua } from './2/commonFood100ua.js';
// import { commonSport100 } from './2/commonSport100.js';
// import { commonSport100pl } from './2/commonSport100pl.js';
// import { commonWalk100 } from './2/commonWalk100.js';
// import { commonWalk100pl } from './2/commonWalk100pl.js';
// import { commonWords100 } from './2/commonWords100.js';
// import { commonWords300 } from './2/commonWords300.js';
// import { commonWords500 } from './2/commonWords500.js';
// import { irregularVerbsPastSimple } from './2/irregularVerbsPastSimple.js';
// import { irregularVerbsV3 } from './2/irregularVerbsV3.js';
// import { presentSimpleHeSheIt } from './2/presentSimpleHeSheIt.js';
// import { textA1Begginer } from './2/textA1Begginer.js';
// import { verbs50 } from './2/verbs50.js';
// import { verbs50pl } from './2/verbs50pl.js';
// import { verbs300 } from './2/verbs300.js';
// import { whereThat } from './2/whereThat.js';
// import { forSinceAgoPrPerfPastSimple } from './1/forSinceAgoPrPerfPastSimple.js';
// import { haveAndHaveGot } from './1/haveAndHaveGot.js';
// import { passiveIsDoneWasDone } from './1/passiveIsDoneWasDone.js';
// import { pastContinuousArray } from './1/pastContinuousArray.js';
// import { pastContinuousOrSimple } from './1/pastContinuousOrSimple.js';
// import { pastSimpleNegativeAndQuestions } from './1/pastSimpleNegativeAndQuestions.js';
// import { pastSimpleSentences } from './1/pastSimpleSentences.js';
// import { prContiniusPerfectPassive } from './1/prContiniusPerfectPassive.js';
// import { presentContinuous } from './1/presentContinuous.js';
// import { presentPerfectAndSimpleAndContinius } from './1/presentPerfectAndSimpleAndContinius.js';
// import { presentPerfectIHaveDone } from './1/presentPerfectIHaveDone.js';
// import { presentPerfectOrPastSimple } from './1/presentPerfectOrPastSimple.js';
// import { presentSimple } from './1/presentSimple.js';
// import { presentSimpleNegative } from './1/presentSimpleNegative.js';
// import { presentSimpleNever } from './1/presentSimpleNever.js';
// import { presentSimpleOrContinius } from './1/presentSimpleOrContinius.js';
// import { presentSimpleQuestions } from './1/presentSimpleQuestions.js';
// import { presetnContiniusQuestion } from './1/presetnContiniusQuestion.js';
// import { questionsWithAnswers } from './1/questionsWithAnswers.js';
// import { toBeForms } from './1/toBeForms.js';
// import { toBeSentences } from './1/toBeSentences.js';
// import { unit23 } from './1/unit23.js';
// import { wasOrWere } from './1/wasOrWere.js';

// const fileDB = {
//   commonFood100,
//   animals100,
//   commonFood100pl,
//   commonFood100ua,
//   commonSport100,
//   commonSport100pl,
//   commonWalk100,
//   commonWalk100pl,
//   commonWords100,
//   commonWords300,
//   commonWords500,
//   irregularVerbsPastSimple,
//   irregularVerbsV3,
//   presentSimpleHeSheIt,
//   textA1Begginer,
//   verbs50,
//   verbs50pl,
//   verbs300,
//   whereThat,
//   forSinceAgoPrPerfPastSimple,
//   haveAndHaveGot,
//   passiveIsDoneWasDone,
//   pastContinuousArray,
//   pastContinuousOrSimple,
//   pastSimpleNegativeAndQuestions,
//   pastSimpleSentences,
//   prContiniusPerfectPassive,
//   presentContinuous,
//   presentPerfectAndSimpleAndContinius,
//   presentPerfectIHaveDone,
//   presentPerfectOrPastSimple,
//   presentSimple,
//   presentSimpleNegative,
//   presentSimpleNever,
//   presentSimpleOrContinius,
//   presentSimpleQuestions,
//   presetnContiniusQuestion,
//   questionsWithAnswers,
//   toBeForms,
//   toBeSentences,
//   unit23,
//   wasOrWere,
// };


// modules — это объект, где:
// ключи → пути к файлам (относительно текущей папки)
// значения → объекты с экспортами этих файлов (поскольку { eager: true })
let modules = import.meta.glob('./1/*.js', { eager: true });

// Создать результирующий объект
const fileDBOne = {};

// Добавить в результирующий объект все экспорты, где 
// поле - это имя массива, а значение - это сам массив с тестами
for (const module of Object.values(modules)) {
  Object.assign(fileDBOne, module); // добавляем все экспорты из модуля
}

// получить аналогичный объект из папки 2
modules = import.meta.glob('./2/*.js', { eager: true });

// добавить в результирующий объект все имена массивов с тестами и сами массивы
for (const module of Object.values(modules)) {
  Object.assign(fileDBOne, module); // добавляем все экспорты из модуля
}

// Так как всё завязано на fileDB то приравнять ссылки на объекты
// Потом просто заменить fileDBOne на fileDB а старое закоментированное удалить
const fileDB = fileDBOne;

// костыль для старого импорта
window.fileDB = fileDB;

export default fileDB;