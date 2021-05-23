import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { actionCreators } from "./state/index"
import { bindActionCreators } from "redux"

function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withDrawMoney } = bindActionCreators(actionCreators, dispatch)


  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withDrawMoney(1000)}>WithDraw</button>
    </div>
  );
}

export default App;
