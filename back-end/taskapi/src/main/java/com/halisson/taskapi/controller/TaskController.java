package com.halisson.taskapi.controller;

import com.halisson.taskapi.model.Task;
import com.halisson.taskapi.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController()
@RequestMapping("task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task taskCreated = taskService.createTask(task);

        return ResponseEntity.status(HttpStatus.CREATED).body(taskCreated);

    }

    @GetMapping
    public ResponseEntity<List<Task>> listTasksByTitle(@RequestParam("title") String title) {
        List<Task> tasks = taskService.listTasksByTitle(title);
        return ResponseEntity.ok(tasks);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable String id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Task> updateTask(@RequestBody Task task, @PathVariable String id) {
        task.setId(id);
        taskService.updateTask(task);
        return ResponseEntity.ok(task);
    }

}



