package com.project.Repository;

import com.project.Model.GameAccount.LOL.LolAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LOLAccountRepository extends JpaRepository<LolAccount,Long>{
}
