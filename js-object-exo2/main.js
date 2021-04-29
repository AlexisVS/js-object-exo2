// ## Exo 1
// ### Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.
let personnage = {
    nom: "Van San",
    prenom: "Alexis",
    sePresenter() {
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}
// ## Exo 2
// ### Créer un objet avec un nom et une méthode
// ### La méthode de votre objet lance un prompt permetant de changer son age
let monObjet = {
    name: "Vase de chine",
    donneAge() {
        this.age = prompt("Indiquez votre age");
    }
}
monObjet.donneAge()
console.log(monObjet.age);