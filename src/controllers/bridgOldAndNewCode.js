import { LanguageSelectorView } from '../view/languageSelectorView/LanguageSelectorView.js';
import { exportBDTranslate } from '../models/exportBDTranslate.js';
import { LanguageController } from './LanguageController.js';
import { FactoryRegistr } from '../models/FactoryRegistr.js';
import { Help } from '../view/Help.js';
import { nav } from './../view/nav.js';
import { handleLog } from './../../src/controllers/handleLog.js';
import { diament } from './../controllers/diament.js';

window.languageSelectorView = new LanguageSelectorView();
window.BDTranslate = exportBDTranslate();
window.LanguageController = new LanguageController();
window.FactoryRegistr = FactoryRegistr;
window.Help = Help;

window.nav = nav();
window.diament = diament;
window.handleLog = handleLog;

