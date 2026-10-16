// // task 1
// // Filter and map arrays
// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 12000 },
//   { name: "Headphones", price: 2000 }
// ];

// const expensiveProducts = products.filter(product => product.price > 1000);
// console.log(expensiveProducts);


// const allProductNames = products.map(product => product.name);
// console.log( allProductNames);

// const expensiveProductNames = expensiveProducts.map(product => product.name);
// console.log(expensiveProductNames);

// const totalExpensivePrice = expensiveProducts.reduce((total, product) => total + product.price, 0);
// console.log(  totalExpensivePrice);

// const totalAllPrice = products.reduce((total, product) => total + product.price, 0);
// console.log(totalAllPrice);

// const pipelineResult = products
//   .filter(product => product.price > 1000)
//   .reduce((total, product) => total + product.price, 0);
// console.log( pipelineResult);

//task
// let num=[40,10,5,20,30];
// let a=num.sort((a,b)=>a-b);
// console.log(a);
// let b=num.sort((a,b)=>b-a);
// console.log(b);


//task

// let num=[10,20,30,40];
// let res=num.reduce((total,num)=>{
//     return total+num
// },20);
// console.log(res);

// let number=[10,20,30,40,50];
// let a=number.slice(1,3);
// let b=number.splice(1,2);
// console.log(a);
// console.log(b);

// let n=[10,20,15,5]
// let r=n.every((n)=>{
//     return n>15
// });
// console.log(r);

// let num=[10,50,15,5]
// let r=num.every((num)=>{
//     return num>15
// });
// console.log(r);

// const employee={
//     name:"arun",
//     salary:3000
// };
// console.log(employee.name);
// console.log(employee["salary"]);
// employee.salary=35000;
// console.log(employee.salary);
// employee.city="chennai";
// delete employee.city;
// console.log(employee);

// const student={
//     name:"arun",
//     address:{
//         city:"chennai",
//         state:"tamilnadu"
//     }
// };
// console.log(student.name);
// console.log(student.address.city);
// console.log(student.address.state);

const student={
    name:"arun",
    age:"21",
    course:"React"
};
const {name,age,course}=student;
console.log(name);
console.log(age);
console.log(course);
