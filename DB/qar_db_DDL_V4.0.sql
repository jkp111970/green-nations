create schema new_qar;

drop table new_qar.quiz_tag_maping;
drop table new_qar.question_tag_maping;
drop table new_qar.exam_paper_maping;
drop table new_qar.exam_subscriber_maping;
drop table new_qar.quiz_tag;
drop table new_qar.option_master;
drop table new_qar.question_master;
drop table new_qar.quiz_master;

drop table new_qar.publish_exam;
drop table new_qar.subscriber_master;
drop table new_qar.quiz_publisher;
drop table new_qar.subscriber_registration;
drop table new_qar.subscriber_group_maping;
drop table new_qar.message_audit_log;
drop table new_qar.message_audit_log_group_maping;

        
CREATE TABLE new_qar.quiz_publisher (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    contact_no VARCHAR(12) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    audit_create_date DATETIME,
    audit_update_date DATETIME,
    PRIMARY KEY (id)
);
CREATE TABLE new_qar.quiz_master (
    id INT AUTO_INCREMENT,
    quiz_publisher_id INT,
    subject VARCHAR(30) NOT NULL,
    topic VARCHAR(30),
	negative_mark_per_q INT,
    negative_percentile FLOAT,
	quiz_time_limit_min INT,
    time_limit_per_q_sec INT,
    mark_per_q INT,
    audit_create_date DATETIME,
    audit_update_date DATETIME,
    PRIMARY KEY (id),
	FOREIGN KEY (quiz_publisher_id) REFERENCES quiz_publisher(id)
);
CREATE TABLE new_qar.subscriber_master (
    id INT AUTO_INCREMENT,
    quiz_publisher_id INT,
    group_name VARCHAR(50),
    status TINYINT,
    PRIMARY KEY (id),
	FOREIGN KEY (quiz_publisher_id) REFERENCES quiz_publisher(id)
);
CREATE TABLE new_qar.quiz_tag (
    id INT AUTO_INCREMENT,
    quiz_publisher_id INT,
    tag VARCHAR(70),
	type_tag INT,
    PRIMARY KEY (id),
	FOREIGN KEY (quiz_publisher_id) REFERENCES quiz_publisher(id)
);
CREATE TABLE new_qar.quiz_tag_maping (
    quiz_master_id INT,
    quiz_tag_id INT,
	FOREIGN KEY (quiz_master_id) REFERENCES quiz_master(id),
	FOREIGN KEY (quiz_tag_id) REFERENCES quiz_tag(id)
);
CREATE TABLE new_qar.question_master (
    id INT AUTO_INCREMENT,
    quiz_master_id INT,
    question_text VARCHAR(30),
    question_image BLOB,
	question_vedio BLOB,
	question_audio BLOB,
    multiple_choise_flag BOOLEAN,
	question_explaination TEXT,
	marks FLOAT NOT NULL,
    complexity_factor INT,
    audit_create_date DATETIME,
    audit_update_date DATETIME,
    PRIMARY KEY (id),
	FOREIGN KEY (quiz_master_id) REFERENCES quiz_master(id)
);
CREATE TABLE new_qar.option_master (
    id INT AUTO_INCREMENT,
    question_master_id INT,
    option_text VARCHAR(70),
    option_image BLOB,
	option_vedio BLOB,
	option_audio BLOB,
    is_correct_answer BOOLEAN,
    audit_create_date DATETIME,
    audit_update_date DATETIME,
    PRIMARY KEY (id),
	FOREIGN KEY (question_master_id) REFERENCES question_master(id)
);
CREATE TABLE new_qar.question_tag_maping (
    question_master_id INT,
    quiz_tag_id INT,
	FOREIGN KEY (question_master_id) REFERENCES question_master(id),
	FOREIGN KEY (quiz_tag_id) REFERENCES quiz_tag(id)
);	 
CREATE TABLE new_qar.publish_exam (
    id INT AUTO_INCREMENT,
    quiz_publisher_id INT,
    exam_name VARCHAR(25),
    exam_instructions VARCHAR(50),
    publish_date_time DATETIME,
    publish_end_date_time DATETIME,
    status TINYINT,
    PRIMARY KEY (id)
);
CREATE TABLE new_qar.exam_subscriber_maping (
     publish_exam_id INT,
	 subscriber_master_id INT,
	 FOREIGN KEY (publish_exam_id) REFERENCES publish_exam(id),
	 FOREIGN KEY (subscriber_master_id) REFERENCES subscriber_master(id),
);
CREATE TABLE new_qar.exam_paper_maping (
     publish_exam_id INT NOT NULL,
	 quiz_master_id INT NOT NULL,
	 map_order SMALLINT NOT NULL,
	 FOREIGN KEY (publish_exam_id) REFERENCES publish_exam(id),
	 FOREIGN KEY (quiz_master_id) REFERENCES quiz_master(id),
);
CREATE TABLE new_qar.subscriber_registration (
     id INT NOT NULL,
	 quiz_publisher_id INT NOT NULL,
	 subscriber_master_id INT NOT NULL,
	 name VARCHAR(100) NOT NULL,
	 birth_date DATE NOT NULL,
	 email VARCHAR(70) NOT NULL,
	 contact VARCHAR(15) NOT NULL,
	 parent_email VARCHAR(70),
	 parent_contact VARCHAR(15),
	 password VARCHAR (30) NOT NULL,
	 status TINYINT  NOT NULL,
	 audit_create_date DATETIME,
     audit_update_date DATETIME,
	 FOREIGN KEY (quiz_publisher_id) REFERENCES quiz_publisher(id),
     FOREIGN KEY (subscriber_master_id) REFERENCES subscriber_master(id),
	 PRIMARY KEY (id)
);
CREATE TABLE new_qar.subscriber_group_maping (
     subscriber_registration_id INT NOT NULL,
     subscriber_master_id INT NOT NULL,
	 FOREIGN KEY (subscriber_registration_id) REFERENCES subscriber_registration(id),
     FOREIGN KEY (subscriber_master_id) REFERENCES subscriber_master(id)
);
CREATE TABLE new_qar.message_audit_log (
     id INT NOT NULL,
	 quiz_publisher_id INT NOT NULL,
	 phone Boolean NOT NULL,
	 email Boolean NOT NULL,
	 parent Boolean NOT NULL,
	 student Boolean NOT NULL,
	 message VARCHAR(500) NOT NULL,
	 audit_create_date DATETIME,
	 audit_update_date DATETIME,
	 FOREIGN KEY (quiz_publisher_id) REFERENCES quiz_publisher(id),
	 PRIMARY KEY (id)
);
CREATE TABLE new_qar.message_audit_log_group_maping (
     group_id INT NOT NULL,
	 message_audit_log_id INT NOT NULL,
	 FOREIGN KEY (message_audit_log_id) REFERENCES message_audit_log(id),
	 PRIMARY KEY (group_id)
);

create table new_qar.exam_subscriber_maping(publish_exam_id int,subscriber_group_id int);
create table new_qar.exam_paper_maping(publish_exam_id int,quiz_master_id int)

select * from new_qar.quiz_publisher; 
select * from new_qar.subscriber_master;
select * from new_qar.quiz_master;           
select * from new_qar.question_master;           
select * from new_qar.option_master; 
select * from new_qar.publish_exam;  
select * from new_qar.exam_subscriber_maping;
select * from new_qar.exam_paper_maping;
select * from new_qar.quiz_tag;
select * from new_qar.quiz_tag_maping;
select * from new_qar.question_tag_maping;	
select * from new_qar.subscriber_registration;
select * from new_qar.subscriber_group_maping;
select * from new_qar.message_audit_log;
select * from new_qar.message_audit_log_group_maping;


