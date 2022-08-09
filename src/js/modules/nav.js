// Break into different files, and use es5 modules to import into one file
//www.youtube.com/watch?v=cRHQNNcYf6s
//---------------------------------------------------//
// ------------------ nav bar logic -------------------//
//---------------------------------------------------//

function navMenu() {
  var button = $(".js-ham-btn");
  var arrowButton = $(".js-nav-arrow");
  var navBar = $("nav");
  var projectToggle = $("#navProjects");
  var projectMenu = $(".js-nav-projects");

  projectToggle.click((e) => {
    e.preventDefault();
    projectMenu.toggleClass("nav__projects-list--hide");
  });

  arrowButton.click((e) => {
    navBar.toggleClass("nav--show");
  });

  button.click((e) => {
    navBar.toggleClass("nav--show");
  });
}

//--------------------------------------------------------//
// ------------------ jump to area nav links -------------------//
//------------------------------------------------------//
// get page title
function jumpLinks() {
  let pageTitle = $("title").text();

  //if the page title is home
  if (pageTitle === "Dylan's Website") {
    // go through nav list and grab id name
    $(".nav-list")
      .children("a")
      .each(function () {
        let idText = "#section-" + $(this).attr("id");
        //add click event and jump to that section on click
        $(this).click(function () {
          $([document.documentElement, document.body]).animate(
            {
              scrollTo: $("#section-" + $(this).attr("id")),
            },
            500
          );
        });
      });
  }
}

export { navMenu, jumpLinks };
