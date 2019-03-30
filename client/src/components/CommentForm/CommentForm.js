import React, {Component} from 'react';

class CommentForm extends Component {
    state = {
        author: '',
        text: '',
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    submitHandler = event => {
        event.preventDefault();

        const comment = {...this.state};
        comment.news_id = this.props.newsId;

        this.props.submitted(comment)
            .then(this.props.fetchComments(this.props.newsId));

    };

    render() {
        return (
            <div className="comment-form">
                <h4>Add comment</h4>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"
                               className="form-control"
                               name="author"
                               value={this.props.author}
                               onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Comment:</label>
                        <textarea
                            className="form-control"
                            name="text"
                            value={this.props.text}
                            onChange={this.inputChangeHandler}
                            required
                        />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;
