const mongoose  = require('mongoose');
const url = process.env.MONGODB_URL;

/**
 * Verify environment
 */
if (process.env.ENV === 'Test') {
  console.log('This is a test');
  url = mongoose.connect(process.env.MONGODB_URL_TEST);
} 

/**
 * Database connection
 */
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('DB is connected'))
.catch(err => console.log(err));