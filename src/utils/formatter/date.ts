export const formatDate = (date: Date, style = 'long'): string => new Intl.DateTimeFormat('pt-br', {dateStyle: 'long'}).format(date);
