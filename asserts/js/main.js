let depth1_list = document.querySelectorAll(".depth1 a");
let depth2 = document.querySelector(".depth2");
let depth2_list = document.querySelectorAll(".depth2 .sub");
let products = document.querySelectorAll(".product li");
let mouseIn = false;
let interval;
let isIntervalPlay = false;

window.onload = () => {
  addActive(products);
  document.querySelector(".sec1_1").classList.add("active");
  document.querySelector(".sec1_p1").classList.add("active");
  document.querySelector(".sec2_1").classList.add("active");
  document.querySelector(".sec3_1").classList.add("active");
  document.querySelector(".sec3_p1").classList.add("active");
  if (window.innerWidth <= 768) {
    interval = setInterval(sec2_cnt, 500);
    isIntervalPlay = true;
  }
};

window.onresize = () => {
  act_sec2_slide();
  act_sec5_slide();
  if (window.innerWidth <= 990) {
    clearActive(sec3_navs);
    clearActive(sec3_lists);
    sec3_navs[0].classList.add("active");
    sec3_lists[0].classList.add("active");
    document.querySelector(
      ".sec3_wrap"
    ).style.backgroundImage = `url(asserts/images/section3/sec3_bg1.png)`;
  } else if (window.innerWidth > 768) {
    product.style.transform = `translateX(0)`;
    currentX = 0;
    isIntervalPlay = false;
    cnt = 0;
    index = 0;
    clearInterval(interval);
    sec2_slide.style.transform = `translateX(0)`;
  } else if (window.innerWidth <= 768) {
    if (!isIntervalPlay) {
      isIntervalPlay = true;
      interval = setInterval(sec2_cnt, 500);
    }
  }
};

window.onscroll = (e) => {
  let sec2_elements = document.querySelectorAll(".section2 > *");
  for (let sec2_element of sec2_elements) {
    if (sec2_element.getBoundingClientRect().top < window.innerHeight * 0.9)
      sec2_element.classList.add("scroll");
  }
  let sec3_elements = document.querySelectorAll(".section3 > *");
  for (let sec3_element of sec3_elements) {
    if (sec3_element.getBoundingClientRect().top < window.innerHeight * 0.9)
      sec3_element.classList.add("scroll");
  }
  let sec4_elements = document.querySelectorAll(".section4 > *");
  for (let sec4_element of sec4_elements) {
    if (sec4_element.getBoundingClientRect().top < window.innerHeight * 0.9)
      sec4_element.classList.add("scroll");
  }
};

document.querySelector(".goTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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

function addActive(elements) {
  for (let element of elements) {
    element.classList.add("active");
  }
}

function clearActive(elements) {
  for (let element of elements) {
    element.classList.remove("active");
  }
}
