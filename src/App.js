import './style/App.scss';
import Access from "./components/Access";
import Main from "./components/Main";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state=>state);
  var page;
  if(state.user.name===""){
    page=<Access/>
  }
  else{
    page = <Main/>
  }
  return ( 
      <div className="App">
      {page}
      {/* <Main/> */}
    </div>
  );
}

export default App;
