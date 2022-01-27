'use strict';

let login = prompt('Введите логин', 'Админ');
let password;


if (login == 'Админ') {
    password = prompt('Введите пароль', '');
} else if (login != 'Админ' && login != undefined) {
    alert('Я вас не знаю');
} else if (login == null) {
    alert('Отменено');
}


if (password == 'Я главный') {
    alert('Здравствуйте')
} else if (password != 'Я главный' && password != undefined) {
    alert('Неверный пароль')
} else if (password === null) {
    alert('Отменено')
}

