document.addEventListener("DOMContentLoaded", function () {
  function checkAllResourcesLoaded() {
    const resources = performance.getEntriesByType("resource");
    const requiredFiles = [
      "[##cms.cms.cdn##]/css/customized.ui.min.css",
      "[##cms.cms.cdn##]/_js/swiper-bundle.11.2.5.min.js",
    ];
    const loadedFiles = resources
      .filter((res) => requiredFiles.includes(res.name) && res.responseEnd > 0)
      .map((res) => res.name);

    return requiredFiles.every((file) => loadedFiles.includes(file));
  }

  function fetchEngine() {
    try {
      var xhrobj = new XMLHttpRequest();
      xhrobj.open("GET", "searchengineSample.bc");
      xhrobj.send();

      xhrobj.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var container = document.getElementById("search-box");
          container.innerHTML = xhrobj.responseText;

          var scripts = container.getElementsByTagName("script");
          for (var i = 0; i < scripts.length; i++) {
            var scriptTag = document.createElement("script");
            if (scripts[i].src) {
              scriptTag.src = scripts[i].src;
              scriptTag.async = false;
            } else {
              scriptTag.text = scripts[i].textContent;
            }
            document.head
              .appendChild(scriptTag)
              .parentNode.removeChild(scriptTag);
          }
        }
      };
    } catch (error) {
      console.error("مشکلی رخ داده است لطفا صبور باشید.", error);
    }
  }
  function waitForFiles() {
    if (checkAllResourcesLoaded()) {
      fetchEngine();
    } else {
      setTimeout(waitForFiles, 500);
    }
  }

  waitForFiles();
});
