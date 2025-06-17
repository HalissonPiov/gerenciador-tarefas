package com.halisson.taskapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


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
}
