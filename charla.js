const mapa = L.map('map').setView([-34.52293382299685, -58.70052051955064], 13)

//cargamos el fondo del mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapa);






let charlas = [
    {
        nombre: "Guia primeriza para ser Autoridad de Mesa",
        tema: "Tareas de autoridad de mesa: antes, durante, y despues",
        fecha: "Miercoles 15 de octubre de 2026",
        horario: "15:00hs a 17:00hs",
        sede: "Institulo Educativo N°31",
        direccion: "Juan Maria gutierres  1150, Polvorines",
        latitud: -34.52413744014083,
        longitud: -58.70412188092948
    },
    {
        nombre: "Contar bien, registrar mejor, el cierre de mesa",
        tema: "escrutinio de votos, completado del acta  de cierre  y entrega de la urna",
        fecha: "Viernes 17 de octubre de 2026",
        horario: "11:00hs a 13:00hs",
        sede: "Instituto Manuel Belgrano",
        direccion: "contitucion 3848, Jose C. Paz",
        latitud: -34.53618081104696,
        longitud: -58.745674900498784
    },
    {
        nombre: "Dudas en la mesa: casos reales y como resolverlos",
        tema: "derecho y obligaciones del autoridad de mesa, y resolucion de conflictos",
        fecha: "Lunes 1 de noviembre de 2026",
        horario: "15:00hs a 17:00hs",
        sede: "Escuela Manuel Belgrano",
        direccion: "san miguel",
        latitud: -34.52131618214875,
        longitud: -58.70991897996137
    }
];

//traemos el div de charlas del html o guardamos el Div
let lista = document.getElementById("lista-charlas");



//recorremos la lista de charlas
for (let i = 0; i < charlas.length; i++) {
    //escribimos en el div
    lista.innerHTML +=
        "<div class= 'charla'>" +
        "<h3>" + charlas[i].nombre + "</h3>" +
        "<p>" + charlas[i].tema + "</p>" +
        "<p>" + charlas[i].fecha + "</p>" +
        "<p>" + charlas[i].horario + "</p>" +
        "<p>" + charlas[i].sede + "</p>" +
        "<p>" + charlas[i].direccion + "</p>" +
        "</div>"
}

//nos guardamos el input del usuario
let buscador = document.getElementById("buscador");

buscador.addEventListener("input", function () {
    let texto = buscador.value;

    let resultado = charlas.filter(function (charla) {
        return charla.direccion.toLowerCase().includes(texto.toLowerCase()) ||
            charla.nombre.toLowerCase().includes(texto.toLowerCase());
    });
    //si mi resultado tiene elementos
    if (resultado.length > 0) {
        lista.innerHTML = "";
        for (let i = 0; i < resultado.length; i++) {
            //creamos nuevas tarjetas
            lista.innerHTML +=
                "<div class='charla'>" +
                "<h3>" + resultado[i].nombre + "</h3>" +
                "<p>" + resultado[i].tema + "</p>" +
                "<p>" + resultado[i].fecha + "</p>" +
                "<p>" + resultado[i].horario + "</p>" +
                "<p>" + resultado[i].sede + "</p>" +
                "<p>" + resultado[i].direccion + "</p>" +
                "</div>"
        }
    }else{
        lista.innerHTML = "No hay resultado para tu busqueda";
    }

});
