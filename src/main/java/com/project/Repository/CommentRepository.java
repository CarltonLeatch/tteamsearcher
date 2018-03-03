package com.project.Repository;

import com.project.Model.Comments;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends PagingAndSortingRepository<Comments, Long> {
}
