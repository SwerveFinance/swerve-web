$(document).ready(function() {
    $.get('https://api.ethplorer.io/getAddressInfo/0x329239599afb305da0a2ec69c58f8a6697f9f88d?apiKey=EK-5nEyT-zZUio5N-JJ5hf',
        function(data) {
            var tusd = ((data.tokens[0].balance / 1000000000000000000) * (data.tokens[0].tokenInfo.price.rate));
            var dai = ((data.tokens[1].balance / 1000000000000000000) * (data.tokens[1].tokenInfo.price.rate));;
            var usdc = ((data.tokens[2].balance / 1000000) * (data.tokens[2].tokenInfo.price.rate));;
            var usdt = ((data.tokens[3].balance / 1000000) * (data.tokens[3].tokenInfo.price.rate));;
            var total = (tusd + dai + usdc + usdt);
            $('#TVL').html(total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            }));
        })
})
