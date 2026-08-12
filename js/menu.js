/* =========================================================
   MENÚ HAMBURGUESA
========================================================= */

const menu = document.querySelector(".nav__menu");
const menuLista = document.querySelector(".nav__link--menu");
const cerrarMenu = document.querySelector(".nav__close");
const linksMenu = document.querySelectorAll(".hero .nav__links");


/* ABRIR MENÚ */

menu.addEventListener("click", () => {

    menuLista.classList.add("nav__link--show");

    document.body.classList.add("menu-abierto");

});


/* CERRAR CON LA X */

cerrarMenu.addEventListener("click", () => {

    menuLista.classList.remove("nav__link--show");

    document.body.classList.remove("menu-abierto");

});


/* CERRAR AL TOCAR UNA OPCIÓN */

linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        menuLista.classList.remove("nav__link--show");

        document.body.classList.remove("menu-abierto");

    });

});


/* =========================================================
   SECCIÓN ACTIVA DEL MENÚ
========================================================= */

const seccionesMenu = [];

linksMenu.forEach((link) => {

    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) {
        return;
    }

    const seccion = document.querySelector(href);

    if (seccion) {

        seccionesMenu.push({
            id: href,
            element: seccion
        });

    }

});


function actualizarMenuActivo() {

    const posicionActual = window.scrollY + 160;

    let seccionActiva = "#inicio";


    seccionesMenu.forEach((seccion) => {

        const inicio = seccion.element.offsetTop;

        const final =
            inicio + seccion.element.offsetHeight;


        if (
            posicionActual >= inicio &&
            posicionActual < final
        ) {

            seccionActiva = seccion.id;

        }

    });


    linksMenu.forEach((link) => {

        link.classList.remove("active");

    });


    const activo = document.querySelector(
        `.hero .nav__links[href="${seccionActiva}"]`
    );


    if (activo) {

        activo.classList.add("active");

    }

}


window.addEventListener(
    "scroll",
    actualizarMenuActivo
);


actualizarMenuActivo();