const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const userController = require('./controllers/users.js');
const authController = require('./controllers/auth');
// respond with "hello world" when a GET request is made to the homepage
app.get('/home', function (req, res) {
    res.send('<h1>hello world</h1>')
})

app.get('/about', function (req, res) {
    let html = '<h1>About Us</h1> <p>we are from a small village</p>';
    res.send(html);
})

app.get('/users',userController.getAllUser)

// auth routes
app.get('/login',authController.loginForm);
app.post('/login',authController.login);

app.get('/register',authController.registerForm);
app.post('/register',authController.register);

   

// app.post('/register',function (req,res){
//     res.send('response from register');
// })
// user EDIT
// user delete

// post
// created
// post edit

// like post
// comment


app.listen(8000,()=>console.log('server listing on port 8000'));
