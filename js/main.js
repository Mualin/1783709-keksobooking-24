// Задание №1.
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Решение нашёл здесь: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInteger(min, max) {
  if (min < max && min >= 0) {
  min = Math.ceil(min); // Округление до ближайшего большего целого.
  max = Math.floor(max); // Округление до ближайшего меньшего целого.
  return Math.floor(Math.random() * (max - min + 1)) + min; // Округление до ближайшего меньшего целого + округление к ближайшему целому.
  }
  console.log('Второе значение должно быть больше первого, а первое не должно быть отрицательным!');
}

console.log(getRandomInteger());



// Задание №2.
// Функция, возвращающая число с плавающей точкой из диапазона "от...до"
// с указанием количества знака после запятой.
// Решение подсмотрел здесь: https://qna.habr.com/q/999157 и здесь: https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

function getRandomIntegerNum(min, max, num) {
  if (min < max && min >= 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let number = 10 ** num; // Возведение в степень
  return Math.floor((Math.random() * (max - min + 1) + min) * number) / number;
  }
  console.log('Второе значение должно быть больше первого, а первое не должно быть отрицательным!');
}

console.log(getRandomIntegerNum());
