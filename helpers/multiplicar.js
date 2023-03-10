const fs = require('node:fs');
const colors = require('colors');

const crearArchivo = async ( base=5, l = false, h=10) => {

    try{
        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= h; i++) {
            salida += `${base} X ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if (l) {
            console.log('============'.green);
            console.log(`Tabla del ${colors.blue(base)}`);
            console.log('============'.green);

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`);

    }catch(error){
        throw error;
    }


}

module.exports = {
    crearArchivo,
}