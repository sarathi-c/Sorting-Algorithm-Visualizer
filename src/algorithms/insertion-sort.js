import asyncSetTimeout from '../helpers/asyncSetTimeout';

const insertionSort = async ({ array, setArray, setColorsArray, visualizationSpeed }) => {
  const len = array.length;
  let workingArray = [...array];

  for (let i = 1; i < len; i++) {
    let key = workingArray[i];
    let j = i - 1;

    let initialColors = new Array(len).fill(0);
    initialColors[i] = 1;
    setColorsArray(initialColors);
    await asyncSetTimeout({ timeout: visualizationSpeed });

    while (j >= 0 && workingArray[j] > key) {
      workingArray[j + 1] = workingArray[j];

      let shiftingColors = new Array(len).fill(0);
      shiftingColors[j] = 2;
      shiftingColors[j + 1] = 2;
      setColorsArray(shiftingColors);

      setArray([...workingArray]);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      j--;
    }

    workingArray[j + 1] = key;
    setArray([...workingArray]);

    let placeColors = new Array(len).fill(0);
    placeColors[j + 1] = 1;
    setColorsArray(placeColors);
    await asyncSetTimeout({ timeout: visualizationSpeed });

    setColorsArray(new Array(len).fill(0));
  }

  setColorsArray(new Array(len).fill(3));
};

export default insertionSort;
