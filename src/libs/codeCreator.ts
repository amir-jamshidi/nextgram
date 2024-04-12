const codeCreator = (min: number, max: number) => {
  return Math.ceil(Math.random() * (max - min)) + min;
};

export default codeCreator;
