require('dotenv').config()

var MyQ = require('myq-api');
var account = new MyQ(process.env.MQ_USER, process.env.MQ_PASS);

account.login()
  .then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.error(err);
  });