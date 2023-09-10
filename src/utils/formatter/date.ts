export const formatDate = (date: Date, style = 'long'): string => new Intl.DateTimeFormat('en-us', {dateStyle: 'long'}).format(date);
