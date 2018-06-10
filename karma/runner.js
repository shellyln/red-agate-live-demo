require(["app"], function(app){
	// probably you don't want to do anything with your library here
	// I didn't...
	
	console.log("Let the tests begin...");
	
	// now that our bundle with the tests are loaded, run the tests!
	window.__karma__.start();
	
});