import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Page404 from "../pages/Page404";
import Main from "../container/Main";
import Home from "../pages/Main/Home";
import MainAdmin from "../container/MainAdmin";
import DashboardPage from "../pages/MainAdmin/DashboardPage";
import ProductPage from "../pages/MainAdmin/ProductPage";

function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path="/admin" exact><DashboardPage/></Route>
                            <Route path="/admin/product"><ProductPage/></Route>
                        </Switch>
                    </MainAdmin>
                </Route>

                <Route>
                    <Main>
                        <Switch>
                            <Route path='/' exact><Home/></Route>
                        </Switch>
                    </Main>
                </Route>

                <Route path='*'><Page404/></Route>
            </Switch>
        </Router>
    );
}

export default Routes;