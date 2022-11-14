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
        break;
      case "sec1_p2":
        sec1_index = 1;
        break;
      case "sec1_p3":
        sec1_index = 2;
        break;
      case "sec1_p4":
        sec1_index = 3;
        break;
      default:
        sec1_index = 4;
        break;
    }
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

/*Section2*/
let sec2_slide = document.querySelector(".sec2_wrap ul");
let sec2_lists = document.querySelectorAll(".sec2_wrap li");
let sec2_links = document.querySelectorAll(".sec2_wrap a");
let sec2_buttons = document.querySelectorAll(".sec2_wrap button");
let sec2_prevPoint;
let sec2_nextPoint;
let sec2_mouseDown = false;
let index = 0;
let cnt = 0;

sec2_slide.addEventListener("touchstart", ({ touches }) => {
  sec2_Down(touches[0].screenX);
});

sec2_slide.addEventListener("touchend", ({ changedTouches }) => {
  sec2_Up(changedTouches[0].screenX);
});

sec2_slide.addEventListener("mousedown", ({ screenX }) => {
  sec2_Down(screenX);
});

sec2_slide.addEventListener("mouseup", ({ screenX }) => {
  sec2_Up(screenX);
});

for (let button of sec2_buttons) {
  button.addEventListener("click", () => {
    cnt = 0;
    checkActive(sec2_lists);
    if (button.classList.contains("sec2_prev")) {
      index = index > 0 ? index - 1 : 3;
    } else {
      index = index < 3 ? index + 1 : 0;
    }
    act_sec2_slide();
  });
}

function sec2_cnt() {
  if (!sec2_mouseDown) {
    if (cnt < 6) cnt++;
    else {
      cnt = 0;
      index = index < 3 ? index + 1 : 0;
      act_sec2_slide();
    }
  }
}

/**
 *
 * @param {*} prev 터치 시작점 & 클릭 시작점
 */
function sec2_Down(prev) {
  for (let link of sec2_links) {
    link.classList.add("down");
  }
  sec2_mouseDown = true;
  cnt = 0;
  sec2_prevPoint = prev;
}

/**
 *
 * @param {*} next 터치 종료점 / 클릭 종료점
 */
function sec2_Up(next) {
  for (let link of sec2_links) {
    link.classList.remove("down");
  }
  sec2_mouseDown = false;
  sec2_nextPoint = next;
  let sec2_direction = sec2_nextPoint - sec2_prevPoint;
  if (sec2_direction > 10) index = index > 0 ? index - 1 : 3;
  else if (sec2_direction < -10) index = index < 3 ? index + 1 : 0;
  act_sec2_slide();
}

function act_sec2_slide() {
  clearActive(sec2_lists);
  sec2_lists[index].classList.add("active");
  if (window.innerWidth <= 480)
    sec2_slide.style.transform = `translateX(${-(index * 25)}%)`;
  else if (window.innerWidth <= 768)
    sec2_slide.style.transform = `translateX(${-(index * 25 - 12.5)}%)`;
  else sec2_slide.style.transform = `translateX(0)`;
}

/**
 *
 * @param {*} elements 자식 요소들의 active index를 반환할 부모 요소
 */
function checkActive(elements) {
  for (let indexList = 0; indexList < elements.length; indexList++) {
    if (elements[indexList].classList.contains("active")) {
      index = indexList;
      break;
    }
  }
}