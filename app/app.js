var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');
   
function IssueTracker () {
	this.issues = [];
};

IssueTracker.prototype = {
	add: function(issue) {
		this.issues.push(issue);
	},
	retrieve: function() {
		var message = "";
		switch(this.issues.length) {
			case 0: 
				break;
			case 1:
				message = "Please fix the following issue: \n" + this.issues[0];
				break;				
			default:
				message = "Please fix the following issues: \n" + this.issues.join("\n");
				break;				
		}
		return message;
	}	
};

submit.onclick = function () {
	var firstPassword = firstPasswordInput.value;
	var secondPassword = secondPasswordInput.value;

	var firstInputIssuesTracker = new IssueTracker();
	var secondInputIssuesTracker = new IssueTracker();

	function checkRequirements() { 		
		if (firstPassword.length < 16) {
			firstInputIssuesTracker.add("needs more than 16 characters");
		} else if (firstPassword.length > 100) {
			firstInputIssuesTracker.add("needs less than 100 characters");
		}; 
		
		if (!firstPassword.match(/[\!\@\#\$\%\^\&\*]/g)) {		
			firstInputIssuesTracker.add("Missing a symbol (!, @, #, $, %, ^, &, *)");
		};

		if (!firstPassword.match(/\d/g)) {		
			firstInputIssuesTracker.add("Missing a number");
		};

		if (!firstPassword.match(/[a-z]/g)) {		
			firstInputIssuesTracker.add("Missing a lowercase character");
		};

		if (!firstPassword.match(/[A-Z]/g)) {		
			firstInputIssuesTracker.add("Missing an uppercase character");
		};		
	};

	if (firstPassword === secondPassword && firstPassword.length > 0) {
		checkRequirements();
	} else {		
		secondInputIssuesTracker.add('password must match');
	}

	var firstInputIssues = firstInputIssuesTracker.retrieve();
	var secondInputIssues = secondInputIssuesTracker.retrieve();

	firstPasswordInput.setCustomValidity(firstInputIssues);
	secondPasswordInput.setCustomValidity(secondInputIssues);

	if (firstInputIssues.length == 0 && secondInputIssues.length == 0) {
		alert("Password successfully changed");
		console.log("Password successfully changed");
	}
};