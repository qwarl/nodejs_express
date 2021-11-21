// Using Node.js `require()`
const mongoose = require('mongoose');
//connect to mongodb
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect 100%');
    } catch (error) {
        console.log('connect fail');

    }
}

module.exports = { connect };