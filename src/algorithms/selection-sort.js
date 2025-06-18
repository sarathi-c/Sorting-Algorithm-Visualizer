import asyncSetTimeout from '../helpers/asyncSetTimeout';

const selectionSort = async ({ array, setArray, setColorsArray, visualizationSpeed }) => {
  const len = array.length;
  let colors = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      colors = new Array(len).fill(0);
      for (let k = 0; k < i; k++) colors[k] = 3; 
      colors[i] = 1;  
      colors[j] = 2;  
      setColorsArray(colors);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      colors = new Array(len).fill(0);
      for (let k = 0; k < i; k++) colors[k] = 3; // keep sorted
      colors[i] = 2;
      colors[minIndex] = 2;
      setColorsArray(colors);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      setArray([...array]);
    }

    colors = new Array(len).fill(0);
    for (let k = 0; k <= i; k++) colors[k] = 3;
    setColorsArray(colors);
    await asyncSetTimeout({ timeout: visualizationSpeed });
  }

  setColorsArray(new Array(len).fill(3));
};

export default selectionSort;
