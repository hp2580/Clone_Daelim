let sec1_wrap = document.querySelector(".sec1_wrap");
let paginations = document.querySelectorAll(".pagination li");
let sec1_Pages = document.querySelectorAll(".sec1");

for (let pagination of paginations) {
  pagination.addEventListener("click", () => {
    let class_Pagination = pagination.classList[0];
    clearActive(paginations);
    clearActive(sec1_Pages);
    pagination.classList.add("active");
    switch (class_Pagination) {
      case "sec1_p1":
        sec1_Pages[0].classList.add("active");
        sec1_wrap.style.transform = `translateX(0)`;
        break;
      case "sec1_p2":
        sec1_Pages[1].classList.add("active");
        sec1_wrap.style.transform = `translateX(-20%)`;
        break;
      case "sec1_p3":
        sec1_Pages[2].classList.add("active");
        sec1_wrap.style.transform = `translateX(-40%)`;
        break;
      case "sec1_p4":
        sec1_Pages[3].classList.add("active");
        sec1_wrap.style.transform = `translateX(-60%)`;
        break;
      default:
        sec1_Pages[4].classList.add("active");
        sec1_wrap.style.transform = `translateX(-80%)`;
        break;
    }
  });
}
