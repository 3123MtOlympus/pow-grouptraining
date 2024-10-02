# Fitness Calisthenics Landing Page

This project is a fitness calisthenics landing page that allows users to register for classes, manage their accounts, track progress, and make payments for individual classes or monthly memberships. The platform includes features like class time selection, registration forms, and dynamic payment options.

## Features
- **Class Time Selection**: Users can select from available class times and register for specific dates.
- **Registration Form**: Once a class time is selected, users are prompted to register by providing their name and email.
- **Payment Options**: Users can choose to pay for:
  - Individual class sessions ($50 per class)
  - Monthly membership ($35 per class, with an additional $5 discount if auto-pay is selected, reducing it to $30 per class).
- **Zelle Payment Integration**: Payment links redirect users to a Zelle form for secure payments.
- **Account Management**: Members can log in to manage their profiles, input their weight and goals, and track progress over time.
- **Progress Tracking**: The system calculates whether users are getting closer to or further from their goals and displays a positive message regardless of the result.

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Zelle Payment Integration**

## How to Use
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/fitness-calisthenics.git
   cd fitness-calisthenics
   ```

2. **Open the Project**
   Open `index.html` in your preferred web browser.

3. **Select a Class**
   - On the landing page, select from the available class times.
   - Once selected, the registration form will appear where you can sign up.

4. **Register and Make a Payment**
   - After submitting the registration form, you will be prompted to choose between paying for an individual class or signing up for a monthly membership.
   - Select your preferred option and you will be redirected to the appropriate Zelle payment form.

5. **Membership Discount**
   - For monthly memberships, users can opt for auto-pay, which gives an additional $5 discount per class.

## Folder Structure
```bash
.
├── css
│   └── styles.css        # Styles for the landing page
├── js
│   └── main.js           # JavaScript for handling interactions
├── index.html            # Main HTML file
└── README.md             # This README file
```

## Scripts

- **Class Selection**: Clicking on a class time opens the registration form for users to reserve a spot.
- **Form Submission**: Handles user input for class registration and displays confirmation.
- **Payment Redirect**: Redirects users to the appropriate Zelle form for payment.
- **Progress Tracking (optional)**: Tracks users' weight and progress toward their goals.

## Customization
- **Payment Links**: Update the Zelle URLs in the `main.js` file to match your actual payment form URLs.
  ```javascript
  window.location.href = "https://example.com/zelle/individual"; // For individual class
  window.location.href = "https://example.com/zelle/monthly";    // For monthly membership
  ```

- **Classes**: You can easily update the available class times and dates in the HTML file by editing the `class-time-btn` elements.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

