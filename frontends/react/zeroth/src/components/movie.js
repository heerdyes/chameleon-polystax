import React, { useState } from "react";

export default function MovieGrid() {
    const [moviename, setMoviename] = useState('');
    const [relyear, setRelyear] = useState('');
    const [movies, setMovies] = useState([
        {
            name: 'Avengers',
            year: 2005,
            lang: ['English', 'Kannada', 'Tamil', 'Telugu']
        },
        {
            name: 'RRR',
            year: 2021,
            lang: ['English', 'Kannada', 'Tamil', 'Telugu']
        },
        {
            name: 'Interstellar',
            year: 2017,
            lang: ['English', 'Kannada', 'Tamil', 'Telugu']
        }
    ]);

    function updateMName(e) {
        setMoviename(e.target.value);
    }

    function updateMYear(e) {
        setRelyear(e.target.value);
    }

    function btnclk() {
        console.log(`name: ${moviename}, year: ${relyear}`);
        setMoviename('');
        setRelyear('');
    }

    return (
        <div>
            <input placeholder="moviename" onChange={updateMName} value={moviename}></input>
            <input placeholder="releaseyear" onChange={updateMYear} value={relyear}></input>
            <button onClick={btnclk}>add</button>
            <table>
                {
                    movies.map(m =>
                        <tr>
                            <td>{m.name}</td>
                            <td>{m.year}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    );
}