//--------------------------------------------------------//
// ------------------ Skil Search Logic -------------------//
//------------------------------------------------------//

// ----- prevent enter from refreshing page when on textbox----//
function noRefresh() {
  $("#filter").on("keydown", function (e) {
    if (e.which === 13) {
      e.preventDefault();
    }
  });
}

// ----- skill search logic----//
function searchSkills() {
  noRefresh();
  const tagSearch = $(".frm-control");

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

      // do this if inside tag values match the search
      if (!insideTag.includes(searchValue)) {
        $(Element).addClass("skills__card--hidden");
      } else {
        $(Element).removeClass("skills__card--hidden");
      }
    });
  });
}

export default searchSkills;
