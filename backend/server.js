// server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "4tfront@AJ",
  database: "market_mingle",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the database connection
pool.query("SELECT 1 + 1 AS result", (err, results) => {
  if (err) {
    console.error("Unable to connect to MySQL:", err);
  } else {
    console.log("Connected to MySQL database. Result:", results[0].result);
  }
});

app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Insert user into the database
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  pool.execute(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      return res.status(500).json({ message: "Error registering user." });
    }

    return res.json({ message: "User registered successfully." });
  });
});

app.post("/api/signin", (req, res) => {
  const { email, password } = req.body;

  // Find user by email and password
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  pool.execute(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error authenticating user:", err);
      return res.status(500).json({ message: "Error authenticating user." });
    }

    if (result.length > 0) {
      return res.json({ message: "Signin successful." });
    } else {
      return res.status(401).json({ message: "Invalid email or password." });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
