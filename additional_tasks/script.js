const  javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

const javaScriptDescription1 = Math.floor(javaScriptDescription.length/2);
const javaScriptDescription3 = javaScriptDescription.slice(javaScriptDescription1);
const javaScriptDescription4 = javaScriptDescription3.replaceAll('а', 'А');
const javaScriptDescription5 = javaScriptDescription4.split(' ').join('');
const javaScriptDescription6 = javaScriptDescription5.repeat('3');
const javaScriptDescription7 = Math.floor(javaScriptDescription6.length/2);
const javaScriptDescription8 = javaScriptDescription6.slice(javaScriptDescription7);
console.log(javaScriptDescription8);