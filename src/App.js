import React from 'react';
import Comp from './Comp'
import a from './info.json'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Dashboard from './Dashboard'
function App(){
  console.log(a);
  return(
    <div>
      
      <BrowserRouter>
      <form>

      email:<input type='text'/>
      password:<input type="password"/>
      <Link to='/dashboard'><button type = "submit">Submit</button></Link>
      </form>
      
      <Switch>
        <Route exact path='/dashboard'><Dashboard/></Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
