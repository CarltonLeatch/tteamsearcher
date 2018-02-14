package com.project.RestController;

import com.project.Model.Player;
import com.project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
@RequestMapping("/api/players")
public class PlayerRestController {

    @Autowired
    private PlayerRepository playerRepository;


    @GetMapping
    public Iterable<Player> getAll(){ return playerRepository.findUsernameAndPasswordOnly(); }

    @GetMapping("/{idPlayer}")
    public Player getOne(@PathVariable("idPlayer")Long id){
        return playerRepository.findOne(id);
    }

    @PostMapping
    public Player savePlayer(@RequestBody Player player){
        return playerRepository.save(player);
    }


}
