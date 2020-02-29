/**
 * 
 * @param {array} pricesArr 
 * takes in array of prices as parameter
 * returns the max possible profit of the day
 */
function maxStockProfit(pricesArr) {
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;

    let changeBuyPrice = true;

    for(var i = 0; i < pricesArr.length; i++) {
        if(changeBuyPrice) {
            buyPrice = pricesArr[i];
        }
        sellPrice = pricesArr[i+1];
        if(sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            let tempProfit = sellPrice - buyPrice;
            if(tempProfit > maxProfit) {
                maxProfit = tempProfit;
            }
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}

console.log(maxStockProfit([42, 23, 16, 48, 49, 52, 38, 24, 27]))