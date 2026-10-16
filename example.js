


/*const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headphones", price: 2000 }
];

const filteredProducts = products.filter(product => product.price > 1000);
console.log(filteredProducts);

const productNames = products.map(product => product.name);
console.log(productNames);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total price:", totalPrice);


let strong=[40,10,5,20,30,50,60,70,80,90,100];
let ru=strong.sort((a,b)=>a-b);
console.log(ru);

let numbers = [ 10, 20, 30, 40];
let res=numbers.reduce((total, num) => {
    return total + num;
});
console.log(res);

let numbers2 = [ 10, 20, 30, 40];
let a= numbers2.slice(1,3);
let b= numbers2.splice(0,1);
console.log(a);
console.log(b);

let numbers3 = [ 10, 20, 30, 40];
let result= numbers3.some((n)=>{
    return n>30;
})
console.log(result);

const employee={
    name:"Rudrash",
    age:25,
    designation:"Software Engineer",
    salary:50000    
};
console.log(employee.name);
console.log(employee.age);  
console.log(employee.designation);
console.log(employee["salary"]);
employee.salary=60000;
console.log(employee.salary);
employee.city="Bangalore";
console.log(employee.city);
console.log(employee);

const student={
    name:"varun",
    address:{
        city:"Bangalore",
        state:"Karnataka"
    }

};

console.log(student.name);
console.log(student.address.city);
console.log(student.address.state);

const user={
    name:"Rudrash",
};

const{
    name:userName,
    city="chennai"
} = user;
console.log(userName);
console.log(city);
 //spread operator
 const original={
    name:"Rudrash",
    age:25,
    designation:"Software Engineer"
 };

 const updated={
    ...original,
    age:26,
    city:"Bangalore"
 };
 const updated2={
    ...original,
    ...updated, 
 };
 console.log(updated2);*/


 const username=null;
 const age=0;
 const city=undefined;
 console.log(username ?? "Guest");
 console.log(age || 18);
 console.log(city ?? "Unknown");
 