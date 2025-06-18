import asyncSetTimeout from '../helpers/asyncSetTimeout';

const bubbleSort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
}) => {
  const len = array.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      let newColorsArray = new Array(len).fill(0);

      newColorsArray[j] = 1;
      newColorsArray[j + 1] = 2;

      for (let k = len - i; k < len; k++) {
        newColorsArray[k] = 3;
      }

      setColorsArray(newColorsArray);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        setArray([...array]);
      }
    }
  }

  setColorsArray(new Array(len).fill(3));
};

export default bubbleSort;
