const header = document.getElementById("imgHeader");
let images = [
  ["img/img1.jpg", "Image 1"],
  ["img/img1.jpg", "Image 2"],
  ["img/img1.jpg", "Image 3"],
  ["img/img1.jpg", "Image 4"],
];
let index = 0;

function imgHeaderLoop() {
  //Kolla om vi är större än längden av images
  if (index > images.length || index < 0) {
    index = 0;
  }
  //Hämta bilden från index.
  header.style.backgroundImage = `url(${images[index][0]})`;
  for (const child of header.children) {
    if (child.tagName === "H1") {
      child.innerText = images[index][1];
    }
  }
  //Lägg till en på index.
  index++;
  //Sätt en timeout på 5 sekunder (5000ms)
  setTimeout(imgHeaderLoop, 5000);
}

/*
Improvise, adapt, overcome.
*/
function fixImages(url) {
  /*
    Om vi är vi "hem" (dvs inte contact el. bokning), gör inget.
    Om vi inte är där, lägg till "../".
  */
  if (
    !(
      window.location.pathname.includes("contact") ||
      window.location.pathname.includes("bokning")
    )
  ) {
    return url;
  } else {
    return `../${url}`;
  }
}
for (let i = 0; i < images.length; i++) {
  let element = images[i][0];
  element = fixImages(element);
  images[i][0] = element;
}
console.log(images);
imgHeaderLoop();
