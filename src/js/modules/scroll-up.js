//---------------------------------------------------//
// ------------------ jump to top of page arrow -------------------//
//---------------------------------------------------//

//if page is scrolled to bottom, inject the scroll up button as html

function snapTop() {
  var goToTop = $(".btn-scroll");

  goToTop.click(() => {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
}

export default snapTop;
