const express = require('express');
const app = express();

app.use('/', require('./routes/api/v1'));
app.listen(8008, function (err) {
  if (err) {
    console.error(err);
  }
  console.log('server running');
});
