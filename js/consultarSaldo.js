document.addEventListener("DOMContentLoaded", function () {
    barra()
});

// animacion de la barra de progreso
const barra = () => {
    const barraProgreso = document.getElementById("barraProgreso");
    setTimeout(function () {
        barraProgreso.setAttribute('style', 'width:10%;');
        setTimeout(function () {
            barraProgreso.setAttribute('style', 'width:30%;');
            setTimeout(function () {
                barraProgreso.setAttribute('style', 'width:70%;');
                setTimeout(function () {
                    barraProgreso.setAttribute('style', 'width:100%;');
                    setTimeout(function () {
                        // una vez cragada por completo se muestra el saldo
                        mostrarSaldo();
                    }, 900);
                }, 800);
            }, 700);
        }, 600);
    }, 500);
}

const mostrarSaldo = () => {
    // se oculta la barra de progreso
    const barraProgreso = document.getElementById("divProgress");
    barraProgreso.classList.add("noVer")

    //Se traen los datos necesarios del localStorage
    const saldoU = localStorage.getItem("saldo")

    // se agrega el saldo al input
    const saldoUsuario=document.getElementById("colFormLabelLg");
    saldoUsuario.setAttribute("placeholder", `\$ ${saldoU}`)

    // se meustra el input
    const saldo = document.getElementById("divSaldo");
    saldo.classList.remove("noVer")
    saldo.classList.add("ver")

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

