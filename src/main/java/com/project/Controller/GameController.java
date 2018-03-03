package com.project.Controller;

import com.project.Model.Teams;
import com.project.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/")
public class GameController {

    @Autowired
    private TeamRepository teamRepository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    @RequestMapping("/hello")
    public String hello() {

        return "hello";
    }

    @PostMapping("/save")
    public String saveNewGame(@ModelAttribute("Ngame") @Validated Teams teams, BindingResult br) {
        if (br.hasErrors()) {
            return "hello";
        } else {
            teamRepository.save(teams);
        }
        return "hello";
    }

}
