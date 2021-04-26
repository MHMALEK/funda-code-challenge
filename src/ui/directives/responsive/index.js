const checkMatchMediaQuery = (mediaQueryString) =>
  window.matchMedia(mediaQueryString);

const handleResizeChange = (el, mediaQueryString) => {
  const { matches } = checkMatchMediaQuery(mediaQueryString);

  if (matches) {
    el.style.display = "none";
  }
};

const responsiveHideAtDirective = {
  beforeMount(el, binding) {
    const mediaQueryString = `(${binding.arg ? binding.arg : "max-width"}: ${
      binding.value
    })`;
    handleResizeChange(el, mediaQueryString);
  },
};

const deviceSizes = {
  mobile: "360px",
  tablet: "780px",
  laptopLg: "1200",
};

export { deviceSizes };
export default responsiveHideAtDirective;
