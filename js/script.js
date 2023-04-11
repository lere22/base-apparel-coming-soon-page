const formGroup = document.querySelector(".form-group");
const btnSubmit = document.getElementById("submit");
const inputEmail = document.getElementById("email");
const alertError = document.querySelector(".alert-error");
const alertErrorIcon = document.querySelector(".alert-icon");
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btnSubmit.addEventListener("click", (e) => {
	// prevent default action of form
	e.preventDefault();

	// validate email address
	const email = inputEmail.value;

	// if email not valid
	if (email == "" || email == undefined) {
		formGroup.classList.add("focus");
		alertError.innerText = "Please provide us your email";
		alertErrorIcon.style.display = "block";
	} else if (!email.match(regexEmail)) {
		formGroup.classList.add("focus");
		alertError.innerText = "Please provide a valid email";
		alertErrorIcon.style.display = "block";
	} else {
		// if email valid
		formGroup.classList.remove("focus");
		alertError.classList.remove("alert-error");
		alertError.classList.add("alert-success");
		alertError.innerText = "Thank you for subscribing";
		alertErrorIcon.style.display = "none";
	}
});
