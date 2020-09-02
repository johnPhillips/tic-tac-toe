const getCellClassNameFactory = ({ isWin, winningSet }, cell) => {
  let classNames = ["cell"];
  if (isWin && winningSet.includes(cell)) classNames.push("isWin");
  return classNames.join(" ");
};

export default getCellClassNameFactory;
