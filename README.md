# GildedRose-Refactoring-JS

Pour réfactorer "sans douleur", nous prévoyons la mise en place de tests unitaires au préalable. - OK


Créer des sous classes à Item pour chacun des objets (Standard, Legendary, Concert, Cheese) 
--> Pour mieux gérer les différentes exceptions et limiter les cas conditionnels. 
--> Gérer la diminution/augmentation de qualité 

Scinder la méthode updateQuality en plusieurs méthodes : 
--> Cette méthode a plusieurs responsabilités (Baisse/hausse de qualité, décrémentation du prix): Elle ne devrait en avoir qu'un seul à gérer. 
Créer une méthode par fonctionnalités 

Chaque sous classe dispose de ses propres méthodes pour mettre à jour la qualité et le nombre de jours avant expiration de l'item. 

Nous prévoyons d'implémenter les objets conjurés après la refacto du code. 
