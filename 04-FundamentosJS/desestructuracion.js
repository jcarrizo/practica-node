const Deadpool = {
  nombre: 'Wade',
  apellido: 'winston',
  poder: 'Regeneracion',
  getNombre() {
    return `${this.nombre}`
  }
}

// console.log(Deadpool.getNombre());

//Primera Forma

// const Nombre = Deadpool.nombre;
// const Apellido = Deadpool.apellido;
// const Poder = Deadpool.poder;

//Segunda Forma

const { nombre, apellido, poder } = Deadpool;

console.log(nombre, apellido, poder)

const Heroes = ['Deadpool', 'Superman', 'Batman']

// const [h1, h2, h3] = Heroes; // Muestra Todos

const [, , h3] = Heroes; // Selectivo

console.log(h3);