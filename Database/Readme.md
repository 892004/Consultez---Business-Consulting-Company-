DELIMITER $$

CREATE PROCEDURE sp_add_testimonial(
    IN p_name VARCHAR(100),
    IN p_feedback TEXT,
    IN p_rating INT,
    IN p_image VARCHAR(255)
)
BEGIN
    INSERT INTO testimonials(name,feedback,rating,image)
    VALUES(p_name,p_feedback,p_rating,p_image);
END $$






CREATE PROCEDURE sp_get_testimonials()
BEGIN
    SELECT * FROM testimonials;
END $$





CREATE PROCEDURE sp_update_testimonial(
    IN p_id INT,
    IN p_name VARCHAR(100),
    IN p_feedback TEXT,
    IN p_rating INT,
    IN p_image VARCHAR(255)
)
BEGIN
    UPDATE testimonials
    SET name=p_name, feedback=p_feedback, rating=p_rating, image=p_image
    WHERE id=p_id;
END $$



CREATE PROCEDURE sp_delete_testimonial(IN p_id INT)
BEGIN
    DELETE FROM testimonials WHERE id=p_id;
END $$

DELIMITER ;