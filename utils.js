function generateVerify(length) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let verify = '';
    for (let i = 0; i < length; i++) {
        verify += str[parseInt(Math.random() * str.length)];
    }
    return verify;
}