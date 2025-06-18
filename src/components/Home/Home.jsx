import React, { useState } from 'react';
import bubbleSort from '../../algorithms/bubble-sort';
import selectionSort from '../../algorithms/selection-sort';
import insertionSort from '../../algorithms/insertion-sort';
import mergeSort from '../../algorithms/merge-sort';
import quickSort from '../../algorithms/quick-sort';
import generateRandomizedArray from '../../helpers/randomizeArray';
import SortingBar from '../SortingBar/SortingBar';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import '../../index.css';

const Home = () => {
  const arraySize = 50;
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [randomizedArray, setRandomizedArray] = useState(
    generateRandomizedArray({ arraySize: arraySize })
  );
  const [colorsArray, setColorsArray] = useState(
    new Array(randomizedArray.length).fill(0)
  );
  const [visualizationSpeed, setVisualizationSpeed] = useState(30);
  const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
  const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');

  const algorithms = [
    'Bubble Sort',
    'Selection Sort',
    'Insertion Sort',
    'Merge Sort',
    'Quick Sort'
  ];

  const algoMap = {
    'Bubble Sort': bubbleSort,
    'Selection Sort': selectionSort,
    'Insertion Sort': insertionSort,
    'Merge Sort': mergeSort,
    'Quick Sort': quickSort
  };

  const onRandomize = () => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({
      arraySize: randomizedArray.length,
    });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    setColorsArray(new Array(nextRandomizedArray.length).fill(0));
  };

  const onInputSizeChanged = (val) => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({ arraySize: val });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    setColorsArray(new Array(nextRandomizedArray.length).fill(0));
  };

  const onSpeedChange = (val) => {
    if (isVisualizing) return;
    setVisualizationSpeed(100 - val + 1);
  };

  const onVisualize = async () => {
    if (isVisualizing) return;

    const sortFunction = algoMap[currentAlgorithm];
    if (!sortFunction) {
      console.error("Algorithm not found:", currentAlgorithm);
      return;
    }

    setIsVisualizing(true);
    await sortFunction({
      array: randomizedArray,
      setArray: setRandomizedArray,
      setColorsArray: setColorsArray,
      visualizationSpeed: visualizationSpeed,
    });
    setIsVisualizing(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <HomeHeader
        algorithms={algorithms}
        onAlgorithmChange={setCurrentAlgorithm}
        currentAlgorithm={currentAlgorithm}
        onRandomize={onRandomize}
        onInputSizeChanged={onInputSizeChanged}
        onSpeedChange={onSpeedChange}
        onStart={onVisualize}
        isVisualizing={isVisualizing}
      />
      <div
        style={{
          backgroundColor: '#F2F2F2',
          display: 'flex',
          height: '100%',
          width: '100vw',
          flexDirection: 'row',
          alignItems: 'end',
          padding: '0px 0px 0px 0px',
        }}
      >
        {randomizedArray.map((item, index) => {
          const height = (item / maxItem) * 100;
          const width = (1 / randomizedArray.length) * 100;
          return (
            <div
              key={index}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'end',
                width: `${width}%`,
              }}
            >
              <SortingBar
                colorCode={colorsArray[index]}
                style={{
                  height: `calc(${height}% - 20px)`,
                  width: '100%',
                  margin: 'auto 10% 0 10%',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
