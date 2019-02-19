/* Start Array */

/* Array Defination */

/* CONSTRUCTOR WAY1 */
/*var myArray = new Array();
	myArray[0] = "Hadeer";
	myArray[1] = "Ahmed";
	myArray[2] = "Aya";

console.log(myArray);*/    /* output 1 */

/* CONSTRUCTOR WAY2 */

var myArray = new Array("Hadeer" , "Ahmed" , "Aya");

/*console.log(myArray); */  /* output 2 */

/* Note : Fe Fr2 fe shakl l output maben output 1 & output 2 ?*/

/* LITERAL WAY1 */

/*var friends = [];
	friends[0] = "Hadeer";
	friends[1] = "Aya";
	friends[2] = "Ahmed";

console.log(friends);*/

/* LITERAL WAY2 */

var friends = ["Hadeer" , "Aya" , "Ahmed"];
console.log(friends); 

console.log(friends[1]);


/* Array Check */

if(Array.isArray(friends)){
	console.log("YES IT IS AN ARRAY");
	console.log(friends.length);    // GET
	//friends.length = 2;             // SET
	//console.log(friends);
}else{
	console.log("NO IT IS NOT AN ARRAY");
}

/* Array ToString */

//friends = friends.toString();
//console.log(friends);

/* difference btn toString() & toLocaleString() */

var myDate = new Date() , 
	myString1 = myDate.toString() ,
	myString2 = myDate.toLocaleString() ;

console.log(myDate);
console.log("toString Function output : " + myString1);
console.log("toLocaleString Function output : " + myString2);

myArray1 = myArray.join();
myArray2 = myArray.join("-");
console.log(myArray1);
console.log(myArray2);


/* Add Items */

/* WAY 1*/

friends[3] = "Amany";

console.log(friends);

/* WAY 2 */

friends.push("Samir");  //queue concept
console.log(friends);

/* WAY 3*/

friends.unshift("talyah");  //stack concept
console.log(friends);

/* WAY 4 */

friends.splice(3,0,"Soha");  // h add 1 items fe index 3
console.log(friends);


/* Remove Items */

/*WAY 1*/

friends.splice(3 , 2);  // h delete 2 items mn b3d l index 3 
console.log(friends);

/*WAY 2*/

var popedItem = friends.pop();    // queue concept
console.log(popedItem);
console.log(friends);

/* WAY 3*/
friends.shift();  //stack concept
console.log(friends);


/* Array Sort */

friends.sort();
console.log(friends);

/* Important Note */
var numbers = [100 , 20 , 30, 90];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

/* Array Combine and Slice */

var newArray = ['A' , 'B' , 'C' ,'D' , 'E'] , 
	slicedArray = newArray.slice(0,3) ,                 //[0,3[
	slicedArrayNeg = newArray.slice(-3,-1) ,            //[-3,-1[
	newArray2 = ['F' , 'G' , 'H' , 'C']
	newArray3 = [1,2,3,4,5];

var allArrays = newArray.concat(newArray2 , newArray3);

console.log(slicedArray);
console.log(slicedArrayNeg);
console.log(allArrays);


/* Array Search */

var selectedItem = allArrays.indexOf("C");
console.log(selectedItem);
console.log(allArrays[selectedItem]);

document .getElementById("all").innerHTML = "My Array Values Are : "+ allArrays;
document .getElementById("special").innerHTML = "My Special Array Values Are : "+ "<span style = 'color:red'>"+ allArrays[selectedItem]+"</span>";

var selectedItem2 = allArrays.indexOf("A",3);
console.log(selectedItem2);

var selectedItem3 = allArrays.lastIndexOf("C");
console.log(selectedItem3);


/* End Array */ 

/* Start Strings */

var myString = "I Love 'JavaScript' ";

console.log(myString);
console.log(typeof (myString));
console.log(myString.length);

/*convert a number to string*/

var myNumber = 100;
console.log(myNumber);
console.log(typeof (myNumber));
var myNewNumber = myNumber.toString();   //or String(myNumber);
console.log(myNewNumber);
console.log(typeof (myNewNumber));

/* search in String */

var myString0 = "I'am In Love With JavaScript And In Love With Java" , 
	myWord = myString0.indexOf("Love",9) , 
	myWord1 = myString0.lastIndexOf("Love",39) , 
	myWord2 = myString0.search("Love");  //or myString0.search(/love/i);  y3nii case insensitive


console.log("indexof Result : " + myWord);
console.log("lastIndexOf Result : " + myWord1);
console.log("Search : " + myWord2);

/* Split A String */

var myMainString = "I Love JavaScript And JSON" , 
	mySplitedString = myMainString.split(" ",3);  //try split() , split("a")


console.log(myMainString);
console.log(mySplitedString);
console.log(typeof (mySplitedString));


/* Slice A String */

var mySlicedString = myMainString.slice(5) ,
	mySlicedString0 = myMainString.slice(-3);

console.log(mySlicedString);
console.log(mySlicedString0);
console.log(typeof (mySlicedString));

/* substr */

var mySubStr = myMainString.substr(0,10);

console.log(mySubStr);
console.log(typeof (mySubStr));

/* subString */

var mySubString = myMainString.substring(7,15);

console.log(mySubString);

/* Find & Replace A String charAt() & charCodeAt() & replace() */

var myString3 = "I Love JavaScript Too Much JavaScript Is Very Fun" , 
	myChar = myString3.charAt(2) , 
	myUniCode = myString3.charCodeAt(2) , 
	myNewReplacement = myString3.replace("JavaScript","Java") , 
	myNewReplacementAll = myString3.replace(/javaScript/gi , "Java");

console.log(myChar);
console.log(myUniCode);
console.log(myNewReplacement);
console.log(myNewReplacementAll);


/* conactenation fromCharCode(HTML_Code) & concat() */

var myMessage = String.fromCharCode(72,65,68,69,69,82) ,     //Method For Encryption
	myMessage1 = "Hello From Here" ,
	myMessage2 = "To All" , 
	myAllMessage = myMessage1.concat(" " , myMessage2);

console.log(myMessage);
console.log(myAllMessage);


/* convert Letters  toLowerCase() & toUpperCase() */

var myString4 = "I Love JS" , 
	myStringLower = myString4.toLowerCase() , 
	myStringUpper = myString4.toUpperCase() ;

console.log(myString4);
console.log(myStringLower);
console.log(myStringUpper);


/* String References trim() & link() */

var myString5 = "           Hello I am Hadeer          ";
console.log(myString5);
var myNewString = myString5.trim();
console.log(myNewString);

var myString6 = "Google";
console.log("Go to Google by this link : " + myString6.link("http://www.google.com"));

/* Chain */


var myNumber0 = 120 ,
    myString7 = myNumber0.toString();
console.log(myString7);

var myNewNumber = myString7.replace(2,3);
console.log(myNewNumber);

var myLastNumber = myNewNumber.split("");
console.log(myLastNumber);


var myString8 = myNumber0.toString().replace(2,3).split("");
console.log(myString8);

/*End Strings*/

 

/* Start Loops */

/*For Loop*/

var i , 
 	newFriends = ["a" , "b" , "c" , "d"];

for(i = 0 ; i < newFriends.length ; i++){
	console.log(newFriends[i]);
}


/* For In Loop */

var myCar = {
	color : "white" ,
	type  : "Sedan" ,
	price : "50.000" ,
	model : "2016"
};
var prop;

console.log(myCar);
console.log(myCar.model);

for(prop in myCar){

	if(myCar.hasOwnProperty(prop)){

		console.log(prop + ":" + myCar[prop]);	
	}
	
}

/* For Loop Advanced */

/* Way 1 */
var j ;

for( j = 0 ; j <= 10 ; j++){
	console.log(j);
}

/* Way 2 */
var k = 0;

for(;;){
	if( k > 11 ) break;

	console.log(k);
	k++;
}

/* ---------------------------------- */

function generateYearsUsingFor(start , end){
	"use strict";

	document.write("<select>");

	var years ; 
	for(years = start ; years <= end ; years++){
		//console.log(years);
		document.write("<option value =  '" + years + "'>" + years + "</option" + "<br>");
	}

	document.write("</select>");
}

generateYearsUsingFor(1990,2019);

/* Way1 equivelant to Way2 */

/* While & Do While */

var i = 0;

while(i < 11){
	console.log(i);
	i++;
}

function generateYearsUsingWhile(start , end){

	"use strict";

	document.write("<select>");
	var years = start;

	while(years<=end){
		document.write("<option value = '" + years + "'>" +years+ "</option>");
		years++;
	}

	document.write("</select>");
}

generateYearsUsingWhile(2000,2018);

function generateYearsUsingDoWhile(start , end){

	"use strict";

	document.write("<select>");
	var years = start;

	do{
		document.write("<option value = '" + years + "'>" +years+ "</option>");
		years++;
	}while(years<=end);

	document.write("</select>");

}

generateYearsUsingDoWhile(2010,2018);

/* Loop Control Break , Continue , Label */

var m;
for( m = 0 ; m < 10 ; m++ ){

	if(m==5) break;
	console.log(m);
}

for( m = 0 ; m < 10 ; m++ ){
	if(m==7) continue;
	console.log(m);
}

var x , y ;

MainLoop:
for( x = 0 ; x <= 5 ; x++ ){

	ChildLoop:
	for( y = 6 ; y <= 10 ; y++ ){

		if( y == 9 ){
			break MainLoop;
		}
		console.log(x + ":" + y);
	}
}

/* End Loops */


/* Start Math Ceil & Floor & Min & Max & Random */

console.log(Math.ceil(5.1));
console.log(Math.ceil(-4.7));
console.log(Math.floor(5.1));
console.log(Math.floor(-5.1));
console.log(Math.round(1.4));
console.log(Math.round(1.9));
console.log(Math.round(5.499));
console.log(Math.round(5.500));
console.log(Math.max(100,10,50,-90,-120));
console.log(Math.min(100,10,50,-90,-120));

var s = Math.random();
console.log(s*20);

/* random value btn 1 & 1000 */
var rand1To1000 = Math.random() , 
	myEndPattern = 1000;

console.log(Math.floor( rand1To1000 * myEndPattern) + 1 );

/* random value btn 1 & 1001 */
console.log(Math.ceil( rand1To1000 * myEndPattern) + 1 );

/* End Math */


/* Start Regular Expression */

var string = "I am very veery Loveee JavaScript " , 
	result = string.search(/L/) , 
	newString = string.replace(/I/ig,"@") , 
	newString2 = string.replace(/[e]/ig,"$") , 
	newString3 = string.replace(/[^e]/ig,"*") , 
	newString4 = string.replace(/[a-e]/ig,"^") ,
	newInput = "AB XYZ abc hij"; 
	newString5 = newInput.replace(/[A-g]/g,"%") ,    //equivelant to [A-Z a-g]
	newString6 = string.replace(/e+gi/,"#") , 
	newString7 = string.replace(/e{3}/gi,"_") , 
	newString8 = string.replace(/e{2,3}/gi,"<") , 
	newString9 = string.replace(/e{1,}/gi,">");

console.log(result);
console.log(newString);
console.log(newString2);
console.log(newString3);
console.log(newString4);
console.log(newString5);
console.log(newString6);
console.log(newString7);
console.log(newString8);
console.log(newString9)

/* End Regular Expression */