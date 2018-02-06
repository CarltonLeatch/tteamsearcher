package com.project.Repository;

import com.project.Model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

        @Query(value = "SELECT p.username,p.password,p.id_player, p.email from Player p", nativeQuery = true)
        List<Player> findUsernameAndPasswordOnly();
}
