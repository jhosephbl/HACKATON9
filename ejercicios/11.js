// Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un
// año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5
// años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo
// y represéntelo ,que permita determinar el bono que recibirá un trabajador

const anio1 = 1;
const anio2 = 2;
const anio3 = 3;
const anio4 = 4;
const anio5 = 5;
const anio10 = 10;

let trabajador;

trabajador = parseInt(prompt('Ingresa tus anios de trabajo'))




if(trabajador == anio1){
      console.log('El trabajador recibira $' + 100);
    }
    
    else if (trabajador == anio2){
        console.log('El trabajador recibira $' + 200);
    }

    else if (trabajador == anio3){
        console.log('El trabajador recibira $' + 300);
    }

    else if (trabajador == anio4){
        console.log('El trabajador recibira $' + 400);
    }

    else if (trabajador == anio5){
        console.log('El trabajador recibira $' + 500);
    }

    else if (trabajador > anio5 && trabajador <= anio10){
        console.log('El trabajador recibira $' + 1000);
    }
    
    else {
      console.log('Ingrese datos correctamente');
    }
    