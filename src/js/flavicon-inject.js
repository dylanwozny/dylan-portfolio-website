//---------------------------------------------------//
//------- inject flav icon on page----///
//---------------------------------------------------//

function injectFlav() {
  $("head").append(
    "<link rel='icon' type='image/x-icon' href='./assets/svgs/dw-logo.svg'></link>"
  );
}

export default injectFlav;
