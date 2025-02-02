/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  function parseDate(dateString: string): Date {
    const [dayStr, monthStr, yearStr] = dateString.split('.');

    if (!dayStr || !monthStr || !yearStr) {
      throw new Error('Invalid date format: DD.MM.YYYY expected');
    }

    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10) - 1;
    const year = parseInt(yearStr, 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      throw new Error('Invalid date: numbers expected for day, month, and year');
    }

    const date = new Date(year, month, day);
    if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
      throw new Error('Invalid date: incorect day, month, or year values provided');
    }
    return date;
  }

  const currentDate = typeof targetDate === 'string' ? parseDate(targetDate) : targetDate;

  if (isNaN(currentDate.getTime())) {
    throw new Error('Invalid date');
  }

  const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);

  const timeDifference = nextNewYear.getTime() - currentDate.getTime();
  return Math.floor(timeDifference / (24 * 60 * 60 * 1000));
};
