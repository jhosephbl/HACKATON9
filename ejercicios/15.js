// Realice un algoritmo para determinar si una persona puede votar con base en
// su edad en las próximas elecciones


const edadActual = parseInt(prompt('ingresa tu edad actual'));

const edadMin = 18;
const edadMax = 90;


if(edadActual >= edadMin && edadActual <= edadMax){
    console.log('Si puede votar');
  }
  
  else if (edadActual < edadMin && edadActual >= 1){
      console.log('No puede votar');
  }

  else{
    console.log('Ingrese datos reales');
  }

