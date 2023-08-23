import React from "react";
import '../styles/app.css';
import MovieCrud from "./movie";

export default function app() {
    return (
        <div>
            <h1>JSX</h1>
            <hr />
            <MovieCrud />
            <MovieCrud />
            <MovieCrud />
        </div>
    );
}
