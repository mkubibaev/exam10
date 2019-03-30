import React, {Component} from 'react';
import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import News from "./containers/News/News";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={News} />
                    <Route render={() => <h1>404</h1>} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
