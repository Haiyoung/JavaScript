function insertSort(array){
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

var arr = [6,4,9,3,1,2,0];
console.log(arr);
insertSort(arr);
console.log(arr);