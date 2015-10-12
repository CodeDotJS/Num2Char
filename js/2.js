function numToString(x) {
    var r = 0;
    var txter = x;
    var sizer = txter.length;
    var numStr = "";
    if (isNaN(txter)) {
        alert(" Invalid number");
        exit();
    }
    var n = parseInt(x);
    var places = 0;
    var str = "";
    var entry = 0;
    while (n >= 1) {
        r = parseInt(n % 10);
        if (places < 3 && entry == 0) {
            numStr = txter.substring(txter.length - 0, txter.length - 3)
            str = onlyDigit(numStr); 
            entry = 1;
        }
        if (places == 3) {
            numStr = txter.substring(txter.length - 5, txter.length - 3)
            if (numStr != "") {
                str = onlyDigit(numStr) + " Thousand " + str;
            }
        }
        if (places == 5) {
            numStr = txter.substring(txter.length - 7, txter.length - 5)
            if (numStr != "") {
                str = onlyDigit(numStr) + " Lakhs " + str; 
            }
        }
        if (places == 6) {
            numStr = txter.substring(txter.length - 9, txter.length - 7)
            if (numStr != "") {
                str = onlyDigit(numStr) + " Crores " + str;
            }
        }
        n = parseInt(n / 10);
        places++;
    }
    alert(str);
}
function onlyDigit(n) {
    var units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var randomer = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    var r = 0;
    var num = parseInt(n);
    var str = "";
    var pl = "";
    var tenser = "";
    while (num >= 1) {
        r = parseInt(num % 10);
        tenser = r + tenser;
        if (tenser <= 19 && tenser > 10)
        {
            str = randomer[tenser - 10];
        } else {
            if (pl == 0)
            {
                str = units[r];
            } else if (pl == 1)
            {
                str = tens[r] + " " + str;
            }
        }
        if (pl == 2)
        {
            str = units[r] + " Hundred " + str;
        }

        num = parseInt(num / 10);
        pl++;
    }
    return str;
}
