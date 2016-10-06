function shellSort(array){
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

var arr = [6,4,9,3,1,2,0];
console.log(arr);
shellSort(arr);
console.log(arr);
