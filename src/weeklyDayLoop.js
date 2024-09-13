const JOURS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day;
const VALEUR = 2;

for (let i = 0; i < JOURS.length; i++) {
    if (i === VALEUR) {
        day = jours[i];
        break;
    }
}

console.log(day);