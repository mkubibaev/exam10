import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {fetchNews} from "../../store/action/newsActions";

class News extends Component {

    componentDidMount() {
        this.props.fetchNews();
    }

    render() {
        console.log(this.props.news);
        return (
            <div className="py-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1>Posts</h1>
                    <NavLink to="/news/add" className="btn btn-outline-success">Add new post</NavLink>
                </div>
                news will be here
            </div>
        );
    }
}

const mapStateToProps = state => ({
    news: state.news.items,
});

const mapDispatchToProps = dispatch => ({
    fetchNews: () => dispatch(fetchNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
