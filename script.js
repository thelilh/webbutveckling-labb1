const header = document.getElementById("imgHeader");
const number = document.getElementById("randomNumber");
let images = [
  ["img/img1.webp", "Boka tid"],
  ["img/img2.webp", "Image 2"],
  ["img/img3.webp", "Image 3"],
  ["img/img4.webp", "Färga håret?"],
];
let index = 0;

function imgHeaderLoop() {
  //Kolla om vi är större än längden av images
  if (index >= images.length || index < 0) {
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
      window.location.pathname.includes("about") ||
      window.location.pathname.includes("bokning") ||
      window.location.pathname.includes("contact")
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

/*
Random Number
*/
number.innerText = randomNum();

function randomNum() {
  let tmpArray = [
    "071-979 64 91",
    "079-954 76 44",
    "071-004 36 36",
    "071-911 24 63",
    "071-829 03 81",
    "071-420 69 30",
  ];
  let min = 0;
  let max = tmpArray.length;
  let num = tmpArray[Math.floor(Math.random() * (max - min)) + min];
  console.log(num);
  return num;
}
/*
Kundvagn
*/
const cartElement = document.querySelector("#cart");
class cartItem {
  constructor(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  ToString() {
    return `${this.name} - ${this.cost}`;
  }
}
class cart {
  constructor(id, items) {
    this.id = id;
    this.items = items;
  }

  AddToCart(item) {
    this.items.push(item);
  }

  RemoveFromCart(item) {
    let tempArray = [];
    for (const sub of this.items) {
      if (sub != item) {
        tempArray.push(sub);
      }
    }
    this.items = tempArray;
    console.log(this.items);
    this.CreateCartAsElements();
  }

  ReturnCart() {
    return this.items;
  }

  CreateCartAsElements() {
    cartElement.innerHTML = ``;
    if (this.items.length > 0) {
      for (const item of this.items) {
        const p = document.createElement("p");
        p.innerText = `${item.ToString()}`;
        p.classList.add("dropdown-item");
        p.onclick = () => {
          this.RemoveFromCart(item);
        };
        cartElement.appendChild(p);
      }
    } else {
      const p = document.createElement("p");
      p.innerText = "Add something to your cart!";
      p.classList.add("dropdown-item");
      cartElement.appendChild(p);
    }
  }
}
const newCart = new cart(0, []);
newCart.AddToCart(new cartItem(0, "test", 5));
newCart.AddToCart(new cartItem(1, "Test 2", 15));
newCart.CreateCartAsElements();
