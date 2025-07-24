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

  -- Articles de voyage
INSERT INTO article (title, content, user_id) VALUES
('Découverte de Bali : Paradis Tropical',
'<p>Bali est une île indonésienne connue pour ses <strong>plages paradisiaques</strong>, ses <em>temples sacrés</em> et sa culture vibrante.</p><p><img src=\"https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80\" alt=\"Plage de Bali\"></p><p>Ne manquez pas le temple d\\\'Uluwatu au coucher du soleil et les rizières en terrasses d\\\'Ubud.</p><p><strong>Conseil :</strong> Goûtez absolument le Nasi Goreng, un plat local délicieux !</p>', 1),

( 'Road Trip en Islande : Entre Feu et Glace',
'<p>L’Islande offre des paysages à couper le souffle : <strong>cascades majestueuses</strong>, <em>volcans actifs</em> et <u>glaciers impressionnants</u>.</p>
<p><img src="https://cdn.pixabay.com/photo/2020/04/28/12/54/iceland-5104370_1280.jpg" alt="Paysage islandais" width="500"></p>
<p><strong>Notre itinéraire préféré :</strong></p>
<ol>
<li>Reykjavik - La capitale colorée</li>
<li>Le Cercle d’Or (Geysir, Gullfoss, Þingvellir)</li>
<li>La côte sud avec ses plages de sable noir</li>
<li>Le lac glaciaire Jökulsárlón</li>
<li>Les fjords de l’Est</li>
</ol>
<p><strong>Conseils pratiques :</strong></p>
<ul>
<li>Prévoyez des vêtements chauds et imperméables</li>
<li>Louez un 4x4 pour les routes de montagne</li>
<li>Réservez les hébergements à l’avance en haute saison</li>
<li>Goûtez le skyr, le fromage blanc islandais</li>
</ul>
<p><em>À ne pas manquer :</em> Les aurores boréales en hiver et le soleil de minuit en été !</p>', 1),



('Croisière en Méditerranée : Escales Inoubliables','<p>Une croisière en Méditerranée vous permettra de découvrir plusieurs pays en un seul voyage.</p><p><img src=\"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80\" alt=\"Croisière en Méditerranée\"></p><p>Nos escales préférées :</p><ol><li>Barcelone, Espagne</li><li>Santorin, Grèce</li><li>Dubrovnik, Croatie</li><li>Venise, Italie</li></ol><p><em>Conseil :</em> Prévoyez des vêtements légers pour les journées ensoleillées et une veste pour les soirées fraîches.</p>', 1),

( 'Les Meilleurs Cafés de Paris','
<p>Paris regorge de cafés charmants où l’on peut déguster un excellent café tout en profitant de l’ambiance parisienne.</p>
<p><img src="https://images.unsplash.com/photo-1517705008128-361805f42e86" alt="Café parisien" width="500"></p>
<p><strong>Nos coups de cœur :</strong></p>
<ol>
<li><strong>Café de Flore</strong> - Un classique historique du quartier Saint-Germain</li>
<li><em>Holybelly</em> - Pour un brunch délicieux dans une ambiance décontractée</li>
<li>Boot Café - Un petit café cosy près du Canal Saint-Martin</li>
<li>Coutume Café - Pour les amateurs de café de spécialité</li>
<li>Le Comptoir du Relais - Un café-restaurant typiquement parisien</li>
</ol>
<p>N’hésitez pas à essayer les pâtisseries françaises qui accompagnent souvent le café !</p>
<p><em>Conseil :</em> Les cafés parisiens sont souvent plus animés en terrasse qu’à l’intérieur.</p>', 1),

('Recette de Tiramisu Facile',
'
<p>Le tiramisu est un dessert italien délicieux et facile à préparer.</p>
<p><img src="https://cdn.pixabay.com/photo/2017/10/28/19/07/tiramisu-2897900_1280.jpg" alt="Tiramisu" width="500"></p>
<p><strong>Ingrédients :</strong></p>
<ul>
<li>250g de mascarpone</li>
<li>3 œufs</li>
<li>100g de sucre</li>
<li>24 biscuits à la cuillère</li>
<li>250ml de café fort</li>
<li>2 cuillères à soupe de cacao en poudre</li>
</ul>
<p><strong>Préparation :</strong></p>
<ol>
<li>Séparer les blancs des jaunes d’œufs</li>
<li>Mélanger les jaunes avec le sucre jusqu’à ce que le mélange blanchisse</li>
<li>Ajouter le mascarpone et mélanger</li>
<li>Monter les blancs en neige et les incorporer délicatement</li>
<li>Tremper rapidement les biscuits dans le café et les disposer dans un plat</li>
<li>Recouvrir d’une couche de crème, puis répéter l’opération</li>
<li>Saupoudrer de cacao et réfrigérer au moins 4 heures</li>
</ol>
<p><em>Astuce :</em> Pour une version sans alcool, remplacez le café par du jus d’orange.</p>', 1),

('Top 5 des Films à Voir en 2023',
'<p>Voici notre sélection des meilleurs films sortis en 2023 :</p><p><img src=\"https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80\" alt=\"Cinéma\"></p><ol><li><strong>Oppenheimer</strong> - Un biopic captivant sur le père de la bombe atomique</li><li><em>Barbie</em> - Une comédie colorée et pleine de sens</li><li>Killers of the Flower Moon - Un drame historique puissant</li><li>The Super Mario Bros. Movie - Pour les amateurs de jeux vidéo</li><li>Poor Things - Une comédie noire originale</li></ol><p>Quel est votre film préféré de cette année ? Partagez-le en commentaire !</p>', 1);

-- Utilisateurs fictifs
INSERT INTO user (id, name, email, password, is_admin) VALUES
(2, "Alice Martin", "alice.martin@example.com", "$argon2id$v=19$m=65536,t=3,p=4$demo$demo", false),
(3, "Lucas Dupont", "lucas.dupont@example.com", "$argon2id$v=19$m=65536,t=3,p=4$demo$demo", false),
(4, "Sofia Nguyen", "sofia.nguyen@example.com", "$argon2id$v=19$m=65536,t=3,p=4$demo$demo", false),
(5, "Yassine Benali", "yassine.benali@example.com", "$argon2id$v=19$m=65536,t=3,p=4$demo$demo", false),
(6, "Emma Dubois", "emma.dubois@example.com", "$argon2id$v=19$m=65536,t=3,p=4$demo$demo", false);


-- Commentaires pour article 1 (Découverte de Bali : Paradis Tropical)
INSERT INTO comment (text, user_id, article_id) VALUES
('Bali est vraiment magnifique, j’y suis allé l’été dernier !', 2, 1),
('Merci pour les conseils de voyage, je note pour mon prochain trip !', 3, 1),
('Le nasi goreng est incroyable, et les plages sont à couper le souffle.', 4, 1);

-- Article 2 (Road Trip en Islande)
INSERT INTO comment (text, user_id, article_id) VALUES
('Ton itinéraire est top ! Le cercle d’Or est magique.', 5, 2),
('Islande = mon rêve ! Merci pour les adresses :)', 1, 2),
('J’y vais en septembre, des conseils pour camper sur place ?', 6, 2);

-- Article 3 (Croisière en Méditerranée)
INSERT INTO comment (text, user_id, article_id) VALUES
('J’ai adoré Dubrovnik pendant ma croisière, je recommande !', 2, 3),
('Super article, ça donne envie de partir tout de suite...', 3, 3);

-- Article 4 (Les Meilleurs Cafés de Paris)
INSERT INTO comment (text, user_id, article_id) VALUES
('Holybelly, c’est vraiment le meilleur pour bruncher !', 4, 4),
('Boot Café, une vraie pépite cachée, merci pour la reco.', 5, 4),
('Je passe toujours au Café de Flore quand je suis à Paris.', 6, 4);

-- Article 5 (Recette de Tiramisu Facile)
INSERT INTO comment (text, user_id, article_id) VALUES
('Testé hier soir avec des amis, on s’est régalés !', 3, 5),
('Merci pour cette recette, super simple et délicieuse.', 2, 5),
('Quel mascarpone tu conseilles ?', 1, 5);

-- Article 6 (Top 5 des Films à Voir en 2023)
INSERT INTO comment (text, user_id, article_id) VALUES
('J’ai adoré Oppenheimer !', 4, 6),
('Barbie, un vrai moment de détente, trop cool.', 5, 6),
('Il manque John Wick 4 ;) ', 6, 6);
