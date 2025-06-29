import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import {Divider, Dropdown,theme } from 'antd';
const { useToken } = theme;

const AlgorithmDropDown = ({
  currentAlgorithm,
  algorithms,
  onAlgorithmChange,
}) => {
  const width = 175;

  const items = algorithms.map((algorithm) => ({
    key: algorithm,
    label: (
      <div
        onClick={() => onAlgorithmChange(algorithm)}
        style={{
          fontWeight: currentAlgorithm === algorithm ? 'bold' : 'normal',
          padding: '4px 8px',
          borderRadius: '4px',
          backgroundColor: currentAlgorithm === algorithm ? '#e6f7ff' : 'transparent',
        }}
      >
        {algorithm}
      </div>
    ),
  }));
  

  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = {
    boxShadow: 'none',
  };

  return (
    <Dropdown
      menu={{ items }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(menu, { style: menuStyle })}
          <Divider style={{ margin: 0 }} />
        </div>
      )}
    >
      <div
        style={{
          height: 20,
          width: width,
          padding: 10,
          fontWeight: 'bold',
          background: '#05BDCF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          borderRadius: '8px',
        }}
      >
        {currentAlgorithm} <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default AlgorithmDropDown;






