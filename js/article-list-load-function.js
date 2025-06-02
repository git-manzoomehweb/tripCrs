document.querySelectorAll(".paging-link").forEach(function (element) {
  element.addEventListener("click", function () {
    var link = this.getAttribute("data-href");
    var articlesSection = this.closest(".newslist-section");
    var loadArticles = articlesSection.querySelector(".load-articles");
    fetch(`${link}`)
      .then((response) => response.text())
      .then((result) => {
        document.querySelector(".item-loading").classList.add("hidden");
        loadArticles.innerHTML = result;

        loadArticles.querySelectorAll("script").forEach((script) => {
          let newScript = document.createElement("script");
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      });
  });
});
