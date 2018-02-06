package com.project.RestController;


import com.project.Model.Game;
import com.project.Repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class GameRestController {

    @Autowired
    private GameRepository gameRepository;


    @GetMapping("/games")
    public Iterable hello(){
        return gameRepository.findAll();
    }

    @PostMapping("/saveGame")
    @ResponseStatus(HttpStatus.CREATED)
    public Game create(@RequestBody Game game){
        return gameRepository.save(game);
    }
}
