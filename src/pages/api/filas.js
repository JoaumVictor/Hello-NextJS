// classes são funções predefinidas

class Fila {
  constructor() {
    this.elementos = [];
  }

  bota(elemento) {
    this.elementos.push(elemento);
    return this.elementos;
  }

  tira() {
    this.elementos.shift();
    return this.elementos;
  }
}

const fila = new Fila();

fila.bota("fire");
fila.bota("water");
fila.bota("rock");
fila.bota("air");
fila.tira();

console.log(fila);
