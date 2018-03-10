package com.project.RestController;

import com.project.Model.GameAccount.LOL.LoLDivisionEnum;
import com.project.Model.GameAccount.LOL.LoLPositionEnum;
import com.project.Model.GameAccount.LOL.LolAccount;
import com.project.Model.Player;
import com.project.Repository.LOLAccountRepository;
import com.project.Repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080"})
@RestController
@RequestMapping("/api/accounts/lol")
public class LOLAccountRestController {

    @Autowired
    private LOLAccountRepository lolAccountRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("/all")
    public List<LolAccount> getAll(){
        Long id = Long.valueOf(1);
        Player p = playerRepository.getOne(id);
        LolAccount lol = new LolAccount();
        lol.setDivision(LoLDivisionEnum.BRONZE);
        lol.setPosition(LoLPositionEnum.BOTTOM);
        lol.setLevel(55);
        lol.setUsername("xDDDDDD");
        p.setLolAccount(lol);
        playerRepository.save(p);
        return lolAccountRepository.findAll(); }

}
