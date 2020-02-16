/**
* Scrivere qui il codice della funzione fattoriale(n)
**/
function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
