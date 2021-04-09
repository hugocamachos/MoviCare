import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

// import Transporte from './componentes/formTransporte';
// import Home from './componentes/home';

const Router = () => {
    return (
        <Switch>
            {/* <Route exact path='/' component={Home}/> */}

            {/* <Route path='/Transporte' component={Transporte}/>
            <Route path='/home' component={Home}/> */}
        </Switch>
    )
}

export default withRouter(Router);