import React, { useState } from "react";
import UseEffectCleanupMouseCoordinates from "./UseEffectCleanupMouseCoordinates";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <UseEffectCleanupMouseCoordinates />}
    </div>
  );
};

export default MouseContainer;
