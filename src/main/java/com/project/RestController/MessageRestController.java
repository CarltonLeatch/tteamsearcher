package com.project.RestController;


import com.project.Model.Comments;
import com.project.Model.Player;
import com.project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
@RequestMapping("/api/message")
public class MessageRestController {

    @Autowired
    PlayerRepository playerRepository;


    @PostMapping("/{id}/add")
    public Comments saveMessage(@PathVariable Long id, @RequestBody Comments comments){
        Player p = playerRepository.findOne(id);
        p.getComments().add(comments);
        playerRepository.save(p);
        return comments;
    }

    @GetMapping("/{id}/getAll")
    public List<Comments> getAllMessagesFromPlayer(@PathVariable Long id){
        Player p = playerRepository.findOne(id);
        return p.getComments();
    }
}
