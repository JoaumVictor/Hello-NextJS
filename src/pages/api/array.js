const lista = new Set([]);
const listaInfo = () => Array.from(lista);

const dados1 = { name: "Victor", id: 1 };
const dados2 = { name: "Adson", id: 2 };
const dados3 = { name: "Vitor", id: 3 };
const dados4 = { name: "Victor", id: 4 };

lista.add(dados1);
lista.add(dados3);
lista.add(dados4);
lista.add(dados2);

console.log(listaInfo()[0]);
