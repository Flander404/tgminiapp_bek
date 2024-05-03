const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHendlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.join(__dirname, 'static')))
app.use('/api', router)


app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер запушен на ${PORT} порту`))
    } catch(err) {
        console.log(err);
    }
}

start()