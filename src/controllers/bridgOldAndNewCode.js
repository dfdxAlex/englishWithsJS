import { LanguageController } from './LanguageController.js';
import { FactoryRegistr } from '../models/FactoryRegistr.js';
import { Help } from '../view/Help.js';
import { nav } from './../view/nav.js';
// import { handleLog } from './../../src/controllers/handleLog.js';
import { Thoury } from './Thoury.js';
// import  indexForThoury  from './forThoury/indexForThoury.js';
import { getTranslate } from '../models/forFactoryRegistr/getTranslate.js';
import { DataOk } from '../services/data/DataOk.js';
import { LevelDataModel } from '../models/LevelDataModel.js';
// import { calculateBonusMultiplier } from '../models/calculateBonusMultiplier.js';
import { handleOkErr } from './handleOkErr.js';
import { MenuController } from './MenuController.js';
import { hundleHelpPrime } from './forInitEventListeners/hundleHelpPrime.js';

window.LanguageController = new LanguageController();
window.FactoryRegistr = FactoryRegistr;
window.Help = Help;
window.nav = nav();
// window.diament = diament;
// window.handleLog = handleLog;
window.Thoury = Thoury;
window.hundleHelpPrime = hundleHelpPrime;
window.DataOk = DataOk;
// window.calculateBonusMultiplier = calculateBonusMultiplier;
window.handleOkErr = handleOkErr;
window.MenuController = MenuController;

// костыль для регистратора объектов
window.getTranslate = getTranslate();

// костыль для LevelDataModel
window.LevelDataModel = LevelDataModel;


