import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

export default function BasicExample () {
    return (
        <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react-2' : '/'}>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
