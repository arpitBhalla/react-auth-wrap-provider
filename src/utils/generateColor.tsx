export const generateColor = () =>
  "#" +
  Math.floor(Math.random() * 1e6)
    .toString(16)
    .padEnd(6, "3");
