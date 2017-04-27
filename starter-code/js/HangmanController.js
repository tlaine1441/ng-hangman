angular.module("hangmanApp")
	.controller('HangmanController', HangmanController);

HangmanController.$inject = ['$timeout'];
function HangmanController($timeout) {
	var wordList = ['acres','adult','advice','arrangement','attempt','August',
	'Autumn','border','breeze','brick','calm','canal','Casey','cast','chose','claws',
	'coach','deeply','depth','discussion','doll','donkey','Egypt','Ellen',
	'essential','exchange','exist','explanation','facing','sale','satellites',
	'satisfied','scared','shallow','shout','silly','simplest','slight',
	'slip','slope','soap','solar','species','spin','stiff','swung','tales',
	'thumb','tobacco','toy','trap','vessels','wealth','wolf',
	'zoo'];

	Array.prototype.randomWord = function () {
	    return this[Math.floor(Math.random() * this.length)]
	}
	console.log("controller live");
	var self = this;
	 	self.guessLetter = guessLetter;

	self.hangmanGame = new HangmanGame(wordList.randomWord().toLowerCase());

	function guessLetter(){
		console.log(self.hangmanGame.input);
		self.hangmanGame.guess(self.hangmanGame.input);
		 $timeout(function(){
		 	self.hangmanGame.input = "";
		 }, 1000);
	}
}