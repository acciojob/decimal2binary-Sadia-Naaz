function decimalToBinary(decimal,binary) {
 let output=[];
	for(let i =decimal.value;i>0;i=(parseInt)(i/2)){
		output.push(i%2);
	}
	binary.value=output.reverse.toString();
  
}
 decimalToBinary();
window.decimalToBinary = decimalToBinary;
