const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MySQL database
const db1 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database'
});

db1.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Handle form submission
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db1.query(sql, [username, email, password], (err, result) => {
        if (err) {
            throw err;
        }
        res.send('User registered!');
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const app1 = express();

// Middleware to parse form data
app1.use(bodyParser.urlencoded({ extended: true }));

// MySQL Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'your_database'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (Gmail, Outlook, etc.)
    auth: {
        user: 'perkzofwerk@gmail.com', // Your email address
        pass: 'yourpassword'         // Your email password (consider using environment variables for security)
    }
});

// Handle form submission
app1.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Insert user data into the database
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            throw err;
        }

        // Send confirmation email to the owner
        const mailOptions = {
            from: 'youremail@gmail.com', // Sender address
            to: 'owneremail@example.com', // Owner's email
            subject: 'New User Registration', // Email subject
            text: `A new user has registered. \n\nUsername: ${username}\nEmail: ${email}` // Email content
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Email sent: ' + info.response);
        });

        // Send response back to the user
        res.send('User registered successfully and email sent to the owner!');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
