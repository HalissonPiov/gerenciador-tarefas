package com.halisson.taskapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;


@Getter
@Setter
@Entity
@Table(name = "tb_task")
public class Task {

    @Id
    @Column()
    private String id;

    @Column()
    private String title;

    @Column()
    private String description;

    @Column()
    private String status;

    @Column()
    LocalDateTime createdAt;

    @Column()
    LocalDateTime deadlineToFinish;

//    public String getId() {
//        return id;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public String getStatus() {
//        return status;
//    }
//
//    public LocalDateTime getCreatedAt() {
//        return createdAt;
//    }
//
//    public LocalDateTime getDeadlineToFinish() {
//        return deadlineToFinish;
//    }
//
//    public void setId(String id) {
//        this.id = id;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public void setStatus(String status) {
//        this.status = status;
//    }
//
//    public void setCreatedAt(LocalDateTime createdAt) {
//        this.createdAt = createdAt;
//    }
//
//    public void setDeadlineToFinish(LocalDateTime deadlineToFinish) {
//        this.deadlineToFinish = deadlineToFinish;
//    }
}
