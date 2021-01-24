interface IgregorainTodayObject {
  year: number;
  month: number;
  day: number;
}

export const customCalendar = {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],

  weekDays: [
    {
      name: 'Domingo',
      short: 'Dom',
      isWeekend: true,
    },
    {
      name: 'Segunda-feira',
      short: 'Seg',
    },
    {
      name: 'Terça-feira',
      short: 'Ter',
    },
    {
      name: 'Quarta-feira',
      short: 'Qua',
    },
    {
      name: 'Quinta-feira',
      short: 'Qui',
    },
    {
      name: 'Sexta-feira',
      short: 'Sex',
    },
    {
      name: 'Sábado',
      short: 'Sab',
      isWeekend: true,
    },
  ],

  // just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: IgregorainTodayObject) {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date: any) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date: any) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit: any) {
    return digit;
  },

  // texts in the date picker
  nextMonth: 'Próximo Mês',
  previousMonth: 'Mês Anterior',
  openMonthSelector: 'Selecionar Mês',
  openYearSelector: 'Selecionar Ano',
  closeMonthSelector: 'Fechar seletor de Mês',
  closeYearSelector: 'Fechar seletor de Ano',
  defaultPlaceholder: 'Selecione...',

  // for input range value
  from: 'de',
  to: 'até',

  // used for input value when multi dates are selected
  digitSeparator: ',',

  // if your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // is your language rtl or ltr?
  isRtl: false,
};
