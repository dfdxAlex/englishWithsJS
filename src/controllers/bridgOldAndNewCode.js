import { LanguageSelectorView } from '../view/languageSelectorView/LanguageSelectorView.js';
import { exportBDTranslate } from '../models/exportBDTranslate.js';

window.languageSelectorView = new LanguageSelectorView();
window.BDTranslate = exportBDTranslate();

