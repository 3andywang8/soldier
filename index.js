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

// const countBMI = function (height, weight) {
//     const heightInMeters = height / 100;
//     const bmi = weight / (heightInMeters * heightInMeters);
//     return bmi.toFixed(2);
// };
// const bmi1 = countBMI(154, 46);
// console.log(`身高 175, 體重 70 的 BMI 是：${bmi1}`);

// const checkScore = function (score) {};
// if (score >= 95 && score <= 100) {
//   return "A+";
// } else if (score >= 90 && score < 95) {
//   return "A";
// } else if (score >= 80 && score < 90) {
//   return "B";
// } else if (score >= 70 && score < 79) {
//   return "C";
// } else if (score <= 69) {
//   return "D";
// }
// console.log(checkScore(95)); // A+
// console.log(checkScore(92)); // A
// console.log(checkScore(85)); // B
// console.log(checkScore(75)); // C
// console.log(checkScore(65)); // D
//
// for (let i = 1; i <= 9; i++) {
//   let row = "";
//   for (let j = 1; j <= 9; j++) {
//     row += `${i} * ${j} = ${i * j}\t`;
//   }
//   console.log(row);
// }

// console.log("Hello, World!".length);
// console.log("Hello, World!".substring(0, 1));
// console.log("Hello, World!".toUpperCase());
// consot word("Hello, World!");

// console.log("Hello, World!".length);
// console.log(
//   "Hello, World!".substring(0, 1).toUpperCase() +
//     "Hello, World!".substring(1).toLowerCase()
// );

// const students = [
//   {
//     id: 1,
//     last_name: "林",
//     first_name: "美玲",
//     gender: "female",
//     phone: "0912-345-678",
//     birthday: "1998-03-15",
//     email: "meiling.lin@email.com",
//   },
//   {
//     id: 2,
//     last_name: "王",
//     first_name: "俊傑",
//     gender: "male",
//     phone: "0923-456-789",
//     birthday: "1997-11-22",
//     email: "junjie.wang@email.com",
//   },
//   {
//     id: 3,
//     last_name: "張",
//     first_name: "雅婷",
//     gender: "female",
//     phone: "0934-567-890",
//     birthday: "1999-07-30",
//     email: "yating.zhang@email.com",
//   },
//   {
//     id: 4,
//     last_name: "李",
//     first_name: "建志",
//     gender: "male",
//     phone: "0945-678-901",
//     birthday: "1998-09-05",
//     email: "jianzhi.li@email.com",
//   },
//   {
//     id: 5,
//     last_name: "陳",
//     first_name: "佳蓉",
//     gender: "female",
//     phone: "0956-789-012",
//     birthday: "1997-05-18",
//     email: "jiarong.chen@email.com",
//   },
//   {
//     id: 6,
//     last_name: "黃",
//     first_name: "志明",
//     gender: "male",
//     phone: "0967-890-123",
//     birthday: "1999-01-10",
//     email: "zhiming.huang@email.com",
//   },
//   {
//     id: 7,
//     last_name: "吳",
//     first_name: "芳瑜",
//     gender: "female",
//     phone: "0978-901-234",
//     birthday: "1998-12-03",
//     email: "fangyu.wu@email.com",
//   },
//   {
//     id: 8,
//     last_name: "劉",
//     first_name: "家豪",
//     gender: "male",
//     phone: "0989-012-345",
//     birthday: "1997-08-20",
//     email: "jiahao.liu@email.com",
//   },
//   {
//     id: 9,
//     last_name: "蔡",
//     first_name: "雅琪",
//     gender: "female",
//     phone: "0990-123-456",
//     birthday: "1999-04-25",
//     email: "yaqi.cai@email.com",
//   },
//   {
//     id: 10,
//     last_name: "楊",
//     first_name: "志遠",
//     gender: "male",
//     phone: "0901-234-567",
//     birthday: "1998-06-12",
//     email: "zhiyuan.yang@email.com",
//   },
// ];
// const result = [];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].gender == "male") {
//     result.push(students[i]);
//   }
//   // console.log(students[i].name)
//   // students[i].sayName()
// }
// console.log(result);

fetch("./datas.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    console.log(json);
  });
