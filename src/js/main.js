// REDO THIS AS GOOD JQUERY
//---------------------------------------------------//
// ------------------ nav bar logic -------------------//
//---------------------------------------------------//
$(document).ready(function () {
  var button = $(".nav-btn");
  var arrowButton = $(".nav-arrow");
  var navBar = $("nav");

  arrowButton.click((e) => {
    navBar.toggleClass("nav-show");
  });

  button.click((e) => {
    navBar.toggleClass("nav-show");
  });

  // link you JQuery in your html and try out a solution!
  // INSTALL NPM lint!!!!
  // Enter your JavaScript for the solution here...
  //--------------------------------------------------------//
  // ------------------ Skil Search Logic -------------------//
  //------------------------------------------------------//

  const tagSearch = $(".frm-control");
  // const searchReset = $(".frm-group > a");

  let boolResult = 1;

  // ----------grab the image div and convert to array-------------//
  const imageContainer = $(".skillCards__card--display");
  const imagesContainerArray = Array.from(imageContainer);

  // -------event on search input--------//
  tagSearch.on("input", (e) => {
    // set bool result to hide reset button
    boolResult = 0;
    e.preventDefault();

    // return search value, remove whitespaces
    let searchValue = (tagSearch.textContent = e.target.value).replace(
      / /g,
      ""
    );

    // go through each container in images and gram the p value
    imagesContainerArray.forEach((Element) => {
      // grab contents of figcaption and convert to lowercase and remove spaces
      let insideTag = Element.querySelector("figcaption")
        .innerHTML.toLowerCase()
        .replace(/ /g, "");
      console.log(searchValue);

      // do this if inside tag values match the search
      if (!insideTag.includes(searchValue)) {
        $(Element).addClass("hidden");
      } else {
        $(Element).removeClass("hidden");
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
              scrollTop: $("#section-" + $(this).attr("id")),
            },
            500
          );
        });
      });
  }

  //------- inject flav icon on page----///

  $("head").append(
    "<link rel='icon' type='image/x-icon' href='./assets/svgs/dw-logo.svg'></link>"
  );
});
