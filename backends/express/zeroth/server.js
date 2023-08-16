const xprs = require('express');
const D = require('./dbio');
const app = xprs();
const port = 3000;

app.use(xprs.json())

app.get('/', function(rq, rs) {
  let payload = {
    msg: "hello world"
  };
  rs.send(JSON.stringify(payload));
});

app.get('/movies', function(rq, rs) {
  D.lsmovies(function(mvs) {
    rs.send(mvs);
  });
});

app.get('/movies/:mid', function(rq, rs) {
  D.lsmovie(rq.params.mid, function(m) {
    rs.send(m);
  });
});

app.post('/movies', function(rq, rs) {
  D.mkmovie(rq.body);
  rs.send(rq.body);
});

app.delete('/movies/:id', function(rq, rs) {
  let mid = rq.params.id;
  D.rmmovie(mid);
  rs.send({
    msg: 'deleted'
  });
});

app.listen(port, function() {
  console.log(`serving on port ${port} ...`);
});

