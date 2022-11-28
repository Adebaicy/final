// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should
// display none.
// ==================================
const linkk = document.querySelectorAll(".link");
const ham = document.querySelector(".hamburger");

for (var i = 0; i < linkk.length; i++) {
  linkk[i].style.display = "none";
}
nemm = 1;
function haram() {
  if (nemm === 1) {
    for (var i = 0; i < linkk.length; i++) {
      linkk[i].style.display = "block";
    }

    nemm = 2;
  } else if (nemm == 2) {
    
    for (var i = 0; i < linkk.length; i++) {
      linkk[i].style.display = "none";
    }
    nemm = 1;
  }
}

ham.addEventListener("click", haram);

catalogue = document.querySelectorAll(".catalogue");

const el = document.createElement("span");
el.textContent = "no related search item";
el.classList.add("dead");
document.getElementById("marzen").appendChild(el);
fulll = document.querySelector(".dead");

search = document.querySelector(".search_product");
search.addEventListener("input", () => {
  var emp = [];
  catalogue.forEach((ccat) => {
    ccat.style.display = "none";
    mm = search.value.toUpperCase();

    let title = ccat.querySelector("p").innerHTML;
    title = title.toUpperCase();

    if (title.includes(mm)) {
      ccat.style.display = "block";
      emp.push(ccat);
    }
  });
  if (emp.length === 0) {
    fulll.style.display = "block";
  } else {
    fulll.style.display = "none";
  }
});
