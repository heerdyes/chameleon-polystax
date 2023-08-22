const xprs = require('express');
const D = require('./dbio');
const app = xprs();
const port = 4040;

app.use(xprs.json())
app.use(xprs.static('public'))

app.get('/', function(rq, rs) {
  let payload = {
    msg: "welcome to courseer!"
  };
  rs.send(payload);
});

app.get('/courses', function(rq, rs) {
  D.lscourses(function(cs) {
    rs.send(cs);
  });
});

app.get('/courses/:cid', function(rq, rs) {
  D.lscourse(rq.params.cid, function(c) {
    rs.send(c);
  });
});

app.post('/courses', function(rq, rs) {
  D.mkcourse(rq.body);
  rs.send(rq.body);
});

app.delete('/courses/:id', function(rq, rs) {
  let cid = rq.params.id;
  D.rmcourse(cid);
  rs.send({
    msg: 'deleted'
  });
});

app.listen(port, function() {
  console.log(`serving on port ${port} ...`);
});

