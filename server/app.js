const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
// const usersRouter = require('./routes/user.Routes')
const inventoryRouter = require('./routes/inventory.Routes')
const AppError = require('./utils/AppError')
const globalErrorHandler = require('./utils/errorHandler')
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'))
app.use(cors(
    {
        credentials: true,
        origin: ["http://127.0.0.1:5173"]
    }
))
app.use(cookieParser())
// app.use('/api/users' , usersRouter)
app.use("/api/inventory", inventoryRouter);




app.all('*', (req, res, next) =>{
    next(new AppError(404,'The requested route is not exist'))
})
app.use(globalErrorHandler)
module.exports = app