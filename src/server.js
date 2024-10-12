const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '631TvhzvR8Qs6Tl!',
    database: 'site'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(sql, [username, password, email], (err, result) => {
        if (err) throw err;
        res.send({ message: 'User registered' });
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            if (result[0].password === password) {
                res.send({ message: 'Logged in', user: result[0] });
            } else {
                res.send({ message: 'Wrong password' });
            }
        } else {
            res.send({ message: 'User not found' });
        }
    });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});
