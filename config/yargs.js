const opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        default: true,
        alias: 'c'
    }
}

const argv = (require('yargs')
    .command('crear', 'Crea el un elemento por hacer', opts)
    .command('actualizar', 'Actualizar el estado completado de una tarea', opts)
    .command('borrar', 'Borra un elemento si existe', opts)
    .help()
    .argv);

module.exports = {
    argv
}