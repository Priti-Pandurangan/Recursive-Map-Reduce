var myRecursiveMap = function(my_array, my_Function) 
{
  if (my_array.length == 0 )
    return [];
  
  var y = my_array[0]
  my_array.splice(0,1);
  return [my_Function(y)].concat(myRecursiveMap(my_array,my_Function)); 
 }
  
var myFunc = function(x) {
    return x * 2;
}

var foo = function(string){
   return string.concat("b");
}

var some_array = [1,2,3,4]

var some_other_array = ["a","b","c","d"]

console.log(myRecursiveMap(some_other_array, foo))
console.log(myRecursiveMap(some_array, myFunc))