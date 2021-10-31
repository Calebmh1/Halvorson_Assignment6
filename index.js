const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1150;

let user = {
    username: "Caleb_Halvorson",
    password: "password123",
    email: "test@gmail.com",
    courses:{
        course: {
            courseID: "CMSC2204",
            courseName: "mobile",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        course1:{
            courseID: "CMSC2201",
            courseName: "Database II",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        },
        course2:{
            courseID: "CMSC2203",
            courseName: "C# Programming",
            startDate: "8/29/2021",
            endDate: "12/21/2021"
        }
    }

}

app.get('/getUser', (req, res) =>{
    try{
        return res.status(200).json(user);
    }
    catch{
        return res.status(500);
    }
});

app.post('/addUser', (req,res) =>{
    try {
        let userVar = req.body.user;

        console.log(userVar);
        return res.status(200).json(`Added user ${userVar.username} successfully`);
    } 
    catch{
        return res.status(500);
    }
});




app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});