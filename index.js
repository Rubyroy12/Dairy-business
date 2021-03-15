
var k   ; 
function data() { 
    var input = document.getElementsByName('sheds'); 

    for (var i = 0; i < input.length; i++) { 
        var a = input[i]; 
        k = k +  a.value + " " +"<br>"; 
    } 
    var sheds =["A", "B", "C", "D"];
for (var n = 0; n < sheds.length; n++) {
  document.write("Your daily production in shed " + sheds[n] + " is  " + input[i] + "<br>");
}
    
    document.getElementById("output").innerHTML = k; 
    // document.getElementById("po").innerHTML = "Output"; 
} 

function totalproduction() {
    var input = document.getElementById('sheds');
    sum = input[0].sheds + input[1].sheds + input[2].sheds + input[3].sheds;
    alert("Your total production is " + sum + " litres  per day")
  
    document.getElementById("production").innerHTML = sum;

 }

function income_overtime() {
  let daily_income = sum * 45;
  let weekly_income = daily_income * 7;
  let annual_income = daily_income * 366;
  document.write("Your daily income is " + daily_income + " kenya shillings" + "<br>");
  document.write("Your weekly income is " + weekly_income + " kenya shillings" + "<br>");
  document.write("Your annual income is " + annual_income + " kenya shillings"+ "<br>");

  
  var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days_of_month= [ 31,29,31,30,31,30,31,31,30,31,30,31];
  
  for (var i = 0; i<months.length; i++){
    sum = days_of_month[i] * daily_income;
    document.write("Your income for " + months[i] + " is " + sum + "kenyan shillings" + "<br>");
    

    

  }
 document.getElementById("income").innerHTML = daily_income;

  
}
