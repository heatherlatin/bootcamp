import React from "react";

import {
  useInput,
  useNumber,
} from "react-hanger";

function Survey() {
  const favoriteThing = useInput("");
  const rating = useNumber(3, { lowerLimit: 1, upperLimit: 5 });
  const feeling = useInput("");
  const comment = useInput("");
  // const showCounter = useBoolean(true);
  // const limitedNumber = useNumber(3, { lowerLimit: 0, upperLimit: 5 });
  // const counter = useNumber(0);
  // const todos = useArray(["hi there", "sup", "world"]);

  const handleSubmit = () => {
    const form = {
      favoriteThing: favoriteThing.value,
      rating: rating.value,
      feeling: feeling.value,
      comment: comment.value
    }
    console.log(form)
  }

  return (
    <div className="container">
      <h1>Use this form to provide feedback for our product!</h1>
      <h4>What was your favorite thing about our product?</h4>
      <input type="text"  value={favoriteThing.value} onChange={favoriteThing.onChange} />
      <h4>How would you rate our product?</h4>
      <div className="form-group" >
        <input type="radio" name="rating-1" onChange={() => rating.setValue(1)} />1
        <input type="radio" name="rating-1" onChange={() => rating.setValue(2)} />2
        <input type="radio" name="rating-1" onChange={() => rating.setValue(3)} />3
        <input type="radio" name="rating-1" onChange={() => rating.setValue(4)} />4
        <input type="radio" name="rating-1" onChange={() => rating.setValue(5)} />5
      </div>
      
      <h4>How did our product make you feel?</h4>
      <div className="form-group emoji" >
        <span role="img" aria-label="angry" onClick={() => feeling.setValue("angry")}>
            😠
        </span>
        <span role="img" aria-label="indifferent" onClick={() => feeling.setValue("indifferent")}>
            😒
        </span>
        <span role="img" aria-label="happy" onClick={() => feeling.setValue("happy")}>
            😄
        </span>
        <div className="response">
            {feeling.value && 
              <input type="text"  value={comment.value} onChange={comment.onChange} />
            }
        </div>
        <div>
      </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Survey;