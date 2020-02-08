  import React, { Component } from 'react'
  import './App.css';
  

  import NavBar from "./component/NavBar/NavBar";
  import { useAuth0 } from "./react-auth0-spa";

  import Profile from "./component/Profile";
  import history from "./utils/history";
  import PrivateRoute from "./component/PrivateRoute";
  import ExternalApi from "./views/ExternalApi";

  import {  Router, Route , Switch} from 'react-router-dom';
  import Home from './pages/Home';
  import About from './pages/About';
  import Order from './pages/Orderpage';
  import Contact from './pages/Contact';
  import CustomeNavBar from './pages/CustomeNavBar'
  import Footer from './pages/Footer'
  import Response from './pages/Response'
  
  


  function App() {
    const { loading } = useAuth0();

    if (loading) {
      return <div>Loading...</div>;
    }

  


      return (
          <React.Fragment>     
          <Router history={history}>
          <CustomeNavBar/>       
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/order" component={Order} />
            <Route path="/about" component={About} />
            <Route path="/response" component={Response} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/admin" component={ExternalApi} />
            </Switch>
            </Router>
            <Footer/>
           
        </React.Fragment>
      )
    }


  export default App;










