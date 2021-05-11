function generateVerify(length) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let verify = '';
    for (let i = 0; i < length; i++) {
        verify += str[parseInt(Math.random() * str.length)];
    }
    return verify;
}

function copyContent(id){
    var copyCon = document.getElementById(id);
    copyCon.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    alert('复制成功');
}