$(document).ready(function() {
    let code = generateVerify(4);
    let shareCode = generateVerify(18);
    $('#code').text(code);
    $('#share_link').val(`https://tiangoucoin.github.io/tiangoucoin?invite=${shareCode}`);

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
        $('#verify_box').hide();
        $('#verified_box').show();
    });

    $('#select').click(function() {
        $('.select-dropdown').toggle();
    });

    const from = $('#from');
    const to = $('#to');
    const intReg = /^[0-9]*$/;
    const buyFrom = $('#buy_from');
    const buyTo = $('#buy_to');
    const buyUnit = $('#buy_unit');

    $('#select .select-dropdown-item').click(function(item) {
        const value = $(this).text();
        $('#unit_value').text(value);
        from.val(0.0);
        to.val(0.0);
    });


    from.on('input', function (e) {
        let value = $(this).val();
        const unit = $('#unit_value').text();
        const fromUnit = unit === 'USDT' ? 100000 : 400000000;
        if (!intReg.test(value)) {
            from.val(value.slice(0, -1));
        }
        to.val(value * fromUnit);
    });
    
    $('#buy').on('click', function() {
        if (!from.val()) {
            alert('请输入购买数量');
            return;
        }
        $('.mask').show();
        buyFrom.text(from.val());
        buyTo.text(to.val());
        buyUnit.text($('#unit_value').text());
    });
    $('.mask-bg').on('click', function() {
        $('.mask').hide();
    });
});