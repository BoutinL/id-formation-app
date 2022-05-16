
let tabl = document.createElement("table");
document.body.append(tabl);
let demandes = bdd.categories.demandes;

let firstElem = demandes[0];
for (const prop in firstElem) {
    let colHeader = document.createElement("th");
    colHeader.textContent = prop;
    tabl.appendChild(colHeader);
}

for( let i = 0; i <= demandes.length ; i++){
    let colHead = document.createElement("tr");
    tabl.appendChild(colHead);
    for (let value of Object.values(demandes[i])) {
        let cellule = document.createElement("td");
        let celluleText = document.createTextNode(value);
        cellule.appendChild(celluleText);
        colHead.appendChild(cellule);
    } 
}