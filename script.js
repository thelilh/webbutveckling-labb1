/*
Online bokningssystem
*/
const daySelect = document.getElementById("daySelect");
const dayShow = document.getElementById("dayShow");
const date = new Date();
document.body.onload = () => {
  daySelect.onchange = () => {
    dayShow.innerText = daySelect.value;
  };
  const temp = document.createElement("option");
  temp.value = 0;
  temp.text = "Välj en dag";
  temp.disabled = true;
  temp.daySelected = true;
  daySelect.appendChild(temp);
  for (let i = 0; i < 10; i++) {
    const option = document.createElement("option");
    date.setDate(date.getDate() + i);
    option.innerText = `${date.toLocaleDateString("sv-SE")}`;
    option.value = date;
    daySelect.appendChild(option);
  }
  slideLoop();
};
/* 
Kod modifierad från w3schools.com
*/
let slideIndex = 0;
function slideLoop() {
  //Hämta alla element som har klassen "slide"
  let slides = document.getElementsByClassName("slide");
  //Loop:a igenom alla slides, göm allt.
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Visa den på platsen slideIndex
  slides[slideIndex].style.display = "block";
  //Lägga till en på slideIndex. Kolla om slideIndex är större eller lika med längden på slides
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  //Kör funktionen återigen efter 5 sekunder.
  setTimeout(slideLoop, 5000);
}
