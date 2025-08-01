import { FactoryRegistr } from '../FactoryRegistr.js';

export function getTranslate()
{
    return FactoryRegistr.getObject("LanguageController");
}