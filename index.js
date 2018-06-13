let  rl =  require('readline-sync');

console.log(" \n \nHello! Welcome to Totally Trivia! A place for all your trivia needs!!!!! \n \n");

function menu(){
	console.log("---------------------------------------")
	console.log("\nChoose a category and start quizzin!!!");
	console.log("1: Mystery");
	console.log("2: Sportz (Football)");
	console.log("3: Sportz (Basketball)");
	let choice = rl.question("Choice:");
	if (choice != 1 && choice != 2 && choice != 3){
		while(choice!=1 && choice !=2 && choice !=3){
		choice = rl.question("Invalid choice. Try again");
		}

	}
	console.log("\n --------------------------------------- \n \n")
	switch (choice) {
		case "1": 
			level1();
			break;
		case "2":
			level2();
			break;
		case "3":
			level3();
			break;
	}
}


//LEVEL1
function level1 (){

	let points = 0;

	let level1 = [{
		Question: "Q1: What popular food chain premiered the famous 4 for 4 deal?",
		A: "A. Burger King",
		B: "B. Wendys",
		C: "C. McDonalds",
		D: "D. Five Guys Burgers & Fries!",
		correctAnswer: "B",
		correctAnswerLower: "b"
	}, {
		Question: "Q2: If John has 5 apples and eats 3, how many apples does he have left?",
		A: "A. 5",
		B: "B. 7",
		C: "C. lol who eats 3 apples",
		D: "D. 2",
		correctAnswer: "C",
		correctAnswerLower: "c"
	}, {
		Question: "Q3: What was the record of the Warriors before Kevin Durant joined them :/ ?",
		A: "A. 73-9",
		B: "B. 22-60",
		C: "C. 47-35",
		D: "D. 68-14",
		correctAnswer: "A",
		correctAnswerLower: "a"
	}, {
		Question: "Q4: The music duo JACK U is comprised of what 2 artists?",
		A: "A. Carnage and Waka Flocka",
		B: "B. Marshmellow and Lil Pump",
		C: "C. Tiesto and Hardwell",
		D: "D. Skrillex and Diplo",
		correctAnswer: "D",
		correctAnswerLower: "d"
	}, {
		Question: "Q5: Regarding A.I., what is term used to describe the event when machines surpass human intelligence?",
		A: "A. Judgement Day",
		B: "B. Singularity",
		C: "C. Awakening",
		D: "D. idk chill out Elon",
		correctAnswer: "B",
		correctAnswerLower: "b"		
	}, {
		Question: "Q6: Which state is closest to Hawaii?",
		A: "A. Texas",
		B: "B. Oregon",
		C: "C. California",
		D: "D. Alaska",
		correctAnswer: "D",
		correctAnswerLower: "d"		
	}, {
		Question: "Q7: Which company developed the first digital camera?",
		A: "A. Kodak",
		B: "B. Sony",
		C: "C. Canon",
		D: "D. Samsung",
		correctAnswer: "A",
		correctAnswerLower: "a"
	}, {
		Question: "Q8: Who produced Lil Pump's LEGENDARY track, Gucci Gang?",
		A: "A. RONNY J",
		B: "B. Big Head",
		C: "C. Metro Boomin",
		D: "D. Lil Pump, duhhhh",
		correctAnswer: "B",
		correctAnswerLower: "b"
	}, {
		Question: "Q9: Which of these countries is an island?",
		A: "A. Argentina",
		B: "B. Norway",
		C: "C. Saint Lucia",
		D: "D. Hawaii",
		correctAnswer: "C",
		correctAnswerLower: "c"
	}, {
		Question: "Q10: Which state's Kansas City is the largest by size and population?",
		A: "A. Oregon",
		B: "B. Missouri",
		C: "C. Kansas",
		D: "D. Tennessee",
		correctAnswer: "B",
		correctAnswerLower: "b"
	}]

	// //Q1 

	console.log ("You chose mystery! Get ready for a wild ride of stupid questions hehehehehe \n \n");

	for(let i = 0; i < level1.length; i++){
		console.log(level1[i].Question);
		console.log(level1[i].A);
		console.log(level1[i].B);
		console.log(level1[i].C);
		console.log(level1[i].D);
		answer = rl.question("Answer:");
		while(answer != 'A' && answer != 'a' && answer != 'B' && answer != 'b' && answer != 'C' && answer != 'c' && answer != 'D' && answer != 'd'){
			console.log("Invalid Answer. Please try again!");
			answer = rl.question("Answer:");
		}
		if (answer === level1[i].correctAnswer || answer === level1[i].correctAnswerLower){
			console.log("\nCorrect! You so smart :)");
			points++;
		}
		else{
			console.log("\nYou wrong! :(")
		}
		console.log("\n---> Current Points: " + points + "\n \n");
		console.log("---------------------------------------");
	}

	console.log("Game Over! You scored " + points + " points");
	console.log("Thanks for playing! \n");
	let retry = rl.question("Would you like to keep playing? (y or n)");
	while(retry != 'Y' && retry != 'y' && retry != 'N' && retry != 'n'){
		console.log("Invalid Input. Please type y or n");
		retry = rl.question("Would you like to keep playing? (y or n)");
	}	
	if (retry ==="y" || retry ==="Y"){
		menu();
	}
	else{
		console.log("\nWow I see how it is >:c\n")
	}
	//Q3

}

//LEVEL2
function level2(){
	// console.log ("BEEP BOOP ZZJSFODFKJEDJSI ------ UNDER CONSTRUCTION -------");
	// console.log ("BEEP BOOP LOADING ERROR ------ UNDER CONSTRUCTION -------");
	// console.log ("BEEP BOOP warriors blew a 3-1 lead ------ UNDER CONSTRUCTION -------");

	let points = 0;

	let level2 = [{
		Question: "Q1: What NFL team won the 2018 Super Bowl?",
		A: "A. New England Patriots",
		B: "B. Philadelphia Eagles",
		C: "C. New Orleans Saints",
		D: "D. Dallas Cowboys",
		correctAnswer: "B",
		correctAnswerLower: "b"
	}, {
		Question: "Q2: What’s the University of Miami’s record in football against Florida State over the past 8 years?",
		A: "A. 3-5",
		B: "B. 1-7",
		C: "C. idk but it's bad",
		D: "D. 1-23",
		correctAnswer: "B",
		correctAnswerLower: "b"
	}, {
		Question: "Q3: Who was the first pick in the 2018 NFL draft?",
		A: "A. Baker Mayfield",
		B: "B. Sam Darnold",
		C: "C. Saquon Barkley",
		D: "D. Lamar Jackson",
		correctAnswer: "A",
		correctAnswerLower: "a"
	}, {
		Question: "Q4: What was the only NFL team to go undefeated and then go on to win the Super Bowl?",
		A: "A. Pittsburgh Steelers",
		B: "B. Dallas Cowboys",
		C: "C. New England Patriots",
		D: "D. Miami Dolphins",
		correctAnswer: "D",
		correctAnswerLower: "d"
	}, {
		Question: "Q5: How college football championships has Nick Saban won?",
		A: "A. 4",
		B: "B. 5",
		C: "C. 6",
		D: "D. 7",
		correctAnswer: "C",
		correctAnswerLower: "c"		
	}]

	// //Q1 

	console.log ("You chose Football! Get ready for uhhhhhhh...... football. \n \n");

	for(let i = 0; i < level2.length; i++){
		console.log(level2[i].Question);
		console.log(level2[i].A);
		console.log(level2[i].B);
		console.log(level2[i].C);
		console.log(level2[i].D);
		answer = rl.question("Answer:");
		while(answer != 'A' && answer != 'a' && answer != 'B' && answer != 'b' && answer != 'C' && answer != 'c' && answer != 'D' && answer != 'd'){
			console.log("Invalid Answer. Please try again!");
			answer = rl.question("Answer:");
		}
		if (answer === level2[i].correctAnswer || answer === level2[i].correctAnswerLower){
			console.log("\nCorrect! You so smart :)");
			points++;
		}
		else{
			console.log("\nYou wrong! :(")
		}
		console.log("\n---> Current Points: " + points + "\n \n");
		console.log("---------------------------------------");
	}

	console.log("Game Over! You scored " + points + " points");
	console.log("Thanks for playing! \n");
	let retry = rl.question("Would you like to keep playing? (y or n)");
	while(retry != 'Y' && retry != 'y' && retry != 'N' && retry != 'n'){
		console.log("Invalid Input. Please type y or n");
		retry = rl.question("Would you like to keep playing? (y or n)");
	}	
	if (retry ==="y" || retry ==="Y"){
		menu();
	}
	else{
		console.log("\nWow I see how it is >:c\n")
	}
	//Q3
}

function level3(){
	// console.log ("BEEP BOOP ZZJSFODFKJEDJSI ------ UNDER CONSTRUCTION -------");
	// console.log ("BEEP BOOP LOADING ERROR ------ UNDER CONSTRUCTION -------");
	// console.log ("BEEP BOOP warriors blew a 3-1 lead ------ UNDER CONSTRUCTION -------");

	let points = 0;

	let level3 = [{
		Question: "Q1: How tall (or short) was the NBA’s shortest player ever?",
		A: "A. 5ft 8in",
		B: "B. 5ft 4in",
		C: "C. 5ft 3in",
		D: "D. 5ft 6in",
		correctAnswer: "C",
		correctAnswerLower: "c"
	}, {
		Question: "Q2: The Golden State Warriors…?",
		A: "A. had the best regular season record in the 2017-2018 NBA season",
		B: "B. had the 2nd best regular season record in the 2017-2018 NBA season",
		C: "C. blew a 3-1 lead",
		D: "D. have the best fans",
		correctAnswer: "C",
		correctAnswerLower: "c"
	}, {
		Question: "Q3: How many NBA finals has Lebron James been to in a row?",
		A: "A. 9",
		B: "B. 8",
		C: "C. 7",
		D: "D. 6",
		correctAnswer: "B",
		correctAnswerLower: "b"
	}, {
		Question: "Q4: How many NBA championships did Kobe Bryant win?",
		A: "A. 2",
		B: "B. 3",
		C: "C. 4",
		D: "D. 5",
		correctAnswer: "D",
		correctAnswerLower: "d"
	}, {
		Question: "Q5: What college did Dwyane Wade go to?",
		A: "A. Marquette University",
		B: "B. Villanova",
		C: "C. Duke",
		D: "D. Go Heat",
		correctAnswer: "A",
		correctAnswerLower: "a"		
	}]

	// //Q1 

	console.log ("You chose Basketball! Lebron or MJ, yo? \n \n");

	for(let i = 0; i < level3.length; i++){
		console.log(level3[i].Question);
		console.log(level3[i].A);
		console.log(level3[i].B);
		console.log(level3[i].C);
		console.log(level3[i].D);
		answer = rl.question("Answer:");
		while(answer != 'A' && answer != 'a' && answer != 'B' && answer != 'b' && answer != 'C' && answer != 'c' && answer != 'D' && answer != 'd'){
			console.log("Invalid Answer. Please try again!");
			answer = rl.question("Answer:");
		}
		if (answer === level3[i].correctAnswer || answer === level3[i].correctAnswerLower){
			console.log("\nCorrect! You so smart :)");
			points++;
		}
		else{
			console.log("\nYou wrong! :(")
		}
		console.log("\n---> Current Points: " + points + "\n \n");
		console.log("---------------------------------------");
	}

	console.log("Game Over! You scored " + points + " points");
	console.log("Thanks for playing! \n");
	let retry = rl.question("Would you like to keep playing? (y or n)");
	while(retry != 'Y' && retry != 'y' && retry != 'N' && retry != 'n'){
		console.log("Invalid Input. Please type y or n");
		retry = rl.question("Would you like to keep playing? (y or n)");
	}	
	if (retry ==="y" || retry ==="Y"){
		menu();
	}
	else{
		console.log("\nWow I see how it is >:c\n")
	}
	//Q3
}






menu();









