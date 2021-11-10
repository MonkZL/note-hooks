import './App.css';
import Counter from "./component/Counter";
import CounterOne from "./component/CounterOne";
import CounterTwo from "./component/CounterTwo";
import CounterThree from "./component/CounterThree";
import Counter4 from "./component/Counter4";
import Counter5 from "./component/Counter5";
import Test from "./component/Test";
import ViewA from "./component/context/ViewA";
import ReducerView from "./component/reducer/ReducerView";
import View1 from "./component/reducer_with_context/View1";
import FetchDataView from "./component/reducer/FetchDataView";
import CallbackView from "./component/callback/CallbackView";
import MemoView from "./component/memo/MemoView";
import RefView from "./component/ref/RefView";
import RefView1 from "./component/ref/RefView1";
import UseDocTitle from "./component/customer_hook/UseDocTitle";
import UseCounterView from "./component/customer_hook/UseCounterView";
import UseCounterView1 from "./component/customer_hook/UseCounterView1";
import UseInputView from "./component/customer_hook/UseInputView";

function App() {
  return (
    <div className="App">
      {/*<Counter/>*/}
      {/*<CounterOne/>*/}
      {/*<CounterTwo/>*/}
      {/*<CounterThree/>*/}
      {/*<Counter4/>*/}
      {/*<Counter5/>*/}
      {/*<Test/>*/}
      {/*<ViewA/>*/}
      {/*<ReducerView/>*/}
      {/*<View1/>*/}
      {/*<FetchDataView/>*/}
      {/*<CallbackView/>*/}
      {/*<MemoView/>*/}
      {/*<RefView/>*/}
      {/*<UseDocTitle/>*/}
      {/*<UseCounterView/>*/}
      {/*<UseCounterView1/>*/}
      <UseInputView/>
    </div>
  );
}

export default App;
