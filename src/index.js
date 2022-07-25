module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let char of str) {
    if (stack.length == 0) {
      stack.push(char);
    } else {
      if (bracketsConfig.flat().indexOf(stack[stack.length - 1]) == bracketsConfig.flat().lastIndexOf(char) - 1) {
      stack.pop();
      } else {
        stack.push(char);
      } 
    }
  }
  return stack.length > 0 ? false : true;
}
