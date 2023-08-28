import React from "react";
import MovieGrid from "./movie";
import '../styles/app.css';

export default function app() {
    return (
        <div>
            <h1>JSX</h1>
            <MovieGrid></MovieGrid>
            <MovieGrid></MovieGrid>
            <MovieGrid></MovieGrid>
        </div>
    );
}
