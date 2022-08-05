/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
 const splitArray = (oldArr, num) => {
  // TODO：请补充代码实现功能
  let newArr = [];
  
  // 升序排序后解构赋值深拷贝给oldArr2
  let oldArr2 = [...oldArr.sort((a, b) => a - b)];
  
  const len = oldArr2.length;
  for (let i = 0, j = 0; i < len; i += num, j++) {
      // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
      newArr[j] = oldArr2.splice(0, num);
  }

  return newArr;
};
module.exports = splitArray; // 检测需要，请勿删除

