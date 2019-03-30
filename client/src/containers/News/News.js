import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {fetchNews} from "../../store/actions/newsActions";
import NewsListItem from "../../components/NewsListItem/NewsListItem";

class News extends Component {

    componentDidMount() {
        this.props.fetchNews();
    }

    render() {

        return (
            <div className="py-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1>Posts</h1>
                    <NavLink to="/news/add" className="btn btn-success">Add new post</NavLink>
                </div>

                {this.props.news.map(newsItem => (
                    <NewsListItem
                        key={newsItem.id}
                        id={newsItem.id}
                        image={newsItem.image}
                        title={newsItem.title}
                        published_at={newsItem.published_at}
                    />
                ))}

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
