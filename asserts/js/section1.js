let sec1_wrap = document.querySelector(".sec1_wrap");
let paginations = document.querySelectorAll(".pagination li");
let sec1_Pages = document.querySelectorAll(".sec1");
let sec1_index = 0;

for (let pagination of paginations) {
  pagination.addEventListener("click", () => {
    let class_Pagination = pagination.classList[0];
    clearActive(paginations);
    clearActive(sec1_Pages);
    pagination.classList.add("active");
    switch (class_Pagination) {
      case "sec1_p1":
        sec1_index = 0;
        // sec1_Pages[0].classList.add("active");
        // sec1_wrap.style.transform = `translateX(0)`;
        break;
      case "sec1_p2":
        sec1_index = 1;
        // sec1_Pages[1].classList.add("active");
        // sec1_wrap.style.transform = `translateX(-20%)`;
        break;
      case "sec1_p3":
        sec1_index = 2;
        // sec1_Pages[2].classList.add("active");
        // sec1_wrap.style.transform = `translateX(-40%)`;
        break;
      case "sec1_p4":
        sec1_index = 3;
        // sec1_Pages[3].classList.add("active");
        // sec1_wrap.style.transform = `translateX(-60%)`;
        break;
      default:
        sec1_index = 4;
        // sec1_Pages[4].classList.add("active");
        // sec1_wrap.style.transform = `translateX(-80%)`;
        break;
    }
    //   sec1_Pages[sec1_index].classList.add("active");
    //   sec1_wrap.style.transform = `translateX(-${20 * sec1_index}%)`;
    sec1(sec1_index);
  });
}

let sec1_prevPoint;
let sec1_nextPoint;
sec1_wrap.addEventListener("mousedown", (e) => {
  sec1_prevPoint = e.screenX;
});

sec1_wrap.addEventListener("mouseup", (e) => {
  sec1_nextPoint = e.screenX;
  let sec1_direction = sec1_nextPoint - sec1_prevPoint;
  if (sec1_direction > 0) {
    clearActive(paginations);
    clearActive(sec1_Pages);
    sec1_index = sec1_index > 0 ? sec1_index - 1 : 4;
  } else if (sec1_direction < 0) {
    clearActive(paginations);
    clearActive(sec1_Pages);
    sec1_index = sec1_index < 4 ? sec1_index + 1 : 0;
  }
  sec1(sec1_index);
});

function sec1(index) {
  paginations[index].classList.add("active");
  sec1_Pages[index].classList.add("active");
  sec1_wrap.style.transform = `translateX(-${20 * index}%)`;
}
