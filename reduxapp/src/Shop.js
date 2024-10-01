import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);

  // const action = bindActionCreators(actionsCreators, dispatch);
  const { WithdrawMoney, depositMoney } = bindActionCreators(
    actionsCreators,
    dispatch
  );
  return (
    <div>
      <h2>Deposit/Withdraw Money</h2>
      {/* whithout bindActionCreator */}
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionsCreators.WithdrawMoney(100))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionsCreators.depositMoney(100))}}>+</button> */}
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          WithdrawMoney(100);
        }}
      >
        -
      </button>
      Update Balance ({balance})
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;

// class Shape {
//   calculatedArea() {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   calculatedArea() {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   calculatedArea() {
//     return Math.PI * this.radius * this.radius;
//   }
// }


// const shapes = [new Rectangle(10, 5), new Circle(7)];

// shapes.forEach(shape =>{
//   console.log(`Area: ${shape.calculateArea()}`);
// })