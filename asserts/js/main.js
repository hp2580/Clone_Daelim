let depth1_list = document.querySelectorAll(".depth1 a");
let depth2 = document.querySelector(".depth2");
let depth2_list = document.querySelectorAll(".depth2 .sub");
let products = document.querySelectorAll(".product li");
let mouseIn = false;

window.onload = () => {
  addActive(products);
};

document.querySelector(".goTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

for (let depth1 of depth1_list) {
  depth1.addEventListener("mouseenter", () => {
    mouseIn = true;
    clearActive(depth1_list);
    clearActive(depth2_list);
    depth1.classList.add("active");
    depth2.classList.add("active");
    if (depth1.classList.contains("main1"))
      document.querySelector(".sub1").classList.add("active");
    else if (depth1.classList.contains("main2"))
      document.querySelector(".sub2").classList.add("active");
    else if (depth1.classList.contains("main3"))
      document.querySelector(".sub3").classList.add("active");
    else if (depth1.classList.contains("main4"))
      document.querySelector(".sub4").classList.add("active");
    else if (depth1.classList.contains("main5"))
      document.querySelector(".sub5").classList.add("active");
    else if (depth1.classList.contains("main6"))
      document.querySelector(".sub6").classList.add("active");
    else if (depth1.classList.contains("main7"))
      document.querySelector(".sub7").classList.add("active");
    else document.querySelector(".sub8").classList.add("active");
  });

  depth1.addEventListener("mouseleave", () => {
    mouseIn = false;
  });
}

depth2.addEventListener("mouseenter", () => {
  mouseIn = true;
});

depth2.addEventListener("mouseleave", () => {
  mouseIn = false;
  clearActive(depth1_list);
  depth2.classList.remove("active");
});

document.querySelector(".btn_sub").addEventListener("click", () => {
  document.querySelector(".side_menu").classList.add("active");
  document.body.classList.add("hidden");
});

document.querySelector(".btn_close").addEventListener("click", () => {
  document.querySelector(".side_menu").classList.remove("active");
  document.body.classList.remove("hidden");
});

setInterval(() => {
  if (!mouseIn) {
    clearActive(depth2_list);
    depth2.classList.remove("active");
  }
}, 700);

function clearActive(elements) {
  for (let element of elements) {
    element.classList.remove("active");
  }
}
