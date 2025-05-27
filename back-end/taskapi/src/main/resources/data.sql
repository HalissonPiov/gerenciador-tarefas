create table tb_task (
    id varchar(255) not null primary key,
    title varchar(60) not null,
    description varchar(400),
    status varchar(50),
    createdAt varchar(400),
    deadlineToFinish varchar(400)
);