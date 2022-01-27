'use strict'

let num = prompt('Введите число', '1')

num = +num;

if (num > 0) {
    alert('1');
} else if (num < 0) {
    alert('-1');
} else {
    alert('0');
}