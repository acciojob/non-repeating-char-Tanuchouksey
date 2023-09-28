function firstNonRepeatedChar(str) {
 // Write your code here
	let n =str.length(); 
	let ans=""; 
	for (let i=0; i<n;i++) {
		var c=str.charAt(i);
		if(ans.isEmpty())
		{ 
			ans=ans+c;
		}
		else if(c--str.charAt(i+1)
		{
			ans.splice(0,-1)
		}
		else 
		{
			return ans;
		}
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
