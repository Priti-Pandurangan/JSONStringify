# stringify
var sample = function() {

  return 1;

}



var big_emp = {

  "name": "Jack",

  "age": 21,

  "is_good": false,

  "numbers": [100, 200, 300, 400],

  "k_v": {

    1:1,

    2:4,

    3:9,

  },

  "random": null,

  "another_random": sample,

};



var emp = [1, 2,3, "abc", "xyz"]





var another_emp = [

  1,

  2,

  3,

  [-1, -2, -3, -4],

  {

    1:1,

    2:4,

    3:9,

  }

 ];





var get_repr = function(obj) {

  if(typeof(obj) === 'number')

    return obj;

  else if(typeof(obj) === 'string')

    return '"' + obj + '"';

  else if(typeof(obj) === 'boolean') {

    if(obj === true)

       return obj;

    if(obj === false)

       return obj;

  }

  else if(obj == null || typeof(obj) == 'function') {

    return "null";

  }

  

};





var stringify= function(obj)

{  

  /* list of supported data types, 

  in case of unsupported ones the key-value pair is dropped 

  */

  var supported_types = ['object', 'number', 'string', 'boolean']

  if (Array.isArray(obj)) {

    var answer = "["

    for (var i in obj) {

      if (supported_types.indexOf(typeof(obj[i])) == -1)

        continue

 // case where typeof(null) is returned as object       

      else if(typeof(obj[i]) === 'object') {

        if(!obj[i])

          answer += 'null'

        else

          answer += stringify(obj[i]);

      } else {

        answer += get_repr(obj[i])

      }

      answer += ","

    }

    answer = answer.slice(0, -1);

    answer += "]"

    return answer

  }

  

  var answer = "{"

  for (var key in obj) {

    if (supported_types.indexOf(typeof(obj[key])) == -1)

      continue

    answer += '"' + key + '"';

    answer += ':';

    if(typeof(obj[key]) === 'object') {

      if(!obj[key])

        answer += 'null'

      else

        answer += stringify(obj[key]);

    } else {

      answer += get_repr(obj[key]);

    }    

    answer += ','

  }



  answer = answer.slice(0, -1);

  answer += '}'



return answer;

};



// writing a function that will be called while mapping

var output = function(obj){

  console.log(obj);

  console.log('\n');

  var b = stringify(obj);

  var c = JSON.stringify(obj)

  var a= Boolean(b === c)

  console.log(b);

  console.log(c);

  console.log(a);

  console.log('\n');

}

// declaring an array for mapping

var array = [emp, big_emp, another_emp]

array.map(output)
