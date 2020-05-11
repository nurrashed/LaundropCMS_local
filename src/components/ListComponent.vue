<template>
  <li class="row">
    {{ description }} {{myMagicNumber}}
  </li>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: "send it to me"
    },
    myMagicNumber: {
        type: Number,
        default: 1
    }
  }
};
</script>

<style scoped>

.row{
    background-color: green;
}
</style>
