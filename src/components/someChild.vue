<script setup lang="js">
  import { useColors } from '@/composables/useColor'
  const { globalColor, localColor } = useColors();

</script>

<template>
   <div class="square-child">
     <div :style="`background: ${localColor}`"></div>
     <span style="font-weight: 700;">Local state</span>// (not global) does not update once instantiated bc 'localColor' is defined within useColors state scope
  </div>
   <div class="square-child">
     <div :style="`background: ${globalColor}`"></div>
    <span style="font-weight: 700;">Global state</span> // updates globally bc 'globalColor' is defined outside of useColors state scope
  </div>
</template>

<style>
  .square-child{
    display: flex;
  }
  
  .square-child > div{
    height: 1.5em;
    width: 1.5em;
    margin: 0 10px 0 0;
  }

  .square-child > span{
    margin: 0 10px 0 0;
  }
</style>
