//// Cifrado César

function rot13(str) {
    const alp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const regex = /[A-Z]/
    return str.split('').map((a) => regex.test(a) ? alp.indexOf(a): a).map((a) => typeof(a)=='number'?a-13:a).map((a) => {
      if(typeof(a)=='number'){
        return a<0?alp[a+26]:alp[a]
      }else{
        return a
      }
    }).join('')
  }
  