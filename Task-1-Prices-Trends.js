function solve(input) {
    var output = '<table>\n<tr><th>Price</th><th>Trend</th></tr>\n';
    var first = 0;
    for (var i = 0; i < input.length; i++) {
        var num = parseFloat(input[i]);
        num = num.toFixed(2);

        if (isNaN(num)) {
            output += '<tr><td>-</td><td><img src="fixed.png"/></td></td>\n';
        } else {
            if (parseFloat(num) === parseFloat(first) || i === 0) {
                output += '<tr><td>' + num + '</td><td><img src="fixed.png"/></td></td>\n';
            } else if (parseFloat(num) > parseFloat(first)) {
                output += '<tr><td>' + num + '</td><td><img src="up.png"/></td></td>\n';
            } else if (parseFloat(num) < parseFloat(first)) {
                output += '<tr><td>' + num + '</td><td><img src="down.png"/></td></td>\n';
            }
        }
        first = num;
    }

    return output + '</table>';
}