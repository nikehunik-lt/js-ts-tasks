/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  type Unit = 'm' | 'mi' | 'gr' | 'pound' | 'C' | 'K';

  const conversionFactors: Record<Unit, number> = {
    m: 1,
    mi: 0.621371,
    gr: 1000,
    pound: 2.20462,
    C: 1,
    K: 1,
  };

  const temperatureOffset: Record<Unit, number> = {
    C: 273.15,
    K: 0,
    m: 0,
    mi: 0,
    gr: 0,
    pound: 0,
  };

  if (!conversionFactors.hasOwnProperty(from) || !conversionFactors.hasOwnProperty(to)) {
    console.error('Invalid units');
    return undefined;
  }

  const convertedValue = (value / conversionFactors[from]) * conversionFactors[to] + temperatureOffset[to] - temperatureOffset[from];

  return Number(convertedValue.toFixed(2));
};
