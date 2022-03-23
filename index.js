const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    let sum = cartItemsPrices.reduce((aggr,value)=>{
        return +aggr + +value
    })
    if(sum*10 === WINNING_SUM*10) return true 
    return false
}

module.exports = doesCartWinPrize;
