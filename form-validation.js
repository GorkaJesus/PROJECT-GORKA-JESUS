window.onload = initialize;

function initialize() {
  var formSignup = document.getElementById("form-signup");
  formSignup.addEventListener("submit", validateFormSignup);
  showData();  // Display saved data on page load
}

function validateFormSignup(event) {
  var formSignup = event.target;

  // Get form values
  const USERNAME = formSignup.username.value;
  const PASSWORD = formSignup.password.value;
  const PASSWORD_CONFIRM = formSignup["password-confirm"].value;

  // Validate 'username' field
  if (!USERNAME || USERNAME === "") {
    event.preventDefault(); // Prevent form submission
    document.getElementById("error-username-required").style.display = "block";
    console.log("error: username is required");
  } else {
    document.getElementById("error-username-required").style.display = "none";
  }

  // Validate 'password' field
  if (!PASSWORD || PASSWORD === "") {
    event.preventDefault(); // Prevent form submission
    document.getElementById("error-password-required").style.display = "block";
    console.log("error: password is required");
  } else {
    document.getElementById("error-password-required").style.display = "none";
  }

  // Validate 'password-confirm' field
  if (!PASSWORD_CONFIRM || PASSWORD_CONFIRM === "") {
    event.preventDefault(); // Prevent form submission
    document.getElementById("error-password-confirm-required").style.display = "block";
    console.log("error: password confirmation is required");
  } else {
    document.getElementById("error-password-confirm-required").style.display = "none";
  }

  // Check if passwords match
  if (PASSWORD && PASSWORD_CONFIRM && PASSWORD !== PASSWORD_CONFIRM) {
    event.preventDefault(); // Prevent form submission if passwords don't match
    document.getElementById("error-password-match-required").style.display = "block";
    console.log("error: passwords do not match");
  } else {
    document.getElementById("error-password-match-required").style.display = "none";
  }

  // Save data if all fields are valid
  if (USERNAME && PASSWORD && PASSWORD === PASSWORD_CONFIRM) {
    saveData(USERNAME, PASSWORD);
  }
}

function saveData(username, password) {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

function showData() {
  const GET_USERNAME = localStorage.getItem("username");
  const GET_PASSWORD = localStorage.getItem("password");

  // Display saved username
  if (GET_USERNAME) {
    document.getElementById("username-show").innerText = GET_USERNAME;
  } else {
    document.getElementById("username-show").innerText = "No saved user.";
  }

  // Optionally display saved password (not recommended for security reasons)
  if (GET_PASSWORD) {
    document.getElementById("password-show").innerText = GET_PASSWORD;
  } else {
    document.getElementById("password-show").innerText = "No saved password.";
  }
}
