const obj = {
    nombre: 'Juan',
    apellido: 'Castro',
    req: {
        dato: 'valor'
    }
}

function nombre({ nombre }) {
    console.log(nombre)
}

nombre(obj)