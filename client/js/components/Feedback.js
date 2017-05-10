import React from "react";

const Feedback = (props) => {
  return (
    <div className="feedback-container">
      <p>{props.content}</p>
    </div>
  );
}

export default Feedback;
