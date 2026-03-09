module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  return matrix.reduce((acc, item, index) => {
    return acc.concat(index % 2 === 0 ? item : item.reverse());
  }, []);
};
