# GildedRose-Refactoring-JS

Pour réfactorer "sans douleur", nous avons dans un premier temps mis en place des tests unitaires afin de couvrir au maximum notre code. - OK

Nous avons ensuite créé des sous-classes à Item (une classe à la fois) pour chacun des objets. 
Nous avons identifié 4 classes dans un premier temps : Standard, Legendary, Concert et Cheese. 
--> Mieux gérer les différentes exceptions et limiter les cas conditionnels. 
--> Gérer la mise à jour de la qualité des objets. 
 
Nous avons ensuite refactoré par le biais de plusieurs commits la méthode updateQuality : 
--> Cette méthode avait plusieurs responsabilités (Baisse/hausse de qualité, décrémentation du prix). 
--> Elle ne devrait en avoir qu'une seule à gérer. 
Nous sommes parti du principe qu'il faut dédier une méthode par fonctionnalité. 
 
Chaque sous-classe dispose de ses propres méthodes pour mettre à jour sa qualité et le nombre de jours avant expiration de l'item. 

Une fois notre refacto terminée et assurée par les tests que nous avions mis en place au préalable, nous nous sommes concentrés sur l'implémentation des objets "Conjured".
--> Logique TDD : Mise en place des tests rouges, passage au vert puis refacto. 
 
Toutes les étapes que nous avons mises en place pour la réalisation de ce Kata ont été faites en respect des règles et notions qui nous ont été présentées en cours de Tests Unitaires.
