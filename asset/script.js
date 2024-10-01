// Handle class time signup via button clicks and show the registration form
document.querySelectorAll('.class-time-btn').forEach(button => {
    button.addEventListener('click', function() {
      const selectedClassTime = this.getAttribute('data-time');
      
      // Store the selected class time in the hidden input field
      document.getElementById('selected-class-time').value = selectedClassTime;
      
      // Display the registration container
      document.getElementById('registration-container').style.display = 'block';

      // Scroll to the registration section
      document.getElementById('registration-container').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Handle form submission to reserve a spot
  document.getElementById('class-registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const classTime = document.getElementById('selected-class-time').value;

    // Display a confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = `Thank you, ${name}! You have successfully reserved a spot for the class on ${classTime}. A confirmation email has been sent to ${email}.`;

    // Optionally, clear the form
    document.getElementById('class-registration-form').reset();
  });

  // Calculate and display the discount for membership
  const standardPrice = 50;
  const membershipPrice = 35;
  const discountPercentage = Math.round(((standardPrice - membershipPrice) / standardPrice) * 100);
  document.getElementById('discount-percentage').textContent = `${discountPercentage}% off`;

  // Function to redirect to the payment page
  function redirectToPayment(option) {
    if (option === 'individual') {
      // Redirect to the payment page for individual class signup (replace URL with actual payment page)
      window.location.href = "https://example.com/payment/individual";
    } else if (option === 'monthly') {
      // Redirect to the payment page for monthly membership signup (replace URL with actual payment page)
      window.location.href = "https://example.com/payment/monthly";
    }
  }


// // Simple weight tracking calculation
// document.getElementById('profile-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const currentWeight = parseFloat(document.getElementById('current-weight').value);
//     const goalWeight = parseFloat(document.getElementById('goal-weight').value);
//     const resultMessage = document.getElementById('result-message');

//     if (currentWeight >= goalWeight) {
//       resultMessage.textContent = 'You’ve gained muscle! Keep working towards your goal!';
//     } else if (currentWeight < goalWeight) {
//       resultMessage.textContent = 'You’ve lost weight! Keep pushing towards your goal!';
//     } else {
//       resultMessage.textContent = 'You’re on track! Keep maintaining your goal weight!';
//     }
//   });

// Handle class time signup
document.getElementById('class-time-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedClassTime = document.getElementById('class-time').value;
    alert('You have successfully signed up for the class on ' + selectedClassTime);
  });