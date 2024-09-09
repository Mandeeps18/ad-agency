// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://suratiyamandeep:lenovo12@cluster0.aua84.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// const db = mongoose.connection();

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('Connected to MongoDB');
// });

module.exports = mongoose;