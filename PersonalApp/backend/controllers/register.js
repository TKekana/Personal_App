const poolConnection = require("../connDB/connDB");
const pool = poolConnection;


//Register fuction 
const createUser = (req, res) => {
    
    const {name,email,password,confirm} = req.body; 
    let profilepic = "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
     console.log(name)
     console.log(email)
      console.log(password)
     console.log(confirm)
     
     
    
  
    if(password == confirm){
  
     //checking if user already has an account
    pool.query('select * from users where email = $1' ,[email],(error, results)=> {
      
      if (results.rowCount > 0) {
  
        res.send('user has already been registered')
      
      }else{
  
        pool.query('INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING email',[name,email,password],(error, results) => 
        {
    
            if (error) 
              {
                res.send(`system error `);
              }
            else{
            
                res.send('successfully registered')
              
            }  
           
                
        });
      }
      });
  
    }else{
  
      res.send('password dont match')
    }
    
  };

  module.exports = {
    createUser
  }    
  
