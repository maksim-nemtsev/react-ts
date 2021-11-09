import React, { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <h2>useRef</h2>
      <div>
        <input type="text" ref={inputRef}  />
      </div>
      <hr />
    </div>
  );
};

export default UseRefComponent;
