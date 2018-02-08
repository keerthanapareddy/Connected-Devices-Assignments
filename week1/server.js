var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.get('/form', function(req, res) {
  var firstname = req.query.firstname;
  console.log(firstname);

  var lastname = req.query.lastname;
  console.log(lastname);

  var submit = req.query.submitbutton;
  console.log("form submitted");
  res.send('<center><img class="ty" src="thank you.jpg" width="1000" height="750"></img></center>');
  // res.send('You sent the name "' + req.query.firstname + '".');
});

app.use(express.static('public'));

app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});
