function calculateAge() {
	const dobInput = document.getElementById("dob");
	const dob = new Date(dobInput.value);
    const toggleSwitch = document.querySelector('#mode-toggle');
	const savedTheme = localStorage.getItem("preferredTheme");

	const initialTheme = savedTheme || "light";
	document.documentElement.setAttribute("data-theme", initialTheme);

    // Switch theme dynamically
function switchTheme(event) {
	const selectedTheme = event.target.checked ? "dark" : "light";
	document.documentElement.setAttribute("data-theme", selectedTheme);
	
	// Save the selected theme preference to Local Storage
	localStorage.setItem("preferredTheme", selectedTheme);
  }
  
  // Event listener for toggle switch
  toggleSwitch.addEventListener('change', switchTheme, false);


	// Check for invalid input
	if (!dobInput.value) {
		document.getElementById("result").innerHTML = "Please select a valid date of birth.";
		return;
	} else if (dob > new Date()) {
		const messages = [
			"Slow down buddy, that's way ahead in the future.",
			"Oops, it seems like you are a time traveler! Please enter a valid date of birth.",
			"Sorry, we can't predict the future! Please enter a valid date of birth.",
			"According to our calculations, you were born in the future! Try again with a past date.",
			"Warning! Your date of birth is set in the distant future. Try an earthly date, please!",
			"To use this app, you must have been born in the past. Check your birth date and try again!",
			"Greetings, time traveler! Unfortunately, we only deal with past dates here.",
			"Error 404: Birthdate not found in the past. Enter a date from your time, please!",
			"Future birthday detected! Unless you're immortal, please enter a valid date.",
			"Hold your horses! We can't calculate future births. Enter a date from the past.",
			"Future birthdays are a mystery to us! Enter a date from your past to unlock your age.",
			"Apologies, but we can't predict your future birthday. Enter a date we can handle!",
			"Looks like you're trying to break the space-time continuum. Please input a valid past date.",
			"Future inhabitants are not eligible to use this app. Enter a past date of birth.",
			"To infinity and beyond? Our app can't calculate future births. Enter a past date."
		];
		const randomIndex = Math.floor(Math.random() * messages.length);
		document.getElementById("result").innerHTML = messages[randomIndex];
		return;
	}

	const today = new Date();

	const diffTime = Math.abs(today - dob);
	const diffYear = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
	const diffMonth = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
	const diffDay = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

	document.getElementById("result").innerHTML = "Your age is " + diffYear + " years, " + diffMonth + " months, and " + diffDay + " days.";
}

// Watch for changes to date of birth input
const dobInput = document.getElementById("dob");
dobInput.addEventListener("input", function(event) {
	const dob = new Date(event.target.value);
	if (dob > new Date()) {
		const messages = [
			"Slow down buddy, that's way ahead in the future.",
			"Oops, it seems like you are a time traveler! Please enter a valid date of birth.",
			"Sorry, we can't predict the future! Please enter a valid date of birth.",
			"According to our calculations, you were born in the future! Try again with a past date.",
			"Warning! Your date of birth is set in the distant future. Try an earthly date, please!",
			"To use this app, you must have been born in the past. Check your birth date and try again!",
			"Greetings, time traveler! Unfortunately, we only deal with past dates here.",
			"Error 404: Birthdate not found in the past. Enter a date from your time, please!",
			"Future birthday detected! Unless you're immortal, please enter a valid date.",
			"Hold your horses! We can't calculate future births. Enter a date from the past.",
			"Future birthdays are a mystery to us! Enter a date from your past to unlock your age.",
			"Apologies, but we can't predict your future birthday. Enter a date we can handle!",
			"Looks like you're trying to break the space-time continuum. Please input a valid past date.",
			"Future inhabitants are not eligible to use this app. Enter a past date of birth.",
			"To infinity and beyond? Our app can't calculate future births. Enter a past date."
		];
		const randomIndex = Math.floor(Math.random() * messages.length);
		document.getElementById("result").innerHTML = messages[randomIndex];
	} else {
		document.getElementById("result").innerHTML = "";
	}
});