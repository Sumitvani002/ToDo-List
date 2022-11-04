//1. Ways To Print in JavaScript
/*console.log("Hello World ", 4 + 6, "Another log");
// alert("me ");
// document.write("this is document write");
// firstContainer.innerHTML = "<i>Hello World</i>"; //dom manipulation */

//2. JavaScript Console API
/* console.warn("this is warning");
// console.error("this is an error");
//console.clear();
// console.assert(4 == 4 + 2); */

//3. JavaScript Variables
//Containers to store data values
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

//4. DataTypes
//String
var str1 = "this is a string";
var str2 = "this is also a string";
// console.log(str1);
// console.log(str2);

//Numbers
var num1 = 10;
var num2 = 2;
// console.log(num1);
// console.log(num2);

//Objects
var marks = {
    ravi: 34,
    sumit: 50,
};
// console.log(marks);
//Boolean
var a = true;
var b = false;
// console.log(a, b);
//Undefined & Null
var und;
// console.log(und);
var n = null; //it must be specified as null
// console.log(n);

//Symbol is primitive datatype

//Arrays
var arr = [1, 2, 3, "String", 5];
// console.log(arr[3]);
// console.log(arr);

//Operators in JavaScript -
//Arithmetic Operators
var a = 4;
var b = 2;
// console.log("Sum", a + b);
// console.log("Sub", a - b);
// console.log("Mul", a * b);
// console.log("Quo", a / b);
// console.log("Rem", a % b);

//Assignment Operators -
var c = b;
/*c += b; //c = c + b;
c -= b;
c *= b;
c /= b;
c %= b; */

//Comparison(Relational) Operators -
var x = 4;
var y = 2;
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x == y);

//Logical Operators -
// console.log(true && true);
// console.log(false && true);
// console.log(true || false);
// console.log(false || false);
// console.log(!true);
// console.log(!false);

//Functions in JavaScript -
//Dry Principle - Do not repeat yourself
function mul(a, b) {
    return a * b;
}
c = mul(4, 6);
// console.log(c);

//Conditionalsin JavaScript -
var age = 17;
if (age >= 18) {
    // console.log("you are adult");
} else if (age < 18) {
    // console.log("You are teenager");
} else {
    // console.log("You are a kid")
}

//Loops in JavaScript -
var arr1 = [5, 6, 7, 8, 9, 10];
//To traverse whole array means print each element once
//for loop
for (i = 0; i < arr.length + 1; i++) {
    // console.log(arr1[i]);
}
//foreach
arr1.forEach(function(element) {
    // console.log(element);
});

let j = 0;
// const d = 0;
// d = d + 1; //d++;

//while loop
while (j < arr1.length) {
    // console.log(arr1[j])
    j = j + 1; //j++
}

//do while
k = 0;
do {
    // console.log(arr1[k])
    k++;
} while (k < arr.length);

//Break & Continue -
var arr2 = [1, 2, 3, 4, 5];
for (t = 0; t < arr2.length + 1; t++) {
    if (t == 2) {
        //break;
        continue;
    }
    // console.log(arr2[t]);
}

// Array Methods
let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
myArr.pop(); //removes last element
// console.log(myArr);
myArr.push("Sumit"); //insert at last
// console.log(myArr);
myArr.shift(); //removes first element
// console.log(myArr);
myArr.unshift("Sumit"); //brings copy of specified element to first
// console.log(myArr);
// console.log(myArr.toString()); //converts array to string
// console.log(myArr.sort()); //sort array

//String Methods -
let myStr = "My Name is Sumit";
// console.log(myStr.length);
// console.log(myStr.indexOf("is"));
// console.log(myStr.slice(0, 3));
// console.log(myStr.replace("Sumit", "Vani"));

//Dates in JavaScript -
let myDate = new Date(); //new keyword to create
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMonth());

//Document Object Model Manipulation -
// console.log(document);
// console.log(document.location);
// console.log(document.getElementById('click'));
// console.log(document.getElementById('click').click());
// console.log(document.getElementById('click').style.border = "blue 2px solid");
// console.log(document.getElementsByClassName('container'));
// console.log(document.getElementsByClassName('container')[0].style.background = "yellow");
// console.log(document.getElementsByClassName('container')[0].classList.add('bg-primary'));
// console.log(document.getElementsByClassName('container')[0].classList.add('text-success'));
// console.log(document.getElementsByClassName('container')[0].classList.remove('text-success'));
// console.log(document.getElementsByClassName('container')[0].innerHTML);
// console.log(document.getElementsByClassName('container')[0].innerText);
tn = document.getElementsByTagName("div");
// console.log(tn);
createdElement = document.createElement("p");
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
// console.log(document.URL);
// console.log(document.scripts);
// console.log(document.links);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.domain);
sel = document.querySelector(".container"); //will give first element of specific class
// console.log(sel);
sel2 = document.querySelectorAll(".container"); //will give all containers of specific class
// console.log(sel2);

//Events in JavaScript -
function clicked() {
    //mentioned in button tag
    // console.log("The button was clicked")
}
window.onload = function() {
    // console.log("The document was loaded");
};

//click event on container
firstContainer.addEventListener("click", function() {
    //document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked </b>"
    // console.log("Clicked On Container");
});

//mouseover event on container
firstContainer.addEventListener("mouseover", function() {
    // console.log("MouseOver On Container");
});

//mouseout event on container
firstContainer.addEventListener("mouseout", function() {
    // console.log("MouseOut Of Container");
});

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
//mouseup event on container
firstContainer.addEventListener("mouseup", function() {
    // document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    // console.log("MouseUp when clicked On Container and released");
});

//mousedown event on container
firstContainer.addEventListener("mousedown", function() {
    // document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked </b>"
    // console.log("MouseDown when clicked On Container and hold");
});

//Arrow Functions - (Short Way to define functions)
sum = (a, b) => {
    return a + b;
};
// console.log(sum(4, 4));

logKaro = () => {
    console.log("I am your log");
};

//SetTimeout & SetInterval in JavaScript -
// clr1 = setTimeout(logKaro, 3000) //logKaro function will be executed after 3 seconds at once only
// clr2 = setInterval(logKaro, 3000) //logKaro function will be executed after every 3 seconds repeatedly
// clearInterval(clr2);
// clearTimeout(clr1);

//Local Storage in JavaScript -
//LocalStorage is a data storage type of web storage. This allows the JavaScript sites and apps to store and access the data without any expiration date. 
//This means that the data will always be persisted and will not expire.So, data stored in the browser will be available even after closing the browser window.
localStorage.setItem("name", "sumit");
// console.log(localStorage);
localStorage.clear();
localStorage.setItem("name", "Sumit");
// console.log(localStorage.getItem('name'));


//JSON - JavaScript Object Notation  
//It accepts double quotes only in json
obj = {
    name: "harry",
    length: 1,
    a: {
        this: 'tha"t'
    }
}
jso = JSON.stringify(obj) //object is converted to string
    // console.log(typeof(jso))
    // console.log(jso)
    // console.log(typeof(obj))
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`); //string to json
// console.log(parsed);


//JavaScript Versions -
//https://www.w3schools.com/js/js_versions.asp


//Projects -
//1. JavasCript Clock
//2. An amazing javascript to-do list