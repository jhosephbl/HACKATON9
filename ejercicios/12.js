// Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual
// durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido
// en cada uno de los 6 años? Realice el algoritmo y representan la solución,
// utilizando el ciclo apropiado



const salario = 1500;

console.log('Salario inicial ' + salario);

const anioInc = 0.1


primerAnio = salario + (salario * anioInc);
console.log('El primer anio recibe $' + primerAnio);

segundoAnio = primerAnio + (primerAnio * anioInc);
console.log( 'El segundo anio recibe $' + segundoAnio);

tercerAnio = segundoAnio + (segundoAnio * anioInc);
console.log('El tercer anio recibe $' + tercerAnio);

cuartoAnio = tercerAnio + (tercerAnio * anioInc);
console.log('El cuarto anio recibe $' + cuartoAnio);

quintoAnio = cuartoAnio + (cuartoAnio * anioInc);
console.log('El quinto anio recibe $' + quintoAnio);

sextoAnio = quintoAnio  + (quintoAnio  * anioInc);
console.log('Al cabo de 6 anios su salario es $' + sextoAnio);