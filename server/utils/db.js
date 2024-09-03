const mongoose = require('mongoose')
exports.db = async(conStr) => {
    try{
    const con = await mongoose.connect(conStr)
if (con){
    console.log(`the data base has been connected ${con.connection.host}`);
}
}
    catch(err){
        console.log(err.message);
    }
}
