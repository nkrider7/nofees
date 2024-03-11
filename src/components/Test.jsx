import { useReducer } from "react";

let ins = 1;
let  reducer = (state, action) => {
  if (action === "inc") {
    return  1
  }

  if (action === "Dic") {
    return 1;
  }

  console.log(state, action);
  return state
};

export default function Test() {
    

  const [state, dispatch] = useReducer(reducer, ins);

  return (
    <>
      <div className="bg-white h-screen">
        <h1>Use Reducer </h1>
        <h1>{state}</h1>
        <button
          className="bg-red-200 text-black"
          onClick={() => dispatch({ type: "inc" })}
        >
          InC
        </button>
        <button onClick={() => dispatch({ type: "dic" })}>DiC</button>
      </div>
    </>
  );
}
