
function quickSort(array,left,right){
	var i,j,value;
	if(left<right){
		i=left,j=right,value=array[left];
		while(i<j){
				while(i<j&&array[j]>=value){//从右到左找到第一个比枢纽值小的
					j--;
				}
				if(i<j){
					array[i++]=array[j];
				}
				
				while(i<j&&array[i]<value){//从左到右边找到第一个不小于枢纽值的
					i++;
				}
				if(i<j){
					array[j--]=array[i];
				}
			}
			array[i] = value;
			quickSort(array, left, j-1);
			quickSort(array, i+1, right);
	}
}

function getSortedArray(array){
	quickSort(array,0,array.length-1);
	return array;
}

var arr = [6,9,12,11,3,5,8,4,1,2];
console.log(arr);
getSortedArray(arr);
console.log(arr);