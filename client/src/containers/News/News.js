import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {deleteNewsItem, fetchNews} from "../../store/actions/newsActions";
import NewsListItem from "../../components/NewsListItem/NewsListItem";

class News extends Component {

    componentDidMount() {
        this.props.fetchNews();
    }

    deleteHandler = id => {
        if (window.confirm('Are you sure?')) {
            this.props.deleteNewsItem(id).then(this.props.fetchNews)
        }

    };

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
                        onDelete={() => this.deleteHandler(newsItem.id)}
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
    deleteNewsItem: id => dispatch(deleteNewsItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
