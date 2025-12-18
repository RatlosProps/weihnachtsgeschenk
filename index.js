console.log('Happy developing ✨')
const eingabe = document.querySelector("input");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
const downloadBtn = document.getElementById("downloadBtn");

img.src = ".idea/img/Xmas.png"

const font = new FontFace(
    "Pnyon",
    "url(.idea/font/PinyonScript-Regular.ttf)"
)
font.load().then(loadedFont => {
    document.fonts.add(loadedFont);

    ctx.font = "30px MyFont";

});
ctx.fillText(
    "Zentrierter Text",
    canvas.width / 2,
    canvas.height / 2
);
ctx.textAlign = "center";

//canvas.style.width = "531px";
//canvas.style.height = "354px";

ctx.fillStyle = "#bbb";

ctx.fillRect(0,0,400,600)

img.onload = function () {
    ctx.drawImage(img, 0, 0, 531, 354)
}

eingabe.addEventListener("input", function () {
    const eingegebeneDaten = eingabe.value;
    console.log(eingegebeneDaten.length);
    let fontSize = 200;
    let versatz = 50;

    ctx.drawImage(img, 0, 0, 531, 354)
    if (eingegebeneDaten.length > 5) {fontSize = 150; versatz = 25;}
    if (eingegebeneDaten.length > 8) {fontSize = 100; versatz = 0;}
    ctx.font = `${fontSize}px Pnyon`;
    ctx.fillStyle = "black";
    ctx.fillText(eingegebeneDaten, canvas.width / 2, canvas.height / 2 + versatz)

})
downloadBtn.addEventListener("click", () => {
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "canvas-bild.png";
        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, "image/png");
});