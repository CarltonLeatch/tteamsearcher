package com.project.RestController;


import com.project.Model.Message;
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
    public Message saveMessage(@PathVariable Long id, @RequestBody Message message){
        Player p = playerRepository.findOne(id);
        p.getMessages().add(message);
        playerRepository.save(p);
        return message;
    }

    @GetMapping("/{id}/getAll")
    public List<Message> getAllMessagesFromPlayer(@PathVariable Long id){
        Player p = playerRepository.findOne(id);
        return p.getMessages();
    }
}
