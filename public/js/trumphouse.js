/**
* trumphouse -an es5 dop program("div;")
*/


		
var trumphouse = (function() {
	function init () {
		console.log('in init')

		var DOMpiece = function (image) {
		this.elem = document.createElement("div");
		this.elem.appendChild(document.createElement("img"));
}
var gameObject = function(name, src){
	this.elem = new DOMpiece(src)
	this.fullname = name;
}
var User = function( level, src ){
	this.elem = new DOMpiece(src)

	this.skill = level;
}
User.prototype = Object.create(gameObject.prototype);
User.constructor = User;


var trump = function(name , src){
	this.elem = new DOMpiece(src)
	this.fullname = name;
}

trump.prototype = Object.create(gameObject.prototype);

trump.constructor= trump;

var candidate = function (name, src){
	this.fullname = name;
	this.elem = new DOMpiece(src)

}

		var Beginner = 1;
		var Advanced = 2;

		var candidate = [];

	


		this.candidate = [];
		this.player = new user();

		var trump = new trump("Donald J Trump", "img/players/trump.png"); 
		candidate.push(new candidate("Hillary Clinton" ,"img/players/clinton.png"));
		candidate.push(new candidate("Ted Cruz"));
		candidate.push(new candidate("Bernie Sanders"));
		candidate.push(new candidate("Jill Stein"));
		candidate.push(new candidate("Garry Johnson"));
		candidate.push(new candidate("John Kisack"));
	}
	function getCandidates(){
		return candidate
	}
	function addCandidates(newCandidates){
		candidate.push
	}
	function getTrump(){
		return trump
	}
	function setTrump(newTrump){

	}
	function getplayer(){
		return player


	} 
	function setPlayer(newPlayer){
	
	}
});




	


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





