let search = document.querySelector(".search");
let searchWrap = document.querySelector(".search_wrap");
let canMove = true;
search.addEventListener("click", () => {
  search.classList.add("hide");
  searchWrap.classList.add("active");
  canMove = true;
});

let closeSearch = document.querySelector(".close_search");
closeSearch.addEventListener("click", () => {
  search.classList.remove("hide");
  searchWrap.classList.remove("active");
  addActive(document.querySelectorAll(".product li"));
});

let titles = document.querySelectorAll(".name a");
for (let title of titles) {
  title.addEventListener("click", (e) => {
    e.preventDefault();
    canMove = false;
    product.style.transform = `translateX(0)`;
    let productClass = title.classList[0];
    switch (productClass) {
      case "n1":
        clearActive(products);
        addActive(document.querySelectorAll(".p1"));
        break;
      case "n2":
        clearActive(products);
        addActive(document.querySelectorAll(".p2"));
        break;
      case "n3":
        clearActive(products);
        addActive(document.querySelectorAll(".p3"));
        break;
      case "n4":
        clearActive(products);
        addActive(document.querySelectorAll(".p4"));
        break;
      case "n5":
        clearActive(products);
        addActive(document.querySelectorAll(".p5"));
        break;
      case "n6":
        clearActive(products);
        addActive(document.querySelectorAll(".p6"));
        break;
      case "n7":
        clearActive(products);
        addActive(document.querySelectorAll(".p7"));
        break;
      case "n8":
        clearActive(products);
        addActive(document.querySelectorAll(".p8"));
        break;
      default:
        clearActive(products);
        addActive(document.querySelectorAll(".p9"));
        break;
    }
  });
}

let product = document.querySelector(".product");
let prevPoint;
let nextPoint;
let currentX = 0;
let moveX;
product.addEventListener("mousedown", (e) => {
  if (window.innerWidth <= 768) prevPoint = e.screenX;
});

product.addEventListener("mouseup", (e) => {
  if (window.innerWidth <= 768) {
    productMove(e.screenX);
  }
});

product.addEventListener("touchstart", ({ touches }) => {
  if (window.innerWidth <= 768) prevPoint = touches[0].screenX;
});

product.addEventListener("touchend", ({ changedTouches }) => {
  if (window.innerWidth <= 768) {
    productMove(changedTouches[0].screenX);
  }
});

function productMove(x) {
  if (canMove) {
    nextPoint = x;
    moveX = nextPoint - prevPoint;
    currentX += moveX;
    if (currentX > 0) currentX = 0;
    else if (currentX < -3660) currentX = -3660;
    product.style.transform = `translateX(${currentX}px)`;
  }
}
