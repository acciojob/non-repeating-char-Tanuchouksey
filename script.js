function firstNonRepeatedChar(str) {
 let count={};    
    for(let i=0;i<str.length;i++){
        if(count[str.charAt(i)]==undefined)
            count[str.charAt(i)]=1;
        else
            count[str.charAt(i)]+=1;
    }
    let i=0;
    let ans=null;
    for (const key in count) {
        if (count.hasOwnProperty(key)) {
            const value = count[key];
        } 
        if(count[key]==1){
            ans=key;
            break;
        }
    }
    return ans;
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
This function first creates a frequency map to count the occurrences of each character in the string, and then it iterates through the string to find the first character with a frequency of 1. If no such character is found, it returns null.





