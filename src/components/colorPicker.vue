<script setup lang="js">
import { useColors } from '@/composables/useColor'
const { colorList, switchColor } = useColors();

</script>

<template>
  <div>
    <form class="color-picker" action="">
      <fieldset>
        <div v-for="c in colorList">
          <legend class="visually-hidden">Pick a color scheme</legend>
          <label for="c" class="visually-hidden"></label>
          <input type="radio" name="c" :checked="c.selected" @click="switchColor($event, c), $emit('color-change', c.color)" :style="c.selected ? `background-color: ${c.color};` : 'background-color: white;'" />
        </div>
      </fieldset>
    </form>
</div>
</template>

<style>
.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.color-picker > fieldset {
  border: 0;
  display: flex;
  gap: 2rem;
  width: fit-content;
  background: #fff;
  padding: 1rem 2rem;
  margin-inline: auto;
  border-radius: 1rem;
}

.color-picker input[type="radio"] {
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  outline: 3px solid var(--radio-color, currentColor);
  outline-offset: 3px;
  border-radius: 50%;
  cursor: pointer;
}

.color-picker input[type="radio"]:checked {
  background-color: var(--radio-color);
}
</style>
