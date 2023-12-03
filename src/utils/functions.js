export const getArrFromNum = num => Array.from({ length: num }, (_, index) => index + 1);
export const getBoxValue = object => Object.values(object).join(" ");