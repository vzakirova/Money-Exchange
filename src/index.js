// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    result = {};
    
    switch (true)
    {
        case currency > 10000: return  {error: "You are rich, my friend! We don't have so much coins for exchange"};

        case currency <= 0: return {};

        default:
        var H = Math.floor(currency/50);
        var Q = Math.floor((currency - 50*H)/25);
        var D = Math.floor((currency - 50*H - 25*Q)/10);
        var N = Math.floor((currency - 50*H - 25*Q - 10*D)/5);
        var P = Math.floor((currency - 50*H - 25*Q - 10*D - 5*N)/1);

        if (H > 0) { result.H = H; }
        if (Q > 0) { result.Q = Q; }
        if (D > 0) { result.D = D; }
        if (N > 0) { result.N = N; }
        if (P > 0) { result.P = P; }

        return result;

    }
    
}
