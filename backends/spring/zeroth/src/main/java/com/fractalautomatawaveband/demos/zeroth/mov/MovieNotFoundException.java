package com.fractalautomatawaveband.demos.zeroth.mov;

public class MovieNotFoundException extends RuntimeException {
    MovieNotFoundException(Long id) {
        super("Could not find movie: " + id);
    }
}
