import { mount } from "@vue/test-utils";
import BaseCarousel from "./index.vue";
const sampleSlide = "<div>slide</div><div>slide</div><div>slide</div>";

test("displays message", () => {
  const wrapper = mount(BaseCarousel, {
    slots: {
      default: sampleSlide,
    },
  });

  expect(wrapper.find("div")).toContain("slide");
});
