const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://username:password@Job@cluster0.bw6nl.mongodb.net/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
