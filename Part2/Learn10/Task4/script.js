'use strict';

let login = prompt('Ваш логин?', 'Сотрудник');

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' : '';


alert(message);