const poolConnection = require("../connDB/connDB");
const pool = poolConnection;

//Register fuction 
const getAllUsers = (req, res) => {

      //checking if user already has an account
      pool.query('select * from users',(error, results)=> {
       
        if (results.rowCount > 0) {
    
          res.send(results.rows)
          
        
        }else{
    
         res.send('error')
        }
        });


}


module.exports = {
    getAllUsers
  }  