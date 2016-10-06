//冒泡排序
exports.bubbleSort = function (array){
	var i,j,temp;
	for(i=0;i<array.length-1;i++){
		for(j=0;j<array.length-i-1;j++){
			if(array[j]>array[j+1]){
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	return array;
}

//简单选择排序
exports.selectSort = function (array){
	var i,j,pos,temp;
	for(i=0;i<array.length;i++){
		pos = i;
		for(j=i+1;j<array.length;j++){
			if(array[pos]>array[j]){
				pos = j;
			}
		}
		temp = array[i];
		array[i] = array[pos];
		array[pos] = temp;
	}
	return array;
}

//插入排序
exports.insertSort = function (array){
	var i,j,temp;
	for(i=0;i<array.length;i++){
		temp = array[i];
		for(j=i;j>0&&temp<array[j-1];j--){
			array[j] = array[j-1];
		}
		array[j] = temp;
	}
	return array;
}

//希尔排序
exports.shellSort = function (array){
	var i,j,gap,temp;
	for(gap = parseInt(array.length/2);gap>0;gap=parseInt(gap/2)){
		for(i=gap;i<array.length;i++){
			temp = array[i];
			for(j=i;j>=gap&&temp<array[j-gap];j-=gap){
				array[j] = array[j-gap];
			}
			array[j] = temp;
		}
	}
	return array;
}

//快速排序
exports.getQuickSortedArray = function (array){
	quickSort(array,0,array.length-1);
	return array;
}

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