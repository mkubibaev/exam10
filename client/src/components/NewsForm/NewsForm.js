import React from 'react';
import {NavLink} from "react-router-dom";

const NewsForm = props => (
    <form onSubmit={props.submitted}>
        <div className="form-group">
            <label>Title:</label>
            <input type="text"
                   className="form-control"
                   name="title"
                   value={props.title}
                   onChange={props.inputChanged}
                   required
            />
        </div>
        <div className="form-group">
            <label>Content:</label>
            <textarea
                   className="form-control"
                   name="description"
                   value={props.description}
                   onChange={props.inputChanged}
                   required
            />
        </div>
        <div className="form-group">
            <label>Image:</label>
            <input type="file"
                   name="image"
                   className="form-control-file"
                   onChange={props.fileChanged}
            />
        </div>


        <div className="text-right">
            <NavLink to="/" className="btn btn-light mr-2">Cancel</NavLink>
            <button type="submit" className="btn btn-success">Save</button>
        </div>
    </form>

);


export default NewsForm;
