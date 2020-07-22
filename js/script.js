"use strict";

let info = [];
info[0] = prompt('Как тебя зовут?', '');
info[1] = +prompt('Сколько тебе лет?', '');
console.log(info[0]);
const User = {
    name: info[0],
    age: info[1]
};
console.log(User);
console.log(`Привет ${User.name}, тебе действительно ${User.age} лет?`);
console.log(15 + info[1]);