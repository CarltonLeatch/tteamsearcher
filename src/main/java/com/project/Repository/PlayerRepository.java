package com.project.Repository;

        import com.project.Model.Player;
        import com.project.Model.PlayerSummary;
        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.data.jpa.repository.Query;
        import org.springframework.stereotype.Repository;
        import java.util.Collection;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

        @Query(value = "SELECT p.email,p.id_Player,p.password,p.username FROM Player p", name = "getAllPlayers", nativeQuery = true)
        Collection<PlayerSummary> getAllPlayers();

        Collection<Player> findPlayerByUsername(String username);

        Collection<Player> findPlayerByUsernameOrPassword(String username, String password);
}
