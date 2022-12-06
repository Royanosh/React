import React, { useEffect, useState } from "react";

const UseEffectRenderCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default UseEffectRenderCount;
