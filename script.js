function guardarDato() {
    // Capturando Variables
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;

    // Generando un avatar único
    var avatarURL = 'http://api.adorable.io/avatars/80/' + email + '.png';
    var datos = {
        'movil': movil,
        'email': email,
        'avatarURL': avatarURL
    };

    // Almacenando los datos
    localStorage.setItem(nombre, JSON.stringify(datos));

    // Borrando los datos
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";

    // Actualizando la lista
    actualizarDatos();
}

function recuperarDato() {
    // Capturando el nombre
    var nombre = document.getElementById("nombre").value;

    // Parseando los datos
    var datos = localStorage.getItem(nombre);
    datos = JSON.parse(datos);

    // Incluyendo los datos en el HTML
    document.getElementById("movil").value = datos.movil;
    document.getElementById("email").value = datos.email;
}

function eliminarDato() {
    // Capturando el nombre
    var nombre = document.getElementById("nombre").value;

    // Borrando el dato
    localStorage.removeItem(nombre);

    // Actualizando la lista
    actualizarDatos();
}

function eliminarTodo() {
    // Borrando todos los datos
    localStorage.clear();

    // Actualizando la lista
    actualizarDatos();
}

function actualizarDatos() {
    var elementos = "";

    // Verificando si existen datos
    if (localStorage.length === 0) {
        elementos += '<div class="panel panel-default"><div class="panel-body">Vacío</div></div>';
    } else {
        // Enriqueciendo "elementos" con cada par de valores almacenados
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);

            // Parseando los datos
            var datos = localStorage.getItem(key);
            datos = JSON.parse(datos);

            // Enriqueciendo los datos con HTML
            elementos += '<div class="panel panel-default"><div class="panel-body">';
            elementos += '<div class="col-xs-3">';
            elementos += '<img src="' + datos.avatarURL + '">';
            elementos += '</div><div class="col-xs-9">';
            elementos += '<p><b>' + key + '</b></p>';
            elementos += '<a href="tel:+34' + datos.movil + '"><p><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> ' + datos.movil + '</p></a>';
            elementos += '<a href="mailto:' + datos.email + '"><p><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> ' + datos.email + '</p></a>';
            elementos += '</div></div></div>';
        }
    }
    // Actualizando "#contactos" con los "elementos" previamente enriquecidos
    document.getElementById('contactos').innerHTML = elementos;
}
