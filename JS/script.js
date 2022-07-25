"use strict";

const inputArea = document.querySelector("#inp");
const sendBtn = document.querySelector("#btnSend");
const againBtn = document.querySelector("#btnAgain");
const imgBuzi = document.querySelector("#img");
const ans = document.querySelector("#answer");

let ansArr = [
  "לך להתאמן!",
  "לישון לפני 22:00",
  "תזונה נכונה",
  'רוץ 8 ק"מ',
  "מינץ קונדישן",
  "כן",
  "ממש לא",
  "אימון ספרינטים",
  "בוא לדידי",
  "יום עבודות בדידי",
  "אני יודע מה עשית בפורים!",
];

const randNumFn = () => Math.round(Math.random() * 11);

sendBtn.addEventListener("click", () => {
  imgBuzi.classList.add("animation");

  setTimeout(() => {
    let randomNum = randNumFn();
    for (let item in ansArr) {
      ans.textContent = ansArr[randomNum];
    }
  }, "1700");

  setTimeout(() => {
    ans.innerHTML = `<div class="card">
        <div class="container">
          <h4>${ans.textContent}</h4>
        </div>
      </div>`;
  }, "1700");

  setTimeout(() => {
    imgBuzi.src = "";
  }, "1500");
});

againBtn.addEventListener("click", () => {
  imgBuzi.classList.remove("animation");
  imgBuzi.src = "../img/bozu22.png";
  ans.textContent = "";
});
