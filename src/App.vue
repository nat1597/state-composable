<script setup lang="js">
  import colorPicker from '@/components/colorPicker.vue'
  import squareSelect from '@/components/squareSelect.vue'
  import someChild from '@/components/someChild.vue'

  import { useColors } from '@/composables/useColor'
  const { globalColor, localColor, updateLocalColor, updateGlobalColor } = useColors();

  const handleLocalSquare = (evt) => {
    updateLocalColor(evt)
  }

  const handleGlobalSquare = (evt) => {
    updateGlobalColor(evt)
  }

</script>

<template>
  <div class="picker-container">
    <span>Local Picker</span>
    <colorPicker @color-change="handleLocalSquare" />
    <span>Global Picker</span>
    <colorPicker @color-change="handleGlobalSquare" />
    <span>Local Color</span>
    <squareSelect :color="localColor" />
    <span>Global Color</span>
    <squareSelect :color="globalColor" />
    <someChild />
  </div>
</template>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eeeeee;
  margin-top: 60px;
  height: 100vh;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;
  background: var(--clr-body-bg);
  color: var(--clr-text);
}

.picker-container {
  margin: auto;
}

.picker-container > div {
  margin: 10px auto;
}

.picker-container > span {
  font-weight: 700;
}
</style>
