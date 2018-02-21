module.exports = function solveEquation(equation) {
  arrayParams = equation.split(' ');
 
  let a = Number(arrayParams[0]);
  let b = parseInt(arrayParams[3] + arrayParams[4], 10);
  let c = parseInt(arrayParams[7] + arrayParams[8], 10);
  

  const D = Math.pow(b, 2) - 4 * a * c;
  
  const x_1 = Math.round( (-b + Math.sqrt(D) ) / (2 * a) );
  const x_2 = Math.round( (-b - Math.sqrt(D) ) / (2 * a) );

  let rezult = [];
  x_1 < x_2 ? rezult = [x_1, x_2] : rezult = [x_2, x_1]; 

  return rezult;
}
