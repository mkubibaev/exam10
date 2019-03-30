import React, {Component} from 'react';
import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import News from "./containers/News/News";
import NewsItemPage from "./containers/NewsItemPage/NewsItemPage";
import AddNews from "./containers/AddNews/AddNews";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={News} />
                    <Route path="/news/add" exact component={AddNews} />
                    <Route path="/news/:id" component={NewsItemPage} />
                    <Route render={() => <h1>404</h1>} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
