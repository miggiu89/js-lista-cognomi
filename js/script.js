//fare la lista dei cognomi
// creare prompt per chiedere all'utonto il cognome
// inserirlo nella lista cognomi (array)
//stampare la lista ordinata alfabeticamente
// scrivi la posizione umana (partendo da 1 e non da 0 come prevede l'array)

//lista dei cognomi 

var listaCognomi = [
  'Bianci',
  'Rossi',
  'Duzioni',
  'Balsamo',
  'Verdini',
]

//chiedere all'utonto di inserire il suo cognome

var cognomeInserito = prompt ('inserisci il tuo cognome');

//lo inserisco nella lista dei cognomi
listaCognomi.push(cognomeInserito);

// stampo i cognomi
document.getElementById('lista-cognomi').innerHTML += listaCognomi;

// aggiungo pulsante per metterli in ordine alfabetico
var pulsanteProva = document.getElementById('prova');
pulsanteProva.addEventListener('click',
function() {
  document.getElementById('lista-ordinata').innerHTML += listaCognomi.sort();

  // indico la posizione umana del cognome inserito dall'utente
for (var i = 0; i < listaCognomi.length; i++) {
  if (cognomeInserito == listaCognomi[i]) {
    document.getElementById('cognome-utente').innerHTML += ++i + ' di';
    document.getElementById('totalecognomi').innerHTML = listaCognomi.length + ' cognomi!';
  }
}
});
