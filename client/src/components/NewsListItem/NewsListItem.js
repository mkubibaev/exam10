import React from 'react';
import {apiURL} from "../../constants";
import {NavLink} from "react-router-dom";

const NewsListItem = props => (
    <div className="card">
        <div className="card-body d-flex justify-content-between mb-2">
            {props.image
                ? <div className="news-img">
                    <img src={`${apiURL}/uploads/${props.image}`} alt=""/>
                </div>
                : null
            }

            <div className="news-text">
                <h4>{props.title}</h4>
                <small>At {props.published_at}</small>
            </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
            <NavLink to={`/news/${props.id}`} className="btn btn-sm btn-outline-info">Readmore</NavLink>
        </div>
    </div>
);


export default NewsListItem;
