package com.project.Repository;

import com.project.Model.Teams;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends PagingAndSortingRepository<Teams, Long> {
}
