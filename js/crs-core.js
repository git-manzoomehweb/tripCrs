function listenCookieChange() {
  if (document.querySelector("body.set-cst")) {
    const element = document.querySelector(".load-search-box-in-condition");
    if (document.getElementById("registerbox").dataset.checkrkey == "true") {
      $.get("/Client_User_Type.inc", function (response) {
        if (response == "2" || response == "1") {
          $("#registerbox").hide();
          $("#bg-box").hide();
          $("#login_register_box").hide();
          $(".loading").hide();
          // document.querySelector(".loading").classList.add("hidden");
          $(".hidden-part").hide();

          if (element) {
            if (element.classList.contains("hidden")) {
              element.classList.remove("hidden");
            }
            element.style.setProperty("display", "block", "important");
          }

          $("#search_engine").load("/search-engine.bc");
          document
            .querySelector(".after-login-section")
            .classList.remove("hidden");
          $("body").addClass("searchbox-load-success");
        } else if (response == "3") {
          console.log("Hiiiiiiiii5555");
          
          document
            .querySelector(".login_register_box ")
            .classList.add("set-for-not-b2b");
          $(".loading").hide();
          // document.querySelector(".loading").classList.add("hidden");
          // $(".hidden-part").hide();
          $("#box").hide();
          $("#registerbox").hide();
          $("#bg-box").show();
          document
            .querySelector(".after-login-section")
            .classList.add("hidden");
          $("#login_register_box").hide();
          if (element) {
            if (element.classList.contains("hidden")) {
              element.classList.add("hidden");
            }
            element.style.setProperty("display", "none", "important");
          }
        }
      });
    } else {
      $("#login_register_box").show();
      // document.querySelector("#login_register_box").classList.remove("hidden");
      $(".loading").hide();
      // document.querySelector(".loading").classList.add("hidden");
    }
  }
}
listenCookieChange();
// ___________________________________

// ___________________________________
function uploadDocumentFooter(e) {
  document.querySelector("#contact-form-resize .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captcha']").value,
    r = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    i = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadFooter", {
    value: i,
    captcha: t,
    captchaid: r,
    run: !0,
  });
}
function refreshCaptchaFooter(e) {
  $bc.setSource("captcha.refreshFooter", !0);
}
function captchaRenderedFooter() {
  document.querySelector("#contact-form-resize .contactUsInput").placeholder =
    "Security code";
}
async function OnProcessedEditObjectFooter(e) {
  "6" == (await e.response.json()).errorid
    ? ((document.querySelector(
        "#contact-form-resize .Loading_Form"
      ).style.display = "none"),
      (document.querySelector("#contact-form-resize .message-api").innerHTML =
        "Your request has been successfully submitted."))
    : (refreshCaptchaFooter(),
      setTimeout(() => {
        (document.querySelector(
          "#contact-form-resize .Loading_Form"
        ).style.display = "none"),
          (document.querySelector(
            "#contact-form-resize .message-api"
          ).innerHTML = "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}

async function RenderFormFooter() {
  var inputElementVisa7 = document.querySelector(
    ".contact-username input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Name");

  var inputElementVisa7 = document.querySelector(
    " .contact-email input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Email");

  var inputElementVisa7 = document.querySelector(
    " .contact-number input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Phone Number");

  var inputElementVisa7 = document.querySelector(
    " .contact-message input[data-bc-text-input]"
  );
  inputElementVisa7.setAttribute("placeholder", "Message");
}

// ___________________________________

if (document.querySelectorAll(".swiper-footer").length > 0) {
  swiper = new Swiper(".swiper-footer", {
    slidesPerView: 1.35,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 0,
    grabCursor: !0,
    autoplay: { delay: 4500, disableOnInteraction: !1 },
    loop: 0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1.35, spaceBetween: 0 },
      768: { slidesPerView: 1.35, spaceBetween: 0 },
      1024: { slidesPerView: 1.35, spaceBetween: 0 },
    },
  });
}

if (document.querySelectorAll(".swiper-footer2").length > 0) {
  swiper = new Swiper(".swiper-footer2", {
    slidesPerView: 5,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 0,
    grabCursor: !0,
    autoplay: { delay: 4500, disableOnInteraction: !1 },
    loop: 0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 5, spaceBetween: 0 },
      768: { slidesPerView: 5, spaceBetween: 0 },
      1024: { slidesPerView: 5, spaceBetween: 0 },
    },
  });
}

// __________________________________________________________
const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1024) {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
  });
} else {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(1024px)";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  toggleDropdowns.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    const dropdownIcon = dropdownIcons[index];

    toggle.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight * 30 + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});

// _______________________________________

if (window.location.pathname === "/") {
  window.addEventListener("scroll", () => {
    const headerDiv = document.querySelector("header .border-b");
    if (window.scrollY > 10) {
      headerDiv.classList.add("backdrop-blur-md");
    } else {
      headerDiv.classList.remove("backdrop-blur-md");
    }
  });
}

// __________________________________________________________
if (document.querySelector("footer")) {
  const labels = document.querySelectorAll(".w-max .footer-labels");
  let index = 0;

  function cycleActiveClass() {
    labels.forEach((label) => label.classList.remove("active"));

    labels[index].classList.add("active");

    index = (index + 1) % labels.length;
  }

  cycleActiveClass();

  setInterval(cycleActiveClass, 5000);
}
// ________________________________
function watchForFlightTypeField(callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches(".flighttype-field")) {
            callback(node);
          }

          const matches = node.querySelectorAll(".flighttype-field");
          matches.forEach((match) => callback(match));
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  document.querySelectorAll(".flighttype-field").forEach(callback);
}

watchForFlightTypeField((el) => {
  const flightDepL = document.querySelectorAll(
    ".flight-routes .departure-route .click-content label span"
  );
  flightDepL.forEach((item) => {
    item.innerText = "From";
  });
  // ______________________________________
  const flightDesL = document.querySelectorAll(
    ".flight-routes .destination-route .click-content label span"
  );
  flightDesL.forEach((item) => {
    item.innerText = "To";
  });
  // ______________________________________

  const flightDepI = document.querySelectorAll(
    ".flight-routes .departure-route .click-content .text-value"
  );
  flightDepI.forEach((item) => {
    item.placeholder = "Flying From?";
  });
  // ______________________________________
  const flightDesI = document.querySelectorAll(
    ".flight-routes .destination-route .click-content .text-value"
  );
  flightDesI.forEach((item) => {
    item.placeholder = "Where are you flying?";
  });

  // ______________________________________
  const hoteltDesL = document.querySelectorAll(
    "#r-hotel .departure-route .click-content label span"
  );
  hoteltDesL.forEach((item) => {
    item.innerText = "Where is your destination?";
  });
  // ______________________________________
  const hotelDesI = document.querySelectorAll(
    "#r-hotel .departure-route .click-content .text-value"
  );
  hotelDesI.forEach((item) => {
    item.placeholder = "Select destination";
  });
  // ______________________________________

  // ______________________________________
  const hotelDate = document.querySelectorAll(
    "#r-hotel .Basis_Date_Box .departure-date div label span"
  );
  hotelDate.forEach((item) => {
    item.innerText = "Check in";
  });

  const prt = document.querySelectorAll("#search-box .adult-count");
  prt.forEach((item) => {
    item.parentElement.classList.add("parent-for-counter-n");
  });

  // ______________________________________
  // NEW: Watch for active-module class on li inside .reservation-item
  let swiperInstance;
  if (document.querySelectorAll(".swiper-engine").length > 0) {
    swiperInstance = new Swiper(".swiper-engine", {
      slidesPerView: 1,
      speed: 400,
      centeredSlides: false,
      spaceBetween: 3,
      grabCursor: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next-f",
        prevEl: ".swiper-button-prev-f",
      },
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 3 },
        768: { slidesPerView: 1, spaceBetween: 3 },
        1024: { slidesPerView: 1, spaceBetween: 3 },
      },
    });
  }

  const liObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const target = mutation.target;
        if (target.classList.contains("active-module")) {
          const navValue = target.getAttribute("data-nav");
          if (navValue) {
            document.querySelectorAll(".reservation-item li").forEach((li) => {
              const val = li.getAttribute("data-nav");
              if (val) {
                document.body.classList.remove(val);
              }
            });
            document.body.classList.add(navValue);
            // if (swiperInstance) {
            //   swiperInstance.destroy(true, true);
            //   swiperInstance = null;
            // }
            // setTimeout(() => {
            //   swiperInstance = new Swiper(".swiper-engine", {
            //     slidesPerView: 1,
            //     speed: 400,
            //     centeredSlides: false,
            //     spaceBetween: 0,
            //     grabCursor: true,
            //     autoplay: { delay: 2000, disableOnInteraction: false },
            //     loop: true,
            //     pagination: { el: ".swiper-pagination", clickable: true },
            //     navigation: {
            //       nextEl: ".swiper-button-next-f",
            //       prevEl: ".swiper-button-prev-f",
            //     },
            //     breakpoints: {
            //       640: { slidesPerView: 1, spaceBetween: 0 },
            //       768: { slidesPerView: 1, spaceBetween: 0 },
            //       1024: { slidesPerView: 1, spaceBetween: 0 },
            //     },
            //   });
            // }, 100);
            // swiperInstance.update();
          }
        }
      }
    }
  });

  const reservationItems = document.querySelectorAll(".reservation-item li");
  reservationItems.forEach((li) => {
    liObserver.observe(li, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });
});

// _______________________________________________________
// _______________________________________________________
// _______________________________________________________
// _______________________________________________________
// _______________________________________________________

// _______________________________________________________
// _______________________________________________________
// _______________________________________________________
// _______________________________________________________
// _______________________________________________________
// _______________________________________________________

function watchForSearchHistoryContent(callback) {
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          if (
            node.matches(".searchHistory-content") ||
            node.querySelector(".searchHistory-content")
          ) {
            callback(node);
            return;
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}
watchForSearchHistoryContent(function (node) {
  document.querySelector(".limit-section").classList.add("set-margin-top");
  const sEIcon = document.querySelectorAll(".arrow-history-icon");
  sEIcon.forEach((item) => {
    item.parentElement.classList.add("parent-for-cities");
  });
});
// ______________________________________________
// ______________________________________________
// ______________________________________________
// ______________________________________________

// ___________________________________________________
// ___________________________________________________
// ___________________________________________________

// news list functions
if (document.querySelector(".newslist-section")) {
  var catid = document.querySelector(".catid").value;
  fetch(`/article-list-load.bc?catid=${catid}`)
    .then((response) => response.text())
    .then((result) => {
      document.querySelector(".load-articles").innerHTML = result;
      document.querySelector(".item-loading").classList.add("hidden");
      document
        .querySelectorAll(".load-articles script[src]")
        .forEach((script) => {
          let newScript = document.createElement("script");
          newScript.src = script.src;
          newScript.type = script.type;
          document.body.appendChild(newScript);
        });
    });
  document.querySelectorAll(".category-items li").forEach(function (element) {
    element.addEventListener("click", function () {
      document.querySelectorAll(".category-items li").forEach((e) => {
        e.classList.remove("active-category");
      });
      element.classList.add("active-category");
      var catid = this.getAttribute("data-catid");
      var articlesSection = this.closest(".newslist-section");
      var loadArticles = articlesSection.querySelector(".load-articles");
      document.querySelector(".item-loading").classList.remove("hidden");
      fetch(`/article-list-load.bc?catid=${catid}`)
        .then((response) => response.text())
        .then((result) => {
          document.querySelector(".item-loading").classList.add("hidden");
          loadArticles.innerHTML = result;
        });
    });
  });
}
// _______________________________________________
// _______________________________________________
// _______________________________________________
if (document.getElementById("search-content-article")) {
  var input = document.getElementById("search-content-name"),
    isItemSelected = !1;
  if (input) {
    function contentSearched(e, t) {
      (input.value = e),
        (document.getElementById("catidsearched").value = t),
        document.querySelector(".search-content ul").classList.add("hidden"),
        document.querySelector(".search-content ul").classList.remove("flex"),
        (isItemSelected = !0);
    }
    input.onkeyup = function () {
      const dropdown = document.querySelector(".search-content ul");
      const items = document
        .querySelector(".search-content")
        .getElementsByTagName("li");

      const filter = this.value.trim().toUpperCase();
      isItemSelected = !1;

      if (filter.length > 0) {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("flex");

        for (let i = 0; i < items.length; i++) {
          items[i].innerHTML.toUpperCase().includes(filter)
            ? (items[i].style.display = "list-item")
            : (items[i].style.display = "none");
        }
      } else {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("flex");

        for (let i = 0; i < items.length; i++) {
          items[i].style.display = "list-item";
        }
      }
    };

    document
      .getElementById("search-content-article")
      .addEventListener("submit", function (e) {
        if (!isItemSelected) {
          e.preventDefault(),
            (document.getElementById("catidsearched").value = 0);
          for (
            var t = document
                .querySelector(".search-content")
                .getElementsByTagName("li"),
              n = 0;
            n < t.length;
            n++
          )
            t[n].style.display = "list-item";
          document
            .querySelector(".search-content ul")
            .classList.remove("hidden"),
            document.querySelector(".search-content ul").classList.add("flex");
        }
      });
    document.querySelectorAll(".search-drop-down li").forEach((e) => {
      const t = e.querySelector("span").innerText;
      e.addEventListener("click", () => {
        document.querySelector("#search-content-article").action = t;
        document.querySelector("#search-content-article .anchor-form").href = t;
      });
    });
  }
}
if (document.querySelector(".anchor-form")) {
  document
    .querySelector("#search-content-article .anchor-form")
    .addEventListener("click", function (e) {
      if (!this.href || this.getAttribute("href").trim() === "") {
        e.preventDefault();
      }
    });
}
// _________________________________________________________________
async function RenderFormAdvice() {
  var e = document.querySelector(
    "#visa-form .ans-company input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", " company name ");
  var e = document.querySelector(
    "#visa-form .ans-fname input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "First Name");

  var e = document.querySelector(
    "#visa-form .ans-lname input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "Last Name");

  var e = document.querySelector(
    "#visa-form .ans-email input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "Email");

  var e = document.querySelector(
    "#visa-form .ans-phone input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "Phone");
  var e = document.querySelector(
    "#visa-form .ans-mobile input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "Mobile");

  var e = document.querySelector(
    "#visa-form .ans-webs input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "Webiste");

  var e = document.querySelector(
    "#visa-form .ans-registerno input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "Register No");

  var e = document.querySelector(
    "#visa-form .ans-National input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "National ID");

  var e = document.querySelector(
    "#visa-form .ans-Address input[data-bc-text-input]"
  );
  e.setAttribute("placeholder", "Address");
}
function uploadDocumentAdvice(e) {
  document.querySelector("#visa-form .Loading_Form").style.display = "block";
  let t = document
      .querySelector("#visa-form")
      .querySelector("#captchaContainer input[name='captcha']").value,
    r = document
      .querySelector("#visa-form")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    i = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadAdvice", {
    value: i,
    captcha: t,
    captchaid: r,
    run: !0,
  });
}
function refreshCaptchaAdvice(e) {
  $bc.setSource("captcha.refreshAdvice", !0);
}
async function OnProcessedEditObjectAdvice(e) {
  "6" == (await e.response.json()).errorid
    ? ((document.querySelector("#visa-form .Loading_Form").style.display =
        "none"),
      (document.querySelector("#visa-form .message-api").innerHTML =
        " Your request has been successfully submitted."))
    : (refreshCaptchaAdvice(),
      setTimeout(() => {
        (document.querySelector("#visa-form .Loading_Form").style.display =
          "none"),
          (document.querySelector("#visa-form .message-api").innerHTML =
            "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
// ____________________________
// function observeSearchEngineClass() {
//   const el = document.querySelector("#search_engine");
//   if (!el) return;

//   const observer = new MutationObserver(() => {
//     const classList = el.classList;
//     if (!classList.contains("hidden")) {
//       document.querySelector("#bg-box").style.display = "none";
//       document.querySelector("#bg-box").classList.add = "hidden";
//     } else {
//       document.querySelector("#bg-box").style.display = "";
//       document.querySelector("#bg-box").classList.remove = "hidden";
//     }
//   });

//   observer.observe(el, {
//     attributes: true,
//     attributeFilter: ["class"],
//   });

//   if (!el.classList.contains("hidden")) {
//     document.querySelector("#bg-box").style.display = "none";
//     document.querySelector("#bg-box").classList.add = "hidden";
//   } else {
//     document.querySelector("#bg-box").style.display = "";
//     document.querySelector("#bg-box").classList.remove = "hidden";
//   }
// }

// observeSearchEngineClass();

// ____________________________________________

if (document.querySelectorAll(".swiper-partner-d").length > 0) {
  swiper = new Swiper(".swiper-partner-d", {
    slidesPerView: 6,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 12,
    grabCursor: !0,
    autoplay: { delay: 4500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 6, spaceBetween: 12 },
      768: { slidesPerView: 6, spaceBetween: 12 },
      1024: { slidesPerView: 6, spaceBetween: 12 },
    },
  });
}
if (document.querySelector(".swiper-partner-m")) {
  var swiper = new Swiper(".swiper-partner-m", {
    slidesPerView: 1,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 12,
    grabCursor: !0,
    autoplay: { delay: 4500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 12 },
      768: { slidesPerView: 1, spaceBetween: 12 },
      1024: { slidesPerView: 1, spaceBetween: 12 },
    },
  });
}
// ______________________________________________

// if (document.querySelector(".swiper-engine-fl")) {
//   swiperFL = new Swiper(".swiper-engine-fl", {
//     slidesPerView: 1,
//     speed: 400,
//     centeredSlides: false,
//     spaceBetween: 3,
//     grabCursor: true,
//     autoplay: { delay: 2500, disableOnInteraction: false },
//     loop: true,
//     pagination: { el: ".swiper-pagination", clickable: true },
//     navigation: {
//       nextEl: ".swiper-button-next-f",
//       prevEl: ".swiper-button-prev-f",
//     },
//     breakpoints: {
//       640: { slidesPerView: 1, spaceBetween: 3 },
//       768: { slidesPerView: 1, spaceBetween: 3 },
//       1024: { slidesPerView: 1, spaceBetween: 3 },
//     },
//   });
// }

// if (document.querySelector(".swiper-engine-h")) {
//   swiperH = new Swiper(".swiper-engine-h", {
//     slidesPerView: 1,
//     speed: 400,
//     centeredSlides: false,
//     spaceBetween: 3,
//     grabCursor: true,
//     autoplay: { delay: 2500, disableOnInteraction: false },
//     loop: true,
//     pagination: { el: ".swiper-pagination", clickable: true },
//     navigation: {
//       nextEl: ".swiper-button-next-f",
//       prevEl: ".swiper-button-prev-f",
//     },
//     breakpoints: {
//       640: { slidesPerView: 1, spaceBetween: 3 },
//       768: { slidesPerView: 1, spaceBetween: 3 },
//       1024: { slidesPerView: 1, spaceBetween: 3 },
//     },
//   });
// }

// if (document.querySelector(".swiper-engine-fh")) {
//   swiperFH = new Swiper(".swiper-engine-fh", {
//     slidesPerView: 1,
//     speed: 400,
//     centeredSlides: false,
//     spaceBetween: 3,
//     grabCursor: true,
//     autoplay: { delay: 2500, disableOnInteraction: false },
//     loop: true,
//     pagination: { el: ".swiper-pagination", clickable: true },
//     navigation: {
//       nextEl: ".swiper-button-next-f",
//       prevEl: ".swiper-button-prev-f",
//     },
//     breakpoints: {
//       640: { slidesPerView: 1, spaceBetween: 3 },
//       768: { slidesPerView: 1, spaceBetween: 3 },
//       1024: { slidesPerView: 1, spaceBetween: 3 },
//     },
//   });
// }
// ____________________________________
