import { ref } from "vue";

const globalColor = ref("plum");

export const useColors = () => {

  const colorList = ref([
    {color: 'gold', selected: false},
    {color: 'plum', selected: false},
    {color: 'greenyellow', selected: false},
    {color: 'hotpink', selected: false},
    {color: 'aqua', selected: false},
])

  const localColor = ref("greenyellow");
  
  const switchColor = (evt, item) => {
    colorList.value.forEach(c => {
      c.selected = false
    })
    item.selected = true
  }

  const updateLocalColor = (color) => localColor.value = color

  const updateGlobalColor = (color) => globalColor.value = color;

  return {
    globalColor,
    localColor,
    updateLocalColor,
    switchColor,
    colorList,
    updateGlobalColor,
  };
};
