package com.halisson.taskapi.service;

import com.halisson.taskapi.model.Task;
import com.halisson.taskapi.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // Criar tarefa (C)
    public Task createTask(Task task) {
        if (task.getTitle() == null || task.getTitle().isEmpty()) {
            throw new IllegalArgumentException("AVISO: título não pode ser vazio");
        }

        task.setCreatedAt(LocalDateTime.now());
        task.setStatus("Em andamento");

        var id = UUID.randomUUID().toString();
        task.setId(id);

        return taskRepository.save(task);
    }

    // Listas tarefas (R)
    public List<Task> listTasksByTitle(String title) {
        return taskRepository.findByTitle(title);
    }

    // Deletar Tarefa (D)
    public void deleteTask(String id) {
        taskRepository.deleteById(id);
    }

    // Atualizar tarefa (U)
    public void updateTask(Task task) {

        if (task.getTitle() == null || task.getTitle().isEmpty()) {
            throw new IllegalArgumentException("AVISO: novo título não pode ser vazio");
        }

        task.setCreatedAt(LocalDateTime.now());

        taskRepository.save(task);

    }

}
