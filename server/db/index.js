const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://admin-raja:7619224167@Job@cluster0.bw6nl.mongodb.net/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db