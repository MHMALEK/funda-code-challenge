export default {
  inserted: (el) => {
    function loadImage() {
      const children = Array.from(el.children);
      const imageElement = children.find((el) => el.nodeName === "IMG");
      const placeHolderElement = children.find((el) => {
        return el.attributes.getNamedItem("data-placeholder");
      });

      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => {
            el.classList.add("loaded");
          }, 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        placeHolderElement.style.display = "none";
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
