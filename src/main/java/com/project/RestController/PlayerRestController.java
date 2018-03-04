package com.project.RestController;

import com.project.Model.Player;
import com.project.Model.Summary.PlayerSummary;
import com.project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
@RequestMapping("api/players")
@ResponseBody
public class PlayerRestController {

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping
    public Collection<PlayerSummary> getAll(){ return playerRepository.getAllPlayers(); }

    @GetMapping("/filter")
    public Collection<Player> getOne(@RequestParam(value = "username", required = false)String username,
                                     @RequestParam(value = "password", required = false)String password){
        if(!username.equalsIgnoreCase("") )
            return playerRepository.findPlayerByUsername(username);
        else
            return playerRepository.findPlayerByUsernameOrPassword(username,password);

    }

    @PostMapping
    public Player savePlayer(@RequestBody Player player){
        return playerRepository.save(player);
    }

    @GetMapping("/{idPlayer}")
    public Player getOne(@PathVariable("idPlayer")Long id){
        return playerRepository.findOne(id);
    }
}
