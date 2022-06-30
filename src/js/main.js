// REDO THIS AS GOOD JQUERY

// nav bar logic

var button = document.querySelector(".nav-btn");
console.log(button);

button.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("nav-show");
});

// On input or change or type update search

// link you JQuery in your html and try out a solution!
// INSTALL NPM lint!!!!
// Enter your JavaScript for the solution here...

const tagSearch = $(".frm-control");
// const searchReset = $(".frm-group > a");

let boolResult = 1;

// ----------grab the image div and convert to array-------------//
const imageContainer = $(".skillCards__card--display");
const imagesContainerArray = Array.from(imageContainer);
console.log(imagesContainerArray);
console.log("hello");

// -------event on search input--------//
tagSearch.on("input", (e) => {
  // set bool result to hide reset button
  boolResult = 0;
  e.preventDefault();

  // return search value, remove whitespaces
  const searchValue = (tagSearch.textContent = e.target.value).replace(
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
