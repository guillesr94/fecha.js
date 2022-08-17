// - La fecha de hoy
let fechaHoy = new Date(2022,7,16);
fechaHoy.getDate();
console.log(fechaHoy);

// - La fecha de tu nacimiento

let birthday = new Date(1994,2,7);
console.log(`Mi cumple es ${birthday}`);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let comparar = birthday < fechaHoy;
console.log(comparar)

// - Una variable que contenga el día de tu nacimiento
let dia = birthday.getDay();
let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
console.log(semana[dia])

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mes = birthday.getMonth()
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
console.log(meses[mes])

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let nacimiento = new Date("1994/02/07").toLocaleDateString()
console.log(nacimiento)