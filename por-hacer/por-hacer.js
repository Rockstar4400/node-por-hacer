const fs = require('fs');

let listadoPorhacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
        console.log('The file has been saved!');
    });

}

const cargarDB = () => {

    try {
        listadoPorhacer = require('../db/data.json');

    } catch (error) {
        listadoPorhacer = [];
    }
}



const crear = (descripcion) => {

    cargarDB();

    let porhacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push(porhacer)

    guardarDB();

    return porhacer;

}

const getListado = () => {

    cargarDB();

    return listadoPorhacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion)


    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorhacer.filter(tarea => tarea.descripcion !== descripcion)

    if (listadoPorhacer.length === nuevoListado.length) {
        return false;
    } else {

        listadoPorhacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}