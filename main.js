var general_init = () => {
  $(document).ready(() => {
    $("header").load("/Music4All/utility/templates/header.html");
  });

  $(body)
    .append(`<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous" ></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script><link rel="stylesheet" href="/Music4All/main.css" />
  `);
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
