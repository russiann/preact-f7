let instance;

export const setInstance = (value) => {
  instance = value;
}

export const getInstance = () => {
  return instance;
}