const mongoose = require('mongoose');
const config = require('./config/config')

connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.databaseUrl, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
        //mongoose.set('debug', true)
        var db = mongoose.connection;
        db.on('error', function (err) {
            return reject(err);
        });
        db.once('open', function () {
            console.log(`Connected to Database ${config.databaseUrl}`)
            resolve();
        });

    })
}

disconnect = () => {
    return mongoose.disconnect()
}

module.exports = { connect, disconnect }