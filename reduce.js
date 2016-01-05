var myRecursiveReduce = function(my_array, my_function) 
{
    if (my_array.length == 1)
    return my_array[0];
  
  var a = my_array[0]
  var b = my_array[1]
  my_array.splice(0,1)
  return my_function(a,myRecursiveReduce(my_array, my_function)); 
 
 }
  
var add = function(prev_value, cur_value, cur_index, array )
{
    return prev_value + cur_value ;
     
}

var concat = function(prev,cur,index,array)
{
  return prev.concat(cur);
}


var some_array = [1,2,3,4]
var some_other_array = ["a","b","c","d"]

console.log(myRecursiveReduce(some_array, add))
console.log(myRecursiveReduce(some_other_array,concat))