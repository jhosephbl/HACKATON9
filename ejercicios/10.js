// Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la
// edad de la persona de menor edad


const nombre1 = 'Diego ';
const edad1 = 20;

const nombre2 = 'Jose ';
const edad2 = 10;

const nombre3 = 'Carlos ';
const edad3 = 45;


if(edad1 <= edad2 & edad3){
      console.log(nombre1 + edad1 + ' Anios');
    }
    
    else if (edad2 <= edad1 & edad3){
        console.log(nombre2 + edad2 + ' Anios');
    }

    else if (edad3 <= edad1 & edad2){
        console.log(nombre3 + edad3 + ' Anios');
    }
    
    else {
      console.log('Ingrese datos correctamente');
    }
    