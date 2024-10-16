let countdownDuration = 24 * 60 * 60 * 1000;

function startCountdown() {
  let countdownTarget = new Date().getTime() + countdownDuration;

  /// Update the countdown every second///
  let countdownInterval = setInterval(function () {
    let now = new Date().getTime();
    let timeRemaining = countdownTarget - now;

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      startCountdown();
      return;
    }

    
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    //Display the result in the respective elements/
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}

startCountdown();

// =====================First Name===========
const firstName = document.getElementById('first-name');
const errorMessageContainer = document.createElement('span'); // Create the error message container

firstName.addEventListener('blur', () => {
  if (firstName.value === '') {
    firstName.style.borderColor = 'red';
    errorMessageContainer.textContent = 'Input field is required.'; 

    // Improved error message positioning:
    if (!firstName.parentNode.contains(errorMessageContainer)) {  // Check if it's already present
      firstName.parentNode.insertBefore(errorMessageContainer, firstName.nextSibling); // Insert after the input
    }

    errorMessageContainer.style.color = 'red';
    errorMessageContainer.style.fontSize = 'smaller'; 
  } else {
    firstName.style.borderColor = 'green';
    errorMessageContainer.textContent = '';  
  }
});

// ===============Email===========
const emailInput = document.getElementById('email');
const emailError = emailInput.nextElementSibling;

emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = emailInput.value.trim();  // Trims any leading/trailing spaces

  if (emailValue === '') {
    // Case when the input is empty
    emailError.textContent = 'Email is required.';
    emailError.style.display = 'block';
    emailInput.style.borderColor = 'red';
  } else if (!emailPattern.test(emailValue)) {
    // Case when the input doesn't match the pattern
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.display = 'block';
    emailInput.style.borderColor = 'red';
  } else {
    // Valid email
    emailError.style.display = 'none';  
    emailInput.style.borderColor = 'green';
  }
});


//==============Submission Success================
const form = document.getElementsByClassName("billing-box");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form successfully submitted!');
  form.reset(); 
});

