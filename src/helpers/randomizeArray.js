const generateRandomizedArray = ({ arraySize } = {}) => {
    const randomizedArray = [];
  
//generating a random array with values between 10 and 100

    for (let i = 0; i < arraySize; i++) {
      const randomNumber = Math.floor(Math.random() * (100 - 10) + 10); 
      randomizedArray.push(randomNumber);
    }
  
    return randomizedArray;
  };
  
  export default generateRandomizedArray;
  