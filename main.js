// some variables

/*var x = 10;
var y = 20;
var z = 100;*/

var x = 10 ,
	y = 20 ,
	z = 100;

document.getElementById("test1").innerHTML = "Hello Javascript From JS File";
document.getElementById("test2").innerHTML = 100;
document.getElementById("test3").innerHTML = "x = " + x;
document.getElementById("test4").innerHTML = "String value of (x + y) = " + x+y;
document.getElementById("test5").innerHTML = "Numeric Value Of (x + y) = " + (x+y);

//conditions
if(x+y == 10){
	//statement
	console.log("RIGHT");
}else{
	console.log("WRONG")
}


/*Start Variables*/

var price , undefinedVariable ; //undefined variable
price = 300 ;
var smallDiscount = 50 ,
	mediumDiscount = 100 ,
	largeDiscount = 250; 


var myOldPrice = 1000 , 
    myNewPrice = 900 ,
    myDiscount = myOldPrice - myNewPrice;

document.getElementById("price").innerHTML = "price = " + price;
document.getElementById("undefined").innerHTML = "undefined variable value = " + undefinedVariable;
document.getElementById("discount").innerHTML = "Discount = " + myDiscount;
document.getElementById("product1").innerHTML = "product1 = " + (price - smallDiscount);
document.getElementById("product2").innerHTML = "product2 = " + (price - mediumDiscount );
document.getElementById("product3").innerHTML = "product3 = " + (price - largeDiscount);

/*End Variables*/


/*Start DataTypes*/

var hasDiscount = true , 
	w = 100 , 
	socialWebsites = ["facebook","youtube","google"] ,
	info = {fName:"Hadeer" , lName:"Samir"} , 	
	name = "Hadeer Samir Mohamed", 
	nickName = "Hadeer Samir Mohamed 'HadeerSamir'" , 
	nickName0 = "Hadeer Samir Mohamed \"HadeerSamir\" " , 
	age = 32+10,   //42
	myAge ="32"+10; //3210

var a;
var b = null;
	  

document.getElementById('dataTypes').innerHTML = w;

if(hasDiscount == true){
	w = 350;
}else{
	w = 450;
}

document.getElementById('dataTypes').innerHTML = w;
document.getElementById('arrayDataType').innerHTML = socialWebsites;
document.getElementById('arrayDataType0').innerHTML = socialWebsites[0];
document.getElementById('objectDataType').innerHTML = info;
document.getElementById('objectDataType0').innerHTML = info.fName;
document.getElementById("string").innerHTML = name;
document.getElementById("string0").innerHTML = nickName;
document.getElementById("string1").innerHTML = nickName0;
document.getElementById("number").innerHTML = age;
document.getElementById("number0").innerHTML = myAge;
document.getElementById('bool').innerHTML = typeof hasDiscount;
document.getElementById('num').innerHTML = typeof age;
document.getElementById('str').innerHTML = typeof name;
document.getElementById('array').innerHTML = typeof socialWebsites;
document.getElementById('object').innerHTML = typeof info;
document.getElementById('und').innerHTML = typeof a;
document.getElementById('nu').innerHTML = typeof b;

/*End DataTypes*/

/*start Conactenation*/

var x1 = "10" + 10 , 
	x2 = 4 + 5 + "Hadeer" , 
	x3 = "Hadeer" + 4 + 5 ,
	x4 = "Hadeer" + (4 + 5)
	name1 = "Hadeer"
	age1 = 23 , 
	country = "Egypt"; 


document.getElementById('x1').innerHTML = x1;
document.getElementById('x2').innerHTML = x2;
document.getElementById('x3').innerHTML = x3;
document.getElementById('x4').innerHTML = x4;
document.getElementById('x5').innerHTML = "MyName is : " + name1 + "<br>" +
										  "MyAge is : " + age1 + "<br>" +
										  "MyCountry is : " + country;

document.getElementById('x6').innerHTML = "<span style = \"color:red\">My Name is </span><span style = \"color:green\">"+ name1 + "</span>";

/*End Concatenation*/


/*start output*/

var myFName = "Hadeer";

//alert(myFName);
document.write("Hello My Name is "+myFName);
document.getElementById("x7").innerHTML = "Hello My Name is "+myFName;
console.log("Hello My Name is "+myFName);

/*end output*/

/* Start Operators*/

/* ( + , - , * , / , % , ++ , -- ) */

var c1 = "Hadeer" ,
    c2 = 12,
    c3 = c1-c2;

var c4 = 1;

document.getElementById('x8').innerHTML = c3;
document.getElementById('x9').innerHTML = c4++;
document.getElementById('x9').innerHTML = ++c4;

/*End Operators*/

/*start IF ELSE */

var ticketPrice = 100;

if( ticketPrice < 1500 ){
	console.log("Its Cheap")

}else if ( ticketPrice > 50){
	console.log("Its Medium")
} else{
	console.log("Its Expensive")

}

//var yourAge = prompt("What is yourAge ?");   // ba5od beha input mn l user

/*if(yourAge<18){
	document.getElementById('x10').innerHTML = "Sorry your age is "+yourAge+" you are not allowed here";
}else{
	document.getElementById('x10').innerHTML = "Hello your age is "+yourAge+" wellcome here";
}*/

/*end IF ELSE */

/* start conditional operators */

/* (< , > , <= , >= , ==) */

//exp1

/*var myPrice = 50;

if(myPrice = 70){
	alert("good");
}else{
	alert("bad");
}*/

//exp2
/*var myPrice = 50;

if(myPrice == "50"){
	alert("good");
}else{
	alert("bad");
}*/

//exp3
/*var myPrice = 50;

if(myPrice == "50"){
	alert("good");
}else{
	alert("bad");
}*/

/* end conditional operators */


/* start logical operators */

// ( != , !== , || , && )

//exp1 
var agee1 = 23;

if(agee1!="23"){
	alert("Good Age");
}else{
	alert("NotGood Age");
}


//exp2
var agee2 = "23";

if(agee2!==23){
	alert("Good Age");
}else{
	alert("NotGood Age");
}

/* end logical operators */

/* start Functions */

function sayHello(){
	"use strict";
	alert("Hello Javascript From Inside function")
}

function myInfo(){
	"use strict";
	var myName = "hadeer";

	return myName;
}

function myAgeInDays(){
	var age =23;

	return age*365;
}

function myAgeInDay(age) {
	return age*365;
}

sayHello();
myInfo();


document.getElementById('x11').innerHTML = myInfo();
document.getElementById('x12').innerHTML = "Your age in days : "+ myAgeInDays();
document.getElementById('x13').innerHTML = "Your age in days function with parameters : "+ myAgeInDay(22);

var prom = prompt("Enter Your Age Please : ")
document.getElementById('x14').innerHTML = "YOUR AGE IN DAYS = " + myAgeInDay(prom);


//result of undefined parameters with mathematical operations is NaN


myFunc();

function myFunc(){
	"use strict";
	alert("My Function");
}

/*function convertUsdToRiyal(){
	"use strict";
	var amount = document.getElementById("x15").innerHTML;  //100
	var result = amount * 3.75;

	alert(result);
}

convertUsdToRiyal(100);*/

function convertUsdToRiyal(){

	"use strict";

	var amount = document.getElementById('dollar').value ,  // m3 l input lkn .innerHTML m3 l div , ......
	    result = amount * 3.75 , 
        message = document.getElementById('result');

	if( amount == "" ){
		message.innerHTML = "The Field Cannot Be Empty. ";
	}else if( isNaN(amount) ){
		message.innerHTML = "This Field accepts numbers only. ";
	}else if( amount == "0"){            // 3mlt l zero ma b3n " " 3shan l field l b3ad mno l amount byd5l text bs y3nii string 
		message.innerHTML = "The value must not be zero. ";
	}else if( amount < 0){
		message.innerHTML = "message must not be negative number. ";
	}else{
		message.innerHTML =  amount + " dollar is worth " + result + " Riyal";
	}
	//console.log(amount+" dollar is worth " + result + " Riyal");
	//document.getElementById('result').innerHTML = amount + " dollar is worth " + result + " Riyal";
}


//self invoke function

// ( function functionName () { //body } )(); or ( function functionName () { //body  } ());

(function sayWelcomeWhenPageIsLoaded(){
	"use strict";
	alert("Welcome To My Web Page");
})();


/*(function convertUsdToRiyal(){
	"use strict";
	var amount = document.getElementById("x15").innerHTML;  //100
	var result = amount * 3.75;

	alert(result);
})();*/

/* end Functions */

/* start switch case */

var season = prompt("Enter Your Best Season : ");

switch ( season ){
	case "Winter" :
		alert("Winter Is Cold.");
		break;

	case "Summer" :
		alert("Summer is Hot");
		break;

	case "Autumn" :
		alert("Autumn is Good. ");
		break;

	case "Spring" :
		alert("Spring is amazing.");
		break;

	default :
		alert("You didn't type any season name. ");
		break;
}

/* end switch case */


/* start scope */

//exp 1
var variable = "Hadeer";  //global variable
console.log(variable);

function testLocalVariable(){

	"use strict";
	//console.log(variable);
	//var variable = "Aya"; //local variable
	console.log(variable);
	variable = "Ahmed";   //global variable
	console.log(variable);
}

testLocalVariable();
console.log(variable);

//exp 2
var x = 1;

function testFunc1(){
	"use strict";

	var calc = x + 2 ;
	console.log(calc); //3

}

function testFunc2(){
	"use strict";
	var x = 5 ;
	var calc = x + 2 ;
	console.log(calc); //7

}

function testFunc3(){
	"use strict";
	x = 5 ;
	var calc = x + 2 ;
	console.log(calc); //7

}

function testFunc4(){

	"use strict";
	x = 5 ;
	
	
	function testChild(){
		var calc = x + 2 ;
		console.log(calc);
	}
  
	//console.log(calc);   //undefined

	return testChild();

}


function testFunc5(){

	"use strict";
	var x = 5 ;
	
	
	function testChild(){

		var x = 100;
		var calc = x + 2 ;
		console.log(calc);
	}
  
	//console.log(calc);   //undefined

	return testChild();

}

testFunc1();  //3 
testFunc2();  //7
console.log(x+2);  //3
testFunc3(); //7
console.log(x+2); //7
testFunc4();
testFunc5();

/* end scope */


/* start Events */



/* end Events */


