package com.project.RestController;

import com.project.Model.Player;
import com.project.Repository.PlayerRepository;
import com.project.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = {"http://localhost:3000","http://localhost:8080" ,"*"})
@RestController
@RequestMapping("api/teams")
@ResponseBody
public class TeamRestController {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private PlayerRepository playerRepository;

}
