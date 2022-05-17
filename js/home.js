document.addEventListener("DOMContentLoaded", function () {
    crearHome();
});

const crearHome = () => {
    //Se busca el elemento padre
    const elementoPadre = document.getElementById("workSpace");
    //Se busca el div que se va a remover
    const divRemover = document.getElementById("perfilUsuario");
    //Se remueve
    elementoPadre.removeChild(divRemover);
    //Se crea el nuevo elemento hijo
    const elementoHijo = document.createElement("div");
    //Se le dan atributos al elemento hijo
    elementoHijo.setAttribute("id", "perfilUsuario")
    //Se traen los datos necesarios del localStorage
    const nombre = localStorage.getItem("nombre")
    const id = localStorage.getItem("id")
    const fechaNac = localStorage.getItem("fechaNac")
    const edad = localStorage.getItem("edad")
    const sexo = localStorage.getItem("sexo")
    const ciudad = localStorage.getItem("ciudad")
    const pais = localStorage.getItem("pais")
    const perfil = localStorage.getItem("perfil")
    //Se crea el html
    elementoHijo.innerHTML = `
            <div class="d-flex justify-content-center">
                <h1>Bienvenido</h1>
            </div>
            <div class="d-flex justify-content-between">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Perfil</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Nombre</th>
                            <td>${nombre}</td>
                        </tr>
                        <tr>
                            <th scope="row">ID</th>
                            <td>${id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Fecha de nacimiento</th>
                            <td colspan="2">${fechaNac}</td>
                        </tr>
                        <tr>
                            <th scope="row">Edad</th>
                            <td colspan="2">${edad}</td>
                        </tr>
                        <tr>
                            <th scope="row">Sexo</th>
                            <td colspan="2">${sexo}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ciudad</th>
                            <td colspan="2">${ciudad}</td>
                        </tr>
                        <tr>
                            <th scope="row">País</th>
                            <td colspan="2">${pais}</td>
                        </tr>
                    </tbody>
                </table>
                <div id="fotoUsuario" class="">
                    <div class="d-flex flex-column">
                        <img src="${perfil}" class="" alt="...">
                    </div>
                </div>
            </div>
    `;
    elementoPadre.appendChild(elementoHijo);
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