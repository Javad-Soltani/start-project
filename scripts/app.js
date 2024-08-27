let html = document.documentElement;
let menu = document.querySelector(".menu");
let hambrger_btn = document.querySelector(".hamberger-menu-btn");
let hambrger_btn_icon = document.querySelector(".hamberger-menu-btn i");
let IsClickmenu = false;
hambrger_btn.addEventListener("click", function () {
  menu.style.right = "0";
  menu.style.opacity = "1";
  hambrger_btn.style.opacity = "0";
  menu.style.boxShadow = "-5px 0px 10px rgba(0, 0, 0, 0.2)";
  IsClickmenu = true;
});

document.addEventListener("click", function (e) {
  if (IsClickmenu === true) {
    if (!menu.contains(e.target) && !hambrger_btn.contains(e.target)) {
      menu.style.right = "-179.094px";
      menu.style.opacity = "0";
      hambrger_btn.style.opacity = "1";
      IsClickmenu = false;
    }
    if (menu.style.opacity === "0") {
      menu.style.opacity = "1";
      menu.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.0)";
    }
  }
});
