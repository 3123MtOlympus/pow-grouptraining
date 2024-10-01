// Handle class time signup via button clicks and show the registration form
document.querySelectorAll('.class-time-btn').forEach(button => {
  button.addEventListener('click', () => {
    const selectedClassTime = button.getAttribute('data-time');
    document.getElementById('selected-class-time').value = selectedClassTime;

    // Display the selected class message
    document.getElementById('selected-class-message').textContent = `You've selected ${selectedClassTime}. Please register below.`;

    document.getElementById('registration-container').style.display = 'block';
    document.getElementById('registration-container').scrollIntoView({ behavior: 'smooth' });
  });
});

// Handle form submission to reserve a spot and scroll to the payment section
document.getElementById('class-registration-form').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('register-name').value;
  const classTime = document.getElementById('selected-class-time').value;
  document.getElementById('confirmation-message').textContent = `Thank you, ${name}! You have successfully reserved a spot for the class on ${classTime}.`;

  document.getElementById('payment-container').style.display = 'block';
  document.getElementById('payment-message').style.display = 'block';
  document.getElementById('payment-container').scrollIntoView({ behavior: 'smooth' });
});

// Calculate and display the discount for membership
const standardPrice = 50;
const membershipPrice = 35;
const discountPercentage = Math.round(((standardPrice - membershipPrice) / standardPrice) * 100);
document.getElementById('discount-percentage').textContent = `${discountPercentage}% off`;

// Redirect to the payment page
function redirectToPayment(option) {
  const url = option === 'individual' 
    ? "https://example.com/payment/individual" 
    : "https://example.com/payment/monthly";
  window.location.href = url;
}

// Handle class time signup from form
document.getElementById('class-time-form').addEventListener('submit', e => {
  e.preventDefault();
  const selectedClassTime = document.getElementById('class-time').value;
  alert(`You have successfully signed up for the class on ${selectedClassTime}`);
});

// Redirect to the payment page based on selected option
function redirectToPayment(option) {
  if (option === 'individual') {
    // Redirect to the Zelle form for individual class payment
    window.location.href = "/individualpayment.html"; // Replace with actual Zelle form URL
  } else if (option === 'monthly') {
    // Redirect to the Zelle form for monthly membership payment with auto pay option
    window.location.href = "/monthlypayment.html"; // Replace with actual Zelle form URL
  }
}

// Example auto pay message display (optional)
const autoPayMessage = document.createElement('p');
autoPayMessage.textContent = 'Sign up for auto pay to save an additional $5!';
document.getElementById('payment-options').appendChild(autoPayMessage);
