//---------------------------------------------------//
//------- Image carousal----///
//---------------------------------------------------//
// slide images
function imageSlide() {
  // function imgDisplay(nav) {
  //   nav.fadeIn(1000);
  //   $("img.img-active").hide();
  //   $("img.img-active").removeClass("img-active");
  //   nav.addClass("img-active");
  // }
  // //slide thumbs
  // function thumbSlide(thumb) {
  //   $(".project__imgs-slider-thumbs .current").removeClass("current");
  //   thumb.addClass("current");
  //   console.log($(".project__imgs-slider-thumbs .current").get(0));
  // }

  // //----------------------------------------
  // //-----------------CLICK event---------------------
  // //----------------------------------------
  // $(".js--slideButton").on("click", function () {
  //   var id = $(this).attr("id");
  //   var nav;
  //   var thumb;
  //   if (id == "previous") {
  //     nav = $("img.img-active").prev("img");
  //     thumb = $(".project__imgs-slider-thumbs .current").prev("li");
  //     if (nav.length == 0) {
  //       nav = $(".project__img-picture").last();
  //       thumb = $(".project__imgs-slider-thumbs .current").last("li");
  //     }
  //   } else if (id == "next") {
  //     nav = $("img.img-active").next("img");
  //     thumb = $(".project__imgs-slider-thumbs .current").next("li");
  //     if (nav.length == 0) {
  //       nav = $(".project__img-picture").first();
  //       thumb = $(".project__imgs-slider-thumbs .current").first("li");
  //     }
  //   }
  //   imgDisplay(nav);
  //   thumbSlide(thumb);
  // });

  // //----------------------------------------
  // //-----------------Swipe event---------------------
  // //----------------------------------------
  // $(".project__img").on("swiperight", function () {
  //   var nav;
  //   nav = $("img.img-active").next("img");
  //   if (nav.length == 0) {
  //     nav = $(".project__img-picture").first();
  //   }
  //   imgDisplay(nav);
  // });

  // $(".project__img").on("swipeleft", function () {
  //   var nav;
  //   nav = $("img.img-active").prev("img");
  //   if (nav.length == 0) {
  //     nav = $(".project__img-picture").last();
  //   }
  //   imgDisplay(nav);
  // });

  // grab all carousels on page
  var allCarousels = $(".project__img-innerContainer");

  //Loop through each carousel and add functionality
  allCarousels.each(function () {
    // grab the id
    let carouselId = $(this).attr("id");
  });

  function carousel(id) {
    var currentImage = 0; // Set the default image as first index (0)
    var images = $(id + ".project__img-innerContainer img"); // Select all the carousel images
    var thumbs = $(id + ".project__imgs-slider-thumbs li"); //select all thumbs imgs
  }

  var currentImage = 0; // Set the default image as first index (0)
  var images = $(".project__img-innerContainer img"); // Select all the carousel images
  var thumbs = $(".project__imgs-slider-thumbs li"); //select all thumbs imgs

  // Set the first image to be visible
  // set thumb to have a border
  images.eq(currentImage).addClass("img-active");
  thumbs.eq(currentImage).addClass("current");

  // add event listners to all images
  images.each(function () {
    $(this).on("click", function () {
      images.eq(currentImage).removeClass("img-active");
      thumbs.eq(currentImage).removeClass("current");
      currentImage = (currentImage + 1) % images.length;
      images.eq(currentImage).addClass("img-active");
      thumbs.eq(currentImage).addClass("current");
    });
  });

  // add event listners to all thumbs
  thumbs.each(function (index) {
    $(this).on("click", function () {
      //remove border class from thumb and display class from image
      images.eq(currentImage).removeClass("img-active");
      thumbs.eq(currentImage).removeClass("current");
      // Use index to update the current image
      currentImage = index;
      // add border class for thumb and dispaly the image
      images.eq(currentImage).addClass("img-active");
      thumbs.eq(currentImage).addClass("current");
    });
  });

  // Show the previous image when clicking the "Previous" button
  $("div.project__img--slide-prev").on("click", () => {
    images.eq(currentImage).removeClass("img-active");
    thumbs.eq(currentImage).removeClass("current");
    currentImage = (currentImage - 1 + images.length) % images.length;
    images.eq(currentImage).addClass("img-active");
    thumbs.eq(currentImage).addClass("current");
  });

  // Show the next image when clicking the "Next" button
  $(".project__img--slide-next").on("click", function () {
    images.eq(currentImage).removeClass("img-active");
    thumbs.eq(currentImage).removeClass("current");
    currentImage = (currentImage + 1) % images.length;
    images.eq(currentImage).addClass("img-active");
    thumbs.eq(currentImage).addClass("current");
  });
}
// // Set an interval to change the image every 5 seconds
// setInterval(function () {
//   images.eq(currentImage).removeClass("active");
//   currentImage = (currentImage + 1) % images.length;
//   images.eq(currentImage).addClass("active");
// }, 5000);
export default imageSlide;
