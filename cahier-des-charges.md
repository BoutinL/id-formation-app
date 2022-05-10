---

Author: Alain ORLUK / ID-Formation  
Formation : Développeur Web & Web mobile  
Lieu: Strasbourg
Date : 09/05/2022  

---
# CAHIER DES CHARGES DU PROJET **CANTINE**

## SOMMAIRE

- [A. Présentation de l’entreprise](#a-pr&#233;sentation-de-lentreprise) :
  - [A. 1. Les objectifs de l'application](#a-1-les-objectifs-de-lapplication)
  - [A. 2. Les cibles](#a-2-les-cibles)
  - [A. 3. Périmètre du projet](#a-3-p&#233;rim&#232;tre-du-projet)
- [B. Graphisme et ergonomie](#b-graphisme-et-ergonomie)
  - [B. 1. Wireframe et Maquettage](#b-1-wireframe-et-maquettage)
- [C. Spécificités et livrables](#c-sp&#233;cificit&#233;s-et-livrables)
  - [C. 1. Le contenu de votre site](#c-1-le-contenu-de-votre-site)
  - [C. 2. Contraintes techniques](#c-2-contraintes-techniques)
  - [C. 3. Les livrables](#c-3-les-livrables)
  - [C. 4. Le Planning](#c-4-le-planning)

## **A. Pr&#233;sentation de l’entreprise**

Le client est l'établissement scolaire "**ID-Formation Private School**", dirigé par M. ORLUK, structure éducative privée située à Strasbourg et créée en 2011 qui accueille 50 adolescents de 11 à 16 ans.  

Elle est composée d'un pôle *administratif* et d'un *pôle éducatif*.  

Le pôle *administratif* se compose de :  

- Un directeur, Monsieur ORLUK Alain ;
- Une directrice adjointe ;
- Une comptable ;
- Une responsable cantine ;
- Deux cuisiniers.

Le pôle *éducatif* se compose de :

- Un conseiller principal d'éducation ;
- 3 professeurs ;
- 2 surveillants.

### **A. 1. Les objectifs de l'application**

Le client vous demande de concevoir une application web qui permettra de gérer l'état des inscriptions au service de restauration de l'établissement.  

### **A. 2. Les cibles**

L'application est destinée pour une part aux parents (demande d'inscription et de désinscription, régularisation d'un arriéré de cotisation) et à la responsable cantine, Mme Elle DUTRAVAIL, pour la partie gestion globale.  

### **A. 3. P&#233;rim&#232;tre du projet**

- Les parents disposent d'un compte créé lors de la validation de la demande d'inscription du premier enfant ;
- La régularisation des arriérés peut se faire par chèque, en espèces sur place (horaires à indiquer) ou par carte bancaire ;
- Les demandes d'inscription sont validées par Mme DUTRAVAIL après vérification des informations saisies par le parent lors de la demande.
- L'application doit être disponible en version "ordinateur", "smartphone" et "tablette" ;

## **B. Graphisme et ergonomie**

La charte graphique est à définir. Seul le [logo](./assets/img/logo.png) de l'établissement est imposé (et l'identité colorimétrique devra donc être en rapport).  

### *B. 1. Wireframe et Maquettage*

Une maquette réalisée sous [FIGMA](https://www.figma.com/) devra être présentée au client.  

## **C. Sp&#233;cificit&#233;s et livrables**

### **C. 1. Le contenu de votre site**

L'application, en dehors de la page d'accueil, devra contenir 5 pages :  

- Inscription ;
- Gestion des inscrits ;
- Validation des demandes d'inscription ;
- Gestion du compte parent ;
- Régularisation cotisation.

Chaque page devra comporter un header incluant le logo de l'établissement ainsi qu'une barre navigation.  
Cette barre contiendra les liens auxquels l'utilisateur actif a accès, à savoir :  

- **Responsable cantine** :  
  - Gestion des inscrits ;  
  - Validation des demandes d'inscription ;  
  - Gestion du compte parent.
- **Parent** :  
  - Demande d'inscription ;  
  - Régularisation cotisation ;  
  - Gestion du compte parent.  

La page d'accueil proposera au sein de la barre de navigation un bouton de connexion.  
La saisie d'un identifiant et mot de passe sera alors demandé.  
Selon le couple renseigné, la page d'accueil sera "rafraichie" et les liens de la barre de navigation s'afficheront en fonction du statut de connexion (**parent** ou **gestionnaire**).  

La section dédiée à la demande d'inscription proposera les champs de saisie suivants :  

- nom ;
- adresse ;
- mail ;
- téléphone ;
- prénom de l'enfant à inscrire ;
- nom de l'enfant à inscrire ;
- date de naissance de l'enfant à inscrire ;
- régime de cantine souhaité (1 = demi-pension ; 2 = pension complète) ;
- allergies ;
- code IBAN du compte à débiter pour le paiement mensuel des cotisations.  

Un champ `id` sera renseigné par incrémentation (comme au sein de chaque objet au sein de l'objet `categories`).  

### **C. 2. Contraintes techniques**

Vous devez travailler par groupe de 3.  
Vous devrez effectuer le suivi du projet via un tableau créé via l'outil [TRELLO](https://trello.com/home).  
Vous avez [ici](./assets/img/trello-exemple.png) un exemple de son utilisation.  
La collection de données que vous devrez utiliser se trouve au sein du fichier [bdd.json](bdd.json).  
Le projet github devra s'appeler `id-formation-app`.  
Un lead-developer sera désigné pour chaque groupe. Il sera responsable du repo sur github et sera chargé d'effectuer les **revues de code** au moment des `merge request`.  
L'ensemble de l'application devra être codée en HTML/CSS/JavaScript.  
Vous pourrez traiter votre input de type `submit` avec la fonction [event.preventDefault()](https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault) pour éviter le rechargement de la page (ou utiliser un button simple).  
Vous pourrez utiliser l'[API localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage) pour stocker des données entre les diffénretes pages de l'application.  

Chacun des développeurs du groupe héritera de sa part de travail, le plus équitablement réparti.  
Chacun devra créer sa branche de développement qu'il poussera sur le repo chaque soir.  
Les merges request finales se feront une branche après l'autre.  
Une convention de nommage des branches, commits, variables, constantes, noms de fichiers, fonctions, boutons, input, (…) sera établie et écrite au sein du fichier `readme.md` qui sera créé à la racine du projet.  
Tout ce qui n'est pas implémentable du fait de l'absence de base de données distante devra être **simulé**.  
Pour l'ajout d'éléments dans l'objet `bdd.json`, voici un exemple :  

```js
let allDemandes = data.categories.demandes;
let nouvelleDemande = {
    "id": 3,
    "nom": "Bieber",
    "mail": "bieber@gmail.com",
    "adresse": "35 impasse des acacias 67200 STRASBOURG",
    "telephone": "0671784521",
    "enfant": "Patricia",
    "nom-enfant": "Bieber",
    "date-demande": "18/04/2022",
    "regime": 1,
    "allergies": [],
    "rib-iban": "FR7641199110541234567890180"
}
allDemandes.push(nouvelleDemande);
```  

### **C. 3. Les livrables**

Vous devrez rendre un projet fonctionnel que je pourrai cloner de votre github et qui présentera l'architecture classique que vous connaissez.  
Tous les ajouts, suppressions et mises à jour de l'objet `bdd.json` devront faire l'objet d'un affichage via la console du navigateur.  

### **C. 4. Le Planning**

Vous devrez rendre votre projet sous la forme d'un **repo github** contenant une seule branche `main` ou `master`, au plus tard le 17 mai à 17h00.  
