import React from 'react';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Inputbar from './components/Inputbar';
import Result from './components/Result';

function App() {
  return (
   <Router>
     <h1>Calculator</h1>
      <Switch>
        <Route path='/' >
            <Inputbar></Inputbar>
        </Route>
        {/* <Route path='/result'>
            <Result></Result>
        </Route> */}
      </Switch>
   </Router>


   
  );
}

export default App;
