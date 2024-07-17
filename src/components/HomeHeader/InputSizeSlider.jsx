import { Slider } from 'antd';
import React from 'react';

const InputSizeSlider = ({ onInputSizeChanged, isVisualizing }) => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ color: '#024950', fontWeight: 'bold' }}>Array Size</div>
      <Slider
        disabled={isVisualizing}
        defaultValue={100}
        min={5}
        max={200}
        step={2}
        style={{ width: 200 }}
        trackStyle={{ background: '#05BDCF' }}
        onChange={onInputSizeChanged}
      />
    </div>
  );
};

export default InputSizeSlider;



