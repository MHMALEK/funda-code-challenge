<template>
  <header>
    <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-3 shadow-md mb-3 bg-secondary"
      role="navigation"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
        >
          <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href=""
          >
            <img :src="logoAssets" class="w-20" />
          </a>
          <button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            @click="toggleNavbar()"
          >
            <img :src="menuIconAssets" class="w-4" />
          </button>
        </div>
        <nav-bar :show-menu="showMenu">
          <nav-bar-item> Sample </nav-bar-item>
          <nav-bar-item> Sample </nav-bar-item>
        </nav-bar>
      </div>
    </nav>
  </header>
</template>

<script>
// assets
import logoAssets from "../../../../../assets/images/logo/fundawonen-logo.svg";
import menuIconAssets from "../../../../../assets/images/icons/icons8-menu-24.png";

// componets
import NavBar from "./nav-bar/index.vue";
import NavBarItem from "./nav-bar-item/index.vue";

export default {
  name: "MainHeader",
  components: {
    NavBar,
    NavBarItem,
  },
  data() {
    return {
      showMenu: false,
      logoAssets,
      menuIconAssets,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
