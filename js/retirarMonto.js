// metodo cuando de clic en retirar
const retirarMonto = () => {
    // se obtiene el valor del monto a retirar
    const montoIngresado = parseFloat(document.getElementById("colFormLabelLg").value)
    // se trae el localStorage el saldo del usuario
    const saldoReal = parseFloat(localStorage.getItem("saldo"))
    // se hace el descuento del monto a retirar de la cuenta
    const nuevoSaldo = parseFloat(saldoReal - montoIngresado)
    // se obtiene el div mensaje
    const mensaje = document.getElementById("mensaje")
    // se comprueba que l motno a retirar no sea mayor al saldo en la cuenta
    if (montoIngresado < saldoReal) {
        // se comprueba si el nuevo saldo sea mayor a 10
        if (nuevoSaldo > 9) {
            // se elimina el valor ingresado en el input
            document.getElementById("colFormLabelLg").value = "";
            // se insertar el nuevo saldo en el localStorage
            localStorage.setItem("saldo", nuevoSaldo)
            // se crea la parte del html que mostrara los movimientos
            mensaje.innerHTML = `
            <div id="exito" class="alert alert-success" role="alert">
                <p class="text-center fw-semibold">Transacción exitosa</p>
                <p class="lh-1">Saldo anterior: <a class="alert-link">\$ ${saldoReal.toFixed(2)} </a></p>
                <p class="lh-1">Monto retirado: <a class="alert-link">\$ ${montoIngresado.toFixed(2)} </a></p>
                <hr class="lh-1">
                <p class="lh-1">NUEVO SALDO: <a class="alert-link">\$ ${nuevoSaldo.toFixed(2)} </a></p>
            </div>
            `;
        }
        // en caso que el nuevo saldo pueda ser menor a 10
        else {
            // se crea la parte del html que mostrara la advertencia
            mensaje.innerHTML = `
            <div class="alert alert-danger text-center" role="alert">
                Su cuenta no puede tener menos de <a class="alert-link">$ 10</a>. Intente de nuevo.
            </div>
            `;
        }
    } 
    // en caso de que el saldo a retirar sea mayor al de la cuenta
    else {
        // se crea la parte del html que mostrara la advertencia
        mensaje.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            No puede retirar un monto <a class="alert-link">mayor </a> al saldo que posee.
        </div>
        `;
    }
}


// Redireccionamiento a Consultar Saldo del usuario
const irConsultarSaldo = () => {
    window.location.href = "consultar-saldo.html"
}

// Redireccionamiento al Home del usuario
const irHome = () => {
    window.location.href = "home.html"
}

// Redireccionamiento a Ingresar Monto del usuario
const irIngresarMonto = () => {
    window.location.href = "ingresar-monto.html"
}

// Redireccionamiento a Retirar Saldo del usuario
const irRetirarMonto = () => {
    window.location.href = "retirar-monto.html"
}

// Redireccionamiento a Cerrar sesion del usuario
const cerrarSesion = () => {
    localStorage.clear();
}