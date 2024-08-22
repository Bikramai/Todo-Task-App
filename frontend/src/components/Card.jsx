import React from "react";
import {Link} from "react-router-dom";

const Card = ({id, title, date, description, status, priority}) => {
    const badgeStatusClass = status === 'completed' ? 'bg-success' : 'bg-warning';
    const badgePriorityClass = {
        low: 'bg-primary',
        medium: 'bg-info',
        high: 'bg-danger'
    }[priority] || 'bg-secondary';

    return (
        <div className="col-md-6 col-lg-4 " style={{}}>
            <div className="card card-body">
                <span className="side-stick"/>
                <h5 className="note-title text-truncate w-75 mb-0">
                    {title} <i className="point fa fa-circle ml-1 font-10"/>
                </h5>
                <p className="note-date font-12 text-muted">{new Date(date).toLocaleDateString()}</p>
                <div className="note-content">
                    <p className="note-inner-content ">
                        {description}
                    </p>
                </div>
                <div className="d-flex align-items-center">
                    <Link className="mr-1" to={`/update-todo/${id}`}>
                        <i className="fa fa-edit"/>Edit
                    </Link>&nbsp;
                    <Link className="mr-1 text-danger" to={`/delete-todo/${id}`}>
                        <i className="fa fa-trash "/> Delete
                    </Link>
                    <div className="ml-auto">
                        <div className="category-selector btn-group">
                        <span className={`badge ${badgeStatusClass} text-white`}>
                            {status}
                        </span>&nbsp;&nbsp;
                            <span className={`badge ${badgePriorityClass} text-white`}>
                    {priority}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
