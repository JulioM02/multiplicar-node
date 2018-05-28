const fs = require('fs');
const color = require('colors');
let producto = null;
let data = ''
let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        for (let i = 1; i <= 10; i++) {
            producto = i * base;
            data = data + `${base} x ${i} = ${producto}\n`;
        }
        if (!Number(base)) {
            reject('No es un numero')
            return;
        }

        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}.txt`)
        })
    })
}

let tabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            producto = i * base;
            data = data + `${base} x ${i} = ${producto}\n`;
        }
        if (!Number(base)) {
            reject('base No es un numero')
            return;
        }
        if (!Number(limite)) {
            reject('limite No es un numero')
            return;
        }

        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}.txt`)
        })

    })
}
module.exports = { crearArchivo, tabla }