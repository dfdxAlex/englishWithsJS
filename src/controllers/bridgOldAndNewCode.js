import { LanguageController } from './LanguageController.js';
import { FactoryRegistr } from '../models/FactoryRegistr.js';
import { Help } from '../view/Help.js';
import { nav } from './../view/nav.js';
import { handleLog } from './../../src/controllers/handleLog.js';
import { Thoury } from './Thoury.js';
import { getTranslate } from '../models/forFactoryRegistr/getTranslate.js';
import { DataOk } from '../services/data/DataOk.js';
import { LevelDataModel } from '../models/LevelDataModel.js';
import { handleOkErr } from './handleOkErr.js';
import { MenuController } from './MenuController.js';
import { hundleHelpPrime } from './forInitEventListeners/hundleHelpPrime.js';
import { noonMenu } from '../services/noonMenu.js';
import { WorkingField } from '../view/WorkingField.js';
import { handleLevelX } from './handleLevelX.js';
import { SettingForProgram } from '../models/SettingForProgram.js';

window.SettingForProgram = SettingForProgram;
window.LanguageController = new LanguageController();
window.FactoryRegistr = FactoryRegistr;
window.Help = Help;
window.nav = nav();
window.handleLog = handleLog;
window.Thoury = Thoury;
window.hundleHelpPrime = hundleHelpPrime;
window.DataOk = DataOk;
window.handleOkErr = handleOkErr;
window.MenuController = MenuController;
window.noonMenu = noonMenu;
window.WorkingField = WorkingField;
window.handleLevelX = handleLevelX;

// костыль для регистратора объектов
window.getTranslate = getTranslate();

// костыль для LevelDataModel
window.LevelDataModel = LevelDataModel;


