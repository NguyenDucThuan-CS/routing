import './App.css';
import PageNotFound from './containers/PageNotFound';
import {Route,Switch,withRouter} from "react-router-dom"

import { routesHome, routesAdmin } from './routes';
import HomeTemplate from './containers/HomeTemplate';
import AddminTemplate from './containers/AdminTemplate';
import AuthPage from './containers/AdminTemplate/Auth';
import { actTryLogin } from './containers/AdminTemplate/Auth/modules/actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App(props) {
  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(actTryLogin(props.history))
  },[])


  const renderLayoutHome = (routes) => {
      return routes?.map((item,index)=>{
          return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
      })  
  }

  const renderLayoutAdmin = (routes) => {
    return routes?.map((item,index)=>{
        return <AddminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}/>
    })  
}
 
  return (
    
      <Switch>
          {renderLayoutHome(routesHome)}
          {renderLayoutAdmin(routesAdmin)}
          <Route path="/auth" component={AuthPage}/>
          <Route path="" component={PageNotFound}/>
      </Switch>
  
  );
}

export default withRouter(App);
