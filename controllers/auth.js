const { dbConnection } = require('../db');
// post
exports.login = function (request, response) {
    console.log('request.body---', request.body);
    const email = request.body.email.toString();
    if (!email || (email.length < 3)) {
       return  response.send('error');
    }
    const password = request.body.password;
    const sql = `SELECT * FROM blogpost.user WHERE email = '${email}' and password = '${password}';`;
    dbConnection.query(sql, function (err, results, fields) {
        if (err) {
            response.send('error');
        }
        // process request

        console.log('dbresult ', results);
    })
    response.send('response from login');

}
// get
exports.loginForm = function (request, response) {
    const style = `display: flex;
            flex-direction: column;
            max-width: 400px;
            margin: auto;
            margin-top: 95px;`;
    const inputStyle = `margin-bottom: 10px;`
    let html = `<div> 
                 <form action="/login" method="post">
                    <div style="${style}"> 
                        <input type="text" name="email" style="${inputStyle}">  
                        <input type="password" name="password" style="${inputStyle}">  
                        <button type="submit">Login</button>
                    </div>
                </form>
                </div>`
    response.send(html);
}
exports.registerForm = function (request, response) {
    const style = `display: flex;
            flex-direction: column;
            max-width: 350px;
            margin: auto;
            margin-top: 95px;`;
    const inputStyle = `margin-bottom: 10px;`
    let html = `<div> 
                 <form action="/register" method="post">
                    <div style="${style}"> 
                      <label for="fname">First name:</label><br>
                      <input type="text" id="fname" name="fname"><br>
                       <label for="lname">Last name:</label><br>
                       <input type="text" id="lname" name="lname"><br>
                       <label for="email">Email:</label><br>
                        <input type="text" name="email" style="${inputStyle}">  
                        <label for="password">Password:</label><br>
                        <input type="password" name="password" style="${inputStyle}">  <br>
                        <label for="phonenumber">Phone Number:</label><br>
                        <input type="text" name="PhoneNumber" style="${inputStyle}"> <br>
                        <button type="submit">Login</button>
                    </div>
                </form>
                </div>`
    response.send(html);
}
exports.register = function (request, response) {
    console.log('request.body---', request.body);
    const firstName = request.body.fname;
    const lastName = request.body.lname;
    const email = request.body.email;
    const phoneNumber = request.body.PhoneNumber;
    const password = request.body.password;
    // const sql = `SELECT * FROM blogpost.user WHERE email = '${email}' and password = '${password}';`;
    const sql = `INSERT INTO blogpost.user(firstName, lastName, email,password,phoneNumber)
    VALUES ('${firstName}', '${lastName}','${email}','${password}','${phoneNumber}')`;
    //  console.log(sql);
    dbConnection.query(sql, function (err, results, fields) {
        // console.log('error from sql',err);
        if (err) {

            return response.send('error');
        }
        // process request

        console.log('dbresult ', results);
        response.send('response from register');
    })


}