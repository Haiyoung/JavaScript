var sortTemp = require('./sort');//传入排序模块的相对路径
var arr = [6,9,12,11,3,5,8,4,1,2];
console.log(arr);
console.log(sortTemp.bubbleSort(arr));//冒泡排序
console.log(sortTemp.selectSort(arr));//简单选择排序
console.log(sortTemp.insertSort(arr));//插入排序
console.log(sortTemp.shellSort(arr));//希尔排序
console.log(sortTemp.getQuickSortedArray(arr));//快速排序
