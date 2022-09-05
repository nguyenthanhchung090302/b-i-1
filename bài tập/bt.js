// bài 4:
// console.log(`1. ${age}`);//undefined
// var age = 20;
// console.log(`2. ${age}`);//20

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// console.log(`3. ${calAge(yearOfBirth)}`) //27
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) //27

// console.log(`5. ${getFullName(firstName, lastName)}`); //undefined
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;s
// }
// console.log(`6. ${getFullName(firstName, lastName)}`); //peter, parker

// bài 5:
// console.log(age); //undefined

// let age = 27;

// console.log(age) //27

// {
// console.log(firstName); //undefined
// console.log(age); //undefined
// console.log(age); //undefined

// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";

// console.log(firstName); //peter
// console.log(lastName); //parker
// console.log(job); //Spider man
// }

// bài 6:
// a = 2;
// var a;
// console.log( a );//2

// bài 7:
// console.log( a );  //undefined
// var a = 2;
 
// bài 8:
// var a = 10;
// function foo() {
// var a;
// console.log( a );  //undefined 
// a = 2;
// }
// foo();


// bài 11:
// function removeEnd(arr, n) {
//     // xóa phần tử cuối cùng bằng splice
//  arr.splice(n, arr.length-n)
// }
//     let arr1 = ["pt1","pt2","pt3"];
//     let arr2 = arr1.splice(2,2);
//     console.log(arr1);

// bài 12:Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// function first(arr, n) {
//     // logic code
//     for(i=0; i<=n-1; i++){
//         console.log(arr[i]);
//     }
//     }

// bài 13: Cho một mảng
// const users = [
// {
// name: "Angelina Jolie",
// age: 80
// },
// {
// name: "Eric Jones",
// age: 2
// },
// {
// name: "Paris Hilton",
// age: 5
// },
// {
// name: "Kayne West",
// age: 16
// },
// {
// name: "Bob Ziroll",

// age: 100
// }
// ]
//Sử dụng phương thức map() của array, tạo một array mới với các phần tử con ở trong
//có name nằm trong các thẻ h1, age nằm trong các thẻ h2
    
//     function courseHandler(couser){
//         return{
//             name:`<h1>${couser.name}</h1>`,
//             age:`<h2>${couser.age}</h2>`

//         }
//     }
//    const newUsers = users.map(courseHandler)

//    console.log(newUsers);

// bài 14 Vẫn sử dụng mảng cho sẵn ở bài 12, sử dụng phương thức map() của array tạo ra một
//mảng mới chỉ chưa tên của các phần tử object con nằm trong mảng lớn

// const users = [
//     {
//     name: "Angelina Jolie",
//     age: 80
//     },
//     {
//     name: "Eric Jones",
//     age: 2
//     },
//     {
//     name: "Paris Hilton",
//     age: 5
//     },
//     {
//     name: "Kayne West",
//     age: 16
//     },
//     {
//     name: "Bob Ziroll",
    
//     age: 100
//     }
//     ]


//     function courseHandler(couser){
//         return{
//             name:`${couser.name}`,
          
//         }
//     }
//    const newUsers = users.map(courseHandler)

//    console.log(newUsers);

// bài 15:
// let a = 3;
// function triple(a){
   
//     return a * 3;
// };
// triple(3);
// console.log(triple(3));


// let b = [1,2,3,4,5];

// function multiply(d){
//     d = d * 3;
//     return d;
// }
// let c = b.map(multiply);
// console.log(c);

// let e = c.map(triple);
// console.log(e);

//bài 16. Sử dụng hàm filter của array. Viết một hàm nhận vào một mảng số ngẫu nhiên, hàm đó
//trả về một mảng mới chỉ chứa các phần tử lớn hơn 5


// let arr = [2,4,6,7,8,9];
// let result = arr.filter(usersName)
// function usersName(arr){
//     return arr > 5;

// }
// console.log(result);

// bài 17. Cho mảng sau
// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
//     ];
// //     Viết một hàm nhận đầu vào là mảng trên, sử dụng phương thức filter của array, trả về
// //     một mảng mới chỉ chữa những phần tử object có gender là female
// let result = members.filter(newMembers);
// function newMembers (members){
//     return members.gender =='female'
// }
// console.log(result);

// bài 19. Viết một hàm nhận vào 2 tham số, tham số đầu tiên là một mảng số tự nhiên, tham số
// thứ 2 là số cần chia hết. Sử dụng find method của array, trả về số đầu tiên trong mảng
// đầu vào chia hết cho tham số thứ 2. Nếu không tìm thấy trả về undefined
// let array = [5,15,20,25,30];
// let x = 3;
// function findDivisibleNum(array, x) {
// // logic code
// }







// bài 20 
// let arr = ['a','b','c','b','a'];
// let result = {};

// for(let i = 0; i <= arr.length-1;i=i+1){
//     let element = arr[i];
//     if (!result[element]){
//         result[element] = 1;
//     }else {
//         result[element] = result[element] + 1;

//     }
// }
// console.log(result);

//bài 21:
// function flatternArr(arr){
//     return arr.reduce(function(pre, cur){
//         for(let i=0; i<=cur.length-1; i=i+1){
//             pre.push(cur[i]);
//         }
//         return pre;
//     }, []);
// }

// let result = flatternArr([
//     [1,2,3],
//     [4,5],
// ])
// console.log(result);

//bài 22:
// function diff(arr1, arr2){
//     // lọc những phần tử ở trong arr1 chưa tồn tại trong arr2
//    let result = arr1.filter(function(e,i){
// return arr2.indexOf(e) === -1;
//     });
//     // lọc những phần tử ở trong arr2 chưa tồn tại trong arr1
//     let result2 = arr2.filter(function (e,i){
//         return arr1.indexOf(e) === -1;
//     });
//     // console.log(result);
//     // console.log(result2);
//     // nối 2 mảng result lại và return
//     return result.concat(result2);

// }

// let result = diff([1,2,3,4,5], [1,2,1,]);
// console.log(result);


// bài 23:
// function sumFib(n){
//     let num1 = 1;
//     let num2 = 2;
//     let temp;
//     let result = [];
//     for(let i = 1; i <= n; i++){
//         if (num1 <= n){
//             result.push(num1);
//         }
//         console.log(num1);
//         temp = num1;
//         num1 = num2;
//         num2 = temp + num2;
//     }
//     let sum = 0;
//     for(let e of result){
//         if (e % 2 == 1){
//             sum = sum + e;
//         }
//     }
//     return sum;
// }

// sumFib(10);

// bài 26:
function uniqueArray(){
    //  console.log(arguments);
    let result = [];
    for (let i = 0; i < arguments.length; i++){
        const element = arguments[i];
        for(let e of element){
            result.push(e);
        }
    }
    return result.filter(function (e, i){
        return result.indexOf(e) === i;

    })
}
let result = uniqueArray([1,2,3,3], [3,4,5,6], [3,4,7,8,9]);
console.log(result);
