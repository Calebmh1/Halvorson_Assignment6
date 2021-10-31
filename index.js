const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1150;

let data = {
    date: "today",
    school: "SCTCC",
    class: "mobile"
}

app.get('/getData', (req, res) =>{
    try{
        return res.status(200).json(data);
    }
    catch{
        return res.status(500);
    }
});

app.post('/sendData', (req,res) =>{
    try {
        let schoolVar = req.body.object.school1;

        console.log(schoolVar);
        return res.status(200).json("Good request");
    } 
    catch{
        return res.status(500);
    }
});




app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});