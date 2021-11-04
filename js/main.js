function getRandomInteger(min, max) {
  if (min < max && min >= 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  throw new Error('Второе значение должно быть больше первого, а первое не должно быть отрицательным!');
}

function getRandomIntegerNum(min, max, num) {
  if (min < max && min >= 0) {
  min = Math. min(min);
  max = Math.max(max);
  let result = (Math.random() * (max - min) + min);
  return result.toFixed(num);
  };
  throw new Error('Второе значение должно быть больше первого, а первое не должно быть отрицательным!');
};

const getRandomArrayElement = (elements) =>
elements[_.random(0, elements.length - 1)];


function getArray(elements) {
  const maxLength = elements.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomNumber(0, maxLength - 1);
    const el = elements[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;

  function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
};


const avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberOfAvatar = avatars.slice();

const randomAvatar = () => {
    let randomNumber = Math.floor(Math.random()*numberOfAvatar.length);
    return numberOfAvatar.splice(randomNumber, 1);
};

const avatar = () => {
 const generateNumber = randomAvatar();
  if (generateNumber == 10) {
      numberOfAvatars = 'img/avatars/user10.png';
  } else {
      numberOfAvatars = 'img/avatars/user' + '0' + generateNumber + '.png';
  };

  return numberOfAvatars;
};

const author = () => {
  return {
  avatar: avatar(),
  };
};



const locationLat = () => {
    return getRandomIntegerNum(35.65, 35.7, 5);
};

const locationIng = () => {
    return getRandomIntegerNum(139.7, 139.8, 5);
};

const location = () => {
    return {
  lat: locationLat(),
  lng: locationIng(),
    };
};


const price = () => {
    return getRandomInteger(0, 1000000);
};


const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];


const rooms = () => {
    return getRandomInteger(1, 6);
};


const guests = () => {
    return getRandomInteger(1, 10);
};


const checkin = [
  '12:00',
  '13:00',
  '14:00',
];


const checkout = [
  '12:00',
  '13:00',
  '14:00',
];


const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];


const title = [
'Старый фонд',
'Квартира в центре города',
'Дом с красивым видом',
'Апартаменты с панорамными окнами',
'Квартира с террасой',
'Квартира-манасарда в современном доме',
'Отель в западной части города',
'Комната в коммуналке',
'Жилой комплекс',
'Дом бизнес-класса',
];


const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const offer = () => {
  return {
  title: getRandomArrayElement(title),
  addres: location(),
  price: price(),
  type: getRandomArrayElement(type),
  rooms: rooms(),
  guests: guests(),
  checkin: getRandomArrayElement(checkin),
  checkout: getRandomArrayElement(checkout),
  features: getArray(features),
  description: 'Пример описания объявления',
  photos: getArray(photos),
  };
};

const objectOfKeksobooking = () => {
    return {
        author: author(),
        offer: offer(),
    };
};

_.times(10, objectOfKeksobooking);
