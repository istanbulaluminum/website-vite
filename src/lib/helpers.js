export const phoneFormatter = (n) => {
  return `+${n.slice(0, 2)}-${n.slice(2, 5)}-${n.slice(5, 8)}-${n.slice(8)}`;
};
