import React, { useState } from "react";
import '../styles/movie.css';

export default function MovieGrid() {
    const [moviename, setMoviename] = useState('');
    const [relyear, setRelyear] = useState('');
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: 'Avengers',
            year: 2005,
            lang: ['English', 'Kannada', 'Telugu']
        },
        {
            id: 2,
            name: 'RRR',
            year: 2021,
            lang: ['English', 'Kannada']
        },
        {
            id: 3,
            name: 'Interstellar',
            year: 2017,
            lang: ['English']
        }
    ]);

    function updateMName(e) {
        setMoviename(e.target.value);
    }

    function updateMYear(e) {
        setRelyear(e.target.value);
    }

    function isValidYear(yy) {
        let ndigits = 0;
        for (let i = 0; i < yy.length; i++) {
            if (yy.charCodeAt(i) >= 48 && yy.charCodeAt(i) <= 57) {
                ndigits++;
            }
        }
        return ndigits == yy.length;
    }

    function isMovieValid() {
        if (moviename === '' || relyear === '') {
            alert('movie name/year is empty');
            return false;
        }
        return true && isValidYear(relyear);
    }

    function addMovie() {
        if (!isMovieValid()) return;
        var genid;
        if (movies.length == 0) {
            genid = movies.length + 1;
        }
        else {
            genid = movies[movies.length - 1].id + 1;
        }
        console.log(`id: ${genid}, name: ${moviename}, year: ${relyear}`);
        let mv = {
            id: genid,
            name: moviename,
            year: relyear,
            lang: ['English']
        };
        setMovies([...movies, mv]);
        setMoviename('');
        setRelyear('');
    }

    function delMovie(mid) {
        console.log('deleting movie', mid);
        setMovies(movies.filter(n => n.id != mid));
    }

    return (
        <div>
            <input placeholder="moviename" onChange={updateMName} value={moviename}></input>
            <input placeholder="releaseyear" onChange={updateMYear} value={relyear}></input>
            <button onClick={addMovie}>add</button>
            <table>
                {
                    movies.map(m =>
                        <tr>
                            <td>{m.id}</td>
                            <td>{m.name}</td>
                            <td>{m.year}</td>
                            <td>{m.lang.join(',')}</td>
                            <td><button onClick={() => delMovie(m.id)}>del</button></td>
                            <td><button>edit</button></td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}