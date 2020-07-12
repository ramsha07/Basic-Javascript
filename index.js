/*------------------------------3  WAYS 1)ALERT 2)CONSOLE.LOG 3)DOCUMENT.WRITE-------------------*/
//  console.log("Hello World");
// document.write("hello World");
// alert("Hello World");

/*--------------------------------VARIABLE TO STORE INFo-------------------
 var nationality = "Pakistani";
 var age = 45;
 var feePaid = true;

 alert(nationality);
 alert(age);
 alert(feePaid);
 
/*-----------------CHANGING OF VARIABLE---------*/
// var name = "Ramsha";
// name = "Shoaib";
// alert(name);

/*---------------------updating variable---------*/
// var name = "Ramsha";
// console.log(name);

// var name = "Shoaib";
// console.log(name);

/*-----------------------------variable can store digits with no quotes-----*/
// var a = 25;
// var b = 11;
// var c = a + b;
// document.write(c);

//----------------------------undefined variable---------------//
// var a;
// console.log(a);
// a = "Hello";
// console.log(a);

// //----------------------------null variable-----------------//
// var a = null;
// console.log(a);
//  a ="hello";
// console.log(a);

// // ------------------type of operator --------------//
// var age = 20;
// var name ="Ramsha";
// var isFreePaid = true;
// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof isFreePaid);

// // ------------------------arithmetic operator-----------//
// var a = 5;
// var b = 6;

// var c = a + b;
// var d = a - b;
// var e = a * b;
// var f = a / b;
// var g = a % b;

// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// // -------------------------store value in the same variable--------//
// var a = 5;
// a = a + 5;
// console.log(a);

// // ---------------------------BODMAS RULE-------------//
// var h = 5 +7 * (3 - 8) / 6;
// console.log(h); 

// //----------------------------------Increment and decrement-------//
// var a =5;
// a = a++; //---pehle value lao baad mai increment kro
// console.log(a);//result will be 5 only

// var a = 5;
// a = ++a;//--------pehle increament kro baad mai value lao
// console.log(a);//result will be 6

//---------------operation is being performed on "a" but b first take the value of a and due to post increment addition will be performed later so "b" has 12------//
// var a = 12;
// var b = a++;

// console.log(a);
// console.log(b);

//operation is being performed on a and 'b' and 'a' both becomes 13 due topre increment
// var a = 12;
// var b = ++a;

// console.log(a);
// console.log(b);

//example 1//
// var a = 8;
// var b = 6;
// var c = a++ - b;
// console.log(c);

//-------example 2//
// var a = 8;
// var b= 6;
// var c = ++a - b;
// console.log(c);

//-------example 3//
// var a = 8;
// var b= 6;
// var c = ++a + b;
// console.log(c);

//like example 1
// var a = 8;
// var b = 6;
// var c = a++ - b;
// console.log(a);//9
// console.log(b);//6
// console.log(c);//2

//-------like example 2//
// var a = 8;
// var b= 6;
// var c = ++a - b;
// console.log(a);//9
// console.log(b);//6
// console.log(c);//3

// //example 4//
// var a = 4;
// var b = 3;
// var c = a++ + --b - --a;
// console.log(a);
// console.log(b);
// console.log(c);

// //example 5 //
// var a = 6;
// var b = 3;
// var c = ++a - --b + --a;
// console.log(a);
// console.log(b);
// console.log(c);

//MY EXAMPLE//
// var a = 9;
// var b = 5;
// var c = 3;
// var d = 2;
// var e = a++ - ++d + --c - a++ + b++ - d--
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//------moving to PROMPT(i.e taking input from user)

// var name = prompt("What is your name?")
// alert(name);//popup will generate which ask you your name and by using alert will generate another popup for the name typed

//--name prints on console---
// var name = prompt("What is your name?")
// console.log(name);

//---promt with default answer--
// var name = prompt("What is your name?","Your name");
// alert(name);

// var age = prompt("What is your age?","Your age");
// console.log(age);

// var age = prompt("what is your age?","22");
// console.log(age);

// var newAge = parseInt(age) + 3;
// console.log(newAge);

// var age = prompt("what is your age?","22");
// console.log(age);

// var newAge = parseFloat(age) + 3;
// console.log(newAge);

// var age = prompt("what is your age?","22");
// console.log(age);

// var newAge = Number(age) + 3;
// console.log(newAge);

// ---cases of NaN(Not a Number)
// var name = prompt("What is your name?")
// var sum = parseInt(name) + 3;
// console.log(sum);//NaN

// var a = Number("999 000");
// console.log(a)//NaN

// var s = Number("Hello");//NaN
// var a = Number(true);//1
// var b = Number(false)//0
// console.log(a);
// console.log(b);
// console.log(s);

// -----COMPARISION OPERATOR-------(To compare output in boolean)
// 1)==(checks equality without looking datatypes)
// 2)===(checks equality with the datatypes consider)
// 3)!=(not equal to)
// 4)>(greater than)
// 5)<(less than)
// 6)>=(either greater than or equal to)
// 7)<=(less than or equal to)

//----Let's see difference between double and triple equal--//
// var a = 5;
// var b = "5";
// console.log(a==b);//True coz it is independent of datatypes
// console.log(a===b);//False coz it is dependent on datatypes

//-----Let's run all the Comparision Operators together---//
//-----Example 1
// var a = 5;
// var b = 6;
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

//-----Example 2
// var a = 5;
// var b = 5;
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

//--Example 3---//
// var a = 5
// var b = "Hello"
// console.log(a==b);
// console.log(a===b);

// //--Example 4---//
// var a = 5
// var b = true
// console.log(a==b);
// console.log(a===b);

// --------LOGICAL OPERATORS----(they want boolean operators on both sides.
//  Simply two comparision operators and a sign in betweer n whether && || ! )
//----Example of && (And operator,they are in search of false to become the whole value false)
// var a = 5
// var b = a ==5 && a < 6;
//         //true   true
// console.log(b)//output also true

// var a = 8
// var b = a ===8 && a!=8;
             //true    false(in search of false to become false )
// console.log(b)//False

// var a = 5
// var b = 7
// var c = a == b && a === b && a != b && a > b && a < b && a >= b && a <= b;
// console.log(c);//false
// var d = a<b && b==7 && a!=6
// console.log(d)//true

//----Example of ||(Or operator,they are in search of true to become true)
// var a = 4;
// var b = a>6 || a==4
//     // false   true
// console.log(b)//true just because of one true

// var a = 5;
// var b = 4;
// var c = a==b || a>b || a<b || a>=b || a<=b || a!=b;
// console.log(c)

//-------Example of !(Not Operator,if the answer is true in real this (!)will convert the end result to false
// var a =7
// var b =8
// var c= !(a>8)//false
// console.log(c)//true

// var a =90
// var b = 50
// var c = a >b && a==90
// var d =!c
// console.log(d)
// console.log(!1)
// console.log(!0)

// ---Example of !!(Double not operator,single !not wil convert once, double not will again covert
// var a = 8;
// var b = a==8
// var c = !b
// var d =!!b
// console.log(a)//8
// console.log(b)//true
// console.log(c)//false
// console.log(d)//true

//---&& and || are called short circuit operators
//example of && which is in search of false to stop its circuit and become false without looking the next value after one false appears
// var score = 60;
// var a = score>50 && score==60 && score<40 && score>=60
// console.log(a)

//example of || which is in search of true to stop its circuit and become true without looking the next value after one true appears
var score = 60;
var a = score>50 || score==60 || score<40 || score>=60
console.log(a)




