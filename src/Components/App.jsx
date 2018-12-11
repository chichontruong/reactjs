import React, { Component } from 'react';
import '../css/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './NavMenu';
import {Menus} from './Menus';
class App extends Component {
    render() {
        var showRoute = (menus) => {
            var result = null;
            if (menus.length > 0) {
                result = menus.map((item, index) => {
                    return (<Route key={index} path={item.path} exact={item.exact} component={item.main} />);
                })
            }
            return result;
        };

        return (
            <Router>
                <div>
                    <NavMenu />
                    <Switch>
                        {showRoute(Menus)}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;