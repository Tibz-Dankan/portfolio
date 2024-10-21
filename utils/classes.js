export const classes = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
