const lista = new Map();
const listaInfo = () => Array.from(lista);

const newUser1 = { name: "Victor", username: "Bescoito", id: 1406 };
const newUser2 = { name: "Jaime", username: "Jaiminho", id: 1005 };

lista.set(newUser1.username, newUser1);
lista.set(newUser2.username, newUser2);
lista.set(newUser1.username, newUser1);

// console.log(listaInfo());
// [
//   [ 'Bescoito', { name: 'Victor', username: 'Bescoito', id: 1406 } ],
//   [ 'Jaiminho', { name: 'Jaime', username: 'Jaiminho', id: 1005 } ]
// ]

console.log(listaInfo()[0][0]);
