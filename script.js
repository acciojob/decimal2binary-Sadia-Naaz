function decimalToBinary(num) {
 let output=[];
	for(let i =num.value;i>0;i=(parseInt)(i/2)){
		output.push(i%2);
	}
	
  
}
 decimalToBinary();
window.decimalToBinary = decimalToBinary;
