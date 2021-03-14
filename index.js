var sheds = [{
  name:"A",
  litres: 510,
},
{
  name:"B",
  litres:308,
},
{
  name:"C",
  litres: 486,
},
{
  name:"D",
  litres: 572,
}];


for(var i =0; i<sheds.length; i++){
  document.write("Your daily production in shed " + sheds[i].name + "is "+sheds[i].litres + "<br>")
}
