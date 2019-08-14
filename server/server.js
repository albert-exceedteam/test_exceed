const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const port        = 8000;
const mongoose    = require('mongoose');
const mongoDB     = 'mongodb://127.0.0.1/TODO-list';
const router = require('./app/routes/routes')


mongoose.connect(mongoDB, { useNewUrlParser: true }) //Set up default mongoose connection
const db = mongoose.connection;  //Get the default connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//Bind connection to error event (to get notification of connection errors)
db.once('open', () => {
  console.log('DB is connected')
})
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/todo', router);


app.listen(port, () => {
  console.log('We are live on ' + port);
});


