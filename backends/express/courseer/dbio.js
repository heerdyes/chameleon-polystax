const s3 = require('sqlite3');

let db = new s3.Database('./courses.db', s3.OPEN_READWRITE, (err) => {
  if(err && err.code == "SQLITE_CANTOPEN") {
    mkdb();
    return;
  } else if (err) {
    console.log(`error: ${err}`);
    exit(1);
  }
});

function mkdb() {
  var newdb = new s3.Database('courses.db', (err) => {
    if(err) {
      console.log(`error: ${err}`);
      exit(1);
    }
    mktbl(newdb);
  });
}

function mktbl(ndb) {
  ndb.run(`
    create table course (
      cname text not null,
      cdesc text not null,
      cdurn integer not null
    );
  `);
}

function lscourse(cid, cb) {
  db.get("select rowid, cname, cdesc, cdurn from course where rowid=?", [cid], (err, row) => {
    if(err) {
      throw err;
    }
    let d = {
      cid: row.rowid,
      cname: row.cname,
      cdesc: row.cdesc,
      cdurn: row.cdurn
    };
    cb(d);
  });
}

function lscourses(cb) {
  var cs = [];
  db.all(`select rowid, cname, cdesc, cdurn from course`, (err, rows) => {
    rows.forEach(row => {
      cs.push({
        cid: row.rowid,
        cname: row.cname,
        cdesc: row.cdesc,
        cdurn: row.cdurn
      });
    });
    cb(cs);
  });
}

function mkcourse(c) {
  const stmt = db.prepare("insert into course (cname, cdesc, cdurn) values (?, ?, ?)");
  stmt.run(c.cname, c.cdesc, c.cdurn);
  stmt.finalize();
}

function rmcourse(cid) {
  const stmt = db.prepare("delete from course where rowid=?");
  stmt.run(cid);
  stmt.finalize();
}

module.exports = { lscourses, lscourse, mkcourse, rmcourse };

