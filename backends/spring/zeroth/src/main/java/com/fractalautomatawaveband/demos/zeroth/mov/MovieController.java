package com.fractalautomatawaveband.demos.zeroth.mov;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
public class MovieController {
    private final MovieRepository repo;

    public MovieController(MovieRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/movies")
    List<Movie> all() {
        return repo.findAll();
    }

    @PostMapping("/movies")
    Movie mkmovie(@RequestBody Movie m) {
        return repo.save(m);
    }

    @GetMapping("/movies/{id}")
    Movie one(@PathVariable Long id) {
        return repo.findById(id).orElseThrow(() -> new MovieNotFoundException(id));
    }

    @PutMapping("/movies/{id}")
    Movie editmovie(@RequestBody Movie m, @PathVariable Long id) {
        return repo.findById(id)
                .map(mm -> {
                    mm.setMname(m.getMname());
                    mm.setMyear(m.getMyear());
                    return repo.save(mm);
                })
                .orElseGet(() -> {
                    m.setId(id);
                    return repo.save(m);
                });
    }

    @DeleteMapping("/movies/{id}")
    void rmmovie(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
