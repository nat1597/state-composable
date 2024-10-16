<script setup lang="js">
  import { useColors } from '@/composables/useColor'
  const { globalColor, localColor, updateLocalColor, updateGlobalColor } = useColors();

</script>

<template>
   <div>{{ localColor }} // does not update once instantiated (not global)</div>
   <div>{{ globalColor }} // updates globally bc it is out of useColors state scope</div>
</template>

<style>
  .square{
    height: 10em;
    width: 10em;
  }
</style>
