const express = require('express');
const mongoose = require('mongoose');
const request = require('request');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./public'));

const databaseUri = 'mongodb://localhost/kudos';

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI);
} else {
	mongoose.connect(databaseUri, { useNewUrlParser: true });
}

const db = mongoose.connection;
db.on('error', function (err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function () {
	console.log('Mongoose connection successful.')
});

require('./routes/api-routes.js')(app);
require('./models/Kudo.js');
require('./models/User.js');

app.listen(PORT, function () {
	console.log('App running on PORT: ' + PORT);
});