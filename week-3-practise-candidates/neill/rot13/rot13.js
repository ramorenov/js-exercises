//Don't change this function.  You'll need it.
function rot13OneChar(ch) {
    var inputs  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var outputs = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var ix = inputs.indexOf(ch);
    return ix > -1 ? outputs[ix] : ch;
}

function rot13(str){
    //TODO: Complete this function to do rot13 encoding/decoding
    //on the given string.
    //Just use the given rot13OneChar() on ALL the characters in the string.
    return;
}

var secretMsg = "UVAG: hfr fcyvg('') naq znc(), naq wbva('')." ;
console.log(rot13(secretMsg));
