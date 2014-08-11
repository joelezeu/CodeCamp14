for (var i = 1; i <= 100; i++) 
	if  (0 === i%5 && 0 ===i%3) { 
		console.log(i + 'fizz' +'<br/>');
	} else if (0 === i%5) {
		console.log(i +'buzz' +'<br/>'); 
	} else if (0 === i%3) {
		console.log(i +'fizzbuzz' +'<br/>'); 
	} else {
		console.log(i); 
	}