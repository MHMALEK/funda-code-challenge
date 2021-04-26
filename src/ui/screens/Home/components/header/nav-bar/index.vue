<template>
  <div
    :class="{ hidden: !showMenu, flex: showMenu }"
    class="lg:flex lg:flex-grow items-center"
  >
    <ul class="flex flex-col lg:flex-row list-none ml-auto">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavBarItem",
  props: {
    showMenu: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
