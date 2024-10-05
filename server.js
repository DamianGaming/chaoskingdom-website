const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');  // For session management
const bcrypt = require('bcrypt');  // For hashing passwords
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static file serving for the HTML, CSS, and JS
app.use(express.static('public'));

// Session middleware for managing user sessions
app.use(session({
  secret: 'your-secret-key', // Replace with your own secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // In production, set to true if using HTTPS
}));

// Simulate a simple database for storing users (you can replace with a real DB)
const users = [
  { email: 'jurdzinskidamian77@gmail.com', password: bcrypt.hashSync('FuckMeBitch12!', 10), role: 'admin' }
];

// Route: Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route: Admin Dashboard
app.get('/admin-dashboard', (req, res) => {
  if (req.session.role === 'admin') {
    res.send('<h1>Welcome Admin to your Dashboard</h1>');
  } else {
    res.status(403).send('Forbidden: You are not authorized to access this page.');
  }
});

// Route: User Dashboard
app.get('/user-dashboard', (req, res) => {
  if (req.session.role === 'user') {
    res.send('<h1>Welcome User to your Dashboard</h1>');
  } else {
    res.status(403).send('Forbidden: You are not authorized to access this page.');
  }
});

// Route: Login (POST)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user in the users array (replace this with DB query in real app)
  const user = users.find(u => u.email === email);

  if (user && await bcrypt.compare(password, user.password)) {
    req.session.email = user.email;
    req.session.role = user.role;

    if (user.role === 'admin') {
      return res.status(200).json({ message: 'Admin Login Successful', redirect: '/admin-dashboard' });
    } else {
      return res.status(200).json({ message: 'User Login Successful', redirect: '/user-dashboard' });
    }
  } else {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Route: Signup (POST)
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save new user (replace this with a DB insert in real app)
  users.push({ email, password: hashedPassword, role: 'user' });

  return res.status(201).json({ message: 'Sign-Up Successful! Please log in.' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
