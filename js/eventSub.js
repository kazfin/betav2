//Author(s): Ethan Scott//

function saveToLocalStorage() {
	localStorage.setItem("Job", Job);
	localStorage.setItem("hasJob", hasJob);
	localStorage.setItem("Salary", Salary);
	localStorage.setItem("Logs", Logs);
	localStorage.setItem("Joy", Joy);
	localStorage.setItem("Intellect", Intellect);
	localStorage.setItem("Health", Health);
	localStorage.setItem("Looks", Looks);
	localStorage.setItem("Money", Money);
	localStorage.setItem("revent", revent);
	localStorage.setItem("rnumber", rnumber);
	localStorage.setItem("rfunction", rfunction);
	localStorage.setItem("JobPerformance", JobPerformance);
	console.log("saved variables to local storage");
}

function eventTitle(eventTitle) {
	document.getElementById("eventTitle").innerHTML = eventTitle;
}
function eventText(eventText) {
	document.getElementById("eventText").innerHTML = eventText;
}
function eventOutcome(eventOutcome) {
	document.getElementById("eventOutcome").innerHTML = eventOutcome;
}
function button1(button1) {
	document.getElementById("button1").innerHTML = button1;
}
function eventCreditText(eventCreditText) {
	document.getElementById("eventCreditText1").innerHTML = eventCreditText;
}

let splicerator = 0;

if (reventSub.length === 0) {
	window.location.href = "./event.html";
} else {
	console.log("reventSub is not empty");
	console.log(reventSub);
}

if (reventSub.includes("local-load-successfuly")) {
	console.log("reventSub: " + reventSub);
	splicerator = reventSub.indexOf("local-load-successfuly");
	reventSub.splice(splicerator);
	console.log("splice splice :smiling-imp:");
	eventTitle("Load Successful");
	eventText("Successfuly loaded.");
	document.getElementById("eventOutcome").innerHTML = "";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
			if (reventSub.length > 0) {
				window.location.href = "./eventSub.html";
			} else if (reventSub.length === 0) {
				window.location.href = "./event.html";
			}
		});
}

if (reventSub.includes("primary-school-grad")) { //if player graduated primary school//
	console.log("reventSub: " + reventSub);
	splicerator = reventSub.indexOf("primary-school-grad");
	reventSub.splice(splicerator);
	console.log("splice splice :smiling-imp:");
	Logs = "I graduated primary school!";
	eventTitle("Add that to your resume");
	eventText("You graduated primary school!");
	document.getElementById("eventOutcome").innerHTML = "";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
			if (reventSub.length > 0) {
				window.location.href = "./eventSub.html";
			} else if (reventSub.length === 0) {
				window.location.href = "./event.html";
			}
		});
} else if (reventSub.includes("high-school-grad")) { //if player graduated high school//
	console.log("reventSub: " + reventSub);
	splicerator = reventSub.indexOf("high-school-grad");
	reventSub.splice(splicerator);
	console.log("splice splice :smiling-imp:");
	Logs = "I graduated high school!";
	eventTitle("Time to pay taxes");
	eventText("You graduated high school!");
	document.getElementById("eventOutcome").innerHTML = "";
	saveToLocalStorage();
		document.getElementById("button1").addEventListener('click', () => {
			if (reventSub.length > 0) {
				window.location.href = "./eventSub.html";
			} else if (reventSub.length === 0) {
				window.location.href = "./event.html";
			}
		});
}

if (reventSub.includes("fired-full-time")) { //fired from full-time job//
	splicerator = reventSub.indexOf("fired-full-time");
	reventSub.splice(splicerator);
	Joy -= 8;
	eventTitle("Fired");
	eventText("You got fired from your job.");
	let x = 0;
	for (let i = 0; i < WorkExperience.length; i++) {
		if (workExperience[i] === Job) {
			x++;
		}
	}
	if (x >= 5) {
		eventOutcome("Your boss said it's because your performance was too low. On your way out, you get a severance package. Money + "+Math.round(Salary/5));
		Money += Math.round(Salary/5);
	} else {
		eventOutcome("Your boss said it's because your performance was too low.");
	}
	Job = "";
	hasJob = false;
	saveToLocalStorage();
	button1("OK");
	console.log("event display completed");
	document.getElementById("button1").addEventListener('click', () => {
		window.location.href = "./random-event-finder.html";})
}

saveToLocalStorage();