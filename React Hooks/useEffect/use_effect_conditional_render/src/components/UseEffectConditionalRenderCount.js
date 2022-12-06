import React, { useEffect, useState } from "react";

const UseEffectConditionalRenderCount = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect - Update Document Title");
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default UseEffectConditionalRenderCount;
