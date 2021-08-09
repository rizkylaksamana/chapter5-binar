const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const path = require('path')

const creds = {
    username: 'laksa',
    password: 12345,
}

app.use(express.static(__dirname + '/public'));

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// route to homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// route to login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/logedin', (req, res) => {
    res.sendFile(__dirname + '/logedin.html');
})

app.post('/login', (req, res) => {
    // Insert login code here
    let username = req.body.username;
    let password = req.body.password;
    if ( username != creds.username){
        res.status(400).send({
            message: 'username or password doesnt match'
        })
        console.log(req.body)
    } else{
        if( password != creds.password){
            res.status(400).send({
                message: 'username or password doesnt match'
            })
            console.log(req.body)
        } else{
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Controll-Allow-Methods', 'POST', 'GET', 'PUT', 'DELETE', 'OPTIONS')
            res.header('Access-Control-Allow-Headers', 'Content-type');
            // res.header("Access-Control-Allow-Origin", "*");
            // res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
            // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            // res.status(200).send({ message: 'success to log in'})
            console.log(req.body)
            // res.redirect('/logedin')
            res.status(200).send({
                message: 'you are loged in'
            })
        }
    }
});

app.listen(port, () => console.log(`This app is listening on port ${port}`));
