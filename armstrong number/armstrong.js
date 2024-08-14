function checkArmstrong()
{

    // get the number from user and parse it as an integer
    var num = parseInt(document.getElementById("numberInput").value);

    // convert number to string to access digits
    var numStr = num.toString();

    // count the number of digits
    var totalDigits = numStr.length;
    var sum = 0; 

    // iterate through each digit of the number
    for (var i = 0; i < totalDigits; i++) 
    {

        var currentDigit = parseInt(numStr[i]);

        // add the result to the sum
        sum += Math.pow(currentDigit, totalDigits); 
    }

    var p = document.getElementById("result");

    p.innerHTML = (sum === num) 
    ? `${num} is an Armstrong Number.` 
    : `${num} is not an Armstrong Number.`;
}