var coll = document.getElementsByClassName("collapsible");
let img = document.getElementById("img-collapse")

let newImage = {
    1: "https://capacitateengenero.iqm.gob.mx/img/1.jpg",
    2: "https://capacitateengenero.iqm.gob.mx/img/2.webp",
    3: "https://capacitateengenero.iqm.gob.mx/img/5.webp",
    4: "https://capacitateengenero.iqm.gob.mx/img/5.webp",
}

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        img.src = newImage[i + 1];
        this.classList.toggle("active-collapse");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        for (let j = 0; j < coll.length; j++) {
            if (coll[j] != this) {
                coll[j].classList.remove("active-collapse");
                coll[j].nextElementSibling.style.maxHeight = null;
            }
        }
    });
}