const isObject = (item: any): boolean =>
  item && typeof item === "object" && !Array.isArray(item);

const deepFreeze = (obj: any): any => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key])
  );
  return Object.freeze(obj);
};

const colors = {
  white: "#FFF",
  azureBlue: "#0078D4",
  red: "#eb4034",
  grey: "#bdbdbd",
  lightGrey: "#e8e8e8"
};

const theme = deepFreeze({
  global: {
    colors
  }
});

export default theme;
