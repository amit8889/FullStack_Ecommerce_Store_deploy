
const mongoose = require('mongoose');


const connect = (URL) => {
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
} 


module.exports=connect;



