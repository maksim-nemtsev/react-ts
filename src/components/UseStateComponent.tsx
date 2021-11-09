import React, { useState } from "react";

interface Props {}

const UseStateComponent = (props: Props) => {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);
  return (
    <div>
        <h2>
            useState
        </h2>
      <div>
        <div>
          <button onClick={() => setArr([...arr, arr.length + 1])}>
            add to array
          </button>
        </div>
        <div>{JSON.stringify(arr)}</div>
      </div>
      <div>
        <div>
          <button onClick={() => setName("Max")}>
            add the Name
          </button>
        </div>
        <div>{name}</div>
      </div>
      <hr />
    </div>
  );
};

export default UseStateComponent;
