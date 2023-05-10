//? Palindrome checker

function palindrome(str) {
  //! str to Lower Case  
  const strL = str.toLowerCase();
  //! only alphanumeric characters allowed
  const arrRight = strL.split('').filter((a) => /[a-zA-Z0-9]/.test(a));
  //! array reversed
  const arrReverse = strL.split('').filter((a) => /[a-zA-Z0-9]/.test(a)).reverse();
  //! Equality compared
  if(arrRight.join('')==arrReverse.join('')){
    return true;
  }else{
    return false;
  }
}

palindrome("Not a palindrome"); //! return false