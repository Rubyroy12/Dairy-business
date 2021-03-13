  
        var k = "The respective values are : <br>"; 
        
        function data() { 
            var input = document.getElementsByName('array[]'); 
  
            for (var i = 0; i < input.length; i++) { 
                var a = input[i]; 
                k = k +  a.value + " " +"<br>"; 
            } 

            document.getElementById("par").innerHTML = k; 
            // document.getElementById("po").innerHTML = "Output"; 
        }