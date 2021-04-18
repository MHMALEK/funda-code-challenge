<template>
  <transition name="page" mode="out-in">
    <router-view />
  </transition>
</template>

<script lang="ts">
export default {
  name: "WithTransitionRouter",
};
</script>
