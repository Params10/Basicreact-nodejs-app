const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

async function  getdatapromise(element){

   return await axios.get('http://proedge.me/test.php',{
        params:{
            rollnumber:element
        }
     }).then(res=>res.data)
        .catch(err => console.log(err))

        
     }
        
 app.post('/rollno', async (req, res) => {
    // We will be coding here
   var rollnoarr= req.body.rollno;
   let resp = [];
    for(element of rollnoarr) {
     
       await getdatapromise(element)
        .then(res=>{
            console.log("entered");
            resp.push({"rollno":element,"results":res})

        });
  

}
       

   
    // Output the book to the console for debugging
    // console.log(req.body.rollno);
    
     res.send(resp);
});

app.get('/lets', (req, res) => {
   
    res.send("tryging", 202);
}); 

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));