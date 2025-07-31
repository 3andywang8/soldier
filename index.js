console.log("meowwww");

// let a = 10
// let b = 20
// let temp = a
// a = b
// b = temp
// console.log(a, b);

// 邏輯運算子 == != && ||
// let a = 10
// let b = 20
// console.log(a == b); // false
// console.log(a != b); // true
// console.log(a == 10 && b == 30); // false
// console.log(a == 10 && b == 20); // true
// console.log(a == 10 || b == 30); // true
// console.log(a <= 10 || b >=20); // true

// + - * / %
// console.log(10 + 20); // 30
// console.log(10 - 20); // -10
// console.log(10 * 20); // 200
// console.log(10 / 20); // 0.5
// console.log(10 % 20); // 10

// if (a == 10) {
//   console.log("a is 10");
// } else if (a == 20) {
//     console.log("a is 20");
// } else {
//     console.log("a is neither 10 nor 20");
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log("for Loop End")

// let double = function (num) {
//     return num * 2;
// }
// let c = double(2);
// console.log(c); // 4

// window.onload = function () {
//     console.log(document.querySelector("#year"))
//     document.querySelector("#year_btn").addEventListener("click", function () {
//         const year = parseInt(document.querySelector("#year").value)
//         console.log(year)
//         let result
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             result = year + " 年是閏年";
//         } else {
//             result = year + " 年是平年";
//         }
//         document.querySelector("#answer").innerHTML = result
//     })
// }

// const isTriangle = (a, b, c) => {
//  return (a > 0 && b > 0 && c > 0) && (a + b > c && a + c > b && b + c > a);
// }
// console.log(isTriangle(3, 4, 5))

const countBMI = function (height, weight) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
};
const bmi1 = countBMI(154, 46);
console.log(`身高 175, 體重 70 的 BMI 是：${bmi1}`); 
