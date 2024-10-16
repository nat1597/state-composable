<script setup lang="js">
  import { useColors } from '@/composables/useColor'
  const { globalColor, localColor } = useColors();

</script>

<template>
   <div><span style="font-weight: 700;">Local state</span> - {{ localColor }} // does not update once instantiated (not global)</div>
   <div><span style="font-weight: 700;">Global state</span> - {{ globalColor }} // updates globally bc it is out of useColors state scope</div>
</template>

<style>
  .square{
    height: 10em;
    width: 10em;
  }
</style>
