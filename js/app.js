document.addEventListener("DOMContentLoaded", function () {
    console.log("działa");
    /*** SLIDER ***/
    var leftArrow = document.querySelector("#left_arrow");
    var rightArrow = document.querySelector("#right_arrow");
    var sliderPhotos = document.querySelectorAll(".photo_slider");
    var incr = 0;
    sliderPhotos[incr].classList.add("visible");
    /*** NEXT SLIDE***/
    rightArrow.addEventListener("click", function nextPic(event) {
            //            console.log(incr);
            sliderPhotos[incr].classList.remove("visible");
            if (incr >= sliderPhotos.length - 1) {
                sliderPhotos[incr].classList.remove("visible");
                incr = -1;
            }
            incr = incr + 1;
            sliderPhotos[incr].classList.add("visible");
            //            console.log(incr);
        })
        /*** PREVIOUS SLIDE ***/
    leftArrow.addEventListener("click", function prevPic(event) {
        sliderPhotos[incr].classList.remove("visible");
        if (incr <= 0) {
            sliderPhotos[0].classList.remove("visible");
            incr = sliderPhotos.length;
        }
        incr = incr - 1;
        sliderPhotos[incr].classList.add("visible");
    })
})