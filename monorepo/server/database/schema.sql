CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE article (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modification_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE comment (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  text TEXT NOT NULL,
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  article_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE
);

insert into user (id, name, email, password, is_admin)
  values
  (1,"Jordan", "Jordan.Aulagnier@gmail.com", "$argon2id$v=19$m=65536,t=3,p=4$qzhoFHVxUr7iupTRMpUXEw$yBIvUMFryP4WHCMGipDN4Sa6tPqFnoZnu2N9anPWta8", true);