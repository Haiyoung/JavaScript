function bubbleSort(array){
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

var arr = [6,4,9,3,1,2,0];
console.log(arr);
bubbleSort(arr);
console.log(arr);