const test1 = [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ];

// expected output = "a < b OR (c == d AND e != f)"

// check if we need to add bracket
function needBracket(input) {
  return (Array.isArray(input[1]) || Array.isArray(input[2]));
}

// recursive function
function composer(input) {
  if (!Array.isArray(input[0]) && !Array.isArray(input[1]) && !Array.isArray(input[2])) {
    return input[1] + " " + input[0] + " " + input[2];
  }

  // left operand
  let composer1 = composer(input[1]);
  if (needBracket(input[1])) {
    composer1 = "(" + composer1 + ")";
  }

  // right operand
  let composer2 = composer(input[2]);
  if (needBracket(input[2])) {
    composer2 = "(" + composer2 + ")";
  }

  return composer1 + " " + input[0] + " " + composer2;
}

console.log(composer(test1));
