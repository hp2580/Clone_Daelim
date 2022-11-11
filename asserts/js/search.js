let search = document.querySelector(".search");
let searchWrap = document.querySelector(".search_wrap");
search.addEventListener("click", () => {
  search.classList.add("hide");
  searchWrap.classList.add("active");
});

let closeSearch = document.querySelector(".close_search");
closeSearch.addEventListener("click", () => {
  search.classList.remove("hide");
  searchWrap.classList.remove("active");
});

let titles = document.querySelectorAll(".name a");

for (let title of titles) {
  title.addEventListener("click", (e) => {
    e.preventDefault();
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

function addActive(elements) {
  for (let element of elements) {
    element.classList.add("active");
  }
}
