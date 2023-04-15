import snapTop from "./modules/scroll-up.js";
import searchSkills from "./modules/skills.js";
import { navMenu, jumpLinks } from "./modules/nav.js";
import injectFlav from "./modules/flavicon-inject.js";
// Break into different files, and use es5 modules to import into one file
//www.youtube.com/watch?v=cRHQNNcYf6s

//---------------------------------------------------//
// ------------------ Does Not Compile USE PUBLIC FOR JS  -------------------//
//---------------------------------------------------//

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

console.log("this code is working");
