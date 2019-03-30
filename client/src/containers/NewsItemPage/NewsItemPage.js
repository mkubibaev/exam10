import React, {Component, Fragment} from 'react';
import {fetchNewsItem} from "../../store/actions/newsActions";
import {connect} from "react-redux";
import NewsItem from "../../components/NewsItem/NewsItem";
import {addComment, deleteComment, fetchComments} from "../../store/actions/commentsActions";
import Comment from "../../components/Comment/Comment";
import CommentForm from "../../components/CommentForm/CommentForm";

class NewsItemPage extends Component {
    componentDidMount() {
        this.props.fetchNewsItem(this.props.match.params.id)
            .then(this.props.fetchComments(this.props.match.params.id));
    }

    render() {

        if (this.props.loading) {
            return <p>loading...</p>
        }

        return (
            <Fragment>
                <NewsItem
                    {...this.props.newsItem}
                />

                <div className="comments mb-5">
                    <h3>Comments:</h3>
                    {this.props.comments.map(comment => (
                        <Comment
                            key={comment.id}
                            author={comment.author}
                            text={comment.text}
                            onDelete={() => this.props.deleteComment(comment.id)}
                        />
                    ))}
                </div>

                <CommentForm
                    newsId={this.props.match.params.id}
                    submitted={this.props.addComment}
                    fetchComments={this.props.fetchComments}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    newsItem: state.newsItem,
    comments: state.comments,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    fetchNewsItem: id => dispatch(fetchNewsItem(id)),
    fetchComments: newsId => dispatch(fetchComments(newsId)),
    addComment: comment => dispatch(addComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemPage);
