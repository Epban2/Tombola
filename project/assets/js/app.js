let righe = 9;
let colonne = 10;
let estratti = [];

//creo l'attributo per la tabella
let div1 = document.getElementById('div1');
let tabella = document.createElement("table");
div1.appendChild(tabella);

function DisegnaTabella() {
    var i = 1;
    //generazione della tabella
    for (var r = 0; r < righe; r++) {
        let row = tabella.rows[r];
        if (!row) { //controlla se la riga e' gia' esistente, altrimenti la crea
            row = tabella.insertRow(r);
        }

        for (var c = 0; c < colonne; c++, i++) {
            let cell = row.cells[c]; //stessa cosa delle righe 
            if (!cell) {
                cell = row.insertCell(c);
            }
            //terminata la generazione

            let cellText = null;
            if (estratti.includes(i)) {
                cellText = document.createTextNode(i); //se i e' presente nei numeri generati, lo stmpa
            } else {
                cellText = document.createTextNode(""); //altrimenti stampa vuoto ""
            }

            //sostituzione vera e propria
            while (cell.firstChild) {
                cell.removeChild(cell.firstChild);
            }

            cell.appendChild(cellText); //numero generato
        }
    }
}

DisegnaTabella();

function Estrai() {
    if (estratti.length >= righe * colonne) {
        alert("Tutti i numeri sono stati estratti!");
        return;
    }

    let numeroCasuale;
    do {
        numeroCasuale = Math.floor(Math.random() * 90) + 1;
    } while (estratti.includes(numeroCasuale)); //ripete la generazione finche' non trova il numero corretto

    estratti.push(numeroCasuale);
    DisegnaTabella(); //richiama il metodo di generazione
}
