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
