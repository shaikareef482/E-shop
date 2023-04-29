const mongoose = require('mongoose');


const connectDatabase = ()=>{
    mongoose.connect(process.env.DL_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data)=>{
        console.log(`mongoDb connected with server:${data.connection.host}`)
    })
};

module.exports = connectDatabase;