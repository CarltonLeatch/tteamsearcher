package com.project.RestController;

import com.project.Model.Player;
import com.project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080", "http://*"})
@RestController
@RequestMapping("api/login")
@ResponseBody
public class LoginRestController {

    @Autowired
    private PlayerRepository playerRepository;

    @PostMapping
    public ResponseEntity<String> login(@RequestBody Player player) {
        System.out.println("Username: " + player.getUsername() + "\n Password: " + player.getPassword());
        boolean status = false;
        Collection<Player> db = playerRepository.findPlayerByUsernameAndPassword(player.getUsername(), player.getPassword());
        if (db.size() == 1)
            return ResponseEntity.status(HttpStatus.OK).build();
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}
