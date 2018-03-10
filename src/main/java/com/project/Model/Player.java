package com.project.Model;


import com.project.Model.GameAccount.LOL.LolAccount;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPlayer;


    @NotEmpty
    private String username;

    @NotEmpty
    private String password;

    @NotEmpty
    private String email;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Teams> teams;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Comments> comments;

    @OneToOne(cascade = CascadeType.ALL)
    private LolAccount lolAccount;
}
