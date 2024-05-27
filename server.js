const express = require('express');
const bodyPaarser = require ('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyPaarser.json());

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

//here we use in-memory array but for real world projects we can use database like mongodb etc.
const AllNotificationsArray = [];

//create notification 
app.post('/CreateNotification',(req,res)=>{
    const notification = {
        id: AllNotificationsArray.length + 1,
        Message: req.body.message,
        Date: new Date()
    };


    AllNotificationsArray.push(notification);
    res.status(201).send(notification);
});

//fetch all notifications
app.get('/FetchAllNotifications',(req,res)=>{
    
    res.status(200).send(AllNotificationsArray);
});


// Thank you 