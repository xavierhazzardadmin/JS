var inputDeg = prompt("Input an angle");

var inputSide = prompt("Input a side, h or a");

var inputLength = prompt("Input a side length");

function findLength(Degr, Side, Length) {
  //convert inputDeg to radians
  Degr = Degr * 0.0174533;

  var cosine = Math.cos(Degr);

  if (Side == "h") {
    var output = cosine * Length;

    console.log(output);
  } else {
    console.log("Please try again");
  }
}

findLength(inputDeg, inputSide, inputLength);
//findLength()
