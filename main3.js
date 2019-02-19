
/* EVENTS */

/*window.onload = function(){
	document.getElementById("x16").innerHTML = "TEST FROM JAVASCRIPT";
}*/
		
/*window.onclick = function(){
	document.getElementById('x16').innerHTML = "TEST FROM JAVASCRIPT FROM THE POINT YOU CLICKED";
}*/

/*window.ondblclick = function(){
	document.getElementById('x16').innerHTML = "TEST FROM JAVASCRIPT FROM THE POINT YOU DOUBLE CLICKED";
}*/


/*function changeMeOnOneClick(){
	document.getElementById('x17').innerHTML = "TEST FROM JAVASCRIPT FROM THE POINT YOU CLICKED";
}*/

/*function changeMeOnDoubleClick(){
	document.getElementById('x17').innerHTML = "TEST FROM JAVASCRIPT FROM THE POINT YOU DOUBLE CLICKED";
}*/




function convertUsdToRiyal(){

	"use strict";

	var amount = document.getElementById('input').value ,  // m3 l input lkn .innerHTML m3 l div , ......
	result = amount * 3.75 , 
	message = document.getElementById('div');

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

}

/* msh h7tag hna aktb asm l function 3shan hwa keda keda hy3mlha lma a3ml click*/

button1.onclick = function(){

	"use strict";

	var amount = document.getElementById('input').value ,  // m3 l input lkn .innerHTML m3 l div , ......
	result = amount * 3.75 , 
	message = document.getElementById('div');

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

};

var myInput = document.getElementById('input') , 
	myDiv = document.getElementById('div');


myInput.onkeyup = function(){

	"use strict";

	var amount = document.getElementById('input').value ,  // m3 l input lkn .innerHTML m3 l div , ......
	result = amount * 3.75 , 
	message = document.getElementById('div');

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

};


myInput.onkeydown = function(){

	"use strict";

	

	alert("Hello onKeyDown");

};


myInput.onkeypress = function(){

	"use strict";

	

	alert("Hello onKeyPress");

};


var myDiv = document.getElementById('x18');
myDiv.onmouseover = function(){
	"use strict";
	myDiv.innerHTML = "Hello onmouseover";
}

var myDiv1 = document.getElementById('x19');
myDiv1.onmouseover = function(){
	"use strict";
	myDiv.innerHTML = "Hello i remove the mouse from the text";
};


var myDiv2 = document.getElementById('x20') , 
	myInput = document.getElementById('x19');


myInput.onchange = function(){
	"use strict";
	myDiv2.innerHTML = myInput.value * 3.74 ; 
}; 



var div0 = document.getElementById('currencyDiv') , 
	input0 = document.getElementById('currencyInput') ,
	selectedItem = document.getElementById('currency') ;

selectedItem.onchange = function(){
	"use strict";
	div0.innerHTML = input0.value * selectedItem.value;
};

