////-------Mínimo común múltiplo
/*
    Determina el mcm(a, a+1, a+2,..., b-1,b)
    Donde arr=[a,b]  y a<b
*/

function mcm(arr) {
    const [a,b] = [arr[0], arr[1]].sort((a,b) => a-b);
    // Elements list
    let elements = []
    for(let i=a; i<=b;i++){
      elements.push(i)
    }
    // Dividers function
    function divider(num){
      const dividers = []
      for(let i=1; i<=num; i++){
        if(num%i==0){
          dividers.push(i)
        }
      }
      return dividers
    }
    //Primes function
    function primes(num){
      const primesList =[]
      for(let i=1; i<=num;i++){
        if(divider(i).length==2){
          primesList.push(i);
        }
      }
      return primesList
    }
    ////Reducción lista
    let factors = [];
  
    for(let i=0; i<primes(b).length; i++){
      let proof = elements.some((element) => element%primes(b)[i]==0)
      while(proof){
        elements = elements.map((element) => {return (element%primes(b)[i]==0)? element/primes(b)[i] : element})
        factors.push(primes(b)[i])
        proof = elements.some((element) => element%primes(b)[i]==0)
      }
    }
    return factors.reduce((prod, value) => prod*value,1)
  }
  
console.log( mcm([23,18])); //mcm(18,19,20,21,22,23)=6056820
  