var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
/* cambiar saludo */
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Buenos días, me imagino que quiere un cafe";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buenas tardes, es buena hora para tomar agua";
} else {
    elSaludo = "Hora de dormir...";
}
var elColor;
function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "pagina").parent("vinculos");
    createA("dibujo.html", "dibujo").parent("vinculos");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". Ah!, y te presento mi index.html").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}
function pagina() {
    createSpan(". Ahora te encuentras en mi page.html").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}