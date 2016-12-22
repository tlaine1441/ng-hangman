angular.module("hangmanApp")
	.controller("HangmanController", HangmanController);

function HangmanController() {
	var vm = this;
	console.log("Controlling the hangs.");
	vm.game = new HangmanGame('elephant');
	console.log(vm.game);
	vm.guessLetter = function() {
		console.log(vm.guess);
		vm.game.guess(vm.guess);
		vm.guess = "";
		console.log(vm.game.triesRemaining);
	};
}