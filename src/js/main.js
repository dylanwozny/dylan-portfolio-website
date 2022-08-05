import snapTop from "./scroll-up.js";
import searchSkills from "./skills.js";
import { navMenu, jumpLinks } from "./nav.js";
import injectFlav from "./flavicon-inject.js";
// REDO THIS AS GOOD JQUERY
// Break into different files, and use es5 modules to import into one file
//www.youtube.com/watch?v=cRHQNNcYf6s
//---------------------------------------------------//
// ------------------ nav bar logic -------------------//
//---------------------------------------------------//

$(document).ready(function () {
  snapTop();
  searchSkills();
  navMenu();
  jumpLinks();
  injectFlav();
});
