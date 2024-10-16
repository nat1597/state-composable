<script setup lang="js">
const props = defineProps({
  color: String
})

</script>

<template>
  <div class="square" :style="`background: ${color}`"></div>
</template>

<style>
  .square{
    height: 10em;
    width: 10em;
  }
</style>
