const pet = document.getElementById("pet");
const sound = document.getElementById("sound");
const randomtext = document.getElementById("randomtext");

const table = document.getElementById("table");

function addPet() {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerHTML = pet.value;
    td2.innerHTML = sound.value;
    td3.innerHTML = randomtext.value;

    tr.append(td1, td2, td3);
    table.append(tr);

    pet.value = "";
    sound.value = "";
    randomtext.value = "";
}
