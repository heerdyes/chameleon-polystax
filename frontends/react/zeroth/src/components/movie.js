import React from "react";
import { useState } from "react";
import '../styles/movie.css';

export default function MovieCrud() {
    const [movies, setMovies] = useState([]);
    const [ctr, setCtr] = useState(0);
    const [mname, setMname] = useState('');
    const [myear, setMyear] = useState('');
    const [errflag, setErrflag] = useState(false);

    function movieIsValid() {
        return mname.length > 0 && /^\d+$/.test(myear);
    }

    function addmov() {
        if (!movieIsValid()) {
            setErrflag(true);
            return;
        }
        setErrflag(false);
        let nm = {
            id: ctr,
            name: mname,
            year: Number(myear)
        };
        setCtr(ctr + 1);
        setMovies([...movies, nm]);
        setMname('');
        setMyear('');
    }

    function delmov(mid) {
        setMovies(movies.filter((m) => m.id !== mid));
    }

    return (
        <div className="mcrud">
            <div>
                <input value={mname}
                    placeholder="moviename"
                    onChange={e => setMname(e.target.value)} />
                <input value={myear}
                    placeholder="releaseyear"
                    onChange={e => setMyear(e.target.value)} />
                <button onClick={addmov}>add</button>
                {errflag &&
                    <span className="errmsg">errors were found!</span>}
            </div>
            <div>
                <MovieGrid movies={movies} delh={delmov}></MovieGrid>
            </div>
        </div>
    );
}

export function MovieGrid({ movies, delh }) {
    return (
        <div>
            <table>
                {movies.map(m =>
                    <tr key={m.id}>
                        <td>{m.name}</td>
                        <td>{m.year}</td>
                        <td><button onClick={() => delh(m.id)}>🗑</button></td>
                    </tr>)}
            </table>
        </div>
    );
}
