// REDO THIS AS GOOD JQUERY
// Break into different files, and use es5 modules to import into one file
//www.youtube.com/watch?v=cRHQNNcYf6s
//---------------------------------------------------//
// ------------------ nav bar logic -------------------//
//---------------------------------------------------//
$(document).ready(function () {
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

  // link you JQuery in your html and try out a solution!
  // INSTALL NPM lint!!!!
  // Enter your JavaScript for the solution here...
  //--------------------------------------------------------//
  // ------------------ Skil Search Logic -------------------//
  //------------------------------------------------------//

  // ----- prevent enter from refreshing page when on textbox----//
  $("#filter").on("keydown", function (e) {
    if (e.which === 13) {
      e.preventDefault();
    }
  });

  const tagSearch = $(".frm-control");
  // const searchReset = $(".frm-group > a");

  // ----------grab the image div and convert to array-------------//
  const imageContainer = $(".js-skills__card--display");
  const imagesContainerArray = Array.from(imageContainer);

  // -------event on search input--------//
  tagSearch.on("input", (e) => {
    // return search value, remove whitespaces and convert to lower case
    let searchValue = (tagSearch.textContent = e.target.value)
      .replace(/ /g, "")
      .toLowerCase();

    // go through each container in images and gram the p value
    imagesContainerArray.forEach((Element) => {
      // grab contents of figcaption and convert to lowercase and remove spaces
      let insideTag = Element.querySelector("figcaption")
        .innerHTML.toLowerCase()
        .replace(/ /g, "");
      console.log(searchValue);

      // do this if inside tag values match the search
      if (!insideTag.includes(searchValue)) {
        $(Element).addClass("skills__card--hidden");
      } else {
        $(Element).removeClass("skills__card--hidden");
      }
    });
  });

  //--------------------------------------------------------//
  // ------------------ jump to area nav links -------------------//
  //------------------------------------------------------//
  // get page title
  let pageTitle = $("title").text();
  console.log(pageTitle);

  //if the page title is home
  if (pageTitle === "Dylan's Website") {
    console.log("your on " + pageTitle);

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

  //---------------------------------------------------//
  //------- inject flav icon on page----///
  //---------------------------------------------------//

  $("head").append(
    "<link rel='icon' type='image/x-icon' href='./assets/svgs/dw-logo.svg'></link>"
  );

  //---------------------------------------------------//
  // ------------------ jump to top of page arrow -------------------//
  //---------------------------------------------------//

  //------------append html fragment with jquery---------------
  // scrollSection = $("<section></section>", { class: "page-grid__wrapper" });
  // $(".page-grid").append(scrollSection);
  //---------------------------------------

  //if page is scrolled to bottom, inject the scroll up button as html

  var goToTop = $(".btn-scroll");

  goToTop.click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
});
