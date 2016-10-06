function selectSort(array){
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

var arr = [6,4,9,3,1,2,0];
console.log(arr);
selectSort(arr);
console.log(arr);