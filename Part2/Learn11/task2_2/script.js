'use strict';

let age = prompt('Введите возраст', '14');

age = +age;

if (age < 14 && age > 90) {
    alert('true')
} else {
    alert('false');
}
