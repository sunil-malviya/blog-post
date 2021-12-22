const {dbConnection} = require('../db');

exports.getAllUser = function (req, res) {
    dbConnection.query(
        "SELECT * from user",
        function(err, results, fields) {
          console.log('result from DB'); // results contains rows returned by server
          console.log('results ---',results); // results contains rows returned by server
        //   console.log('fields ---',fields); // fields contains extra meta data about results, if available
       let usersList = '';
        for (let i = 0; i< results.length; i++) {
             console.log(`<li>${results[i].firstName}</li>`);
             usersList +=`<li style="color: red;border:2px solid;">${results[i].firstName}</li>`;
         }
         let html = `<div> <h3>Users</h3> <ul> ${usersList} </ul> </div>`;
         console.log('final html ---',html);
          res.send(html);
        }
      );
}
