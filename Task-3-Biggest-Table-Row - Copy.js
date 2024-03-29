function solve(table) {
    
    var maxSum = Number.NEGATIVE_INFINITY;;
    for (var x = 2; x < table.length - 1; x++) {
        var row = table[x];
        var cells = row.match(/<td>(.*?)<\/td>/g);
        var sum = 0, numbers = [];
        for (var c = 1; c < cells.length; c++) {
            var cell = cells[c];
            cell = cell.replace(/<td>/, '');
            cell = cell.substring(0, cell.length - '</td>'.length);
            var num = Number(cell);
            if (!isNaN(num)) {
                numbers.push(cell);
                sum += num;
            }
        }
        if (sum > maxSum ) {
            maxSum = sum;
            var result = numbers.join(' + ');
        }
    }

    if (maxSum != 0 || result.length >1) {
        console.log(maxSum + ' = ' + result);
    } else {
        console.log("no data");
    }
}