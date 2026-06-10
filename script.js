let coqueActuelle = "blanc-nuage";
let tablierActuel = "bois-teck";

function changerCoque(coque, boutonClique) {
    coqueActuelle = coque;

    document.querySelectorAll(".coque-btn").forEach(button => {
        button.classList.remove("actif");
    });

    boutonClique.classList.add("actif");

    mettreAJourConfigurateur();
}

function changerTablier(tablier, boutonClique) {
    tablierActuel = tablier;

    document.querySelectorAll(".tablier-btn").forEach(button => {
        button.classList.remove("actif");
    });

    boutonClique.classList.add("actif");

    mettreAJourConfigurateur();
}

function mettreAJourConfigurateur() {
    const image = document.getElementById("spa-image");
    const nouvelleImage = "lagos-" + coqueActuelle + "-" + tablierActuel + ".png";

    image.classList.add("fade");

    const imagePrechargee = new Image();
    imagePrechargee.src = nouvelleImage;

    imagePrechargee.onload = function () {
        setTimeout(() => {
            image.src = nouvelleImage;
            image.classList.remove("fade");
        }, 150);
    };
}

function telechargerVisuel() {
    const cheminImage = "lagos-" + coqueActuelle + "-" + tablierActuel + ".png";

    fetch(cheminImage)
        .then(response => response.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const lien = document.createElement("a");

            lien.href = url;
            lien.download = "lagos-" + coqueActuelle + "-" + tablierActuel + ".png";

            document.body.appendChild(lien);
            lien.click();
            document.body.removeChild(lien);

            URL.revokeObjectURL(url);
        });
}