$(document).ready(function () {
  // add toggle functionality to abstract, summary, award and bibtex buttons
  // (only one panel is open at a time)
  var panels = ["abstract", "summary", "award", "bibtex"];
  panels.forEach(function (name) {
    $("a." + name).click(function () {
      var entry = $(this).parent().parent();
      panels.forEach(function (other) {
        if (other !== name) {
          entry.find("." + other + ".hidden.open").removeClass("open");
        }
      });
      entry.find("." + name + ".hidden").toggleClass("open");
    });
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
