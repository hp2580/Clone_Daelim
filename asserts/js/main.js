let depth1_list = document.querySelectorAll(".depth1 a");
let depth2_list = document.querySelectorAll(".depth2 .sub");

for (let depth1 of depth1_list) {
  depth1.addEventListener("mouseenter", () => {
    clearActive(depth2_list);
    document.querySelector(".depth2").classList.add("active");
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
    else document.querySelector(".sub6").classList.add("active");
  });
}

function clearActive(elements) {
  for (let element of elements) {
    element.classList.remove("active");
  }
}
