function generateYearsSelectionBox(){
	"use strict";

	var start = parseInt(document.getElementById('startDate').value) ,
	 	end = parseInt(document.getElementById('endDate').value);

	 document.write("<select>");

	 var years ;
	 
	 for( years = start ; years <= end ; years++){
	 	document.write("<option value = '" + years + "'>" + years + "</option>" + "<br>");
	 }

	 document.write("</select>")
}


function generateYearsSelectionBox1(){
	"use strict";

	var start = parseInt(document.getElementById('startDate').value) ,
	 	end = parseInt(document.getElementById('endDate').value);

	 //document.write("<select>");

	
	 
	
	 alert(start+end);

	 //document.write("</select>")
}


