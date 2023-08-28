import React, { useState } from "react";

export default function MovieGrid() {
    const [moviename, setMoviename] = useState('');
    const [relyear, setRelyear] = useState('');

    function updateMName(e) {
        setMoviename(e.target.value);
    }

    function updateMYear(e) {
        setRelyear(e.target.value);
    }

    function btnclk() {
        console.log(`name: ${moviename}, year: ${relyear}`);
    }

    return (
        <div>
            <input placeholder="moviename" onChange={updateMName} value={moviename}></input>
            <input placeholder="releaseyear" onChange={updateMYear} value={relyear}></input>
            <button onClick={btnclk}>add</button>
            <table>
                <tr>
                    <td>Tron</td>
                    <td>1984</td>
                </tr>
            </table>
        </div>
    );
}