import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DefaultLayout from "./layouts/default"

import {
    Home,
    Product
} from "./views"


export default function () {
    return <Router>
        <Switch>
            <Route path="/">
                <DefaultLayout>
                    <Home />
                </DefaultLayout>
            </Route>
            <Route path="/product">
                <DefaultLayout>
                    <Product />
                </DefaultLayout>
            </Route>
        </Switch>
    </Router>
}