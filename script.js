


const places = {

    farol: {
        title: "O Farol",

        text: "O Farol simboliza nossa proposta: iluminar caminhos para que cada pessoa explore e conecte conhecimentos. Comece sua jornada pela Nova Alexandria.",

        target: "#explorar",

        label: "Iniciar exploração →"
    },

    academia: {
        title: "A Academia — Ágora",

        text: "Entre na Ágora, a praça de descoberta da Nova Alexandria. Encontre assuntos, ideias, pessoas e novas perguntas para sua jornada.",

        target: "#agora",

        label: "Conhecer a Ágora →"
    },

    globo: {
        title: "O Globo — Atlas",

        text: "O Atlas é o lugar de explorar conexões entre conhecimentos. Futuramente, a Teia do Tempo permitirá navegar entre épocas e assuntos relacionados.",

        target: "#atlas",

        label: "Conhecer o Atlas →"
    }

};



const dialog = document.querySelector("#placeDialog");

const title = document.querySelector("#dialogTitle");

const description = document.querySelector("#dialogText");

const dialogLink = document.querySelector("#dialogLink");

const closeDialog = document.querySelector("#closeDialog");



function showPlace(place) {

    if (!place || !dialog) {
        return;
    }

    title.textContent = place.title;

    description.textContent = place.text;

    dialogLink.href = place.target;

    dialogLink.textContent = place.label;

    if (!dialog.open) {
        dialog.showModal();
    }

}



document.querySelectorAll("[data-place]").forEach((button) => {

    button.addEventListener("click", () => {

        const place = places[button.dataset.place];

        showPlace(place);

    });

});



function hideDialog() {

    if (dialog && dialog.open) {
        dialog.close();
    }

}



closeDialog?.addEventListener("click", hideDialog);



dialogLink?.addEventListener("click", hideDialog);



dialog?.addEventListener("click", (event) => {

    const rect = dialog.getBoundingClientRect();

    const clickedOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (clickedOutside) {
        hideDialog();
    }

});



const menu = document.querySelector("#menuBtn");

const mobile = document.querySelector("#mobileNav");



function setMobileMenu(open) {

    if (!menu || !mobile) {
        return;
    }

    mobile.hidden = !open;

    menu.setAttribute(
        "aria-expanded",
        String(open)
    );

    menu.setAttribute(
        "aria-label",
        open ? "Fechar menu" : "Abrir menu"
    );

}



menu?.addEventListener("click", () => {

    const isOpen =
        menu.getAttribute("aria-expanded") === "true";

    setMobileMenu(!isOpen);

});



mobile?.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        setMobileMenu(false);

    });

});



const desktopBreakpoint = window.matchMedia(
    "(min-width: 761px)"
);

desktopBreakpoint.addEventListener("change", (event) => {

    if (event.matches) {
        setMobileMenu(false);
    }

});



document.querySelectorAll("[data-demo]").forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        showPlace({

            title: link.dataset.demo,

            text: "Esta área está prevista para a próxima etapa. Nesta versão, estamos validando a paisagem, os pontos interativos e a navegação da homepage.",

            target: "#explorar",

            label: "Voltar à exploração →"

        });

    });

});