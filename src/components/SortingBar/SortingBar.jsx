import React from 'react';

const SortingBar = ({ colorCode, style }) => {
  let color = '#024950';

  switch (colorCode) {
    case 1:
      color = '#1fd655';
      break;
    case 2:
      color = 'red';
      break;
    case 3:
      color = 'yellow';
      break;
    default:
      break;
  }

  return <div style={{ ...style, backgroundColor: color }}></div>;
};

export default SortingBar;
