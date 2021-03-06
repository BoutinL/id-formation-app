const bdd = {
    "categories": {
        "utilisateurs": [{
                "id": 0,
                "pseudo": "admin",
                "motdepasse": "admin",
                "mail": "admin@id-formation.fr"
            },
            {
                "id": 10,
                "pseudo": "dujardin",
                "motdepasse": "parent",
                "nom": "Dujardin",
                "mail": "dujardin@gmail.com",
                "adresse": "2C rue des fleurs 67100 STRASBOURG",
                "telephone": "0670784521",
                "idEnfantInscrits": [1, 2],
                "ribIban": "FR7611315000011234567890138"
            },
            {
                "id": 30,
                "pseudo": "gentil",
                "motdepasse": "parent",
                "nom": "Gentil",
                "mail": "gentil@gmail.com",
                "adresse": "8 avenue du général de Gaule 67200 STRASBOURG",
                "telephone": "0769562314",
                "idEnfantInscrits": [3],
                "ribIban": "FR7630002032531234567890168"
            },
            {
                "id": 40,
                "pseudo": "seleste",
                "motdepasse": "parent",
                "nom": "Seleste",
                "adresse": "138 boulevard de la libération 67100 STRASBOURG",
                "telephone": "0661678743",
                "mail": "seleste@gmail.com",
                "idEnfantInscrits": [4],
                "ribIban": "FR7630056009271234567890182"
            },
            {
                "id": 50,
                "pseudo": "brochart",
                "motdepasse": "parent",
                "nom": "Brochart",
                "mail": "brochart@gmail.com",
                "adresse": "12 avenue des Vosges 67000 STRASBOURG",
                "telephone": "0665996116",
                "idEnfantInscrits": [5],
                "ribIban": "FR7611808009101234567890147"
            },
            {
                "id": 60,
                "pseudo": "pignon",
                "motdepasse": "parent",
                "nom": "Pignon",
                "mail": "pignon@gmail.com",
                "adresse": "39 rue du faubourg Saint-honoré 67000 STRASBOURG",
                "telephone": "0763231257",
                "idEnfantInscrits": [6],
                "ribIban": "FR7614410000011234567890163"
            },
            {
                "id": 70,
                "pseudo": "ameziane",
                "motdepasse": "parent",
                "nom": "Ameziane",
                "mail": "ameziane@gmail.com",
                "adresse": "49 impasse du clos 67200 STRASBOURG",
                "telephone": "0762132349",
                "idEnfantInscrits": [7],
                "ribIban": "FR7642559000011234567890121"
            }
        ],
        "eleves": [{
                "id": 1,
                "nom": "Dujardin",
                "prenom": "Jean",
                "dateNaissance": "19/05/2009",
                "regime": 1,
                "dateInscription": "01/09/2021",
                "id Parent": 10
            },
            {
                "id": 2,
                "nom": "Dujardin",
                "prenom": "Pierre",
                "dateNaissance": "03/09/2007",
                "regime": 1,
                "dateInscription": "01/09/2020",
                "idParent": 10
            },
            {
                "id": 3,
                "nom": "Gentil",
                "prenom": "Benoit",
                "dateNaissance": "24/03/2004",
                "regime": 2,
                "dateInscription": "01/09/2019",
                "idParent": 30
            },
            {
                "id": 4,
                "nom": "Boudier",
                "prenom": "Amélie",
                "dateNaissance": "01/05/2004",
                "regime": 1,
                "dateInscription": "02/09/2018",
                "idParent": 40
            },
            {
                "id": 5,
                "nom": "Brochart",
                "prenom": "Céline",
                "dateNaissance": "15/10/2000",
                "regime": 1,
                "dateInscription": "4/09/2014",
                "idParent": 50
            },
            {
                "id": 6,
                "nom": "Pignon",
                "prenom": "Pierre",
                "dateNaissance": "5/08/2001",
                "regime": 2,
                "dateInscription": "4/09/2015",
                "idParent": 60
            },
            {
                "id": 7,
                "nom": "Ameziane",
                "prenom": "Selim",
                "dateNaissance": "02/02/2002",
                "regime": 1,
                "dateInscription": "02/09/2016",
                "idParent": 70
            }
        ],
        "demandes": [{
                "id": 1,
                "nom": "Lepouillu",
                "mail": "lepouillu@gmail.com",
                "adresse": "35 impasse des acacias 67200 STRASBOURG",
                "telephone": "0670784521",
                "enfant": "Elisabeth",
                "nom-enfant": "Lepouillu",
                "date-demande": "18/04/2022",
                "regime": 1,
                "allergies": [],
                "ribIban": "FR7630003035409876543210925"
            },
            {
                "id": 2,
                "nom": "Haroufane",
                "mail": "haroufane@gmail.com",
                "adresse": "3 rue des boucaniers 67100 STRASBOURG",
                "telephone": "0668339961",
                "enfant": "Sofia",
                "nom-enfant": "Haroufane",
                "date-demande": "07/06/2022",
                "regime": 2,
                "allergies": ["lait", "arachide"],
                "ribIban": "FR7620041010169876543210921"
            }
        ],
        "retards": [{
                "id": 1,
                "idParent": 30,
                "montant": 94.75
            },
            {
                "id": 2,
                "idParent": 60,
                "montant": 35.00
            }
        ]
    }
}

let link = document.createElement("a");

let users = bdd.categories.utilisateurs;
let link = document.createElement("a");

let users = bdd.categories.utilisateurs;
let categories = bdd.categories;
let firstElem = users[0];
let pseudoAdmin = users[0].pseudo;

for (const prop in firstElem) {
    let firstValue = prop;
    document.getElementById("connexion").submit("click");
    link.innerHtml = "<span>Valider</span>";
    connexion.addEventListener("submit", preventDefault);
    if (pseudoAdmin === "admin") {
        location.href = "accueil-admin.html";
    } else {
        addEventListener("submit", preventDefault)
        location.href = "accueil-parent.html";
        link.innerHtml = "<span>Valider</span>";
    }
}
let btnSubmit = getElementById("connexion");
btnSubmit.addEventListener("click", e => {
    e.btnSubmit("submit");
})
let monInputPseudo = document.getElementbyId("pseudo");
console.log(monInputPseudo.value);
for (let allPseudo in users) {
    if (allPseudo === pseudoAdmin && getElementbyId("pseudo") === "admin") {
        injecte header admin
        else 
    }
}

// attendre clique du bouton submit
// récuperer la value dans l'input pseudo
// boucler sur la bdd pour trouver si le pseudo existe
// si le pseudo est trouvé, tester si c'est admin ou pas
// selon le résultat > connexion admin/parent ou pas