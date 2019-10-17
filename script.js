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

const app = document.getElementById("root");
const logo = document.createElement("img");
logo.src = "logo.png";
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function() {
  var data = JSON.parse(this.response);

  //checking for error within the range of 200-300
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      //creating a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // create h1 and set the text content to the films title
      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      // create a p and set the text content to the films description
      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300); // Limit to 300 chars
      p.textContent = `${movie.description}...`; // End with an ellipses

      //Append the cards to the container element
      container.appendChild(card);
      // Each card will contain an h1 and p
      card.appendChild(h1);
      card.appendChild(p);
      //console.log(movie.title);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Its not workfing!`;
    app.appendChild(errorMessage);
    //console.log("error");
  }
};

request.send();
