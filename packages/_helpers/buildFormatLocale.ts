export type LocaleType = {
  months3char?: string[],
  monthsFull?: string[],
  weekdays2char?: string[],
  weekdays3char?: string[],
  weekdaysFull?: string[],
  meridiemUppercase?: string[],
  meridiemLowercase?: string[],
  meridiemFull?: string[],
};

const defaultLocale: LocaleType = {
  months3char: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  weekdays2char: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  weekdays3char: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  meridiemUppercase: ['AM', 'PM'],
  meridiemLowercase: ['am', 'pm'],
  meridiemFull: ['a.m.', 'p.m.'],
};

export function buildFormatLocale ( customLocale?: LocaleType ) {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

  let mergedLocale: LocaleType = Object.assign( {}, defaultLocale, customLocale );

  const formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': (date) => mergedLocale.months3char[date.getMonth()],

    // Month: January, February, ..., December
    'MMMM': (date) => mergedLocale.monthsFull[date.getMonth()],

    // Day of week: Su, Mo, ..., Sa
    'dd': (date) => mergedLocale.weekdays2char[date.getDay()],

    // Day of week: Sun, Mon, ..., Sat
    'ddd': (date) => mergedLocale.weekdays3char[date.getDay()],

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': (date) => mergedLocale.weekdaysFull[date.getDay()],

    // AM, PM
    'A': (date) => (date.getHours() / 12) >= 1 ? mergedLocale.meridiemUppercase[1] : mergedLocale.meridiemUppercase[0],

    // am, pm
    'a': (date) => (date.getHours() / 12) >= 1 ? mergedLocale.meridiemLowercase[1] : mergedLocale.meridiemLowercase[0],

    // a.m., p.m.
    'aa': (date) => (date.getHours() / 12) >= 1 ? mergedLocale.meridiemFull[1] : mergedLocale.meridiemFull[0]
  };

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  const ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date));
    };
  });

  return { formatters };
}

function ordinal (num: number) {
  const rem100 = num % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return num + 'st';
      case 2:
        return num + 'nd';
      case 3:
        return num + 'rd';
    }
  }
  return num + 'th';
}
