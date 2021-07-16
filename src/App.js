import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from './Login';
import Signup from './Signup';
import Menu from './Menu';
import Country from './Country';
import Summary from './Summary';
import Sidebar from './Sidebar';


import {BrowserRouter as Router,Route} from 'react-router-dom';



function App() {

  var token = localStorage.getItem('token');
  console.log(token)


  return (
    <>
    <Router>
     
         {(token )? (
          <div className="row">
          <div className="col-md-12">              
            <Menu />
          </div>
          <div className="col-md-2" >
            <Sidebar />
          </div>
          <div className="col-md-10 ">
            <Route path="/country" exact component={Country} />  
            <Route path="/summary" exact component={Summary} />  
            
          </div>
      </div>
         ):( 
        <div>
                <Route path="/" exact component={Login} />
               <Route path="/signup" exact component={Signup} />  
        </div>
           )  }
     </Router>
    </>
  );
}

export default App;