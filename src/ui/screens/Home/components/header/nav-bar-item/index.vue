<template>
  <li class="nav-item">
    <a
      class="text-white px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
      href="#"
    >
      <span class="ml-2 text-white">
        <slot></slot>
      </span>
    </a>
  </li>
</template>
<script>
export default {
  name: "NavBarItem",
};
</script>
