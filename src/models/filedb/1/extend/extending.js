import { extendAnalogZeroAndOne } from './extendAnalogZeroAndOne.js';
import { extendAnalogZero } from './extendAnalogZero.js';
import { extendAnalogOne } from './extendAnalogOne.js';
import { extendAnalogZeroOneTwo } from './extendAnalogZeroOneTwo.js';
import { extendAnalogZeroOneTwoFree } from './extendAnalogZeroOneTwoFree.js';
import { extendAnalogZeroOneTwoFreeFour } from './extendAnalogZeroOneTwoFreeFour.js';

export function extending(array, strOld, strNew)
{
const unit29May = extendAnalogZeroAndOne(array, strOld, strNew);

const unit29MayOnlyIndexZero = extendAnalogZero(array, strOld, strNew);

const unit29MayOnlyIndexOne = extendAnalogOne(array, strOld, strNew);

const unit29MayZeroOneTwo = extendAnalogZeroOneTwo(array, strOld, strNew);

const unit29MayZeroOneTwoFree = extendAnalogZeroOneTwoFree(array, strOld, strNew);

const unit29MayZeroOneTwoFreeFour = extendAnalogZeroOneTwoFreeFour(array, strOld, strNew);

return [...unit29MayZeroOneTwoFreeFour, ...unit29MayZeroOneTwoFree, ...unit29MayZeroOneTwo, ...unit29MayOnlyIndexZero, ...unit29MayOnlyIndexOne, ...array, ...unit29May];

}