//select all elements
const textInput= document.querySelector('#text-input');
const checkButton =document.querySelector('#check-btn');
const result =document.querySelector('#result');

//eventlistners
checkButton.addEventListener('click',function(e){
   const regex = /[!@#$%^&*(),.?":{}|<>_\-\s+=*]/g;;
 const inputWord = textInput.value.split().map(char=> char.replace(regex,'') ).join('').toLowerCase();
 const reverseInputWord= inputWord.split('').reverse().join('');
  console.log(reverseInputWord);
   if(textInput.value ==='') {
   alert('please input a value');
}
   if(inputWord === reverseInputWord) {
   result.innerHTML =`${textInput.value} is a palindrome`;
}
else if (inputWord !== reverseInputWord){
  result.innerHTML =`${textInput.value} is not a palindrome`;
}
})