const closestToZero = (input: number[]) => {
  //if no input has been received, we set an array with a default 0 value inside.
  if (!input) {
    input = [0];
  }
  return input.reduce((accumulator: number, value: number) => {
    //always set the accumulator to 0 at the first iteration.
    if (accumulator === 0) return value;
    //If the value is superior than 0 and inferior or equal to the absolute value of the accumulator, we update the value of the accumulator
    else if (value > 0 && value <= Math.abs(accumulator)) return value;
    //Unary minus (-) – convert an operand into a number and negate the value after that. Used in order to compare the absolute value as a positive integer.
    //Strictly inferior only, otherwise 0 could pop out as a result and we don't want that.
    else if (value < 0 && -value < Math.abs(accumulator)) return value;
    // prevent the accumulator from being updated if the current value isn't the closest to zero in the reduce process.
    else return accumulator;
  }, 0);
};

module.exports = closestToZero;
