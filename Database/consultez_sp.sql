USE Consultez ;


-- -- auth -- -- 
-- 1. sp_login_admin -- 
DELIMITER $$

CREATE PROCEDURE sp_admin_login(
    IN p_email VARCHAR(150)
)
BEGIN
    SELECT * 
    FROM users 
    WHERE email = p_email AND role = 'admin';
END $$

DELIMITER ;
-- 1. sp_register_user -- 
DELIMITER $$

CREATE PROCEDURE sp_register_user(
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(150),
    IN p_password VARCHAR(255),
    IN p_phone VARCHAR(20)
)
BEGIN
    INSERT INTO users (name, email, password, phone, role)
    VALUES (p_name, p_email, p_password, p_phone, 'user');
END $$

DELIMITER ;


-- 2. sp_login_user --
DELIMITER $$
create procedure  sp_login_user(
IN p_email varchar(150)
)
BEGIN 
select*from users where email = p_email;
END $$

-- --  users  -- -- 
-- 1. sp_get_users -- 
DELIMITER $$
create procedure sp_get_users()
BEGIN
select*from users;
END $$

-- 2. sp_get_user_by_id --
DELIMITER $$
create procedure sp_get_user_by_id(
IN p_id INT
)
BEGIN
select*from users where id = p_id;
END $$ 


-- 3. sp_delete_user --
DELIMITER $$ 
create procedure sp_delete_user(
IN p_id int
) 
BEGIN 
delete from users where id = p_id;
END $$ 


-- --  SERVICES -- -- 
-- 1. sp_add_services --  
DELIMITER $$

CREATE PROCEDURE sp_add_service(
    IN p_title VARCHAR(150),
    IN p_slug VARCHAR(150),
    IN p_description TEXT,
    IN p_image VARCHAR(255),
    IN p_category_id INT
)
BEGIN 
    INSERT INTO services (title, slug, description, image, category_id)
    VALUES (p_title, p_slug, p_description, p_image, p_category_id);
END $$
DELIMITER ;


--  2. sp_get_services -- 
DELIMITER $$
create procedure sp_get_services()
BEGIN
select*from services;
END $$



-- 3. sp_get_service_by_id --
DELIMITER $$ 
create procedure sp_get_service_by_id (IN p_id INT)
BEGIN
select*from services where id = p_id;
END $$


-- 4. sp_update_service -- 
DELIMITER $$
create procedure sp_update_service(
    IN p_id INT,
    IN p_title varchar (150),
    IN p_slug varchar (150),
    IN p_description TEXT ,
    IN p_image VARCHAR (255),
    IN p_category_id INT
)
BEGIN
update services 
set title = p_title  , slug =  p_slug , description = p_description , image = p_image , category_id =  p_category_id where id = p_id;
END $$


-- 5. sp_delete_service -- 
DELIMITER $$ 
create procedure sp_delete_service(IN p_id int)
BEGIN
delete from services where id = p_id;
END $$ 






-- --  BLOG -- -- 
-- 1. sp_add_blog --
DELIMITER $$
create procedure sp_add_blog(
    IN p_title varchar(200),
    IN p_slug varchar(200),
    IN p_content TEXT,
    IN p_image varchar (255),
    IN p_author_id INT,
    IN p_category_id INT
)
BEGIN 
INSERT INTO blogs(title , slug , content , image , author_id , category_id)
values (p_title , p_slug , p_content , p_image , p_author_id , p_category_id);
END $$ 


-- 2. sp_get_blogs --
DELIMITER $$ 
create procedure sp_get_blogs()
BEGIN
select*from blogs;
END $$ 


-- 3. sp_get_blog_by_id --
DELIMITER $$ 
create procedure sp_get_blog_by_id(IN p_id  INT)
BEGIN 
select*from blogs where id = p_id;
END $$ 


-- 4. sp_get_blog_by_slug -- 
DELIMITER $$ 
create procedure sp_get_blog_by_slug(IN p_slug varchar(200))
BEGIN 
select*from blogs where slug = p_slug;
END $$ 


-- 5. sp_update_blog -- 
DELIMITER $$ 
create procedure sp_update_blog(
    IN p_id INT ,
    IN p_title varchar(200),
    IN p_slug varchar(200),
    IN p_content TEXT,
    IN p_image varchar(255),
    IN p_category_id INT
)
BEGIN
update blogs
set title =  p_title , slug = p_slug , content = p_content , image = p_image ,  category_id = p_category_id where id = p_id;
END $$ 



-- 6. sp_delete_blog --
DELIMITER $$ 
create procedure sp_delete_blog(IN p_id INT)
BEGIN
delete from blogs where id = p_id;
END $$


-- 7. sp_get_blog_paginated -- 
DELIMITER $$ 
create procedure sp_get_blogs_paginated(
    IN p_page int,
    IN p_limit int
)
BEGIN
DECLARE offset_val INT;
SET offset_val = (p_page - 1 ) * p_limit;
select *from blogs LIMIT p_limit OFFSET offset_val;
END $$ 



-- 8. sp_search_ blogs -- 
DELIMITER $$ 
create procedure sp_search_blogs(IN p_keyword varchar(100))
BEGIN
select*from blogs 
WHERE title LIKE CONCAT('%' , p_keyword , '%');
END $$  






-- --  INQUIRY -- --
-- 1. sp_add_inquiry -- 
DELIMITER $$
create procedure sp_add_inquiry (
    IN p_name varchar(100),
    IN p_email varchar(150),
    IN p_phone varchar(20),
    IN p_message TEXT
)
BEGIN 
insert into inquiries(name , email , phone , message)
values (p_name , p_email , p_phone , p_message);
END $$

-- 2. sp_get_inquiry --
DELIMITER $$
create procedure sp_get_inquiries()
BEGIN 
select*from inquiries;
END $$ 


-- 3. sp_get_inquiries_by_id --
DELIMITER $$
create procedure sp_get_inquiries_by_id (IN p_id int)
BEGIN
select*from inquiries where id = p_id;
END $$ 


 --  4. sp_delete_inquiries -- 
 DELIMITER $$
 create procedure sp_delete_inquiry(IN p_id int)
 BEGIN 
 delete from inquiries where id = p_id;
 END$$ 




-- --  CATEGORIES -- --
-- 1. sp_add_category -- 
DELIMITER $$
create procedure sp_add_category(
IN p_name varchar(100),
IN p_type varchar (20)
)
BEGIN
insert into categories (name , type )
values (p_name , p_type);
END $$ 

-- 2. sp_get_categories -- 
DELIMITER $$
create procedure sp_get_categories()
BEGIN
select*from categories;
END $$ 


-- 3. sp_update_category -- 
DELIMITER $$
create procedure sp_update_category(
    IN p_id INT,
    IN p_name varchar(100),
    IN p_type varchar(20)
)
BEGIN 
update categories set name = p_name , type =  p_type where id = p_id;
END $$ 


-- 4. sp_delete_category -- 
DELIMITER $$
create procedure sp_delete_category(IN p_id INT)
BEGIN
delete from categories where id =  p_id;
END $$ 



-- --  TEAM-MEMBERS  -- --
-- 1. sp_add_team_member --

DELIMITER $$ 
create procedure sp_add_team_member (
    IN p_name varchar(100),
    IN p_designation varchar(100),
    IN p_image varchar(255),
    IN p_facebook varchar(255),
    IN p_instagram varchar(255),
    IN p_twitter varchar(255),
    IN p_linkedin varchar(255)
)
BEGIN 
insert into team_members(name , designation , image , facebook , instagram , twitter , linkedin )
values(p_name , p_designation , p_image , p_facebook , p_instagram , p_twitter , p_linkedin);
END $$ 




-- 2 .sp_get_team_member -- 
DELIMITER $$ 
create procedure sp_get_team_member()
BEGIN 
select*from team_members;
END$$ 


-- 3. sp_get_team-member_by_id  -- 
DELIMITER $$ 
create procedure sp_get_team_member_by_id(IN p_id INT)
BEGIN 
select*from team_members where  id = p_id;
END $$


-- 4 . sp_update_team_member -- 
DELIMITER $$
create procedure sp_update_team_member(
    IN p_id INT,
    IN p_name varchar(255),
    IN p_designation VARCHAR (100),
    IN p_image varchar (255)
) 
BEGIN 
update team_members set name = p_name , designation =  p_designation , image = p_image  where id =  p_id;
END $$ 


-- 5. sp_delete_team_member -- 
DELIMITER $$ 
create procedure sp_delete_team_member (IN p_id INT)
BEGIN
delete from team_members where id = p_id;
END $$ 






-- --  TESTIMONIALS  -- -- 

-- 1. sp_add_testimonials -- 
DELIMITER $$ 
create procedure sp_add_testimonials(
    IN p_name varchar(100),
    IN p_feedback TEXT,
    IN p_rating INT,
    IN p_image varchar (255)
)
BEGIN
insert into testimonials(name , feedback , rating , image)
values (p_name , p_feedback , p_rating , p_image);
END $$ 

 
-- 2. sp_get_testimonials -- 
DELIMITER $$ 
create procedure sp_get_testimonials()
BEGIN 
select*from testimonials;
END $$ 


-- 3. sp_update_testimonial -- 
DELIMITER $$ 
create procedure sp_update_testimonial(
    IN p_id int,
    IN p_name varchar (100),
    IN p_feedback TEXT,
    IN p_rating INT,
    IN p_image varchar(255)
)
BEGIN  
update testimonials 
set name = p_name , feedback = p_feedback , rating = p_rating  , image = p_image where id = p_id;
END $$ 



-- 4. sp_delete_testimonial --  
DELIMITER $$ 
create procedure  sp_delete_testimonial (IN p_id INT)
BEGIN 
delete from testimonials where id =  p_id;
END $$ 


SHOW CREATE PROCEDURE sp_add_service;




