import React, {Component} from 'react';
import {fetchNewsItem} from "../../store/actions/newsActions";
import {connect} from "react-redux";
import NewsItem from "../../components/NewsItem/NewsItem";

class NewsItemPage extends Component {
    componentDidMount() {
        this.props.fetchNewsItem(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <NewsItem
                    {...this.props.newsItem}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    newsItem: state.news.item,
});

const mapDispatchToProps = dispatch => ({
    fetchNewsItem: id => dispatch(fetchNewsItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemPage);
