const s3 = require('sqlite3');

let db = new s3.Database('./movies.db', s3.OPEN_READWRITE, (err) => {
  if(err && err.code == "SQLITE_CANTOPEN") {
    mkdb();
    return;
  } else if (err) {
    console.log(`error: ${err}`);
    exit(1);
  }
});

function mkdb() {
  var newdb = new s3.Database('movies.db', (err) => {
    if(err) {
      console.log(`error: ${err}`);
      exit(1);
    }
    mktbl(newdb);
  });
}

function mktbl(ndb) {
  ndb.run(`
    create table movie (
      mname text not null,
      myear integer not null
    );
  `);
}

function lsmovie(mid, cb) {
  db.get("select rowid, mname, myear from movie where rowid=?", [mid], (err, row) => {
    if(err) {
      throw err;
    }
    let d = {
      mid: row.rowid,
      mname: row.mname,
      myear: row.myear
    };
    cb(d);
  });
}

function lsmovies(cb) {
  var mvs = [];
  db.all(`select rowid, mname, myear from movie`, (err, rows) => {
    rows.forEach(row => {
      mvs.push({
        mid: row.rowid,
        mname: row.mname,
        myear: row.myear
      });
    });
    cb(mvs);
  });
}

function mkmovie(m) {
  const stmt = db.prepare("insert into movie (mname, myear) values (?, ?)");
  stmt.run(m.mname, m.myear);
  stmt.finalize();
}

function rmmovie(mid) {
  const stmt = db.prepare("delete from movie where rowid=?");
  stmt.run(mid);
  stmt.finalize();
}

module.exports.lsmovies = lsmovies;
module.exports.lsmovie = lsmovie;
module.exports.mkmovie = mkmovie;
module.exports.rmmovie = rmmovie;

