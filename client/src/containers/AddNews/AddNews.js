import React, {Component, Fragment} from 'react';
import NewsForm from "../../components/NewsForm/NewsForm";
import {addNewsItem} from "../../store/actions/newsActions";
import {connect} from "react-redux";

class AddNews extends Component {

    state = {
        title: '',
        description: '',
        image: null,
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0],
        });
    };

    submitHandler = event => {
        event.preventDefault();
        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            if (key === null) {
                formData.append(key, null)
            } else {
                formData.append(key, this.state[key]);
            }
        });

        this.props.addNewsItem(formData, this.props.history);
    };


    render() {
        return (
            <Fragment>
                <h1 className="py-3">Add new post</h1>
                <NewsForm
                    {...this.state}
                    inputChanged={this.inputChangeHandler}
                    fileChanged={this.fileChangeHandler}
                    submitted={this.submitHandler}
                />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addNewsItem: (newsItem, history) => dispatch(addNewsItem(newsItem, history)),
});

export default connect(null, mapDispatchToProps)(AddNews);
