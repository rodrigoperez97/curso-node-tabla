const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, x) => {
    let salida = '';

    for (let i = 1; i < x+1; i++) {
        salida += (`${base} x ${i} = ${base * i}\n`);

    }


    fs.writeFileSync(`tabla-${base}.txt`, salida);

    if(listar) {

        console.log(`Tabla del:` ,colors.green(base));

        for (let i = 1; i < x+1; i++) {
            
            console.log(`${base} x ${i} = ${base+i} `);
            
        }
    }
    
    return 'Tabla creada';
}

module.exports = {
    crearArchivo
}