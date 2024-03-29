var images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
  var src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  var newImg = new Image();
  newImg.src = src;
  newImg.addEventListener("load", () => {
    img.src = src;
    img.removeAttribute("data-src");
    img.setAttribute("data-loaded", "true");
  });
}

var imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
};

var imgObserver = new IntersectionObserver((items, imgObserver) => {
  items.forEach((item) => {
    if (!item.isIntersecting) {
      return;
    } else {
      preloadImage(item.target);
      imgObserver.unobserve(item.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
