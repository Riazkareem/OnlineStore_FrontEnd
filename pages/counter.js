import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incNumber,
  decNumber,
} from "../components/redux/actions/productActions";
function couter() {
  const showCounter = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" grid mx-auto p-12">
        <div className="bg-gray-200">
          <h1 className="text-2xl text-center">Counter Using Redux</h1>
        </div>
        <div className="quantity mt-8 flex items-center mx-auto">
          <a
            className="quantity__minus bg-gray-500 w-12 h-8 text-center text-white"
            title="Decrement"
            onClick={() => dispatch(decNumber())}>
            <span>-</span>
          </a>
          <input
            readOnly
            name="quantity"
            type="text"
            className="w-12 h-8"
            value={showCounter}
          />
          <a
            className="quantity__plus bg-gray-500 w-12 h-8 text-center text-white"
            title="Increment"
            onClick={() => dispatch(incNumber(5))}>
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default couter;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from "../components/reducers/counterSlice";

// export function newCounter() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div className="container mx-auto ">
//         <button
//           className="p-3 rounded-full bg-slate-400 mr-3"
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}>
//           Increment
//         </button>
//         <span className="bg-green-300 px-8">{count}</span>
//         <button
//           className="p-3 rounded-full bg-slate-400 ml-3"
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}>
//           Decrement
//         </button>
//         <button
//           className="p-3 rounded-full bg-slate-400 ml-3"
//           aria-label="Decrement value"
//           onClick={() => dispatch(incrementByAmount(10))}>
//           Decrement by 10
//         </button>
//       </div>
//     </div>
//   );
// }

// export default newCounter;
