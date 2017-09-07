function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < musicians.length; i++){
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
return myArray;
}

function johnLennonFacts(facts) {
  var array =[];
  var i = 0;
  while (array.length < facts.length){
    array.push (facts[i] + "!!!");
    i++;
  }
return array

}
function iLoveTheBeatles(number) {
var array = [];
var i = 0;

do{
  array.push(I love the Beatles!); 
  ai++;}
while (i<= number && number <=15);
return array
}


//*+ Create a function `iLoveTheBeatles` which accepts a number as a parameter.
//The body of the function should create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds
//`"I love the Beatles!"` to the empty array. Then the loop should increment the number passed in as a parameter.
//The condition of the loop should check to see that the parameter number is less than `15`. The function should return the array with the strings `"I love the Beatles!"`.
