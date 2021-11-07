import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./App.css";

/* Rules:
1.Allways use the setter for useState
2.Don't depend on data you set in [] useEffect()
 */
function MyHooksComponents() {
  console.log("MyHooksComponents started");
  const [numbers, setNumbers] = useState<number[]>([]);
  console.log(`MyHooksComponents numbers= ${JSON.stringify(numbers)}`);

  useEffect(() => {
    fetch("./numbers.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(`data = ${JSON.stringify(data)}`);
        setNumbers(data);
        console.log("request finished")
      });
  }, []);

  //[1,2,3] => [1] with no dep([])
  const addOne = useCallback( () => {
    // setNumbers([...numbers, numbers.length + 1])
    setNumbers(currentNumbers => [
      ...currentNumbers, currentNumbers.length + 1
    ])
  }, [])

  // const sum = numbers.reduce((a, v) => a + v , 0)
  const sum = useMemo(() => numbers.reduce((a, v) => a + v , 0), [numbers]);

  console.log("MyHooksComponents render");
  const out = (
    <div>
      <div>Numbers: {JSON.stringify(numbers)}</div>
      <button onClick={() => addOne()}>
        add one element in Array
      </button>
      <div>
      <span>
        {`The sum is ${sum}`}
      </span>
      </div>
    </div>
  );
  console.log("MyHooksComponents finished");
  return out;
}

function App() {
  return (
    <div>
      <MyHooksComponents />
    </div>
  );
}

export default App;
