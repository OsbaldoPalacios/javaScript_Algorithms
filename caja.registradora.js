function checkCashRegister(price, cash, cid) {
    const currencyValues = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    const changeAmount = cash - price;
    let totalCash = 0;
    for (let i = 0; i < cid.length; i++) {
      totalCash += cid[i][1];
    }
    totalCash = parseFloat(totalCash.toFixed(2));
  
    if (totalCash < changeAmount) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCash === changeAmount) {
      return { status: "CLOSED", change: cid };
    } else {
      const change = [];
      for (let i = cid.length - 1; i >= 0; i--) {
        const currencyName = cid[i][0];
        const currencyTotal = cid[i][1];
        const currencyValue = currencyValues[currencyName];
        let currencyAmount = 0;
  
        while (changeAmount >= currencyValue && currencyTotal > 0) {
          changeAmount -= currencyValue;
          changeAmount = parseFloat(changeAmount.toFixed(2));
          currencyTotal -= currencyValue;
          currencyAmount += currencyValue;
        }
  
        if (currencyAmount > 0) {
          change.push([currencyName, currencyAmount]);
        }
      }
  
      if (changeAmount > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
  
      return { status: "OPEN", change: change };
    }
  }
  