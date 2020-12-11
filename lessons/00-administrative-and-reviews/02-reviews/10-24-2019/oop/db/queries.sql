USE guild_db;
-- get groups
SELECT * FROM user_group;
-- get users
SELECT * FROM user;
-- get comments
SELECT * FROM comment;

-- filled out users
SELECT user.*, user_group.name AS group_name
    FROM user 
    INNER JOIN user_group 
    ON user_group.id = user.user_group_id;

-- filled out comments
SELECT comment.*,
    user.username, 
    user_group.name AS group_name
    FROM comment
    INNER JOIN user 
    ON user.id = comment.user_id
    INNER JOIN user_group 
    ON user_group.id = user.user_group_id;

-- get responses to a comment
SELECT response.* FROM comment
    LEFT JOIN comment AS response
    ON response.responding_to_id = comment.id
    WHERE comment.id = 2;

-- get responses to a comment filled out
SELECT response.*,
    user.username, 
    user_group.name AS group_name
    FROM comment
    INNER JOIN comment AS response
    ON response.responding_to_id = comment.id
    INNER JOIN user 
    ON user.id = response.user_id
    INNER JOIN user_group 
    ON user_group.id = user.user_group_id
    WHERE comment.id = 2;