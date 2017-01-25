/**
* trumphouse -an es5 dop program("div;")
*/

var DOMpiece = function (image) {
	this.elem = document.createElement("div");
	this.elem.appendChild(document.createElement("img"));
}
var Character = function(name){
		
}
var User = function( level ){
		this.skill = level;
}
var trump = function (name){
		 this.fullname = name
}


var candidate = function (){
		this.fullname = name;
}
var trumphouse = (function() {
	function init () {
		console.log('in init');

		this.candidate = [];
		this.player = new user();

		this.trump = new trump("Donald J Trump", "img/players/trump.png"); 
		this.candidate.push(new candidate("Hillary Clinton" ,"img/players/clinton.png"));
		this.candidate.push(new candidate("Ted Cruz"));
		this.candidate.push(new candidate("Bernie Sanders"));
		this.candidate.push(new candidate("Jill Stein"));
		this.candidate.push(new candidate("Garry Johnson"));
		this.candidate.push(new candidate("John Kisack"));
	};
 /*
 *model
 *store game score
 *score timing
 *score peramiters
 */
/*
*view
*the background to the game
*the white house image
*a thump logo
*characters
*the user
*/
/*
*controlers
* detect user pressing arrow keys
* detect collisoions

*/


	return {
		
	}
}());