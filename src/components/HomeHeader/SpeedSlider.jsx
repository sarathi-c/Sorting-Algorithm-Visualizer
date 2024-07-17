import React from 'react';
import { Slider } from 'antd';

const SpeedSlider = ({ onSpeedChange, isVisualizing }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ color: '#024950', fontWeight: 'bold' }}>
        Visualization Speed
      </div>
      <Slider
        disabled={isVisualizing}
        defaultValue={30}
        style={{ width: 200 }}
        trackStyle={{ background: '#05BDCF' }}
        onChange={onSpeedChange}
      />
    </div>
  );
};

export default SpeedSlider;
