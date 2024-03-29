let sec1_wrap = document.querySelector(".sec1_wrap");
let paginations = document.querySelectorAll(".pagination li");
let sec1_Pages = document.querySelectorAll(".sec1");
let sec1_index = 0;

sec1_wrap.addEventListener("touchstart", ({ touches }) => {
  sec1_Down(touches[0].screenX);
});

sec1_wrap.addEventListener("touchend", ({ changedTouches }) => {
  sec1_Up(changedTouches[0].screenX);
});

sec1_wrap.addEventListener("mousedown", ({ screenX }) => {
  sec1_Down(screenX);
});

sec1_wrap.addEventListener("mouseup", ({ screenX }) => {
  sec1_Up(screenX);
});

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
    act_sec1_slide();
  });
}

let sec1_prevPoint;
let sec1_nextPoint;

/**
 *
 * @param {*} prev 터치 시작점 & 클릭 시작점
 */
function sec1_Down(prev) {
  sec1_prevPoint = prev;
}

/**
 *
 * @param {*} next 터치 종료점 / 클릭 종료점
 */
function sec1_Up(next) {
  sec1_nextPoint = next;
  let sec1_direction = sec1_nextPoint - sec1_prevPoint;
  if (sec1_direction > 10) sec1_index = sec1_index > 0 ? sec1_index - 1 : 4;
  else if (sec1_direction < -10)
    sec1_index = sec1_index < 4 ? sec1_index + 1 : 0;
  act_sec1_slide();
}

function act_sec1_slide() {
  clearActive(sec1_Pages);
  clearActive(paginations);
  paginations[sec1_index].classList.add("active");
  sec1_Pages[sec1_index].classList.add("active");
  sec1_wrap.style.transform = `translateX(${-(sec1_index * 20)}%)`;
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
  sec2_mouseDown = true;
  cnt = 0;
  sec2_prevPoint = prev;
}

/**
 *
 * @param {*} next 터치 종료점 / 클릭 종료점
 */
function sec2_Up(next) {
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

/*Section3*/
let sec3_lists = document.querySelectorAll(".sec3_wrap li");
let sec3_navs = document.querySelectorAll(".sec3_nav > div");
for (let index = 0; index < sec3_navs.length; index++) {
  sec3_navs[index].addEventListener("mouseenter", () => {
    if (window.innerWidth > 990) {
      act_sec3(index);
    }
  });
  sec3_navs[index].addEventListener("click", () => {
    if (window.innerWidth <= 990) {
      act_sec3(index);
    }
  });
}

function act_sec3(index) {
  clearActive(sec3_navs);
  clearActive(sec3_lists);
  sec3_navs[index].classList.add("active");
  sec3_lists[index].classList.add("active");
  switch (index) {
    case 0:
      document.querySelector(
        ".sec3_wrap"
      ).style.backgroundImage = `url(asserts/images/section3/sec3_bg1.png)`;
      break;
    case 1:
      document.querySelector(
        ".sec3_wrap"
      ).style.backgroundImage = `url(asserts/images/section3/sec3_bg2.png)`;
      break;
    case 2:
      document.querySelector(
        ".sec3_wrap"
      ).style.backgroundImage = `url(asserts/images/section3/sec3_bg3.png)`;
      break;
    case 3:
      document.querySelector(
        ".sec3_wrap"
      ).style.backgroundImage = `url(asserts/images/section3/sec3_bg4.png)`;
      break;
    case 4:
      document.querySelector(
        ".sec3_wrap"
      ).style.backgroundImage = `url(asserts/images/section3/sec3_bg5.png)`;
      break;
    default:
      document.querySelector(
        ".sec3_wrap"
      ).style.backgroundImage = `url(asserts/images/section3/sec3_bg6.png)`;
      break;
  }
}

/*Setion5*/
let sec5_wrap = document.querySelector(".sec5_wrap");
let sec5_navs = document.querySelectorAll(".sec5_nav a");

for (let index = 0; index < sec5_navs.length; index++) {
  sec5_navs[index].addEventListener("mouseenter", () => {
    if (window.innerWidth > 990) {
      act_sec5(index);
    }
  });
}

function act_sec5(index) {
  switch (index) {
    case 0:
      sec5_wrap.style.backgroundImage = `url(asserts/images/section5/sec5_bg1.png)`;
      break;
    case 1:
      sec5_wrap.style.backgroundImage = `url(asserts/images/section5/sec5_bg2.jpg)`;
      break;
    case 2:
      sec5_wrap.style.backgroundImage = `url(asserts/images/section5/sec5_bg3.jpg)`;
      break;
    default:
      sec5_wrap.style.backgroundImage = `url(asserts/images/section5/sec5_bg4.jpg)`;
      break;
  }
}

let sec5_pages = document.querySelectorAll(".sec5_pagination button");
let sec5_slide = document.querySelector(".sec5_nav");
let sec5_prevPoint;
let sec5_nextPoint;
let sec5_mouseDown = false;
let index_sec5 = 0;
let cnt_sec5 = 0;

sec5_slide.addEventListener("touchstart", ({ touches }) => {
  sec5_Down(touches[0].screenX);
});

sec5_slide.addEventListener("touchend", ({ changedTouches }) => {
  sec5_Up(changedTouches[0].screenX);
});

sec5_slide.addEventListener("mousedown", ({ screenX }) => {
  sec5_Down(screenX);
});

sec5_slide.addEventListener("mouseup", ({ screenX }) => {
  sec5_Up(screenX);
});

for (let button of sec5_pages) {
  button.addEventListener("click", () => {
    let class_button = button.classList[0];
    clearActive(sec5_pages);
    button.classList.add("active");
    cnt_sec5 = 0;
    switch (class_button) {
      case "sec5_pg1":
        index_sec5 = 0;
        break;
      case "sec5_pg2":
        index_sec5 = 1;
        break;
      case "sec5_pg3":
        index_sec5 = 2;
        break;
      default:
        index_sec5 = 3;
        break;
    }
    act_sec5_slide();
  });
}

function act_sec5_slide() {
  clearActive(sec5_navs);
  if (window.innerWidth <= 580)
    sec5_slide.style.transform = `translateX(${-(index_sec5 * 25) + 5}%)`;
  else if (window.innerWidth <= 990)
    sec5_slide.style.transform = `translateX(${-(index_sec5 * 25)}%)`;
  else sec5_slide.style.transform = `translate(0, -50%)`;
}

function sec5_cnt() {
  if (!sec5_mouseDown) {
    if (cnt_sec5 < 6) cnt_sec5++;
    else {
      cnt_sec5 = 0;
      index_sec5 = index_sec5 < 3 ? index_sec5 + 1 : 0;
      act_sec5_slide();
      clearActive(sec5_pages);
      sec5_pages[index_sec5].classList.add("active");
    }
  }
}

/**
 *
 * @param {*} prev 터치 시작점 & 클릭 시작점
 */
function sec5_Down(prev) {
  sec5_mouseDown = true;
  cnt_sec5 = 0;
  sec5_prevPoint = prev;
}

/**
 *
 * @param {*} next 터치 종료점 / 클릭 종료점
 */
function sec5_Up(next) {
  sec5_mouseDown = false;
  sec5_nextPoint = next;
  let sec5_direction = sec5_nextPoint - sec5_prevPoint;
  if (sec5_direction > 10) index_sec5 = index_sec5 > 0 ? index_sec5 - 1 : 3;
  else if (sec5_direction < -10)
    index_sec5 = index_sec5 < 3 ? index_sec5 + 1 : 0;
  act_sec5_slide();
  clearActive(sec5_pages);
  sec5_pages[index_sec5].classList.add("active");
}

/*Section6*/
let sec6_slide = document.querySelector(".sec6_wrap ul");
let sec6_lists = document.querySelectorAll(".sec6_wrap li");
for (let list of sec6_lists) {
  list.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      clearActive(sec6_lists);
      list.classList.add("active");
    }
  });
}

let sec6_prevPoint;
let sec6_nextPoint;
let index_sec6 = 0;

sec6_slide.addEventListener("touchstart", ({ touches }) => {
  sec6_Down(touches[0].screenX);
});

sec6_slide.addEventListener("touchend", ({ changedTouches }) => {
  sec6_Up(changedTouches[0].screenX);
});

sec6_slide.addEventListener("mousedown", ({ screenX }) => {
  sec6_Down(screenX);
});

sec6_slide.addEventListener("mouseup", ({ screenX }) => {
  sec6_Up(screenX);
});

function act_sec6_slide() {
  clearActive(sec6_lists);
  sec6_lists[index_sec6].classList.add("active");
  if (window.innerWidth > 768) sec6_slide.style.transform = `translateX(0)`;
  else
    sec6_slide.style.transform = `translateX(${-(index_sec6 * 33.33) + 7.5}%)`;
}

/**
 *
 * @param {*} prev 터치 시작점 & 클릭 시작점
 */
function sec6_Down(prev) {
  sec6_prevPoint = prev;
}

/**
 *
 * @param {*} next 터치 종료점 / 클릭 종료점
 */
function sec6_Up(next) {
  sec6_nextPoint = next;
  let sec6_direction = sec6_nextPoint - sec6_prevPoint;
  if (sec6_direction > 10) index_sec6 = index_sec6 > 0 ? index_sec6 - 1 : 2;
  else if (sec6_direction < -10)
    index_sec6 = index_sec6 < 2 ? index_sec6 + 1 : 0;
  act_sec6_slide();
  clearActive(sec6_lists);
  sec6_lists[index_sec6].classList.add("active");
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
