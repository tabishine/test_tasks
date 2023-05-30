var regex = /\b(?:ТОО|ИП|АО|Товарищество с ограниченной ответственностью|Индивидуальный предприниматель|Акционерное общество)\b/i;
var text = "Пример текста с упоминанием ИП и акционерного общества.";
var matches = text.match(regex);
console.log(matches);

var regex = /\b\d{8,9}\b/;
var text = "Пример текста с числом 12345678.";
var matches = text.match(regex);
console.log(matches);

