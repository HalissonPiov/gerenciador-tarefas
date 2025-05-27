package com.halisson.taskapi.repository;

import com.halisson.taskapi.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, String> {

    List<Task> findByTitle(String title);
}
