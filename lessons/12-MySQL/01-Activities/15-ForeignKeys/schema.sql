DROP DATABASE IF EXISTS guild_db;
CREATE database guild_db;

USE guild_db;

CREATE TABLE user_group (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  user_group_id INT NOT NULL,
  PRIMARY KEY (id),
  -- UNIQUE constraint can make a column, or multiple
  -- columns combined only able to have one match that is the same.
  -- in this case there could be a matching username only if
  -- it is in a different group
  UNIQUE(username, user_group_id),
  -- INDEX makes a certain column faster to do joins on
  -- in this case we make `user_group_id` faster to join on
  INDEX user_group_ind(user_group_id),
  -- FOREIGN KEY sets up a column as a reference to a
  -- column in another table
  -- in this case we say user_group_id refers to table `user_group`'s
  -- `id` column
  FOREIGN KEY (user_group_id)
	REFERENCES user_group(id)
    ON DELETE CASCADE
);

CREATE TABLE comment (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(255) NULL,
  responding_to_id INT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  -- INDEX makes a certain column faster to do joins on
  -- in this case we make `user_id` faster to join on
  INDEX user_ind(user_id),
  -- INDEX makes a certain column faster to do joins on
  -- in this case we make `responding_to_id` faster to join on
  INDEX responding_to_ind(responding_to_id),
  -- FOREIGN KEY sets up a column as a reference to a
  -- column in another table
  -- in this case we say user_id refers to table `user`'s
  -- `id` column
  FOREIGN KEY (user_id)
	REFERENCES user(id)
    ON DELETE CASCADE,
  -- FOREIGN KEY sets up a column as a reference to a
  -- column in another table (or in this case itself)
  -- in this case we say responding_to_id refers to table `comment`'s
  -- `id` column
  FOREIGN KEY (responding_to_id)
	REFERENCES comment(id)
    ON DELETE CASCADE
);
