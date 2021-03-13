var k = "The respective values are : <br>";

function data() {
    var record = document.getElementsByName('sheds');

    for (var i = 0; i < record.length; i++) {
        var a = record[i];
        k = k + a.value + " " + "<br>";


    }

    document.getElementById("par").innerHTML = k;
    // document.getElementById("po").innerHTML = "Output"; 
}


// adding elements in the array

function total_production(input) {
    
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        sum = sum + input[i];
    }
    document.getElementById("total").innerHTML = sum;
}
var input = document.getElementsByName('sheds');