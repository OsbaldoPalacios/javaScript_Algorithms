 /////Conversor de números romanos

 function convertToRoman(num) {
    const base = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    const objBase = {0: "I", 1:"IV", 2:"V", 3:"IX", 4:"X", 5:"XL", 6:"L", 7:"XC", 8:"C", 9:"CD", 10:"D", 11:"CM", 12:"M"};
     let number = num
     let roman = []
     let baseMod = []
     do{
       baseMod = base.filter((a) => a<=number)
       if(number==baseMod[baseMod.length-1]){
         roman.push(objBase[base.indexOf(baseMod[baseMod.length-1])]) 
       }else{
         roman.push(objBase[base.indexOf(baseMod[baseMod.length-1])])
       }
       number = number - baseMod[baseMod.length-1]
     }while(number>0)
       return roman.join('')
   }