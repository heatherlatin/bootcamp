DROP DATABASE IF EXISTS guild_db;
CREATE database guild_db;

USE guild_db;

CREATE TABLE userGroup (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  userGroupId INT NOT NULL,
  PRIMARY KEY (id),
  -- UNIQUE constraint can make a column, or multiple
  -- columns combined only able to have one match that is the same.
  -- in this case there could be a matching username only if
  -- it is in a different group
  UNIQUE(username, userGroupId),
  -- INDEX makes a certain column faster to do joins on
  -- in this case we make `userGroupId` faster to join on
  INDEX userGroup_ind(userGroupId),
  -- FOREIGN KEY sets up a column as a reference to a
  -- column in another table
  -- in this case we say userGroupId refers to table `userGroup`'s
  -- `id` column
  FOREIGN KEY (userGroupId)
	REFERENCES userGroup(id)
    ON DELETE CASCADE
);

CREATE TABLE comment (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(255) NULL,
  respondingToId INT NULL,
  userId INT NOT NULL,
  PRIMARY KEY (id),
  -- INDEX makes a certain column faster to do joins on
  -- in this case we make `userId` faster to join on
  INDEX user_ind(userId),
  -- INDEX makes a certain column faster to do joins on
  -- in this case we make `respondingToId` faster to join on
  INDEX responding_to_ind(respondingToId),
  -- FOREIGN KEY sets up a column as a reference to a
  -- column in another table
  -- in this case we say userId refers to table `user`'s
  -- `id` column
  FOREIGN KEY (userId)
	REFERENCES user(id)
    ON DELETE CASCADE,
  -- FOREIGN KEY sets up a column as a reference to a
  -- column in another table (or in this case itself)
  -- in this case we say respondingToId refers to table `comment`'s
  -- `id` column
  FOREIGN KEY (respondingToId)
	REFERENCES comment(id)
    ON DELETE CASCADE
);
