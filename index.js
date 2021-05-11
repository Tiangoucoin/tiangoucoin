$(document).ready(function() {
    let code = generateVerify(4);
    $('#code').text(code);

    $('#get').click(function() {
        const address = $('#address').val();
        const verify = $('#verify').val();
        if (!address) {
            alert('请输入您的钱包地址');
            return;
        }
        if (code !== verify.toUpperCase()) {
            alert('请输入正确的验证码');
            return;
        }
        console.log(address, verify)
    });

    $('#coin_select').click(function() {
        $('.coin-dropdown').toggle();
    });
});