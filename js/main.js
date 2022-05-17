/* ---------- Carga del documento HTML ---------- */
document.addEventListener("DOMContentLoaded", function () {
    crearIndex();
});

/* ---------- Datos de los usuarios registrados ---------- */
const usuarios = () => {
    const usuarios = [
        {
            id: 1,
            nombre: "Luisa",
            fechNac: "03 \- 05 \- 1999",
            edad: 23,
            sexo: "M",
            ciudad: "Minatitlán, Veracruz",
            pais: "México",
            saldo: 200,
            password: "Luisa123",
            perfil: ".\/img\/luisa\-profile.png"
        },
        {
            id: 2,
            nombre: "Josafat",
            fechNac: "26 \- 05 \- 2001",
            edad: 20,
            sexo: "H",
            ciudad: "Coatzacoalcos, Veracruz",
            pais: "México",
            saldo: 290,
            password: "Josafat123",
            perfil: ".\/img\/josafat\-profile.png"
        },
        {
            id: 3,
            nombre: "Pedro",
            fechNac: "22 \- 03 \- 2000",
            edad: 22,
            sexo: "H",
            ciudad: "Coatzacoalcos, Veracruz",
            pais: "México",
            saldo: 67,
            password: "Pedro123",
            perfil: ".\/img\/pedro\-profile.png"
        }
    ];
    return usuarios;
};

/* ---------- Creacion del html del index ---------- */
const crearIndex = () => {
    // Se traen los datos de los usuarios existentes
    const usuariosBanco = usuarios();
    // Se obtiene el elemnto padre
    const elementoPadre = document.getElementById("elementoPadre");
    // Ciclo del arreglo de usuarios para insertar en el html
    usuariosBanco.forEach((usuarios) => {
        const elementoHijo = document.createElement("div");
        elementoHijo.classList.add("card", "w-auto", "centrar", "p-3", "m-3", "btn-outline-light", "borde");
        elementoHijo.innerHTML = `
            <img src="${usuarios.perfil}" class="card-img-top tm-div" alt="${usuarios.nombre}">
            <div class="card-body">
              <h5 class="card-title text-center text-dark">${usuarios.nombre}</h5>
              <a href="#validacion" class="soyYo btn btn-info">Soy yo</a>
        </div>
        `;
        elementoPadre.appendChild(elementoHijo);
    });
    // Saber que usuario ha sido elegido
    escuchaUsuario();
};

const escuchaUsuario = () => {
    // Se obtiene el elemento padre
    const elementoPadre = document.getElementById("elementoPadre");
    // Se comprueba que elemento dentro del padre hizo el clic
    elementoPadre.addEventListener("click", function (e) {
        // Se crea un arreglo de las clases del elemento seleccionado
        const etiqueta = e.target.className.split(" ");
        // Se comprueba si el elemento seleccionado tiene como clase soyYo
        if (etiqueta[0] === "soyYo") {
            //Se obtiene el elemento padre del bton seleccionado
            const button = e.target.parentElement;
            //Se obtiene el nombre del usuario
            const nombreUsuario = button.children[0].innerHTML;
            // metodo para buscar los datos del usuario seleccionado
            obtencionPerfil(nombreUsuario);
        };
    });
};

const obtencionPerfil = (nombreUsuario) => {
    //Se obtienen demas atributos del usuario seleccionado
    const usuariosBanco = usuarios();
    // se busca a que usuario en el objeto usuarios pertence el nombre
    usuariosBanco.forEach((usuarios) => {
        if (nombreUsuario === usuarios.nombre) {
            // se crea un objeto en donde se guardan los datos del usuario seleccionado
            const objetoUsuario = {
                id: usuarios.id,
                nombre: usuarios.nombre,
                fechNac: usuarios.fechNac,
                edad: usuarios.edad,
                sexo: usuarios.sexo,
                ciudad: usuarios.ciudad,
                pais: usuarios.pais,
                saldo: usuarios.saldo,
                password: usuarios.password,
                perfil: usuarios.perfil
            }
            // se mandar los datos al metodo ingresarpassword
            ingresarPassword(objetoUsuario);
        }
    });
}
const ingresarPassword = (usuario) => {

    // Se obtiene el elementoPadre
    const elementoPadre = document.getElementById("validacion");

    // Se dirige al div validacionUsuario
    const cajaVali = document.getElementById("validacionUsuario");

    // Se le asignan clases al elementoPadre
    elementoPadre.classList.add("mb-3", "p-3", "bg-light", "text-dark", "shadow", "p-3", "mb-5", "bg-body", "rounded", "w-75", "h-75")

    // se crea y redirecciona a donde el usuario ingresara la contraseña
    cajaVali.innerHTML = `
        <h2 class="text-center">Ingrese su contraseña</h2>
        <div class="centrar centrado">
            <div class="d-flex flex-column tm-img40">
                <img src="${usuario.perfil}" class="w-auto" alt="...">
            </div>
            <div id="validacionUsuario" class="tm-div60 container d-flex flex-column bg-white g-col-4">
                <div class="form-floating m-3">
                    <input type="text" class="form-control" id="floatingInput" value="${usuario.nombre}"
                        readonly="readonly">
                    <label for="floatingInput">Nombre del cliente</label>
                </div>
                <div id="pass" class="form-floating m-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña" required>
                    <label for="floatingPassword">Contraseña</label>
                </div>
                <div id="msjPass"></div>
                <div id="btnIngresarCuenta" class="m-3">
                    <button type="button" id="ingresarCuenta" class="btn btn-warning centrar p-2">
                    <div id="msjCarga">Ingresar</div> 
                    </button>
              </div>
            </div>
        </div>
        `;
    elementoPadre.appendChild(cajaVali);

    // Acciones cuando den clic en el boton Ingresar
    const btnIngresar = document.getElementById("ingresarCuenta");

    btnIngresar.addEventListener("click", function (ev) {
        // se obtiene el valor de lo que el usuario ingreso como contraseña
        const cajaPassword = document.getElementById("floatingPassword").value;
        // se comprueba que la contraseña ingresada no sea vacia
        if (!cajaPassword.trim()) {
            const passInvalida = document.getElementById("floatingPassword")
            passInvalida.classList.add("is-invalid")
            const msjVacio = document.getElementById("msjPass")
            msjVacio.innerHTML = `
            <div class="alert alert-danger d-flex align-items-center mx-3 my-1 p-2" role="alert">
                <svg class="bi flex-shrink-0" width="10" height="10" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <div>
                    Contraseña vacía
                </div>
            </div>
            `;
            escribiendo()
        } else {
            // se comprueban que la ingresada y la registrada sean la misma
            if (cajaPassword.trim() === usuario.password) {
                const ingresando = document.getElementById("msjCarga")
                ingresando.classList.add("centrar")
                ingresando.innerHTML = `
                    <span class="spinner-border spinner-border-sm text-light" style="width: 1.5rem; height: 1.5rem;" role="status" aria-hidden="true"></span>
                    <div class="mx-1"></div>Ingresando...
                `;
                setTimeout(function () {
                    window.location.href = "home.html"
                    localStorage.setItem("id", usuario.id);
                    localStorage.setItem("nombre", usuario.nombre);
                    localStorage.setItem("fechaNac", usuario.fechNac);
                    localStorage.setItem("edad", usuario.edad);
                    localStorage.setItem("sexo", usuario.sexo);
                    localStorage.setItem("ciudad", usuario.ciudad);
                    localStorage.setItem("pais", usuario.pais);
                    localStorage.setItem("saldo", usuario.saldo);
                    localStorage.setItem("perfil", usuario.perfil);
                }, 1300);

            }
            // en caso de que las contraseñas no sean iguales
            else {
                const passInvalida = document.getElementById("floatingPassword")
                passInvalida.classList.add("is-invalid")
                const msjIncorrecto = document.getElementById("msjPass")
                msjIncorrecto.innerHTML = `
                <div class="alert alert-danger d-flex align-items-center mx-3 my-1 p-2" role="alert">
                    <svg class="bi flex-shrink-0" width="10" height="10" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <div>
                        Contraseña incorrecta
                    </div>
                </div>
                `;
            }
        }
    });
};

// el usuario escribe despues del mensaje de que la contraseña es vacia
const escribiendo = () => {
    const cajaPassword = document.getElementById("floatingPassword")
    cajaPassword.addEventListener('keypress', () => {
        cajaPassword.classList.remove("is-invalid")
        cajaPassword.classList.add("is-valid")
        const msj = document.getElementById("msjPass")
        msj.innerHTML = ``;
    })
}
