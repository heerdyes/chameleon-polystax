import React from "react";
import '../styles/coursegrid.css';

// how not to change state!
let cs = [
  {
    cid: 1,
    cname: "jv101",
    cdesc: "java 101",
    cdurn: 3
  },
  {
    cid: 2,
    cname: "js101",
    cdesc: "javascript 101",
    cdurn: 3
  },
  {
    cid: 3,
    cname: "py101",
    cdesc: "python 101",
    cdurn: 3
  }
];

function handledel(cid) {
  let ncs = [];
  console.log('handling delete: ', cid);
  for(let i = 0; i < cs.length; i++) {
    if(cs[i].cid === cid) {
      // do not add this
    } else {
      ncs.push(cs[i]);
    }
  }
  cs = ncs;
  console.log(cs);
}

export default function CourseGrid() {
  let trs = cs.map(c =>
    <tr key={c.cid}>
      <td>{c.cid}</td>
      <td>{c.cname}</td>
      <td>{c.cdesc}</td>
      <td>{c.cdurn}</td>
      <td><button onClick={() => handledel(c.cid)}>X</button></td>
    </tr>
  );
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>cid</th>
            <th>cname</th>
            <th>cdesc</th>
            <th>cdurn</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{trs}</tbody>
      </table>
    </section>
  );
}

