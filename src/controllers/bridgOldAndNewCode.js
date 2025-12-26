import { LanguageController } from './LanguageController.js';
import { Help } from '../view/Help.js';
import { handleLog } from './../../src/controllers/handleLog.js';
import { Thoury } from './Thoury.js';
import { DataOk } from '../services/data/DataOk.js';
import { handleOkErr } from './handleOkErr.js';
import { hundleHelpPrime } from './forInitEventListeners/hundleHelpPrime.js';
import { noonMenu } from '../services/noonMenu.js';
import { WorkingField } from '../view/WorkingField.js';
import { handleLevelX } from './handleLevelX.js';
import { SettingForProgram } from '../models/SettingForProgram.js';
import { indexQuestion } from './handleButtonLightNormHardHelp/indexQuestion.js';
import { outputTranslateForTest } from './handleButtonOk/outputTranslateForTest.js';
import { DataSet } from '../services/data/DataSet.js';
import { resetStatistic } from '../models/resetStatistic.js';


window.resetStatistic = resetStatistic;
window.outputTranslateForTest = outputTranslateForTest;
window.indexQuestion = indexQuestion;
window.SettingForProgram = SettingForProgram;
window.LanguageController = new LanguageController();
window.Help = Help;
window.handleLog = handleLog;
window.Thoury = Thoury;
window.hundleHelpPrime = hundleHelpPrime;
window.DataOk = DataOk;
window.handleOkErr = handleOkErr;
window.noonMenu = noonMenu;
window.WorkingField = WorkingField;
window.handleLevelX = handleLevelX;
window.DataSet = DataSet;



