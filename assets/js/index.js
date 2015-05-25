function Randomize() {
    var images = new Array(
      "https://farm3.staticflickr.com/2862/13691055065_9b62a4c91e_h.jpg",
      "https://farm8.staticflickr.com/7180/13690776774_04838d146f_h.jpg",
      "https://farm8.staticflickr.com/7239/13690167575_62fa8a411d_h.jpg",
      "https://farm3.staticflickr.com/2875/13415150985_227f8d5565_h.jpg",
      "https://farm4.staticflickr.com/3816/13414441813_3e44132928_h.jpg",
      "https://farm8.staticflickr.com/7433/13151617114_55946fa60f_h.jpg",
      "https://farm4.staticflickr.com/3805/12887569465_e54ae7a959_h.jpg",
      "https://farm4.staticflickr.com/3814/13819981343_70ff3b30db_h.jpg",
      "https://farm4.staticflickr.com/3699/13820048134_7b449c55fe_h.jpg",
      "https://farm4.staticflickr.com/3755/13819407643_2e8a10619f_h.jpg"
    );
    var imageNum = Math.floor(Math.random() * images.length);
    document.getElementById("js-random-image").style.backgroundImage = "url('" + images[imageNum] + "')";
}

window.onload = Randomize;