package com.project.RestController;


import com.project.Model.Teams;
import com.project.Model.Player;
import com.project.Repository.TeamRepository;
import com.project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
@RequestMapping("/api/games")
public class GameRestController {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("/{id}/games")
    public Iterable hello(){
        return teamRepository.findAll();
    }

    @PostMapping("/{id}/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Teams create(@PathVariable Long id, @RequestBody Teams teams){
        Player p = playerRepository.findOne(id);
        p.getTeams().add(teams);
        playerRepository.save(p);
        return teams;
    }
}
