import React from 'react';

const Comment = props => {
    return (
        <div className="p-3 bg-light mb-2">
            <strong className="mr-2">{props.author}:</strong>
            <span>{props.text}</span>
            <button onClick={props.onDelete} className="btn btn-sm btn-outline-danger float-right">Delete</button>
        </div>
    );
};

export default Comment;
