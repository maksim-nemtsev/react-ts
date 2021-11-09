import React, { useReducer } from "react";

const initialState = {
  counter: 50,
};

type ACTIONTYPES =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number };

const counterReducer = (state: typeof initialState, action: ACTIONTYPES) => {
    switch(action.type) {
        case "INCREMENT" :
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "DECREMENT" :
            return {
                ...state,
                counter: state.counter - action.payload
            }
            default: throw new Error("bad action");
    }
}

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
  return (
    <div>
      <h2>useReducer</h2>
      <p>
          {
              state.counter
          }
      </p>
      <div>
          <div>
              <button onClick={() =>  dispatch({type: "INCREMENT", payload: 1})}>
              INCREMENT 
              </button>
          </div>
          <div>
              <button onClick={() =>  dispatch({type: "DECREMENT", payload: 1})}>
              DECREMENT
              </button>
          </div>
      </div>
      <hr />
    </div>
  );
};

export default UseReducerComponent;
