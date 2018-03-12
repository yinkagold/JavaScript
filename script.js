/*var batwing = {
	
	status : "Ready",
	rescueBatman: function() {
		document.write("Locating his transponder...");
	}
}
		
if(batwing.status === "Ready"){
	batwing.rescueBatman();
	
}

var utilities = {
	printAllMembers: function(targetObject){
		for(i in targetObject){
			document.write("<br />" + targetObject[i]);
		}		
	}
}
var i_am_empty = { };
utilities.printAllMembers(i_am_empty);


var planet = {
	id: 34,
	name: "Mecury",
	faction: {
		factionId: 2,
		name: "Tex",
		notification: function(){
			document.write("Tex alliance... unite!");
		}
	},
	cities: [
		{ locationId: 15, name: "Gladis"}, // object literals 
		{ locationId: 16, name: "Tod"},
		{ locationId: 17, name: "Rob"}
	]
	
};*/
//planet.faction.notification();
//document.write(planet.cities[1].name);

//document.write("<br />" + planet.name);
//planet.name = "Peter";
//document.write("<br />" + planet.name)

//var z = planet; 
//document.write(z.name);

// adding to existing object literals 
/*
if (typeof planet.defence == "undefined"){
planet.defence = "Earth";
}
document.write(planet.defence); 

for (i in planet){
	document.write("<br />" + i + ":" + planet[i]);
}*/

function car(make, model, year){ // constructor 
	this.make = make;
	this.model = model;
	this.year = year;
	
}

var myCar = new car("Honda", "Accord", 1996);
var newCar = new car("Volks", "Golf", 2004);

for (i in myCar){
	document.write("<br />" + myCar[i]);
}