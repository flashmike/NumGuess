import React from "react";
//@flashmike.com
//calculate result term vs. result
const Result = ({ term, secretNum }) => {
  let result;
  if (term) {
    if (secretNum > term) {
      result = "Num is lower.";
    } else if (secretNum < term) {
      result = "Num is higher.";
    } else {
      result = "Correct!";
    }
  }
  //show result
  return <p>{result}</p>;

  //deduct curCredits based on pointsEarned
  //curCredits now = totalCredits
  //reset randomNum
};

export default Result;
