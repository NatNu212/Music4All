var general_init = () => {
  $(document).ready(() => {
    $("header").load("/Music4All/utility/templates/header.html");
  });
};

general_init();

var header_setActiveTab = () => {
  const path = window.location.pathname
    .replace("index.html", "")
    .replaceAll("/", "")
    .replace("Music4All", "");
  const id = path == "" ? "#homeLink" : "#" + path + "Link";
  if (id != "#homeLink") {
    console.log("hi");
    $(".nav-item, .navbar-brand").addClass("anim-instant");
  }
  $(id).addClass("active");
};

var home_init = () => {
  let was_lg = $(window).width() > 1000;
  $(document).ready(() => {
    $("header").load("/Music4All/utility/templates/header.html");
    if (was_lg) {
      $("#ctt").load("/Music4All/sec-lg.html");
    } else {
      $("#ctt").load("/Music4All/sec-sm.html");
    }
  });

  $(window).on("resize", () => {
    var curr_lg = $(window).width() > 1000;
    if (curr_lg && !was_lg) {
      $("#ctt").empty();
      $("#ctt").load("/Music4All/sec-lg.html");
    } else if (!curr_lg && was_lg) {
      $("#ctt").empty();
      $("#ctt").load("/Music4All/sec-sm.html");
    }
    was_lg = curr_lg;
  });
};
