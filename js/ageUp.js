//Author(s): Ethan Scott//

function getRandomIntInclusive(min, max) { //function for the random age event//
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function graduation() {
	if (Age >= 11 && !Degree.includes("primarySchool")) { //primary school graduation//
		Degree.push("primarySchool");
		localStorage.setItem("Degree", JSON.stringify(Degree));
		reventSub.push("primary-school-grad");
		localStorage.setItem("reventSub", JSON.stringify(reventSub));
	} else if (Age >= 18 && !Degree.includes("highSchool")) { //high school graduation//
		Degree.push("highSchool");
		localStorage.setItem("Degree", JSON.stringify(Degree));
		reventSub.push("high-school-grad");
		localStorage.setItem("reventSub", JSON.stringify(reventSub));
	}
}

function jobStuff() {
	if (hasJob === true) {
		Joy - 3;
		workExperience.push(Job);
		JobPerformance = Math.round((JobPerformance/5)*4)
		localStorage.setItem("Joy", Joy);
		localStorage.setItem("workExperience", JSON.stringify(workExperience));
		localStorage.setItem("JobPerformance", JobPerformance)
		if (JobPerformance <= 25) {
			if (getRandomIntInclusive(1, 2) === 1) {
				reventSub.push("fired-full-time");
				localStorage.setItem("reventSub", JSON.stringify(reventSub));
			}
		}
	}
}

function salary() {
	if (Intellect <= 20) { //if player is... dumb//
		Money += (Salary / 100) * 25; //adds 25% of salary to money//
	} else if (Intellect > 20 && Intellect < 80) { //if player is average//
		Money += (Salary / 100) * 30; //adds 30% of salary to money//
	} else if (Intellect >= 80) { //if player is a genius//
		Money += (Salary / 100) * 35; //adds 35% of salary to money; you get paid more, you have a better job, you're smart//
	}
	if (Age >= 7 && Age <= 14) {
		Money += Age * 4;
	}
}

function spiral() { //if stats are bad, you spiral downhill//
	if (Evality >= 85) { //if player is evil//
		Karma / 2;
		Joy += 3;
	} else if (Evality <= 10 && Age >= 12) { //if player is a saint (it's easier to be a saint in your formative ages so you don't get benifits for that)//
		Karma += 4;
		Joy += 3;
	}
	if (Health <= 20) { //if player is unhealthy//
		Joy -= 5;
	}
	if (Joy <= 15) { //being unhappy sacrafices other stats//
		Health -= 6;
		Intellect -= 6;
		Looks -= 6;
	}
	if (Looks <= 20) { //if player is ugly//
		Joy -= 4;
	} else if (Looks >= 85) { //if player is attractive//
		Joy += 3;
	}
	if (Money >= 1000000) { //if player has more than $1,000,000 in the bank//
		Joy += 3;
	} else if (Money >= 100000000) { //if player is RICH (has more than $100,000,000 in the bank//
		Joy += 4;
		Karma -= 4;
	} else if (Money < 0) { //on the inverse, if player is in debt//
		Joy -= 5;
	} else if (Money <= -200000) { //if player is in generational debt//
		Joy -= 10;
		Karma += 2;
	}
	localStorage.setItem("Money", Money);
	localStorage.setItem("Karma", Karma);
	localStorage.setItem("Joy", Joy);
	localStorage.setItem("Looks", Looks);
	localStorage.setItem("Health", Health);
	localStorage.setItem("Intellect", Intellect);
}

function relationshipUpdator() {
	if (PersonNames.length > 0) {
	for (let i = 0; i < PersonAges.length; i++) {PersonAges[i]++;} //ages up all of your relationships//
	for (let i = 0; i < PersonRelationships.length; i++) {PersonRelationships[i]-8;} //ages up all of your relationships//
	localStorage.setItem("PersonAges", JSON.stringify(PersonAges));
	localStorage.setItem("PersonRelationships", JSON.stringify(PersonRelationships));

	let howManyToKill = 0;
	let whoDies = []; //specifies by id//

	for (let i = 0; i < PersonNames.length; i++) { //kills off family members that are 80//
		if (PersonAges[i] >= 80) {
			whoDies.push(i)
		}
	}
	
	if (getRandomIntInclusive(1, 25) === 1) { //may kill random family member//
		if (getRandomIntInclusive(1, 18) === 1) { //should it kill multiple familiy members?//
			howManyToKill = getRandomIntInclusive(1, PersonNames.length); //how many family members to kill//
		} else {
			howManyToKill = 1; //just one dead family member :(//
		}
		while (howManyToKill > 0) {
			whoDies.push(getRandomIntInclusive(0, PersonNames.length)); //who dies? find out after the break//
			howManyToKill - 1;
		}
		for (let i = 0; i < PersonNames.length; i++) { //kills off family members that are 80//
			if (PersonAges[i] >= 80) {
				whoDies.push(i)
			}
		}
		for (let i = 0; i < whoDies.length; i++) { //does the killing... cover your eyes//
			DeadPeople.push(PersonNames[whoDies[i]]);
			DeadPeopleRoleAtDeath.push(PersonRoles[whoDies[i]]);
			DeadPeopleAgeAtDeath.push(PersonAges[whoDies[i]]);
			DiedRecently.push(PersonNames[whoDies[i]]);
			PersonNames.splice[whoDies[i]];
			PersonRoles.splice[whoDies[i]];
			PersonRelationships.splice[whoDies[i]];
			PersonAges.splice[whoDies[i]];
			PersonTrait1.splice[whoDies[i]];
			PersonTrait2.splice[whoDies[i]];
			whoDies.splice(i);
		}

		localStorage.setItem("PersonNames", JSON.stringify(PersonNames));
		localStorage.setItem("PersonRoles", JSON.stringify(PersonRoles));
		localStorage.setItem("PersonRelationships", JSON.stringify(PersonRelationships));
		localStorage.setItem("PersonAges", JSON.stringify(PersonAges));
		localStorage.setItem("PersonTrait1", JSON.stringify(PersonTrait1));
		localStorage.setItem("PersonTrait2", JSON.stringify(PersonTrait2));
		localStorage.setItem("DeadPeople", JSON.stringify(DeadPeople));
		localStorage.setItem("DeadPeopleRoleAtDeath", JSON.stringify(DeadPeopleRoleAtDeath));
		localStorage.setItem("DeadPeopleAgeAtDeath", JSON.stringify(DeadPeopleAgeAtDeath));
		localStorage.setItem("DiedRecently", JSON.stringify(DiedRecently));

		reventSub.push("someone-died");
		localStorage.setItem("reventSub", reventSub);
	}
	}
}

function died(why) {
	if (!Achievements.includes(9)) {
		Achievements.push(9);
		localStorage.setItem("Achievements", (Achievements));}
	Occupation.push("Death"); //player has now died//
	localStorage.setItem("Occupation", JSON.stringify(Occupation));
	console.log("player died. why? "+why);
}

function deathChance() {
	if (Age >= 75 && Age <= 79) {
			rnumber = getRandomIntInclusive(1, 5); //gets a random number between x and y//
			if (rnumber === 1) {
				Occupation.push("Death"); //player has now died//
				console.log("player died");
				rnumber = 0;
				died("old");
			} else if (rnumber != 1) {
				console.log(rnumber);
				console.log("player did not die");
				rnumber = 0;
		}
	} else if (Age === 80) {
		if (!Achievements.includes(11)) {
			Achievements.push(11)
			localStorage.setItem("Achievements", (Achievements));}
			died("old-80");
	}
	if (Occupation.includes("Death")) {
		if (!Achievements.includes(9)) {
			Achievements.push(9);
		}
		window.location.href = "./home.html";
	}
	if (Health === 0) {
		died("health-0");
	}
}

function getEvent() {
	rnumber = getRandomIntInclusive(1, 2); //gets a random number between x and y//
	console.log("rnumber === " + rnumber);
	if (rnumber === 1) { //one in two (50%) chance of getting an event)//
			localStorage.setItem("rfunction", rfunction);
			window.location.reload(); //reloads the page//
	} else if (rnumber === 2) { //gives event//
		window.location.href = "./random-event-finder.html";
	}
}

document.getElementById("plus").addEventListener("click", function() {
	Age ++;
	localStorage.setItem("Age", Age);
	
	graduation();
	spiral();
	deathChance();
	
	salary();

	jobStuff();

	relationshipUpdator();

	localStorage.setItem("reventSub", JSON.stringify(reventSub));
	
	if (reventSub.length != 0) {
		window.location.href = "./eventSub.html";
	} else {
		getEvent();
	}
});