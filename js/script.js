// //"use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);
// let storeName = 'Magaz';
// const storeDescription = {
//     budget: 10000,
//     employees: ['alex', 'bob', 'mike'],
//     products: {
//         'apple': 5000,
//         'cola': 3000
//     },
//     open: true
// }

// const result = confirm('are you here?');
// console.log(result);

// const result = prompt('are you here?', '');
// console.log(result);

// const result = +prompt('are you here?', '');
// console.log(typeof(result));

// const answers = [];
// answers[0] = prompt('ti kto');
// answers[1] = prompt('ti kak');
// answers[2] = prompt('ti kogda');


// const result = prompt('Как вас зовут?');
// alert(`Привет, ${result}`);

// const rep = true,
//     pop = false;

// console.log(rep || pop);

// console.log ( NaN || 2 || undefined );

// console.log ( NaN && 2 && undefined );

// console.log ( 1 && 2 && 3 );

// console.log ( !1 && 2 || !3 );



// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
// console.log('Мы сыты');
// } else {
//     console.log('Не сыт')
// }

// console.log((hamburger && fries));

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
// console.log('Я сыт');
// }


// const hamburger = 3;
// const fries = 1;

// if (hamburger === 3 && fries) {
//     console.log('Я сыт');
// } else {
//     console.log('Мы уходим');
// }

// const hamburger = 3;
// const fries = 5;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('все доволны');
// } else {
//     console.log('мы уходим');
// }
// console.log(hamburger === 3 && fries == 5 && cola)
// console.log(hamburger === 3 && fries == 5 && cola)

// if (hamburger === 3 && fries == 5 && cola === 1) {
//     console.log('Я сыт');
// } else {
//     console.log('Мы не доволны');
// }

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sdasdasd');

// let johnReport, samReport, mayReport, jimReport = 'done';

// console.log(johnReport || samReport || mayReport || jimReport);

// // const hamburger = 3;
// // const fries = 5;
// // const cola = 0;
// // const nuggets = 0;

// // if (hamburger >= 3 && cola >= 2 || fries >= 3 && nuggets) {
// //     console.log('мы доволны');
// // } else {
// //     console.log('мы уходим');
// // }

// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );

// console.log( !1 && 2 || !3 );

// console.log( 25 || null && !3 );

// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);

// // console.log( 5 === 5 && 3 > 1 || 5);


// // const hamburger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;

// // if (hamburger === 3 && cola || fries === 3 && nuggets) {
// //    console.log('Done!')
// // }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let num = 50;

// while (num < 55) {
    
//     console.log(num);
//     num++;
// }



// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);



// let num = 50;

// for (let i = 1; i < 8; i++) {
// console.log(num);
// num++;
// }



// for (let i=1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
// console.log(i);
// }



// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
// console.log(i);
// }



// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//         result += '\n';
// }
//         console.log(result);



// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log (`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }



// let number = 5;
// while (number <= 10) {
//     console.log(number);  
//     number++;
// }



// for (let i = 20; i > 10; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }



// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
    
// }



// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }



// let num = 2;
// while (num <= 16) {
//     if (num % 2 === 0) {
//         num++;
//         continue;
//     } else {
//         console.log(num);
//     }
//     num++;
// }



// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);
// return result;



// const arr = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === 'number') {
//         arr[i] = arr[i] * 2;
//     } else if (typeof(arr[i]) === 'string') {
//         arr[i] = `${arr[i]} - done`;
//     }
// }
// console.log(arr);





// const arr = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];


// for (let i = 0; i <= arr.length; i++) {
//    result[i - 1] = arr[arr.length - i];
// }

// console.log(result);
// return result;



// let result = '';
// const dlina = 7;

// for(let i = 1; i < dlina; i++) {
//     for(let j = 0; j < i; j ++) {
//     result += '*';
//     }
//         result += '\n'; 
//         }
    
// console.log(result);


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// 'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);






