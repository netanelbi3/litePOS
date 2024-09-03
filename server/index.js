const dotenv = require('dotenv')
const {db} = require('./utils/db')
dotenv.config()
const app = require('./app')
const connectionStr = process.env.MONGO_DB_ATLAS
.replace('<password>', process.env.MONGO_DB_ATLAS_PASSWORD)
.replace('<username>', process.env.MONGO_DB_ATLAS_USERNAME)
console.log(connectionStr);

db(connectionStr)
const port = 8000 ||8001
app.listen(port, '127.0.0.1', ()=>{
    console.log(`Server is listening on port ${port}`);
})