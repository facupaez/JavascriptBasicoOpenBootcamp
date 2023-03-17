const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papeleras = document.querySelectorAll(".papeleras");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (e) => {
    console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
    parrafo.classList.add("dragging");
    e.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    e.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
  });

  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy"; // copy por defecto
  });

  seccion.addEventListener("drop", (e) => {
    console.log("Drop");
    const id_parrafo = e.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

papeleras.forEach((papelera) => {
  papelera.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  papelera.addEventListener("drop", (e) => {
    const id_parrafo = e.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    parrafo.remove();
  });
});
