import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
let history = createBrowserHistory();
//To Run Development Starts>>>>>>>> 
render(
    <Router>
        <div>
            <Switch>
                <Route exact path='/' render={() => (<Redirect to="/yeti"/>)}/>
                <Route exact path='/yeti' component={App}></Route>
            </Switch>
        </div>
    </Router>,
    document.getElementById('_yeti_id')
);
//To Run Development Ends >>>>>>>> 
//
//To Access From Common Container Web Application Starts>>>>>>>>
function renderYetiHome(elem,path) {
  ReactDOM.render(
     <Router>
        <div>
            <Switch>
                <Route exact path='/yeti' component={App}></Route>
            </Switch>
        </div>
    </Router>
    ,
    document.getElementById(elem)
  );
  history.push('/'+path);
}
module.exports = renderYetiHome;
window.renderYetiHome = renderYetiHome;
//To Access From Common Container Web Application >>>>>>>>