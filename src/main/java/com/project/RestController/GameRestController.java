package com.project.RestController;


import com.project.Model.Game;
import com.project.Model.Player;
import com.project.Repository.GameRepository;
import com.project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
@RequestMapping("/api/games")
public class GameRestController {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("/{id}/games")
    public Iterable hello(){
        return gameRepository.findAll();
    }

    @PostMapping("/{id}/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Game create(@PathVariable Long id,@RequestBody Game game){
        Player p = playerRepository.findOne(id);
        p.getGames().add(game);
        playerRepository.save(p);
        return game;
    }
}
