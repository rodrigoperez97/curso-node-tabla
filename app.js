const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

console.log(argv);

console.log('base: yargs', argv.base);


/* const [, , arg3 = 3] = process.argv;

const [, base=5] = arg3.split('=');

console.log(base); */

 crearArchivo(argv.b, argv.l, argv.x)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)); 



































/*La clase es de horaI = 9 a horaF = 12 nClase vale el numero de la clase (2614)

for (let = 0; < array.length;++) {
    for (e 6 To 21) { e=10 - 11am
        /*     if (horaI = e and horaF = e+1){
                f&e = nClase;
        
                next;
                
            } 
        
            if(horaI = e){
                f&e = nClase;
            }
        
            if(horaF != e+1){
                f&e = nClase;
            }
        
            if(horaF != e+2){
                f&e = nClase;
            }
        
            if(horaF = e) {
                f&e = nClase;
            }
            
        }
    
} 





const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const horaInicial = 3;

const horaFinal = 7;

for (let i = 0; i < arr.length; i++) {

    if ((arr[i] === horaInicial) && arr[i] === horaFinal) {
        console.log('Clase');

        return;
    }

    if(arr[i] === horaInicial){
        console.log('332614');

        i++;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < horaFinal ) {
                console.log('332614');
            }
        }
    }
    
} */