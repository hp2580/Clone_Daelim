let depth1_list = document.querySelectorAll(".depth1 a");
let depth2 = document.querySelector(".depth2");
let depth2_list = document.querySelectorAll(".depth2 .sub");
let mouseIn = false;

for (let depth1 of depth1_list) {
  depth1.addEventListener("mouseenter", () => {
    mouseIn = true;
    clearActive(depth2_list);
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
}

depth2.addEventListener("mouseenter", () => {
  mouseIn = true;
});

depth2.addEventListener("mouseleave", () => {
  mouseIn = false;
  depth2.classList.remove("active");
});

function clearActive(elements) {
  for (let element of elements) {
    element.classList.remove("active");
  }
}
