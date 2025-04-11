const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://chumki:1234@cluster0.rlhfooc.mongodb.net/user_db?retryWrites=true&w=majority&appName=Cluster0'

module.exports = () => mongoose.connect(dbUri)