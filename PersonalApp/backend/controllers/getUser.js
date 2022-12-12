const poolConnection = require("../connDB/connDB");
const pool = poolConnection;

//Register fuction 
const getpost_one = (req, res) => {

  const email = req.params.email;
  let status = "Active"

  pool.query('SELECT * from users where email = $1',[email],(error, results)=> {
     

     if(error){
      throw error

     }else {
  
      res.status(200).send(results.rows)
      
     }
  })

}


module.exports = {
    getUserById
  }  