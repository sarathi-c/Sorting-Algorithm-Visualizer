import asyncSetTimeout from '../helpers/asyncSetTimeout';

const quickSort = async ({ array, setArray, setColorsArray, visualizationSpeed }) => {
  const sorted = new Array(array.length).fill(false);

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      
      const compareColors = new Array(arr.length).fill(0);
      compareColors[j] = 2;          
      compareColors[high] = 1;       
      setColorsArray(compareColors);
      await asyncSetTimeout({ timeout: visualizationSpeed });

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);

        const swapColors = new Array(arr.length).fill(0);
        swapColors[i] = 2;
        swapColors[j] = 2;
        swapColors[high] = 1; 
        setColorsArray(swapColors);
        await asyncSetTimeout({ timeout: visualizationSpeed });
      }

      const resetColors = new Array(arr.length).fill(0);
      resetColors[high] = 1;
      setColorsArray(resetColors);
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);

    const pivotPlaced = new Array(arr.length).fill(0);
    pivotPlaced[i + 1] = 1; 
    setColorsArray(pivotPlaced);
    await asyncSetTimeout({ timeout: visualizationSpeed });

    return i + 1;
  };

  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  };

  await quickSortHelper(array, 0, array.length - 1);

  const finalColors = new Array(array.length).fill(3);
  setColorsArray(finalColors);
};

export default quickSort;
