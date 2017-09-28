let instance;

export const setInstance = (value) => {
  window.instance = value;
  instance = value;
}

export const getInstance = () => {
  return instance;
}