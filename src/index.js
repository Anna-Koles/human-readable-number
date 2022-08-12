module.exports = function toReadable (number) {
  
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dosens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const between = number.toString();
        
    if (number == 0) {
        return 'zero';
    }

    else if (between.length == 1) { 
        return units[between[between.length - 1]];
    } 

    else if ((between[between.length - 2] == 1) && (between.length == 2)) {
        return teens[+(between[between.length - 1]) + 1];
    }

    else if ((between[between.length - 2] > 1) && (between.length == 2)) {
        
        if ((between[between.length - 2] > 1) && (between.length == 2) && (between[between.length - 1] != 0)) {
            return `${dosens[+(between[between.length - 2]) - 1]} ${units[between[between.length - 1]]}`;
            
        } else {
            return `${dosens[+(between[between.length - 2]) - 1]}`;
        }
    } 

    else if ((between[between.length - 2] == 1) && (between.length == 3)) {
        return `${units[between[between.length - 3]]} hundred ${teens[+(between[between.length - 1]) + 1]}`;
    }

    else if (between.length == 3) {

        if ((between[between.length - 1] == 0) && (between[between.length - 2] == 0)) {
            return `${units[between[between.length - 3]]} hundred`;

        } else if ((between[between.length - 1] == 0) && (between[between.length - 2] != 0)) {
            return `${units[between[between.length - 3]]} hundred ${dosens[+(between[between.length - 2]) - 1]}`;
        
        } else if ((between[between.length - 1] != 0) && (between[between.length - 2] == 0)) {
            return `${units[between[between.length - 3]]} hundred ${units[between[between.length - 1]]}`;

        } else if ((between[between.length - 1] != 0) && (between[between.length - 2] != 0)) {
            return `${units[between[between.length - 3]]} hundred ${dosens[+(between[between.length - 2]) - 1]} ${units[between[between.length - 1]]}`;
        } 
    }
}