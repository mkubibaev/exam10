import React from 'react';
import {apiURL} from "../../constants";
import {NavLink} from "react-router-dom";

const NewsListItem = props => (
    <div className="card mb-2">
        <div className="card-body">
            {props.image && props.image !== 'null' //сохранется строка 'null' у formData.append()
                ? <img src={`${apiURL}/uploads/${props.image}`} className="news-img-sm" alt={props.title}/>
                : null
            }

            <div className="news-text">
                <h4>{props.title}</h4>
                <small>At {props.published_at}</small>
            </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={props.onDelete}
            >
                Delete
            </button>
            <NavLink to={`/news/${props.id}`} className="btn btn-sm btn-info">Readmore</NavLink>
        </div>
    </div>
);


export default NewsListItem;
