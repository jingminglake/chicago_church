function checkInput(arr, errorArr) {
  //set error states to false
  for (let i = 0; i < errorArr.length; i++) {
    const cur = errorArr[i];

    cur(false);
  }

  if (!arr) return;

  //false = one or more of the inputs did not pass
  let flag = true;

  for (let i = 0; i < arr.length; i++) {
    const { value, condition, onInvalid } = arr[i];

    //no value will be a basic preprovided function that checks if the value is falsey or not.
    //if not falsey, it will pass
    if (condition === "novalue") {
      const result = !!value;

      if (!result) {
        flag = false;
        onInvalid();
      }
    } else {
      const result = condition(value);
      if (!result) {
        flag = false;
        onInvalid();
      }
    }
  }

  return flag;
}

export { checkInput };
