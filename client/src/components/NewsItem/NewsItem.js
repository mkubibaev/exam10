import React from 'react';

const NewsItem = props => {
    return (
        <div className="my-3">
            <h1>{props.title}</h1>
            <small className="d-block mb-3">{props.published_at}</small>
            {props.image
                ? <img src={props.image} className="news-img-lg" alt={props.title}/>
                : null
            }
            <p>{props.description}</p>
        </div>
    );
};

export default NewsItem;
