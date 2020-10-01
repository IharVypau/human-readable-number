module.exports = function toReadable(number) {
    let result = 'zero';
    const numbers = [
        ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        ['', 'hundred', 'thousand', 'million', 'billion']
    ];
    const UNITS = 1;
    const DOZENS = 2;
    const HUNDREDS = 3;
    const THOUSANDS = 4;
    const MILLIONS = 5;
    const BILLIONS = 6;
    let strNum = number + '';
    let len = strNum.length;
    console.log(len);
    let getUnits = (numS) => {
        return numbers[0][+numS];
    }

    let getDozens = (numStr) => {
        let temp = '';
        if (numStr[0] == '0' || numStr[0] == '1') {
            temp = getUnits(numStr);
        } else {
            if (numStr[0] == '1') {
                temp = numbers[UNITS - 1][number];
            } else {
                temp = numbers[DOZENS - 1][(+numStr[0]) - 1] + ' ' + numbers[UNITS - 1][numStr[1]];
            }
        }
        return temp;
    }

    switch (len) {
        case UNITS:
            result = strNum[0] != '0' ? getUnits(strNum[0]) : 'zero';
            break;
        case DOZENS:
            result = getDozens(strNum[0] + strNum[1]);
            break;
        case HUNDREDS:
            result = numbers[0][(+strNum[0])] + ' hundred ' + getDozens(strNum[1] + strNum[2]);

            break;
        default:

            { result = '==='; break; }
    }

    return result.trim();
}
