import asyncSetTimeout from '../helpers/asyncSetTimeout';

const mergeSort = async ({ array, setArray, setColorsArray, visualizationSpeed }) => {
  let workingArray = [...array];

  const merge = async (start, mid, end) => {
    const left = workingArray.slice(start, mid + 1);
    const right = workingArray.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      const colors = new Array(workingArray.length).fill(0);

      colors[start + i] = 2;
      colors[mid + 1 + j] = 2;

      colors[k] = 1;

      setColorsArray(colors);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      if (left[i] <= right[j]) {
        workingArray[k] = left[i];
        i++;
      } else {
        workingArray[k] = right[j];
        j++;
      }

      setArray([...workingArray]);
      k++;
    }

    while (i < left.length) {
      const colors = new Array(workingArray.length).fill(0);
      colors[k] = 1; 
      colors[start + i] = 2; 
      setColorsArray(colors);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      workingArray[k++] = left[i++];
      setArray([...workingArray]);
    }

    while (j < right.length) {
      const colors = new Array(workingArray.length).fill(0);
      colors[k] = 1; 
      colors[mid + 1 + j] = 2; 
      setColorsArray(colors);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      workingArray[k++] = right[j++];
      setArray([...workingArray]);
    }

    setColorsArray(new Array(workingArray.length).fill(0));
  };

  const divide = async (start, end) => {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    await divide(start, mid);
    await divide(mid + 1, end);
    await merge(start, mid, end);
  };

  await divide(0, workingArray.length - 1);

  setColorsArray(new Array(workingArray.length).fill(3));
};

export default mergeSort;
