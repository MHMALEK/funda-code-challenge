<template>
  <a :href="telephoneNumber">{{ number }}</a>
</template>
<script>
export default {
  name: "BaseTelephoneLink",
  props: {
    number: {
      type: String,
      required: true,
    },
  },
  computed: {
    telephoneNumber: function () {
      return `tel:${this.number}`;
    },
  },
};
</script>
