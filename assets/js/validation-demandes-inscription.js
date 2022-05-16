let tabl = document.createElement("table");
document.body.append(tabl);
let demandes = bdd.categories.demandes;

let firstElem = demandes[0];
for (const prop in firstElem) {
    let colHeader = document.createElement("th");
    colHeader.textContent = prop;
    tabl.appendChild(colHeader);
}

for (let j = 1 ; j <= demandes.length; j++) {
    let colHead = document.createElement("tr");
    tabl.appendChild(colHead);
    for (let tableau in demandes) { 
        let tableauBis = demandes[tableau];
        for (let object in tableauBis) {
            const half = Math.ceil(demandes.length / 2); 
            const firstHalf = demandes.splice(0, half);
            const secondHalf = demandes.splice(-half);
            let cellule = document.createElement("td");
            let celluleText = document.createTextNode(tableauBis[object]);
            cellule.appendChild(celluleText);
            colHead.appendChild(cellule);
        }
    }	
}
