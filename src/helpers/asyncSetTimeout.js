const asyncSetTimeout = ({ timeout } = {}) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  
  export default asyncSetTimeout;
  